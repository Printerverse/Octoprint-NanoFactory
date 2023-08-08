var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja;
var _0x780a7e = _0x3001;
(function(_0x2e196b, _0x57142a) {
  var _0x1e23c8 = _0x3001, _0x4234f1 = _0x2e196b();
  while (!![]) {
    try {
      var _0x56d58d = -parseInt(_0x1e23c8(522)) / 1 + parseInt(_0x1e23c8(884)) / 2 + -parseInt(_0x1e23c8(925)) / 3 + parseInt(_0x1e23c8(1445)) / 4 + -parseInt(_0x1e23c8(850)) / 5 + -parseInt(_0x1e23c8(2154)) / 6 + -parseInt(_0x1e23c8(1346)) / 7 * (-parseInt(_0x1e23c8(2107)) / 8);
      if (_0x56d58d === _0x57142a)
        break;
      else
        _0x4234f1["push"](_0x4234f1["shift"]());
    } catch (_0x199d78) {
      _0x4234f1["push"](_0x4234f1["shift"]());
    }
  }
})(_0x495d, 149768), function polyfill() {
  var _0x4c545b = _0x3001;
  const _0x4abad3 = document[_0x4c545b(1383)]("link")["relList"];
  if (_0x4abad3 && _0x4abad3[_0x4c545b(1589)] && _0x4abad3["supports"](_0x4c545b(1937)))
    return;
  for (const _0x118bb8 of document["querySelectorAll"](_0x4c545b(1672))) {
    _0x22be5b(_0x118bb8);
  }
  new MutationObserver((_0x2318f4) => {
    var _0x5a5d34 = _0x4c545b;
    for (const _0x53f276 of _0x2318f4) {
      if (_0x53f276[_0x5a5d34(1514)] !== _0x5a5d34(495))
        continue;
      for (const _0x8ae107 of _0x53f276[_0x5a5d34(666)]) {
        if (_0x8ae107[_0x5a5d34(1554)] === _0x5a5d34(1024) && _0x8ae107[_0x5a5d34(1944)] === _0x5a5d34(1937))
          _0x22be5b(_0x8ae107);
      }
    }
  })["observe"](document, { "childList": !![], "subtree": !![] });
  function _0x4ced94(_0x57f048) {
    var _0x1ead8c = _0x4c545b;
    const _0x541c33 = {};
    if (_0x57f048[_0x1ead8c(886)])
      _0x541c33[_0x1ead8c(886)] = _0x57f048[_0x1ead8c(886)];
    if (_0x57f048[_0x1ead8c(1436)])
      _0x541c33[_0x1ead8c(1959)] = _0x57f048["referrerpolicy"];
    if (_0x57f048[_0x1ead8c(1826)] === "use-credentials")
      _0x541c33[_0x1ead8c(1715)] = _0x1ead8c(668);
    else {
      if (_0x57f048[_0x1ead8c(1826)] === _0x1ead8c(452))
        _0x541c33[_0x1ead8c(1715)] = _0x1ead8c(803);
      else
        _0x541c33["credentials"] = "same-origin";
    }
    return _0x541c33;
  }
  function _0x22be5b(_0x59e8f7) {
    var _0x519f79 = _0x4c545b;
    if (_0x59e8f7["ep"])
      return;
    _0x59e8f7["ep"] = !![];
    const _0x5485a2 = _0x4ced94(_0x59e8f7);
    fetch(_0x59e8f7[_0x519f79(1489)], _0x5485a2);
  }
}();
var ConnectionLabels = ((_0x348e68) => {
  var _0x2f288d = _0x3001;
  return _0x348e68[_0x348e68[_0x2f288d(1463)] = 1] = _0x2f288d(1463), _0x348e68[_0x348e68[_0x2f288d(923)] = 2] = _0x2f288d(923), _0x348e68[_0x348e68[_0x2f288d(843)] = 3] = "profileChanged", _0x348e68[_0x348e68[_0x2f288d(1790)] = 4] = "positionChangedResponse", _0x348e68[_0x348e68[_0x2f288d(395)] = 53] = _0x2f288d(395), _0x348e68[_0x348e68[_0x2f288d(2086)] = 5] = _0x2f288d(2086), _0x348e68[_0x348e68[_0x2f288d(692)] = 34] = _0x2f288d(692), _0x348e68[_0x348e68[_0x2f288d(1473)] = 44] = _0x2f288d(1473), _0x348e68[_0x348e68["temperatureStreamRequest"] = 6] = _0x2f288d(516), _0x348e68[_0x348e68[_0x2f288d(1074)] = 35] = _0x2f288d(1074), _0x348e68[_0x348e68[_0x2f288d(429)] = 7] = _0x2f288d(429), _0x348e68[_0x348e68[_0x2f288d(746)] = 8] = "bedLevelingResponse", _0x348e68[_0x348e68[_0x2f288d(1447)] = 9] = _0x2f288d(1447), _0x348e68[_0x348e68[_0x2f288d(422)] = 10] = _0x2f288d(422), _0x348e68[_0x348e68[_0x2f288d(2050)] = 58] = _0x2f288d(2050), _0x348e68[_0x348e68[_0x2f288d(1835)] = 11] = _0x2f288d(1835), _0x348e68[_0x348e68[_0x2f288d(1119)] = 12] = _0x2f288d(1119), _0x348e68[_0x348e68[_0x2f288d(1164)] = 40] = _0x2f288d(1164), _0x348e68[_0x348e68[_0x2f288d(1823)] = 52] = _0x2f288d(1823), _0x348e68[_0x348e68[_0x2f288d(1439)] = 13] = _0x2f288d(1439), _0x348e68[_0x348e68[_0x2f288d(464)] = 41] = _0x2f288d(464), _0x348e68[_0x348e68["jobDone"] = 14] = "jobDone", _0x348e68[_0x348e68[_0x2f288d(2040)] = 15] = _0x2f288d(2040), _0x348e68[_0x348e68["jobFailed"] = 16] = _0x2f288d(1289), _0x348e68[_0x348e68[_0x2f288d(447)] = 17] = _0x2f288d(447), _0x348e68[_0x348e68[_0x2f288d(650)] = 25] = _0x2f288d(650), _0x348e68[_0x348e68[_0x2f288d(1073)] = 26] = _0x2f288d(1073), _0x348e68[_0x348e68["jobPrinting"] = 37] = _0x2f288d(1217), _0x348e68[_0x348e68[_0x2f288d(397)] = 30] = _0x2f288d(397), _0x348e68[_0x348e68[_0x2f288d(680)] = 49] = _0x2f288d(680), _0x348e68[_0x348e68[_0x2f288d(559)] = 51] = "currentJobUpdatesRequest", _0x348e68[_0x348e68["jobRankChange"] = 18] = "jobRankChange", _0x348e68[_0x348e68[_0x2f288d(1732)] = 19] = "actionCreated", _0x348e68[_0x348e68["actionModified"] = 20] = _0x2f288d(1015), _0x348e68[_0x348e68[_0x2f288d(933)] = 21] = _0x2f288d(933), _0x348e68[_0x348e68["actionDeleted"] = 22] = _0x2f288d(2035), _0x348e68[_0x348e68[_0x2f288d(859)] = 23] = _0x2f288d(859), _0x348e68[_0x348e68["emergencyStop"] = 24] = "emergencyStop", _0x348e68[_0x348e68["connectPrinter"] = 27] = "connectPrinter", _0x348e68[_0x348e68["disconnectPrinter"] = 28] = _0x2f288d(1982), _0x348e68[_0x348e68[_0x2f288d(1064)] = 38] = "connectionOptionsChanged", _0x348e68[_0x348e68[_0x2f288d(1264)] = 39] = _0x2f288d(1264), _0x348e68[_0x348e68[_0x2f288d(1140)] = 45] = "refreshConnectionOptions", _0x348e68[_0x348e68[_0x2f288d(1983)] = 46] = _0x2f288d(1983), _0x348e68[_0x348e68[_0x2f288d(770)] = 47] = _0x2f288d(770), _0x348e68[_0x348e68[_0x2f288d(985)] = 48] = _0x2f288d(985), _0x348e68[_0x348e68[_0x2f288d(505)] = 50] = _0x2f288d(505), _0x348e68[_0x348e68["handshakeResponse"] = 31] = "handshakeResponse", _0x348e68[_0x348e68["handshakeResponseConfirmation"] = 54] = _0x2f288d(1845), _0x348e68[_0x348e68[_0x2f288d(1863)] = 29] = "queuePaused", _0x348e68[_0x348e68["home"] = 59] = "home", _0x348e68[_0x348e68[_0x2f288d(502)] = 32] = _0x2f288d(502), _0x348e68[_0x348e68[_0x2f288d(738)] = 33] = _0x2f288d(738), _0x348e68[_0x348e68[_0x2f288d(1004)] = 36] = "peerListModification", _0x348e68[_0x348e68[_0x2f288d(1112)] = 60] = "peerSyncRequest", _0x348e68[_0x348e68[_0x2f288d(480)] = 61] = _0x2f288d(480), _0x348e68[_0x348e68[_0x2f288d(1415)] = 68] = "peerSyncUpdates", _0x348e68[_0x348e68[_0x2f288d(558)] = 62] = _0x2f288d(558), _0x348e68[_0x348e68[_0x2f288d(701)] = 63] = _0x2f288d(701), _0x348e68[_0x348e68["peerIDChange"] = 64] = _0x2f288d(2072), _0x348e68[_0x348e68[_0x2f288d(1154)] = 65] = _0x2f288d(1154), _0x348e68[_0x348e68[_0x2f288d(590)] = 66] = _0x2f288d(590), _0x348e68[_0x348e68[_0x2f288d(1729)] = 67] = _0x2f288d(1729), _0x348e68[_0x348e68[_0x2f288d(2143)] = 69] = _0x2f288d(2143), _0x348e68[_0x348e68[_0x2f288d(954)] = 42] = "heartbeat", _0x348e68[_0x348e68[_0x2f288d(1571)] = 43] = _0x2f288d(1571), _0x348e68[_0x348e68[_0x2f288d(1941)] = 55] = _0x2f288d(1941), _0x348e68[_0x348e68[_0x2f288d(412)] = 56] = _0x2f288d(412), _0x348e68[_0x348e68[_0x2f288d(1866)] = 57] = _0x2f288d(1866), _0x348e68[_0x348e68[_0x2f288d(2012)] = 70] = _0x2f288d(2012), _0x348e68[_0x348e68[_0x2f288d(1208)] = 71] = _0x2f288d(1208), _0x348e68[_0x348e68[_0x2f288d(1474)] = 72] = _0x2f288d(1474), _0x348e68[_0x348e68[_0x2f288d(677)] = 73] = _0x2f288d(677), _0x348e68[_0x348e68["googleShoppingProductInfoResponse"] = 74] = _0x2f288d(1520), _0x348e68[_0x348e68[_0x2f288d(2199)] = 75] = "googleShoppingProductOrder", _0x348e68[_0x348e68["moveJobToJobsToSync"] = 76] = _0x2f288d(1461), _0x348e68[_0x348e68[_0x2f288d(2064)] = 80] = _0x2f288d(2064), _0x348e68;
})(ConnectionLabels || {}), __assign = function() {
  var _0x3ca3c1 = _0x3001;
  return __assign = Object[_0x3ca3c1(1153)] || function _0x107b22(_0x578b58) {
    var _0x403178 = _0x3ca3c1;
    for (var _0x1b43c4, _0x287dec = 1, _0x4ca371 = arguments[_0x403178(1965)]; _0x287dec < _0x4ca371; _0x287dec++) {
      _0x1b43c4 = arguments[_0x287dec];
      for (var _0x208fef in _0x1b43c4)
        if (Object[_0x403178(1897)][_0x403178(1309)][_0x403178(1206)](_0x1b43c4, _0x208fef))
          _0x578b58[_0x208fef] = _0x1b43c4[_0x208fef];
    }
    return _0x578b58;
  }, __assign["apply"](this, arguments);
};
function __spreadArray(_0x247b1a, _0x1886dd, _0x4ac660) {
  var _0x2267b8 = _0x3001;
  if (_0x4ac660 || arguments[_0x2267b8(1965)] === 2)
    for (var _0x29b0fd = 0, _0x534e3d = _0x1886dd[_0x2267b8(1965)], _0x252a73; _0x29b0fd < _0x534e3d; _0x29b0fd++) {
      if (_0x252a73 || !(_0x29b0fd in _0x1886dd)) {
        if (!_0x252a73)
          _0x252a73 = Array[_0x2267b8(1897)][_0x2267b8(1215)][_0x2267b8(1206)](_0x1886dd, 0, _0x29b0fd);
        _0x252a73[_0x29b0fd] = _0x1886dd[_0x29b0fd];
      }
    }
  return _0x247b1a[_0x2267b8(2090)](_0x252a73 || Array["prototype"][_0x2267b8(1215)][_0x2267b8(1206)](_0x1886dd));
}
var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== _0x780a7e(437) ? window : global, keys = Object[_0x780a7e(605)], isArray = Array[_0x780a7e(1920)];
typeof Promise !== _0x780a7e(437) && !_global[_0x780a7e(1047)] && (_global["Promise"] = Promise);
function extend(_0x16f1e3, _0x574579) {
  var _0x40755b = _0x780a7e;
  if (typeof _0x574579 !== _0x40755b(1723))
    return _0x16f1e3;
  return keys(_0x574579)[_0x40755b(839)](function(_0x1b00ab) {
    _0x16f1e3[_0x1b00ab] = _0x574579[_0x1b00ab];
  }), _0x16f1e3;
}
var getProto = Object[_0x780a7e(1435)], _hasOwn = {}["hasOwnProperty"];
function hasOwn(_0x54395b, _0x296a03) {
  var _0x1ddcda = _0x780a7e;
  return _hasOwn[_0x1ddcda(1206)](_0x54395b, _0x296a03);
}
function props(_0x5df267, _0x408207) {
  var _0x7c2691 = _0x780a7e;
  if (typeof _0x408207 === _0x7c2691(389))
    _0x408207 = _0x408207(getProto(_0x5df267));
  (typeof Reflect === _0x7c2691(437) ? keys : Reflect[_0x7c2691(1078)])(_0x408207)[_0x7c2691(839)](function(_0x5d8cbb) {
    setProp(_0x5df267, _0x5d8cbb, _0x408207[_0x5d8cbb]);
  });
}
var defineProperty = Object[_0x780a7e(1564)];
function setProp(_0x46daf0, _0x1bc418, _0x1d7dba, _0x48b9e3) {
  var _0x524e6c = _0x780a7e;
  defineProperty(_0x46daf0, _0x1bc418, extend(_0x1d7dba && hasOwn(_0x1d7dba, _0x524e6c(1892)) && typeof _0x1d7dba[_0x524e6c(1892)] === _0x524e6c(389) ? { "get": _0x1d7dba[_0x524e6c(1892)], "set": _0x1d7dba["set"], "configurable": !![] } : { "value": _0x1d7dba, "configurable": !![], "writable": !![] }, _0x48b9e3));
}
function derive(_0x3c61e0) {
  return { "from": function(_0x78fc6c) {
    var _0x496dbd = _0x3001;
    return _0x3c61e0[_0x496dbd(1897)] = Object[_0x496dbd(1409)](_0x78fc6c[_0x496dbd(1897)]), setProp(_0x3c61e0[_0x496dbd(1897)], _0x496dbd(1893), _0x3c61e0), { "extend": props[_0x496dbd(517)](null, _0x3c61e0["prototype"]) };
  } };
}
var getOwnPropertyDescriptor = Object[_0x780a7e(1954)];
function getPropertyDescriptor(_0x123963, _0x1920fd) {
  var _0x150994 = getOwnPropertyDescriptor(_0x123963, _0x1920fd), _0x1f004f;
  return _0x150994 || (_0x1f004f = getProto(_0x123963)) && getPropertyDescriptor(_0x1f004f, _0x1920fd);
}
var _slice = [][_0x780a7e(1215)];
function slice(_0x427181, _0x4d8476, _0x37a4cd) {
  var _0x52b8b9 = _0x780a7e;
  return _slice[_0x52b8b9(1206)](_0x427181, _0x4d8476, _0x37a4cd);
}
function override(_0x24cee8, _0x3bd5ac) {
  return _0x3bd5ac(_0x24cee8);
}
function assert(_0x1b8407) {
  if (!_0x1b8407)
    throw new Error("Assertion Failed");
}
function asap$1(_0x1d98f5) {
  if (_global["setImmediate"])
    setImmediate(_0x1d98f5);
  else
    setTimeout(_0x1d98f5, 0);
}
function arrayToObject(_0x2aa9f2, _0xf33cf1) {
  var _0x36aaae = _0x780a7e;
  return _0x2aa9f2[_0x36aaae(690)](function(_0x1dcd58, _0x51aa09, _0x440bc0) {
    var _0x256eb9 = _0xf33cf1(_0x51aa09, _0x440bc0);
    if (_0x256eb9)
      _0x1dcd58[_0x256eb9[0]] = _0x256eb9[1];
    return _0x1dcd58;
  }, {});
}
function tryCatch(_0x3060ad, _0x53556d, _0x22e708) {
  var _0x35b5d3 = _0x780a7e;
  try {
    _0x3060ad[_0x35b5d3(2150)](null, _0x22e708);
  } catch (_0x3f7a75) {
    _0x53556d && _0x53556d(_0x3f7a75);
  }
}
function getByKeyPath(_0x354f0e, _0x523638) {
  var _0x510d6c = _0x780a7e;
  if (hasOwn(_0x354f0e, _0x523638))
    return _0x354f0e[_0x523638];
  if (!_0x523638)
    return _0x354f0e;
  if (typeof _0x523638 !== _0x510d6c(1548)) {
    var _0x1aa365 = [];
    for (var _0x44d490 = 0, _0x3fabee = _0x523638[_0x510d6c(1965)]; _0x44d490 < _0x3fabee; ++_0x44d490) {
      var _0x7b0613 = getByKeyPath(_0x354f0e, _0x523638[_0x44d490]);
      _0x1aa365[_0x510d6c(1991)](_0x7b0613);
    }
    return _0x1aa365;
  }
  var _0x93ae73 = _0x523638[_0x510d6c(1879)](".");
  if (_0x93ae73 !== -1) {
    var _0x392f6 = _0x354f0e[_0x523638[_0x510d6c(398)](0, _0x93ae73)];
    return _0x392f6 === void 0 ? void 0 : getByKeyPath(_0x392f6, _0x523638[_0x510d6c(398)](_0x93ae73 + 1));
  }
  return void 0;
}
function setByKeyPath(_0x28827c, _0x3d127c, _0x2d8347) {
  var _0x259c31 = _0x780a7e;
  if (!_0x28827c || _0x3d127c === void 0)
    return;
  if (_0x259c31(1472) in Object && Object[_0x259c31(1472)](_0x28827c))
    return;
  if (typeof _0x3d127c !== "string" && _0x259c31(1965) in _0x3d127c) {
    assert(typeof _0x2d8347 !== _0x259c31(1548) && "length" in _0x2d8347);
    for (var _0x39731b = 0, _0x41f78d = _0x3d127c[_0x259c31(1965)]; _0x39731b < _0x41f78d; ++_0x39731b) {
      setByKeyPath(_0x28827c, _0x3d127c[_0x39731b], _0x2d8347[_0x39731b]);
    }
  } else {
    var _0x38c993 = _0x3d127c["indexOf"](".");
    if (_0x38c993 !== -1) {
      var _0xb89773 = _0x3d127c[_0x259c31(398)](0, _0x38c993), _0x496e59 = _0x3d127c["substr"](_0x38c993 + 1);
      if (_0x496e59 === "") {
        if (_0x2d8347 === void 0) {
          if (isArray(_0x28827c) && !isNaN(parseInt(_0xb89773)))
            _0x28827c["splice"](_0xb89773, 1);
          else
            delete _0x28827c[_0xb89773];
        } else
          _0x28827c[_0xb89773] = _0x2d8347;
      } else {
        var _0x3f158c = _0x28827c[_0xb89773];
        if (!_0x3f158c || !hasOwn(_0x28827c, _0xb89773))
          _0x3f158c = _0x28827c[_0xb89773] = {};
        setByKeyPath(_0x3f158c, _0x496e59, _0x2d8347);
      }
    } else {
      if (_0x2d8347 === void 0) {
        if (isArray(_0x28827c) && !isNaN(parseInt(_0x3d127c)))
          _0x28827c[_0x259c31(1314)](_0x3d127c, 1);
        else
          delete _0x28827c[_0x3d127c];
      } else
        _0x28827c[_0x3d127c] = _0x2d8347;
    }
  }
}
function delByKeyPath(_0x641c22, _0x522872) {
  var _0x40b284 = _0x780a7e;
  if (typeof _0x522872 === _0x40b284(1548))
    setByKeyPath(_0x641c22, _0x522872, void 0);
  else {
    if ("length" in _0x522872)
      [][_0x40b284(376)][_0x40b284(1206)](_0x522872, function(_0x146674) {
        setByKeyPath(_0x641c22, _0x146674, void 0);
      });
  }
}
function shallowClone(_0x113abe) {
  var _0x4de211 = {};
  for (var _0x35107d in _0x113abe) {
    if (hasOwn(_0x113abe, _0x35107d))
      _0x4de211[_0x35107d] = _0x113abe[_0x35107d];
  }
  return _0x4de211;
}
var concat = [][_0x780a7e(2090)];
function flatten(_0x1c32f9) {
  return concat["apply"]([], _0x1c32f9);
}
var intrinsicTypeNames = _0x780a7e(644)[_0x780a7e(1201)](",")[_0x780a7e(2090)](flatten([8, 16, 32, 64][_0x780a7e(376)](function(_0xfa45af) {
  var _0x1bc052 = _0x780a7e;
  return [_0x1bc052(1387), "Uint", _0x1bc052(2196)][_0x1bc052(376)](function(_0xb0656b) {
    var _0x5576d3 = _0x1bc052;
    return _0xb0656b + _0xfa45af + _0x5576d3(1526);
  });
})))[_0x780a7e(805)](function(_0x5c2c36) {
  return _global[_0x5c2c36];
}), intrinsicTypes = intrinsicTypeNames[_0x780a7e(376)](function(_0x205f11) {
  return _global[_0x205f11];
});
arrayToObject(intrinsicTypeNames, function(_0x5039e1) {
  return [_0x5039e1, !![]];
});
var circularRefs = null;
function deepClone(_0x55e441) {
  var _0x4bbc79 = _0x780a7e;
  circularRefs = typeof WeakMap !== _0x4bbc79(437) && /* @__PURE__ */ new WeakMap();
  var _0x1364f4 = innerDeepClone(_0x55e441);
  return circularRefs = null, _0x1364f4;
}
function innerDeepClone(_0x1d3f02) {
  var _0x18fa43 = _0x780a7e;
  if (!_0x1d3f02 || typeof _0x1d3f02 !== "object")
    return _0x1d3f02;
  var _0x3b01b5 = circularRefs && circularRefs[_0x18fa43(1892)](_0x1d3f02);
  if (_0x3b01b5)
    return _0x3b01b5;
  if (isArray(_0x1d3f02)) {
    _0x3b01b5 = [], circularRefs && circularRefs["set"](_0x1d3f02, _0x3b01b5);
    for (var _0x2a9953 = 0, _0x29d888 = _0x1d3f02["length"]; _0x2a9953 < _0x29d888; ++_0x2a9953) {
      _0x3b01b5[_0x18fa43(1991)](innerDeepClone(_0x1d3f02[_0x2a9953]));
    }
  } else {
    if (intrinsicTypes[_0x18fa43(1879)](_0x1d3f02[_0x18fa43(1893)]) >= 0)
      _0x3b01b5 = _0x1d3f02;
    else {
      var _0x5261f7 = getProto(_0x1d3f02);
      _0x3b01b5 = _0x5261f7 === Object[_0x18fa43(1897)] ? {} : Object[_0x18fa43(1409)](_0x5261f7), circularRefs && circularRefs["set"](_0x1d3f02, _0x3b01b5);
      for (var _0x416c4c in _0x1d3f02) {
        hasOwn(_0x1d3f02, _0x416c4c) && (_0x3b01b5[_0x416c4c] = innerDeepClone(_0x1d3f02[_0x416c4c]));
      }
    }
  }
  return _0x3b01b5;
}
var toString = {}["toString"];
function toStringTag(_0x1e4f7c) {
  var _0x1a2607 = _0x780a7e;
  return toString[_0x1a2607(1206)](_0x1e4f7c)[_0x1a2607(1215)](8, -1);
}
var iteratorSymbol = typeof Symbol !== _0x780a7e(437) ? Symbol["iterator"] : _0x780a7e(2088), getIteratorOf = typeof iteratorSymbol === _0x780a7e(1913) ? function(_0x1af863) {
  var _0x76aeda = _0x780a7e, _0x56ef90;
  return _0x1af863 != null && (_0x56ef90 = _0x1af863[iteratorSymbol]) && _0x56ef90[_0x76aeda(2150)](_0x1af863);
} : function() {
  return null;
}, NO_CHAR_ARRAY = {};
function getArrayOf(_0x18f935) {
  var _0x36bbd7 = _0x780a7e, _0x445035, _0x3ffe85, _0x592afe, _0x4a8c20;
  if (arguments["length"] === 1) {
    if (isArray(_0x18f935))
      return _0x18f935[_0x36bbd7(1215)]();
    if (this === NO_CHAR_ARRAY && typeof _0x18f935 === "string")
      return [_0x18f935];
    if (_0x4a8c20 = getIteratorOf(_0x18f935)) {
      _0x3ffe85 = [];
      while (_0x592afe = _0x4a8c20["next"](), !_0x592afe[_0x36bbd7(1353)])
        _0x3ffe85[_0x36bbd7(1991)](_0x592afe[_0x36bbd7(819)]);
      return _0x3ffe85;
    }
    if (_0x18f935 == null)
      return [_0x18f935];
    _0x445035 = _0x18f935[_0x36bbd7(1965)];
    if (typeof _0x445035 === _0x36bbd7(2203)) {
      _0x3ffe85 = new Array(_0x445035);
      while (_0x445035--)
        _0x3ffe85[_0x445035] = _0x18f935[_0x445035];
      return _0x3ffe85;
    }
    return [_0x18f935];
  }
  _0x445035 = arguments["length"], _0x3ffe85 = new Array(_0x445035);
  while (_0x445035--)
    _0x3ffe85[_0x445035] = arguments[_0x445035];
  return _0x3ffe85;
}
var isAsyncFunction = typeof Symbol !== "undefined" ? function(_0x1deec0) {
  var _0x2c8275 = _0x780a7e;
  return _0x1deec0[Symbol["toStringTag"]] === _0x2c8275(671);
} : function() {
  return ![];
}, debug = typeof location !== _0x780a7e(437) && /^(http|https):\/\/(localhost|127\.0\.0\.1)/[_0x780a7e(1778)](location[_0x780a7e(1489)]);
function setDebug(_0xaa3bdb, _0x5a5ac4) {
  debug = _0xaa3bdb, libraryFilter = _0x5a5ac4;
}
var libraryFilter = function() {
  return !![];
}, NEEDS_THROW_FOR_STACK = !new Error("")["stack"];
function getErrorWithStack() {
  var _0x5d3c3d = _0x780a7e;
  if (NEEDS_THROW_FOR_STACK)
    try {
      getErrorWithStack[_0x5d3c3d(2111)];
      throw new Error();
    } catch (_0x17ad07) {
      return _0x17ad07;
    }
  return new Error();
}
function prettyStack(_0x3ab15b, _0x914ba5) {
  var _0x1cce0f = _0x780a7e, _0xc00823 = _0x3ab15b["stack"];
  if (!_0xc00823)
    return "";
  _0x914ba5 = _0x914ba5 || 0;
  if (_0xc00823[_0x1cce0f(1879)](_0x3ab15b[_0x1cce0f(765)]) === 0)
    _0x914ba5 += (_0x3ab15b["name"] + _0x3ab15b["message"])[_0x1cce0f(1201)]("\n")[_0x1cce0f(1965)];
  return _0xc00823[_0x1cce0f(1201)]("\n")[_0x1cce0f(1215)](_0x914ba5)["filter"](libraryFilter)[_0x1cce0f(376)](function(_0x4b4a57) {
    return "\n" + _0x4b4a57;
  })[_0x1cce0f(2180)]("");
}
var dexieErrorNames = [_0x780a7e(960), _0x780a7e(1909), "OpenFailed", _0x780a7e(1591), "Schema", _0x780a7e(1928), _0x780a7e(598), _0x780a7e(555), _0x780a7e(488), "InvalidArgument", _0x780a7e(1680), "Unsupported", "Internal", "DatabaseClosed", _0x780a7e(581), _0x780a7e(473)], idbDomErrorNames = [_0x780a7e(731), _0x780a7e(1081), "Data", "TransactionInactive", _0x780a7e(1707), _0x780a7e(2042), _0x780a7e(1625), _0x780a7e(378), _0x780a7e(1887), _0x780a7e(855), _0x780a7e(457), _0x780a7e(1213), "Syntax", _0x780a7e(1760)], errorList = dexieErrorNames[_0x780a7e(2090)](idbDomErrorNames), defaultTexts = { "VersionChanged": _0x780a7e(997), "DatabaseClosed": _0x780a7e(1735), "Abort": "Transaction aborted", "TransactionInactive": _0x780a7e(1141), "MissingAPI": _0x780a7e(1798) };
function DexieError(_0x5ad5eb, _0x45b8d7) {
  var _0x37fa3e = _0x780a7e;
  this["_e"] = getErrorWithStack(), this[_0x37fa3e(765)] = _0x5ad5eb, this[_0x37fa3e(510)] = _0x45b8d7;
}
derive(DexieError)["from"](Error)[_0x780a7e(737)]({ "stack": { "get": function() {
  var _0x401227 = _0x780a7e;
  return this[_0x401227(343)] || (this[_0x401227(343)] = this["name"] + ": " + this[_0x401227(510)] + prettyStack(this["_e"], 2));
} }, "toString": function() {
  var _0x13127a = _0x780a7e;
  return this[_0x13127a(765)] + ": " + this[_0x13127a(510)];
} });
function getMultiErrorMessage(_0x3dd76f, _0x450da1) {
  var _0x4e4a3e = _0x780a7e;
  return _0x3dd76f + _0x4e4a3e(1280) + Object[_0x4e4a3e(605)](_0x450da1)[_0x4e4a3e(376)](function(_0x14012f) {
    var _0xcdc441 = _0x4e4a3e;
    return _0x450da1[_0x14012f][_0xcdc441(2073)]();
  })["filter"](function(_0x968f26, _0x56a8a2, _0x431b68) {
    return _0x431b68["indexOf"](_0x968f26) === _0x56a8a2;
  })[_0x4e4a3e(2180)]("\n");
}
function ModifyError(_0x113f34, _0x3972b8, _0x3be17f, _0x29c144) {
  var _0x1826f0 = _0x780a7e;
  this["_e"] = getErrorWithStack(), this[_0x1826f0(1881)] = _0x3972b8, this[_0x1826f0(1316)] = _0x29c144, this[_0x1826f0(418)] = _0x3be17f, this[_0x1826f0(510)] = getMultiErrorMessage(_0x113f34, _0x3972b8);
}
derive(ModifyError)["from"](DexieError);
function BulkError(_0x4ad358, _0x76950) {
  var _0xa20e75 = _0x780a7e;
  this["_e"] = getErrorWithStack(), this["name"] = _0xa20e75(1106), this[_0xa20e75(1881)] = Object["keys"](_0x76950)["map"](function(_0x1a011a) {
    return _0x76950[_0x1a011a];
  }), this["failuresByPos"] = _0x76950, this["message"] = getMultiErrorMessage(_0x4ad358, _0x76950);
}
derive(BulkError)[_0x780a7e(1356)](DexieError);
var errnames = errorList[_0x780a7e(690)](function(_0x163e57, _0x58c4c0) {
  var _0x161d96 = _0x780a7e;
  return _0x163e57[_0x58c4c0] = _0x58c4c0 + _0x161d96(462), _0x163e57;
}, {}), BaseException = DexieError, exceptions = errorList[_0x780a7e(690)](function(_0x38eabd, _0x50a6fb) {
  var _0x350c3f = _0x780a7e, _0x4e3547 = _0x50a6fb + _0x350c3f(462);
  function _0x2441bc(_0x544f0d, _0x4a8489) {
    var _0x4a4ddf = _0x350c3f;
    this["_e"] = getErrorWithStack(), this[_0x4a4ddf(765)] = _0x4e3547;
    if (!_0x544f0d)
      this[_0x4a4ddf(510)] = defaultTexts[_0x50a6fb] || _0x4e3547, this[_0x4a4ddf(2076)] = null;
    else {
      if (typeof _0x544f0d === _0x4a4ddf(1548))
        this["message"] = "" + _0x544f0d + (!_0x4a8489 ? "" : "\n " + _0x4a8489), this["inner"] = _0x4a8489 || null;
      else
        typeof _0x544f0d === _0x4a4ddf(1723) && (this[_0x4a4ddf(510)] = _0x544f0d[_0x4a4ddf(765)] + " " + _0x544f0d[_0x4a4ddf(510)], this[_0x4a4ddf(2076)] = _0x544f0d);
    }
  }
  return derive(_0x2441bc)[_0x350c3f(1356)](BaseException), _0x38eabd[_0x50a6fb] = _0x2441bc, _0x38eabd;
}, {});
exceptions[_0x780a7e(1429)] = SyntaxError, exceptions[_0x780a7e(813)] = TypeError, exceptions[_0x780a7e(1377)] = RangeError;
var exceptionMap = idbDomErrorNames[_0x780a7e(690)](function(_0x45fa42, _0x1ec61b) {
  return _0x45fa42[_0x1ec61b + "Error"] = exceptions[_0x1ec61b], _0x45fa42;
}, {});
function mapError(_0x375dc7, _0x2af1b4) {
  var _0x5036de = _0x780a7e;
  if (!_0x375dc7 || _0x375dc7 instanceof DexieError || _0x375dc7 instanceof TypeError || _0x375dc7 instanceof SyntaxError || !_0x375dc7[_0x5036de(765)] || !exceptionMap[_0x375dc7[_0x5036de(765)]])
    return _0x375dc7;
  var _0x16eec0 = new exceptionMap[_0x375dc7[_0x5036de(765)]](_0x2af1b4 || _0x375dc7["message"], _0x375dc7);
  return "stack" in _0x375dc7 && setProp(_0x16eec0, _0x5036de(1212), { "get": function() {
    var _0x1d70cc = _0x5036de;
    return this["inner"][_0x1d70cc(1212)];
  } }), _0x16eec0;
}
var fullNameExceptions = errorList[_0x780a7e(690)](function(_0x19fac3, _0x30336f) {
  var _0x225a21 = _0x780a7e;
  if ([_0x225a21(1429), _0x225a21(813), _0x225a21(1377)][_0x225a21(1879)](_0x30336f) === -1)
    _0x19fac3[_0x30336f + _0x225a21(462)] = exceptions[_0x30336f];
  return _0x19fac3;
}, {});
fullNameExceptions["ModifyError"] = ModifyError, fullNameExceptions[_0x780a7e(1649)] = DexieError, fullNameExceptions[_0x780a7e(1106)] = BulkError;
function nop() {
}
function mirror(_0x422dd3) {
  return _0x422dd3;
}
function pureFunctionChain(_0x47e7a4, _0x9db6af) {
  if (_0x47e7a4 == null || _0x47e7a4 === mirror)
    return _0x9db6af;
  return function(_0xed6831) {
    return _0x9db6af(_0x47e7a4(_0xed6831));
  };
}
function callBoth(_0x418731, _0x4743d9) {
  return function() {
    var _0x48c726 = _0x3001;
    _0x418731[_0x48c726(2150)](this, arguments), _0x4743d9[_0x48c726(2150)](this, arguments);
  };
}
function hookCreatingChain(_0x2b927e, _0x4567e4) {
  if (_0x2b927e === nop)
    return _0x4567e4;
  return function() {
    var _0x354d24 = _0x3001, _0x23b331 = _0x2b927e[_0x354d24(2150)](this, arguments);
    if (_0x23b331 !== void 0)
      arguments[0] = _0x23b331;
    var _0x4cad34 = this[_0x354d24(999)], _0x4c8431 = this["onerror"];
    this["onsuccess"] = null, this[_0x354d24(1512)] = null;
    var _0x7e8d59 = _0x4567e4["apply"](this, arguments);
    if (_0x4cad34)
      this[_0x354d24(999)] = this[_0x354d24(999)] ? callBoth(_0x4cad34, this[_0x354d24(999)]) : _0x4cad34;
    if (_0x4c8431)
      this[_0x354d24(1512)] = this["onerror"] ? callBoth(_0x4c8431, this[_0x354d24(1512)]) : _0x4c8431;
    return _0x7e8d59 !== void 0 ? _0x7e8d59 : _0x23b331;
  };
}
function hookDeletingChain(_0x6ce1dd, _0x129537) {
  if (_0x6ce1dd === nop)
    return _0x129537;
  return function() {
    var _0x50fbbb = _0x3001;
    _0x6ce1dd[_0x50fbbb(2150)](this, arguments);
    var _0x366624 = this[_0x50fbbb(999)], _0x2e5ccc = this["onerror"];
    this["onsuccess"] = this["onerror"] = null, _0x129537[_0x50fbbb(2150)](this, arguments);
    if (_0x366624)
      this[_0x50fbbb(999)] = this[_0x50fbbb(999)] ? callBoth(_0x366624, this[_0x50fbbb(999)]) : _0x366624;
    if (_0x2e5ccc)
      this["onerror"] = this["onerror"] ? callBoth(_0x2e5ccc, this[_0x50fbbb(1512)]) : _0x2e5ccc;
  };
}
function hookUpdatingChain(_0x1ad286, _0xfa0527) {
  if (_0x1ad286 === nop)
    return _0xfa0527;
  return function(_0x5f5397) {
    var _0xec7e5f = _0x3001, _0x57758f = _0x1ad286[_0xec7e5f(2150)](this, arguments);
    extend(_0x5f5397, _0x57758f);
    var _0xd3a1d = this[_0xec7e5f(999)], _0x2a781a = this[_0xec7e5f(1512)];
    this[_0xec7e5f(999)] = null, this["onerror"] = null;
    var _0x28a8a3 = _0xfa0527[_0xec7e5f(2150)](this, arguments);
    if (_0xd3a1d)
      this[_0xec7e5f(999)] = this[_0xec7e5f(999)] ? callBoth(_0xd3a1d, this[_0xec7e5f(999)]) : _0xd3a1d;
    if (_0x2a781a)
      this[_0xec7e5f(1512)] = this["onerror"] ? callBoth(_0x2a781a, this[_0xec7e5f(1512)]) : _0x2a781a;
    return _0x57758f === void 0 ? _0x28a8a3 === void 0 ? void 0 : _0x28a8a3 : extend(_0x57758f, _0x28a8a3);
  };
}
function reverseStoppableEventChain(_0xdd2ea, _0x11c7fd) {
  if (_0xdd2ea === nop)
    return _0x11c7fd;
  return function() {
    var _0x3d1a8a = _0x3001;
    if (_0x11c7fd[_0x3d1a8a(2150)](this, arguments) === ![])
      return ![];
    return _0xdd2ea[_0x3d1a8a(2150)](this, arguments);
  };
}
function promisableChain(_0x442a9a, _0x1d2af0) {
  if (_0x442a9a === nop)
    return _0x1d2af0;
  return function() {
    var _0x5af996 = _0x3001, _0x2c26fb = _0x442a9a[_0x5af996(2150)](this, arguments);
    if (_0x2c26fb && typeof _0x2c26fb[_0x5af996(1902)] === _0x5af996(389)) {
      var _0x2a6a36 = this, _0x264217 = arguments["length"], _0xc6c3 = new Array(_0x264217);
      while (_0x264217--)
        _0xc6c3[_0x264217] = arguments[_0x264217];
      return _0x2c26fb["then"](function() {
        var _0x5b462a = _0x5af996;
        return _0x1d2af0[_0x5b462a(2150)](_0x2a6a36, _0xc6c3);
      });
    }
    return _0x1d2af0[_0x5af996(2150)](this, arguments);
  };
}
var INTERNAL = {}, LONG_STACKS_CLIP_LIMIT = 100, MAX_LONG_STACKS = 20, ZONE_ECHO_LIMIT = 100, _a$1 = typeof Promise === "undefined" ? [] : function() {
  var _0x3a813f = _0x780a7e, _0x6f04da = Promise[_0x3a813f(1211)]();
  if (typeof crypto === _0x3a813f(437) || !crypto[_0x3a813f(349)])
    return [_0x6f04da, getProto(_0x6f04da), _0x6f04da];
  var _0x518f9d = crypto[_0x3a813f(349)][_0x3a813f(1956)](_0x3a813f(736), new Uint8Array([0]));
  return [_0x518f9d, getProto(_0x518f9d), _0x6f04da];
}(), resolvedNativePromise = _a$1[0], nativePromiseProto = _a$1[1], resolvedGlobalPromise = _a$1[2], nativePromiseThen = nativePromiseProto && nativePromiseProto[_0x780a7e(1902)], NativePromise = resolvedNativePromise && resolvedNativePromise["constructor"], patchGlobalPromise = !!resolvedGlobalPromise, stack_being_generated = ![], schedulePhysicalTick = resolvedGlobalPromise ? function() {
  var _0x219f89 = _0x780a7e;
  resolvedGlobalPromise[_0x219f89(1902)](physicalTick);
} : _global[_0x780a7e(617)] ? setImmediate[_0x780a7e(517)](null, physicalTick) : _global[_0x780a7e(842)] ? function() {
  var _0x514241 = _0x780a7e, _0xde956f = document[_0x514241(1383)](_0x514241(1874));
  new MutationObserver(function() {
    physicalTick(), _0xde956f = null;
  })[_0x514241(491)](_0xde956f, { "attributes": !![] }), _0xde956f[_0x514241(424)]("i", "1");
} : function() {
  setTimeout(physicalTick, 0);
}, asap = function(_0x501ba7, _0x1d22ac) {
  var _0x5374d5 = _0x780a7e;
  microtickQueue[_0x5374d5(1991)]([_0x501ba7, _0x1d22ac]), needsNewPhysicalTick && (schedulePhysicalTick(), needsNewPhysicalTick = ![]);
}, isOutsideMicroTick = !![], needsNewPhysicalTick = !![], unhandledErrors = [], rejectingErrors = [], currentFulfiller = null, rejectionMapper = mirror, globalPSD = { "id": _0x780a7e(454), "global": !![], "ref": 0, "unhandleds": [], "onunhandled": globalError, "pgp": ![], "env": {}, "finalize": function() {
  var _0x582402 = _0x780a7e;
  this[_0x582402(1062)][_0x582402(839)](function(_0x4b88d2) {
    try {
      globalError(_0x4b88d2[0], _0x4b88d2[1]);
    } catch (_0x303403) {
    }
  });
} }, PSD = globalPSD, microtickQueue = [], numScheduledCalls = 0, tickFinalizers = [];
function DexiePromise(_0x22fdce) {
  var _0x1e6d64 = _0x780a7e;
  if (typeof this !== "object")
    throw new TypeError("Promises must be constructed via new");
  this[_0x1e6d64(875)] = [], this[_0x1e6d64(1145)] = nop, this[_0x1e6d64(1191)] = ![];
  var _0x3f56cb = this[_0x1e6d64(918)] = PSD;
  debug && (this[_0x1e6d64(428)] = getErrorWithStack(), this[_0x1e6d64(1248)] = null, this[_0x1e6d64(1506)] = 0);
  if (typeof _0x22fdce !== _0x1e6d64(389)) {
    if (_0x22fdce !== INTERNAL)
      throw new TypeError(_0x1e6d64(1096));
    this[_0x1e6d64(1234)] = arguments[1], this["_value"] = arguments[2];
    if (this[_0x1e6d64(1234)] === ![])
      handleRejection(this, this[_0x1e6d64(1386)]);
    return;
  }
  this[_0x1e6d64(1234)] = null, this[_0x1e6d64(1386)] = null, ++_0x3f56cb["ref"], executePromiseTask(this, _0x22fdce);
}
var thenProp = { "get": function() {
  var _0x2a8354 = _0x780a7e, _0x4bbc77 = PSD, _0x1b85ca = totalEchoes;
  function _0x539afe(_0x741083, _0x5a252b) {
    var _0x28679d = _0x3001, _0x1dd610 = this, _0x2439f2 = !_0x4bbc77[_0x28679d(454)] && (_0x4bbc77 !== PSD || _0x1b85ca !== totalEchoes), _0x2ab611 = _0x2439f2 && !decrementExpectedAwaits(), _0x4eaca2 = new DexiePromise(function(_0x5dfd2f, _0x589fdd) {
      propagateToListener(_0x1dd610, new Listener(nativeAwaitCompatibleWrap(_0x741083, _0x4bbc77, _0x2439f2, _0x2ab611), nativeAwaitCompatibleWrap(_0x5a252b, _0x4bbc77, _0x2439f2, _0x2ab611), _0x5dfd2f, _0x589fdd, _0x4bbc77));
    });
    return debug && linkToPreviousPromise(_0x4eaca2, this), _0x4eaca2;
  }
  return _0x539afe[_0x2a8354(1897)] = INTERNAL, _0x539afe;
}, "set": function(_0x52c2d3) {
  var _0x9aef2b = _0x780a7e;
  setProp(this, "then", _0x52c2d3 && _0x52c2d3[_0x9aef2b(1897)] === INTERNAL ? thenProp : { "get": function() {
    return _0x52c2d3;
  }, "set": thenProp["set"] });
} };
props(DexiePromise[_0x780a7e(1897)], { "then": thenProp, "_then": function(_0x1e8120, _0x5638c3) {
  propagateToListener(this, new Listener(null, null, _0x1e8120, _0x5638c3, PSD));
}, "catch": function(_0x5bfe69) {
  var _0x53ef80 = _0x780a7e;
  if (arguments["length"] === 1)
    return this["then"](null, _0x5bfe69);
  var _0x57cc85 = arguments[0], _0x2e0393 = arguments[1];
  return typeof _0x57cc85 === _0x53ef80(389) ? this[_0x53ef80(1902)](null, function(_0x4a8270) {
    return _0x4a8270 instanceof _0x57cc85 ? _0x2e0393(_0x4a8270) : PromiseReject(_0x4a8270);
  }) : this[_0x53ef80(1902)](null, function(_0x3a36a2) {
    var _0x36b4ac = _0x53ef80;
    return _0x3a36a2 && _0x3a36a2[_0x36b4ac(765)] === _0x57cc85 ? _0x2e0393(_0x3a36a2) : PromiseReject(_0x3a36a2);
  });
}, "finally": function(_0x50a432) {
  return this["then"](function(_0x20ff81) {
    return _0x50a432(), _0x20ff81;
  }, function(_0x4b2c40) {
    return _0x50a432(), PromiseReject(_0x4b2c40);
  });
}, "stack": { "get": function() {
  var _0x23dced = _0x780a7e;
  if (this[_0x23dced(343)])
    return this["_stack"];
  try {
    stack_being_generated = !![];
    var _0x1c5206 = getStack(this, [], MAX_LONG_STACKS), _0x1bc809 = _0x1c5206[_0x23dced(2180)]("\nFrom previous: ");
    if (this["_state"] !== null)
      this["_stack"] = _0x1bc809;
    return _0x1bc809;
  } finally {
    stack_being_generated = ![];
  }
} }, "timeout": function(_0x58f1a8, _0x367334) {
  var _0x59d83e = this;
  return _0x58f1a8 < Infinity ? new DexiePromise(function(_0x43e849, _0xe9686b) {
    var _0x104e3b = _0x3001, _0x5daebb = setTimeout(function() {
      var _0x4a93cd = _0x3001;
      return _0xe9686b(new exceptions[_0x4a93cd(457)](_0x367334));
    }, _0x58f1a8);
    _0x59d83e[_0x104e3b(1902)](_0x43e849, _0xe9686b)[_0x104e3b(1258)](clearTimeout["bind"](null, _0x5daebb));
  }) : this;
} });
if (typeof Symbol !== "undefined" && Symbol[_0x780a7e(844)])
  setProp(DexiePromise[_0x780a7e(1897)], Symbol[_0x780a7e(844)], "Dexie.Promise");
globalPSD[_0x780a7e(826)] = snapShot();
function Listener(_0x3c577b, _0x58bb97, _0x5ef0f1, _0x38b071, _0x444a37) {
  var _0x28c97a = _0x780a7e;
  this[_0x28c97a(853)] = typeof _0x3c577b === _0x28c97a(389) ? _0x3c577b : null, this[_0x28c97a(415)] = typeof _0x58bb97 === "function" ? _0x58bb97 : null, this[_0x28c97a(1211)] = _0x5ef0f1, this[_0x28c97a(1646)] = _0x38b071, this[_0x28c97a(1097)] = _0x444a37;
}
props(DexiePromise, { "all": function() {
  var _0x349f16 = _0x780a7e, _0x10e46f = getArrayOf[_0x349f16(2150)](null, arguments)[_0x349f16(376)](onPossibleParallellAsync);
  return new DexiePromise(function(_0x3a3a6f, _0x9e3bd9) {
    var _0x416cd5 = _0x349f16;
    if (_0x10e46f[_0x416cd5(1965)] === 0)
      _0x3a3a6f([]);
    var _0x582e14 = _0x10e46f[_0x416cd5(1965)];
    _0x10e46f[_0x416cd5(839)](function(_0x2d7da3, _0x38a3c0) {
      return DexiePromise["resolve"](_0x2d7da3)["then"](function(_0x329179) {
        _0x10e46f[_0x38a3c0] = _0x329179;
        if (!--_0x582e14)
          _0x3a3a6f(_0x10e46f);
      }, _0x9e3bd9);
    });
  });
}, "resolve": function(_0x3c3930) {
  var _0x1c6efe = _0x780a7e;
  if (_0x3c3930 instanceof DexiePromise)
    return _0x3c3930;
  if (_0x3c3930 && typeof _0x3c3930[_0x1c6efe(1902)] === _0x1c6efe(389))
    return new DexiePromise(function(_0x7995b7, _0x4fddec) {
      var _0x416932 = _0x1c6efe;
      _0x3c3930[_0x416932(1902)](_0x7995b7, _0x4fddec);
    });
  var _0x13d44e = new DexiePromise(INTERNAL, !![], _0x3c3930);
  return linkToPreviousPromise(_0x13d44e, currentFulfiller), _0x13d44e;
}, "reject": PromiseReject, "race": function() {
  var _0x54f0f6 = _0x780a7e, _0x5635bd = getArrayOf[_0x54f0f6(2150)](null, arguments)["map"](onPossibleParallellAsync);
  return new DexiePromise(function(_0x5a741c, _0x9e3af) {
    _0x5635bd["map"](function(_0x11cc36) {
      var _0x4eb6e9 = _0x3001;
      return DexiePromise["resolve"](_0x11cc36)[_0x4eb6e9(1902)](_0x5a741c, _0x9e3af);
    });
  });
}, "PSD": { "get": function() {
  return PSD;
}, "set": function(_0x375b77) {
  return PSD = _0x375b77;
} }, "totalEchoes": { "get": function() {
  return totalEchoes;
} }, "newPSD": newScope, "usePSD": usePSD, "scheduler": { "get": function() {
  return asap;
}, "set": function(_0x1e87e5) {
  asap = _0x1e87e5;
} }, "rejectionMapper": { "get": function() {
  return rejectionMapper;
}, "set": function(_0x4fd532) {
  rejectionMapper = _0x4fd532;
} }, "follow": function(_0x207404, _0x25b4ba) {
  return new DexiePromise(function(_0x337bbf, _0x131d1d) {
    return newScope(function(_0x2dc530, _0x42083b) {
      var _0x58d433 = _0x3001, _0x1a4a53 = PSD;
      _0x1a4a53[_0x58d433(1062)] = [], _0x1a4a53[_0x58d433(1367)] = _0x42083b, _0x1a4a53[_0x58d433(634)] = callBoth(function() {
        var _0x164e13 = this;
        run_at_end_of_this_or_next_physical_tick(function() {
          var _0x4db14e = _0x3001;
          _0x164e13[_0x4db14e(1062)]["length"] === 0 ? _0x2dc530() : _0x42083b(_0x164e13["unhandleds"][0]);
        });
      }, _0x1a4a53[_0x58d433(634)]), _0x207404();
    }, _0x25b4ba, _0x337bbf, _0x131d1d);
  });
} });
if (NativePromise) {
  if (NativePromise[_0x780a7e(739)])
    setProp(DexiePromise, _0x780a7e(739), function() {
      var _0x4287b4 = getArrayOf["apply"](null, arguments)["map"](onPossibleParallellAsync);
      return new DexiePromise(function(_0x594a30) {
        var _0xa80b4b = _0x3001;
        if (_0x4287b4[_0xa80b4b(1965)] === 0)
          _0x594a30([]);
        var _0x5851bb = _0x4287b4[_0xa80b4b(1965)], _0x111640 = new Array(_0x5851bb);
        _0x4287b4[_0xa80b4b(839)](function(_0x74bad5, _0x378728) {
          var _0x3ff1f6 = _0xa80b4b;
          return DexiePromise[_0x3ff1f6(1211)](_0x74bad5)[_0x3ff1f6(1902)](function(_0x3d264f) {
            var _0x57e347 = _0x3ff1f6;
            return _0x111640[_0x378728] = { "status": _0x57e347(392), "value": _0x3d264f };
          }, function(_0x2f44d7) {
            var _0x4bf077 = _0x3ff1f6;
            return _0x111640[_0x378728] = { "status": _0x4bf077(1579), "reason": _0x2f44d7 };
          })[_0x3ff1f6(1902)](function() {
            return --_0x5851bb || _0x594a30(_0x111640);
          });
        });
      });
    });
  if (NativePromise[_0x780a7e(1599)] && typeof AggregateError !== _0x780a7e(437))
    setProp(DexiePromise, "any", function() {
      var _0x3dfd90 = _0x780a7e, _0xbce2c9 = getArrayOf["apply"](null, arguments)[_0x3dfd90(376)](onPossibleParallellAsync);
      return new DexiePromise(function(_0xd65ea7, _0x416b6d) {
        var _0x1f205d = _0x3dfd90;
        if (_0xbce2c9["length"] === 0)
          _0x416b6d(new AggregateError([]));
        var _0x7f139f = _0xbce2c9[_0x1f205d(1965)], _0x4bf8b7 = new Array(_0x7f139f);
        _0xbce2c9[_0x1f205d(839)](function(_0x121a16, _0x3d2a46) {
          var _0x5c4f5 = _0x1f205d;
          return DexiePromise[_0x5c4f5(1211)](_0x121a16)["then"](function(_0x4e48b2) {
            return _0xd65ea7(_0x4e48b2);
          }, function(_0x5a3dc9) {
            _0x4bf8b7[_0x3d2a46] = _0x5a3dc9;
            if (!--_0x7f139f)
              _0x416b6d(new AggregateError(_0x4bf8b7));
          });
        });
      });
    });
}
function executePromiseTask(_0x5b2556, _0x44c0bc) {
  var _0x15b9fa = _0x780a7e;
  try {
    _0x44c0bc(function(_0x3e2e4d) {
      var _0x15143a = _0x3001;
      if (_0x5b2556[_0x15143a(1234)] !== null)
        return;
      if (_0x3e2e4d === _0x5b2556)
        throw new TypeError(_0x15143a(834));
      var _0x3ff5f2 = _0x5b2556["_lib"] && beginMicroTickScope();
      _0x3e2e4d && typeof _0x3e2e4d[_0x15143a(1902)] === _0x15143a(389) ? executePromiseTask(_0x5b2556, function(_0x1d4d2e, _0x3d7e67) {
        var _0x118704 = _0x15143a;
        _0x3e2e4d instanceof DexiePromise ? _0x3e2e4d[_0x118704(901)](_0x1d4d2e, _0x3d7e67) : _0x3e2e4d[_0x118704(1902)](_0x1d4d2e, _0x3d7e67);
      }) : (_0x5b2556[_0x15143a(1234)] = !![], _0x5b2556["_value"] = _0x3e2e4d, propagateAllListeners(_0x5b2556));
      if (_0x3ff5f2)
        endMicroTickScope();
    }, handleRejection[_0x15b9fa(517)](null, _0x5b2556));
  } catch (_0x2585f2) {
    handleRejection(_0x5b2556, _0x2585f2);
  }
}
function handleRejection(_0x5c304d, _0x2e7888) {
  var _0x5aad31 = _0x780a7e;
  rejectingErrors[_0x5aad31(1991)](_0x2e7888);
  if (_0x5c304d[_0x5aad31(1234)] !== null)
    return;
  var _0x32631a = _0x5c304d[_0x5aad31(1191)] && beginMicroTickScope();
  _0x2e7888 = rejectionMapper(_0x2e7888), _0x5c304d[_0x5aad31(1234)] = ![], _0x5c304d[_0x5aad31(1386)] = _0x2e7888, debug && _0x2e7888 !== null && typeof _0x2e7888 === "object" && !_0x2e7888[_0x5aad31(1490)] && tryCatch(function() {
    var _0x549d39 = _0x5aad31, _0x107482 = getPropertyDescriptor(_0x2e7888, _0x549d39(1212));
    _0x2e7888[_0x549d39(1490)] = _0x5c304d, setProp(_0x2e7888, _0x549d39(1212), { "get": function() {
      var _0x956a7 = _0x549d39;
      return stack_being_generated ? _0x107482 && (_0x107482[_0x956a7(1892)] ? _0x107482["get"][_0x956a7(2150)](_0x2e7888) : _0x107482[_0x956a7(819)]) : _0x5c304d[_0x956a7(1212)];
    } });
  }), addPossiblyUnhandledError(_0x5c304d), propagateAllListeners(_0x5c304d);
  if (_0x32631a)
    endMicroTickScope();
}
function propagateAllListeners(_0x38be86) {
  var _0x264ec9 = _0x780a7e, _0x32fc13 = _0x38be86[_0x264ec9(875)];
  _0x38be86["_listeners"] = [];
  for (var _0x54cc04 = 0, _0x56a7b = _0x32fc13["length"]; _0x54cc04 < _0x56a7b; ++_0x54cc04) {
    propagateToListener(_0x38be86, _0x32fc13[_0x54cc04]);
  }
  var _0x1cd8fd = _0x38be86["_PSD"];
  --_0x1cd8fd[_0x264ec9(2205)] || _0x1cd8fd[_0x264ec9(634)](), numScheduledCalls === 0 && (++numScheduledCalls, asap(function() {
    if (--numScheduledCalls === 0)
      finalizePhysicalTick();
  }, []));
}
function propagateToListener(_0x1d6c18, _0x49e16f) {
  var _0x533666 = _0x780a7e;
  if (_0x1d6c18[_0x533666(1234)] === null) {
    _0x1d6c18[_0x533666(875)][_0x533666(1991)](_0x49e16f);
    return;
  }
  var _0x34f708 = _0x1d6c18["_state"] ? _0x49e16f["onFulfilled"] : _0x49e16f[_0x533666(415)];
  if (_0x34f708 === null)
    return (_0x1d6c18[_0x533666(1234)] ? _0x49e16f[_0x533666(1211)] : _0x49e16f[_0x533666(1646)])(_0x1d6c18[_0x533666(1386)]);
  ++_0x49e16f[_0x533666(1097)][_0x533666(2205)], ++numScheduledCalls, asap(callListener, [_0x34f708, _0x1d6c18, _0x49e16f]);
}
function callListener(_0x4197a4, _0xa111c2, _0x15b506) {
  var _0x336c58 = _0x780a7e;
  try {
    currentFulfiller = _0xa111c2;
    var _0x4f9409, _0x3c1bb0 = _0xa111c2[_0x336c58(1386)];
    if (_0xa111c2["_state"])
      _0x4f9409 = _0x4197a4(_0x3c1bb0);
    else {
      if (rejectingErrors["length"])
        rejectingErrors = [];
      _0x4f9409 = _0x4197a4(_0x3c1bb0);
      if (rejectingErrors[_0x336c58(1879)](_0x3c1bb0) === -1)
        markErrorAsHandled(_0xa111c2);
    }
    _0x15b506[_0x336c58(1211)](_0x4f9409);
  } catch (_0x37c1ff) {
    _0x15b506["reject"](_0x37c1ff);
  } finally {
    currentFulfiller = null;
    if (--numScheduledCalls === 0)
      finalizePhysicalTick();
    --_0x15b506["psd"]["ref"] || _0x15b506[_0x336c58(1097)][_0x336c58(634)]();
  }
}
function getStack(_0x187bea, _0x19a2af, _0x21f855) {
  var _0x1ceafd = _0x780a7e;
  if (_0x19a2af["length"] === _0x21f855)
    return _0x19a2af;
  var _0x1f69de = "";
  if (_0x187bea[_0x1ceafd(1234)] === ![]) {
    var _0x53ef68 = _0x187bea[_0x1ceafd(1386)], _0x39c609, _0x2edce0;
    _0x53ef68 != null ? (_0x39c609 = _0x53ef68[_0x1ceafd(765)] || _0x1ceafd(462), _0x2edce0 = _0x53ef68["message"] || _0x53ef68, _0x1f69de = prettyStack(_0x53ef68, 0)) : (_0x39c609 = _0x53ef68, _0x2edce0 = ""), _0x19a2af["push"](_0x39c609 + (_0x2edce0 ? ": " + _0x2edce0 : "") + _0x1f69de);
  }
  if (debug) {
    _0x1f69de = prettyStack(_0x187bea[_0x1ceafd(428)], 2);
    if (_0x1f69de && _0x19a2af["indexOf"](_0x1f69de) === -1)
      _0x19a2af[_0x1ceafd(1991)](_0x1f69de);
    if (_0x187bea[_0x1ceafd(1248)])
      getStack(_0x187bea[_0x1ceafd(1248)], _0x19a2af, _0x21f855);
  }
  return _0x19a2af;
}
function linkToPreviousPromise(_0x500f55, _0x29688b) {
  var _0x383a60 = _0x780a7e, _0x515358 = _0x29688b ? _0x29688b[_0x383a60(1506)] + 1 : 0;
  _0x515358 < LONG_STACKS_CLIP_LIMIT && (_0x500f55[_0x383a60(1248)] = _0x29688b, _0x500f55[_0x383a60(1506)] = _0x515358);
}
function physicalTick() {
  beginMicroTickScope() && endMicroTickScope();
}
function beginMicroTickScope() {
  var _0x2dd9fb = isOutsideMicroTick;
  return isOutsideMicroTick = ![], needsNewPhysicalTick = ![], _0x2dd9fb;
}
function endMicroTickScope() {
  var _0x424fd5 = _0x780a7e, _0x1874b5, _0x2babf8, _0x6f8ea1;
  do {
    while (microtickQueue[_0x424fd5(1965)] > 0) {
      _0x1874b5 = microtickQueue, microtickQueue = [], _0x6f8ea1 = _0x1874b5[_0x424fd5(1965)];
      for (_0x2babf8 = 0; _0x2babf8 < _0x6f8ea1; ++_0x2babf8) {
        var _0x293865 = _0x1874b5[_0x2babf8];
        _0x293865[0][_0x424fd5(2150)](null, _0x293865[1]);
      }
    }
  } while (microtickQueue[_0x424fd5(1965)] > 0);
  isOutsideMicroTick = !![], needsNewPhysicalTick = !![];
}
function finalizePhysicalTick() {
  var _0x41a9a3 = _0x780a7e, _0x1f242c = unhandledErrors;
  unhandledErrors = [], _0x1f242c["forEach"](function(_0x2cf317) {
    var _0x191631 = _0x3001;
    _0x2cf317[_0x191631(918)][_0x191631(1367)][_0x191631(1206)](null, _0x2cf317[_0x191631(1386)], _0x2cf317);
  });
  var _0x127f57 = tickFinalizers[_0x41a9a3(1215)](0), _0x2d9f3f = _0x127f57[_0x41a9a3(1965)];
  while (_0x2d9f3f)
    _0x127f57[--_0x2d9f3f]();
}
function run_at_end_of_this_or_next_physical_tick(_0x53702f) {
  var _0x2eafc7 = _0x780a7e;
  function _0x44bf21() {
    var _0x3c6d8 = _0x3001;
    _0x53702f(), tickFinalizers[_0x3c6d8(1314)](tickFinalizers[_0x3c6d8(1879)](_0x44bf21), 1);
  }
  tickFinalizers[_0x2eafc7(1991)](_0x44bf21), ++numScheduledCalls, asap(function() {
    if (--numScheduledCalls === 0)
      finalizePhysicalTick();
  }, []);
}
function addPossiblyUnhandledError(_0x4cba5d) {
  var _0x27e65c = _0x780a7e;
  if (!unhandledErrors["some"](function(_0x552d10) {
    var _0x59a6bc = _0x3001;
    return _0x552d10["_value"] === _0x4cba5d[_0x59a6bc(1386)];
  }))
    unhandledErrors[_0x27e65c(1991)](_0x4cba5d);
}
function markErrorAsHandled(_0xc30fa8) {
  var _0x536a91 = _0x780a7e, _0x2fec89 = unhandledErrors[_0x536a91(1965)];
  while (_0x2fec89)
    if (unhandledErrors[--_0x2fec89][_0x536a91(1386)] === _0xc30fa8[_0x536a91(1386)]) {
      unhandledErrors[_0x536a91(1314)](_0x2fec89, 1);
      return;
    }
}
function PromiseReject(_0x5c3b03) {
  return new DexiePromise(INTERNAL, ![], _0x5c3b03);
}
function wrap(_0xe12761, _0x2cb8d5) {
  var _0x26b4a3 = PSD;
  return function() {
    var _0x1fc282 = _0x3001, _0x46eed7 = beginMicroTickScope(), _0x32fda9 = PSD;
    try {
      return switchToZone(_0x26b4a3, !![]), _0xe12761[_0x1fc282(2150)](this, arguments);
    } catch (_0x5ec666) {
      _0x2cb8d5 && _0x2cb8d5(_0x5ec666);
    } finally {
      switchToZone(_0x32fda9, ![]);
      if (_0x46eed7)
        endMicroTickScope();
    }
  };
}
var task = { "awaits": 0, "echoes": 0, "id": 0 }, taskCounter = 0, zoneStack = [], zoneEchoes = 0, totalEchoes = 0, zone_id_counter = 0;
function newScope(_0x466736, _0x49812c, _0x3a6581, _0x2ed66d) {
  var _0x46ff18 = _0x780a7e, _0x1020a0 = PSD, _0x88fea4 = Object["create"](_0x1020a0);
  _0x88fea4[_0x46ff18(1932)] = _0x1020a0, _0x88fea4["ref"] = 0, _0x88fea4[_0x46ff18(454)] = ![], _0x88fea4["id"] = ++zone_id_counter;
  var _0x3a947b = globalPSD[_0x46ff18(826)];
  _0x88fea4["env"] = patchGlobalPromise ? { "Promise": DexiePromise, "PromiseProp": { "value": DexiePromise, "configurable": !![], "writable": !![] }, "all": DexiePromise[_0x46ff18(405)], "race": DexiePromise[_0x46ff18(2110)], "allSettled": DexiePromise["allSettled"], "any": DexiePromise[_0x46ff18(1599)], "resolve": DexiePromise[_0x46ff18(1211)], "reject": DexiePromise[_0x46ff18(1646)], "nthen": getPatchedPromiseThen(_0x3a947b[_0x46ff18(1875)], _0x88fea4), "gthen": getPatchedPromiseThen(_0x3a947b[_0x46ff18(338)], _0x88fea4) } : {};
  if (_0x49812c)
    extend(_0x88fea4, _0x49812c);
  ++_0x1020a0[_0x46ff18(2205)], _0x88fea4[_0x46ff18(634)] = function() {
    var _0x36e592 = _0x46ff18;
    --this["parent"][_0x36e592(2205)] || this["parent"][_0x36e592(634)]();
  };
  var _0x267814 = usePSD(_0x88fea4, _0x466736, _0x3a6581, _0x2ed66d);
  if (_0x88fea4[_0x46ff18(2205)] === 0)
    _0x88fea4[_0x46ff18(634)]();
  return _0x267814;
}
function incrementExpectedAwaits() {
  var _0x4ba21c = _0x780a7e;
  if (!task["id"])
    task["id"] = ++taskCounter;
  return ++task[_0x4ba21c(2017)], task[_0x4ba21c(643)] += ZONE_ECHO_LIMIT, task["id"];
}
function decrementExpectedAwaits() {
  var _0x127374 = _0x780a7e;
  if (!task[_0x127374(2017)])
    return ![];
  if (--task[_0x127374(2017)] === 0)
    task["id"] = 0;
  return task["echoes"] = task[_0x127374(2017)] * ZONE_ECHO_LIMIT, !![];
}
("" + nativePromiseThen)[_0x780a7e(1879)](_0x780a7e(1751)) === -1 && (incrementExpectedAwaits = decrementExpectedAwaits = nop);
function onPossibleParallellAsync(_0x1c8fb7) {
  var _0x5b9d96 = _0x780a7e;
  if (task[_0x5b9d96(643)] && _0x1c8fb7 && _0x1c8fb7["constructor"] === NativePromise)
    return incrementExpectedAwaits(), _0x1c8fb7[_0x5b9d96(1902)](function(_0x4a2d27) {
      return decrementExpectedAwaits(), _0x4a2d27;
    }, function(_0x476229) {
      return decrementExpectedAwaits(), rejection(_0x476229);
    });
  return _0x1c8fb7;
}
function zoneEnterEcho(_0x3e52ae) {
  var _0x2c3aad = _0x780a7e;
  ++totalEchoes, (!task[_0x2c3aad(643)] || --task[_0x2c3aad(643)] === 0) && (task[_0x2c3aad(643)] = task["id"] = 0), zoneStack["push"](PSD), switchToZone(_0x3e52ae, !![]);
}
function zoneLeaveEcho() {
  var _0x23adb4 = _0x780a7e, _0x4e34fe = zoneStack[zoneStack[_0x23adb4(1965)] - 1];
  zoneStack["pop"](), switchToZone(_0x4e34fe, ![]);
}
function switchToZone(_0x2cf9eb, _0x1426d7) {
  var _0x594918 = _0x780a7e, _0x3b3d5c = PSD;
  (_0x1426d7 ? task[_0x594918(643)] && (!zoneEchoes++ || _0x2cf9eb !== PSD) : zoneEchoes && (!--zoneEchoes || _0x2cf9eb !== PSD)) && enqueueNativeMicroTask(_0x1426d7 ? zoneEnterEcho[_0x594918(517)](null, _0x2cf9eb) : zoneLeaveEcho);
  if (_0x2cf9eb === PSD)
    return;
  PSD = _0x2cf9eb;
  if (_0x3b3d5c === globalPSD)
    globalPSD[_0x594918(826)] = snapShot();
  if (patchGlobalPromise) {
    var _0x5b6f8d = globalPSD[_0x594918(826)][_0x594918(1047)], _0x4a6da1 = _0x2cf9eb[_0x594918(826)];
    nativePromiseProto["then"] = _0x4a6da1[_0x594918(1875)], _0x5b6f8d[_0x594918(1897)][_0x594918(1902)] = _0x4a6da1[_0x594918(338)];
    if (_0x3b3d5c[_0x594918(454)] || _0x2cf9eb[_0x594918(454)]) {
      Object[_0x594918(1564)](_global, _0x594918(1047), _0x4a6da1[_0x594918(2121)]), _0x5b6f8d[_0x594918(405)] = _0x4a6da1["all"], _0x5b6f8d["race"] = _0x4a6da1["race"], _0x5b6f8d["resolve"] = _0x4a6da1["resolve"], _0x5b6f8d[_0x594918(1646)] = _0x4a6da1[_0x594918(1646)];
      if (_0x4a6da1[_0x594918(739)])
        _0x5b6f8d[_0x594918(739)] = _0x4a6da1[_0x594918(739)];
      if (_0x4a6da1[_0x594918(1599)])
        _0x5b6f8d["any"] = _0x4a6da1["any"];
    }
  }
}
function snapShot() {
  var _0x558f75 = _0x780a7e, _0x4202fd = _global[_0x558f75(1047)];
  return patchGlobalPromise ? { "Promise": _0x4202fd, "PromiseProp": Object[_0x558f75(1954)](_global, _0x558f75(1047)), "all": _0x4202fd[_0x558f75(405)], "race": _0x4202fd[_0x558f75(2110)], "allSettled": _0x4202fd[_0x558f75(739)], "any": _0x4202fd[_0x558f75(1599)], "resolve": _0x4202fd[_0x558f75(1211)], "reject": _0x4202fd[_0x558f75(1646)], "nthen": nativePromiseProto["then"], "gthen": _0x4202fd[_0x558f75(1897)][_0x558f75(1902)] } : {};
}
function usePSD(_0x3e001f, _0x4f00f0, _0x5f21ac, _0x51dac5, _0x56e5f) {
  var _0x34e973 = PSD;
  try {
    return switchToZone(_0x3e001f, !![]), _0x4f00f0(_0x5f21ac, _0x51dac5, _0x56e5f);
  } finally {
    switchToZone(_0x34e973, ![]);
  }
}
function enqueueNativeMicroTask(_0x1443fb) {
  var _0x284cc3 = _0x780a7e;
  nativePromiseThen[_0x284cc3(1206)](resolvedNativePromise, _0x1443fb);
}
function nativeAwaitCompatibleWrap(_0x5d9b08, _0x4328d5, _0xedfac3, _0x5a2f44) {
  var _0x232f37 = _0x780a7e;
  return typeof _0x5d9b08 !== _0x232f37(389) ? _0x5d9b08 : function() {
    var _0x3c6aea = _0x232f37, _0x110b09 = PSD;
    if (_0xedfac3)
      incrementExpectedAwaits();
    switchToZone(_0x4328d5, !![]);
    try {
      return _0x5d9b08[_0x3c6aea(2150)](this, arguments);
    } finally {
      switchToZone(_0x110b09, ![]);
      if (_0x5a2f44)
        enqueueNativeMicroTask(decrementExpectedAwaits);
    }
  };
}
function getPatchedPromiseThen(_0x40144d, _0xd42f1f) {
  return function(_0x29a5ba, _0x1a6577) {
    var _0x46c4c7 = _0x3001;
    return _0x40144d[_0x46c4c7(1206)](this, nativeAwaitCompatibleWrap(_0x29a5ba, _0xd42f1f), nativeAwaitCompatibleWrap(_0x1a6577, _0xd42f1f));
  };
}
var UNHANDLEDREJECTION = "unhandledrejection";
function globalError(_0x1939c4, _0x48bef5) {
  var _0x119f68 = _0x780a7e, _0xe86c7e;
  try {
    _0xe86c7e = _0x48bef5["onuncatched"](_0x1939c4);
  } catch (_0x1ce725) {
  }
  if (_0xe86c7e !== ![])
    try {
      var _0x5b599e, _0x3ded64 = { "promise": _0x48bef5, "reason": _0x1939c4 };
      if (_global[_0x119f68(585)] && document[_0x119f68(525)])
        _0x5b599e = document[_0x119f68(525)](_0x119f68(540)), _0x5b599e["initEvent"](UNHANDLEDREJECTION, !![], !![]), extend(_0x5b599e, _0x3ded64);
      else
        _global[_0x119f68(504)] && (_0x5b599e = new CustomEvent(UNHANDLEDREJECTION, { "detail": _0x3ded64 }), extend(_0x5b599e, _0x3ded64));
      if (_0x5b599e && _global[_0x119f68(1152)]) {
        dispatchEvent(_0x5b599e);
        if (!_global[_0x119f68(458)] && _global[_0x119f68(1244)])
          try {
            _global[_0x119f68(1244)](_0x5b599e);
          } catch (_0xc136f1) {
          }
      }
      debug && _0x5b599e && !_0x5b599e[_0x119f68(1739)] && console[_0x119f68(1985)]("Unhandled rejection: " + (_0x1939c4["stack"] || _0x1939c4));
    } catch (_0x592ea0) {
    }
}
var rejection = DexiePromise[_0x780a7e(1646)];
function tempTransaction(_0x3682ee, _0x5b4d8a, _0x2e1358, _0x362b12) {
  var _0x88f122 = _0x780a7e;
  if (!_0x3682ee["idbdb"] || !_0x3682ee[_0x88f122(1234)]["openComplete"] && (!PSD["letThrough"] && !_0x3682ee[_0x88f122(1703)])) {
    if (_0x3682ee[_0x88f122(1234)][_0x88f122(755)])
      return rejection(new exceptions[_0x88f122(2039)](_0x3682ee[_0x88f122(1234)][_0x88f122(667)]));
    if (!_0x3682ee["_state"][_0x88f122(1204)]) {
      if (!_0x3682ee["_options"][_0x88f122(374)])
        return rejection(new exceptions[_0x88f122(2039)]());
      _0x3682ee[_0x88f122(1352)]()[_0x88f122(1517)](nop);
    }
    return _0x3682ee["_state"][_0x88f122(753)]["then"](function() {
      return tempTransaction(_0x3682ee, _0x5b4d8a, _0x2e1358, _0x362b12);
    });
  } else {
    var _0x196e0b = _0x3682ee[_0x88f122(1658)](_0x5b4d8a, _0x2e1358, _0x3682ee[_0x88f122(823)]);
    try {
      _0x196e0b[_0x88f122(1409)](), _0x3682ee[_0x88f122(1234)]["PR1398_maxLoop"] = 3;
    } catch (_0x3918cd) {
      if (_0x3918cd["name"] === errnames[_0x88f122(378)] && _0x3682ee["isOpen"]() && --_0x3682ee[_0x88f122(1234)][_0x88f122(1734)] > 0)
        return console["warn"]("Dexie: Need to reopen db"), _0x3682ee[_0x88f122(1770)](), _0x3682ee[_0x88f122(1352)]()["then"](function() {
          return tempTransaction(_0x3682ee, _0x5b4d8a, _0x2e1358, _0x362b12);
        });
      return rejection(_0x3918cd);
    }
    return _0x196e0b[_0x88f122(1490)](_0x5b4d8a, function(_0x4d7328, _0x19b48a) {
      return newScope(function() {
        return PSD["trans"] = _0x196e0b, _0x362b12(_0x4d7328, _0x19b48a, _0x196e0b);
      });
    })["then"](function(_0x92e3fd) {
      var _0x4375c0 = _0x88f122;
      return _0x196e0b[_0x4375c0(711)][_0x4375c0(1902)](function() {
        return _0x92e3fd;
      });
    });
  }
}
var DEXIE_VERSION = _0x780a7e(386), maxString = String[_0x780a7e(1335)](65535), minKey = -Infinity, INVALID_KEY_ARGUMENT = _0x780a7e(2181), STRING_EXPECTED = _0x780a7e(2093), connections = [], isIEOrEdge = typeof navigator !== _0x780a7e(437) && /(MSIE|Trident|Edge)/[_0x780a7e(1778)](navigator[_0x780a7e(1470)]), hasIEDeleteObjectStoreBug = isIEOrEdge, hangsOnDeleteLargeKeyRange = isIEOrEdge, dexieStackFrameFilter = function(_0x11c267) {
  var _0x32f293 = _0x780a7e;
  return !/(dexie\.js|dexie\.min\.js)/[_0x32f293(1778)](_0x11c267);
}, DBNAMES_DB = _0x780a7e(2117), READONLY = _0x780a7e(576), READWRITE = _0x780a7e(1069);
function combine(_0x968f21, _0x4eeecf) {
  return _0x968f21 ? _0x4eeecf ? function() {
    var _0x37161c = _0x3001;
    return _0x968f21[_0x37161c(2150)](this, arguments) && _0x4eeecf["apply"](this, arguments);
  } : _0x968f21 : _0x4eeecf;
}
var AnyRange = { "type": 3, "lower": -Infinity, "lowerOpen": ![], "upper": [[]], "upperOpen": ![] };
function workaroundForUndefinedPrimKey(_0x45d796) {
  var _0x43c826 = _0x780a7e;
  return typeof _0x45d796 === _0x43c826(1548) && !/\./[_0x43c826(1778)](_0x45d796) ? function(_0x5d4b94) {
    return _0x5d4b94[_0x45d796] === void 0 && _0x45d796 in _0x5d4b94 && (_0x5d4b94 = deepClone(_0x5d4b94), delete _0x5d4b94[_0x45d796]), _0x5d4b94;
  } : function(_0x10807b) {
    return _0x10807b;
  };
}
var Table = function() {
  var _0x123a31 = _0x780a7e;
  function _0x56df39() {
  }
  return _0x56df39["prototype"][_0x123a31(518)] = function(_0x258a33, _0x2392f5, _0x17d321) {
    var _0x4a9f94 = _0x123a31, _0x29d1d1 = this[_0x4a9f94(865)] || PSD[_0x4a9f94(683)], _0xb99ab5 = this[_0x4a9f94(765)];
    function _0x136578(_0x3c06f1, _0x743e1a, _0x1d9dad) {
      var _0x1e3339 = _0x4a9f94;
      if (!_0x1d9dad[_0x1e3339(795)][_0xb99ab5])
        throw new exceptions[_0x1e3339(1625)]("Table " + _0xb99ab5 + _0x1e3339(2082));
      return _0x2392f5(_0x1d9dad[_0x1e3339(1532)], _0x1d9dad);
    }
    var _0x5cb014 = beginMicroTickScope();
    try {
      return _0x29d1d1 && _0x29d1d1["db"] === this["db"] ? _0x29d1d1 === PSD[_0x4a9f94(683)] ? _0x29d1d1["_promise"](_0x258a33, _0x136578, _0x17d321) : newScope(function() {
        return _0x29d1d1["_promise"](_0x258a33, _0x136578, _0x17d321);
      }, { "trans": _0x29d1d1, "transless": PSD[_0x4a9f94(1612)] || PSD }) : tempTransaction(this["db"], _0x258a33, [this[_0x4a9f94(765)]], _0x136578);
    } finally {
      if (_0x5cb014)
        endMicroTickScope();
    }
  }, _0x56df39[_0x123a31(1897)][_0x123a31(1892)] = function(_0x394f18, _0x443b2a) {
    var _0xf89753 = _0x123a31, _0x4c0b6d = this;
    if (_0x394f18 && _0x394f18["constructor"] === Object)
      return this[_0xf89753(1837)](_0x394f18)[_0xf89753(1077)](_0x443b2a);
    return this[_0xf89753(518)](_0xf89753(576), function(_0x27405e) {
      var _0x104d6c = _0xf89753;
      return _0x4c0b6d[_0x104d6c(2104)][_0x104d6c(1892)]({ "trans": _0x27405e, "key": _0x394f18 })["then"](function(_0x5eaddb) {
        var _0x509fe4 = _0x104d6c;
        return _0x4c0b6d[_0x509fe4(1969)][_0x509fe4(663)][_0x509fe4(801)](_0x5eaddb);
      });
    })["then"](_0x443b2a);
  }, _0x56df39[_0x123a31(1897)][_0x123a31(1837)] = function(_0x25f155) {
    var _0x3502a4 = _0x123a31;
    if (typeof _0x25f155 === "string")
      return new this["db"][_0x3502a4(1417)](this, _0x25f155);
    if (isArray(_0x25f155))
      return new this["db"][_0x3502a4(1417)](this, "[" + _0x25f155["join"]("+") + "]");
    var _0x247ff8 = keys(_0x25f155);
    if (_0x247ff8[_0x3502a4(1965)] === 1)
      return this["where"](_0x247ff8[0])[_0x3502a4(1291)](_0x25f155[_0x247ff8[0]]);
    var _0xe1d90a = this[_0x3502a4(795)]["indexes"]["concat"](this[_0x3502a4(795)]["primKey"])["filter"](function(_0x26da71) {
      var _0x191296 = _0x3502a4;
      return _0x26da71[_0x191296(1444)] && _0x247ff8[_0x191296(1736)](function(_0x7400de) {
        var _0xf18877 = _0x191296;
        return _0x26da71[_0xf18877(1565)][_0xf18877(1879)](_0x7400de) >= 0;
      }) && _0x26da71[_0x191296(1565)]["every"](function(_0xcfaa8e) {
        return _0x247ff8["indexOf"](_0xcfaa8e) >= 0;
      });
    })[0];
    if (_0xe1d90a && this["db"][_0x3502a4(435)] !== maxString)
      return this[_0x3502a4(1837)](_0xe1d90a[_0x3502a4(765)])[_0x3502a4(1291)](_0xe1d90a[_0x3502a4(1565)][_0x3502a4(376)](function(_0x58aec0) {
        return _0x25f155[_0x58aec0];
      }));
    if (!_0xe1d90a && debug)
      console[_0x3502a4(1985)](_0x3502a4(2038) + JSON[_0x3502a4(2063)](_0x25f155) + " on " + this[_0x3502a4(765)] + _0x3502a4(2037) + (_0x3502a4(749) + _0x247ff8[_0x3502a4(2180)]("+") + "]"));
    var _0x22f521 = this[_0x3502a4(795)][_0x3502a4(1787)], _0x5c28e4 = this["db"][_0x3502a4(1767)][_0x3502a4(476)];
    function _0x266c43(_0x3b13ae, _0x4a31ad) {
      var _0xff2f14 = _0x3502a4;
      try {
        return _0x5c28e4[_0xff2f14(1229)](_0x3b13ae, _0x4a31ad) === 0;
      } catch (_0x18073b) {
        return ![];
      }
    }
    var _0x59ed40 = _0x247ff8[_0x3502a4(690)](function(_0x3ec6d3, _0x33617c) {
      var _0x2c7ac8 = _0x3502a4, _0x3f58af = _0x3ec6d3[0], _0x11e495 = _0x3ec6d3[1], _0x139782 = _0x22f521[_0x33617c], _0x52f01c = _0x25f155[_0x33617c];
      return [_0x3f58af || _0x139782, _0x3f58af || !_0x139782 ? combine(_0x11e495, _0x139782 && _0x139782[_0x2c7ac8(1828)] ? function(_0x4e40c1) {
        var _0x27dc39 = _0x2c7ac8, _0x2b3a35 = getByKeyPath(_0x4e40c1, _0x33617c);
        return isArray(_0x2b3a35) && _0x2b3a35[_0x27dc39(1235)](function(_0x30feba) {
          return _0x266c43(_0x52f01c, _0x30feba);
        });
      } : function(_0x17d671) {
        return _0x266c43(_0x52f01c, getByKeyPath(_0x17d671, _0x33617c));
      }) : _0x11e495];
    }, [null, null]), _0x511ba5 = _0x59ed40[0], _0x165fa9 = _0x59ed40[1];
    return _0x511ba5 ? this["where"](_0x511ba5[_0x3502a4(765)])[_0x3502a4(1291)](_0x25f155[_0x511ba5[_0x3502a4(1565)]])["filter"](_0x165fa9) : _0xe1d90a ? this[_0x3502a4(805)](_0x165fa9) : this["where"](_0x247ff8)["equals"]("");
  }, _0x56df39[_0x123a31(1897)][_0x123a31(805)] = function(_0x40bc75) {
    var _0x1c0017 = _0x123a31;
    return this["toCollection"]()[_0x1c0017(423)](_0x40bc75);
  }, _0x56df39["prototype"]["count"] = function(_0x12833e) {
    var _0x152c3b = _0x123a31;
    return this["toCollection"]()[_0x152c3b(1675)](_0x12833e);
  }, _0x56df39[_0x123a31(1897)][_0x123a31(425)] = function(_0x11b35c) {
    return this["toCollection"]()["offset"](_0x11b35c);
  }, _0x56df39["prototype"]["limit"] = function(_0xfbd6ae) {
    var _0x205109 = _0x123a31;
    return this[_0x205109(2135)]()[_0x205109(1210)](_0xfbd6ae);
  }, _0x56df39[_0x123a31(1897)][_0x123a31(777)] = function(_0x4a2dc5) {
    var _0x2d678a = _0x123a31;
    return this["toCollection"]()[_0x2d678a(777)](_0x4a2dc5);
  }, _0x56df39[_0x123a31(1897)][_0x123a31(2136)] = function(_0x31462f) {
    var _0x3c42d5 = _0x123a31;
    return this[_0x3c42d5(2135)]()[_0x3c42d5(2136)](_0x31462f);
  }, _0x56df39[_0x123a31(1897)][_0x123a31(2135)] = function() {
    return new this["db"]["Collection"](new this["db"]["WhereClause"](this));
  }, _0x56df39[_0x123a31(1897)][_0x123a31(609)] = function(_0x3dd9ce) {
    var _0x499151 = _0x123a31;
    return new this["db"][_0x499151(1301)](new this["db"]["WhereClause"](this, isArray(_0x3dd9ce) ? "[" + _0x3dd9ce[_0x499151(2180)]("+") + "]" : _0x3dd9ce));
  }, _0x56df39[_0x123a31(1897)][_0x123a31(370)] = function() {
    return this["toCollection"]()["reverse"]();
  }, _0x56df39["prototype"][_0x123a31(1420)] = function(_0x3585cd) {
    var _0x314351 = _0x123a31;
    this["schema"]["mappedClass"] = _0x3585cd;
    var _0x4e07a2 = function(_0x11330f) {
      var _0x512e62 = _0x3001;
      if (!_0x11330f)
        return _0x11330f;
      var _0x3659b1 = Object[_0x512e62(1409)](_0x3585cd[_0x512e62(1897)]);
      for (var _0x4532e1 in _0x11330f)
        if (hasOwn(_0x11330f, _0x4532e1))
          try {
            _0x3659b1[_0x4532e1] = _0x11330f[_0x4532e1];
          } catch (_0x3ad2ef) {
          }
      return _0x3659b1;
    };
    return this[_0x314351(795)][_0x314351(2123)] && this["hook"][_0x314351(663)]["unsubscribe"](this[_0x314351(795)][_0x314351(2123)]), this[_0x314351(795)][_0x314351(2123)] = _0x4e07a2, this["hook"]("reading", _0x4e07a2), _0x3585cd;
  }, _0x56df39[_0x123a31(1897)][_0x123a31(371)] = function() {
    function _0x465af5(_0x2badb1) {
      extend(this, _0x2badb1);
    }
    return this["mapToClass"](_0x465af5);
  }, _0x56df39[_0x123a31(1897)]["add"] = function(_0x4b5f9b, _0x1fee2f) {
    var _0x2e58e8 = _0x123a31, _0x4e7601 = this, _0x1ecef1 = this[_0x2e58e8(795)]["primKey"], _0x578ab6 = _0x1ecef1["auto"], _0x46f065 = _0x1ecef1[_0x2e58e8(1565)], _0x7201dd = _0x4b5f9b;
    return _0x46f065 && _0x578ab6 && (_0x7201dd = workaroundForUndefinedPrimKey(_0x46f065)(_0x4b5f9b)), this[_0x2e58e8(518)](_0x2e58e8(1069), function(_0x50f95d) {
      var _0x34f641 = _0x2e58e8;
      return _0x4e7601[_0x34f641(2104)]["mutate"]({ "trans": _0x50f95d, "type": "add", "keys": _0x1fee2f != null ? [_0x1fee2f] : null, "values": [_0x7201dd] });
    })[_0x2e58e8(1902)](function(_0x135693) {
      var _0x12c31c = _0x2e58e8;
      return _0x135693["numFailures"] ? DexiePromise["reject"](_0x135693[_0x12c31c(1881)][0]) : _0x135693[_0x12c31c(783)];
    })[_0x2e58e8(1902)](function(_0x475ed0) {
      if (_0x46f065)
        try {
          setByKeyPath(_0x4b5f9b, _0x46f065, _0x475ed0);
        } catch (_0x3ab3fe) {
        }
      return _0x475ed0;
    });
  }, _0x56df39[_0x123a31(1897)]["update"] = function(_0x10b1a6, _0x5bee47) {
    var _0x47392b = _0x123a31;
    if (typeof _0x10b1a6 === _0x47392b(1723) && !isArray(_0x10b1a6)) {
      var _0x228054 = getByKeyPath(_0x10b1a6, this[_0x47392b(795)][_0x47392b(1151)]["keyPath"]);
      if (_0x228054 === void 0)
        return rejection(new exceptions[_0x47392b(1496)]("Given object does not contain its primary key"));
      try {
        typeof _0x5bee47 !== _0x47392b(389) ? keys(_0x5bee47)[_0x47392b(839)](function(_0x58426f) {
          setByKeyPath(_0x10b1a6, _0x58426f, _0x5bee47[_0x58426f]);
        }) : _0x5bee47(_0x10b1a6, { "value": _0x10b1a6, "primKey": _0x228054 });
      } catch (_0x1492db) {
      }
      return this[_0x47392b(1837)](_0x47392b(1924))[_0x47392b(1291)](_0x228054)[_0x47392b(1557)](_0x5bee47);
    } else
      return this[_0x47392b(1837)](_0x47392b(1924))[_0x47392b(1291)](_0x10b1a6)[_0x47392b(1557)](_0x5bee47);
  }, _0x56df39["prototype"][_0x123a31(1521)] = function(_0x489b01, _0x4f0102) {
    var _0x3ce9f7 = _0x123a31, _0x823947 = this, _0x2a6993 = this[_0x3ce9f7(795)]["primKey"], _0x22f265 = _0x2a6993["auto"], _0x51aba3 = _0x2a6993[_0x3ce9f7(1565)], _0x6e4b40 = _0x489b01;
    return _0x51aba3 && _0x22f265 && (_0x6e4b40 = workaroundForUndefinedPrimKey(_0x51aba3)(_0x489b01)), this[_0x3ce9f7(518)](_0x3ce9f7(1069), function(_0x26035c) {
      var _0x2198ea = _0x3ce9f7;
      return _0x823947[_0x2198ea(2104)]["mutate"]({ "trans": _0x26035c, "type": _0x2198ea(1521), "values": [_0x6e4b40], "keys": _0x4f0102 != null ? [_0x4f0102] : null });
    })["then"](function(_0x5b5995) {
      var _0x489358 = _0x3ce9f7;
      return _0x5b5995[_0x489358(1731)] ? DexiePromise[_0x489358(1646)](_0x5b5995[_0x489358(1881)][0]) : _0x5b5995[_0x489358(783)];
    })[_0x3ce9f7(1902)](function(_0x2c9237) {
      if (_0x51aba3)
        try {
          setByKeyPath(_0x489b01, _0x51aba3, _0x2c9237);
        } catch (_0x568ada) {
        }
      return _0x2c9237;
    });
  }, _0x56df39[_0x123a31(1897)][_0x123a31(1653)] = function(_0x237708) {
    var _0xbb6c58 = _0x123a31, _0x2fd294 = this;
    return this[_0xbb6c58(518)](_0xbb6c58(1069), function(_0x500048) {
      var _0x40274d = _0xbb6c58;
      return _0x2fd294[_0x40274d(2104)][_0x40274d(976)]({ "trans": _0x500048, "type": _0x40274d(1653), "keys": [_0x237708] });
    })[_0xbb6c58(1902)](function(_0x4f642f) {
      var _0xfcdd2b = _0xbb6c58;
      return _0x4f642f[_0xfcdd2b(1731)] ? DexiePromise[_0xfcdd2b(1646)](_0x4f642f[_0xfcdd2b(1881)][0]) : void 0;
    });
  }, _0x56df39[_0x123a31(1897)][_0x123a31(1607)] = function() {
    var _0x4410ff = _0x123a31, _0x18a99f = this;
    return this[_0x4410ff(518)]("readwrite", function(_0x4450a5) {
      var _0x4bfe88 = _0x4410ff;
      return _0x18a99f["core"][_0x4bfe88(976)]({ "trans": _0x4450a5, "type": "deleteRange", "range": AnyRange });
    })[_0x4410ff(1902)](function(_0x1c6d0f) {
      var _0x436052 = _0x4410ff;
      return _0x1c6d0f[_0x436052(1731)] ? DexiePromise["reject"](_0x1c6d0f[_0x436052(1881)][0]) : void 0;
    });
  }, _0x56df39[_0x123a31(1897)][_0x123a31(360)] = function(_0x39e5a1) {
    var _0x17a1bf = _0x123a31, _0x5be5cd = this;
    return this[_0x17a1bf(518)](_0x17a1bf(576), function(_0x270b0f) {
      var _0x37fb30 = _0x17a1bf;
      return _0x5be5cd[_0x37fb30(2104)][_0x37fb30(1393)]({ "keys": _0x39e5a1, "trans": _0x270b0f })["then"](function(_0x1a8b22) {
        var _0x157fbf = _0x37fb30;
        return _0x1a8b22[_0x157fbf(376)](function(_0x5e9e15) {
          var _0x32ddcb = _0x157fbf;
          return _0x5be5cd[_0x32ddcb(1969)]["reading"][_0x32ddcb(801)](_0x5e9e15);
        });
      });
    });
  }, _0x56df39[_0x123a31(1897)][_0x123a31(2070)] = function(_0x3a7824, _0x58b1e9, _0x58a119) {
    var _0x23be21 = _0x123a31, _0x2b575b = this, _0x450039 = Array[_0x23be21(1920)](_0x58b1e9) ? _0x58b1e9 : void 0;
    _0x58a119 = _0x58a119 || (_0x450039 ? void 0 : _0x58b1e9);
    var _0xad8af8 = _0x58a119 ? _0x58a119["allKeys"] : void 0;
    return this[_0x23be21(518)](_0x23be21(1069), function(_0x5a6089) {
      var _0x26ed36 = _0x23be21, _0x23e1a8 = _0x2b575b[_0x26ed36(795)][_0x26ed36(1151)], _0x1be4ad = _0x23e1a8[_0x26ed36(1850)], _0x5ebff1 = _0x23e1a8[_0x26ed36(1565)];
      if (_0x5ebff1 && _0x450039)
        throw new exceptions["InvalidArgument"](_0x26ed36(1906));
      if (_0x450039 && _0x450039[_0x26ed36(1965)] !== _0x3a7824["length"])
        throw new exceptions["InvalidArgument"](_0x26ed36(546));
      var _0x1a4f71 = _0x3a7824["length"], _0x1da76c = _0x5ebff1 && _0x1be4ad ? _0x3a7824[_0x26ed36(376)](workaroundForUndefinedPrimKey(_0x5ebff1)) : _0x3a7824;
      return _0x2b575b[_0x26ed36(2104)]["mutate"]({ "trans": _0x5a6089, "type": "add", "keys": _0x450039, "values": _0x1da76c, "wantResults": _0xad8af8 })[_0x26ed36(1902)](function(_0x3015d0) {
        var _0x314be7 = _0x26ed36, _0x402787 = _0x3015d0[_0x314be7(1731)], _0x1ec463 = _0x3015d0[_0x314be7(1843)], _0x5bbadf = _0x3015d0[_0x314be7(783)], _0xd83242 = _0x3015d0[_0x314be7(1881)], _0x3f2d8a = _0xad8af8 ? _0x1ec463 : _0x5bbadf;
        if (_0x402787 === 0)
          return _0x3f2d8a;
        throw new BulkError(_0x2b575b[_0x314be7(765)] + _0x314be7(350) + _0x402787 + " of " + _0x1a4f71 + " operations failed", _0xd83242);
      });
    });
  }, _0x56df39[_0x123a31(1897)]["bulkPut"] = function(_0x5b4ef3, _0x14ed41, _0x213c0e) {
    var _0x14bf36 = _0x123a31, _0x5679cd = this, _0x4a0db5 = Array[_0x14bf36(1920)](_0x14ed41) ? _0x14ed41 : void 0;
    _0x213c0e = _0x213c0e || (_0x4a0db5 ? void 0 : _0x14ed41);
    var _0x12077a = _0x213c0e ? _0x213c0e[_0x14bf36(1725)] : void 0;
    return this[_0x14bf36(518)](_0x14bf36(1069), function(_0x4ab34f) {
      var _0x1269e9 = _0x14bf36, _0x1f8f29 = _0x5679cd[_0x1269e9(795)]["primKey"], _0x3a0bd5 = _0x1f8f29[_0x1269e9(1850)], _0x45a7b9 = _0x1f8f29[_0x1269e9(1565)];
      if (_0x45a7b9 && _0x4a0db5)
        throw new exceptions[_0x1269e9(1496)]("bulkPut(): keys argument invalid on tables with inbound keys");
      if (_0x4a0db5 && _0x4a0db5["length"] !== _0x5b4ef3[_0x1269e9(1965)])
        throw new exceptions[_0x1269e9(1496)](_0x1269e9(546));
      var _0x4d42f5 = _0x5b4ef3[_0x1269e9(1965)], _0x466760 = _0x45a7b9 && _0x3a0bd5 ? _0x5b4ef3[_0x1269e9(376)](workaroundForUndefinedPrimKey(_0x45a7b9)) : _0x5b4ef3;
      return _0x5679cd[_0x1269e9(2104)][_0x1269e9(976)]({ "trans": _0x4ab34f, "type": _0x1269e9(1521), "keys": _0x4a0db5, "values": _0x466760, "wantResults": _0x12077a })["then"](function(_0x44f6aa) {
        var _0x8ce645 = _0x1269e9, _0x551df7 = _0x44f6aa[_0x8ce645(1731)], _0x1ae12f = _0x44f6aa[_0x8ce645(1843)], _0x160139 = _0x44f6aa["lastResult"], _0x51368b = _0x44f6aa[_0x8ce645(1881)], _0x89c530 = _0x12077a ? _0x1ae12f : _0x160139;
        if (_0x551df7 === 0)
          return _0x89c530;
        throw new BulkError(_0x5679cd["name"] + _0x8ce645(2129) + _0x551df7 + _0x8ce645(508) + _0x4d42f5 + " operations failed", _0x51368b);
      });
    });
  }, _0x56df39[_0x123a31(1897)][_0x123a31(2008)] = function(_0x419c6a) {
    var _0x58148c = _0x123a31, _0x2cd462 = this, _0x53cc65 = _0x419c6a[_0x58148c(1965)];
    return this["_trans"](_0x58148c(1069), function(_0x545fae) {
      var _0x5b9392 = _0x58148c;
      return _0x2cd462["core"][_0x5b9392(976)]({ "trans": _0x545fae, "type": _0x5b9392(1653), "keys": _0x419c6a });
    })["then"](function(_0x155937) {
      var _0x4b730b = _0x58148c, _0x4c7071 = _0x155937[_0x4b730b(1731)], _0x4da602 = _0x155937[_0x4b730b(783)], _0x3ce2b0 = _0x155937[_0x4b730b(1881)];
      if (_0x4c7071 === 0)
        return _0x4da602;
      throw new BulkError(_0x2cd462[_0x4b730b(765)] + _0x4b730b(1304) + _0x4c7071 + _0x4b730b(508) + _0x53cc65 + " operations failed", _0x3ce2b0);
    });
  }, _0x56df39;
}();
function Events(_0x4223a9) {
  var _0xd3e918 = _0x780a7e, _0x5aabe1 = {}, _0x33057f = function(_0x5cd1c5, _0x10d301) {
    var _0x18fa4c = _0x3001;
    if (_0x10d301) {
      var _0x3a5522 = arguments["length"], _0x5e548b = new Array(_0x3a5522 - 1);
      while (--_0x3a5522)
        _0x5e548b[_0x3a5522 - 1] = arguments[_0x3a5522];
      return _0x5aabe1[_0x5cd1c5][_0x18fa4c(950)][_0x18fa4c(2150)](null, _0x5e548b), _0x4223a9;
    } else {
      if (typeof _0x5cd1c5 === "string")
        return _0x5aabe1[_0x5cd1c5];
    }
  };
  _0x33057f[_0xd3e918(2059)] = _0x406ebf;
  for (var _0x4d22a7 = 1, _0x4a90c4 = arguments[_0xd3e918(1965)]; _0x4d22a7 < _0x4a90c4; ++_0x4d22a7) {
    _0x406ebf(arguments[_0x4d22a7]);
  }
  return _0x33057f;
  function _0x406ebf(_0x1f2b55, _0x1192ec, _0x187232) {
    var _0x27732c = _0xd3e918;
    if (typeof _0x1f2b55 === _0x27732c(1723))
      return _0x5a7bd0(_0x1f2b55);
    if (!_0x1192ec)
      _0x1192ec = reverseStoppableEventChain;
    if (!_0x187232)
      _0x187232 = nop;
    var _0x459bec = { "subscribers": [], "fire": _0x187232, "subscribe": function(_0xb1a7d2) {
      var _0x442d12 = _0x27732c;
      _0x459bec[_0x442d12(1030)][_0x442d12(1879)](_0xb1a7d2) === -1 && (_0x459bec[_0x442d12(1030)]["push"](_0xb1a7d2), _0x459bec[_0x442d12(801)] = _0x1192ec(_0x459bec[_0x442d12(801)], _0xb1a7d2));
    }, "unsubscribe": function(_0xea8281) {
      var _0x1261b8 = _0x27732c;
      _0x459bec[_0x1261b8(1030)] = _0x459bec["subscribers"]["filter"](function(_0x157025) {
        return _0x157025 !== _0xea8281;
      }), _0x459bec["fire"] = _0x459bec["subscribers"][_0x1261b8(690)](_0x1192ec, _0x187232);
    } };
    return _0x5aabe1[_0x1f2b55] = _0x33057f[_0x1f2b55] = _0x459bec, _0x459bec;
  }
  function _0x5a7bd0(_0x7f732f) {
    var _0x5892b9 = _0xd3e918;
    keys(_0x7f732f)[_0x5892b9(839)](function(_0x3b8795) {
      var _0x3a81cd = _0x5892b9, _0x34f2a9 = _0x7f732f[_0x3b8795];
      if (isArray(_0x34f2a9))
        _0x406ebf(_0x3b8795, _0x7f732f[_0x3b8795][0], _0x7f732f[_0x3b8795][1]);
      else {
        if (_0x34f2a9 === _0x3a81cd(1385))
          var _0x2c586e = _0x406ebf(_0x3b8795, mirror, function _0x29c323() {
            var _0x373dd2 = _0x3a81cd, _0x3056e4 = arguments[_0x373dd2(1965)], _0x58ab1d = new Array(_0x3056e4);
            while (_0x3056e4--)
              _0x58ab1d[_0x3056e4] = arguments[_0x3056e4];
            _0x2c586e[_0x373dd2(1030)]["forEach"](function(_0x4b11f6) {
              asap$1(function _0x49ee4e() {
                var _0x3cc568 = _0x3001;
                _0x4b11f6[_0x3cc568(2150)](null, _0x58ab1d);
              });
            });
          });
        else
          throw new exceptions[_0x3a81cd(1496)]("Invalid event config");
      }
    });
  }
}
function makeClassConstructor(_0x8386b6, _0x2a78da) {
  return derive(_0x2a78da)["from"]({ "prototype": _0x8386b6 }), _0x2a78da;
}
function createTableConstructor(_0x52f305) {
  return makeClassConstructor(Table["prototype"], function _0x543125(_0x39f15b, _0x232f95, _0x39acc1) {
    var _0x592738 = _0x3001;
    this["db"] = _0x52f305, this[_0x592738(865)] = _0x39acc1, this["name"] = _0x39f15b, this["schema"] = _0x232f95, this["hook"] = _0x52f305[_0x592738(640)][_0x39f15b] ? _0x52f305[_0x592738(640)][_0x39f15b][_0x592738(1969)] : Events(null, { "creating": [hookCreatingChain, nop], "reading": [pureFunctionChain, mirror], "updating": [hookUpdatingChain, nop], "deleting": [hookDeletingChain, nop] });
  });
}
function isPlainKeyRange(_0x5a1fc0, _0xdc3720) {
  var _0x1881b0 = _0x780a7e;
  return !(_0x5a1fc0["filter"] || _0x5a1fc0[_0x1881b0(1029)] || _0x5a1fc0["or"]) && (_0xdc3720 ? _0x5a1fc0[_0x1881b0(1669)] : !_0x5a1fc0[_0x1881b0(1992)]);
}
function addFilter(_0x3ebcf8, _0x3d4840) {
  var _0x59fe91 = _0x780a7e;
  _0x3ebcf8["filter"] = combine(_0x3ebcf8[_0x59fe91(805)], _0x3d4840);
}
function addReplayFilter(_0x5f40c2, _0x1f70b2, _0x5d1418) {
  var _0x4b09c9 = _0x780a7e, _0x3e0350 = _0x5f40c2[_0x4b09c9(1992)];
  _0x5f40c2[_0x4b09c9(1992)] = _0x3e0350 ? function() {
    return combine(_0x3e0350(), _0x1f70b2());
  } : _0x1f70b2, _0x5f40c2[_0x4b09c9(1669)] = _0x5d1418 && !_0x3e0350;
}
function addMatchFilter(_0x321fde, _0x335e89) {
  _0x321fde["isMatch"] = combine(_0x321fde["isMatch"], _0x335e89);
}
function getIndexOrStore(_0xfba8e6, _0x6677c3) {
  var _0xb791d5 = _0x780a7e;
  if (_0xfba8e6[_0xb791d5(561)])
    return _0x6677c3[_0xb791d5(931)];
  var _0x58f9a3 = _0x6677c3["getIndexByKeyPath"](_0xfba8e6[_0xb791d5(1128)]);
  if (!_0x58f9a3)
    throw new exceptions[_0xb791d5(1728)](_0xb791d5(1273) + _0xfba8e6[_0xb791d5(1128)] + " on object store " + _0x6677c3[_0xb791d5(765)] + _0xb791d5(2155));
  return _0x58f9a3;
}
function openCursor(_0x1f0941, _0x5696c0, _0x420c52) {
  var _0x1659cd = _0x780a7e, _0x2c345e = getIndexOrStore(_0x1f0941, _0x5696c0[_0x1659cd(795)]);
  return _0x5696c0[_0x1659cd(1109)]({ "trans": _0x420c52, "values": !_0x1f0941[_0x1659cd(2011)], "reverse": _0x1f0941[_0x1659cd(355)] === _0x1659cd(1104), "unique": !!_0x1f0941["unique"], "query": { "index": _0x2c345e, "range": _0x1f0941[_0x1659cd(377)] } });
}
function iter(_0x212e5f, _0x22cffa, _0x370654, _0x38f3b9) {
  var _0x1ca821 = _0x780a7e, _0x5d3401 = _0x212e5f[_0x1ca821(1992)] ? combine(_0x212e5f[_0x1ca821(805)], _0x212e5f["replayFilter"]()) : _0x212e5f["filter"];
  if (!_0x212e5f["or"])
    return iterate(openCursor(_0x212e5f, _0x38f3b9, _0x370654), combine(_0x212e5f[_0x1ca821(1029)], _0x5d3401), _0x22cffa, !_0x212e5f[_0x1ca821(2011)] && _0x212e5f[_0x1ca821(1347)]);
  else {
    var _0x214873 = {}, _0xe88522 = function(_0x3551aa, _0x2263d3, _0x42f975) {
      var _0x3a678a = _0x1ca821;
      if (!_0x5d3401 || _0x5d3401(_0x2263d3, _0x42f975, function(_0x439ca3) {
        var _0x3dbbca = _0x3001;
        return _0x2263d3[_0x3dbbca(712)](_0x439ca3);
      }, function(_0x22fe1b) {
        var _0x3fbb89 = _0x3001;
        return _0x2263d3[_0x3fbb89(1755)](_0x22fe1b);
      })) {
        var _0xa5d19f = _0x2263d3[_0x3a678a(931)], _0x3e83ee = "" + _0xa5d19f;
        if (_0x3e83ee === "[object ArrayBuffer]")
          _0x3e83ee = "" + new Uint8Array(_0xa5d19f);
        !hasOwn(_0x214873, _0x3e83ee) && (_0x214873[_0x3e83ee] = !![], _0x22cffa(_0x3551aa, _0x2263d3, _0x42f975));
      }
    };
    return Promise["all"]([_0x212e5f["or"][_0x1ca821(2128)](_0xe88522, _0x370654), iterate(openCursor(_0x212e5f, _0x38f3b9, _0x370654), _0x212e5f[_0x1ca821(1029)], _0xe88522, !_0x212e5f[_0x1ca821(2011)] && _0x212e5f[_0x1ca821(1347)])]);
  }
}
function iterate(_0x43d825, _0x235132, _0x4d808f, _0x14c695) {
  var _0x5a8748 = _0x780a7e, _0x99f286 = _0x14c695 ? function(_0x46b49b, _0x23421a, _0x1c72fd) {
    return _0x4d808f(_0x14c695(_0x46b49b), _0x23421a, _0x1c72fd);
  } : _0x4d808f, _0x6f52e5 = wrap(_0x99f286);
  return _0x43d825[_0x5a8748(1902)](function(_0x24c3d6) {
    var _0x29a4c8 = _0x5a8748;
    if (_0x24c3d6)
      return _0x24c3d6[_0x29a4c8(2014)](function() {
        var _0x575af8 = _0x29a4c8, _0xee265a = function() {
          return _0x24c3d6["continue"]();
        };
        if (!_0x235132 || _0x235132(_0x24c3d6, function(_0x2afbc3) {
          return _0xee265a = _0x2afbc3;
        }, function(_0x2474d6) {
          var _0x5edcf8 = _0x3001;
          _0x24c3d6[_0x5edcf8(712)](_0x2474d6), _0xee265a = nop;
        }, function(_0x553fe5) {
          var _0x5a79ab = _0x3001;
          _0x24c3d6[_0x5a79ab(1755)](_0x553fe5), _0xee265a = nop;
        }))
          _0x6f52e5(_0x24c3d6[_0x575af8(819)], _0x24c3d6, function(_0x223ea3) {
            return _0xee265a = _0x223ea3;
          });
        _0xee265a();
      });
  });
}
function cmp(_0x2eea89, _0x12a1c2) {
  var _0x42424d = _0x780a7e;
  try {
    var _0x276c97 = type(_0x2eea89), _0x527b5f = type(_0x12a1c2);
    if (_0x276c97 !== _0x527b5f) {
      if (_0x276c97 === _0x42424d(1526))
        return 1;
      if (_0x527b5f === _0x42424d(1526))
        return -1;
      if (_0x276c97 === _0x42424d(1945))
        return 1;
      if (_0x527b5f === "binary")
        return -1;
      if (_0x276c97 === "string")
        return 1;
      if (_0x527b5f === _0x42424d(1548))
        return -1;
      if (_0x276c97 === _0x42424d(651))
        return 1;
      if (_0x527b5f !== "Date")
        return NaN;
      return -1;
    }
    switch (_0x276c97) {
      case "number":
      case "Date":
      case _0x42424d(1548):
        return _0x2eea89 > _0x12a1c2 ? 1 : _0x2eea89 < _0x12a1c2 ? -1 : 0;
      case _0x42424d(1945): {
        return compareUint8Arrays(getUint8Array(_0x2eea89), getUint8Array(_0x12a1c2));
      }
      case _0x42424d(1526):
        return compareArrays(_0x2eea89, _0x12a1c2);
    }
  } catch (_0x44d39f) {
  }
  return NaN;
}
function compareArrays(_0x475899, _0x584af3) {
  var _0x4e973b = _0x780a7e, _0x106b99 = _0x475899[_0x4e973b(1965)], _0x5a7fcc = _0x584af3[_0x4e973b(1965)], _0x55f5b6 = _0x106b99 < _0x5a7fcc ? _0x106b99 : _0x5a7fcc;
  for (var _0x5a8e97 = 0; _0x5a8e97 < _0x55f5b6; ++_0x5a8e97) {
    var _0x325152 = cmp(_0x475899[_0x5a8e97], _0x584af3[_0x5a8e97]);
    if (_0x325152 !== 0)
      return _0x325152;
  }
  return _0x106b99 === _0x5a7fcc ? 0 : _0x106b99 < _0x5a7fcc ? -1 : 1;
}
function compareUint8Arrays(_0x4235ad, _0x5d5a86) {
  var _0x5c65e6 = _0x780a7e, _0x17d27a = _0x4235ad[_0x5c65e6(1965)], _0x401a1c = _0x5d5a86["length"], _0x5ed5a6 = _0x17d27a < _0x401a1c ? _0x17d27a : _0x401a1c;
  for (var _0x421c57 = 0; _0x421c57 < _0x5ed5a6; ++_0x421c57) {
    if (_0x4235ad[_0x421c57] !== _0x5d5a86[_0x421c57])
      return _0x4235ad[_0x421c57] < _0x5d5a86[_0x421c57] ? -1 : 1;
  }
  return _0x17d27a === _0x401a1c ? 0 : _0x17d27a < _0x401a1c ? -1 : 1;
}
function type(_0x537c35) {
  var _0x1e5fc3 = _0x780a7e, _0x91df0f = typeof _0x537c35;
  if (_0x91df0f !== _0x1e5fc3(1723))
    return _0x91df0f;
  if (ArrayBuffer[_0x1e5fc3(1251)](_0x537c35))
    return _0x1e5fc3(1945);
  var _0x225ecb = toStringTag(_0x537c35);
  return _0x225ecb === "ArrayBuffer" ? _0x1e5fc3(1945) : _0x225ecb;
}
function getUint8Array(_0x1effea) {
  var _0x14e462 = _0x780a7e;
  if (_0x1effea instanceof Uint8Array)
    return _0x1effea;
  if (ArrayBuffer[_0x14e462(1251)](_0x1effea))
    return new Uint8Array(_0x1effea["buffer"], _0x1effea[_0x14e462(1231)], _0x1effea[_0x14e462(1505)]);
  return new Uint8Array(_0x1effea);
}
var Collection = function() {
  var _0x37f098 = _0x780a7e;
  function _0x21d793() {
  }
  return _0x21d793["prototype"][_0x37f098(628)] = function(_0x516765, _0x2cf05c) {
    var _0x4869b7 = _0x37f098, _0x12f092 = this[_0x4869b7(1149)];
    return _0x12f092["error"] ? _0x12f092[_0x4869b7(2178)][_0x4869b7(518)](null, rejection[_0x4869b7(517)](null, _0x12f092[_0x4869b7(2165)])) : _0x12f092[_0x4869b7(2178)][_0x4869b7(518)](_0x4869b7(576), _0x516765)[_0x4869b7(1902)](_0x2cf05c);
  }, _0x21d793["prototype"][_0x37f098(489)] = function(_0x18122b) {
    var _0x110919 = _0x37f098, _0x2b0431 = this[_0x110919(1149)];
    return _0x2b0431[_0x110919(2165)] ? _0x2b0431[_0x110919(2178)]["_trans"](null, rejection[_0x110919(517)](null, _0x2b0431[_0x110919(2165)])) : _0x2b0431[_0x110919(2178)][_0x110919(518)](_0x110919(1069), _0x18122b, _0x110919(774));
  }, _0x21d793[_0x37f098(1897)]["_addAlgorithm"] = function(_0xe8ddfe) {
    var _0x53f9bb = _0x37f098, _0x550db3 = this[_0x53f9bb(1149)];
    _0x550db3[_0x53f9bb(1029)] = combine(_0x550db3[_0x53f9bb(1029)], _0xe8ddfe);
  }, _0x21d793["prototype"][_0x37f098(2128)] = function(_0x40930a, _0x404f42) {
    var _0x5524e2 = _0x37f098;
    return iter(this[_0x5524e2(1149)], _0x40930a, _0x404f42, this[_0x5524e2(1149)][_0x5524e2(2178)]["core"]);
  }, _0x21d793[_0x37f098(1897)][_0x37f098(2184)] = function(_0x12d5ae) {
    var _0x53b184 = _0x37f098, _0x4ce2dd = Object[_0x53b184(1409)](this[_0x53b184(1893)][_0x53b184(1897)]), _0x27c6a0 = Object[_0x53b184(1409)](this["_ctx"]);
    if (_0x12d5ae)
      extend(_0x27c6a0, _0x12d5ae);
    return _0x4ce2dd[_0x53b184(1149)] = _0x27c6a0, _0x4ce2dd;
  }, _0x21d793["prototype"][_0x37f098(1319)] = function() {
    var _0x2d721a = _0x37f098;
    return this[_0x2d721a(1149)][_0x2d721a(1347)] = null, this;
  }, _0x21d793["prototype"][_0x37f098(777)] = function(_0xe5e714) {
    var _0x148cd8 = _0x37f098, _0x44d9e5 = this[_0x148cd8(1149)];
    return this[_0x148cd8(628)](function(_0x43bd27) {
      var _0x240e19 = _0x148cd8;
      return iter(_0x44d9e5, _0xe5e714, _0x43bd27, _0x44d9e5[_0x240e19(2178)][_0x240e19(2104)]);
    });
  }, _0x21d793[_0x37f098(1897)]["count"] = function(_0x23e6ee) {
    var _0x5e34b0 = _0x37f098, _0x20ecb4 = this;
    return this[_0x5e34b0(628)](function(_0x1c80f7) {
      var _0x630950 = _0x5e34b0, _0x894eb = _0x20ecb4["_ctx"], _0x319491 = _0x894eb["table"][_0x630950(2104)];
      if (isPlainKeyRange(_0x894eb, !![]))
        return _0x319491["count"]({ "trans": _0x1c80f7, "query": { "index": getIndexOrStore(_0x894eb, _0x319491[_0x630950(795)]), "range": _0x894eb[_0x630950(377)] } })[_0x630950(1902)](function(_0x1ff3d8) {
          return Math["min"](_0x1ff3d8, _0x894eb["limit"]);
        });
      else {
        var _0x2656eb = 0;
        return iter(_0x894eb, function() {
          return ++_0x2656eb, ![];
        }, _0x1c80f7, _0x319491)[_0x630950(1902)](function() {
          return _0x2656eb;
        });
      }
    })[_0x5e34b0(1902)](_0x23e6ee);
  }, _0x21d793[_0x37f098(1897)][_0x37f098(910)] = function(_0x21dc4f, _0xf0832a) {
    var _0xa9bc9a = _0x37f098, _0x248563 = _0x21dc4f[_0xa9bc9a(1201)](".")[_0xa9bc9a(370)](), _0x2947d1 = _0x248563[0], _0x575eee = _0x248563[_0xa9bc9a(1965)] - 1;
    function _0x22f054(_0x313274, _0xc2b74e) {
      if (_0xc2b74e)
        return _0x22f054(_0x313274[_0x248563[_0xc2b74e]], _0xc2b74e - 1);
      return _0x313274[_0x2947d1];
    }
    var _0x2fe54a = this["_ctx"][_0xa9bc9a(355)] === _0xa9bc9a(670) ? 1 : -1;
    function _0x33b7db(_0x2de1d8, _0x28d1d4) {
      var _0x540af0 = _0x22f054(_0x2de1d8, _0x575eee), _0x3e6315 = _0x22f054(_0x28d1d4, _0x575eee);
      return _0x540af0 < _0x3e6315 ? -_0x2fe54a : _0x540af0 > _0x3e6315 ? _0x2fe54a : 0;
    }
    return this[_0xa9bc9a(2136)](function(_0x41b6de) {
      return _0x41b6de["sort"](_0x33b7db);
    })[_0xa9bc9a(1902)](_0xf0832a);
  }, _0x21d793["prototype"][_0x37f098(2136)] = function(_0x43c324) {
    var _0x42fde4 = _0x37f098, _0x40f834 = this;
    return this[_0x42fde4(628)](function(_0x3ba2a9) {
      var _0x1ad409 = _0x42fde4, _0xa31670 = _0x40f834[_0x1ad409(1149)];
      if (_0xa31670[_0x1ad409(355)] === "next" && isPlainKeyRange(_0xa31670, !![]) && _0xa31670["limit"] > 0) {
        var _0x35177c = _0xa31670[_0x1ad409(1347)], _0x82f579 = getIndexOrStore(_0xa31670, _0xa31670["table"][_0x1ad409(2104)]["schema"]);
        return _0xa31670[_0x1ad409(2178)][_0x1ad409(2104)][_0x1ad409(615)]({ "trans": _0x3ba2a9, "limit": _0xa31670[_0x1ad409(1210)], "values": !![], "query": { "index": _0x82f579, "range": _0xa31670[_0x1ad409(377)] } })[_0x1ad409(1902)](function(_0x5a3aa7) {
          var _0x40a19c = _0x1ad409, _0x20e48d = _0x5a3aa7[_0x40a19c(411)];
          return _0x35177c ? _0x20e48d["map"](_0x35177c) : _0x20e48d;
        });
      } else {
        var _0x4a5017 = [];
        return iter(_0xa31670, function(_0x1a3d4b) {
          return _0x4a5017["push"](_0x1a3d4b);
        }, _0x3ba2a9, _0xa31670["table"][_0x1ad409(2104)])[_0x1ad409(1902)](function() {
          return _0x4a5017;
        });
      }
    }, _0x43c324);
  }, _0x21d793[_0x37f098(1897)][_0x37f098(425)] = function(_0x1cd908) {
    var _0x5a7c85 = _0x37f098, _0x496f62 = this["_ctx"];
    if (_0x1cd908 <= 0)
      return this;
    return _0x496f62[_0x5a7c85(425)] += _0x1cd908, isPlainKeyRange(_0x496f62) ? addReplayFilter(_0x496f62, function() {
      var _0x187c37 = _0x1cd908;
      return function(_0x54c620, _0x94f4eb) {
        if (_0x187c37 === 0)
          return !![];
        if (_0x187c37 === 1)
          return --_0x187c37, ![];
        return _0x94f4eb(function() {
          var _0x1bba20 = _0x3001;
          _0x54c620[_0x1bba20(995)](_0x187c37), _0x187c37 = 0;
        }), ![];
      };
    }) : addReplayFilter(_0x496f62, function() {
      var _0x44b8ef = _0x1cd908;
      return function() {
        return --_0x44b8ef < 0;
      };
    }), this;
  }, _0x21d793[_0x37f098(1897)][_0x37f098(1210)] = function(_0x5acc19) {
    var _0x34c8ad = _0x37f098;
    return this[_0x34c8ad(1149)][_0x34c8ad(1210)] = Math["min"](this[_0x34c8ad(1149)][_0x34c8ad(1210)], _0x5acc19), addReplayFilter(this[_0x34c8ad(1149)], function() {
      var _0x4f2571 = _0x5acc19;
      return function(_0x2ce8ee, _0x3ecde2, _0x1ae1c5) {
        if (--_0x4f2571 <= 0)
          _0x3ecde2(_0x1ae1c5);
        return _0x4f2571 >= 0;
      };
    }, !![]), this;
  }, _0x21d793["prototype"]["until"] = function(_0x17751a, _0x1dc0a9) {
    var _0x297bd6 = _0x37f098;
    return addFilter(this[_0x297bd6(1149)], function(_0x784f7a, _0x51de1b, _0xbb4906) {
      var _0x173208 = _0x297bd6;
      return _0x17751a(_0x784f7a[_0x173208(819)]) ? (_0x51de1b(_0xbb4906), _0x1dc0a9) : !![];
    }), this;
  }, _0x21d793["prototype"][_0x37f098(1077)] = function(_0x2b6bf2) {
    var _0x49da5e = _0x37f098;
    return this["limit"](1)[_0x49da5e(2136)](function(_0x355783) {
      return _0x355783[0];
    })[_0x49da5e(1902)](_0x2b6bf2);
  }, _0x21d793["prototype"][_0x37f098(909)] = function(_0x5a53ec) {
    var _0x74c4b2 = _0x37f098;
    return this[_0x74c4b2(370)]()[_0x74c4b2(1077)](_0x5a53ec);
  }, _0x21d793[_0x37f098(1897)]["filter"] = function(_0x5abac2) {
    var _0x1cd75e = _0x37f098;
    return addFilter(this[_0x1cd75e(1149)], function(_0x4f4392) {
      return _0x5abac2(_0x4f4392["value"]);
    }), addMatchFilter(this[_0x1cd75e(1149)], _0x5abac2), this;
  }, _0x21d793[_0x37f098(1897)][_0x37f098(423)] = function(_0x39aa55) {
    return this["filter"](_0x39aa55);
  }, _0x21d793["prototype"]["or"] = function(_0x33e8cf) {
    var _0x53b8b1 = _0x37f098;
    return new this["db"][_0x53b8b1(1417)](this[_0x53b8b1(1149)]["table"], _0x33e8cf, this);
  }, _0x21d793[_0x37f098(1897)][_0x37f098(370)] = function() {
    var _0x1f8219 = _0x37f098;
    this[_0x1f8219(1149)][_0x1f8219(355)] = this[_0x1f8219(1149)]["dir"] === "prev" ? _0x1f8219(670) : _0x1f8219(1104);
    if (this[_0x1f8219(792)])
      this[_0x1f8219(792)](this[_0x1f8219(1149)][_0x1f8219(355)]);
    return this;
  }, _0x21d793["prototype"][_0x37f098(1427)] = function() {
    var _0x390afb = _0x37f098;
    return this[_0x390afb(370)]();
  }, _0x21d793["prototype"]["eachKey"] = function(_0x15244f) {
    var _0x2f54e7 = _0x37f098, _0x269bfa = this[_0x2f54e7(1149)];
    return _0x269bfa[_0x2f54e7(2011)] = !_0x269bfa[_0x2f54e7(1025)], this[_0x2f54e7(777)](function(_0x1d7072, _0x4772d0) {
      _0x15244f(_0x4772d0["key"], _0x4772d0);
    });
  }, _0x21d793["prototype"][_0x37f098(1809)] = function(_0x8c26f0) {
    var _0x16e358 = _0x37f098;
    return this["_ctx"][_0x16e358(531)] = _0x16e358(531), this["eachKey"](_0x8c26f0);
  }, _0x21d793[_0x37f098(1897)][_0x37f098(728)] = function(_0x72214b) {
    var _0x309d67 = _0x37f098, _0x5784fa = this["_ctx"];
    return _0x5784fa[_0x309d67(2011)] = !_0x5784fa[_0x309d67(1025)], this[_0x309d67(777)](function(_0xe2d8f8, _0x1e6e6a) {
      var _0x25f217 = _0x309d67;
      _0x72214b(_0x1e6e6a[_0x25f217(931)], _0x1e6e6a);
    });
  }, _0x21d793[_0x37f098(1897)][_0x37f098(605)] = function(_0x4b6b32) {
    var _0x133f7a = _0x37f098, _0x52f076 = this["_ctx"];
    _0x52f076["keysOnly"] = !_0x52f076["isMatch"];
    var _0x3411ed = [];
    return this[_0x133f7a(777)](function(_0x3b3d33, _0x3f0e08) {
      var _0x38d96f = _0x133f7a;
      _0x3411ed[_0x38d96f(1991)](_0x3f0e08["key"]);
    })[_0x133f7a(1902)](function() {
      return _0x3411ed;
    })[_0x133f7a(1902)](_0x4b6b32);
  }, _0x21d793[_0x37f098(1897)][_0x37f098(1628)] = function(_0x2ed445) {
    var _0x42910b = _0x37f098, _0x3d3b76 = this["_ctx"];
    if (_0x3d3b76[_0x42910b(355)] === "next" && isPlainKeyRange(_0x3d3b76, !![]) && _0x3d3b76[_0x42910b(1210)] > 0)
      return this["_read"](function(_0x4a0225) {
        var _0x31d3e8 = _0x42910b, _0x3c46a1 = getIndexOrStore(_0x3d3b76, _0x3d3b76[_0x31d3e8(2178)]["core"][_0x31d3e8(795)]);
        return _0x3d3b76[_0x31d3e8(2178)][_0x31d3e8(2104)][_0x31d3e8(615)]({ "trans": _0x4a0225, "values": ![], "limit": _0x3d3b76[_0x31d3e8(1210)], "query": { "index": _0x3c46a1, "range": _0x3d3b76[_0x31d3e8(377)] } });
      })["then"](function(_0xd51482) {
        var _0x50a404 = _0xd51482["result"];
        return _0x50a404;
      })[_0x42910b(1902)](_0x2ed445);
    _0x3d3b76[_0x42910b(2011)] = !_0x3d3b76[_0x42910b(1025)];
    var _0xa570f7 = [];
    return this["each"](function(_0x270857, _0x1a8acf) {
      var _0x40daf8 = _0x42910b;
      _0xa570f7["push"](_0x1a8acf[_0x40daf8(931)]);
    })[_0x42910b(1902)](function() {
      return _0xa570f7;
    })[_0x42910b(1902)](_0x2ed445);
  }, _0x21d793[_0x37f098(1897)][_0x37f098(594)] = function(_0x5bdb32) {
    var _0x2bed76 = _0x37f098;
    return this[_0x2bed76(1149)][_0x2bed76(531)] = _0x2bed76(531), this[_0x2bed76(605)](_0x5bdb32);
  }, _0x21d793[_0x37f098(1897)][_0x37f098(849)] = function(_0x53a3ec) {
    var _0x442b2d = _0x37f098;
    return this[_0x442b2d(1210)](1)[_0x442b2d(605)](function(_0x2fccc0) {
      return _0x2fccc0[0];
    })[_0x442b2d(1902)](_0x53a3ec);
  }, _0x21d793[_0x37f098(1897)][_0x37f098(1782)] = function(_0x4ea462) {
    var _0x45c7b2 = _0x37f098;
    return this[_0x45c7b2(370)]()[_0x45c7b2(849)](_0x4ea462);
  }, _0x21d793[_0x37f098(1897)][_0x37f098(1448)] = function() {
    var _0x5caf69 = _0x37f098, _0x24aecb = this[_0x5caf69(1149)], _0x19e66a = _0x24aecb[_0x5caf69(1128)] && _0x24aecb["table"][_0x5caf69(795)][_0x5caf69(1787)][_0x24aecb["index"]];
    if (!_0x19e66a || !_0x19e66a[_0x5caf69(1828)])
      return this;
    var _0x3ba7bd = {};
    return addFilter(this[_0x5caf69(1149)], function(_0x6c0904) {
      var _0x4acffa = _0x5caf69, _0x2cb892 = _0x6c0904[_0x4acffa(931)][_0x4acffa(2073)](), _0x3941c3 = hasOwn(_0x3ba7bd, _0x2cb892);
      return _0x3ba7bd[_0x2cb892] = !![], !_0x3941c3;
    }), this;
  }, _0x21d793[_0x37f098(1897)][_0x37f098(1557)] = function(_0x1d714a) {
    var _0x4c017f = _0x37f098, _0x29deb6 = this, _0x37a106 = this[_0x4c017f(1149)];
    return this["_write"](function(_0x6b680) {
      var _0x19e0db = _0x4c017f, _0x1efedf;
      if (typeof _0x1d714a === _0x19e0db(389))
        _0x1efedf = _0x1d714a;
      else {
        var _0xbc343d = keys(_0x1d714a), _0x30f827 = _0xbc343d[_0x19e0db(1965)];
        _0x1efedf = function(_0x4d18a7) {
          var _0xa840a2 = ![];
          for (var _0x5a2582 = 0; _0x5a2582 < _0x30f827; ++_0x5a2582) {
            var _0x30e668 = _0xbc343d[_0x5a2582], _0x3778eb = _0x1d714a[_0x30e668];
            getByKeyPath(_0x4d18a7, _0x30e668) !== _0x3778eb && (setByKeyPath(_0x4d18a7, _0x30e668, _0x3778eb), _0xa840a2 = !![]);
          }
          return _0xa840a2;
        };
      }
      var _0xb7bc9d = _0x37a106["table"][_0x19e0db(2104)], _0x8d8a73 = _0xb7bc9d[_0x19e0db(795)]["primaryKey"], _0x485d55 = _0x8d8a73[_0x19e0db(2027)], _0x3d4c47 = _0x8d8a73[_0x19e0db(1981)], _0x42b385 = _0x29deb6["db"][_0x19e0db(1161)][_0x19e0db(1089)] || 200, _0x16113b = [], _0x349c41 = 0, _0x24e487 = [], _0x5a30ac = function(_0x2b4fbc, _0x3ae178) {
        var _0x162b25 = _0x19e0db, _0x6a5926 = _0x3ae178["failures"], _0x3b3d68 = _0x3ae178[_0x162b25(1731)];
        _0x349c41 += _0x2b4fbc - _0x3b3d68;
        for (var _0x36c8ab = 0, _0x3d231d = keys(_0x6a5926); _0x36c8ab < _0x3d231d[_0x162b25(1965)]; _0x36c8ab++) {
          var _0x1ac321 = _0x3d231d[_0x36c8ab];
          _0x16113b[_0x162b25(1991)](_0x6a5926[_0x1ac321]);
        }
      };
      return _0x29deb6[_0x19e0db(2184)]()[_0x19e0db(1628)]()["then"](function(_0x4f0a4e) {
        var _0x425e87 = _0x19e0db, _0x1f1b30 = function(_0x14b6cf) {
          var _0x4a12aa = _0x3001, _0x1d9317 = Math["min"](_0x42b385, _0x4f0a4e[_0x4a12aa(1965)] - _0x14b6cf);
          return _0xb7bc9d["getMany"]({ "trans": _0x6b680, "keys": _0x4f0a4e[_0x4a12aa(1215)](_0x14b6cf, _0x14b6cf + _0x1d9317), "cache": _0x4a12aa(1545) })["then"](function(_0x75df1b) {
            var _0x45427 = _0x4a12aa, _0x103e05 = [], _0xe54aa3 = [], _0x118b30 = _0x485d55 ? [] : null, _0x58799f = [];
            for (var _0x3193b3 = 0; _0x3193b3 < _0x1d9317; ++_0x3193b3) {
              var _0x16d3ca = _0x75df1b[_0x3193b3], _0x61764 = { "value": deepClone(_0x16d3ca), "primKey": _0x4f0a4e[_0x14b6cf + _0x3193b3] };
              if (_0x1efedf[_0x45427(1206)](_0x61764, _0x61764["value"], _0x61764) !== ![]) {
                if (_0x61764[_0x45427(819)] == null)
                  _0x58799f[_0x45427(1991)](_0x4f0a4e[_0x14b6cf + _0x3193b3]);
                else {
                  if (!_0x485d55 && cmp(_0x3d4c47(_0x16d3ca), _0x3d4c47(_0x61764["value"])) !== 0)
                    _0x58799f[_0x45427(1991)](_0x4f0a4e[_0x14b6cf + _0x3193b3]), _0x103e05[_0x45427(1991)](_0x61764[_0x45427(819)]);
                  else {
                    _0xe54aa3[_0x45427(1991)](_0x61764[_0x45427(819)]);
                    if (_0x485d55)
                      _0x118b30["push"](_0x4f0a4e[_0x14b6cf + _0x3193b3]);
                  }
                }
              }
            }
            var _0x24ff07 = isPlainKeyRange(_0x37a106) && _0x37a106[_0x45427(1210)] === Infinity && (typeof _0x1d714a !== _0x45427(389) || _0x1d714a === deleteCallback) && { "index": _0x37a106[_0x45427(1128)], "range": _0x37a106[_0x45427(377)] };
            return Promise[_0x45427(1211)](_0x103e05[_0x45427(1965)] > 0 && _0xb7bc9d[_0x45427(976)]({ "trans": _0x6b680, "type": _0x45427(2170), "values": _0x103e05 })["then"](function(_0x38df11) {
              var _0x5258bc = _0x45427;
              for (var _0x41263a in _0x38df11[_0x5258bc(1881)]) {
                _0x58799f[_0x5258bc(1314)](parseInt(_0x41263a), 1);
              }
              _0x5a30ac(_0x103e05["length"], _0x38df11);
            }))[_0x45427(1902)](function() {
              var _0x3bdd09 = _0x45427;
              return (_0xe54aa3[_0x3bdd09(1965)] > 0 || _0x24ff07 && typeof _0x1d714a === _0x3bdd09(1723)) && _0xb7bc9d[_0x3bdd09(976)]({ "trans": _0x6b680, "type": _0x3bdd09(1521), "keys": _0x118b30, "values": _0xe54aa3, "criteria": _0x24ff07, "changeSpec": typeof _0x1d714a !== _0x3bdd09(389) && _0x1d714a })[_0x3bdd09(1902)](function(_0x267d8f) {
                var _0x4d70c6 = _0x3bdd09;
                return _0x5a30ac(_0xe54aa3[_0x4d70c6(1965)], _0x267d8f);
              });
            })[_0x45427(1902)](function() {
              var _0x1710f3 = _0x45427;
              return (_0x58799f[_0x1710f3(1965)] > 0 || _0x24ff07 && _0x1d714a === deleteCallback) && _0xb7bc9d["mutate"]({ "trans": _0x6b680, "type": _0x1710f3(1653), "keys": _0x58799f, "criteria": _0x24ff07 })["then"](function(_0x39c54a) {
                return _0x5a30ac(_0x58799f["length"], _0x39c54a);
              });
            })[_0x45427(1902)](function() {
              var _0x1a507c = _0x45427;
              return _0x4f0a4e[_0x1a507c(1965)] > _0x14b6cf + _0x1d9317 && _0x1f1b30(_0x14b6cf + _0x42b385);
            });
          });
        };
        return _0x1f1b30(0)[_0x425e87(1902)](function() {
          var _0x4fe229 = _0x425e87;
          if (_0x16113b[_0x4fe229(1965)] > 0)
            throw new ModifyError(_0x4fe229(1413), _0x16113b, _0x349c41, _0x24e487);
          return _0x4f0a4e[_0x4fe229(1965)];
        });
      });
    });
  }, _0x21d793[_0x37f098(1897)]["delete"] = function() {
    var _0x54d63e = _0x37f098, _0x27734d = this["_ctx"], _0x5a375c = _0x27734d[_0x54d63e(377)];
    if (isPlainKeyRange(_0x27734d) && (_0x27734d["isPrimKey"] && !hangsOnDeleteLargeKeyRange || _0x5a375c[_0x54d63e(1514)] === 3))
      return this["_write"](function(_0x22967d) {
        var _0x50eb1e = _0x54d63e, _0x488e07 = _0x27734d["table"]["core"][_0x50eb1e(795)][_0x50eb1e(931)], _0x17391a = _0x5a375c;
        return _0x27734d[_0x50eb1e(2178)][_0x50eb1e(2104)]["count"]({ "trans": _0x22967d, "query": { "index": _0x488e07, "range": _0x17391a } })[_0x50eb1e(1902)](function(_0x19dba5) {
          var _0x4de0b7 = _0x50eb1e;
          return _0x27734d[_0x4de0b7(2178)]["core"][_0x4de0b7(976)]({ "trans": _0x22967d, "type": _0x4de0b7(1105), "range": _0x17391a })[_0x4de0b7(1902)](function(_0x36d0be) {
            var _0x49629d = _0x4de0b7, _0x14b1a9 = _0x36d0be[_0x49629d(1881)];
            _0x36d0be["lastResult"], _0x36d0be[_0x49629d(1843)];
            var _0x4937e1 = _0x36d0be[_0x49629d(1731)];
            if (_0x4937e1)
              throw new ModifyError(_0x49629d(1566), Object[_0x49629d(605)](_0x14b1a9)[_0x49629d(376)](function(_0x1a09d4) {
                return _0x14b1a9[_0x1a09d4];
              }), _0x19dba5 - _0x4937e1);
            return _0x19dba5 - _0x4937e1;
          });
        });
      });
    return this[_0x54d63e(1557)](deleteCallback);
  }, _0x21d793;
}(), deleteCallback = function(_0xbafe7c, _0x1d912a) {
  var _0x35ffab = _0x780a7e;
  return _0x1d912a[_0x35ffab(819)] = null;
};
function createCollectionConstructor(_0x230f4c) {
  var _0x5a676a = _0x780a7e;
  return makeClassConstructor(Collection[_0x5a676a(1897)], function _0xc6577b(_0x2cb906, _0x1ce1f6) {
    var _0x4983c1 = _0x5a676a;
    this["db"] = _0x230f4c;
    var _0x89fe01 = AnyRange, _0x324805 = null;
    if (_0x1ce1f6)
      try {
        _0x89fe01 = _0x1ce1f6();
      } catch (_0x712d3d) {
        _0x324805 = _0x712d3d;
      }
    var _0x1fd51c = _0x2cb906["_ctx"], _0x71640 = _0x1fd51c[_0x4983c1(2178)], _0x146396 = _0x71640["hook"][_0x4983c1(663)][_0x4983c1(801)];
    this[_0x4983c1(1149)] = { "table": _0x71640, "index": _0x1fd51c[_0x4983c1(1128)], "isPrimKey": !_0x1fd51c["index"] || _0x71640[_0x4983c1(795)][_0x4983c1(1151)][_0x4983c1(1565)] && _0x1fd51c[_0x4983c1(1128)] === _0x71640[_0x4983c1(795)]["primKey"][_0x4983c1(765)], "range": _0x89fe01, "keysOnly": ![], "dir": _0x4983c1(670), "unique": "", "algorithm": null, "filter": null, "replayFilter": null, "justLimit": !![], "isMatch": null, "offset": 0, "limit": Infinity, "error": _0x324805, "or": _0x1fd51c["or"], "valueMapper": _0x146396 !== mirror ? _0x146396 : null };
  });
}
function simpleCompare(_0x4ac90e, _0x26754a) {
  return _0x4ac90e < _0x26754a ? -1 : _0x4ac90e === _0x26754a ? 0 : 1;
}
function simpleCompareReverse(_0x4f5f6d, _0x525384) {
  return _0x4f5f6d > _0x525384 ? -1 : _0x4f5f6d === _0x525384 ? 0 : 1;
}
function fail(_0x4af805, _0x1da534, _0x4770cf) {
  var _0x37170d = _0x780a7e, _0x1ddceb = _0x4af805 instanceof WhereClause ? new _0x4af805[_0x37170d(1301)](_0x4af805) : _0x4af805;
  return _0x1ddceb[_0x37170d(1149)][_0x37170d(2165)] = _0x4770cf ? new _0x4770cf(_0x1da534) : new TypeError(_0x1da534), _0x1ddceb;
}
function emptyCollection(_0xec09fc) {
  var _0x4b996c = _0x780a7e;
  return new _0xec09fc[_0x4b996c(1301)](_0xec09fc, function() {
    return rangeEqual("");
  })[_0x4b996c(1210)](0);
}
function upperFactory(_0x4535e5) {
  var _0x3cc431 = _0x780a7e;
  return _0x4535e5 === _0x3cc431(670) ? function(_0x19f046) {
    var _0x5501c1 = _0x3cc431;
    return _0x19f046[_0x5501c1(1133)]();
  } : function(_0x123c79) {
    return _0x123c79["toLowerCase"]();
  };
}
function lowerFactory(_0x5df216) {
  var _0x1102c6 = _0x780a7e;
  return _0x5df216 === _0x1102c6(670) ? function(_0x729e95) {
    var _0x585cf4 = _0x1102c6;
    return _0x729e95[_0x585cf4(433)]();
  } : function(_0x58c904) {
    var _0x329f05 = _0x1102c6;
    return _0x58c904[_0x329f05(1133)]();
  };
}
function nextCasing(_0x47856e, _0x56e6a6, _0x2147df, _0x52a980, _0x1b7bc2, _0x35dd69) {
  var _0x465fdd = _0x780a7e, _0x4c020b = Math[_0x465fdd(1183)](_0x47856e["length"], _0x52a980[_0x465fdd(1965)]), _0x28361c = -1;
  for (var _0x36148f = 0; _0x36148f < _0x4c020b; ++_0x36148f) {
    var _0x58a0b0 = _0x56e6a6[_0x36148f];
    if (_0x58a0b0 !== _0x52a980[_0x36148f]) {
      if (_0x1b7bc2(_0x47856e[_0x36148f], _0x2147df[_0x36148f]) < 0)
        return _0x47856e[_0x465fdd(398)](0, _0x36148f) + _0x2147df[_0x36148f] + _0x2147df["substr"](_0x36148f + 1);
      if (_0x1b7bc2(_0x47856e[_0x36148f], _0x52a980[_0x36148f]) < 0)
        return _0x47856e[_0x465fdd(398)](0, _0x36148f) + _0x52a980[_0x36148f] + _0x2147df[_0x465fdd(398)](_0x36148f + 1);
      if (_0x28361c >= 0)
        return _0x47856e[_0x465fdd(398)](0, _0x28361c) + _0x56e6a6[_0x28361c] + _0x2147df["substr"](_0x28361c + 1);
      return null;
    }
    if (_0x1b7bc2(_0x47856e[_0x36148f], _0x58a0b0) < 0)
      _0x28361c = _0x36148f;
  }
  if (_0x4c020b < _0x52a980["length"] && _0x35dd69 === _0x465fdd(670))
    return _0x47856e + _0x2147df[_0x465fdd(398)](_0x47856e[_0x465fdd(1965)]);
  if (_0x4c020b < _0x47856e[_0x465fdd(1965)] && _0x35dd69 === _0x465fdd(1104))
    return _0x47856e["substr"](0, _0x2147df[_0x465fdd(1965)]);
  return _0x28361c < 0 ? null : _0x47856e[_0x465fdd(398)](0, _0x28361c) + _0x52a980[_0x28361c] + _0x2147df[_0x465fdd(398)](_0x28361c + 1);
}
function addIgnoreCaseAlgorithm(_0x21c754, _0xf5a558, _0x2a31a9, _0x44da13) {
  var _0x2431ec = _0x780a7e, _0xa8399b, _0xad0b96, _0x2e28e5, _0x4785af, _0x1d4598, _0x5edcc2, _0x344b43, _0x3e0cd3 = _0x2a31a9["length"];
  if (!_0x2a31a9[_0x2431ec(1736)](function(_0x35f350) {
    var _0x5b84df = _0x2431ec;
    return typeof _0x35f350 === _0x5b84df(1548);
  }))
    return fail(_0x21c754, STRING_EXPECTED);
  function _0x5d4318(_0x23303f) {
    var _0x26f7d8 = _0x2431ec;
    _0xa8399b = upperFactory(_0x23303f), _0xad0b96 = lowerFactory(_0x23303f), _0x2e28e5 = _0x23303f === "next" ? simpleCompare : simpleCompareReverse;
    var _0x33227c = _0x2a31a9[_0x26f7d8(376)](function(_0x563956) {
      return { "lower": _0xad0b96(_0x563956), "upper": _0xa8399b(_0x563956) };
    })[_0x26f7d8(1138)](function(_0x3198e5, _0x3f8e1e) {
      var _0x26e2be = _0x26f7d8;
      return _0x2e28e5(_0x3198e5[_0x26e2be(1063)], _0x3f8e1e["lower"]);
    });
    _0x4785af = _0x33227c[_0x26f7d8(376)](function(_0x543340) {
      var _0x34236c = _0x26f7d8;
      return _0x543340[_0x34236c(1002)];
    }), _0x1d4598 = _0x33227c[_0x26f7d8(376)](function(_0x43ea0f) {
      var _0xd2d212 = _0x26f7d8;
      return _0x43ea0f[_0xd2d212(1063)];
    }), _0x5edcc2 = _0x23303f, _0x344b43 = _0x23303f === _0x26f7d8(670) ? "" : _0x44da13;
  }
  _0x5d4318(_0x2431ec(670));
  var _0x3c97ef = new _0x21c754[_0x2431ec(1301)](_0x21c754, function() {
    return createRange(_0x4785af[0], _0x1d4598[_0x3e0cd3 - 1] + _0x44da13);
  });
  _0x3c97ef[_0x2431ec(792)] = function(_0x501ec2) {
    _0x5d4318(_0x501ec2);
  };
  var _0x28967c = 0;
  return _0x3c97ef[_0x2431ec(1600)](function(_0x55b170, _0x2b8a4a, _0x2fb1ac) {
    var _0x192b54 = _0x2431ec, _0x3c1285 = _0x55b170[_0x192b54(1993)];
    if (typeof _0x3c1285 !== _0x192b54(1548))
      return ![];
    var _0x465945 = _0xad0b96(_0x3c1285);
    if (_0xf5a558(_0x465945, _0x1d4598, _0x28967c))
      return !![];
    else {
      var _0x3803d1 = null;
      for (var _0x3e26a3 = _0x28967c; _0x3e26a3 < _0x3e0cd3; ++_0x3e26a3) {
        var _0x19d616 = nextCasing(_0x3c1285, _0x465945, _0x4785af[_0x3e26a3], _0x1d4598[_0x3e26a3], _0x2e28e5, _0x5edcc2);
        if (_0x19d616 === null && _0x3803d1 === null)
          _0x28967c = _0x3e26a3 + 1;
        else
          (_0x3803d1 === null || _0x2e28e5(_0x3803d1, _0x19d616) > 0) && (_0x3803d1 = _0x19d616);
      }
      return _0x3803d1 !== null ? _0x2b8a4a(function() {
        _0x55b170["continue"](_0x3803d1 + _0x344b43);
      }) : _0x2b8a4a(_0x2fb1ac), ![];
    }
  }), _0x3c97ef;
}
function createRange(_0x817b0a, _0x418bc4, _0x7134f0, _0x4eed2b) {
  return { "type": 2, "lower": _0x817b0a, "upper": _0x418bc4, "lowerOpen": _0x7134f0, "upperOpen": _0x4eed2b };
}
function rangeEqual(_0x1473ec) {
  return { "type": 1, "lower": _0x1473ec, "upper": _0x1473ec };
}
var WhereClause = function() {
  var _0x17986a = _0x780a7e;
  function _0x542263() {
  }
  return Object[_0x17986a(1564)](_0x542263["prototype"], _0x17986a(1301), { "get": function() {
    var _0x282307 = _0x17986a;
    return this[_0x282307(1149)][_0x282307(2178)]["db"]["Collection"];
  }, "enumerable": ![], "configurable": !![] }), _0x542263[_0x17986a(1897)][_0x17986a(1344)] = function(_0x54b70c, _0x4dab6d, _0x1117e4, _0x199ac5) {
    var _0x1feef9 = _0x17986a;
    _0x1117e4 = _0x1117e4 !== ![], _0x199ac5 = _0x199ac5 === !![];
    try {
      if (this[_0x1feef9(1793)](_0x54b70c, _0x4dab6d) > 0 || this["_cmp"](_0x54b70c, _0x4dab6d) === 0 && (_0x1117e4 || _0x199ac5) && !(_0x1117e4 && _0x199ac5))
        return emptyCollection(this);
      return new this[_0x1feef9(1301)](this, function() {
        return createRange(_0x54b70c, _0x4dab6d, !_0x1117e4, !_0x199ac5);
      });
    } catch (_0xebc0e4) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
  }, _0x542263[_0x17986a(1897)][_0x17986a(1291)] = function(_0x406d7a) {
    var _0x1dae77 = _0x17986a;
    if (_0x406d7a == null)
      return fail(this, INVALID_KEY_ARGUMENT);
    return new this[_0x1dae77(1301)](this, function() {
      return rangeEqual(_0x406d7a);
    });
  }, _0x542263[_0x17986a(1897)][_0x17986a(1758)] = function(_0x32f475) {
    var _0x4e7a29 = _0x17986a;
    if (_0x32f475 == null)
      return fail(this, INVALID_KEY_ARGUMENT);
    return new this[_0x4e7a29(1301)](this, function() {
      return createRange(_0x32f475, void 0, !![]);
    });
  }, _0x542263["prototype"][_0x17986a(419)] = function(_0x322f9e) {
    var _0x2a442e = _0x17986a;
    if (_0x322f9e == null)
      return fail(this, INVALID_KEY_ARGUMENT);
    return new this[_0x2a442e(1301)](this, function() {
      return createRange(_0x322f9e, void 0, ![]);
    });
  }, _0x542263[_0x17986a(1897)][_0x17986a(1805)] = function(_0x261e43) {
    var _0x2e3d9b = _0x17986a;
    if (_0x261e43 == null)
      return fail(this, INVALID_KEY_ARGUMENT);
    return new this[_0x2e3d9b(1301)](this, function() {
      return createRange(void 0, _0x261e43, ![], !![]);
    });
  }, _0x542263["prototype"]["belowOrEqual"] = function(_0x5e0afb) {
    var _0x456489 = _0x17986a;
    if (_0x5e0afb == null)
      return fail(this, INVALID_KEY_ARGUMENT);
    return new this[_0x456489(1301)](this, function() {
      return createRange(void 0, _0x5e0afb);
    });
  }, _0x542263[_0x17986a(1897)][_0x17986a(1914)] = function(_0x6dce42) {
    var _0x2d0484 = _0x17986a;
    if (typeof _0x6dce42 !== _0x2d0484(1548))
      return fail(this, STRING_EXPECTED);
    return this[_0x2d0484(1344)](_0x6dce42, _0x6dce42 + maxString, !![], !![]);
  }, _0x542263["prototype"][_0x17986a(1576)] = function(_0xa2e658) {
    var _0x1c10b7 = _0x17986a;
    if (_0xa2e658 === "")
      return this[_0x1c10b7(1914)](_0xa2e658);
    return addIgnoreCaseAlgorithm(this, function(_0x1dadd5, _0x59d7a2) {
      var _0x160688 = _0x1c10b7;
      return _0x1dadd5[_0x160688(1879)](_0x59d7a2[0]) === 0;
    }, [_0xa2e658], maxString);
  }, _0x542263[_0x17986a(1897)]["equalsIgnoreCase"] = function(_0xaa596) {
    return addIgnoreCaseAlgorithm(this, function(_0x34ba03, _0x427963) {
      return _0x34ba03 === _0x427963[0];
    }, [_0xaa596], "");
  }, _0x542263[_0x17986a(1897)][_0x17986a(2192)] = function() {
    var _0x461201 = _0x17986a, _0x3fbf52 = getArrayOf[_0x461201(2150)](NO_CHAR_ARRAY, arguments);
    if (_0x3fbf52[_0x461201(1965)] === 0)
      return emptyCollection(this);
    return addIgnoreCaseAlgorithm(this, function(_0x3d8ff1, _0x283a02) {
      var _0x5993eb = _0x461201;
      return _0x283a02[_0x5993eb(1879)](_0x3d8ff1) !== -1;
    }, _0x3fbf52, "");
  }, _0x542263[_0x17986a(1897)][_0x17986a(570)] = function() {
    var _0x2f6413 = _0x17986a, _0x28cea7 = getArrayOf["apply"](NO_CHAR_ARRAY, arguments);
    if (_0x28cea7[_0x2f6413(1965)] === 0)
      return emptyCollection(this);
    return addIgnoreCaseAlgorithm(this, function(_0xa6875f, _0x57e0e2) {
      return _0x57e0e2["some"](function(_0x404672) {
        return _0xa6875f["indexOf"](_0x404672) === 0;
      });
    }, _0x28cea7, maxString);
  }, _0x542263["prototype"][_0x17986a(475)] = function() {
    var _0x50cc5d = _0x17986a, _0x188659 = this, _0x34470b = getArrayOf[_0x50cc5d(2150)](NO_CHAR_ARRAY, arguments), _0x5489e9 = this[_0x50cc5d(1793)];
    try {
      _0x34470b[_0x50cc5d(1138)](_0x5489e9);
    } catch (_0x1d234b) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    if (_0x34470b[_0x50cc5d(1965)] === 0)
      return emptyCollection(this);
    var _0x59b45a = new this[_0x50cc5d(1301)](this, function() {
      return createRange(_0x34470b[0], _0x34470b[_0x34470b["length"] - 1]);
    });
    _0x59b45a[_0x50cc5d(792)] = function(_0x102b4b) {
      var _0x42ca6d = _0x50cc5d;
      _0x5489e9 = _0x102b4b === "next" ? _0x188659["_ascending"] : _0x188659[_0x42ca6d(1009)], _0x34470b["sort"](_0x5489e9);
    };
    var _0x4472ba = 0;
    return _0x59b45a[_0x50cc5d(1600)](function(_0x4dcae6, _0x4b0fa8, _0x58ce0e) {
      var _0x242d88 = _0x50cc5d, _0x2bc95d = _0x4dcae6[_0x242d88(1993)];
      while (_0x5489e9(_0x2bc95d, _0x34470b[_0x4472ba]) > 0) {
        ++_0x4472ba;
        if (_0x4472ba === _0x34470b[_0x242d88(1965)])
          return _0x4b0fa8(_0x58ce0e), ![];
      }
      return _0x5489e9(_0x2bc95d, _0x34470b[_0x4472ba]) === 0 ? !![] : (_0x4b0fa8(function() {
        _0x4dcae6["continue"](_0x34470b[_0x4472ba]);
      }), ![]);
    }), _0x59b45a;
  }, _0x542263[_0x17986a(1897)][_0x17986a(975)] = function(_0x426b4e) {
    var _0xf5de05 = _0x17986a;
    return this[_0xf5de05(607)]([[minKey, _0x426b4e], [_0x426b4e, this["db"][_0xf5de05(435)]]], { "includeLowers": ![], "includeUppers": ![] });
  }, _0x542263[_0x17986a(1897)][_0x17986a(1915)] = function() {
    var _0x30d911 = _0x17986a, _0x90fe22 = getArrayOf[_0x30d911(2150)](NO_CHAR_ARRAY, arguments);
    if (_0x90fe22[_0x30d911(1965)] === 0)
      return new this[_0x30d911(1301)](this);
    try {
      _0x90fe22["sort"](this[_0x30d911(1199)]);
    } catch (_0x443706) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    var _0x18d442 = _0x90fe22[_0x30d911(690)](function(_0x1f33f2, _0x8af747) {
      var _0x88affb = _0x30d911;
      return _0x1f33f2 ? _0x1f33f2[_0x88affb(2090)]([[_0x1f33f2[_0x1f33f2[_0x88affb(1965)] - 1][1], _0x8af747]]) : [[minKey, _0x8af747]];
    }, null);
    return _0x18d442["push"]([_0x90fe22[_0x90fe22[_0x30d911(1965)] - 1], this["db"][_0x30d911(435)]]), this[_0x30d911(607)](_0x18d442, { "includeLowers": ![], "includeUppers": ![] });
  }, _0x542263["prototype"][_0x17986a(607)] = function(_0x457128, _0x115782) {
    var _0x17eb6a = _0x17986a, _0x183cb7 = this, _0x520b34 = this[_0x17eb6a(1793)], _0x4eb981 = this[_0x17eb6a(1199)], _0x5a8309 = this[_0x17eb6a(1009)], _0x3138df = this["_min"], _0x4116db = this["_max"];
    if (_0x457128[_0x17eb6a(1965)] === 0)
      return emptyCollection(this);
    if (!_0x457128["every"](function(_0x533464) {
      return _0x533464[0] !== void 0 && _0x533464[1] !== void 0 && _0x4eb981(_0x533464[0], _0x533464[1]) <= 0;
    }))
      return fail(this, _0x17eb6a(1603), exceptions[_0x17eb6a(1496)]);
    var _0x564afc = !_0x115782 || _0x115782[_0x17eb6a(1467)] !== ![], _0x42cd94 = _0x115782 && _0x115782[_0x17eb6a(1278)] === !![];
    function _0x1ee368(_0x3091e9, _0x3e22ed) {
      var _0xd60485 = _0x17eb6a, _0x39c81b = 0, _0x125ef9 = _0x3091e9[_0xd60485(1965)];
      for (; _0x39c81b < _0x125ef9; ++_0x39c81b) {
        var _0x165450 = _0x3091e9[_0x39c81b];
        if (_0x520b34(_0x3e22ed[0], _0x165450[1]) < 0 && _0x520b34(_0x3e22ed[1], _0x165450[0]) > 0) {
          _0x165450[0] = _0x3138df(_0x165450[0], _0x3e22ed[0]), _0x165450[1] = _0x4116db(_0x165450[1], _0x3e22ed[1]);
          break;
        }
      }
      if (_0x39c81b === _0x125ef9)
        _0x3091e9[_0xd60485(1991)](_0x3e22ed);
      return _0x3091e9;
    }
    var _0xe0f567 = _0x4eb981;
    function _0x20bed7(_0x2f4c87, _0x3d0ce7) {
      return _0xe0f567(_0x2f4c87[0], _0x3d0ce7[0]);
    }
    var _0x5363d5;
    try {
      _0x5363d5 = _0x457128[_0x17eb6a(690)](_0x1ee368, []), _0x5363d5[_0x17eb6a(1138)](_0x20bed7);
    } catch (_0x1dda9d) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    var _0x21d6b6 = 0, _0x29fa77 = _0x42cd94 ? function(_0x29f731) {
      return _0x4eb981(_0x29f731, _0x5363d5[_0x21d6b6][1]) > 0;
    } : function(_0x44498e) {
      return _0x4eb981(_0x44498e, _0x5363d5[_0x21d6b6][1]) >= 0;
    }, _0x29c86a = _0x564afc ? function(_0x1d17bc) {
      return _0x5a8309(_0x1d17bc, _0x5363d5[_0x21d6b6][0]) > 0;
    } : function(_0x1564ce) {
      return _0x5a8309(_0x1564ce, _0x5363d5[_0x21d6b6][0]) >= 0;
    };
    function _0x3b4c2c(_0x51099a) {
      return !_0x29fa77(_0x51099a) && !_0x29c86a(_0x51099a);
    }
    var _0x57cf85 = _0x29fa77, _0x2f2f01 = new this[_0x17eb6a(1301)](this, function() {
      var _0x26039b = _0x17eb6a;
      return createRange(_0x5363d5[0][0], _0x5363d5[_0x5363d5[_0x26039b(1965)] - 1][1], !_0x564afc, !_0x42cd94);
    });
    return _0x2f2f01["_ondirectionchange"] = function(_0x2beeb2) {
      var _0x9df283 = _0x17eb6a;
      _0x2beeb2 === _0x9df283(670) ? (_0x57cf85 = _0x29fa77, _0xe0f567 = _0x4eb981) : (_0x57cf85 = _0x29c86a, _0xe0f567 = _0x5a8309), _0x5363d5[_0x9df283(1138)](_0x20bed7);
    }, _0x2f2f01["_addAlgorithm"](function(_0x3e445b, _0x41764c, _0x1b3e8f) {
      var _0x209ea9 = _0x3e445b["key"];
      while (_0x57cf85(_0x209ea9)) {
        ++_0x21d6b6;
        if (_0x21d6b6 === _0x5363d5["length"])
          return _0x41764c(_0x1b3e8f), ![];
      }
      if (_0x3b4c2c(_0x209ea9))
        return !![];
      else
        return _0x183cb7["_cmp"](_0x209ea9, _0x5363d5[_0x21d6b6][1]) === 0 || _0x183cb7["_cmp"](_0x209ea9, _0x5363d5[_0x21d6b6][0]) === 0 ? ![] : (_0x41764c(function() {
          var _0x5bda1c = _0x3001;
          if (_0xe0f567 === _0x4eb981)
            _0x3e445b[_0x5bda1c(913)](_0x5363d5[_0x21d6b6][0]);
          else
            _0x3e445b[_0x5bda1c(913)](_0x5363d5[_0x21d6b6][1]);
        }), ![]);
    }), _0x2f2f01;
  }, _0x542263[_0x17986a(1897)][_0x17986a(1873)] = function() {
    var _0x49cbe0 = _0x17986a, _0xfa8a42 = getArrayOf[_0x49cbe0(2150)](NO_CHAR_ARRAY, arguments);
    if (!_0xfa8a42["every"](function(_0x1d656f) {
      var _0x654ed1 = _0x49cbe0;
      return typeof _0x1d656f === _0x654ed1(1548);
    }))
      return fail(this, _0x49cbe0(943));
    if (_0xfa8a42["length"] === 0)
      return emptyCollection(this);
    return this[_0x49cbe0(607)](_0xfa8a42[_0x49cbe0(376)](function(_0x1713f7) {
      return [_0x1713f7, _0x1713f7 + maxString];
    }));
  }, _0x542263;
}();
function createWhereClauseConstructor(_0x16a00d) {
  var _0x4e71fc = _0x780a7e;
  return makeClassConstructor(WhereClause[_0x4e71fc(1897)], function _0x5d939f(_0x25c9b9, _0x18e0da, _0x4fb6f0) {
    var _0x5715e2 = _0x4e71fc;
    this["db"] = _0x16a00d, this[_0x5715e2(1149)] = { "table": _0x25c9b9, "index": _0x18e0da === _0x5715e2(1924) ? null : _0x18e0da, "or": _0x4fb6f0 };
    var _0xe12827 = _0x16a00d[_0x5715e2(1767)][_0x5715e2(476)];
    if (!_0xe12827)
      throw new exceptions["MissingAPI"]();
    this[_0x5715e2(1793)] = this[_0x5715e2(1199)] = _0xe12827["cmp"][_0x5715e2(517)](_0xe12827), this[_0x5715e2(1009)] = function(_0x58f040, _0x3893b5) {
      return _0xe12827["cmp"](_0x3893b5, _0x58f040);
    }, this[_0x5715e2(1066)] = function(_0x1108c8, _0x789572) {
      var _0x25b226 = _0x5715e2;
      return _0xe12827[_0x25b226(1229)](_0x1108c8, _0x789572) > 0 ? _0x1108c8 : _0x789572;
    }, this["_min"] = function(_0x2cbbe0, _0x1ba52e) {
      return _0xe12827["cmp"](_0x2cbbe0, _0x1ba52e) < 0 ? _0x2cbbe0 : _0x1ba52e;
    }, this[_0x5715e2(2030)] = _0x16a00d["_deps"][_0x5715e2(1955)];
  });
}
function eventRejectHandler(_0x3c10e0) {
  return wrap(function(_0x58c55c) {
    var _0x1b744a = _0x3001;
    return preventDefault(_0x58c55c), _0x3c10e0(_0x58c55c[_0x1b744a(1961)]["error"]), ![];
  });
}
function preventDefault(_0x20e0e3) {
  var _0x22fc3e = _0x780a7e;
  if (_0x20e0e3[_0x22fc3e(1391)])
    _0x20e0e3[_0x22fc3e(1391)]();
  if (_0x20e0e3[_0x22fc3e(1588)])
    _0x20e0e3[_0x22fc3e(1588)]();
}
var DEXIE_STORAGE_MUTATED_EVENT_NAME = _0x780a7e(919), STORAGE_MUTATED_DOM_EVENT_NAME = _0x780a7e(1487), globalEvents = Events(null, DEXIE_STORAGE_MUTATED_EVENT_NAME), Transaction = function() {
  var _0x3ae4c1 = _0x780a7e;
  function _0x5d8ba3() {
  }
  return _0x5d8ba3[_0x3ae4c1(1897)][_0x3ae4c1(1553)] = function() {
    var _0x4a5360 = _0x3ae4c1;
    assert(!PSD["global"]), ++this[_0x4a5360(722)];
    if (this[_0x4a5360(722)] === 1 && !PSD[_0x4a5360(454)])
      PSD[_0x4a5360(1023)] = this;
    return this;
  }, _0x5d8ba3[_0x3ae4c1(1897)]["_unlock"] = function() {
    var _0x45fd56 = _0x3ae4c1;
    assert(!PSD[_0x45fd56(454)]);
    if (--this[_0x45fd56(722)] === 0) {
      if (!PSD[_0x45fd56(454)])
        PSD[_0x45fd56(1023)] = null;
      while (this[_0x45fd56(1804)][_0x45fd56(1965)] > 0 && !this["_locked"]()) {
        var _0x46977c = this[_0x45fd56(1804)]["shift"]();
        try {
          usePSD(_0x46977c[1], _0x46977c[0]);
        } catch (_0x5ee7db) {
        }
      }
    }
    return this;
  }, _0x5d8ba3[_0x3ae4c1(1897)][_0x3ae4c1(523)] = function() {
    var _0x50dd45 = _0x3ae4c1;
    return this[_0x50dd45(722)] && PSD[_0x50dd45(1023)] !== this;
  }, _0x5d8ba3[_0x3ae4c1(1897)][_0x3ae4c1(1409)] = function(_0x2a47a1) {
    var _0x16f7d2 = _0x3ae4c1, _0x2c7db1 = this;
    if (!this[_0x16f7d2(1593)])
      return this;
    var _0x591654 = this["db"]["idbdb"], _0x430e5f = this["db"][_0x16f7d2(1234)]["dbOpenError"];
    assert(!this[_0x16f7d2(1532)]);
    if (!_0x2a47a1 && !_0x591654)
      switch (_0x430e5f && _0x430e5f[_0x16f7d2(765)]) {
        case _0x16f7d2(678):
          throw new exceptions["DatabaseClosed"](_0x430e5f);
        case "MissingAPIError":
          throw new exceptions[_0x16f7d2(555)](_0x430e5f[_0x16f7d2(510)], _0x430e5f);
        default:
          throw new exceptions[_0x16f7d2(2048)](_0x430e5f);
      }
    if (!this[_0x16f7d2(1430)])
      throw new exceptions[_0x16f7d2(1019)]();
    return assert(this["_completion"][_0x16f7d2(1234)] === null), _0x2a47a1 = this[_0x16f7d2(1532)] = _0x2a47a1 || (this["db"][_0x16f7d2(2104)] ? this["db"][_0x16f7d2(2104)][_0x16f7d2(955)](this[_0x16f7d2(591)], this["mode"], { "durability": this[_0x16f7d2(752)] }) : _0x591654[_0x16f7d2(955)](this["storeNames"], this["mode"], { "durability": this[_0x16f7d2(752)] })), _0x2a47a1["onerror"] = wrap(function(_0x291395) {
      preventDefault(_0x291395), _0x2c7db1["_reject"](_0x2a47a1["error"]);
    }), _0x2a47a1[_0x16f7d2(1834)] = wrap(function(_0xc6153c) {
      var _0x52c0b5 = _0x16f7d2;
      preventDefault(_0xc6153c), _0x2c7db1[_0x52c0b5(1430)] && _0x2c7db1[_0x52c0b5(800)](new exceptions[_0x52c0b5(855)](_0x2a47a1[_0x52c0b5(2165)])), _0x2c7db1[_0x52c0b5(1430)] = ![], _0x2c7db1["on"]("abort")[_0x52c0b5(801)](_0xc6153c);
    }), _0x2a47a1[_0x16f7d2(1953)] = wrap(function() {
      var _0x2d56c1 = _0x16f7d2;
      _0x2c7db1["active"] = ![], _0x2c7db1[_0x2d56c1(662)](), _0x2d56c1(1324) in _0x2a47a1 && globalEvents[_0x2d56c1(919)][_0x2d56c1(801)](_0x2a47a1[_0x2d56c1(1324)]);
    }), this;
  }, _0x5d8ba3[_0x3ae4c1(1897)][_0x3ae4c1(1490)] = function(_0x8e8382, _0x3b4b81, _0x5e534d) {
    var _0x26e839 = _0x3ae4c1, _0x3b9091 = this;
    if (_0x8e8382 === _0x26e839(1069) && this["mode"] !== _0x26e839(1069))
      return rejection(new exceptions[_0x26e839(1707)](_0x26e839(796)));
    if (!this["active"])
      return rejection(new exceptions[_0x26e839(1019)]());
    if (this["_locked"]())
      return new DexiePromise(function(_0x5955e9, _0x40dbf9) {
        var _0x264fcf = _0x26e839;
        _0x3b9091[_0x264fcf(1804)][_0x264fcf(1991)]([function() {
          var _0x796e81 = _0x264fcf;
          _0x3b9091[_0x796e81(1490)](_0x8e8382, _0x3b4b81, _0x5e534d)[_0x796e81(1902)](_0x5955e9, _0x40dbf9);
        }, PSD]);
      });
    else {
      if (_0x5e534d)
        return newScope(function() {
          var _0x20a830 = _0x26e839, _0x53c8e4 = new DexiePromise(function(_0xc7df30, _0x336494) {
            var _0x1e2a4d = _0x3001;
            _0x3b9091[_0x1e2a4d(1553)]();
            var _0x6f949 = _0x3b4b81(_0xc7df30, _0x336494, _0x3b9091);
            if (_0x6f949 && _0x6f949[_0x1e2a4d(1902)])
              _0x6f949[_0x1e2a4d(1902)](_0xc7df30, _0x336494);
          });
          return _0x53c8e4[_0x20a830(1258)](function() {
            var _0x1a5571 = _0x20a830;
            return _0x3b9091[_0x1a5571(1265)]();
          }), _0x53c8e4["_lib"] = !![], _0x53c8e4;
        });
      else {
        var _0x3116f2 = new DexiePromise(function(_0x3568a1, _0x42ef10) {
          var _0x2a3bca = _0x26e839, _0x5883dd = _0x3b4b81(_0x3568a1, _0x42ef10, _0x3b9091);
          if (_0x5883dd && _0x5883dd["then"])
            _0x5883dd[_0x2a3bca(1902)](_0x3568a1, _0x42ef10);
        });
        return _0x3116f2["_lib"] = !![], _0x3116f2;
      }
    }
  }, _0x5d8ba3[_0x3ae4c1(1897)][_0x3ae4c1(2092)] = function() {
    var _0x4252ce = _0x3ae4c1;
    return this["parent"] ? this[_0x4252ce(1932)][_0x4252ce(2092)]() : this;
  }, _0x5d8ba3["prototype"][_0x3ae4c1(1269)] = function(_0x287186) {
    var _0x36e71e = _0x3ae4c1, _0x182864 = this[_0x36e71e(2092)](), _0x599a3d = DexiePromise[_0x36e71e(1211)](_0x287186);
    if (_0x182864[_0x36e71e(641)])
      _0x182864[_0x36e71e(641)] = _0x182864[_0x36e71e(641)][_0x36e71e(1902)](function() {
        return _0x599a3d;
      });
    else {
      _0x182864[_0x36e71e(641)] = _0x599a3d, _0x182864[_0x36e71e(597)] = [];
      var _0x55fe27 = _0x182864[_0x36e71e(1532)][_0x36e71e(1898)](_0x182864[_0x36e71e(591)][0]);
      (function _0x56c46b() {
        var _0xc559c3 = _0x36e71e;
        ++_0x182864["_spinCount"];
        while (_0x182864[_0xc559c3(597)][_0xc559c3(1965)])
          _0x182864["_waitingQueue"][_0xc559c3(2002)]()();
        if (_0x182864[_0xc559c3(641)])
          _0x55fe27[_0xc559c3(1892)](-Infinity)[_0xc559c3(999)] = _0x56c46b;
      })();
    }
    var _0x8b6e9c = _0x182864["_waitingFor"];
    return new DexiePromise(function(_0x4bd66f, _0x589200) {
      var _0x2b47d5 = _0x36e71e;
      _0x599a3d[_0x2b47d5(1902)](function(_0x54895f) {
        var _0x41edab = _0x2b47d5;
        return _0x182864["_waitingQueue"][_0x41edab(1991)](wrap(_0x4bd66f["bind"](null, _0x54895f)));
      }, function(_0x483ff6) {
        var _0x22a009 = _0x2b47d5;
        return _0x182864["_waitingQueue"][_0x22a009(1991)](wrap(_0x589200[_0x22a009(517)](null, _0x483ff6)));
      })[_0x2b47d5(1258)](function() {
        var _0x352c74 = _0x2b47d5;
        _0x182864[_0x352c74(641)] === _0x8b6e9c && (_0x182864["_waitingFor"] = null);
      });
    });
  }, _0x5d8ba3[_0x3ae4c1(1897)]["abort"] = function() {
    var _0x52d913 = _0x3ae4c1;
    if (this[_0x52d913(1430)]) {
      this[_0x52d913(1430)] = ![];
      if (this[_0x52d913(1532)])
        this[_0x52d913(1532)][_0x52d913(441)]();
      this[_0x52d913(800)](new exceptions[_0x52d913(855)]());
    }
  }, _0x5d8ba3[_0x3ae4c1(1897)][_0x3ae4c1(2178)] = function(_0x3957ac) {
    var _0x160ba8 = _0x3ae4c1, _0x55ab3e = this[_0x160ba8(744)] || (this[_0x160ba8(744)] = {});
    if (hasOwn(_0x55ab3e, _0x3957ac))
      return _0x55ab3e[_0x3957ac];
    var _0x58f342 = this[_0x160ba8(795)][_0x3957ac];
    if (!_0x58f342)
      throw new exceptions["NotFound"](_0x160ba8(1534) + _0x3957ac + _0x160ba8(2082));
    var _0x3c3d44 = new this["db"]["Table"](_0x3957ac, _0x58f342, this);
    return _0x3c3d44[_0x160ba8(2104)] = this["db"][_0x160ba8(2104)][_0x160ba8(2178)](_0x3957ac), _0x55ab3e[_0x3957ac] = _0x3c3d44, _0x3c3d44;
  }, _0x5d8ba3;
}();
function createTransactionConstructor(_0x4563f1) {
  var _0x1a160c = _0x780a7e;
  return makeClassConstructor(Transaction[_0x1a160c(1897)], function _0x412d7a(_0xf86621, _0x23cff1, _0x362b3f, _0x4e57f0, _0x161ff1) {
    var _0x158c0f = _0x1a160c, _0x160e6f = this;
    this["db"] = _0x4563f1, this[_0x158c0f(1593)] = _0xf86621, this["storeNames"] = _0x23cff1, this[_0x158c0f(795)] = _0x362b3f, this[_0x158c0f(752)] = _0x4e57f0, this["idbtrans"] = null, this["on"] = Events(this, "complete", "error", "abort"), this[_0x158c0f(1932)] = _0x161ff1 || null, this[_0x158c0f(1430)] = !![], this["_reculock"] = 0, this[_0x158c0f(1804)] = [], this[_0x158c0f(662)] = null, this[_0x158c0f(800)] = null, this[_0x158c0f(641)] = null, this[_0x158c0f(597)] = null, this[_0x158c0f(1891)] = 0, this[_0x158c0f(711)] = new DexiePromise(function(_0x35d50b, _0x42589c) {
      var _0x575409 = _0x158c0f;
      _0x160e6f[_0x575409(662)] = _0x35d50b, _0x160e6f["_reject"] = _0x42589c;
    }), this[_0x158c0f(711)][_0x158c0f(1902)](function() {
      var _0x2b6a62 = _0x158c0f;
      _0x160e6f[_0x2b6a62(1430)] = ![], _0x160e6f["on"][_0x2b6a62(1045)][_0x2b6a62(801)]();
    }, function(_0x3928c2) {
      var _0x525728 = _0x158c0f, _0x207d5b = _0x160e6f[_0x525728(1430)];
      return _0x160e6f[_0x525728(1430)] = ![], _0x160e6f["on"][_0x525728(2165)]["fire"](_0x3928c2), _0x160e6f["parent"] ? _0x160e6f[_0x525728(1932)]["_reject"](_0x3928c2) : _0x207d5b && _0x160e6f[_0x525728(1532)] && _0x160e6f[_0x525728(1532)][_0x525728(441)](), rejection(_0x3928c2);
    });
  });
}
function createIndexSpec(_0x12943c, _0x129733, _0x4c9fe2, _0xbd5b38, _0x243903, _0x38ec2e, _0x13b30b) {
  return { "name": _0x12943c, "keyPath": _0x129733, "unique": _0x4c9fe2, "multi": _0xbd5b38, "auto": _0x243903, "compound": _0x38ec2e, "src": (_0x4c9fe2 && !_0x13b30b ? "&" : "") + (_0xbd5b38 ? "*" : "") + (_0x243903 ? "++" : "") + nameFromKeyPath(_0x129733) };
}
function nameFromKeyPath(_0x4958c0) {
  var _0x392b1f = _0x780a7e;
  return typeof _0x4958c0 === _0x392b1f(1548) ? _0x4958c0 : _0x4958c0 ? "[" + [][_0x392b1f(2180)][_0x392b1f(1206)](_0x4958c0, "+") + "]" : "";
}
function createTableSchema(_0x49f89d, _0x20b5eb, _0x55c830) {
  return { "name": _0x49f89d, "primKey": _0x20b5eb, "indexes": _0x55c830, "mappedClass": null, "idxByName": arrayToObject(_0x55c830, function(_0x547515) {
    var _0x10d9f0 = _0x3001;
    return [_0x547515[_0x10d9f0(765)], _0x547515];
  }) };
}
function safariMultiStoreFix(_0x5356f4) {
  return _0x5356f4["length"] === 1 ? _0x5356f4[0] : _0x5356f4;
}
var getMaxKey = function(_0x3f7709) {
  var _0x2a8e8a = _0x780a7e;
  try {
    return _0x3f7709[_0x2a8e8a(1170)]([[]]), getMaxKey = function() {
      return [[]];
    }, [[]];
  } catch (_0x59d5ad) {
    return getMaxKey = function() {
      return maxString;
    }, maxString;
  }
};
function getKeyExtractor(_0x40bc93) {
  var _0x389a21 = _0x780a7e;
  if (_0x40bc93 == null)
    return function() {
      return void 0;
    };
  else
    return typeof _0x40bc93 === _0x389a21(1548) ? getSinglePathKeyExtractor(_0x40bc93) : function(_0x173005) {
      return getByKeyPath(_0x173005, _0x40bc93);
    };
}
function getSinglePathKeyExtractor(_0x5790ca) {
  var _0x4a9e88 = _0x780a7e, _0x16028d = _0x5790ca["split"](".");
  return _0x16028d[_0x4a9e88(1965)] === 1 ? function(_0x2b5a7c) {
    return _0x2b5a7c[_0x5790ca];
  } : function(_0x250779) {
    return getByKeyPath(_0x250779, _0x5790ca);
  };
}
function arrayify(_0x579a37) {
  var _0x3582ed = _0x780a7e;
  return [][_0x3582ed(1215)][_0x3582ed(1206)](_0x579a37);
}
var _id_counter = 0;
function getKeyPathAlias(_0x4fbd59) {
  var _0x380427 = _0x780a7e;
  return _0x4fbd59 == null ? _0x380427(1924) : typeof _0x4fbd59 === "string" ? _0x4fbd59 : "[" + _0x4fbd59[_0x380427(2180)]("+") + "]";
}
function createDBCore(_0x256c1f, _0x2d39bf, _0x2ffa0f) {
  var _0xc7bdb2 = _0x780a7e;
  function _0xa03e28(_0x3ab118, _0x464111) {
    var _0x5543b2 = _0x3001, _0x4a3a72 = arrayify(_0x3ab118[_0x5543b2(841)]);
    return { "schema": { "name": _0x3ab118[_0x5543b2(765)], "tables": _0x4a3a72[_0x5543b2(376)](function(_0x328940) {
      var _0x3307ee = _0x5543b2;
      return _0x464111[_0x3307ee(1898)](_0x328940);
    })["map"](function(_0x2dadab) {
      var _0x211b73 = _0x5543b2, _0x5ce900 = _0x2dadab[_0x211b73(1565)], _0x939269 = _0x2dadab[_0x211b73(341)], _0x1cf5d9 = isArray(_0x5ce900), _0xfc559a = _0x5ce900 == null, _0x35ccdb = {}, _0x1fbec2 = { "name": _0x2dadab[_0x211b73(765)], "primaryKey": { "name": null, "isPrimaryKey": !![], "outbound": _0xfc559a, "compound": _0x1cf5d9, "keyPath": _0x5ce900, "autoIncrement": _0x939269, "unique": !![], "extractKey": getKeyExtractor(_0x5ce900) }, "indexes": arrayify(_0x2dadab["indexNames"])[_0x211b73(376)](function(_0x1eb7d2) {
        var _0xf19636 = _0x211b73;
        return _0x2dadab[_0xf19636(1128)](_0x1eb7d2);
      })[_0x211b73(376)](function(_0x38824a) {
        var _0x59c8ba = _0x211b73, _0x2c724d = _0x38824a[_0x59c8ba(765)], _0x3ac7a0 = _0x38824a["unique"], _0x1c7e2f = _0x38824a["multiEntry"], _0x42d5e4 = _0x38824a[_0x59c8ba(1565)], _0x5db63f = isArray(_0x42d5e4), _0xa6a036 = { "name": _0x2c724d, "compound": _0x5db63f, "keyPath": _0x42d5e4, "unique": _0x3ac7a0, "multiEntry": _0x1c7e2f, "extractKey": getKeyExtractor(_0x42d5e4) };
        return _0x35ccdb[getKeyPathAlias(_0x42d5e4)] = _0xa6a036, _0xa6a036;
      }), "getIndexByKeyPath": function(_0x3e5521) {
        return _0x35ccdb[getKeyPathAlias(_0x3e5521)];
      } };
      return _0x35ccdb[_0x211b73(1924)] = _0x1fbec2[_0x211b73(931)], _0x5ce900 != null && (_0x35ccdb[getKeyPathAlias(_0x5ce900)] = _0x1fbec2[_0x211b73(931)]), _0x1fbec2;
    }) }, "hasGetAll": _0x4a3a72[_0x5543b2(1965)] > 0 && _0x5543b2(373) in _0x464111[_0x5543b2(1898)](_0x4a3a72[0]) && !(typeof navigator !== _0x5543b2(437) && /Safari/[_0x5543b2(1778)](navigator[_0x5543b2(1470)]) && !/(Chrome\/|Edge\/)/[_0x5543b2(1778)](navigator["userAgent"]) && []["concat"](navigator[_0x5543b2(1470)][_0x5543b2(1962)](/Safari\/(\d*)/))[1] < 604) };
  }
  function _0x12a379(_0x452545) {
    var _0x217e5d = _0x3001;
    if (_0x452545[_0x217e5d(1514)] === 3)
      return null;
    if (_0x452545[_0x217e5d(1514)] === 4)
      throw new Error(_0x217e5d(2091));
    var _0x2542fd = _0x452545["lower"], _0x455c6c = _0x452545[_0x217e5d(1002)], _0xd78bc3 = _0x452545[_0x217e5d(1718)], _0x52dffd = _0x452545[_0x217e5d(1368)], _0x152bd6 = _0x2542fd === void 0 ? _0x455c6c === void 0 ? null : _0x2d39bf["upperBound"](_0x455c6c, !!_0x52dffd) : _0x455c6c === void 0 ? _0x2d39bf[_0x217e5d(1747)](_0x2542fd, !!_0xd78bc3) : _0x2d39bf[_0x217e5d(2185)](_0x2542fd, _0x455c6c, !!_0xd78bc3, !!_0x52dffd);
    return _0x152bd6;
  }
  function _0x168f5d(_0xc58e0) {
    var _0x885faa = _0x3001, _0x3d08f5 = _0xc58e0[_0x885faa(765)];
    function _0x28228b(_0x39919e) {
      var _0x16aa3c = _0x885faa, _0xf8a86e = _0x39919e[_0x16aa3c(683)], _0x1b7bd4 = _0x39919e[_0x16aa3c(1514)], _0x3518a2 = _0x39919e[_0x16aa3c(605)], _0x59cbe0 = _0x39919e[_0x16aa3c(1919)], _0x26a5da = _0x39919e[_0x16aa3c(377)];
      return new Promise(function(_0x4d99db, _0x511444) {
        var _0x41835a = _0x16aa3c;
        _0x4d99db = wrap(_0x4d99db);
        var _0x33b232 = _0xf8a86e[_0x41835a(1898)](_0x3d08f5), _0x5e0138 = _0x33b232[_0x41835a(1565)] == null, _0x4215f7 = _0x1b7bd4 === _0x41835a(1521) || _0x1b7bd4 === "add";
        if (!_0x4215f7 && _0x1b7bd4 !== "delete" && _0x1b7bd4 !== _0x41835a(1105))
          throw new Error(_0x41835a(1812) + _0x1b7bd4);
        var _0x18f5ec = (_0x3518a2 || _0x59cbe0 || { "length": 1 })[_0x41835a(1965)];
        if (_0x3518a2 && _0x59cbe0 && _0x3518a2[_0x41835a(1965)] !== _0x59cbe0["length"])
          throw new Error(_0x41835a(1710));
        if (_0x18f5ec === 0)
          return _0x4d99db({ "numFailures": 0, "failures": {}, "results": [], "lastResult": void 0 });
        var _0x49bbf5, _0x5c2ed4 = [], _0xfafd7b = [], _0x1eb860 = 0, _0x2a9c82 = function(_0x399e08) {
          ++_0x1eb860, preventDefault(_0x399e08);
        };
        if (_0x1b7bd4 === _0x41835a(1105)) {
          if (_0x26a5da[_0x41835a(1514)] === 4)
            return _0x4d99db({ "numFailures": _0x1eb860, "failures": _0xfafd7b, "results": [], "lastResult": void 0 });
          if (_0x26a5da[_0x41835a(1514)] === 3)
            _0x5c2ed4[_0x41835a(1991)](_0x49bbf5 = _0x33b232[_0x41835a(1607)]());
          else
            _0x5c2ed4["push"](_0x49bbf5 = _0x33b232["delete"](_0x12a379(_0x26a5da)));
        } else {
          var _0x39ff42 = _0x4215f7 ? _0x5e0138 ? [_0x59cbe0, _0x3518a2] : [_0x59cbe0, null] : [_0x3518a2, null], _0xe47758 = _0x39ff42[0], _0x659b6d = _0x39ff42[1];
          if (_0x4215f7)
            for (var _0x413434 = 0; _0x413434 < _0x18f5ec; ++_0x413434) {
              _0x5c2ed4[_0x41835a(1991)](_0x49bbf5 = _0x659b6d && _0x659b6d[_0x413434] !== void 0 ? _0x33b232[_0x1b7bd4](_0xe47758[_0x413434], _0x659b6d[_0x413434]) : _0x33b232[_0x1b7bd4](_0xe47758[_0x413434])), _0x49bbf5[_0x41835a(1512)] = _0x2a9c82;
            }
          else
            for (var _0x413434 = 0; _0x413434 < _0x18f5ec; ++_0x413434) {
              _0x5c2ed4["push"](_0x49bbf5 = _0x33b232[_0x1b7bd4](_0xe47758[_0x413434])), _0x49bbf5[_0x41835a(1512)] = _0x2a9c82;
            }
        }
        var _0x2d3602 = function(_0x35ffc3) {
          var _0x3a87f1 = _0x41835a, _0xd96451 = _0x35ffc3["target"][_0x3a87f1(411)];
          _0x5c2ed4[_0x3a87f1(839)](function(_0x417d6f, _0xfb60a2) {
            var _0x4c5c3f = _0x3a87f1;
            return _0x417d6f[_0x4c5c3f(2165)] != null && (_0xfafd7b[_0xfb60a2] = _0x417d6f[_0x4c5c3f(2165)]);
          }), _0x4d99db({ "numFailures": _0x1eb860, "failures": _0xfafd7b, "results": _0x1b7bd4 === _0x3a87f1(1653) ? _0x3518a2 : _0x5c2ed4[_0x3a87f1(376)](function(_0x32ba66) {
            var _0x1d3cdd = _0x3a87f1;
            return _0x32ba66[_0x1d3cdd(411)];
          }), "lastResult": _0xd96451 });
        };
        _0x49bbf5[_0x41835a(1512)] = function(_0x4b72f5) {
          _0x2a9c82(_0x4b72f5), _0x2d3602(_0x4b72f5);
        }, _0x49bbf5["onsuccess"] = _0x2d3602;
      });
    }
    function _0x280198(_0x32d0b9) {
      var _0x4e6275 = _0x885faa, _0x170416 = _0x32d0b9["trans"], _0x5e3bb8 = _0x32d0b9[_0x4e6275(1919)], _0x3594b5 = _0x32d0b9["query"], _0x5aeb30 = _0x32d0b9[_0x4e6275(370)], _0x2f2092 = _0x32d0b9["unique"];
      return new Promise(function(_0x3f759e, _0x24adb8) {
        var _0x4a87ef = _0x4e6275;
        _0x3f759e = wrap(_0x3f759e);
        var _0x36471e = _0x3594b5[_0x4a87ef(1128)], _0x4b8d76 = _0x3594b5[_0x4a87ef(377)], _0x6144d0 = _0x170416[_0x4a87ef(1898)](_0x3d08f5), _0x410d36 = _0x36471e[_0x4a87ef(1857)] ? _0x6144d0 : _0x6144d0[_0x4a87ef(1128)](_0x36471e["name"]), _0x408fcb = _0x5aeb30 ? _0x2f2092 ? _0x4a87ef(479) : _0x4a87ef(1104) : _0x2f2092 ? _0x4a87ef(1e3) : "next", _0x7b0f7f = _0x5e3bb8 || !("openKeyCursor" in _0x410d36) ? _0x410d36["openCursor"](_0x12a379(_0x4b8d76), _0x408fcb) : _0x410d36[_0x4a87ef(1072)](_0x12a379(_0x4b8d76), _0x408fcb);
        _0x7b0f7f[_0x4a87ef(1512)] = eventRejectHandler(_0x24adb8), _0x7b0f7f[_0x4a87ef(999)] = wrap(function(_0xa99e97) {
          var _0x8588d0 = _0x4a87ef, _0x3b5dc1 = _0x7b0f7f["result"];
          if (!_0x3b5dc1) {
            _0x3f759e(null);
            return;
          }
          _0x3b5dc1[_0x8588d0(1329)] = ++_id_counter, _0x3b5dc1[_0x8588d0(1353)] = ![];
          var _0x43c54e = _0x3b5dc1["continue"]["bind"](_0x3b5dc1), _0x4ab402 = _0x3b5dc1[_0x8588d0(1546)];
          if (_0x4ab402)
            _0x4ab402 = _0x4ab402[_0x8588d0(517)](_0x3b5dc1);
          var _0x2730ee = _0x3b5dc1[_0x8588d0(995)]["bind"](_0x3b5dc1), _0x4e2c03 = function() {
            var _0x40cad7 = _0x8588d0;
            throw new Error(_0x40cad7(2159));
          }, _0x1a8e28 = function() {
            throw new Error("Cursor not stopped");
          };
          _0x3b5dc1[_0x8588d0(683)] = _0x170416, _0x3b5dc1[_0x8588d0(712)] = _0x3b5dc1["continue"] = _0x3b5dc1[_0x8588d0(1546)] = _0x3b5dc1[_0x8588d0(995)] = _0x4e2c03, _0x3b5dc1[_0x8588d0(1755)] = wrap(_0x24adb8), _0x3b5dc1[_0x8588d0(670)] = function() {
            var _0x168903 = _0x8588d0, _0x35ba07 = this, _0x1f3b31 = 1;
            return this["start"](function() {
              return _0x1f3b31-- ? _0x35ba07["continue"]() : _0x35ba07["stop"]();
            })[_0x168903(1902)](function() {
              return _0x35ba07;
            });
          }, _0x3b5dc1[_0x8588d0(2014)] = function(_0x10b413) {
            var _0x32e9f7 = _0x8588d0, _0x3fb05d = new Promise(function(_0x566d27, _0x5f565a) {
              var _0x396aec = _0x3001;
              _0x566d27 = wrap(_0x566d27), _0x7b0f7f[_0x396aec(1512)] = eventRejectHandler(_0x5f565a), _0x3b5dc1[_0x396aec(1755)] = _0x5f565a, _0x3b5dc1[_0x396aec(712)] = function(_0x4fcfce) {
                var _0x28dbde = _0x396aec;
                _0x3b5dc1[_0x28dbde(712)] = _0x3b5dc1[_0x28dbde(913)] = _0x3b5dc1[_0x28dbde(1546)] = _0x3b5dc1["advance"] = _0x1a8e28, _0x566d27(_0x4fcfce);
              };
            }), _0x268216 = function() {
              var _0x4b3b13 = _0x3001;
              if (_0x7b0f7f[_0x4b3b13(411)])
                try {
                  _0x10b413();
                } catch (_0x3a7dd8) {
                  _0x3b5dc1[_0x4b3b13(1755)](_0x3a7dd8);
                }
              else
                _0x3b5dc1[_0x4b3b13(1353)] = !![], _0x3b5dc1[_0x4b3b13(2014)] = function() {
                  throw new Error("Cursor behind last entry");
                }, _0x3b5dc1[_0x4b3b13(712)]();
            };
            return _0x7b0f7f[_0x32e9f7(999)] = wrap(function(_0x12f39b) {
              _0x7b0f7f["onsuccess"] = _0x268216, _0x268216();
            }), _0x3b5dc1["continue"] = _0x43c54e, _0x3b5dc1["continuePrimaryKey"] = _0x4ab402, _0x3b5dc1[_0x32e9f7(995)] = _0x2730ee, _0x268216(), _0x3fb05d;
          }, _0x3f759e(_0x3b5dc1);
        }, _0x24adb8);
      });
    }
    function _0x49b9d8(_0x2097f0) {
      return function(_0x28dcc0) {
        return new Promise(function(_0x1534cc, _0x6d8af6) {
          var _0x5ee3c9 = _0x3001;
          _0x1534cc = wrap(_0x1534cc);
          var _0x5bfe28 = _0x28dcc0[_0x5ee3c9(683)], _0x4528ec = _0x28dcc0[_0x5ee3c9(1919)], _0x5efb76 = _0x28dcc0[_0x5ee3c9(1210)], _0x5ab8fd = _0x28dcc0[_0x5ee3c9(615)], _0x2b7749 = _0x5efb76 === Infinity ? void 0 : _0x5efb76, _0x20c489 = _0x5ab8fd[_0x5ee3c9(1128)], _0x7be767 = _0x5ab8fd[_0x5ee3c9(377)], _0x5c1502 = _0x5bfe28[_0x5ee3c9(1898)](_0x3d08f5), _0x136a6c = _0x20c489[_0x5ee3c9(1857)] ? _0x5c1502 : _0x5c1502[_0x5ee3c9(1128)](_0x20c489["name"]), _0x138c40 = _0x12a379(_0x7be767);
          if (_0x5efb76 === 0)
            return _0x1534cc({ "result": [] });
          if (_0x2097f0) {
            var _0x488c0b = _0x4528ec ? _0x136a6c[_0x5ee3c9(373)](_0x138c40, _0x2b7749) : _0x136a6c["getAllKeys"](_0x138c40, _0x2b7749);
            _0x488c0b[_0x5ee3c9(999)] = function(_0x8e17f7) {
              var _0x1c6974 = _0x5ee3c9;
              return _0x1534cc({ "result": _0x8e17f7[_0x1c6974(1961)][_0x1c6974(411)] });
            }, _0x488c0b[_0x5ee3c9(1512)] = eventRejectHandler(_0x6d8af6);
          } else {
            var _0x4f8485 = 0, _0x3dd5d2 = _0x4528ec || !(_0x5ee3c9(1072) in _0x136a6c) ? _0x136a6c[_0x5ee3c9(1109)](_0x138c40) : _0x136a6c[_0x5ee3c9(1072)](_0x138c40), _0xdad2ad = [];
            _0x3dd5d2[_0x5ee3c9(999)] = function(_0x2c38be) {
              var _0x58562f = _0x5ee3c9, _0x324da0 = _0x3dd5d2["result"];
              if (!_0x324da0)
                return _0x1534cc({ "result": _0xdad2ad });
              _0xdad2ad[_0x58562f(1991)](_0x4528ec ? _0x324da0[_0x58562f(819)] : _0x324da0[_0x58562f(931)]);
              if (++_0x4f8485 === _0x5efb76)
                return _0x1534cc({ "result": _0xdad2ad });
              _0x324da0[_0x58562f(913)]();
            }, _0x3dd5d2[_0x5ee3c9(1512)] = eventRejectHandler(_0x6d8af6);
          }
        });
      };
    }
    return { "name": _0x3d08f5, "schema": _0xc58e0, "mutate": _0x28228b, "getMany": function(_0x15ab68) {
      var _0x507c38 = _0x885faa, _0x47bdc7 = _0x15ab68[_0x507c38(683)], _0x2c994b = _0x15ab68[_0x507c38(605)];
      return new Promise(function(_0x536dbd, _0x3f1803) {
        var _0x1cd44f = _0x507c38;
        _0x536dbd = wrap(_0x536dbd);
        var _0x4eda3 = _0x47bdc7[_0x1cd44f(1898)](_0x3d08f5), _0x40f267 = _0x2c994b["length"], _0x51ee1c = new Array(_0x40f267), _0x14278d = 0, _0x165488 = 0, _0x4ddf58, _0x3045f4 = function(_0x128c26) {
          var _0x328fee = _0x1cd44f, _0x42357f = _0x128c26["target"];
          if ((_0x51ee1c[_0x42357f[_0x328fee(417)]] = _0x42357f[_0x328fee(411)]) != null)
            ;
          if (++_0x165488 === _0x14278d)
            _0x536dbd(_0x51ee1c);
        }, _0x4a3e57 = eventRejectHandler(_0x3f1803);
        for (var _0x368f2 = 0; _0x368f2 < _0x40f267; ++_0x368f2) {
          var _0x112cb0 = _0x2c994b[_0x368f2];
          _0x112cb0 != null && (_0x4ddf58 = _0x4eda3[_0x1cd44f(1892)](_0x2c994b[_0x368f2]), _0x4ddf58[_0x1cd44f(417)] = _0x368f2, _0x4ddf58[_0x1cd44f(999)] = _0x3045f4, _0x4ddf58[_0x1cd44f(1512)] = _0x4a3e57, ++_0x14278d);
        }
        if (_0x14278d === 0)
          _0x536dbd(_0x51ee1c);
      });
    }, "get": function(_0x5886b9) {
      var _0x424529 = _0x5886b9["trans"], _0x1bcf70 = _0x5886b9["key"];
      return new Promise(function(_0x462d68, _0x1b9194) {
        var _0x1953ce = _0x3001;
        _0x462d68 = wrap(_0x462d68);
        var _0x32e8ca = _0x424529[_0x1953ce(1898)](_0x3d08f5), _0x4d985a = _0x32e8ca["get"](_0x1bcf70);
        _0x4d985a[_0x1953ce(999)] = function(_0x510748) {
          var _0x4d4521 = _0x1953ce;
          return _0x462d68(_0x510748["target"][_0x4d4521(411)]);
        }, _0x4d985a[_0x1953ce(1512)] = eventRejectHandler(_0x1b9194);
      });
    }, "query": _0x49b9d8(_0x276bfc), "openCursor": _0x280198, "count": function(_0x5d1ddd) {
      var _0x25ab26 = _0x885faa, _0xdee091 = _0x5d1ddd[_0x25ab26(615)], _0x515459 = _0x5d1ddd["trans"], _0xa3ea9 = _0xdee091["index"], _0x37c16c = _0xdee091[_0x25ab26(377)];
      return new Promise(function(_0x23a086, _0x23f703) {
        var _0xf4b40 = _0x25ab26, _0x105db6 = _0x515459[_0xf4b40(1898)](_0x3d08f5), _0x2b4645 = _0xa3ea9["isPrimaryKey"] ? _0x105db6 : _0x105db6[_0xf4b40(1128)](_0xa3ea9[_0xf4b40(765)]), _0x126668 = _0x12a379(_0x37c16c), _0x37bca5 = _0x126668 ? _0x2b4645["count"](_0x126668) : _0x2b4645[_0xf4b40(1675)]();
        _0x37bca5["onsuccess"] = wrap(function(_0x466528) {
          var _0xa4446c = _0xf4b40;
          return _0x23a086(_0x466528[_0xa4446c(1961)][_0xa4446c(411)]);
        }), _0x37bca5["onerror"] = eventRejectHandler(_0x23f703);
      });
    } };
  }
  var _0x2d5608 = _0xa03e28(_0x256c1f, _0x2ffa0f), _0x29472f = _0x2d5608[_0xc7bdb2(795)], _0x276bfc = _0x2d5608["hasGetAll"], _0x1d0466 = _0x29472f[_0xc7bdb2(1764)][_0xc7bdb2(376)](function(_0x28ca7d) {
    return _0x168f5d(_0x28ca7d);
  }), _0x3bbcf2 = {};
  return _0x1d0466["forEach"](function(_0x565ab3) {
    var _0x6cfa05 = _0xc7bdb2;
    return _0x3bbcf2[_0x565ab3[_0x6cfa05(765)]] = _0x565ab3;
  }), { "stack": _0xc7bdb2(659), "transaction": _0x256c1f[_0xc7bdb2(955)]["bind"](_0x256c1f), "table": function(_0x1ce490) {
    var _0x4bf00e = _0xc7bdb2, _0x210738 = _0x3bbcf2[_0x1ce490];
    if (!_0x210738)
      throw new Error(_0x4bf00e(1994) + _0x1ce490 + _0x4bf00e(1227));
    return _0x3bbcf2[_0x1ce490];
  }, "MIN_KEY": -Infinity, "MAX_KEY": getMaxKey(_0x2d39bf), "schema": _0x29472f };
}
function createMiddlewareStack(_0x13a9d8, _0x3b3bac) {
  var _0x38ec8c = _0x780a7e;
  return _0x3b3bac[_0x38ec8c(690)](function(_0x22f9f2, _0x1b06b6) {
    var _0x1339a8 = _0x38ec8c, _0x56b7ce = _0x1b06b6[_0x1339a8(1409)];
    return __assign(__assign({}, _0x22f9f2), _0x56b7ce(_0x22f9f2));
  }, _0x13a9d8);
}
function createMiddlewareStacks(_0x2d05bf, _0x192af8, _0x144a30, _0x5403c4) {
  var _0x20b8d0 = _0x780a7e, _0x206d1f = _0x144a30[_0x20b8d0(1955)];
  _0x144a30[_0x20b8d0(476)];
  var _0x4075a6 = createMiddlewareStack(createDBCore(_0x192af8, _0x206d1f, _0x5403c4), _0x2d05bf[_0x20b8d0(659)]);
  return { "dbcore": _0x4075a6 };
}
function generateMiddlewareStacks(_0x54d5e2, _0x45cefb) {
  var _0x101af5 = _0x780a7e, _0x2493a4 = _0x54d5e2[_0x101af5(1846)], _0x4d942d = _0x45cefb["db"], _0x3c28b6 = createMiddlewareStacks(_0x2493a4[_0x101af5(757)], _0x4d942d, _0x2493a4[_0x101af5(1767)], _0x45cefb);
  _0x2493a4[_0x101af5(2104)] = _0x3c28b6[_0x101af5(659)], _0x2493a4[_0x101af5(1764)][_0x101af5(839)](function(_0x333122) {
    var _0x5bdf2a = _0x101af5, _0x1cd153 = _0x333122[_0x5bdf2a(765)];
    _0x2493a4[_0x5bdf2a(2104)]["schema"][_0x5bdf2a(1764)]["some"](function(_0x2b5383) {
      return _0x2b5383["name"] === _0x1cd153;
    }) && (_0x333122[_0x5bdf2a(2104)] = _0x2493a4[_0x5bdf2a(2104)][_0x5bdf2a(2178)](_0x1cd153), _0x2493a4[_0x1cd153] instanceof _0x2493a4[_0x5bdf2a(1080)] && (_0x2493a4[_0x1cd153][_0x5bdf2a(2104)] = _0x333122["core"]));
  });
}
function setApiOnPlace(_0x498416, _0x39dd60, _0x2740d8, _0x554406) {
  var _0x486416 = _0x780a7e, _0x13606b = _0x498416[_0x486416(1846)];
  _0x2740d8[_0x486416(839)](function(_0x4ae086) {
    var _0x2cec45 = _0x486416, _0x111bc2 = _0x554406[_0x4ae086];
    _0x39dd60[_0x2cec45(839)](function(_0x4f0866) {
      var _0x4a16f0 = _0x2cec45, _0x548919 = getPropertyDescriptor(_0x4f0866, _0x4ae086);
      (!_0x548919 || "value" in _0x548919 && _0x548919["value"] === void 0) && (_0x4f0866 === _0x13606b[_0x4a16f0(1401)][_0x4a16f0(1897)] || _0x4f0866 instanceof _0x13606b[_0x4a16f0(1401)] ? setProp(_0x4f0866, _0x4ae086, { "get": function() {
        var _0x2d9b31 = _0x4a16f0;
        return this[_0x2d9b31(2178)](_0x4ae086);
      }, "set": function(_0x1755ec) {
        defineProperty(this, _0x4ae086, { "value": _0x1755ec, "writable": !![], "configurable": !![], "enumerable": !![] });
      } }) : _0x4f0866[_0x4ae086] = new _0x13606b["Table"](_0x4ae086, _0x111bc2));
    });
  });
}
function removeTablesApi(_0x167036, _0x31c2a9) {
  var _0x10f01f = _0x780a7e, _0x46a4ef = _0x167036[_0x10f01f(1846)];
  _0x31c2a9[_0x10f01f(839)](function(_0x27d386) {
    var _0x351ed9 = _0x10f01f;
    for (var _0x5b2905 in _0x27d386) {
      if (_0x27d386[_0x5b2905] instanceof _0x46a4ef[_0x351ed9(1080)])
        delete _0x27d386[_0x5b2905];
    }
  });
}
function lowerVersionFirst(_0x302a9d, _0x514b89) {
  var _0x14ee37 = _0x780a7e;
  return _0x302a9d["_cfg"]["version"] - _0x514b89[_0x14ee37(2191)]["version"];
}
function runUpgraders(_0x2233ac, _0x58a821, _0x4e0e9d, _0x3d93b8) {
  var _0x1a4c3e = _0x780a7e, _0x1deb0a = _0x2233ac["_dbSchema"], _0x400d4a = _0x2233ac[_0x1a4c3e(1658)](_0x1a4c3e(1069), _0x2233ac[_0x1a4c3e(1203)], _0x1deb0a);
  _0x400d4a[_0x1a4c3e(1409)](_0x4e0e9d), _0x400d4a[_0x1a4c3e(711)][_0x1a4c3e(1517)](_0x3d93b8);
  var _0x5b9c59 = _0x400d4a[_0x1a4c3e(800)][_0x1a4c3e(517)](_0x400d4a), _0x2433c9 = PSD["transless"] || PSD;
  newScope(function() {
    var _0xe14a54 = _0x1a4c3e;
    PSD[_0xe14a54(683)] = _0x400d4a, PSD[_0xe14a54(1612)] = _0x2433c9;
    if (_0x58a821 === 0)
      keys(_0x1deb0a)["forEach"](function(_0x47be78) {
        var _0x10e704 = _0xe14a54;
        createTable(_0x4e0e9d, _0x47be78, _0x1deb0a[_0x47be78]["primKey"], _0x1deb0a[_0x47be78][_0x10e704(1056)]);
      }), generateMiddlewareStacks(_0x2233ac, _0x4e0e9d), DexiePromise["follow"](function() {
        var _0x37b082 = _0xe14a54;
        return _0x2233ac["on"][_0x37b082(586)][_0x37b082(801)](_0x400d4a);
      })[_0xe14a54(1517)](_0x5b9c59);
    else
      updateTablesAndIndexes(_0x2233ac, _0x58a821, _0x400d4a, _0x4e0e9d)[_0xe14a54(1517)](_0x5b9c59);
  });
}
function updateTablesAndIndexes(_0x3b4e23, _0xee3531, _0x1be5e4, _0x364b0b) {
  var _0x345c8a = _0x780a7e, _0x487024 = _0x3b4e23[_0x345c8a(1846)], _0x452211 = [], _0x2ae0bf = _0x487024[_0x345c8a(1255)], _0x28995d = _0x487024[_0x345c8a(823)] = buildGlobalSchema(_0x487024, _0x487024[_0x345c8a(973)], _0x364b0b), _0x4ced39 = ![], _0x46ad42 = _0x2ae0bf[_0x345c8a(805)](function(_0x884600) {
    var _0x22f623 = _0x345c8a;
    return _0x884600[_0x22f623(2191)][_0x22f623(436)] >= _0xee3531;
  });
  _0x46ad42[_0x345c8a(839)](function(_0x2eabce) {
    var _0xf09ea2 = _0x345c8a;
    _0x452211["push"](function() {
      var _0x33011d = _0x3001, _0x3fc1ef = _0x28995d, _0x43418a = _0x2eabce["_cfg"][_0x33011d(556)];
      adjustToExistingIndexNames(_0x487024, _0x3fc1ef, _0x364b0b), adjustToExistingIndexNames(_0x487024, _0x43418a, _0x364b0b), _0x28995d = _0x487024["_dbSchema"] = _0x43418a;
      var _0x4d50da = getSchemaDiff(_0x3fc1ef, _0x43418a);
      _0x4d50da[_0x33011d(2170)][_0x33011d(839)](function(_0x4c655d) {
        var _0x12f50f = _0x33011d;
        createTable(_0x364b0b, _0x4c655d[0], _0x4c655d[1]["primKey"], _0x4c655d[1][_0x12f50f(1056)]);
      }), _0x4d50da[_0x33011d(1999)][_0x33011d(839)](function(_0x3df8d6) {
        var _0x2aedbc = _0x33011d;
        if (_0x3df8d6[_0x2aedbc(896)])
          throw new exceptions[_0x2aedbc(1928)](_0x2aedbc(1083));
        else {
          var _0x2da6de = _0x364b0b[_0x2aedbc(1898)](_0x3df8d6[_0x2aedbc(765)]);
          _0x3df8d6[_0x2aedbc(2170)]["forEach"](function(_0x30fd86) {
            return addIndex(_0x2da6de, _0x30fd86);
          }), _0x3df8d6[_0x2aedbc(1999)][_0x2aedbc(839)](function(_0x53a496) {
            var _0x3f7eef = _0x2aedbc;
            _0x2da6de[_0x3f7eef(1665)](_0x53a496[_0x3f7eef(765)]), addIndex(_0x2da6de, _0x53a496);
          }), _0x3df8d6[_0x2aedbc(890)][_0x2aedbc(839)](function(_0x21b107) {
            var _0x3e9dea = _0x2aedbc;
            return _0x2da6de[_0x3e9dea(1665)](_0x21b107);
          });
        }
      });
      var _0x4c73e9 = _0x2eabce[_0x33011d(2191)][_0x33011d(466)];
      if (_0x4c73e9 && _0x2eabce[_0x33011d(2191)][_0x33011d(436)] > _0xee3531) {
        generateMiddlewareStacks(_0x487024, _0x364b0b), _0x1be5e4[_0x33011d(744)] = {}, _0x4ced39 = !![];
        var _0x42fd1f = shallowClone(_0x43418a);
        _0x4d50da[_0x33011d(890)][_0x33011d(839)](function(_0x281fda) {
          _0x42fd1f[_0x281fda] = _0x3fc1ef[_0x281fda];
        }), removeTablesApi(_0x487024, [_0x487024[_0x33011d(1401)][_0x33011d(1897)]]), setApiOnPlace(_0x487024, [_0x487024[_0x33011d(1401)]["prototype"]], keys(_0x42fd1f), _0x42fd1f), _0x1be5e4["schema"] = _0x42fd1f;
        var _0x581040 = isAsyncFunction(_0x4c73e9);
        _0x581040 && incrementExpectedAwaits();
        var _0x330753, _0x482d91 = DexiePromise[_0x33011d(1951)](function() {
          var _0x3b98b9 = _0x33011d;
          _0x330753 = _0x4c73e9(_0x1be5e4);
          if (_0x330753) {
            if (_0x581040) {
              var _0x5b01cc = decrementExpectedAwaits[_0x3b98b9(517)](null, null);
              _0x330753["then"](_0x5b01cc, _0x5b01cc);
            }
          }
        });
        return _0x330753 && typeof _0x330753["then"] === _0x33011d(389) ? DexiePromise[_0x33011d(1211)](_0x330753) : _0x482d91["then"](function() {
          return _0x330753;
        });
      }
    }), _0x452211[_0xf09ea2(1991)](function(_0x283f47) {
      var _0x3755b1 = _0xf09ea2;
      if (!_0x4ced39 || !hasIEDeleteObjectStoreBug) {
        var _0x1e36fb = _0x2eabce[_0x3755b1(2191)][_0x3755b1(556)];
        deleteRemovedTables(_0x1e36fb, _0x283f47);
      }
      removeTablesApi(_0x487024, [_0x487024["Transaction"][_0x3755b1(1897)]]), setApiOnPlace(_0x487024, [_0x487024["Transaction"][_0x3755b1(1897)]], _0x487024[_0x3755b1(1203)], _0x487024[_0x3755b1(823)]), _0x1be5e4[_0x3755b1(795)] = _0x487024[_0x3755b1(823)];
    });
  });
  function _0x17adf5() {
    var _0x8036aa = _0x345c8a;
    return _0x452211[_0x8036aa(1965)] ? DexiePromise[_0x8036aa(1211)](_0x452211[_0x8036aa(2002)]()(_0x1be5e4[_0x8036aa(1532)]))["then"](_0x17adf5) : DexiePromise[_0x8036aa(1211)]();
  }
  return _0x17adf5()[_0x345c8a(1902)](function() {
    createMissingTables(_0x28995d, _0x364b0b);
  });
}
function getSchemaDiff(_0x3740ff, _0x50927a) {
  var _0x24cf1e = _0x780a7e, _0x196a9d = { "del": [], "add": [], "change": [] }, _0x2600f4;
  for (_0x2600f4 in _0x3740ff) {
    if (!_0x50927a[_0x2600f4])
      _0x196a9d[_0x24cf1e(890)]["push"](_0x2600f4);
  }
  for (_0x2600f4 in _0x50927a) {
    var _0x120831 = _0x3740ff[_0x2600f4], _0x2ccd5a = _0x50927a[_0x2600f4];
    if (!_0x120831)
      _0x196a9d[_0x24cf1e(2170)][_0x24cf1e(1991)]([_0x2600f4, _0x2ccd5a]);
    else {
      var _0x2f4f51 = { "name": _0x2600f4, "def": _0x2ccd5a, "recreate": ![], "del": [], "add": [], "change": [] };
      if ("" + (_0x120831[_0x24cf1e(1151)][_0x24cf1e(1565)] || "") !== "" + (_0x2ccd5a[_0x24cf1e(1151)][_0x24cf1e(1565)] || "") || _0x120831[_0x24cf1e(1151)][_0x24cf1e(1850)] !== _0x2ccd5a[_0x24cf1e(1151)]["auto"] && !isIEOrEdge)
        _0x2f4f51[_0x24cf1e(896)] = !![], _0x196a9d[_0x24cf1e(1999)]["push"](_0x2f4f51);
      else {
        var _0x53d316 = _0x120831[_0x24cf1e(1787)], _0x5b91da = _0x2ccd5a[_0x24cf1e(1787)], _0x341110 = void 0;
        for (_0x341110 in _0x53d316) {
          if (!_0x5b91da[_0x341110])
            _0x2f4f51[_0x24cf1e(890)]["push"](_0x341110);
        }
        for (_0x341110 in _0x5b91da) {
          var _0x39b63a = _0x53d316[_0x341110], _0x17ed86 = _0x5b91da[_0x341110];
          if (!_0x39b63a)
            _0x2f4f51[_0x24cf1e(2170)][_0x24cf1e(1991)](_0x17ed86);
          else {
            if (_0x39b63a[_0x24cf1e(2169)] !== _0x17ed86["src"])
              _0x2f4f51[_0x24cf1e(1999)]["push"](_0x17ed86);
          }
        }
        (_0x2f4f51[_0x24cf1e(890)][_0x24cf1e(1965)] > 0 || _0x2f4f51[_0x24cf1e(2170)][_0x24cf1e(1965)] > 0 || _0x2f4f51[_0x24cf1e(1999)][_0x24cf1e(1965)] > 0) && _0x196a9d[_0x24cf1e(1999)][_0x24cf1e(1991)](_0x2f4f51);
      }
    }
  }
  return _0x196a9d;
}
function createTable(_0x5d957d, _0x4bd25c, _0x4fde45, _0x495d86) {
  var _0x4635d9 = _0x780a7e, _0x18d226 = _0x5d957d["db"][_0x4635d9(500)](_0x4bd25c, _0x4fde45[_0x4635d9(1565)] ? { "keyPath": _0x4fde45["keyPath"], "autoIncrement": _0x4fde45[_0x4635d9(1850)] } : { "autoIncrement": _0x4fde45[_0x4635d9(1850)] });
  return _0x495d86[_0x4635d9(839)](function(_0x317619) {
    return addIndex(_0x18d226, _0x317619);
  }), _0x18d226;
}
function createMissingTables(_0x201c0d, _0x144eb7) {
  var _0x13c1d0 = _0x780a7e;
  keys(_0x201c0d)[_0x13c1d0(839)](function(_0x2012e8) {
    var _0x87426b = _0x13c1d0;
    !_0x144eb7["db"]["objectStoreNames"][_0x87426b(1293)](_0x2012e8) && createTable(_0x144eb7, _0x2012e8, _0x201c0d[_0x2012e8]["primKey"], _0x201c0d[_0x2012e8]["indexes"]);
  });
}
function deleteRemovedTables(_0x35ded1, _0x41611b) {
  var _0x3ecc1c = _0x780a7e;
  [][_0x3ecc1c(1215)][_0x3ecc1c(1206)](_0x41611b["db"][_0x3ecc1c(841)])[_0x3ecc1c(839)](function(_0x152218) {
    return _0x35ded1[_0x152218] == null && _0x41611b["db"]["deleteObjectStore"](_0x152218);
  });
}
function addIndex(_0x52e6bc, _0x4b1a9f) {
  var _0x5128c7 = _0x780a7e;
  _0x52e6bc[_0x5128c7(1022)](_0x4b1a9f[_0x5128c7(765)], _0x4b1a9f[_0x5128c7(1565)], { "unique": _0x4b1a9f["unique"], "multiEntry": _0x4b1a9f[_0x5128c7(1828)] });
}
function buildGlobalSchema(_0x2cf769, _0x97741a, _0x3822c4) {
  var _0x22137a = _0x780a7e, _0x9cc0ed = {}, _0x1b942e = slice(_0x97741a["objectStoreNames"], 0);
  return _0x1b942e[_0x22137a(839)](function(_0x11744e) {
    var _0x36ff19 = _0x22137a, _0x46154f = _0x3822c4[_0x36ff19(1898)](_0x11744e), _0x2c2c75 = _0x46154f[_0x36ff19(1565)], _0x596fd8 = createIndexSpec(nameFromKeyPath(_0x2c2c75), _0x2c2c75 || "", ![], ![], !!_0x46154f[_0x36ff19(341)], _0x2c2c75 && typeof _0x2c2c75 !== _0x36ff19(1548), !![]), _0x536455 = [];
    for (var _0x2a00fc = 0; _0x2a00fc < _0x46154f[_0x36ff19(895)][_0x36ff19(1965)]; ++_0x2a00fc) {
      var _0x1dab58 = _0x46154f[_0x36ff19(1128)](_0x46154f[_0x36ff19(895)][_0x2a00fc]);
      _0x2c2c75 = _0x1dab58[_0x36ff19(1565)];
      var _0x4a580f = createIndexSpec(_0x1dab58[_0x36ff19(765)], _0x2c2c75, !!_0x1dab58[_0x36ff19(531)], !!_0x1dab58[_0x36ff19(1580)], ![], _0x2c2c75 && typeof _0x2c2c75 !== _0x36ff19(1548), ![]);
      _0x536455[_0x36ff19(1991)](_0x4a580f);
    }
    _0x9cc0ed[_0x11744e] = createTableSchema(_0x11744e, _0x596fd8, _0x536455);
  }), _0x9cc0ed;
}
function readGlobalSchema(_0x4d156e, _0x15cf6f, _0x29e5b8) {
  var _0x54d429 = _0x780a7e, _0x4b23ec = _0x4d156e[_0x54d429(1846)];
  _0x4b23ec[_0x54d429(1464)] = _0x15cf6f["version"] / 10;
  var _0x2bb1eb = _0x4b23ec[_0x54d429(823)] = buildGlobalSchema(_0x4b23ec, _0x15cf6f, _0x29e5b8);
  _0x4b23ec[_0x54d429(1203)] = slice(_0x15cf6f[_0x54d429(841)], 0), setApiOnPlace(_0x4b23ec, [_0x4b23ec[_0x54d429(640)]], keys(_0x2bb1eb), _0x2bb1eb);
}
function verifyInstalledSchema(_0x308866, _0x141b15) {
  var _0x7187ab = _0x780a7e, _0x1e1b7b = buildGlobalSchema(_0x308866, _0x308866["idbdb"], _0x141b15), _0x122130 = getSchemaDiff(_0x1e1b7b, _0x308866[_0x7187ab(823)]);
  return !(_0x122130[_0x7187ab(2170)][_0x7187ab(1965)] || _0x122130[_0x7187ab(1999)][_0x7187ab(1235)](function(_0x5d1b64) {
    var _0x283f2f = _0x7187ab;
    return _0x5d1b64[_0x283f2f(2170)][_0x283f2f(1965)] || _0x5d1b64[_0x283f2f(1999)]["length"];
  }));
}
function adjustToExistingIndexNames(_0x55d77d, _0x1ccaca, _0x2967b3) {
  var _0x14e16d = _0x780a7e, _0x45346b = _0x55d77d[_0x14e16d(1846)], _0x58aa8a = _0x2967b3["db"][_0x14e16d(841)];
  for (var _0x6d6283 = 0; _0x6d6283 < _0x58aa8a[_0x14e16d(1965)]; ++_0x6d6283) {
    var _0x4b28ed = _0x58aa8a[_0x6d6283], _0x5f113a = _0x2967b3["objectStore"](_0x4b28ed);
    _0x45346b[_0x14e16d(1648)] = "getAll" in _0x5f113a;
    for (var _0x3ca259 = 0; _0x3ca259 < _0x5f113a[_0x14e16d(895)][_0x14e16d(1965)]; ++_0x3ca259) {
      var _0x2b8cb3 = _0x5f113a["indexNames"][_0x3ca259], _0x33afe2 = _0x5f113a[_0x14e16d(1128)](_0x2b8cb3)[_0x14e16d(1565)], _0x88e43b = typeof _0x33afe2 === _0x14e16d(1548) ? _0x33afe2 : "[" + slice(_0x33afe2)[_0x14e16d(2180)]("+") + "]";
      if (_0x1ccaca[_0x4b28ed]) {
        var _0x52203d = _0x1ccaca[_0x4b28ed][_0x14e16d(1787)][_0x88e43b];
        _0x52203d && (_0x52203d[_0x14e16d(765)] = _0x2b8cb3, delete _0x1ccaca[_0x4b28ed]["idxByName"][_0x88e43b], _0x1ccaca[_0x4b28ed][_0x14e16d(1787)][_0x2b8cb3] = _0x52203d);
      }
    }
  }
  typeof navigator !== _0x14e16d(437) && /Safari/[_0x14e16d(1778)](navigator[_0x14e16d(1470)]) && !/(Chrome\/|Edge\/)/[_0x14e16d(1778)](navigator[_0x14e16d(1470)]) && _global[_0x14e16d(1861)] && _global instanceof _global[_0x14e16d(1861)] && [][_0x14e16d(2090)](navigator[_0x14e16d(1470)][_0x14e16d(1962)](/Safari\/(\d*)/))[1] < 604 && (_0x45346b["_hasGetAll"] = ![]);
}
function parseIndexSyntax(_0x50fb27) {
  var _0x32c1ff = _0x780a7e;
  return _0x50fb27["split"](",")[_0x32c1ff(376)](function(_0x32d117, _0x20d511) {
    var _0x191655 = _0x32c1ff;
    _0x32d117 = _0x32d117["trim"]();
    var _0x3eb31a = _0x32d117[_0x191655(1028)](/([&*]|\+\+)/g, ""), _0x415975 = /^\[/[_0x191655(1778)](_0x3eb31a) ? _0x3eb31a[_0x191655(1962)](/^\[(.*)\]$/)[1][_0x191655(1201)]("+") : _0x3eb31a;
    return createIndexSpec(_0x3eb31a, _0x415975 || null, /\&/["test"](_0x32d117), /\*/[_0x191655(1778)](_0x32d117), /\+\+/[_0x191655(1778)](_0x32d117), isArray(_0x415975), _0x20d511 === 0);
  });
}
var Version = function() {
  var _0x4742e4 = _0x780a7e;
  function _0x31395e() {
  }
  return _0x31395e[_0x4742e4(1897)][_0x4742e4(1014)] = function(_0x37ac75, _0x174616) {
    var _0x2bd00d = _0x4742e4;
    keys(_0x37ac75)[_0x2bd00d(839)](function(_0x4686cc) {
      var _0x4f7783 = _0x2bd00d;
      if (_0x37ac75[_0x4686cc] !== null) {
        var _0x2b7fa5 = parseIndexSyntax(_0x37ac75[_0x4686cc]), _0x29b22b = _0x2b7fa5["shift"]();
        if (_0x29b22b["multi"])
          throw new exceptions[_0x4f7783(1728)](_0x4f7783(1867));
        _0x2b7fa5[_0x4f7783(839)](function(_0x28c659) {
          var _0x1f7156 = _0x4f7783;
          if (_0x28c659[_0x1f7156(1850)])
            throw new exceptions["Schema"](_0x1f7156(769));
          if (!_0x28c659[_0x1f7156(1565)])
            throw new exceptions["Schema"]("Index must have a name and cannot be an empty string");
        }), _0x174616[_0x4686cc] = createTableSchema(_0x4686cc, _0x29b22b, _0x2b7fa5);
      }
    });
  }, _0x31395e[_0x4742e4(1897)][_0x4742e4(1862)] = function(_0xcf45db) {
    var _0x55de7e = _0x4742e4, _0x2c2331 = this["db"];
    this[_0x55de7e(2191)]["storesSource"] = this[_0x55de7e(2191)][_0x55de7e(1017)] ? extend(this[_0x55de7e(2191)][_0x55de7e(1017)], _0xcf45db) : _0xcf45db;
    var _0x2df345 = _0x2c2331["_versions"], _0x142483 = {}, _0x3cda66 = {};
    return _0x2df345[_0x55de7e(839)](function(_0x5d4ee2) {
      var _0x3beb79 = _0x55de7e;
      extend(_0x142483, _0x5d4ee2[_0x3beb79(2191)][_0x3beb79(1017)]), _0x3cda66 = _0x5d4ee2[_0x3beb79(2191)][_0x3beb79(556)] = {}, _0x5d4ee2[_0x3beb79(1014)](_0x142483, _0x3cda66);
    }), _0x2c2331[_0x55de7e(823)] = _0x3cda66, removeTablesApi(_0x2c2331, [_0x2c2331[_0x55de7e(640)], _0x2c2331, _0x2c2331[_0x55de7e(1401)][_0x55de7e(1897)]]), setApiOnPlace(_0x2c2331, [_0x2c2331[_0x55de7e(640)], _0x2c2331, _0x2c2331[_0x55de7e(1401)]["prototype"], this[_0x55de7e(2191)][_0x55de7e(1764)]], keys(_0x3cda66), _0x3cda66), _0x2c2331["_storeNames"] = keys(_0x3cda66), this;
  }, _0x31395e[_0x4742e4(1897)][_0x4742e4(571)] = function(_0x1509f6) {
    var _0x3cec72 = _0x4742e4;
    return this[_0x3cec72(2191)][_0x3cec72(466)] = promisableChain(this[_0x3cec72(2191)][_0x3cec72(466)] || nop, _0x1509f6), this;
  }, _0x31395e;
}();
function createVersionConstructor(_0x1606d9) {
  return makeClassConstructor(Version["prototype"], function _0x44a754(_0x6f6c50) {
    var _0x4c9e8e = _0x3001;
    this["db"] = _0x1606d9, this[_0x4c9e8e(2191)] = { "version": _0x6f6c50, "storesSource": null, "dbschema": {}, "tables": {}, "contentUpgrade": null };
  });
}
function getDbNamesTable(_0x5bc08c, _0x2b5de9) {
  var _0x2cce51 = _0x780a7e, _0x222f18 = _0x5bc08c[_0x2cce51(467)];
  return !_0x222f18 && (_0x222f18 = _0x5bc08c["_dbNamesDB"] = new Dexie$1(DBNAMES_DB, { "addons": [], "indexedDB": _0x5bc08c, "IDBKeyRange": _0x2b5de9 }), _0x222f18["version"](1)[_0x2cce51(1862)]({ "dbnames": _0x2cce51(765) })), _0x222f18[_0x2cce51(2178)](_0x2cce51(815));
}
function hasDatabasesNative(_0x3eece3) {
  return _0x3eece3 && typeof _0x3eece3["databases"] === "function";
}
function getDatabaseNames(_0x1e5380) {
  var _0x722ea6 = _0x780a7e, _0x43c184 = _0x1e5380[_0x722ea6(476)], _0xa8dca2 = _0x1e5380["IDBKeyRange"];
  return hasDatabasesNative(_0x43c184) ? Promise[_0x722ea6(1211)](_0x43c184[_0x722ea6(2067)]())[_0x722ea6(1902)](function(_0x2a25d2) {
    var _0x4b9957 = _0x722ea6;
    return _0x2a25d2[_0x4b9957(376)](function(_0x23899d) {
      return _0x23899d["name"];
    })["filter"](function(_0x272e0d) {
      return _0x272e0d !== DBNAMES_DB;
    });
  }) : getDbNamesTable(_0x43c184, _0xa8dca2)["toCollection"]()[_0x722ea6(1628)]();
}
function _onDatabaseCreated(_0x330447, _0x4236b8) {
  var _0x377ce0 = _0x780a7e, _0x24157e = _0x330447["indexedDB"], _0x1526b5 = _0x330447[_0x377ce0(1955)];
  !hasDatabasesNative(_0x24157e) && _0x4236b8 !== DBNAMES_DB && getDbNamesTable(_0x24157e, _0x1526b5)[_0x377ce0(1521)]({ "name": _0x4236b8 })[_0x377ce0(1517)](nop);
}
function _onDatabaseDeleted(_0x127df1, _0x3a7403) {
  var _0x33ce0f = _0x780a7e, _0x1756ef = _0x127df1[_0x33ce0f(476)], _0x387390 = _0x127df1[_0x33ce0f(1955)];
  !hasDatabasesNative(_0x1756ef) && _0x3a7403 !== DBNAMES_DB && getDbNamesTable(_0x1756ef, _0x387390)["delete"](_0x3a7403)["catch"](nop);
}
function vip(_0x45cfa3) {
  return newScope(function() {
    var _0x49ada4 = _0x3001;
    return PSD[_0x49ada4(1938)] = !![], _0x45cfa3();
  });
}
function idbReady() {
  var _0x17ec4b = _0x780a7e, _0x257bf3 = !navigator[_0x17ec4b(545)] && /Safari\//[_0x17ec4b(1778)](navigator["userAgent"]) && !/Chrom(e|ium)\//[_0x17ec4b(1778)](navigator["userAgent"]);
  if (!_0x257bf3 || !indexedDB["databases"])
    return Promise["resolve"]();
  var _0x36b1fe;
  return new Promise(function(_0x6b309f) {
    var _0x2efd8b = function() {
      var _0x4775c2 = _0x3001;
      return indexedDB[_0x4775c2(2067)]()["finally"](_0x6b309f);
    };
    _0x36b1fe = setInterval(_0x2efd8b, 100), _0x2efd8b();
  })[_0x17ec4b(1258)](function() {
    return clearInterval(_0x36b1fe);
  });
}
function dexieOpen(_0x5a6114) {
  var _0x1175bd = _0x780a7e, _0xf6cc02 = _0x5a6114[_0x1175bd(1234)], _0x32b3fc = _0x5a6114[_0x1175bd(1767)][_0x1175bd(476)];
  if (_0xf6cc02[_0x1175bd(1204)] || _0x5a6114[_0x1175bd(973)])
    return _0xf6cc02[_0x1175bd(753)][_0x1175bd(1902)](function() {
      return _0xf6cc02["dbOpenError"] ? rejection(_0xf6cc02["dbOpenError"]) : _0x5a6114;
    });
  debug && (_0xf6cc02[_0x1175bd(969)][_0x1175bd(428)] = getErrorWithStack()), _0xf6cc02[_0x1175bd(1204)] = !![], _0xf6cc02["dbOpenError"] = null, _0xf6cc02[_0x1175bd(755)] = ![];
  var _0x3e92c8 = _0xf6cc02["openCanceller"];
  function _0x11f031() {
    var _0x20c2a8 = _0x1175bd;
    if (_0xf6cc02["openCanceller"] !== _0x3e92c8)
      throw new exceptions[_0x20c2a8(2039)](_0x20c2a8(1341));
  }
  var _0x308bf8 = _0xf6cc02[_0x1175bd(725)], _0x36f535 = null, _0x598e90 = ![];
  return DexiePromise[_0x1175bd(2110)]([_0x3e92c8, (typeof navigator === _0x1175bd(437) ? DexiePromise[_0x1175bd(1211)]() : idbReady())[_0x1175bd(1902)](function() {
    return new DexiePromise(function(_0x5078d5, _0x16cdbd) {
      var _0x46a549 = _0x3001;
      _0x11f031();
      if (!_0x32b3fc)
        throw new exceptions[_0x46a549(555)]();
      var _0x2ced8f = _0x5a6114[_0x46a549(765)], _0x1b2761 = _0xf6cc02["autoSchema"] ? _0x32b3fc[_0x46a549(1352)](_0x2ced8f) : _0x32b3fc[_0x46a549(1352)](_0x2ced8f, Math[_0x46a549(1155)](_0x5a6114["verno"] * 10));
      if (!_0x1b2761)
        throw new exceptions[_0x46a549(555)]();
      _0x1b2761["onerror"] = eventRejectHandler(_0x16cdbd), _0x1b2761[_0x46a549(512)] = wrap(_0x5a6114[_0x46a549(1800)]), _0x1b2761[_0x46a549(1272)] = wrap(function(_0x2883db) {
        var _0x282433 = _0x46a549;
        _0x36f535 = _0x1b2761[_0x282433(955)];
        if (_0xf6cc02[_0x282433(487)] && !_0x5a6114["_options"][_0x282433(2068)]) {
          _0x1b2761[_0x282433(1512)] = preventDefault, _0x36f535[_0x282433(441)](), _0x1b2761["result"][_0x282433(1169)]();
          var _0x7e97e3 = _0x32b3fc["deleteDatabase"](_0x2ced8f);
          _0x7e97e3[_0x282433(999)] = _0x7e97e3[_0x282433(1512)] = wrap(function() {
            var _0x14ea9c = _0x282433;
            _0x16cdbd(new exceptions[_0x14ea9c(488)]("Database " + _0x2ced8f + " doesnt exist"));
          });
        } else {
          _0x36f535[_0x282433(1512)] = eventRejectHandler(_0x16cdbd);
          var _0x24b558 = _0x2883db[_0x282433(733)] > Math[_0x282433(1139)](2, 62) ? 0 : _0x2883db[_0x282433(733)];
          _0x598e90 = _0x24b558 < 1, _0x5a6114[_0x282433(1846)][_0x282433(973)] = _0x1b2761[_0x282433(411)], runUpgraders(_0x5a6114, _0x24b558 / 10, _0x36f535, _0x16cdbd);
        }
      }, _0x16cdbd), _0x1b2761[_0x46a549(999)] = wrap(function() {
        var _0x1e8bd3 = _0x46a549;
        _0x36f535 = null;
        var _0x234c1b = _0x5a6114[_0x1e8bd3(1846)]["idbdb"] = _0x1b2761["result"], _0x5d691d = slice(_0x234c1b[_0x1e8bd3(841)]);
        if (_0x5d691d["length"] > 0)
          try {
            var _0x107c27 = _0x234c1b["transaction"](safariMultiStoreFix(_0x5d691d), _0x1e8bd3(576));
            if (_0xf6cc02[_0x1e8bd3(487)])
              readGlobalSchema(_0x5a6114, _0x234c1b, _0x107c27);
            else
              adjustToExistingIndexNames(_0x5a6114, _0x5a6114["_dbSchema"], _0x107c27), !verifyInstalledSchema(_0x5a6114, _0x107c27) && console["warn"](_0x1e8bd3(951));
            generateMiddlewareStacks(_0x5a6114, _0x107c27);
          } catch (_0x1404c2) {
          }
        connections[_0x1e8bd3(1991)](_0x5a6114), _0x234c1b[_0x1e8bd3(2051)] = wrap(function(_0x1cd679) {
          var _0x3c9544 = _0x1e8bd3;
          _0xf6cc02[_0x3c9544(637)] = !![], _0x5a6114["on"]("versionchange")[_0x3c9544(801)](_0x1cd679);
        }), _0x234c1b[_0x1e8bd3(780)] = wrap(function(_0x48125b) {
          _0x5a6114["on"]("close")["fire"](_0x48125b);
        });
        if (_0x598e90)
          _onDatabaseCreated(_0x5a6114["_deps"], _0x2ced8f);
        _0x5078d5();
      }, _0x16cdbd);
    });
  })])[_0x1175bd(1902)](function() {
    var _0x5bf6ba = _0x1175bd;
    return _0x11f031(), _0xf6cc02[_0x5bf6ba(1162)] = [], DexiePromise[_0x5bf6ba(1211)](vip(function() {
      var _0x16c4ba = _0x5bf6ba;
      return _0x5a6114["on"][_0x16c4ba(2006)]["fire"](_0x5a6114[_0x16c4ba(1516)]);
    }))["then"](function _0x3c83dd() {
      var _0x2a71ac = _0x5bf6ba;
      if (_0xf6cc02[_0x2a71ac(1162)][_0x2a71ac(1965)] > 0) {
        var _0x55ef3a = _0xf6cc02[_0x2a71ac(1162)][_0x2a71ac(690)](promisableChain, nop);
        return _0xf6cc02[_0x2a71ac(1162)] = [], DexiePromise[_0x2a71ac(1211)](vip(function() {
          return _0x55ef3a(_0x5a6114["vip"]);
        }))[_0x2a71ac(1902)](_0x3c83dd);
      }
    });
  })[_0x1175bd(1258)](function() {
    var _0x22ee6f = _0x1175bd;
    _0xf6cc02[_0x22ee6f(1162)] = null, _0xf6cc02["isBeingOpened"] = ![];
  })["then"](function() {
    return _0x5a6114;
  })[_0x1175bd(1517)](function(_0x5e8785) {
    var _0x4775a6 = _0x1175bd;
    _0xf6cc02[_0x4775a6(667)] = _0x5e8785;
    try {
      _0x36f535 && _0x36f535["abort"]();
    } catch (_0x4b8bf0) {
    }
    return _0x3e92c8 === _0xf6cc02[_0x4775a6(969)] && _0x5a6114[_0x4775a6(1770)](), rejection(_0x5e8785);
  })[_0x1175bd(1258)](function() {
    _0xf6cc02["openComplete"] = !![], _0x308bf8();
  });
}
function awaitIterator(_0x581424) {
  var _0x3fa2b5 = function(_0x4d8971) {
    var _0x448aaa = _0x3001;
    return _0x581424[_0x448aaa(670)](_0x4d8971);
  }, _0x2881b1 = function(_0x80fcd) {
    var _0x55c967 = _0x3001;
    return _0x581424[_0x55c967(1698)](_0x80fcd);
  }, _0x2d93ee = _0x543dea(_0x3fa2b5), _0xe59229 = _0x543dea(_0x2881b1);
  function _0x543dea(_0x4f0d4) {
    return function(_0x32949c) {
      var _0x5b23e2 = _0x3001, _0x26ce98 = _0x4f0d4(_0x32949c), _0x220b55 = _0x26ce98[_0x5b23e2(819)];
      return _0x26ce98["done"] ? _0x220b55 : !_0x220b55 || typeof _0x220b55[_0x5b23e2(1902)] !== _0x5b23e2(389) ? isArray(_0x220b55) ? Promise[_0x5b23e2(405)](_0x220b55)[_0x5b23e2(1902)](_0x2d93ee, _0xe59229) : _0x2d93ee(_0x220b55) : _0x220b55[_0x5b23e2(1902)](_0x2d93ee, _0xe59229);
    };
  }
  return _0x543dea(_0x3fa2b5)();
}
function extractTransactionArgs(_0x239dbd, _0x271c03, _0x32fefe) {
  var _0x1429d3 = _0x780a7e, _0x534483 = arguments[_0x1429d3(1965)];
  if (_0x534483 < 2)
    throw new exceptions["InvalidArgument"]("Too few arguments");
  var _0x82c4d5 = new Array(_0x534483 - 1);
  while (--_0x534483)
    _0x82c4d5[_0x534483 - 1] = arguments[_0x534483];
  _0x32fefe = _0x82c4d5[_0x1429d3(1466)]();
  var _0xe48654 = flatten(_0x82c4d5);
  return [_0x239dbd, _0xe48654, _0x32fefe];
}
function enterTransactionScope(_0x2abc74, _0x25928c, _0x5da422, _0x4a52e9, _0x231aca) {
  var _0x15a638 = _0x780a7e;
  return DexiePromise[_0x15a638(1211)]()["then"](function() {
    var _0x3d8479 = _0x15a638, _0x1fc173 = PSD[_0x3d8479(1612)] || PSD, _0x25a080 = _0x2abc74[_0x3d8479(1658)](_0x25928c, _0x5da422, _0x2abc74[_0x3d8479(823)], _0x4a52e9), _0x2f0feb = { "trans": _0x25a080, "transless": _0x1fc173 };
    if (_0x4a52e9)
      _0x25a080["idbtrans"] = _0x4a52e9[_0x3d8479(1532)];
    else
      try {
        _0x25a080[_0x3d8479(1409)](), _0x2abc74[_0x3d8479(1234)]["PR1398_maxLoop"] = 3;
      } catch (_0x4ea0d0) {
        if (_0x4ea0d0[_0x3d8479(765)] === errnames[_0x3d8479(378)] && _0x2abc74["isOpen"]() && --_0x2abc74[_0x3d8479(1234)][_0x3d8479(1734)] > 0)
          return console[_0x3d8479(1985)](_0x3d8479(528)), _0x2abc74[_0x3d8479(1770)](), _0x2abc74[_0x3d8479(1352)]()["then"](function() {
            return enterTransactionScope(_0x2abc74, _0x25928c, _0x5da422, null, _0x231aca);
          });
        return rejection(_0x4ea0d0);
      }
    var _0x4b0f43 = isAsyncFunction(_0x231aca);
    _0x4b0f43 && incrementExpectedAwaits();
    var _0x3b95db, _0x1119a9 = DexiePromise["follow"](function() {
      var _0x2e36c3 = _0x3d8479;
      _0x3b95db = _0x231aca[_0x2e36c3(1206)](_0x25a080, _0x25a080);
      if (_0x3b95db) {
        if (_0x4b0f43) {
          var _0x83808f = decrementExpectedAwaits[_0x2e36c3(517)](null, null);
          _0x3b95db[_0x2e36c3(1902)](_0x83808f, _0x83808f);
        } else
          typeof _0x3b95db[_0x2e36c3(670)] === _0x2e36c3(389) && typeof _0x3b95db[_0x2e36c3(1698)] === _0x2e36c3(389) && (_0x3b95db = awaitIterator(_0x3b95db));
      }
    }, _0x2f0feb);
    return (_0x3b95db && typeof _0x3b95db[_0x3d8479(1902)] === _0x3d8479(389) ? DexiePromise[_0x3d8479(1211)](_0x3b95db)[_0x3d8479(1902)](function(_0x4168df) {
      var _0x43c93a = _0x3d8479;
      return _0x25a080[_0x43c93a(1430)] ? _0x4168df : rejection(new exceptions[_0x43c93a(581)](_0x43c93a(1567)));
    }) : _0x1119a9[_0x3d8479(1902)](function() {
      return _0x3b95db;
    }))[_0x3d8479(1902)](function(_0x5b9b5d) {
      var _0x6bbefe = _0x3d8479;
      if (_0x4a52e9)
        _0x25a080[_0x6bbefe(662)]();
      return _0x25a080[_0x6bbefe(711)]["then"](function() {
        return _0x5b9b5d;
      });
    })[_0x3d8479(1517)](function(_0x33ca56) {
      var _0x4dba8f = _0x3d8479;
      return _0x25a080[_0x4dba8f(800)](_0x33ca56), rejection(_0x33ca56);
    });
  });
}
function pad(_0x19723a, _0x53bf83, _0x46cd02) {
  var _0x2cc11c = _0x780a7e, _0x25a602 = isArray(_0x19723a) ? _0x19723a[_0x2cc11c(1215)]() : [_0x19723a];
  for (var _0x1d72b7 = 0; _0x1d72b7 < _0x46cd02; ++_0x1d72b7)
    _0x25a602[_0x2cc11c(1991)](_0x53bf83);
  return _0x25a602;
}
function createVirtualIndexMiddleware(_0x10c8f5) {
  return __assign(__assign({}, _0x10c8f5), { "table": function(_0x250ead) {
    var _0x5ba1d5 = _0x3001, _0x4cf36e = _0x10c8f5[_0x5ba1d5(2178)](_0x250ead), _0x3de550 = _0x4cf36e[_0x5ba1d5(795)], _0x53acf1 = {}, _0x2cea27 = [];
    function _0x2d7a1c(_0x3bff9f, _0x36e445, _0x2a76dc) {
      var _0x2165f8 = _0x5ba1d5, _0x98bd7c = getKeyPathAlias(_0x3bff9f), _0x1cb1c3 = _0x53acf1[_0x98bd7c] = _0x53acf1[_0x98bd7c] || [], _0x2ade6c = _0x3bff9f == null ? 0 : typeof _0x3bff9f === _0x2165f8(1548) ? 1 : _0x3bff9f[_0x2165f8(1965)], _0x574fde = _0x36e445 > 0, _0x53bd13 = __assign(__assign({}, _0x2a76dc), { "isVirtual": _0x574fde, "keyTail": _0x36e445, "keyLength": _0x2ade6c, "extractKey": getKeyExtractor(_0x3bff9f), "unique": !_0x574fde && _0x2a76dc[_0x2165f8(531)] });
      _0x1cb1c3["push"](_0x53bd13);
      !_0x53bd13["isPrimaryKey"] && _0x2cea27[_0x2165f8(1991)](_0x53bd13);
      if (_0x2ade6c > 1) {
        var _0x4f3f29 = _0x2ade6c === 2 ? _0x3bff9f[0] : _0x3bff9f[_0x2165f8(1215)](0, _0x2ade6c - 1);
        _0x2d7a1c(_0x4f3f29, _0x36e445 + 1, _0x2a76dc);
      }
      return _0x1cb1c3["sort"](function(_0x5c5a04, _0x56dc3b) {
        var _0xe495fb = _0x2165f8;
        return _0x5c5a04[_0xe495fb(1507)] - _0x56dc3b[_0xe495fb(1507)];
      }), _0x53bd13;
    }
    var _0x11ec49 = _0x2d7a1c(_0x3de550[_0x5ba1d5(931)][_0x5ba1d5(1565)], 0, _0x3de550["primaryKey"]);
    _0x53acf1[_0x5ba1d5(1924)] = [_0x11ec49];
    for (var _0x36915d = 0, _0x1e1191 = _0x3de550[_0x5ba1d5(1056)]; _0x36915d < _0x1e1191["length"]; _0x36915d++) {
      var _0x5364a4 = _0x1e1191[_0x36915d];
      _0x2d7a1c(_0x5364a4["keyPath"], 0, _0x5364a4);
    }
    function _0x2af1d3(_0xf328c5) {
      var _0x1742e7 = _0x53acf1[getKeyPathAlias(_0xf328c5)];
      return _0x1742e7 && _0x1742e7[0];
    }
    function _0x286df9(_0x1c18fe, _0x2b00cb) {
      var _0x44c670 = _0x5ba1d5;
      return { "type": _0x1c18fe[_0x44c670(1514)] === 1 ? 2 : _0x1c18fe[_0x44c670(1514)], "lower": pad(_0x1c18fe[_0x44c670(1063)], _0x1c18fe[_0x44c670(1718)] ? _0x10c8f5["MAX_KEY"] : _0x10c8f5["MIN_KEY"], _0x2b00cb), "lowerOpen": !![], "upper": pad(_0x1c18fe[_0x44c670(1002)], _0x1c18fe["upperOpen"] ? _0x10c8f5[_0x44c670(1041)] : _0x10c8f5["MAX_KEY"], _0x2b00cb), "upperOpen": !![] };
    }
    function _0xfaf022(_0x4156f0) {
      var _0x33da5c = _0x5ba1d5, _0x2b647d = _0x4156f0[_0x33da5c(615)][_0x33da5c(1128)];
      return _0x2b647d[_0x33da5c(426)] ? __assign(__assign({}, _0x4156f0), { "query": { "index": _0x2b647d, "range": _0x286df9(_0x4156f0[_0x33da5c(615)][_0x33da5c(377)], _0x2b647d["keyTail"]) } }) : _0x4156f0;
    }
    var _0x2899e1 = __assign(__assign({}, _0x4cf36e), { "schema": __assign(__assign({}, _0x3de550), { "primaryKey": _0x11ec49, "indexes": _0x2cea27, "getIndexByKeyPath": _0x2af1d3 }), "count": function(_0x4a0376) {
      return _0x4cf36e["count"](_0xfaf022(_0x4a0376));
    }, "query": function(_0x23c314) {
      var _0x32854c = _0x5ba1d5;
      return _0x4cf36e[_0x32854c(615)](_0xfaf022(_0x23c314));
    }, "openCursor": function(_0xc55716) {
      var _0x8828a4 = _0x5ba1d5, _0x131c8d = _0xc55716[_0x8828a4(615)][_0x8828a4(1128)], _0xe2bc18 = _0x131c8d[_0x8828a4(1507)], _0x37468a = _0x131c8d["isVirtual"], _0x5cdeb0 = _0x131c8d[_0x8828a4(2202)];
      if (!_0x37468a)
        return _0x4cf36e["openCursor"](_0xc55716);
      function _0x1d5249(_0xac2d5b) {
        var _0xeee4f6 = _0x8828a4;
        function _0x100072(_0x10fd56) {
          var _0x489dd4 = _0x3001;
          _0x10fd56 != null ? _0xac2d5b[_0x489dd4(913)](pad(_0x10fd56, _0xc55716[_0x489dd4(370)] ? _0x10c8f5[_0x489dd4(1726)] : _0x10c8f5[_0x489dd4(1041)], _0xe2bc18)) : _0xc55716["unique"] ? _0xac2d5b[_0x489dd4(913)](_0xac2d5b[_0x489dd4(1993)][_0x489dd4(1215)](0, _0x5cdeb0)[_0x489dd4(2090)](_0xc55716["reverse"] ? _0x10c8f5[_0x489dd4(1041)] : _0x10c8f5[_0x489dd4(1726)], _0xe2bc18)) : _0xac2d5b[_0x489dd4(913)]();
        }
        var _0x2e8140 = Object[_0xeee4f6(1409)](_0xac2d5b, { "continue": { "value": _0x100072 }, "continuePrimaryKey": { "value": function(_0x5c3a32, _0x5bd0ae) {
          var _0x1b07b6 = _0xeee4f6;
          _0xac2d5b["continuePrimaryKey"](pad(_0x5c3a32, _0x10c8f5[_0x1b07b6(1726)], _0xe2bc18), _0x5bd0ae);
        } }, "primaryKey": { "get": function() {
          var _0x491889 = _0xeee4f6;
          return _0xac2d5b[_0x491889(931)];
        } }, "key": { "get": function() {
          var _0x1761fb = _0xeee4f6, _0x4192a3 = _0xac2d5b[_0x1761fb(1993)];
          return _0x5cdeb0 === 1 ? _0x4192a3[0] : _0x4192a3[_0x1761fb(1215)](0, _0x5cdeb0);
        } }, "value": { "get": function() {
          var _0x13f02e = _0xeee4f6;
          return _0xac2d5b[_0x13f02e(819)];
        } } });
        return _0x2e8140;
      }
      return _0x4cf36e["openCursor"](_0xfaf022(_0xc55716))[_0x8828a4(1902)](function(_0x508103) {
        return _0x508103 && _0x1d5249(_0x508103);
      });
    } });
    return _0x2899e1;
  } });
}
var virtualIndexMiddleware = { "stack": _0x780a7e(659), "name": "VirtualIndexMiddleware", "level": 1, "create": createVirtualIndexMiddleware };
function getObjectDiff(_0xb3bd2f, _0x12f111, _0x462e4a, _0xc70e9a) {
  var _0x14109e = _0x780a7e;
  return _0x462e4a = _0x462e4a || {}, _0xc70e9a = _0xc70e9a || "", keys(_0xb3bd2f)[_0x14109e(839)](function(_0x5ef853) {
    var _0x148196 = _0x14109e;
    if (!hasOwn(_0x12f111, _0x5ef853))
      _0x462e4a[_0xc70e9a + _0x5ef853] = void 0;
    else {
      var _0x40b63f = _0xb3bd2f[_0x5ef853], _0x19cef5 = _0x12f111[_0x5ef853];
      if (typeof _0x40b63f === "object" && typeof _0x19cef5 === _0x148196(1723) && _0x40b63f && _0x19cef5) {
        var _0x1b3df0 = toStringTag(_0x40b63f), _0x31b613 = toStringTag(_0x19cef5);
        if (_0x1b3df0 !== _0x31b613)
          _0x462e4a[_0xc70e9a + _0x5ef853] = _0x12f111[_0x5ef853];
        else {
          if (_0x1b3df0 === _0x148196(816))
            getObjectDiff(_0x40b63f, _0x19cef5, _0x462e4a, _0xc70e9a + _0x5ef853 + ".");
          else
            _0x40b63f !== _0x19cef5 && (_0x462e4a[_0xc70e9a + _0x5ef853] = _0x12f111[_0x5ef853]);
        }
      } else {
        if (_0x40b63f !== _0x19cef5)
          _0x462e4a[_0xc70e9a + _0x5ef853] = _0x12f111[_0x5ef853];
      }
    }
  }), keys(_0x12f111)["forEach"](function(_0x509bb1) {
    !hasOwn(_0xb3bd2f, _0x509bb1) && (_0x462e4a[_0xc70e9a + _0x509bb1] = _0x12f111[_0x509bb1]);
  }), _0x462e4a;
}
function getEffectiveKeys(_0x498380, _0x37c05) {
  var _0x96f0e7 = _0x780a7e;
  if (_0x37c05[_0x96f0e7(1514)] === "delete")
    return _0x37c05[_0x96f0e7(605)];
  return _0x37c05[_0x96f0e7(605)] || _0x37c05[_0x96f0e7(1919)]["map"](_0x498380[_0x96f0e7(1981)]);
}
var hooksMiddleware = { "stack": _0x780a7e(659), "name": _0x780a7e(1228), "level": 2, "create": function(_0x38487) {
  return __assign(__assign({}, _0x38487), { "table": function(_0x4db88d) {
    var _0xe3729d = _0x3001, _0x28e08a = _0x38487[_0xe3729d(2178)](_0x4db88d), _0x454bee = _0x28e08a["schema"][_0xe3729d(931)], _0x3e8f5c = __assign(__assign({}, _0x28e08a), { "mutate": function(_0x2c6a3b) {
      var _0x1e911f = _0xe3729d, _0x321b84 = PSD[_0x1e911f(683)], _0x4cceed = _0x321b84[_0x1e911f(2178)](_0x4db88d)["hook"], _0x2006d4 = _0x4cceed[_0x1e911f(404)], _0x49061e = _0x4cceed[_0x1e911f(727)], _0x118570 = _0x4cceed[_0x1e911f(682)];
      switch (_0x2c6a3b[_0x1e911f(1514)]) {
        case _0x1e911f(2170):
          if (_0x49061e["fire"] === nop)
            break;
          return _0x321b84["_promise"]("readwrite", function() {
            return _0x195a6b(_0x2c6a3b);
          }, !![]);
        case _0x1e911f(1521):
          if (_0x49061e[_0x1e911f(801)] === nop && _0x118570[_0x1e911f(801)] === nop)
            break;
          return _0x321b84[_0x1e911f(1490)]("readwrite", function() {
            return _0x195a6b(_0x2c6a3b);
          }, !![]);
        case "delete":
          if (_0x2006d4["fire"] === nop)
            break;
          return _0x321b84["_promise"](_0x1e911f(1069), function() {
            return _0x195a6b(_0x2c6a3b);
          }, !![]);
        case "deleteRange":
          if (_0x2006d4["fire"] === nop)
            break;
          return _0x321b84[_0x1e911f(1490)](_0x1e911f(1069), function() {
            return _0x41d585(_0x2c6a3b);
          }, !![]);
      }
      return _0x28e08a[_0x1e911f(976)](_0x2c6a3b);
      function _0x195a6b(_0x22a3e4) {
        var _0x2e418b = _0x1e911f, _0x2835fe = PSD[_0x2e418b(683)], _0xe36e99 = _0x22a3e4[_0x2e418b(605)] || getEffectiveKeys(_0x454bee, _0x22a3e4);
        if (!_0xe36e99)
          throw new Error(_0x2e418b(1684));
        _0x22a3e4 = _0x22a3e4[_0x2e418b(1514)] === _0x2e418b(2170) || _0x22a3e4[_0x2e418b(1514)] === _0x2e418b(1521) ? __assign(__assign({}, _0x22a3e4), { "keys": _0xe36e99 }) : __assign({}, _0x22a3e4);
        if (_0x22a3e4[_0x2e418b(1514)] !== _0x2e418b(1653))
          _0x22a3e4[_0x2e418b(1919)] = __spreadArray([], _0x22a3e4[_0x2e418b(1919)], !![]);
        if (_0x22a3e4[_0x2e418b(605)])
          _0x22a3e4[_0x2e418b(605)] = __spreadArray([], _0x22a3e4[_0x2e418b(605)], !![]);
        return getExistingValues(_0x28e08a, _0x22a3e4, _0xe36e99)["then"](function(_0xf139e3) {
          var _0x446a8d = _0x2e418b, _0x175184 = _0xe36e99["map"](function(_0x3a33d6, _0x5a863f) {
            var _0xea7289 = _0x3001, _0x59838a = _0xf139e3[_0x5a863f], _0x59cccd = { "onerror": null, "onsuccess": null };
            if (_0x22a3e4["type"] === _0xea7289(1653))
              _0x2006d4["fire"]["call"](_0x59cccd, _0x3a33d6, _0x59838a, _0x2835fe);
            else {
              if (_0x22a3e4[_0xea7289(1514)] === "add" || _0x59838a === void 0) {
                var _0x19a49a = _0x49061e[_0xea7289(801)][_0xea7289(1206)](_0x59cccd, _0x3a33d6, _0x22a3e4[_0xea7289(1919)][_0x5a863f], _0x2835fe);
                _0x3a33d6 == null && _0x19a49a != null && (_0x3a33d6 = _0x19a49a, _0x22a3e4[_0xea7289(605)][_0x5a863f] = _0x3a33d6, !_0x454bee[_0xea7289(2027)] && setByKeyPath(_0x22a3e4[_0xea7289(1919)][_0x5a863f], _0x454bee[_0xea7289(1565)], _0x3a33d6));
              } else {
                var _0x493d83 = getObjectDiff(_0x59838a, _0x22a3e4[_0xea7289(1919)][_0x5a863f]), _0x712392 = _0x118570[_0xea7289(801)]["call"](_0x59cccd, _0x493d83, _0x3a33d6, _0x59838a, _0x2835fe);
                if (_0x712392) {
                  var _0x57c2a4 = _0x22a3e4[_0xea7289(1919)][_0x5a863f];
                  Object[_0xea7289(605)](_0x712392)[_0xea7289(839)](function(_0x18c01c) {
                    hasOwn(_0x57c2a4, _0x18c01c) ? _0x57c2a4[_0x18c01c] = _0x712392[_0x18c01c] : setByKeyPath(_0x57c2a4, _0x18c01c, _0x712392[_0x18c01c]);
                  });
                }
              }
            }
            return _0x59cccd;
          });
          return _0x28e08a[_0x446a8d(976)](_0x22a3e4)[_0x446a8d(1902)](function(_0x492efb) {
            var _0x2e65c4 = _0x446a8d, _0x1962b6 = _0x492efb[_0x2e65c4(1881)], _0x253497 = _0x492efb[_0x2e65c4(1843)], _0x526a7b = _0x492efb["numFailures"], _0x2f0205 = _0x492efb["lastResult"];
            for (var _0x19409e = 0; _0x19409e < _0xe36e99[_0x2e65c4(1965)]; ++_0x19409e) {
              var _0x5733b0 = _0x253497 ? _0x253497[_0x19409e] : _0xe36e99[_0x19409e], _0x463aac = _0x175184[_0x19409e];
              _0x5733b0 == null ? _0x463aac[_0x2e65c4(1512)] && _0x463aac[_0x2e65c4(1512)](_0x1962b6[_0x19409e]) : _0x463aac[_0x2e65c4(999)] && _0x463aac[_0x2e65c4(999)](_0x22a3e4[_0x2e65c4(1514)] === _0x2e65c4(1521) && _0xf139e3[_0x19409e] ? _0x22a3e4[_0x2e65c4(1919)][_0x19409e] : _0x5733b0);
            }
            return { "failures": _0x1962b6, "results": _0x253497, "numFailures": _0x526a7b, "lastResult": _0x2f0205 };
          })[_0x446a8d(1517)](function(_0xe67362) {
            var _0x76c588 = _0x446a8d;
            return _0x175184["forEach"](function(_0x3138d5) {
              var _0xfa6df4 = _0x3001;
              return _0x3138d5[_0xfa6df4(1512)] && _0x3138d5[_0xfa6df4(1512)](_0xe67362);
            }), Promise[_0x76c588(1646)](_0xe67362);
          });
        });
      }
      function _0x41d585(_0x1df1c7) {
        var _0x519a4a = _0x1e911f;
        return _0x1df45e(_0x1df1c7[_0x519a4a(683)], _0x1df1c7[_0x519a4a(377)], 1e4);
      }
      function _0x1df45e(_0x3fcbd7, _0x661651, _0x263999) {
        var _0x1640f8 = _0x1e911f;
        return _0x28e08a[_0x1640f8(615)]({ "trans": _0x3fcbd7, "values": ![], "query": { "index": _0x454bee, "range": _0x661651 }, "limit": _0x263999 })[_0x1640f8(1902)](function(_0xa2b592) {
          var _0x572064 = _0x1640f8, _0xbf525f = _0xa2b592[_0x572064(411)];
          return _0x195a6b({ "type": _0x572064(1653), "keys": _0xbf525f, "trans": _0x3fcbd7 })[_0x572064(1902)](function(_0x517c0d) {
            var _0x5d4d19 = _0x572064;
            if (_0x517c0d[_0x5d4d19(1731)] > 0)
              return Promise[_0x5d4d19(1646)](_0x517c0d["failures"][0]);
            return _0xbf525f[_0x5d4d19(1965)] < _0x263999 ? { "failures": [], "numFailures": 0, "lastResult": void 0 } : _0x1df45e(_0x3fcbd7, __assign(__assign({}, _0x661651), { "lower": _0xbf525f[_0xbf525f["length"] - 1], "lowerOpen": !![] }), _0x263999);
          });
        });
      }
    } });
    return _0x3e8f5c;
  } });
} };
function getExistingValues(_0x16a2c5, _0x401a8d, _0x1fbd88) {
  var _0x4a4eaa = _0x780a7e;
  return _0x401a8d[_0x4a4eaa(1514)] === _0x4a4eaa(2170) ? Promise[_0x4a4eaa(1211)]([]) : _0x16a2c5[_0x4a4eaa(1393)]({ "trans": _0x401a8d[_0x4a4eaa(683)], "keys": _0x1fbd88, "cache": _0x4a4eaa(1545) });
}
function getFromTransactionCache(_0x99f69c, _0x34e6d7, _0x1c6b17) {
  var _0x4ebcdb = _0x780a7e;
  try {
    if (!_0x34e6d7)
      return null;
    if (_0x34e6d7[_0x4ebcdb(605)]["length"] < _0x99f69c["length"])
      return null;
    var _0x516721 = [];
    for (var _0x3dbd99 = 0, _0xa91a56 = 0; _0x3dbd99 < _0x34e6d7[_0x4ebcdb(605)][_0x4ebcdb(1965)] && _0xa91a56 < _0x99f69c[_0x4ebcdb(1965)]; ++_0x3dbd99) {
      if (cmp(_0x34e6d7["keys"][_0x3dbd99], _0x99f69c[_0xa91a56]) !== 0)
        continue;
      _0x516721[_0x4ebcdb(1991)](_0x1c6b17 ? deepClone(_0x34e6d7[_0x4ebcdb(1919)][_0x3dbd99]) : _0x34e6d7[_0x4ebcdb(1919)][_0x3dbd99]), ++_0xa91a56;
    }
    return _0x516721[_0x4ebcdb(1965)] === _0x99f69c[_0x4ebcdb(1965)] ? _0x516721 : null;
  } catch (_0x2f2712) {
    return null;
  }
}
var cacheExistingValuesMiddleware = { "stack": _0x780a7e(659), "level": -1, "create": function(_0x7ed259) {
  return { "table": function(_0x27dbbe) {
    var _0x126603 = _0x3001, _0x295b7e = _0x7ed259[_0x126603(2178)](_0x27dbbe);
    return __assign(__assign({}, _0x295b7e), { "getMany": function(_0x2c2938) {
      var _0x253759 = _0x126603;
      if (!_0x2c2938[_0x253759(812)])
        return _0x295b7e[_0x253759(1393)](_0x2c2938);
      var _0x3c62ad = getFromTransactionCache(_0x2c2938[_0x253759(605)], _0x2c2938["trans"][_0x253759(1808)], _0x2c2938[_0x253759(812)] === _0x253759(2184));
      if (_0x3c62ad)
        return DexiePromise[_0x253759(1211)](_0x3c62ad);
      return _0x295b7e["getMany"](_0x2c2938)["then"](function(_0x513e42) {
        var _0x168883 = _0x253759;
        return _0x2c2938[_0x168883(683)][_0x168883(1808)] = { "keys": _0x2c2938["keys"], "values": _0x2c2938[_0x168883(812)] === _0x168883(2184) ? deepClone(_0x513e42) : _0x513e42 }, _0x513e42;
      });
    }, "mutate": function(_0x2aa7d1) {
      var _0x3c0151 = _0x126603;
      if (_0x2aa7d1[_0x3c0151(1514)] !== _0x3c0151(2170))
        _0x2aa7d1["trans"][_0x3c0151(1808)] = null;
      return _0x295b7e[_0x3c0151(976)](_0x2aa7d1);
    } });
  } };
} }, _a;
function isEmptyRange(_0x2ed962) {
  return !("from" in _0x2ed962);
}
var RangeSet = function(_0xd5d2b8, _0x287208) {
  var _0x29d4a0 = _0x780a7e;
  if (this)
    extend(this, arguments[_0x29d4a0(1965)] ? { "d": 1, "from": _0xd5d2b8, "to": arguments[_0x29d4a0(1965)] > 1 ? _0x287208 : _0xd5d2b8 } : { "d": 0 });
  else {
    var _0x3bf7af = new RangeSet();
    return _0xd5d2b8 && "d" in _0xd5d2b8 && extend(_0x3bf7af, _0xd5d2b8), _0x3bf7af;
  }
};
props(RangeSet["prototype"], (_a = { "add": function(_0x4b2489) {
  return mergeRanges(this, _0x4b2489), this;
}, "addKey": function(_0x66f6b5) {
  return addRange(this, _0x66f6b5, _0x66f6b5), this;
}, "addKeys": function(_0x39f827) {
  var _0x435142 = _0x780a7e, _0x2b5f24 = this;
  return _0x39f827[_0x435142(839)](function(_0x4c964f) {
    return addRange(_0x2b5f24, _0x4c964f, _0x4c964f);
  }), this;
} }, _a[iteratorSymbol] = function() {
  return getRangeSetIterator(this);
}, _a));
function addRange(_0x59b0cd, _0x38a83f, _0x23aeac) {
  var _0x21eba9 = _0x780a7e, _0x2d3e0e = cmp(_0x38a83f, _0x23aeac);
  if (isNaN(_0x2d3e0e))
    return;
  if (_0x2d3e0e > 0)
    throw RangeError();
  if (isEmptyRange(_0x59b0cd))
    return extend(_0x59b0cd, { "from": _0x38a83f, "to": _0x23aeac, "d": 1 });
  var _0x307253 = _0x59b0cd["l"], _0x4b5a76 = _0x59b0cd["r"];
  if (cmp(_0x23aeac, _0x59b0cd[_0x21eba9(1356)]) < 0)
    return _0x307253 ? addRange(_0x307253, _0x38a83f, _0x23aeac) : _0x59b0cd["l"] = { "from": _0x38a83f, "to": _0x23aeac, "d": 1, "l": null, "r": null }, rebalance(_0x59b0cd);
  if (cmp(_0x38a83f, _0x59b0cd["to"]) > 0)
    return _0x4b5a76 ? addRange(_0x4b5a76, _0x38a83f, _0x23aeac) : _0x59b0cd["r"] = { "from": _0x38a83f, "to": _0x23aeac, "d": 1, "l": null, "r": null }, rebalance(_0x59b0cd);
  cmp(_0x38a83f, _0x59b0cd[_0x21eba9(1356)]) < 0 && (_0x59b0cd[_0x21eba9(1356)] = _0x38a83f, _0x59b0cd["l"] = null, _0x59b0cd["d"] = _0x4b5a76 ? _0x4b5a76["d"] + 1 : 1);
  cmp(_0x23aeac, _0x59b0cd["to"]) > 0 && (_0x59b0cd["to"] = _0x23aeac, _0x59b0cd["r"] = null, _0x59b0cd["d"] = _0x59b0cd["l"] ? _0x59b0cd["l"]["d"] + 1 : 1);
  var _0x4b5758 = !_0x59b0cd["r"];
  _0x307253 && !_0x59b0cd["l"] && mergeRanges(_0x59b0cd, _0x307253), _0x4b5a76 && _0x4b5758 && mergeRanges(_0x59b0cd, _0x4b5a76);
}
function mergeRanges(_0x3be47c, _0xfac98b) {
  function _0x451dba(_0x327e70, _0xa5d3a7) {
    var _0x3ea33f = _0x3001, _0x3ad459 = _0xa5d3a7[_0x3ea33f(1356)], _0x4ba8a1 = _0xa5d3a7["to"], _0x514133 = _0xa5d3a7["l"], _0x4cf034 = _0xa5d3a7["r"];
    addRange(_0x327e70, _0x3ad459, _0x4ba8a1);
    if (_0x514133)
      _0x451dba(_0x327e70, _0x514133);
    if (_0x4cf034)
      _0x451dba(_0x327e70, _0x4cf034);
  }
  if (!isEmptyRange(_0xfac98b))
    _0x451dba(_0x3be47c, _0xfac98b);
}
function rangesOverlap(_0x3b15f1, _0x49e54f) {
  var _0x179be7 = _0x780a7e, _0x43e61d = getRangeSetIterator(_0x49e54f), _0x56d58c = _0x43e61d[_0x179be7(670)]();
  if (_0x56d58c[_0x179be7(1353)])
    return ![];
  var _0x3a92db = _0x56d58c[_0x179be7(819)], _0x44a497 = getRangeSetIterator(_0x3b15f1), _0x2b5e56 = _0x44a497[_0x179be7(670)](_0x3a92db[_0x179be7(1356)]), _0x399243 = _0x2b5e56[_0x179be7(819)];
  while (!_0x56d58c["done"] && !_0x2b5e56[_0x179be7(1353)]) {
    if (cmp(_0x399243[_0x179be7(1356)], _0x3a92db["to"]) <= 0 && cmp(_0x399243["to"], _0x3a92db[_0x179be7(1356)]) >= 0)
      return !![];
    cmp(_0x3a92db[_0x179be7(1356)], _0x399243["from"]) < 0 ? _0x3a92db = (_0x56d58c = _0x43e61d["next"](_0x399243[_0x179be7(1356)]))[_0x179be7(819)] : _0x399243 = (_0x2b5e56 = _0x44a497[_0x179be7(670)](_0x3a92db[_0x179be7(1356)]))[_0x179be7(819)];
  }
  return ![];
}
function getRangeSetIterator(_0x582f0c) {
  var _0x23f3af = isEmptyRange(_0x582f0c) ? null : { "s": 0, "n": _0x582f0c };
  return { "next": function(_0xadb038) {
    var _0x26a2d2 = _0x3001, _0x207c73 = arguments["length"] > 0;
    while (_0x23f3af) {
      switch (_0x23f3af["s"]) {
        case 0:
          _0x23f3af["s"] = 1;
          if (_0x207c73) {
            while (_0x23f3af["n"]["l"] && cmp(_0xadb038, _0x23f3af["n"][_0x26a2d2(1356)]) < 0)
              _0x23f3af = { "up": _0x23f3af, "n": _0x23f3af["n"]["l"], "s": 1 };
          } else {
            while (_0x23f3af["n"]["l"])
              _0x23f3af = { "up": _0x23f3af, "n": _0x23f3af["n"]["l"], "s": 1 };
          }
        case 1:
          _0x23f3af["s"] = 2;
          if (!_0x207c73 || cmp(_0xadb038, _0x23f3af["n"]["to"]) <= 0)
            return { "value": _0x23f3af["n"], "done": ![] };
        case 2:
          if (_0x23f3af["n"]["r"]) {
            _0x23f3af["s"] = 3, _0x23f3af = { "up": _0x23f3af, "n": _0x23f3af["n"]["r"], "s": 0 };
            continue;
          }
        case 3:
          _0x23f3af = _0x23f3af["up"];
      }
    }
    return { "done": !![] };
  } };
}
function rebalance(_0x581901) {
  var _0x4dba96 = _0x780a7e, _0x511cbc, _0x170960, _0x2791e1 = (((_0x511cbc = _0x581901["r"]) === null || _0x511cbc === void 0 ? void 0 : _0x511cbc["d"]) || 0) - (((_0x170960 = _0x581901["l"]) === null || _0x170960 === void 0 ? void 0 : _0x170960["d"]) || 0), _0x4a7f8b = _0x2791e1 > 1 ? "r" : _0x2791e1 < -1 ? "l" : "";
  if (_0x4a7f8b) {
    var _0x1498dc = _0x4a7f8b === "r" ? "l" : "r", _0x3e71b9 = __assign({}, _0x581901), _0x2eaa9c = _0x581901[_0x4a7f8b];
    _0x581901[_0x4dba96(1356)] = _0x2eaa9c[_0x4dba96(1356)], _0x581901["to"] = _0x2eaa9c["to"], _0x581901[_0x4a7f8b] = _0x2eaa9c[_0x4a7f8b], _0x3e71b9[_0x4a7f8b] = _0x2eaa9c[_0x1498dc], _0x581901[_0x1498dc] = _0x3e71b9, _0x3e71b9["d"] = computeDepth(_0x3e71b9);
  }
  _0x581901["d"] = computeDepth(_0x581901);
}
function computeDepth(_0x28ec9c) {
  var _0x3c3278 = _0x28ec9c["r"], _0x2af5b6 = _0x28ec9c["l"];
  return (_0x3c3278 ? _0x2af5b6 ? Math["max"](_0x3c3278["d"], _0x2af5b6["d"]) : _0x3c3278["d"] : _0x2af5b6 ? _0x2af5b6["d"] : 0) + 1;
}
var observabilityMiddleware = { "stack": _0x780a7e(659), "level": 0, "create": function(_0x2e39f9) {
  var _0x4240a8 = _0x780a7e, _0x250f50 = _0x2e39f9["schema"][_0x4240a8(765)], _0x490512 = new RangeSet(_0x2e39f9[_0x4240a8(1041)], _0x2e39f9[_0x4240a8(1726)]);
  return __assign(__assign({}, _0x2e39f9), { "table": function(_0x47a515) {
    var _0x131492 = _0x4240a8, _0x4cc9fa = _0x2e39f9["table"](_0x47a515), _0x397c0b = _0x4cc9fa[_0x131492(795)], _0x1bfe7c = _0x397c0b[_0x131492(931)], _0x2dc669 = _0x1bfe7c[_0x131492(1981)], _0x3028ae = _0x1bfe7c[_0x131492(2027)], _0xea2d3f = __assign(__assign({}, _0x4cc9fa), { "mutate": function(_0x36dc09) {
      var _0x2c6946 = _0x131492, _0x1b3bae = _0x36dc09[_0x2c6946(683)], _0x166836 = _0x1b3bae["mutatedParts"] || (_0x1b3bae[_0x2c6946(1324)] = {}), _0x2f53af = function(_0x2d451e) {
        var _0x117e4c = _0x2c6946, _0x60266d = _0x117e4c(870) + _0x250f50 + "/" + _0x47a515 + "/" + _0x2d451e;
        return _0x166836[_0x60266d] || (_0x166836[_0x60266d] = new RangeSet());
      }, _0x1f8f95 = _0x2f53af(""), _0x4b0269 = _0x2f53af(_0x2c6946(1039)), _0x2de33b = _0x36dc09[_0x2c6946(1514)], _0x396867 = _0x36dc09[_0x2c6946(1514)] === _0x2c6946(1105) ? [_0x36dc09[_0x2c6946(377)]] : _0x36dc09["type"] === "delete" ? [_0x36dc09[_0x2c6946(605)]] : _0x36dc09[_0x2c6946(1919)]["length"] < 50 ? [[], _0x36dc09["values"]] : [], _0x1a09c4 = _0x396867[0], _0x1c8938 = _0x396867[1], _0x3a5121 = _0x36dc09[_0x2c6946(683)][_0x2c6946(1808)];
      return _0x4cc9fa["mutate"](_0x36dc09)[_0x2c6946(1902)](function(_0x6d77fe) {
        var _0x300b33 = _0x2c6946;
        if (isArray(_0x1a09c4)) {
          if (_0x2de33b !== _0x300b33(1653))
            _0x1a09c4 = _0x6d77fe["results"];
          _0x1f8f95[_0x300b33(2145)](_0x1a09c4);
          var _0x1edb9c = getFromTransactionCache(_0x1a09c4, _0x3a5121);
          !_0x1edb9c && _0x2de33b !== "add" && _0x4b0269[_0x300b33(2145)](_0x1a09c4), (_0x1edb9c || _0x1c8938) && trackAffectedIndexes(_0x2f53af, _0x397c0b, _0x1edb9c, _0x1c8938);
        } else {
          if (_0x1a09c4) {
            var _0x291719 = { "from": _0x1a09c4[_0x300b33(1063)], "to": _0x1a09c4["upper"] };
            _0x4b0269[_0x300b33(2170)](_0x291719), _0x1f8f95[_0x300b33(2170)](_0x291719);
          } else
            _0x1f8f95[_0x300b33(2170)](_0x490512), _0x4b0269[_0x300b33(2170)](_0x490512), _0x397c0b[_0x300b33(1056)][_0x300b33(839)](function(_0x3d6130) {
              var _0x36ea0e = _0x300b33;
              return _0x2f53af(_0x3d6130[_0x36ea0e(765)])[_0x36ea0e(2170)](_0x490512);
            });
        }
        return _0x6d77fe;
      });
    } }), _0x41c663 = function(_0xac5491) {
      var _0x329b0b = _0x131492, _0x2e541c, _0x5cc0f5, _0x3cf2e2 = _0xac5491[_0x329b0b(615)], _0x10be61 = _0x3cf2e2["index"], _0x110807 = _0x3cf2e2["range"];
      return [_0x10be61, new RangeSet((_0x2e541c = _0x110807["lower"]) !== null && _0x2e541c !== void 0 ? _0x2e541c : _0x2e39f9[_0x329b0b(1041)], (_0x5cc0f5 = _0x110807[_0x329b0b(1002)]) !== null && _0x5cc0f5 !== void 0 ? _0x5cc0f5 : _0x2e39f9[_0x329b0b(1726)])];
    }, _0x26172e = { "get": function(_0x2b815f) {
      return [_0x1bfe7c, new RangeSet(_0x2b815f["key"])];
    }, "getMany": function(_0x314522) {
      var _0x396c02 = _0x131492;
      return [_0x1bfe7c, new RangeSet()[_0x396c02(2145)](_0x314522[_0x396c02(605)])];
    }, "count": _0x41c663, "query": _0x41c663, "openCursor": _0x41c663 };
    return keys(_0x26172e)[_0x131492(839)](function(_0x797188) {
      _0xea2d3f[_0x797188] = function(_0x297f62) {
        var _0x2e1272 = _0x3001, _0x496539 = PSD[_0x2e1272(700)];
        if (_0x496539) {
          var _0xae2bdb = function(_0x4f57b3) {
            var _0xe03427 = "idb://" + _0x250f50 + "/" + _0x47a515 + "/" + _0x4f57b3;
            return _0x496539[_0xe03427] || (_0x496539[_0xe03427] = new RangeSet());
          }, _0x3b1841 = _0xae2bdb(""), _0x546065 = _0xae2bdb(_0x2e1272(1039)), _0xc07243 = _0x26172e[_0x797188](_0x297f62), _0x48e322 = _0xc07243[0], _0x117de4 = _0xc07243[1];
          _0xae2bdb(_0x48e322["name"] || "")["add"](_0x117de4);
          if (!_0x48e322[_0x2e1272(1857)]) {
            if (_0x797188 === _0x2e1272(1675))
              _0x546065[_0x2e1272(2170)](_0x490512);
            else {
              var _0x5ba7ee = _0x797188 === _0x2e1272(615) && _0x3028ae && _0x297f62[_0x2e1272(1919)] && _0x4cc9fa["query"](__assign(__assign({}, _0x297f62), { "values": ![] }));
              return _0x4cc9fa[_0x797188][_0x2e1272(2150)](this, arguments)["then"](function(_0x25aeff) {
                var _0x2a6315 = _0x2e1272;
                if (_0x797188 === _0x2a6315(615)) {
                  if (_0x3028ae && _0x297f62["values"])
                    return _0x5ba7ee[_0x2a6315(1902)](function(_0x43cb8a) {
                      var _0x306183 = _0x2a6315, _0x3cb5f6 = _0x43cb8a[_0x306183(411)];
                      return _0x3b1841["addKeys"](_0x3cb5f6), _0x25aeff;
                    });
                  var _0x1276de = _0x297f62["values"] ? _0x25aeff["result"]["map"](_0x2dc669) : _0x25aeff[_0x2a6315(411)];
                  _0x297f62["values"] ? _0x3b1841[_0x2a6315(2145)](_0x1276de) : _0x546065["addKeys"](_0x1276de);
                } else {
                  if (_0x797188 === _0x2a6315(1109)) {
                    var _0x47f8d9 = _0x25aeff, _0xf3add0 = _0x297f62[_0x2a6315(1919)];
                    return _0x47f8d9 && Object[_0x2a6315(1409)](_0x47f8d9, { "key": { "get": function() {
                      var _0xf67365 = _0x2a6315;
                      return _0x546065[_0xf67365(1375)](_0x47f8d9[_0xf67365(931)]), _0x47f8d9[_0xf67365(1993)];
                    } }, "primaryKey": { "get": function() {
                      var _0x57224a = _0x2a6315, _0x3cac58 = _0x47f8d9[_0x57224a(931)];
                      return _0x546065[_0x57224a(1375)](_0x3cac58), _0x3cac58;
                    } }, "value": { "get": function() {
                      var _0x33aa82 = _0x2a6315;
                      return _0xf3add0 && _0x3b1841[_0x33aa82(1375)](_0x47f8d9[_0x33aa82(931)]), _0x47f8d9[_0x33aa82(819)];
                    } } });
                  }
                }
                return _0x25aeff;
              });
            }
          }
        }
        return _0x4cc9fa[_0x797188][_0x2e1272(2150)](this, arguments);
      };
    }), _0xea2d3f;
  } });
} };
function trackAffectedIndexes(_0xd32888, _0x232bbb, _0x37022d, _0x5b526f) {
  var _0x20350c = _0x780a7e;
  function _0x5b5715(_0x3eac9a) {
    var _0x2f15da = _0x3001, _0x74c9bd = _0xd32888(_0x3eac9a[_0x2f15da(765)] || "");
    function _0x1db8fc(_0x4e0105) {
      var _0x253b1f = _0x2f15da;
      return _0x4e0105 != null ? _0x3eac9a[_0x253b1f(1981)](_0x4e0105) : null;
    }
    var _0x305ccd = function(_0x408a9d) {
      var _0x52bb1d = _0x2f15da;
      return _0x3eac9a["multiEntry"] && isArray(_0x408a9d) ? _0x408a9d[_0x52bb1d(839)](function(_0x3a8389) {
        var _0x3aa97c = _0x52bb1d;
        return _0x74c9bd[_0x3aa97c(1375)](_0x3a8389);
      }) : _0x74c9bd[_0x52bb1d(1375)](_0x408a9d);
    };
    (_0x37022d || _0x5b526f)[_0x2f15da(839)](function(_0x1b874a, _0x7d9d7d) {
      var _0x371966 = _0x37022d && _0x1db8fc(_0x37022d[_0x7d9d7d]), _0x25f2dc = _0x5b526f && _0x1db8fc(_0x5b526f[_0x7d9d7d]);
      if (cmp(_0x371966, _0x25f2dc) !== 0) {
        if (_0x371966 != null)
          _0x305ccd(_0x371966);
        if (_0x25f2dc != null)
          _0x305ccd(_0x25f2dc);
      }
    });
  }
  _0x232bbb["indexes"][_0x20350c(839)](_0x5b5715);
}
var Dexie$1 = function() {
  var _0x4df542 = _0x780a7e;
  function _0x4fd8bd(_0x18d1de, _0xbd0061) {
    var _0x58f835 = _0x3001, _0x3d357e = this;
    this[_0x58f835(757)] = {}, this["verno"] = 0;
    var _0x509659 = _0x4fd8bd["dependencies"];
    this["_options"] = _0xbd0061 = __assign({ "addons": _0x4fd8bd[_0x58f835(1185)], "autoOpen": !![], "indexedDB": _0x509659[_0x58f835(476)], "IDBKeyRange": _0x509659["IDBKeyRange"] }, _0xbd0061), this[_0x58f835(1767)] = { "indexedDB": _0xbd0061["indexedDB"], "IDBKeyRange": _0xbd0061[_0x58f835(1955)] };
    var _0xb94743 = _0xbd0061[_0x58f835(1185)];
    this[_0x58f835(823)] = {}, this[_0x58f835(1255)] = [], this[_0x58f835(1203)] = [], this[_0x58f835(640)] = {}, this[_0x58f835(973)] = null, this["_novip"] = this;
    var _0x4e11cc = { "dbOpenError": null, "isBeingOpened": ![], "onReadyBeingFired": null, "openComplete": ![], "dbReadyResolve": nop, "dbReadyPromise": null, "cancelOpen": nop, "openCanceller": null, "autoSchema": !![], "PR1398_maxLoop": 3 };
    _0x4e11cc[_0x58f835(753)] = new DexiePromise(function(_0x53d1c2) {
      var _0x315a99 = _0x58f835;
      _0x4e11cc[_0x315a99(725)] = _0x53d1c2;
    }), _0x4e11cc[_0x58f835(969)] = new DexiePromise(function(_0x4ac550, _0x40b024) {
      _0x4e11cc["cancelOpen"] = _0x40b024;
    }), this[_0x58f835(1234)] = _0x4e11cc, this[_0x58f835(765)] = _0x18d1de, this["on"] = Events(this, _0x58f835(586), _0x58f835(1042), _0x58f835(1317), _0x58f835(1169), { "ready": [promisableChain, nop] }), this["on"]["ready"][_0x58f835(950)] = override(this["on"]["ready"][_0x58f835(950)], function(_0x103920) {
      return function(_0x3d998c, _0x2c9391) {
        var _0x793c69 = _0x3001;
        _0x4fd8bd[_0x793c69(1516)](function() {
          var _0x169507 = _0x793c69, _0x4360da = _0x3d357e["_state"];
          if (_0x4360da[_0x169507(755)]) {
            if (!_0x4360da[_0x169507(667)])
              DexiePromise[_0x169507(1211)]()["then"](_0x3d998c);
            if (_0x2c9391)
              _0x103920(_0x3d998c);
          } else {
            if (_0x4360da[_0x169507(1162)]) {
              _0x4360da[_0x169507(1162)][_0x169507(1991)](_0x3d998c);
              if (_0x2c9391)
                _0x103920(_0x3d998c);
            } else {
              _0x103920(_0x3d998c);
              var _0x242310 = _0x3d357e;
              if (!_0x2c9391)
                _0x103920(function _0x28ea41() {
                  var _0x110007 = _0x169507;
                  _0x242310["on"][_0x110007(2006)][_0x110007(1832)](_0x3d998c), _0x242310["on"][_0x110007(2006)]["unsubscribe"](_0x28ea41);
                });
            }
          }
        });
      };
    }), this["Collection"] = createCollectionConstructor(this), this[_0x58f835(1080)] = createTableConstructor(this), this["Transaction"] = createTransactionConstructor(this), this[_0x58f835(2042)] = createVersionConstructor(this), this[_0x58f835(1417)] = createWhereClauseConstructor(this), this["on"](_0x58f835(1317), function(_0x14902e) {
      var _0x50b5be = _0x58f835;
      if (_0x14902e[_0x50b5be(745)] > 0)
        console[_0x50b5be(1985)](_0x50b5be(1259) + _0x3d357e["name"] + _0x50b5be(1274));
      else
        console[_0x50b5be(1985)](_0x50b5be(1236) + _0x3d357e[_0x50b5be(765)] + _0x50b5be(474));
      _0x3d357e[_0x50b5be(1169)]();
    }), this["on"](_0x58f835(1042), function(_0x3abaaf) {
      var _0x6a4c8e = _0x58f835;
      if (!_0x3abaaf[_0x6a4c8e(745)] || _0x3abaaf["newVersion"] < _0x3abaaf[_0x6a4c8e(733)])
        console[_0x6a4c8e(1985)]("Dexie.delete('" + _0x3d357e[_0x6a4c8e(765)] + _0x6a4c8e(568));
      else
        console[_0x6a4c8e(1985)]("Upgrade '" + _0x3d357e[_0x6a4c8e(765)] + _0x6a4c8e(938) + _0x3abaaf["oldVersion"] / 10);
    }), this["_maxKey"] = getMaxKey(_0xbd0061["IDBKeyRange"]), this[_0x58f835(1658)] = function(_0x2e928f, _0x509400, _0x45a2b8, _0x2350fd) {
      var _0x1f10aa = _0x58f835;
      return new _0x3d357e[_0x1f10aa(1401)](_0x2e928f, _0x509400, _0x45a2b8, _0x3d357e[_0x1f10aa(1161)][_0x1f10aa(752)], _0x2350fd);
    }, this[_0x58f835(1800)] = function(_0x2b0c5c) {
      var _0x542a56 = _0x58f835;
      _0x3d357e["on"](_0x542a56(1042))[_0x542a56(801)](_0x2b0c5c), connections[_0x542a56(805)](function(_0x29e2b7) {
        var _0x5d21a8 = _0x542a56;
        return _0x29e2b7["name"] === _0x3d357e[_0x5d21a8(765)] && _0x29e2b7 !== _0x3d357e && !_0x29e2b7["_state"][_0x5d21a8(637)];
      })[_0x542a56(376)](function(_0x919874) {
        var _0x5c02a9 = _0x542a56;
        return _0x919874["on"]("versionchange")[_0x5c02a9(801)](_0x2b0c5c);
      });
    }, this[_0x58f835(1806)](virtualIndexMiddleware), this[_0x58f835(1806)](hooksMiddleware), this[_0x58f835(1806)](observabilityMiddleware), this["use"](cacheExistingValuesMiddleware), this[_0x58f835(1516)] = Object[_0x58f835(1409)](this, { "_vip": { "value": !![] } }), _0xb94743[_0x58f835(839)](function(_0x4d10ea) {
      return _0x4d10ea(_0x3d357e);
    });
  }
  return _0x4fd8bd[_0x4df542(1897)][_0x4df542(436)] = function(_0x4746c3) {
    var _0x546ecc = _0x4df542;
    if (isNaN(_0x4746c3) || _0x4746c3 < 0.1)
      throw new exceptions[_0x546ecc(813)]("Given version is not a positive number");
    _0x4746c3 = Math["round"](_0x4746c3 * 10) / 10;
    if (this[_0x546ecc(973)] || this[_0x546ecc(1234)]["isBeingOpened"])
      throw new exceptions[_0x546ecc(1728)](_0x546ecc(1177));
    this["verno"] = Math["max"](this[_0x546ecc(1464)], _0x4746c3);
    var _0xec5196 = this[_0x546ecc(1255)], _0x4d7acb = _0xec5196[_0x546ecc(805)](function(_0x27c33d) {
      var _0x373a44 = _0x546ecc;
      return _0x27c33d[_0x373a44(2191)][_0x373a44(436)] === _0x4746c3;
    })[0];
    if (_0x4d7acb)
      return _0x4d7acb;
    return _0x4d7acb = new this[_0x546ecc(2042)](_0x4746c3), _0xec5196[_0x546ecc(1991)](_0x4d7acb), _0xec5196[_0x546ecc(1138)](lowerVersionFirst), _0x4d7acb[_0x546ecc(1862)]({}), this["_state"][_0x546ecc(487)] = ![], _0x4d7acb;
  }, _0x4fd8bd[_0x4df542(1897)][_0x4df542(465)] = function(_0x29b83e) {
    var _0x302a7a = _0x4df542, _0x49cb59 = this;
    return this["idbdb"] && (this[_0x302a7a(1234)][_0x302a7a(755)] || PSD[_0x302a7a(1938)] || this[_0x302a7a(1703)]) ? _0x29b83e() : new DexiePromise(function(_0x527060, _0x2be82c) {
      var _0xbcdd82 = _0x302a7a;
      if (_0x49cb59["_state"][_0xbcdd82(755)])
        return _0x2be82c(new exceptions["DatabaseClosed"](_0x49cb59[_0xbcdd82(1234)][_0xbcdd82(667)]));
      if (!_0x49cb59[_0xbcdd82(1234)][_0xbcdd82(1204)]) {
        if (!_0x49cb59[_0xbcdd82(1161)][_0xbcdd82(374)]) {
          _0x2be82c(new exceptions[_0xbcdd82(2039)]());
          return;
        }
        _0x49cb59[_0xbcdd82(1352)]()[_0xbcdd82(1517)](nop);
      }
      _0x49cb59[_0xbcdd82(1234)][_0xbcdd82(753)]["then"](_0x527060, _0x2be82c);
    })[_0x302a7a(1902)](_0x29b83e);
  }, _0x4fd8bd[_0x4df542(1897)][_0x4df542(1806)] = function(_0x50a3ab) {
    var _0x5d7a3e = _0x4df542, _0x37e579 = _0x50a3ab[_0x5d7a3e(1212)], _0x50805f = _0x50a3ab[_0x5d7a3e(1409)], _0x2c43fd = _0x50a3ab[_0x5d7a3e(1624)], _0x4396fd = _0x50a3ab[_0x5d7a3e(765)];
    if (_0x4396fd)
      this[_0x5d7a3e(1562)]({ "stack": _0x37e579, "name": _0x4396fd });
    var _0x2c93ba = this[_0x5d7a3e(757)][_0x37e579] || (this[_0x5d7a3e(757)][_0x37e579] = []);
    return _0x2c93ba[_0x5d7a3e(1991)]({ "stack": _0x37e579, "create": _0x50805f, "level": _0x2c43fd == null ? 10 : _0x2c43fd, "name": _0x4396fd }), _0x2c93ba[_0x5d7a3e(1138)](function(_0x4b186c, _0x3d0eb4) {
      var _0x439883 = _0x5d7a3e;
      return _0x4b186c["level"] - _0x3d0eb4[_0x439883(1624)];
    }), this;
  }, _0x4fd8bd["prototype"]["unuse"] = function(_0xa3621) {
    var _0x40adfe = _0x4df542, _0xc3fe23 = _0xa3621[_0x40adfe(1212)], _0x12db1f = _0xa3621[_0x40adfe(765)], _0x2523ea = _0xa3621["create"];
    return _0xc3fe23 && this[_0x40adfe(757)][_0xc3fe23] && (this[_0x40adfe(757)][_0xc3fe23] = this["_middlewares"][_0xc3fe23][_0x40adfe(805)](function(_0x3de16b) {
      var _0x5d45f5 = _0x40adfe;
      return _0x2523ea ? _0x3de16b[_0x5d45f5(1409)] !== _0x2523ea : _0x12db1f ? _0x3de16b[_0x5d45f5(765)] !== _0x12db1f : ![];
    })), this;
  }, _0x4fd8bd["prototype"][_0x4df542(1352)] = function() {
    return dexieOpen(this);
  }, _0x4fd8bd[_0x4df542(1897)][_0x4df542(1770)] = function() {
    var _0x48fc2a = _0x4df542, _0xf15de6 = this[_0x48fc2a(1234)], _0x31aaae = connections[_0x48fc2a(1879)](this);
    if (_0x31aaae >= 0)
      connections[_0x48fc2a(1314)](_0x31aaae, 1);
    if (this[_0x48fc2a(973)]) {
      try {
        this[_0x48fc2a(973)][_0x48fc2a(1169)]();
      } catch (_0x3806f7) {
      }
      this[_0x48fc2a(1846)][_0x48fc2a(973)] = null;
    }
    _0xf15de6["dbReadyPromise"] = new DexiePromise(function(_0x124d53) {
      var _0x2adcbf = _0x48fc2a;
      _0xf15de6[_0x2adcbf(725)] = _0x124d53;
    }), _0xf15de6["openCanceller"] = new DexiePromise(function(_0x23c5f0, _0x1a8d1b) {
      var _0xa308fe = _0x48fc2a;
      _0xf15de6[_0xa308fe(503)] = _0x1a8d1b;
    });
  }, _0x4fd8bd[_0x4df542(1897)][_0x4df542(1169)] = function() {
    var _0x52999f = _0x4df542;
    this[_0x52999f(1770)]();
    var _0xc8b22 = this["_state"];
    this["_options"]["autoOpen"] = ![], _0xc8b22[_0x52999f(667)] = new exceptions[_0x52999f(2039)]();
    if (_0xc8b22[_0x52999f(1204)])
      _0xc8b22[_0x52999f(503)](_0xc8b22[_0x52999f(667)]);
  }, _0x4fd8bd[_0x4df542(1897)][_0x4df542(1653)] = function() {
    var _0x2377de = _0x4df542, _0x3a6f09 = this, _0xd08041 = arguments[_0x2377de(1965)] > 0, _0xf18a2e = this[_0x2377de(1234)];
    return new DexiePromise(function(_0x296aa9, _0x47f937) {
      var _0x4b95fa = _0x2377de, _0x2e7f6e = function() {
        var _0x12afd9 = _0x3001;
        _0x3a6f09["close"]();
        var _0x390826 = _0x3a6f09[_0x12afd9(1767)][_0x12afd9(476)][_0x12afd9(496)](_0x3a6f09[_0x12afd9(765)]);
        _0x390826[_0x12afd9(999)] = wrap(function() {
          var _0x122047 = _0x12afd9;
          _onDatabaseDeleted(_0x3a6f09["_deps"], _0x3a6f09[_0x122047(765)]), _0x296aa9();
        }), _0x390826[_0x12afd9(1512)] = eventRejectHandler(_0x47f937), _0x390826["onblocked"] = _0x3a6f09[_0x12afd9(1800)];
      };
      if (_0xd08041)
        throw new exceptions[_0x4b95fa(1496)]("Arguments not allowed in db.delete()");
      _0xf18a2e[_0x4b95fa(1204)] ? _0xf18a2e[_0x4b95fa(753)][_0x4b95fa(1902)](_0x2e7f6e) : _0x2e7f6e();
    });
  }, _0x4fd8bd[_0x4df542(1897)][_0x4df542(1854)] = function() {
    var _0x283cfd = _0x4df542;
    return this[_0x283cfd(973)];
  }, _0x4fd8bd[_0x4df542(1897)]["isOpen"] = function() {
    var _0x293eef = _0x4df542;
    return this[_0x293eef(973)] !== null;
  }, _0x4fd8bd["prototype"][_0x4df542(1789)] = function() {
    var _0x51a75f = _0x4df542, _0x11d76e = this[_0x51a75f(1234)][_0x51a75f(667)];
    return _0x11d76e && _0x11d76e[_0x51a75f(765)] === _0x51a75f(2039);
  }, _0x4fd8bd[_0x4df542(1897)]["hasFailed"] = function() {
    var _0x4c07a4 = _0x4df542;
    return this[_0x4c07a4(1234)]["dbOpenError"] !== null;
  }, _0x4fd8bd[_0x4df542(1897)][_0x4df542(1844)] = function() {
    var _0x4abab3 = _0x4df542;
    return this[_0x4abab3(1234)][_0x4abab3(487)];
  }, Object[_0x4df542(1564)](_0x4fd8bd[_0x4df542(1897)], _0x4df542(1764), { "get": function() {
    var _0x52a55a = _0x4df542, _0x2fb60c = this;
    return keys(this[_0x52a55a(640)])["map"](function(_0x575d40) {
      return _0x2fb60c["_allTables"][_0x575d40];
    });
  }, "enumerable": ![], "configurable": !![] }), _0x4fd8bd[_0x4df542(1897)][_0x4df542(955)] = function() {
    var _0x59721e = _0x4df542, _0xa092a9 = extractTransactionArgs[_0x59721e(2150)](this, arguments);
    return this[_0x59721e(1500)]["apply"](this, _0xa092a9);
  }, _0x4fd8bd["prototype"]["_transaction"] = function(_0xdd94a3, _0x50f61d, _0x56d9d6) {
    var _0x5669f6 = _0x4df542, _0x2cad59 = this, _0x5ddc09 = PSD[_0x5669f6(683)];
    if (!_0x5ddc09 || _0x5ddc09["db"] !== this || _0xdd94a3[_0x5669f6(1879)]("!") !== -1)
      _0x5ddc09 = null;
    var _0x298fce = _0xdd94a3[_0x5669f6(1879)]("?") !== -1;
    _0xdd94a3 = _0xdd94a3[_0x5669f6(1028)]("!", "")[_0x5669f6(1028)]("?", "");
    var _0x1900a1, _0x214d8d;
    try {
      _0x214d8d = _0x50f61d[_0x5669f6(376)](function(_0x2ae31d) {
        var _0x2094c7 = _0x5669f6, _0x49e6f8 = _0x2ae31d instanceof _0x2cad59[_0x2094c7(1080)] ? _0x2ae31d[_0x2094c7(765)] : _0x2ae31d;
        if (typeof _0x49e6f8 !== _0x2094c7(1548))
          throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
        return _0x49e6f8;
      });
      if (_0xdd94a3 == "r" || _0xdd94a3 === READONLY)
        _0x1900a1 = READONLY;
      else {
        if (_0xdd94a3 == "rw" || _0xdd94a3 == READWRITE)
          _0x1900a1 = READWRITE;
        else
          throw new exceptions[_0x5669f6(1496)]("Invalid transaction mode: " + _0xdd94a3);
      }
      if (_0x5ddc09) {
        if (_0x5ddc09[_0x5669f6(1593)] === READONLY && _0x1900a1 === READWRITE) {
          if (_0x298fce)
            _0x5ddc09 = null;
          else
            throw new exceptions[_0x5669f6(1680)](_0x5669f6(1254));
        }
        _0x5ddc09 && _0x214d8d[_0x5669f6(839)](function(_0x33fb7e) {
          var _0x516521 = _0x5669f6;
          if (_0x5ddc09 && _0x5ddc09[_0x516521(591)][_0x516521(1879)](_0x33fb7e) === -1) {
            if (_0x298fce)
              _0x5ddc09 = null;
            else
              throw new exceptions[_0x516521(1680)](_0x516521(1534) + _0x33fb7e + _0x516521(2168));
          }
        }), _0x298fce && _0x5ddc09 && !_0x5ddc09[_0x5669f6(1430)] && (_0x5ddc09 = null);
      }
    } catch (_0x38573b) {
      return _0x5ddc09 ? _0x5ddc09[_0x5669f6(1490)](null, function(_0x410570, _0x49de3f) {
        _0x49de3f(_0x38573b);
      }) : rejection(_0x38573b);
    }
    var _0x495a93 = enterTransactionScope["bind"](null, this, _0x1900a1, _0x214d8d, _0x5ddc09, _0x56d9d6);
    return _0x5ddc09 ? _0x5ddc09["_promise"](_0x1900a1, _0x495a93, _0x5669f6(1094)) : PSD[_0x5669f6(683)] ? usePSD(PSD[_0x5669f6(1612)], function() {
      var _0x1c2740 = _0x5669f6;
      return _0x2cad59[_0x1c2740(465)](_0x495a93);
    }) : this[_0x5669f6(465)](_0x495a93);
  }, _0x4fd8bd[_0x4df542(1897)][_0x4df542(2178)] = function(_0x4fdd87) {
    var _0x5eda84 = _0x4df542;
    if (!hasOwn(this["_allTables"], _0x4fdd87))
      throw new exceptions[_0x5eda84(598)]("Table " + _0x4fdd87 + _0x5eda84(934));
    return this[_0x5eda84(640)][_0x4fdd87];
  }, _0x4fd8bd;
}(), symbolObservable = typeof Symbol !== _0x780a7e(437) && _0x780a7e(1419) in Symbol ? Symbol[_0x780a7e(1419)] : _0x780a7e(1524), Observable = function() {
  var _0x4d6ea4 = _0x780a7e;
  function _0x1c5adb(_0x30d64d) {
    var _0x5440c6 = _0x3001;
    this[_0x5440c6(1379)] = _0x30d64d;
  }
  return _0x1c5adb[_0x4d6ea4(1897)][_0x4d6ea4(950)] = function(_0x15cb03, _0x3cea7b, _0x9c5b30) {
    var _0x17fe71 = _0x4d6ea4;
    return this[_0x17fe71(1379)](!_0x15cb03 || typeof _0x15cb03 === _0x17fe71(389) ? { "next": _0x15cb03, "error": _0x3cea7b, "complete": _0x9c5b30 } : _0x15cb03);
  }, _0x1c5adb[_0x4d6ea4(1897)][symbolObservable] = function() {
    return this;
  }, _0x1c5adb;
}();
function extendObservabilitySet(_0x3d4faf, _0x560d30) {
  return keys(_0x560d30)["forEach"](function(_0x3ed275) {
    var _0x1a322d = _0x3d4faf[_0x3ed275] || (_0x3d4faf[_0x3ed275] = new RangeSet());
    mergeRanges(_0x1a322d, _0x560d30[_0x3ed275]);
  }), _0x3d4faf;
}
function liveQuery(_0x1dab88) {
  var _0x3b8e42 = _0x780a7e, _0x13c488 = ![], _0x4881a7 = void 0, _0xfcac35 = new Observable(function(_0xc94d59) {
    var _0x27271c = _0x3001, _0x50ab01 = isAsyncFunction(_0x1dab88);
    function _0x11f5c7(_0x24cad6) {
      var _0xb61860 = _0x3001;
      _0x50ab01 && incrementExpectedAwaits();
      var _0x5a11f3 = function() {
        return newScope(_0x1dab88, { "subscr": _0x24cad6, "trans": null });
      }, _0x4daa22 = PSD["trans"] ? usePSD(PSD[_0xb61860(1612)], _0x5a11f3) : _0x5a11f3();
      return _0x50ab01 && _0x4daa22[_0xb61860(1902)](decrementExpectedAwaits, decrementExpectedAwaits), _0x4daa22;
    }
    var _0x2a0e78 = ![], _0xfb511c = {}, _0x5d53fc = {}, _0x35802c = { get "closed"() {
      return _0x2a0e78;
    }, "unsubscribe": function() {
      var _0x3dfad6 = _0x3001;
      _0x2a0e78 = !![], globalEvents[_0x3dfad6(919)][_0x3dfad6(1832)](_0x15f7ce);
    } };
    _0xc94d59[_0x27271c(2014)] && _0xc94d59[_0x27271c(2014)](_0x35802c);
    var _0x25a693 = ![], _0x3eb9eb = ![];
    function _0x2a1a04() {
      var _0x2aea75 = _0x27271c;
      return keys(_0x5d53fc)[_0x2aea75(1235)](function(_0x425cd0) {
        return _0xfb511c[_0x425cd0] && rangesOverlap(_0xfb511c[_0x425cd0], _0x5d53fc[_0x425cd0]);
      });
    }
    var _0x15f7ce = function(_0x54711f) {
      extendObservabilitySet(_0xfb511c, _0x54711f), _0x2a1a04() && _0x4857c5();
    }, _0x4857c5 = function() {
      var _0x27921b = _0x27271c;
      if (_0x25a693 || _0x2a0e78)
        return;
      _0xfb511c = {};
      var _0x24acc4 = {}, _0x1a9860 = _0x11f5c7(_0x24acc4);
      !_0x3eb9eb && (globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, _0x15f7ce), _0x3eb9eb = !![]), _0x25a693 = !![], Promise[_0x27921b(1211)](_0x1a9860)[_0x27921b(1902)](function(_0x21183a) {
        var _0x517283 = _0x27921b;
        _0x13c488 = !![], _0x4881a7 = _0x21183a, _0x25a693 = ![];
        if (_0x2a0e78)
          return;
        _0x2a1a04() ? _0x4857c5() : (_0xfb511c = {}, _0x5d53fc = _0x24acc4, _0xc94d59[_0x517283(670)] && _0xc94d59[_0x517283(670)](_0x21183a));
      }, function(_0x168195) {
        var _0x1dbbfe = _0x27921b;
        _0x25a693 = ![], _0x13c488 = ![], _0xc94d59[_0x1dbbfe(2165)] && _0xc94d59[_0x1dbbfe(2165)](_0x168195), _0x35802c[_0x1dbbfe(1832)]();
      });
    };
    return _0x4857c5(), _0x35802c;
  });
  return _0xfcac35[_0x3b8e42(2081)] = function() {
    return _0x13c488;
  }, _0xfcac35["getValue"] = function() {
    return _0x4881a7;
  }, _0xfcac35;
}
var domDeps;
try {
  domDeps = { "indexedDB": _global[_0x780a7e(476)] || _global[_0x780a7e(1577)] || _global[_0x780a7e(1570)] || _global[_0x780a7e(1989)], "IDBKeyRange": _global["IDBKeyRange"] || _global["webkitIDBKeyRange"] };
} catch (_0x1b5bb5) {
  domDeps = { "indexedDB": null, "IDBKeyRange": null };
}
var Dexie = Dexie$1;
props(Dexie, __assign(__assign({}, fullNameExceptions), { "delete": function(_0x261028) {
  var _0x3a1366 = _0x780a7e, _0x470207 = new Dexie(_0x261028, { "addons": [] });
  return _0x470207[_0x3a1366(1653)]();
}, "exists": function(_0x383c46) {
  var _0x28198d = _0x780a7e;
  return new Dexie(_0x383c46, { "addons": [] })[_0x28198d(1352)]()[_0x28198d(1902)](function(_0x1331f9) {
    return _0x1331f9["close"](), !![];
  })[_0x28198d(1517)](_0x28198d(675), function() {
    return ![];
  });
}, "getDatabaseNames": function(_0x2468b0) {
  var _0x496eb2 = _0x780a7e;
  try {
    return getDatabaseNames(Dexie["dependencies"])[_0x496eb2(1902)](_0x2468b0);
  } catch (_0x45da6a) {
    return rejection(new exceptions[_0x496eb2(555)]());
  }
}, "defineClass": function() {
  function _0x468c35(_0x47a6dd) {
    extend(this, _0x47a6dd);
  }
  return _0x468c35;
}, "ignoreTransaction": function(_0x95fada) {
  var _0x48f635 = _0x780a7e;
  return PSD[_0x48f635(683)] ? usePSD(PSD[_0x48f635(1612)], _0x95fada) : _0x95fada();
}, "vip": vip, "async": function(_0x34276e) {
  return function() {
    var _0x297951 = _0x3001;
    try {
      var _0x4e2233 = awaitIterator(_0x34276e["apply"](this, arguments));
      if (!_0x4e2233 || typeof _0x4e2233[_0x297951(1902)] !== _0x297951(389))
        return DexiePromise[_0x297951(1211)](_0x4e2233);
      return _0x4e2233;
    } catch (_0x1b3c1a) {
      return rejection(_0x1b3c1a);
    }
  };
}, "spawn": function(_0x3999ff, _0x5ca461, _0x10ab85) {
  var _0x3a7b09 = _0x780a7e;
  try {
    var _0x3b42b3 = awaitIterator(_0x3999ff[_0x3a7b09(2150)](_0x10ab85, _0x5ca461 || []));
    if (!_0x3b42b3 || typeof _0x3b42b3[_0x3a7b09(1902)] !== _0x3a7b09(389))
      return DexiePromise[_0x3a7b09(1211)](_0x3b42b3);
    return _0x3b42b3;
  } catch (_0x11e6a8) {
    return rejection(_0x11e6a8);
  }
}, "currentTransaction": { "get": function() {
  return PSD["trans"] || null;
} }, "waitFor": function(_0x305012, _0x3011f5) {
  var _0x1ea604 = _0x780a7e, _0x250b42 = DexiePromise["resolve"](typeof _0x305012 === _0x1ea604(389) ? Dexie[_0x1ea604(1671)](_0x305012) : _0x305012)[_0x1ea604(1712)](_0x3011f5 || 6e4);
  return PSD[_0x1ea604(683)] ? PSD[_0x1ea604(683)][_0x1ea604(1269)](_0x250b42) : _0x250b42;
}, "Promise": DexiePromise, "debug": { "get": function() {
  return debug;
}, "set": function(_0x2c351c) {
  setDebug(_0x2c351c, _0x2c351c === "dexie" ? function() {
    return !![];
  } : dexieStackFrameFilter);
} }, "derive": derive, "extend": extend, "props": props, "override": override, "Events": Events, "on": globalEvents, "liveQuery": liveQuery, "extendObservabilitySet": extendObservabilitySet, "getByKeyPath": getByKeyPath, "setByKeyPath": setByKeyPath, "delByKeyPath": delByKeyPath, "shallowClone": shallowClone, "deepClone": deepClone, "getObjectDiff": getObjectDiff, "cmp": cmp, "asap": asap$1, "minKey": minKey, "addons": [], "connections": connections, "errnames": errnames, "dependencies": domDeps, "semVer": DEXIE_VERSION, "version": DEXIE_VERSION["split"](".")["map"](function(_0x545db5) {
  return parseInt(_0x545db5);
})[_0x780a7e(690)](function(_0x4e2248, _0x51f8c1, _0x43d4e9) {
  var _0x173075 = _0x780a7e;
  return _0x4e2248 + _0x51f8c1 / Math[_0x173075(1139)](10, _0x43d4e9 * 2);
}) })), Dexie["maxKey"] = getMaxKey(Dexie[_0x780a7e(1303)]["IDBKeyRange"]);
typeof dispatchEvent !== _0x780a7e(437) && typeof addEventListener !== "undefined" && (globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function(_0x262f18) {
  var _0x127ba9 = _0x780a7e;
  if (!propagatingLocally) {
    var _0x2dc8f3;
    isIEOrEdge ? (_0x2dc8f3 = document[_0x127ba9(525)]("CustomEvent"), _0x2dc8f3[_0x127ba9(2189)](STORAGE_MUTATED_DOM_EVENT_NAME, !![], !![], _0x262f18)) : _0x2dc8f3 = new CustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, { "detail": _0x262f18 }), propagatingLocally = !![], dispatchEvent(_0x2dc8f3), propagatingLocally = ![];
  }
}), addEventListener(STORAGE_MUTATED_DOM_EVENT_NAME, function(_0xd0c5a) {
  var _0x1e24b9 = _0x780a7e, _0x1c8cdf = _0xd0c5a[_0x1e24b9(1093)];
  !propagatingLocally && propagateLocally(_0x1c8cdf);
}));
function propagateLocally(_0x5e59b2) {
  var _0xcfa57 = _0x780a7e, _0x3a2742 = propagatingLocally;
  try {
    propagatingLocally = !![], globalEvents[_0xcfa57(919)][_0xcfa57(801)](_0x5e59b2);
  } finally {
    propagatingLocally = _0x3a2742;
  }
}
var propagatingLocally = ![];
if (typeof BroadcastChannel !== _0x780a7e(437)) {
  var bc_1 = new BroadcastChannel(STORAGE_MUTATED_DOM_EVENT_NAME);
  typeof bc_1["unref"] === _0x780a7e(389) && bc_1[_0x780a7e(511)](), globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function(_0x26afd3) {
    var _0x58d476 = _0x780a7e;
    !propagatingLocally && bc_1[_0x58d476(779)](_0x26afd3);
  }), bc_1[_0x780a7e(1763)] = function(_0x58e229) {
    var _0x28307d = _0x780a7e;
    if (_0x58e229["data"])
      propagateLocally(_0x58e229[_0x28307d(797)]);
  };
} else {
  if (typeof self !== _0x780a7e(437) && typeof navigator !== _0x780a7e(437)) {
    globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function(_0x2e8a7a) {
      var _0x5a4b58 = _0x780a7e;
      try {
        !propagatingLocally && (typeof localStorage !== _0x5a4b58(437) && localStorage[_0x5a4b58(1124)](STORAGE_MUTATED_DOM_EVENT_NAME, JSON[_0x5a4b58(2063)]({ "trig": Math[_0x5a4b58(1511)](), "changedParts": _0x2e8a7a })), typeof self[_0x5a4b58(1821)] === _0x5a4b58(1723) && __spreadArray([], self[_0x5a4b58(1821)][_0x5a4b58(626)]({ "includeUncontrolled": !![] }), !![])[_0x5a4b58(839)](function(_0x571943) {
          return _0x571943["postMessage"]({ "type": STORAGE_MUTATED_DOM_EVENT_NAME, "changedParts": _0x2e8a7a });
        }));
      } catch (_0x3561fa) {
      }
    });
    typeof addEventListener !== _0x780a7e(437) && addEventListener(_0x780a7e(632), function(_0x26b96e) {
      var _0xfa64e3 = _0x780a7e;
      if (_0x26b96e[_0xfa64e3(1993)] === STORAGE_MUTATED_DOM_EVENT_NAME) {
        var _0x233fb0 = JSON["parse"](_0x26b96e[_0xfa64e3(1137)]);
        if (_0x233fb0)
          propagateLocally(_0x233fb0[_0xfa64e3(1977)]);
      }
    });
    var swContainer = self[_0x780a7e(585)] && navigator[_0x780a7e(1101)];
    swContainer && swContainer[_0x780a7e(2069)]("message", propagateMessageLocally);
  }
}
function propagateMessageLocally(_0x22560f) {
  var _0x32d061 = _0x780a7e, _0x179812 = _0x22560f[_0x32d061(797)];
  _0x179812 && _0x179812[_0x32d061(1514)] === STORAGE_MUTATED_DOM_EVENT_NAME && propagateLocally(_0x179812[_0x32d061(1977)]);
}
DexiePromise[_0x780a7e(1573)] = mapError, setDebug(debug, dexieStackFrameFilter);
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  var _0x1775e7 = _0x780a7e;
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto[_0x1775e7(1340)] && crypto["getRandomValues"][_0x1775e7(517)](crypto);
    if (!getRandomValues)
      throw new Error(_0x1775e7(1260));
  }
  return getRandomValues(rnds8);
}
const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex["push"]((i + 256)[_0x780a7e(2073)](16)["slice"](1));
}
function unsafeStringify(_0x2a7dcd, _0x2f916a = 0) {
  var _0x56984c = _0x780a7e;
  return (byteToHex[_0x2a7dcd[_0x2f916a + 0]] + byteToHex[_0x2a7dcd[_0x2f916a + 1]] + byteToHex[_0x2a7dcd[_0x2f916a + 2]] + byteToHex[_0x2a7dcd[_0x2f916a + 3]] + "-" + byteToHex[_0x2a7dcd[_0x2f916a + 4]] + byteToHex[_0x2a7dcd[_0x2f916a + 5]] + "-" + byteToHex[_0x2a7dcd[_0x2f916a + 6]] + byteToHex[_0x2a7dcd[_0x2f916a + 7]] + "-" + byteToHex[_0x2a7dcd[_0x2f916a + 8]] + byteToHex[_0x2a7dcd[_0x2f916a + 9]] + "-" + byteToHex[_0x2a7dcd[_0x2f916a + 10]] + byteToHex[_0x2a7dcd[_0x2f916a + 11]] + byteToHex[_0x2a7dcd[_0x2f916a + 12]] + byteToHex[_0x2a7dcd[_0x2f916a + 13]] + byteToHex[_0x2a7dcd[_0x2f916a + 14]] + byteToHex[_0x2a7dcd[_0x2f916a + 15]])[_0x56984c(433)]();
}
const randomUUID = typeof crypto !== _0x780a7e(437) && crypto["randomUUID"] && crypto[_0x780a7e(1663)][_0x780a7e(517)](crypto), native = { "randomUUID": randomUUID };
function v4(_0x108610, _0x55b188, _0x3f9957) {
  var _0x115e0a = _0x780a7e;
  if (native[_0x115e0a(1663)] && !_0x55b188 && !_0x108610)
    return native["randomUUID"]();
  _0x108610 = _0x108610 || {};
  const _0x4af215 = _0x108610["random"] || (_0x108610["rng"] || rng)();
  _0x4af215[6] = _0x4af215[6] & 15 | 64, _0x4af215[8] = _0x4af215[8] & 63 | 128;
  if (_0x55b188) {
    _0x3f9957 = _0x3f9957 || 0;
    for (let _0x47beb2 = 0; _0x47beb2 < 16; ++_0x47beb2) {
      _0x55b188[_0x3f9957 + _0x47beb2] = _0x4af215[_0x47beb2];
    }
    return _0x55b188;
  }
  return unsafeStringify(_0x4af215);
}
class Action$1 {
  constructor(_0x8233c9) {
    __publicField(this, "id");
    __publicField(this, _a2);
    __publicField(this, "printerID");
    __publicField(this, "script");
    __publicField(this, _b);
    var _a3;
    var _0x46d81a = _0x780a7e;
    this["id"] = (_a3 = _0x8233c9["id"]) != null ? _a3 : v4(), this[_0x46d81a(765)] = _0x8233c9[_0x46d81a(765)], this[_0x46d81a(740)] = _0x8233c9[_0x46d81a(740)], this[_0x46d81a(747)] = _0x8233c9[_0x46d81a(747)], this[_0x46d81a(595)] = _0x8233c9[_0x46d81a(595)];
  }
  [(_a2 = _0x780a7e(765), _b = _0x780a7e(595), _0x780a7e(2073))]() {
    var _0x2f8bdd = _0x780a7e;
    return "" + this[_0x2f8bdd(765)];
  }
}
var FilamentStatus = ((_0x198313) => {
  var _0x505978 = _0x780a7e;
  return _0x198313[_0x505978(1901)] = "available", _0x198313[_0x505978(829)] = "loaded", _0x198313[_0x505978(1636)] = _0x505978(1636), _0x198313[_0x505978(1616)] = "reserved", _0x198313;
})(FilamentStatus || {});
class Filament$1 {
  constructor(_0x4349c7) {
    __publicField(this, "id");
    __publicField(this, "brand");
    __publicField(this, _c);
    __publicField(this, _d);
    __publicField(this, _e);
    __publicField(this, _f);
    __publicField(this, _g);
    __publicField(this, _h);
    __publicField(this, "weightTotal");
    __publicField(this, "weightPrinted");
    __publicField(this, _i);
    __publicField(this, _j);
    __publicField(this, "dateBought");
    __publicField(this, _k);
    __publicField(this, "bedTemperature");
    __publicField(this, _l);
    __publicField(this, "filamentDepletedCutoff");
    __publicField(this, "quantity");
    var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2;
    var _0x4e4e42 = _0x780a7e;
    this["id"] = (_a3 = _0x4349c7["id"]) != null ? _a3 : v4(), this[_0x4e4e42(2166)] = _0x4349c7["brand"], this[_0x4e4e42(911)] = (_b2 = _0x4349c7[_0x4e4e42(911)]) != null ? _b2 : _0x4e4e42(1110), this[_0x4e4e42(2022)] = (_c2 = _0x4349c7[_0x4e4e42(2022)]) != null ? _c2 : _0x4e4e42(1442), this[_0x4e4e42(880)] = (_d2 = _0x4349c7["colorName"]) != null ? _d2 : "white", this[_0x4e4e42(889)] = (_e2 = _0x4349c7["cost"]) != null ? _e2 : 0, this["currency"] = (_f2 = _0x4349c7[_0x4e4e42(365)]) != null ? _f2 : "INR", this[_0x4e4e42(2036)] = (_g2 = _0x4349c7[_0x4e4e42(2036)]) != null ? _g2 : _0x4e4e42(1901), this["weightTotal"] = (_h2 = _0x4349c7["weightTotal"]) != null ? _h2 : 1e3, this[_0x4e4e42(2066)] = (_i2 = _0x4349c7[_0x4e4e42(2066)]) != null ? _i2 : 0, this[_0x4e4e42(406)] = (_j2 = _0x4349c7[_0x4e4e42(406)]) != null ? _j2 : 1.24, this[_0x4e4e42(472)] = (_k2 = _0x4349c7[_0x4e4e42(472)]) != null ? _k2 : 1.75, this["dateBought"] = (_l2 = _0x4349c7[_0x4e4e42(847)]) != null ? _l2 : new Date(), this[_0x4e4e42(1493)] = _0x4349c7[_0x4e4e42(1493)], this[_0x4e4e42(646)] = _0x4349c7[_0x4e4e42(646)], this[_0x4e4e42(1205)] = _0x4349c7["chamberTemperature"], this["filamentDepletedCutoff"] = (_m2 = _0x4349c7[_0x4e4e42(657)]) != null ? _m2 : 20, this[_0x4e4e42(1533)] - this[_0x4e4e42(2066)] < this["filamentDepletedCutoff"] && (this[_0x4e4e42(2036)] = _0x4e4e42(1636)), this["quantity"] = (_n2 = _0x4349c7["quantity"]) != null ? _n2 : 1;
  }
  get [(_c = _0x780a7e(911), _d = _0x780a7e(2022), _e = _0x780a7e(880), _f = _0x780a7e(889), _g = _0x780a7e(365), _h = _0x780a7e(2036), _i = _0x780a7e(406), _j = _0x780a7e(472), _k = _0x780a7e(1493), _l = _0x780a7e(1205), _0x780a7e(765))]() {
    var _0x2d7aa3 = _0x780a7e;
    return this["brand"] + " " + this[_0x2d7aa3(911)];
  }
  get [_0x780a7e(2001)]() {
    var _0x31593c = _0x780a7e;
    return Math[_0x31593c(1184)]((this["weightTotal"] - this[_0x31593c(2066)]) / this[_0x31593c(1533)] * 100);
  }
  get [_0x780a7e(396)]() {
    var _0x407bcb = _0x780a7e;
    return Math[_0x407bcb(1155)](this[_0x407bcb(2066)] / this["weightTotal"] * 100);
  }
  get [_0x780a7e(1482)]() {
    var _0x405838 = _0x780a7e;
    return this[_0x405838(1533)] - this["weightPrinted"];
  }
  get ["costPrinted"]() {
    var _0x59c152 = _0x780a7e;
    return this[_0x59c152(889)] - this["percentRemaining"] * this[_0x59c152(889)];
  }
  get [_0x780a7e(784)]() {
    var _0x347fac = _0x780a7e;
    return this[_0x347fac(2001)] * this[_0x347fac(889)];
  }
  ["toString"]() {
    var _0x5756d9 = _0x780a7e;
    return this[_0x5756d9(2166)] + " " + this[_0x5756d9(911)] + " " + this["colorName"];
  }
}
const FILE_EXTENSIONS = [_0x780a7e(1485), _0x780a7e(1829)], FOLDER_TYPES = [_0x780a7e(355), _0x780a7e(1476)];
class NanoFactoryFile$1 {
  constructor(_0x698d42) {
    __publicField(this, "id");
    __publicField(this, _m);
    __publicField(this, "parentDir");
    __publicField(this, _n);
    __publicField(this, _o);
    __publicField(this, "uploaderName");
    __publicField(this, "thumbnail");
    __publicField(this, _p);
    __publicField(this, _q);
    __publicField(this, _r);
    __publicField(this, _s);
    var _a3, _b2, _c2, _d2, _e2, _f2, _g2;
    var _0x14298b = _0x780a7e;
    this["id"] = (_a3 = _0x698d42["id"]) != null ? _a3 : v4(), this[_0x14298b(1338)] = _0x698d42[_0x14298b(1338)], this[_0x14298b(1560)] = _0x698d42[_0x14298b(1560)], this[_0x14298b(1630)] = (_b2 = _0x698d42[_0x14298b(1630)]) != null ? _b2 : "", this[_0x14298b(1547)] = _0x698d42[_0x14298b(1547)], this[_0x14298b(1197)] = (_c2 = _0x698d42["thumbnail"]) != null ? _c2 : null, this[_0x14298b(1113)] = (_d2 = _0x698d42[_0x14298b(1113)]) != null ? _d2 : [], this["fileContent"] = _0x698d42[_0x14298b(1376)], this[_0x14298b(1125)] = (_e2 = _0x698d42[_0x14298b(1125)]) != null ? _e2 : "--", this[_0x14298b(1238)] = (_f2 = _0x698d42[_0x14298b(1238)]) != null ? _f2 : new Date(), this["forReferenceOnly"] = (_g2 = _0x698d42[_0x14298b(1456)]) != null ? _g2 : ![];
  }
  get [(_m = _0x780a7e(1338), _n = _0x780a7e(1113), _o = _0x780a7e(1547), _p = _0x780a7e(1376), _q = _0x780a7e(1125), _r = _0x780a7e(1238), _s = _0x780a7e(1456), "isFile")]() {
    var _0x58d341 = _0x780a7e;
    return FILE_EXTENSIONS[_0x58d341(589)](this[_0x58d341(1547)]);
  }
  get [_0x780a7e(1036)]() {
    var _0x201ccf = _0x780a7e;
    return FOLDER_TYPES["includes"](this[_0x201ccf(1547)]);
  }
}
class PeerKeysBase {
  constructor(_0x5e62e2) {
    __publicField(this, "id");
    __publicField(this, _t);
    __publicField(this, _u);
    __publicField(this, _v);
    var _0x417f09 = _0x780a7e;
    this["id"] = _0x5e62e2[_0x417f09(1927)], this["encryptionKey"] = _0x5e62e2["encryptionKey"], this["signingKey"] = _0x5e62e2["signingKey"], this[_0x417f09(946)] = _0x5e62e2["keysExchanged"];
  }
}
_t = _0x780a7e(565), _u = _0x780a7e(1880), _v = _0x780a7e(946);
class PeerKeys$1 extends PeerKeysBase {
  constructor(_0x51d247) {
    var _0x1fd821 = _0x780a7e;
    super(_0x51d247);
    __publicField(this, _w);
    this["allowedLabels"] = _0x51d247[_0x1fd821(1342)];
  }
  [(_w = _0x780a7e(1342), _0x780a7e(600))](_0x348f91) {
    var _0x5b5db1 = _0x780a7e;
    if (this[_0x5b5db1(1342)] === "*")
      return !![];
    if (this[_0x5b5db1(1342)][_0x5b5db1(589)](_0x348f91))
      return !![];
    return ![];
  }
}
var PrinterStatus = ((_0x2712d0) => {
  var _0x42602b = _0x780a7e;
  return _0x2712d0[_0x42602b(1267)] = _0x42602b(1134), _0x2712d0[_0x42602b(1668)] = _0x42602b(1332), _0x2712d0[_0x42602b(1176)] = _0x42602b(704), _0x2712d0[_0x42602b(2165)] = "Error", _0x2712d0[_0x42602b(703)] = "Paused", _0x2712d0["executingAction"] = _0x42602b(2100), _0x2712d0;
})(PrinterStatus || {}), QueuePausedReason = ((_0x613ddf) => {
  var _0x38fedb = _0x780a7e;
  return _0x613ddf[_0x38fedb(2163)] = _0x38fedb(806), _0x613ddf[_0x38fedb(348)] = _0x38fedb(929), _0x613ddf[_0x38fedb(665)] = _0x38fedb(1115), _0x613ddf[_0x38fedb(1311)] = _0x38fedb(972), _0x613ddf[_0x38fedb(1535)] = _0x38fedb(1348), _0x613ddf[_0x38fedb(863)] = _0x38fedb(649), _0x613ddf[_0x38fedb(1381)] = _0x38fedb(1122), _0x613ddf[_0x38fedb(536)] = _0x38fedb(782), _0x613ddf[_0x38fedb(1034)] = _0x38fedb(1754), _0x613ddf[_0x38fedb(775)] = _0x38fedb(499), _0x613ddf["noJob"] = "Printer has not been assigned a job", _0x613ddf["queueNotPaused"] = "", _0x613ddf;
})(QueuePausedReason || {}), CameraType = ((_0x1cd383) => {
  var _0x231d36 = _0x780a7e;
  return _0x1cd383[_0x231d36(754)] = _0x231d36(569), _0x1cd383[_0x231d36(2025)] = _0x231d36(1602), _0x1cd383["nanofactoryPWACam"] = "NanoFactoryPWACamera", _0x1cd383;
})(CameraType || {});
class Printer$1 {
  constructor(_0x48cbda) {
    __publicField(this, "id");
    __publicField(this, _x);
    __publicField(this, _y);
    __publicField(this, _z);
    __publicField(this, _A);
    __publicField(this, "color");
    __publicField(this, "heatedBed");
    __publicField(this, _B);
    __publicField(this, _C);
    __publicField(this, _D);
    __publicField(this, _E);
    __publicField(this, "bedLevellingGraph");
    __publicField(this, _F);
    __publicField(this, _G);
    __publicField(this, "volume");
    __publicField(this, _H);
    __publicField(this, "extruder");
    __publicField(this, _I);
    __publicField(this, "connectionOptions");
    __publicField(this, _J);
    __publicField(this, "filamentID");
    __publicField(this, _K);
    __publicField(this, _L);
    __publicField(this, _M);
    __publicField(this, _N);
    __publicField(this, _O);
    __publicField(this, "whitelisted");
    __publicField(this, _P);
    var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2;
    var _0x369761 = _0x780a7e;
    this["id"] = (_a3 = _0x48cbda["id"]) != null ? _a3 : v4(), this[_0x369761(1502)] = (_b2 = _0x48cbda[_0x369761(1502)]) != null ? _b2 : _0x369761(713), this[_0x369761(2166)] = (_c2 = _0x48cbda[_0x369761(2166)]) != null ? _c2 : _0x369761(2195), this[_0x369761(765)] = _0x48cbda[_0x369761(765)], this["nanofactoryInstallDate"] = (_d2 = _0x48cbda["nanofactoryInstallDate"]) != null ? _d2 : new Date(), this[_0x369761(1168)] = (_e2 = _0x48cbda[_0x369761(1168)]) != null ? _e2 : !![], this["heatedChamber"] = (_f2 = _0x48cbda[_0x369761(553)]) != null ? _f2 : !![], this["state"] = { "status": _0x369761(1332) }, this[_0x369761(1762)] = (_g2 = _0x48cbda[_0x369761(1762)]) != null ? _g2 : { "custom_box": ![], "depth": 10, "formFactor": _0x369761(1446), "height": 20, "width": 30, "centerOrigin": ![] }, this[_0x369761(1722)] = (_h2 = _0x48cbda[_0x369761(1722)]) != null ? _h2 : 0.4, this[_0x369761(874)] = (_i2 = _0x48cbda[_0x369761(874)]) != null ? _i2 : ![], this[_0x369761(1785)] = (_j2 = _0x48cbda[_0x369761(1785)]) != null ? _j2 : 0.4, this[_0x369761(1942)] = [], this[_0x369761(575)] = { "ports": [], "baudrates": [], "autoConnect": ![], "portPreference": _0x369761(920), "baudratePreference": _0x369761(920) }, this[_0x369761(661)] = (_k2 = _0x48cbda[_0x369761(661)]) != null ? _k2 : _0x369761(383), this[_0x369761(1632)] = [], this["axes"] = { "x": { "inverted": ![], "speed": 0 }, "y": { "inverted": ![], "speed": 0 }, "z": { "inverted": ![], "speed": 0 }, "e": { "inverted": ![], "speed": 0 } }, this[_0x369761(1905)] = { "count": 1, "defaultExtrusionLength": 10, "nozzleDiameter": 0.4, "offsets": [], "sharedNozzle": ![] }, this["position"] = { "x": 0, "y": 0, "z": 0, "e": 0, "relative": ![], "speed": 0 }, this[_0x369761(903)] = "", this[_0x369761(1362)] = !![], this[_0x369761(2013)] = _0x369761(972), this[_0x369761(1277)] = { "rotate": 0, "flipH": ![], "flipV": ![] }, this[_0x369761(1454)] = !![], this[_0x369761(965)] = _0x48cbda["isMaster"], this[_0x369761(980)] = _0x48cbda[_0x369761(1882)], this[_0x369761(580)] = _0x48cbda["blacklist"];
  }
  get [(_x = _0x780a7e(1952), _y = _0x780a7e(1502), _z = _0x780a7e(2166), _A = _0x780a7e(765), _B = _0x780a7e(553), _C = _0x780a7e(874), _D = _0x780a7e(1722), _E = _0x780a7e(1785), _F = _0x780a7e(661), _G = _0x780a7e(620), _H = _0x780a7e(1852), _I = _0x780a7e(532), _J = _0x780a7e(1632), _K = _0x780a7e(1362), _L = _0x780a7e(2013), _M = _0x780a7e(1277), _N = _0x780a7e(1454), _O = _0x780a7e(965), _P = _0x780a7e(580), _0x780a7e(1220))]() {
    var _0x3b41ea = _0x780a7e;
    return this[_0x3b41ea(620)][_0x3b41ea(2036)] && this["state"][_0x3b41ea(2036)] !== _0x3b41ea(1332) && this[_0x3b41ea(620)]["status"] !== _0x3b41ea(462);
  }
  ["toString"]() {
    var _0x5bec5b = _0x780a7e;
    return this["model"] + " " + this[_0x5bec5b(765)];
  }
}
var PeerType = ((_0x518bcb) => {
  var _0x4742a6 = _0x780a7e;
  return _0x518bcb[_0x4742a6(1886)] = _0x4742a6(980), _0x518bcb[_0x4742a6(1095)] = "blacklisted", _0x518bcb;
})(PeerType || {}), PrintJobStatus = ((_0x5dd4ea) => {
  var _0x573c28 = _0x780a7e;
  return _0x5dd4ea["TOPRINT"] = _0x573c28(1354), _0x5dd4ea[_0x573c28(1776)] = _0x573c28(704), _0x5dd4ea[_0x573c28(1193)] = _0x573c28(1421), _0x5dd4ea[_0x573c28(1230)] = _0x573c28(1160), _0x5dd4ea["CANCELLED"] = _0x573c28(625), _0x5dd4ea;
})(PrintJobStatus || {});
class PrintJob$1 {
  constructor(_0x49958b) {
    __publicField(this, "id");
    __publicField(this, "printerID");
    __publicField(this, _Q);
    __publicField(this, _R);
    __publicField(this, _S);
    __publicField(this, _T);
    __publicField(this, _U);
    __publicField(this, "estimatedFilamentUsage");
    __publicField(this, _V);
    __publicField(this, _W);
    __publicField(this, "createdDate");
    __publicField(this, "startTime");
    __publicField(this, _X);
    __publicField(this, _Y);
    __publicField(this, _Z);
    __publicField(this, "filamentID");
    var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
    var _0x2fc502 = _0x780a7e;
    this["id"] = (_a3 = _0x49958b["id"]) != null ? _a3 : v4(), this[_0x2fc502(740)] = _0x49958b[_0x2fc502(740)], this["jobName"] = _0x49958b["jobName"], this["status"] = (_b2 = _0x49958b["status"]) != null ? _b2 : "To Print", this[_0x2fc502(1592)] = (_c2 = _0x49958b[_0x2fc502(1592)]) != null ? _c2 : "Unknown", this["estimatedPrintTime"] = (_d2 = _0x49958b[_0x2fc502(1425)]) != null ? _d2 : 0, this[_0x2fc502(1333)] = (_e2 = _0x49958b[_0x2fc502(1333)]) != null ? _e2 : { "length": 0, "volume": 0 }, this[_0x2fc502(1091)] = { "length": 0, "volume": 0 }, this["createdDate"] = (_f2 = _0x49958b["createdDate"]) != null ? _f2 : new Date(), this[_0x2fc502(2058)] = (_g2 = _0x49958b[_0x2fc502(2058)]) != null ? _g2 : { "completion": 0, "filePosition": 0, "printTime": 0, "printTimeLeft": 0 }, this[_0x2fc502(2130)] = (_h2 = _0x49958b["queuePosition"]) != null ? _h2 : -1, this[_0x2fc502(905)] = _0x49958b[_0x2fc502(905)], this["filamentID"] = _0x49958b["filamentID"];
    if (_0x49958b[_0x2fc502(610)])
      this[_0x2fc502(610)] = new Date(_0x49958b[_0x2fc502(610)]);
    if (_0x49958b[_0x2fc502(1708)])
      this[_0x2fc502(1708)] = new Date(_0x49958b[_0x2fc502(1708)]);
    this["lastPrintTime"] = _0x49958b[_0x2fc502(1650)];
  }
  [(_Q = _0x780a7e(1282), _R = _0x780a7e(2036), _S = _0x780a7e(1592), _T = _0x780a7e(1425), _U = _0x780a7e(1650), _V = _0x780a7e(1091), _W = _0x780a7e(2058), _X = _0x780a7e(1708), _Y = _0x780a7e(2130), _Z = _0x780a7e(905), _0x780a7e(2073))]() {
    var _0x5d5442 = _0x780a7e;
    return "" + this[_0x5d5442(1282)];
  }
}
class Filament extends Filament$1 {
  async [_0x780a7e(1503)](_0x6b93f6) {
    var _0x304ff5 = _0x780a7e;
    try {
      await db[_0x304ff5(592)][_0x304ff5(380)](this["id"], _0x6b93f6);
    } catch (_0x325092) {
      console[_0x304ff5(2165)](_0x325092);
    }
  }
  async ["add"]() {
    var _0x96ee97 = _0x780a7e;
    try {
      await db[_0x96ee97(592)]["add"](this);
    } catch (_0x485e3e) {
      console[_0x96ee97(2165)](_0x485e3e);
    }
  }
  async ["remove"]() {
    var _0x4aaa7a = _0x780a7e;
    try {
      await db[_0x4aaa7a(592)]["delete"](this["id"]);
    } catch (_0x3c4b1d) {
      console[_0x4aaa7a(2165)](_0x3c4b1d);
    }
  }
}
class NanoFactoryFile extends NanoFactoryFile$1 {
  async ["save"](_0x46b3fe) {
    var _0x4fcff6 = _0x780a7e;
    try {
      await db[_0x4fcff6(390)][_0x4fcff6(380)](this["id"], _0x46b3fe);
    } catch (_0x420e68) {
      console[_0x4fcff6(2165)](_0x420e68);
    }
  }
  async [_0x780a7e(2170)]() {
    var _0x28c510 = _0x780a7e;
    try {
      await db[_0x28c510(390)][_0x28c510(2170)](this);
    } catch (_0x2044a8) {
      console[_0x28c510(2165)](_0x2044a8);
    }
  }
  async [_0x780a7e(2026)]() {
    var _0x3155d7 = _0x780a7e;
    try {
      await db[_0x3155d7(390)][_0x3155d7(1653)](this["id"]);
    } catch (_0x3518aa) {
      console[_0x3155d7(2165)](_0x3518aa);
    }
  }
}
class Networking {
  constructor(_0x2a9de6) {
    __publicField(this, "id");
    __publicField(this, __);
    __publicField(this, _$);
    __publicField(this, _aa);
    this["id"] = _0x2a9de6;
  }
  async [(__ = _0x780a7e(1927), _$ = _0x780a7e(2005), _aa = _0x780a7e(1795), _0x780a7e(1503))](_0x2ee806) {
    var _0x453c88 = _0x780a7e;
    try {
      await db[_0x453c88(1198)][_0x453c88(380)](this["id"], _0x2ee806);
    } catch (_0x49bf76) {
      console[_0x453c88(2165)](_0x49bf76);
    }
  }
  async [_0x780a7e(2170)]() {
    var _0x51bf7b = _0x780a7e;
    try {
      await db[_0x51bf7b(1198)]["add"](this);
    } catch (_0x1c5ae1) {
      console[_0x51bf7b(2165)](_0x1c5ae1);
    }
  }
  async ["remove"]() {
    var _0x8bb637 = _0x780a7e;
    try {
      await db[_0x8bb637(1198)][_0x8bb637(1653)](this["id"]);
    } catch (_0x3f28c7) {
      console[_0x8bb637(2165)](_0x3f28c7);
    }
  }
}
class NanoFactoryPeers {
  constructor() {
    __publicField(this, "id");
    __publicField(this, _ba);
    __publicField(this, "blacklisted");
    var _0x5e25a2 = _0x780a7e;
    this["id"] = "1", this[_0x5e25a2(980)] = /* @__PURE__ */ new Map(), this["blacklisted"] = /* @__PURE__ */ new Map();
  }
  async [(_ba = _0x780a7e(980), _0x780a7e(1503))](_0x3c36e2) {
    var _0xbb9dc0 = _0x780a7e;
    try {
      await db[_0xbb9dc0(1926)][_0xbb9dc0(380)](this["id"], _0x3c36e2);
    } catch (_0x26128e) {
      console[_0xbb9dc0(2165)](_0x26128e);
    }
  }
  async [_0x780a7e(2170)]() {
    var _0x513e1d = _0x780a7e;
    try {
      await db[_0x513e1d(1926)][_0x513e1d(2170)](this);
    } catch (_0x2e2216) {
      console[_0x513e1d(2165)](_0x2e2216);
    }
  }
  async [_0x780a7e(2026)]() {
    var _0x117912 = _0x780a7e;
    try {
      await db[_0x117912(1926)]["delete"](this["id"]);
    } catch (_0x3407ae) {
      console[_0x117912(2165)](_0x3407ae);
    }
  }
  ["getJSONifiedString"](_0x8cc098) {
    var _0x57d9d4 = _0x780a7e;
    return JSON[_0x57d9d4(2063)](this[_0x8cc098], replacer);
  }
  ["getFlatMapOfAllIDs"](_0x1fc495) {
    var _0x32cb4e = _0x780a7e;
    let _0x2cf03e = [];
    return this[_0x1fc495][_0x32cb4e(839)]((_0x4b08a3, _0x398802) => {
      var _0x2a7618 = _0x32cb4e;
      _0x4b08a3[_0x2a7618(935)]["size"] > 0 ? _0x4b08a3[_0x2a7618(935)]["forEach"]((_0x17b3dd, _0x27e545) => {
        var _0x130f48 = _0x2a7618;
        _0x2cf03e[_0x130f48(1991)](_0x27e545 + "-" + _0x398802);
      }) : _0x2cf03e[_0x2a7618(1991)](_0x398802);
    }), _0x2cf03e;
  }
}
function replacer(_0x2c9d13, _0x64ad61) {
  var _0x37d9c2 = _0x780a7e;
  return _0x64ad61 instanceof Map ? { "dataType": "Map", "value": Array["from"](_0x64ad61[_0x37d9c2(1664)]()) } : _0x64ad61;
}
class Printer extends Printer$1 {
  async [_0x780a7e(1503)](_0x2b957d) {
    var _0xf5f3fc = _0x780a7e;
    try {
      await db["printer"][_0xf5f3fc(380)](this["id"], _0x2b957d);
    } catch (_0xd8a592) {
      console[_0xf5f3fc(2165)](_0xd8a592);
    }
  }
  async [_0x780a7e(2170)]() {
    var _0x17b77c = _0x780a7e;
    try {
      await db[_0x17b77c(893)][_0x17b77c(2170)](this);
    } catch (_0x56d9b2) {
      console["error"](_0x56d9b2);
    }
  }
  async [_0x780a7e(2026)]() {
    var _0x211e2e = _0x780a7e;
    try {
      await db[_0x211e2e(893)][_0x211e2e(1653)](this["id"]);
    } catch (_0x4f42df) {
      console[_0x211e2e(2165)](_0x4f42df);
    }
  }
}
class PrintJob extends PrintJob$1 {
  async ["calculatePosition"]() {
    var _0x4ca132 = _0x780a7e;
    let _0x495bfc = 0, _0x1b5a1d = await db[_0x4ca132(1486)][_0x4ca132(370)]()[_0x4ca132(910)]("queuePosition");
    _0x1b5a1d[_0x4ca132(1965)] > 0 && (_0x495bfc = _0x1b5a1d[0]["queuePosition"]), this["queuePosition"] = _0x495bfc + 1;
  }
  async [_0x780a7e(2170)](_0x22798e) {
    var _0x2d4a51 = _0x780a7e;
    try {
      _0x22798e === _0x2d4a51(1486) ? (await this["calculatePosition"](), await db[_0x2d4a51(1486)][_0x2d4a51(2170)](this)) : await db["jobsHistory"]["add"](this);
    } catch (_0x368edc) {
      console[_0x2d4a51(2165)](_0x368edc);
    }
  }
  async ["remove"](_0x1be92c) {
    var _0x4ba584 = _0x780a7e;
    try {
      _0x1be92c === _0x4ba584(1486) ? await db[_0x4ba584(1486)][_0x4ba584(1653)](this["id"]) : await db["jobsHistory"][_0x4ba584(1653)](this["id"]);
    } catch (_0xab5aa4) {
      console[_0x4ba584(2165)](_0xab5aa4);
    }
  }
  async [_0x780a7e(1503)](_0x561e01, _0x4db6aa) {
    var _0x385765 = _0x780a7e;
    try {
      _0x4db6aa === "printQueue" ? await db["printQueue"][_0x385765(380)](this["id"], _0x561e01) : db[_0x385765(470)][_0x385765(380)](this["id"], _0x561e01);
    } catch (_0x395094) {
      console[_0x385765(2165)](_0x395094);
    }
  }
  async [_0x780a7e(2126)]() {
    var _0x1dc85a = _0x780a7e;
    try {
      let _0x5db3bd = await db["filaments"]["get"](this[_0x1dc85a(903)]);
      return _0x5db3bd ? _0x5db3bd[_0x1dc85a(406)] * this["estimatedFilamentUsage"][_0x1dc85a(1762)] : 0;
    } catch (_0x3eb9fa) {
      return console["error"](_0x3eb9fa), 0;
    }
  }
  async [_0x780a7e(974)]() {
    var _0x446080 = _0x780a7e;
    try {
      let _0x150eed = await db[_0x446080(592)][_0x446080(1892)](this["filamentID"]);
      return _0x150eed ? _0x150eed[_0x446080(406)] * this[_0x446080(1091)][_0x446080(1762)] : 0;
    } catch (_0x2bad90) {
      return console[_0x446080(2165)](_0x2bad90), 0;
    }
  }
}
class Action extends Action$1 {
  async [_0x780a7e(1503)](_0x125fad) {
    var _0x379ca7 = _0x780a7e;
    try {
      await db["actions"][_0x379ca7(380)](this["id"], _0x125fad);
    } catch (_0x187010) {
      console[_0x379ca7(2165)](_0x187010);
    }
  }
  async [_0x780a7e(2170)]() {
    var _0x1124d9 = _0x780a7e;
    try {
      await db[_0x1124d9(998)][_0x1124d9(2170)](this);
    } catch (_0x2bf661) {
      console["error"](_0x2bf661);
    }
  }
  async [_0x780a7e(2026)]() {
    var _0x3bffb9 = _0x780a7e;
    try {
      await db["actions"][_0x3bffb9(1653)](this["id"]);
    } catch (_0x2b8e91) {
      console[_0x3bffb9(2165)](_0x2b8e91);
    }
  }
}
class PeerKeys extends PeerKeys$1 {
  async ["save"](_0x481516) {
    var _0x50b8ba = _0x780a7e;
    try {
      await db[_0x50b8ba(1076)][_0x50b8ba(380)](this["id"], _0x481516);
    } catch (_0x4381e1) {
      console[_0x50b8ba(2165)](_0x4381e1);
    }
  }
  async ["add"]() {
    var _0x4a6069 = _0x780a7e;
    try {
      await db[_0x4a6069(1076)][_0x4a6069(2170)](this);
    } catch (_0x5d782c) {
      console[_0x4a6069(2165)](_0x5d782c);
    }
  }
  async ["remove"]() {
    var _0x418f22 = _0x780a7e;
    try {
      await db[_0x418f22(1076)][_0x418f22(1653)](this["id"]);
    } catch (_0x149af3) {
      console[_0x418f22(2165)](_0x149af3);
    }
  }
}
class StreamToRemember {
  constructor(_0x124336, _0x175b95) {
    __publicField(this, _ca);
    __publicField(this, "streams");
    var _0x54fa80 = _0x780a7e;
    this[_0x54fa80(1927)] = _0x124336, this["streams"] = _0x175b95;
  }
  async [(_ca = _0x780a7e(1927), _0x780a7e(2170))]() {
    var _0x35e95a = _0x780a7e;
    await db[_0x35e95a(717)][_0x35e95a(2170)](this);
  }
  async [_0x780a7e(2026)]() {
    var _0x3fd06c = _0x780a7e;
    await db[_0x3fd06c(717)][_0x3fd06c(1653)](this[_0x3fd06c(1927)]);
  }
}
class NanofactoryDatabase extends Dexie$1 {
  constructor(_0x88f6c5) {
    var _0x9e5a3f = _0x780a7e;
    super(_0x88f6c5);
    __publicField(this, _da);
    __publicField(this, _ea);
    __publicField(this, _fa);
    __publicField(this, _ga);
    __publicField(this, _ha);
    __publicField(this, "nanofactoryPeers");
    __publicField(this, "jobsHistory");
    __publicField(this, _ia);
    __publicField(this, "peerKeys");
    __publicField(this, _ja);
    this[_0x9e5a3f(436)](1.7)[_0x9e5a3f(1862)]({ "printer": "id", "networking": _0x9e5a3f(604), "printQueue": _0x9e5a3f(409), "filaments": "id", "nanofactoryFiles": _0x9e5a3f(1256), "nanofactoryPeers": "id", "jobsHistory": "id, status, createdDate, filamentID", "actions": _0x9e5a3f(1477), "peerKeys": "id", "streamsToRemember": "peerID" })[_0x9e5a3f(571)]((_0x347ac2) => {
      var _0x52ea50 = _0x9e5a3f;
      _0x347ac2[_0x52ea50(2178)](_0x52ea50(1926))[_0x52ea50(2135)]()[_0x52ea50(1557)]((_0x37e2ee) => {
        delete _0x37e2ee["available"];
      });
    }), this[_0x9e5a3f(436)](1.6)[_0x9e5a3f(1862)]({ "printer": "id", "networking": _0x9e5a3f(604), "printQueue": _0x9e5a3f(409), "filaments": "id", "nanofactoryFiles": "id, filename", "nanofactoryPeers": _0x9e5a3f(486), "jobsHistory": _0x9e5a3f(354), "actions": "id, name", "peerKeys": "id", "streamsToRemember": _0x9e5a3f(1927) }), this["version"](1.5)[_0x9e5a3f(1862)]({ "printer": "id", "networking": _0x9e5a3f(604), "printQueue": _0x9e5a3f(409), "filaments": "id", "nanofactoryFiles": "id, filename", "nanofactoryPeers": _0x9e5a3f(486), "jobsHistory": _0x9e5a3f(354), "actions": "id, name", "peerKeys": "id", "streamsToRemember": _0x9e5a3f(1927) }), this["version"](1.4)[_0x9e5a3f(1862)]({ "printer": "id", "networking": _0x9e5a3f(604), "printQueue": "id,filamentID, queuePosition", "filaments": "id", "nanofactoryFiles": "id, filename", "nanofactoryPeers": _0x9e5a3f(486), "jobsHistory": _0x9e5a3f(354), "actions": _0x9e5a3f(1477), "peerKeys": "id" })[_0x9e5a3f(571)]((_0x3a5b97) => {
      var _0x293ff8 = _0x9e5a3f;
      _0x3a5b97["table"](_0x293ff8(390))[_0x293ff8(2135)]()[_0x293ff8(1557)]((_0x349ff6) => {
        var _0x1bdc37 = _0x293ff8;
        _0x349ff6[_0x1bdc37(1456)] = ![];
      });
    }), this[_0x9e5a3f(436)](1.3)[_0x9e5a3f(1862)]({ "printer": "id", "networking": _0x9e5a3f(604), "printQueue": _0x9e5a3f(409), "filaments": "id", "nanofactoryFiles": "id, filename", "nanofactoryPeers": "id, available, whitelisted, blacklisted", "jobsHistory": "id, status, createdDate, filamentID", "actions": _0x9e5a3f(1477), "peerKeys": "id" }), this[_0x9e5a3f(436)](1.2)[_0x9e5a3f(1862)]({ "printer": "id", "networking": _0x9e5a3f(604), "printQueue": _0x9e5a3f(409), "filaments": "id", "nanofactoryFiles": _0x9e5a3f(1256), "nanofactoryPeers": _0x9e5a3f(486), "jobsHistory": "id, status, createdDate, filamentID" }), this["version"](1.1)[_0x9e5a3f(1862)]({ "printer": "id", "networking": _0x9e5a3f(604), "printQueue": _0x9e5a3f(1411), "filaments": "id", "nanofactoryFiles": "id, filename", "nanofactoryPeers": _0x9e5a3f(486) }), this[_0x9e5a3f(436)](1)[_0x9e5a3f(1862)]({ "printer": "id", "networking": _0x9e5a3f(604), "printQueue": _0x9e5a3f(1411), "filaments": "id", "nanofactoryFiles": _0x9e5a3f(1256) }), this[_0x9e5a3f(893)]["mapToClass"](Printer), this[_0x9e5a3f(1198)][_0x9e5a3f(1420)](Networking), this[_0x9e5a3f(1486)][_0x9e5a3f(1420)](PrintJob), this[_0x9e5a3f(592)][_0x9e5a3f(1420)](Filament), this[_0x9e5a3f(390)][_0x9e5a3f(1420)](NanoFactoryFile), this[_0x9e5a3f(1926)][_0x9e5a3f(1420)](NanoFactoryPeers), this[_0x9e5a3f(470)][_0x9e5a3f(1420)](PrintJob), this[_0x9e5a3f(998)]["mapToClass"](Action), this[_0x9e5a3f(1076)][_0x9e5a3f(1420)](PeerKeys), this[_0x9e5a3f(717)]["mapToClass"](StreamToRemember);
  }
}
_da = _0x780a7e(893), _ea = _0x780a7e(1198), _fa = _0x780a7e(1486), _ga = _0x780a7e(592), _ha = _0x780a7e(390), _ia = _0x780a7e(998), _ja = _0x780a7e(717);
let db;
async function loadDatabase(_0x210e74) {
  var _0x287488 = _0x780a7e;
  db = new NanofactoryDatabase(_0x210e74), await db[_0x287488(1352)]();
}
var OctoPrintEndPoint = ((_0xa5c10b) => {
  var _0x4620e0 = _0x780a7e;
  return _0xa5c10b[_0x4620e0(1165)] = _0x4620e0(631), _0xa5c10b[_0x4620e0(1219)] = _0x4620e0(1998), _0xa5c10b[_0x4620e0(562)] = _0x4620e0(507), _0xa5c10b[_0x4620e0(1781)] = _0x4620e0(1967), _0xa5c10b[_0x4620e0(2108)] = "get_bed_levelling", _0xa5c10b;
})(OctoPrintEndPoint || {});
async function callOctoprintEndPoint(_0x4e964e, _0x32acb0 = _0x780a7e(1990), _0x197d69) {
  var _0x188013 = _0x780a7e;
  const _0xc21869 = BASEURL + _0x188013(1622);
  let _0x45e95b = "?";
  return _0x197d69 && Object["keys"](_0x197d69)["forEach"]((_0x474a22, _0x41d06c) => {
    if (_0x41d06c > 0)
      _0x45e95b += "&";
    _0x45e95b += _0x474a22 + "=" + _0x197d69[_0x474a22];
  }), await fetch(_0xc21869 + _0x4e964e + (_0x45e95b[_0x188013(1965)] > 1 ? _0x45e95b : ""), { "method": _0x32acb0, "headers": { "X-API-KEY": networking[_0x188013(2005)] } });
}
async function handleSecurityTasks(_0x3b95af, _0x33e9d7, _0x3aa946, _0x41e276, _0x41dfde) {
  var _0x4139cc = _0x780a7e;
  switch (_0x41e276) {
    case ConnectionLabels["peerPermissionResponse"]:
      if (!isRequestFromMaster(_0x33e9d7))
        return;
      if (isIdInAnyList(_0x3b95af[_0x4139cc(1927)]))
        return;
      _0x3b95af[_0x4139cc(1242)] ? (addToList(PeerType[_0x4139cc(1886)], _0x3b95af["peerID"], "", ""), handleSyncAllRequest(_0x3b95af["peerID"])) : addToList(PeerType[_0x4139cc(1095)], _0x3b95af[_0x4139cc(1927)], "", "");
      sendDataToAllAliases(networking[_0x4139cc(1795)], { "whitelisted": nanofactoryPeersObject["getJSONifiedString"](PeerType[_0x4139cc(1886)]), "blacklisted": nanofactoryPeersObject[_0x4139cc(1315)](PeerType[_0x4139cc(1095)]) }, ConnectionLabels["peerListModification"]);
      break;
    case ConnectionLabels[_0x4139cc(1004)]:
      if (!isRequestFromMaster(_0x33e9d7))
        return;
      if (_0x3b95af[_0x4139cc(866)] === _0x4139cc(2170))
        addToList(_0x3b95af[_0x4139cc(2097)], _0x3b95af[_0x4139cc(1927)], "", "");
      else
        _0x3b95af[_0x4139cc(866)] === _0x4139cc(1653) && removeFromList(_0x3b95af[_0x4139cc(2097)], _0x3b95af["peerID"]);
      sendDataToAllAliases(networking[_0x4139cc(1795)], { "whitelisted": nanofactoryPeersObject[_0x4139cc(1315)](PeerType[_0x4139cc(1886)]), "blacklisted": nanofactoryPeersObject[_0x4139cc(1315)](PeerType[_0x4139cc(1095)]) }, ConnectionLabels[_0x4139cc(1004)]);
      break;
    case ConnectionLabels[_0x4139cc(1154)]:
      updateUsername(_0x33e9d7, _0x3b95af["username"]);
      break;
    case ConnectionLabels["deviceNameUpdate"]:
      updateDeviceName(_0x33e9d7, _0x3b95af[_0x4139cc(1187)]);
      break;
    case ConnectionLabels[_0x4139cc(1729)]:
      removeFromList(PeerType[_0x4139cc(1886)], _0x33e9d7);
      break;
  }
}
function isRequestFromMaster(_0x3759eb) {
  var _a3;
  var _0x546b75 = _0x780a7e;
  if (networking[_0x546b75(1795)][_0x546b75(589)]("-"))
    return (_a3 = nanofactoryPeersObject[_0x546b75(980)][_0x546b75(1892)](extractGroupID(networking[_0x546b75(1795)]))) == null ? void 0 : _a3[_0x546b75(935)]["has"](extractDeviceID(_0x3759eb));
  else
    return _0x3759eb === networking[_0x546b75(1795)];
}
async function addToList(_0x32512c, _0x3b996c, _0x3967db, _0x5df2f7) {
  var _0x35b3e6 = _0x780a7e;
  _0x3b996c["includes"]("-") ? nanofactoryPeersObject[_0x32512c]["has"](extractGroupID(_0x3b996c)) ? (nanofactoryPeersObject[_0x32512c][_0x35b3e6(1892)](extractGroupID(_0x3b996c))[_0x35b3e6(935)][_0x35b3e6(2080)](extractDeviceID(_0x3b996c), _0x5df2f7), nanofactoryPeersObject[_0x32512c][_0x35b3e6(2080)](extractGroupID(_0x3b996c), { "username": _0x3967db, "devices": nanofactoryPeersObject[_0x32512c][_0x35b3e6(1892)](extractGroupID(_0x3b996c))[_0x35b3e6(935)] })) : nanofactoryPeersObject[_0x32512c][_0x35b3e6(2080)](extractGroupID(_0x3b996c), { "username": _0x3967db, "devices": /* @__PURE__ */ new Map([[extractDeviceID(_0x3b996c), _0x5df2f7]]) }) : nanofactoryPeersObject[_0x32512c][_0x35b3e6(2080)](_0x3b996c, { "username": _0x3967db, "devices": /* @__PURE__ */ new Map([]) }), await nanofactoryPeersObject[_0x35b3e6(1503)](nanofactoryPeersObject);
}
function isIdInList(_0x247fb6, _0x4343b5) {
  var _0xa9a81a = _0x780a7e;
  let _0x26a79e = ![], _0x8e1235 = _0x247fb6[_0xa9a81a(589)]("-") ? extractGroupID(_0x247fb6) : _0x247fb6;
  return nanofactoryPeersObject[_0x4343b5][_0xa9a81a(839)]((_0x5449f0, _0x1899e1) => {
    if (_0x8e1235 === _0x1899e1)
      _0x26a79e = !![];
  }), _0x26a79e;
}
function isIdInAnyList(_0x2db60b) {
  var _0x45cfc9 = _0x780a7e;
  if (isIdInList(_0x2db60b, PeerType[_0x45cfc9(1886)]))
    return !![];
  if (isIdInList(_0x2db60b, PeerType[_0x45cfc9(1095)]))
    return !![];
  return ![];
}
async function removeFromList(_0x4f9057, _0x22f47b) {
  var _a3;
  var _0x333d6a = _0x780a7e;
  if (_0x22f47b[_0x333d6a(589)]("-"))
    (_a3 = nanofactoryPeersObject[_0x4f9057][_0x333d6a(1892)](extractGroupID(_0x22f47b))) == null ? void 0 : _a3["devices"][_0x333d6a(1653)](extractDeviceID(_0x22f47b));
  else
    nanofactoryPeersObject[_0x4f9057][_0x333d6a(1653)](_0x22f47b);
  await nanofactoryPeersObject[_0x333d6a(1503)](nanofactoryPeersObject), _0x4f9057 === PeerType[_0x333d6a(1886)] && removePeerIDFromPeerIDAliasesMap(_0x22f47b);
}
function extractGroupID(_0x4f289d) {
  var _0x34b44f = _0x780a7e;
  if (_0x4f289d[_0x34b44f(1879)]("-") > 0)
    return _0x4f289d[_0x34b44f(1856)](_0x4f289d[_0x34b44f(1879)]("-") + 1);
  return "";
}
function extractDeviceID(_0x222993) {
  var _0x1c771a = _0x780a7e;
  return _0x222993[_0x1c771a(1879)]("-") > 0 ? _0x222993[_0x1c771a(1856)](0, _0x222993[_0x1c771a(1879)]("-")) : _0x222993[_0x1c771a(1856)](0, 18);
}
async function handleMasterPeerIDChange(_0x23f0ef, _0x2a0981, _0x4450bc) {
  var _0x3cc685 = _0x780a7e;
  networking[_0x3cc685(1795)] = _0x23f0ef, await networking[_0x3cc685(1503)]({ "masterPeerID": networking[_0x3cc685(1927)] }), await addToList(PeerType[_0x3cc685(1886)], networking[_0x3cc685(1795)], _0x2a0981, _0x4450bc), callOctoprintEndPoint(OctoPrintEndPoint["saveMasterPeerID"], "POST", { "master_peer_id": networking[_0x3cc685(1795)] });
}
function updateUsername(_0x3a974a, _0x4e239b) {
  var _0x4280cf = _0x780a7e;
  let _0x43298c = _0x3a974a[_0x4280cf(589)]("-") ? extractGroupID(_0x3a974a) : _0x3a974a, _0x2f4a7c = nanofactoryPeersObject[_0x4280cf(980)][_0x4280cf(1892)](_0x43298c);
  _0x2f4a7c && (_0x2f4a7c[_0x4280cf(1540)] = _0x4e239b, nanofactoryPeersObject["whitelisted"][_0x4280cf(2080)](_0x43298c, _0x2f4a7c)), nanofactoryPeersObject["save"](nanofactoryPeersObject);
}
function updateDeviceName(_0x3c6349, _0x352331) {
  var _0x357d01 = _0x780a7e;
  if (_0x3c6349[_0x357d01(589)]("-")) {
    let _0x13426e = nanofactoryPeersObject[_0x357d01(980)]["get"](extractGroupID(_0x3c6349));
    _0x13426e && (_0x13426e["devices"][_0x357d01(2080)](extractDeviceID(_0x3c6349), _0x352331), nanofactoryPeersObject[_0x357d01(980)]["set"](extractGroupID(_0x3c6349), _0x13426e));
  }
  nanofactoryPeersObject[_0x357d01(1503)](nanofactoryPeersObject);
}
let snapshotUrl, streamUrl, numberOfRestarts = 0;
const MAX_RESTARTS_COUNT = 10;
let aliveCameraStreamType = null;
const FPS = 24;
let streamWindow, stream, worker, lastCameraStreamWindowOpenTime = null, checkCameraStreamIntervalID;
const CHECK_CAMERA_STREAM_INTERVAL = 60;
async function initializeStreamUrls() {
  var _0x3c82a4 = _0x780a7e;
  snapshotUrl = (await OctoPrint[_0x3c82a4(647)][_0x3c82a4(1892)]())[_0x3c82a4(1310)][_0x3c82a4(1188)], streamUrl = (await OctoPrint[_0x3c82a4(647)][_0x3c82a4(1892)]())[_0x3c82a4(1310)]["streamUrl"];
}
function initializeSnapShotStreamWorker() {
  var _0x4f0654 = _0x780a7e;
  if (snapshotUrl) {
    streamWindow = window["open"](streamUrl, _0x4f0654(1305)), lastCameraStreamWindowOpenTime = Date[_0x4f0654(2132)](), aliveCameraStreamType = CameraType[_0x4f0654(754)];
    let _0x373bef = new Blob([document[_0x4f0654(726)](_0x4f0654(2046))[_0x4f0654(1608)]], { "type": _0x4f0654(1108) }), _0x45957b = new Worker(window[_0x4f0654(808)][_0x4f0654(385)](_0x373bef));
    _0x45957b[_0x4f0654(779)]([snapshotUrl, FPS]), _0x45957b["onmessage"] = (_0x17263c) => {
      var _0x370acb = _0x4f0654;
      if (typeof _0x17263c[_0x370acb(797)] === _0x370acb(1548))
        switch (_0x17263c[_0x370acb(797)]) {
          case _0x370acb(916):
            Date[_0x370acb(2132)]() - lastCameraStreamWindowOpenTime > 1e3 && (closeSnapshotsStreamWindow(), streamWindow = window["open"](streamUrl, "_blank"));
            break;
          case _0x370acb(361):
            stopSnapShotStreamWorker();
            numberOfRestarts < MAX_RESTARTS_COUNT && (initializeSnapShotStreamWorker(), numberOfRestarts += 1);
            break;
        }
      else
        for (let _0x2b09b6 in cameraStreamConnections) {
          cameraStreamConnections[_0x2b09b6][_0x370acb(1241)]({ "data": _0x17263c[_0x370acb(797)], "signature": new ArrayBuffer(1) });
        }
    };
  } else
    console[_0x4f0654(942)](_0x4f0654(1644));
}
function closeSnapshotsStreamWindow() {
  var _0x3f686b = _0x780a7e;
  if (streamWindow)
    streamWindow[_0x3f686b(1169)]();
}
function stopSnapShotStreamWorker() {
  var _0x39153b = _0x780a7e;
  closeSnapshotsStreamWindow(), worker == null ? void 0 : worker[_0x39153b(1132)](), worker = null, aliveCameraStreamType = null;
}
function initializeSnapshotStream(_0x3e6dae, _0x51e278) {
  var _0x39d776 = _0x780a7e;
  const _0x33b215 = { "label": ConnectionLabels[_0x39d776(692)]["toString"](), "metadata": JSON[_0x39d776(2063)]({ "peerID": networking[_0x39d776(1927)] }), "serialization": _0x39d776(1945) };
  let _0x1d9400 = peer[_0x39d776(1647)](_0x51e278, _0x33b215);
  _0x1d9400["on"]("open", function() {
    var _0x449f7d = _0x39d776;
    console["log"](_0x449f7d(1180) + _0x51e278);
    if (_0x3e6dae in cameraStreamConnections)
      cameraStreamConnections[_0x3e6dae][_0x449f7d(1991)]({ "aliasID": _0x51e278, "connection": _0x1d9400 });
    else
      cameraStreamConnections[_0x3e6dae] = [{ "aliasID": _0x51e278, "connection": _0x1d9400 }];
  }), _0x1d9400["on"](_0x39d776(1169), function() {
    var _0x37663f = _0x39d776;
    let _0xd929ee = cameraStreamConnections[_0x3e6dae][_0x37663f(1819)]((_0x2e0a9b) => _0x2e0a9b[_0x37663f(1741)] === _0x51e278);
    if (_0xd929ee === -1)
      return;
    cameraStreamConnections[_0x3e6dae][_0x37663f(1314)](_0xd929ee, 1);
  }), _0x1d9400["on"](_0x39d776(2165), function() {
    var _0x1fa32a = _0x39d776;
    let _0x18ee11 = cameraStreamConnections[_0x3e6dae][_0x1fa32a(1819)]((_0x3068db) => _0x3068db[_0x1fa32a(1741)] === _0x51e278);
    if (_0x18ee11 === -1)
      return;
    cameraStreamConnections[_0x3e6dae]["splice"](_0x18ee11, 1);
  });
}
function stopStreamFromWebcam() {
  var _0x46939d = _0x780a7e;
  stream == null ? void 0 : stream[_0x46939d(1817)]()[_0x46939d(839)](function(_0x4b6e03) {
    _0x4b6e03["stop"]();
  }), aliveCameraStreamType = null;
}
async function initializeStreamFromWebcam() {
  var _0x42e6c7 = _0x780a7e;
  if (aliveCameraStreamType === CameraType[_0x42e6c7(2025)])
    return;
  aliveCameraStreamType = CameraType[_0x42e6c7(2025)];
  try {
    stream = await navigator["mediaDevices"][_0x42e6c7(1645)]({ "video": { "width": 640, "height": 480, "facingMode": _0x42e6c7(732) } });
  } catch (_0x65f8aa) {
    console[_0x42e6c7(2165)](_0x65f8aa);
  }
}
function stopCameraStream() {
  var _0x453750 = _0x780a7e;
  if (aliveCameraStreamType === CameraType[_0x453750(2025)])
    stopStreamFromWebcam();
  else {
    if (aliveCameraStreamType === CameraType[_0x453750(754)])
      stopSnapShotStreamWorker();
  }
  clearInterval(checkCameraStreamIntervalID);
}
async function handleCameraStreamRequest(_0x6ffaa3, _0x977fa, _0x3579f0) {
  var _0x459c28 = _0x780a7e;
  if (_0x6ffaa3["cameraType"] === CameraType[_0x459c28(754)]) {
    await initializeStreamUrls();
    if (!worker)
      initializeSnapShotStreamWorker();
    initializeSnapshotStream(_0x977fa, _0x3579f0);
  } else {
    if (_0x6ffaa3[_0x459c28(1233)] === CameraType[_0x459c28(2025)]) {
      if (!(stream == null ? void 0 : stream["active"]))
        await initializeStreamFromWebcam();
      if (_0x977fa in cameraStreamConnections)
        cameraStreamConnections[_0x977fa]["push"]({ "aliasID": _0x3579f0, "connection": streamToPeers(_0x3579f0, stream, ConnectionLabels["cameraStreamResponse"]) });
      else
        cameraStreamConnections[_0x977fa] = [{ "aliasID": _0x3579f0, "connection": streamToPeers(_0x3579f0, stream, ConnectionLabels[_0x459c28(692)]) }];
    }
  }
  if (!checkCameraStreamIntervalID)
    checkCameraStreamIntervalID = setInterval(checkCameraStreamUsers, CHECK_CAMERA_STREAM_INTERVAL * 1e3);
}
function checkCameraStreamUsers() {
  var _0x3e0fe4 = _0x780a7e;
  if (Object[_0x3e0fe4(605)](cameraStreamConnections)[_0x3e0fe4(1965)] == 0)
    stopCameraStream();
}
var FileSharingCause = ((_0x11d7b1) => {
  var _0xcb96bf = _0x780a7e;
  return _0x11d7b1[_0xcb96bf(1641)] = _0xcb96bf(788), _0x11d7b1["PRINT_JOB"] = "print_job", _0x11d7b1["SHARING_VIA_URL"] = _0xcb96bf(593), _0x11d7b1[_0xcb96bf(520)] = _0xcb96bf(1970), _0x11d7b1;
})(FileSharingCause || {});
function handleFileSharing(_0x17515c, _0x5c72f6, _0xbcd859, _0x5ad7fa, _0x48e10c, _0x3cbc74) {
  var _0x4134da = _0x780a7e;
  switch (_0x5ad7fa) {
    case ConnectionLabels["fileRequest"]:
      handleFileRequest(_0x17515c, _0x5c72f6, _0xbcd859);
      break;
    case ConnectionLabels[_0x4134da(1941)]:
      handleFileResponse(_0x17515c, _0x5c72f6, _0xbcd859, _0x48e10c, _0x3cbc74);
      break;
  }
}
async function handleFileRequest(_0x38e8d2, _0x51d85c, _0x231266) {
  var _0x128e0d = _0x780a7e;
  switch (_0x38e8d2[_0x128e0d(1343)]) {
    case _0x128e0d(1970):
      let _0x460b77;
      try {
        _0x460b77 = await db[_0x128e0d(998)][_0x128e0d(1892)](_0x38e8d2["id"]);
      } catch (_0xf295b5) {
        console["error"](_0xf295b5);
        return;
      }
      if (!_0x460b77)
        return;
      let _0xb97b5e = _0x460b77[_0x128e0d(747)];
      delete _0x460b77["script"], sendFile(_0x51d85c, _0x231266, _0xb97b5e, { "file": _0x460b77, "cause": _0x128e0d(1970) }, ConnectionLabels["fileResponse"]);
      break;
  }
}
function handleFileResponse(_0x6bc18a, _0x1ae8ea, _0x205d44, _0x4054ab, _0x20ce40) {
  var _0x9da89e = _0x780a7e;
  switch (_0x4054ab["cause"]) {
    case _0x9da89e(781):
      handleJob(_0x6bc18a, _0x1ae8ea, _0x205d44, ConnectionLabels[_0x9da89e(1941)], _0x4054ab, _0x20ce40);
      break;
  }
}
let currentJobFilamentUsageLength = 0, currentJobExpectedFilamentUsage = { "length": 0, "volume": 0 }, pendingFileAndJob = [], idsOfFilesWithDuplicateFileNamesToSend = [];
async function handleJob(_0x10d4bc, _0x3a1ee3, _0x12b75a, _0x3d664c, _0x5c95d3, _0x3f832f) {
  var _0x545ebd = _0x780a7e;
  switch (_0x3d664c) {
    case ConnectionLabels[_0x545ebd(1439)]:
      let _0xf53c8f = await db["printQueue"][_0x545ebd(1892)](_0x10d4bc["id"]);
      !_0xf53c8f && (_0xf53c8f = new PrintJob(_0x10d4bc));
      let _0x56d588;
      try {
        _0x56d588 = await db[_0x545ebd(390)]["get"](_0xf53c8f[_0x545ebd(905)]);
      } catch (_0x1e1be3) {
        console["error"](_0x1e1be3);
        return;
      }
      _0x56d588 ? (await _0xf53c8f[_0x545ebd(2170)](_0x545ebd(1486)), addJobToQueue(_0x56d588, _0xf53c8f)) : (pendingFileAndJob[_0x545ebd(1991)]({ "fileID": _0xf53c8f[_0x545ebd(905)], "job": _0xf53c8f }), requestFileFromPeer(_0x3a1ee3, _0x12b75a, _0xf53c8f[_0x545ebd(905)], FileSharingCause[_0x545ebd(1223)]));
      break;
    case ConnectionLabels[_0x545ebd(1941)]:
      let _0x1f04a1 = _0x5c95d3[_0x545ebd(1745)], _0x256116 = new NanoFactoryFile({ ..._0x1f04a1, "fileContent": new Blob([_0x3f832f], { "type": _0x545ebd(1325) }) });
      await _0x256116[_0x545ebd(2170)]();
      let _0x2b1893 = pendingFileAndJob["findIndex"]((_0x45cabc) => _0x45cabc[_0x545ebd(905)] == _0x256116["id"]);
      if (_0x2b1893 == -1) {
        console["log"](_0x545ebd(2096), _0x256116);
        return;
      }
      let _0x25d0b1 = pendingFileAndJob[_0x2b1893][_0x545ebd(1469)];
      pendingFileAndJob[_0x545ebd(1314)](_0x2b1893, 1), await _0x25d0b1[_0x545ebd(2170)](_0x545ebd(1486)), addJobToQueue(_0x256116, _0x25d0b1);
      break;
    case ConnectionLabels[_0x545ebd(1866)]:
      let _0x5e78a9;
      try {
        _0x5e78a9 = await db[_0x545ebd(1486)][_0x545ebd(1892)](_0x10d4bc[_0x545ebd(1195)]);
      } catch (_0x2d7f57) {
        console[_0x545ebd(2165)](_0x2d7f57);
        return;
      }
      if (!_0x5e78a9)
        return;
      let _0x575c3a = new NanoFactoryFile({ ..._0x5c95d3, "fileContent": new Blob([_0x3f832f], { "type": _0x545ebd(1325) }) });
      await _0x575c3a["add"](), _0x5e78a9[_0x545ebd(905)] = _0x575c3a["id"], _0x5e78a9[_0x545ebd(1503)]({ "fileID": _0x5e78a9[_0x545ebd(905)] }, "printQueue"), await sendFileToOctoPrint(new File([_0x575c3a[_0x545ebd(1376)]], _0x5e78a9[_0x545ebd(1282)] + ".gcode"));
      break;
    case ConnectionLabels["currentJobUpdatesRequest"]:
      sendCurrentJobUpdates(_0x3a1ee3, _0x12b75a);
      break;
    case ConnectionLabels[_0x545ebd(2040)]:
      let _0x460926;
      try {
        _0x460926 = await db[_0x545ebd(1486)][_0x545ebd(1892)](_0x10d4bc["id"]);
      } catch (_0x2c02ad) {
        console["error"](_0x2c02ad);
        return;
      }
      _0x460926 && (localStorage[_0x545ebd(381)](CURRENT_JOB_ID_KEY) == _0x460926["id"] ? OctoPrint["job"][_0x545ebd(606)]() : (_0x460926[_0x545ebd(2036)] = PrintJobStatus["CANCELLED"], _0x460926[_0x545ebd(2170)](_0x545ebd(470)), _0x460926[_0x545ebd(2026)](_0x545ebd(1486))));
      break;
    case ConnectionLabels[_0x545ebd(447)]:
      let _0xe225ef;
      try {
        _0xe225ef = await db[_0x545ebd(1486)][_0x545ebd(1892)](_0x10d4bc["id"]);
      } catch (_0x785521) {
        console["error"](_0x785521);
        return;
      }
      _0xe225ef && _0xe225ef[_0x545ebd(2026)](_0x545ebd(1486));
      break;
    case ConnectionLabels[_0x545ebd(1966)]:
      let _0x848211;
      try {
        _0x848211 = await db[_0x545ebd(1486)][_0x545ebd(1892)](_0x10d4bc["id"]);
      } catch (_0x3cd5e8) {
        console["error"](_0x3cd5e8);
        return;
      }
      _0x848211 && (_0x848211[_0x545ebd(2130)] = _0x10d4bc["queuePosition"], _0x848211["save"]({ "queuePosition": _0x848211[_0x545ebd(2130)] }, _0x545ebd(1486)));
      sendDataToAllAvailablePeers({ "data": _0x10d4bc }, ConnectionLabels[_0x545ebd(1966)]);
      break;
    case ConnectionLabels[_0x545ebd(650)]:
      pauseJob();
      break;
    case ConnectionLabels[_0x545ebd(1073)]:
      localStorage[_0x545ebd(381)](CURRENT_JOB_ID_KEY)[_0x545ebd(1965)] > 0 ? OctoPrint[_0x545ebd(1469)][_0x545ebd(845)]() : startQueue();
      break;
    case ConnectionLabels[_0x545ebd(397)]:
      let _0x5f1761;
      try {
        _0x5f1761 = await db[_0x545ebd(1486)]["get"](_0x10d4bc["id"]);
      } catch (_0x4bf6db) {
        console[_0x545ebd(2165)](_0x4bf6db);
        return;
      }
      _0x5f1761 && (_0x5f1761[_0x545ebd(903)] = _0x10d4bc["filamentID"], _0x5f1761["save"]({ "filamentID": _0x5f1761["filamentID"] }, _0x545ebd(1486)), sendDataToAllAvailablePeers({ "data": { "id": _0x5f1761["id"], "filamentID": _0x5f1761[_0x545ebd(903)] } }, ConnectionLabels[_0x545ebd(397)]));
      break;
    case ConnectionLabels[_0x545ebd(2012)]:
      let _0x251490;
      try {
        _0x251490 = await db["nanofactoryFiles"][_0x545ebd(1892)](_0x10d4bc["id"]);
      } catch (_0x523427) {
        console["error"](_0x523427);
        return;
      }
      if (!_0x251490)
        return;
      delete _0x251490[_0x545ebd(1376)], sendData(_0x3a1ee3, _0x12b75a, _0x251490, ConnectionLabels["fileMetadataResponse"]);
      break;
    case ConnectionLabels[_0x545ebd(2064)]:
      let _0x136d14;
      try {
        _0x136d14 = await db[_0x545ebd(470)][_0x545ebd(1892)](_0x10d4bc["id"]);
      } catch (_0x5d8e78) {
        console[_0x545ebd(2165)](_0x5d8e78);
        return;
      }
      if (!_0x136d14)
        return;
      await _0x136d14[_0x545ebd(1503)](_0x10d4bc, _0x545ebd(470)), sendDataToAllAvailablePeers({ "data": _0x10d4bc }, ConnectionLabels["modifyCompletedJob"]);
      break;
  }
}
async function octoprintFileUploadGuard(_0x18523d) {
  var _0x560dc2 = _0x780a7e;
  if (printer[_0x560dc2(620)][_0x560dc2(2036)] === PrinterStatus["printing"] && localStorage["getItem"](CURRENT_JOB_ID_KEY)) {
    let _0x4139b0;
    try {
      _0x4139b0 = await db[_0x560dc2(390)][_0x560dc2(1892)]((await db[_0x560dc2(1486)][_0x560dc2(1892)](localStorage[_0x560dc2(381)](CURRENT_JOB_ID_KEY)))["fileID"]);
    } catch (_0x264e75) {
      console["error"](_0x264e75);
      return;
    }
    if (_0x4139b0[_0x560dc2(1338)] === _0x18523d[_0x560dc2(1338)])
      return _0x4139b0["id"] !== _0x18523d["id"] && idsOfFilesWithDuplicateFileNamesToSend[_0x560dc2(1991)](_0x18523d["id"]), ![];
  }
  return !![];
}
async function addJobToQueue(_0x1a4597, _0xb45d7d) {
  var _0x2f32d1 = _0x780a7e;
  if (await octoprintFileUploadGuard(_0x1a4597))
    await sendFileToOctoPrint(new File([_0x1a4597["fileContent"]], _0xb45d7d[_0x2f32d1(1282)] + _0x2f32d1(1574)));
  sendDataToAllAvailablePeers({ "data": _0xb45d7d }, ConnectionLabels[_0x2f32d1(1439)]), printer[_0x2f32d1(620)][_0x2f32d1(2036)] === PrinterStatus[_0x2f32d1(1267)] && startQueue();
}
async function sendFileToOctoPrint(_0x260324) {
  var _0x117441 = _0x780a7e;
  await OctoPrint[_0x117441(1550)][_0x117441(1130)]("local", _0x260324);
}
async function startQueue() {
  var _0x511ad7 = _0x780a7e;
  let _0x2500b4;
  try {
    _0x2500b4 = (await db[_0x511ad7(1486)][_0x511ad7(609)](_0x511ad7(2130))[_0x511ad7(2136)]())[0];
  } catch (_0x4a2fa8) {
    console[_0x511ad7(2165)](_0x4a2fa8);
    return;
  }
  if (printer[_0x511ad7(903)] === _0x2500b4[_0x511ad7(903)]) {
    if (!await fileExistsInOctoprintLocalStorage(_0x2500b4[_0x511ad7(1282)] + _0x511ad7(1574))) {
      sendDataToAllAvailablePeers({ "data": { "id": _0x2500b4["id"] } }, ConnectionLabels[_0x511ad7(1461)]);
      return;
    }
    localStorage[_0x511ad7(1124)](CURRENT_JOB_ID_KEY, _0x2500b4["id"]), _0x2500b4[_0x511ad7(610)] = new Date(), _0x2500b4[_0x511ad7(2036)] = PrintJobStatus[_0x511ad7(1776)], _0x2500b4[_0x511ad7(1503)]({ "startTime": _0x2500b4[_0x511ad7(610)], "status": _0x2500b4[_0x511ad7(2036)] }, _0x511ad7(1486)), OctoPrint["files"][_0x511ad7(1594)](_0x511ad7(1858), _0x2500b4[_0x511ad7(1282)] + _0x511ad7(1574), !![]), printer[_0x511ad7(1362)] = ![], printer[_0x511ad7(2013)] = QueuePausedReason["queueNotPaused"], printer[_0x511ad7(1503)]({ "isQueuePaused": printer["isQueuePaused"], "queuePausedReason": printer[_0x511ad7(2013)] });
  } else
    sendDataToAllAvailablePeers({ "data": QueuePausedReason["filamentMismatch"] }, ConnectionLabels["queuePaused"]), printer["queuePausedReason"] = QueuePausedReason["filamentMismatch"], printer[_0x511ad7(1503)]({ "queuePausedReason": printer[_0x511ad7(2013)] });
}
function sendCurrentJobUpdates(_0x57fa29, _0x491548) {
  var _0x35d35f = _0x780a7e;
  const _0x4e67da = { "label": ConnectionLabels[_0x35d35f(680)][_0x35d35f(2073)](), "metadata": JSON[_0x35d35f(2063)]({ "peerID": networking[_0x35d35f(1927)] }), "serialization": _0x35d35f(1945) };
  let _0x48daa4 = peer[_0x35d35f(1647)](_0x491548, _0x4e67da);
  _0x48daa4["on"]("open", function() {
    var _0xe4b72c = _0x35d35f;
    if (_0x57fa29 in jobProgressConnections)
      jobProgressConnections[_0x57fa29][_0xe4b72c(1991)]({ "aliasID": _0x491548, "connection": _0x48daa4 });
    else
      jobProgressConnections[_0x57fa29] = [{ "aliasID": _0x491548, "connection": _0x48daa4 }];
  }), _0x48daa4["on"](_0x35d35f(1169), function() {
    var _0x4f8a3e = _0x35d35f;
    let _0x49504f = jobProgressConnections[_0x57fa29][_0x4f8a3e(1819)]((_0x467e4f) => _0x467e4f["aliasID"] === _0x491548);
    if (_0x49504f === -1)
      return;
    jobProgressConnections[_0x57fa29][_0x4f8a3e(1314)](_0x49504f, 1);
  }), _0x48daa4["on"](_0x35d35f(2165), function() {
    var _0x9ab15f = _0x35d35f;
    let _0x876506 = jobProgressConnections[_0x57fa29][_0x9ab15f(1819)]((_0x414aec) => _0x414aec[_0x9ab15f(1741)] === _0x491548);
    if (_0x876506 === -1)
      return;
    jobProgressConnections[_0x57fa29]["splice"](_0x876506, 1);
  });
}
function pauseJob() {
  var _0x14d5b5 = _0x780a7e;
  OctoPrint[_0x14d5b5(1469)][_0x14d5b5(1818)]();
}
function resetCurrentJob() {
  localStorage["setItem"](CURRENT_JOB_ID_KEY, ""), currentJobFilamentUsageLength = 0, resetCurrentJobPrintTimeLeft();
}
function updateCurrentJobFilamentUsageLength(_0x24a012) {
  currentJobFilamentUsageLength += _0x24a012;
}
function assignCurrentJobExpectedFilamentUsage(_0x399781) {
  currentJobExpectedFilamentUsage = _0x399781;
}
function removeFileIdFromIdsOfDuplicateFilesArray(_0x91668b) {
  var _0x5e2549 = _0x780a7e;
  idsOfFilesWithDuplicateFileNamesToSend[_0x5e2549(1314)](_0x91668b, 1);
}
function initializeLocalStorage() {
  var _0x1a54ac = _0x780a7e;
  !localStorage[_0x1a54ac(381)](CURRENT_JOB_ID_KEY) && localStorage[_0x1a54ac(1124)](CURRENT_JOB_ID_KEY, "");
}
async function handleJobFinished(_0x5157d4) {
  var _0x1d7e39 = _0x780a7e;
  let _0x36601e = getLabelsFromOctoprintEvent(_0x5157d4), _0x38848b;
  try {
    _0x38848b = await db[_0x1d7e39(1486)][_0x1d7e39(1892)](localStorage[_0x1d7e39(381)](CURRENT_JOB_ID_KEY));
  } catch (_0x43d1dc) {
    console[_0x1d7e39(2165)](_0x43d1dc);
    return;
  }
  let _0x2f5001 = { "endTime": new Date()[_0x1d7e39(1957)](), "status": _0x36601e[_0x1d7e39(1686)], "actualFilamentUsage": { "length": currentJobFilamentUsageLength, "volume": 0 }, "expectedFilamentUsage": currentJobExpectedFilamentUsage };
  _0x38848b && (Object["keys"](_0x2f5001)["forEach"]((_0x10d59d) => {
    _0x38848b[_0x10d59d] = _0x2f5001[_0x10d59d];
  }), await _0x38848b[_0x1d7e39(1503)](_0x2f5001, _0x1d7e39(1486)), _0x38848b["add"](_0x1d7e39(470)), _0x38848b[_0x1d7e39(2026)](_0x1d7e39(1486)));
  if (localStorage[_0x1d7e39(381)](CURRENT_JOB_ID_KEY) !== "")
    sendDataToAllAvailablePeers({ "data": { "id": localStorage[_0x1d7e39(381)](CURRENT_JOB_ID_KEY), ..._0x2f5001 } }, _0x36601e[_0x1d7e39(1396)]);
  sendDataToAllAvailablePeers({ "data": _0x36601e[_0x1d7e39(2013)] }, ConnectionLabels[_0x1d7e39(1863)]), resetCurrentJob(), printer[_0x1d7e39(1362)] = !![], printer["queuePausedReason"] = _0x36601e[_0x1d7e39(2013)], printer[_0x1d7e39(1503)]({ "isQueuePaused": printer["isQueuePaused"], "queuePausedReason": printer["queuePausedReason"] });
}
async function fileExistsInOctoprintLocalStorage(_0x3f3a4d) {
  var _0x1dd739 = _0x780a7e;
  try {
    return await OctoPrint["files"][_0x1dd739(1892)]("local", _0x3f3a4d);
  } catch (_0x3d0f4c) {
    return ![];
  }
}
var socketEventTypes = ((_0x3607f5) => {
  var _0x2d9bec = _0x780a7e;
  return _0x3607f5[_0x2d9bec(1740)] = _0x2d9bec(1245), _0x3607f5[_0x2d9bec(1438)] = _0x2d9bec(2119), _0x3607f5[_0x2d9bec(1869)] = _0x2d9bec(1113), _0x3607f5[_0x2d9bec(1709)] = _0x2d9bec(858), _0x3607f5["EVENT"] = _0x2d9bec(1701), _0x3607f5[_0x2d9bec(694)] = _0x2d9bec(1606), _0x3607f5;
})(socketEventTypes || {}), OctoPrintEventTypes = ((_0x5872a7) => {
  var _0x1364c6 = _0x780a7e;
  return _0x5872a7[_0x1364c6(566)] = "PrinterStateChanged", _0x5872a7["PRINTSTARTED"] = _0x1364c6(986), _0x5872a7["PRINTDONE"] = _0x1364c6(861), _0x5872a7[_0x1364c6(1405)] = _0x1364c6(1743), _0x5872a7["PRINTCANCELLED"] = _0x1364c6(2052), _0x5872a7;
})(OctoPrintEventTypes || {});
let bedLevelingRequests = [], printerTemperatureHistory = [], customGcodeLinesToExecute = [], currentlyExecutingActionID = "", PRINTER_POSITION_SAVE_INTERVAL = 10;
const BED_LEVELLING_TIMEOUT = 60, BED_LEVELLING_RESPONSE_INTERVAL = 10, BED_LEVELLING_MAX_TRIES = 60, PRINTER_PROFILE_CHANGES_TO_IGNORE = [_0x780a7e(1277)], PRINTER_STATE_MAP = { "Operational": PrinterStatus[_0x780a7e(1267)], "Printing": PrinterStatus[_0x780a7e(1176)], "Paused": PrinterStatus[_0x780a7e(703)], "Pausing": PrinterStatus[_0x780a7e(703)], "Cancelling": PrinterStatus["printing"], "Error": PrinterStatus[_0x780a7e(2165)], "Offline": PrinterStatus["offline"], "Starting": PrinterStatus[_0x780a7e(1176)], "Resuming": PrinterStatus[_0x780a7e(1176)], "Finishing": PrinterStatus[_0x780a7e(1176)], [PrinterStatus[_0x780a7e(1997)]]: PrinterStatus[_0x780a7e(1997)] };
let numberOfBedlevellingResponseTries = 0;
async function handlePrinter(_0x302715, _0x4ff8b9, _0x369011, _0x44d2ee, _0x2a2791) {
  var _0x520d78 = _0x780a7e;
  switch (_0x44d2ee) {
    case ConnectionLabels["connectPrinter"]:
      connectPrinter(_0x302715[_0x520d78(2071)], _0x302715[_0x520d78(2029)], _0x302715[_0x520d78(1190)], _0x302715[_0x520d78(1503)]);
      break;
    case ConnectionLabels[_0x520d78(1982)]:
      OctoPrint[_0x520d78(2089)][_0x520d78(828)]();
      break;
    case ConnectionLabels["executeCustomGcode"]:
      customGcodeLinesToExecute[_0x520d78(1991)](..._0x302715["data"]), await executeCustomGcode();
      break;
    case ConnectionLabels[_0x520d78(516)]:
      startTemperatureStream(_0x4ff8b9, _0x369011);
      break;
    case ConnectionLabels[_0x520d78(1983)]:
      if (printer[_0x520d78(903)])
        OctoPrint["printer"][_0x520d78(1611)](_0x302715["data"]);
      break;
    case ConnectionLabels[_0x520d78(442)]:
      OctoPrint["printer"]["home"](_0x302715["axes"]);
      break;
    case ConnectionLabels[_0x520d78(1447)]:
      startTerminalStream(_0x4ff8b9, _0x369011);
      break;
    case ConnectionLabels["targetBed"]:
      if (_0x302715[_0x520d78(797)])
        OctoPrint[_0x520d78(893)]["setBedTargetTemperature"](parseFloat(_0x302715[_0x520d78(797)]));
      break;
    case ConnectionLabels[_0x520d78(770)]:
      if (_0x302715["data"])
        OctoPrint["printer"][_0x520d78(2161)]({ "tool0": parseFloat(_0x302715[_0x520d78(797)]) });
      break;
    case ConnectionLabels["targetChamber"]:
      if (_0x302715["data"])
        OctoPrint[_0x520d78(893)][_0x520d78(937)](parseFloat(_0x302715[_0x520d78(797)]));
      break;
    case ConnectionLabels[_0x520d78(1790)]:
      handleJog(_0x302715);
      break;
    case ConnectionLabels[_0x520d78(395)]:
      startPositionChangedStream(_0x4ff8b9, _0x369011);
      break;
    case ConnectionLabels[_0x520d78(1075)]:
      customGcodeLinesToExecute = [], await executeCustomGcode("M112");
      break;
    case ConnectionLabels[_0x520d78(843)]:
      sendDataToAllAvailablePeers(_0x302715, ConnectionLabels[_0x520d78(843)], [_0x369011]);
      let _0x23ba0c = Object[_0x520d78(605)](_0x302715)["length"];
      while (_0x23ba0c--) {
        let _0x4778e2 = Object[_0x520d78(605)](_0x302715)[_0x23ba0c];
        printer[_0x4778e2] = _0x302715[_0x4778e2];
        _0x4778e2[_0x520d78(589)](_0x520d78(1695)) && (_0x302715[_0x4778e2] !== aliveCameraStreamType && stopCameraStream());
        if (_0x4778e2[_0x520d78(589)]("."))
          _0x4778e2 = _0x4778e2[_0x520d78(1856)](0, _0x4778e2["indexOf"]("."));
        if (PRINTER_PROFILE_CHANGES_TO_IGNORE[_0x520d78(589)](_0x4778e2))
          delete _0x302715[_0x4778e2];
      }
      printer[_0x520d78(1503)](printer);
      let _0x764cf = Object[_0x520d78(605)](_0x302715)[_0x520d78(1965)], _0x5747ac = {};
      while (_0x764cf--) {
        let _0x562ca6 = Object[_0x520d78(605)](_0x302715)[_0x764cf];
        if (_0x562ca6[_0x520d78(589)](".")) {
          let _0x136180 = dotNotationToObject(_0x562ca6, _0x302715[_0x562ca6]);
          _0x5747ac = { ..._0x5747ac, ..._0x136180 };
        } else
          _0x5747ac[_0x562ca6] = _0x302715[_0x562ca6];
      }
      console[_0x520d78(942)](_0x520d78(1831), _0x5747ac), OctoPrint[_0x520d78(1087)][_0x520d78(380)](_0x520d78(1086), _0x5747ac);
      break;
    case ConnectionLabels["refreshConnectionOptions"]:
      await saveConnectionOptions(), sendData(_0x4ff8b9, _0x369011, printer["connectionOptions"], ConnectionLabels[_0x520d78(1064)]);
      break;
    case ConnectionLabels[_0x520d78(429)]:
      bedLevelingRequests["push"](_0x369011), callOctoprintEndPoint(OctoPrintEndPoint[_0x520d78(562)], "GET"), getBedLevellingResponse();
      break;
  }
}
function getBedLevellingResponse() {
  numberOfBedlevellingResponseTries = 0, setTimeout(() => {
    let _0x5252a8 = setInterval(async () => {
      var _0x382027 = _0x3001;
      if (numberOfBedlevellingResponseTries < BED_LEVELLING_MAX_TRIES) {
        numberOfBedlevellingResponseTries += 1;
        let _0x254a97 = await (await callOctoprintEndPoint(OctoPrintEndPoint[_0x382027(2108)], _0x382027(1990)))[_0x382027(962)]();
        if (_0x382027(797) in _0x254a97) {
          clearInterval(_0x5252a8), printer["bedLevellingGraph"] = _0x254a97["data"], printer[_0x382027(1503)]({ "bedLevellingGraph": printer[_0x382027(1942)] });
          for (let _0x33f124 = bedLevelingRequests[_0x382027(1965)] - 1; _0x33f124 > -1; _0x33f124--) {
            sendData(peerID, bedLevelingRequests[_0x33f124], { "data": printer[_0x382027(1942)] }, ConnectionLabels["bedLevelingResponse"]), bedLevelingRequests[_0x382027(1466)]();
          }
        }
      }
    }, BED_LEVELLING_RESPONSE_INTERVAL * 1e3);
  }, BED_LEVELLING_TIMEOUT * 1e3);
}
async function executeCustomGcode(_0x1c94e6) {
  var _0x3043fe = _0x780a7e;
  if (!_0x1c94e6) {
    _0x1c94e6 = customGcodeLinesToExecute[_0x3043fe(2002)]();
    if (!_0x1c94e6) {
      printer[_0x3043fe(620)][_0x3043fe(2036)] === PrinterStatus["executingAction"] && changePrinterStatusForAction(![]);
      return;
    }
  }
  await OctoPrint[_0x3043fe(1117)][_0x3043fe(1378)](_0x1c94e6);
}
async function savePrinterProfile() {
  var _0x2f8aeb = _0x780a7e;
  let _0x1ab33f = await OctoPrint[_0x2f8aeb(1087)][_0x2f8aeb(1892)](_0x2f8aeb(1086));
  _0x1ab33f["id"] = peer["id"], delete _0x1ab33f["default"], delete _0x1ab33f["current"], delete _0x1ab33f[_0x2f8aeb(2004)], _0x1ab33f["position"] = { "x": 0, "y": 0, "z": 0, "e": 0, "relative": ![], "speed": 0 }, await printer[_0x2f8aeb(1503)](_0x1ab33f);
}
async function saveConnectionOptions() {
  var _0x145a5d = _0x780a7e;
  printer[_0x145a5d(575)] = (await OctoPrint[_0x145a5d(2089)]["getSettings"]())[_0x145a5d(686)], await printer[_0x145a5d(1503)]({ "connectionOptions": printer[_0x145a5d(575)] });
}
async function updatePrinterStateAndTemperature() {
  var _a3;
  var _0x1a5192 = _0x780a7e;
  const _0x2beee7 = 50;
  let _0x12d652 = {};
  try {
    _0x12d652 = await OctoPrint[_0x1a5192(893)][_0x1a5192(1192)]({ "history": !![], "limit": _0x2beee7 });
  } catch (_0x2eeed0) {
    _0x12d652 = { "state": { "text": "Offline" } };
  }
  let _0x5506c7 = convertPrinterState(_0x12d652[_0x1a5192(620)][_0x1a5192(1918)]);
  _0x5506c7 !== ((_a3 = printer[_0x1a5192(620)]) == null ? void 0 : _a3["status"]) && (sendDataToAllAvailablePeers({ "status": _0x5506c7 }, ConnectionLabels[_0x1a5192(1264)]), (_0x5506c7 !== PrinterStatus[_0x1a5192(1176)] || printer["state"]["status"] !== PrinterStatus["paused"]) && handleJobFinished(OctoPrintEventTypes["PRINTCANCELLED"])), printer["state"] = { "status": _0x5506c7 }, _0x1a5192(723) in _0x12d652 && (printerTemperatureHistory = _0x12d652["temperature"][_0x1a5192(1113)]), await printer[_0x1a5192(1503)]({ "state": printer[_0x1a5192(620)], "temperatureHistory": printerTemperatureHistory });
}
function convertPrinterState(_0x56ab15) {
  var _a3;
  return (_a3 = PRINTER_STATE_MAP[_0x56ab15]) != null ? _a3 : PrinterStatus["offline"];
}
function startTemperatureStream(_0xe391c5, _0x3f79b7) {
  var _0x33229 = _0x780a7e;
  const _0x1cd599 = { "label": ConnectionLabels[_0x33229(1074)]["toString"](), "metadata": JSON[_0x33229(2063)]({ "peerID": networking[_0x33229(1927)] }), "serialization": "binary" };
  let _0x9a34be = peer[_0x33229(1647)](_0x3f79b7, _0x1cd599);
  _0x9a34be["on"](_0x33229(1352), function() {
    var _0x30440e = _0x33229;
    if (_0xe391c5 in temperatureStreamConnections)
      temperatureStreamConnections[_0xe391c5][_0x30440e(1991)]({ "aliasID": _0x3f79b7, "connection": _0x9a34be });
    else
      temperatureStreamConnections[_0xe391c5] = [{ "aliasID": _0x3f79b7, "connection": _0x9a34be }];
  }), _0x9a34be["on"](_0x33229(1169), function() {
    var _0x5fed2b = _0x33229;
    let _0x1ab508 = temperatureStreamConnections[_0xe391c5][_0x5fed2b(1819)]((_0xbc8216) => _0xbc8216[_0x5fed2b(1741)] === _0x3f79b7);
    if (_0x1ab508 === -1)
      return;
    temperatureStreamConnections[_0xe391c5][_0x5fed2b(1314)](_0x1ab508, 1);
  }), _0x9a34be["on"]("error", function() {
    var _0x40975b = _0x33229;
    let _0x54fdd7 = temperatureStreamConnections[_0xe391c5][_0x40975b(1819)]((_0x1aea33) => _0x1aea33[_0x40975b(1741)] === _0x3f79b7);
    if (_0x54fdd7 === -1)
      return;
    temperatureStreamConnections[_0xe391c5][_0x40975b(1314)](_0x54fdd7, 1);
  });
}
async function connectPrinter(_0x16ab57, _0x22c923, _0x1992ec, _0x11b92c) {
  var _0x30bb4f = _0x780a7e;
  let _0x35bec7 = { "save": _0x11b92c, "autoconnect": _0x1992ec };
  !(_0x16ab57 == null ? void 0 : _0x16ab57[_0x30bb4f(433)]()[_0x30bb4f(589)](_0x30bb4f(1850))) && (_0x35bec7[_0x30bb4f(2071)] = _0x16ab57), typeof _0x22c923 === _0x30bb4f(2203) && (_0x35bec7[_0x30bb4f(2029)] = _0x22c923), OctoPrint[_0x30bb4f(2089)][_0x30bb4f(1647)](_0x35bec7);
}
function startTerminalStream(_0x4cab21, _0x5baa71) {
  var _0xc298e6 = _0x780a7e;
  const _0x51b5b7 = { "label": ConnectionLabels[_0xc298e6(422)]["toString"](), "metadata": JSON[_0xc298e6(2063)]({ "peerID": networking[_0xc298e6(1927)] }), "serialization": _0xc298e6(1945) };
  let _0x479592 = peer[_0xc298e6(1647)](_0x5baa71, _0x51b5b7);
  _0x479592["on"](_0xc298e6(1352), function() {
    if (_0x4cab21 in terminalConnections)
      terminalConnections[_0x4cab21]["push"]({ "aliasID": _0x5baa71, "connection": _0x479592 });
    else
      terminalConnections[_0x4cab21] = [{ "aliasID": _0x5baa71, "connection": _0x479592 }];
  }), _0x479592["on"](_0xc298e6(1169), function() {
    var _0x15ea2e = _0xc298e6;
    let _0x490e3c = terminalConnections[_0x4cab21][_0x15ea2e(1819)]((_0x5c187b) => _0x5c187b["aliasID"] === _0x5baa71);
    if (_0x490e3c === -1)
      return;
    terminalConnections[_0x4cab21][_0x15ea2e(1314)](_0x490e3c, 1);
  }), _0x479592["on"](_0xc298e6(2165), function() {
    var _0x495118 = _0xc298e6;
    let _0x3147dd = terminalConnections[_0x4cab21][_0x495118(1819)]((_0x3b2e2a) => _0x3b2e2a[_0x495118(1741)] === _0x5baa71);
    if (_0x3147dd === -1)
      return;
    terminalConnections[_0x4cab21][_0x495118(1314)](_0x3147dd, 1);
  });
}
function handleJog(_0x64cdd8) {
  var _0x3e1240 = _0x780a7e;
  let _0x328a94 = { "absolute": !_0x64cdd8[_0x3e1240(1123)] };
  if ("x" in _0x64cdd8)
    _0x328a94["x"] = _0x64cdd8["x"];
  if ("y" in _0x64cdd8)
    _0x328a94["y"] = _0x64cdd8["y"];
  if ("z" in _0x64cdd8)
    _0x328a94["z"] = _0x64cdd8["z"];
  OctoPrint[_0x3e1240(893)][_0x3e1240(1590)](_0x328a94);
}
function startPositionChangedStream(_0x40b3fd, _0x3b533e) {
  var _0x3bdde7 = _0x780a7e;
  const _0x1ec11e = { "label": ConnectionLabels[_0x3bdde7(1790)][_0x3bdde7(2073)](), "metadata": JSON["stringify"]({ "peerID": networking["peerID"] }), "serialization": _0x3bdde7(1945) };
  let _0x33618e = peer["connect"](_0x3b533e, _0x1ec11e);
  _0x33618e["on"](_0x3bdde7(1352), function() {
    var _0x21c782 = _0x3bdde7;
    if (_0x40b3fd in positionChangedConnections)
      positionChangedConnections[_0x40b3fd][_0x21c782(1991)]({ "aliasID": _0x3b533e, "connection": _0x33618e });
    else
      positionChangedConnections[_0x40b3fd] = [{ "aliasID": _0x3b533e, "connection": _0x33618e }];
    sendContinuousConnections(printer[_0x21c782(532)], StreamType[_0x21c782(2204)]);
  }), _0x33618e["on"](_0x3bdde7(1169), function() {
    var _0x5d1f31 = _0x3bdde7;
    let _0x1824d4 = positionChangedConnections[_0x40b3fd]["findIndex"]((_0x37babc) => _0x37babc[_0x5d1f31(1741)] === _0x3b533e);
    if (_0x1824d4 === -1)
      return;
    positionChangedConnections[_0x40b3fd][_0x5d1f31(1314)](_0x1824d4, 1);
  }), _0x33618e["on"](_0x3bdde7(2165), function() {
    var _0x340c60 = _0x3bdde7;
    let _0x2dd895 = positionChangedConnections[_0x40b3fd][_0x340c60(1819)]((_0x588a6b) => _0x588a6b[_0x340c60(1741)] === _0x3b533e);
    if (_0x2dd895 === -1)
      return;
    positionChangedConnections[_0x40b3fd][_0x340c60(1314)](_0x2dd895, 1);
  }), _0x33618e["on"]("data", function(_0x476c55) {
    var _0x2de447 = _0x3bdde7;
    handleIncomingDataGuard(_0x40b3fd, _0x3b533e, parseInt(_0x33618e["label"]), _0x476c55[_0x2de447(797)], _0x476c55["signature"], _0x33618e["metadata"]);
  });
}
const patternPositionAbsolute = /.*G90.*/, patternPositionRelative = /.*G91.*/, patternExtruderAbsolute = /.*M82.*/, patternExtruderRelative = /.*M83.*/, patternE = /E-?\d+\.?\d+/, patternX = /X[\-0-9]+/, patternY = /Y[\-0-9]+/, patternZ = /Z[0-9]+/, patternHome = /Recv: X:[0-9]+\.[0-9]{2} Y:[0-9]+\.[0-9]{2} Z:[0-9]+\.[0-9]{2} E:0.00 Count X:[0-9]+ Y:[0-9]+ Z:[0-9]+/, patternXHome = /X\:[\-0-9]+\.[\-0-9]+/, patternYHome = /Y\:[\-0-9]+\.[\-0-9]+/, patternZHome = /Z\:[\-0-9]+\.[\-0-9]+/;
let checkX = ![], checkY = ![], checkZ = ![], positionAbsolute = !![], extruderRelative = ![], currentE = 0, totalE = 0, maxE = 0;
function resetExtruder() {
  currentE = 0, totalE = 0, maxE = 0, extruderRelative = ![], resetExtruderUpdate();
}
function getExtrusionLength() {
  return maxE;
}
function handleDataFromLogs(_0x44d4d9) {
  var _0x5acc53 = _0x780a7e;
  let _0x49d580 = ![];
  _0x44d4d9[_0x5acc53(839)](async (_0x2155d1) => {
    var _0x1bbe9d = _0x5acc53;
    if (_0x2155d1[_0x1bbe9d(589)](";"))
      _0x2155d1 = _0x2155d1[_0x1bbe9d(1856)](0, _0x2155d1["indexOf"](";"));
    if (_0x2155d1["length"] === 0)
      return;
    if (_0x2155d1[_0x1bbe9d(589)]("ok") && [PrinterStatus[_0x1bbe9d(1997)], PrinterStatus[_0x1bbe9d(1267)], PrinterStatus["paused"]][_0x1bbe9d(589)](printer[_0x1bbe9d(620)][_0x1bbe9d(2036)]))
      executeCustomGcode();
    _0x2155d1[_0x1bbe9d(589)](_0x1bbe9d(468)) && (checkX = !![], checkY = !![]);
    (_0x2155d1[_0x1bbe9d(589)]("G28 Z0") || _0x2155d1[_0x1bbe9d(1028)]("Send:", "")["trim"]() === _0x1bbe9d(1114)) && (checkX = !![], checkY = !![], checkZ = !![]);
    (checkX || checkY || checkZ) && (_0x2155d1[_0x1bbe9d(1962)](patternHome) && (printer[_0x1bbe9d(532)]["x"] = parseFloat(_0x2155d1[_0x1bbe9d(1962)](patternXHome)[0][_0x1bbe9d(1856)](2)), printer[_0x1bbe9d(532)]["y"] = parseFloat(_0x2155d1["match"](patternYHome)[0][_0x1bbe9d(1856)](2)), printer[_0x1bbe9d(532)]["z"] = parseFloat(_0x2155d1[_0x1bbe9d(1962)](patternZHome)[0][_0x1bbe9d(1856)](2)), printer[_0x1bbe9d(1503)]({ "position": printer[_0x1bbe9d(532)] }), await sendContinuousConnections(printer[_0x1bbe9d(532)], StreamType[_0x1bbe9d(2204)])));
    if (_0x2155d1[_0x1bbe9d(1962)](patternPositionAbsolute))
      positionAbsolute = !![];
    else
      _0x2155d1[_0x1bbe9d(1962)](patternPositionRelative) && (positionAbsolute = ![]);
    if (_0x2155d1[_0x1bbe9d(1962)](patternExtruderAbsolute))
      extruderRelative = ![];
    else
      _0x2155d1["match"](patternExtruderRelative) && (extruderRelative = !![]);
    if (_0x2155d1["includes"]("G0") || _0x2155d1[_0x1bbe9d(589)]("G1")) {
      _0x2155d1[_0x1bbe9d(1962)](patternX) && (printer["position"]["x"] = positionAbsolute ? parseFloat(_0x2155d1[_0x1bbe9d(1962)](patternX)[0][_0x1bbe9d(1856)](1)) : printer[_0x1bbe9d(532)]["x"] + parseFloat(_0x2155d1["match"](patternX)[0][_0x1bbe9d(1856)](1)), _0x49d580 = !![]);
      _0x2155d1[_0x1bbe9d(1962)](patternY) && (printer["position"]["y"] = positionAbsolute ? parseFloat(_0x2155d1[_0x1bbe9d(1962)](patternY)[0][_0x1bbe9d(1856)](1)) : printer["position"]["y"] + parseFloat(_0x2155d1[_0x1bbe9d(1962)](patternY)[0][_0x1bbe9d(1856)](1)), _0x49d580 = !![]);
      _0x2155d1[_0x1bbe9d(1962)](patternZ) && (printer["position"]["z"] = positionAbsolute ? parseFloat(_0x2155d1[_0x1bbe9d(1962)](patternZ)[0][_0x1bbe9d(1856)](1)) : printer[_0x1bbe9d(532)]["z"] + parseFloat(_0x2155d1[_0x1bbe9d(1962)](patternZ)[0][_0x1bbe9d(1856)](1)), _0x49d580 = !![]);
      if (_0x2155d1[_0x1bbe9d(1962)](patternE)) {
        let _0x1b69f3 = parseFloat(_0x2155d1[_0x1bbe9d(1962)](patternE)[0]["substring"](1));
        !extruderRelative && (_0x1b69f3 -= currentE), totalE += _0x1b69f3, currentE += _0x1b69f3, maxE = Math[_0x1bbe9d(1088)](maxE, totalE);
      }
      _0x49d580 && await sendContinuousConnections(printer[_0x1bbe9d(532)], StreamType["positionChanged"]);
    }
  });
}
function updatePrinterTemperatureHistoryArray(_0xc730b7) {
  var _0xdf77db = _0x780a7e;
  _0xc730b7[_0xdf77db(839)]((_0x5bf38c) => {
    var _0x52f256 = _0xdf77db;
    printerTemperatureHistory[_0x52f256(1991)](_0x5bf38c);
  });
  while (printerTemperatureHistory[_0xdf77db(1965)] > 50) {
    printerTemperatureHistory["shift"]();
  }
}
function changePrinterStatusForAction(_0x3e8b95, _0x4b9263) {
  var _0xbf9a1 = _0x780a7e;
  _0x3e8b95 ? (setCurrentlyExecutingActionID(_0x4b9263), handleOctoprintEvents({ "event": socketEventTypes[_0xbf9a1(1618)], "data": { "payload": { "state_id": PrinterStatus[_0xbf9a1(1997)], "state_string": PrinterStatus["executingAction"] }, "type": _0xbf9a1(833) } })) : (setCurrentlyExecutingActionID(""), handleOctoprintEvents({ "event": socketEventTypes[_0xbf9a1(1618)], "data": { "payload": { "state_id": _0xbf9a1(501), "state_string": _0xbf9a1(1134) }, "type": "PrinterStateChanged" } }));
}
function setCurrentlyExecutingActionID(_0x7bcb27) {
  currentlyExecutingActionID = _0x7bcb27;
}
function savePrinterPositionService() {
  setInterval(async () => {
    var _0x29dded = _0x3001;
    await printer[_0x29dded(1503)]({ "position": printer[_0x29dded(532)] });
  }, PRINTER_POSITION_SAVE_INTERVAL * 1e3);
}
async function handleFilament(_0x2e7914, _0x3eb375, _0x55388a, _0x2cdd9d, _0x1b02ce) {
  var _0x1d3e14 = _0x780a7e;
  switch (_0x2cdd9d) {
    case ConnectionLabels[_0x1d3e14(1835)]:
      if (printer["state"][_0x1d3e14(2036)] === PrinterStatus["operational"]) {
        let _0x24a2e6 = new Filament(_0x2e7914);
        _0x24a2e6[_0x1d3e14(2036)] = FilamentStatus[_0x1d3e14(829)], await _0x24a2e6[_0x1d3e14(2170)](), sendDataToAllAvailablePeers(_0x24a2e6, ConnectionLabels[_0x1d3e14(1835)], [_0x55388a]), printer[_0x1d3e14(903)] = _0x24a2e6["id"], await printer[_0x1d3e14(1503)]({ "filamentID": printer[_0x1d3e14(903)] });
      }
      break;
    case ConnectionLabels[_0x1d3e14(1119)]:
      sendDataToAllAvailablePeers({ "id": printer["filamentID"] }, ConnectionLabels[_0x1d3e14(1119)]), printer[_0x1d3e14(903)] = "", printer["save"]({ "filamentID": printer["filamentID"] });
      try {
        await db[_0x1d3e14(592)]["clear"]();
      } catch (_0x256f78) {
        console["error"](_0x256f78);
        return;
      }
      break;
    case ConnectionLabels[_0x1d3e14(2050)]:
      let _0x49adda;
      try {
        _0x49adda = await db["filaments"][_0x1d3e14(1892)](_0x2e7914["id"]);
      } catch (_0x35bce8) {
        console[_0x1d3e14(2165)](_0x35bce8);
        return;
      }
      _0x49adda && (_0x49adda[_0x1d3e14(1503)](_0x2e7914), sendDataToAllAvailablePeers(_0x2e7914, ConnectionLabels["filamentModified"], [_0x55388a]));
      break;
    case ConnectionLabels[_0x1d3e14(1823)]:
      sendFilamentUpdates(_0x3eb375, _0x55388a);
      break;
  }
}
let extruderAtLastUpdate = 0;
const FILAMENT_UPDATE_GAP = 10;
function resetExtruderUpdate() {
  extruderAtLastUpdate = 0;
}
function updateFilamentUsage() {
  setInterval(async () => {
    var _0x59e1b1 = _0x3001;
    let _0x3d35da = getExtrusionLength(), _0x5c5532 = _0x3d35da - extruderAtLastUpdate;
    extruderAtLastUpdate = _0x3d35da;
    if (_0x5c5532 <= 0)
      return;
    let _0x19527a;
    try {
      _0x19527a = (await db[_0x59e1b1(592)][_0x59e1b1(2136)]())[0];
    } catch (_0x9592b4) {
      console[_0x59e1b1(2165)](_0x9592b4);
      return;
    }
    let _0x10db33 = await calculateFilamentWeightFromLength(_0x5c5532, _0x19527a[_0x59e1b1(406)], _0x19527a[_0x59e1b1(472)]);
    _0x19527a[_0x59e1b1(2066)] += _0x10db33, updateCurrentJobFilamentUsageLength(_0x5c5532), _0x19527a[_0x59e1b1(1503)]({ "weightPrinted": _0x19527a[_0x59e1b1(2066)] });
    if (_0x19527a[_0x59e1b1(1482)] < _0x19527a[_0x59e1b1(657)])
      handleFilamentDepletion();
    await sendContinuousConnections(_0x19527a, StreamType["filamentUpdate"]);
  }, FILAMENT_UPDATE_GAP * 1e3);
}
function sendFilamentUpdates(_0x5b8672, _0x3339a0) {
  var _0x167efe = _0x780a7e;
  const _0x20b728 = { "label": ConnectionLabels["filamentModifiedResponse"]["toString"](), "metadata": JSON["stringify"]({ "peerID": networking[_0x167efe(1927)] }), "serialization": _0x167efe(1945) };
  let _0x4c4df6 = peer[_0x167efe(1647)](_0x3339a0, _0x20b728);
  _0x4c4df6["on"](_0x167efe(1352), function() {
    var _0x516e2a = _0x167efe;
    if (_0x5b8672 in filamentUpdateConnections)
      filamentUpdateConnections[_0x5b8672][_0x516e2a(1991)]({ "aliasID": _0x3339a0, "connection": _0x4c4df6 });
    else
      filamentUpdateConnections[_0x5b8672] = [{ "aliasID": _0x3339a0, "connection": _0x4c4df6 }];
  }), _0x4c4df6["on"](_0x167efe(1169), function() {
    var _0x294211 = _0x167efe;
    let _0x3565d1 = filamentUpdateConnections[_0x5b8672][_0x294211(1819)]((_0x1dcfb9) => _0x1dcfb9[_0x294211(1741)] === _0x3339a0);
    if (_0x3565d1 === -1)
      return;
    filamentUpdateConnections[_0x5b8672]["splice"](_0x3565d1, 1);
  }), _0x4c4df6["on"]("error", function() {
    var _0x346415 = _0x167efe;
    let _0x1e6016 = filamentUpdateConnections[_0x5b8672][_0x346415(1819)]((_0x2fcb86) => _0x2fcb86["aliasID"] === _0x3339a0);
    if (_0x1e6016 === -1)
      return;
    filamentUpdateConnections[_0x5b8672][_0x346415(1314)](_0x1e6016, 1);
  });
}
async function calculateFilamentWeightFromLength(_0x4fe457, _0x114b71, _0x5a53b0) {
  return _0x114b71 * (Math["PI"] * _0x5a53b0 * _0x5a53b0 * _0x4fe457 / 4e3);
}
function handleFilamentDepletion() {
  var _0x12b6ec = _0x780a7e;
  pauseJob(), printer[_0x12b6ec(1362)] = !![], printer[_0x12b6ec(2013)] = QueuePausedReason["depletedFilament"], printer[_0x12b6ec(1503)]({ "isQueuePaused": printer[_0x12b6ec(1362)], "queuePausedReason": printer[_0x12b6ec(2013)] }), sendDataToAllAvailablePeers({ "data": printer[_0x12b6ec(2013)] }, ConnectionLabels["queuePaused"]);
}
let unsentRequestsQueue = {};
const RESTART_NANOFACTORY_SERVER_SNOOZE_TIMEOUT = 30 * 60 * 1e3, PRINT_TIME_LEFT_CUTOFF_TO_STOP_RESTART = 10;
let restartNanoFactoryServerTimeout = 3 * 60 * 60 * 1e3;
function appendToUnsentRequestsQueue(_0x13b68e, _0x53332a, _0x2d53b1, _0x4a045b, _0x345b5c) {
  var _0x251cf5 = _0x780a7e;
  let _0x55b4d1 = getObjectToAppendToUnsentQueue(_0x2d53b1, _0x4a045b, _0x345b5c != null ? _0x345b5c : void 0);
  _0x13b68e in unsentRequestsQueue ? (console[_0x251cf5(942)](_0x251cf5(1838), _0x13b68e), unsentRequestsQueue[_0x13b68e][_0x251cf5(1991)](_0x55b4d1)) : (console["log"]("Creating new queue for ", _0x13b68e), unsentRequestsQueue[_0x13b68e] = [_0x55b4d1], sendData(_0x13b68e, _0x53332a, {}, ConnectionLabels["handshakeRequest"]));
}
function sendAllUnsentRequests(_0xf785ef, _0x31f055) {
  var _0x898779 = _0x780a7e;
  unsentRequestsQueue[_0xf785ef][_0x898779(839)](async (_0x594bd0) => {
    var _0x1b336a = _0x898779;
    if (_0x594bd0[_0x1b336a(1745)])
      await sendFile(_0xf785ef, _0x31f055, _0x594bd0["file"], _0x594bd0["data"], _0x594bd0[_0x1b336a(689)]);
    else
      await sendData(_0xf785ef, _0x31f055, _0x594bd0[_0x1b336a(797)], _0x594bd0[_0x1b336a(689)]);
  }), unsentRequestsQueue[_0xf785ef] = [];
}
function getObjectToAppendToUnsentQueue(_0x32120b, _0x232adb, _0x5cf8db) {
  var _0x4ff8c4 = _0x780a7e;
  if (_0x5cf8db) {
    let _0x22e2a2 = "";
    for (let _0x102988 in _0x5cf8db) {
      if (_0x102988[_0x4ff8c4(589)](_0x4ff8c4(765))) {
        _0x22e2a2 = _0x5cf8db[_0x102988];
        break;
      }
    }
    return { "data": _0x5cf8db, "label": _0x232adb, "file": new File([_0x32120b], _0x22e2a2 + _0x4ff8c4(1574)) };
  } else
    return { "data": _0x32120b, "label": _0x232adb };
}
function dotNotationToObject(_0x1b62f3, _0x2c75d8) {
  var _0x19ba0a = _0x780a7e;
  let _0x2e3e69 = _0x1b62f3[_0x19ba0a(1201)]("."), _0x422551 = {}, _0x162d7e = _0x2e3e69[_0x19ba0a(1965)];
  while (_0x162d7e--) {
    let _0x75566b = _0x2e3e69[_0x162d7e];
    if (_0x162d7e === _0x2e3e69[_0x19ba0a(1965)] - 1)
      _0x422551[_0x75566b] = _0x2c75d8;
    else {
      let _0x409b4b = {};
      _0x409b4b[_0x75566b] = _0x422551, _0x422551 = _0x409b4b;
    }
  }
  return _0x422551;
}
function restartNanoFactoryServerService() {
  setTimeout(async () => {
    var _0x1256d3 = _0x3001;
    !allowNanofactoryServerRestart() && (restartNanoFactoryServerTimeout = RESTART_NANOFACTORY_SERVER_SNOOZE_TIMEOUT, restartNanoFactoryServerService()), await rememberAllStreams(), window[_0x1256d3(1246)][_0x1256d3(1296)]();
  }, restartNanoFactoryServerTimeout);
}
function allowNanofactoryServerRestart() {
  var _0x499cc4 = _0x780a7e;
  if (!currentJobPrintTimeLeft)
    return !![];
  if (printer["state"][_0x499cc4(2036)] === PrinterStatus["printing"] && currentJobPrintTimeLeft < PRINT_TIME_LEFT_CUTOFF_TO_STOP_RESTART)
    return ![];
  return !![];
}
async function rememberAllStreams() {
  var _0x38915b = _0x780a7e;
  let _0x5da3c3 = {};
  const _0x3bdae8 = getAllStreams();
  Object[_0x38915b(605)](_0x3bdae8)["forEach"]((_0x3521c1) => {
    var _0x75003e = _0x38915b;
    Object[_0x75003e(605)](_0x3bdae8[_0x3521c1])["forEach"]((_0x1d23da) => {
      var _0x4983d7 = _0x75003e;
      if (!(_0x1d23da in _0x5da3c3))
        _0x5da3c3[_0x1d23da] = new StreamToRemember(_0x1d23da, []);
      _0x3bdae8[_0x3521c1][_0x1d23da][_0x4983d7(839)]((_0x4497ec) => {
        _0x5da3c3[_0x1d23da]["streams"]["push"]({ "type": _0x3521c1, "aliasID": _0x4497ec });
      });
    });
  });
  for (let _0xf58e16 of Object[_0x38915b(605)](_0x5da3c3)) {
    await _0x5da3c3[_0xf58e16][_0x38915b(2170)]();
  }
}
async function restartAllStreams() {
  var _0x51da2f = _0x780a7e;
  let _0x52b572 = await db[_0x51da2f(717)][_0x51da2f(2136)]();
  for (let _0x55988a of _0x52b572) {
    for (let _0x1860dd of _0x55988a["streams"]) {
      restartStream(_0x1860dd[_0x51da2f(1514)], _0x55988a[_0x51da2f(1927)], _0x1860dd["aliasID"]);
    }
  }
  await db[_0x51da2f(717)][_0x51da2f(1607)]();
}
function getAllStreams() {
  let _0x285bdb = {};
  for (let _0x21f400 of Object["keys"](StreamType)) {
    _0x285bdb[_0x21f400] = getPeerIDsConsumingStream(_0x21f400);
  }
  return _0x285bdb;
}
function getPeerIDsConsumingStream(_0x50484e) {
  var _0x1ee4a6 = _0x780a7e;
  switch (_0x50484e) {
    case StreamType["cameraStream"]:
      return getPeerIDsForStream(cameraStreamConnections);
    case StreamType[_0x1ee4a6(978)]:
      return getPeerIDsForStream(filamentUpdateConnections);
    case StreamType["jobProgress"]:
      return getPeerIDsForStream(jobProgressConnections);
    case StreamType[_0x1ee4a6(2204)]:
      return getPeerIDsForStream(positionChangedConnections);
    case StreamType["temperature"]:
      return getPeerIDsForStream(temperatureStreamConnections);
    case StreamType[_0x1ee4a6(2101)]:
      return getPeerIDsForStream(terminalConnections);
  }
}
function getPeerIDsForStream(_0x113fe3) {
  var _0x3e1fae = _0x780a7e;
  let _0x104e3e = {};
  return Object[_0x3e1fae(605)](_0x113fe3)[_0x3e1fae(839)]((_0x49fdab) => {
    var _0x50ccd1 = _0x3e1fae;
    let _0xd351b4 = _0x113fe3[_0x49fdab][_0x50ccd1(1925)]((_0x2bc6b2) => _0x2bc6b2[_0x50ccd1(1741)]);
    _0x104e3e[_0x49fdab] = _0xd351b4;
  }), _0x104e3e;
}
function restartStream(_0x33239a, _0x3841a3, _0x976f83) {
  var _0x448c44 = _0x780a7e;
  switch (_0x33239a) {
    case StreamType[_0x448c44(1768)]:
      if (!printer[_0x448c44(1277)]["cameraType"])
        return;
      handleCameraStreamRequest({ "cameraType": printer[_0x448c44(1277)]["cameraType"] }, _0x3841a3, _0x976f83);
      break;
    case StreamType[_0x448c44(978)]:
      sendFilamentUpdates(_0x3841a3, _0x976f83);
      break;
    case StreamType[_0x448c44(1082)]:
      sendCurrentJobUpdates(_0x3841a3, _0x976f83);
      break;
    case StreamType[_0x448c44(2204)]:
      startPositionChangedStream(_0x3841a3, _0x976f83);
      break;
    case StreamType[_0x448c44(723)]:
      startTemperatureStream(_0x3841a3, _0x976f83);
      break;
    case StreamType["terminal"]:
      startTerminalStream(_0x3841a3, _0x976f83);
      break;
  }
}
const subtle = crypto[_0x780a7e(349)], signingAlgorithm = { "name": "HMAC", "hash": { "name": _0x780a7e(736) } }, encryptingAlgorithm = { "name": _0x780a7e(1693), "length": 256 }, KEY_EXPORT_TYPE = _0x780a7e(1319), encoder = new TextEncoder(), decoder = new TextDecoder(_0x780a7e(1373));
async function generateKeyToSign() {
  var _0x11afb9 = _0x780a7e;
  return await subtle[_0x11afb9(1878)](signingAlgorithm, !![], ["sign", _0x11afb9(827)]);
}
async function generateKeyToEncrypt() {
  var _0x422b9d = _0x780a7e;
  return await subtle[_0x422b9d(1878)](encryptingAlgorithm, !![], [_0x422b9d(1935), _0x422b9d(876)]);
}
async function signMessage(_0x2de135, _0x309391) {
  var _0x26371d = _0x780a7e;
  return await subtle[_0x26371d(1100)](signingAlgorithm[_0x26371d(765)], _0x309391, stringToArrayBuffer(_0x2de135));
}
async function verifySignature(_0x304129, _0x260ca2, _0x1d7516) {
  var _0x4e6635 = _0x780a7e;
  return await subtle[_0x4e6635(827)](signingAlgorithm["name"], _0x1d7516, _0x260ca2, _0x304129);
}
async function encryptMessage(_0x20557d, _0x2b65f0, _0x3bb7f8) {
  return await subtle["encrypt"](getEncryptionAlgorithmObject(_0x2b65f0), _0x3bb7f8, stringToArrayBuffer(_0x20557d));
}
async function decryptMessage(_0x22b21f, _0x31cfd5, _0x4b0acd) {
  return await subtle["decrypt"](getEncryptionAlgorithmObject(_0x31cfd5), _0x4b0acd, _0x22b21f);
}
async function exportKey(_0x581841) {
  var _0x4a30d4 = _0x780a7e;
  return await crypto[_0x4a30d4(349)][_0x4a30d4(2094)](KEY_EXPORT_TYPE, _0x581841);
}
async function importKey(_0x456a08, _0x622e89, _0x145252) {
  var _0x32b2ff = _0x780a7e;
  return await crypto[_0x32b2ff(349)]["importKey"](KEY_EXPORT_TYPE, _0x456a08, _0x622e89, !![], _0x145252);
}
function getEncryptionAlgorithmObject(_0x4fd5d0) {
  var _0x41a91c = _0x780a7e;
  return { "name": encryptingAlgorithm[_0x41a91c(765)], "iv": getIvFromLabel(_0x4fd5d0) };
}
function getIvFromLabel(_0x4f5868) {
  let _0x5c370e = _0x4f5868["toString"]();
  return stringToArrayBuffer(_0x5c370e);
}
function arrayBufferToString(_0x574f32) {
  return decoder["decode"](_0x574f32);
}
function stringToArrayBuffer(_0x302603) {
  var _0x56236c = _0x780a7e;
  return encoder[_0x56236c(854)](_0x302603)[_0x56236c(1294)];
}
let peerKeyObjectMap = {};
async function generateNewKeyPair(_0x29360b) {
  var _0x13af5a = _0x780a7e;
  let _0x316d06 = { "peerID": _0x29360b, "encryptionKey": await generateKeyToEncrypt(), "signingKey": await generateKeyToSign(), "keysExchanged": ![], "allowedLabels": "*" }, _0x42187c = new PeerKeys(_0x316d06);
  return await _0x42187c[_0x13af5a(2170)](), _0x42187c;
}
async function incomingRequestGuard(_0x3fbcbc, _0x22f2e7, _0xc2294, _0x4e97d9) {
  var _0x2aa419 = _0x780a7e;
  let _0x2c9e1f = { "isRequestValid": ![], "decryptedData": new ArrayBuffer(0) }, _0x59770a;
  if (_0x4e97d9 === ConnectionLabels[_0x2aa419(2072)])
    _0x59770a = await getPeerKeys(extractDeviceID(_0x3fbcbc));
  else
    _0x59770a = await getPeerKeys(_0x3fbcbc);
  if (!_0x59770a)
    return _0x2c9e1f;
  if (!_0x59770a[_0x2aa419(600)](_0x4e97d9))
    return _0x2c9e1f;
  try {
    _0x2c9e1f["decryptedData"] = await decryptMessage(_0x22f2e7, _0x4e97d9, _0x59770a[_0x2aa419(565)]), _0x2c9e1f[_0x2aa419(2151)] = await verifySignature(_0x2c9e1f[_0x2aa419(1946)], _0xc2294, _0x59770a["signingKey"]);
  } catch (_0x577039) {
    console[_0x2aa419(1985)](_0x2aa419(791), _0x577039);
  }
  return _0x2c9e1f;
}
async function createPayloadForSending(_0xfae9f0, _0xf0191a, _0x5e69ca, _0x4b5d79) {
  var _0x459a49 = _0x780a7e;
  let _0x389d7a = { "data": new ArrayBuffer(0), "signature": new ArrayBuffer(0) }, _0x38a7ab = await getPeerKeys(_0x5e69ca);
  if (!_0x38a7ab)
    return console[_0x459a49(942)](_0x459a49(719) + _0x5e69ca), appendToUnsentRequestsQueue(_0x5e69ca, _0x4b5d79, _0xfae9f0, _0xf0191a), _0x389d7a;
  let _0x5c1928 = JSON[_0x459a49(2063)](_0xfae9f0);
  return _0x389d7a[_0x459a49(797)] = await encryptMessage(_0x5c1928, _0xf0191a, _0x38a7ab[_0x459a49(565)]), _0x389d7a[_0x459a49(772)] = await signMessage(_0x5c1928, _0x38a7ab[_0x459a49(1880)]), _0x389d7a;
}
async function getPeerKeys(_0x4c73a4) {
  var _0x73946d = _0x780a7e;
  let _0x5db630 = peerKeyObjectMap[_0x4c73a4];
  if (!_0x5db630) {
    try {
      _0x5db630 = await db[_0x73946d(1076)]["get"](_0x4c73a4);
    } catch (_0x2a54f1) {
      console[_0x73946d(2165)](_0x2a54f1);
      return;
    }
    if (_0x5db630)
      peerKeyObjectMap[_0x4c73a4] = _0x5db630;
  }
  return _0x5db630;
}
var StreamType = ((_0x1094e8) => {
  var _0x4fa608 = _0x780a7e;
  return _0x1094e8[_0x4fa608(978)] = _0x4fa608(978), _0x1094e8["jobProgress"] = _0x4fa608(1082), _0x1094e8["terminal"] = _0x4fa608(2101), _0x1094e8["temperature"] = _0x4fa608(723), _0x1094e8[_0x4fa608(2204)] = _0x4fa608(2204), _0x1094e8["cameraStream"] = _0x4fa608(1768), _0x1094e8;
})(StreamType || {});
async function sendData(_0x2be6dd, _0x9ae0c7, _0x55518d, _0x335466) {
  var _0x3f6d1a = _0x780a7e;
  let _0x55cb34 = { "data": new ArrayBuffer(1), "signature": new ArrayBuffer(1) };
  if (LABELS_TO_IGNORE_FOR_ENCRYPTION[_0x3f6d1a(589)](_0x335466))
    _0x55cb34[_0x3f6d1a(797)] = _0x55518d;
  else {
    _0x55cb34 = await createPayloadForSending(_0x55518d, _0x335466, _0x2be6dd, _0x9ae0c7);
    if (_0x55cb34[_0x3f6d1a(797)][_0x3f6d1a(1505)] < 1)
      return;
  }
  const _0x29c807 = { "label": _0x335466[_0x3f6d1a(2073)](), "metadata": JSON[_0x3f6d1a(2063)]({ "peerID": networking[_0x3f6d1a(1927)] }), "serialization": _0x3f6d1a(1945) }, _0x325233 = peer["connect"](_0x9ae0c7, _0x29c807);
  _0x325233["on"](_0x3f6d1a(1352), function() {
    var _0x1949b5 = _0x3f6d1a;
    _0x325233[_0x1949b5(1241)](_0x55cb34), console[_0x1949b5(942)]("Sent: Label-", ConnectionLabels[_0x335466], _0x1949b5(1018), _0x55518d, " to peerID: ", _0x2be6dd, _0x1949b5(1727), _0x9ae0c7);
  }), _0x325233["on"]("error", async function(_0x5896cb) {
    var _0x5e372b = _0x3f6d1a;
    console[_0x5e372b(2165)]("Could not send data: " + JSON["stringify"](_0x55518d), _0x5e372b(2134), _0x2be6dd, " with alias", _0x9ae0c7, _0x5e372b(1780), _0x5896cb), removeAliasFromPeerIDAliasesMap(_0x9ae0c7, _0x2be6dd);
  });
}
async function sendDataToAllAliases(_0x6c4b7, _0x5990a5, _0xaaac9f) {
  var _a3;
  var _0x4180e5 = _0x780a7e;
  (_a3 = peerIDAliasesMap["get"](_0x6c4b7)) == null ? void 0 : _a3[_0x4180e5(839)]((_0x1b53ee) => {
    sendData(_0x6c4b7, _0x1b53ee, _0x5990a5, _0xaaac9f);
  });
}
async function sendFile(_0x5b4dde, _0x37aabd, _0x33fb3f, _0x33625d, _0x2b40c6) {
  var _0x42ceee = _0x780a7e;
  let _0x398aca = await createPayloadForSending(arrayBufferToString(await _0x33fb3f[_0x42ceee(345)]()), _0x2b40c6, _0x5b4dde, _0x37aabd);
  if (_0x398aca[_0x42ceee(797)]["byteLength"] < 1)
    return;
  _0x33625d = { ..._0x33625d, "peerID": networking[_0x42ceee(1927)] };
  const _0x3ed914 = { "label": _0x2b40c6["toString"](), "metadata": JSON[_0x42ceee(2063)](_0x33625d), "serialization": _0x42ceee(1945), "reliable": !![] }, _0x1440b7 = peer[_0x42ceee(1647)](_0x37aabd, _0x3ed914);
  _0x1440b7["on"](_0x42ceee(1352), function() {
    var _0x183c12 = _0x42ceee;
    _0x1440b7[_0x183c12(1241)](_0x398aca);
  }), _0x1440b7["on"](_0x42ceee(1169), function() {
    var _0x5bc20e = _0x42ceee;
    console[_0x5bc20e(942)](_0x5bc20e(2105) + ConnectionLabels[_0x2b40c6]);
  }), _0x1440b7["on"](_0x42ceee(2165), function(_0x5d7a1e) {
    var _0x2a5b74 = _0x42ceee;
    console["error"](_0x2a5b74(1013) + _0x5d7a1e);
  });
}
async function sendDataToAllAvailablePeers(_0x57a4ce, _0x364f33, _0x93635e = []) {
  var _0x5537eb = _0x780a7e;
  peerIDAliasesMap[_0x5537eb(839)]((_0x4218fc, _0x399b52) => {
    var _0x17b393 = _0x5537eb;
    _0x4218fc[_0x17b393(839)]((_0x2a88b3) => {
      var _0x8c70e = _0x17b393;
      if (_0x93635e[_0x8c70e(589)](_0x2a88b3))
        return;
      sendData(_0x399b52, _0x2a88b3, _0x57a4ce, _0x364f33);
    });
  });
}
async function sendFileToAllAvailablePeers(_0xafad94, _0x1a85f4, _0x1d1c10) {
  peerIDAliasesMap["forEach"]((_0x5aaaf6, _0x24968a) => {
    _0x5aaaf6["forEach"]((_0x341c64) => {
      sendFile(_0x24968a, _0x341c64, _0xafad94, _0x1a85f4, _0x1d1c10);
    });
  });
}
function sendToAllMembersOfGroup(_0xf58ce6, _0x564d65, _0x36574a) {
  var _a3;
  var _0x1de8ba = _0x780a7e;
  (_a3 = nanofactoryPeersObject[_0x1de8ba(980)][_0x1de8ba(1892)](_0xf58ce6)) == null ? void 0 : _a3[_0x1de8ba(935)][_0x1de8ba(839)]((_0x5c17e6, _0x59ad5d) => {
    var _a4;
    var _0x56c84e = _0x1de8ba;
    let _0x5e9614 = _0x59ad5d + "-" + _0xf58ce6;
    (_a4 = peerIDAliasesMap[_0x56c84e(1892)](_0x5e9614)) == null ? void 0 : _a4[_0x56c84e(839)]((_0x21b40f) => {
      sendData(_0x5e9614, _0x21b40f, _0x564d65, _0x36574a);
    });
  });
}
function _0x3001(_0xcea436, _0x148bbf) {
  var _0x495d54 = _0x495d();
  return _0x3001 = function(_0x3001c5, _0x4ecacd) {
    _0x3001c5 = _0x3001c5 - 338;
    var _0x4e174d = _0x495d54[_0x3001c5];
    return _0x4e174d;
  }, _0x3001(_0xcea436, _0x148bbf);
}
function streamToPeers(_0x23daa0, _0x3026be, _0x963f94) {
  var _0x183d32 = _0x780a7e;
  const _0xb3a460 = { "metadata": JSON[_0x183d32(2063)]({ "printerID": networking["peerID"], "label": _0x963f94, "peerID": networking["peerID"] }) }, _0x38690b = peer[_0x183d32(1206)](_0x23daa0, _0x3026be, _0xb3a460);
  return _0x38690b["on"]("close", function() {
    delete cameraStreamConnections[_0x23daa0];
  }), _0x38690b["on"](_0x183d32(2165), function(_0x4e2204) {
    var _0x406222 = _0x183d32;
    console[_0x406222(2165)](_0x4e2204);
  }), _0x38690b;
}
async function sendContinuousConnections(_0x54fe81, _0x41bc99) {
  var _0x43d9d4 = _0x780a7e;
  switch (_0x41bc99) {
    case "filamentUpdate":
      for (let _0x5ba13a in filamentUpdateConnections) {
        for (let _0x4c9a84 of filamentUpdateConnections[_0x5ba13a]) {
          const { aliasID: _0x2bd1b0, connection: _0x5de278 } = _0x4c9a84;
          let _0xb0e5d5 = await createPayloadForSending(_0x54fe81, ConnectionLabels[_0x43d9d4(1164)], _0x5ba13a, _0x2bd1b0);
          if (_0xb0e5d5["data"][_0x43d9d4(1505)] < 1)
            continue;
          _0x5de278 == null ? void 0 : _0x5de278[_0x43d9d4(1241)](_0xb0e5d5);
        }
      }
      break;
    case _0x43d9d4(1082):
      for (let _0x29b0f8 in jobProgressConnections) {
        for (let _0xfe5451 of jobProgressConnections[_0x29b0f8]) {
          const { aliasID: _0x2e78ba, connection: _0x45e068 } = _0xfe5451;
          let _0x29c083 = await createPayloadForSending(_0x54fe81, ConnectionLabels[_0x43d9d4(680)], _0x29b0f8, _0x2e78ba);
          if (_0x29c083["data"][_0x43d9d4(1505)] < 1)
            continue;
          _0x45e068 == null ? void 0 : _0x45e068[_0x43d9d4(1241)](_0x29c083);
        }
      }
      break;
    case _0x43d9d4(2101):
      for (let _0x353163 in terminalConnections) {
        for (let _0x3e6886 of terminalConnections[_0x353163]) {
          const { aliasID: _0x328d51, connection: _0x42367e } = _0x3e6886;
          let _0x2fa6dc = await createPayloadForSending(_0x54fe81, ConnectionLabels[_0x43d9d4(422)], _0x353163, _0x328d51);
          if (_0x2fa6dc[_0x43d9d4(797)]["byteLength"] < 1)
            continue;
          _0x42367e == null ? void 0 : _0x42367e[_0x43d9d4(1241)](_0x2fa6dc);
        }
      }
      break;
    case _0x43d9d4(723):
      for (let _0x11b612 in temperatureStreamConnections) {
        for (let _0x357ad3 of temperatureStreamConnections[_0x11b612]) {
          const { aliasID: _0x2c9b08, connection: _0x43487c } = _0x357ad3;
          let _0x1e86c6 = await createPayloadForSending(_0x54fe81, ConnectionLabels[_0x43d9d4(1074)], _0x11b612, _0x2c9b08);
          if (_0x1e86c6[_0x43d9d4(797)][_0x43d9d4(1505)] < 1)
            continue;
          _0x43487c == null ? void 0 : _0x43487c[_0x43d9d4(1241)](_0x1e86c6);
        }
      }
      break;
    case "positionChanged":
      for (let _0x428bab in positionChangedConnections) {
        for (let _0x44adf9 of positionChangedConnections[_0x428bab]) {
          const { aliasID: _0x543a88, connection: _0xe73f4f } = _0x44adf9;
          let _0x324384 = await createPayloadForSending(_0x54fe81, ConnectionLabels[_0x43d9d4(1790)], _0x428bab, _0x543a88);
          if (_0x324384[_0x43d9d4(797)][_0x43d9d4(1505)] < 1)
            continue;
          _0xe73f4f == null ? void 0 : _0xe73f4f[_0x43d9d4(1241)](_0x324384);
        }
      }
      break;
  }
}
function _0x495d() {
  var _0x3e8765 = ["state_string", "parseFmtp", "stringify", "modifyCompletedJob", "matchPrefix", "weightPrinted", "databases", "allowEmptyDB", "addEventListener", "bulkAdd", "port", "peerIDChange", "toString", "ideal", "trackId", "inner", "scaleResolutionDownBy", "G0 Z5", "\n    isBrowserSupported:", "set", "hasValue", " not part of transaction", "parseMsid", "passive", "0.peerjs.com", "cameraStreamRequest", "a=ice-options:trickle\r\n", "@@iterator", "connection", "concat", "Cannot convert never type to IDBKeyRange", "_root", "String expected.", "exportKey", "return", "File not found in pending jobs", "peerType", "mediaSource", "emit", "Executing Action", "terminal", "initialize", "gathering", "core", " Sent file. Label:", "handleCandidate", "138376seAsfL", "getBedLevelling", "serialization", "race", "arguments", "localDescription", "Received malformed connection type:", "a=rtcp-rsize\r\n", "headerExtensions", "boolean", "__dbnames", "completed", "current", "IdTaken", "PromiseProp", "a=ssrc-group:FID ", "readHook", "jobDone", "constraintName", "getEstimatedFilamentWeight", "rtx", "_iterate", ".bulkPut(): ", "queuePosition", "RTCDtmfSender", "now", "Invalid selector.", " to peerID: ", "toCollection", "toArray", "Chrome shim can not determine version, not shimming.", "writeCryptoKeyParams", "Listening for ICE candidates.", "setRemoteDescription", "_bufferSize", "apt", "restartNfServer", "deviceId", "addKeys", "setPrototypeOf", "shimEdge", "a=ice-pwd:", "getMid", "apply", "isRequestValid", "turn:a.relay.metered.ca:443", "DC#", "899574FQGZml", " is not indexed", "_buffer", "turn", "rtcpMuxPolicy 'negotiate' is not supported", "Cursor not started", "To call a peer, you must provide a stream from your browser's `getUserMedia`.", "setToolTargetTemperatures", "removeStream", "printerOffline", "Invalid message", "error", "brand", "OPEN", " not included in parent transaction.", "src", "add", "writeSctpDescription", "https", "isSecure", "_config", "Local stream already exists on this MediaConnection. Are you answering a call twice?", "isValidSDP", "handleCandidate:", "table", "reliable", "join", "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", "unpack_uint32", "NotAllowedError", "clone", "bound", "tcp", "_updateSignalingState", "usernameFragment", "initCustomEvent", "Invalid length", "_cfg", "anyOfIgnoreCase", "a=bundle-only", "getKind", "CREALTY", "Float", "relatedPort", "EventEmitter", "googleShoppingProductOrder", "Unrecognized message type:", "shimFirefox", "keyLength", "number", "positionChanged", "ref", "clockRate", "gthen", "getRemoteCandidates", "iceConnectionState changed to disconnected on the connection with ", "autoIncrement", "msid:", "_stack", "listenerCount", "arrayBuffer", "releaseSnapshotStream", "iceconnectionstatechange", "printerError", "subtle", ".bulkAdd(): ", "randomToken", "component", 'API KEY "', "id, status, createdDate, filamentID", "dir", "remoteStream", "You received an unrecognized message:", "debug", "isWebRTCSupported", "bulkGet", "restartWorker", "uri", "logFunction", "_negotiator", "currency", "Could not connect to peer ", "new", "dataView", "a=ice-lite", "reverse", "defineClass", "isRejected", "getAll", "autoOpen", "The current browser does not support WebRTC", "map", "range", "InvalidState", "pack_int16", "update", "getItem", "sdpMid", "coreXY", "webkitRTCPeerConnection", "createObjectURL", "3.2.4", "setLogFunction", "Candidate", "function", "nanofactoryFiles", "adapter.js shimming firefox.", "fulfilled", "cleanup", "msg", "positionChangedRequest", "percentPrinted", "jobFilamentModified", "substr", "EncodingQueue error:", "decreaseRate", " stream which is associated with the specified track.", "rport", "unpack_array", "deleting", "all", "density", "BYTES_PER_ELEMENT", "noop", "id,filamentID, queuePosition", "_onaddstreampoly", "result", "bedLevellingAction", "a=rtpmap:", "_lastServerId", "onRejected", "getDtlsParameters", "_pos", "successCount", "aboveOrEqual", "unpack_uint64", "All", "terminalResponse", "and", "setAttribute", "offset", "isVirtual", "Argument type: ", "_stackHolder", "bedLevelingRequest", "a=setup:", "remoteStreams", "has", "toLowerCase", "Your browser does't support RTCPeerConnection#addTrack. Ignored.", "_maxKey", "version", "undefined", "_eventsCount", "retrieveId", "Failed to handleCandidate, ", "abort", "home", "PeerJS: ", "exports", "iceConnectionState is failed, closing connections to ", "parseRtcpParameters", "jobDeleted", "inline:", "raddr", "_reverseStreams", "track", "anonymous", "connecting", "global", "blobToArrayBuffer", "transceiver", "Timeout", "PromiseRejectionEvent", " from peer:", "POST", "bufferBuilder", "Error", "a=recvonly\r\n", "jobFile", "_whenReady", "contentUpgrade", "_dbNamesDB", "G28 X0 Y0", "pack_array", "jobsHistory", "encodings", "diameter", "ForeignAwait", "'. Closing db now to resume the delete request.", "anyOf", "indexedDB", "shimChrome", "a=rtpmap:0 PCMU/8000\r\n", "prevunique", "peerSyncResponse", "_isClosed", "dtmf", "BinaryUTF8", "onicestatechange", "connectionId", "id, available, whitelisted, blacklisted", "autoSchema", "NoSuchDatabase", "_write", "_sctp", "observe", "metadata", "Underlying socket is already closed.", "_configureDataChannel", "childList", "deleteDatabase", "BufferBuilder", "closed", "Print has failed", "createObjectStore", "OPERATIONAL", "peerPermissionRequest", "cancelOpen", "CustomEvent", "handshakeRequest", "unpack_double", "initiate_bed_levelling", " of ", "receiver", "message", "unref", "onblocked", "peerjs?key=", "DataChannel", "host", "temperatureStreamRequest", "bind", "_trans", "sent", "ACTIONS_SYNC", "path", "252372eyuucI", "_locked", "adapter.js shimming safari.", "createEvent", "tag", "addRemoteCandidate", "Dexie: Need to reopen db", "UnavailableID", 'ID "', "unique", "position", "maxFramerate", "writeFmtp", "unpack_int8", "printCompletion", "getAudioTracks", "getDisplayMedia without video ", "parseFingerprint", "Event", "_lastConnectionState", "a=fmtp:", "In a hurry? We're still trying to make the initial connection!", "_queue", "userAgentData", "Arguments objects and keys must have the same length", "CANCELLED", "candidate-pair", "onicecandidate", "_dtmf", "getMediaSections", "Object is not iterable.", "heatedChamber", "_remoteStreams", "MissingAPI", "dbschema", "destroy", "peerSyncDataRequest", "currentJobUpdatesRequest", "Message too large (can send a maximum of ", "isPrimKey", "initiateBedLevelling", "_ontrack", "frameRate", "encryptionKey", "PRINTERSTATECHANGED", "connectPrinter", "') was blocked", "Snapshots", "startsWithAnyOfIgnoreCase", "upgrade", "server-error", "Open", "LEAVE", "connectionOptions", "readonly", "getVideoTracks", "srcElement", "pack_string", "blacklisted", "PrematureCommit", "Invalid RID value provided.", "Keys already exchanged. Not sending", "Can not call createAnswer in signalingState ", "document", "populate", "mandatory", "addTransceiver", "includes", "deviceNameUpdate", "storeNames", "filaments", "sharing_via_url", "uniqueKeys", "filamentAction", "RTCIceGatherer", "_waitingQueue", "InvalidTable", "charAt", "isLabelAllowed", "parseRtcpFb", "ServerError", "handshakeResponse", "id, peerID, apiKey", "keys", "cancel", "inAnyRange", "pack_uint32", "orderBy", "startTime", "parse", "writeCandidate", "payload", "iceTransportPolicy", "query", "CANDIDATE", "setImmediate", "Peer", "a=sctp-port:", "state", "desktop", "unpack_int32", "binaryType", "back", "Cancelled", "matchAll", "RTX", "_read", "pack_int8", "connectionstatechange", "peer_connection_success", "storage", ". Please use a boolean.", "finalize", "OFFER", "pack_object", "vcFired", "bufferedCandidateEvents", "Not a browser.", "_allTables", "_waitingFor", "_updateIceConnectionState", "echoes", "Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey", " from aliasID: ", "bedTemperature", "settings", "associatedRemoteMediaStreams", "Assigned filament does not match the one loaded", "jobPause", "Date", "require", "Cleaning up PeerConnection to ", "readyState", "Invalid server message", "webkitMediaStream", "filamentDepletedCutoff", "optional", "dbcore", "maxWidth", "kinematics", "_resolve", "reading", "trackIdentifier", "printerPaused", "addedNodes", "dbOpenError", "include", "PRINTDONE", "next", "AsyncFunction", "localCName", "a=group:BUNDLE ", "_sendChunks", "NoSuchDatabaseError", "rtpReceiver", "googleShoppingProductInfoRequest", "DatabaseClosedError", "RTCDTMFSender", "currentJobUpdatesResponse", "webkitGetUserMedia", "updating", "trans", "AudioContext", "provider", "options", "onload", "token", "label", "reduce", "writeCryptoLine", "cameraStreamResponse", "listAllPeers", "PLUGIN", "_trySend", "candidate", "end-of-candidates", "getCryptoParameters", "There is no sender or receiver for the track.", "subscr", "peerSyncDataResponse", "webrtc@live.com", "paused", "Printing", "://", "rtcpMuxPolicy", "sdpTransform", "Leave", "MediaStreamTrack", "a=ice-ufrag:", "_completion", "stop", "Ender 3D", "class", "onchange", "_dtlsRole", "streamsToRemember", "_buffering", "Peer Key Object not found for peerID: ", "MediaStream", " to media connection ", "_reculock", "temperature", "keySalt", "dbReadyResolve", "querySelector", "creating", "eachPrimaryKey", "search", "writeIceParameters", "Unknown", "environment", "oldVersion", "applyConstraints", "iceServers", "SHA-512", "extend", "peerPermissionResponse", "allSettled", "printerID", "API", "thisisadapterortc", "toBinaryPack", "_memoizedTables", "newVersion", "bedLevelingResponse", "script", "Failed to setRemoteDescription, ", "compound index [", "_createServerConnection", "PeerUnavailable", "chromeTransactionDurability", "dbReadyPromise", "snapshots", "openComplete", "Received data channel", "_middlewares", "Disconnected", "enque", "getVersion", "getBrowser", "BinaryPackFailure: read index out of range", "ws://", "_createIceGatherer", "name", "inline", "dataBuffer", "iceGatherer", "Only primary key can be marked as autoIncrement (++)", "targetTool", "localStream", "signature", "mkiLength", "locked", "printFailed", "addStream", "each", "setTransport", "postMessage", "onclose", "print_job", "Print has been completed", "lastResult", "costRemaining", "mozGetUserMedia", "_chunkedData", "msid", "database_sync", "_cleanupPeer", "ANSWER", "Error while decrypting data and verifying signature", "_ondirectionchange", "ICE servers after filtering:", "fingerprints", "schema", "Transaction is readonly", "data", "_iceGatherers", "dtlsTransport", "_reject", "fire", "8f87f7da40d9fbc147edde89", "omit", "Connection to ", "filter", "Printer is offline", "You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available.", "URL", "subarray", "navigator", "getLocalParameters", "cache", "Type", "getSettings", "dbnames", "Object", "have-local-offer", "validateId", "value", "mozAutoGainControl", "turn:[", "_connections", "_dbSchema", "_shimmedLocalStreams", "Cannot connect to new Peer after disconnecting from server.", "env", "verify", "disconnect", "loaded", "max_framerate must be >= 0.0", "bufferCandidates", "localCapabilities", "PrinterStateChanged", "A promise cannot be resolved with itself.", "config", "Received remote stream", "_onaddstream", "_sendHeartbeat", "forEach", "RTCRtpReceiver", "objectStoreNames", "MutationObserver", "profileChanged", "toStringTag", "resume", "a=ssrc:", "dateBought", "_senders", "firstKey", "534395xMSdMl", "logs", "address", "onFulfilled", "encode", "Abort", "Can not add ICE candidate without a remote description", "Supports:\n    browser:", "reauthRequired", "executeCustomGcode", "names", "PrintDone", "trys", "filamentMismatch", "sdpMLineIndex", "_tx", "action", "Negotiator", "a=recvonly", "flush", "idb://", "adapter.js shimming chrome.", "defaultConfig", "_localDescription", "automatedBedLevelling", "_listeners", "decrypt", "fec", "You received a malformed message from ", "rtcpFeedback", "colorName", " IN IP4 127.0.0.1\r\n", "MSBlobBuilder", "Destroy peer with ID:", "334508SsdubH", "iceStateChanged", "integrity", "_getMessages", "_onconnectionstatechange", "cost", "del", "baseURL", "SocketError", "printer", "Connection is not open. You should listen for the `open` event before sending messages.", "indexNames", "recreate", "onaddstream", "navigator.getUserMedia", "add tracks from stream ", "iPad", "_then", "Chrome shim is not included in this adapter release.", "filamentID", "enabled", "fileID", "OperationError", "timestamp", "socket", "last", "sortBy", "material", "keyMethod", "continue", " is deprecated, please use ", "Set localDescription:", "openStream", "LN2", "_PSD", "storagemutated", "AUTO", "http", "createDocumentFragment", "syncAllResponse", "password", "585984zzgciO", "getDescription", "recvonly", "_baseUrl", "Printer is in error state", "RTCRtpSender", "primaryKey", "EXPIRE", "actionExecuted", " does not exist", "devices", "shimGetDisplayMedia: getSourceId argument is not ", "setChamberTargetTemperature", "' blocked by other connection holding version ", "binaryStringToArrayBuffer", "Offer", "pack", "log", "startsWithAnyOf() only works with strings", "Expire", "icecandidate", "keysExchanged", " is not a constructor or null", "priority", "UDP/DTLS/SCTP", "subscribe", "Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.", "_emitGatheringStateChange", "a=sendonly\r\n", "heartbeat", "transaction", "BlobBuilder", "_handleMessage", "getDirection", "toFixed", "Modify", "logLevel", "json", "AbortError", "pack_int32", "isMaster", "RTCIceTransport", "000000", "browser", "openCanceller", "size", "SCTP", "No filament is loaded", "idbdb", "getUsedFilamentWeight", "notEqual", "mutate", "failed", "filamentUpdate", "Received Label: ", "whitelisted", "total", "fileReader", "searchParams", "attribute", "targetBed", "PrintStarted", "for:", "mc_", "Message", "Error. Status:", "rtcpParameters", "chunk", "onopen", "chunkedMTU", "advance", " dc connection success", "Database version changed by other database connection", "actions", "onsuccess", "nextunique", "role", "upper", "ufrag", "peerListModification", "_createIceAndDtlsTransports", "getReceivers", "_disconnected", "_PEERJSTEST", "_descending", "Can not call createOffer after close", "exact", "tcptype", "Could not send data: ", "_parseStoresSpec", "actionModified", " to peer connection", "storesSource", " Data: ", "TransactionInactive", "_sdpSessionId", "ID_PREFIX", "createIndex", "lockOwnerFor", "LINK", "isMatch", " of type ", "InvalidStateError", "replace", "algorithm", "subscribers", "blob", "maxBitrate", "getSenders", "printCancelled", "_scheduleHeartbeat", "isFolder", "parseRtpParameters", "octoprint is not defined", ":dels", "MediaStreamTrackEvent", "MIN_KEY", "blocked", "_ontrackpoly", "sourceId", "complete", "have-remote-offer", "Promise", "It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.", "rtcp", "listeners", "a=end-of-candidates\r\n", "channel", "a=ssrc-group:FID", "\n    isWebRTCSupported:", "disconnected", "indexes", "mediaDevices", "strict-origin-when-cross-origin", "typ", "NotFoundError", "_initialize", "unhandleds", "lower", "connectionOptionsChanged", "removeListener", "_max", "usingBundle", "ops", "readwrite", "ULPFEC", "Generator is already executing.", "openKeyCursor", "jobResume", "temperatureStreamResponse", "emergencyStop", "peerKeys", "first", "ownKeys", "off", "Table", "Constraint", "jobProgress", "Not yet support for changing primary key", "setParameters", "minFirefoxVersion", "_default", "printerprofiles", "max", "modifyChunkSize", "Unsupported browser!", "actualFilamentUsage", "Track already exists.", "detail", "lock", "BLACKLISTED", "Not a function", "psd", "parseRtpMap", "Argument 1 of RTCPeerConnection.removeTrack ", "sign", "serviceWorker", "\n    isIOS:", "removeTrack", "prev", "deleteRange", "BulkError", "Internet connection established. Reloading page...", "text/javascript", "openCursor", "PLA", "does not implement interface RTCRtpSender.", "peerSyncRequest", "history", "G28", "User has paused the queue", " to peerId:", "control", "RTCSessionDescription", "filamentRemoved", "c=IN IP4 0.0.0.0\r\n", "isBrowserSupported", "Current print has been paused", "relative", "setItem", "printTime", "Error:", "chrome", "index", "a=sendrecv\r\n", "upload", "foundation", "terminate", "toUpperCase", "Operational", "DEFAULT_KEY", "DTLS/SCTP", "newValue", "sort", "pow", "refreshConnectionOptions", "Transaction has already completed or failed", "relatedAddress", "receive", "codecs", "onuncatched", "sessionParams", "invalid-id", "\na=extmap-allow-mixed", "_ctx", "cryptoSuite", "primKey", "dispatchEvent", "assign", "usernameUpdate", "round", "Class extends value ", "RTCDtlsTransport", "offerToReceiveVideo", "ssrc", "Failed", "_options", "onReadyBeingFired", "unavailable-id", "filamentModifiedResponse", "peerConnectionSuccess", "webRTC", "toJSON", "heatedBed", "close", "only", " webrtc-datachannel\r\n", "HEARTBEAT", "Not a supported browser.", "Receiving stream", "0000", "printing", "Cannot add version when database is open", "Listening for remote stream", "Cannot send heartbeat, because socket closed", "camera stream connection is open ", "stable", "_remoteDescription", "min", "floor", "addons", "getSupportedConstraints", "deviceName", "snapshotUrl", "minSafariVersion", "autoconnect", "_lib", "getFullState", "DONE", "Sender was not created by this connection.", "jobID", "icegatheringstatechange", "thumbnail", "networking", "_ascending", "inactive", "split", "G0 Z0", "_storeNames", "isBeingOpened", "chamberTemperature", "call", "openrelayproject", "fileMetadataResponse", "generateIdentifier", "limit", "resolve", "stack", "QuotaExceeded", "controlling", "slice", "ID-TAKEN", "jobPrinting", "_id", "peerConnectionError", "isFunctional", "checking", "plan-b", "PRINT_JOB", "removeAllListeners", "from peer:", "stun:openrelay.metered.ca:80", "' not found", "HooksMiddleware", "cmp", "FAILED", "byteOffset", "RTCIceServer.url", "cameraType", "_state", "some", "Another connection wants to delete database '", "pack_double", "createdDate", "unpack_float", "readAsArrayBuffer", "send", "accept", " 65535\r\n", "onunhandledrejection", "connected", "location", "handleEvent", "_prev", "Media", "mozRTCPeerConnection", "isView", "find", "a=rtcp-rsize", "Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY", "_versions", "id, filename", "m=video 0 UDP/TLS/RTP/SAVPF 120\r\n", "finally", "Another connection wants to upgrade database '", "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported", "pack_uint8", "peer", "socket-error", "printerStateChanged", "_unlock", "lifeTime", "operational", "RTCRtpTransceiver", "waitFor", "printer_profile", "_removeConnection", "onupgradeneeded", "KeyPath ", "'. Closing db now to resume the upgrade.", "iPod", "outbound-rtp", "videoConfiguration", "includeUppers", "baseurl", ". Errors: ", "_buildRequest", "jobName", "removeEventListener", "parameter", "sendAuth", "DataConnection", "generateSessionId", "unpack_string", "jobFailed", "_print", "equals", "tcpType", "contains", "buffer", "parseIceOptions", "reload", "max-compat", " cname:", "direction", "Close", "Collection", "doNextTask", "dependencies", ".bulkDelete(): ", "_blank", "_handleChunk", "WebRTC", "a=ice-options:", "hasOwnProperty", "webcam", "noFilament", "firefox", " instead.", "splice", "getJSONifiedString", "failedKeys", "versionchange", "handleMessage", "raw", "_lostMessages", " Error when sending:", "Could not get list peers from the server.", "googAutoGainControl", "mutatedParts", "text/plain;charset=utf-8", 'Unsupported type "', "signalingState", "RTCIceCandidate", "___id", "setParametersPromises", "turn:numb.viagenie.ca", "Offline", "estimatedFilamentUsage", "remoteCapabilities", "fromCharCode", "Server message received:", "_events", "fileName", "numChannels", "getRandomValues", "db.open() was cancelled", "allowedLabels", "cause", "between", "scale_resolution_down_by must be >= 1.0", "161TdAQRX", "valueMapper", "Filament is depleted", "splitLines", "getStats", "_eventMap", "open", "done", "To Print", "destroyed", "from", "append", "ontrack", "OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer", "user", "turn:", "isQueuePaused", "Creating RTCPeerConnection.", "a=fingerprint:", "printTimeLeft", "Binary", "onunhandled", "upperOpen", "MediaConnection", "transceivers", "payloadType", "_pieces", "utf-8", "addtrack", "addKey", "fileContent", "Range", "sendGcode", "_subscribe", "peerjsp", "printPaused", "ondtlsstatechange", "createElement", "RED", "asap", "_value", "Int", "a=maxptime:", "unpack_int16", "_localStreams", "stopPropagation", "setLocalDescription", "getMany", "DC#:", "cname", "connectionLabel", "createDTMFSender", "a=sendonly", "noiseSuppression", "googNoiseSuppression", "Transaction", "ordered", "BrowserIncompatible", "negotiationneeded", "PRINTFAILED", " cannot reconnect because it is not disconnected from the server!", "CLOUD_HOST", "onlocalcandidate", "create", "createOffer", "id,filamentID", "rid", "Error modifying one or more objects", "mozNoiseSuppression", "peerSyncUpdates", "read", "WhereClause", "autoGainControl", "observable", "mapToClass", "Done", "webrtc", "maxMessageSize", "mkiValue", "estimatedPrintTime", "Attempted to call removeTrack on a closed peerconnection.", "desc", "minChromeVersion", "Syntax", "active", "candidate:", "Cannot connect to the internet. Please check your internet connection.", "Failed to create answer, ", "a=rtcp-fb:", "getPrototypeOf", "referrerpolicy", "isUnifiedPlanSupported", "CURRENT", "jobCreated", "_open", "disabled", "#ffffff", "_sdpSessionVersion", "compound", "1156764UgzvDX", "rectangular", "terminalRequest", "distinct", "answer", "_messagesQueue", "setRemoteCandidates", "&id=", "urls", "firstTimeAdded", "iceConnectionState", "forReferenceOnly", "oniceconnectionstatechange", "onicegatheringstatechange", "It doesn't look like you have permission to list peers IDs. ", "a=rtcp-mux", "moveJobToJobsToSync", "WARNING", "syncAllRequest", "verno", "Answer", "pop", "includeLowers", "pack_int64", "job", "userAgent", "Socket", "isFrozen", "cameraStreamStop", "targetChamber", "addstream", "product", "id, name", "Could not get an ID from the server.", "_wsOpen", "arraybuffer", "Attempting reconnection to server with ID ", "weightRemaining", "Attempted to call addTrack on a closed peerconnection.", "InvalidID", "gcode", "printQueue", "x-storagemutated-1", "H264", "href", "_promise", "onconnectionstatechange", "canTrickleIceCandidates", "nozzleTemperature", "webkitAudioContext", " 9 ", "InvalidArgument", "url", "writeRtpDescription", "parseCryptoKeyParams", "_transaction", "currentDirection", "model", "save", "charCodeAt", "byteLength", "_numPrev", "keyTail", "negotiate", "RTCIceServer.urls", "apikey", "random", "onerror", "Module", "type", ". Label: ", "vip", "catch", "_wsPingTimer", "shimSafari", "googleShoppingProductInfoResponse", "put", "_delayedAbort", "a=mid:", "@@observable", "writeRtpMap", "Array", "m=application 0 ", "Can not set local ", "a=candidate:", "mid", "rtpSender", "idbtrans", "weightTotal", "Table ", "depletedFilament", "a=crypto:", "isIOS", "advanced", "add stream ", "username", "once", "_makeOffer", "a=sctpmap:", "_updateConnectionState", "immutable", "continuePrimaryKey", "fileType", "string", "iterator", "files", "InvalidAccessError", "false", "_lock", "tagName", "_dispatchEvent", "_stream", "modify", "writeMediaSection", "_localStream", "parentDir", "_bufferedSend", "unuse", "getOwnPropertySymbols", "defineProperty", "keyPath", "Could not delete some values", "Transaction committed too early. See http://bit.ly/2kdckMn", "channels", "pingInterval", "webkitIndexedDB", "fileRequest", "getParameters", "rejectionMapper", ".gcode", "The RTCPeerConnection's signalingState is 'closed'.", "startsWithIgnoreCase", "mozIndexedDB", "_tryBuffer", "rejected", "multiEntry", "network", "adapter.js deprecation warnings ", "getCapabilities", "_addStreamToMediaConnection", "_logLevel", "passiveLogin", "parseSsrcMedia", "preventDefault", "supports", "jog", "VersionChange", "assignerName", "mode", "select", "sdpSemantics", "stun:stun.l.google.com:19302", "unpack", "WebKitBlobBuilder", "any", "_addAlgorithm", "fecMechanisms", "NanoFactoryServerCamera", "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", "recvEncodingParameters", "Disconnect peer with ID:", "plugin", "clear", "textContent", "safari", "Can not set remote ", "extrude", "transless", "browserShim", "sendrecv", "&token=", "reserved", "actpass", "EVENT", "parseCandidate", "binary-utf8", "_streams", "plugin/NanoFactory/", "freeze", "level", "NotFound", "edge", "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\n", "primaryKeys", "processing", "uploaderName", "iceTransport", "temperatureHistory", "a=rtcp-mux\r\n", "inbound-rtp", "Created offer.", "depleted", "stream", "unpack_int64", "rear", "localcandidate", "DATABASE_SYNC", "stun:", "protocol", "Snapshot url not setup. Not streaming camera", "getUserMedia", "reject", "connect", "_hasGetAll", "DexieError", "lastPrintTime", "localStreams", "Network", "delete", "onMessage", "Can not call createAnswer after close", "constraint", "Symbol.iterator is not defined.", "_createTransaction", "_abort", "iceGatheringState", "MozBlobBuilder", "sendEncodings", "randomUUID", "entries", "deleteIndex", "onnegotiationneeded", "writeExtmap", "offline", "justLimit", "application", "ignoreTransaction", 'link[rel="modulepreload"]', "pack_bin", "a=max-message-size:", "count", "have-local-pranswer", "maxHeight", "parameters", "_api", "SubTransaction", "Peer ", "_addTracksToConnection", "Aborting!", "Keys missing", "getTransceivers", "printJobStatus", "unpack_uint8", "_cleanup", "preferredPayloadType", "useArrayBufferView", "_parts", "peers", "AES-GCM", "turn:us-0.turn.peerjs.com:3478", "videoConfiguration.cameraType", "Set remoteDescription:", "temps", "throw", "facingMode", "browserDetails", "event", "iceCandidatePoolSize", "_vip", "code", "replaceTrack", "a=extmap:", "ReadOnly", "endTime", "REAUTHREQUIRED", "Given keys array must have same length as given values array.", "kind", "timeout", "maxptime", "useBlobBuilder", "credentials", "peer-unavailable", "createDataChannel", "lowerOpen", "context", "Heartbeat", "_encodingQueue", "nozzleSize", "object", "NotSupportedError", "allKeys", "MAX_KEY", "with alias ", "Schema", "removeFromGroup", "stat", "numFailures", "actionCreated", "emitError", "PR1398_maxLoop", "Database has been closed", "every", "audioVideo", "_initialTrackId", "defaultPrevented", "CONNECTED", "aliasID", "unpack_raw", "PrintFailed", "default", "file", "createAnswer", "lowerBound", "datachannel", "__proto__", '" is taken', "[native code]", "parseOLine", "bufferedAmount", "Print has been cancelled", "fail", "hostname", "BaseConnection", "above", "writeRtcpFb", "DataClone", "_socket", "volume", "onmessage", "tables", "originator", "chrome: ", "_deps", "cameraStream", "supportedBrowsers", "_close", "v=0\r\n", "iceConnectionState is closed, closing connections to ", "There are more than one sender or receiver for the track.", "reducedSize", "onLine", "PRINTING", "offerToReceiveAudio", "test", "width", "\n Error: ", "saveMasterPeerID", "lastKey", "getConnection", "connections", "materialDiameter", "TypeError", "idxByName", "pack_uint16", "hasBeenClosed", "positionChangedResponse", "a=extmap-allow-mixed", "pack_uint64", "_cmp", "wantReceive", "masterPeerID", "_destroyed", "\nm=", "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb", "offer", "_fireOnBlocked", "setTrack", "Safari shim is not included in this adapter release.", "handleSDP", "_blockedFuncs", "below", "use", "_storeMessage", "_cache", "eachUniqueKey", "Data", "_maybeFireNegotiationNeeded", "Invalid operation type: ", "_handleDataMessage", "streams", "add connection ", "Failed to createOffer, ", "getTracks", "pause", "findIndex", "addIceCandidate", "clients", "video", "filamentModifiedRequest", "_pc", "constraints", "crossorigin", "getDisplayMedia", "multi", "stl", "bundlePolicy", "Printer profile changed", "unsubscribe", "Incoming request not valid", "onabort", "filamentAssigned", "_sendQueuedMessages", "where", "Appending to existing queue for ", "_on", "setDirection", "parseMLine", "is_master", "results", "dynamicallyOpened", "handshakeResponseConfirmation", "_novip", "connectionState", "RTCPeerConnection", "parseSsrcGroup", "auto", "a=inactive\r\n", "axes", "secure", "backendDB", "audio", "substring", "isPrimaryKey", "local", "ssl-unavailable", "dataChannel", "WorkerGlobalScope", "stores", "queuePaused", "Created answer.", "endsWith", "jobFileUpdate", "Primary key cannot be multi-valued", "_createTransceiver", "HISTORY", "sctp", "sendonly", "sKf7FlnCyv8AbcgU", "startsWithAnyOf", "div", "nthen", "a function", "SocketClosed", "generateKey", "indexOf", "signingKey", "failures", "whitelist", "&message=", "CLOUD_PORT", "parseCryptoLine", "WHITELISTED", "InvalidAccess", "a=end-of-candidates", "RTCDataChannel", "trim", "_spinCount", "get", "constructor", "_processing", "_remoteStream", "getRemoteStreams", "prototype", "objectStore", "ERROR", "depth", "available", "then", "Warnings", "completion", "extruder", "bulkAdd(): keys argument invalid on tables with inbound keys", "sendEncodingParameters", "Error retrieving list peers", "Bulk", "level-asymmetry-allowed", "RTCTrackEvent", "_connectionstatechangepoly", "symbol", "startsWith", "noneOf", " closed.", "unpack_map", "text", "values", "isArray", "_gather", "splitSections", "__peerData", ":id", "flatMap", "nanofactoryPeers", "peerID", "Upgrade", "EncodingQueue", "wss://", "startConnection", "parent", " failed.", "peerConnection", "encrypt", "reconnect", "modulepreload", "letThrough", "currentJobID", "getBuffer", "fileResponse", "bedLevellingGraph", "The listener must be a function", "rel", "binary", "decryptedData", "socket-closed", "mux", "_dataCount", "needNegotiation", "follow", "nanofactoryInstallDate", "oncomplete", "getOwnPropertyDescriptor", "IDBKeyRange", "digest", "toISOString", "MS edge shim is not included in this adapter release.", "referrerPolicy", "turn:openrelay.metered.ca:443?transport=tcp", "target", "match", "peerjs", "PRINTCANCELLED", "length", "jobRankChange", "save_master_peer_id", "_dc", "hook", "actions_sync", "getConfiguration", 'Type "', "_transceive", "Legacy mandatory/optional constraints not supported.", "Errors", "addTrack", "changedParts", "binaryFeatures", "parseExtmap", "getLocalStreams", "extractKey", "disconnectPrinter", "filamentExtrude", "ondatachannel", "warn", "_disposeIceAndDtlsTransports", "max-bundle", ": Error occured in encoding from blob to arraybuffer, close DC", "msIndexedDB", "GET", "push", "replayFilter", "key", "Table '", "constraints is undefined", "muazkh", "executingAction", "peer_connection_error", "change", " in state ", "percentRemaining", "shift", "point", "resource", "apiKey", "ready", "ceil", "bulkDelete", "Setting remote description", "JSON", "keysOnly", "fileMetadataRequest", "queuePausedReason", "start", "_startPeerConnection", "sdp", "awaits", "signalingstatechange", "Added ICE candidate for:", "Disabled", "keyParams", "color", "setTimeout", "This peer cannot reconnect to the server. It has already been destroyed.", "nanofactoryServerCam", "remove", "outbound", "Request from blacklisted peer: ", "baudrate", "_IDBKeyRange", "onremovestream", "trickle", "parseRtpEncodingParameters", "_addConnection", "actionDeleted", "status", " would benefit of a ", "The query ", "DatabaseClosed", "jobCancelled", '{"name":"peerjs","version":"1.4.7","keywords":["peerjs","webrtc","p2p","rtc"],"description":"PeerJS client","homepage":"https://peerjs.com","bugs":{"url":"https://github.com/peers/peerjs/issues"},"repository":{"type":"git","url":"https://github.com/peers/peerjs"},"license":"MIT","contributors":["Michelle Bu <michelle@michellebu.com>","afrokick <devbyru@gmail.com>","ericz <really.ez@gmail.com>","Jairo <kidandcat@gmail.com>","Jonas Gloning <34194370+jonasgloning@users.noreply.github.com>","Jairo Caro-Accino Viciana <jairo@galax.be>","Carlos Caballero <carlos.caballero.gonzalez@gmail.com>","hc <hheennrryy@gmail.com>","Muhammad Asif <capripio@gmail.com>","PrashoonB <prashoonbhattacharjee@gmail.com>","Harsh Bardhan Mishra <47351025+HarshCasper@users.noreply.github.com>","akotynski <aleksanderkotbury@gmail.com>","lmb <i@lmb.io>","Jairooo <jairocaro@msn.com>","Moritz St\xFCckler <moritz.stueckler@gmail.com>","Simon <crydotsnakegithub@gmail.com>","Denis Lukov <denismassters@gmail.com>","Philipp Hancke <fippo@andyet.net>","Hans Oksendahl <hansoksendahl@gmail.com>","Jess <jessachandler@gmail.com>","khankuan <khankuan@gmail.com>","DUODVK <kurmanov.work@gmail.com>","XiZhao <kwang1imsa@gmail.com>","Matthias Lohr <matthias@lohr.me>","=frank tree <=frnktrb@googlemail.com>","Andre Eckardt <aeckardt@outlook.com>","Chris Cowan <agentme49@gmail.com>","Alex Chuev <alex@chuev.com>","alxnull <alxnull@e.mail.de>","Yemel Jardi <angel.jardi@gmail.com>","Ben Parnell <benjaminparnell.94@gmail.com>","Benny Lichtner <bennlich@gmail.com>","fresheneesz <bitetrudpublic@gmail.com>","bob.barstead@exaptive.com <bob.barstead@exaptive.com>","chandika <chandika@gmail.com>","emersion <contact@emersion.fr>","Christopher Van <cvan@users.noreply.github.com>","eddieherm <edhermoso@gmail.com>","Eduardo Pinho <enet4mikeenet@gmail.com>","Evandro Zanatta <ezanatta@tray.net.br>","Gardner Bickford <gardner@users.noreply.github.com>","Gian Luca <gianluca.cecchi@cynny.com>","PatrickJS <github@gdi2290.com>","jonnyf <github@jonathanfoss.co.uk>","Hizkia Felix <hizkifw@gmail.com>","Hristo Oskov <hristo.oskov@gmail.com>","Isaac Madwed <i.madwed@gmail.com>","Ilya Konanykhin <ilya.konanykhin@gmail.com>","jasonbarry <jasbarry@me.com>","Jonathan Burke <jonathan.burke.1311@googlemail.com>","Josh Hamit <josh.hamit@gmail.com>","Jordan Austin <jrax86@gmail.com>","Joel Wetzell <jwetzell@yahoo.com>","xizhao <kevin.wang@cloudera.com>","Alberto Torres <kungfoobar@gmail.com>","Jonathan Mayol <mayoljonathan@gmail.com>","Jefferson Felix <me@jsfelix.dev>","Rolf Erik Lekang <me@rolflekang.com>","Kevin Mai-Husan Chia <mhchia@users.noreply.github.com>","Pepijn de Vos <pepijndevos@gmail.com>","JooYoung <qkdlql@naver.com>","Tobias Speicher <rootcommander@gmail.com>","Steve Blaurock <sblaurock@gmail.com>","Kyrylo Shegeda <shegeda@ualberta.ca>","Diwank Singh Tomer <singh@diwank.name>","So\u0308ren Balko <Soeren.Balko@gmail.com>","Arpit Solanki <solankiarpit1997@gmail.com>","Yuki Ito <yuki@gnnk.net>","Artur Zayats <zag2art@gmail.com>"],"funding":{"type":"opencollective","url":"https://opencollective.com/peer"},"collective":{"type":"opencollective","url":"https://opencollective.com/peer"},"files":["dist/*"],"sideEffects":["lib/global.ts","lib/supports.ts"],"main":"dist/bundler.cjs","module":"dist/bundler.mjs","browser-minified":"dist/peerjs.min.js","browser-unminified":"dist/peerjs.js","types":"dist/types.d.ts","engines":{"node":">= 10"},"targets":{"types":{"source":"lib/exports.ts"},"main":{"source":"lib/exports.ts","sourceMap":{"inlineSources":true}},"module":{"source":"lib/exports.ts","includeNodeModules":["eventemitter3"],"sourceMap":{"inlineSources":true}},"browser-minified":{"context":"browser","outputFormat":"global","optimize":true,"engines":{"browsers":"cover 99%, not dead"},"source":"lib/global.ts"},"browser-unminified":{"context":"browser","outputFormat":"global","optimize":false,"engines":{"browsers":"cover 99%, not dead"},"source":"lib/global.ts"}},"scripts":{"contributors":"git-authors-cli --print=false && prettier --write package.json && git add package.json package-lock.json && git commit -m \\"chore(contributors): update and sort contributors list\\"","check":"tsc --noEmit","watch":"parcel watch","build":"rm -rf dist && parcel build","prepublishOnly":"npm run build","test":"mocha -r ts-node/register -r jsdom-global/register test/**/*.ts","format":"prettier --write .","semantic-release":"semantic-release"},"devDependencies":{"@parcel/config-default":"^2.5.0","@parcel/packager-ts":"^2.5.0","@parcel/transformer-typescript-tsc":"^2.5.0","@parcel/transformer-typescript-types":"^2.5.0","@semantic-release/changelog":"^6.0.1","@semantic-release/git":"^10.0.1","@types/chai":"^4.3.0","@types/mocha":"^9.1.0","@types/node":"^17.0.18","chai":"^4.3.6","git-authors-cli":"^1.0.40","jsdom":"^19.0.0","jsdom-global":"^3.0.2","mocha":"^9.2.0","mock-socket":"8.0.5","parcel":"^2.5.0","parcel-transformer-tsc-sourcemaps":"^1.0.2","prettier":"^2.6.2","semantic-release":"^19.0.2","standard":"^16.0.4","ts-node":"^10.5.0","typescript":"^4.5.5"},"dependencies":{"@swc/helpers":"^0.3.13","eventemitter3":"^4.0.7","peerjs-js-binarypack":"1.0.1","webrtc-adapter":"^7.7.1"}}', "Version", "getIceParameters", "remote-candidate", "_setupListeners", "#worker1", "queue", "OpenFailed", "Offer received for existing Connection ID:", "filamentModified", "onversionchange", "PrintCancelled", "InvalidKey", " bytes)", "getBlob", "iPhone", '" not yet supported', "progress", "addEventType", "unpack_uint16"];
  _0x495d = function() {
    return _0x3e8765;
  };
  return _0x495d();
}
function requestFileFromPeer(_0x3fbaec, _0x29f916, _0xfc7e67, _0x324e02) {
  sendData(_0x3fbaec, _0x29f916, { "id": _0xfc7e67, "cause": _0x324e02 }, ConnectionLabels["fileRequest"]);
}
async function handleAction(_0x35f9e8, _0xfa0553, _0x3b2b1d, _0x17d0fc, _0x5dfe6b, _0x3bd0ef) {
  var _0x12df28 = _0x780a7e;
  switch (_0x17d0fc) {
    case ConnectionLabels["actionCreated"]:
    case ConnectionLabels[_0x12df28(1015)]:
      let _0xc27457 = new Blob([_0x3bd0ef], { "type": _0x12df28(1325) }), _0x959e5e = new File([_0xc27457], _0x5dfe6b[_0x12df28(765)] + _0x12df28(1574)), _0x400f12;
      try {
        _0x400f12 = await db["actions"][_0x12df28(1892)](_0x5dfe6b["id"]);
      } catch (_0x468666) {
        console[_0x12df28(2165)](_0x468666);
        return;
      }
      _0x400f12 ? (_0x400f12[_0x12df28(765)] = _0x5dfe6b[_0x12df28(765)], _0x400f12[_0x12df28(747)] = _0x959e5e, _0x400f12[_0x12df28(595)] = _0x5dfe6b[_0x12df28(595)], _0x400f12["save"](_0x400f12)) : await new Action({ "id": _0x5dfe6b["id"], "name": _0x5dfe6b[_0x12df28(765)], "printerID": networking[_0x12df28(1927)], "script": _0x959e5e, "filamentAction": _0x5dfe6b[_0x12df28(595)] })[_0x12df28(2170)]();
      sendFileToAllAvailablePeers(_0xc27457, _0x5dfe6b, _0x17d0fc);
      break;
    case ConnectionLabels["actionExecuted"]:
      let _0x3bc6d1;
      try {
        _0x3bc6d1 = (await db[_0x12df28(998)][_0x12df28(1837)](_0x12df28(765))[_0x12df28(1291)](_0x35f9e8["name"])[_0x12df28(2136)]())[0];
      } catch (_0x348414) {
        console[_0x12df28(2165)](_0x348414);
        return;
      }
      if (!_0x3bc6d1)
        return;
      changePrinterStatusForAction(!![], _0x3bc6d1["id"]);
      let _0x14a1ba = await _0x3bc6d1[_0x12df28(747)][_0x12df28(1918)]();
      customGcodeLinesToExecute[_0x12df28(1991)](..._0x14a1ba[_0x12df28(1201)](/\r?\n/)), await executeCustomGcode();
      break;
    case ConnectionLabels[_0x12df28(2035)]:
      let _0x396437;
      try {
        _0x396437 = (await db[_0x12df28(998)][_0x12df28(1837)](_0x12df28(765))["equals"](_0x35f9e8[_0x12df28(765)])[_0x12df28(2136)]())[0];
      } catch (_0xaf295f) {
        console[_0x12df28(2165)](_0xaf295f);
        return;
      }
      _0x396437["remove"](), sendDataToAllAvailablePeers(_0x35f9e8, ConnectionLabels["actionDeleted"]);
      break;
    case ConnectionLabels["bedLevellingAction"]:
      handleBedLevellingAction(parseInt(_0x35f9e8[_0x12df28(2003)]));
      break;
  }
}
function handleBedLevellingAction(_0xe58d14) {
  var _0x5f128d = _0x780a7e;
  let _0x1511f8 = getBedLevellingActionXCoordinate(_0xe58d14)[_0x5f128d(959)](3), _0x42c20a = getBedLevellingActionYCoordinate(_0xe58d14)[_0x5f128d(959)](3), _0x14aca9 = [_0x5f128d(2078), "G0 X" + _0x1511f8 + " Y" + _0x42c20a, _0x5f128d(1202)];
  customGcodeLinesToExecute[_0x5f128d(1991)](..._0x14aca9), executeCustomGcode();
}
function getBedLevellingActionXCoordinate(_0x201c1f) {
  var _0x14c37f = _0x780a7e;
  switch (_0x201c1f) {
    case 1:
    case 4:
    case 7:
      return printer[_0x14c37f(1762)][_0x14c37f(1779)] / 6;
    case 2:
    case 5:
    case 8:
      return printer[_0x14c37f(1762)][_0x14c37f(1779)] / 2;
    case 3:
    case 6:
    case 9:
      return 5 * printer[_0x14c37f(1762)][_0x14c37f(1779)] / 6;
  }
}
function getBedLevellingActionYCoordinate(_0x114ab6) {
  var _0x3d7ee8 = _0x780a7e;
  switch (_0x114ab6) {
    case 1:
    case 2:
    case 3:
      return printer[_0x3d7ee8(1762)][_0x3d7ee8(1900)] / 6;
    case 4:
    case 5:
    case 6:
      return printer["volume"]["depth"] / 2;
    case 7:
    case 8:
    case 9:
      return 5 * printer["volume"]["depth"] / 6;
  }
}
const FILE_LABELS = [ConnectionLabels["fileResponse"], ConnectionLabels[_0x780a7e(1866)], ConnectionLabels[_0x780a7e(1732)], ConnectionLabels[_0x780a7e(1015)]], LABELS_TO_IGNORE_FOR_ENCRYPTION = [ConnectionLabels[_0x780a7e(505)], ConnectionLabels[_0x780a7e(603)], ConnectionLabels[_0x780a7e(692)], ConnectionLabels[_0x780a7e(2086)], ConnectionLabels["cameraStreamStop"]];
let currentJobPrintTimeLeft = null, peerIDAliasesMap = /* @__PURE__ */ new Map([]);
async function handleIncomingDataGuard(_0x183bbf, _0x182374, _0x368ff4, _0x47013a, _0x5520f6, _0x2f1b34) {
  var _a3;
  var _0x571588 = _0x780a7e;
  console[_0x571588(942)](_0x571588(979) + ConnectionLabels[_0x368ff4] + _0x571588(645) + _0x183bbf);
  if (LABELS_TO_IGNORE_FOR_ENCRYPTION[_0x571588(589)](_0x368ff4)) {
    switch (_0x368ff4) {
      case ConnectionLabels["handshakeRequest"]:
        await handleHandshakeRequest(_0x183bbf, _0x182374);
        break;
      case ConnectionLabels["handshakeResponse"]:
        await handleHandshakeResponse(_0x183bbf, _0x182374, _0x47013a);
        break;
      case ConnectionLabels[_0x571588(2086)]:
        console[_0x571588(942)](_0x47013a), await handleCameraStreamRequest(_0x47013a, _0x183bbf, _0x182374);
        break;
      case ConnectionLabels["cameraStreamStop"]:
        let _0x2f11f1 = cameraStreamConnections[_0x183bbf][_0x571588(1819)]((_0xf68521) => _0xf68521["aliasID"] === _0x182374);
        if (_0x2f11f1 === -1)
          return;
        (_a3 = cameraStreamConnections[_0x183bbf][_0x2f11f1][_0x571588(2089)]) == null ? void 0 : _a3["close"]();
        break;
    }
    return;
  }
  let _0x488aac = await incomingRequestGuard(_0x183bbf, _0x47013a, _0x5520f6, _0x368ff4);
  if (!_0x488aac["isRequestValid"]) {
    console["log"](_0x571588(1833), _0x368ff4);
    return;
  }
  handleIncomingData(arrayBufferToString(_0x488aac[_0x571588(1946)]), _0x183bbf, _0x182374, _0x368ff4, _0x2f1b34);
}
async function handleIncomingData(_0x23cef7, _0x376fcc, _0x31e21e, _0x4636fd, _0x332128) {
  var _0x5b27e2 = _0x780a7e;
  let _0x5cb0f0 = "", _0x286696 = {};
  if (FILE_LABELS["includes"](_0x4636fd))
    _0x5cb0f0 = JSON[_0x5b27e2(611)](_0x23cef7);
  else {
    if (typeof _0x23cef7 === _0x5b27e2(1548) && _0x4636fd !== ConnectionLabels[_0x5b27e2(505)])
      _0x286696 = JSON[_0x5b27e2(611)](_0x23cef7);
  }
  let _0x578349 = JSON["parse"](_0x332128);
  delete _0x578349["peerID"];
  if (isIdInList(_0x376fcc, PeerType["WHITELISTED"]))
    switch (_0x4636fd) {
      case ConnectionLabels[_0x5b27e2(1463)]:
        handleSyncAllRequest(_0x376fcc, _0x31e21e, _0x286696);
        break;
      case ConnectionLabels[_0x5b27e2(567)]:
      case ConnectionLabels["disconnectPrinter"]:
      case ConnectionLabels[_0x5b27e2(859)]:
      case ConnectionLabels[_0x5b27e2(516)]:
      case ConnectionLabels["filamentExtrude"]:
      case ConnectionLabels[_0x5b27e2(442)]:
      case ConnectionLabels[_0x5b27e2(1447)]:
      case ConnectionLabels[_0x5b27e2(985)]:
      case ConnectionLabels[_0x5b27e2(770)]:
      case ConnectionLabels[_0x5b27e2(395)]:
      case ConnectionLabels[_0x5b27e2(1790)]:
      case ConnectionLabels[_0x5b27e2(1075)]:
      case ConnectionLabels[_0x5b27e2(843)]:
      case ConnectionLabels[_0x5b27e2(1140)]:
      case ConnectionLabels["bedLevelingRequest"]:
      case ConnectionLabels[_0x5b27e2(1474)]:
        handlePrinter(_0x286696, _0x376fcc, _0x31e21e, _0x4636fd);
        break;
      case ConnectionLabels[_0x5b27e2(1439)]:
      case ConnectionLabels[_0x5b27e2(559)]:
      case ConnectionLabels[_0x5b27e2(2040)]:
      case ConnectionLabels[_0x5b27e2(447)]:
      case ConnectionLabels[_0x5b27e2(1966)]:
      case ConnectionLabels["jobPause"]:
      case ConnectionLabels[_0x5b27e2(1073)]:
      case ConnectionLabels["jobFilamentModified"]:
      case ConnectionLabels[_0x5b27e2(1866)]:
      case ConnectionLabels["fileMetadataRequest"]:
      case ConnectionLabels[_0x5b27e2(2064)]:
        handleJob(_0x286696, _0x376fcc, _0x31e21e, _0x4636fd, _0x578349, _0x5cb0f0);
        break;
      case ConnectionLabels[_0x5b27e2(1941)]:
      case ConnectionLabels["fileRequest"]:
        handleFileSharing(_0x286696, _0x376fcc, _0x31e21e, _0x4636fd, _0x578349, _0x5cb0f0);
        break;
      case ConnectionLabels[_0x5b27e2(1835)]:
      case ConnectionLabels["filamentRemoved"]:
      case ConnectionLabels["filamentModified"]:
      case ConnectionLabels["filamentModifiedRequest"]:
        handleFilament(_0x286696, _0x376fcc, _0x31e21e, _0x4636fd);
        break;
      case ConnectionLabels["actionCreated"]:
      case ConnectionLabels["actionExecuted"]:
      case ConnectionLabels[_0x5b27e2(1015)]:
      case ConnectionLabels["actionDeleted"]:
      case ConnectionLabels[_0x5b27e2(412)]:
        handleAction(_0x286696, _0x376fcc, _0x31e21e, _0x4636fd, _0x578349, _0x5cb0f0);
        break;
      case ConnectionLabels[_0x5b27e2(738)]:
      case ConnectionLabels[_0x5b27e2(1004)]:
      case ConnectionLabels["usernameUpdate"]:
      case ConnectionLabels[_0x5b27e2(590)]:
      case ConnectionLabels[_0x5b27e2(1729)]:
        handleSecurityTasks(_0x286696, _0x376fcc, _0x31e21e, _0x4636fd);
        break;
      case ConnectionLabels[_0x5b27e2(1845)]:
        let _0x37a699 = await getPeerKeys(_0x376fcc);
        _0x37a699["keysExchanged"] = !![], await _0x37a699[_0x5b27e2(1503)](_0x37a699);
        break;
      case ConnectionLabels[_0x5b27e2(2143)]:
        window["location"][_0x5b27e2(1296)]();
        break;
    }
  else {
    if (isIdInList(_0x376fcc, PeerType[_0x5b27e2(1095)]))
      _0x4636fd === ConnectionLabels[_0x5b27e2(1463)] && await addToList(PeerType[_0x5b27e2(1095)], _0x376fcc, _0x286696["username"], _0x286696["deviceName"]), console[_0x5b27e2(942)](_0x5b27e2(2028) + _0x376fcc + _0x5b27e2(1515) + ConnectionLabels[_0x4636fd]);
    else {
      if (_0x4636fd === ConnectionLabels[_0x5b27e2(1463)])
        networking[_0x5b27e2(1795)][_0x5b27e2(1965)] > 0 && isIdInList(networking["masterPeerID"], PeerType[_0x5b27e2(1886)]) ? extractGroupID(networking[_0x5b27e2(1795)])[_0x5b27e2(1965)] > 0 ? sendToAllMembersOfGroup(extractGroupID(networking[_0x5b27e2(1795)]), _0x286696, ConnectionLabels[_0x5b27e2(502)]) : sendDataToAllAliases(networking["masterPeerID"], _0x286696, ConnectionLabels["peerPermissionRequest"]) : (await handleMasterPeerIDChange(_0x376fcc, _0x286696["username"], _0x286696[_0x5b27e2(1187)]), handleSyncAllRequest(_0x376fcc, _0x31e21e, _0x286696));
      else {
        if (_0x4636fd === ConnectionLabels[_0x5b27e2(2072)] && isIdInList(extractDeviceID(_0x376fcc), PeerType[_0x5b27e2(1886)])) {
          removeFromList(PeerType[_0x5b27e2(1886)], extractDeviceID(_0x376fcc)), addToList(PeerType["WHITELISTED"], _0x376fcc, _0x286696[_0x5b27e2(1540)], _0x286696["deviceName"]);
          let _0x5f53ff = await getPeerKeys(extractDeviceID(_0x376fcc)), _0x5c4816 = { "peerID": _0x376fcc, "encryptionKey": _0x5f53ff[_0x5b27e2(565)], "signingKey": _0x5f53ff["signingKey"], "keysExchanged": !![], "allowedLabels": _0x5f53ff[_0x5b27e2(1342)] }, _0x44a116 = new PeerKeys(_0x5c4816);
          await _0x44a116[_0x5b27e2(2170)](), await _0x5f53ff[_0x5b27e2(2026)](), extractDeviceID(_0x376fcc) === networking[_0x5b27e2(1795)] && (await handleMasterPeerIDChange(_0x376fcc, _0x286696[_0x5b27e2(1540)], _0x286696[_0x5b27e2(1187)]), handleSyncAllRequest(_0x376fcc, _0x31e21e, _0x286696));
        }
      }
    }
  }
}
async function handleSyncAllRequest(_0x7983f5, _0x1ef903, _0x35d8b9) {
  var _a3, _b2;
  var _0x274022 = _0x780a7e;
  let _0x21fdaa;
  try {
    _0x21fdaa = { "printer_profile": (await db[_0x274022(893)]["toArray"]())[0], "current_job": { "id": localStorage[_0x274022(381)](CURRENT_JOB_ID_KEY) }, "current_action_id": currentlyExecutingActionID, "print_queue": await db[_0x274022(1486)][_0x274022(2136)](), "jobs_history": await db[_0x274022(470)][_0x274022(2136)](), "current_filament": await db[_0x274022(592)][_0x274022(1892)](printer["filamentID"]), "scripts": (await db["actions"][_0x274022(2136)]())[_0x274022(376)]((_0x5e95c4) => {
      var _0x209f0d = _0x274022;
      return delete _0x5e95c4[_0x209f0d(747)], _0x5e95c4;
    }), "is_master": ![], "whitelisted": {}, "blacklisted": {} };
  } catch (_0x2f073e) {
    console[_0x274022(2165)](_0x2f073e);
    return;
  }
  networking[_0x274022(1795)][_0x274022(589)]("-") ? _0x7983f5[_0x274022(589)]("-") && (_0x21fdaa[_0x274022(1842)] = extractGroupID(networking[_0x274022(1795)]) === extractGroupID(_0x7983f5)) : _0x21fdaa[_0x274022(1842)] = _0x7983f5 === networking["masterPeerID"], _0x21fdaa[_0x274022(1842)] && (_0x21fdaa[_0x274022(980)] = nanofactoryPeersObject[_0x274022(1315)](PeerType["WHITELISTED"]), _0x21fdaa["blacklisted"] = nanofactoryPeersObject[_0x274022(1315)](PeerType[_0x274022(1095)])), _0x21fdaa[_0x274022(1270)][_0x274022(1632)] = printerTemperatureHistory, sendData(_0x7983f5, _0x1ef903, _0x21fdaa, ConnectionLabels["syncAllResponse"]), addToList(PeerType[_0x274022(1886)], _0x7983f5, (_a3 = _0x35d8b9[_0x274022(1540)]) != null ? _a3 : "", (_b2 = _0x35d8b9[_0x274022(1187)]) != null ? _b2 : ""), addIDToPeerIDAliasesMap(_0x7983f5, _0x1ef903);
}
async function handleHandshakeRequest(_0x52fb8f, _0xbda27c) {
  var _0x22bd34 = _0x780a7e;
  let _0x4ee65e = await getPeerKeys(_0x52fb8f);
  !_0x4ee65e && (_0x4ee65e = await generateNewKeyPair(_0x52fb8f));
  if (_0x4ee65e[_0x22bd34(946)]) {
    console[_0x22bd34(942)](_0x22bd34(583));
    return;
  }
  sendData(_0x52fb8f, _0xbda27c, { "encryptionKey": await exportKey(_0x4ee65e[_0x22bd34(565)]), "signingKey": await exportKey(_0x4ee65e[_0x22bd34(1880)]), "allowedLabels": _0x4ee65e[_0x22bd34(1342)] }, ConnectionLabels[_0x22bd34(603)]);
}
async function handleHandshakeResponse(_0x147389, _0x4d5377, _0x131508) {
  var _0x4ddc91 = _0x780a7e;
  let _0x4a2662 = await importKey(_0x131508[_0x4ddc91(565)], encryptingAlgorithm, ["encrypt", _0x4ddc91(876)]), _0x3bd4e1 = await importKey(_0x131508[_0x4ddc91(1880)], signingAlgorithm, [_0x4ddc91(1100), _0x4ddc91(827)]), _0x4dcf3d = { "peerID": _0x147389, "encryptionKey": _0x4a2662, "signingKey": _0x3bd4e1, "keysExchanged": !![], "allowedLabels": "*" }, _0x5d7181 = new PeerKeys(_0x4dcf3d);
  await _0x5d7181[_0x4ddc91(2170)](), await sendData(_0x147389, _0x4d5377, {}, ConnectionLabels[_0x4ddc91(1845)]), sendAllUnsentRequests(_0x147389, _0x4d5377);
}
async function handleSocketMessage(_0x307748) {
  var _a3, _b2;
  var _0x4f519a = _0x780a7e;
  switch (_0x307748["event"]) {
    case socketEventTypes[_0x4f519a(1740)]:
    case socketEventTypes["REAUTHREQUIRED"]:
      OctoPrint["browser"][_0x4f519a(1586)]()[_0x4f519a(1353)](function(_0x538a51) {
        var _0x528799 = _0x4f519a;
        OctoPrint[_0x528799(908)][_0x528799(1285)](_0x538a51[_0x528799(765)], _0x538a51["session"]);
      });
      break;
    case socketEventTypes[_0x4f519a(1869)]:
      OctoPrint["socket"][_0x4f519a(400)]();
      break;
    case socketEventTypes["CURRENT"]:
      if (localStorage["getItem"](CURRENT_JOB_ID_KEY) && _0x4f519a(1469) in _0x307748[_0x4f519a(797)]) {
        if (!currentJobExpectedFilamentUsage)
          assignCurrentJobExpectedFilamentUsage((_b2 = (_a3 = _0x307748["data"][_0x4f519a(1469)]["filament"]) == null ? void 0 : _a3["tool0"]) != null ? _b2 : { "length": 0, "volume": 0 });
      }
      if (localStorage["getItem"](CURRENT_JOB_ID_KEY) && _0x4f519a(2058) in _0x307748[_0x4f519a(797)]) {
        let _0x1226f4 = { "data": { "id": localStorage[_0x4f519a(381)](CURRENT_JOB_ID_KEY), "progress": { "completion": parseFloat(_0x307748[_0x4f519a(797)][_0x4f519a(2058)][_0x4f519a(1904)])[_0x4f519a(959)](1) }, "estimatedFilamentUsage": currentJobExpectedFilamentUsage, "actualFilamentUsage": { "length": currentJobFilamentUsageLength, "volume": 0 }, "estimatedPrintTime": _0x307748[_0x4f519a(797)][_0x4f519a(1469)][_0x4f519a(1425)], "printTime": _0x307748[_0x4f519a(797)]["progress"][_0x4f519a(1125)], "printTimeLeft": _0x307748["data"][_0x4f519a(2058)][_0x4f519a(1365)] } };
        _0x1226f4[_0x4f519a(797)][_0x4f519a(2058)]["completion"] && (currentJobPrintTimeLeft = _0x307748[_0x4f519a(797)]["progress"]["printTimeLeft"], await sendContinuousConnections(_0x1226f4, StreamType[_0x4f519a(1082)]));
      }
      _0x4f519a(1697) in _0x307748[_0x4f519a(797)] && _0x307748[_0x4f519a(797)][_0x4f519a(1697)][_0x4f519a(1965)] > 0 && (await sendContinuousConnections({ "data": _0x307748[_0x4f519a(797)]["temps"] }, StreamType[_0x4f519a(723)]), updatePrinterTemperatureHistoryArray(_0x307748["data"]["temps"]));
      "logs" in _0x307748["data"] && (await sendContinuousConnections(_0x307748[_0x4f519a(797)][_0x4f519a(851)], StreamType[_0x4f519a(2101)]), handleDataFromLogs(_0x307748[_0x4f519a(797)][_0x4f519a(851)]));
      break;
    case socketEventTypes[_0x4f519a(1618)]:
      handleOctoprintEvents(_0x307748);
      break;
    case socketEventTypes[_0x4f519a(694)]:
      if (Object["keys"](_0x307748[_0x4f519a(797)][_0x4f519a(797)])[_0x4f519a(589)](_0x4f519a(496))) {
        try {
          await db[_0x4f519a(893)][_0x4f519a(1607)](), await db[_0x4f519a(1198)][_0x4f519a(1607)](), await db[_0x4f519a(1926)][_0x4f519a(1607)](), await db[_0x4f519a(1076)][_0x4f519a(1607)](), await db[_0x4f519a(1486)][_0x4f519a(1607)](), await db["filaments"][_0x4f519a(1607)](), await db[_0x4f519a(390)]["clear"](), await db[_0x4f519a(470)][_0x4f519a(1607)](), await db["actions"]["clear"]();
        } catch (_0x507f15) {
          console[_0x4f519a(2165)](_0x507f15);
          return;
        }
        window[_0x4f519a(1246)][_0x4f519a(1296)]();
      } else {
        if (Object[_0x4f519a(605)](_0x307748[_0x4f519a(797)]["data"])["includes"](_0x4f519a(346)))
          closeSnapshotsStreamWindow();
        else {
          if (Object[_0x4f519a(605)](_0x307748[_0x4f519a(797)][_0x4f519a(797)])[_0x4f519a(589)](_0x4f519a(1795))) {
            let _0x50770a = new URL(window[_0x4f519a(1246)][_0x4f519a(1489)]);
            _0x50770a[_0x4f519a(983)]["set"](_0x4f519a(1795), _0x307748["data"][_0x4f519a(797)][_0x4f519a(1795)]), window[_0x4f519a(1352)](_0x50770a[_0x4f519a(1489)], "_self");
          }
        }
      }
      break;
  }
}
async function handleOctoprintEvents(_0x55ef5e) {
  var _0x56d5b1 = _0x780a7e;
  switch (_0x55ef5e["data"][_0x56d5b1(1514)]) {
    case OctoPrintEventTypes[_0x56d5b1(566)]:
      printer[_0x56d5b1(620)][_0x56d5b1(2036)] = convertPrinterState(_0x55ef5e[_0x56d5b1(797)][_0x56d5b1(613)][_0x56d5b1(2061)]);
      if (printer[_0x56d5b1(620)][_0x56d5b1(2036)] !== PrinterStatus["executingAction"])
        setCurrentlyExecutingActionID("");
      printer[_0x56d5b1(1503)]({ "state": printer[_0x56d5b1(620)] });
      let _0x5c4c9f = idsOfFilesWithDuplicateFileNamesToSend["length"] - 1;
      while (_0x5c4c9f > -1) {
        let _0x4d9ec1;
        try {
          _0x4d9ec1 = await db[_0x56d5b1(390)][_0x56d5b1(1892)](idsOfFilesWithDuplicateFileNamesToSend[_0x5c4c9f]);
        } catch (_0x133ce4) {
          console["error"](_0x133ce4);
          return;
        }
        if (!_0x4d9ec1) {
          _0x5c4c9f -= 1;
          continue;
        }
        await octoprintFileUploadGuard(_0x4d9ec1) && (sendFileToOctoPrint(new File([_0x4d9ec1[_0x56d5b1(1376)]], _0x4d9ec1[_0x56d5b1(1338)] + ".gcode")), removeFileIdFromIdsOfDuplicateFilesArray(_0x5c4c9f)), _0x5c4c9f -= 1;
      }
      await informAboutPrinterStateChange();
      break;
    case OctoPrintEventTypes["PRINTSTARTED"]:
      localStorage[_0x56d5b1(381)](CURRENT_JOB_ID_KEY) && sendDataToAllAvailablePeers({ "data": { "id": localStorage[_0x56d5b1(381)](CURRENT_JOB_ID_KEY), "startTime": new Date() } }, ConnectionLabels[_0x56d5b1(1217)]);
      resetExtruder();
      break;
    case OctoPrintEventTypes[_0x56d5b1(669)]:
    case OctoPrintEventTypes[_0x56d5b1(1405)]:
    case OctoPrintEventTypes[_0x56d5b1(1964)]:
      if (localStorage["getItem"](CURRENT_JOB_ID_KEY))
        handleJobFinished(_0x55ef5e[_0x56d5b1(797)][_0x56d5b1(1514)]);
      break;
  }
}
function getLabelsFromOctoprintEvent(_0x21f9dc) {
  var _0x247ea7 = _0x780a7e;
  let _0x593fc2 = {};
  if (_0x21f9dc === OctoPrintEventTypes[_0x247ea7(669)])
    _0x593fc2[_0x247ea7(2013)] = QueuePausedReason[_0x247ea7(536)], _0x593fc2["connectionLabel"] = ConnectionLabels[_0x247ea7(2124)], _0x593fc2[_0x247ea7(1686)] = PrintJobStatus[_0x247ea7(1193)];
  else
    _0x21f9dc === OctoPrintEventTypes[_0x247ea7(1964)] ? (_0x593fc2[_0x247ea7(2013)] = QueuePausedReason[_0x247ea7(1034)], _0x593fc2[_0x247ea7(1396)] = ConnectionLabels[_0x247ea7(2040)], _0x593fc2[_0x247ea7(1686)] = PrintJobStatus[_0x247ea7(547)]) : (_0x593fc2[_0x247ea7(2013)] = QueuePausedReason["printFailed"], _0x593fc2[_0x247ea7(1396)] = ConnectionLabels[_0x247ea7(1289)], _0x593fc2[_0x247ea7(1686)] = PrintJobStatus["FAILED"]);
  return _0x593fc2;
}
async function informAboutPrinterStateChange() {
  var _0x28796b = _0x780a7e;
  let _0x9718f3 = { "data": printer[_0x28796b(620)], "info": {} };
  if (printer[_0x28796b(620)]["status"] === PrinterStatus[_0x28796b(1997)])
    _0x9718f3["info"]["actionID"] = currentlyExecutingActionID;
  sendDataToAllAvailablePeers(_0x9718f3, ConnectionLabels["printerStateChanged"]);
}
function resetCurrentJobPrintTimeLeft() {
  currentJobPrintTimeLeft = null;
}
function addIDToPeerIDAliasesMap(_0x7f83ab, _0x2c8891) {
  var _0x5610ce = _0x780a7e;
  if (peerIDAliasesMap[_0x5610ce(432)](_0x7f83ab))
    peerIDAliasesMap["set"](_0x7f83ab, peerIDAliasesMap["get"](_0x7f83ab)["add"](_0x2c8891));
  else
    peerIDAliasesMap[_0x5610ce(2080)](_0x7f83ab, /* @__PURE__ */ new Set([_0x2c8891]));
}
function removeAliasFromPeerIDAliasesMap(_0x2d2261, _0x111f5a) {
  var _0x113efb = _0x780a7e;
  if (_0x111f5a) {
    if (peerIDAliasesMap["has"](_0x111f5a))
      peerIDAliasesMap[_0x113efb(2080)](_0x111f5a, removeFromSetAndReturnSet(peerIDAliasesMap["get"](_0x111f5a), _0x2d2261));
  } else
    for (let [_0x12b0b3, _0x2f9126] of peerIDAliasesMap) {
      if (_0x2f9126[_0x113efb(432)](_0x2d2261)) {
        peerIDAliasesMap["set"](_0x12b0b3, removeFromSetAndReturnSet(peerIDAliasesMap[_0x113efb(1892)](_0x12b0b3), _0x2d2261));
        break;
      }
    }
}
function removePeerIDFromPeerIDAliasesMap(_0x393237) {
  var _0x122c6e = _0x780a7e;
  peerIDAliasesMap[_0x122c6e(1653)](_0x393237);
}
function removeFromSetAndReturnSet(_0x2c1490, _0x4c54f4) {
  return _0x2c1490["delete"](_0x4c54f4), _0x2c1490;
}
var bufferbuilder = { "exports": {} };
(function(_0x5b0697) {
  var _0x12cc99 = _0x780a7e, _0x5200ab = {};
  _0x5200ab[_0x12cc99(1714)] = function() {
    try {
      return new Blob([]), ![];
    } catch (_0x4b6dc7) {
      return !![];
    }
  }(), _0x5200ab[_0x12cc99(1690)] = !_0x5200ab[_0x12cc99(1714)] && function() {
    var _0x48e1fa = _0x12cc99;
    try {
      return new Blob([new Uint8Array([])])[_0x48e1fa(970)] === 0;
    } catch (_0x11c784) {
      return !![];
    }
  }(), _0x5b0697[_0x12cc99(444)][_0x12cc99(1978)] = _0x5200ab;
  var _0x5e64a5 = _0x5b0697[_0x12cc99(444)][_0x12cc99(956)];
  typeof window !== _0x12cc99(437) && (_0x5e64a5 = _0x5b0697[_0x12cc99(444)][_0x12cc99(956)] = window[_0x12cc99(1598)] || window[_0x12cc99(1661)] || window[_0x12cc99(882)] || window[_0x12cc99(956)]);
  function _0x2d018b() {
    var _0x4a878a = _0x12cc99;
    this[_0x4a878a(1372)] = [], this["_parts"] = [];
  }
  _0x2d018b["prototype"][_0x12cc99(1357)] = function(_0x37153a) {
    var _0xe9e1e1 = _0x12cc99;
    typeof _0x37153a === _0xe9e1e1(2203) ? this[_0xe9e1e1(1372)][_0xe9e1e1(1991)](_0x37153a) : (this[_0xe9e1e1(869)](), this["_parts"][_0xe9e1e1(1991)](_0x37153a));
  }, _0x2d018b["prototype"][_0x12cc99(869)] = function() {
    var _0x245ced = _0x12cc99;
    if (this[_0x245ced(1372)][_0x245ced(1965)] > 0) {
      var _0x40c046 = new Uint8Array(this[_0x245ced(1372)]);
      !_0x5200ab[_0x245ced(1690)] && (_0x40c046 = _0x40c046[_0x245ced(1294)]), this[_0x245ced(1691)][_0x245ced(1991)](_0x40c046), this["_pieces"] = [];
    }
  }, _0x2d018b["prototype"][_0x12cc99(1940)] = function() {
    var _0x19ccac = _0x12cc99;
    this[_0x19ccac(869)]();
    if (_0x5200ab[_0x19ccac(1714)]) {
      var _0xa26d5 = new _0x5e64a5();
      for (var _0x4a00fc = 0, _0x136ac1 = this[_0x19ccac(1691)][_0x19ccac(1965)]; _0x4a00fc < _0x136ac1; _0x4a00fc++) {
        _0xa26d5[_0x19ccac(1357)](this[_0x19ccac(1691)][_0x4a00fc]);
      }
      return _0xa26d5[_0x19ccac(2055)]();
    } else
      return new Blob(this[_0x19ccac(1691)]);
  }, _0x5b0697[_0x12cc99(444)][_0x12cc99(497)] = _0x2d018b;
})(bufferbuilder);
var BufferBuilder = bufferbuilder[_0x780a7e(444)]["BufferBuilder"], binaryFeatures = bufferbuilder["exports"][_0x780a7e(1978)], BinaryPack = { "unpack": function(_0x2df4a0) {
  var _0x4b4a01 = _0x780a7e, _0x2ae3be = new Unpacker(_0x2df4a0);
  return _0x2ae3be[_0x4b4a01(1597)]();
}, "pack": function(_0x5915ef) {
  var _0x274c19 = _0x780a7e, _0x305696 = new Packer();
  _0x305696[_0x274c19(941)](_0x5915ef);
  var _0x555aed = _0x305696[_0x274c19(1940)]();
  return _0x555aed;
} }, binarypack = BinaryPack;
function Unpacker(_0x1eb6a6) {
  var _0x421522 = _0x780a7e;
  this["index"] = 0, this["dataBuffer"] = _0x1eb6a6, this[_0x421522(368)] = new Uint8Array(this[_0x421522(767)]), this[_0x421522(1965)] = this[_0x421522(767)]["byteLength"];
}
Unpacker[_0x780a7e(1897)][_0x780a7e(1597)] = function() {
  var _0x4614d6 = _0x780a7e, _0x167f0d = this[_0x4614d6(1687)]();
  if (_0x167f0d < 128)
    return _0x167f0d;
  else {
    if ((_0x167f0d ^ 224) < 32)
      return (_0x167f0d ^ 224) - 32;
  }
  var _0x47149b;
  if ((_0x47149b = _0x167f0d ^ 160) <= 15)
    return this["unpack_raw"](_0x47149b);
  else {
    if ((_0x47149b = _0x167f0d ^ 176) <= 15)
      return this[_0x4614d6(1288)](_0x47149b);
    else {
      if ((_0x47149b = _0x167f0d ^ 144) <= 15)
        return this[_0x4614d6(403)](_0x47149b);
      else {
        if ((_0x47149b = _0x167f0d ^ 128) <= 15)
          return this[_0x4614d6(1917)](_0x47149b);
      }
    }
  }
  switch (_0x167f0d) {
    case 192:
      return null;
    case 193:
      return void 0;
    case 194:
      return ![];
    case 195:
      return !![];
    case 202:
      return this[_0x4614d6(1239)]();
    case 203:
      return this[_0x4614d6(506)]();
    case 204:
      return this[_0x4614d6(1687)]();
    case 205:
      return this[_0x4614d6(2060)]();
    case 206:
      return this[_0x4614d6(2182)]();
    case 207:
      return this[_0x4614d6(420)]();
    case 208:
      return this[_0x4614d6(535)]();
    case 209:
      return this[_0x4614d6(1389)]();
    case 210:
      return this[_0x4614d6(622)]();
    case 211:
      return this["unpack_int64"]();
    case 212:
      return void 0;
    case 213:
      return void 0;
    case 214:
      return void 0;
    case 215:
      return void 0;
    case 216:
      _0x47149b = this[_0x4614d6(2060)]();
      return this[_0x4614d6(1288)](_0x47149b);
    case 217:
      _0x47149b = this[_0x4614d6(2182)]();
      return this[_0x4614d6(1288)](_0x47149b);
    case 218:
      _0x47149b = this["unpack_uint16"]();
      return this["unpack_raw"](_0x47149b);
    case 219:
      _0x47149b = this["unpack_uint32"]();
      return this[_0x4614d6(1742)](_0x47149b);
    case 220:
      _0x47149b = this[_0x4614d6(2060)]();
      return this[_0x4614d6(403)](_0x47149b);
    case 221:
      _0x47149b = this["unpack_uint32"]();
      return this[_0x4614d6(403)](_0x47149b);
    case 222:
      _0x47149b = this[_0x4614d6(2060)]();
      return this[_0x4614d6(1917)](_0x47149b);
    case 223:
      _0x47149b = this[_0x4614d6(2182)]();
      return this[_0x4614d6(1917)](_0x47149b);
  }
}, Unpacker[_0x780a7e(1897)][_0x780a7e(1687)] = function() {
  var _0x583c5b = _0x780a7e, _0x6a0611 = this["dataView"][this[_0x583c5b(1128)]] & 255;
  return this[_0x583c5b(1128)]++, _0x6a0611;
}, Unpacker[_0x780a7e(1897)]["unpack_uint16"] = function() {
  var _0x2dd4d8 = _0x780a7e, _0x365630 = this[_0x2dd4d8(1416)](2), _0x286b91 = (_0x365630[0] & 255) * 256 + (_0x365630[1] & 255);
  return this[_0x2dd4d8(1128)] += 2, _0x286b91;
}, Unpacker[_0x780a7e(1897)]["unpack_uint32"] = function() {
  var _0x47b3f8 = _0x780a7e, _0x224e37 = this[_0x47b3f8(1416)](4), _0x4fb1a5 = ((_0x224e37[0] * 256 + _0x224e37[1]) * 256 + _0x224e37[2]) * 256 + _0x224e37[3];
  return this[_0x47b3f8(1128)] += 4, _0x4fb1a5;
}, Unpacker[_0x780a7e(1897)]["unpack_uint64"] = function() {
  var _0x33c9df = _0x780a7e, _0x4877db = this[_0x33c9df(1416)](8), _0x1b1b08 = ((((((_0x4877db[0] * 256 + _0x4877db[1]) * 256 + _0x4877db[2]) * 256 + _0x4877db[3]) * 256 + _0x4877db[4]) * 256 + _0x4877db[5]) * 256 + _0x4877db[6]) * 256 + _0x4877db[7];
  return this[_0x33c9df(1128)] += 8, _0x1b1b08;
}, Unpacker["prototype"][_0x780a7e(535)] = function() {
  var _0x13a991 = _0x780a7e, _0xe13448 = this[_0x13a991(1687)]();
  return _0xe13448 < 128 ? _0xe13448 : _0xe13448 - (1 << 8);
}, Unpacker[_0x780a7e(1897)]["unpack_int16"] = function() {
  var _0x18b657 = _0x780a7e, _0x504790 = this[_0x18b657(2060)]();
  return _0x504790 < 32768 ? _0x504790 : _0x504790 - (1 << 16);
}, Unpacker[_0x780a7e(1897)][_0x780a7e(622)] = function() {
  var _0x2e6cc9 = _0x780a7e, _0x507b1b = this[_0x2e6cc9(2182)]();
  return _0x507b1b < Math[_0x2e6cc9(1139)](2, 31) ? _0x507b1b : _0x507b1b - Math[_0x2e6cc9(1139)](2, 32);
}, Unpacker[_0x780a7e(1897)][_0x780a7e(1638)] = function() {
  var _0x68bba7 = _0x780a7e, _0x31c4b9 = this[_0x68bba7(420)]();
  return _0x31c4b9 < Math[_0x68bba7(1139)](2, 63) ? _0x31c4b9 : _0x31c4b9 - Math[_0x68bba7(1139)](2, 64);
}, Unpacker[_0x780a7e(1897)][_0x780a7e(1742)] = function(_0x3d4e15) {
  var _0x3f8e76 = _0x780a7e;
  if (this[_0x3f8e76(1965)] < this[_0x3f8e76(1128)] + _0x3d4e15)
    throw new Error("BinaryPackFailure: index is out of range " + this[_0x3f8e76(1128)] + " " + _0x3d4e15 + " " + this[_0x3f8e76(1965)]);
  var _0x232d37 = this["dataBuffer"][_0x3f8e76(1215)](this["index"], this[_0x3f8e76(1128)] + _0x3d4e15);
  return this[_0x3f8e76(1128)] += _0x3d4e15, _0x232d37;
}, Unpacker[_0x780a7e(1897)][_0x780a7e(1288)] = function(_0x31ac53) {
  var _0x59cbeb = _0x780a7e, _0x391a3e = this[_0x59cbeb(1416)](_0x31ac53), _0x1b67ff = 0, _0x5568a8 = "", _0x49b523, _0xcc6580;
  while (_0x1b67ff < _0x31ac53) {
    _0x49b523 = _0x391a3e[_0x1b67ff];
    if (_0x49b523 < 128)
      _0x5568a8 += String[_0x59cbeb(1335)](_0x49b523), _0x1b67ff++;
    else
      (_0x49b523 ^ 192) < 32 ? (_0xcc6580 = (_0x49b523 ^ 192) << 6 | _0x391a3e[_0x1b67ff + 1] & 63, _0x5568a8 += String[_0x59cbeb(1335)](_0xcc6580), _0x1b67ff += 2) : (_0xcc6580 = (_0x49b523 & 15) << 12 | (_0x391a3e[_0x1b67ff + 1] & 63) << 6 | _0x391a3e[_0x1b67ff + 2] & 63, _0x5568a8 += String["fromCharCode"](_0xcc6580), _0x1b67ff += 3);
  }
  return this[_0x59cbeb(1128)] += _0x31ac53, _0x5568a8;
}, Unpacker["prototype"][_0x780a7e(403)] = function(_0x248c87) {
  var _0x594af6 = _0x780a7e, _0x30efa4 = new Array(_0x248c87);
  for (var _0x2843df = 0; _0x2843df < _0x248c87; _0x2843df++) {
    _0x30efa4[_0x2843df] = this[_0x594af6(1597)]();
  }
  return _0x30efa4;
}, Unpacker[_0x780a7e(1897)][_0x780a7e(1917)] = function(_0x259c9f) {
  var _0x1587db = _0x780a7e, _0xca53ad = {};
  for (var _0x30c016 = 0; _0x30c016 < _0x259c9f; _0x30c016++) {
    var _0xcf601b = this[_0x1587db(1597)](), _0x27ab55 = this[_0x1587db(1597)]();
    _0xca53ad[_0xcf601b] = _0x27ab55;
  }
  return _0xca53ad;
}, Unpacker[_0x780a7e(1897)][_0x780a7e(1239)] = function() {
  var _0x379242 = _0x780a7e, _0x3cb1df = this[_0x379242(2182)](), _0x50b7c0 = _0x3cb1df >> 31, _0x2c5d7f = (_0x3cb1df >> 23 & 255) - 127, _0x13f644 = _0x3cb1df & 8388607 | 8388608;
  return (_0x50b7c0 === 0 ? 1 : -1) * _0x13f644 * Math[_0x379242(1139)](2, _0x2c5d7f - 23);
}, Unpacker[_0x780a7e(1897)][_0x780a7e(506)] = function() {
  var _0x15a049 = _0x780a7e, _0x24d5de = this[_0x15a049(2182)](), _0x1ee015 = this[_0x15a049(2182)](), _0x58a17c = _0x24d5de >> 31, _0x11dafe = (_0x24d5de >> 20 & 2047) - 1023, _0x464671 = _0x24d5de & 1048575 | 1048576, _0x612e14 = _0x464671 * Math[_0x15a049(1139)](2, _0x11dafe - 20) + _0x1ee015 * Math[_0x15a049(1139)](2, _0x11dafe - 52);
  return (_0x58a17c === 0 ? 1 : -1) * _0x612e14;
}, Unpacker["prototype"][_0x780a7e(1416)] = function(_0x2d09ba) {
  var _0x300ea4 = _0x780a7e, _0x3c93db = this[_0x300ea4(1128)];
  if (_0x3c93db + _0x2d09ba <= this[_0x300ea4(1965)])
    return this[_0x300ea4(368)][_0x300ea4(809)](_0x3c93db, _0x3c93db + _0x2d09ba);
  else
    throw new Error(_0x300ea4(762));
};
function Packer() {
  var _0xfb7b77 = _0x780a7e;
  this[_0xfb7b77(461)] = new BufferBuilder();
}
Packer["prototype"][_0x780a7e(1940)] = function() {
  var _0x53ad4c = _0x780a7e;
  return this["bufferBuilder"][_0x53ad4c(1940)]();
}, Packer[_0x780a7e(1897)]["pack"] = function(_0x4f0cac) {
  var _0x5a010f = _0x780a7e, _0x565d95 = typeof _0x4f0cac;
  if (_0x565d95 === _0x5a010f(1548))
    this[_0x5a010f(579)](_0x4f0cac);
  else {
    if (_0x565d95 === "number")
      Math[_0x5a010f(1184)](_0x4f0cac) === _0x4f0cac ? this["pack_integer"](_0x4f0cac) : this[_0x5a010f(1237)](_0x4f0cac);
    else {
      if (_0x565d95 === _0x5a010f(2116)) {
        if (_0x4f0cac === !![])
          this["bufferBuilder"][_0x5a010f(1357)](195);
        else
          _0x4f0cac === ![] && this[_0x5a010f(461)][_0x5a010f(1357)](194);
      } else {
        if (_0x565d95 === "undefined")
          this["bufferBuilder"][_0x5a010f(1357)](192);
        else {
          if (_0x565d95 === _0x5a010f(1723)) {
            if (_0x4f0cac === null)
              this[_0x5a010f(461)][_0x5a010f(1357)](192);
            else {
              var _0x413d77 = _0x4f0cac[_0x5a010f(1893)];
              if (_0x413d77 == Array)
                this[_0x5a010f(469)](_0x4f0cac);
              else {
                if (_0x413d77 == Blob || _0x413d77 == File || _0x4f0cac instanceof Blob || _0x4f0cac instanceof File)
                  this[_0x5a010f(1673)](_0x4f0cac);
                else {
                  if (_0x413d77 == ArrayBuffer)
                    binaryFeatures[_0x5a010f(1690)] ? this["pack_bin"](new Uint8Array(_0x4f0cac)) : this["pack_bin"](_0x4f0cac);
                  else {
                    if (_0x5a010f(407) in _0x4f0cac)
                      binaryFeatures[_0x5a010f(1690)] ? this["pack_bin"](new Uint8Array(_0x4f0cac[_0x5a010f(1294)])) : this[_0x5a010f(1673)](_0x4f0cac["buffer"]);
                    else {
                      if (_0x413d77 == Object || _0x413d77[_0x5a010f(2073)]()[_0x5a010f(1914)](_0x5a010f(714)))
                        this[_0x5a010f(636)](_0x4f0cac);
                      else {
                        if (_0x413d77 == Date)
                          this[_0x5a010f(579)](_0x4f0cac[_0x5a010f(2073)]());
                        else {
                          if (typeof _0x4f0cac[_0x5a010f(743)] === _0x5a010f(389))
                            this[_0x5a010f(461)][_0x5a010f(1357)](_0x4f0cac["toBinaryPack"]());
                          else
                            throw new Error(_0x5a010f(1972) + _0x413d77[_0x5a010f(2073)]() + _0x5a010f(2057));
                        }
                      }
                    }
                  }
                }
              }
            }
          } else
            throw new Error('Type "' + _0x565d95 + _0x5a010f(2057));
        }
      }
    }
  }
  this[_0x5a010f(461)][_0x5a010f(869)]();
}, Packer[_0x780a7e(1897)][_0x780a7e(1673)] = function(_0x5af112) {
  var _0xc0d777 = _0x780a7e, _0x49537d = _0x5af112[_0xc0d777(1965)] || _0x5af112[_0xc0d777(1505)] || _0x5af112[_0xc0d777(970)];
  if (_0x49537d <= 15)
    this["pack_uint8"](160 + _0x49537d);
  else {
    if (_0x49537d <= 65535)
      this["bufferBuilder"][_0xc0d777(1357)](218), this["pack_uint16"](_0x49537d);
    else {
      if (_0x49537d <= 4294967295)
        this[_0xc0d777(461)]["append"](219), this[_0xc0d777(608)](_0x49537d);
      else
        throw new Error(_0xc0d777(2190));
    }
  }
  this[_0xc0d777(461)][_0xc0d777(1357)](_0x5af112);
}, Packer[_0x780a7e(1897)][_0x780a7e(579)] = function(_0x543e28) {
  var _0x8b3761 = _0x780a7e, _0x116769 = utf8Length(_0x543e28);
  if (_0x116769 <= 15)
    this["pack_uint8"](176 + _0x116769);
  else {
    if (_0x116769 <= 65535)
      this[_0x8b3761(461)][_0x8b3761(1357)](216), this[_0x8b3761(1788)](_0x116769);
    else {
      if (_0x116769 <= 4294967295)
        this[_0x8b3761(461)][_0x8b3761(1357)](217), this[_0x8b3761(608)](_0x116769);
      else
        throw new Error("Invalid length");
    }
  }
  this[_0x8b3761(461)][_0x8b3761(1357)](_0x543e28);
}, Packer[_0x780a7e(1897)][_0x780a7e(469)] = function(_0x28f1e5) {
  var _0x4a4d24 = _0x780a7e, _0x128461 = _0x28f1e5[_0x4a4d24(1965)];
  if (_0x128461 <= 15)
    this["pack_uint8"](144 + _0x128461);
  else {
    if (_0x128461 <= 65535)
      this[_0x4a4d24(461)][_0x4a4d24(1357)](220), this[_0x4a4d24(1788)](_0x128461);
    else {
      if (_0x128461 <= 4294967295)
        this[_0x4a4d24(461)][_0x4a4d24(1357)](221), this[_0x4a4d24(608)](_0x128461);
      else
        throw new Error(_0x4a4d24(2190));
    }
  }
  for (var _0x2ef35f = 0; _0x2ef35f < _0x128461; _0x2ef35f++) {
    this[_0x4a4d24(941)](_0x28f1e5[_0x2ef35f]);
  }
}, Packer[_0x780a7e(1897)]["pack_integer"] = function(_0x4fadac) {
  var _0x4f01b0 = _0x780a7e;
  if (_0x4fadac >= -32 && _0x4fadac <= 127)
    this["bufferBuilder"][_0x4f01b0(1357)](_0x4fadac & 255);
  else {
    if (_0x4fadac >= 0 && _0x4fadac <= 255)
      this[_0x4f01b0(461)][_0x4f01b0(1357)](204), this[_0x4f01b0(1261)](_0x4fadac);
    else {
      if (_0x4fadac >= -128 && _0x4fadac <= 127)
        this["bufferBuilder"][_0x4f01b0(1357)](208), this[_0x4f01b0(629)](_0x4fadac);
      else {
        if (_0x4fadac >= 0 && _0x4fadac <= 65535)
          this[_0x4f01b0(461)][_0x4f01b0(1357)](205), this[_0x4f01b0(1788)](_0x4fadac);
        else {
          if (_0x4fadac >= -32768 && _0x4fadac <= 32767)
            this[_0x4f01b0(461)][_0x4f01b0(1357)](209), this["pack_int16"](_0x4fadac);
          else {
            if (_0x4fadac >= 0 && _0x4fadac <= 4294967295)
              this[_0x4f01b0(461)][_0x4f01b0(1357)](206), this[_0x4f01b0(608)](_0x4fadac);
            else {
              if (_0x4fadac >= -2147483648 && _0x4fadac <= 2147483647)
                this[_0x4f01b0(461)][_0x4f01b0(1357)](210), this[_0x4f01b0(964)](_0x4fadac);
              else {
                if (_0x4fadac >= -9223372036854776e3 && _0x4fadac <= 9223372036854776e3)
                  this["bufferBuilder"][_0x4f01b0(1357)](211), this[_0x4f01b0(1468)](_0x4fadac);
                else {
                  if (_0x4fadac >= 0 && _0x4fadac <= 18446744073709552e3)
                    this["bufferBuilder"][_0x4f01b0(1357)](207), this[_0x4f01b0(1792)](_0x4fadac);
                  else
                    throw new Error("Invalid integer");
                }
              }
            }
          }
        }
      }
    }
  }
}, Packer[_0x780a7e(1897)][_0x780a7e(1237)] = function(_0x467e82) {
  var _0x1ef102 = _0x780a7e, _0xf4569d = 0;
  _0x467e82 < 0 && (_0xf4569d = 1, _0x467e82 = -_0x467e82);
  var _0x475244 = Math[_0x1ef102(1184)](Math[_0x1ef102(942)](_0x467e82) / Math[_0x1ef102(917)]), _0x1098fd = _0x467e82 / Math[_0x1ef102(1139)](2, _0x475244) - 1, _0x227260 = Math["floor"](_0x1098fd * Math[_0x1ef102(1139)](2, 52)), _0x15cf47 = Math[_0x1ef102(1139)](2, 32), _0x558e3f = _0xf4569d << 31 | _0x475244 + 1023 << 20 | _0x227260 / _0x15cf47 & 1048575, _0x4ae5e5 = _0x227260 % _0x15cf47;
  this[_0x1ef102(461)][_0x1ef102(1357)](203), this[_0x1ef102(964)](_0x558e3f), this[_0x1ef102(964)](_0x4ae5e5);
}, Packer[_0x780a7e(1897)][_0x780a7e(636)] = function(_0x5d7c5b) {
  var _0x12c980 = _0x780a7e, _0x5c6060 = Object["keys"](_0x5d7c5b), _0x41b29c = _0x5c6060["length"];
  if (_0x41b29c <= 15)
    this[_0x12c980(1261)](128 + _0x41b29c);
  else {
    if (_0x41b29c <= 65535)
      this[_0x12c980(461)][_0x12c980(1357)](222), this["pack_uint16"](_0x41b29c);
    else {
      if (_0x41b29c <= 4294967295)
        this["bufferBuilder"][_0x12c980(1357)](223), this[_0x12c980(608)](_0x41b29c);
      else
        throw new Error(_0x12c980(2190));
    }
  }
  for (var _0x963e4b in _0x5d7c5b) {
    _0x5d7c5b["hasOwnProperty"](_0x963e4b) && (this[_0x12c980(941)](_0x963e4b), this[_0x12c980(941)](_0x5d7c5b[_0x963e4b]));
  }
}, Packer["prototype"][_0x780a7e(1261)] = function(_0x2b1430) {
  this["bufferBuilder"]["append"](_0x2b1430);
}, Packer[_0x780a7e(1897)][_0x780a7e(1788)] = function(_0x375c97) {
  var _0x2f0053 = _0x780a7e;
  this[_0x2f0053(461)][_0x2f0053(1357)](_0x375c97 >> 8), this["bufferBuilder"][_0x2f0053(1357)](_0x375c97 & 255);
}, Packer[_0x780a7e(1897)]["pack_uint32"] = function(_0x456c12) {
  var _0x561265 = _0x780a7e, _0x26660d = _0x456c12 & 4294967295;
  this[_0x561265(461)][_0x561265(1357)]((_0x26660d & 4278190080) >>> 24), this[_0x561265(461)][_0x561265(1357)]((_0x26660d & 16711680) >>> 16), this[_0x561265(461)]["append"]((_0x26660d & 65280) >>> 8), this[_0x561265(461)][_0x561265(1357)](_0x26660d & 255);
}, Packer[_0x780a7e(1897)][_0x780a7e(1792)] = function(_0x18d088) {
  var _0x219493 = _0x780a7e, _0x492a0d = _0x18d088 / Math[_0x219493(1139)](2, 32), _0x44135f = _0x18d088 % Math[_0x219493(1139)](2, 32);
  this[_0x219493(461)][_0x219493(1357)]((_0x492a0d & 4278190080) >>> 24), this["bufferBuilder"]["append"]((_0x492a0d & 16711680) >>> 16), this[_0x219493(461)][_0x219493(1357)]((_0x492a0d & 65280) >>> 8), this[_0x219493(461)]["append"](_0x492a0d & 255), this["bufferBuilder"][_0x219493(1357)]((_0x44135f & 4278190080) >>> 24), this[_0x219493(461)][_0x219493(1357)]((_0x44135f & 16711680) >>> 16), this[_0x219493(461)]["append"]((_0x44135f & 65280) >>> 8), this["bufferBuilder"]["append"](_0x44135f & 255);
}, Packer[_0x780a7e(1897)][_0x780a7e(629)] = function(_0x106159) {
  var _0x392c5d = _0x780a7e;
  this[_0x392c5d(461)]["append"](_0x106159 & 255);
}, Packer[_0x780a7e(1897)][_0x780a7e(379)] = function(_0x1371aa) {
  var _0x83b2 = _0x780a7e;
  this[_0x83b2(461)]["append"]((_0x1371aa & 65280) >> 8), this["bufferBuilder"]["append"](_0x1371aa & 255);
}, Packer["prototype"][_0x780a7e(964)] = function(_0x2aeff0) {
  var _0x22f003 = _0x780a7e;
  this["bufferBuilder"][_0x22f003(1357)](_0x2aeff0 >>> 24 & 255), this[_0x22f003(461)][_0x22f003(1357)]((_0x2aeff0 & 16711680) >>> 16), this[_0x22f003(461)][_0x22f003(1357)]((_0x2aeff0 & 65280) >>> 8), this[_0x22f003(461)][_0x22f003(1357)](_0x2aeff0 & 255);
}, Packer[_0x780a7e(1897)][_0x780a7e(1468)] = function(_0xeaae08) {
  var _0x10a9a7 = _0x780a7e, _0x43e21c = Math[_0x10a9a7(1184)](_0xeaae08 / Math["pow"](2, 32)), _0x44c2ba = _0xeaae08 % Math[_0x10a9a7(1139)](2, 32);
  this[_0x10a9a7(461)][_0x10a9a7(1357)]((_0x43e21c & 4278190080) >>> 24), this[_0x10a9a7(461)][_0x10a9a7(1357)]((_0x43e21c & 16711680) >>> 16), this[_0x10a9a7(461)]["append"]((_0x43e21c & 65280) >>> 8), this["bufferBuilder"][_0x10a9a7(1357)](_0x43e21c & 255), this["bufferBuilder"][_0x10a9a7(1357)]((_0x44c2ba & 4278190080) >>> 24), this["bufferBuilder"][_0x10a9a7(1357)]((_0x44c2ba & 16711680) >>> 16), this["bufferBuilder"][_0x10a9a7(1357)]((_0x44c2ba & 65280) >>> 8), this["bufferBuilder"]["append"](_0x44c2ba & 255);
};
function _utf8Replace(_0x1953be) {
  var _0x27e0cf = _0x780a7e, _0x405469 = _0x1953be[_0x27e0cf(1504)](0);
  if (_0x405469 <= 2047)
    return "00";
  if (_0x405469 <= 65535)
    return "000";
  if (_0x405469 <= 2097151)
    return _0x27e0cf(1175);
  if (_0x405469 <= 67108863)
    return "00000";
  return _0x27e0cf(967);
}
function utf8Length(_0x2f762a) {
  var _0x442757 = _0x780a7e;
  return _0x2f762a["length"] > 600 ? new Blob([_0x2f762a])[_0x442757(970)] : _0x2f762a[_0x442757(1028)](/[^\u0000-\u007F]/g, _utf8Replace)["length"];
}
let logDisabled_ = !![], deprecationWarnings_ = !![];
function extractVersion(_0x3624f3, _0x323e7d, _0x101739) {
  var _0x19fb97 = _0x780a7e;
  const _0x2ec6ff = _0x3624f3["match"](_0x323e7d);
  return _0x2ec6ff && _0x2ec6ff[_0x19fb97(1965)] >= _0x101739 && parseInt(_0x2ec6ff[_0x101739], 10);
}
function wrapPeerConnectionEvent(_0x521ff9, _0xbd5d1d, _0x5cd92e) {
  var _0x311bb5 = _0x780a7e;
  if (!_0x521ff9[_0x311bb5(1848)])
    return;
  const _0x415b14 = _0x521ff9[_0x311bb5(1848)]["prototype"], _0x1bba48 = _0x415b14[_0x311bb5(2069)];
  _0x415b14[_0x311bb5(2069)] = function(_0x231bb9, _0x1f022f) {
    var _0x1e075f = _0x311bb5;
    if (_0x231bb9 !== _0xbd5d1d)
      return _0x1bba48[_0x1e075f(2150)](this, arguments);
    const _0x59f71c = (_0x378ea5) => {
      var _0x1d19da = _0x1e075f;
      const _0xd78f58 = _0x5cd92e(_0x378ea5);
      _0xd78f58 && (_0x1f022f["handleEvent"] ? _0x1f022f[_0x1d19da(1247)](_0xd78f58) : _0x1f022f(_0xd78f58));
    };
    return this[_0x1e075f(1351)] = this[_0x1e075f(1351)] || {}, !this[_0x1e075f(1351)][_0xbd5d1d] && (this["_eventMap"][_0xbd5d1d] = /* @__PURE__ */ new Map()), this[_0x1e075f(1351)][_0xbd5d1d]["set"](_0x1f022f, _0x59f71c), _0x1bba48[_0x1e075f(2150)](this, [_0x231bb9, _0x59f71c]);
  };
  const _0x38acb5 = _0x415b14[_0x311bb5(1283)];
  _0x415b14[_0x311bb5(1283)] = function(_0x450be6, _0x42af20) {
    var _0x5533c7 = _0x311bb5;
    if (_0x450be6 !== _0xbd5d1d || !this[_0x5533c7(1351)] || !this[_0x5533c7(1351)][_0xbd5d1d])
      return _0x38acb5[_0x5533c7(2150)](this, arguments);
    if (!this["_eventMap"][_0xbd5d1d][_0x5533c7(432)](_0x42af20))
      return _0x38acb5[_0x5533c7(2150)](this, arguments);
    const _0x5e54d3 = this[_0x5533c7(1351)][_0xbd5d1d][_0x5533c7(1892)](_0x42af20);
    return this["_eventMap"][_0xbd5d1d][_0x5533c7(1653)](_0x42af20), this[_0x5533c7(1351)][_0xbd5d1d][_0x5533c7(970)] === 0 && delete this[_0x5533c7(1351)][_0xbd5d1d], Object[_0x5533c7(605)](this[_0x5533c7(1351)])[_0x5533c7(1965)] === 0 && delete this[_0x5533c7(1351)], _0x38acb5[_0x5533c7(2150)](this, [_0x450be6, _0x5e54d3]);
  }, Object[_0x311bb5(1564)](_0x415b14, "on" + _0xbd5d1d, { "get"() {
    var _0x55b2a5 = _0x311bb5;
    return this[_0x55b2a5(1839) + _0xbd5d1d];
  }, "set"(_0x4a9431) {
    var _0x28130a = _0x311bb5;
    this[_0x28130a(1839) + _0xbd5d1d] && (this[_0x28130a(1283)](_0xbd5d1d, this["_on" + _0xbd5d1d]), delete this[_0x28130a(1839) + _0xbd5d1d]), _0x4a9431 && this[_0x28130a(2069)](_0xbd5d1d, this[_0x28130a(1839) + _0xbd5d1d] = _0x4a9431);
  }, "enumerable": !![], "configurable": !![] });
}
function disableLog(_0x10dc3d) {
  var _0x5a0385 = _0x780a7e;
  if (typeof _0x10dc3d !== _0x5a0385(2116))
    return new Error("Argument type: " + typeof _0x10dc3d + ". Please use a boolean.");
  return logDisabled_ = _0x10dc3d, _0x10dc3d ? "adapter.js logging disabled" : "adapter.js logging enabled";
}
function disableWarnings(_0x3bc61f) {
  var _0xb40e37 = _0x780a7e;
  if (typeof _0x3bc61f !== "boolean")
    return new Error(_0xb40e37(427) + typeof _0x3bc61f + _0xb40e37(633));
  return deprecationWarnings_ = !_0x3bc61f, _0xb40e37(1582) + (_0x3bc61f ? _0xb40e37(1441) : "enabled");
}
function log() {
  var _0x4c1f58 = _0x780a7e;
  if (typeof window === _0x4c1f58(1723)) {
    if (logDisabled_)
      return;
    typeof console !== _0x4c1f58(437) && typeof console[_0x4c1f58(942)] === _0x4c1f58(389) && console[_0x4c1f58(942)][_0x4c1f58(2150)](console, arguments);
  }
}
function deprecated(_0x385811, _0x5aabb7) {
  var _0x121afd = _0x780a7e;
  if (!deprecationWarnings_)
    return;
  console[_0x121afd(1985)](_0x385811 + _0x121afd(914) + _0x5aabb7 + _0x121afd(1313));
}
function detectBrowser(_0x161f5e) {
  var _0x5e56f1 = _0x780a7e;
  const _0x422dd5 = { "browser": null, "version": null };
  if (typeof _0x161f5e === _0x5e56f1(437) || !_0x161f5e["navigator"])
    return _0x422dd5[_0x5e56f1(968)] = _0x5e56f1(639), _0x422dd5;
  const { navigator: _0x44b554 } = _0x161f5e;
  if (_0x44b554[_0x5e56f1(785)])
    _0x422dd5["browser"] = _0x5e56f1(1312), _0x422dd5["version"] = extractVersion(_0x44b554[_0x5e56f1(1470)], /Firefox\/(\d+)\./, 1);
  else {
    if (_0x44b554[_0x5e56f1(681)] || _0x161f5e["isSecureContext"] === ![] && _0x161f5e[_0x5e56f1(384)] && !_0x161f5e[_0x5e56f1(596)])
      _0x422dd5["browser"] = _0x5e56f1(1127), _0x422dd5["version"] = extractVersion(_0x44b554[_0x5e56f1(1470)], /Chrom(e|ium)\/(\d+)\./, 2);
    else {
      if (_0x44b554[_0x5e56f1(1057)] && _0x44b554[_0x5e56f1(1470)][_0x5e56f1(1962)](/Edge\/(\d+).(\d+)$/))
        _0x422dd5[_0x5e56f1(968)] = _0x5e56f1(1626), _0x422dd5[_0x5e56f1(436)] = extractVersion(_0x44b554[_0x5e56f1(1470)], /Edge\/(\d+).(\d+)$/, 2);
      else {
        if (_0x161f5e[_0x5e56f1(1848)] && _0x44b554[_0x5e56f1(1470)][_0x5e56f1(1962)](/AppleWebKit\/(\d+)\./))
          _0x422dd5[_0x5e56f1(968)] = "safari", _0x422dd5[_0x5e56f1(436)] = extractVersion(_0x44b554[_0x5e56f1(1470)], /AppleWebKit\/(\d+)\./, 1), _0x422dd5["supportsUnifiedPlan"] = _0x161f5e[_0x5e56f1(1268)] && _0x5e56f1(1501) in _0x161f5e[_0x5e56f1(1268)]["prototype"];
        else
          return _0x422dd5[_0x5e56f1(968)] = _0x5e56f1(1173), _0x422dd5;
      }
    }
  }
  return _0x422dd5;
}
function isObject(_0x131b02) {
  var _0x3c85ed = _0x780a7e;
  return Object[_0x3c85ed(1897)][_0x3c85ed(2073)][_0x3c85ed(1206)](_0x131b02) === "[object Object]";
}
function compactObject(_0x374263) {
  var _0x5bcef8 = _0x780a7e;
  if (!isObject(_0x374263))
    return _0x374263;
  return Object["keys"](_0x374263)[_0x5bcef8(690)](function(_0x59e587, _0x44c861) {
    var _0xbbee9c = _0x5bcef8;
    const _0x3cb1ba = isObject(_0x374263[_0x44c861]), _0x2f9dfc = _0x3cb1ba ? compactObject(_0x374263[_0x44c861]) : _0x374263[_0x44c861], _0x2ba074 = _0x3cb1ba && !Object[_0xbbee9c(605)](_0x2f9dfc)[_0xbbee9c(1965)];
    if (_0x2f9dfc === void 0 || _0x2ba074)
      return _0x59e587;
    return Object["assign"](_0x59e587, { [_0x44c861]: _0x2f9dfc });
  }, {});
}
function walkStats(_0x3a5a91, _0x609282, _0x4dbcc8) {
  var _0x583ce4 = _0x780a7e;
  if (!_0x609282 || _0x4dbcc8["has"](_0x609282["id"]))
    return;
  _0x4dbcc8[_0x583ce4(2080)](_0x609282["id"], _0x609282), Object[_0x583ce4(605)](_0x609282)["forEach"]((_0x11337a) => {
    var _0x4d6fad = _0x583ce4;
    if (_0x11337a[_0x4d6fad(1865)]("Id"))
      walkStats(_0x3a5a91, _0x3a5a91[_0x4d6fad(1892)](_0x609282[_0x11337a]), _0x4dbcc8);
    else
      _0x11337a[_0x4d6fad(1865)]("Ids") && _0x609282[_0x11337a][_0x4d6fad(839)]((_0x35483d) => {
        var _0x12dbd2 = _0x4d6fad;
        walkStats(_0x3a5a91, _0x3a5a91[_0x12dbd2(1892)](_0x35483d), _0x4dbcc8);
      });
  });
}
function filterStats(_0x10416d, _0x5b1a7b, _0x13ee81) {
  var _0x23d779 = _0x780a7e;
  const _0x341ff3 = _0x13ee81 ? _0x23d779(1276) : "inbound-rtp", _0x46ede7 = /* @__PURE__ */ new Map();
  if (_0x5b1a7b === null)
    return _0x46ede7;
  const _0x397e52 = [];
  return _0x10416d[_0x23d779(839)]((_0x44fbe5) => {
    var _0x1ab02d = _0x23d779;
    _0x44fbe5[_0x1ab02d(1514)] === _0x1ab02d(451) && _0x44fbe5[_0x1ab02d(664)] === _0x5b1a7b["id"] && _0x397e52[_0x1ab02d(1991)](_0x44fbe5);
  }), _0x397e52["forEach"]((_0x33583f) => {
    var _0x5babc6 = _0x23d779;
    _0x10416d[_0x5babc6(839)]((_0x422828) => {
      var _0xfb95f = _0x5babc6;
      _0x422828[_0xfb95f(1514)] === _0x341ff3 && _0x422828[_0xfb95f(2075)] === _0x33583f["id"] && walkStats(_0x10416d, _0x422828, _0x46ede7);
    });
  }), _0x46ede7;
}
const logging = log;
function shimGetUserMedia$3(_0x53e533, _0x36aa89) {
  var _0x50f5b7 = _0x780a7e;
  const _0x2d6193 = _0x53e533 && _0x53e533["navigator"];
  if (!_0x2d6193["mediaDevices"])
    return;
  const _0x37a810 = function(_0x20e819) {
    var _0x1350a9 = _0x3001;
    if (typeof _0x20e819 !== _0x1350a9(1723) || _0x20e819["mandatory"] || _0x20e819[_0x1350a9(658)])
      return _0x20e819;
    const _0x363d21 = {};
    return Object[_0x1350a9(605)](_0x20e819)[_0x1350a9(839)]((_0x3b3b7a) => {
      var _0x53791b = _0x1350a9;
      if (_0x3b3b7a === _0x53791b(652) || _0x3b3b7a === "advanced" || _0x3b3b7a === _0x53791b(2098))
        return;
      const _0x53b1de = typeof _0x20e819[_0x3b3b7a] === "object" ? _0x20e819[_0x3b3b7a] : { "ideal": _0x20e819[_0x3b3b7a] };
      _0x53b1de[_0x53791b(1011)] !== void 0 && typeof _0x53b1de[_0x53791b(1011)] === _0x53791b(2203) && (_0x53b1de[_0x53791b(1183)] = _0x53b1de[_0x53791b(1088)] = _0x53b1de["exact"]);
      const _0x3d6288 = function(_0x5a3fc2, _0x22c990) {
        var _0x2871cb = _0x53791b;
        if (_0x5a3fc2)
          return _0x5a3fc2 + _0x22c990[_0x2871cb(599)](0)["toUpperCase"]() + _0x22c990[_0x2871cb(1215)](1);
        return _0x22c990 === _0x2871cb(2144) ? _0x2871cb(1044) : _0x22c990;
      };
      if (_0x53b1de[_0x53791b(2074)] !== void 0) {
        _0x363d21["optional"] = _0x363d21["optional"] || [];
        let _0x1e1afd = {};
        typeof _0x53b1de["ideal"] === "number" ? (_0x1e1afd[_0x3d6288(_0x53791b(1183), _0x3b3b7a)] = _0x53b1de[_0x53791b(2074)], _0x363d21[_0x53791b(658)]["push"](_0x1e1afd), _0x1e1afd = {}, _0x1e1afd[_0x3d6288(_0x53791b(1088), _0x3b3b7a)] = _0x53b1de[_0x53791b(2074)], _0x363d21[_0x53791b(658)][_0x53791b(1991)](_0x1e1afd)) : (_0x1e1afd[_0x3d6288("", _0x3b3b7a)] = _0x53b1de[_0x53791b(2074)], _0x363d21[_0x53791b(658)][_0x53791b(1991)](_0x1e1afd));
      }
      _0x53b1de[_0x53791b(1011)] !== void 0 && typeof _0x53b1de[_0x53791b(1011)] !== _0x53791b(2203) ? (_0x363d21[_0x53791b(587)] = _0x363d21[_0x53791b(587)] || {}, _0x363d21[_0x53791b(587)][_0x3d6288("", _0x3b3b7a)] = _0x53b1de[_0x53791b(1011)]) : ["min", _0x53791b(1088)][_0x53791b(839)]((_0x20e06a) => {
        var _0x489d58 = _0x53791b;
        _0x53b1de[_0x20e06a] !== void 0 && (_0x363d21["mandatory"] = _0x363d21[_0x489d58(587)] || {}, _0x363d21[_0x489d58(587)][_0x3d6288(_0x20e06a, _0x3b3b7a)] = _0x53b1de[_0x20e06a]);
      });
    }), _0x20e819[_0x1350a9(1538)] && (_0x363d21[_0x1350a9(658)] = (_0x363d21[_0x1350a9(658)] || [])[_0x1350a9(2090)](_0x20e819[_0x1350a9(1538)])), _0x363d21;
  }, _0x5be5f2 = function(_0x1ab2b4, _0x5bbf65) {
    var _0x1cc315 = _0x3001;
    if (_0x36aa89[_0x1cc315(436)] >= 61)
      return _0x5bbf65(_0x1ab2b4);
    _0x1ab2b4 = JSON[_0x1cc315(611)](JSON["stringify"](_0x1ab2b4));
    if (_0x1ab2b4 && typeof _0x1ab2b4[_0x1cc315(1855)] === _0x1cc315(1723)) {
      const _0x590abf = function(_0x36fef4, _0x2104a9, _0x5b5b76) {
        _0x2104a9 in _0x36fef4 && !(_0x5b5b76 in _0x36fef4) && (_0x36fef4[_0x5b5b76] = _0x36fef4[_0x2104a9], delete _0x36fef4[_0x2104a9]);
      };
      _0x1ab2b4 = JSON[_0x1cc315(611)](JSON["stringify"](_0x1ab2b4)), _0x590abf(_0x1ab2b4[_0x1cc315(1855)], _0x1cc315(1418), _0x1cc315(1323)), _0x590abf(_0x1ab2b4["audio"], _0x1cc315(1399), _0x1cc315(1400)), _0x1ab2b4[_0x1cc315(1855)] = _0x37a810(_0x1ab2b4[_0x1cc315(1855)]);
    }
    if (_0x1ab2b4 && typeof _0x1ab2b4[_0x1cc315(1822)] === "object") {
      let _0x167f73 = _0x1ab2b4[_0x1cc315(1822)][_0x1cc315(1699)];
      _0x167f73 = _0x167f73 && (typeof _0x167f73 === _0x1cc315(1723) ? _0x167f73 : { "ideal": _0x167f73 });
      const _0x494fef = _0x36aa89["version"] < 66;
      if (_0x167f73 && (_0x167f73["exact"] === _0x1cc315(1360) || _0x167f73[_0x1cc315(1011)] === "environment" || _0x167f73[_0x1cc315(2074)] === _0x1cc315(1360) || _0x167f73[_0x1cc315(2074)] === _0x1cc315(732)) && !(_0x2d6193["mediaDevices"][_0x1cc315(1186)] && _0x2d6193[_0x1cc315(1057)][_0x1cc315(1186)]()["facingMode"] && !_0x494fef)) {
        delete _0x1ab2b4[_0x1cc315(1822)][_0x1cc315(1699)];
        let _0x12a8f2;
        if (_0x167f73[_0x1cc315(1011)] === _0x1cc315(732) || _0x167f73[_0x1cc315(2074)] === _0x1cc315(732))
          _0x12a8f2 = [_0x1cc315(624), _0x1cc315(1639)];
        else
          (_0x167f73["exact"] === _0x1cc315(1360) || _0x167f73[_0x1cc315(2074)] === "user") && (_0x12a8f2 = ["front"]);
        if (_0x12a8f2)
          return _0x2d6193["mediaDevices"]["enumerateDevices"]()[_0x1cc315(1902)]((_0x5a4de4) => {
            var _0x36409d = _0x1cc315;
            _0x5a4de4 = _0x5a4de4[_0x36409d(805)]((_0x2cc2c5) => _0x2cc2c5[_0x36409d(1711)] === "videoinput");
            let _0x2e7f4a = _0x5a4de4[_0x36409d(1252)]((_0x275c6c) => _0x12a8f2[_0x36409d(1235)]((_0x3347b5) => _0x275c6c[_0x36409d(689)]["toLowerCase"]()[_0x36409d(589)](_0x3347b5)));
            return !_0x2e7f4a && _0x5a4de4[_0x36409d(1965)] && _0x12a8f2[_0x36409d(589)](_0x36409d(624)) && (_0x2e7f4a = _0x5a4de4[_0x5a4de4[_0x36409d(1965)] - 1]), _0x2e7f4a && (_0x1ab2b4[_0x36409d(1822)][_0x36409d(2144)] = _0x167f73["exact"] ? { "exact": _0x2e7f4a[_0x36409d(2144)] } : { "ideal": _0x2e7f4a[_0x36409d(2144)] }), _0x1ab2b4[_0x36409d(1822)] = _0x37a810(_0x1ab2b4[_0x36409d(1822)]), logging(_0x36409d(1766) + JSON[_0x36409d(2063)](_0x1ab2b4)), _0x5bbf65(_0x1ab2b4);
          });
      }
      _0x1ab2b4[_0x1cc315(1822)] = _0x37a810(_0x1ab2b4["video"]);
    }
    return logging(_0x1cc315(1766) + JSON["stringify"](_0x1ab2b4)), _0x5bbf65(_0x1ab2b4);
  }, _0x5afa2e = function(_0x152e78) {
    var _0x4477ca = _0x3001;
    if (_0x36aa89[_0x4477ca(436)] >= 64)
      return _0x152e78;
    return { "name": { "PermissionDeniedError": "NotAllowedError", "PermissionDismissedError": _0x4477ca(2183), "InvalidStateError": _0x4477ca(2183), "DevicesNotFoundError": "NotFoundError", "ConstraintNotSatisfiedError": "OverconstrainedError", "TrackStartError": "NotReadableError", "MediaDeviceFailedDueToShutdown": _0x4477ca(2183), "MediaDeviceKillSwitchOn": _0x4477ca(2183), "TabCaptureError": _0x4477ca(963), "ScreenCaptureError": _0x4477ca(963), "DeviceCaptureError": _0x4477ca(963) }[_0x152e78["name"]] || _0x152e78["name"], "message": _0x152e78[_0x4477ca(510)], "constraint": _0x152e78[_0x4477ca(1656)] || _0x152e78[_0x4477ca(2125)], "toString"() {
      var _0x5be673 = _0x4477ca;
      return this[_0x5be673(765)] + (this[_0x5be673(510)] && ": ") + this[_0x5be673(510)];
    } };
  }, _0x1f14b0 = function(_0x24bc2b, _0x2e9e8d, _0x1fcf91) {
    _0x5be5f2(_0x24bc2b, (_0x3277fe) => {
      var _0x2ccfa9 = _0x3001;
      _0x2d6193[_0x2ccfa9(681)](_0x3277fe, _0x2e9e8d, (_0x157498) => {
        _0x1fcf91 && _0x1fcf91(_0x5afa2e(_0x157498));
      });
    });
  };
  _0x2d6193[_0x50f5b7(1645)] = _0x1f14b0[_0x50f5b7(517)](_0x2d6193);
  if (_0x2d6193["mediaDevices"][_0x50f5b7(1645)]) {
    const _0x4064f5 = _0x2d6193["mediaDevices"]["getUserMedia"][_0x50f5b7(517)](_0x2d6193[_0x50f5b7(1057)]);
    _0x2d6193[_0x50f5b7(1057)][_0x50f5b7(1645)] = function(_0x32bd34) {
      var _0x1a633d = _0x50f5b7;
      return _0x5be5f2(_0x32bd34, (_0x39c8b8) => _0x4064f5(_0x39c8b8)["then"]((_0x54ad81) => {
        var _0x1c0acd = _0x3001;
        if (_0x39c8b8[_0x1c0acd(1855)] && !_0x54ad81[_0x1c0acd(537)]()[_0x1c0acd(1965)] || _0x39c8b8["video"] && !_0x54ad81[_0x1c0acd(577)]()["length"]) {
          _0x54ad81[_0x1c0acd(1817)]()["forEach"]((_0x14e58c) => {
            var _0x387097 = _0x1c0acd;
            _0x14e58c[_0x387097(712)]();
          });
          throw new DOMException("", "NotFoundError");
        }
        return _0x54ad81;
      }, (_0x5331b5) => Promise[_0x1a633d(1646)](_0x5afa2e(_0x5331b5))));
    };
  }
}
function shimGetDisplayMedia$2(_0x30b63f, _0x116c4f) {
  var _0x550c58 = _0x780a7e;
  if (_0x30b63f[_0x550c58(810)][_0x550c58(1057)] && _0x550c58(1827) in _0x30b63f[_0x550c58(810)][_0x550c58(1057)])
    return;
  if (!_0x30b63f["navigator"][_0x550c58(1057)])
    return;
  if (typeof _0x116c4f !== _0x550c58(389)) {
    console[_0x550c58(2165)](_0x550c58(936) + _0x550c58(1876));
    return;
  }
  _0x30b63f[_0x550c58(810)][_0x550c58(1057)]["getDisplayMedia"] = function _0x3168bb(_0x3073ad) {
    return _0x116c4f(_0x3073ad)["then"]((_0x5f2e39) => {
      var _0xf37598 = _0x3001;
      const _0x5dbe72 = _0x3073ad[_0xf37598(1822)] && _0x3073ad[_0xf37598(1822)][_0xf37598(1779)], _0x1ac8ef = _0x3073ad["video"] && _0x3073ad[_0xf37598(1822)]["height"], _0x210db9 = _0x3073ad[_0xf37598(1822)] && _0x3073ad[_0xf37598(1822)][_0xf37598(564)];
      return _0x3073ad[_0xf37598(1822)] = { "mandatory": { "chromeMediaSource": _0xf37598(621), "chromeMediaSourceId": _0x5f2e39, "maxFrameRate": _0x210db9 || 3 } }, _0x5dbe72 && (_0x3073ad[_0xf37598(1822)]["mandatory"][_0xf37598(660)] = _0x5dbe72), _0x1ac8ef && (_0x3073ad[_0xf37598(1822)][_0xf37598(587)][_0xf37598(1677)] = _0x1ac8ef), _0x30b63f[_0xf37598(810)]["mediaDevices"]["getUserMedia"](_0x3073ad);
    });
  };
}
function shimMediaStream(_0x54af9d) {
  var _0x5ac760 = _0x780a7e;
  _0x54af9d[_0x5ac760(720)] = _0x54af9d[_0x5ac760(720)] || _0x54af9d[_0x5ac760(656)];
}
function shimOnTrack$1(_0x4b0aa7) {
  var _0x1b9473 = _0x780a7e;
  if (typeof _0x4b0aa7 === _0x1b9473(1723) && _0x4b0aa7[_0x1b9473(1848)] && !(_0x1b9473(1358) in _0x4b0aa7["RTCPeerConnection"][_0x1b9473(1897)])) {
    Object[_0x1b9473(1564)](_0x4b0aa7["RTCPeerConnection"][_0x1b9473(1897)], _0x1b9473(1358), { "get"() {
      return this["_ontrack"];
    }, "set"(_0x53d7ac) {
      var _0xf2438 = _0x1b9473;
      this[_0xf2438(563)] && this[_0xf2438(1283)](_0xf2438(451), this["_ontrack"]), this["addEventListener"](_0xf2438(451), this[_0xf2438(563)] = _0x53d7ac);
    }, "enumerable": !![], "configurable": !![] });
    const _0x1fb67a = _0x4b0aa7[_0x1b9473(1848)][_0x1b9473(1897)][_0x1b9473(2140)];
    _0x4b0aa7[_0x1b9473(1848)]["prototype"][_0x1b9473(2140)] = function _0x50d78d() {
      var _0x121ffc = _0x1b9473;
      return !this[_0x121ffc(1043)] && (this[_0x121ffc(1043)] = (_0xe88d71) => {
        var _0x14ec28 = _0x121ffc;
        _0xe88d71[_0x14ec28(1637)][_0x14ec28(2069)](_0x14ec28(1374), (_0x22df2d) => {
          var _0x352c6f = _0x14ec28;
          let _0xfe4e80;
          _0x4b0aa7[_0x352c6f(1848)]["prototype"][_0x352c6f(1006)] ? _0xfe4e80 = this[_0x352c6f(1006)]()[_0x352c6f(1252)]((_0x9123d8) => _0x9123d8[_0x352c6f(451)] && _0x9123d8[_0x352c6f(451)]["id"] === _0x22df2d[_0x352c6f(451)]["id"]) : _0xfe4e80 = { "track": _0x22df2d[_0x352c6f(451)] };
          const _0x19bdcf = new Event(_0x352c6f(451));
          _0x19bdcf[_0x352c6f(451)] = _0x22df2d[_0x352c6f(451)], _0x19bdcf[_0x352c6f(509)] = _0xfe4e80, _0x19bdcf[_0x352c6f(456)] = { "receiver": _0xfe4e80 }, _0x19bdcf[_0x352c6f(1814)] = [_0xe88d71[_0x352c6f(1637)]], this[_0x352c6f(1152)](_0x19bdcf);
        }), _0xe88d71[_0x14ec28(1637)][_0x14ec28(1817)]()[_0x14ec28(839)]((_0xdd4f83) => {
          var _0xa668ac = _0x14ec28;
          let _0x708de7;
          _0x4b0aa7[_0xa668ac(1848)][_0xa668ac(1897)][_0xa668ac(1006)] ? _0x708de7 = this[_0xa668ac(1006)]()["find"]((_0x7b3f26) => _0x7b3f26[_0xa668ac(451)] && _0x7b3f26[_0xa668ac(451)]["id"] === _0xdd4f83["id"]) : _0x708de7 = { "track": _0xdd4f83 };
          const _0x137b33 = new Event("track");
          _0x137b33[_0xa668ac(451)] = _0xdd4f83, _0x137b33[_0xa668ac(509)] = _0x708de7, _0x137b33[_0xa668ac(456)] = { "receiver": _0x708de7 }, _0x137b33[_0xa668ac(1814)] = [_0xe88d71[_0xa668ac(1637)]], this[_0xa668ac(1152)](_0x137b33);
        });
      }, this[_0x121ffc(2069)](_0x121ffc(1475), this[_0x121ffc(1043)])), _0x1fb67a[_0x121ffc(2150)](this, arguments);
    };
  } else
    wrapPeerConnectionEvent(_0x4b0aa7, _0x1b9473(451), (_0x4c7b02) => {
      var _0x18a533 = _0x1b9473;
      return !_0x4c7b02[_0x18a533(456)] && Object[_0x18a533(1564)](_0x4c7b02, "transceiver", { "value": { "receiver": _0x4c7b02[_0x18a533(509)] } }), _0x4c7b02;
    });
}
function shimGetSendersWithDtmf(_0x56305b) {
  var _0x29e31a = _0x780a7e;
  if (typeof _0x56305b === "object" && _0x56305b[_0x29e31a(1848)] && !(_0x29e31a(1033) in _0x56305b["RTCPeerConnection"]["prototype"]) && _0x29e31a(1397) in _0x56305b[_0x29e31a(1848)][_0x29e31a(1897)]) {
    const _0xd2e982 = function(_0x5b1834, _0x27c116) {
      return { "track": _0x27c116, get "dtmf"() {
        var _0x5a2b55 = _0x3001;
        return this["_dtmf"] === void 0 && (_0x27c116["kind"] === "audio" ? this[_0x5a2b55(550)] = _0x5b1834[_0x5a2b55(1397)](_0x27c116) : this[_0x5a2b55(550)] = null), this[_0x5a2b55(550)];
      }, "_pc": _0x5b1834 };
    };
    if (!_0x56305b[_0x29e31a(1848)][_0x29e31a(1897)][_0x29e31a(1033)]) {
      _0x56305b[_0x29e31a(1848)][_0x29e31a(1897)][_0x29e31a(1033)] = function _0x46d478() {
        var _0x1b2545 = _0x29e31a;
        return this["_senders"] = this[_0x1b2545(848)] || [], this[_0x1b2545(848)]["slice"]();
      };
      const _0x222a45 = _0x56305b[_0x29e31a(1848)]["prototype"][_0x29e31a(1976)];
      _0x56305b[_0x29e31a(1848)]["prototype"][_0x29e31a(1976)] = function _0x1c648f(_0x526446, _0x394dde) {
        var _0x59e19b = _0x29e31a;
        let _0x48ed92 = _0x222a45[_0x59e19b(2150)](this, arguments);
        return !_0x48ed92 && (_0x48ed92 = _0xd2e982(this, _0x526446), this[_0x59e19b(848)]["push"](_0x48ed92)), _0x48ed92;
      };
      const _0x3a6899 = _0x56305b[_0x29e31a(1848)][_0x29e31a(1897)]["removeTrack"];
      _0x56305b[_0x29e31a(1848)][_0x29e31a(1897)]["removeTrack"] = function _0x4047b4(_0x31481) {
        var _0x2090e4 = _0x29e31a;
        _0x3a6899["apply"](this, arguments);
        const _0x5eafc4 = this["_senders"][_0x2090e4(1879)](_0x31481);
        _0x5eafc4 !== -1 && this[_0x2090e4(848)]["splice"](_0x5eafc4, 1);
      };
    }
    const _0x154c14 = _0x56305b["RTCPeerConnection"][_0x29e31a(1897)][_0x29e31a(776)];
    _0x56305b[_0x29e31a(1848)][_0x29e31a(1897)][_0x29e31a(776)] = function _0x1fb4af(_0x3d2954) {
      var _0x4d6ece = _0x29e31a;
      this[_0x4d6ece(848)] = this["_senders"] || [], _0x154c14["apply"](this, [_0x3d2954]), _0x3d2954["getTracks"]()[_0x4d6ece(839)]((_0x3de4c0) => {
        var _0x3b3f39 = _0x4d6ece;
        this[_0x3b3f39(848)]["push"](_0xd2e982(this, _0x3de4c0));
      });
    };
    const _0x5c96ad = _0x56305b["RTCPeerConnection"][_0x29e31a(1897)]["removeStream"];
    _0x56305b[_0x29e31a(1848)][_0x29e31a(1897)][_0x29e31a(2162)] = function _0x599a13(_0x1a903e) {
      var _0x74f64e = _0x29e31a;
      this[_0x74f64e(848)] = this["_senders"] || [], _0x5c96ad[_0x74f64e(2150)](this, [_0x1a903e]), _0x1a903e[_0x74f64e(1817)]()[_0x74f64e(839)]((_0x13dfaf) => {
        var _0x2ab8e0 = _0x74f64e;
        const _0x5e947a = this[_0x2ab8e0(848)][_0x2ab8e0(1252)]((_0x5e2f31) => _0x5e2f31["track"] === _0x13dfaf);
        _0x5e947a && this[_0x2ab8e0(848)][_0x2ab8e0(1314)](this["_senders"][_0x2ab8e0(1879)](_0x5e947a), 1);
      });
    };
  } else {
    if (typeof _0x56305b === _0x29e31a(1723) && _0x56305b["RTCPeerConnection"] && "getSenders" in _0x56305b[_0x29e31a(1848)][_0x29e31a(1897)] && _0x29e31a(1397) in _0x56305b[_0x29e31a(1848)][_0x29e31a(1897)] && _0x56305b[_0x29e31a(930)] && !(_0x29e31a(482) in _0x56305b[_0x29e31a(930)][_0x29e31a(1897)])) {
      const _0x1709a4 = _0x56305b["RTCPeerConnection"][_0x29e31a(1897)][_0x29e31a(1033)];
      _0x56305b[_0x29e31a(1848)]["prototype"][_0x29e31a(1033)] = function _0x1302b3() {
        var _0x4da6e1 = _0x29e31a;
        const _0x5923a3 = _0x1709a4["apply"](this, []);
        return _0x5923a3["forEach"]((_0x5207d0) => _0x5207d0[_0x4da6e1(1824)] = this), _0x5923a3;
      }, Object[_0x29e31a(1564)](_0x56305b[_0x29e31a(930)][_0x29e31a(1897)], "dtmf", { "get"() {
        var _0x5c9baf = _0x29e31a;
        return this[_0x5c9baf(550)] === void 0 && (this[_0x5c9baf(451)][_0x5c9baf(1711)] === "audio" ? this[_0x5c9baf(550)] = this[_0x5c9baf(1824)][_0x5c9baf(1397)](this[_0x5c9baf(451)]) : this[_0x5c9baf(550)] = null), this["_dtmf"];
      } });
    }
  }
}
function shimGetStats(_0x49028c) {
  var _0x4d0a3b = _0x780a7e;
  if (!_0x49028c[_0x4d0a3b(1848)])
    return;
  const _0x1ec108 = _0x49028c[_0x4d0a3b(1848)][_0x4d0a3b(1897)]["getStats"];
  _0x49028c["RTCPeerConnection"][_0x4d0a3b(1897)][_0x4d0a3b(1350)] = function _0x5a2e1c() {
    var _0x3523c7 = _0x4d0a3b;
    const [_0x229a73, _0x18aa98, _0x291daf] = arguments;
    if (arguments[_0x3523c7(1965)] > 0 && typeof _0x229a73 === _0x3523c7(389))
      return _0x1ec108["apply"](this, arguments);
    if (_0x1ec108[_0x3523c7(1965)] === 0 && (arguments[_0x3523c7(1965)] === 0 || typeof _0x229a73 !== _0x3523c7(389)))
      return _0x1ec108[_0x3523c7(2150)](this, []);
    const _0x48685e = function(_0x52e937) {
      var _0x3ce6bc = _0x3523c7;
      const _0x3fd01d = {}, _0xcacaf8 = _0x52e937[_0x3ce6bc(411)]();
      return _0xcacaf8[_0x3ce6bc(839)]((_0x5c6c2e) => {
        var _0x41f34a = _0x3ce6bc;
        const _0x2bd7cb = { "id": _0x5c6c2e["id"], "timestamp": _0x5c6c2e[_0x41f34a(907)], "type": { "localcandidate": "local-candidate", "remotecandidate": _0x41f34a(2044) }[_0x5c6c2e[_0x41f34a(1514)]] || _0x5c6c2e[_0x41f34a(1514)] };
        _0x5c6c2e[_0x41f34a(860)]()["forEach"]((_0x1d90ee) => {
          var _0xc8e385 = _0x41f34a;
          _0x2bd7cb[_0x1d90ee] = _0x5c6c2e[_0xc8e385(1730)](_0x1d90ee);
        }), _0x3fd01d[_0x2bd7cb["id"]] = _0x2bd7cb;
      }), _0x3fd01d;
    }, _0x13046f = function(_0x50b616) {
      var _0x17de77 = _0x3523c7;
      return new Map(Object[_0x17de77(605)](_0x50b616)[_0x17de77(376)]((_0x556926) => [_0x556926, _0x50b616[_0x556926]]));
    };
    if (arguments[_0x3523c7(1965)] >= 2) {
      const _0x273ecd = function(_0x44200f) {
        _0x18aa98(_0x13046f(_0x48685e(_0x44200f)));
      };
      return _0x1ec108["apply"](this, [_0x273ecd, _0x229a73]);
    }
    return new Promise((_0x54a7b6, _0x19e85c) => {
      _0x1ec108["apply"](this, [function(_0x3d5bee) {
        _0x54a7b6(_0x13046f(_0x48685e(_0x3d5bee)));
      }, _0x19e85c]);
    })["then"](_0x18aa98, _0x291daf);
  };
}
function shimSenderReceiverGetStats(_0x4accda) {
  var _0x4d8f05 = _0x780a7e;
  if (!(typeof _0x4accda === _0x4d8f05(1723) && _0x4accda[_0x4d8f05(1848)] && _0x4accda["RTCRtpSender"] && _0x4accda[_0x4d8f05(840)]))
    return;
  if (!(_0x4d8f05(1350) in _0x4accda["RTCRtpSender"]["prototype"])) {
    const _0x4a266d = _0x4accda[_0x4d8f05(1848)][_0x4d8f05(1897)][_0x4d8f05(1033)];
    _0x4a266d && (_0x4accda[_0x4d8f05(1848)]["prototype"]["getSenders"] = function _0x16a82a() {
      var _0x14a476 = _0x4d8f05;
      const _0x558eb1 = _0x4a266d[_0x14a476(2150)](this, []);
      return _0x558eb1[_0x14a476(839)]((_0x1ee7b1) => _0x1ee7b1[_0x14a476(1824)] = this), _0x558eb1;
    });
    const _0x3d3c56 = _0x4accda[_0x4d8f05(1848)][_0x4d8f05(1897)]["addTrack"];
    _0x3d3c56 && (_0x4accda[_0x4d8f05(1848)][_0x4d8f05(1897)][_0x4d8f05(1976)] = function _0xfcadb5() {
      var _0x557c65 = _0x4d8f05;
      const _0x438ca8 = _0x3d3c56["apply"](this, arguments);
      return _0x438ca8[_0x557c65(1824)] = this, _0x438ca8;
    }), _0x4accda["RTCRtpSender"]["prototype"]["getStats"] = function _0x25962d() {
      var _0x5c7384 = _0x4d8f05;
      const _0x1fe720 = this;
      return this[_0x5c7384(1824)][_0x5c7384(1350)]()[_0x5c7384(1902)]((_0x5b2a8d) => filterStats(_0x5b2a8d, _0x1fe720[_0x5c7384(451)], !![]));
    };
  }
  if (!(_0x4d8f05(1350) in _0x4accda[_0x4d8f05(840)][_0x4d8f05(1897)])) {
    const _0x300d85 = _0x4accda[_0x4d8f05(1848)][_0x4d8f05(1897)][_0x4d8f05(1006)];
    _0x300d85 && (_0x4accda[_0x4d8f05(1848)][_0x4d8f05(1897)]["getReceivers"] = function _0xf9ccaa() {
      var _0xf41d0e = _0x4d8f05;
      const _0x50f320 = _0x300d85[_0xf41d0e(2150)](this, []);
      return _0x50f320[_0xf41d0e(839)]((_0x5125a3) => _0x5125a3[_0xf41d0e(1824)] = this), _0x50f320;
    }), wrapPeerConnectionEvent(_0x4accda, _0x4d8f05(451), (_0x3502c7) => {
      var _0x10b79c = _0x4d8f05;
      return _0x3502c7[_0x10b79c(509)][_0x10b79c(1824)] = _0x3502c7[_0x10b79c(578)], _0x3502c7;
    }), _0x4accda[_0x4d8f05(840)][_0x4d8f05(1897)][_0x4d8f05(1350)] = function _0x2069d6() {
      var _0x293b5e = _0x4d8f05;
      const _0x3950f1 = this;
      return this[_0x293b5e(1824)][_0x293b5e(1350)]()["then"]((_0x358961) => filterStats(_0x358961, _0x3950f1[_0x293b5e(451)], ![]));
    };
  }
  if (!(_0x4d8f05(1350) in _0x4accda["RTCRtpSender"][_0x4d8f05(1897)] && _0x4d8f05(1350) in _0x4accda[_0x4d8f05(840)][_0x4d8f05(1897)]))
    return;
  const _0x91e378 = _0x4accda[_0x4d8f05(1848)]["prototype"]["getStats"];
  _0x4accda["RTCPeerConnection"][_0x4d8f05(1897)][_0x4d8f05(1350)] = function _0x3366d3() {
    var _0x2a44e6 = _0x4d8f05;
    if (arguments["length"] > 0 && arguments[0] instanceof _0x4accda[_0x2a44e6(709)]) {
      const _0x53bac1 = arguments[0];
      let _0x270e51, _0xfd4762, _0x198c5e;
      this[_0x2a44e6(1033)]()[_0x2a44e6(839)]((_0x50da28) => {
        var _0x43073b = _0x2a44e6;
        _0x50da28[_0x43073b(451)] === _0x53bac1 && (_0x270e51 ? _0x198c5e = !![] : _0x270e51 = _0x50da28);
      }), this["getReceivers"]()[_0x2a44e6(839)]((_0x22a5a3) => {
        var _0x63c990 = _0x2a44e6;
        return _0x22a5a3[_0x63c990(451)] === _0x53bac1 && (_0xfd4762 ? _0x198c5e = !![] : _0xfd4762 = _0x22a5a3), _0x22a5a3[_0x63c990(451)] === _0x53bac1;
      });
      if (_0x198c5e || _0x270e51 && _0xfd4762)
        return Promise[_0x2a44e6(1646)](new DOMException(_0x2a44e6(1773), "InvalidAccessError"));
      else {
        if (_0x270e51)
          return _0x270e51[_0x2a44e6(1350)]();
        else {
          if (_0xfd4762)
            return _0xfd4762["getStats"]();
        }
      }
      return Promise[_0x2a44e6(1646)](new DOMException(_0x2a44e6(699), _0x2a44e6(1551)));
    }
    return _0x91e378["apply"](this, arguments);
  };
}
function shimAddTrackRemoveTrackWithNative(_0x31eed1) {
  var _0xf23a8 = _0x780a7e;
  _0x31eed1[_0xf23a8(1848)][_0xf23a8(1897)][_0xf23a8(1980)] = function _0x15ece3() {
    var _0x2b6a0a = _0xf23a8;
    return this[_0x2b6a0a(824)] = this[_0x2b6a0a(824)] || {}, Object["keys"](this[_0x2b6a0a(824)])[_0x2b6a0a(376)]((_0x459cfe) => this[_0x2b6a0a(824)][_0x459cfe][0]);
  };
  const _0x3f5305 = _0x31eed1["RTCPeerConnection"][_0xf23a8(1897)]["addTrack"];
  _0x31eed1[_0xf23a8(1848)]["prototype"][_0xf23a8(1976)] = function _0x57ff04(_0x5d7e92, _0x2caef3) {
    var _0x4c28e5 = _0xf23a8;
    if (!_0x2caef3)
      return _0x3f5305[_0x4c28e5(2150)](this, arguments);
    this[_0x4c28e5(824)] = this[_0x4c28e5(824)] || {};
    const _0x4d3d50 = _0x3f5305[_0x4c28e5(2150)](this, arguments);
    if (!this[_0x4c28e5(824)][_0x2caef3["id"]])
      this["_shimmedLocalStreams"][_0x2caef3["id"]] = [_0x2caef3, _0x4d3d50];
    else
      this[_0x4c28e5(824)][_0x2caef3["id"]][_0x4c28e5(1879)](_0x4d3d50) === -1 && this[_0x4c28e5(824)][_0x2caef3["id"]][_0x4c28e5(1991)](_0x4d3d50);
    return _0x4d3d50;
  };
  const _0x2083f7 = _0x31eed1[_0xf23a8(1848)][_0xf23a8(1897)][_0xf23a8(776)];
  _0x31eed1[_0xf23a8(1848)][_0xf23a8(1897)]["addStream"] = function _0x39ca8e(_0x492acd) {
    var _0x5cb9b6 = _0xf23a8;
    this["_shimmedLocalStreams"] = this[_0x5cb9b6(824)] || {}, _0x492acd["getTracks"]()["forEach"]((_0x154953) => {
      var _0x27c650 = _0x5cb9b6;
      const _0xf61e1e = this[_0x27c650(1033)]()[_0x27c650(1252)]((_0x739eee) => _0x739eee[_0x27c650(451)] === _0x154953);
      if (_0xf61e1e)
        throw new DOMException(_0x27c650(1092), _0x27c650(1551));
    });
    const _0x39f452 = this[_0x5cb9b6(1033)]();
    _0x2083f7[_0x5cb9b6(2150)](this, arguments);
    const _0x5392c5 = this[_0x5cb9b6(1033)]()["filter"]((_0x361788) => _0x39f452[_0x5cb9b6(1879)](_0x361788) === -1);
    this[_0x5cb9b6(824)][_0x492acd["id"]] = [_0x492acd][_0x5cb9b6(2090)](_0x5392c5);
  };
  const _0x194fa5 = _0x31eed1["RTCPeerConnection"][_0xf23a8(1897)][_0xf23a8(2162)];
  _0x31eed1[_0xf23a8(1848)][_0xf23a8(1897)][_0xf23a8(2162)] = function _0x42d210(_0xd8a0a7) {
    var _0x1df4aa = _0xf23a8;
    return this["_shimmedLocalStreams"] = this[_0x1df4aa(824)] || {}, delete this[_0x1df4aa(824)][_0xd8a0a7["id"]], _0x194fa5["apply"](this, arguments);
  };
  const _0x2a535c = _0x31eed1[_0xf23a8(1848)][_0xf23a8(1897)][_0xf23a8(1103)];
  _0x31eed1[_0xf23a8(1848)][_0xf23a8(1897)][_0xf23a8(1103)] = function _0x49055d(_0x5c5cd9) {
    var _0x597bfa = _0xf23a8;
    return this[_0x597bfa(824)] = this["_shimmedLocalStreams"] || {}, _0x5c5cd9 && Object[_0x597bfa(605)](this[_0x597bfa(824)])[_0x597bfa(839)]((_0x17346b) => {
      var _0x38b57e = _0x597bfa;
      const _0x1f6499 = this["_shimmedLocalStreams"][_0x17346b][_0x38b57e(1879)](_0x5c5cd9);
      _0x1f6499 !== -1 && this[_0x38b57e(824)][_0x17346b][_0x38b57e(1314)](_0x1f6499, 1), this[_0x38b57e(824)][_0x17346b][_0x38b57e(1965)] === 1 && delete this[_0x38b57e(824)][_0x17346b];
    }), _0x2a535c[_0x597bfa(2150)](this, arguments);
  };
}
function shimAddTrackRemoveTrack(_0x55cf44, _0x1462f3) {
  var _0x228c2b = _0x780a7e;
  if (!_0x55cf44[_0x228c2b(1848)])
    return;
  if (_0x55cf44["RTCPeerConnection"][_0x228c2b(1897)]["addTrack"] && _0x1462f3["version"] >= 65)
    return shimAddTrackRemoveTrackWithNative(_0x55cf44);
  const _0x5204d3 = _0x55cf44[_0x228c2b(1848)]["prototype"][_0x228c2b(1980)];
  _0x55cf44[_0x228c2b(1848)][_0x228c2b(1897)][_0x228c2b(1980)] = function _0x3a2db6() {
    var _0x13c11c = _0x228c2b;
    const _0x2a6eb8 = _0x5204d3[_0x13c11c(2150)](this);
    return this[_0x13c11c(450)] = this[_0x13c11c(450)] || {}, _0x2a6eb8["map"]((_0x58711c) => this[_0x13c11c(450)][_0x58711c["id"]]);
  };
  const _0x4ab7bf = _0x55cf44[_0x228c2b(1848)][_0x228c2b(1897)]["addStream"];
  _0x55cf44[_0x228c2b(1848)][_0x228c2b(1897)][_0x228c2b(776)] = function _0x364c5a(_0x289b16) {
    var _0x40e836 = _0x228c2b;
    this["_streams"] = this["_streams"] || {}, this["_reverseStreams"] = this[_0x40e836(450)] || {}, _0x289b16[_0x40e836(1817)]()[_0x40e836(839)]((_0x470515) => {
      var _0x2ad29d = _0x40e836;
      const _0x5f4aa9 = this["getSenders"]()[_0x2ad29d(1252)]((_0x640b3a) => _0x640b3a[_0x2ad29d(451)] === _0x470515);
      if (_0x5f4aa9)
        throw new DOMException(_0x2ad29d(1092), _0x2ad29d(1551));
    });
    if (!this[_0x40e836(450)][_0x289b16["id"]]) {
      const _0x327798 = new _0x55cf44[_0x40e836(720)](_0x289b16[_0x40e836(1817)]());
      this["_streams"][_0x289b16["id"]] = _0x327798, this[_0x40e836(450)][_0x327798["id"]] = _0x289b16, _0x289b16 = _0x327798;
    }
    _0x4ab7bf[_0x40e836(2150)](this, [_0x289b16]);
  };
  const _0x381703 = _0x55cf44[_0x228c2b(1848)][_0x228c2b(1897)][_0x228c2b(2162)];
  _0x55cf44[_0x228c2b(1848)][_0x228c2b(1897)][_0x228c2b(2162)] = function _0x21639c(_0x9234d6) {
    var _0x801568 = _0x228c2b;
    this[_0x801568(1621)] = this[_0x801568(1621)] || {}, this["_reverseStreams"] = this[_0x801568(450)] || {}, _0x381703[_0x801568(2150)](this, [this[_0x801568(1621)][_0x9234d6["id"]] || _0x9234d6]), delete this["_reverseStreams"][this[_0x801568(1621)][_0x9234d6["id"]] ? this[_0x801568(1621)][_0x9234d6["id"]]["id"] : _0x9234d6["id"]], delete this[_0x801568(1621)][_0x9234d6["id"]];
  }, _0x55cf44[_0x228c2b(1848)][_0x228c2b(1897)][_0x228c2b(1976)] = function _0x20adc4(_0x4d48f7, _0x1d4fec) {
    var _0xdb693c = _0x228c2b;
    if (this[_0xdb693c(1327)] === _0xdb693c(498))
      throw new DOMException(_0xdb693c(1575), _0xdb693c(1027));
    const _0x5369d6 = [][_0xdb693c(1215)]["call"](arguments, 1);
    if (_0x5369d6[_0xdb693c(1965)] !== 1 || !_0x5369d6[0][_0xdb693c(1817)]()[_0xdb693c(1252)]((_0x42fa1e) => _0x42fa1e === _0x4d48f7))
      throw new DOMException("The adapter.js addTrack polyfill only supports a single " + _0xdb693c(401), _0xdb693c(1724));
    const _0x7a704c = this["getSenders"]()[_0xdb693c(1252)]((_0x44121b) => _0x44121b["track"] === _0x4d48f7);
    if (_0x7a704c)
      throw new DOMException(_0xdb693c(1092), _0xdb693c(1551));
    this["_streams"] = this[_0xdb693c(1621)] || {}, this["_reverseStreams"] = this[_0xdb693c(450)] || {};
    const _0x5662b4 = this["_streams"][_0x1d4fec["id"]];
    if (_0x5662b4)
      _0x5662b4[_0xdb693c(1976)](_0x4d48f7), Promise[_0xdb693c(1211)]()["then"](() => {
        var _0x12d444 = _0xdb693c;
        this[_0x12d444(1152)](new Event(_0x12d444(1404)));
      });
    else {
      const _0x218335 = new _0x55cf44["MediaStream"]([_0x4d48f7]);
      this[_0xdb693c(1621)][_0x1d4fec["id"]] = _0x218335, this["_reverseStreams"][_0x218335["id"]] = _0x1d4fec, this[_0xdb693c(776)](_0x218335);
    }
    return this["getSenders"]()[_0xdb693c(1252)]((_0x5b6076) => _0x5b6076[_0xdb693c(451)] === _0x4d48f7);
  };
  function _0x347794(_0x5ca82d, _0x1d1087) {
    var _0xfafad7 = _0x228c2b;
    let _0x583114 = _0x1d1087["sdp"];
    return Object[_0xfafad7(605)](_0x5ca82d[_0xfafad7(450)] || [])[_0xfafad7(839)]((_0xa513fa) => {
      var _0x474aa0 = _0xfafad7;
      const _0x1e5058 = _0x5ca82d["_reverseStreams"][_0xa513fa], _0x5935e9 = _0x5ca82d[_0x474aa0(1621)][_0x1e5058["id"]];
      _0x583114 = _0x583114[_0x474aa0(1028)](new RegExp(_0x5935e9["id"], "g"), _0x1e5058["id"]);
    }), new RTCSessionDescription({ "type": _0x1d1087[_0xfafad7(1514)], "sdp": _0x583114 });
  }
  function _0x58bf65(_0x3dadd2, _0x150ffb) {
    var _0x2627b8 = _0x228c2b;
    let _0x1f6696 = _0x150ffb[_0x2627b8(2016)];
    return Object["keys"](_0x3dadd2[_0x2627b8(450)] || [])[_0x2627b8(839)]((_0x2622cd) => {
      var _0x198bd7 = _0x2627b8;
      const _0x349464 = _0x3dadd2[_0x198bd7(450)][_0x2622cd], _0x4efac1 = _0x3dadd2[_0x198bd7(1621)][_0x349464["id"]];
      _0x1f6696 = _0x1f6696[_0x198bd7(1028)](new RegExp(_0x349464["id"], "g"), _0x4efac1["id"]);
    }), new RTCSessionDescription({ "type": _0x150ffb[_0x2627b8(1514)], "sdp": _0x1f6696 });
  }
  [_0x228c2b(1410), _0x228c2b(1746)][_0x228c2b(839)](function(_0x384533) {
    var _0x2cb2ea = _0x228c2b;
    const _0x5db6e1 = _0x55cf44["RTCPeerConnection"]["prototype"][_0x384533], _0x4b651f = { [_0x384533]() {
      var _0x53ca73 = _0x3001;
      const _0xed4a2e = arguments, _0x14be90 = arguments["length"] && typeof arguments[0] === _0x53ca73(389);
      if (_0x14be90)
        return _0x5db6e1["apply"](this, [(_0x3945b2) => {
          var _0x4295de = _0x53ca73;
          const _0xc796c1 = _0x347794(this, _0x3945b2);
          _0xed4a2e[0][_0x4295de(2150)](null, [_0xc796c1]);
        }, (_0x3b929f) => {
          var _0x5b2dfd = _0x53ca73;
          _0xed4a2e[1] && _0xed4a2e[1][_0x5b2dfd(2150)](null, _0x3b929f);
        }, arguments[2]]);
      return _0x5db6e1[_0x53ca73(2150)](this, arguments)[_0x53ca73(1902)]((_0x3a0196) => _0x347794(this, _0x3a0196));
    } };
    _0x55cf44[_0x2cb2ea(1848)][_0x2cb2ea(1897)][_0x384533] = _0x4b651f[_0x384533];
  });
  const _0x2cad19 = _0x55cf44[_0x228c2b(1848)][_0x228c2b(1897)][_0x228c2b(1392)];
  _0x55cf44["RTCPeerConnection"][_0x228c2b(1897)]["setLocalDescription"] = function _0x3d1293() {
    var _0xe3e83e = _0x228c2b;
    if (!arguments[_0xe3e83e(1965)] || !arguments[0]["type"])
      return _0x2cad19["apply"](this, arguments);
    return arguments[0] = _0x58bf65(this, arguments[0]), _0x2cad19[_0xe3e83e(2150)](this, arguments);
  };
  const _0x3528cc = Object["getOwnPropertyDescriptor"](_0x55cf44[_0x228c2b(1848)][_0x228c2b(1897)], _0x228c2b(2112));
  Object[_0x228c2b(1564)](_0x55cf44[_0x228c2b(1848)][_0x228c2b(1897)], "localDescription", { "get"() {
    var _0x1388bb = _0x228c2b;
    const _0x2f8745 = _0x3528cc["get"][_0x1388bb(2150)](this);
    if (_0x2f8745["type"] === "")
      return _0x2f8745;
    return _0x347794(this, _0x2f8745);
  } }), _0x55cf44[_0x228c2b(1848)]["prototype"][_0x228c2b(1103)] = function _0x15d54c(_0x24c627) {
    var _0x40f307 = _0x228c2b;
    if (this[_0x40f307(1327)] === "closed")
      throw new DOMException(_0x40f307(1575), _0x40f307(1027));
    if (!_0x24c627[_0x40f307(1824)])
      throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack " + _0x40f307(1111), _0x40f307(1786));
    const _0x3e6dc0 = _0x24c627["_pc"] === this;
    if (!_0x3e6dc0)
      throw new DOMException(_0x40f307(1194), _0x40f307(1551));
    this[_0x40f307(1621)] = this[_0x40f307(1621)] || {};
    let _0x4fe842;
    Object[_0x40f307(605)](this[_0x40f307(1621)])[_0x40f307(839)]((_0x3ee85d) => {
      var _0x119447 = _0x40f307;
      const _0x2d6d01 = this["_streams"][_0x3ee85d][_0x119447(1817)]()["find"]((_0x29dee7) => _0x24c627[_0x119447(451)] === _0x29dee7);
      _0x2d6d01 && (_0x4fe842 = this[_0x119447(1621)][_0x3ee85d]);
    }), _0x4fe842 && (_0x4fe842[_0x40f307(1817)]()[_0x40f307(1965)] === 1 ? this[_0x40f307(2162)](this[_0x40f307(450)][_0x4fe842["id"]]) : _0x4fe842[_0x40f307(1103)](_0x24c627["track"]), this[_0x40f307(1152)](new Event(_0x40f307(1404))));
  };
}
function shimPeerConnection$2(_0x1bb666, _0x42693c) {
  var _0x3bdd4d = _0x780a7e;
  !_0x1bb666[_0x3bdd4d(1848)] && _0x1bb666[_0x3bdd4d(384)] && (_0x1bb666["RTCPeerConnection"] = _0x1bb666[_0x3bdd4d(384)]);
  if (!_0x1bb666["RTCPeerConnection"])
    return;
  _0x42693c["version"] < 53 && [_0x3bdd4d(1392), _0x3bdd4d(2140), _0x3bdd4d(1820)]["forEach"](function(_0x49cdb1) {
    var _0xafc183 = _0x3bdd4d;
    const _0x1db0ee = _0x1bb666["RTCPeerConnection"][_0xafc183(1897)][_0x49cdb1], _0x359d33 = { [_0x49cdb1]() {
      var _0x625565 = _0xafc183;
      return arguments[0] = new (_0x49cdb1 === _0x625565(1820) ? _0x1bb666[_0x625565(1328)] : _0x1bb666[_0x625565(1118)])(arguments[0]), _0x1db0ee[_0x625565(2150)](this, arguments);
    } };
    _0x1bb666["RTCPeerConnection"][_0xafc183(1897)][_0x49cdb1] = _0x359d33[_0x49cdb1];
  });
}
function fixNegotiationNeeded(_0x1c90d4, _0x5ec8fd) {
  var _0x5874f3 = _0x780a7e;
  wrapPeerConnectionEvent(_0x1c90d4, _0x5874f3(1404), (_0x30418d) => {
    var _0x6799f4 = _0x5874f3;
    const _0x5c614b = _0x30418d["target"];
    if (_0x5ec8fd[_0x6799f4(436)] < 72 || _0x5c614b["getConfiguration"] && _0x5c614b[_0x6799f4(1971)]()[_0x6799f4(1595)] === _0x6799f4(1222)) {
      if (_0x5c614b[_0x6799f4(1327)] !== _0x6799f4(1181))
        return;
    }
    return _0x30418d;
  });
}
const chromeShim = Object[_0x780a7e(1623)](Object[_0x780a7e(1564)]({ "__proto__": null, "shimMediaStream": shimMediaStream, "shimOnTrack": shimOnTrack$1, "shimGetSendersWithDtmf": shimGetSendersWithDtmf, "shimGetStats": shimGetStats, "shimSenderReceiverGetStats": shimSenderReceiverGetStats, "shimAddTrackRemoveTrackWithNative": shimAddTrackRemoveTrackWithNative, "shimAddTrackRemoveTrack": shimAddTrackRemoveTrack, "shimPeerConnection": shimPeerConnection$2, "fixNegotiationNeeded": fixNegotiationNeeded, "shimGetUserMedia": shimGetUserMedia$3, "shimGetDisplayMedia": shimGetDisplayMedia$2 }, Symbol[_0x780a7e(844)], { "value": _0x780a7e(1513) }));
function filterIceServers$1(_0x1171a6, _0x12a84f) {
  var _0x63120e = _0x780a7e;
  let _0x260b5e = ![];
  return _0x1171a6 = JSON["parse"](JSON[_0x63120e(2063)](_0x1171a6)), _0x1171a6[_0x63120e(805)]((_0x25acac) => {
    var _0x48e27a = _0x63120e;
    if (_0x25acac && (_0x25acac["urls"] || _0x25acac[_0x48e27a(1497)])) {
      let _0x3c1301 = _0x25acac[_0x48e27a(1453)] || _0x25acac[_0x48e27a(1497)];
      _0x25acac["url"] && !_0x25acac[_0x48e27a(1453)] && deprecated(_0x48e27a(1232), "RTCIceServer.urls");
      const _0x54a581 = typeof _0x3c1301 === _0x48e27a(1548);
      return _0x54a581 && (_0x3c1301 = [_0x3c1301]), _0x3c1301 = _0x3c1301[_0x48e27a(805)]((_0x2b896d) => {
        var _0x4d9174 = _0x48e27a;
        if (_0x2b896d[_0x4d9174(1879)](_0x4d9174(1642)) === 0)
          return ![];
        const _0x3accf5 = _0x2b896d[_0x4d9174(1914)](_0x4d9174(2157)) && !_0x2b896d["startsWith"](_0x4d9174(821)) && _0x2b896d[_0x4d9174(589)]("transport=udp");
        if (_0x3accf5 && !_0x260b5e)
          return _0x260b5e = !![], !![];
        return _0x3accf5 && !_0x260b5e;
      }), delete _0x25acac[_0x48e27a(1497)], _0x25acac["urls"] = _0x54a581 ? _0x3c1301[0] : _0x3c1301, !!_0x3c1301[_0x48e27a(1965)];
    }
  });
}
var sdp = { "exports": {} };
(function(_0x7becd2) {
  var _0x5bfe7c = _0x780a7e, _0x430e2e = {};
  _0x430e2e[_0x5bfe7c(1209)] = function() {
    var _0x520f8b = _0x5bfe7c;
    return Math["random"]()[_0x520f8b(2073)](36)[_0x520f8b(398)](2, 10);
  }, _0x430e2e[_0x5bfe7c(672)] = _0x430e2e["generateIdentifier"](), _0x430e2e["splitLines"] = function(_0x5b9b8d) {
    var _0x4977eb = _0x5bfe7c;
    return _0x5b9b8d[_0x4977eb(1890)]()[_0x4977eb(1201)]("\n")["map"](function(_0x5c9257) {
      return _0x5c9257["trim"]();
    });
  }, _0x430e2e[_0x5bfe7c(1922)] = function(_0x5c5adc) {
    var _0x28c12a = _0x5bfe7c, _0x1a5b79 = _0x5c5adc[_0x28c12a(1201)](_0x28c12a(1797));
    return _0x1a5b79[_0x28c12a(376)](function(_0x4953a7, _0x8a33b2) {
      var _0x1a4aab = _0x28c12a;
      return (_0x8a33b2 > 0 ? "m=" + _0x4953a7 : _0x4953a7)[_0x1a4aab(1890)]() + "\r\n";
    });
  }, _0x430e2e[_0x5bfe7c(926)] = function(_0x5be8da) {
    var _0x1aef69 = _0x430e2e["splitSections"](_0x5be8da);
    return _0x1aef69 && _0x1aef69[0];
  }, _0x430e2e["getMediaSections"] = function(_0x82b39c) {
    var _0x29d5ef = _0x5bfe7c, _0x3016e1 = _0x430e2e[_0x29d5ef(1922)](_0x82b39c);
    return _0x3016e1["shift"](), _0x3016e1;
  }, _0x430e2e["matchPrefix"] = function(_0x3cd659, _0x3ed896) {
    var _0x574378 = _0x5bfe7c;
    return _0x430e2e["splitLines"](_0x3cd659)[_0x574378(805)](function(_0x1de57d) {
      var _0x58be1f = _0x574378;
      return _0x1de57d[_0x58be1f(1879)](_0x3ed896) === 0;
    });
  }, _0x430e2e[_0x5bfe7c(1619)] = function(_0x4ffa5e) {
    var _0x147b53 = _0x5bfe7c, _0x2ba914;
    _0x4ffa5e[_0x147b53(1879)](_0x147b53(1529)) === 0 ? _0x2ba914 = _0x4ffa5e["substring"](12)["split"](" ") : _0x2ba914 = _0x4ffa5e[_0x147b53(1856)](10)[_0x147b53(1201)](" ");
    var _0x158706 = { "foundation": _0x2ba914[0], "component": parseInt(_0x2ba914[1], 10), "protocol": _0x2ba914[2]["toLowerCase"](), "priority": parseInt(_0x2ba914[3], 10), "ip": _0x2ba914[4], "address": _0x2ba914[4], "port": parseInt(_0x2ba914[5], 10), "type": _0x2ba914[7] };
    for (var _0x27426c = 8; _0x27426c < _0x2ba914[_0x147b53(1965)]; _0x27426c += 2) {
      switch (_0x2ba914[_0x27426c]) {
        case _0x147b53(449):
          _0x158706[_0x147b53(1142)] = _0x2ba914[_0x27426c + 1];
          break;
        case _0x147b53(402):
          _0x158706[_0x147b53(2197)] = parseInt(_0x2ba914[_0x27426c + 1], 10);
          break;
        case _0x147b53(1012):
          _0x158706[_0x147b53(1292)] = _0x2ba914[_0x27426c + 1];
          break;
        case _0x147b53(1003):
          _0x158706[_0x147b53(1003)] = _0x2ba914[_0x27426c + 1], _0x158706["usernameFragment"] = _0x2ba914[_0x27426c + 1];
          break;
        default:
          _0x158706[_0x2ba914[_0x27426c]] = _0x2ba914[_0x27426c + 1];
          break;
      }
    }
    return _0x158706;
  }, _0x430e2e[_0x5bfe7c(612)] = function(_0x2c176c) {
    var _0x1a6fd5 = _0x5bfe7c, _0x36a390 = [];
    _0x36a390["push"](_0x2c176c["foundation"]), _0x36a390[_0x1a6fd5(1991)](_0x2c176c[_0x1a6fd5(352)]), _0x36a390["push"](_0x2c176c[_0x1a6fd5(1643)]["toUpperCase"]()), _0x36a390[_0x1a6fd5(1991)](_0x2c176c[_0x1a6fd5(948)]), _0x36a390[_0x1a6fd5(1991)](_0x2c176c[_0x1a6fd5(852)] || _0x2c176c["ip"]), _0x36a390[_0x1a6fd5(1991)](_0x2c176c[_0x1a6fd5(2071)]);
    var _0x4a7234 = _0x2c176c[_0x1a6fd5(1514)];
    return _0x36a390["push"](_0x1a6fd5(1059)), _0x36a390[_0x1a6fd5(1991)](_0x4a7234), _0x4a7234 !== _0x1a6fd5(515) && _0x2c176c[_0x1a6fd5(1142)] && _0x2c176c[_0x1a6fd5(2197)] && (_0x36a390[_0x1a6fd5(1991)](_0x1a6fd5(449)), _0x36a390["push"](_0x2c176c["relatedAddress"]), _0x36a390[_0x1a6fd5(1991)](_0x1a6fd5(402)), _0x36a390[_0x1a6fd5(1991)](_0x2c176c["relatedPort"])), _0x2c176c[_0x1a6fd5(1292)] && _0x2c176c[_0x1a6fd5(1643)][_0x1a6fd5(433)]() === _0x1a6fd5(2186) && (_0x36a390[_0x1a6fd5(1991)]("tcptype"), _0x36a390[_0x1a6fd5(1991)](_0x2c176c["tcpType"])), (_0x2c176c[_0x1a6fd5(2188)] || _0x2c176c[_0x1a6fd5(1003)]) && (_0x36a390[_0x1a6fd5(1991)](_0x1a6fd5(1003)), _0x36a390[_0x1a6fd5(1991)](_0x2c176c[_0x1a6fd5(2188)] || _0x2c176c[_0x1a6fd5(1003)])), _0x1a6fd5(1431) + _0x36a390["join"](" ");
  }, _0x430e2e[_0x5bfe7c(1295)] = function(_0x4069a7) {
    var _0x53f070 = _0x5bfe7c;
    return _0x4069a7[_0x53f070(398)](14)[_0x53f070(1201)](" ");
  }, _0x430e2e["parseRtpMap"] = function(_0x404aea) {
    var _0x59ee2b = _0x5bfe7c, _0x38fe2e = _0x404aea[_0x59ee2b(398)](9)[_0x59ee2b(1201)](" "), _0x288764 = { "payloadType": parseInt(_0x38fe2e[_0x59ee2b(2002)](), 10) };
    return _0x38fe2e = _0x38fe2e[0]["split"]("/"), _0x288764["name"] = _0x38fe2e[0], _0x288764["clockRate"] = parseInt(_0x38fe2e[1], 10), _0x288764[_0x59ee2b(1568)] = _0x38fe2e[_0x59ee2b(1965)] === 3 ? parseInt(_0x38fe2e[2], 10) : 1, _0x288764[_0x59ee2b(1339)] = _0x288764["channels"], _0x288764;
  }, _0x430e2e[_0x5bfe7c(1525)] = function(_0x32873e) {
    var _0x5c09a4 = _0x5bfe7c, _0x4396b2 = _0x32873e[_0x5c09a4(1371)];
    _0x32873e[_0x5c09a4(1689)] !== void 0 && (_0x4396b2 = _0x32873e[_0x5c09a4(1689)]);
    var _0x239ed2 = _0x32873e[_0x5c09a4(1568)] || _0x32873e[_0x5c09a4(1339)] || 1;
    return "a=rtpmap:" + _0x4396b2 + " " + _0x32873e["name"] + "/" + _0x32873e[_0x5c09a4(2206)] + (_0x239ed2 !== 1 ? "/" + _0x239ed2 : "") + "\r\n";
  }, _0x430e2e[_0x5bfe7c(1979)] = function(_0x47c01b) {
    var _0x279865 = _0x5bfe7c, _0x6e1165 = _0x47c01b["substr"](9)[_0x279865(1201)](" ");
    return { "id": parseInt(_0x6e1165[0], 10), "direction": _0x6e1165[0][_0x279865(1879)]("/") > 0 ? _0x6e1165[0][_0x279865(1201)]("/")[1] : "sendrecv", "uri": _0x6e1165[1] };
  }, _0x430e2e[_0x5bfe7c(1667)] = function(_0x11286f) {
    var _0x2c0c16 = _0x5bfe7c;
    return _0x2c0c16(1706) + (_0x11286f["id"] || _0x11286f["preferredId"]) + (_0x11286f[_0x2c0c16(1299)] && _0x11286f[_0x2c0c16(1299)] !== _0x2c0c16(1614) ? "/" + _0x11286f[_0x2c0c16(1299)] : "") + " " + _0x11286f[_0x2c0c16(362)] + "\r\n";
  }, _0x430e2e[_0x5bfe7c(2062)] = function(_0x125280) {
    var _0xc0c2b9 = _0x5bfe7c, _0x17dd9a = {}, _0x2609ae, _0x5bb911 = _0x125280[_0xc0c2b9(398)](_0x125280[_0xc0c2b9(1879)](" ") + 1)[_0xc0c2b9(1201)](";");
    for (var _0x6b266 = 0; _0x6b266 < _0x5bb911[_0xc0c2b9(1965)]; _0x6b266++) {
      _0x2609ae = _0x5bb911[_0x6b266]["trim"]()[_0xc0c2b9(1201)]("="), _0x17dd9a[_0x2609ae[0][_0xc0c2b9(1890)]()] = _0x2609ae[1];
    }
    return _0x17dd9a;
  }, _0x430e2e[_0x5bfe7c(534)] = function(_0x4e25a0) {
    var _0x88e9e5 = _0x5bfe7c, _0x38435a = "", _0x510704 = _0x4e25a0["payloadType"];
    _0x4e25a0[_0x88e9e5(1689)] !== void 0 && (_0x510704 = _0x4e25a0["preferredPayloadType"]);
    if (_0x4e25a0[_0x88e9e5(1678)] && Object[_0x88e9e5(605)](_0x4e25a0[_0x88e9e5(1678)])["length"]) {
      var _0x590bed = [];
      Object[_0x88e9e5(605)](_0x4e25a0[_0x88e9e5(1678)])["forEach"](function(_0x1d858c) {
        var _0x4231de = _0x88e9e5;
        _0x4e25a0[_0x4231de(1678)][_0x1d858c] ? _0x590bed[_0x4231de(1991)](_0x1d858c + "=" + _0x4e25a0[_0x4231de(1678)][_0x1d858c]) : _0x590bed[_0x4231de(1991)](_0x1d858c);
      }), _0x38435a += _0x88e9e5(542) + _0x510704 + " " + _0x590bed["join"](";") + "\r\n";
    }
    return _0x38435a;
  }, _0x430e2e[_0x5bfe7c(601)] = function(_0x5259b4) {
    var _0x2ccea5 = _0x5bfe7c, _0x187bd1 = _0x5259b4["substr"](_0x5259b4[_0x2ccea5(1879)](" ") + 1)[_0x2ccea5(1201)](" ");
    return { "type": _0x187bd1[_0x2ccea5(2002)](), "parameter": _0x187bd1["join"](" ") };
  }, _0x430e2e[_0x5bfe7c(1759)] = function(_0x5e6db6) {
    var _0x236b13 = _0x5bfe7c, _0x3d534d = "", _0x228aa3 = _0x5e6db6[_0x236b13(1371)];
    return _0x5e6db6[_0x236b13(1689)] !== void 0 && (_0x228aa3 = _0x5e6db6[_0x236b13(1689)]), _0x5e6db6[_0x236b13(879)] && _0x5e6db6[_0x236b13(879)][_0x236b13(1965)] && _0x5e6db6[_0x236b13(879)][_0x236b13(839)](function(_0x39b2c3) {
      var _0x1a386e = _0x236b13;
      _0x3d534d += _0x1a386e(1434) + _0x228aa3 + " " + _0x39b2c3[_0x1a386e(1514)] + (_0x39b2c3[_0x1a386e(1284)] && _0x39b2c3[_0x1a386e(1284)]["length"] ? " " + _0x39b2c3[_0x1a386e(1284)] : "") + "\r\n";
    }), _0x3d534d;
  }, _0x430e2e[_0x5bfe7c(1587)] = function(_0x234906) {
    var _0x478ca3 = _0x5bfe7c, _0x358ac3 = _0x234906["indexOf"](" "), _0x41cb1d = { "ssrc": parseInt(_0x234906[_0x478ca3(398)](7, _0x358ac3 - 7), 10) }, _0x3dc452 = _0x234906["indexOf"](":", _0x358ac3);
    return _0x3dc452 > -1 ? (_0x41cb1d[_0x478ca3(984)] = _0x234906[_0x478ca3(398)](_0x358ac3 + 1, _0x3dc452 - _0x358ac3 - 1), _0x41cb1d["value"] = _0x234906[_0x478ca3(398)](_0x3dc452 + 1)) : _0x41cb1d[_0x478ca3(984)] = _0x234906[_0x478ca3(398)](_0x358ac3 + 1), _0x41cb1d;
  }, _0x430e2e[_0x5bfe7c(1849)] = function(_0x242f18) {
    var _0x191bb1 = _0x5bfe7c, _0x4cf86c = _0x242f18["substr"](13)["split"](" ");
    return { "semantics": _0x4cf86c[_0x191bb1(2002)](), "ssrcs": _0x4cf86c[_0x191bb1(376)](function(_0xb2c6dd) {
      return parseInt(_0xb2c6dd, 10);
    }) };
  }, _0x430e2e[_0x5bfe7c(2149)] = function(_0x3efa16) {
    var _0x1332e1 = _0x5bfe7c, _0x509845 = _0x430e2e["matchPrefix"](_0x3efa16, "a=mid:")[0];
    if (_0x509845)
      return _0x509845[_0x1332e1(398)](6);
  }, _0x430e2e["parseFingerprint"] = function(_0x38dd53) {
    var _0x2c40b6 = _0x5bfe7c, _0x2cc574 = _0x38dd53["substr"](14)[_0x2c40b6(1201)](" ");
    return { "algorithm": _0x2cc574[0]["toLowerCase"](), "value": _0x2cc574[1] };
  }, _0x430e2e[_0x5bfe7c(416)] = function(_0x324da3, _0x145b15) {
    var _0x140154 = _0x5bfe7c, _0x3f2d7c = _0x430e2e[_0x140154(2065)](_0x324da3 + _0x145b15, "a=fingerprint:");
    return { "role": "auto", "fingerprints": _0x3f2d7c[_0x140154(376)](_0x430e2e[_0x140154(539)]) };
  }, _0x430e2e["writeDtlsParameters"] = function(_0x590ae1, _0x4363be) {
    var _0x2d340d = _0x5bfe7c, _0x3c3ba2 = _0x2d340d(430) + _0x4363be + "\r\n";
    return _0x590ae1[_0x2d340d(794)][_0x2d340d(839)](function(_0x1377d2) {
      var _0x87cf77 = _0x2d340d;
      _0x3c3ba2 += _0x87cf77(1364) + _0x1377d2["algorithm"] + " " + _0x1377d2[_0x87cf77(819)] + "\r\n";
    }), _0x3c3ba2;
  }, _0x430e2e[_0x5bfe7c(1885)] = function(_0x3dd3a8) {
    var _0x170146 = _0x5bfe7c, _0x40911d = _0x3dd3a8[_0x170146(398)](9)[_0x170146(1201)](" ");
    return { "tag": parseInt(_0x40911d[0], 10), "cryptoSuite": _0x40911d[1], "keyParams": _0x40911d[2], "sessionParams": _0x40911d[_0x170146(1215)](3) };
  }, _0x430e2e[_0x5bfe7c(691)] = function(_0x2c2054) {
    var _0x2aafd4 = _0x5bfe7c;
    return _0x2aafd4(1536) + _0x2c2054[_0x2aafd4(526)] + " " + _0x2c2054[_0x2aafd4(1150)] + " " + (typeof _0x2c2054[_0x2aafd4(2021)] === "object" ? _0x430e2e[_0x2aafd4(2138)](_0x2c2054[_0x2aafd4(2021)]) : _0x2c2054[_0x2aafd4(2021)]) + (_0x2c2054[_0x2aafd4(1146)] ? " " + _0x2c2054[_0x2aafd4(1146)][_0x2aafd4(2180)](" ") : "") + "\r\n";
  }, _0x430e2e[_0x5bfe7c(1499)] = function(_0x23e759) {
    var _0x1149a9 = _0x5bfe7c;
    if (_0x23e759[_0x1149a9(1879)](_0x1149a9(448)) !== 0)
      return null;
    var _0x469e99 = _0x23e759[_0x1149a9(398)](7)[_0x1149a9(1201)]("|");
    return { "keyMethod": _0x1149a9(766), "keySalt": _0x469e99[0], "lifeTime": _0x469e99[1], "mkiValue": _0x469e99[2] ? _0x469e99[2]["split"](":")[0] : void 0, "mkiLength": _0x469e99[2] ? _0x469e99[2][_0x1149a9(1201)](":")[1] : void 0 };
  }, _0x430e2e[_0x5bfe7c(2138)] = function(_0x1420b4) {
    var _0x26e5e0 = _0x5bfe7c;
    return _0x1420b4[_0x26e5e0(912)] + ":" + _0x1420b4[_0x26e5e0(724)] + (_0x1420b4[_0x26e5e0(1266)] ? "|" + _0x1420b4["lifeTime"] : "") + (_0x1420b4[_0x26e5e0(1424)] && _0x1420b4[_0x26e5e0(773)] ? "|" + _0x1420b4[_0x26e5e0(1424)] + ":" + _0x1420b4[_0x26e5e0(773)] : "");
  }, _0x430e2e[_0x5bfe7c(698)] = function(_0x4147a2, _0x522f0f) {
    var _0x54076a = _0x5bfe7c, _0x4e9919 = _0x430e2e[_0x54076a(2065)](_0x4147a2 + _0x522f0f, _0x54076a(1536));
    return _0x4e9919[_0x54076a(376)](_0x430e2e[_0x54076a(1885)]);
  }, _0x430e2e[_0x5bfe7c(2043)] = function(_0x143669, _0x5d9313) {
    var _0x2fc152 = _0x5bfe7c, _0x2ae0d1 = _0x430e2e[_0x2fc152(2065)](_0x143669 + _0x5d9313, _0x2fc152(710))[0], _0xdab533 = _0x430e2e[_0x2fc152(2065)](_0x143669 + _0x5d9313, _0x2fc152(2148))[0];
    if (!(_0x2ae0d1 && _0xdab533))
      return null;
    return { "usernameFragment": _0x2ae0d1[_0x2fc152(398)](12), "password": _0xdab533[_0x2fc152(398)](10) };
  }, _0x430e2e[_0x5bfe7c(730)] = function(_0xdd7135) {
    var _0x594afa = _0x5bfe7c;
    return _0x594afa(710) + _0xdd7135[_0x594afa(2188)] + "\r\na=ice-pwd:" + _0xdd7135[_0x594afa(924)] + "\r\n";
  }, _0x430e2e[_0x5bfe7c(1037)] = function(_0x6aae77) {
    var _0x2a3d91 = _0x5bfe7c, _0x49d69b = { "codecs": [], "headerExtensions": [], "fecMechanisms": [], "rtcp": [] }, _0x59a34d = _0x430e2e["splitLines"](_0x6aae77), _0x507978 = _0x59a34d[0][_0x2a3d91(1201)](" ");
    for (var _0x2df512 = 3; _0x2df512 < _0x507978["length"]; _0x2df512++) {
      var _0xfc7633 = _0x507978[_0x2df512], _0x4c1909 = _0x430e2e[_0x2a3d91(2065)](_0x6aae77, _0x2a3d91(413) + _0xfc7633 + " ")[0];
      if (_0x4c1909) {
        var _0x3da494 = _0x430e2e[_0x2a3d91(1098)](_0x4c1909), _0x22ee5e = _0x430e2e[_0x2a3d91(2065)](_0x6aae77, _0x2a3d91(542) + _0xfc7633 + " ");
        _0x3da494[_0x2a3d91(1678)] = _0x22ee5e["length"] ? _0x430e2e[_0x2a3d91(2062)](_0x22ee5e[0]) : {}, _0x3da494["rtcpFeedback"] = _0x430e2e["matchPrefix"](_0x6aae77, _0x2a3d91(1434) + _0xfc7633 + " ")[_0x2a3d91(376)](_0x430e2e["parseRtcpFb"]), _0x49d69b[_0x2a3d91(1144)][_0x2a3d91(1991)](_0x3da494);
        switch (_0x3da494["name"][_0x2a3d91(1133)]()) {
          case _0x2a3d91(1384):
          case _0x2a3d91(1070):
            _0x49d69b["fecMechanisms"][_0x2a3d91(1991)](_0x3da494[_0x2a3d91(765)][_0x2a3d91(1133)]());
            break;
        }
      }
    }
    return _0x430e2e[_0x2a3d91(2065)](_0x6aae77, "a=extmap:")[_0x2a3d91(839)](function(_0x26df15) {
      var _0x49010e = _0x2a3d91;
      _0x49d69b[_0x49010e(2115)][_0x49010e(1991)](_0x430e2e[_0x49010e(1979)](_0x26df15));
    }), _0x49d69b;
  }, _0x430e2e[_0x5bfe7c(1498)] = function(_0x678196, _0x5270d5) {
    var _0x463ea4 = _0x5bfe7c, _0x2bd1ef = "";
    _0x2bd1ef += "m=" + _0x678196 + " ", _0x2bd1ef += _0x5270d5[_0x463ea4(1144)][_0x463ea4(1965)] > 0 ? "9" : "0", _0x2bd1ef += " UDP/TLS/RTP/SAVPF ", _0x2bd1ef += _0x5270d5[_0x463ea4(1144)]["map"](function(_0x367ea2) {
      var _0xb32510 = _0x463ea4;
      if (_0x367ea2["preferredPayloadType"] !== void 0)
        return _0x367ea2[_0xb32510(1689)];
      return _0x367ea2[_0xb32510(1371)];
    })[_0x463ea4(2180)](" ") + "\r\n", _0x2bd1ef += _0x463ea4(1120), _0x2bd1ef += "a=rtcp:9 IN IP4 0.0.0.0\r\n", _0x5270d5[_0x463ea4(1144)]["forEach"](function(_0x3dfe9a) {
      var _0x1ff71a = _0x463ea4;
      _0x2bd1ef += _0x430e2e[_0x1ff71a(1525)](_0x3dfe9a), _0x2bd1ef += _0x430e2e[_0x1ff71a(534)](_0x3dfe9a), _0x2bd1ef += _0x430e2e[_0x1ff71a(1759)](_0x3dfe9a);
    });
    var _0x2591b3 = 0;
    return _0x5270d5["codecs"][_0x463ea4(839)](function(_0x38ad48) {
      var _0x2a98e1 = _0x463ea4;
      _0x38ad48[_0x2a98e1(1713)] > _0x2591b3 && (_0x2591b3 = _0x38ad48[_0x2a98e1(1713)]);
    }), _0x2591b3 > 0 && (_0x2bd1ef += _0x463ea4(1388) + _0x2591b3 + "\r\n"), _0x2bd1ef += _0x463ea4(1633), _0x5270d5["headerExtensions"] && _0x5270d5[_0x463ea4(2115)]["forEach"](function(_0x55543a) {
      var _0xbd4dfd = _0x463ea4;
      _0x2bd1ef += _0x430e2e[_0xbd4dfd(1667)](_0x55543a);
    }), _0x2bd1ef;
  }, _0x430e2e[_0x5bfe7c(2033)] = function(_0x38bc56) {
    var _0x2567f6 = _0x5bfe7c, _0x4cdad7 = [], _0x4f629c = _0x430e2e[_0x2567f6(1037)](_0x38bc56), _0x1cfeef = _0x4f629c[_0x2567f6(1601)][_0x2567f6(1879)](_0x2567f6(1384)) !== -1, _0x178240 = _0x4f629c[_0x2567f6(1601)][_0x2567f6(1879)](_0x2567f6(1070)) !== -1, _0x452f0f = _0x430e2e["matchPrefix"](_0x38bc56, _0x2567f6(846))[_0x2567f6(376)](function(_0x5500a9) {
      var _0x26ae80 = _0x2567f6;
      return _0x430e2e[_0x26ae80(1587)](_0x5500a9);
    })[_0x2567f6(805)](function(_0x5782ed) {
      var _0x52e0ea = _0x2567f6;
      return _0x5782ed[_0x52e0ea(984)] === _0x52e0ea(1395);
    }), _0x5f309c = _0x452f0f[_0x2567f6(1965)] > 0 && _0x452f0f[0]["ssrc"], _0x26ed6b, _0x50757f = _0x430e2e[_0x2567f6(2065)](_0x38bc56, _0x2567f6(1053))[_0x2567f6(376)](function(_0x167536) {
      var _0x281390 = _0x2567f6, _0x1f11a1 = _0x167536[_0x281390(398)](17)[_0x281390(1201)](" ");
      return _0x1f11a1[_0x281390(376)](function(_0x15cfa1) {
        return parseInt(_0x15cfa1, 10);
      });
    });
    _0x50757f[_0x2567f6(1965)] > 0 && _0x50757f[0]["length"] > 1 && _0x50757f[0][0] === _0x5f309c && (_0x26ed6b = _0x50757f[0][1]);
    _0x4f629c[_0x2567f6(1144)][_0x2567f6(839)](function(_0x4579eb) {
      var _0x16c588 = _0x2567f6;
      if (_0x4579eb[_0x16c588(765)][_0x16c588(1133)]() === _0x16c588(627) && _0x4579eb[_0x16c588(1678)][_0x16c588(2142)]) {
        var _0x24e285 = { "ssrc": _0x5f309c, "codecPayloadType": parseInt(_0x4579eb["parameters"][_0x16c588(2142)], 10) };
        _0x5f309c && _0x26ed6b && (_0x24e285[_0x16c588(2127)] = { "ssrc": _0x26ed6b }), _0x4cdad7[_0x16c588(1991)](_0x24e285), _0x1cfeef && (_0x24e285 = JSON["parse"](JSON[_0x16c588(2063)](_0x24e285)), _0x24e285[_0x16c588(877)] = { "ssrc": _0x5f309c, "mechanism": _0x178240 ? "red+ulpfec" : "red" }, _0x4cdad7[_0x16c588(1991)](_0x24e285));
      }
    });
    _0x4cdad7[_0x2567f6(1965)] === 0 && _0x5f309c && _0x4cdad7[_0x2567f6(1991)]({ "ssrc": _0x5f309c });
    var _0x4f136c = _0x430e2e[_0x2567f6(2065)](_0x38bc56, "b=");
    if (_0x4f136c["length"]) {
      if (_0x4f136c[0][_0x2567f6(1879)]("b=TIAS:") === 0)
        _0x4f136c = parseInt(_0x4f136c[0]["substr"](7), 10);
      else
        _0x4f136c[0]["indexOf"]("b=AS:") === 0 ? _0x4f136c = parseInt(_0x4f136c[0][_0x2567f6(398)](5), 10) * 1e3 * 0.95 - 50 * 40 * 8 : _0x4f136c = void 0;
      _0x4cdad7[_0x2567f6(839)](function(_0x16ec02) {
        var _0x80ddd1 = _0x2567f6;
        _0x16ec02[_0x80ddd1(1032)] = _0x4f136c;
      });
    }
    return _0x4cdad7;
  }, _0x430e2e[_0x5bfe7c(446)] = function(_0x1f9f2d) {
    var _0x231069 = _0x5bfe7c, _0x3b0d03 = {}, _0x304a19 = _0x430e2e[_0x231069(2065)](_0x1f9f2d, "a=ssrc:")["map"](function(_0x3fe31f) {
      var _0x544686 = _0x231069;
      return _0x430e2e[_0x544686(1587)](_0x3fe31f);
    })["filter"](function(_0x485d40) {
      var _0x302896 = _0x231069;
      return _0x485d40["attribute"] === _0x302896(1395);
    })[0];
    _0x304a19 && (_0x3b0d03["cname"] = _0x304a19["value"], _0x3b0d03["ssrc"] = _0x304a19[_0x231069(1159)]);
    var _0x250477 = _0x430e2e[_0x231069(2065)](_0x1f9f2d, _0x231069(1253));
    _0x3b0d03[_0x231069(1774)] = _0x250477[_0x231069(1965)] > 0, _0x3b0d03[_0x231069(1444)] = _0x250477[_0x231069(1965)] === 0;
    var _0xeeb707 = _0x430e2e[_0x231069(2065)](_0x1f9f2d, _0x231069(1460));
    return _0x3b0d03[_0x231069(1948)] = _0xeeb707[_0x231069(1965)] > 0, _0x3b0d03;
  }, _0x430e2e[_0x5bfe7c(2083)] = function(_0x3da8ed) {
    var _0x3b47c8 = _0x5bfe7c, _0x4a99bd, _0x501167 = _0x430e2e["matchPrefix"](_0x3da8ed, "a=msid:");
    if (_0x501167[_0x3b47c8(1965)] === 1)
      return _0x4a99bd = _0x501167[0][_0x3b47c8(398)](7)[_0x3b47c8(1201)](" "), { "stream": _0x4a99bd[0], "track": _0x4a99bd[1] };
    var _0x240149 = _0x430e2e["matchPrefix"](_0x3da8ed, _0x3b47c8(846))[_0x3b47c8(376)](function(_0x3f9fab) {
      var _0x22b590 = _0x3b47c8;
      return _0x430e2e[_0x22b590(1587)](_0x3f9fab);
    })["filter"](function(_0x162338) {
      var _0x27b3b5 = _0x3b47c8;
      return _0x162338["attribute"] === _0x27b3b5(787);
    });
    if (_0x240149[_0x3b47c8(1965)] > 0)
      return _0x4a99bd = _0x240149[0]["value"][_0x3b47c8(1201)](" "), { "stream": _0x4a99bd[0], "track": _0x4a99bd[1] };
  }, _0x430e2e["parseSctpDescription"] = function(_0xd4b920) {
    var _0x4148b8 = _0x5bfe7c, _0x352195 = _0x430e2e["parseMLine"](_0xd4b920), _0x5bbf82 = _0x430e2e[_0x4148b8(2065)](_0xd4b920, _0x4148b8(1674)), _0x54029f;
    _0x5bbf82["length"] > 0 && (_0x54029f = parseInt(_0x5bbf82[0][_0x4148b8(398)](19), 10));
    isNaN(_0x54029f) && (_0x54029f = 65536);
    var _0x3b534f = _0x430e2e[_0x4148b8(2065)](_0xd4b920, _0x4148b8(619));
    if (_0x3b534f[_0x4148b8(1965)] > 0)
      return { "port": parseInt(_0x3b534f[0][_0x4148b8(398)](12), 10), "protocol": _0x352195["fmt"], "maxMessageSize": _0x54029f };
    var _0x326ba8 = _0x430e2e[_0x4148b8(2065)](_0xd4b920, _0x4148b8(1543));
    if (_0x326ba8["length"] > 0) {
      var _0x2b8d29 = _0x430e2e["matchPrefix"](_0xd4b920, _0x4148b8(1543))[0]["substr"](10)["split"](" ");
      return { "port": parseInt(_0x2b8d29[0], 10), "protocol": _0x2b8d29[1], "maxMessageSize": _0x54029f };
    }
  }, _0x430e2e[_0x5bfe7c(2171)] = function(_0x1e4baa, _0xc6e3f2) {
    var _0x3db0e8 = _0x5bfe7c, _0x1cdd07 = [];
    return _0x1e4baa["protocol"] !== "DTLS/SCTP" ? _0x1cdd07 = ["m=" + _0x1e4baa["kind"] + _0x3db0e8(1495) + _0x1e4baa[_0x3db0e8(1643)] + " " + _0xc6e3f2[_0x3db0e8(1643)] + "\r\n", _0x3db0e8(1120), _0x3db0e8(619) + _0xc6e3f2[_0x3db0e8(2071)] + "\r\n"] : _0x1cdd07 = ["m=" + _0x1e4baa[_0x3db0e8(1711)] + " 9 " + _0x1e4baa[_0x3db0e8(1643)] + " " + _0xc6e3f2[_0x3db0e8(2071)] + "\r\n", _0x3db0e8(1120), "a=sctpmap:" + _0xc6e3f2[_0x3db0e8(2071)] + " " + _0xc6e3f2["protocol"] + _0x3db0e8(1243)], _0xc6e3f2["maxMessageSize"] !== void 0 && _0x1cdd07[_0x3db0e8(1991)](_0x3db0e8(1674) + _0xc6e3f2[_0x3db0e8(1423)] + "\r\n"), _0x1cdd07[_0x3db0e8(2180)]("");
  }, _0x430e2e[_0x5bfe7c(1287)] = function() {
    var _0x51bb91 = _0x5bfe7c;
    return Math[_0x51bb91(1511)]()["toString"]()[_0x51bb91(398)](2, 21);
  }, _0x430e2e["writeSessionBoilerplate"] = function(_0x44f4f1, _0xbfd02, _0x472931) {
    var _0x191782 = _0x5bfe7c, _0x4ad7cb, _0x4eb785 = _0xbfd02 !== void 0 ? _0xbfd02 : 2;
    _0x44f4f1 ? _0x4ad7cb = _0x44f4f1 : _0x4ad7cb = _0x430e2e["generateSessionId"]();
    var _0x3dd764 = _0x472931 || _0x191782(742);
    return _0x191782(1771) + "o=" + _0x3dd764 + " " + _0x4ad7cb + " " + _0x4eb785 + _0x191782(881) + "s=-\r\nt=0 0\r\n";
  }, _0x430e2e[_0x5bfe7c(1558)] = function(_0x961c95, _0x28b3d0, _0x27e5f4, _0x38e65c) {
    var _0x2853eb = _0x5bfe7c, _0x7e37da = _0x430e2e[_0x2853eb(1498)](_0x961c95[_0x2853eb(1711)], _0x28b3d0);
    _0x7e37da += _0x430e2e[_0x2853eb(730)](_0x961c95[_0x2853eb(768)][_0x2853eb(811)]()), _0x7e37da += _0x430e2e["writeDtlsParameters"](_0x961c95[_0x2853eb(799)][_0x2853eb(811)](), _0x27e5f4 === _0x2853eb(1799) ? _0x2853eb(1617) : "active"), _0x7e37da += "a=mid:" + _0x961c95["mid"] + "\r\n";
    if (_0x961c95[_0x2853eb(1299)])
      _0x7e37da += "a=" + _0x961c95[_0x2853eb(1299)] + "\r\n";
    else {
      if (_0x961c95[_0x2853eb(1531)] && _0x961c95["rtpReceiver"])
        _0x7e37da += _0x2853eb(1129);
      else {
        if (_0x961c95[_0x2853eb(1531)])
          _0x7e37da += _0x2853eb(953);
        else
          _0x961c95[_0x2853eb(676)] ? _0x7e37da += _0x2853eb(463) : _0x7e37da += _0x2853eb(1851);
      }
    }
    if (_0x961c95[_0x2853eb(1531)]) {
      var _0x459e25 = "msid:" + _0x38e65c["id"] + " " + _0x961c95[_0x2853eb(1531)][_0x2853eb(451)]["id"] + "\r\n";
      _0x7e37da += "a=" + _0x459e25, _0x7e37da += _0x2853eb(846) + _0x961c95[_0x2853eb(1907)][0]["ssrc"] + " " + _0x459e25, _0x961c95[_0x2853eb(1907)][0][_0x2853eb(2127)] && (_0x7e37da += _0x2853eb(846) + _0x961c95[_0x2853eb(1907)][0][_0x2853eb(2127)][_0x2853eb(1159)] + " " + _0x459e25, _0x7e37da += _0x2853eb(2122) + _0x961c95[_0x2853eb(1907)][0][_0x2853eb(1159)] + " " + _0x961c95["sendEncodingParameters"][0][_0x2853eb(2127)][_0x2853eb(1159)] + "\r\n");
    }
    return _0x7e37da += _0x2853eb(846) + _0x961c95[_0x2853eb(1907)][0][_0x2853eb(1159)] + _0x2853eb(1298) + _0x430e2e[_0x2853eb(672)] + "\r\n", _0x961c95[_0x2853eb(1531)] && _0x961c95[_0x2853eb(1907)][0]["rtx"] && (_0x7e37da += _0x2853eb(846) + _0x961c95[_0x2853eb(1907)][0]["rtx"][_0x2853eb(1159)] + " cname:" + _0x430e2e[_0x2853eb(672)] + "\r\n"), _0x7e37da;
  }, _0x430e2e[_0x5bfe7c(958)] = function(_0x3b64fa, _0x361a1a) {
    var _0x392280 = _0x5bfe7c, _0x2a1240 = _0x430e2e[_0x392280(1349)](_0x3b64fa);
    for (var _0x580d9d = 0; _0x580d9d < _0x2a1240[_0x392280(1965)]; _0x580d9d++) {
      switch (_0x2a1240[_0x580d9d]) {
        case "a=sendrecv":
        case _0x392280(1398):
        case _0x392280(868):
        case "a=inactive":
          return _0x2a1240[_0x580d9d][_0x392280(398)](2);
      }
    }
    if (_0x361a1a)
      return _0x430e2e[_0x392280(958)](_0x361a1a);
    return _0x392280(1614);
  }, _0x430e2e["getKind"] = function(_0x26af04) {
    var _0x4a4430 = _0x5bfe7c, _0x2bfaed = _0x430e2e[_0x4a4430(1349)](_0x26af04), _0xe30f7b = _0x2bfaed[0]["split"](" ");
    return _0xe30f7b[0][_0x4a4430(398)](2);
  }, _0x430e2e[_0x5bfe7c(372)] = function(_0x1c6c55) {
    var _0x33ce1d = _0x5bfe7c;
    return _0x1c6c55[_0x33ce1d(1201)](" ", 2)[1] === "0";
  }, _0x430e2e[_0x5bfe7c(1841)] = function(_0xab0f4d) {
    var _0x584a36 = _0x5bfe7c, _0x4a2860 = _0x430e2e[_0x584a36(1349)](_0xab0f4d), _0x39b749 = _0x4a2860[0][_0x584a36(398)](2)[_0x584a36(1201)](" ");
    return { "kind": _0x39b749[0], "port": parseInt(_0x39b749[1], 10), "protocol": _0x39b749[2], "fmt": _0x39b749[_0x584a36(1215)](3)[_0x584a36(2180)](" ") };
  }, _0x430e2e[_0x5bfe7c(1752)] = function(_0x1aac28) {
    var _0x437dab = _0x5bfe7c, _0x84ab22 = _0x430e2e[_0x437dab(2065)](_0x1aac28, "o=")[0], _0x23fbe1 = _0x84ab22[_0x437dab(398)](2)[_0x437dab(1201)](" ");
    return { "username": _0x23fbe1[0], "sessionId": _0x23fbe1[1], "sessionVersion": parseInt(_0x23fbe1[2], 10), "netType": _0x23fbe1[3], "addressType": _0x23fbe1[4], "address": _0x23fbe1[5] };
  }, _0x430e2e[_0x5bfe7c(2176)] = function(_0x4448f1) {
    var _0x19724f = _0x5bfe7c;
    if (typeof _0x4448f1 !== "string" || _0x4448f1[_0x19724f(1965)] === 0)
      return ![];
    var _0x2e3578 = _0x430e2e[_0x19724f(1349)](_0x4448f1);
    for (var _0xfd0d92 = 0; _0xfd0d92 < _0x2e3578[_0x19724f(1965)]; _0xfd0d92++) {
      if (_0x2e3578[_0xfd0d92]["length"] < 2 || _0x2e3578[_0xfd0d92][_0x19724f(599)](1) !== "=")
        return ![];
    }
    return !![];
  };
  {
    _0x7becd2[_0x5bfe7c(444)] = _0x430e2e;
  }
})(sdp);
const SDPUtils$1 = sdp[_0x780a7e(444)];
var SDPUtils = sdp[_0x780a7e(444)];
function fixStatsType(_0x402ac2) {
  var _0x16dd98 = _0x780a7e;
  return { "inboundrtp": _0x16dd98(1634), "outboundrtp": _0x16dd98(1276), "candidatepair": _0x16dd98(548), "localcandidate": "local-candidate", "remotecandidate": _0x16dd98(2044) }[_0x402ac2[_0x16dd98(1514)]] || _0x402ac2[_0x16dd98(1514)];
}
function writeMediaSection(_0x52ff1f, _0x2a3e7b, _0x41af92, _0x5b7393, _0x212171) {
  var _0x35c030 = _0x780a7e, _0x1d7698 = SDPUtils[_0x35c030(1498)](_0x52ff1f["kind"], _0x2a3e7b);
  _0x1d7698 += SDPUtils["writeIceParameters"](_0x52ff1f[_0x35c030(768)][_0x35c030(811)]()), _0x1d7698 += SDPUtils["writeDtlsParameters"](_0x52ff1f[_0x35c030(799)][_0x35c030(811)](), _0x41af92 === _0x35c030(1799) ? _0x35c030(1617) : _0x212171 || _0x35c030(1430)), _0x1d7698 += "a=mid:" + _0x52ff1f[_0x35c030(1530)] + "\r\n";
  if (_0x52ff1f[_0x35c030(1531)] && _0x52ff1f[_0x35c030(676)])
    _0x1d7698 += _0x35c030(1129);
  else {
    if (_0x52ff1f["rtpSender"])
      _0x1d7698 += "a=sendonly\r\n";
    else
      _0x52ff1f[_0x35c030(676)] ? _0x1d7698 += _0x35c030(463) : _0x1d7698 += _0x35c030(1851);
  }
  if (_0x52ff1f[_0x35c030(1531)]) {
    var _0xea3bb6 = _0x52ff1f[_0x35c030(1531)][_0x35c030(1738)] || _0x52ff1f[_0x35c030(1531)][_0x35c030(451)]["id"];
    _0x52ff1f[_0x35c030(1531)][_0x35c030(1738)] = _0xea3bb6;
    var _0x2d8ddb = _0x35c030(342) + (_0x5b7393 ? _0x5b7393["id"] : "-") + " " + _0xea3bb6 + "\r\n";
    _0x1d7698 += "a=" + _0x2d8ddb, _0x1d7698 += "a=ssrc:" + _0x52ff1f[_0x35c030(1907)][0][_0x35c030(1159)] + " " + _0x2d8ddb, _0x52ff1f["sendEncodingParameters"][0][_0x35c030(2127)] && (_0x1d7698 += _0x35c030(846) + _0x52ff1f["sendEncodingParameters"][0][_0x35c030(2127)][_0x35c030(1159)] + " " + _0x2d8ddb, _0x1d7698 += _0x35c030(2122) + _0x52ff1f[_0x35c030(1907)][0][_0x35c030(1159)] + " " + _0x52ff1f["sendEncodingParameters"][0][_0x35c030(2127)][_0x35c030(1159)] + "\r\n");
  }
  return _0x1d7698 += _0x35c030(846) + _0x52ff1f[_0x35c030(1907)][0][_0x35c030(1159)] + _0x35c030(1298) + SDPUtils[_0x35c030(672)] + "\r\n", _0x52ff1f[_0x35c030(1531)] && _0x52ff1f[_0x35c030(1907)][0][_0x35c030(2127)] && (_0x1d7698 += _0x35c030(846) + _0x52ff1f[_0x35c030(1907)][0][_0x35c030(2127)][_0x35c030(1159)] + " cname:" + SDPUtils[_0x35c030(672)] + "\r\n"), _0x1d7698;
}
function filterIceServers(_0x2af28a, _0x4a9b3c) {
  var _0x37b111 = _0x780a7e, _0x5088b9 = ![];
  return _0x2af28a = JSON[_0x37b111(611)](JSON[_0x37b111(2063)](_0x2af28a)), _0x2af28a[_0x37b111(805)](function(_0xbae7a4) {
    var _0x296f6b = _0x37b111;
    if (_0xbae7a4 && (_0xbae7a4[_0x296f6b(1453)] || _0xbae7a4[_0x296f6b(1497)])) {
      var _0x5747c3 = _0xbae7a4["urls"] || _0xbae7a4[_0x296f6b(1497)];
      _0xbae7a4["url"] && !_0xbae7a4[_0x296f6b(1453)] && console[_0x296f6b(1985)]("RTCIceServer.url is deprecated! Use urls instead.");
      var _0x47665b = typeof _0x5747c3 === _0x296f6b(1548);
      return _0x47665b && (_0x5747c3 = [_0x5747c3]), _0x5747c3 = _0x5747c3["filter"](function(_0x583a0d) {
        var _0x4515f5 = _0x296f6b, _0x503cf1 = _0x583a0d[_0x4515f5(1879)](_0x4515f5(1361)) === 0 && _0x583a0d[_0x4515f5(1879)]("transport=udp") !== -1 && _0x583a0d[_0x4515f5(1879)](_0x4515f5(821)) === -1 && !_0x5088b9;
        if (_0x503cf1)
          return _0x5088b9 = !![], !![];
        return _0x583a0d[_0x4515f5(1879)](_0x4515f5(1642)) === 0 && _0x4a9b3c >= 14393 && _0x583a0d[_0x4515f5(1879)]("?transport=udp") === -1;
      }), delete _0xbae7a4["url"], _0xbae7a4[_0x296f6b(1453)] = _0x47665b ? _0x5747c3[0] : _0x5747c3, !!_0x5747c3[_0x296f6b(1965)];
    }
  });
}
function getCommonCapabilities(_0x1e35c0, _0x529f35) {
  var _0x10862d = _0x780a7e, _0x1c8b5c = { "codecs": [], "headerExtensions": [], "fecMechanisms": [] }, _0x4f1cce = function(_0x3afd88, _0x253ecb) {
    var _0xf00f2 = _0x3001;
    _0x3afd88 = parseInt(_0x3afd88, 10);
    for (var _0x5ae5c6 = 0; _0x5ae5c6 < _0x253ecb[_0xf00f2(1965)]; _0x5ae5c6++) {
      if (_0x253ecb[_0x5ae5c6]["payloadType"] === _0x3afd88 || _0x253ecb[_0x5ae5c6][_0xf00f2(1689)] === _0x3afd88)
        return _0x253ecb[_0x5ae5c6];
    }
  }, _0x42fa52 = function(_0x5573ee, _0x12186d, _0x2a2798, _0x2d0454) {
    var _0x1edb9b = _0x3001, _0xe87335 = _0x4f1cce(_0x5573ee["parameters"]["apt"], _0x2a2798), _0x32742d = _0x4f1cce(_0x12186d[_0x1edb9b(1678)][_0x1edb9b(2142)], _0x2d0454);
    return _0xe87335 && _0x32742d && _0xe87335[_0x1edb9b(765)][_0x1edb9b(433)]() === _0x32742d[_0x1edb9b(765)][_0x1edb9b(433)]();
  };
  return _0x1e35c0[_0x10862d(1144)][_0x10862d(839)](function(_0x168c94) {
    var _0x198116 = _0x10862d;
    for (var _0x317f0d = 0; _0x317f0d < _0x529f35[_0x198116(1144)]["length"]; _0x317f0d++) {
      var _0x144d86 = _0x529f35[_0x198116(1144)][_0x317f0d];
      if (_0x168c94[_0x198116(765)][_0x198116(433)]() === _0x144d86[_0x198116(765)][_0x198116(433)]() && _0x168c94[_0x198116(2206)] === _0x144d86["clockRate"]) {
        if (_0x168c94[_0x198116(765)][_0x198116(433)]() === _0x198116(2127) && _0x168c94[_0x198116(1678)] && _0x144d86[_0x198116(1678)][_0x198116(2142)]) {
          if (!_0x42fa52(_0x168c94, _0x144d86, _0x1e35c0[_0x198116(1144)], _0x529f35[_0x198116(1144)]))
            continue;
        }
        _0x144d86 = JSON[_0x198116(611)](JSON[_0x198116(2063)](_0x144d86)), _0x144d86[_0x198116(1339)] = Math[_0x198116(1183)](_0x168c94[_0x198116(1339)], _0x144d86["numChannels"]), _0x1c8b5c[_0x198116(1144)][_0x198116(1991)](_0x144d86), _0x144d86["rtcpFeedback"] = _0x144d86[_0x198116(879)][_0x198116(805)](function(_0x5a932a) {
          var _0x53dab5 = _0x198116;
          for (var _0x4d75b5 = 0; _0x4d75b5 < _0x168c94[_0x53dab5(879)][_0x53dab5(1965)]; _0x4d75b5++) {
            if (_0x168c94[_0x53dab5(879)][_0x4d75b5][_0x53dab5(1514)] === _0x5a932a[_0x53dab5(1514)] && _0x168c94[_0x53dab5(879)][_0x4d75b5]["parameter"] === _0x5a932a[_0x53dab5(1284)])
              return !![];
          }
          return ![];
        });
        break;
      }
    }
  }), _0x1e35c0["headerExtensions"][_0x10862d(839)](function(_0x2648cb) {
    var _0x5c1e86 = _0x10862d;
    for (var _0x534c8a = 0; _0x534c8a < _0x529f35[_0x5c1e86(2115)][_0x5c1e86(1965)]; _0x534c8a++) {
      var _0x2e5ab1 = _0x529f35["headerExtensions"][_0x534c8a];
      if (_0x2648cb[_0x5c1e86(362)] === _0x2e5ab1[_0x5c1e86(362)]) {
        _0x1c8b5c[_0x5c1e86(2115)][_0x5c1e86(1991)](_0x2e5ab1);
        break;
      }
    }
  }), _0x1c8b5c;
}
function isActionAllowedInSignalingState(_0x43f7da, _0x3aec61, _0x1ef3fd) {
  var _0x440554 = _0x780a7e;
  return { "offer": { "setLocalDescription": ["stable", _0x440554(817)], "setRemoteDescription": [_0x440554(1181), _0x440554(1046)] }, "answer": { "setLocalDescription": [_0x440554(1046), _0x440554(1676)], "setRemoteDescription": [_0x440554(817), "have-remote-pranswer"] } }[_0x3aec61][_0x43f7da][_0x440554(1879)](_0x1ef3fd) !== -1;
}
function maybeAddCandidate(_0x26edab, _0xd496d1) {
  var _0x4ce4a8 = _0x780a7e, _0x249c89 = _0x26edab[_0x4ce4a8(339)]()[_0x4ce4a8(1252)](function(_0x25e122) {
    var _0x1d69b5 = _0x4ce4a8;
    return _0xd496d1[_0x1d69b5(1131)] === _0x25e122[_0x1d69b5(1131)] && _0xd496d1["ip"] === _0x25e122["ip"] && _0xd496d1[_0x1d69b5(2071)] === _0x25e122[_0x1d69b5(2071)] && _0xd496d1[_0x1d69b5(948)] === _0x25e122["priority"] && _0xd496d1[_0x1d69b5(1643)] === _0x25e122[_0x1d69b5(1643)] && _0xd496d1[_0x1d69b5(1514)] === _0x25e122[_0x1d69b5(1514)];
  });
  return !_0x249c89 && _0x26edab[_0x4ce4a8(527)](_0xd496d1), !_0x249c89;
}
function makeError(_0x39f898, _0x40b6e7) {
  var _0x411a30 = _0x780a7e, _0x2a7307 = new Error(_0x40b6e7);
  return _0x2a7307["name"] = _0x39f898, _0x2a7307[_0x411a30(1704)] = { "NotSupportedError": 9, "InvalidStateError": 11, "InvalidAccessError": 15, "TypeError": void 0, "OperationError": void 0 }[_0x39f898], _0x2a7307;
}
var rtcpeerconnection = function(_0x146e6e, _0x40acac) {
  var _0x123cde = _0x780a7e;
  function _0x1f6ded(_0x31bbb3, _0x1b852e) {
    var _0x5e790c = _0x3001;
    _0x1b852e[_0x5e790c(1976)](_0x31bbb3), _0x1b852e["dispatchEvent"](new _0x146e6e["MediaStreamTrackEvent"](_0x5e790c(1374), { "track": _0x31bbb3 }));
  }
  function _0x436387(_0x427280, _0x3908de) {
    var _0x1e5603 = _0x3001;
    _0x3908de[_0x1e5603(1103)](_0x427280), _0x3908de[_0x1e5603(1152)](new _0x146e6e[_0x1e5603(1040)]("removetrack", { "track": _0x427280 }));
  }
  function _0x2336de(_0x58b3b0, _0x4da86a, _0x1ea0a7, _0x55fdc6) {
    var _0xbd578a = _0x3001, _0x28885d = new Event(_0xbd578a(451));
    _0x28885d[_0xbd578a(451)] = _0x4da86a, _0x28885d[_0xbd578a(509)] = _0x1ea0a7, _0x28885d[_0xbd578a(456)] = { "receiver": _0x1ea0a7 }, _0x28885d[_0xbd578a(1814)] = _0x55fdc6, _0x146e6e[_0xbd578a(2023)](function() {
      var _0x4fe1a7 = _0xbd578a;
      _0x58b3b0[_0x4fe1a7(1555)]("track", _0x28885d);
    });
  }
  var _0x287c13 = function(_0x5877a7) {
    var _0x8be51f = _0x3001, _0x39156e = this, _0x6d6b86 = document[_0x8be51f(922)]();
    ["addEventListener", _0x8be51f(1283), _0x8be51f(1152)]["forEach"](function(_0x2139ad) {
      var _0x27f0ec = _0x8be51f;
      _0x39156e[_0x2139ad] = _0x6d6b86[_0x2139ad][_0x27f0ec(517)](_0x6d6b86);
    }), this[_0x8be51f(1492)] = null, this[_0x8be51f(1950)] = ![], this[_0x8be51f(1651)] = [], this["remoteStreams"] = [], this[_0x8be51f(873)] = null, this[_0x8be51f(1182)] = null, this[_0x8be51f(1327)] = _0x8be51f(1181), this[_0x8be51f(1455)] = "new", this[_0x8be51f(1847)] = "new", this[_0x8be51f(1660)] = "new", _0x5877a7 = JSON[_0x8be51f(611)](JSON[_0x8be51f(2063)](_0x5877a7 || {})), this[_0x8be51f(1067)] = _0x5877a7[_0x8be51f(1830)] === _0x8be51f(1987);
    if (_0x5877a7["rtcpMuxPolicy"] === _0x8be51f(1508))
      throw makeError(_0x8be51f(1724), _0x8be51f(2158));
    else
      !_0x5877a7[_0x8be51f(706)] && (_0x5877a7["rtcpMuxPolicy"] = _0x8be51f(652));
    switch (_0x5877a7[_0x8be51f(614)]) {
      case _0x8be51f(405):
      case "relay":
        break;
      default:
        _0x5877a7[_0x8be51f(614)] = _0x8be51f(405);
        break;
    }
    switch (_0x5877a7[_0x8be51f(1830)]) {
      case "balanced":
      case "max-compat":
      case _0x8be51f(1987):
        break;
      default:
        _0x5877a7[_0x8be51f(1830)] = "balanced";
        break;
    }
    _0x5877a7[_0x8be51f(735)] = filterIceServers(_0x5877a7[_0x8be51f(735)] || [], _0x40acac), this[_0x8be51f(798)] = [];
    if (_0x5877a7[_0x8be51f(1702)])
      for (var _0x576cba = _0x5877a7[_0x8be51f(1702)]; _0x576cba > 0; _0x576cba--) {
        this["_iceGatherers"][_0x8be51f(1991)](new _0x146e6e[_0x8be51f(596)]({ "iceServers": _0x5877a7[_0x8be51f(735)], "gatherPolicy": _0x5877a7[_0x8be51f(614)] }));
      }
    else
      _0x5877a7[_0x8be51f(1702)] = 0;
    this[_0x8be51f(2174)] = _0x5877a7, this[_0x8be51f(1370)] = [], this[_0x8be51f(1020)] = SDPUtils["generateSessionId"](), this[_0x8be51f(1443)] = 0, this[_0x8be51f(716)] = void 0, this[_0x8be51f(481)] = ![];
  };
  Object["defineProperty"](_0x287c13[_0x123cde(1897)], _0x123cde(2112), { "configurable": !![], "get": function() {
    var _0x47d925 = _0x123cde;
    return this[_0x47d925(873)];
  } }), Object["defineProperty"](_0x287c13[_0x123cde(1897)], "remoteDescription", { "configurable": !![], "get": function() {
    var _0x20462b = _0x123cde;
    return this[_0x20462b(1182)];
  } }), _0x287c13[_0x123cde(1897)][_0x123cde(549)] = null, _0x287c13[_0x123cde(1897)][_0x123cde(897)] = null, _0x287c13["prototype"]["ontrack"] = null, _0x287c13[_0x123cde(1897)][_0x123cde(2031)] = null, _0x287c13[_0x123cde(1897)]["onsignalingstatechange"] = null, _0x287c13[_0x123cde(1897)]["oniceconnectionstatechange"] = null, _0x287c13[_0x123cde(1897)][_0x123cde(1491)] = null, _0x287c13[_0x123cde(1897)][_0x123cde(1458)] = null, _0x287c13["prototype"][_0x123cde(1666)] = null, _0x287c13[_0x123cde(1897)]["ondatachannel"] = null, _0x287c13[_0x123cde(1897)][_0x123cde(1555)] = function(_0xe49ab0, _0x13977f) {
    var _0x125d1a = _0x123cde;
    if (this["_isClosed"])
      return;
    this[_0x125d1a(1152)](_0x13977f), typeof this["on" + _0xe49ab0] === _0x125d1a(389) && this["on" + _0xe49ab0](_0x13977f);
  }, _0x287c13["prototype"][_0x123cde(952)] = function() {
    var _0x52c091 = _0x123cde, _0x5ae95b = new Event(_0x52c091(1196));
    this["_dispatchEvent"](_0x52c091(1196), _0x5ae95b);
  }, _0x287c13[_0x123cde(1897)][_0x123cde(1971)] = function() {
    return this["_config"];
  }, _0x287c13["prototype"][_0x123cde(1980)] = function() {
    var _0x4c1d8e = _0x123cde;
    return this[_0x4c1d8e(1651)];
  }, _0x287c13["prototype"]["getRemoteStreams"] = function() {
    var _0x4109a5 = _0x123cde;
    return this[_0x4109a5(431)];
  }, _0x287c13["prototype"][_0x123cde(1868)] = function(_0x25ff33, _0x9c0ff0) {
    var _0x4ee4c0 = _0x123cde, _0x47e594 = this["transceivers"]["length"] > 0, _0x3c86f2 = { "track": null, "iceGatherer": null, "iceTransport": null, "dtlsTransport": null, "localCapabilities": null, "remoteCapabilities": null, "rtpSender": null, "rtpReceiver": null, "kind": _0x25ff33, "mid": null, "sendEncodingParameters": null, "recvEncodingParameters": null, "stream": null, "associatedRemoteMediaStreams": [], "wantReceive": !![] };
    if (this[_0x4ee4c0(1067)] && _0x47e594)
      _0x3c86f2[_0x4ee4c0(1631)] = this["transceivers"][0]["iceTransport"], _0x3c86f2[_0x4ee4c0(799)] = this[_0x4ee4c0(1370)][0]["dtlsTransport"];
    else {
      var _0x178073 = this[_0x4ee4c0(1005)]();
      _0x3c86f2[_0x4ee4c0(1631)] = _0x178073[_0x4ee4c0(1631)], _0x3c86f2[_0x4ee4c0(799)] = _0x178073[_0x4ee4c0(799)];
    }
    return !_0x9c0ff0 && this["transceivers"]["push"](_0x3c86f2), _0x3c86f2;
  }, _0x287c13[_0x123cde(1897)]["addTrack"] = function(_0xf15eef, _0x2fd9a0) {
    var _0x426fb3 = _0x123cde;
    if (this["_isClosed"])
      throw makeError(_0x426fb3(1027), _0x426fb3(1483));
    var _0x1013ff = this[_0x426fb3(1370)][_0x426fb3(1252)](function(_0x3a2c78) {
      var _0x4f8e02 = _0x426fb3;
      return _0x3a2c78[_0x4f8e02(451)] === _0xf15eef;
    });
    if (_0x1013ff)
      throw makeError(_0x426fb3(1551), _0x426fb3(1092));
    var _0x5c7559;
    for (var _0x42eaa4 = 0; _0x42eaa4 < this["transceivers"][_0x426fb3(1965)]; _0x42eaa4++) {
      !this[_0x426fb3(1370)][_0x42eaa4][_0x426fb3(451)] && this[_0x426fb3(1370)][_0x42eaa4]["kind"] === _0xf15eef[_0x426fb3(1711)] && (_0x5c7559 = this[_0x426fb3(1370)][_0x42eaa4]);
    }
    return !_0x5c7559 && (_0x5c7559 = this["_createTransceiver"](_0xf15eef[_0x426fb3(1711)])), this[_0x426fb3(1811)](), this["localStreams"][_0x426fb3(1879)](_0x2fd9a0) === -1 && this[_0x426fb3(1651)]["push"](_0x2fd9a0), _0x5c7559["track"] = _0xf15eef, _0x5c7559[_0x426fb3(1637)] = _0x2fd9a0, _0x5c7559[_0x426fb3(1531)] = new _0x146e6e[_0x426fb3(930)](_0xf15eef, _0x5c7559[_0x426fb3(799)]), _0x5c7559[_0x426fb3(1531)];
  }, _0x287c13[_0x123cde(1897)]["addStream"] = function(_0x1e01c5) {
    var _0x5c3f0e = _0x123cde, _0x51bdaa = this;
    if (_0x40acac >= 15025)
      _0x1e01c5[_0x5c3f0e(1817)]()["forEach"](function(_0x31907e) {
        var _0x4fc10f = _0x5c3f0e;
        _0x51bdaa[_0x4fc10f(1976)](_0x31907e, _0x1e01c5);
      });
    else {
      var _0x2f45fa = _0x1e01c5["clone"]();
      _0x1e01c5[_0x5c3f0e(1817)]()[_0x5c3f0e(839)](function(_0xd81bdf, _0x177cba) {
        var _0x58c910 = _0x5c3f0e, _0x30832b = _0x2f45fa[_0x58c910(1817)]()[_0x177cba];
        _0xd81bdf[_0x58c910(2069)](_0x58c910(904), function(_0x41b285) {
          var _0x8a5399 = _0x58c910;
          _0x30832b[_0x8a5399(904)] = _0x41b285[_0x8a5399(904)];
        });
      }), _0x2f45fa["getTracks"]()["forEach"](function(_0x10b2a7) {
        var _0xdbfa0 = _0x5c3f0e;
        _0x51bdaa[_0xdbfa0(1976)](_0x10b2a7, _0x2f45fa);
      });
    }
  }, _0x287c13["prototype"][_0x123cde(1103)] = function(_0x464e85) {
    var _0x1ce5c8 = _0x123cde;
    if (this[_0x1ce5c8(481)])
      throw makeError(_0x1ce5c8(1027), _0x1ce5c8(1426));
    if (!(_0x464e85 instanceof _0x146e6e[_0x1ce5c8(930)]))
      throw new TypeError(_0x1ce5c8(1099) + _0x1ce5c8(1111));
    var _0x39be0f = this[_0x1ce5c8(1370)]["find"](function(_0x428a08) {
      var _0x2ce8c3 = _0x1ce5c8;
      return _0x428a08[_0x2ce8c3(1531)] === _0x464e85;
    });
    if (!_0x39be0f)
      throw makeError(_0x1ce5c8(1551), _0x1ce5c8(1194));
    var _0x28b50b = _0x39be0f[_0x1ce5c8(1637)];
    _0x39be0f[_0x1ce5c8(1531)][_0x1ce5c8(712)](), _0x39be0f[_0x1ce5c8(1531)] = null, _0x39be0f[_0x1ce5c8(451)] = null, _0x39be0f[_0x1ce5c8(1637)] = null;
    var _0x29d51b = this[_0x1ce5c8(1370)][_0x1ce5c8(376)](function(_0x555865) {
      var _0x3a6aa9 = _0x1ce5c8;
      return _0x555865[_0x3a6aa9(1637)];
    });
    _0x29d51b["indexOf"](_0x28b50b) === -1 && this["localStreams"][_0x1ce5c8(1879)](_0x28b50b) > -1 && this[_0x1ce5c8(1651)][_0x1ce5c8(1314)](this[_0x1ce5c8(1651)][_0x1ce5c8(1879)](_0x28b50b), 1), this[_0x1ce5c8(1811)]();
  }, _0x287c13[_0x123cde(1897)][_0x123cde(2162)] = function(_0x2a719c) {
    var _0x2d1da3 = _0x123cde, _0x34ab28 = this;
    _0x2a719c["getTracks"]()[_0x2d1da3(839)](function(_0x36c542) {
      var _0xf8799 = _0x34ab28["getSenders"]()["find"](function(_0x5a13c4) {
        var _0x4fc7b2 = _0x3001;
        return _0x5a13c4[_0x4fc7b2(451)] === _0x36c542;
      });
      _0xf8799 && _0x34ab28["removeTrack"](_0xf8799);
    });
  }, _0x287c13[_0x123cde(1897)][_0x123cde(1033)] = function() {
    var _0x49ed7e = _0x123cde;
    return this["transceivers"][_0x49ed7e(805)](function(_0x5a9b32) {
      var _0x26dd5e = _0x49ed7e;
      return !!_0x5a9b32[_0x26dd5e(1531)];
    })[_0x49ed7e(376)](function(_0x30a326) {
      return _0x30a326["rtpSender"];
    });
  }, _0x287c13[_0x123cde(1897)][_0x123cde(1006)] = function() {
    var _0x39287b = _0x123cde;
    return this[_0x39287b(1370)][_0x39287b(805)](function(_0x1cfeb5) {
      return !!_0x1cfeb5["rtpReceiver"];
    })[_0x39287b(376)](function(_0x42e199) {
      var _0x50d7ad = _0x39287b;
      return _0x42e199[_0x50d7ad(676)];
    });
  }, _0x287c13[_0x123cde(1897)][_0x123cde(764)] = function(_0x58025c, _0x544601) {
    var _0x38091a = _0x123cde, _0x550f9a = this;
    if (_0x544601 && _0x58025c > 0)
      return this["transceivers"][0][_0x38091a(768)];
    else {
      if (this["_iceGatherers"][_0x38091a(1965)])
        return this[_0x38091a(798)]["shift"]();
    }
    var _0x5d921a = new _0x146e6e[_0x38091a(596)]({ "iceServers": this[_0x38091a(2174)]["iceServers"], "gatherPolicy": this[_0x38091a(2174)][_0x38091a(614)] });
    return Object["defineProperty"](_0x5d921a, _0x38091a(620), { "value": "new", "writable": !![] }), this[_0x38091a(1370)][_0x58025c]["bufferedCandidateEvents"] = [], this[_0x38091a(1370)][_0x58025c][_0x38091a(831)] = function(_0x4fbd89) {
      var _0x272749 = _0x38091a, _0xdb11d1 = !_0x4fbd89["candidate"] || Object[_0x272749(605)](_0x4fbd89["candidate"])[_0x272749(1965)] === 0;
      _0x5d921a["state"] = _0xdb11d1 ? _0x272749(2118) : "gathering", _0x550f9a[_0x272749(1370)][_0x58025c][_0x272749(638)] !== null && _0x550f9a[_0x272749(1370)][_0x58025c][_0x272749(638)][_0x272749(1991)](_0x4fbd89);
    }, _0x5d921a["addEventListener"](_0x38091a(1640), this[_0x38091a(1370)][_0x58025c][_0x38091a(831)]), _0x5d921a;
  }, _0x287c13[_0x123cde(1897)][_0x123cde(1921)] = function(_0x574bee, _0x27ec46) {
    var _0x9cea45 = _0x123cde, _0x7f89d7 = this, _0x13a8c6 = this[_0x9cea45(1370)][_0x27ec46][_0x9cea45(768)];
    if (_0x13a8c6[_0x9cea45(1408)])
      return;
    var _0x406d18 = this[_0x9cea45(1370)][_0x27ec46][_0x9cea45(638)];
    this["transceivers"][_0x27ec46][_0x9cea45(638)] = null, _0x13a8c6[_0x9cea45(1283)](_0x9cea45(1640), this[_0x9cea45(1370)][_0x27ec46]["bufferCandidates"]), _0x13a8c6[_0x9cea45(1408)] = function(_0x184294) {
      var _0x5f19e7 = _0x9cea45;
      if (_0x7f89d7[_0x5f19e7(1067)] && _0x27ec46 > 0)
        return;
      var _0x28b4a6 = new Event("icecandidate");
      _0x28b4a6["candidate"] = { "sdpMid": _0x574bee, "sdpMLineIndex": _0x27ec46 };
      var _0x2d6c9a = _0x184294[_0x5f19e7(696)], _0x4946a8 = !_0x2d6c9a || Object[_0x5f19e7(605)](_0x2d6c9a)["length"] === 0;
      if (_0x4946a8)
        (_0x13a8c6[_0x5f19e7(620)] === _0x5f19e7(367) || _0x13a8c6[_0x5f19e7(620)] === _0x5f19e7(2103)) && (_0x13a8c6["state"] = _0x5f19e7(2118));
      else {
        _0x13a8c6[_0x5f19e7(620)] === _0x5f19e7(367) && (_0x13a8c6[_0x5f19e7(620)] = _0x5f19e7(2103));
        _0x2d6c9a[_0x5f19e7(352)] = 1, _0x2d6c9a["ufrag"] = _0x13a8c6["getLocalParameters"]()["usernameFragment"];
        var _0x5e9cbe = SDPUtils[_0x5f19e7(612)](_0x2d6c9a);
        _0x28b4a6[_0x5f19e7(696)] = Object["assign"](_0x28b4a6["candidate"], SDPUtils[_0x5f19e7(1619)](_0x5e9cbe)), _0x28b4a6[_0x5f19e7(696)][_0x5f19e7(696)] = _0x5e9cbe, _0x28b4a6[_0x5f19e7(696)][_0x5f19e7(1167)] = function() {
          var _0xa2dc72 = _0x5f19e7;
          return { "candidate": _0x28b4a6[_0xa2dc72(696)][_0xa2dc72(696)], "sdpMid": _0x28b4a6["candidate"][_0xa2dc72(382)], "sdpMLineIndex": _0x28b4a6[_0xa2dc72(696)][_0xa2dc72(864)], "usernameFragment": _0x28b4a6[_0xa2dc72(696)][_0xa2dc72(2188)] };
        };
      }
      var _0x4dee08 = SDPUtils[_0x5f19e7(551)](_0x7f89d7[_0x5f19e7(873)][_0x5f19e7(2016)]);
      !_0x4946a8 ? _0x4dee08[_0x28b4a6[_0x5f19e7(696)][_0x5f19e7(864)]] += "a=" + _0x28b4a6["candidate"][_0x5f19e7(696)] + "\r\n" : _0x4dee08[_0x28b4a6[_0x5f19e7(696)]["sdpMLineIndex"]] += "a=end-of-candidates\r\n";
      _0x7f89d7["_localDescription"]["sdp"] = SDPUtils["getDescription"](_0x7f89d7[_0x5f19e7(873)][_0x5f19e7(2016)]) + _0x4dee08["join"]("");
      var _0x2f38ec = _0x7f89d7["transceivers"]["every"](function(_0x310abd) {
        var _0x5f18ab = _0x5f19e7;
        return _0x310abd[_0x5f18ab(768)] && _0x310abd[_0x5f18ab(768)][_0x5f18ab(620)] === _0x5f18ab(2118);
      });
      _0x7f89d7[_0x5f19e7(1660)] !== "gathering" && (_0x7f89d7[_0x5f19e7(1660)] = _0x5f19e7(2103), _0x7f89d7["_emitGatheringStateChange"]()), !_0x4946a8 && _0x7f89d7[_0x5f19e7(1555)](_0x5f19e7(945), _0x28b4a6), _0x2f38ec && (_0x7f89d7[_0x5f19e7(1555)](_0x5f19e7(945), new Event(_0x5f19e7(945))), _0x7f89d7[_0x5f19e7(1660)] = _0x5f19e7(1045), _0x7f89d7[_0x5f19e7(952)]());
    }, _0x146e6e[_0x9cea45(2023)](function() {
      _0x406d18["forEach"](function(_0x4cff87) {
        _0x13a8c6["onlocalcandidate"](_0x4cff87);
      });
    }, 0);
  }, _0x287c13["prototype"][_0x123cde(1005)] = function() {
    var _0x50f547 = _0x123cde, _0x38ed98 = this, _0x3ddce2 = new _0x146e6e[_0x50f547(966)](null);
    _0x3ddce2[_0x50f547(484)] = function() {
      var _0x4c7e92 = _0x50f547;
      _0x38ed98[_0x4c7e92(642)](), _0x38ed98[_0x4c7e92(1544)]();
    };
    var _0xa0cdb4 = new _0x146e6e[_0x50f547(1157)](_0x3ddce2);
    return _0xa0cdb4["ondtlsstatechange"] = function() {
      var _0x1ebb96 = _0x50f547;
      _0x38ed98[_0x1ebb96(1544)]();
    }, _0xa0cdb4[_0x50f547(1512)] = function() {
      var _0x24f051 = _0x50f547;
      Object[_0x24f051(1564)](_0xa0cdb4, _0x24f051(620), { "value": _0x24f051(977), "writable": !![] }), _0x38ed98["_updateConnectionState"]();
    }, { "iceTransport": _0x3ddce2, "dtlsTransport": _0xa0cdb4 };
  }, _0x287c13["prototype"][_0x123cde(1986)] = function(_0x6f5b3c) {
    var _0x4665b0 = _0x123cde, _0x207d81 = this[_0x4665b0(1370)][_0x6f5b3c][_0x4665b0(768)];
    _0x207d81 && (delete _0x207d81[_0x4665b0(1408)], delete this[_0x4665b0(1370)][_0x6f5b3c][_0x4665b0(768)]);
    var _0x1c4fb9 = this[_0x4665b0(1370)][_0x6f5b3c][_0x4665b0(1631)];
    _0x1c4fb9 && (delete _0x1c4fb9[_0x4665b0(484)], delete this["transceivers"][_0x6f5b3c][_0x4665b0(1631)]);
    var _0x47d9db = this[_0x4665b0(1370)][_0x6f5b3c][_0x4665b0(799)];
    _0x47d9db && (delete _0x47d9db[_0x4665b0(1382)], delete _0x47d9db[_0x4665b0(1512)], delete this[_0x4665b0(1370)][_0x6f5b3c][_0x4665b0(799)]);
  }, _0x287c13[_0x123cde(1897)]["_transceive"] = function(_0x312155, _0xd02a1e, _0x3151ec) {
    var _0x280026 = _0x123cde, _0x5d2725 = getCommonCapabilities(_0x312155[_0x280026(832)], _0x312155["remoteCapabilities"]);
    _0xd02a1e && _0x312155[_0x280026(1531)] && (_0x5d2725[_0x280026(471)] = _0x312155[_0x280026(1907)], _0x5d2725[_0x280026(1049)] = { "cname": SDPUtils[_0x280026(672)], "compound": _0x312155[_0x280026(991)][_0x280026(1444)] }, _0x312155[_0x280026(1604)]["length"] && (_0x5d2725["rtcp"][_0x280026(1159)] = _0x312155[_0x280026(1604)][0]["ssrc"]), _0x312155[_0x280026(1531)][_0x280026(1241)](_0x5d2725)), _0x3151ec && _0x312155["rtpReceiver"] && _0x5d2725["codecs"]["length"] > 0 && (_0x312155[_0x280026(1711)] === _0x280026(1822) && _0x312155["recvEncodingParameters"] && _0x40acac < 15019 && _0x312155["recvEncodingParameters"][_0x280026(839)](function(_0x1cc7b1) {
      var _0x1949de = _0x280026;
      delete _0x1cc7b1[_0x1949de(2127)];
    }), _0x312155[_0x280026(1604)][_0x280026(1965)] ? _0x5d2725[_0x280026(471)] = _0x312155[_0x280026(1604)] : _0x5d2725[_0x280026(471)] = [{}], _0x5d2725["rtcp"] = { "compound": _0x312155[_0x280026(991)][_0x280026(1444)] }, _0x312155[_0x280026(991)][_0x280026(1395)] && (_0x5d2725[_0x280026(1049)][_0x280026(1395)] = _0x312155["rtcpParameters"][_0x280026(1395)]), _0x312155[_0x280026(1907)][_0x280026(1965)] && (_0x5d2725[_0x280026(1049)][_0x280026(1159)] = _0x312155[_0x280026(1907)][0][_0x280026(1159)]), _0x312155[_0x280026(676)][_0x280026(1143)](_0x5d2725));
  }, _0x287c13[_0x123cde(1897)][_0x123cde(1392)] = function(_0x2a056e) {
    var _0x19e3ae = _0x123cde, _0x1083c5 = this;
    if ([_0x19e3ae(1799), _0x19e3ae(1449)][_0x19e3ae(1879)](_0x2a056e["type"]) === -1)
      return Promise[_0x19e3ae(1646)](makeError("TypeError", _0x19e3ae(1326) + _0x2a056e[_0x19e3ae(1514)] + '"'));
    if (!isActionAllowedInSignalingState(_0x19e3ae(1392), _0x2a056e["type"], _0x1083c5[_0x19e3ae(1327)]) || _0x1083c5[_0x19e3ae(481)])
      return Promise["reject"](makeError("InvalidStateError", _0x19e3ae(1528) + _0x2a056e["type"] + _0x19e3ae(2e3) + _0x1083c5[_0x19e3ae(1327)]));
    var _0x3fd012, _0x5447d4;
    if (_0x2a056e[_0x19e3ae(1514)] === "offer")
      _0x3fd012 = SDPUtils[_0x19e3ae(1922)](_0x2a056e[_0x19e3ae(2016)]), _0x5447d4 = _0x3fd012["shift"](), _0x3fd012["forEach"](function(_0x2f157d, _0x4685cb) {
        var _0x5cb680 = _0x19e3ae, _0x28e60c = SDPUtils["parseRtpParameters"](_0x2f157d);
        _0x1083c5[_0x5cb680(1370)][_0x4685cb]["localCapabilities"] = _0x28e60c;
      }), _0x1083c5[_0x19e3ae(1370)][_0x19e3ae(839)](function(_0x14c7d2, _0x5b769e) {
        var _0x1d49ca = _0x19e3ae;
        _0x1083c5[_0x1d49ca(1921)](_0x14c7d2[_0x1d49ca(1530)], _0x5b769e);
      });
    else {
      if (_0x2a056e[_0x19e3ae(1514)] === _0x19e3ae(1449)) {
        _0x3fd012 = SDPUtils["splitSections"](_0x1083c5[_0x19e3ae(1182)][_0x19e3ae(2016)]), _0x5447d4 = _0x3fd012[_0x19e3ae(2002)]();
        var _0x4c22d7 = SDPUtils[_0x19e3ae(2065)](_0x5447d4, _0x19e3ae(369))[_0x19e3ae(1965)] > 0;
        _0x3fd012[_0x19e3ae(839)](function(_0x27407e, _0x3e5b05) {
          var _0x45af29 = _0x19e3ae, _0x1b82fa = _0x1083c5[_0x45af29(1370)][_0x3e5b05], _0x4062d1 = _0x1b82fa[_0x45af29(768)], _0x42ac62 = _0x1b82fa[_0x45af29(1631)], _0xfd211b = _0x1b82fa["dtlsTransport"], _0x2ed5bb = _0x1b82fa["localCapabilities"], _0x3c1cd3 = _0x1b82fa["remoteCapabilities"], _0x5b8690 = SDPUtils[_0x45af29(372)](_0x27407e) && SDPUtils["matchPrefix"](_0x27407e, _0x45af29(2193))[_0x45af29(1965)] === 0;
          if (!_0x5b8690 && !_0x1b82fa[_0x45af29(1579)]) {
            var _0x557df1 = SDPUtils[_0x45af29(2043)](_0x27407e, _0x5447d4), _0x17207c = SDPUtils[_0x45af29(416)](_0x27407e, _0x5447d4);
            _0x4c22d7 && (_0x17207c[_0x45af29(1001)] = "server");
            (!_0x1083c5[_0x45af29(1067)] || _0x3e5b05 === 0) && (_0x1083c5["_gather"](_0x1b82fa["mid"], _0x3e5b05), _0x42ac62[_0x45af29(620)] === _0x45af29(367) && _0x42ac62[_0x45af29(2014)](_0x4062d1, _0x557df1, _0x4c22d7 ? _0x45af29(1214) : "controlled"), _0xfd211b[_0x45af29(620)] === "new" && _0xfd211b[_0x45af29(2014)](_0x17207c));
            var _0x33b934 = getCommonCapabilities(_0x2ed5bb, _0x3c1cd3);
            _0x1083c5["_transceive"](_0x1b82fa, _0x33b934[_0x45af29(1144)][_0x45af29(1965)] > 0, ![]);
          }
        });
      }
    }
    return _0x1083c5[_0x19e3ae(873)] = { "type": _0x2a056e[_0x19e3ae(1514)], "sdp": _0x2a056e[_0x19e3ae(2016)] }, _0x2a056e[_0x19e3ae(1514)] === _0x19e3ae(1799) ? _0x1083c5[_0x19e3ae(2187)]("have-local-offer") : _0x1083c5[_0x19e3ae(2187)](_0x19e3ae(1181)), Promise[_0x19e3ae(1211)]();
  }, _0x287c13[_0x123cde(1897)][_0x123cde(2140)] = function(_0x898a6f) {
    var _0x28aa09 = _0x123cde, _0x479395 = this;
    if ([_0x28aa09(1799), _0x28aa09(1449)]["indexOf"](_0x898a6f[_0x28aa09(1514)]) === -1)
      return Promise["reject"](makeError("TypeError", _0x28aa09(1326) + _0x898a6f["type"] + '"'));
    if (!isActionAllowedInSignalingState(_0x28aa09(2140), _0x898a6f[_0x28aa09(1514)], _0x479395[_0x28aa09(1327)]) || _0x479395[_0x28aa09(481)])
      return Promise["reject"](makeError(_0x28aa09(1027), _0x28aa09(1610) + _0x898a6f[_0x28aa09(1514)] + " in state " + _0x479395["signalingState"]));
    var _0x10c496 = {};
    _0x479395["remoteStreams"][_0x28aa09(839)](function(_0x2a6e35) {
      _0x10c496[_0x2a6e35["id"]] = _0x2a6e35;
    });
    var _0x13e495 = [], _0x344d8d = SDPUtils["splitSections"](_0x898a6f[_0x28aa09(2016)]), _0x945a12 = _0x344d8d["shift"](), _0xdeb909 = SDPUtils["matchPrefix"](_0x945a12, _0x28aa09(369))["length"] > 0, _0x23d9ba = SDPUtils[_0x28aa09(2065)](_0x945a12, _0x28aa09(673))["length"] > 0;
    _0x479395[_0x28aa09(1067)] = _0x23d9ba;
    var _0x41d591 = SDPUtils[_0x28aa09(2065)](_0x945a12, _0x28aa09(1308))[0];
    return _0x41d591 ? _0x479395[_0x28aa09(1492)] = _0x41d591["substr"](14)["split"](" ")[_0x28aa09(1879)](_0x28aa09(2032)) >= 0 : _0x479395[_0x28aa09(1492)] = ![], _0x344d8d["forEach"](function(_0x18a4e1, _0x2d3059) {
      var _0x1be9eb = _0x28aa09, _0x228dd9 = SDPUtils[_0x1be9eb(1349)](_0x18a4e1), _0x5e7a31 = SDPUtils[_0x1be9eb(2194)](_0x18a4e1), _0x5631f0 = SDPUtils[_0x1be9eb(372)](_0x18a4e1) && SDPUtils["matchPrefix"](_0x18a4e1, _0x1be9eb(2193))["length"] === 0, _0x4d155c = _0x228dd9[0]["substr"](2)["split"](" ")[2], _0x5496c7 = SDPUtils[_0x1be9eb(958)](_0x18a4e1, _0x945a12), _0x1a8893 = SDPUtils["parseMsid"](_0x18a4e1), _0x56128c = SDPUtils[_0x1be9eb(2149)](_0x18a4e1) || SDPUtils[_0x1be9eb(1209)]();
      if (_0x5631f0 || _0x5e7a31 === _0x1be9eb(1670) && (_0x4d155c === "DTLS/SCTP" || _0x4d155c === _0x1be9eb(949))) {
        _0x479395[_0x1be9eb(1370)][_0x2d3059] = { "mid": _0x56128c, "kind": _0x5e7a31, "protocol": _0x4d155c, "rejected": !![] };
        return;
      }
      !_0x5631f0 && _0x479395[_0x1be9eb(1370)][_0x2d3059] && _0x479395[_0x1be9eb(1370)][_0x2d3059][_0x1be9eb(1579)] && (_0x479395[_0x1be9eb(1370)][_0x2d3059] = _0x479395["_createTransceiver"](_0x5e7a31, !![]));
      var _0x599f4c, _0x397986, _0x151c28, _0x8b0e94, _0x51400c, _0x21d556, _0x109c17, _0x10bd69, _0x573880, _0x57af41 = SDPUtils[_0x1be9eb(1037)](_0x18a4e1), _0x437478, _0x6a1462;
      !_0x5631f0 && (_0x437478 = SDPUtils["getIceParameters"](_0x18a4e1, _0x945a12), _0x6a1462 = SDPUtils[_0x1be9eb(416)](_0x18a4e1, _0x945a12), _0x6a1462[_0x1be9eb(1001)] = "client");
      _0x109c17 = SDPUtils[_0x1be9eb(2033)](_0x18a4e1);
      var _0xd71256 = SDPUtils["parseRtcpParameters"](_0x18a4e1), _0x4f4ea9 = SDPUtils[_0x1be9eb(2065)](_0x18a4e1, _0x1be9eb(1888), _0x945a12)[_0x1be9eb(1965)] > 0, _0x1687cc = SDPUtils[_0x1be9eb(2065)](_0x18a4e1, _0x1be9eb(1529))[_0x1be9eb(376)](function(_0x1ea96b) {
        return SDPUtils["parseCandidate"](_0x1ea96b);
      })["filter"](function(_0x5b5d24) {
        var _0x41749f = _0x1be9eb;
        return _0x5b5d24[_0x41749f(352)] === 1;
      });
      (_0x898a6f[_0x1be9eb(1514)] === "offer" || _0x898a6f[_0x1be9eb(1514)] === _0x1be9eb(1449)) && !_0x5631f0 && _0x23d9ba && _0x2d3059 > 0 && _0x479395[_0x1be9eb(1370)][_0x2d3059] && (_0x479395["_disposeIceAndDtlsTransports"](_0x2d3059), _0x479395["transceivers"][_0x2d3059][_0x1be9eb(768)] = _0x479395[_0x1be9eb(1370)][0][_0x1be9eb(768)], _0x479395[_0x1be9eb(1370)][_0x2d3059]["iceTransport"] = _0x479395[_0x1be9eb(1370)][0][_0x1be9eb(1631)], _0x479395["transceivers"][_0x2d3059]["dtlsTransport"] = _0x479395[_0x1be9eb(1370)][0][_0x1be9eb(799)], _0x479395[_0x1be9eb(1370)][_0x2d3059][_0x1be9eb(1531)] && _0x479395[_0x1be9eb(1370)][_0x2d3059][_0x1be9eb(1531)][_0x1be9eb(778)](_0x479395[_0x1be9eb(1370)][0][_0x1be9eb(799)]), _0x479395["transceivers"][_0x2d3059][_0x1be9eb(676)] && _0x479395["transceivers"][_0x2d3059]["rtpReceiver"]["setTransport"](_0x479395[_0x1be9eb(1370)][0]["dtlsTransport"]));
      if (_0x898a6f["type"] === _0x1be9eb(1799) && !_0x5631f0) {
        _0x599f4c = _0x479395["transceivers"][_0x2d3059] || _0x479395[_0x1be9eb(1868)](_0x5e7a31), _0x599f4c["mid"] = _0x56128c;
        !_0x599f4c[_0x1be9eb(768)] && (_0x599f4c[_0x1be9eb(768)] = _0x479395[_0x1be9eb(764)](_0x2d3059, _0x23d9ba));
        _0x1687cc["length"] && _0x599f4c[_0x1be9eb(1631)][_0x1be9eb(620)] === _0x1be9eb(367) && (_0x4f4ea9 && (!_0x23d9ba || _0x2d3059 === 0) ? _0x599f4c[_0x1be9eb(1631)]["setRemoteCandidates"](_0x1687cc) : _0x1687cc[_0x1be9eb(839)](function(_0x3771d0) {
          var _0x3ce08e = _0x1be9eb;
          maybeAddCandidate(_0x599f4c[_0x3ce08e(1631)], _0x3771d0);
        }));
        _0x10bd69 = _0x146e6e[_0x1be9eb(840)][_0x1be9eb(1583)](_0x5e7a31);
        _0x40acac < 15019 && (_0x10bd69["codecs"] = _0x10bd69[_0x1be9eb(1144)]["filter"](function(_0x173acb) {
          var _0x154c42 = _0x1be9eb;
          return _0x173acb[_0x154c42(765)] !== "rtx";
        }));
        _0x21d556 = _0x599f4c[_0x1be9eb(1907)] || [{ "ssrc": (2 * _0x2d3059 + 2) * 1001 }];
        var _0x188569 = ![];
        if (_0x5496c7 === _0x1be9eb(1614) || _0x5496c7 === _0x1be9eb(1871)) {
          _0x188569 = !_0x599f4c[_0x1be9eb(676)], _0x51400c = _0x599f4c["rtpReceiver"] || new _0x146e6e[_0x1be9eb(840)](_0x599f4c[_0x1be9eb(799)], _0x5e7a31);
          if (_0x188569) {
            var _0x136ae8;
            _0x573880 = _0x51400c[_0x1be9eb(451)];
            if (_0x1a8893 && _0x1a8893[_0x1be9eb(1637)] === "-")
              ;
            else
              _0x1a8893 ? (!_0x10c496[_0x1a8893[_0x1be9eb(1637)]] && (_0x10c496[_0x1a8893[_0x1be9eb(1637)]] = new _0x146e6e["MediaStream"](), Object[_0x1be9eb(1564)](_0x10c496[_0x1a8893[_0x1be9eb(1637)]], "id", { "get": function() {
                var _0x2e6537 = _0x1be9eb;
                return _0x1a8893[_0x2e6537(1637)];
              } })), Object[_0x1be9eb(1564)](_0x573880, "id", { "get": function() {
                var _0x555a35 = _0x1be9eb;
                return _0x1a8893[_0x555a35(451)];
              } }), _0x136ae8 = _0x10c496[_0x1a8893[_0x1be9eb(1637)]]) : (!_0x10c496[_0x1be9eb(1744)] && (_0x10c496[_0x1be9eb(1744)] = new _0x146e6e["MediaStream"]()), _0x136ae8 = _0x10c496[_0x1be9eb(1744)]);
            _0x136ae8 && (_0x1f6ded(_0x573880, _0x136ae8), _0x599f4c["associatedRemoteMediaStreams"][_0x1be9eb(1991)](_0x136ae8)), _0x13e495[_0x1be9eb(1991)]([_0x573880, _0x51400c, _0x136ae8]);
          }
        } else
          _0x599f4c[_0x1be9eb(676)] && _0x599f4c[_0x1be9eb(676)][_0x1be9eb(451)] && (_0x599f4c[_0x1be9eb(648)][_0x1be9eb(839)](function(_0x58d4d4) {
            var _0x435344 = _0x1be9eb, _0x3c9da5 = _0x58d4d4[_0x435344(1817)]()["find"](function(_0xe44c0d) {
              var _0x318953 = _0x435344;
              return _0xe44c0d["id"] === _0x599f4c[_0x318953(676)][_0x318953(451)]["id"];
            });
            _0x3c9da5 && _0x436387(_0x3c9da5, _0x58d4d4);
          }), _0x599f4c["associatedRemoteMediaStreams"] = []);
        _0x599f4c[_0x1be9eb(832)] = _0x10bd69, _0x599f4c["remoteCapabilities"] = _0x57af41, _0x599f4c[_0x1be9eb(676)] = _0x51400c, _0x599f4c["rtcpParameters"] = _0xd71256, _0x599f4c[_0x1be9eb(1907)] = _0x21d556, _0x599f4c["recvEncodingParameters"] = _0x109c17, _0x479395[_0x1be9eb(1973)](_0x479395[_0x1be9eb(1370)][_0x2d3059], ![], _0x188569);
      } else {
        if (_0x898a6f[_0x1be9eb(1514)] === _0x1be9eb(1449) && !_0x5631f0) {
          _0x599f4c = _0x479395[_0x1be9eb(1370)][_0x2d3059], _0x397986 = _0x599f4c[_0x1be9eb(768)], _0x151c28 = _0x599f4c[_0x1be9eb(1631)], _0x8b0e94 = _0x599f4c[_0x1be9eb(799)], _0x51400c = _0x599f4c[_0x1be9eb(676)], _0x21d556 = _0x599f4c["sendEncodingParameters"], _0x10bd69 = _0x599f4c[_0x1be9eb(832)], _0x479395[_0x1be9eb(1370)][_0x2d3059]["recvEncodingParameters"] = _0x109c17, _0x479395[_0x1be9eb(1370)][_0x2d3059][_0x1be9eb(1334)] = _0x57af41, _0x479395[_0x1be9eb(1370)][_0x2d3059][_0x1be9eb(991)] = _0xd71256;
          _0x1687cc[_0x1be9eb(1965)] && _0x151c28["state"] === "new" && ((_0xdeb909 || _0x4f4ea9) && (!_0x23d9ba || _0x2d3059 === 0) ? _0x151c28[_0x1be9eb(1451)](_0x1687cc) : _0x1687cc[_0x1be9eb(839)](function(_0x5df44c) {
            var _0x3ac21c = _0x1be9eb;
            maybeAddCandidate(_0x599f4c[_0x3ac21c(1631)], _0x5df44c);
          }));
          (!_0x23d9ba || _0x2d3059 === 0) && (_0x151c28[_0x1be9eb(620)] === "new" && _0x151c28["start"](_0x397986, _0x437478, _0x1be9eb(1214)), _0x8b0e94[_0x1be9eb(620)] === "new" && _0x8b0e94["start"](_0x6a1462));
          var _0x32573d = getCommonCapabilities(_0x599f4c[_0x1be9eb(832)], _0x599f4c[_0x1be9eb(1334)]), _0x42be48 = _0x32573d[_0x1be9eb(1144)][_0x1be9eb(805)](function(_0x4d4db1) {
            var _0x4f92c7 = _0x1be9eb;
            return _0x4d4db1["name"][_0x4f92c7(433)]() === _0x4f92c7(2127);
          })[_0x1be9eb(1965)];
          !_0x42be48 && _0x599f4c[_0x1be9eb(1907)][0][_0x1be9eb(2127)] && delete _0x599f4c[_0x1be9eb(1907)][0]["rtx"], _0x479395[_0x1be9eb(1973)](_0x599f4c, _0x5496c7 === _0x1be9eb(1614) || _0x5496c7 === _0x1be9eb(927), _0x5496c7 === _0x1be9eb(1614) || _0x5496c7 === "sendonly"), _0x51400c && (_0x5496c7 === _0x1be9eb(1614) || _0x5496c7 === "sendonly") ? (_0x573880 = _0x51400c[_0x1be9eb(451)], _0x1a8893 ? (!_0x10c496[_0x1a8893[_0x1be9eb(1637)]] && (_0x10c496[_0x1a8893[_0x1be9eb(1637)]] = new _0x146e6e[_0x1be9eb(720)]()), _0x1f6ded(_0x573880, _0x10c496[_0x1a8893[_0x1be9eb(1637)]]), _0x13e495[_0x1be9eb(1991)]([_0x573880, _0x51400c, _0x10c496[_0x1a8893["stream"]]])) : (!_0x10c496[_0x1be9eb(1744)] && (_0x10c496[_0x1be9eb(1744)] = new _0x146e6e[_0x1be9eb(720)]()), _0x1f6ded(_0x573880, _0x10c496[_0x1be9eb(1744)]), _0x13e495[_0x1be9eb(1991)]([_0x573880, _0x51400c, _0x10c496[_0x1be9eb(1744)]]))) : delete _0x599f4c["rtpReceiver"];
        }
      }
    }), _0x479395["_dtlsRole"] === void 0 && (_0x479395[_0x28aa09(716)] = _0x898a6f[_0x28aa09(1514)] === _0x28aa09(1799) ? _0x28aa09(1430) : _0x28aa09(2084)), _0x479395[_0x28aa09(1182)] = { "type": _0x898a6f[_0x28aa09(1514)], "sdp": _0x898a6f[_0x28aa09(2016)] }, _0x898a6f[_0x28aa09(1514)] === "offer" ? _0x479395[_0x28aa09(2187)](_0x28aa09(1046)) : _0x479395[_0x28aa09(2187)](_0x28aa09(1181)), Object[_0x28aa09(605)](_0x10c496)[_0x28aa09(839)](function(_0x813019) {
      var _0x179760 = _0x28aa09, _0xeae7f7 = _0x10c496[_0x813019];
      if (_0xeae7f7["getTracks"]()["length"]) {
        if (_0x479395["remoteStreams"][_0x179760(1879)](_0xeae7f7) === -1) {
          _0x479395[_0x179760(431)][_0x179760(1991)](_0xeae7f7);
          var _0x439381 = new Event(_0x179760(1475));
          _0x439381[_0x179760(1637)] = _0xeae7f7, _0x146e6e[_0x179760(2023)](function() {
            var _0x163a0c = _0x179760;
            _0x479395["_dispatchEvent"](_0x163a0c(1475), _0x439381);
          });
        }
        _0x13e495[_0x179760(839)](function(_0x1a3b08) {
          var _0x475805 = _0x1a3b08[0], _0x403a34 = _0x1a3b08[1];
          if (_0xeae7f7["id"] !== _0x1a3b08[2]["id"])
            return;
          _0x2336de(_0x479395, _0x475805, _0x403a34, [_0xeae7f7]);
        });
      }
    }), _0x13e495[_0x28aa09(839)](function(_0x3809a2) {
      if (_0x3809a2[2])
        return;
      _0x2336de(_0x479395, _0x3809a2[0], _0x3809a2[1], []);
    }), _0x146e6e[_0x28aa09(2023)](function() {
      var _0x1130f5 = _0x28aa09;
      if (!(_0x479395 && _0x479395["transceivers"]))
        return;
      _0x479395[_0x1130f5(1370)][_0x1130f5(839)](function(_0x3a8570) {
        var _0x1316a4 = _0x1130f5;
        _0x3a8570[_0x1316a4(1631)] && _0x3a8570[_0x1316a4(1631)]["state"] === _0x1316a4(367) && _0x3a8570[_0x1316a4(1631)]["getRemoteCandidates"]()["length"] > 0 && (console[_0x1316a4(1985)]("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"), _0x3a8570[_0x1316a4(1631)][_0x1316a4(527)]({}));
      });
    }, 4e3), Promise[_0x28aa09(1211)]();
  }, _0x287c13[_0x123cde(1897)]["close"] = function() {
    var _0x53fb02 = _0x123cde;
    this[_0x53fb02(1370)][_0x53fb02(839)](function(_0x2ee287) {
      var _0x96c214 = _0x53fb02;
      _0x2ee287[_0x96c214(1631)] && _0x2ee287[_0x96c214(1631)]["stop"](), _0x2ee287["dtlsTransport"] && _0x2ee287[_0x96c214(799)][_0x96c214(712)](), _0x2ee287[_0x96c214(1531)] && _0x2ee287[_0x96c214(1531)][_0x96c214(712)](), _0x2ee287["rtpReceiver"] && _0x2ee287["rtpReceiver"]["stop"]();
    }), this["_isClosed"] = !![], this[_0x53fb02(2187)](_0x53fb02(498));
  }, _0x287c13["prototype"][_0x123cde(2187)] = function(_0x50252c) {
    var _0x173fc1 = _0x123cde;
    this[_0x173fc1(1327)] = _0x50252c;
    var _0x5c5080 = new Event(_0x173fc1(2018));
    this[_0x173fc1(1555)](_0x173fc1(2018), _0x5c5080);
  }, _0x287c13[_0x123cde(1897)][_0x123cde(1811)] = function() {
    var _0x559504 = _0x123cde, _0x1aa96c = this;
    if (this[_0x559504(1327)] !== "stable" || this[_0x559504(1950)] === !![])
      return;
    this[_0x559504(1950)] = !![], _0x146e6e[_0x559504(2023)](function() {
      var _0x1b910a = _0x559504;
      if (_0x1aa96c[_0x1b910a(1950)]) {
        _0x1aa96c[_0x1b910a(1950)] = ![];
        var _0x4419ab = new Event(_0x1b910a(1404));
        _0x1aa96c[_0x1b910a(1555)](_0x1b910a(1404), _0x4419ab);
      }
    }, 0);
  }, _0x287c13[_0x123cde(1897)]["_updateIceConnectionState"] = function() {
    var _0x56da31 = _0x123cde, _0x400f9f, _0x2674d5 = { "new": 0, "closed": 0, "checking": 0, "connected": 0, "completed": 0, "disconnected": 0, "failed": 0 };
    this[_0x56da31(1370)]["forEach"](function(_0x8b9629) {
      var _0x2fb142 = _0x56da31;
      _0x8b9629[_0x2fb142(1631)] && !_0x8b9629[_0x2fb142(1579)] && _0x2674d5[_0x8b9629[_0x2fb142(1631)][_0x2fb142(620)]]++;
    }), _0x400f9f = _0x56da31(367);
    if (_0x2674d5["failed"] > 0)
      _0x400f9f = _0x56da31(977);
    else {
      if (_0x2674d5["checking"] > 0)
        _0x400f9f = _0x56da31(1221);
      else {
        if (_0x2674d5[_0x56da31(1055)] > 0)
          _0x400f9f = _0x56da31(1055);
        else {
          if (_0x2674d5[_0x56da31(367)] > 0)
            _0x400f9f = "new";
          else {
            if (_0x2674d5["connected"] > 0)
              _0x400f9f = _0x56da31(1245);
            else
              _0x2674d5["completed"] > 0 && (_0x400f9f = _0x56da31(2118));
          }
        }
      }
    }
    if (_0x400f9f !== this[_0x56da31(1455)]) {
      this[_0x56da31(1455)] = _0x400f9f;
      var _0x152c92 = new Event("iceconnectionstatechange");
      this[_0x56da31(1555)](_0x56da31(347), _0x152c92);
    }
  }, _0x287c13[_0x123cde(1897)][_0x123cde(1544)] = function() {
    var _0x50d8e7 = _0x123cde, _0x51c619, _0x2ad635 = { "new": 0, "closed": 0, "connecting": 0, "connected": 0, "completed": 0, "disconnected": 0, "failed": 0 };
    this[_0x50d8e7(1370)]["forEach"](function(_0x14aea8) {
      var _0xf68f27 = _0x50d8e7;
      _0x14aea8[_0xf68f27(1631)] && _0x14aea8[_0xf68f27(799)] && !_0x14aea8["rejected"] && (_0x2ad635[_0x14aea8[_0xf68f27(1631)][_0xf68f27(620)]]++, _0x2ad635[_0x14aea8[_0xf68f27(799)][_0xf68f27(620)]]++);
    }), _0x2ad635["connected"] += _0x2ad635[_0x50d8e7(2118)], _0x51c619 = _0x50d8e7(367);
    if (_0x2ad635[_0x50d8e7(977)] > 0)
      _0x51c619 = _0x50d8e7(977);
    else {
      if (_0x2ad635[_0x50d8e7(453)] > 0)
        _0x51c619 = _0x50d8e7(453);
      else {
        if (_0x2ad635[_0x50d8e7(1055)] > 0)
          _0x51c619 = "disconnected";
        else {
          if (_0x2ad635[_0x50d8e7(367)] > 0)
            _0x51c619 = _0x50d8e7(367);
          else
            _0x2ad635[_0x50d8e7(1245)] > 0 && (_0x51c619 = _0x50d8e7(1245));
        }
      }
    }
    if (_0x51c619 !== this[_0x50d8e7(1847)]) {
      this[_0x50d8e7(1847)] = _0x51c619;
      var _0x58b2ac = new Event(_0x50d8e7(630));
      this[_0x50d8e7(1555)](_0x50d8e7(630), _0x58b2ac);
    }
  }, _0x287c13[_0x123cde(1897)]["createOffer"] = function() {
    var _0x3915b1 = _0x123cde, _0xa58c5f = this;
    if (_0xa58c5f["_isClosed"])
      return Promise[_0x3915b1(1646)](makeError(_0x3915b1(1027), _0x3915b1(1010)));
    var _0x4df93b = _0xa58c5f[_0x3915b1(1370)][_0x3915b1(805)](function(_0x53c393) {
      var _0x367dfe = _0x3915b1;
      return _0x53c393[_0x367dfe(1711)] === _0x367dfe(1855);
    })[_0x3915b1(1965)], _0x274d72 = _0xa58c5f[_0x3915b1(1370)]["filter"](function(_0x1b49d3) {
      var _0x5c227c = _0x3915b1;
      return _0x1b49d3[_0x5c227c(1711)] === _0x5c227c(1822);
    })["length"], _0x5dc63b = arguments[0];
    if (_0x5dc63b) {
      if (_0x5dc63b[_0x3915b1(587)] || _0x5dc63b[_0x3915b1(658)])
        throw new TypeError(_0x3915b1(1974));
      if (_0x5dc63b[_0x3915b1(1777)] !== void 0) {
        if (_0x5dc63b[_0x3915b1(1777)] === !![])
          _0x4df93b = 1;
        else
          _0x5dc63b[_0x3915b1(1777)] === ![] ? _0x4df93b = 0 : _0x4df93b = _0x5dc63b["offerToReceiveAudio"];
      }
      if (_0x5dc63b[_0x3915b1(1158)] !== void 0) {
        if (_0x5dc63b[_0x3915b1(1158)] === !![])
          _0x274d72 = 1;
        else
          _0x5dc63b[_0x3915b1(1158)] === ![] ? _0x274d72 = 0 : _0x274d72 = _0x5dc63b[_0x3915b1(1158)];
      }
    }
    _0xa58c5f["transceivers"][_0x3915b1(839)](function(_0x53ef3b) {
      var _0x4dc089 = _0x3915b1;
      if (_0x53ef3b[_0x4dc089(1711)] === _0x4dc089(1855))
        _0x4df93b--, _0x4df93b < 0 && (_0x53ef3b[_0x4dc089(1794)] = ![]);
      else
        _0x53ef3b[_0x4dc089(1711)] === "video" && (_0x274d72--, _0x274d72 < 0 && (_0x53ef3b[_0x4dc089(1794)] = ![]));
    });
    while (_0x4df93b > 0 || _0x274d72 > 0) {
      _0x4df93b > 0 && (_0xa58c5f[_0x3915b1(1868)](_0x3915b1(1855)), _0x4df93b--), _0x274d72 > 0 && (_0xa58c5f[_0x3915b1(1868)](_0x3915b1(1822)), _0x274d72--);
    }
    var _0x511888 = SDPUtils["writeSessionBoilerplate"](_0xa58c5f[_0x3915b1(1020)], _0xa58c5f["_sdpSessionVersion"]++);
    _0xa58c5f["transceivers"][_0x3915b1(839)](function(_0x23465a, _0x1105d6) {
      var _0x1ceea2 = _0x3915b1, _0x57bd4d = _0x23465a[_0x1ceea2(451)], _0x1eeef2 = _0x23465a[_0x1ceea2(1711)], _0x25281f = _0x23465a[_0x1ceea2(1530)] || SDPUtils[_0x1ceea2(1209)]();
      _0x23465a["mid"] = _0x25281f;
      !_0x23465a[_0x1ceea2(768)] && (_0x23465a[_0x1ceea2(768)] = _0xa58c5f[_0x1ceea2(764)](_0x1105d6, _0xa58c5f[_0x1ceea2(1067)]));
      var _0x4eb519 = _0x146e6e["RTCRtpSender"][_0x1ceea2(1583)](_0x1eeef2);
      _0x40acac < 15019 && (_0x4eb519[_0x1ceea2(1144)] = _0x4eb519[_0x1ceea2(1144)][_0x1ceea2(805)](function(_0x156304) {
        var _0x205f45 = _0x1ceea2;
        return _0x156304[_0x205f45(765)] !== _0x205f45(2127);
      }));
      _0x4eb519[_0x1ceea2(1144)][_0x1ceea2(839)](function(_0xa43f9f) {
        var _0x1f3369 = _0x1ceea2;
        _0xa43f9f["name"] === _0x1f3369(1488) && _0xa43f9f[_0x1f3369(1678)][_0x1f3369(1910)] === void 0 && (_0xa43f9f[_0x1f3369(1678)][_0x1f3369(1910)] = "1"), _0x23465a[_0x1f3369(1334)] && _0x23465a[_0x1f3369(1334)][_0x1f3369(1144)] && _0x23465a[_0x1f3369(1334)][_0x1f3369(1144)][_0x1f3369(839)](function(_0x4db9d3) {
          var _0x23a00c = _0x1f3369;
          _0xa43f9f[_0x23a00c(765)][_0x23a00c(433)]() === _0x4db9d3[_0x23a00c(765)]["toLowerCase"]() && _0xa43f9f[_0x23a00c(2206)] === _0x4db9d3["clockRate"] && (_0xa43f9f[_0x23a00c(1689)] = _0x4db9d3[_0x23a00c(1371)]);
        });
      }), _0x4eb519["headerExtensions"]["forEach"](function(_0x571e89) {
        var _0x148697 = _0x1ceea2, _0x462b17 = _0x23465a[_0x148697(1334)] && _0x23465a[_0x148697(1334)]["headerExtensions"] || [];
        _0x462b17["forEach"](function(_0xe77802) {
          var _0x1f3e07 = _0x148697;
          _0x571e89[_0x1f3e07(362)] === _0xe77802[_0x1f3e07(362)] && (_0x571e89["id"] = _0xe77802["id"]);
        });
      });
      var _0x54360b = _0x23465a["sendEncodingParameters"] || [{ "ssrc": (2 * _0x1105d6 + 1) * 1001 }];
      _0x57bd4d && (_0x40acac >= 15019 && _0x1eeef2 === _0x1ceea2(1822) && !_0x54360b[0][_0x1ceea2(2127)] && (_0x54360b[0][_0x1ceea2(2127)] = { "ssrc": _0x54360b[0][_0x1ceea2(1159)] + 1 })), _0x23465a[_0x1ceea2(1794)] && (_0x23465a["rtpReceiver"] = new _0x146e6e[_0x1ceea2(840)](_0x23465a["dtlsTransport"], _0x1eeef2)), _0x23465a[_0x1ceea2(832)] = _0x4eb519, _0x23465a[_0x1ceea2(1907)] = _0x54360b;
    });
    _0xa58c5f[_0x3915b1(2174)][_0x3915b1(1830)] !== _0x3915b1(1297) && (_0x511888 += _0x3915b1(673) + _0xa58c5f[_0x3915b1(1370)][_0x3915b1(376)](function(_0x2aa8e9) {
      var _0x15d60f = _0x3915b1;
      return _0x2aa8e9[_0x15d60f(1530)];
    })[_0x3915b1(2180)](" ") + "\r\n");
    _0x511888 += _0x3915b1(2087), _0xa58c5f[_0x3915b1(1370)][_0x3915b1(839)](function(_0x3f3843, _0x3d18b5) {
      var _0x1541e2 = _0x3915b1;
      _0x511888 += writeMediaSection(_0x3f3843, _0x3f3843["localCapabilities"], _0x1541e2(1799), _0x3f3843[_0x1541e2(1637)], _0xa58c5f[_0x1541e2(716)]), _0x511888 += _0x1541e2(2114), _0x3f3843[_0x1541e2(768)] && _0xa58c5f[_0x1541e2(1660)] !== _0x1541e2(367) && (_0x3d18b5 === 0 || !_0xa58c5f[_0x1541e2(1067)]) && (_0x3f3843[_0x1541e2(768)]["getLocalCandidates"]()["forEach"](function(_0x5324ab) {
        _0x5324ab["component"] = 1, _0x511888 += "a=" + SDPUtils["writeCandidate"](_0x5324ab) + "\r\n";
      }), _0x3f3843[_0x1541e2(768)]["state"] === _0x1541e2(2118) && (_0x511888 += "a=end-of-candidates\r\n"));
    });
    var _0x293a09 = new _0x146e6e[_0x3915b1(1118)]({ "type": "offer", "sdp": _0x511888 });
    return Promise["resolve"](_0x293a09);
  }, _0x287c13[_0x123cde(1897)][_0x123cde(1746)] = function() {
    var _0x463e6f = _0x123cde, _0x4ec6e3 = this;
    if (_0x4ec6e3[_0x463e6f(481)])
      return Promise["reject"](makeError(_0x463e6f(1027), _0x463e6f(1655)));
    if (!(_0x4ec6e3[_0x463e6f(1327)] === "have-remote-offer" || _0x4ec6e3["signalingState"] === _0x463e6f(1676)))
      return Promise[_0x463e6f(1646)](makeError(_0x463e6f(1027), _0x463e6f(584) + _0x4ec6e3[_0x463e6f(1327)]));
    var _0x3e088f = SDPUtils["writeSessionBoilerplate"](_0x4ec6e3[_0x463e6f(1020)], _0x4ec6e3[_0x463e6f(1443)]++);
    _0x4ec6e3["usingBundle"] && (_0x3e088f += "a=group:BUNDLE " + _0x4ec6e3[_0x463e6f(1370)][_0x463e6f(376)](function(_0x22af39) {
      return _0x22af39["mid"];
    })[_0x463e6f(2180)](" ") + "\r\n");
    _0x3e088f += "a=ice-options:trickle\r\n";
    var _0x43f264 = SDPUtils[_0x463e6f(551)](_0x4ec6e3[_0x463e6f(1182)][_0x463e6f(2016)])["length"];
    _0x4ec6e3[_0x463e6f(1370)][_0x463e6f(839)](function(_0x42f0b3, _0x189591) {
      var _0x10992e = _0x463e6f;
      if (_0x189591 + 1 > _0x43f264)
        return;
      if (_0x42f0b3[_0x10992e(1579)]) {
        if (_0x42f0b3[_0x10992e(1711)] === _0x10992e(1670))
          _0x42f0b3[_0x10992e(1643)] === _0x10992e(1136) ? _0x3e088f += "m=application 0 DTLS/SCTP 5000\r\n" : _0x3e088f += _0x10992e(1527) + _0x42f0b3["protocol"] + _0x10992e(1171);
        else {
          if (_0x42f0b3[_0x10992e(1711)] === _0x10992e(1855))
            _0x3e088f += _0x10992e(1627) + _0x10992e(478);
          else
            _0x42f0b3[_0x10992e(1711)] === _0x10992e(1822) && (_0x3e088f += _0x10992e(1257) + "a=rtpmap:120 VP8/90000\r\n");
        }
        _0x3e088f += "c=IN IP4 0.0.0.0\r\n" + _0x10992e(1851) + _0x10992e(1523) + _0x42f0b3[_0x10992e(1530)] + "\r\n";
        return;
      }
      if (_0x42f0b3[_0x10992e(1637)]) {
        var _0x4f2cff;
        if (_0x42f0b3["kind"] === _0x10992e(1855))
          _0x4f2cff = _0x42f0b3["stream"][_0x10992e(537)]()[0];
        else
          _0x42f0b3[_0x10992e(1711)] === _0x10992e(1822) && (_0x4f2cff = _0x42f0b3[_0x10992e(1637)][_0x10992e(577)]()[0]);
        _0x4f2cff && (_0x40acac >= 15019 && _0x42f0b3["kind"] === _0x10992e(1822) && !_0x42f0b3["sendEncodingParameters"][0][_0x10992e(2127)] && (_0x42f0b3[_0x10992e(1907)][0][_0x10992e(2127)] = { "ssrc": _0x42f0b3[_0x10992e(1907)][0]["ssrc"] + 1 }));
      }
      var _0x3f46a4 = getCommonCapabilities(_0x42f0b3[_0x10992e(832)], _0x42f0b3[_0x10992e(1334)]), _0x2ae046 = _0x3f46a4["codecs"]["filter"](function(_0x4b4232) {
        var _0x21484a = _0x10992e;
        return _0x4b4232["name"][_0x21484a(433)]() === _0x21484a(2127);
      })[_0x10992e(1965)];
      !_0x2ae046 && _0x42f0b3[_0x10992e(1907)][0][_0x10992e(2127)] && delete _0x42f0b3[_0x10992e(1907)][0]["rtx"], _0x3e088f += writeMediaSection(_0x42f0b3, _0x3f46a4, _0x10992e(1449), _0x42f0b3[_0x10992e(1637)], _0x4ec6e3[_0x10992e(716)]), _0x42f0b3[_0x10992e(991)] && _0x42f0b3[_0x10992e(991)][_0x10992e(1774)] && (_0x3e088f += "a=rtcp-rsize\r\n");
    });
    var _0x271b01 = new _0x146e6e[_0x463e6f(1118)]({ "type": _0x463e6f(1449), "sdp": _0x3e088f });
    return Promise[_0x463e6f(1211)](_0x271b01);
  }, _0x287c13[_0x123cde(1897)][_0x123cde(1820)] = function(_0x387c66) {
    var _0x46a50e = _0x123cde, _0x4f6da8 = this, _0x2c615f;
    if (_0x387c66 && !(_0x387c66[_0x46a50e(864)] !== void 0 || _0x387c66["sdpMid"]))
      return Promise[_0x46a50e(1646)](new TypeError("sdpMLineIndex or sdpMid required"));
    return new Promise(function(_0x480309, _0x55f5ba) {
      var _0x34cced = _0x46a50e;
      if (!_0x4f6da8[_0x34cced(1182)])
        return _0x55f5ba(makeError(_0x34cced(1027), _0x34cced(856)));
      else {
        if (!_0x387c66 || _0x387c66["candidate"] === "")
          for (var _0x120f63 = 0; _0x120f63 < _0x4f6da8["transceivers"][_0x34cced(1965)]; _0x120f63++) {
            if (_0x4f6da8[_0x34cced(1370)][_0x120f63][_0x34cced(1579)])
              continue;
            _0x4f6da8[_0x34cced(1370)][_0x120f63][_0x34cced(1631)]["addRemoteCandidate"]({}), _0x2c615f = SDPUtils[_0x34cced(551)](_0x4f6da8[_0x34cced(1182)][_0x34cced(2016)]), _0x2c615f[_0x120f63] += _0x34cced(1051), _0x4f6da8[_0x34cced(1182)]["sdp"] = SDPUtils[_0x34cced(926)](_0x4f6da8[_0x34cced(1182)][_0x34cced(2016)]) + _0x2c615f[_0x34cced(2180)]("");
            if (_0x4f6da8[_0x34cced(1067)])
              break;
          }
        else {
          var _0x262982 = _0x387c66[_0x34cced(864)];
          if (_0x387c66[_0x34cced(382)])
            for (var _0x581d6d = 0; _0x581d6d < _0x4f6da8[_0x34cced(1370)][_0x34cced(1965)]; _0x581d6d++) {
              if (_0x4f6da8[_0x34cced(1370)][_0x581d6d][_0x34cced(1530)] === _0x387c66[_0x34cced(382)]) {
                _0x262982 = _0x581d6d;
                break;
              }
            }
          var _0x905e1e = _0x4f6da8[_0x34cced(1370)][_0x262982];
          if (_0x905e1e) {
            if (_0x905e1e[_0x34cced(1579)])
              return _0x480309();
            var _0xad418e = Object[_0x34cced(605)](_0x387c66[_0x34cced(696)])[_0x34cced(1965)] > 0 ? SDPUtils[_0x34cced(1619)](_0x387c66[_0x34cced(696)]) : {};
            if (_0xad418e[_0x34cced(1643)] === _0x34cced(2186) && (_0xad418e["port"] === 0 || _0xad418e[_0x34cced(2071)] === 9))
              return _0x480309();
            if (_0xad418e["component"] && _0xad418e[_0x34cced(352)] !== 1)
              return _0x480309();
            if (_0x262982 === 0 || _0x262982 > 0 && _0x905e1e[_0x34cced(1631)] !== _0x4f6da8[_0x34cced(1370)][0][_0x34cced(1631)]) {
              if (!maybeAddCandidate(_0x905e1e[_0x34cced(1631)], _0xad418e))
                return _0x55f5ba(makeError(_0x34cced(906), "Can not add ICE candidate"));
            }
            var _0x382fa3 = _0x387c66["candidate"][_0x34cced(1890)]();
            _0x382fa3[_0x34cced(1879)]("a=") === 0 && (_0x382fa3 = _0x382fa3[_0x34cced(398)](2)), _0x2c615f = SDPUtils[_0x34cced(551)](_0x4f6da8["_remoteDescription"][_0x34cced(2016)]), _0x2c615f[_0x262982] += "a=" + (_0xad418e["type"] ? _0x382fa3 : _0x34cced(697)) + "\r\n", _0x4f6da8["_remoteDescription"][_0x34cced(2016)] = SDPUtils["getDescription"](_0x4f6da8[_0x34cced(1182)][_0x34cced(2016)]) + _0x2c615f[_0x34cced(2180)]("");
          } else
            return _0x55f5ba(makeError(_0x34cced(906), "Can not add ICE candidate"));
        }
      }
      _0x480309();
    });
  }, _0x287c13[_0x123cde(1897)][_0x123cde(1350)] = function(_0x4f930f) {
    var _0xd50e7f = _0x123cde;
    if (_0x4f930f && _0x4f930f instanceof _0x146e6e["MediaStreamTrack"]) {
      var _0x1c2c65 = null;
      this[_0xd50e7f(1370)]["forEach"](function(_0x33a65c) {
        var _0x4e2e55 = _0xd50e7f;
        if (_0x33a65c[_0x4e2e55(1531)] && _0x33a65c[_0x4e2e55(1531)]["track"] === _0x4f930f)
          _0x1c2c65 = _0x33a65c[_0x4e2e55(1531)];
        else
          _0x33a65c["rtpReceiver"] && _0x33a65c["rtpReceiver"][_0x4e2e55(451)] === _0x4f930f && (_0x1c2c65 = _0x33a65c[_0x4e2e55(676)]);
      });
      if (!_0x1c2c65)
        throw makeError(_0xd50e7f(1551), _0xd50e7f(2133));
      return _0x1c2c65[_0xd50e7f(1350)]();
    }
    var _0x49541d = [];
    return this[_0xd50e7f(1370)]["forEach"](function(_0x3a03a9) {
      var _0x57ce33 = _0xd50e7f;
      [_0x57ce33(1531), _0x57ce33(676), "iceGatherer", "iceTransport", _0x57ce33(799)]["forEach"](function(_0x2cfc4e) {
        var _0x3e7924 = _0x57ce33;
        _0x3a03a9[_0x2cfc4e] && _0x49541d[_0x3e7924(1991)](_0x3a03a9[_0x2cfc4e]["getStats"]());
      });
    }), Promise["all"](_0x49541d)[_0xd50e7f(1902)](function(_0x42bd22) {
      var _0x21f281 = _0xd50e7f, _0x537afa = /* @__PURE__ */ new Map();
      return _0x42bd22[_0x21f281(839)](function(_0x3db9fb) {
        _0x3db9fb["forEach"](function(_0x23e050) {
          var _0x41fc42 = _0x3001;
          _0x537afa[_0x41fc42(2080)](_0x23e050["id"], _0x23e050);
        });
      }), _0x537afa;
    });
  };
  var _0x368547 = [_0x123cde(930), _0x123cde(840), _0x123cde(596), _0x123cde(966), _0x123cde(1157)];
  _0x368547[_0x123cde(839)](function(_0x33a4e9) {
    var _0x4ae921 = _0x123cde, _0x5aab65 = _0x146e6e[_0x33a4e9];
    if (_0x5aab65 && _0x5aab65[_0x4ae921(1897)] && _0x5aab65[_0x4ae921(1897)]["getStats"]) {
      var _0x2056ed = _0x5aab65[_0x4ae921(1897)][_0x4ae921(1350)];
      _0x5aab65[_0x4ae921(1897)][_0x4ae921(1350)] = function() {
        var _0xa816f7 = _0x4ae921;
        return _0x2056ed[_0xa816f7(2150)](this)["then"](function(_0x17b285) {
          var _0x28d6fc = /* @__PURE__ */ new Map();
          return Object["keys"](_0x17b285)["forEach"](function(_0x260bb7) {
            var _0x3ff3d7 = _0x3001;
            _0x17b285[_0x260bb7][_0x3ff3d7(1514)] = fixStatsType(_0x17b285[_0x260bb7]), _0x28d6fc[_0x3ff3d7(2080)](_0x260bb7, _0x17b285[_0x260bb7]);
          }), _0x28d6fc;
        });
      };
    }
  });
  var _0x65a22c = ["createOffer", "createAnswer"];
  return _0x65a22c[_0x123cde(839)](function(_0x26bcfb) {
    var _0x3e8bb8 = _0x123cde, _0x342191 = _0x287c13[_0x3e8bb8(1897)][_0x26bcfb];
    _0x287c13[_0x3e8bb8(1897)][_0x26bcfb] = function() {
      var _0x4c0d01 = _0x3e8bb8, _0x4eb411 = arguments;
      if (typeof _0x4eb411[0] === _0x4c0d01(389) || typeof _0x4eb411[1] === _0x4c0d01(389))
        return _0x342191[_0x4c0d01(2150)](this, [arguments[2]])[_0x4c0d01(1902)](function(_0x3580e3) {
          var _0x2f2332 = _0x4c0d01;
          typeof _0x4eb411[0] === _0x2f2332(389) && _0x4eb411[0][_0x2f2332(2150)](null, [_0x3580e3]);
        }, function(_0x3f679b) {
          var _0xa4c0a7 = _0x4c0d01;
          typeof _0x4eb411[1] === _0xa4c0a7(389) && _0x4eb411[1]["apply"](null, [_0x3f679b]);
        });
      return _0x342191[_0x4c0d01(2150)](this, arguments);
    };
  }), _0x65a22c = [_0x123cde(1392), _0x123cde(2140), "addIceCandidate"], _0x65a22c["forEach"](function(_0x29eed3) {
    var _0x75855d = _0x123cde, _0x2a8b8a = _0x287c13[_0x75855d(1897)][_0x29eed3];
    _0x287c13[_0x75855d(1897)][_0x29eed3] = function() {
      var _0x3a8b56 = _0x75855d, _0x70980a = arguments;
      if (typeof _0x70980a[1] === _0x3a8b56(389) || typeof _0x70980a[2] === "function")
        return _0x2a8b8a[_0x3a8b56(2150)](this, arguments)[_0x3a8b56(1902)](function() {
          var _0x3b01de = _0x3a8b56;
          typeof _0x70980a[1] === _0x3b01de(389) && _0x70980a[1][_0x3b01de(2150)](null);
        }, function(_0x337385) {
          var _0x256e7b = _0x3a8b56;
          typeof _0x70980a[2] === _0x256e7b(389) && _0x70980a[2][_0x256e7b(2150)](null, [_0x337385]);
        });
      return _0x2a8b8a[_0x3a8b56(2150)](this, arguments);
    };
  }), ["getStats"][_0x123cde(839)](function(_0x144b7d) {
    var _0x2cc96b = _0x287c13["prototype"][_0x144b7d];
    _0x287c13["prototype"][_0x144b7d] = function() {
      var _0x49279c = _0x3001, _0x2504b8 = arguments;
      if (typeof _0x2504b8[1] === _0x49279c(389))
        return _0x2cc96b[_0x49279c(2150)](this, arguments)[_0x49279c(1902)](function() {
          var _0x2a93f3 = _0x49279c;
          typeof _0x2504b8[1] === _0x2a93f3(389) && _0x2504b8[1][_0x2a93f3(2150)](null);
        });
      return _0x2cc96b["apply"](this, arguments);
    };
  }), _0x287c13;
};
function shimGetUserMedia$2(_0x5e6037) {
  var _0x23115e = _0x780a7e;
  const _0xa9bd58 = _0x5e6037 && _0x5e6037[_0x23115e(810)], _0x3eefb7 = function(_0x4bfbf2) {
    var _0x14584c = _0x23115e;
    return { "name": { "PermissionDeniedError": "NotAllowedError" }[_0x4bfbf2[_0x14584c(765)]] || _0x4bfbf2[_0x14584c(765)], "message": _0x4bfbf2[_0x14584c(510)], "constraint": _0x4bfbf2[_0x14584c(1656)], "toString"() {
      var _0x1520b3 = _0x14584c;
      return this[_0x1520b3(765)];
    } };
  }, _0x4e3e3d = _0xa9bd58[_0x23115e(1057)]["getUserMedia"]["bind"](_0xa9bd58[_0x23115e(1057)]);
  _0xa9bd58[_0x23115e(1057)][_0x23115e(1645)] = function(_0x931a70) {
    var _0x11b906 = _0x23115e;
    return _0x4e3e3d(_0x931a70)[_0x11b906(1517)]((_0x6d6939) => Promise[_0x11b906(1646)](_0x3eefb7(_0x6d6939)));
  };
}
function shimGetDisplayMedia$1(_0x1ae6ee) {
  var _0x2c2b1b = _0x780a7e;
  if (!("getDisplayMedia" in _0x1ae6ee["navigator"]))
    return;
  if (!_0x1ae6ee["navigator"][_0x2c2b1b(1057)])
    return;
  if (_0x1ae6ee[_0x2c2b1b(810)][_0x2c2b1b(1057)] && _0x2c2b1b(1827) in _0x1ae6ee[_0x2c2b1b(810)][_0x2c2b1b(1057)])
    return;
  _0x1ae6ee[_0x2c2b1b(810)][_0x2c2b1b(1057)][_0x2c2b1b(1827)] = _0x1ae6ee[_0x2c2b1b(810)][_0x2c2b1b(1827)][_0x2c2b1b(517)](_0x1ae6ee["navigator"]);
}
function shimPeerConnection$1(_0x3230d6, _0x56a839) {
  var _0x553965 = _0x780a7e;
  if (_0x3230d6["RTCIceGatherer"]) {
    !_0x3230d6["RTCIceCandidate"] && (_0x3230d6["RTCIceCandidate"] = function _0x169c13(_0x486e70) {
      return _0x486e70;
    });
    !_0x3230d6[_0x553965(1118)] && (_0x3230d6["RTCSessionDescription"] = function _0x23400b(_0x2935ac) {
      return _0x2935ac;
    });
    if (_0x56a839["version"] < 15025) {
      const _0x41a350 = Object[_0x553965(1954)](_0x3230d6[_0x553965(709)][_0x553965(1897)], _0x553965(904));
      Object[_0x553965(1564)](_0x3230d6[_0x553965(709)][_0x553965(1897)], "enabled", { "set"(_0x3f8279) {
        var _0x1396a1 = _0x553965;
        _0x41a350[_0x1396a1(2080)][_0x1396a1(1206)](this, _0x3f8279);
        const _0x243064 = new Event(_0x1396a1(904));
        _0x243064[_0x1396a1(904)] = _0x3f8279, this[_0x1396a1(1152)](_0x243064);
      } });
    }
  }
  _0x3230d6["RTCRtpSender"] && !(_0x553965(482) in _0x3230d6[_0x553965(930)][_0x553965(1897)]) && Object[_0x553965(1564)](_0x3230d6[_0x553965(930)][_0x553965(1897)], _0x553965(482), { "get"() {
    var _0x11c513 = _0x553965;
    if (this[_0x11c513(550)] === void 0) {
      if (this["track"]["kind"] === _0x11c513(1855))
        this[_0x11c513(550)] = new _0x3230d6[_0x11c513(2131)](this);
      else
        this[_0x11c513(451)][_0x11c513(1711)] === _0x11c513(1822) && (this["_dtmf"] = null);
    }
    return this[_0x11c513(550)];
  } });
  _0x3230d6[_0x553965(2131)] && !_0x3230d6["RTCDTMFSender"] && (_0x3230d6[_0x553965(679)] = _0x3230d6[_0x553965(2131)]);
  const _0x36fa0f = rtcpeerconnection(_0x3230d6, _0x56a839[_0x553965(436)]);
  _0x3230d6[_0x553965(1848)] = function _0x160fee(_0x1373c8) {
    var _0x5e623b = _0x553965;
    return _0x1373c8 && _0x1373c8[_0x5e623b(735)] && (_0x1373c8[_0x5e623b(735)] = filterIceServers$1(_0x1373c8[_0x5e623b(735)], _0x56a839[_0x5e623b(436)]), log(_0x5e623b(793), _0x1373c8[_0x5e623b(735)])), new _0x36fa0f(_0x1373c8);
  }, _0x3230d6[_0x553965(1848)][_0x553965(1897)] = _0x36fa0f[_0x553965(1897)];
}
function shimReplaceTrack(_0x170688) {
  var _0x574fcd = _0x780a7e;
  _0x170688[_0x574fcd(930)] && !(_0x574fcd(1705) in _0x170688[_0x574fcd(930)][_0x574fcd(1897)]) && (_0x170688[_0x574fcd(930)][_0x574fcd(1897)][_0x574fcd(1705)] = _0x170688[_0x574fcd(930)][_0x574fcd(1897)][_0x574fcd(1801)]);
}
const edgeShim = Object[_0x780a7e(1623)](Object[_0x780a7e(1564)]({ "__proto__": null, "shimPeerConnection": shimPeerConnection$1, "shimReplaceTrack": shimReplaceTrack, "shimGetUserMedia": shimGetUserMedia$2, "shimGetDisplayMedia": shimGetDisplayMedia$1 }, Symbol[_0x780a7e(844)], { "value": _0x780a7e(1513) }));
function shimGetUserMedia$1(_0x6a3eae, _0x59cfe9) {
  var _0x2f8aac = _0x780a7e;
  const _0x805da2 = _0x6a3eae && _0x6a3eae[_0x2f8aac(810)], _0x45b540 = _0x6a3eae && _0x6a3eae[_0x2f8aac(709)];
  _0x805da2[_0x2f8aac(1645)] = function(_0x34f705, _0x43d090, _0x2fa0d3) {
    var _0x3c8dae = _0x2f8aac;
    deprecated(_0x3c8dae(898), "navigator.mediaDevices.getUserMedia"), _0x805da2[_0x3c8dae(1057)]["getUserMedia"](_0x34f705)[_0x3c8dae(1902)](_0x43d090, _0x2fa0d3);
  };
  if (!(_0x59cfe9[_0x2f8aac(436)] > 55 && _0x2f8aac(1418) in _0x805da2[_0x2f8aac(1057)][_0x2f8aac(1186)]())) {
    const _0xd1d299 = function(_0x62b800, _0x150e35, _0x1f8b32) {
      _0x150e35 in _0x62b800 && !(_0x1f8b32 in _0x62b800) && (_0x62b800[_0x1f8b32] = _0x62b800[_0x150e35], delete _0x62b800[_0x150e35]);
    }, _0xa32ed2 = _0x805da2[_0x2f8aac(1057)][_0x2f8aac(1645)][_0x2f8aac(517)](_0x805da2["mediaDevices"]);
    _0x805da2[_0x2f8aac(1057)][_0x2f8aac(1645)] = function(_0x4eae8a) {
      var _0x535417 = _0x2f8aac;
      return typeof _0x4eae8a === _0x535417(1723) && typeof _0x4eae8a["audio"] === _0x535417(1723) && (_0x4eae8a = JSON["parse"](JSON["stringify"](_0x4eae8a)), _0xd1d299(_0x4eae8a[_0x535417(1855)], _0x535417(1418), _0x535417(820)), _0xd1d299(_0x4eae8a[_0x535417(1855)], "noiseSuppression", _0x535417(1414))), _0xa32ed2(_0x4eae8a);
    };
    if (_0x45b540 && _0x45b540["prototype"][_0x2f8aac(814)]) {
      const _0xc4b927 = _0x45b540[_0x2f8aac(1897)]["getSettings"];
      _0x45b540[_0x2f8aac(1897)][_0x2f8aac(814)] = function() {
        var _0x4228ee = _0x2f8aac;
        const _0x7f715 = _0xc4b927[_0x4228ee(2150)](this, arguments);
        return _0xd1d299(_0x7f715, _0x4228ee(820), _0x4228ee(1418)), _0xd1d299(_0x7f715, _0x4228ee(1414), _0x4228ee(1399)), _0x7f715;
      };
    }
    if (_0x45b540 && _0x45b540[_0x2f8aac(1897)][_0x2f8aac(734)]) {
      const _0x59f2fb = _0x45b540[_0x2f8aac(1897)][_0x2f8aac(734)];
      _0x45b540[_0x2f8aac(1897)][_0x2f8aac(734)] = function(_0x5145b1) {
        var _0x44cc40 = _0x2f8aac;
        return this["kind"] === _0x44cc40(1855) && typeof _0x5145b1 === "object" && (_0x5145b1 = JSON["parse"](JSON["stringify"](_0x5145b1)), _0xd1d299(_0x5145b1, _0x44cc40(1418), _0x44cc40(820)), _0xd1d299(_0x5145b1, _0x44cc40(1399), _0x44cc40(1414))), _0x59f2fb[_0x44cc40(2150)](this, [_0x5145b1]);
      };
    }
  }
}
function shimGetDisplayMedia(_0x2cde16, _0x13e872) {
  var _0x1c9371 = _0x780a7e;
  if (_0x2cde16["navigator"][_0x1c9371(1057)] && "getDisplayMedia" in _0x2cde16["navigator"][_0x1c9371(1057)])
    return;
  if (!_0x2cde16[_0x1c9371(810)][_0x1c9371(1057)])
    return;
  _0x2cde16["navigator"][_0x1c9371(1057)][_0x1c9371(1827)] = function _0x5a3d3b(_0x23c5ed) {
    var _0xcfbd9e = _0x1c9371;
    if (!(_0x23c5ed && _0x23c5ed[_0xcfbd9e(1822)])) {
      const _0x141af0 = new DOMException(_0xcfbd9e(538) + _0xcfbd9e(1995));
      return _0x141af0["name"] = _0xcfbd9e(1060), _0x141af0[_0xcfbd9e(1704)] = 8, Promise[_0xcfbd9e(1646)](_0x141af0);
    }
    return _0x23c5ed["video"] === !![] ? _0x23c5ed[_0xcfbd9e(1822)] = { "mediaSource": _0x13e872 } : _0x23c5ed["video"][_0xcfbd9e(2098)] = _0x13e872, _0x2cde16[_0xcfbd9e(810)][_0xcfbd9e(1057)][_0xcfbd9e(1645)](_0x23c5ed);
  };
}
function shimOnTrack(_0x149309) {
  var _0x24afa7 = _0x780a7e;
  typeof _0x149309 === _0x24afa7(1723) && _0x149309[_0x24afa7(1911)] && _0x24afa7(509) in _0x149309["RTCTrackEvent"][_0x24afa7(1897)] && !(_0x24afa7(456) in _0x149309[_0x24afa7(1911)]["prototype"]) && Object[_0x24afa7(1564)](_0x149309[_0x24afa7(1911)][_0x24afa7(1897)], _0x24afa7(456), { "get"() {
    var _0x382aa5 = _0x24afa7;
    return { "receiver": this[_0x382aa5(509)] };
  } });
}
function shimPeerConnection(_0x2be2ec, _0x119c01) {
  var _0x51c027 = _0x780a7e;
  if (typeof _0x2be2ec !== _0x51c027(1723) || !(_0x2be2ec[_0x51c027(1848)] || _0x2be2ec["mozRTCPeerConnection"]))
    return;
  !_0x2be2ec[_0x51c027(1848)] && _0x2be2ec[_0x51c027(1250)] && (_0x2be2ec[_0x51c027(1848)] = _0x2be2ec[_0x51c027(1250)]);
  _0x119c01["version"] < 53 && ["setLocalDescription", _0x51c027(2140), _0x51c027(1820)][_0x51c027(839)](function(_0x29a48a) {
    var _0x2c3ca7 = _0x51c027;
    const _0x346b3c = _0x2be2ec[_0x2c3ca7(1848)][_0x2c3ca7(1897)][_0x29a48a], _0x442715 = { [_0x29a48a]() {
      var _0x55d9ba = _0x2c3ca7;
      return arguments[0] = new (_0x29a48a === _0x55d9ba(1820) ? _0x2be2ec[_0x55d9ba(1328)] : _0x2be2ec["RTCSessionDescription"])(arguments[0]), _0x346b3c[_0x55d9ba(2150)](this, arguments);
    } };
    _0x2be2ec[_0x2c3ca7(1848)][_0x2c3ca7(1897)][_0x29a48a] = _0x442715[_0x29a48a];
  });
  const _0x3dad9c = { "inboundrtp": _0x51c027(1634), "outboundrtp": _0x51c027(1276), "candidatepair": "candidate-pair", "localcandidate": "local-candidate", "remotecandidate": _0x51c027(2044) }, _0x46beb0 = _0x2be2ec[_0x51c027(1848)]["prototype"][_0x51c027(1350)];
  _0x2be2ec[_0x51c027(1848)][_0x51c027(1897)][_0x51c027(1350)] = function _0x1e41db() {
    var _0x36719b = _0x51c027;
    const [_0x232768, _0x3b65cb, _0x3959ab] = arguments;
    return _0x46beb0["apply"](this, [_0x232768 || null])[_0x36719b(1902)]((_0x9cff96) => {
      var _0x343b1a = _0x36719b;
      if (_0x119c01[_0x343b1a(436)] < 53 && !_0x3b65cb)
        try {
          _0x9cff96[_0x343b1a(839)]((_0x4b931f) => {
            var _0xce6c7d = _0x343b1a;
            _0x4b931f[_0xce6c7d(1514)] = _0x3dad9c[_0x4b931f[_0xce6c7d(1514)]] || _0x4b931f[_0xce6c7d(1514)];
          });
        } catch (_0x21dd52) {
          if (_0x21dd52[_0x343b1a(765)] !== _0x343b1a(1786))
            throw _0x21dd52;
          _0x9cff96[_0x343b1a(839)]((_0xc6ba79, _0x416f86) => {
            var _0x48dcb0 = _0x343b1a;
            _0x9cff96[_0x48dcb0(2080)](_0x416f86, Object["assign"]({}, _0xc6ba79, { "type": _0x3dad9c[_0xc6ba79[_0x48dcb0(1514)]] || _0xc6ba79[_0x48dcb0(1514)] }));
          });
        }
      return _0x9cff96;
    })["then"](_0x3b65cb, _0x3959ab);
  };
}
function shimSenderGetStats(_0x4cbe8f) {
  var _0x489b1d = _0x780a7e;
  if (!(typeof _0x4cbe8f === _0x489b1d(1723) && _0x4cbe8f[_0x489b1d(1848)] && _0x4cbe8f[_0x489b1d(930)]))
    return;
  if (_0x4cbe8f[_0x489b1d(930)] && _0x489b1d(1350) in _0x4cbe8f["RTCRtpSender"][_0x489b1d(1897)])
    return;
  const _0x1b5233 = _0x4cbe8f[_0x489b1d(1848)]["prototype"][_0x489b1d(1033)];
  _0x1b5233 && (_0x4cbe8f[_0x489b1d(1848)][_0x489b1d(1897)][_0x489b1d(1033)] = function _0x391797() {
    var _0x237f49 = _0x489b1d;
    const _0xf87d1b = _0x1b5233[_0x237f49(2150)](this, []);
    return _0xf87d1b[_0x237f49(839)]((_0x1d3d88) => _0x1d3d88[_0x237f49(1824)] = this), _0xf87d1b;
  });
  const _0x32c8a0 = _0x4cbe8f[_0x489b1d(1848)][_0x489b1d(1897)][_0x489b1d(1976)];
  _0x32c8a0 && (_0x4cbe8f[_0x489b1d(1848)][_0x489b1d(1897)][_0x489b1d(1976)] = function _0xd64660() {
    var _0x2eb15a = _0x489b1d;
    const _0x1c6d52 = _0x32c8a0["apply"](this, arguments);
    return _0x1c6d52[_0x2eb15a(1824)] = this, _0x1c6d52;
  }), _0x4cbe8f[_0x489b1d(930)]["prototype"][_0x489b1d(1350)] = function _0x59ae9b() {
    var _0x3c1baf = _0x489b1d;
    return this[_0x3c1baf(451)] ? this[_0x3c1baf(1824)][_0x3c1baf(1350)](this[_0x3c1baf(451)]) : Promise[_0x3c1baf(1211)](/* @__PURE__ */ new Map());
  };
}
function shimReceiverGetStats(_0x593b36) {
  var _0x22a969 = _0x780a7e;
  if (!(typeof _0x593b36 === _0x22a969(1723) && _0x593b36[_0x22a969(1848)] && _0x593b36[_0x22a969(930)]))
    return;
  if (_0x593b36[_0x22a969(930)] && "getStats" in _0x593b36[_0x22a969(840)][_0x22a969(1897)])
    return;
  const _0x39e243 = _0x593b36["RTCPeerConnection"][_0x22a969(1897)][_0x22a969(1006)];
  _0x39e243 && (_0x593b36["RTCPeerConnection"][_0x22a969(1897)][_0x22a969(1006)] = function _0x23b930() {
    var _0x23216a = _0x22a969;
    const _0x240420 = _0x39e243["apply"](this, []);
    return _0x240420[_0x23216a(839)]((_0x213f39) => _0x213f39[_0x23216a(1824)] = this), _0x240420;
  }), wrapPeerConnectionEvent(_0x593b36, _0x22a969(451), (_0x2eee4e) => {
    var _0x3f1f43 = _0x22a969;
    return _0x2eee4e[_0x3f1f43(509)][_0x3f1f43(1824)] = _0x2eee4e["srcElement"], _0x2eee4e;
  }), _0x593b36[_0x22a969(840)]["prototype"][_0x22a969(1350)] = function _0x444363() {
    var _0x1083bd = _0x22a969;
    return this[_0x1083bd(1824)][_0x1083bd(1350)](this[_0x1083bd(451)]);
  };
}
function shimRemoveStream(_0x2b23b6) {
  var _0xc4031c = _0x780a7e;
  if (!_0x2b23b6[_0xc4031c(1848)] || _0xc4031c(2162) in _0x2b23b6["RTCPeerConnection"][_0xc4031c(1897)])
    return;
  _0x2b23b6[_0xc4031c(1848)][_0xc4031c(1897)][_0xc4031c(2162)] = function _0x11d409(_0x55aeda) {
    var _0x4eeca8 = _0xc4031c;
    deprecated(_0x4eeca8(2162), _0x4eeca8(1103)), this[_0x4eeca8(1033)]()["forEach"]((_0x374ea5) => {
      var _0x5e4056 = _0x4eeca8;
      _0x374ea5[_0x5e4056(451)] && _0x55aeda[_0x5e4056(1817)]()[_0x5e4056(589)](_0x374ea5["track"]) && this[_0x5e4056(1103)](_0x374ea5);
    });
  };
}
function shimRTCDataChannel(_0x3b639c) {
  var _0x5abfbe = _0x780a7e;
  _0x3b639c[_0x5abfbe(514)] && !_0x3b639c[_0x5abfbe(1889)] && (_0x3b639c[_0x5abfbe(1889)] = _0x3b639c["DataChannel"]);
}
function shimAddTransceiver(_0x3db98e) {
  var _0x885cc2 = _0x780a7e;
  if (!(typeof _0x3db98e === _0x885cc2(1723) && _0x3db98e[_0x885cc2(1848)]))
    return;
  const _0x5b14e1 = _0x3db98e[_0x885cc2(1848)]["prototype"][_0x885cc2(588)];
  _0x5b14e1 && (_0x3db98e[_0x885cc2(1848)]["prototype"][_0x885cc2(588)] = function _0x18a8da() {
    var _0x3f5edf = _0x885cc2;
    this[_0x3f5edf(1330)] = [];
    const _0x251daf = arguments[1], _0x4c0d30 = _0x251daf && _0x3f5edf(1662) in _0x251daf;
    _0x4c0d30 && _0x251daf[_0x3f5edf(1662)][_0x3f5edf(839)]((_0x51e6ef) => {
      var _0x259bcf = _0x3f5edf;
      if (_0x259bcf(1412) in _0x51e6ef) {
        const _0x59dcd6 = /^[a-z0-9]{0,16}$/i;
        if (!_0x59dcd6[_0x259bcf(1778)](_0x51e6ef[_0x259bcf(1412)]))
          throw new TypeError(_0x259bcf(582));
      }
      if (_0x259bcf(2077) in _0x51e6ef) {
        if (!(parseFloat(_0x51e6ef[_0x259bcf(2077)]) >= 1))
          throw new RangeError(_0x259bcf(1345));
      }
      if ("maxFramerate" in _0x51e6ef) {
        if (!(parseFloat(_0x51e6ef[_0x259bcf(533)]) >= 0))
          throw new RangeError(_0x259bcf(830));
      }
    });
    const _0x3c8a3c = _0x5b14e1[_0x3f5edf(2150)](this, arguments);
    if (_0x4c0d30) {
      const { sender: _0x1d90bf } = _0x3c8a3c, _0x5ebedd = _0x1d90bf[_0x3f5edf(1572)]();
      (!(_0x3f5edf(471) in _0x5ebedd) || _0x5ebedd[_0x3f5edf(471)][_0x3f5edf(1965)] === 1 && Object[_0x3f5edf(605)](_0x5ebedd[_0x3f5edf(471)][0])[_0x3f5edf(1965)] === 0) && (_0x5ebedd[_0x3f5edf(471)] = _0x251daf[_0x3f5edf(1662)], _0x1d90bf[_0x3f5edf(1662)] = _0x251daf["sendEncodings"], this[_0x3f5edf(1330)][_0x3f5edf(1991)](_0x1d90bf[_0x3f5edf(1084)](_0x5ebedd)["then"](() => {
        delete _0x1d90bf["sendEncodings"];
      })["catch"](() => {
        delete _0x1d90bf["sendEncodings"];
      })));
    }
    return _0x3c8a3c;
  });
}
function shimGetParameters(_0x38bfc4) {
  var _0xbe4add = _0x780a7e;
  if (!(typeof _0x38bfc4 === "object" && _0x38bfc4[_0xbe4add(930)]))
    return;
  const _0x711310 = _0x38bfc4["RTCRtpSender"]["prototype"][_0xbe4add(1572)];
  _0x711310 && (_0x38bfc4[_0xbe4add(930)]["prototype"][_0xbe4add(1572)] = function _0xb4d9cb() {
    var _0x29bd18 = _0xbe4add;
    const _0x17ad0e = _0x711310[_0x29bd18(2150)](this, arguments);
    return !(_0x29bd18(471) in _0x17ad0e) && (_0x17ad0e[_0x29bd18(471)] = [][_0x29bd18(2090)](this[_0x29bd18(1662)] || [{}])), _0x17ad0e;
  });
}
function shimCreateOffer(_0x3494a9) {
  var _0x4cf514 = _0x780a7e;
  if (!(typeof _0x3494a9 === "object" && _0x3494a9[_0x4cf514(1848)]))
    return;
  const _0x486881 = _0x3494a9[_0x4cf514(1848)]["prototype"][_0x4cf514(1410)];
  _0x3494a9[_0x4cf514(1848)]["prototype"][_0x4cf514(1410)] = function _0x42487() {
    var _0x5a0fef = _0x4cf514;
    if (this[_0x5a0fef(1330)] && this[_0x5a0fef(1330)][_0x5a0fef(1965)])
      return Promise[_0x5a0fef(405)](this[_0x5a0fef(1330)])[_0x5a0fef(1902)](() => {
        return _0x486881["apply"](this, arguments);
      })["finally"](() => {
        var _0x23bebe = _0x5a0fef;
        this[_0x23bebe(1330)] = [];
      });
    return _0x486881[_0x5a0fef(2150)](this, arguments);
  };
}
function shimCreateAnswer(_0x54b514) {
  var _0x7db63 = _0x780a7e;
  if (!(typeof _0x54b514 === _0x7db63(1723) && _0x54b514[_0x7db63(1848)]))
    return;
  const _0x4a030c = _0x54b514["RTCPeerConnection"][_0x7db63(1897)]["createAnswer"];
  _0x54b514[_0x7db63(1848)][_0x7db63(1897)][_0x7db63(1746)] = function _0x487c33() {
    var _0x8ce7c8 = _0x7db63;
    if (this[_0x8ce7c8(1330)] && this["setParametersPromises"][_0x8ce7c8(1965)])
      return Promise["all"](this["setParametersPromises"])[_0x8ce7c8(1902)](() => {
        var _0x376992 = _0x8ce7c8;
        return _0x4a030c[_0x376992(2150)](this, arguments);
      })["finally"](() => {
        this["setParametersPromises"] = [];
      });
    return _0x4a030c[_0x8ce7c8(2150)](this, arguments);
  };
}
const firefoxShim = Object[_0x780a7e(1623)](Object[_0x780a7e(1564)]({ "__proto__": null, "shimOnTrack": shimOnTrack, "shimPeerConnection": shimPeerConnection, "shimSenderGetStats": shimSenderGetStats, "shimReceiverGetStats": shimReceiverGetStats, "shimRemoveStream": shimRemoveStream, "shimRTCDataChannel": shimRTCDataChannel, "shimAddTransceiver": shimAddTransceiver, "shimGetParameters": shimGetParameters, "shimCreateOffer": shimCreateOffer, "shimCreateAnswer": shimCreateAnswer, "shimGetUserMedia": shimGetUserMedia$1, "shimGetDisplayMedia": shimGetDisplayMedia }, Symbol[_0x780a7e(844)], { "value": "Module" }));
function shimLocalStreamsAPI(_0x5525a7) {
  var _0x55bc27 = _0x780a7e;
  if (typeof _0x5525a7 !== _0x55bc27(1723) || !_0x5525a7[_0x55bc27(1848)])
    return;
  !(_0x55bc27(1980) in _0x5525a7[_0x55bc27(1848)][_0x55bc27(1897)]) && (_0x5525a7[_0x55bc27(1848)][_0x55bc27(1897)][_0x55bc27(1980)] = function _0x55a221() {
    var _0x46f600 = _0x55bc27;
    return !this["_localStreams"] && (this["_localStreams"] = []), this[_0x46f600(1390)];
  });
  if (!("addStream" in _0x5525a7[_0x55bc27(1848)][_0x55bc27(1897)])) {
    const _0xa853fa = _0x5525a7[_0x55bc27(1848)][_0x55bc27(1897)][_0x55bc27(1976)];
    _0x5525a7[_0x55bc27(1848)][_0x55bc27(1897)][_0x55bc27(776)] = function _0x1fe83f(_0x2d8508) {
      var _0x57b252 = _0x55bc27;
      !this[_0x57b252(1390)] && (this[_0x57b252(1390)] = []), !this[_0x57b252(1390)][_0x57b252(589)](_0x2d8508) && this[_0x57b252(1390)][_0x57b252(1991)](_0x2d8508), _0x2d8508["getAudioTracks"]()["forEach"]((_0x31dd81) => _0xa853fa[_0x57b252(1206)](this, _0x31dd81, _0x2d8508)), _0x2d8508[_0x57b252(577)]()["forEach"]((_0x21beed) => _0xa853fa[_0x57b252(1206)](this, _0x21beed, _0x2d8508));
    }, _0x5525a7[_0x55bc27(1848)]["prototype"][_0x55bc27(1976)] = function _0xd7ecf9(_0x5b4d2a, ..._0x194d9f) {
      var _0x40073e = _0x55bc27;
      return _0x194d9f && _0x194d9f[_0x40073e(839)]((_0x17abfd) => {
        var _0x1648f7 = _0x40073e;
        if (!this["_localStreams"])
          this[_0x1648f7(1390)] = [_0x17abfd];
        else
          !this[_0x1648f7(1390)]["includes"](_0x17abfd) && this["_localStreams"][_0x1648f7(1991)](_0x17abfd);
      }), _0xa853fa[_0x40073e(2150)](this, arguments);
    };
  }
  !(_0x55bc27(2162) in _0x5525a7["RTCPeerConnection"][_0x55bc27(1897)]) && (_0x5525a7[_0x55bc27(1848)][_0x55bc27(1897)]["removeStream"] = function _0x15b576(_0xba384e) {
    var _0x2513ba = _0x55bc27;
    !this[_0x2513ba(1390)] && (this[_0x2513ba(1390)] = []);
    const _0x34d975 = this[_0x2513ba(1390)]["indexOf"](_0xba384e);
    if (_0x34d975 === -1)
      return;
    this[_0x2513ba(1390)]["splice"](_0x34d975, 1);
    const _0xe75af = _0xba384e[_0x2513ba(1817)]();
    this[_0x2513ba(1033)]()[_0x2513ba(839)]((_0x4f2912) => {
      var _0x13ca67 = _0x2513ba;
      _0xe75af[_0x13ca67(589)](_0x4f2912[_0x13ca67(451)]) && this[_0x13ca67(1103)](_0x4f2912);
    });
  });
}
function shimRemoteStreamsAPI(_0x55f57a) {
  var _0xad391c = _0x780a7e;
  if (typeof _0x55f57a !== "object" || !_0x55f57a[_0xad391c(1848)])
    return;
  !(_0xad391c(1896) in _0x55f57a[_0xad391c(1848)]["prototype"]) && (_0x55f57a["RTCPeerConnection"][_0xad391c(1897)]["getRemoteStreams"] = function _0x40e3d9() {
    var _0x2cf2ad = _0xad391c;
    return this[_0x2cf2ad(554)] ? this[_0x2cf2ad(554)] : [];
  });
  if (!(_0xad391c(897) in _0x55f57a[_0xad391c(1848)][_0xad391c(1897)])) {
    Object["defineProperty"](_0x55f57a[_0xad391c(1848)][_0xad391c(1897)], _0xad391c(897), { "get"() {
      return this["_onaddstream"];
    }, "set"(_0x56d4a3) {
      var _0x391598 = _0xad391c;
      this[_0x391598(837)] && (this[_0x391598(1283)]("addstream", this[_0x391598(837)]), this[_0x391598(1283)](_0x391598(451), this[_0x391598(410)])), this[_0x391598(2069)]("addstream", this[_0x391598(837)] = _0x56d4a3), this[_0x391598(2069)](_0x391598(451), this["_onaddstreampoly"] = (_0xf3278b) => {
        var _0x59c569 = _0x391598;
        _0xf3278b[_0x59c569(1814)][_0x59c569(839)]((_0x415cb2) => {
          var _0x4c60f1 = _0x59c569;
          !this[_0x4c60f1(554)] && (this[_0x4c60f1(554)] = []);
          if (this[_0x4c60f1(554)]["includes"](_0x415cb2))
            return;
          this["_remoteStreams"]["push"](_0x415cb2);
          const _0x4725e2 = new Event(_0x4c60f1(1475));
          _0x4725e2[_0x4c60f1(1637)] = _0x415cb2, this["dispatchEvent"](_0x4725e2);
        });
      });
    } });
    const _0x3da29d = _0x55f57a[_0xad391c(1848)][_0xad391c(1897)][_0xad391c(2140)];
    _0x55f57a[_0xad391c(1848)][_0xad391c(1897)][_0xad391c(2140)] = function _0x321475() {
      var _0x4a98d5 = _0xad391c;
      const _0x58b2ee = this;
      return !this[_0x4a98d5(410)] && this[_0x4a98d5(2069)](_0x4a98d5(451), this["_onaddstreampoly"] = function(_0x1aad52) {
        var _0x273edc = _0x4a98d5;
        _0x1aad52[_0x273edc(1814)][_0x273edc(839)]((_0x1792df) => {
          var _0x5186ca = _0x273edc;
          !_0x58b2ee["_remoteStreams"] && (_0x58b2ee["_remoteStreams"] = []);
          if (_0x58b2ee[_0x5186ca(554)][_0x5186ca(1879)](_0x1792df) >= 0)
            return;
          _0x58b2ee[_0x5186ca(554)]["push"](_0x1792df);
          const _0xde965b = new Event(_0x5186ca(1475));
          _0xde965b[_0x5186ca(1637)] = _0x1792df, _0x58b2ee[_0x5186ca(1152)](_0xde965b);
        });
      }), _0x3da29d["apply"](_0x58b2ee, arguments);
    };
  }
}
function shimCallbacksAPI(_0x331a3f) {
  var _0x3a4847 = _0x780a7e;
  if (typeof _0x331a3f !== "object" || !_0x331a3f[_0x3a4847(1848)])
    return;
  const _0x4f8cff = _0x331a3f[_0x3a4847(1848)][_0x3a4847(1897)], _0x552fcf = _0x4f8cff["createOffer"], _0x4880ae = _0x4f8cff["createAnswer"], _0x20e30b = _0x4f8cff[_0x3a4847(1392)], _0x238a00 = _0x4f8cff[_0x3a4847(2140)], _0x120e82 = _0x4f8cff[_0x3a4847(1820)];
  _0x4f8cff[_0x3a4847(1410)] = function _0x30836c(_0x10b8bb, _0x86a11a) {
    var _0x3daf0b = _0x3a4847;
    const _0x3ebfa2 = arguments[_0x3daf0b(1965)] >= 2 ? arguments[2] : arguments[0], _0x1e3793 = _0x552fcf[_0x3daf0b(2150)](this, [_0x3ebfa2]);
    if (!_0x86a11a)
      return _0x1e3793;
    return _0x1e3793[_0x3daf0b(1902)](_0x10b8bb, _0x86a11a), Promise[_0x3daf0b(1211)]();
  }, _0x4f8cff["createAnswer"] = function _0x1b704a(_0x286634, _0xfec23) {
    var _0x4d866e = _0x3a4847;
    const _0x3d4033 = arguments[_0x4d866e(1965)] >= 2 ? arguments[2] : arguments[0], _0x30f3e7 = _0x4880ae[_0x4d866e(2150)](this, [_0x3d4033]);
    if (!_0xfec23)
      return _0x30f3e7;
    return _0x30f3e7[_0x4d866e(1902)](_0x286634, _0xfec23), Promise[_0x4d866e(1211)]();
  };
  let _0x62303d = function(_0x16029a, _0x4b9b93, _0x1620e0) {
    var _0x286116 = _0x3a4847;
    const _0x569979 = _0x20e30b[_0x286116(2150)](this, [_0x16029a]);
    if (!_0x1620e0)
      return _0x569979;
    return _0x569979[_0x286116(1902)](_0x4b9b93, _0x1620e0), Promise[_0x286116(1211)]();
  };
  _0x4f8cff[_0x3a4847(1392)] = _0x62303d, _0x62303d = function(_0x3b8962, _0x3a903d, _0x3bbf62) {
    var _0x17bf40 = _0x3a4847;
    const _0x1ea047 = _0x238a00[_0x17bf40(2150)](this, [_0x3b8962]);
    if (!_0x3bbf62)
      return _0x1ea047;
    return _0x1ea047[_0x17bf40(1902)](_0x3a903d, _0x3bbf62), Promise[_0x17bf40(1211)]();
  }, _0x4f8cff[_0x3a4847(2140)] = _0x62303d, _0x62303d = function(_0xbafb9e, _0x459e65, _0x25f223) {
    var _0x1aa155 = _0x3a4847;
    const _0x2fba5b = _0x120e82[_0x1aa155(2150)](this, [_0xbafb9e]);
    if (!_0x25f223)
      return _0x2fba5b;
    return _0x2fba5b[_0x1aa155(1902)](_0x459e65, _0x25f223), Promise["resolve"]();
  }, _0x4f8cff[_0x3a4847(1820)] = _0x62303d;
}
function shimGetUserMedia(_0x587f6f) {
  var _0x2f447a = _0x780a7e;
  const _0x98b6cd = _0x587f6f && _0x587f6f[_0x2f447a(810)];
  if (_0x98b6cd[_0x2f447a(1057)] && _0x98b6cd[_0x2f447a(1057)][_0x2f447a(1645)]) {
    const _0xa99719 = _0x98b6cd["mediaDevices"], _0x3e87a3 = _0xa99719[_0x2f447a(1645)][_0x2f447a(517)](_0xa99719);
    _0x98b6cd[_0x2f447a(1057)][_0x2f447a(1645)] = (_0x29d745) => {
      return _0x3e87a3(shimConstraints(_0x29d745));
    };
  }
  !_0x98b6cd[_0x2f447a(1645)] && _0x98b6cd[_0x2f447a(1057)] && _0x98b6cd[_0x2f447a(1057)][_0x2f447a(1645)] && (_0x98b6cd["getUserMedia"] = function _0x5ef3a3(_0x537aa3, _0x31867c, _0x137382) {
    var _0x2ec718 = _0x2f447a;
    _0x98b6cd[_0x2ec718(1057)][_0x2ec718(1645)](_0x537aa3)[_0x2ec718(1902)](_0x31867c, _0x137382);
  }[_0x2f447a(517)](_0x98b6cd));
}
function shimConstraints(_0x3783e3) {
  var _0x22885b = _0x780a7e;
  if (_0x3783e3 && _0x3783e3[_0x22885b(1822)] !== void 0)
    return Object["assign"]({}, _0x3783e3, { "video": compactObject(_0x3783e3[_0x22885b(1822)]) });
  return _0x3783e3;
}
function shimRTCIceServerUrls(_0x104810) {
  var _0x7d0e3b = _0x780a7e;
  if (!_0x104810["RTCPeerConnection"])
    return;
  const _0x9fe2bb = _0x104810["RTCPeerConnection"];
  _0x104810[_0x7d0e3b(1848)] = function _0x29dc31(_0x56779d, _0x655954) {
    var _0x207372 = _0x7d0e3b;
    if (_0x56779d && _0x56779d[_0x207372(735)]) {
      const _0x33e7fc = [];
      for (let _0x544b6c = 0; _0x544b6c < _0x56779d[_0x207372(735)][_0x207372(1965)]; _0x544b6c++) {
        let _0x470116 = _0x56779d[_0x207372(735)][_0x544b6c];
        !_0x470116[_0x207372(1309)](_0x207372(1453)) && _0x470116[_0x207372(1309)](_0x207372(1497)) ? (deprecated(_0x207372(1232), _0x207372(1509)), _0x470116 = JSON[_0x207372(611)](JSON[_0x207372(2063)](_0x470116)), _0x470116[_0x207372(1453)] = _0x470116[_0x207372(1497)], delete _0x470116[_0x207372(1497)], _0x33e7fc["push"](_0x470116)) : _0x33e7fc["push"](_0x56779d[_0x207372(735)][_0x544b6c]);
      }
      _0x56779d[_0x207372(735)] = _0x33e7fc;
    }
    return new _0x9fe2bb(_0x56779d, _0x655954);
  }, _0x104810["RTCPeerConnection"][_0x7d0e3b(1897)] = _0x9fe2bb["prototype"], "generateCertificate" in _0x9fe2bb && Object["defineProperty"](_0x104810["RTCPeerConnection"], "generateCertificate", { "get"() {
    return _0x9fe2bb["generateCertificate"];
  } });
}
function shimTrackEventTransceiver(_0x6523dd) {
  var _0x255042 = _0x780a7e;
  typeof _0x6523dd === _0x255042(1723) && _0x6523dd[_0x255042(1911)] && _0x255042(509) in _0x6523dd["RTCTrackEvent"][_0x255042(1897)] && !(_0x255042(456) in _0x6523dd["RTCTrackEvent"][_0x255042(1897)]) && Object[_0x255042(1564)](_0x6523dd[_0x255042(1911)][_0x255042(1897)], "transceiver", { "get"() {
    var _0x5a96b1 = _0x255042;
    return { "receiver": this[_0x5a96b1(509)] };
  } });
}
function shimCreateOfferLegacy(_0x20be0e) {
  var _0x1baba4 = _0x780a7e;
  const _0x18e6d7 = _0x20be0e[_0x1baba4(1848)][_0x1baba4(1897)][_0x1baba4(1410)];
  _0x20be0e[_0x1baba4(1848)]["prototype"]["createOffer"] = function _0x5d39b2(_0x26f970) {
    var _0x4ccd1b = _0x1baba4;
    if (_0x26f970) {
      typeof _0x26f970[_0x4ccd1b(1777)] !== _0x4ccd1b(437) && (_0x26f970["offerToReceiveAudio"] = !!_0x26f970["offerToReceiveAudio"]);
      const _0x309292 = this[_0x4ccd1b(1685)]()["find"]((_0x4438c2) => _0x4438c2[_0x4ccd1b(509)]["track"][_0x4ccd1b(1711)] === "audio");
      if (_0x26f970[_0x4ccd1b(1777)] === ![] && _0x309292) {
        if (_0x309292[_0x4ccd1b(1299)] === _0x4ccd1b(1614))
          _0x309292[_0x4ccd1b(1840)] ? _0x309292[_0x4ccd1b(1840)]("sendonly") : _0x309292[_0x4ccd1b(1299)] = _0x4ccd1b(1871);
        else
          _0x309292["direction"] === _0x4ccd1b(927) && (_0x309292[_0x4ccd1b(1840)] ? _0x309292[_0x4ccd1b(1840)](_0x4ccd1b(1200)) : _0x309292[_0x4ccd1b(1299)] = _0x4ccd1b(1200));
      } else
        _0x26f970[_0x4ccd1b(1777)] === !![] && !_0x309292 && this[_0x4ccd1b(588)]("audio");
      typeof _0x26f970["offerToReceiveVideo"] !== _0x4ccd1b(437) && (_0x26f970[_0x4ccd1b(1158)] = !!_0x26f970["offerToReceiveVideo"]);
      const _0x48574c = this[_0x4ccd1b(1685)]()[_0x4ccd1b(1252)]((_0x379a68) => _0x379a68[_0x4ccd1b(509)][_0x4ccd1b(451)][_0x4ccd1b(1711)] === _0x4ccd1b(1822));
      if (_0x26f970[_0x4ccd1b(1158)] === ![] && _0x48574c) {
        if (_0x48574c[_0x4ccd1b(1299)] === _0x4ccd1b(1614))
          _0x48574c[_0x4ccd1b(1840)] ? _0x48574c[_0x4ccd1b(1840)](_0x4ccd1b(1871)) : _0x48574c[_0x4ccd1b(1299)] = _0x4ccd1b(1871);
        else
          _0x48574c[_0x4ccd1b(1299)] === _0x4ccd1b(927) && (_0x48574c[_0x4ccd1b(1840)] ? _0x48574c[_0x4ccd1b(1840)](_0x4ccd1b(1200)) : _0x48574c[_0x4ccd1b(1299)] = "inactive");
      } else
        _0x26f970[_0x4ccd1b(1158)] === !![] && !_0x48574c && this["addTransceiver"](_0x4ccd1b(1822));
    }
    return _0x18e6d7[_0x4ccd1b(2150)](this, arguments);
  };
}
function shimAudioContext(_0x224394) {
  var _0x5433cc = _0x780a7e;
  if (typeof _0x224394 !== "object" || _0x224394[_0x5433cc(684)])
    return;
  _0x224394["AudioContext"] = _0x224394[_0x5433cc(1494)];
}
const safariShim = Object[_0x780a7e(1623)](Object["defineProperty"]({ "__proto__": null, "shimLocalStreamsAPI": shimLocalStreamsAPI, "shimRemoteStreamsAPI": shimRemoteStreamsAPI, "shimCallbacksAPI": shimCallbacksAPI, "shimGetUserMedia": shimGetUserMedia, "shimConstraints": shimConstraints, "shimRTCIceServerUrls": shimRTCIceServerUrls, "shimTrackEventTransceiver": shimTrackEventTransceiver, "shimCreateOfferLegacy": shimCreateOfferLegacy, "shimAudioContext": shimAudioContext }, Symbol[_0x780a7e(844)], { "value": _0x780a7e(1513) }));
function shimRTCIceCandidate(_0xd1fc3d) {
  var _0x2bda58 = _0x780a7e;
  if (!_0xd1fc3d[_0x2bda58(1328)] || _0xd1fc3d[_0x2bda58(1328)] && _0x2bda58(1131) in _0xd1fc3d[_0x2bda58(1328)][_0x2bda58(1897)])
    return;
  const _0x5e61dc = _0xd1fc3d[_0x2bda58(1328)];
  _0xd1fc3d[_0x2bda58(1328)] = function _0x512ccb(_0x2157d0) {
    var _0x4dc668 = _0x2bda58;
    typeof _0x2157d0 === _0x4dc668(1723) && _0x2157d0[_0x4dc668(696)] && _0x2157d0[_0x4dc668(696)][_0x4dc668(1879)]("a=") === 0 && (_0x2157d0 = JSON[_0x4dc668(611)](JSON["stringify"](_0x2157d0)), _0x2157d0[_0x4dc668(696)] = _0x2157d0[_0x4dc668(696)][_0x4dc668(398)](2));
    if (_0x2157d0[_0x4dc668(696)] && _0x2157d0["candidate"][_0x4dc668(1965)]) {
      const _0x37fcd6 = new _0x5e61dc(_0x2157d0), _0x42beb9 = SDPUtils$1[_0x4dc668(1619)](_0x2157d0[_0x4dc668(696)]), _0x538980 = Object[_0x4dc668(1153)](_0x37fcd6, _0x42beb9);
      return _0x538980["toJSON"] = function _0x55834d() {
        var _0x39f559 = _0x4dc668;
        return { "candidate": _0x538980[_0x39f559(696)], "sdpMid": _0x538980["sdpMid"], "sdpMLineIndex": _0x538980[_0x39f559(864)], "usernameFragment": _0x538980["usernameFragment"] };
      }, _0x538980;
    }
    return new _0x5e61dc(_0x2157d0);
  }, _0xd1fc3d[_0x2bda58(1328)][_0x2bda58(1897)] = _0x5e61dc[_0x2bda58(1897)], wrapPeerConnectionEvent(_0xd1fc3d, _0x2bda58(945), (_0x4a5b91) => {
    var _0x169f91 = _0x2bda58;
    return _0x4a5b91[_0x169f91(696)] && Object[_0x169f91(1564)](_0x4a5b91, _0x169f91(696), { "value": new _0xd1fc3d[_0x169f91(1328)](_0x4a5b91[_0x169f91(696)]), "writable": _0x169f91(1552) }), _0x4a5b91;
  });
}
function shimMaxMessageSize(_0xd4a99b, _0x29ac7f) {
  var _0x4899a2 = _0x780a7e;
  if (!_0xd4a99b["RTCPeerConnection"])
    return;
  !(_0x4899a2(1870) in _0xd4a99b["RTCPeerConnection"][_0x4899a2(1897)]) && Object[_0x4899a2(1564)](_0xd4a99b[_0x4899a2(1848)][_0x4899a2(1897)], _0x4899a2(1870), { "get"() {
    var _0x4bf839 = _0x4899a2;
    return typeof this[_0x4bf839(490)] === _0x4bf839(437) ? null : this[_0x4bf839(490)];
  } });
  const _0x363f03 = function(_0x2bc9c2) {
    var _0x2bc0ac = _0x4899a2;
    if (!_0x2bc9c2 || !_0x2bc9c2["sdp"])
      return ![];
    const _0x1e5b34 = SDPUtils$1[_0x2bc0ac(1922)](_0x2bc9c2[_0x2bc0ac(2016)]);
    return _0x1e5b34[_0x2bc0ac(2002)](), _0x1e5b34[_0x2bc0ac(1235)]((_0x1c4af3) => {
      var _0x5775a3 = _0x2bc0ac;
      const _0x208271 = SDPUtils$1[_0x5775a3(1841)](_0x1c4af3);
      return _0x208271 && _0x208271[_0x5775a3(1711)] === _0x5775a3(1670) && _0x208271[_0x5775a3(1643)]["indexOf"](_0x5775a3(971)) !== -1;
    });
  }, _0x220499 = function(_0x2fcb1b) {
    var _0x22a3cd = _0x4899a2;
    const _0x4f42a6 = _0x2fcb1b[_0x22a3cd(2016)]["match"](/mozilla...THIS_IS_SDPARTA-(\d+)/);
    if (_0x4f42a6 === null || _0x4f42a6[_0x22a3cd(1965)] < 2)
      return -1;
    const _0x1208ca = parseInt(_0x4f42a6[1], 10);
    return _0x1208ca !== _0x1208ca ? -1 : _0x1208ca;
  }, _0x5ad32b = function(_0x5cd0b7) {
    var _0x2b05f8 = _0x4899a2;
    let _0x1d45ac = 65536;
    if (_0x29ac7f[_0x2b05f8(968)] === _0x2b05f8(1312)) {
      if (_0x29ac7f[_0x2b05f8(436)] < 57)
        _0x5cd0b7 === -1 ? _0x1d45ac = 16384 : _0x1d45ac = 2147483637;
      else
        _0x29ac7f[_0x2b05f8(436)] < 60 ? _0x1d45ac = _0x29ac7f[_0x2b05f8(436)] === 57 ? 65535 : 65536 : _0x1d45ac = 2147483637;
    }
    return _0x1d45ac;
  }, _0x21089c = function(_0x1bbcda, _0x5e7ac4) {
    var _0xd35243 = _0x4899a2;
    let _0x269455 = 65536;
    _0x29ac7f[_0xd35243(968)] === "firefox" && _0x29ac7f[_0xd35243(436)] === 57 && (_0x269455 = 65535);
    const _0x3f47ed = SDPUtils$1[_0xd35243(2065)](_0x1bbcda[_0xd35243(2016)], "a=max-message-size:");
    if (_0x3f47ed[_0xd35243(1965)] > 0)
      _0x269455 = parseInt(_0x3f47ed[0][_0xd35243(398)](19), 10);
    else
      _0x29ac7f[_0xd35243(968)] === _0xd35243(1312) && _0x5e7ac4 !== -1 && (_0x269455 = 2147483637);
    return _0x269455;
  }, _0x755a29 = _0xd4a99b["RTCPeerConnection"][_0x4899a2(1897)][_0x4899a2(2140)];
  _0xd4a99b[_0x4899a2(1848)][_0x4899a2(1897)]["setRemoteDescription"] = function _0x4b6ee0() {
    var _0x7b574c = _0x4899a2;
    this[_0x7b574c(490)] = null;
    if (_0x29ac7f[_0x7b574c(968)] === _0x7b574c(1127) && _0x29ac7f[_0x7b574c(436)] >= 76) {
      const { sdpSemantics: _0x59e2de } = this[_0x7b574c(1971)]();
      _0x59e2de === _0x7b574c(1222) && Object[_0x7b574c(1564)](this, _0x7b574c(1870), { "get"() {
        var _0x5f3eb1 = _0x7b574c;
        return typeof this[_0x5f3eb1(490)] === _0x5f3eb1(437) ? null : this[_0x5f3eb1(490)];
      }, "enumerable": !![], "configurable": !![] });
    }
    if (_0x363f03(arguments[0])) {
      const _0x67f6e9 = _0x220499(arguments[0]), _0x412fe8 = _0x5ad32b(_0x67f6e9), _0x259c72 = _0x21089c(arguments[0], _0x67f6e9);
      let _0xd99211;
      if (_0x412fe8 === 0 && _0x259c72 === 0)
        _0xd99211 = Number["POSITIVE_INFINITY"];
      else
        _0x412fe8 === 0 || _0x259c72 === 0 ? _0xd99211 = Math[_0x7b574c(1088)](_0x412fe8, _0x259c72) : _0xd99211 = Math[_0x7b574c(1183)](_0x412fe8, _0x259c72);
      const _0x26e9e2 = {};
      Object["defineProperty"](_0x26e9e2, _0x7b574c(1423), { "get"() {
        return _0xd99211;
      } }), this[_0x7b574c(490)] = _0x26e9e2;
    }
    return _0x755a29[_0x7b574c(2150)](this, arguments);
  };
}
function shimSendThrowTypeError(_0x29da83) {
  var _0x19a1a8 = _0x780a7e;
  if (!(_0x29da83["RTCPeerConnection"] && _0x19a1a8(1717) in _0x29da83[_0x19a1a8(1848)][_0x19a1a8(1897)]))
    return;
  function _0x4ffcf2(_0x195f40, _0x3a3d93) {
    var _0x4cfcbe = _0x19a1a8;
    const _0x32fa69 = _0x195f40["send"];
    _0x195f40[_0x4cfcbe(1241)] = function _0x5ce3ca() {
      var _0x2a39ff = _0x4cfcbe;
      const _0x34ff1f = arguments[0], _0x9aa3f7 = _0x34ff1f["length"] || _0x34ff1f[_0x2a39ff(970)] || _0x34ff1f[_0x2a39ff(1505)];
      if (_0x195f40[_0x2a39ff(654)] === _0x2a39ff(1352) && _0x3a3d93[_0x2a39ff(1870)] && _0x9aa3f7 > _0x3a3d93[_0x2a39ff(1870)][_0x2a39ff(1423)])
        throw new TypeError(_0x2a39ff(560) + _0x3a3d93[_0x2a39ff(1870)][_0x2a39ff(1423)] + _0x2a39ff(2054));
      return _0x32fa69["apply"](_0x195f40, arguments);
    };
  }
  const _0x407512 = _0x29da83["RTCPeerConnection"][_0x19a1a8(1897)][_0x19a1a8(1717)];
  _0x29da83[_0x19a1a8(1848)]["prototype"]["createDataChannel"] = function _0x387ff6() {
    var _0x264753 = _0x19a1a8;
    const _0x226f4f = _0x407512[_0x264753(2150)](this, arguments);
    return _0x4ffcf2(_0x226f4f, this), _0x226f4f;
  }, wrapPeerConnectionEvent(_0x29da83, _0x19a1a8(1748), (_0x16b05c) => {
    var _0x370708 = _0x19a1a8;
    return _0x4ffcf2(_0x16b05c["channel"], _0x16b05c[_0x370708(1961)]), _0x16b05c;
  });
}
function shimConnectionState(_0x5c51b8) {
  var _0x33d7e6 = _0x780a7e;
  if (!_0x5c51b8[_0x33d7e6(1848)] || _0x33d7e6(1847) in _0x5c51b8[_0x33d7e6(1848)][_0x33d7e6(1897)])
    return;
  const _0x7a09c3 = _0x5c51b8[_0x33d7e6(1848)][_0x33d7e6(1897)];
  Object["defineProperty"](_0x7a09c3, _0x33d7e6(1847), { "get"() {
    var _0xde5a2b = _0x33d7e6;
    return { "completed": "connected", "checking": _0xde5a2b(453) }[this[_0xde5a2b(1455)]] || this[_0xde5a2b(1455)];
  }, "enumerable": !![], "configurable": !![] }), Object["defineProperty"](_0x7a09c3, _0x33d7e6(1491), { "get"() {
    return this["_onconnectionstatechange"] || null;
  }, "set"(_0x59cfba) {
    var _0x60478 = _0x33d7e6;
    this[_0x60478(888)] && (this["removeEventListener"](_0x60478(630), this["_onconnectionstatechange"]), delete this["_onconnectionstatechange"]), _0x59cfba && this[_0x60478(2069)](_0x60478(630), this[_0x60478(888)] = _0x59cfba);
  }, "enumerable": !![], "configurable": !![] }), ["setLocalDescription", _0x33d7e6(2140)][_0x33d7e6(839)]((_0x579ba3) => {
    const _0xf4ec23 = _0x7a09c3[_0x579ba3];
    _0x7a09c3[_0x579ba3] = function() {
      var _0x457f50 = _0x3001;
      return !this[_0x457f50(1912)] && (this[_0x457f50(1912)] = (_0x87f4d7) => {
        var _0x4956d6 = _0x457f50;
        const _0x12b07e = _0x87f4d7[_0x4956d6(1961)];
        if (_0x12b07e[_0x4956d6(541)] !== _0x12b07e[_0x4956d6(1847)]) {
          _0x12b07e["_lastConnectionState"] = _0x12b07e[_0x4956d6(1847)];
          const _0x48f425 = new Event("connectionstatechange", _0x87f4d7);
          _0x12b07e[_0x4956d6(1152)](_0x48f425);
        }
        return _0x87f4d7;
      }, this[_0x457f50(2069)](_0x457f50(347), this["_connectionstatechangepoly"])), _0xf4ec23["apply"](this, arguments);
    };
  });
}
function removeExtmapAllowMixed(_0x5b1e1c, _0x37a27b) {
  var _0x238835 = _0x780a7e;
  if (!_0x5b1e1c[_0x238835(1848)])
    return;
  if (_0x37a27b[_0x238835(968)] === _0x238835(1127) && _0x37a27b["version"] >= 71)
    return;
  if (_0x37a27b["browser"] === _0x238835(1609) && _0x37a27b[_0x238835(436)] >= 605)
    return;
  const _0x54aeda = _0x5b1e1c[_0x238835(1848)]["prototype"]["setRemoteDescription"];
  _0x5b1e1c[_0x238835(1848)][_0x238835(1897)][_0x238835(2140)] = function _0xf250b9(_0x5831b5) {
    var _0x5c8f87 = _0x238835;
    if (_0x5831b5 && _0x5831b5[_0x5c8f87(2016)] && _0x5831b5[_0x5c8f87(2016)]["indexOf"](_0x5c8f87(1148)) !== -1) {
      const _0x9ede15 = _0x5831b5["sdp"][_0x5c8f87(1201)]("\n")[_0x5c8f87(805)]((_0x265fc9) => {
        var _0xa9cc45 = _0x5c8f87;
        return _0x265fc9[_0xa9cc45(1890)]() !== _0xa9cc45(1791);
      })[_0x5c8f87(2180)]("\n");
      _0x5b1e1c[_0x5c8f87(1118)] && _0x5831b5 instanceof _0x5b1e1c[_0x5c8f87(1118)] ? arguments[0] = new _0x5b1e1c[_0x5c8f87(1118)]({ "type": _0x5831b5[_0x5c8f87(1514)], "sdp": _0x9ede15 }) : _0x5831b5[_0x5c8f87(2016)] = _0x9ede15;
    }
    return _0x54aeda[_0x5c8f87(2150)](this, arguments);
  };
}
function shimAddIceCandidateNullOrEmpty(_0xb46a5e, _0x3c23c0) {
  var _0x8fba0e = _0x780a7e;
  if (!(_0xb46a5e[_0x8fba0e(1848)] && _0xb46a5e[_0x8fba0e(1848)][_0x8fba0e(1897)]))
    return;
  const _0x16fe04 = _0xb46a5e[_0x8fba0e(1848)][_0x8fba0e(1897)][_0x8fba0e(1820)];
  if (!_0x16fe04 || _0x16fe04[_0x8fba0e(1965)] === 0)
    return;
  _0xb46a5e["RTCPeerConnection"]["prototype"][_0x8fba0e(1820)] = function _0x560b6e() {
    var _0x4fb38a = _0x8fba0e;
    if (!arguments[0])
      return arguments[1] && arguments[1][_0x4fb38a(2150)](null), Promise["resolve"]();
    if ((_0x3c23c0[_0x4fb38a(968)] === _0x4fb38a(1127) && _0x3c23c0[_0x4fb38a(436)] < 78 || _0x3c23c0[_0x4fb38a(968)] === "firefox" && _0x3c23c0["version"] < 68 || _0x3c23c0[_0x4fb38a(968)] === _0x4fb38a(1609)) && arguments[0] && arguments[0]["candidate"] === "")
      return Promise[_0x4fb38a(1211)]();
    return _0x16fe04[_0x4fb38a(2150)](this, arguments);
  };
}
const commonShim = Object["freeze"](Object[_0x780a7e(1564)]({ "__proto__": null, "shimRTCIceCandidate": shimRTCIceCandidate, "shimMaxMessageSize": shimMaxMessageSize, "shimSendThrowTypeError": shimSendThrowTypeError, "shimConnectionState": shimConnectionState, "removeExtmapAllowMixed": removeExtmapAllowMixed, "shimAddIceCandidateNullOrEmpty": shimAddIceCandidateNullOrEmpty }, Symbol[_0x780a7e(844)], { "value": "Module" }));
function adapterFactory({ window: _0x18b05b } = {}, _0x52178a = { "shimChrome": !![], "shimFirefox": !![], "shimEdge": !![], "shimSafari": !![] }) {
  var _0x38d362 = _0x780a7e;
  const _0x2e1fe9 = log, _0xc0a539 = detectBrowser(_0x18b05b), _0x51a0f8 = { "browserDetails": _0xc0a539, "commonShim": commonShim, "extractVersion": extractVersion, "disableLog": disableLog, "disableWarnings": disableWarnings };
  switch (_0xc0a539[_0x38d362(968)]) {
    case _0x38d362(1127):
      if (!chromeShim || !shimPeerConnection$2 || !_0x52178a[_0x38d362(477)])
        return _0x2e1fe9(_0x38d362(902)), _0x51a0f8;
      if (_0xc0a539[_0x38d362(436)] === null)
        return _0x2e1fe9(_0x38d362(2137)), _0x51a0f8;
      _0x2e1fe9(_0x38d362(871)), _0x51a0f8[_0x38d362(1613)] = chromeShim, shimAddIceCandidateNullOrEmpty(_0x18b05b, _0xc0a539), shimGetUserMedia$3(_0x18b05b, _0xc0a539), shimMediaStream(_0x18b05b), shimPeerConnection$2(_0x18b05b, _0xc0a539), shimOnTrack$1(_0x18b05b), shimAddTrackRemoveTrack(_0x18b05b, _0xc0a539), shimGetSendersWithDtmf(_0x18b05b), shimGetStats(_0x18b05b), shimSenderReceiverGetStats(_0x18b05b), fixNegotiationNeeded(_0x18b05b, _0xc0a539), shimRTCIceCandidate(_0x18b05b), shimConnectionState(_0x18b05b), shimMaxMessageSize(_0x18b05b, _0xc0a539), shimSendThrowTypeError(_0x18b05b), removeExtmapAllowMixed(_0x18b05b, _0xc0a539);
      break;
    case _0x38d362(1312):
      if (!firefoxShim || !shimPeerConnection || !_0x52178a[_0x38d362(2201)])
        return _0x2e1fe9("Firefox shim is not included in this adapter release."), _0x51a0f8;
      _0x2e1fe9(_0x38d362(391)), _0x51a0f8[_0x38d362(1613)] = firefoxShim, shimAddIceCandidateNullOrEmpty(_0x18b05b, _0xc0a539), shimGetUserMedia$1(_0x18b05b, _0xc0a539), shimPeerConnection(_0x18b05b, _0xc0a539), shimOnTrack(_0x18b05b), shimRemoveStream(_0x18b05b), shimSenderGetStats(_0x18b05b), shimReceiverGetStats(_0x18b05b), shimRTCDataChannel(_0x18b05b), shimAddTransceiver(_0x18b05b), shimGetParameters(_0x18b05b), shimCreateOffer(_0x18b05b), shimCreateAnswer(_0x18b05b), shimRTCIceCandidate(_0x18b05b), shimConnectionState(_0x18b05b), shimMaxMessageSize(_0x18b05b, _0xc0a539), shimSendThrowTypeError(_0x18b05b);
      break;
    case _0x38d362(1626):
      if (!edgeShim || !shimPeerConnection$1 || !_0x52178a[_0x38d362(2147)])
        return _0x2e1fe9(_0x38d362(1958)), _0x51a0f8;
      _0x2e1fe9("adapter.js shimming edge."), _0x51a0f8[_0x38d362(1613)] = edgeShim, shimGetUserMedia$2(_0x18b05b), shimGetDisplayMedia$1(_0x18b05b), shimPeerConnection$1(_0x18b05b, _0xc0a539), shimReplaceTrack(_0x18b05b), shimMaxMessageSize(_0x18b05b, _0xc0a539), shimSendThrowTypeError(_0x18b05b);
      break;
    case _0x38d362(1609):
      if (!safariShim || !_0x52178a[_0x38d362(1519)])
        return _0x2e1fe9(_0x38d362(1802)), _0x51a0f8;
      _0x2e1fe9(_0x38d362(524)), _0x51a0f8["browserShim"] = safariShim, shimAddIceCandidateNullOrEmpty(_0x18b05b, _0xc0a539), shimRTCIceServerUrls(_0x18b05b), shimCreateOfferLegacy(_0x18b05b), shimCallbacksAPI(_0x18b05b), shimLocalStreamsAPI(_0x18b05b), shimRemoteStreamsAPI(_0x18b05b), shimTrackEventTransceiver(_0x18b05b), shimGetUserMedia(_0x18b05b), shimAudioContext(_0x18b05b), shimRTCIceCandidate(_0x18b05b), shimMaxMessageSize(_0x18b05b, _0xc0a539), shimSendThrowTypeError(_0x18b05b), removeExtmapAllowMixed(_0x18b05b, _0xc0a539);
      break;
    default:
      _0x2e1fe9(_0x38d362(1090));
      break;
  }
  return _0x51a0f8;
}
const adapter = adapterFactory({ "window": typeof window === "undefined" ? void 0 : window });
function $parcel$export(_0x560655, _0x4efe82, _0x5abfc8, _0x4e362f) {
  var _0x11024f = _0x780a7e;
  Object[_0x11024f(1564)](_0x560655, _0x4efe82, { "get": _0x5abfc8, "set": _0x4e362f, "enumerable": !![], "configurable": !![] });
}
var $af8cf1f663f490f4$var$webRTCAdapter = adapter[_0x780a7e(1744)] || adapter, $af8cf1f663f490f4$export$25be9502477c137d = new (function() {
  var _0x3a2f53 = _0x780a7e;
  function _0x586c6b() {
    var _0x51036b = _0x3001;
    this[_0x51036b(1537)] = [_0x51036b(900), _0x51036b(2056), _0x51036b(1275)][_0x51036b(589)](navigator["platform"]), this[_0x51036b(1769)] = [_0x51036b(1312), _0x51036b(1127), _0x51036b(1609)], this[_0x51036b(1085)] = 59, this["minChromeVersion"] = 72, this[_0x51036b(1189)] = 605;
  }
  return _0x586c6b[_0x3a2f53(1897)][_0x3a2f53(359)] = function() {
    var _0x55923b = _0x3a2f53;
    return typeof RTCPeerConnection !== _0x55923b(437);
  }, _0x586c6b[_0x3a2f53(1897)][_0x3a2f53(1121)] = function() {
    var _0x3bece6 = _0x3a2f53, _0x2ea0a3 = this[_0x3bece6(761)](), _0x2454e7 = this[_0x3bece6(760)](), _0x34ada3 = this[_0x3bece6(1769)][_0x3bece6(589)](_0x2ea0a3);
    if (!_0x34ada3)
      return ![];
    if (_0x2ea0a3 === _0x3bece6(1127))
      return _0x2454e7 >= this[_0x3bece6(1428)];
    if (_0x2ea0a3 === _0x3bece6(1312))
      return _0x2454e7 >= this[_0x3bece6(1085)];
    if (_0x2ea0a3 === _0x3bece6(1609))
      return !this[_0x3bece6(1537)] && _0x2454e7 >= this[_0x3bece6(1189)];
    return ![];
  }, _0x586c6b["prototype"]["getBrowser"] = function() {
    var _0x5393ee = _0x3a2f53;
    return $af8cf1f663f490f4$var$webRTCAdapter[_0x5393ee(1700)][_0x5393ee(968)];
  }, _0x586c6b["prototype"][_0x3a2f53(760)] = function() {
    var _0x2799d6 = _0x3a2f53;
    return $af8cf1f663f490f4$var$webRTCAdapter[_0x2799d6(1700)]["version"] || 0;
  }, _0x586c6b[_0x3a2f53(1897)][_0x3a2f53(1437)] = function() {
    var _0x56bd47 = _0x3a2f53, _0x49b8a8 = this[_0x56bd47(761)](), _0x3c3ea5 = $af8cf1f663f490f4$var$webRTCAdapter[_0x56bd47(1700)][_0x56bd47(436)] || 0;
    if (_0x49b8a8 === _0x56bd47(1127) && _0x3c3ea5 < this["minChromeVersion"])
      return ![];
    if (_0x49b8a8 === _0x56bd47(1312) && _0x3c3ea5 >= this[_0x56bd47(1085)])
      return !![];
    if (!window[_0x56bd47(1268)] || !(_0x56bd47(1501) in RTCRtpTransceiver["prototype"]))
      return ![];
    var _0x47f173, _0x3d9d8d = ![];
    try {
      _0x47f173 = new RTCPeerConnection(), _0x47f173[_0x56bd47(588)](_0x56bd47(1855)), _0x3d9d8d = !![];
    } catch (_0xca5dc4) {
    } finally {
      if (_0x47f173)
        _0x47f173[_0x56bd47(1169)]();
    }
    return _0x3d9d8d;
  }, _0x586c6b[_0x3a2f53(1897)]["toString"] = function() {
    var _0x272e23 = _0x3a2f53;
    return _0x272e23(857)["concat"](this[_0x272e23(761)](), "\n    version:")["concat"](this[_0x272e23(760)](), _0x272e23(1102))[_0x272e23(2090)](this[_0x272e23(1537)], _0x272e23(1054))["concat"](this[_0x272e23(359)](), _0x272e23(2079))[_0x272e23(2090)](this[_0x272e23(1121)](), "\n    isUnifiedPlanSupported:")[_0x272e23(2090)](this[_0x272e23(1437)]());
  }, _0x586c6b;
}())(), $06cb531ed7840f78$var$DEFAULT_CONFIG = { "iceServers": [{ "urls": _0x780a7e(1596) }, { "urls": ["turn:eu-0.turn.peerjs.com:3478", _0x780a7e(1694)], "username": _0x780a7e(1963), "credential": _0x780a7e(1380) }], "sdpSemantics": "unified-plan" }, $06cb531ed7840f78$var$Util = function() {
  var _0x980728 = _0x780a7e;
  function _0x2a1dc2() {
    var _0xbaeb6c = _0x3001;
    this[_0xbaeb6c(1407)] = _0xbaeb6c(2085), this[_0xbaeb6c(1884)] = 443, this["chunkedBrowsers"] = { "Chrome": 1, "chrome": 1 }, this["chunkedMTU"] = 16300, this[_0xbaeb6c(872)] = $06cb531ed7840f78$var$DEFAULT_CONFIG, this[_0xbaeb6c(968)] = $af8cf1f663f490f4$export$25be9502477c137d["getBrowser"](), this["browserVersion"] = $af8cf1f663f490f4$export$25be9502477c137d[_0xbaeb6c(760)](), this["supports"] = function() {
      var _0x3d5572 = _0xbaeb6c, _0x5dfb34 = { "browser": $af8cf1f663f490f4$export$25be9502477c137d[_0x3d5572(1121)](), "webRTC": $af8cf1f663f490f4$export$25be9502477c137d[_0x3d5572(359)](), "audioVideo": ![], "data": ![], "binaryBlob": ![], "reliable": ![] };
      if (!_0x5dfb34[_0x3d5572(1166)])
        return _0x5dfb34;
      var _0x6de259;
      try {
        _0x6de259 = new RTCPeerConnection($06cb531ed7840f78$var$DEFAULT_CONFIG), _0x5dfb34[_0x3d5572(1737)] = !![];
        var _0x170b10 = void 0;
        try {
          _0x170b10 = _0x6de259["createDataChannel"](_0x3d5572(1008), { "ordered": !![] }), _0x5dfb34[_0x3d5572(797)] = !![], _0x5dfb34[_0x3d5572(2179)] = !!_0x170b10[_0x3d5572(1402)];
          try {
            _0x170b10[_0x3d5572(623)] = _0x3d5572(1031), _0x5dfb34["binaryBlob"] = !$af8cf1f663f490f4$export$25be9502477c137d[_0x3d5572(1537)];
          } catch (_0x42fca4) {
          }
        } catch (_0x1dea59) {
        } finally {
          if (_0x170b10)
            _0x170b10["close"]();
        }
      } catch (_0x34e758) {
      } finally {
        if (_0x6de259)
          _0x6de259[_0x3d5572(1169)]();
      }
      return _0x5dfb34;
    }(), this[_0xbaeb6c(941)] = binarypack[_0xbaeb6c(941)], this[_0xbaeb6c(1597)] = binarypack[_0xbaeb6c(1597)], this["_dataCount"] = 1;
  }
  return _0x2a1dc2["prototype"][_0x980728(408)] = function() {
  }, _0x2a1dc2[_0x980728(1897)]["validateId"] = function(_0x243616) {
    var _0x3fe3a2 = _0x980728;
    return !_0x243616 || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/[_0x3fe3a2(1778)](_0x243616);
  }, _0x2a1dc2[_0x980728(1897)][_0x980728(992)] = function(_0x2de514) {
    var _0x31138e = _0x980728, _0x434f5f = [], _0x17842c = _0x2de514[_0x31138e(970)], _0x27d362 = Math[_0x31138e(2007)](_0x17842c / $06cb531ed7840f78$export$7debb50ef11d5e0b[_0x31138e(994)]), _0x3f4f43 = 0, _0x566aa7 = 0;
    while (_0x566aa7 < _0x17842c) {
      var _0xa5d3da = Math[_0x31138e(1183)](_0x17842c, _0x566aa7 + $06cb531ed7840f78$export$7debb50ef11d5e0b[_0x31138e(994)]), _0x2da2f5 = _0x2de514["slice"](_0x566aa7, _0xa5d3da), _0x32b51b = { "__peerData": this[_0x31138e(1949)], "n": _0x3f4f43, "data": _0x2da2f5, "total": _0x27d362 };
      _0x434f5f[_0x31138e(1991)](_0x32b51b), _0x566aa7 = _0xa5d3da, _0x3f4f43++;
    }
    return this["_dataCount"]++, _0x434f5f;
  }, _0x2a1dc2[_0x980728(1897)][_0x980728(455)] = function(_0xfc826e, _0x4d79cf) {
    var _0x32a77d = _0x980728, _0x6f4cb9 = new FileReader();
    return _0x6f4cb9["onload"] = function(_0x109402) {
      var _0x222073 = _0x3001;
      if (_0x109402["target"])
        _0x4d79cf(_0x109402[_0x222073(1961)][_0x222073(411)]);
    }, _0x6f4cb9[_0x32a77d(1240)](_0xfc826e), _0x6f4cb9;
  }, _0x2a1dc2[_0x980728(1897)][_0x980728(939)] = function(_0x32c92d) {
    var _0xf083d1 = _0x980728, _0x63bc70 = new Uint8Array(_0x32c92d[_0xf083d1(1965)]);
    for (var _0x1cbe9d = 0; _0x1cbe9d < _0x32c92d["length"]; _0x1cbe9d++)
      _0x63bc70[_0x1cbe9d] = _0x32c92d[_0xf083d1(1504)](_0x1cbe9d) & 255;
    return _0x63bc70[_0xf083d1(1294)];
  }, _0x2a1dc2[_0x980728(1897)][_0x980728(351)] = function() {
    var _0x4eb301 = _0x980728;
    return Math[_0x4eb301(1511)]()[_0x4eb301(2073)](36)["slice"](2);
  }, _0x2a1dc2[_0x980728(1897)][_0x980728(2173)] = function() {
    var _0x50531e = _0x980728;
    return location[_0x50531e(1643)] === "https:";
  }, _0x2a1dc2;
}(), $06cb531ed7840f78$export$7debb50ef11d5e0b = new $06cb531ed7840f78$var$Util(), $26088d7da5b03f69$exports = {};
$parcel$export($26088d7da5b03f69$exports, _0x780a7e(618), () => $26088d7da5b03f69$export$ecd1fc136c422448, (_0x305d1a) => $26088d7da5b03f69$export$ecd1fc136c422448 = _0x305d1a);
var $ac9b757d51178e15$exports = {}, $ac9b757d51178e15$var$has = Object[_0x780a7e(1897)][_0x780a7e(1309)], $ac9b757d51178e15$var$prefix = "~";
function $ac9b757d51178e15$var$Events() {
}
if (Object[_0x780a7e(1409)]) {
  $ac9b757d51178e15$var$Events[_0x780a7e(1897)] = Object[_0x780a7e(1409)](null);
  if (!new $ac9b757d51178e15$var$Events()[_0x780a7e(1749)])
    $ac9b757d51178e15$var$prefix = ![];
}
function $ac9b757d51178e15$var$EE(_0x56d9ac, _0x303d53, _0x195820) {
  var _0x12e846 = _0x780a7e;
  this["fn"] = _0x56d9ac, this[_0x12e846(1719)] = _0x303d53, this[_0x12e846(1541)] = _0x195820 || ![];
}
function $ac9b757d51178e15$var$addListener(_0x4da7c5, _0x5602c6, _0x22cd02, _0x3380a3, _0x14b6f0) {
  var _0x221df8 = _0x780a7e;
  if (typeof _0x22cd02 !== "function")
    throw new TypeError(_0x221df8(1943));
  var _0x15e869 = new $ac9b757d51178e15$var$EE(_0x22cd02, _0x3380a3 || _0x4da7c5, _0x14b6f0), _0x5cea55 = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + _0x5602c6 : _0x5602c6;
  if (!_0x4da7c5[_0x221df8(1337)][_0x5cea55])
    _0x4da7c5["_events"][_0x5cea55] = _0x15e869, _0x4da7c5["_eventsCount"]++;
  else {
    if (!_0x4da7c5[_0x221df8(1337)][_0x5cea55]["fn"])
      _0x4da7c5[_0x221df8(1337)][_0x5cea55][_0x221df8(1991)](_0x15e869);
    else
      _0x4da7c5["_events"][_0x5cea55] = [_0x4da7c5["_events"][_0x5cea55], _0x15e869];
  }
  return _0x4da7c5;
}
function $ac9b757d51178e15$var$clearEvent(_0x3a1bb8, _0x1c8ef2) {
  var _0x2af7bf = _0x780a7e;
  if (--_0x3a1bb8["_eventsCount"] === 0)
    _0x3a1bb8[_0x2af7bf(1337)] = new $ac9b757d51178e15$var$Events();
  else
    delete _0x3a1bb8[_0x2af7bf(1337)][_0x1c8ef2];
}
function $ac9b757d51178e15$var$EventEmitter() {
  var _0x29060e = _0x780a7e;
  this[_0x29060e(1337)] = new $ac9b757d51178e15$var$Events(), this[_0x29060e(438)] = 0;
}
$ac9b757d51178e15$var$EventEmitter["prototype"]["eventNames"] = function eventNames() {
  var _0x43d23d = _0x780a7e, _0x4d926c = [], _0x2a5ec2, _0x49b140;
  if (this[_0x43d23d(438)] === 0)
    return _0x4d926c;
  for (_0x49b140 in _0x2a5ec2 = this[_0x43d23d(1337)])
    if ($ac9b757d51178e15$var$has["call"](_0x2a5ec2, _0x49b140))
      _0x4d926c[_0x43d23d(1991)]($ac9b757d51178e15$var$prefix ? _0x49b140["slice"](1) : _0x49b140);
  if (Object[_0x43d23d(1563)])
    return _0x4d926c["concat"](Object[_0x43d23d(1563)](_0x2a5ec2));
  return _0x4d926c;
}, $ac9b757d51178e15$var$EventEmitter[_0x780a7e(1897)][_0x780a7e(1050)] = function listeners(_0x496a60) {
  var _0x263f8a = _0x780a7e, _0x4f96f1 = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + _0x496a60 : _0x496a60, _0x33ab02 = this[_0x263f8a(1337)][_0x4f96f1];
  if (!_0x33ab02)
    return [];
  if (_0x33ab02["fn"])
    return [_0x33ab02["fn"]];
  for (var _0x4c0da5 = 0, _0x1caddd = _0x33ab02["length"], _0x1a4e32 = new Array(_0x1caddd); _0x4c0da5 < _0x1caddd; _0x4c0da5++)
    _0x1a4e32[_0x4c0da5] = _0x33ab02[_0x4c0da5]["fn"];
  return _0x1a4e32;
}, $ac9b757d51178e15$var$EventEmitter[_0x780a7e(1897)][_0x780a7e(344)] = function listenerCount(_0x44a1f0) {
  var _0xe8cc00 = _0x780a7e, _0x1c2fa8 = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + _0x44a1f0 : _0x44a1f0, _0x4ade4a = this[_0xe8cc00(1337)][_0x1c2fa8];
  if (!_0x4ade4a)
    return 0;
  if (_0x4ade4a["fn"])
    return 1;
  return _0x4ade4a[_0xe8cc00(1965)];
}, $ac9b757d51178e15$var$EventEmitter[_0x780a7e(1897)][_0x780a7e(2099)] = function emit(_0x34165f, _0x3ee336, _0x343bf8, _0x305c27, _0x18ada7, _0x487bc7) {
  var _0x4081dc = _0x780a7e, _0x4c0f66 = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + _0x34165f : _0x34165f;
  if (!this[_0x4081dc(1337)][_0x4c0f66])
    return ![];
  var _0x55e28c = this[_0x4081dc(1337)][_0x4c0f66], _0x4ae2f5 = arguments[_0x4081dc(1965)], _0xaa8c35, _0x419689;
  if (_0x55e28c["fn"]) {
    if (_0x55e28c[_0x4081dc(1541)])
      this[_0x4081dc(1065)](_0x34165f, _0x55e28c["fn"], void 0, !![]);
    switch (_0x4ae2f5) {
      case 1:
        return _0x55e28c["fn"][_0x4081dc(1206)](_0x55e28c["context"]), !![];
      case 2:
        return _0x55e28c["fn"][_0x4081dc(1206)](_0x55e28c[_0x4081dc(1719)], _0x3ee336), !![];
      case 3:
        return _0x55e28c["fn"]["call"](_0x55e28c[_0x4081dc(1719)], _0x3ee336, _0x343bf8), !![];
      case 4:
        return _0x55e28c["fn"][_0x4081dc(1206)](_0x55e28c["context"], _0x3ee336, _0x343bf8, _0x305c27), !![];
      case 5:
        return _0x55e28c["fn"][_0x4081dc(1206)](_0x55e28c["context"], _0x3ee336, _0x343bf8, _0x305c27, _0x18ada7), !![];
      case 6:
        return _0x55e28c["fn"][_0x4081dc(1206)](_0x55e28c["context"], _0x3ee336, _0x343bf8, _0x305c27, _0x18ada7, _0x487bc7), !![];
    }
    for (_0x419689 = 1, _0xaa8c35 = new Array(_0x4ae2f5 - 1); _0x419689 < _0x4ae2f5; _0x419689++)
      _0xaa8c35[_0x419689 - 1] = arguments[_0x419689];
    _0x55e28c["fn"][_0x4081dc(2150)](_0x55e28c[_0x4081dc(1719)], _0xaa8c35);
  } else {
    var _0x1867d9 = _0x55e28c[_0x4081dc(1965)], _0x51fcbf;
    for (_0x419689 = 0; _0x419689 < _0x1867d9; _0x419689++) {
      if (_0x55e28c[_0x419689][_0x4081dc(1541)])
        this[_0x4081dc(1065)](_0x34165f, _0x55e28c[_0x419689]["fn"], void 0, !![]);
      switch (_0x4ae2f5) {
        case 1:
          _0x55e28c[_0x419689]["fn"][_0x4081dc(1206)](_0x55e28c[_0x419689][_0x4081dc(1719)]);
          break;
        case 2:
          _0x55e28c[_0x419689]["fn"][_0x4081dc(1206)](_0x55e28c[_0x419689][_0x4081dc(1719)], _0x3ee336);
          break;
        case 3:
          _0x55e28c[_0x419689]["fn"][_0x4081dc(1206)](_0x55e28c[_0x419689][_0x4081dc(1719)], _0x3ee336, _0x343bf8);
          break;
        case 4:
          _0x55e28c[_0x419689]["fn"]["call"](_0x55e28c[_0x419689][_0x4081dc(1719)], _0x3ee336, _0x343bf8, _0x305c27);
          break;
        default:
          if (!_0xaa8c35) {
            for (_0x51fcbf = 1, _0xaa8c35 = new Array(_0x4ae2f5 - 1); _0x51fcbf < _0x4ae2f5; _0x51fcbf++)
              _0xaa8c35[_0x51fcbf - 1] = arguments[_0x51fcbf];
          }
          _0x55e28c[_0x419689]["fn"]["apply"](_0x55e28c[_0x419689][_0x4081dc(1719)], _0xaa8c35);
      }
    }
  }
  return !![];
}, $ac9b757d51178e15$var$EventEmitter["prototype"]["on"] = function on(_0x169b65, _0xe84e82, _0x31de15) {
  return $ac9b757d51178e15$var$addListener(this, _0x169b65, _0xe84e82, _0x31de15, ![]);
}, $ac9b757d51178e15$var$EventEmitter["prototype"][_0x780a7e(1541)] = function once(_0x1eb891, _0x2ed2ff, _0x4ec75e) {
  return $ac9b757d51178e15$var$addListener(this, _0x1eb891, _0x2ed2ff, _0x4ec75e, !![]);
}, $ac9b757d51178e15$var$EventEmitter[_0x780a7e(1897)][_0x780a7e(1065)] = function removeListener(_0x1868a6, _0x5b1dc9, _0x5e3ca2, _0x350aeb) {
  var _0x92db1d = _0x780a7e, _0x5b1f42 = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + _0x1868a6 : _0x1868a6;
  if (!this[_0x92db1d(1337)][_0x5b1f42])
    return this;
  if (!_0x5b1dc9)
    return $ac9b757d51178e15$var$clearEvent(this, _0x5b1f42), this;
  var _0x315f50 = this[_0x92db1d(1337)][_0x5b1f42];
  if (_0x315f50["fn"]) {
    if (_0x315f50["fn"] === _0x5b1dc9 && (!_0x350aeb || _0x315f50["once"]) && (!_0x5e3ca2 || _0x315f50[_0x92db1d(1719)] === _0x5e3ca2))
      $ac9b757d51178e15$var$clearEvent(this, _0x5b1f42);
  } else {
    for (var _0x406a37 = 0, _0x5160f3 = [], _0x32c383 = _0x315f50["length"]; _0x406a37 < _0x32c383; _0x406a37++)
      if (_0x315f50[_0x406a37]["fn"] !== _0x5b1dc9 || _0x350aeb && !_0x315f50[_0x406a37][_0x92db1d(1541)] || _0x5e3ca2 && _0x315f50[_0x406a37][_0x92db1d(1719)] !== _0x5e3ca2)
        _0x5160f3[_0x92db1d(1991)](_0x315f50[_0x406a37]);
    if (_0x5160f3["length"])
      this["_events"][_0x5b1f42] = _0x5160f3[_0x92db1d(1965)] === 1 ? _0x5160f3[0] : _0x5160f3;
    else
      $ac9b757d51178e15$var$clearEvent(this, _0x5b1f42);
  }
  return this;
}, $ac9b757d51178e15$var$EventEmitter["prototype"][_0x780a7e(1224)] = function removeAllListeners(_0x380724) {
  var _0x589eac = _0x780a7e, _0x2b1630;
  if (_0x380724) {
    _0x2b1630 = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + _0x380724 : _0x380724;
    if (this[_0x589eac(1337)][_0x2b1630])
      $ac9b757d51178e15$var$clearEvent(this, _0x2b1630);
  } else
    this[_0x589eac(1337)] = new $ac9b757d51178e15$var$Events(), this[_0x589eac(438)] = 0;
  return this;
}, $ac9b757d51178e15$var$EventEmitter[_0x780a7e(1897)][_0x780a7e(1079)] = $ac9b757d51178e15$var$EventEmitter[_0x780a7e(1897)][_0x780a7e(1065)], $ac9b757d51178e15$var$EventEmitter[_0x780a7e(1897)]["addListener"] = $ac9b757d51178e15$var$EventEmitter["prototype"]["on"], $ac9b757d51178e15$var$EventEmitter["prefixed"] = $ac9b757d51178e15$var$prefix, $ac9b757d51178e15$var$EventEmitter[_0x780a7e(2198)] = $ac9b757d51178e15$var$EventEmitter, $ac9b757d51178e15$exports = $ac9b757d51178e15$var$EventEmitter;
var $1615705ecc6adca3$exports = {};
$parcel$export($1615705ecc6adca3$exports, "LogLevel", () => $1615705ecc6adca3$export$243e62d78d3b544d, (_0x3a8303) => $1615705ecc6adca3$export$243e62d78d3b544d = _0x3a8303), $parcel$export($1615705ecc6adca3$exports, _0x780a7e(1744), () => $1615705ecc6adca3$export$2e2bcd8739ae039, (_0x3b96f2) => $1615705ecc6adca3$export$2e2bcd8739ae039 = _0x3b96f2);
var $1615705ecc6adca3$var$__read = function(_0x3c3452, _0x103eb4) {
  var _0x2190cd = _0x780a7e, _0xe564bd = typeof Symbol === _0x2190cd(389) && _0x3c3452[Symbol[_0x2190cd(1549)]];
  if (!_0xe564bd)
    return _0x3c3452;
  var _0x11fb38 = _0xe564bd[_0x2190cd(1206)](_0x3c3452), _0xd95def, _0x5bc8c0 = [], _0xb488fb;
  try {
    while ((_0x103eb4 === void 0 || _0x103eb4-- > 0) && !(_0xd95def = _0x11fb38[_0x2190cd(670)]())[_0x2190cd(1353)])
      _0x5bc8c0[_0x2190cd(1991)](_0xd95def[_0x2190cd(819)]);
  } catch (_0xd799a9) {
    _0xb488fb = { "error": _0xd799a9 };
  } finally {
    try {
      if (_0xd95def && !_0xd95def[_0x2190cd(1353)] && (_0xe564bd = _0x11fb38["return"]))
        _0xe564bd["call"](_0x11fb38);
    } finally {
      if (_0xb488fb)
        throw _0xb488fb["error"];
    }
  }
  return _0x5bc8c0;
}, $1615705ecc6adca3$var$__spreadArray = function(_0x130f2d, _0x341225, _0x542ec7) {
  var _0x40e422 = _0x780a7e;
  if (_0x542ec7 || arguments[_0x40e422(1965)] === 2) {
    for (var _0x577955 = 0, _0x5640c4 = _0x341225[_0x40e422(1965)], _0xb35a92; _0x577955 < _0x5640c4; _0x577955++)
      if (_0xb35a92 || !(_0x577955 in _0x341225)) {
        if (!_0xb35a92)
          _0xb35a92 = Array[_0x40e422(1897)][_0x40e422(1215)][_0x40e422(1206)](_0x341225, 0, _0x577955);
        _0xb35a92[_0x577955] = _0x341225[_0x577955];
      }
  }
  return _0x130f2d[_0x40e422(2090)](_0xb35a92 || Array[_0x40e422(1897)]["slice"]["call"](_0x341225));
}, $1615705ecc6adca3$var$LOG_PREFIX = _0x780a7e(443), $1615705ecc6adca3$export$243e62d78d3b544d;
(function(_0x1f03ef) {
  var _0x5e993b = _0x780a7e;
  _0x1f03ef[_0x1f03ef[_0x5e993b(2020)] = 0] = _0x5e993b(2020), _0x1f03ef[_0x1f03ef[_0x5e993b(1975)] = 1] = _0x5e993b(1975), _0x1f03ef[_0x1f03ef["Warnings"] = 2] = _0x5e993b(1903), _0x1f03ef[_0x1f03ef[_0x5e993b(421)] = 3] = _0x5e993b(421);
})($1615705ecc6adca3$export$243e62d78d3b544d || ($1615705ecc6adca3$export$243e62d78d3b544d = {}));
var $1615705ecc6adca3$var$Logger = function() {
  var _0x59e54b = _0x780a7e;
  function _0xbf57bc() {
    var _0xad8279 = _0x3001;
    this[_0xad8279(1585)] = $1615705ecc6adca3$export$243e62d78d3b544d[_0xad8279(2020)];
  }
  return Object[_0x59e54b(1564)](_0xbf57bc["prototype"], _0x59e54b(961), { "get": function() {
    var _0x5f0bbd = _0x59e54b;
    return this[_0x5f0bbd(1585)];
  }, "set": function(_0x5aa3e9) {
    var _0x654b3c = _0x59e54b;
    this[_0x654b3c(1585)] = _0x5aa3e9;
  }, "enumerable": ![], "configurable": !![] }), _0xbf57bc[_0x59e54b(1897)]["log"] = function() {
    var _0x4f5f74 = _0x59e54b, _0x3275e7 = [];
    for (var _0x4596d0 = 0; _0x4596d0 < arguments[_0x4f5f74(1965)]; _0x4596d0++)
      _0x3275e7[_0x4596d0] = arguments[_0x4596d0];
    if (this["_logLevel"] >= $1615705ecc6adca3$export$243e62d78d3b544d[_0x4f5f74(421)])
      this[_0x4f5f74(1290)][_0x4f5f74(2150)](this, $1615705ecc6adca3$var$__spreadArray([$1615705ecc6adca3$export$243e62d78d3b544d[_0x4f5f74(421)]], $1615705ecc6adca3$var$__read(_0x3275e7), ![]));
  }, _0xbf57bc["prototype"][_0x59e54b(1985)] = function() {
    var _0x27cca8 = _0x59e54b, _0x1f2fe0 = [];
    for (var _0x35be9d = 0; _0x35be9d < arguments[_0x27cca8(1965)]; _0x35be9d++)
      _0x1f2fe0[_0x35be9d] = arguments[_0x35be9d];
    if (this["_logLevel"] >= $1615705ecc6adca3$export$243e62d78d3b544d[_0x27cca8(1903)])
      this[_0x27cca8(1290)][_0x27cca8(2150)](this, $1615705ecc6adca3$var$__spreadArray([$1615705ecc6adca3$export$243e62d78d3b544d[_0x27cca8(1903)]], $1615705ecc6adca3$var$__read(_0x1f2fe0), ![]));
  }, _0xbf57bc["prototype"]["error"] = function() {
    var _0x21bd69 = _0x59e54b, _0x3b62dd = [];
    for (var _0x88219 = 0; _0x88219 < arguments["length"]; _0x88219++)
      _0x3b62dd[_0x88219] = arguments[_0x88219];
    if (this[_0x21bd69(1585)] >= $1615705ecc6adca3$export$243e62d78d3b544d[_0x21bd69(1975)])
      this["_print"][_0x21bd69(2150)](this, $1615705ecc6adca3$var$__spreadArray([$1615705ecc6adca3$export$243e62d78d3b544d["Errors"]], $1615705ecc6adca3$var$__read(_0x3b62dd), ![]));
  }, _0xbf57bc[_0x59e54b(1897)][_0x59e54b(387)] = function(_0xfe628c) {
    var _0x372efa = _0x59e54b;
    this[_0x372efa(1290)] = _0xfe628c;
  }, _0xbf57bc[_0x59e54b(1897)][_0x59e54b(1290)] = function(_0x351d3d) {
    var _0x452d15 = _0x59e54b, _0x3d92cd = [];
    for (var _0x3d462b = 1; _0x3d462b < arguments[_0x452d15(1965)]; _0x3d462b++)
      _0x3d92cd[_0x3d462b - 1] = arguments[_0x3d462b];
    var _0x33f392 = $1615705ecc6adca3$var$__spreadArray([$1615705ecc6adca3$var$LOG_PREFIX], $1615705ecc6adca3$var$__read(_0x3d92cd), ![]);
    for (var _0xb40e1e in _0x33f392)
      if (_0x33f392[_0xb40e1e] instanceof Error)
        _0x33f392[_0xb40e1e] = "(" + _0x33f392[_0xb40e1e][_0x452d15(765)] + ") " + _0x33f392[_0xb40e1e][_0x452d15(510)];
    if (_0x351d3d >= $1615705ecc6adca3$export$243e62d78d3b544d[_0x452d15(421)])
      console[_0x452d15(942)][_0x452d15(2150)](console, $1615705ecc6adca3$var$__spreadArray([], $1615705ecc6adca3$var$__read(_0x33f392), ![]));
    else {
      if (_0x351d3d >= $1615705ecc6adca3$export$243e62d78d3b544d[_0x452d15(1903)])
        console[_0x452d15(1985)][_0x452d15(2150)](console, $1615705ecc6adca3$var$__spreadArray([_0x452d15(1462)], $1615705ecc6adca3$var$__read(_0x33f392), ![]));
      else {
        if (_0x351d3d >= $1615705ecc6adca3$export$243e62d78d3b544d["Errors"])
          console[_0x452d15(2165)][_0x452d15(2150)](console, $1615705ecc6adca3$var$__spreadArray(["ERROR"], $1615705ecc6adca3$var$__read(_0x33f392), ![]));
      }
    }
  }, _0xbf57bc;
}(), $1615705ecc6adca3$export$2e2bcd8739ae039 = new $1615705ecc6adca3$var$Logger(), $31d11a8d122cb4b7$exports = {};
$parcel$export($31d11a8d122cb4b7$exports, _0x780a7e(1471), () => $31d11a8d122cb4b7$export$4798917dbf149b79, (_0x4afb06) => $31d11a8d122cb4b7$export$4798917dbf149b79 = _0x4afb06);
var $60fadef21a2daafc$export$3157d57b4135e3bc;
(function(_0x5581d5) {
  var _0xecd17e = _0x780a7e;
  _0x5581d5[_0xecd17e(1810)] = _0xecd17e(797), _0x5581d5[_0xecd17e(1249)] = "media";
})($60fadef21a2daafc$export$3157d57b4135e3bc || ($60fadef21a2daafc$export$3157d57b4135e3bc = {}));
var $60fadef21a2daafc$export$9547aaa2e39030ff;
(function(_0x1b05af) {
  var _0xd83cb4 = _0x780a7e;
  _0x1b05af["BrowserIncompatible"] = "browser-incompatible", _0x1b05af[_0xd83cb4(758)] = _0xd83cb4(1055), _0x1b05af["InvalidID"] = _0xd83cb4(1147), _0x1b05af[_0xd83cb4(2053)] = "invalid-key", _0x1b05af["Network"] = _0xd83cb4(1581), _0x1b05af[_0xd83cb4(751)] = _0xd83cb4(1716), _0x1b05af["SslUnavailable"] = _0xd83cb4(1859), _0x1b05af["ServerError"] = _0xd83cb4(572), _0x1b05af["SocketError"] = _0xd83cb4(1263), _0x1b05af[_0xd83cb4(1877)] = _0xd83cb4(1947), _0x1b05af[_0xd83cb4(529)] = _0xd83cb4(1163), _0x1b05af["WebRTC"] = _0xd83cb4(1422);
})($60fadef21a2daafc$export$9547aaa2e39030ff || ($60fadef21a2daafc$export$9547aaa2e39030ff = {}));
var $60fadef21a2daafc$export$89f507cf986a947;
(function(_0x3d8e52) {
  var _0x40a79d = _0x780a7e;
  _0x3d8e52[_0x40a79d(1366)] = _0x40a79d(1945), _0x3d8e52[_0x40a79d(483)] = _0x40a79d(1620), _0x3d8e52[_0x40a79d(2010)] = _0x40a79d(962);
})($60fadef21a2daafc$export$89f507cf986a947 || ($60fadef21a2daafc$export$89f507cf986a947 = {}));
var $60fadef21a2daafc$export$3b5c4a4b6354f023;
(function(_0x31500d) {
  var _0x25db67 = _0x780a7e;
  _0x31500d[_0x25db67(989)] = _0x25db67(510), _0x31500d[_0x25db67(758)] = _0x25db67(1055), _0x31500d[_0x25db67(462)] = _0x25db67(2165), _0x31500d["Close"] = _0x25db67(1169);
})($60fadef21a2daafc$export$3b5c4a4b6354f023 || ($60fadef21a2daafc$export$3b5c4a4b6354f023 = {}));
var $60fadef21a2daafc$export$adb4a1754da6f10d;
(function(_0x2a69ec) {
  var _0x5a6b4a = _0x780a7e;
  _0x2a69ec[_0x5a6b4a(1720)] = _0x5a6b4a(1172), _0x2a69ec[_0x5a6b4a(388)] = _0x5a6b4a(616), _0x2a69ec["Offer"] = "OFFER", _0x2a69ec[_0x5a6b4a(1465)] = _0x5a6b4a(790), _0x2a69ec[_0x5a6b4a(573)] = _0x5a6b4a(2167), _0x2a69ec[_0x5a6b4a(462)] = _0x5a6b4a(1899), _0x2a69ec[_0x5a6b4a(2120)] = _0x5a6b4a(1216), _0x2a69ec[_0x5a6b4a(2053)] = "INVALID-KEY", _0x2a69ec[_0x5a6b4a(708)] = _0x5a6b4a(574), _0x2a69ec["Expire"] = _0x5a6b4a(932);
})($60fadef21a2daafc$export$adb4a1754da6f10d || ($60fadef21a2daafc$export$adb4a1754da6f10d = {}));
var $0d1ed891c5cb27c0$exports = {};
$0d1ed891c5cb27c0$exports = JSON[_0x780a7e(611)](_0x780a7e(2041));
var $31d11a8d122cb4b7$var$__extends = function() {
  var _0xa23a11 = function(_0x91055, _0x2e37c4) {
    var _0x48b0ba = _0x3001;
    return _0xa23a11 = Object[_0x48b0ba(2146)] || { "__proto__": [] } instanceof Array && function(_0x227815, _0x1c7d7d) {
      var _0x2d04f6 = _0x48b0ba;
      _0x227815[_0x2d04f6(1749)] = _0x1c7d7d;
    } || function(_0x159a2b, _0x3bb697) {
      var _0xe8de48 = _0x48b0ba;
      for (var _0x261e8e in _0x3bb697)
        if (Object[_0xe8de48(1897)][_0xe8de48(1309)][_0xe8de48(1206)](_0x3bb697, _0x261e8e))
          _0x159a2b[_0x261e8e] = _0x3bb697[_0x261e8e];
    }, _0xa23a11(_0x91055, _0x2e37c4);
  };
  return function(_0x5804a9, _0x21b649) {
    var _0x49a4a0 = _0x3001;
    if (typeof _0x21b649 !== _0x49a4a0(389) && _0x21b649 !== null)
      throw new TypeError(_0x49a4a0(1156) + String(_0x21b649) + " is not a constructor or null");
    _0xa23a11(_0x5804a9, _0x21b649);
    function _0x2b0ff1() {
      var _0x5ee772 = _0x49a4a0;
      this[_0x5ee772(1893)] = _0x5804a9;
    }
    _0x5804a9["prototype"] = _0x21b649 === null ? Object[_0x49a4a0(1409)](_0x21b649) : (_0x2b0ff1[_0x49a4a0(1897)] = _0x21b649["prototype"], new _0x2b0ff1());
  };
}(), $31d11a8d122cb4b7$var$__read = function(_0xf5a370, _0x37be97) {
  var _0x3383f0 = _0x780a7e, _0x242f50 = typeof Symbol === "function" && _0xf5a370[Symbol[_0x3383f0(1549)]];
  if (!_0x242f50)
    return _0xf5a370;
  var _0x89f874 = _0x242f50["call"](_0xf5a370), _0x34685f, _0x367418 = [], _0x34d412;
  try {
    while ((_0x37be97 === void 0 || _0x37be97-- > 0) && !(_0x34685f = _0x89f874[_0x3383f0(670)]())[_0x3383f0(1353)])
      _0x367418[_0x3383f0(1991)](_0x34685f[_0x3383f0(819)]);
  } catch (_0x170c61) {
    _0x34d412 = { "error": _0x170c61 };
  } finally {
    try {
      if (_0x34685f && !_0x34685f["done"] && (_0x242f50 = _0x89f874[_0x3383f0(2095)]))
        _0x242f50[_0x3383f0(1206)](_0x89f874);
    } finally {
      if (_0x34d412)
        throw _0x34d412[_0x3383f0(2165)];
    }
  }
  return _0x367418;
}, $31d11a8d122cb4b7$var$__spreadArray = function(_0xf6346, _0x46aae1, _0x469db1) {
  var _0x1309d0 = _0x780a7e;
  if (_0x469db1 || arguments["length"] === 2) {
    for (var _0x5e1631 = 0, _0x406fbf = _0x46aae1["length"], _0x52f72d; _0x5e1631 < _0x406fbf; _0x5e1631++)
      if (_0x52f72d || !(_0x5e1631 in _0x46aae1)) {
        if (!_0x52f72d)
          _0x52f72d = Array[_0x1309d0(1897)][_0x1309d0(1215)]["call"](_0x46aae1, 0, _0x5e1631);
        _0x52f72d[_0x5e1631] = _0x46aae1[_0x5e1631];
      }
  }
  return _0xf6346[_0x1309d0(2090)](_0x52f72d || Array[_0x1309d0(1897)][_0x1309d0(1215)][_0x1309d0(1206)](_0x46aae1));
}, $31d11a8d122cb4b7$var$__values = function(_0x129047) {
  var _0x240c2f = _0x780a7e, _0x2768df = typeof Symbol === _0x240c2f(389) && Symbol[_0x240c2f(1549)], _0x1c85ad = _0x2768df && _0x129047[_0x2768df], _0xc578ca = 0;
  if (_0x1c85ad)
    return _0x1c85ad[_0x240c2f(1206)](_0x129047);
  if (_0x129047 && typeof _0x129047[_0x240c2f(1965)] === _0x240c2f(2203))
    return { "next": function() {
      var _0x11f8fe = _0x240c2f;
      if (_0x129047 && _0xc578ca >= _0x129047[_0x11f8fe(1965)])
        _0x129047 = void 0;
      return { "value": _0x129047 && _0x129047[_0xc578ca++], "done": !_0x129047 };
    } };
  throw new TypeError(_0x2768df ? _0x240c2f(552) : _0x240c2f(1657));
}, $31d11a8d122cb4b7$export$4798917dbf149b79 = function(_0x1186e0) {
  var _0x4dd835 = _0x780a7e;
  $31d11a8d122cb4b7$var$__extends(_0x5e4f28, _0x1186e0);
  function _0x5e4f28(_0x265128, _0x46211a, _0x587beb, _0x8d6d75, _0x329139, _0x396388) {
    var _0x235dee = _0x3001;
    if (_0x396388 === void 0)
      _0x396388 = 5e3;
    var _0x523b82 = _0x1186e0[_0x235dee(1206)](this) || this;
    _0x523b82["pingInterval"] = _0x396388, _0x523b82[_0x235dee(1007)] = !![], _0x523b82[_0x235dee(1450)] = [];
    var _0x5540f2 = _0x265128 ? _0x235dee(1930) : _0x235dee(763);
    return _0x523b82[_0x235dee(928)] = _0x5540f2 + _0x46211a + ":" + _0x587beb + _0x8d6d75 + _0x235dee(513) + _0x329139, _0x523b82;
  }
  return _0x5e4f28[_0x4dd835(1897)][_0x4dd835(2014)] = function(_0x25fecf, _0x4a6e11) {
    var _0x17703f = _0x4dd835, _0x24e3e5 = this;
    this[_0x17703f(1218)] = _0x25fecf;
    var _0x260ebd = ""[_0x17703f(2090)](this["_baseUrl"], _0x17703f(1452))[_0x17703f(2090)](_0x25fecf, _0x17703f(1615))[_0x17703f(2090)](_0x4a6e11);
    if (!!this["_socket"] || !this[_0x17703f(1007)])
      return;
    this[_0x17703f(1761)] = new WebSocket(_0x260ebd + "&version=" + $0d1ed891c5cb27c0$exports["version"]), this[_0x17703f(1007)] = ![], this[_0x17703f(1761)][_0x17703f(1763)] = function(_0x27eb03) {
      var _0x10beb7 = _0x17703f, _0x46bd83;
      try {
        _0x46bd83 = JSON[_0x10beb7(611)](_0x27eb03[_0x10beb7(797)]), $1615705ecc6adca3$exports["default"]["log"](_0x10beb7(1336), _0x46bd83);
      } catch (_0x3801ea) {
        $1615705ecc6adca3$exports[_0x10beb7(1744)][_0x10beb7(942)](_0x10beb7(655), _0x27eb03[_0x10beb7(797)]);
        return;
      }
      _0x24e3e5[_0x10beb7(2099)]($60fadef21a2daafc$export$3b5c4a4b6354f023[_0x10beb7(989)], _0x46bd83);
    }, this[_0x17703f(1761)][_0x17703f(780)] = function(_0x20dff2) {
      var _0x2cf289 = _0x17703f;
      if (_0x24e3e5[_0x2cf289(1007)])
        return;
      $1615705ecc6adca3$exports[_0x2cf289(1744)]["log"]("Socket closed.", _0x20dff2), _0x24e3e5["_cleanup"](), _0x24e3e5["_disconnected"] = !![], _0x24e3e5["emit"]($60fadef21a2daafc$export$3b5c4a4b6354f023[_0x2cf289(758)]);
    }, this[_0x17703f(1761)][_0x17703f(993)] = function() {
      var _0x4b59d3 = _0x17703f;
      if (_0x24e3e5[_0x4b59d3(1007)])
        return;
      _0x24e3e5[_0x4b59d3(1836)](), $1615705ecc6adca3$exports["default"]["log"]("Socket open"), _0x24e3e5["_scheduleHeartbeat"]();
    };
  }, _0x5e4f28[_0x4dd835(1897)][_0x4dd835(1035)] = function() {
    var _0x25e39c = _0x4dd835, _0x45feb8 = this;
    this[_0x25e39c(1518)] = setTimeout(function() {
      var _0x2cc562 = _0x25e39c;
      _0x45feb8[_0x2cc562(838)]();
    }, this[_0x25e39c(1569)]);
  }, _0x5e4f28[_0x4dd835(1897)]["_sendHeartbeat"] = function() {
    var _0xbaaaf0 = _0x4dd835;
    if (!this[_0xbaaaf0(1479)]()) {
      $1615705ecc6adca3$exports[_0xbaaaf0(1744)]["log"](_0xbaaaf0(1179));
      return;
    }
    var _0x17b0e4 = JSON[_0xbaaaf0(2063)]({ "type": $60fadef21a2daafc$export$adb4a1754da6f10d[_0xbaaaf0(1720)] });
    this[_0xbaaaf0(1761)][_0xbaaaf0(1241)](_0x17b0e4), this[_0xbaaaf0(1035)]();
  }, _0x5e4f28["prototype"]["_wsOpen"] = function() {
    var _0x83c116 = _0x4dd835;
    return !!this[_0x83c116(1761)] && this[_0x83c116(1761)][_0x83c116(654)] === 1;
  }, _0x5e4f28[_0x4dd835(1897)][_0x4dd835(1836)] = function() {
    var _0x40d24f = _0x4dd835, _0x48721b, _0x3fd51f, _0x436619 = $31d11a8d122cb4b7$var$__spreadArray([], $31d11a8d122cb4b7$var$__read(this["_messagesQueue"]), ![]);
    this[_0x40d24f(1450)] = [];
    try {
      for (var _0x3dfa6e = $31d11a8d122cb4b7$var$__values(_0x436619), _0x22d6bb = _0x3dfa6e[_0x40d24f(670)](); !_0x22d6bb[_0x40d24f(1353)]; _0x22d6bb = _0x3dfa6e["next"]()) {
        var _0x18c7d9 = _0x22d6bb["value"];
        this[_0x40d24f(1241)](_0x18c7d9);
      }
    } catch (_0x2c7183) {
      _0x48721b = { "error": _0x2c7183 };
    } finally {
      try {
        if (_0x22d6bb && !_0x22d6bb[_0x40d24f(1353)] && (_0x3fd51f = _0x3dfa6e[_0x40d24f(2095)]))
          _0x3fd51f[_0x40d24f(1206)](_0x3dfa6e);
      } finally {
        if (_0x48721b)
          throw _0x48721b["error"];
      }
    }
  }, _0x5e4f28[_0x4dd835(1897)][_0x4dd835(1241)] = function(_0x30283a) {
    var _0x121ac9 = _0x4dd835;
    if (this[_0x121ac9(1007)])
      return;
    if (!this["_id"]) {
      this[_0x121ac9(1450)][_0x121ac9(1991)](_0x30283a);
      return;
    }
    if (!_0x30283a["type"]) {
      this[_0x121ac9(2099)]($60fadef21a2daafc$export$3b5c4a4b6354f023["Error"], _0x121ac9(2164));
      return;
    }
    if (!this[_0x121ac9(1479)]())
      return;
    var _0x5f6dab = JSON[_0x121ac9(2063)](_0x30283a);
    this[_0x121ac9(1761)][_0x121ac9(1241)](_0x5f6dab);
  }, _0x5e4f28[_0x4dd835(1897)][_0x4dd835(1169)] = function() {
    var _0x51125d = _0x4dd835;
    if (this["_disconnected"])
      return;
    this[_0x51125d(1688)](), this["_disconnected"] = !![];
  }, _0x5e4f28[_0x4dd835(1897)][_0x4dd835(1688)] = function() {
    var _0xece4e0 = _0x4dd835;
    this["_socket"] && (this["_socket"][_0xece4e0(993)] = this[_0xece4e0(1761)]["onmessage"] = this[_0xece4e0(1761)]["onclose"] = null, this[_0xece4e0(1761)]["close"](), this[_0xece4e0(1761)] = void 0), clearTimeout(this[_0xece4e0(1518)]);
  }, _0x5e4f28;
}($ac9b757d51178e15$exports["EventEmitter"]), $353dee38f9ab557b$exports = {};
$parcel$export($353dee38f9ab557b$exports, _0x780a7e(1369), () => $353dee38f9ab557b$export$4a84e95a2324ac29, (_0x56b5ec) => $353dee38f9ab557b$export$4a84e95a2324ac29 = _0x56b5ec);
var $77f14d3e81888156$exports = {};
$parcel$export($77f14d3e81888156$exports, _0x780a7e(867), () => $77f14d3e81888156$export$89e6bb5ad64bf4a, (_0x5872da) => $77f14d3e81888156$export$89e6bb5ad64bf4a = _0x5872da);
var $77f14d3e81888156$var$__assign = function() {
  var _0x8771f0 = _0x780a7e;
  return $77f14d3e81888156$var$__assign = Object[_0x8771f0(1153)] || function(_0x48567b) {
    var _0x136f94 = _0x8771f0;
    for (var _0x26d276, _0x1c0a38 = 1, _0x27eae7 = arguments[_0x136f94(1965)]; _0x1c0a38 < _0x27eae7; _0x1c0a38++) {
      _0x26d276 = arguments[_0x1c0a38];
      for (var _0x2400b3 in _0x26d276)
        if (Object["prototype"][_0x136f94(1309)]["call"](_0x26d276, _0x2400b3))
          _0x48567b[_0x2400b3] = _0x26d276[_0x2400b3];
    }
    return _0x48567b;
  }, $77f14d3e81888156$var$__assign[_0x8771f0(2150)](this, arguments);
}, $77f14d3e81888156$var$__awaiter = function(_0x20b01f, _0x7d4be5, _0x2d483b, _0x50855b) {
  function _0x288a91(_0x533771) {
    return _0x533771 instanceof _0x2d483b ? _0x533771 : new _0x2d483b(function(_0xebfb58) {
      _0xebfb58(_0x533771);
    });
  }
  return new (_0x2d483b || (_0x2d483b = Promise))(function(_0x507e94, _0xd36d6d) {
    var _0x48cced = _0x3001;
    function _0x330866(_0x42ceac) {
      var _0x2c96c3 = _0x3001;
      try {
        _0x1ff774(_0x50855b[_0x2c96c3(670)](_0x42ceac));
      } catch (_0xea8477) {
        _0xd36d6d(_0xea8477);
      }
    }
    function _0x17d7bb(_0x29e502) {
      var _0x4edd53 = _0x3001;
      try {
        _0x1ff774(_0x50855b[_0x4edd53(1698)](_0x29e502));
      } catch (_0xbfbd45) {
        _0xd36d6d(_0xbfbd45);
      }
    }
    function _0x1ff774(_0x595e90) {
      var _0x56b5fb = _0x3001;
      _0x595e90[_0x56b5fb(1353)] ? _0x507e94(_0x595e90[_0x56b5fb(819)]) : _0x288a91(_0x595e90[_0x56b5fb(819)])[_0x56b5fb(1902)](_0x330866, _0x17d7bb);
    }
    _0x1ff774((_0x50855b = _0x50855b[_0x48cced(2150)](_0x20b01f, _0x7d4be5 || []))[_0x48cced(670)]());
  });
}, $77f14d3e81888156$var$__generator = function(_0x4743f2, _0x590470) {
  var _0x2a9c04 = _0x780a7e, _0x2799b5 = { "label": 0, "sent": function() {
    if (_0x153fb8[0] & 1)
      throw _0x153fb8[1];
    return _0x153fb8[1];
  }, "trys": [], "ops": [] }, _0x5a4c56, _0x4066c9, _0x153fb8, _0x1715c0;
  return _0x1715c0 = { "next": _0xd0e32b(0), "throw": _0xd0e32b(1), "return": _0xd0e32b(2) }, typeof Symbol === "function" && (_0x1715c0[Symbol[_0x2a9c04(1549)]] = function() {
    return this;
  }), _0x1715c0;
  function _0xd0e32b(_0x21e131) {
    return function(_0x34fc09) {
      return _0x44edea([_0x21e131, _0x34fc09]);
    };
  }
  function _0x44edea(_0x423ba4) {
    var _0x464a9a = _0x2a9c04;
    if (_0x5a4c56)
      throw new TypeError(_0x464a9a(1071));
    while (_0x2799b5)
      try {
        if (_0x5a4c56 = 1, _0x4066c9 && (_0x153fb8 = _0x423ba4[0] & 2 ? _0x4066c9[_0x464a9a(2095)] : _0x423ba4[0] ? _0x4066c9["throw"] || ((_0x153fb8 = _0x4066c9["return"]) && _0x153fb8[_0x464a9a(1206)](_0x4066c9), 0) : _0x4066c9["next"]) && !(_0x153fb8 = _0x153fb8["call"](_0x4066c9, _0x423ba4[1]))[_0x464a9a(1353)])
          return _0x153fb8;
        if (_0x4066c9 = 0, _0x153fb8)
          _0x423ba4 = [_0x423ba4[0] & 2, _0x153fb8["value"]];
        switch (_0x423ba4[0]) {
          case 0:
          case 1:
            _0x153fb8 = _0x423ba4;
            break;
          case 4:
            _0x2799b5[_0x464a9a(689)]++;
            return { "value": _0x423ba4[1], "done": ![] };
          case 5:
            _0x2799b5[_0x464a9a(689)]++, _0x4066c9 = _0x423ba4[1], _0x423ba4 = [0];
            continue;
          case 7:
            _0x423ba4 = _0x2799b5[_0x464a9a(1068)][_0x464a9a(1466)](), _0x2799b5[_0x464a9a(862)][_0x464a9a(1466)]();
            continue;
          default:
            if (!(_0x153fb8 = _0x2799b5["trys"], _0x153fb8 = _0x153fb8[_0x464a9a(1965)] > 0 && _0x153fb8[_0x153fb8[_0x464a9a(1965)] - 1]) && (_0x423ba4[0] === 6 || _0x423ba4[0] === 2)) {
              _0x2799b5 = 0;
              continue;
            }
            if (_0x423ba4[0] === 3 && (!_0x153fb8 || _0x423ba4[1] > _0x153fb8[0] && _0x423ba4[1] < _0x153fb8[3])) {
              _0x2799b5[_0x464a9a(689)] = _0x423ba4[1];
              break;
            }
            if (_0x423ba4[0] === 6 && _0x2799b5["label"] < _0x153fb8[1]) {
              _0x2799b5[_0x464a9a(689)] = _0x153fb8[1], _0x153fb8 = _0x423ba4;
              break;
            }
            if (_0x153fb8 && _0x2799b5[_0x464a9a(689)] < _0x153fb8[2]) {
              _0x2799b5[_0x464a9a(689)] = _0x153fb8[2], _0x2799b5[_0x464a9a(1068)][_0x464a9a(1991)](_0x423ba4);
              break;
            }
            if (_0x153fb8[2])
              _0x2799b5[_0x464a9a(1068)][_0x464a9a(1466)]();
            _0x2799b5[_0x464a9a(862)][_0x464a9a(1466)]();
            continue;
        }
        _0x423ba4 = _0x590470["call"](_0x4743f2, _0x2799b5);
      } catch (_0x89a292) {
        _0x423ba4 = [6, _0x89a292], _0x4066c9 = 0;
      } finally {
        _0x5a4c56 = _0x153fb8 = 0;
      }
    if (_0x423ba4[0] & 5)
      throw _0x423ba4[1];
    return { "value": _0x423ba4[0] ? _0x423ba4[1] : void 0, "done": !![] };
  }
}, $77f14d3e81888156$export$89e6bb5ad64bf4a = function() {
  var _0x4124af = _0x780a7e;
  function _0x4d075d(_0x9b16be) {
    var _0x33a62d = _0x3001;
    this[_0x33a62d(2089)] = _0x9b16be;
  }
  return _0x4d075d["prototype"]["startConnection"] = function(_0x44988e) {
    var _0x29cf84 = _0x3001, _0x451e3d = this[_0x29cf84(2015)]();
    this[_0x29cf84(2089)][_0x29cf84(1934)] = _0x451e3d;
    if (this[_0x29cf84(2089)][_0x29cf84(1514)] === $60fadef21a2daafc$export$3157d57b4135e3bc["Media"] && _0x44988e[_0x29cf84(1556)])
      this["_addTracksToConnection"](_0x44988e["_stream"], _0x451e3d);
    if (_0x44988e[_0x29cf84(1765)]) {
      if (this[_0x29cf84(2089)]["type"] === $60fadef21a2daafc$export$3157d57b4135e3bc[_0x29cf84(1810)]) {
        var _0x382025 = this[_0x29cf84(2089)], _0x45809e = { "ordered": !!_0x44988e[_0x29cf84(2179)] }, _0x30c273 = _0x451e3d[_0x29cf84(1717)](_0x382025[_0x29cf84(689)], _0x45809e);
        _0x382025["initialize"](_0x30c273);
      }
      this[_0x29cf84(1542)]();
    } else
      this["handleSDP"](_0x29cf84(635), _0x44988e[_0x29cf84(2016)]);
  }, _0x4d075d[_0x4124af(1897)][_0x4124af(2015)] = function() {
    var _0x3d54e6 = _0x4124af;
    $1615705ecc6adca3$exports[_0x3d54e6(1744)][_0x3d54e6(942)](_0x3d54e6(1363));
    var _0x768c0c = new RTCPeerConnection(this[_0x3d54e6(2089)][_0x3d54e6(685)][_0x3d54e6(686)][_0x3d54e6(835)]);
    return this[_0x3d54e6(2045)](_0x768c0c), _0x768c0c;
  }, _0x4d075d[_0x4124af(1897)][_0x4124af(2045)] = function(_0xac9cac) {
    var _0x342eed = _0x4124af, _0x2ffb48 = this, _0x564bb8 = this[_0x342eed(2089)][_0x342eed(1262)], _0x38ff51 = this[_0x342eed(2089)][_0x342eed(485)], _0x539d8c = this["connection"]["type"], _0x1aa428 = this[_0x342eed(2089)]["provider"];
    $1615705ecc6adca3$exports[_0x342eed(1744)][_0x342eed(942)](_0x342eed(2139)), _0xac9cac["onicecandidate"] = function(_0xe66ac3) {
      var _0x4fbac0 = _0x342eed;
      if (!_0xe66ac3[_0x4fbac0(696)] || !_0xe66ac3[_0x4fbac0(696)][_0x4fbac0(696)])
        return;
      $1615705ecc6adca3$exports[_0x4fbac0(1744)]["log"]("Received ICE candidates for "[_0x4fbac0(2090)](_0x564bb8, ":"), _0xe66ac3[_0x4fbac0(696)]), _0x1aa428["socket"][_0x4fbac0(1241)]({ "type": $60fadef21a2daafc$export$adb4a1754da6f10d[_0x4fbac0(388)], "payload": { "candidate": _0xe66ac3["candidate"], "type": _0x539d8c, "connectionId": _0x38ff51 }, "dst": _0x564bb8 });
    }, _0xac9cac[_0x342eed(1457)] = function() {
      var _0x450c70 = _0x342eed;
      switch (_0xac9cac["iceConnectionState"]) {
        case _0x450c70(977):
          $1615705ecc6adca3$exports["default"][_0x450c70(942)](_0x450c70(445) + _0x564bb8), _0x2ffb48[_0x450c70(2089)][_0x450c70(2099)](_0x450c70(2165), new Error("Negotiation of connection to " + _0x564bb8 + _0x450c70(1933))), _0x2ffb48["connection"]["close"]();
          break;
        case _0x450c70(498):
          $1615705ecc6adca3$exports[_0x450c70(1744)][_0x450c70(942)](_0x450c70(1772) + _0x564bb8), _0x2ffb48["connection"][_0x450c70(2099)](_0x450c70(2165), new Error(_0x450c70(804) + _0x564bb8 + _0x450c70(1916))), _0x2ffb48[_0x450c70(2089)]["close"]();
          break;
        case _0x450c70(1055):
          $1615705ecc6adca3$exports[_0x450c70(1744)][_0x450c70(942)](_0x450c70(340) + _0x564bb8);
          break;
        case _0x450c70(2118):
          _0xac9cac["onicecandidate"] = $06cb531ed7840f78$export$7debb50ef11d5e0b[_0x450c70(408)];
          break;
      }
      _0x2ffb48[_0x450c70(2089)][_0x450c70(2099)](_0x450c70(885), _0xac9cac["iceConnectionState"]);
    }, $1615705ecc6adca3$exports[_0x342eed(1744)]["log"]("Listening for data channel"), _0xac9cac[_0x342eed(1984)] = function(_0x3b9704) {
      var _0x22e4bc = _0x342eed;
      $1615705ecc6adca3$exports[_0x22e4bc(1744)][_0x22e4bc(942)](_0x22e4bc(756));
      var _0x45c339 = _0x3b9704[_0x22e4bc(1052)], _0x5b9466 = _0x1aa428[_0x22e4bc(1783)](_0x564bb8, _0x38ff51);
      _0x5b9466[_0x22e4bc(2102)](_0x45c339);
    }, $1615705ecc6adca3$exports["default"][_0x342eed(942)](_0x342eed(1178)), _0xac9cac[_0x342eed(1358)] = function(_0x2bfd91) {
      var _0x35b67c = _0x342eed;
      $1615705ecc6adca3$exports[_0x35b67c(1744)]["log"](_0x35b67c(836));
      var _0x222278 = _0x2bfd91["streams"][0], _0x25021f = _0x1aa428[_0x35b67c(1783)](_0x564bb8, _0x38ff51);
      if (_0x25021f[_0x35b67c(1514)] === $60fadef21a2daafc$export$3157d57b4135e3bc["Media"]) {
        var _0x1d7684 = _0x25021f;
        _0x2ffb48[_0x35b67c(1584)](_0x222278, _0x1d7684);
      }
    };
  }, _0x4d075d[_0x4124af(1897)][_0x4124af(393)] = function() {
    var _0x55fd55 = _0x4124af;
    $1615705ecc6adca3$exports[_0x55fd55(1744)][_0x55fd55(942)](_0x55fd55(653) + this[_0x55fd55(2089)]["peer"]);
    var _0x50d678 = this[_0x55fd55(2089)][_0x55fd55(1934)];
    if (!_0x50d678)
      return;
    this[_0x55fd55(2089)]["peerConnection"] = null, _0x50d678[_0x55fd55(549)] = _0x50d678[_0x55fd55(1457)] = _0x50d678[_0x55fd55(1984)] = _0x50d678["ontrack"] = function() {
    };
    var _0xe259bc = _0x50d678[_0x55fd55(1327)] !== "closed", _0x15f971 = ![];
    if (this[_0x55fd55(2089)][_0x55fd55(1514)] === $60fadef21a2daafc$export$3157d57b4135e3bc[_0x55fd55(1810)]) {
      var _0x20a572 = this["connection"], _0x275df5 = _0x20a572[_0x55fd55(1860)];
      if (_0x275df5)
        _0x15f971 = !!_0x275df5[_0x55fd55(654)] && _0x275df5[_0x55fd55(654)] !== _0x55fd55(498);
    }
    if (_0xe259bc || _0x15f971)
      _0x50d678[_0x55fd55(1169)]();
  }, _0x4d075d[_0x4124af(1897)]["_makeOffer"] = function() {
    return $77f14d3e81888156$var$__awaiter(this, void 0, Promise, function() {
      var _0x207533, _0x278a30, _0x1d034b, _0xc9bef6, _0x53aad5, _0x347799, _0x36f995;
      return $77f14d3e81888156$var$__generator(this, function(_0x11b1aa) {
        var _0x24d9f1 = _0x3001;
        switch (_0x11b1aa[_0x24d9f1(689)]) {
          case 0:
            _0x207533 = this["connection"]["peerConnection"], _0x278a30 = this["connection"][_0x24d9f1(685)], _0x11b1aa[_0x24d9f1(689)] = 1;
          case 1:
            _0x11b1aa[_0x24d9f1(862)][_0x24d9f1(1991)]([1, 7, , 8]);
            return [4, _0x207533[_0x24d9f1(1410)](this[_0x24d9f1(2089)][_0x24d9f1(686)][_0x24d9f1(1825)])];
          case 2:
            _0x1d034b = _0x11b1aa[_0x24d9f1(519)](), $1615705ecc6adca3$exports[_0x24d9f1(1744)][_0x24d9f1(942)](_0x24d9f1(1635));
            if (this[_0x24d9f1(2089)][_0x24d9f1(686)][_0x24d9f1(707)] && typeof this["connection"]["options"][_0x24d9f1(707)] === _0x24d9f1(389))
              _0x1d034b["sdp"] = this[_0x24d9f1(2089)][_0x24d9f1(686)][_0x24d9f1(707)](_0x1d034b[_0x24d9f1(2016)]) || _0x1d034b["sdp"];
            _0x11b1aa[_0x24d9f1(689)] = 3;
          case 3:
            _0x11b1aa[_0x24d9f1(862)]["push"]([3, 5, , 6]);
            return [4, _0x207533["setLocalDescription"](_0x1d034b)];
          case 4:
            _0x11b1aa["sent"](), $1615705ecc6adca3$exports[_0x24d9f1(1744)][_0x24d9f1(942)](_0x24d9f1(915), _0x1d034b, _0x24d9f1(987)[_0x24d9f1(2090)](this[_0x24d9f1(2089)][_0x24d9f1(1262)])), _0xc9bef6 = { "sdp": _0x1d034b, "type": this[_0x24d9f1(2089)][_0x24d9f1(1514)], "connectionId": this[_0x24d9f1(2089)][_0x24d9f1(485)], "metadata": this[_0x24d9f1(2089)]["metadata"], "browser": $06cb531ed7840f78$export$7debb50ef11d5e0b[_0x24d9f1(968)] };
            this[_0x24d9f1(2089)][_0x24d9f1(1514)] === $60fadef21a2daafc$export$3157d57b4135e3bc["Data"] && (_0x53aad5 = this[_0x24d9f1(2089)], _0xc9bef6 = $77f14d3e81888156$var$__assign($77f14d3e81888156$var$__assign({}, _0xc9bef6), { "label": _0x53aad5[_0x24d9f1(689)], "reliable": _0x53aad5[_0x24d9f1(2179)], "serialization": _0x53aad5["serialization"] }));
            _0x278a30[_0x24d9f1(908)]["send"]({ "type": $60fadef21a2daafc$export$adb4a1754da6f10d[_0x24d9f1(940)], "payload": _0xc9bef6, "dst": this[_0x24d9f1(2089)]["peer"] });
            return [3, 6];
          case 5:
            _0x347799 = _0x11b1aa[_0x24d9f1(519)]();
            _0x347799 != _0x24d9f1(1359) && (_0x278a30[_0x24d9f1(1733)]($60fadef21a2daafc$export$9547aaa2e39030ff[_0x24d9f1(1307)], _0x347799), $1615705ecc6adca3$exports[_0x24d9f1(1744)][_0x24d9f1(942)]("Failed to setLocalDescription, ", _0x347799));
            return [3, 6];
          case 6:
            return [3, 8];
          case 7:
            _0x36f995 = _0x11b1aa[_0x24d9f1(519)](), _0x278a30[_0x24d9f1(1733)]($60fadef21a2daafc$export$9547aaa2e39030ff[_0x24d9f1(1307)], _0x36f995), $1615705ecc6adca3$exports[_0x24d9f1(1744)][_0x24d9f1(942)](_0x24d9f1(1816), _0x36f995);
            return [3, 8];
          case 8:
            return [2];
        }
      });
    });
  }, _0x4d075d[_0x4124af(1897)]["_makeAnswer"] = function() {
    return $77f14d3e81888156$var$__awaiter(this, void 0, Promise, function() {
      var _0xd6175b, _0x4ab4c8, _0xd4606c, _0xb857b9, _0x2eea8e;
      return $77f14d3e81888156$var$__generator(this, function(_0x49a966) {
        var _0x4e3607 = _0x3001;
        switch (_0x49a966[_0x4e3607(689)]) {
          case 0:
            _0xd6175b = this[_0x4e3607(2089)][_0x4e3607(1934)], _0x4ab4c8 = this[_0x4e3607(2089)][_0x4e3607(685)], _0x49a966[_0x4e3607(689)] = 1;
          case 1:
            _0x49a966[_0x4e3607(862)]["push"]([1, 7, , 8]);
            return [4, _0xd6175b["createAnswer"]()];
          case 2:
            _0xd4606c = _0x49a966[_0x4e3607(519)](), $1615705ecc6adca3$exports[_0x4e3607(1744)][_0x4e3607(942)](_0x4e3607(1864));
            if (this[_0x4e3607(2089)]["options"][_0x4e3607(707)] && typeof this[_0x4e3607(2089)][_0x4e3607(686)][_0x4e3607(707)] === _0x4e3607(389))
              _0xd4606c[_0x4e3607(2016)] = this[_0x4e3607(2089)][_0x4e3607(686)][_0x4e3607(707)](_0xd4606c["sdp"]) || _0xd4606c[_0x4e3607(2016)];
            _0x49a966[_0x4e3607(689)] = 3;
          case 3:
            _0x49a966[_0x4e3607(862)][_0x4e3607(1991)]([3, 5, , 6]);
            return [4, _0xd6175b[_0x4e3607(1392)](_0xd4606c)];
          case 4:
            _0x49a966["sent"](), $1615705ecc6adca3$exports[_0x4e3607(1744)]["log"](_0x4e3607(915), _0xd4606c, _0x4e3607(987)[_0x4e3607(2090)](this[_0x4e3607(2089)]["peer"])), _0x4ab4c8[_0x4e3607(908)]["send"]({ "type": $60fadef21a2daafc$export$adb4a1754da6f10d["Answer"], "payload": { "sdp": _0xd4606c, "type": this[_0x4e3607(2089)]["type"], "connectionId": this[_0x4e3607(2089)]["connectionId"], "browser": $06cb531ed7840f78$export$7debb50ef11d5e0b["browser"] }, "dst": this[_0x4e3607(2089)]["peer"] });
            return [3, 6];
          case 5:
            _0xb857b9 = _0x49a966[_0x4e3607(519)](), _0x4ab4c8["emitError"]($60fadef21a2daafc$export$9547aaa2e39030ff[_0x4e3607(1307)], _0xb857b9), $1615705ecc6adca3$exports[_0x4e3607(1744)]["log"]("Failed to setLocalDescription, ", _0xb857b9);
            return [3, 6];
          case 6:
            return [3, 8];
          case 7:
            _0x2eea8e = _0x49a966["sent"](), _0x4ab4c8["emitError"]($60fadef21a2daafc$export$9547aaa2e39030ff[_0x4e3607(1307)], _0x2eea8e), $1615705ecc6adca3$exports[_0x4e3607(1744)][_0x4e3607(942)](_0x4e3607(1433), _0x2eea8e);
            return [3, 8];
          case 8:
            return [2];
        }
      });
    });
  }, _0x4d075d[_0x4124af(1897)]["handleSDP"] = function(_0x3444e3, _0x4d6ac0) {
    return $77f14d3e81888156$var$__awaiter(this, void 0, Promise, function() {
      var _0x3d2fbe, _0xea897c, _0x5bb2e9, _0x51ccae;
      return $77f14d3e81888156$var$__generator(this, function(_0x284811) {
        var _0x2f8614 = _0x3001;
        switch (_0x284811[_0x2f8614(689)]) {
          case 0:
            _0x4d6ac0 = new RTCSessionDescription(_0x4d6ac0), _0x3d2fbe = this["connection"][_0x2f8614(1934)], _0xea897c = this[_0x2f8614(2089)]["provider"], $1615705ecc6adca3$exports["default"][_0x2f8614(942)](_0x2f8614(2009), _0x4d6ac0), _0x5bb2e9 = this, _0x284811[_0x2f8614(689)] = 1;
          case 1:
            _0x284811[_0x2f8614(862)][_0x2f8614(1991)]([1, 5, , 6]);
            return [4, _0x3d2fbe[_0x2f8614(2140)](_0x4d6ac0)];
          case 2:
            _0x284811[_0x2f8614(519)](), $1615705ecc6adca3$exports[_0x2f8614(1744)][_0x2f8614(942)](_0x2f8614(1696)[_0x2f8614(2090)](_0x3444e3, " for:")[_0x2f8614(2090)](this[_0x2f8614(2089)][_0x2f8614(1262)]));
            if (!(_0x3444e3 === _0x2f8614(635)))
              return [3, 4];
            return [4, _0x5bb2e9["_makeAnswer"]()];
          case 3:
            _0x284811[_0x2f8614(519)](), _0x284811[_0x2f8614(689)] = 4;
          case 4:
            return [3, 6];
          case 5:
            _0x51ccae = _0x284811[_0x2f8614(519)](), _0xea897c[_0x2f8614(1733)]($60fadef21a2daafc$export$9547aaa2e39030ff["WebRTC"], _0x51ccae), $1615705ecc6adca3$exports[_0x2f8614(1744)]["log"](_0x2f8614(748), _0x51ccae);
            return [3, 6];
          case 6:
            return [2];
        }
      });
    });
  }, _0x4d075d[_0x4124af(1897)]["handleCandidate"] = function(_0x1c7a90) {
    return $77f14d3e81888156$var$__awaiter(this, void 0, Promise, function() {
      var _0x1afa09, _0x5c2266, _0x250d82, _0x2bd4a9, _0x5bdae3, _0x53f088;
      return $77f14d3e81888156$var$__generator(this, function(_0x2207b8) {
        var _0x47088d = _0x3001;
        switch (_0x2207b8[_0x47088d(689)]) {
          case 0:
            $1615705ecc6adca3$exports[_0x47088d(1744)][_0x47088d(942)](_0x47088d(2177), _0x1c7a90), _0x1afa09 = _0x1c7a90["candidate"], _0x5c2266 = _0x1c7a90[_0x47088d(864)], _0x250d82 = _0x1c7a90[_0x47088d(382)], _0x2bd4a9 = this["connection"]["peerConnection"], _0x5bdae3 = this[_0x47088d(2089)]["provider"], _0x2207b8[_0x47088d(689)] = 1;
          case 1:
            _0x2207b8[_0x47088d(862)][_0x47088d(1991)]([1, 3, , 4]);
            return [4, _0x2bd4a9[_0x47088d(1820)](new RTCIceCandidate({ "sdpMid": _0x250d82, "sdpMLineIndex": _0x5c2266, "candidate": _0x1afa09 }))];
          case 2:
            _0x2207b8[_0x47088d(519)](), $1615705ecc6adca3$exports[_0x47088d(1744)][_0x47088d(942)](_0x47088d(2019)[_0x47088d(2090)](this["connection"][_0x47088d(1262)]));
            return [3, 4];
          case 3:
            _0x53f088 = _0x2207b8[_0x47088d(519)](), _0x5bdae3[_0x47088d(1733)]($60fadef21a2daafc$export$9547aaa2e39030ff[_0x47088d(1307)], _0x53f088), $1615705ecc6adca3$exports[_0x47088d(1744)][_0x47088d(942)](_0x47088d(440), _0x53f088);
            return [3, 4];
          case 4:
            return [2];
        }
      });
    });
  }, _0x4d075d[_0x4124af(1897)][_0x4124af(1682)] = function(_0x5298a5, _0x2118bb) {
    var _0x126bea = _0x4124af;
    $1615705ecc6adca3$exports[_0x126bea(1744)][_0x126bea(942)](_0x126bea(899)[_0x126bea(2090)](_0x5298a5["id"], _0x126bea(1016)));
    if (!_0x2118bb["addTrack"])
      return $1615705ecc6adca3$exports[_0x126bea(1744)][_0x126bea(2165)](_0x126bea(434));
    _0x5298a5[_0x126bea(1817)]()[_0x126bea(839)](function(_0x25f6a1) {
      _0x2118bb["addTrack"](_0x25f6a1, _0x5298a5);
    });
  }, _0x4d075d[_0x4124af(1897)]["_addStreamToMediaConnection"] = function(_0x553305, _0x2e0d) {
    var _0xd1bd5a = _0x4124af;
    $1615705ecc6adca3$exports[_0xd1bd5a(1744)]["log"](_0xd1bd5a(1539)["concat"](_0x553305["id"], _0xd1bd5a(721))[_0xd1bd5a(2090)](_0x2e0d["connectionId"])), _0x2e0d[_0xd1bd5a(776)](_0x553305);
  }, _0x4d075d;
}(), $0b3b332fd86c5202$exports = {};
$parcel$export($0b3b332fd86c5202$exports, _0x780a7e(1757), () => $0b3b332fd86c5202$export$23a2a68283c24d80, (_0x52333d) => $0b3b332fd86c5202$export$23a2a68283c24d80 = _0x52333d);
var $0b3b332fd86c5202$var$__extends = function() {
  var _0x2f6281 = function(_0x2f9c51, _0x47541b) {
    var _0x3754ac = _0x3001;
    return _0x2f6281 = Object[_0x3754ac(2146)] || { "__proto__": [] } instanceof Array && function(_0x43ffa0, _0x9223ce) {
      var _0x375b36 = _0x3754ac;
      _0x43ffa0[_0x375b36(1749)] = _0x9223ce;
    } || function(_0x4fd700, _0x199c5f) {
      var _0x3ef777 = _0x3754ac;
      for (var _0x434fc9 in _0x199c5f)
        if (Object["prototype"][_0x3ef777(1309)]["call"](_0x199c5f, _0x434fc9))
          _0x4fd700[_0x434fc9] = _0x199c5f[_0x434fc9];
    }, _0x2f6281(_0x2f9c51, _0x47541b);
  };
  return function(_0x1bc448, _0x272904) {
    var _0x1c5bb3 = _0x3001;
    if (typeof _0x272904 !== "function" && _0x272904 !== null)
      throw new TypeError(_0x1c5bb3(1156) + String(_0x272904) + _0x1c5bb3(947));
    _0x2f6281(_0x1bc448, _0x272904);
    function _0x28e7c5() {
      this["constructor"] = _0x1bc448;
    }
    _0x1bc448[_0x1c5bb3(1897)] = _0x272904 === null ? Object[_0x1c5bb3(1409)](_0x272904) : (_0x28e7c5[_0x1c5bb3(1897)] = _0x272904[_0x1c5bb3(1897)], new _0x28e7c5());
  };
}(), $0b3b332fd86c5202$export$23a2a68283c24d80 = function(_0x45abf9) {
  var _0x18f65f = _0x780a7e;
  $0b3b332fd86c5202$var$__extends(_0x5d21f2, _0x45abf9);
  function _0x5d21f2(_0x250618, _0x552ee8, _0xb1129) {
    var _0x1e8ec0 = _0x3001, _0x4f157e = _0x45abf9[_0x1e8ec0(1206)](this) || this;
    return _0x4f157e[_0x1e8ec0(1262)] = _0x250618, _0x4f157e[_0x1e8ec0(685)] = _0x552ee8, _0x4f157e["options"] = _0xb1129, _0x4f157e[_0x1e8ec0(1440)] = ![], _0x4f157e["metadata"] = _0xb1129[_0x1e8ec0(492)], _0x4f157e;
  }
  return Object[_0x18f65f(1564)](_0x5d21f2[_0x18f65f(1897)], "open", { "get": function() {
    var _0x22a71d = _0x18f65f;
    return this[_0x22a71d(1440)];
  }, "enumerable": ![], "configurable": !![] }), _0x5d21f2;
}($ac9b757d51178e15$exports["EventEmitter"]), $353dee38f9ab557b$var$__extends = function() {
  var _0x59673f = function(_0x128c09, _0x4b83ae) {
    var _0xde52dd = _0x3001;
    return _0x59673f = Object[_0xde52dd(2146)] || { "__proto__": [] } instanceof Array && function(_0x33d862, _0x49107d) {
      var _0x47bb88 = _0xde52dd;
      _0x33d862[_0x47bb88(1749)] = _0x49107d;
    } || function(_0x1f4e48, _0x18572c) {
      var _0x366280 = _0xde52dd;
      for (var _0xc59a36 in _0x18572c)
        if (Object[_0x366280(1897)]["hasOwnProperty"][_0x366280(1206)](_0x18572c, _0xc59a36))
          _0x1f4e48[_0xc59a36] = _0x18572c[_0xc59a36];
    }, _0x59673f(_0x128c09, _0x4b83ae);
  };
  return function(_0x4255f0, _0x466bf7) {
    var _0x36cde1 = _0x3001;
    if (typeof _0x466bf7 !== _0x36cde1(389) && _0x466bf7 !== null)
      throw new TypeError(_0x36cde1(1156) + String(_0x466bf7) + " is not a constructor or null");
    _0x59673f(_0x4255f0, _0x466bf7);
    function _0x10d1c7() {
      var _0x55f768 = _0x36cde1;
      this[_0x55f768(1893)] = _0x4255f0;
    }
    _0x4255f0["prototype"] = _0x466bf7 === null ? Object[_0x36cde1(1409)](_0x466bf7) : (_0x10d1c7[_0x36cde1(1897)] = _0x466bf7[_0x36cde1(1897)], new _0x10d1c7());
  };
}(), $353dee38f9ab557b$var$__assign = function() {
  var _0x3ed096 = _0x780a7e;
  return $353dee38f9ab557b$var$__assign = Object[_0x3ed096(1153)] || function(_0x2269dc) {
    var _0x1ce04a = _0x3ed096;
    for (var _0x742808, _0x4e20a7 = 1, _0x12a2ac = arguments["length"]; _0x4e20a7 < _0x12a2ac; _0x4e20a7++) {
      _0x742808 = arguments[_0x4e20a7];
      for (var _0x36a767 in _0x742808)
        if (Object[_0x1ce04a(1897)][_0x1ce04a(1309)][_0x1ce04a(1206)](_0x742808, _0x36a767))
          _0x2269dc[_0x36a767] = _0x742808[_0x36a767];
    }
    return _0x2269dc;
  }, $353dee38f9ab557b$var$__assign[_0x3ed096(2150)](this, arguments);
}, $353dee38f9ab557b$var$__values = function(_0x160b80) {
  var _0x29a1ae = _0x780a7e, _0x109207 = typeof Symbol === _0x29a1ae(389) && Symbol[_0x29a1ae(1549)], _0x1523b2 = _0x109207 && _0x160b80[_0x109207], _0x825e33 = 0;
  if (_0x1523b2)
    return _0x1523b2["call"](_0x160b80);
  if (_0x160b80 && typeof _0x160b80["length"] === "number")
    return { "next": function() {
      var _0x157840 = _0x29a1ae;
      if (_0x160b80 && _0x825e33 >= _0x160b80[_0x157840(1965)])
        _0x160b80 = void 0;
      return { "value": _0x160b80 && _0x160b80[_0x825e33++], "done": !_0x160b80 };
    } };
  throw new TypeError(_0x109207 ? _0x29a1ae(552) : _0x29a1ae(1657));
}, $353dee38f9ab557b$export$4a84e95a2324ac29 = function(_0x485fab) {
  var _0x199cff = _0x780a7e;
  $353dee38f9ab557b$var$__extends(_0x3bd213, _0x485fab);
  function _0x3bd213(_0x15b5cf, _0x57ce86, _0x415ab4) {
    var _0x226d22 = _0x3001, _0x5d63f7 = _0x485fab[_0x226d22(1206)](this, _0x15b5cf, _0x57ce86, _0x415ab4) || this;
    _0x5d63f7[_0x226d22(1559)] = _0x5d63f7["options"]["_stream"], _0x5d63f7["connectionId"] = _0x5d63f7[_0x226d22(686)][_0x226d22(485)] || _0x3bd213["ID_PREFIX"] + $06cb531ed7840f78$export$7debb50ef11d5e0b[_0x226d22(351)](), _0x5d63f7["_negotiator"] = new $77f14d3e81888156$exports["Negotiator"](_0x5d63f7);
    if (_0x5d63f7[_0x226d22(1559)])
      _0x5d63f7[_0x226d22(364)][_0x226d22(1931)]({ "_stream": _0x5d63f7["_localStream"], "originator": !![] });
    return _0x5d63f7;
  }
  return Object["defineProperty"](_0x3bd213[_0x199cff(1897)], "type", { "get": function() {
    var _0x2acd3a = _0x199cff;
    return $60fadef21a2daafc$export$3157d57b4135e3bc[_0x2acd3a(1249)];
  }, "enumerable": ![], "configurable": !![] }), Object[_0x199cff(1564)](_0x3bd213[_0x199cff(1897)], _0x199cff(771), { "get": function() {
    var _0x3933fe = _0x199cff;
    return this[_0x3933fe(1559)];
  }, "enumerable": ![], "configurable": !![] }), Object[_0x199cff(1564)](_0x3bd213[_0x199cff(1897)], _0x199cff(356), { "get": function() {
    var _0x150735 = _0x199cff;
    return this[_0x150735(1895)];
  }, "enumerable": ![], "configurable": !![] }), _0x3bd213[_0x199cff(1897)][_0x199cff(776)] = function(_0x43cb61) {
    var _0x50fed2 = _0x199cff;
    $1615705ecc6adca3$exports["default"][_0x50fed2(942)](_0x50fed2(1174), _0x43cb61), this["_remoteStream"] = _0x43cb61, _0x485fab[_0x50fed2(1897)][_0x50fed2(2099)][_0x50fed2(1206)](this, _0x50fed2(1637), _0x43cb61);
  }, _0x3bd213[_0x199cff(1897)]["handleMessage"] = function(_0x15974c) {
    var _0x464429 = _0x199cff, _0x184e9a = _0x15974c[_0x464429(1514)], _0x4a7e08 = _0x15974c[_0x464429(613)];
    switch (_0x15974c["type"]) {
      case $60fadef21a2daafc$export$adb4a1754da6f10d[_0x464429(1465)]:
        this[_0x464429(364)]["handleSDP"](_0x184e9a, _0x4a7e08[_0x464429(2016)]), this[_0x464429(1440)] = !![];
        break;
      case $60fadef21a2daafc$export$adb4a1754da6f10d[_0x464429(388)]:
        this[_0x464429(364)][_0x464429(2106)](_0x4a7e08["candidate"]);
        break;
      default:
        $1615705ecc6adca3$exports["default"]["warn"](_0x464429(2200)[_0x464429(2090)](_0x184e9a, _0x464429(459))[_0x464429(2090)](this[_0x464429(1262)]));
        break;
    }
  }, _0x3bd213[_0x199cff(1897)][_0x199cff(1449)] = function(_0x3ebf5c, _0x43d43b) {
    var _0x2f42f9 = _0x199cff, _0x461c7c, _0x5ed8fb;
    if (_0x43d43b === void 0)
      _0x43d43b = {};
    if (this[_0x2f42f9(1559)]) {
      $1615705ecc6adca3$exports[_0x2f42f9(1744)][_0x2f42f9(1985)](_0x2f42f9(2175));
      return;
    }
    this[_0x2f42f9(1559)] = _0x3ebf5c;
    if (_0x43d43b && _0x43d43b["sdpTransform"])
      this[_0x2f42f9(686)][_0x2f42f9(707)] = _0x43d43b["sdpTransform"];
    this[_0x2f42f9(364)][_0x2f42f9(1931)]($353dee38f9ab557b$var$__assign($353dee38f9ab557b$var$__assign({}, this[_0x2f42f9(686)]["_payload"]), { "_stream": _0x3ebf5c }));
    var _0x3e8f43 = this[_0x2f42f9(685)][_0x2f42f9(887)](this["connectionId"]);
    try {
      for (var _0x41dc75 = $353dee38f9ab557b$var$__values(_0x3e8f43), _0x3ab7ce = _0x41dc75["next"](); !_0x3ab7ce["done"]; _0x3ab7ce = _0x41dc75[_0x2f42f9(670)]()) {
        var _0x1d26d1 = _0x3ab7ce[_0x2f42f9(819)];
        this[_0x2f42f9(1318)](_0x1d26d1);
      }
    } catch (_0x1e6965) {
      _0x461c7c = { "error": _0x1e6965 };
    } finally {
      try {
        if (_0x3ab7ce && !_0x3ab7ce[_0x2f42f9(1353)] && (_0x5ed8fb = _0x41dc75["return"]))
          _0x5ed8fb[_0x2f42f9(1206)](_0x41dc75);
      } finally {
        if (_0x461c7c)
          throw _0x461c7c[_0x2f42f9(2165)];
      }
    }
    this[_0x2f42f9(1440)] = !![];
  }, _0x3bd213["prototype"][_0x199cff(1169)] = function() {
    var _0x4f21ba = _0x199cff;
    this["_negotiator"] && (this["_negotiator"][_0x4f21ba(393)](), this[_0x4f21ba(364)] = null);
    this["_localStream"] = null, this["_remoteStream"] = null;
    this[_0x4f21ba(685)] && (this["provider"][_0x4f21ba(1271)](this), this[_0x4f21ba(685)] = null);
    if (this[_0x4f21ba(686)] && this[_0x4f21ba(686)]["_stream"])
      this["options"][_0x4f21ba(1556)] = null;
    if (!this["open"])
      return;
    this[_0x4f21ba(1440)] = ![], _0x485fab[_0x4f21ba(1897)][_0x4f21ba(2099)]["call"](this, _0x4f21ba(1169));
  }, _0x3bd213["ID_PREFIX"] = _0x199cff(988), _0x3bd213;
}($0b3b332fd86c5202$exports[_0x780a7e(1757)]), $3356170d7bce7f20$exports = {};
$parcel$export($3356170d7bce7f20$exports, _0x780a7e(1286), () => $3356170d7bce7f20$export$d365f7ad9d7df9c9, (_0x2551d0) => $3356170d7bce7f20$export$d365f7ad9d7df9c9 = _0x2551d0);
var $3014d862dcc9946b$exports = {};
$parcel$export($3014d862dcc9946b$exports, _0x780a7e(1929), () => $3014d862dcc9946b$export$c6913ae0ed687038, (_0xd03011) => $3014d862dcc9946b$export$c6913ae0ed687038 = _0xd03011);
var $3014d862dcc9946b$var$__extends = function() {
  var _0x1155f1 = function(_0xa61abb, _0x298d3c) {
    var _0x49d8a1 = _0x3001;
    return _0x1155f1 = Object[_0x49d8a1(2146)] || { "__proto__": [] } instanceof Array && function(_0x3dc574, _0x46d3b8) {
      var _0x5af1b6 = _0x49d8a1;
      _0x3dc574[_0x5af1b6(1749)] = _0x46d3b8;
    } || function(_0x2826fd, _0x5b1e87) {
      var _0x373335 = _0x49d8a1;
      for (var _0x438131 in _0x5b1e87)
        if (Object[_0x373335(1897)][_0x373335(1309)]["call"](_0x5b1e87, _0x438131))
          _0x2826fd[_0x438131] = _0x5b1e87[_0x438131];
    }, _0x1155f1(_0xa61abb, _0x298d3c);
  };
  return function(_0xb731ee, _0x4a457e) {
    var _0x8cf9e6 = _0x3001;
    if (typeof _0x4a457e !== _0x8cf9e6(389) && _0x4a457e !== null)
      throw new TypeError(_0x8cf9e6(1156) + String(_0x4a457e) + _0x8cf9e6(947));
    _0x1155f1(_0xb731ee, _0x4a457e);
    function _0x4de1b2() {
      var _0x26612c = _0x8cf9e6;
      this[_0x26612c(1893)] = _0xb731ee;
    }
    _0xb731ee[_0x8cf9e6(1897)] = _0x4a457e === null ? Object["create"](_0x4a457e) : (_0x4de1b2[_0x8cf9e6(1897)] = _0x4a457e[_0x8cf9e6(1897)], new _0x4de1b2());
  };
}(), $3014d862dcc9946b$export$c6913ae0ed687038 = function(_0x4f862f) {
  var _0x5f4fce = _0x780a7e;
  $3014d862dcc9946b$var$__extends(_0x2fad9b, _0x4f862f);
  function _0x2fad9b() {
    var _0x3d2d7b = _0x3001, _0x4c8ce5 = _0x4f862f[_0x3d2d7b(1206)](this) || this;
    return _0x4c8ce5[_0x3d2d7b(982)] = new FileReader(), _0x4c8ce5[_0x3d2d7b(544)] = [], _0x4c8ce5[_0x3d2d7b(1894)] = ![], _0x4c8ce5[_0x3d2d7b(982)][_0x3d2d7b(687)] = function(_0x31eeeb) {
      var _0x5bd3db = _0x3d2d7b;
      _0x4c8ce5[_0x5bd3db(1894)] = ![];
      if (_0x31eeeb[_0x5bd3db(1961)])
        _0x4c8ce5[_0x5bd3db(2099)](_0x5bd3db(1353), _0x31eeeb["target"][_0x5bd3db(411)]);
      _0x4c8ce5[_0x5bd3db(1302)]();
    }, _0x4c8ce5["fileReader"][_0x3d2d7b(1512)] = function(_0x3b4ff8) {
      var _0x118455 = _0x3d2d7b;
      $1615705ecc6adca3$exports[_0x118455(1744)][_0x118455(2165)](_0x118455(399), _0x3b4ff8), _0x4c8ce5[_0x118455(1894)] = ![], _0x4c8ce5[_0x118455(557)](), _0x4c8ce5[_0x118455(2099)](_0x118455(2165), _0x3b4ff8);
    }, _0x4c8ce5;
  }
  return Object["defineProperty"](_0x2fad9b[_0x5f4fce(1897)], "queue", { "get": function() {
    var _0x4d1abb = _0x5f4fce;
    return this[_0x4d1abb(544)];
  }, "enumerable": ![], "configurable": !![] }), Object["defineProperty"](_0x2fad9b[_0x5f4fce(1897)], _0x5f4fce(970), { "get": function() {
    var _0x3f0925 = _0x5f4fce;
    return this[_0x3f0925(2047)][_0x3f0925(1965)];
  }, "enumerable": ![], "configurable": !![] }), Object[_0x5f4fce(1564)](_0x2fad9b["prototype"], _0x5f4fce(1629), { "get": function() {
    var _0xc0f167 = _0x5f4fce;
    return this[_0xc0f167(1894)];
  }, "enumerable": ![], "configurable": !![] }), _0x2fad9b[_0x5f4fce(1897)][_0x5f4fce(759)] = function(_0x5bf59b) {
    var _0x4fa509 = _0x5f4fce;
    this[_0x4fa509(2047)]["push"](_0x5bf59b);
    if (this[_0x4fa509(1629)])
      return;
    this[_0x4fa509(1302)]();
  }, _0x2fad9b[_0x5f4fce(1897)][_0x5f4fce(557)] = function() {
    var _0x13a4ae = _0x5f4fce;
    this["fileReader"][_0x13a4ae(441)](), this[_0x13a4ae(544)] = [];
  }, _0x2fad9b["prototype"]["doNextTask"] = function() {
    var _0x4a7e88 = _0x5f4fce;
    if (this["size"] === 0)
      return;
    if (this[_0x4a7e88(1629)])
      return;
    this[_0x4a7e88(1894)] = !![], this[_0x4a7e88(982)]["readAsArrayBuffer"](this[_0x4a7e88(2047)][_0x4a7e88(2002)]());
  }, _0x2fad9b;
}($ac9b757d51178e15$exports[_0x780a7e(2198)]), $3356170d7bce7f20$var$__extends = function() {
  var _0x9384d8 = function(_0x263942, _0x1ceda2) {
    var _0x1f9587 = _0x3001;
    return _0x9384d8 = Object[_0x1f9587(2146)] || { "__proto__": [] } instanceof Array && function(_0x416eff, _0x129dfe) {
      var _0x27d55d = _0x1f9587;
      _0x416eff[_0x27d55d(1749)] = _0x129dfe;
    } || function(_0xab66ee, _0x51c143) {
      var _0x5de144 = _0x1f9587;
      for (var _0x4babba in _0x51c143)
        if (Object[_0x5de144(1897)][_0x5de144(1309)][_0x5de144(1206)](_0x51c143, _0x4babba))
          _0xab66ee[_0x4babba] = _0x51c143[_0x4babba];
    }, _0x9384d8(_0x263942, _0x1ceda2);
  };
  return function(_0x3aa9d5, _0x347188) {
    var _0x301bd4 = _0x3001;
    if (typeof _0x347188 !== _0x301bd4(389) && _0x347188 !== null)
      throw new TypeError("Class extends value " + String(_0x347188) + " is not a constructor or null");
    _0x9384d8(_0x3aa9d5, _0x347188);
    function _0x2dbef2() {
      var _0x443b89 = _0x301bd4;
      this[_0x443b89(1893)] = _0x3aa9d5;
    }
    _0x3aa9d5["prototype"] = _0x347188 === null ? Object["create"](_0x347188) : (_0x2dbef2["prototype"] = _0x347188[_0x301bd4(1897)], new _0x2dbef2());
  };
}(), $3356170d7bce7f20$var$__values = function(_0xec72dd) {
  var _0x162621 = _0x780a7e, _0x2a20e0 = typeof Symbol === "function" && Symbol[_0x162621(1549)], _0x65e7d5 = _0x2a20e0 && _0xec72dd[_0x2a20e0], _0x17b12e = 0;
  if (_0x65e7d5)
    return _0x65e7d5["call"](_0xec72dd);
  if (_0xec72dd && typeof _0xec72dd[_0x162621(1965)] === _0x162621(2203))
    return { "next": function() {
      if (_0xec72dd && _0x17b12e >= _0xec72dd["length"])
        _0xec72dd = void 0;
      return { "value": _0xec72dd && _0xec72dd[_0x17b12e++], "done": !_0xec72dd };
    } };
  throw new TypeError(_0x2a20e0 ? _0x162621(552) : _0x162621(1657));
}, $3356170d7bce7f20$export$d365f7ad9d7df9c9 = function(_0x157f3c) {
  var _0xea8a88 = _0x780a7e;
  $3356170d7bce7f20$var$__extends(_0x377b86, _0x157f3c);
  function _0x377b86(_0x99a3b, _0x14fee2, _0x5a23d2) {
    var _0x305a82 = _0x3001, _0x405423 = _0x157f3c[_0x305a82(1206)](this, _0x99a3b, _0x14fee2, _0x5a23d2) || this;
    return _0x405423[_0x305a82(2063)] = JSON[_0x305a82(2063)], _0x405423[_0x305a82(611)] = JSON[_0x305a82(611)], _0x405423[_0x305a82(2156)] = [], _0x405423[_0x305a82(2141)] = 0, _0x405423[_0x305a82(718)] = ![], _0x405423[_0x305a82(786)] = {}, _0x405423[_0x305a82(1721)] = new $3014d862dcc9946b$exports[_0x305a82(1929)](), _0x405423[_0x305a82(485)] = _0x405423[_0x305a82(686)][_0x305a82(485)] || _0x377b86[_0x305a82(1021)] + $06cb531ed7840f78$export$7debb50ef11d5e0b[_0x305a82(351)](), _0x405423[_0x305a82(689)] = _0x405423[_0x305a82(686)][_0x305a82(689)] || _0x405423[_0x305a82(485)], _0x405423[_0x305a82(2109)] = _0x405423[_0x305a82(686)][_0x305a82(2109)] || $60fadef21a2daafc$export$89f507cf986a947["Binary"], _0x405423["reliable"] = !!_0x405423[_0x305a82(686)][_0x305a82(2179)], _0x405423[_0x305a82(1721)]["on"]("done", function(_0x23a143) {
      var _0x3d75c0 = _0x305a82;
      _0x405423[_0x3d75c0(1561)](_0x23a143);
    }), _0x405423[_0x305a82(1721)]["on"]("error", function() {
      var _0x1e4582 = _0x305a82;
      $1615705ecc6adca3$exports[_0x1e4582(1744)][_0x1e4582(2165)](_0x1e4582(2153)[_0x1e4582(2090)](_0x405423[_0x1e4582(485)], _0x1e4582(1988))), _0x405423[_0x1e4582(1169)]();
    }), _0x405423[_0x305a82(364)] = new $77f14d3e81888156$exports[_0x305a82(867)](_0x405423), _0x405423[_0x305a82(364)][_0x305a82(1931)](_0x405423[_0x305a82(686)]["_payload"] || { "originator": !![] }), _0x405423;
  }
  return Object[_0xea8a88(1564)](_0x377b86[_0xea8a88(1897)], _0xea8a88(1514), { "get": function() {
    var _0x2c1f83 = _0xea8a88;
    return $60fadef21a2daafc$export$3157d57b4135e3bc[_0x2c1f83(1810)];
  }, "enumerable": ![], "configurable": !![] }), Object[_0xea8a88(1564)](_0x377b86["prototype"], "dataChannel", { "get": function() {
    var _0x51445e = _0xea8a88;
    return this[_0x51445e(1968)];
  }, "enumerable": ![], "configurable": !![] }), Object[_0xea8a88(1564)](_0x377b86[_0xea8a88(1897)], "bufferSize", { "get": function() {
    var _0x28d2d3 = _0xea8a88;
    return this[_0x28d2d3(2141)];
  }, "enumerable": ![], "configurable": !![] }), _0x377b86["prototype"]["initialize"] = function(_0x51a966) {
    var _0x39c7f1 = _0xea8a88;
    this[_0x39c7f1(1968)] = _0x51a966, this[_0x39c7f1(494)]();
  }, _0x377b86["prototype"][_0xea8a88(494)] = function() {
    var _0x4ac258 = _0xea8a88, _0x2284a1 = this;
    if (!$06cb531ed7840f78$export$7debb50ef11d5e0b[_0x4ac258(1589)]["binaryBlob"] || $06cb531ed7840f78$export$7debb50ef11d5e0b[_0x4ac258(1589)][_0x4ac258(2179)])
      this[_0x4ac258(1860)]["binaryType"] = _0x4ac258(1480);
    this[_0x4ac258(1860)][_0x4ac258(993)] = function() {
      var _0x2cd2b0 = _0x4ac258;
      $1615705ecc6adca3$exports[_0x2cd2b0(1744)]["log"]("DC#"[_0x2cd2b0(2090)](_0x2284a1[_0x2cd2b0(485)], _0x2cd2b0(996))), _0x2284a1[_0x2cd2b0(1440)] = !![], _0x2284a1[_0x2cd2b0(2099)](_0x2cd2b0(1352));
    }, this["dataChannel"][_0x4ac258(1763)] = function(_0x383bce) {
      var _0x40d602 = _0x4ac258;
      $1615705ecc6adca3$exports[_0x40d602(1744)][_0x40d602(942)](_0x40d602(2153)[_0x40d602(2090)](_0x2284a1[_0x40d602(485)], " dc onmessage:"), _0x383bce[_0x40d602(797)]), _0x2284a1[_0x40d602(1813)](_0x383bce);
    }, this[_0x4ac258(1860)]["onclose"] = function() {
      var _0x2d3a2f = _0x4ac258;
      $1615705ecc6adca3$exports["default"][_0x2d3a2f(942)](_0x2d3a2f(2153)[_0x2d3a2f(2090)](_0x2284a1["connectionId"], " dc closed for:"), _0x2284a1[_0x2d3a2f(1262)]), _0x2284a1[_0x2d3a2f(1169)]();
    };
  }, _0x377b86[_0xea8a88(1897)][_0xea8a88(1813)] = function(_0x4b89bf) {
    var _0x3c9883 = _0xea8a88, _0x1dddfb = this, _0x19628d = _0x4b89bf[_0x3c9883(797)], _0x3e720a = _0x19628d[_0x3c9883(1893)], _0x4da3f5 = this[_0x3c9883(2109)] === $60fadef21a2daafc$export$89f507cf986a947["Binary"] || this["serialization"] === $60fadef21a2daafc$export$89f507cf986a947[_0x3c9883(483)], _0x490b3c = _0x19628d;
    if (_0x4da3f5) {
      if (_0x3e720a === Blob) {
        $06cb531ed7840f78$export$7debb50ef11d5e0b[_0x3c9883(455)](_0x19628d, function(_0x5f03a4) {
          var _0x535602 = _0x3c9883, _0x3cf3e1 = $06cb531ed7840f78$export$7debb50ef11d5e0b[_0x535602(1597)](_0x5f03a4);
          _0x1dddfb[_0x535602(2099)](_0x535602(797), _0x3cf3e1);
        });
        return;
      } else {
        if (_0x3e720a === ArrayBuffer)
          _0x490b3c = $06cb531ed7840f78$export$7debb50ef11d5e0b[_0x3c9883(1597)](_0x19628d);
        else {
          if (_0x3e720a === String) {
            var _0x3e77a6 = $06cb531ed7840f78$export$7debb50ef11d5e0b[_0x3c9883(939)](_0x19628d);
            _0x490b3c = $06cb531ed7840f78$export$7debb50ef11d5e0b[_0x3c9883(1597)](_0x3e77a6);
          }
        }
      }
    } else {
      if (this[_0x3c9883(2109)] === $60fadef21a2daafc$export$89f507cf986a947[_0x3c9883(2010)])
        _0x490b3c = this[_0x3c9883(611)](_0x19628d);
    }
    if (_0x490b3c[_0x3c9883(1923)]) {
      this[_0x3c9883(1306)](_0x490b3c);
      return;
    }
    _0x157f3c["prototype"][_0x3c9883(2099)][_0x3c9883(1206)](this, _0x3c9883(797), _0x490b3c);
  }, _0x377b86[_0xea8a88(1897)][_0xea8a88(1306)] = function(_0x617b27) {
    var _0x54bb3c = _0xea8a88, _0x226cea = _0x617b27[_0x54bb3c(1923)], _0xb66845 = this[_0x54bb3c(786)][_0x226cea] || { "data": [], "count": 0, "total": _0x617b27[_0x54bb3c(981)] };
    _0xb66845[_0x54bb3c(797)][_0x617b27["n"]] = _0x617b27[_0x54bb3c(797)], _0xb66845[_0x54bb3c(1675)]++, this[_0x54bb3c(786)][_0x226cea] = _0xb66845;
    if (_0xb66845[_0x54bb3c(981)] === _0xb66845[_0x54bb3c(1675)]) {
      delete this[_0x54bb3c(786)][_0x226cea];
      var _0x1c9680 = new Blob(_0xb66845["data"]);
      this["_handleDataMessage"]({ "data": _0x1c9680 });
    }
  }, _0x377b86[_0xea8a88(1897)][_0xea8a88(1169)] = function() {
    var _0x137e35 = _0xea8a88;
    this[_0x137e35(2156)] = [], this[_0x137e35(2141)] = 0, this[_0x137e35(786)] = {};
    this["_negotiator"] && (this[_0x137e35(364)][_0x137e35(393)](), this["_negotiator"] = null);
    this[_0x137e35(685)] && (this[_0x137e35(685)][_0x137e35(1271)](this), this["provider"] = null);
    this["dataChannel"] && (this[_0x137e35(1860)][_0x137e35(993)] = null, this[_0x137e35(1860)][_0x137e35(1763)] = null, this[_0x137e35(1860)]["onclose"] = null, this[_0x137e35(1968)] = null);
    this[_0x137e35(1721)] && (this["_encodingQueue"][_0x137e35(557)](), this[_0x137e35(1721)][_0x137e35(1224)](), this["_encodingQueue"] = null);
    if (!this[_0x137e35(1352)])
      return;
    this[_0x137e35(1440)] = ![], _0x157f3c[_0x137e35(1897)][_0x137e35(2099)]["call"](this, _0x137e35(1169));
  }, _0x377b86[_0xea8a88(1897)][_0xea8a88(1241)] = function(_0x4facf8, _0x3600e1) {
    var _0x3d0306 = _0xea8a88;
    if (!this[_0x3d0306(1352)]) {
      _0x157f3c[_0x3d0306(1897)][_0x3d0306(2099)][_0x3d0306(1206)](this, _0x3d0306(2165), new Error(_0x3d0306(894)));
      return;
    }
    if (this[_0x3d0306(2109)] === $60fadef21a2daafc$export$89f507cf986a947["JSON"])
      this[_0x3d0306(1561)](this[_0x3d0306(2063)](_0x4facf8));
    else {
      if (this[_0x3d0306(2109)] === $60fadef21a2daafc$export$89f507cf986a947["Binary"] || this["serialization"] === $60fadef21a2daafc$export$89f507cf986a947[_0x3d0306(483)]) {
        var _0xfb9616 = $06cb531ed7840f78$export$7debb50ef11d5e0b[_0x3d0306(941)](_0x4facf8);
        if (!_0x3600e1 && _0xfb9616[_0x3d0306(970)] > $06cb531ed7840f78$export$7debb50ef11d5e0b[_0x3d0306(994)]) {
          this["_sendChunks"](_0xfb9616);
          return;
        }
        if (!$06cb531ed7840f78$export$7debb50ef11d5e0b[_0x3d0306(1589)]["binaryBlob"])
          this[_0x3d0306(1721)][_0x3d0306(759)](_0xfb9616);
        else
          this[_0x3d0306(1561)](_0xfb9616);
      } else
        this[_0x3d0306(1561)](_0x4facf8);
    }
  }, _0x377b86["prototype"]["_bufferedSend"] = function(_0x522e53) {
    var _0x43c4a9 = _0xea8a88;
    (this["_buffering"] || !this[_0x43c4a9(695)](_0x522e53)) && (this[_0x43c4a9(2156)][_0x43c4a9(1991)](_0x522e53), this[_0x43c4a9(2141)] = this["_buffer"][_0x43c4a9(1965)]);
  }, _0x377b86[_0xea8a88(1897)][_0xea8a88(695)] = function(_0x83db36) {
    var _0x26826c = _0xea8a88, _0x1591c8 = this;
    if (!this[_0x26826c(1352)])
      return ![];
    if (this["dataChannel"][_0x26826c(1753)] > _0x377b86["MAX_BUFFERED_AMOUNT"])
      return this[_0x26826c(718)] = !![], setTimeout(function() {
        var _0x391eff = _0x26826c;
        _0x1591c8[_0x391eff(718)] = ![], _0x1591c8["_tryBuffer"]();
      }, 50), ![];
    try {
      this[_0x26826c(1860)][_0x26826c(1241)](_0x83db36);
    } catch (_0x4b545e) {
      return $1615705ecc6adca3$exports["default"][_0x26826c(2165)](_0x26826c(1394)[_0x26826c(2090)](this["connectionId"], _0x26826c(1321)), _0x4b545e), this[_0x26826c(718)] = !![], this[_0x26826c(1169)](), ![];
    }
    return !![];
  }, _0x377b86[_0xea8a88(1897)]["_tryBuffer"] = function() {
    var _0x2a523a = _0xea8a88;
    if (!this[_0x2a523a(1352)])
      return;
    if (this[_0x2a523a(2156)][_0x2a523a(1965)] === 0)
      return;
    var _0xce2a56 = this[_0x2a523a(2156)][0];
    this["_trySend"](_0xce2a56) && (this[_0x2a523a(2156)][_0x2a523a(2002)](), this[_0x2a523a(2141)] = this["_buffer"]["length"], this[_0x2a523a(1578)]());
  }, _0x377b86["prototype"][_0xea8a88(674)] = function(_0x3ea202) {
    var _0x88ff50 = _0xea8a88, _0x5ebdcc, _0x227f4a, _0x2f2251 = $06cb531ed7840f78$export$7debb50ef11d5e0b[_0x88ff50(992)](_0x3ea202);
    $1615705ecc6adca3$exports[_0x88ff50(1744)][_0x88ff50(942)](_0x88ff50(2153)[_0x88ff50(2090)](this["connectionId"], " Try to send ")[_0x88ff50(2090)](_0x2f2251["length"], " chunks..."));
    try {
      for (var _0x37c351 = $3356170d7bce7f20$var$__values(_0x2f2251), _0x18d82f = _0x37c351[_0x88ff50(670)](); !_0x18d82f[_0x88ff50(1353)]; _0x18d82f = _0x37c351[_0x88ff50(670)]()) {
        var _0x192d3c = _0x18d82f[_0x88ff50(819)];
        this[_0x88ff50(1241)](_0x192d3c, !![]);
      }
    } catch (_0x1da975) {
      _0x5ebdcc = { "error": _0x1da975 };
    } finally {
      try {
        if (_0x18d82f && !_0x18d82f[_0x88ff50(1353)] && (_0x227f4a = _0x37c351[_0x88ff50(2095)]))
          _0x227f4a[_0x88ff50(1206)](_0x37c351);
      } finally {
        if (_0x5ebdcc)
          throw _0x5ebdcc[_0x88ff50(2165)];
      }
    }
  }, _0x377b86[_0xea8a88(1897)]["handleMessage"] = function(_0x285b51) {
    var _0xd5c3bb = _0xea8a88, _0x26a14f = _0x285b51["payload"];
    switch (_0x285b51[_0xd5c3bb(1514)]) {
      case $60fadef21a2daafc$export$adb4a1754da6f10d[_0xd5c3bb(1465)]:
        this["_negotiator"][_0xd5c3bb(1803)](_0x285b51[_0xd5c3bb(1514)], _0x26a14f[_0xd5c3bb(2016)]);
        break;
      case $60fadef21a2daafc$export$adb4a1754da6f10d[_0xd5c3bb(388)]:
        this[_0xd5c3bb(364)][_0xd5c3bb(2106)](_0x26a14f["candidate"]);
        break;
      default:
        $1615705ecc6adca3$exports[_0xd5c3bb(1744)][_0xd5c3bb(1985)](_0xd5c3bb(2200), _0x285b51["type"], _0xd5c3bb(1225), this[_0xd5c3bb(1262)]);
        break;
    }
  }, _0x377b86[_0xea8a88(1021)] = "dc_", _0x377b86["MAX_BUFFERED_AMOUNT"] = 8388608, _0x377b86;
}($0b3b332fd86c5202$exports[_0x780a7e(1757)]), $9e85b3e1327369e6$exports = {};
$parcel$export($9e85b3e1327369e6$exports, _0x780a7e(741), () => $9e85b3e1327369e6$export$2c4e825dc9120f87, (_0x1d56e1) => $9e85b3e1327369e6$export$2c4e825dc9120f87 = _0x1d56e1);
var $9e85b3e1327369e6$var$__awaiter = function(_0x48d683, _0x8ee933, _0x3be9f8, _0x2b34c9) {
  function _0x435858(_0x1aec76) {
    return _0x1aec76 instanceof _0x3be9f8 ? _0x1aec76 : new _0x3be9f8(function(_0x4118f4) {
      _0x4118f4(_0x1aec76);
    });
  }
  return new (_0x3be9f8 || (_0x3be9f8 = Promise))(function(_0xe1572d, _0x4e6d80) {
    var _0x3b21f0 = _0x3001;
    function _0x37e2fc(_0x53a1bf) {
      var _0x3e237d = _0x3001;
      try {
        _0x2b0a48(_0x2b34c9[_0x3e237d(670)](_0x53a1bf));
      } catch (_0x1e4af1) {
        _0x4e6d80(_0x1e4af1);
      }
    }
    function _0x284346(_0x5c2aff) {
      var _0xd13b9d = _0x3001;
      try {
        _0x2b0a48(_0x2b34c9[_0xd13b9d(1698)](_0x5c2aff));
      } catch (_0x10696f) {
        _0x4e6d80(_0x10696f);
      }
    }
    function _0x2b0a48(_0x277b0e) {
      var _0x3a63b6 = _0x3001;
      _0x277b0e[_0x3a63b6(1353)] ? _0xe1572d(_0x277b0e[_0x3a63b6(819)]) : _0x435858(_0x277b0e[_0x3a63b6(819)])["then"](_0x37e2fc, _0x284346);
    }
    _0x2b0a48((_0x2b34c9 = _0x2b34c9["apply"](_0x48d683, _0x8ee933 || []))[_0x3b21f0(670)]());
  });
}, $9e85b3e1327369e6$var$__generator = function(_0xf90c76, _0x376c49) {
  var _0x40ef42 = _0x780a7e, _0x24ddeb = { "label": 0, "sent": function() {
    if (_0x1b3053[0] & 1)
      throw _0x1b3053[1];
    return _0x1b3053[1];
  }, "trys": [], "ops": [] }, _0x20cb19, _0x380061, _0x1b3053, _0x1cfed1;
  return _0x1cfed1 = { "next": _0x721bc7(0), "throw": _0x721bc7(1), "return": _0x721bc7(2) }, typeof Symbol === "function" && (_0x1cfed1[Symbol[_0x40ef42(1549)]] = function() {
    return this;
  }), _0x1cfed1;
  function _0x721bc7(_0x5dc5bb) {
    return function(_0x3e197f) {
      return _0x48c0dc([_0x5dc5bb, _0x3e197f]);
    };
  }
  function _0x48c0dc(_0x4c5db7) {
    var _0xb05b80 = _0x40ef42;
    if (_0x20cb19)
      throw new TypeError(_0xb05b80(1071));
    while (_0x24ddeb)
      try {
        if (_0x20cb19 = 1, _0x380061 && (_0x1b3053 = _0x4c5db7[0] & 2 ? _0x380061[_0xb05b80(2095)] : _0x4c5db7[0] ? _0x380061["throw"] || ((_0x1b3053 = _0x380061[_0xb05b80(2095)]) && _0x1b3053[_0xb05b80(1206)](_0x380061), 0) : _0x380061[_0xb05b80(670)]) && !(_0x1b3053 = _0x1b3053["call"](_0x380061, _0x4c5db7[1]))[_0xb05b80(1353)])
          return _0x1b3053;
        if (_0x380061 = 0, _0x1b3053)
          _0x4c5db7 = [_0x4c5db7[0] & 2, _0x1b3053["value"]];
        switch (_0x4c5db7[0]) {
          case 0:
          case 1:
            _0x1b3053 = _0x4c5db7;
            break;
          case 4:
            _0x24ddeb["label"]++;
            return { "value": _0x4c5db7[1], "done": ![] };
          case 5:
            _0x24ddeb["label"]++, _0x380061 = _0x4c5db7[1], _0x4c5db7 = [0];
            continue;
          case 7:
            _0x4c5db7 = _0x24ddeb["ops"][_0xb05b80(1466)](), _0x24ddeb[_0xb05b80(862)][_0xb05b80(1466)]();
            continue;
          default:
            if (!(_0x1b3053 = _0x24ddeb["trys"], _0x1b3053 = _0x1b3053[_0xb05b80(1965)] > 0 && _0x1b3053[_0x1b3053["length"] - 1]) && (_0x4c5db7[0] === 6 || _0x4c5db7[0] === 2)) {
              _0x24ddeb = 0;
              continue;
            }
            if (_0x4c5db7[0] === 3 && (!_0x1b3053 || _0x4c5db7[1] > _0x1b3053[0] && _0x4c5db7[1] < _0x1b3053[3])) {
              _0x24ddeb[_0xb05b80(689)] = _0x4c5db7[1];
              break;
            }
            if (_0x4c5db7[0] === 6 && _0x24ddeb[_0xb05b80(689)] < _0x1b3053[1]) {
              _0x24ddeb[_0xb05b80(689)] = _0x1b3053[1], _0x1b3053 = _0x4c5db7;
              break;
            }
            if (_0x1b3053 && _0x24ddeb[_0xb05b80(689)] < _0x1b3053[2]) {
              _0x24ddeb["label"] = _0x1b3053[2], _0x24ddeb[_0xb05b80(1068)]["push"](_0x4c5db7);
              break;
            }
            if (_0x1b3053[2])
              _0x24ddeb[_0xb05b80(1068)][_0xb05b80(1466)]();
            _0x24ddeb[_0xb05b80(862)][_0xb05b80(1466)]();
            continue;
        }
        _0x4c5db7 = _0x376c49[_0xb05b80(1206)](_0xf90c76, _0x24ddeb);
      } catch (_0xdb1111) {
        _0x4c5db7 = [6, _0xdb1111], _0x380061 = 0;
      } finally {
        _0x20cb19 = _0x1b3053 = 0;
      }
    if (_0x4c5db7[0] & 5)
      throw _0x4c5db7[1];
    return { "value": _0x4c5db7[0] ? _0x4c5db7[1] : void 0, "done": !![] };
  }
}, $9e85b3e1327369e6$export$2c4e825dc9120f87 = function() {
  var _0x4bfa1e = _0x780a7e;
  function _0xda3470(_0x356180) {
    var _0x512a35 = _0x3001;
    this[_0x512a35(1161)] = _0x356180;
  }
  return _0xda3470[_0x4bfa1e(1897)][_0x4bfa1e(1281)] = function(_0x2a7c9e) {
    var _0x2e76d5 = _0x4bfa1e, _0x11c143 = this["_options"][_0x2e76d5(1853)] ? _0x2e76d5(2172) : _0x2e76d5(921), _0x2a1bec = this[_0x2e76d5(1161)], _0x2c627a = _0x2a1bec[_0x2e76d5(515)], _0x5268ac = _0x2a1bec[_0x2e76d5(2071)], _0x590fd9 = _0x2a1bec["path"], _0x128e5d = _0x2a1bec["key"], _0xedb892 = new URL(""[_0x2e76d5(2090)](_0x11c143, _0x2e76d5(705))["concat"](_0x2c627a, ":")[_0x2e76d5(2090)](_0x5268ac)[_0x2e76d5(2090)](_0x590fd9)[_0x2e76d5(2090)](_0x128e5d, "/")[_0x2e76d5(2090)](_0x2a7c9e));
    return _0xedb892[_0x2e76d5(983)][_0x2e76d5(2080)]("ts", ""[_0x2e76d5(2090)](Date[_0x2e76d5(2132)]())["concat"](Math["random"]())), _0xedb892[_0x2e76d5(983)][_0x2e76d5(2080)](_0x2e76d5(436), $0d1ed891c5cb27c0$exports[_0x2e76d5(436)]), fetch(_0xedb892[_0x2e76d5(1489)], { "referrerPolicy": this[_0x2e76d5(1161)]["referrerPolicy"] });
  }, _0xda3470[_0x4bfa1e(1897)][_0x4bfa1e(439)] = function() {
    return $9e85b3e1327369e6$var$__awaiter(this, void 0, Promise, function() {
      var _0x39501c, _0x4d636a, _0x2a3a85;
      return $9e85b3e1327369e6$var$__generator(this, function(_0x47c50b) {
        var _0x47f325 = _0x3001;
        switch (_0x47c50b[_0x47f325(689)]) {
          case 0:
            _0x47c50b[_0x47f325(862)][_0x47f325(1991)]([0, 2, , 3]);
            return [4, this[_0x47f325(1281)]("id")];
          case 1:
            _0x39501c = _0x47c50b[_0x47f325(519)]();
            if (_0x39501c[_0x47f325(2036)] !== 200)
              throw new Error(_0x47f325(990)["concat"](_0x39501c[_0x47f325(2036)]));
            return [2, _0x39501c["text"]()];
          case 2:
            _0x4d636a = _0x47c50b[_0x47f325(519)](), $1615705ecc6adca3$exports[_0x47f325(1744)][_0x47f325(2165)]("Error retrieving ID", _0x4d636a), _0x2a3a85 = "";
            if (this[_0x47f325(1161)]["path"] === "/" && this[_0x47f325(1161)]["host"] !== $06cb531ed7840f78$export$7debb50ef11d5e0b[_0x47f325(1407)])
              _0x2a3a85 = " If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer.";
            throw new Error(_0x47f325(1478) + _0x2a3a85);
          case 3:
            return [2];
        }
      });
    });
  }, _0xda3470["prototype"][_0x4bfa1e(693)] = function() {
    return $9e85b3e1327369e6$var$__awaiter(this, void 0, Promise, function() {
      var _0x150d78, _0x2c05f4, _0x2e3ab5;
      return $9e85b3e1327369e6$var$__generator(this, function(_0x9a431b) {
        var _0x1e7849 = _0x3001;
        switch (_0x9a431b[_0x1e7849(689)]) {
          case 0:
            _0x9a431b[_0x1e7849(862)][_0x1e7849(1991)]([0, 2, , 3]);
            return [4, this[_0x1e7849(1281)](_0x1e7849(1692))];
          case 1:
            _0x150d78 = _0x9a431b["sent"]();
            if (_0x150d78[_0x1e7849(2036)] !== 200) {
              if (_0x150d78[_0x1e7849(2036)] === 401) {
                _0x2c05f4 = "";
                if (this[_0x1e7849(1161)]["host"] === $06cb531ed7840f78$export$7debb50ef11d5e0b[_0x1e7849(1407)])
                  _0x2c05f4 = _0x1e7849(1048);
                else
                  _0x2c05f4 = "You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.";
                throw new Error(_0x1e7849(1459) + _0x2c05f4);
              }
              throw new Error("Error. Status:"["concat"](_0x150d78[_0x1e7849(2036)]));
            }
            return [2, _0x150d78[_0x1e7849(962)]()];
          case 2:
            _0x2e3ab5 = _0x9a431b[_0x1e7849(519)](), $1615705ecc6adca3$exports[_0x1e7849(1744)][_0x1e7849(2165)](_0x1e7849(1908), _0x2e3ab5);
            throw new Error(_0x1e7849(1322) + _0x2e3ab5);
          case 3:
            return [2];
        }
      });
    });
  }, _0xda3470;
}(), $26088d7da5b03f69$var$__extends = function() {
  var _0x5108ac = function(_0x4aa303, _0x248b02) {
    var _0xba158b = _0x3001;
    return _0x5108ac = Object[_0xba158b(2146)] || { "__proto__": [] } instanceof Array && function(_0x591aa3, _0x11e8b1) {
      var _0x5e0b28 = _0xba158b;
      _0x591aa3[_0x5e0b28(1749)] = _0x11e8b1;
    } || function(_0x31c34a, _0x2fd2a0) {
      var _0x32cdc3 = _0xba158b;
      for (var _0xc894d1 in _0x2fd2a0)
        if (Object["prototype"][_0x32cdc3(1309)][_0x32cdc3(1206)](_0x2fd2a0, _0xc894d1))
          _0x31c34a[_0xc894d1] = _0x2fd2a0[_0xc894d1];
    }, _0x5108ac(_0x4aa303, _0x248b02);
  };
  return function(_0xcd734d, _0x44a5d7) {
    var _0x102b30 = _0x3001;
    if (typeof _0x44a5d7 !== _0x102b30(389) && _0x44a5d7 !== null)
      throw new TypeError(_0x102b30(1156) + String(_0x44a5d7) + _0x102b30(947));
    _0x5108ac(_0xcd734d, _0x44a5d7);
    function _0x288c5b() {
      var _0x1831eb = _0x102b30;
      this[_0x1831eb(1893)] = _0xcd734d;
    }
    _0xcd734d[_0x102b30(1897)] = _0x44a5d7 === null ? Object[_0x102b30(1409)](_0x44a5d7) : (_0x288c5b[_0x102b30(1897)] = _0x44a5d7[_0x102b30(1897)], new _0x288c5b());
  };
}(), $26088d7da5b03f69$var$__assign = function() {
  var _0x17f3e6 = _0x780a7e;
  return $26088d7da5b03f69$var$__assign = Object[_0x17f3e6(1153)] || function(_0x576a1e) {
    var _0x3940ca = _0x17f3e6;
    for (var _0x36107f, _0x840a26 = 1, _0x4be2f1 = arguments[_0x3940ca(1965)]; _0x840a26 < _0x4be2f1; _0x840a26++) {
      _0x36107f = arguments[_0x840a26];
      for (var _0x1f8271 in _0x36107f)
        if (Object["prototype"][_0x3940ca(1309)]["call"](_0x36107f, _0x1f8271))
          _0x576a1e[_0x1f8271] = _0x36107f[_0x1f8271];
    }
    return _0x576a1e;
  }, $26088d7da5b03f69$var$__assign[_0x17f3e6(2150)](this, arguments);
}, $26088d7da5b03f69$var$__values = function(_0x47f9b3) {
  var _0x5a7984 = _0x780a7e, _0x4a6c15 = typeof Symbol === _0x5a7984(389) && Symbol[_0x5a7984(1549)], _0x1f7194 = _0x4a6c15 && _0x47f9b3[_0x4a6c15], _0x2777f0 = 0;
  if (_0x1f7194)
    return _0x1f7194[_0x5a7984(1206)](_0x47f9b3);
  if (_0x47f9b3 && typeof _0x47f9b3[_0x5a7984(1965)] === _0x5a7984(2203))
    return { "next": function() {
      var _0x3cf7d0 = _0x5a7984;
      if (_0x47f9b3 && _0x2777f0 >= _0x47f9b3[_0x3cf7d0(1965)])
        _0x47f9b3 = void 0;
      return { "value": _0x47f9b3 && _0x47f9b3[_0x2777f0++], "done": !_0x47f9b3 };
    } };
  throw new TypeError(_0x4a6c15 ? _0x5a7984(552) : _0x5a7984(1657));
}, $26088d7da5b03f69$var$__read = function(_0x6a8a31, _0x49302d) {
  var _0x19d6bb = _0x780a7e, _0x2ecf2a = typeof Symbol === _0x19d6bb(389) && _0x6a8a31[Symbol[_0x19d6bb(1549)]];
  if (!_0x2ecf2a)
    return _0x6a8a31;
  var _0x4e8b96 = _0x2ecf2a["call"](_0x6a8a31), _0xe2469d, _0x59445f = [], _0x4b3b57;
  try {
    while ((_0x49302d === void 0 || _0x49302d-- > 0) && !(_0xe2469d = _0x4e8b96["next"]())[_0x19d6bb(1353)])
      _0x59445f[_0x19d6bb(1991)](_0xe2469d[_0x19d6bb(819)]);
  } catch (_0x34ce6a) {
    _0x4b3b57 = { "error": _0x34ce6a };
  } finally {
    try {
      if (_0xe2469d && !_0xe2469d[_0x19d6bb(1353)] && (_0x2ecf2a = _0x4e8b96[_0x19d6bb(2095)]))
        _0x2ecf2a[_0x19d6bb(1206)](_0x4e8b96);
    } finally {
      if (_0x4b3b57)
        throw _0x4b3b57["error"];
    }
  }
  return _0x59445f;
}, $26088d7da5b03f69$export$ecd1fc136c422448 = function(_0x5246e8) {
  var _0x1c1c40 = _0x780a7e;
  $26088d7da5b03f69$var$__extends(_0xac2cd6, _0x5246e8);
  function _0xac2cd6(_0x21c0cf, _0x363ff9) {
    var _0x5147f3 = _0x3001, _0x46dc41 = _0x5246e8[_0x5147f3(1206)](this) || this;
    _0x46dc41[_0x5147f3(1218)] = null, _0x46dc41["_lastServerId"] = null, _0x46dc41[_0x5147f3(1796)] = ![], _0x46dc41[_0x5147f3(1007)] = ![], _0x46dc41[_0x5147f3(1440)] = ![], _0x46dc41["_connections"] = /* @__PURE__ */ new Map(), _0x46dc41[_0x5147f3(1320)] = /* @__PURE__ */ new Map();
    var _0x3e063e;
    if (_0x21c0cf && _0x21c0cf[_0x5147f3(1893)] == Object)
      _0x363ff9 = _0x21c0cf;
    else {
      if (_0x21c0cf)
        _0x3e063e = _0x21c0cf["toString"]();
    }
    _0x363ff9 = $26088d7da5b03f69$var$__assign({ "debug": 0, "host": $06cb531ed7840f78$export$7debb50ef11d5e0b[_0x5147f3(1407)], "port": $06cb531ed7840f78$export$7debb50ef11d5e0b["CLOUD_PORT"], "path": "/", "key": _0xac2cd6[_0x5147f3(1135)], "token": $06cb531ed7840f78$export$7debb50ef11d5e0b["randomToken"](), "config": $06cb531ed7840f78$export$7debb50ef11d5e0b[_0x5147f3(872)], "referrerPolicy": _0x5147f3(1058) }, _0x363ff9), _0x46dc41[_0x5147f3(1161)] = _0x363ff9;
    if (_0x46dc41[_0x5147f3(1161)][_0x5147f3(515)] === "/")
      _0x46dc41["_options"]["host"] = window[_0x5147f3(1246)][_0x5147f3(1756)];
    if (_0x46dc41["_options"]["path"]) {
      if (_0x46dc41[_0x5147f3(1161)][_0x5147f3(521)][0] !== "/")
        _0x46dc41[_0x5147f3(1161)][_0x5147f3(521)] = "/" + _0x46dc41[_0x5147f3(1161)][_0x5147f3(521)];
      if (_0x46dc41[_0x5147f3(1161)][_0x5147f3(521)][_0x46dc41[_0x5147f3(1161)][_0x5147f3(521)][_0x5147f3(1965)] - 1] !== "/")
        _0x46dc41["_options"][_0x5147f3(521)] += "/";
    }
    if (_0x46dc41[_0x5147f3(1161)][_0x5147f3(1853)] === void 0 && _0x46dc41[_0x5147f3(1161)][_0x5147f3(515)] !== $06cb531ed7840f78$export$7debb50ef11d5e0b[_0x5147f3(1407)])
      _0x46dc41["_options"][_0x5147f3(1853)] = $06cb531ed7840f78$export$7debb50ef11d5e0b[_0x5147f3(2173)]();
    else {
      if (_0x46dc41[_0x5147f3(1161)][_0x5147f3(515)] == $06cb531ed7840f78$export$7debb50ef11d5e0b[_0x5147f3(1407)])
        _0x46dc41[_0x5147f3(1161)][_0x5147f3(1853)] = !![];
    }
    if (_0x46dc41[_0x5147f3(1161)][_0x5147f3(363)])
      $1615705ecc6adca3$exports[_0x5147f3(1744)]["setLogFunction"](_0x46dc41[_0x5147f3(1161)][_0x5147f3(363)]);
    $1615705ecc6adca3$exports[_0x5147f3(1744)][_0x5147f3(961)] = _0x46dc41["_options"][_0x5147f3(358)] || 0, _0x46dc41[_0x5147f3(1679)] = new $9e85b3e1327369e6$exports[_0x5147f3(741)](_0x363ff9), _0x46dc41[_0x5147f3(1761)] = _0x46dc41[_0x5147f3(750)]();
    if (!$06cb531ed7840f78$export$7debb50ef11d5e0b[_0x5147f3(1589)][_0x5147f3(1737)] && !$06cb531ed7840f78$export$7debb50ef11d5e0b[_0x5147f3(1589)]["data"])
      return _0x46dc41[_0x5147f3(1522)]($60fadef21a2daafc$export$9547aaa2e39030ff[_0x5147f3(1403)], _0x5147f3(375)), _0x46dc41;
    if (!!_0x3e063e && !$06cb531ed7840f78$export$7debb50ef11d5e0b[_0x5147f3(818)](_0x3e063e))
      return _0x46dc41[_0x5147f3(1522)]($60fadef21a2daafc$export$9547aaa2e39030ff[_0x5147f3(1484)], _0x5147f3(530)[_0x5147f3(2090)](_0x3e063e, '" is invalid')), _0x46dc41;
    if (_0x3e063e)
      _0x46dc41[_0x5147f3(1061)](_0x3e063e);
    else
      _0x46dc41[_0x5147f3(1679)]["retrieveId"]()[_0x5147f3(1902)](function(_0x31eee6) {
        var _0x2cc7e2 = _0x5147f3;
        return _0x46dc41[_0x2cc7e2(1061)](_0x31eee6);
      })[_0x5147f3(1517)](function(_0x23976f) {
        var _0x2be8b3 = _0x5147f3;
        return _0x46dc41[_0x2be8b3(1659)]($60fadef21a2daafc$export$9547aaa2e39030ff["ServerError"], _0x23976f);
      });
    return _0x46dc41;
  }
  return Object[_0x1c1c40(1564)](_0xac2cd6["prototype"], "id", { "get": function() {
    return this["_id"];
  }, "enumerable": ![], "configurable": !![] }), Object[_0x1c1c40(1564)](_0xac2cd6[_0x1c1c40(1897)], _0x1c1c40(686), { "get": function() {
    return this["_options"];
  }, "enumerable": ![], "configurable": !![] }), Object["defineProperty"](_0xac2cd6["prototype"], _0x1c1c40(1352), { "get": function() {
    var _0x46c850 = _0x1c1c40;
    return this[_0x46c850(1440)];
  }, "enumerable": ![], "configurable": !![] }), Object["defineProperty"](_0xac2cd6[_0x1c1c40(1897)], _0x1c1c40(908), { "get": function() {
    var _0x4b6073 = _0x1c1c40;
    return this[_0x4b6073(1761)];
  }, "enumerable": ![], "configurable": !![] }), Object[_0x1c1c40(1564)](_0xac2cd6[_0x1c1c40(1897)], _0x1c1c40(1784), { "get": function() {
    var _0x5306d4 = _0x1c1c40, _0x46a753, _0x46bc, _0x59e50c = Object[_0x5306d4(1409)](null);
    try {
      for (var _0x296f7a = $26088d7da5b03f69$var$__values(this[_0x5306d4(822)]), _0x47200e = _0x296f7a[_0x5306d4(670)](); !_0x47200e["done"]; _0x47200e = _0x296f7a["next"]()) {
        var _0x5ad30d = $26088d7da5b03f69$var$__read(_0x47200e[_0x5306d4(819)], 2), _0x4a7387 = _0x5ad30d[0], _0x1e35d6 = _0x5ad30d[1];
        _0x59e50c[_0x4a7387] = _0x1e35d6;
      }
    } catch (_0x33fcc2) {
      _0x46a753 = { "error": _0x33fcc2 };
    } finally {
      try {
        if (_0x47200e && !_0x47200e[_0x5306d4(1353)] && (_0x46bc = _0x296f7a[_0x5306d4(2095)]))
          _0x46bc["call"](_0x296f7a);
      } finally {
        if (_0x46a753)
          throw _0x46a753[_0x5306d4(2165)];
      }
    }
    return _0x59e50c;
  }, "enumerable": ![], "configurable": !![] }), Object[_0x1c1c40(1564)](_0xac2cd6[_0x1c1c40(1897)], _0x1c1c40(1355), { "get": function() {
    var _0x1e1755 = _0x1c1c40;
    return this[_0x1e1755(1796)];
  }, "enumerable": ![], "configurable": !![] }), Object[_0x1c1c40(1564)](_0xac2cd6["prototype"], _0x1c1c40(1055), { "get": function() {
    var _0x5bcd8f = _0x1c1c40;
    return this[_0x5bcd8f(1007)];
  }, "enumerable": ![], "configurable": !![] }), _0xac2cd6[_0x1c1c40(1897)][_0x1c1c40(750)] = function() {
    var _0x4dd234 = _0x1c1c40, _0x49a28b = this, _0x4ee667 = new $31d11a8d122cb4b7$exports[_0x4dd234(1471)](this["_options"][_0x4dd234(1853)], this[_0x4dd234(1161)]["host"], this[_0x4dd234(1161)][_0x4dd234(2071)], this["_options"][_0x4dd234(521)], this[_0x4dd234(1161)][_0x4dd234(1993)], this[_0x4dd234(1161)][_0x4dd234(1569)]);
    return _0x4ee667["on"]($60fadef21a2daafc$export$3b5c4a4b6354f023[_0x4dd234(989)], function(_0x251c07) {
      var _0x5a35b3 = _0x4dd234;
      _0x49a28b[_0x5a35b3(957)](_0x251c07);
    }), _0x4ee667["on"]($60fadef21a2daafc$export$3b5c4a4b6354f023[_0x4dd234(462)], function(_0x291a71) {
      var _0x5d8ebb = _0x4dd234;
      _0x49a28b[_0x5d8ebb(1659)]($60fadef21a2daafc$export$9547aaa2e39030ff[_0x5d8ebb(892)], _0x291a71);
    }), _0x4ee667["on"]($60fadef21a2daafc$export$3b5c4a4b6354f023["Disconnected"], function() {
      var _0x567f81 = _0x4dd234;
      if (_0x49a28b[_0x567f81(1055)])
        return;
      _0x49a28b[_0x567f81(1733)]($60fadef21a2daafc$export$9547aaa2e39030ff[_0x567f81(1652)], "Lost connection to server."), _0x49a28b["disconnect"]();
    }), _0x4ee667["on"]($60fadef21a2daafc$export$3b5c4a4b6354f023[_0x4dd234(1300)], function() {
      var _0x4cbe42 = _0x4dd234;
      if (_0x49a28b[_0x4cbe42(1055)])
        return;
      _0x49a28b[_0x4cbe42(1659)]($60fadef21a2daafc$export$9547aaa2e39030ff[_0x4cbe42(1877)], _0x4cbe42(493));
    }), _0x4ee667;
  }, _0xac2cd6["prototype"]["_initialize"] = function(_0x4d5f3b) {
    var _0x5a5760 = _0x1c1c40;
    this[_0x5a5760(1218)] = _0x4d5f3b, this[_0x5a5760(908)][_0x5a5760(2014)](_0x4d5f3b, this[_0x5a5760(1161)][_0x5a5760(688)]);
  }, _0xac2cd6[_0x1c1c40(1897)][_0x1c1c40(957)] = function(_0x2e89a9) {
    var _0x38ba9d = _0x1c1c40, _0x42431d, _0x5b437, _0x101a33 = _0x2e89a9[_0x38ba9d(1514)], _0x56dc52 = _0x2e89a9[_0x38ba9d(613)], _0x4d932d = _0x2e89a9[_0x38ba9d(2169)];
    switch (_0x101a33) {
      case $60fadef21a2daafc$export$adb4a1754da6f10d[_0x38ba9d(573)]:
        this["_lastServerId"] = this["id"], this["_open"] = !![], this[_0x38ba9d(2099)](_0x38ba9d(1352), this["id"]);
        break;
      case $60fadef21a2daafc$export$adb4a1754da6f10d[_0x38ba9d(462)]:
        this[_0x38ba9d(1659)]($60fadef21a2daafc$export$9547aaa2e39030ff[_0x38ba9d(602)], _0x56dc52[_0x38ba9d(394)]);
        break;
      case $60fadef21a2daafc$export$adb4a1754da6f10d["IdTaken"]:
        this[_0x38ba9d(1659)]($60fadef21a2daafc$export$9547aaa2e39030ff["UnavailableID"], 'ID "'[_0x38ba9d(2090)](this["id"], _0x38ba9d(1750)));
        break;
      case $60fadef21a2daafc$export$adb4a1754da6f10d["InvalidKey"]:
        this[_0x38ba9d(1659)]($60fadef21a2daafc$export$9547aaa2e39030ff[_0x38ba9d(2053)], _0x38ba9d(353)[_0x38ba9d(2090)](this[_0x38ba9d(1161)][_0x38ba9d(1993)], '" is invalid'));
        break;
      case $60fadef21a2daafc$export$adb4a1754da6f10d["Leave"]:
        $1615705ecc6adca3$exports["default"][_0x38ba9d(942)]("Received leave message from "[_0x38ba9d(2090)](_0x4d932d)), this[_0x38ba9d(789)](_0x4d932d), this[_0x38ba9d(822)]["delete"](_0x4d932d);
        break;
      case $60fadef21a2daafc$export$adb4a1754da6f10d[_0x38ba9d(944)]:
        this[_0x38ba9d(1733)]($60fadef21a2daafc$export$9547aaa2e39030ff[_0x38ba9d(751)], _0x38ba9d(366)[_0x38ba9d(2090)](_0x4d932d));
        break;
      case $60fadef21a2daafc$export$adb4a1754da6f10d["Offer"]:
        var _0x5ebf51 = _0x56dc52[_0x38ba9d(485)], _0x3325fe = this[_0x38ba9d(1783)](_0x4d932d, _0x5ebf51);
        _0x3325fe && (_0x3325fe[_0x38ba9d(1169)](), $1615705ecc6adca3$exports[_0x38ba9d(1744)][_0x38ba9d(1985)](_0x38ba9d(2049)[_0x38ba9d(2090)](_0x5ebf51)));
        if (_0x56dc52[_0x38ba9d(1514)] === $60fadef21a2daafc$export$3157d57b4135e3bc[_0x38ba9d(1249)]) {
          var _0x944cfe = new $353dee38f9ab557b$exports[_0x38ba9d(1369)](_0x4d932d, this, { "connectionId": _0x5ebf51, "_payload": _0x56dc52, "metadata": _0x56dc52[_0x38ba9d(492)] });
          _0x3325fe = _0x944cfe, this[_0x38ba9d(2034)](_0x4d932d, _0x3325fe), this[_0x38ba9d(2099)](_0x38ba9d(1206), _0x944cfe);
        } else {
          if (_0x56dc52[_0x38ba9d(1514)] === $60fadef21a2daafc$export$3157d57b4135e3bc[_0x38ba9d(1810)]) {
            var _0x53d6a9 = new $3356170d7bce7f20$exports[_0x38ba9d(1286)](_0x4d932d, this, { "connectionId": _0x5ebf51, "_payload": _0x56dc52, "metadata": _0x56dc52[_0x38ba9d(492)], "label": _0x56dc52[_0x38ba9d(689)], "serialization": _0x56dc52[_0x38ba9d(2109)], "reliable": _0x56dc52[_0x38ba9d(2179)] });
            _0x3325fe = _0x53d6a9, this[_0x38ba9d(2034)](_0x4d932d, _0x3325fe), this[_0x38ba9d(2099)]("connection", _0x53d6a9);
          } else {
            $1615705ecc6adca3$exports[_0x38ba9d(1744)]["warn"](_0x38ba9d(2113)[_0x38ba9d(2090)](_0x56dc52[_0x38ba9d(1514)]));
            return;
          }
        }
        var _0x54e513 = this[_0x38ba9d(887)](_0x5ebf51);
        try {
          for (var _0x45ccd9 = $26088d7da5b03f69$var$__values(_0x54e513), _0x4abebe = _0x45ccd9[_0x38ba9d(670)](); !_0x4abebe[_0x38ba9d(1353)]; _0x4abebe = _0x45ccd9["next"]()) {
            var _0x303ff1 = _0x4abebe["value"];
            _0x3325fe["handleMessage"](_0x303ff1);
          }
        } catch (_0x5ace75) {
          _0x42431d = { "error": _0x5ace75 };
        } finally {
          try {
            if (_0x4abebe && !_0x4abebe[_0x38ba9d(1353)] && (_0x5b437 = _0x45ccd9[_0x38ba9d(2095)]))
              _0x5b437[_0x38ba9d(1206)](_0x45ccd9);
          } finally {
            if (_0x42431d)
              throw _0x42431d[_0x38ba9d(2165)];
          }
        }
        break;
      default:
        if (!_0x56dc52) {
          $1615705ecc6adca3$exports[_0x38ba9d(1744)][_0x38ba9d(1985)](_0x38ba9d(878)[_0x38ba9d(2090)](_0x4d932d, _0x38ba9d(1026))["concat"](_0x101a33));
          return;
        }
        var _0x5ebf51 = _0x56dc52[_0x38ba9d(485)], _0x3325fe = this[_0x38ba9d(1783)](_0x4d932d, _0x5ebf51);
        if (_0x3325fe && _0x3325fe[_0x38ba9d(1934)])
          _0x3325fe["handleMessage"](_0x2e89a9);
        else {
          if (_0x5ebf51)
            this[_0x38ba9d(1807)](_0x5ebf51, _0x2e89a9);
          else
            $1615705ecc6adca3$exports[_0x38ba9d(1744)][_0x38ba9d(1985)](_0x38ba9d(357), _0x2e89a9);
        }
        break;
    }
  }, _0xac2cd6[_0x1c1c40(1897)][_0x1c1c40(1807)] = function(_0x2aa54a, _0x387ae6) {
    var _0x1af893 = _0x1c1c40;
    if (!this[_0x1af893(1320)][_0x1af893(432)](_0x2aa54a))
      this[_0x1af893(1320)][_0x1af893(2080)](_0x2aa54a, []);
    this[_0x1af893(1320)][_0x1af893(1892)](_0x2aa54a)[_0x1af893(1991)](_0x387ae6);
  }, _0xac2cd6["prototype"][_0x1c1c40(887)] = function(_0x296252) {
    var _0x39e016 = _0x1c1c40, _0x57aa8d = this[_0x39e016(1320)][_0x39e016(1892)](_0x296252);
    if (_0x57aa8d)
      return this["_lostMessages"]["delete"](_0x296252), _0x57aa8d;
    return [];
  }, _0xac2cd6[_0x1c1c40(1897)][_0x1c1c40(1647)] = function(_0x2272f5, _0x4d8de3) {
    var _0x39744a = _0x1c1c40;
    if (_0x4d8de3 === void 0)
      _0x4d8de3 = {};
    if (this["disconnected"]) {
      $1615705ecc6adca3$exports[_0x39744a(1744)][_0x39744a(1985)](_0x39744a(807)), this[_0x39744a(1733)]($60fadef21a2daafc$export$9547aaa2e39030ff[_0x39744a(758)], _0x39744a(825));
      return;
    }
    var _0x14c8f4 = new $3356170d7bce7f20$exports["DataConnection"](_0x2272f5, this, _0x4d8de3);
    return this["_addConnection"](_0x2272f5, _0x14c8f4), _0x14c8f4;
  }, _0xac2cd6["prototype"][_0x1c1c40(1206)] = function(_0x3c34e7, _0x2cd238, _0x1671db) {
    var _0x24c91e = _0x1c1c40;
    if (_0x1671db === void 0)
      _0x1671db = {};
    if (this[_0x24c91e(1055)]) {
      $1615705ecc6adca3$exports["default"][_0x24c91e(1985)]("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."), this[_0x24c91e(1733)]($60fadef21a2daafc$export$9547aaa2e39030ff[_0x24c91e(758)], _0x24c91e(825));
      return;
    }
    if (!_0x2cd238) {
      $1615705ecc6adca3$exports["default"][_0x24c91e(2165)](_0x24c91e(2160));
      return;
    }
    var _0x532cb9 = new $353dee38f9ab557b$exports[_0x24c91e(1369)](_0x3c34e7, this, $26088d7da5b03f69$var$__assign($26088d7da5b03f69$var$__assign({}, _0x1671db), { "_stream": _0x2cd238 }));
    return this[_0x24c91e(2034)](_0x3c34e7, _0x532cb9), _0x532cb9;
  }, _0xac2cd6[_0x1c1c40(1897)][_0x1c1c40(2034)] = function(_0x3c2483, _0x2e2ad6) {
    var _0x5625ad = _0x1c1c40;
    $1615705ecc6adca3$exports["default"][_0x5625ad(942)](_0x5625ad(1815)[_0x5625ad(2090)](_0x2e2ad6["type"], ":")[_0x5625ad(2090)](_0x2e2ad6[_0x5625ad(485)], _0x5625ad(1116))[_0x5625ad(2090)](_0x3c2483));
    if (!this[_0x5625ad(822)][_0x5625ad(432)](_0x3c2483))
      this[_0x5625ad(822)][_0x5625ad(2080)](_0x3c2483, []);
    this[_0x5625ad(822)][_0x5625ad(1892)](_0x3c2483)["push"](_0x2e2ad6);
  }, _0xac2cd6[_0x1c1c40(1897)][_0x1c1c40(1271)] = function(_0x4c898d) {
    var _0x5ee4a5 = _0x1c1c40, _0x5ef8d4 = this[_0x5ee4a5(822)][_0x5ee4a5(1892)](_0x4c898d[_0x5ee4a5(1262)]);
    if (_0x5ef8d4) {
      var _0x57c833 = _0x5ef8d4["indexOf"](_0x4c898d);
      if (_0x57c833 !== -1)
        _0x5ef8d4["splice"](_0x57c833, 1);
    }
    this[_0x5ee4a5(1320)][_0x5ee4a5(1653)](_0x4c898d[_0x5ee4a5(485)]);
  }, _0xac2cd6[_0x1c1c40(1897)]["getConnection"] = function(_0x3cd2ca, _0x181450) {
    var _0x48685f = _0x1c1c40, _0x1eef89, _0x3530db, _0x3980b8 = this["_connections"][_0x48685f(1892)](_0x3cd2ca);
    if (!_0x3980b8)
      return null;
    try {
      for (var _0xae10d4 = $26088d7da5b03f69$var$__values(_0x3980b8), _0x368d11 = _0xae10d4["next"](); !_0x368d11["done"]; _0x368d11 = _0xae10d4["next"]()) {
        var _0x3be2e4 = _0x368d11[_0x48685f(819)];
        if (_0x3be2e4[_0x48685f(485)] === _0x181450)
          return _0x3be2e4;
      }
    } catch (_0x4cedf3) {
      _0x1eef89 = { "error": _0x4cedf3 };
    } finally {
      try {
        if (_0x368d11 && !_0x368d11["done"] && (_0x3530db = _0xae10d4[_0x48685f(2095)]))
          _0x3530db[_0x48685f(1206)](_0xae10d4);
      } finally {
        if (_0x1eef89)
          throw _0x1eef89[_0x48685f(2165)];
      }
    }
    return null;
  }, _0xac2cd6[_0x1c1c40(1897)][_0x1c1c40(1522)] = function(_0xf54d8b, _0x4623f3) {
    var _0x54a730 = this;
    setTimeout(function() {
      var _0x60fb54 = _0x3001;
      _0x54a730[_0x60fb54(1659)](_0xf54d8b, _0x4623f3);
    }, 0);
  }, _0xac2cd6[_0x1c1c40(1897)][_0x1c1c40(1659)] = function(_0x51f5b7, _0x5aff7a) {
    var _0xe9b5ac = _0x1c1c40;
    $1615705ecc6adca3$exports[_0xe9b5ac(1744)][_0xe9b5ac(2165)](_0xe9b5ac(1683)), this[_0xe9b5ac(1733)](_0x51f5b7, _0x5aff7a);
    if (!this["_lastServerId"])
      this[_0xe9b5ac(557)]();
    else
      this[_0xe9b5ac(828)]();
  }, _0xac2cd6[_0x1c1c40(1897)][_0x1c1c40(1733)] = function(_0x5c55f6, _0x33684b) {
    var _0x43e488 = _0x1c1c40;
    $1615705ecc6adca3$exports[_0x43e488(1744)][_0x43e488(2165)](_0x43e488(1126), _0x33684b);
    var _0x3fa506;
    if (typeof _0x33684b === "string")
      _0x3fa506 = new Error(_0x33684b);
    else
      _0x3fa506 = _0x33684b;
    _0x3fa506[_0x43e488(1514)] = _0x5c55f6, this[_0x43e488(2099)](_0x43e488(2165), _0x3fa506);
  }, _0xac2cd6[_0x1c1c40(1897)][_0x1c1c40(557)] = function() {
    var _0x51cb93 = _0x1c1c40;
    if (this[_0x51cb93(1355)])
      return;
    $1615705ecc6adca3$exports[_0x51cb93(1744)][_0x51cb93(942)](_0x51cb93(883)[_0x51cb93(2090)](this["id"])), this[_0x51cb93(828)](), this[_0x51cb93(1688)](), this[_0x51cb93(1796)] = !![], this[_0x51cb93(2099)](_0x51cb93(1169));
  }, _0xac2cd6["prototype"][_0x1c1c40(1688)] = function() {
    var _0x3bc270 = _0x1c1c40, _0x5ade5e, _0x4c7424;
    try {
      for (var _0x5b5395 = $26088d7da5b03f69$var$__values(this["_connections"]["keys"]()), _0x337b88 = _0x5b5395[_0x3bc270(670)](); !_0x337b88[_0x3bc270(1353)]; _0x337b88 = _0x5b5395[_0x3bc270(670)]()) {
        var _0x1ce6d4 = _0x337b88[_0x3bc270(819)];
        this[_0x3bc270(789)](_0x1ce6d4), this[_0x3bc270(822)][_0x3bc270(1653)](_0x1ce6d4);
      }
    } catch (_0x21a9b6) {
      _0x5ade5e = { "error": _0x21a9b6 };
    } finally {
      try {
        if (_0x337b88 && !_0x337b88[_0x3bc270(1353)] && (_0x4c7424 = _0x5b5395[_0x3bc270(2095)]))
          _0x4c7424["call"](_0x5b5395);
      } finally {
        if (_0x5ade5e)
          throw _0x5ade5e[_0x3bc270(2165)];
      }
    }
    this[_0x3bc270(908)][_0x3bc270(1224)]();
  }, _0xac2cd6[_0x1c1c40(1897)][_0x1c1c40(789)] = function(_0x51d900) {
    var _0x29e5f8 = _0x1c1c40, _0x52a1b6, _0x151b81, _0x4651fa = this[_0x29e5f8(822)]["get"](_0x51d900);
    if (!_0x4651fa)
      return;
    try {
      for (var _0x59763f = $26088d7da5b03f69$var$__values(_0x4651fa), _0x53cc94 = _0x59763f[_0x29e5f8(670)](); !_0x53cc94[_0x29e5f8(1353)]; _0x53cc94 = _0x59763f[_0x29e5f8(670)]()) {
        var _0x392eee = _0x53cc94[_0x29e5f8(819)];
        _0x392eee[_0x29e5f8(1169)]();
      }
    } catch (_0x47c2d3) {
      _0x52a1b6 = { "error": _0x47c2d3 };
    } finally {
      try {
        if (_0x53cc94 && !_0x53cc94[_0x29e5f8(1353)] && (_0x151b81 = _0x59763f[_0x29e5f8(2095)]))
          _0x151b81[_0x29e5f8(1206)](_0x59763f);
      } finally {
        if (_0x52a1b6)
          throw _0x52a1b6[_0x29e5f8(2165)];
      }
    }
  }, _0xac2cd6[_0x1c1c40(1897)][_0x1c1c40(828)] = function() {
    var _0x7a0154 = _0x1c1c40;
    if (this[_0x7a0154(1055)])
      return;
    var _0x18deb4 = this["id"];
    $1615705ecc6adca3$exports[_0x7a0154(1744)]["log"](_0x7a0154(1605)[_0x7a0154(2090)](_0x18deb4)), this[_0x7a0154(1007)] = !![], this["_open"] = ![], this[_0x7a0154(908)][_0x7a0154(1169)](), this[_0x7a0154(414)] = _0x18deb4, this[_0x7a0154(1218)] = null, this["emit"](_0x7a0154(1055), _0x18deb4);
  }, _0xac2cd6[_0x1c1c40(1897)][_0x1c1c40(1936)] = function() {
    var _0x210d0f = _0x1c1c40;
    if (this[_0x210d0f(1055)] && !this[_0x210d0f(1355)])
      $1615705ecc6adca3$exports[_0x210d0f(1744)]["log"](_0x210d0f(1481)[_0x210d0f(2090)](this[_0x210d0f(414)])), this[_0x210d0f(1007)] = ![], this[_0x210d0f(1061)](this[_0x210d0f(414)]);
    else {
      if (this[_0x210d0f(1355)])
        throw new Error(_0x210d0f(2024));
      else {
        if (!this[_0x210d0f(1055)] && !this[_0x210d0f(1352)])
          $1615705ecc6adca3$exports[_0x210d0f(1744)][_0x210d0f(2165)](_0x210d0f(543));
        else
          throw new Error(_0x210d0f(1681)[_0x210d0f(2090)](this["id"], _0x210d0f(1406)));
      }
    }
  }, _0xac2cd6[_0x1c1c40(1897)]["listAllPeers"] = function(_0x1eacdc) {
    var _0x440d6b = _0x1c1c40, _0x5816cb = this;
    if (_0x1eacdc === void 0)
      _0x1eacdc = function(_0x26ec18) {
      };
    this[_0x440d6b(1679)][_0x440d6b(693)]()[_0x440d6b(1902)](function(_0x4e1367) {
      return _0x1eacdc(_0x4e1367);
    })[_0x440d6b(1517)](function(_0x3c83ae) {
      var _0x311cb1 = _0x440d6b;
      return _0x5816cb[_0x311cb1(1659)]($60fadef21a2daafc$export$9547aaa2e39030ff[_0x311cb1(602)], _0x3c83ae);
    });
  }, _0xac2cd6["DEFAULT_KEY"] = _0x1c1c40(1963), _0xac2cd6;
}($ac9b757d51178e15$exports[_0x780a7e(2198)]), $70d766613f57b014$export$2e2bcd8739ae039 = $26088d7da5b03f69$exports[_0x780a7e(618)];
function logOctoprint(_0x4acbc4, _0x5229ef) {
  var _0x323d6d = _0x780a7e;
  (networking == null ? void 0 : networking[_0x323d6d(2005)]) && fetch(BASEURL + "plugin/NanoFactory/add_to_octoprint_log?message_type=" + _0x4acbc4 + _0x323d6d(1883) + String(_0x5229ef), { "method": _0x323d6d(460), "headers": { "X-API-KEY": networking[_0x323d6d(2005)] } });
}
onerror = async function(_0x328869, _0x3741d3, _0x48f019, _0xe3208f, _0x5ab410) {
  var _0x1b8216 = _0x780a7e;
  logOctoprint(_0x1b8216(2165), String(_0x328869)), await rememberAllStreams(), window[_0x1b8216(1246)][_0x1b8216(1296)]();
};
let peer, networking, printer, nanofactoryPeersObject, jobProgressConnections = {}, temperatureStreamConnections = {}, terminalConnections = {}, positionChangedConnections = {}, filamentUpdateConnections = {}, cameraStreamConnections = {}, BASEURL = "";
const CURRENT_JOB_ID_KEY = _0x780a7e(1939), RETRY_CONNECTION_TIMEOUT = 15, params = new URLSearchParams(window[_0x780a7e(1246)][_0x780a7e(729)]);
loadDatabase(params[_0x780a7e(1892)]("peerID"))[_0x780a7e(1902)](async () => {
  var _0x287596 = _0x780a7e;
  let _0x276072 = await db[_0x287596(893)][_0x287596(2136)]();
  _0x276072[_0x287596(1965)] > 0 && (printer = _0x276072[0]);
  let _0x4c8ab4 = await db["nanofactoryPeers"]["toArray"]();
  _0x4c8ab4["length"] > 0 ? nanofactoryPeersObject = _0x4c8ab4[0] : (nanofactoryPeersObject = new NanoFactoryPeers(), nanofactoryPeersObject[_0x287596(2170)]());
  networking = await db[_0x287596(1198)][_0x287596(1892)]("1");
  !networking && (networking = new Networking("1"), await networking[_0x287596(2170)]());
  networking[_0x287596(1927)] = params[_0x287596(1892)](_0x287596(1927)), networking[_0x287596(1503)]({ "peerID": networking[_0x287596(1927)] });
  !printer && (printer = new Printer({ "id": networking[_0x287596(1927)] }), printer[_0x287596(2170)]());
  networking["apiKey"] = params[_0x287596(1892)](_0x287596(2005)), networking[_0x287596(1503)]({ "apiKey": networking[_0x287596(2005)] }), networking[_0x287596(1795)] = params[_0x287596(1892)](_0x287596(1795)), networking[_0x287596(1503)]({ "masterPeerID": networking[_0x287596(1795)] });
  networking[_0x287596(1795)][_0x287596(1965)] > 0 && (!isIdInList(networking[_0x287596(1795)], PeerType[_0x287596(1886)]) && addToList(PeerType[_0x287596(1886)], networking["masterPeerID"], "", ""));
  BASEURL = params["get"](_0x287596(891)) + "/";
  try {
    OctoPrint[_0x287596(686)][_0x287596(1279)] = BASEURL;
  } catch (_0x5403da) {
    if (_0x5403da[_0x287596(510)][_0x287596(433)]()[_0x287596(589)](_0x287596(1038)))
      setTimeout(() => {
        var _0x56e5b7 = _0x287596;
        location[_0x56e5b7(1296)]();
      }, 1e3);
  }
  if (networking[_0x287596(1927)]["length"] > 0)
    startupFunctions();
});
async function startupFunctions() {
  var _0x5ae2cd = _0x780a7e;
  initializeLocalStorage(), OctoPrint[_0x5ae2cd(686)][_0x5ae2cd(1510)] = networking["apiKey"];
  const _0xf097f2 = getPeerOptions();
  peer = new $70d766613f57b014$export$2e2bcd8739ae039(networking[_0x5ae2cd(1927)], _0xf097f2), callbackFunctionsForPeer(), await savePrinterProfile(), printer = (await db[_0x5ae2cd(893)][_0x5ae2cd(2136)]())[0], await saveConnectionOptions(), await updatePrinterStateAndTemperature(), updateFilamentUsage(), savePrinterPositionService(), restartNanoFactoryServerService();
  if (navigator["connection"] && !navigator[_0x5ae2cd(2089)][_0x5ae2cd(715)])
    navigator[_0x5ae2cd(2089)][_0x5ae2cd(715)] = handleNetworkChange;
  await OctoPrint[_0x5ae2cd(908)][_0x5ae2cd(1647)](), OctoPrint[_0x5ae2cd(908)][_0x5ae2cd(1654)]("*", (_0x126ce1) => handleSocketMessage(_0x126ce1));
}
function callbackFunctionsForPeer() {
  var _0x509914 = _0x780a7e;
  peer["on"](_0x509914(1352), function(_0x19970b) {
    var _0x15011d = _0x509914;
    console[_0x15011d(942)]("Connected to peer server with id:" + _0x19970b), callOctoprintEndPoint(OctoPrintEndPoint[_0x15011d(1165)], "GET");
    if (networking[_0x15011d(1795)])
      handleSyncAllRequest(networking[_0x15011d(1795)], networking[_0x15011d(1795)], {});
    restartAllStreams();
  }), peer["on"](_0x509914(2089), function(_0x187d1c) {
    _0x187d1c["on"]("data", async function(_0x527543) {
      var _0x53c652 = _0x3001;
      _0x187d1c[_0x53c652(1169)]();
      const _0x382b6c = JSON["parse"](_0x187d1c[_0x53c652(492)])["peerID"], _0x4eb365 = _0x187d1c[_0x53c652(1262)];
      handleIncomingDataGuard(_0x382b6c, _0x4eb365, parseInt(_0x187d1c["label"]), _0x527543[_0x53c652(797)], _0x527543["signature"], _0x187d1c[_0x53c652(492)]);
    });
  }), peer["on"](_0x509914(1055), function() {
    var _0x2fb52e = _0x509914;
    peer[_0x2fb52e(1936)]();
  }), peer["on"]("close", function() {
  }), peer["on"]("error", async function(_0x1dde5) {
    var _0x49f97f = _0x509914;
    console["error"](_0x1dde5);
    if (_0x1dde5["message"] === _0x49f97f(530) + peer["id"] + _0x49f97f(1750))
      console[_0x49f97f(942)]("Will retry connection to Peer server in " + RETRY_CONNECTION_TIMEOUT + " seconds!"), callOctoprintEndPoint(OctoPrintEndPoint[_0x49f97f(1219)], _0x49f97f(1990), { "timeout": RETRY_CONNECTION_TIMEOUT }), setTimeout(() => {
        var _0x56ce7a = _0x49f97f;
        peer = new $70d766613f57b014$export$2e2bcd8739ae039(networking[_0x56ce7a(1927)]), callbackFunctionsForPeer();
      }, RETRY_CONNECTION_TIMEOUT * 1e3);
    else
      _0x1dde5["message"]["includes"](_0x49f97f(366)) && removeAliasFromPeerIDAliasesMap(_0x1dde5[_0x49f97f(510)]["replace"](_0x49f97f(366), ""));
  });
}
async function handleNetworkChange(_0x3f2ca6) {
  var _0x4e0676 = _0x780a7e;
  navigator[_0x4e0676(1775)] ? (console["log"](_0x4e0676(1107)), window["location"]["reload"]()) : (console["log"](_0x4e0676(1432)), peer[_0x4e0676(557)](), await OctoPrint[_0x4e0676(908)][_0x4e0676(828)]());
}
function getPeerOptions() {
  var _0x280df0 = _0x780a7e;
  return { "config": { "iceServers": [{ "urls": "stun:stun.l.google.com:19302" }, { "urls": _0x280df0(1226) }, { "urls": "turn:openrelay.metered.ca:80", "username": _0x280df0(1207), "credential": _0x280df0(1207) }, { "urls": "turn:openrelay.metered.ca:443", "username": "openrelayproject", "credential": _0x280df0(1207) }, { "urls": _0x280df0(1960), "username": _0x280df0(1207), "credential": _0x280df0(1207) }, { "urls": _0x280df0(1331), "credential": _0x280df0(1996), "username": _0x280df0(702) }, { "urls": "stun:stun.relay.metered.ca:80" }, { "urls": "turn:a.relay.metered.ca:80", "username": _0x280df0(802), "credential": _0x280df0(1872) }, { "urls": "turn:a.relay.metered.ca:80?transport=tcp", "username": _0x280df0(802), "credential": _0x280df0(1872) }, { "urls": _0x280df0(2152), "username": _0x280df0(802), "credential": _0x280df0(1872) }, { "urls": "turn:a.relay.metered.ca:443?transport=tcp", "username": _0x280df0(802), "credential": _0x280df0(1872) }] } };
}
