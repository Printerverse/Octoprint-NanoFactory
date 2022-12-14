import re
import json

processing = False
old_marlin = False
makergear = False
old_marlin_offset = 0
repetier_firmware = False
flip_x = False
flip_y = False
mesh = []
bed = {}
bed_type = None
box = []
timeout_override = False

regex_mesh_data = re.compile(
    r"^((G33.+)|(Bed.+)|(Llit.+)|(\d+\s)|(\|\s*)|(\s*\[\s+)|(\[?\s?\+?-?\d+?\.\d+\]?\s*,?)|(\s?\.\s*)|(NAN,"
    r"?)|(nan\s?,?)|(=======\s?,?))+(\s+\],?)?$"
)
regex_bed_level_correction = re.compile(
    r"^(Mesh )?Bed Level (Correction Matrix|data):.*$"
)
regex_nans = re.compile(r"^(nan\s?,?)+$")
regex_equal_signs = re.compile(r"^(=======\s?,?)+$")
regex_mesh_data_extraction = re.compile(r"(\+?-?\d*\.\d*)")
regex_old_marlin = re.compile(r"^(Bed x:.+)|(Llit x:.+)$")
regex_makergear = re.compile(
    r"^(\s=\s\[)(\s*,?\s*\[(\s?-?\d+.\d+,?)+\])+\];?$"
)
regex_repetier = re.compile(r"^G33 X.+$")
regex_nan = re.compile(r"(nan)")
regex_catmull = re.compile(
    r"^Subdivided with CATMULL ROM Leveling Grid:.*$"
)
regex_extracted_box = re.compile(r"\(\s*(\d+),\s*(\d+)\)")
regex_eqn_coefficients = re.compile(r"^Eqn coefficients:.+$")
regex_unknown_command = re.compile(
    r"echo:Unknown command: \"@BEDLEVELVISUALIZER\""
)

ignore_correction_matrix = False
flip_x_settings = False
flip_y_settings = False
strip_first = False
use_center_origin = False
use_relative_offsets = False
rotation = 0


# Function for bed levelling
def process_gcode(comm, line, *args, **kwargs):
    global processing, old_marlin, processing, makergear, old_marlin_offset, repetier_firmware, flip_x, flip_y, mesh
    global bed, bed_type, box, timeout_override, regex_mesh_data, regex_bed_level_correction, regex_nans, regex_equal_signs
    global regex_mesh_data_extraction, regex_old_marlin, regex_makergear, regex_repetier, regex_nan, regex_catmull
    global regex_extracted_box, regex_eqn_coefficients, regex_unknown_command, ignore_correction_matrix, flip_x_settings
    global flip_y_settings, strip_first, use_center_origin, use_relative_offsets, rotation

    from . import __plugin_implementation__ as plugin

    octoprint_printer_profile = plugin._printer_profile_manager.get_current_or_default()

    try:
        if not processing:
            return line

        if ignore_correction_matrix and regex_bed_level_correction.match(line.strip()):
            line = "ok"

        if "ok" not in line:
            if regex_mesh_data.match(line.strip()):
                if regex_bed_level_correction.match(
                        line.strip()
                ) and not ignore_correction_matrix:
                    plugin._logger.info(
                        "resetting mesh to blank because of correction matrix"
                    )
                    mesh = []
                    return line
                if regex_nans.match(line.strip()):
                    plugin._logger.info(
                        "stupid smoothieware issue..."
                    )
                    line = regex_nan.sub("0.0", line)
                if regex_equal_signs.match(line.strip()):
                    plugin._logger.info(
                        "stupid equal signs...")
                    line = regex_equal_signs.sub("0.0", line)

                new_line = regex_mesh_data_extraction.findall(line)
                plugin._logger.info(new_line)

                if regex_old_marlin.match(line.strip()):
                    old_marlin = True
                    plugin._logger.info(
                        "using old marlin flag")

                if regex_repetier.match(line.strip()):
                    repetier_firmware = True
                    plugin._logger.info(
                        "using repetier flag")

                if strip_first:
                    new_line.pop(0)
                if len(new_line) > 0:
                    mesh.append(new_line)

            elif regex_catmull.match(line.strip()):
                plugin._logger.info(
                    "resetting mesh to blank because of CATMULL subdivision"
                )
                mesh = []

            elif regex_extracted_box.findall(line.strip()):
                box = regex_extracted_box.findall(line.strip())
                if len(box) == 2:
                    box += [[float(x), float(y)] for x, y in box]
                if len(box) == 2:
                    if box[0][0] > box[1][0]:
                        flip_x = True
                if len(box) == 4:
                    if box[0][1] > box[3][1]:
                        flip_y = True

            if regex_makergear.match(line) is not None:
                plugin._logger.info(
                    "using makergear format report")
                mesh = json.loads(
                    line.strip().replace("= ", "").replace(";", ""))
                old_marlin = True
                makergear = True
                plugin._logger.info(mesh)
                line = "ok"

            if old_marlin and regex_eqn_coefficients.match(line.strip()):
                old_marlin_offset = regex_eqn_coefficients.sub(
                    r"\2", line.strip()
                )
                plugin._logger.info(
                    "using old marlin offset")

            if "Home XYZ first" in line or "Invalid mesh" in line:
                reason = "data is invalid" if "Invalid" in line else "homing required"
                plugin._logger.info(
                    "stopping mesh collection because %s" % reason
                )

            if "Home XYZ first" in line:
                # _plugin_manager.send_plugin_message(
                #     _identifier, dict(error=line.strip())
                # )
                processing = False

        if ("ok" in line or (repetier_firmware and "T:" in line)) and len(
                mesh
        ) > 0:

            volume = octoprint_printer_profile["volume"]
            bed_type = volume["formFactor"]
            custom_box = volume["custom_box"]
            # see if we have a custom bounding box
            if custom_box:
                min_x = custom_box["x_min"]
                max_x = custom_box["x_max"]
                min_y = custom_box["y_min"]
                max_y = custom_box["y_max"]
                min_z = custom_box["z_min"]
                max_z = custom_box["z_max"]
            else:
                min_x = 0
                max_x = volume["width"]
                min_y = 0
                max_y = volume["depth"]
                min_z = 0
                max_z = volume["height"]
            if len(box) == 4:
                min_x = min([x for x, y in box])
                max_x = max([x for x, y in box])
                min_y = min([y for x, y in box])
                max_y = max([y for x, y in box])

            bed = dict(
                type=bed_type,
                x_min=min_x,
                x_max=max_x,
                y_min=min_y,
                y_max=max_y,
                z_min=min_z,
                z_max=max_z,
            )
            plugin._logger.info(bed)

            if old_marlin or repetier_firmware:
                # print_mesh_debug("initial mesh data: ", mesh)
                if makergear:
                    a = mesh
                else:
                    # rearrange matrix from point lists to coordinate lists
                    a = list(zip(*mesh))
                    # print_mesh_debug("mesh after swapaxes: ", a)

                # filter coordinate values
                # print_mesh_debug("a = ", a)
                x = unique_floats(a[0])
                # print_mesh_debug("x = ", x)
                y = unique_floats(a[1])
                # print_mesh_debug("y = ", y)
                rows, cols, vals = (len(y), len(x), len(list(a[2])))
                z = [[0 for i in range(cols)]
                     for j in range(rows)]  # init empty matrix
                k = 0
                # filling array
                for i in range(rows):
                    for j in range(cols):
                        z[i][j] = a[2][k]
                        k += 1
                # print_mesh_debug("z = ", z)

                # dealing with offset
                offset = 0
                if old_marlin:
                    offset = old_marlin_offset
                plugin._logger.info(
                    "mesh offset = " + str(offset))
                mesh = list(
                    map(lambda y: list(map(lambda x: round(float(x) - offset, 4), y)), z))
                # print_mesh_debug("mesh after offset: ", mesh)

            plugin._logger.info("stopping mesh collection")

            if bool(flip_x) != flip_x_settings:
                mesh = list(map(lambda x: list(reversed(x)), mesh))
                # print_mesh_debug("flipped x axis: ", mesh)

            if bool(flip_y) != flip_y_settings:
                mesh.reverse()
                # print_mesh_debug("flipped y axis: ", mesh)

            if use_relative_offsets:
                plugin._logger.info("using relative offsets")
                # shifting mesh down by origin point height
                if octoprint_printer_profile["volume"]["origin"] == "center":
                    plugin._logger.info(
                        "using center origin")
                    # finding origin point in center
                    offset = mesh[len(mesh[0]) //
                                  2][len(mesh) // 2]
                    mesh = list(
                        map(lambda y: list(map(lambda x: round(float(x) - float(offset), 4), y)), mesh))
                else:
                    offset = mesh[0][0]
                    mesh = list(
                        map(lambda y: list(map(lambda x: round(float(x) - float(offset), 4), y)), mesh))

            if int(rotation) > 0:
                plugin._logger.info(
                    "rotating mesh by %s degrees" % rotation)

                for i in range(int(rotation / 90)):
                    mesh = list(zip(*mesh))[::-1]

            if bed_type == "circular":
                y = len(mesh)
                x = len(mesh[0])
                circle_mask = create_circular_mask(y, x)
                for i in range(y):
                    for j in range(x):
                        if not circle_mask[i][j]:
                            mesh[i][j] = None

            processing = False

            plugin.save_bed_levelling_data(mesh)

        return line
    except Exception as e:
        print(f"Warning from bedlevelling: {e}")


def create_circular_mask(y, x):
    center = y/2-0.5, x/2-0.5
    radius = min(center[0], center[1], y - center[0], x - center[1])

    # init emply matrix
    mask = [[False for j in range(x)]
            for i in range(y)]
    # creating rough circular mask with wiggle room to surely include all points
    for i in range(y):
        for j in range(x):
            mask[i][j] = abs((i-center[0])**2 + (j-center[1])
                             ** 2) - radius**2 < 1.5**2

    # self.print_mesh_debug("mask:", mask)
    return mask

    # find all unique values in a list


def unique_floats(list1):
    s_list = set(list1)
    u_list = (list(s_list))
    return list(map(float, u_list))
