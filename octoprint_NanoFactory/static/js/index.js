var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var ConnectionLabels = /* @__PURE__ */ ((ConnectionLabels2) => {
  ConnectionLabels2["syncAllRequest"] = "1";
  ConnectionLabels2["syncAllResponse"] = "2";
  ConnectionLabels2["profileChanged"] = "3";
  ConnectionLabels2["positionChanged"] = "57";
  ConnectionLabels2["positionChangedResponse"] = "4";
  ConnectionLabels2["positionChangedRequest"] = "53";
  ConnectionLabels2["positionChangedStop"] = "54";
  ConnectionLabels2["cameraStreamRequest"] = "5";
  ConnectionLabels2["cameraStreamResponse"] = "34";
  ConnectionLabels2["cameraStreamStop"] = "44";
  ConnectionLabels2["temperatureStreamRequest"] = "6";
  ConnectionLabels2["temperatureStreamResponse"] = "35";
  ConnectionLabels2["temperatureStreamStop"] = "43";
  ConnectionLabels2["bedLevelingRequest"] = "7";
  ConnectionLabels2["bedLevelingResponse"] = "8";
  ConnectionLabels2["terminalRequest"] = "9";
  ConnectionLabels2["terminalResponse"] = "10";
  ConnectionLabels2["terminalStop"] = "42";
  ConnectionLabels2["filamentModified"] = "58";
  ConnectionLabels2["filamentAssigned"] = "11";
  ConnectionLabels2["filamentRemoved"] = "12";
  ConnectionLabels2["filamentModifiedResponse"] = "40";
  ConnectionLabels2["filamentModifiedRequest"] = "52";
  ConnectionLabels2["filamentModifiedStop"] = "55";
  ConnectionLabels2["jobCreated"] = "13";
  ConnectionLabels2["jobFile"] = "41";
  ConnectionLabels2["jobDone"] = "14";
  ConnectionLabels2["jobCancelled"] = "15";
  ConnectionLabels2["jobFailed"] = "16";
  ConnectionLabels2["jobDeleted"] = "17";
  ConnectionLabels2["jobPause"] = "25";
  ConnectionLabels2["jobResume"] = "26";
  ConnectionLabels2["jobPrinting"] = "37";
  ConnectionLabels2["jobFilamentModified"] = "30";
  ConnectionLabels2["currentJobUpdatesResponse"] = "49";
  ConnectionLabels2["currentJobUpdatesRequest"] = "51";
  ConnectionLabels2["currentJobUpdatesStop"] = "56";
  ConnectionLabels2["jobRankChange"] = "18";
  ConnectionLabels2["actionCreated"] = "19";
  ConnectionLabels2["actionModified"] = "20";
  ConnectionLabels2["actionExecuted"] = "21";
  ConnectionLabels2["actionDeleted"] = "22";
  ConnectionLabels2["executeCustomGcode"] = "23";
  ConnectionLabels2["emergencyStop"] = "24";
  ConnectionLabels2["connectPrinter"] = "27";
  ConnectionLabels2["disconnectPrinter"] = "28";
  ConnectionLabels2["connectionOptionsChanged"] = "38";
  ConnectionLabels2["printerStateChanged"] = "39";
  ConnectionLabels2["refreshConnectionOptions"] = "45";
  ConnectionLabels2["filamentExtrude"] = "46";
  ConnectionLabels2["targetTool"] = "47";
  ConnectionLabels2["targetBed"] = "48";
  ConnectionLabels2["handshakeRequest"] = "50";
  ConnectionLabels2["handshakeResponse"] = "31";
  ConnectionLabels2["queuePaused"] = "29";
  ConnectionLabels2["home"] = "59";
  ConnectionLabels2["peerPermissionRequest"] = "32";
  ConnectionLabels2["peerPermissionResponse"] = "33";
  ConnectionLabels2["peerListModification"] = "36";
  return ConnectionLabels2;
})(ConnectionLabels || {});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.
Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
var keys = Object.keys;
var isArray = Array.isArray;
if (typeof Promise !== "undefined" && !_global.Promise) {
  _global.Promise = Promise;
}
function extend(obj, extension) {
  if (typeof extension !== "object")
    return obj;
  keys(extension).forEach(function (key) {
    obj[key] = extension[key];
  });
  return obj;
}
var getProto = Object.getPrototypeOf;
var _hasOwn = {}.hasOwnProperty;
function hasOwn(obj, prop) {
  return _hasOwn.call(obj, prop);
}
function props(proto, extension) {
  if (typeof extension === "function")
    extension = extension(getProto(proto));
  (typeof Reflect === "undefined" ? keys : Reflect.ownKeys)(extension).forEach(function (key) {
    setProp(proto, key, extension[key]);
  });
}
var defineProperty = Object.defineProperty;
function setProp(obj, prop, functionOrGetSet, options) {
  defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === "function" ? { get: functionOrGetSet.get, set: functionOrGetSet.set, configurable: true } : { value: functionOrGetSet, configurable: true, writable: true }, options));
}
function derive(Child) {
  return {
    from: function (Parent) {
      Child.prototype = Object.create(Parent.prototype);
      setProp(Child.prototype, "constructor", Child);
      return {
        extend: props.bind(null, Child.prototype)
      };
    }
  };
}
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
function getPropertyDescriptor(obj, prop) {
  var pd = getOwnPropertyDescriptor(obj, prop);
  var proto;
  return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
}
var _slice = [].slice;
function slice(args, start, end) {
  return _slice.call(args, start, end);
}
function override(origFunc, overridedFactory) {
  return overridedFactory(origFunc);
}
function assert(b) {
  if (!b)
    throw new Error("Assertion Failed");
}
function asap$1(fn) {
  if (_global.setImmediate)
    setImmediate(fn);
  else
    setTimeout(fn, 0);
}
function arrayToObject(array, extractor) {
  return array.reduce(function (result, item, i) {
    var nameAndValue = extractor(item, i);
    if (nameAndValue)
      result[nameAndValue[0]] = nameAndValue[1];
    return result;
  }, {});
}
function tryCatch(fn, onerror, args) {
  try {
    fn.apply(null, args);
  } catch (ex) {
    onerror && onerror(ex);
  }
}
function getByKeyPath(obj, keyPath) {
  if (hasOwn(obj, keyPath))
    return obj[keyPath];
  if (!keyPath)
    return obj;
  if (typeof keyPath !== "string") {
    var rv = [];
    for (var i = 0, l = keyPath.length; i < l; ++i) {
      var val = getByKeyPath(obj, keyPath[i]);
      rv.push(val);
    }
    return rv;
  }
  var period = keyPath.indexOf(".");
  if (period !== -1) {
    var innerObj = obj[keyPath.substr(0, period)];
    return innerObj === void 0 ? void 0 : getByKeyPath(innerObj, keyPath.substr(period + 1));
  }
  return void 0;
}
function setByKeyPath(obj, keyPath, value) {
  if (!obj || keyPath === void 0)
    return;
  if ("isFrozen" in Object && Object.isFrozen(obj))
    return;
  if (typeof keyPath !== "string" && "length" in keyPath) {
    assert(typeof value !== "string" && "length" in value);
    for (var i = 0, l = keyPath.length; i < l; ++i) {
      setByKeyPath(obj, keyPath[i], value[i]);
    }
  } else {
    var period = keyPath.indexOf(".");
    if (period !== -1) {
      var currentKeyPath = keyPath.substr(0, period);
      var remainingKeyPath = keyPath.substr(period + 1);
      if (remainingKeyPath === "")
        if (value === void 0) {
          if (isArray(obj) && !isNaN(parseInt(currentKeyPath)))
            obj.splice(currentKeyPath, 1);
          else
            delete obj[currentKeyPath];
        } else
          obj[currentKeyPath] = value;
      else {
        var innerObj = obj[currentKeyPath];
        if (!innerObj || !hasOwn(obj, currentKeyPath))
          innerObj = obj[currentKeyPath] = {};
        setByKeyPath(innerObj, remainingKeyPath, value);
      }
    } else {
      if (value === void 0) {
        if (isArray(obj) && !isNaN(parseInt(keyPath)))
          obj.splice(keyPath, 1);
        else
          delete obj[keyPath];
      } else
        obj[keyPath] = value;
    }
  }
}
function delByKeyPath(obj, keyPath) {
  if (typeof keyPath === "string")
    setByKeyPath(obj, keyPath, void 0);
  else if ("length" in keyPath)
    [].map.call(keyPath, function (kp) {
      setByKeyPath(obj, kp, void 0);
    });
}
function shallowClone(obj) {
  var rv = {};
  for (var m in obj) {
    if (hasOwn(obj, m))
      rv[m] = obj[m];
  }
  return rv;
}
var concat = [].concat;
function flatten(a) {
  return concat.apply([], a);
}
var intrinsicTypeNames = "Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(flatten([8, 16, 32, 64].map(function (num) {
  return ["Int", "Uint", "Float"].map(function (t) {
    return t + num + "Array";
  });
}))).filter(function (t) {
  return _global[t];
});
var intrinsicTypes = intrinsicTypeNames.map(function (t) {
  return _global[t];
});
arrayToObject(intrinsicTypeNames, function (x) {
  return [x, true];
});
var circularRefs = null;
function deepClone(any) {
  circularRefs = typeof WeakMap !== "undefined" && /* @__PURE__ */ new WeakMap();
  var rv = innerDeepClone(any);
  circularRefs = null;
  return rv;
}
function innerDeepClone(any) {
  if (!any || typeof any !== "object")
    return any;
  var rv = circularRefs && circularRefs.get(any);
  if (rv)
    return rv;
  if (isArray(any)) {
    rv = [];
    circularRefs && circularRefs.set(any, rv);
    for (var i = 0, l = any.length; i < l; ++i) {
      rv.push(innerDeepClone(any[i]));
    }
  } else if (intrinsicTypes.indexOf(any.constructor) >= 0) {
    rv = any;
  } else {
    var proto = getProto(any);
    rv = proto === Object.prototype ? {} : Object.create(proto);
    circularRefs && circularRefs.set(any, rv);
    for (var prop in any) {
      if (hasOwn(any, prop)) {
        rv[prop] = innerDeepClone(any[prop]);
      }
    }
  }
  return rv;
}
var toString = {}.toString;
function toStringTag(o) {
  return toString.call(o).slice(8, -1);
}
var iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
var getIteratorOf = typeof iteratorSymbol === "symbol" ? function (x) {
  var i;
  return x != null && (i = x[iteratorSymbol]) && i.apply(x);
} : function () {
  return null;
};
var NO_CHAR_ARRAY = {};
function getArrayOf(arrayLike) {
  var i, a, x, it;
  if (arguments.length === 1) {
    if (isArray(arrayLike))
      return arrayLike.slice();
    if (this === NO_CHAR_ARRAY && typeof arrayLike === "string")
      return [arrayLike];
    if (it = getIteratorOf(arrayLike)) {
      a = [];
      while (x = it.next(), !x.done)
        a.push(x.value);
      return a;
    }
    if (arrayLike == null)
      return [arrayLike];
    i = arrayLike.length;
    if (typeof i === "number") {
      a = new Array(i);
      while (i--)
        a[i] = arrayLike[i];
      return a;
    }
    return [arrayLike];
  }
  i = arguments.length;
  a = new Array(i);
  while (i--)
    a[i] = arguments[i];
  return a;
}
var isAsyncFunction = typeof Symbol !== "undefined" ? function (fn) {
  return fn[Symbol.toStringTag] === "AsyncFunction";
} : function () {
  return false;
};
var debug = typeof location !== "undefined" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
function setDebug(value, filter) {
  debug = value;
  libraryFilter = filter;
}
var libraryFilter = function () {
  return true;
};
var NEEDS_THROW_FOR_STACK = !new Error("").stack;
function getErrorWithStack() {
  if (NEEDS_THROW_FOR_STACK)
    try {
      getErrorWithStack.arguments;
      throw new Error();
    } catch (e) {
      return e;
    }
  return new Error();
}
function prettyStack(exception, numIgnoredFrames) {
  var stack = exception.stack;
  if (!stack)
    return "";
  numIgnoredFrames = numIgnoredFrames || 0;
  if (stack.indexOf(exception.name) === 0)
    numIgnoredFrames += (exception.name + exception.message).split("\n").length;
  return stack.split("\n").slice(numIgnoredFrames).filter(libraryFilter).map(function (frame) {
    return "\n" + frame;
  }).join("");
}
var dexieErrorNames = [
  "Modify",
  "Bulk",
  "OpenFailed",
  "VersionChange",
  "Schema",
  "Upgrade",
  "InvalidTable",
  "MissingAPI",
  "NoSuchDatabase",
  "InvalidArgument",
  "SubTransaction",
  "Unsupported",
  "Internal",
  "DatabaseClosed",
  "PrematureCommit",
  "ForeignAwait"
];
var idbDomErrorNames = [
  "Unknown",
  "Constraint",
  "Data",
  "TransactionInactive",
  "ReadOnly",
  "Version",
  "NotFound",
  "InvalidState",
  "InvalidAccess",
  "Abort",
  "Timeout",
  "QuotaExceeded",
  "Syntax",
  "DataClone"
];
var errorList = dexieErrorNames.concat(idbDomErrorNames);
var defaultTexts = {
  VersionChanged: "Database version changed by other database connection",
  DatabaseClosed: "Database has been closed",
  Abort: "Transaction aborted",
  TransactionInactive: "Transaction has already completed or failed",
  MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
};
function DexieError(name, msg) {
  this._e = getErrorWithStack();
  this.name = name;
  this.message = msg;
}
derive(DexieError).from(Error).extend({
  stack: {
    get: function () {
      return this._stack || (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
    }
  },
  toString: function () {
    return this.name + ": " + this.message;
  }
});
function getMultiErrorMessage(msg, failures) {
  return msg + ". Errors: " + Object.keys(failures).map(function (key) {
    return failures[key].toString();
  }).filter(function (v, i, s) {
    return s.indexOf(v) === i;
  }).join("\n");
}
function ModifyError(msg, failures, successCount, failedKeys) {
  this._e = getErrorWithStack();
  this.failures = failures;
  this.failedKeys = failedKeys;
  this.successCount = successCount;
  this.message = getMultiErrorMessage(msg, failures);
}
derive(ModifyError).from(DexieError);
function BulkError(msg, failures) {
  this._e = getErrorWithStack();
  this.name = "BulkError";
  this.failures = Object.keys(failures).map(function (pos) {
    return failures[pos];
  });
  this.failuresByPos = failures;
  this.message = getMultiErrorMessage(msg, failures);
}
derive(BulkError).from(DexieError);
var errnames = errorList.reduce(function (obj, name) {
  return obj[name] = name + "Error", obj;
}, {});
var BaseException = DexieError;
var exceptions = errorList.reduce(function (obj, name) {
  var fullName = name + "Error";
  function DexieError2(msgOrInner, inner) {
    this._e = getErrorWithStack();
    this.name = fullName;
    if (!msgOrInner) {
      this.message = defaultTexts[name] || fullName;
      this.inner = null;
    } else if (typeof msgOrInner === "string") {
      this.message = "" + msgOrInner + (!inner ? "" : "\n " + inner);
      this.inner = inner || null;
    } else if (typeof msgOrInner === "object") {
      this.message = msgOrInner.name + " " + msgOrInner.message;
      this.inner = msgOrInner;
    }
  }
  derive(DexieError2).from(BaseException);
  obj[name] = DexieError2;
  return obj;
}, {});
exceptions.Syntax = SyntaxError;
exceptions.Type = TypeError;
exceptions.Range = RangeError;
var exceptionMap = idbDomErrorNames.reduce(function (obj, name) {
  obj[name + "Error"] = exceptions[name];
  return obj;
}, {});
function mapError(domError, message) {
  if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name])
    return domError;
  var rv = new exceptionMap[domError.name](message || domError.message, domError);
  if ("stack" in domError) {
    setProp(rv, "stack", {
      get: function () {
        return this.inner.stack;
      }
    });
  }
  return rv;
}
var fullNameExceptions = errorList.reduce(function (obj, name) {
  if (["Syntax", "Type", "Range"].indexOf(name) === -1)
    obj[name + "Error"] = exceptions[name];
  return obj;
}, {});
fullNameExceptions.ModifyError = ModifyError;
fullNameExceptions.DexieError = DexieError;
fullNameExceptions.BulkError = BulkError;
function nop() {
}
function mirror(val) {
  return val;
}
function pureFunctionChain(f1, f2) {
  if (f1 == null || f1 === mirror)
    return f2;
  return function (val) {
    return f2(f1(val));
  };
}
function callBoth(on1, on2) {
  return function () {
    on1.apply(this, arguments);
    on2.apply(this, arguments);
  };
}
function hookCreatingChain(f1, f2) {
  if (f1 === nop)
    return f2;
  return function () {
    var res = f1.apply(this, arguments);
    if (res !== void 0)
      arguments[0] = res;
    var onsuccess = this.onsuccess, onerror = this.onerror;
    this.onsuccess = null;
    this.onerror = null;
    var res2 = f2.apply(this, arguments);
    if (onsuccess)
      this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror)
      this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    return res2 !== void 0 ? res2 : res;
  };
}
function hookDeletingChain(f1, f2) {
  if (f1 === nop)
    return f2;
  return function () {
    f1.apply(this, arguments);
    var onsuccess = this.onsuccess, onerror = this.onerror;
    this.onsuccess = this.onerror = null;
    f2.apply(this, arguments);
    if (onsuccess)
      this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror)
      this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
  };
}
function hookUpdatingChain(f1, f2) {
  if (f1 === nop)
    return f2;
  return function (modifications) {
    var res = f1.apply(this, arguments);
    extend(modifications, res);
    var onsuccess = this.onsuccess, onerror = this.onerror;
    this.onsuccess = null;
    this.onerror = null;
    var res2 = f2.apply(this, arguments);
    if (onsuccess)
      this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror)
      this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    return res === void 0 ? res2 === void 0 ? void 0 : res2 : extend(res, res2);
  };
}
function reverseStoppableEventChain(f1, f2) {
  if (f1 === nop)
    return f2;
  return function () {
    if (f2.apply(this, arguments) === false)
      return false;
    return f1.apply(this, arguments);
  };
}
function promisableChain(f1, f2) {
  if (f1 === nop)
    return f2;
  return function () {
    var res = f1.apply(this, arguments);
    if (res && typeof res.then === "function") {
      var thiz = this, i = arguments.length, args = new Array(i);
      while (i--)
        args[i] = arguments[i];
      return res.then(function () {
        return f2.apply(thiz, args);
      });
    }
    return f2.apply(this, arguments);
  };
}
var INTERNAL = {};
var LONG_STACKS_CLIP_LIMIT = 100, MAX_LONG_STACKS = 20, ZONE_ECHO_LIMIT = 100, _a$1 = typeof Promise === "undefined" ? [] : function () {
  var globalP = Promise.resolve();
  if (typeof crypto === "undefined" || !crypto.subtle)
    return [globalP, getProto(globalP), globalP];
  var nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
  return [
    nativeP,
    getProto(nativeP),
    globalP
  ];
}(), resolvedNativePromise = _a$1[0], nativePromiseProto = _a$1[1], resolvedGlobalPromise = _a$1[2], nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
var patchGlobalPromise = !!resolvedGlobalPromise;
var stack_being_generated = false;
var schedulePhysicalTick = resolvedGlobalPromise ? function () {
  resolvedGlobalPromise.then(physicalTick);
} : _global.setImmediate ? setImmediate.bind(null, physicalTick) : _global.MutationObserver ? function () {
  var hiddenDiv = document.createElement("div");
  new MutationObserver(function () {
    physicalTick();
    hiddenDiv = null;
  }).observe(hiddenDiv, { attributes: true });
  hiddenDiv.setAttribute("i", "1");
} : function () {
  setTimeout(physicalTick, 0);
};
var asap = function (callback, args) {
  microtickQueue.push([callback, args]);
  if (needsNewPhysicalTick) {
    schedulePhysicalTick();
    needsNewPhysicalTick = false;
  }
};
var isOutsideMicroTick = true, needsNewPhysicalTick = true, unhandledErrors = [], rejectingErrors = [], currentFulfiller = null, rejectionMapper = mirror;
var globalPSD = {
  id: "global",
  global: true,
  ref: 0,
  unhandleds: [],
  onunhandled: globalError,
  pgp: false,
  env: {},
  finalize: function () {
    this.unhandleds.forEach(function (uh) {
      try {
        globalError(uh[0], uh[1]);
      } catch (e) {
      }
    });
  }
};
var PSD = globalPSD;
var microtickQueue = [];
var numScheduledCalls = 0;
var tickFinalizers = [];
function DexiePromise(fn) {
  if (typeof this !== "object")
    throw new TypeError("Promises must be constructed via new");
  this._listeners = [];
  this.onuncatched = nop;
  this._lib = false;
  var psd = this._PSD = PSD;
  if (debug) {
    this._stackHolder = getErrorWithStack();
    this._prev = null;
    this._numPrev = 0;
  }
  if (typeof fn !== "function") {
    if (fn !== INTERNAL)
      throw new TypeError("Not a function");
    this._state = arguments[1];
    this._value = arguments[2];
    if (this._state === false)
      handleRejection(this, this._value);
    return;
  }
  this._state = null;
  this._value = null;
  ++psd.ref;
  executePromiseTask(this, fn);
}
var thenProp = {
  get: function () {
    var psd = PSD, microTaskId = totalEchoes;
    function then(onFulfilled, onRejected) {
      var _this = this;
      var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
      var cleanup = possibleAwait && !decrementExpectedAwaits();
      var rv = new DexiePromise(function (resolve, reject) {
        propagateToListener(_this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup), resolve, reject, psd));
      });
      debug && linkToPreviousPromise(rv, this);
      return rv;
    }
    then.prototype = INTERNAL;
    return then;
  },
  set: function (value) {
    setProp(this, "then", value && value.prototype === INTERNAL ? thenProp : {
      get: function () {
        return value;
      },
      set: thenProp.set
    });
  }
};
props(DexiePromise.prototype, {
  then: thenProp,
  _then: function (onFulfilled, onRejected) {
    propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
  },
  catch: function (onRejected) {
    if (arguments.length === 1)
      return this.then(null, onRejected);
    var type2 = arguments[0], handler = arguments[1];
    return typeof type2 === "function" ? this.then(null, function (err) {
      return err instanceof type2 ? handler(err) : PromiseReject(err);
    }) : this.then(null, function (err) {
      return err && err.name === type2 ? handler(err) : PromiseReject(err);
    });
  },
  finally: function (onFinally) {
    return this.then(function (value) {
      onFinally();
      return value;
    }, function (err) {
      onFinally();
      return PromiseReject(err);
    });
  },
  stack: {
    get: function () {
      if (this._stack)
        return this._stack;
      try {
        stack_being_generated = true;
        var stacks = getStack(this, [], MAX_LONG_STACKS);
        var stack = stacks.join("\nFrom previous: ");
        if (this._state !== null)
          this._stack = stack;
        return stack;
      } finally {
        stack_being_generated = false;
      }
    }
  },
  timeout: function (ms, msg) {
    var _this = this;
    return ms < Infinity ? new DexiePromise(function (resolve, reject) {
      var handle = setTimeout(function () {
        return reject(new exceptions.Timeout(msg));
      }, ms);
      _this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
    }) : this;
  }
});
if (typeof Symbol !== "undefined" && Symbol.toStringTag)
  setProp(DexiePromise.prototype, Symbol.toStringTag, "Dexie.Promise");
globalPSD.env = snapShot();
function Listener(onFulfilled, onRejected, resolve, reject, zone) {
  this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
  this.onRejected = typeof onRejected === "function" ? onRejected : null;
  this.resolve = resolve;
  this.reject = reject;
  this.psd = zone;
}
props(DexiePromise, {
  all: function () {
    var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise(function (resolve, reject) {
      if (values.length === 0)
        resolve([]);
      var remaining = values.length;
      values.forEach(function (a, i) {
        return DexiePromise.resolve(a).then(function (x) {
          values[i] = x;
          if (!--remaining)
            resolve(values);
        }, reject);
      });
    });
  },
  resolve: function (value) {
    if (value instanceof DexiePromise)
      return value;
    if (value && typeof value.then === "function")
      return new DexiePromise(function (resolve, reject) {
        value.then(resolve, reject);
      });
    var rv = new DexiePromise(INTERNAL, true, value);
    linkToPreviousPromise(rv, currentFulfiller);
    return rv;
  },
  reject: PromiseReject,
  race: function () {
    var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise(function (resolve, reject) {
      values.map(function (value) {
        return DexiePromise.resolve(value).then(resolve, reject);
      });
    });
  },
  PSD: {
    get: function () {
      return PSD;
    },
    set: function (value) {
      return PSD = value;
    }
  },
  totalEchoes: {
    get: function () {
      return totalEchoes;
    }
  },
  newPSD: newScope,
  usePSD,
  scheduler: {
    get: function () {
      return asap;
    },
    set: function (value) {
      asap = value;
    }
  },
  rejectionMapper: {
    get: function () {
      return rejectionMapper;
    },
    set: function (value) {
      rejectionMapper = value;
    }
  },
  follow: function (fn, zoneProps) {
    return new DexiePromise(function (resolve, reject) {
      return newScope(function (resolve2, reject2) {
        var psd = PSD;
        psd.unhandleds = [];
        psd.onunhandled = reject2;
        psd.finalize = callBoth(function () {
          var _this = this;
          run_at_end_of_this_or_next_physical_tick(function () {
            _this.unhandleds.length === 0 ? resolve2() : reject2(_this.unhandleds[0]);
          });
        }, psd.finalize);
        fn();
      }, zoneProps, resolve, reject);
    });
  }
});
if (NativePromise) {
  if (NativePromise.allSettled)
    setProp(DexiePromise, "allSettled", function () {
      var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
      return new DexiePromise(function (resolve) {
        if (possiblePromises.length === 0)
          resolve([]);
        var remaining = possiblePromises.length;
        var results = new Array(remaining);
        possiblePromises.forEach(function (p, i) {
          return DexiePromise.resolve(p).then(function (value) {
            return results[i] = { status: "fulfilled", value };
          }, function (reason) {
            return results[i] = { status: "rejected", reason };
          }).then(function () {
            return --remaining || resolve(results);
          });
        });
      });
    });
  if (NativePromise.any && typeof AggregateError !== "undefined")
    setProp(DexiePromise, "any", function () {
      var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
      return new DexiePromise(function (resolve, reject) {
        if (possiblePromises.length === 0)
          reject(new AggregateError([]));
        var remaining = possiblePromises.length;
        var failures = new Array(remaining);
        possiblePromises.forEach(function (p, i) {
          return DexiePromise.resolve(p).then(function (value) {
            return resolve(value);
          }, function (failure) {
            failures[i] = failure;
            if (!--remaining)
              reject(new AggregateError(failures));
          });
        });
      });
    });
}
function executePromiseTask(promise, fn) {
  try {
    fn(function (value) {
      if (promise._state !== null)
        return;
      if (value === promise)
        throw new TypeError("A promise cannot be resolved with itself.");
      var shouldExecuteTick = promise._lib && beginMicroTickScope();
      if (value && typeof value.then === "function") {
        executePromiseTask(promise, function (resolve, reject) {
          value instanceof DexiePromise ? value._then(resolve, reject) : value.then(resolve, reject);
        });
      } else {
        promise._state = true;
        promise._value = value;
        propagateAllListeners(promise);
      }
      if (shouldExecuteTick)
        endMicroTickScope();
    }, handleRejection.bind(null, promise));
  } catch (ex) {
    handleRejection(promise, ex);
  }
}
function handleRejection(promise, reason) {
  rejectingErrors.push(reason);
  if (promise._state !== null)
    return;
  var shouldExecuteTick = promise._lib && beginMicroTickScope();
  reason = rejectionMapper(reason);
  promise._state = false;
  promise._value = reason;
  debug && reason !== null && typeof reason === "object" && !reason._promise && tryCatch(function () {
    var origProp = getPropertyDescriptor(reason, "stack");
    reason._promise = promise;
    setProp(reason, "stack", {
      get: function () {
        return stack_being_generated ? origProp && (origProp.get ? origProp.get.apply(reason) : origProp.value) : promise.stack;
      }
    });
  });
  addPossiblyUnhandledError(promise);
  propagateAllListeners(promise);
  if (shouldExecuteTick)
    endMicroTickScope();
}
function propagateAllListeners(promise) {
  var listeners2 = promise._listeners;
  promise._listeners = [];
  for (var i = 0, len = listeners2.length; i < len; ++i) {
    propagateToListener(promise, listeners2[i]);
  }
  var psd = promise._PSD;
  --psd.ref || psd.finalize();
  if (numScheduledCalls === 0) {
    ++numScheduledCalls;
    asap(function () {
      if (--numScheduledCalls === 0)
        finalizePhysicalTick();
    }, []);
  }
}
function propagateToListener(promise, listener) {
  if (promise._state === null) {
    promise._listeners.push(listener);
    return;
  }
  var cb = promise._state ? listener.onFulfilled : listener.onRejected;
  if (cb === null) {
    return (promise._state ? listener.resolve : listener.reject)(promise._value);
  }
  ++listener.psd.ref;
  ++numScheduledCalls;
  asap(callListener, [cb, promise, listener]);
}
function callListener(cb, promise, listener) {
  try {
    currentFulfiller = promise;
    var ret, value = promise._value;
    if (promise._state) {
      ret = cb(value);
    } else {
      if (rejectingErrors.length)
        rejectingErrors = [];
      ret = cb(value);
      if (rejectingErrors.indexOf(value) === -1)
        markErrorAsHandled(promise);
    }
    listener.resolve(ret);
  } catch (e) {
    listener.reject(e);
  } finally {
    currentFulfiller = null;
    if (--numScheduledCalls === 0)
      finalizePhysicalTick();
    --listener.psd.ref || listener.psd.finalize();
  }
}
function getStack(promise, stacks, limit) {
  if (stacks.length === limit)
    return stacks;
  var stack = "";
  if (promise._state === false) {
    var failure = promise._value, errorName, message;
    if (failure != null) {
      errorName = failure.name || "Error";
      message = failure.message || failure;
      stack = prettyStack(failure, 0);
    } else {
      errorName = failure;
      message = "";
    }
    stacks.push(errorName + (message ? ": " + message : "") + stack);
  }
  if (debug) {
    stack = prettyStack(promise._stackHolder, 2);
    if (stack && stacks.indexOf(stack) === -1)
      stacks.push(stack);
    if (promise._prev)
      getStack(promise._prev, stacks, limit);
  }
  return stacks;
}
function linkToPreviousPromise(promise, prev) {
  var numPrev = prev ? prev._numPrev + 1 : 0;
  if (numPrev < LONG_STACKS_CLIP_LIMIT) {
    promise._prev = prev;
    promise._numPrev = numPrev;
  }
}
function physicalTick() {
  beginMicroTickScope() && endMicroTickScope();
}
function beginMicroTickScope() {
  var wasRootExec = isOutsideMicroTick;
  isOutsideMicroTick = false;
  needsNewPhysicalTick = false;
  return wasRootExec;
}
function endMicroTickScope() {
  var callbacks, i, l;
  do {
    while (microtickQueue.length > 0) {
      callbacks = microtickQueue;
      microtickQueue = [];
      l = callbacks.length;
      for (i = 0; i < l; ++i) {
        var item = callbacks[i];
        item[0].apply(null, item[1]);
      }
    }
  } while (microtickQueue.length > 0);
  isOutsideMicroTick = true;
  needsNewPhysicalTick = true;
}
function finalizePhysicalTick() {
  var unhandledErrs = unhandledErrors;
  unhandledErrors = [];
  unhandledErrs.forEach(function (p) {
    p._PSD.onunhandled.call(null, p._value, p);
  });
  var finalizers = tickFinalizers.slice(0);
  var i = finalizers.length;
  while (i)
    finalizers[--i]();
}
function run_at_end_of_this_or_next_physical_tick(fn) {
  function finalizer() {
    fn();
    tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
  }
  tickFinalizers.push(finalizer);
  ++numScheduledCalls;
  asap(function () {
    if (--numScheduledCalls === 0)
      finalizePhysicalTick();
  }, []);
}
function addPossiblyUnhandledError(promise) {
  if (!unhandledErrors.some(function (p) {
    return p._value === promise._value;
  }))
    unhandledErrors.push(promise);
}
function markErrorAsHandled(promise) {
  var i = unhandledErrors.length;
  while (i)
    if (unhandledErrors[--i]._value === promise._value) {
      unhandledErrors.splice(i, 1);
      return;
    }
}
function PromiseReject(reason) {
  return new DexiePromise(INTERNAL, false, reason);
}
function wrap(fn, errorCatcher) {
  var psd = PSD;
  return function () {
    var wasRootExec = beginMicroTickScope(), outerScope = PSD;
    try {
      switchToZone(psd, true);
      return fn.apply(this, arguments);
    } catch (e) {
      errorCatcher && errorCatcher(e);
    } finally {
      switchToZone(outerScope, false);
      if (wasRootExec)
        endMicroTickScope();
    }
  };
}
var task = { awaits: 0, echoes: 0, id: 0 };
var taskCounter = 0;
var zoneStack = [];
var zoneEchoes = 0;
var totalEchoes = 0;
var zone_id_counter = 0;
function newScope(fn, props2, a1, a2) {
  var parent = PSD, psd = Object.create(parent);
  psd.parent = parent;
  psd.ref = 0;
  psd.global = false;
  psd.id = ++zone_id_counter;
  var globalEnv = globalPSD.env;
  psd.env = patchGlobalPromise ? {
    Promise: DexiePromise,
    PromiseProp: { value: DexiePromise, configurable: true, writable: true },
    all: DexiePromise.all,
    race: DexiePromise.race,
    allSettled: DexiePromise.allSettled,
    any: DexiePromise.any,
    resolve: DexiePromise.resolve,
    reject: DexiePromise.reject,
    nthen: getPatchedPromiseThen(globalEnv.nthen, psd),
    gthen: getPatchedPromiseThen(globalEnv.gthen, psd)
  } : {};
  if (props2)
    extend(psd, props2);
  ++parent.ref;
  psd.finalize = function () {
    --this.parent.ref || this.parent.finalize();
  };
  var rv = usePSD(psd, fn, a1, a2);
  if (psd.ref === 0)
    psd.finalize();
  return rv;
}
function incrementExpectedAwaits() {
  if (!task.id)
    task.id = ++taskCounter;
  ++task.awaits;
  task.echoes += ZONE_ECHO_LIMIT;
  return task.id;
}
function decrementExpectedAwaits() {
  if (!task.awaits)
    return false;
  if (--task.awaits === 0)
    task.id = 0;
  task.echoes = task.awaits * ZONE_ECHO_LIMIT;
  return true;
}
if (("" + nativePromiseThen).indexOf("[native code]") === -1) {
  incrementExpectedAwaits = decrementExpectedAwaits = nop;
}
function onPossibleParallellAsync(possiblePromise) {
  if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
    incrementExpectedAwaits();
    return possiblePromise.then(function (x) {
      decrementExpectedAwaits();
      return x;
    }, function (e) {
      decrementExpectedAwaits();
      return rejection(e);
    });
  }
  return possiblePromise;
}
function zoneEnterEcho(targetZone) {
  ++totalEchoes;
  if (!task.echoes || --task.echoes === 0) {
    task.echoes = task.id = 0;
  }
  zoneStack.push(PSD);
  switchToZone(targetZone, true);
}
function zoneLeaveEcho() {
  var zone = zoneStack[zoneStack.length - 1];
  zoneStack.pop();
  switchToZone(zone, false);
}
function switchToZone(targetZone, bEnteringZone) {
  var currentZone = PSD;
  if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (!--zoneEchoes || targetZone !== PSD)) {
    enqueueNativeMicroTask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
  }
  if (targetZone === PSD)
    return;
  PSD = targetZone;
  if (currentZone === globalPSD)
    globalPSD.env = snapShot();
  if (patchGlobalPromise) {
    var GlobalPromise_1 = globalPSD.env.Promise;
    var targetEnv = targetZone.env;
    nativePromiseProto.then = targetEnv.nthen;
    GlobalPromise_1.prototype.then = targetEnv.gthen;
    if (currentZone.global || targetZone.global) {
      Object.defineProperty(_global, "Promise", targetEnv.PromiseProp);
      GlobalPromise_1.all = targetEnv.all;
      GlobalPromise_1.race = targetEnv.race;
      GlobalPromise_1.resolve = targetEnv.resolve;
      GlobalPromise_1.reject = targetEnv.reject;
      if (targetEnv.allSettled)
        GlobalPromise_1.allSettled = targetEnv.allSettled;
      if (targetEnv.any)
        GlobalPromise_1.any = targetEnv.any;
    }
  }
}
function snapShot() {
  var GlobalPromise = _global.Promise;
  return patchGlobalPromise ? {
    Promise: GlobalPromise,
    PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
    all: GlobalPromise.all,
    race: GlobalPromise.race,
    allSettled: GlobalPromise.allSettled,
    any: GlobalPromise.any,
    resolve: GlobalPromise.resolve,
    reject: GlobalPromise.reject,
    nthen: nativePromiseProto.then,
    gthen: GlobalPromise.prototype.then
  } : {};
}
function usePSD(psd, fn, a1, a2, a3) {
  var outerScope = PSD;
  try {
    switchToZone(psd, true);
    return fn(a1, a2, a3);
  } finally {
    switchToZone(outerScope, false);
  }
}
function enqueueNativeMicroTask(job) {
  nativePromiseThen.call(resolvedNativePromise, job);
}
function nativeAwaitCompatibleWrap(fn, zone, possibleAwait, cleanup) {
  return typeof fn !== "function" ? fn : function () {
    var outerZone = PSD;
    if (possibleAwait)
      incrementExpectedAwaits();
    switchToZone(zone, true);
    try {
      return fn.apply(this, arguments);
    } finally {
      switchToZone(outerZone, false);
      if (cleanup)
        enqueueNativeMicroTask(decrementExpectedAwaits);
    }
  };
}
function getPatchedPromiseThen(origThen, zone) {
  return function (onResolved, onRejected) {
    return origThen.call(this, nativeAwaitCompatibleWrap(onResolved, zone), nativeAwaitCompatibleWrap(onRejected, zone));
  };
}
var UNHANDLEDREJECTION = "unhandledrejection";
function globalError(err, promise) {
  var rv;
  try {
    rv = promise.onuncatched(err);
  } catch (e) {
  }
  if (rv !== false)
    try {
      var event, eventData = { promise, reason: err };
      if (_global.document && document.createEvent) {
        event = document.createEvent("Event");
        event.initEvent(UNHANDLEDREJECTION, true, true);
        extend(event, eventData);
      } else if (_global.CustomEvent) {
        event = new CustomEvent(UNHANDLEDREJECTION, { detail: eventData });
        extend(event, eventData);
      }
      if (event && _global.dispatchEvent) {
        dispatchEvent(event);
        if (!_global.PromiseRejectionEvent && _global.onunhandledrejection)
          try {
            _global.onunhandledrejection(event);
          } catch (_) {
          }
      }
      if (debug && event && !event.defaultPrevented) {
        console.warn("Unhandled rejection: " + (err.stack || err));
      }
    } catch (e) {
    }
}
var rejection = DexiePromise.reject;
function tempTransaction(db2, mode, storeNames, fn) {
  if (!db2.idbdb || !db2._state.openComplete && (!PSD.letThrough && !db2._vip)) {
    if (db2._state.openComplete) {
      return rejection(new exceptions.DatabaseClosed(db2._state.dbOpenError));
    }
    if (!db2._state.isBeingOpened) {
      if (!db2._options.autoOpen)
        return rejection(new exceptions.DatabaseClosed());
      db2.open().catch(nop);
    }
    return db2._state.dbReadyPromise.then(function () {
      return tempTransaction(db2, mode, storeNames, fn);
    });
  } else {
    var trans = db2._createTransaction(mode, storeNames, db2._dbSchema);
    try {
      trans.create();
      db2._state.PR1398_maxLoop = 3;
    } catch (ex) {
      if (ex.name === errnames.InvalidState && db2.isOpen() && --db2._state.PR1398_maxLoop > 0) {
        console.warn("Dexie: Need to reopen db");
        db2._close();
        return db2.open().then(function () {
          return tempTransaction(db2, mode, storeNames, fn);
        });
      }
      return rejection(ex);
    }
    return trans._promise(mode, function (resolve, reject) {
      return newScope(function () {
        PSD.trans = trans;
        return fn(resolve, reject, trans);
      });
    }).then(function (result) {
      return trans._completion.then(function () {
        return result;
      });
    });
  }
}
var DEXIE_VERSION = "3.2.2";
var maxString = String.fromCharCode(65535);
var minKey = -Infinity;
var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
var STRING_EXPECTED = "String expected.";
var connections = [];
var isIEOrEdge = typeof navigator !== "undefined" && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
var hasIEDeleteObjectStoreBug = isIEOrEdge;
var hangsOnDeleteLargeKeyRange = isIEOrEdge;
var dexieStackFrameFilter = function (frame) {
  return !/(dexie\.js|dexie\.min\.js)/.test(frame);
};
var DBNAMES_DB = "__dbnames";
var READONLY = "readonly";
var READWRITE = "readwrite";
function combine(filter1, filter2) {
  return filter1 ? filter2 ? function () {
    return filter1.apply(this, arguments) && filter2.apply(this, arguments);
  } : filter1 : filter2;
}
var AnyRange = {
  type: 3,
  lower: -Infinity,
  lowerOpen: false,
  upper: [[]],
  upperOpen: false
};
function workaroundForUndefinedPrimKey(keyPath) {
  return typeof keyPath === "string" && !/\./.test(keyPath) ? function (obj) {
    if (obj[keyPath] === void 0 && keyPath in obj) {
      obj = deepClone(obj);
      delete obj[keyPath];
    }
    return obj;
  } : function (obj) {
    return obj;
  };
}
var Table = function () {
  function Table2() {
  }
  Table2.prototype._trans = function (mode, fn, writeLocked) {
    var trans = this._tx || PSD.trans;
    var tableName = this.name;
    function checkTableInTransaction(resolve, reject, trans2) {
      if (!trans2.schema[tableName])
        throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
      return fn(trans2.idbtrans, trans2);
    }
    var wasRootExec = beginMicroTickScope();
    try {
      return trans && trans.db === this.db ? trans === PSD.trans ? trans._promise(mode, checkTableInTransaction, writeLocked) : newScope(function () {
        return trans._promise(mode, checkTableInTransaction, writeLocked);
      }, { trans, transless: PSD.transless || PSD }) : tempTransaction(this.db, mode, [this.name], checkTableInTransaction);
    } finally {
      if (wasRootExec)
        endMicroTickScope();
    }
  };
  Table2.prototype.get = function (keyOrCrit, cb) {
    var _this = this;
    if (keyOrCrit && keyOrCrit.constructor === Object)
      return this.where(keyOrCrit).first(cb);
    return this._trans("readonly", function (trans) {
      return _this.core.get({ trans, key: keyOrCrit }).then(function (res) {
        return _this.hook.reading.fire(res);
      });
    }).then(cb);
  };
  Table2.prototype.where = function (indexOrCrit) {
    if (typeof indexOrCrit === "string")
      return new this.db.WhereClause(this, indexOrCrit);
    if (isArray(indexOrCrit))
      return new this.db.WhereClause(this, "[" + indexOrCrit.join("+") + "]");
    var keyPaths = keys(indexOrCrit);
    if (keyPaths.length === 1)
      return this.where(keyPaths[0]).equals(indexOrCrit[keyPaths[0]]);
    var compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(function (ix) {
      return ix.compound && keyPaths.every(function (keyPath) {
        return ix.keyPath.indexOf(keyPath) >= 0;
      }) && ix.keyPath.every(function (keyPath) {
        return keyPaths.indexOf(keyPath) >= 0;
      });
    })[0];
    if (compoundIndex && this.db._maxKey !== maxString)
      return this.where(compoundIndex.name).equals(compoundIndex.keyPath.map(function (kp) {
        return indexOrCrit[kp];
      }));
    if (!compoundIndex && debug)
      console.warn("The query " + JSON.stringify(indexOrCrit) + " on " + this.name + " would benefit of a " + ("compound index [" + keyPaths.join("+") + "]"));
    var idxByName = this.schema.idxByName;
    var idb = this.db._deps.indexedDB;
    function equals(a, b) {
      try {
        return idb.cmp(a, b) === 0;
      } catch (e) {
        return false;
      }
    }
    var _a2 = keyPaths.reduce(function (_a3, keyPath) {
      var prevIndex = _a3[0], prevFilterFn = _a3[1];
      var index = idxByName[keyPath];
      var value = indexOrCrit[keyPath];
      return [
        prevIndex || index,
        prevIndex || !index ? combine(prevFilterFn, index && index.multi ? function (x) {
          var prop = getByKeyPath(x, keyPath);
          return isArray(prop) && prop.some(function (item) {
            return equals(value, item);
          });
        } : function (x) {
          return equals(value, getByKeyPath(x, keyPath));
        }) : prevFilterFn
      ];
    }, [null, null]), idx = _a2[0], filterFunction = _a2[1];
    return idx ? this.where(idx.name).equals(indexOrCrit[idx.keyPath]).filter(filterFunction) : compoundIndex ? this.filter(filterFunction) : this.where(keyPaths).equals("");
  };
  Table2.prototype.filter = function (filterFunction) {
    return this.toCollection().and(filterFunction);
  };
  Table2.prototype.count = function (thenShortcut) {
    return this.toCollection().count(thenShortcut);
  };
  Table2.prototype.offset = function (offset) {
    return this.toCollection().offset(offset);
  };
  Table2.prototype.limit = function (numRows) {
    return this.toCollection().limit(numRows);
  };
  Table2.prototype.each = function (callback) {
    return this.toCollection().each(callback);
  };
  Table2.prototype.toArray = function (thenShortcut) {
    return this.toCollection().toArray(thenShortcut);
  };
  Table2.prototype.toCollection = function () {
    return new this.db.Collection(new this.db.WhereClause(this));
  };
  Table2.prototype.orderBy = function (index) {
    return new this.db.Collection(new this.db.WhereClause(this, isArray(index) ? "[" + index.join("+") + "]" : index));
  };
  Table2.prototype.reverse = function () {
    return this.toCollection().reverse();
  };
  Table2.prototype.mapToClass = function (constructor) {
    this.schema.mappedClass = constructor;
    var readHook = function (obj) {
      if (!obj)
        return obj;
      var res = Object.create(constructor.prototype);
      for (var m in obj)
        if (hasOwn(obj, m))
          try {
            res[m] = obj[m];
          } catch (_) {
          }
      return res;
    };
    if (this.schema.readHook) {
      this.hook.reading.unsubscribe(this.schema.readHook);
    }
    this.schema.readHook = readHook;
    this.hook("reading", readHook);
    return constructor;
  };
  Table2.prototype.defineClass = function () {
    function Class(content) {
      extend(this, content);
    }
    return this.mapToClass(Class);
  };
  Table2.prototype.add = function (obj, key) {
    var _this = this;
    var _a2 = this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
    var objToAdd = obj;
    if (keyPath && auto) {
      objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
    }
    return this._trans("readwrite", function (trans) {
      return _this.core.mutate({ trans, type: "add", keys: key != null ? [key] : null, values: [objToAdd] });
    }).then(function (res) {
      return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
    }).then(function (lastResult) {
      if (keyPath) {
        try {
          setByKeyPath(obj, keyPath, lastResult);
        } catch (_) {
        }
      }
      return lastResult;
    });
  };
  Table2.prototype.update = function (keyOrObject, modifications) {
    if (typeof keyOrObject === "object" && !isArray(keyOrObject)) {
      var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
      if (key === void 0)
        return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
      try {
        if (typeof modifications !== "function") {
          keys(modifications).forEach(function (keyPath) {
            setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
          });
        } else {
          modifications(keyOrObject, { value: keyOrObject, primKey: key });
        }
      } catch (_a2) {
      }
      return this.where(":id").equals(key).modify(modifications);
    } else {
      return this.where(":id").equals(keyOrObject).modify(modifications);
    }
  };
  Table2.prototype.put = function (obj, key) {
    var _this = this;
    var _a2 = this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
    var objToAdd = obj;
    if (keyPath && auto) {
      objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
    }
    return this._trans("readwrite", function (trans) {
      return _this.core.mutate({ trans, type: "put", values: [objToAdd], keys: key != null ? [key] : null });
    }).then(function (res) {
      return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
    }).then(function (lastResult) {
      if (keyPath) {
        try {
          setByKeyPath(obj, keyPath, lastResult);
        } catch (_) {
        }
      }
      return lastResult;
    });
  };
  Table2.prototype.delete = function (key) {
    var _this = this;
    return this._trans("readwrite", function (trans) {
      return _this.core.mutate({ trans, type: "delete", keys: [key] });
    }).then(function (res) {
      return res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0;
    });
  };
  Table2.prototype.clear = function () {
    var _this = this;
    return this._trans("readwrite", function (trans) {
      return _this.core.mutate({ trans, type: "deleteRange", range: AnyRange });
    }).then(function (res) {
      return res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0;
    });
  };
  Table2.prototype.bulkGet = function (keys2) {
    var _this = this;
    return this._trans("readonly", function (trans) {
      return _this.core.getMany({
        keys: keys2,
        trans
      }).then(function (result) {
        return result.map(function (res) {
          return _this.hook.reading.fire(res);
        });
      });
    });
  };
  Table2.prototype.bulkAdd = function (objects, keysOrOptions, options) {
    var _this = this;
    var keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
    options = options || (keys2 ? void 0 : keysOrOptions);
    var wantResults = options ? options.allKeys : void 0;
    return this._trans("readwrite", function (trans) {
      var _a2 = _this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
      if (keyPath && keys2)
        throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
      if (keys2 && keys2.length !== objects.length)
        throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
      var numObjects = objects.length;
      var objectsToAdd = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
      return _this.core.mutate({ trans, type: "add", keys: keys2, values: objectsToAdd, wantResults }).then(function (_a3) {
        var numFailures = _a3.numFailures, results = _a3.results, lastResult = _a3.lastResult, failures = _a3.failures;
        var result = wantResults ? results : lastResult;
        if (numFailures === 0)
          return result;
        throw new BulkError(_this.name + ".bulkAdd(): " + numFailures + " of " + numObjects + " operations failed", failures);
      });
    });
  };
  Table2.prototype.bulkPut = function (objects, keysOrOptions, options) {
    var _this = this;
    var keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
    options = options || (keys2 ? void 0 : keysOrOptions);
    var wantResults = options ? options.allKeys : void 0;
    return this._trans("readwrite", function (trans) {
      var _a2 = _this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
      if (keyPath && keys2)
        throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
      if (keys2 && keys2.length !== objects.length)
        throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
      var numObjects = objects.length;
      var objectsToPut = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
      return _this.core.mutate({ trans, type: "put", keys: keys2, values: objectsToPut, wantResults }).then(function (_a3) {
        var numFailures = _a3.numFailures, results = _a3.results, lastResult = _a3.lastResult, failures = _a3.failures;
        var result = wantResults ? results : lastResult;
        if (numFailures === 0)
          return result;
        throw new BulkError(_this.name + ".bulkPut(): " + numFailures + " of " + numObjects + " operations failed", failures);
      });
    });
  };
  Table2.prototype.bulkDelete = function (keys2) {
    var _this = this;
    var numKeys = keys2.length;
    return this._trans("readwrite", function (trans) {
      return _this.core.mutate({ trans, type: "delete", keys: keys2 });
    }).then(function (_a2) {
      var numFailures = _a2.numFailures, lastResult = _a2.lastResult, failures = _a2.failures;
      if (numFailures === 0)
        return lastResult;
      throw new BulkError(_this.name + ".bulkDelete(): " + numFailures + " of " + numKeys + " operations failed", failures);
    });
  };
  return Table2;
}();
function Events(ctx) {
  var evs = {};
  var rv = function (eventName, subscriber) {
    if (subscriber) {
      var i2 = arguments.length, args = new Array(i2 - 1);
      while (--i2)
        args[i2 - 1] = arguments[i2];
      evs[eventName].subscribe.apply(null, args);
      return ctx;
    } else if (typeof eventName === "string") {
      return evs[eventName];
    }
  };
  rv.addEventType = add;
  for (var i = 1, l = arguments.length; i < l; ++i) {
    add(arguments[i]);
  }
  return rv;
  function add(eventName, chainFunction, defaultFunction) {
    if (typeof eventName === "object")
      return addConfiguredEvents(eventName);
    if (!chainFunction)
      chainFunction = reverseStoppableEventChain;
    if (!defaultFunction)
      defaultFunction = nop;
    var context = {
      subscribers: [],
      fire: defaultFunction,
      subscribe: function (cb) {
        if (context.subscribers.indexOf(cb) === -1) {
          context.subscribers.push(cb);
          context.fire = chainFunction(context.fire, cb);
        }
      },
      unsubscribe: function (cb) {
        context.subscribers = context.subscribers.filter(function (fn) {
          return fn !== cb;
        });
        context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
      }
    };
    evs[eventName] = rv[eventName] = context;
    return context;
  }
  function addConfiguredEvents(cfg) {
    keys(cfg).forEach(function (eventName) {
      var args = cfg[eventName];
      if (isArray(args)) {
        add(eventName, cfg[eventName][0], cfg[eventName][1]);
      } else if (args === "asap") {
        var context = add(eventName, mirror, function fire() {
          var i2 = arguments.length, args2 = new Array(i2);
          while (i2--)
            args2[i2] = arguments[i2];
          context.subscribers.forEach(function (fn) {
            asap$1(function fireEvent() {
              fn.apply(null, args2);
            });
          });
        });
      } else
        throw new exceptions.InvalidArgument("Invalid event config");
    });
  }
}
function makeClassConstructor(prototype, constructor) {
  derive(constructor).from({ prototype });
  return constructor;
}
function createTableConstructor(db2) {
  return makeClassConstructor(Table.prototype, function Table2(name, tableSchema, trans) {
    this.db = db2;
    this._tx = trans;
    this.name = name;
    this.schema = tableSchema;
    this.hook = db2._allTables[name] ? db2._allTables[name].hook : Events(null, {
      "creating": [hookCreatingChain, nop],
      "reading": [pureFunctionChain, mirror],
      "updating": [hookUpdatingChain, nop],
      "deleting": [hookDeletingChain, nop]
    });
  });
}
function isPlainKeyRange(ctx, ignoreLimitFilter) {
  return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
}
function addFilter(ctx, fn) {
  ctx.filter = combine(ctx.filter, fn);
}
function addReplayFilter(ctx, factory, isLimitFilter) {
  var curr = ctx.replayFilter;
  ctx.replayFilter = curr ? function () {
    return combine(curr(), factory());
  } : factory;
  ctx.justLimit = isLimitFilter && !curr;
}
function addMatchFilter(ctx, fn) {
  ctx.isMatch = combine(ctx.isMatch, fn);
}
function getIndexOrStore(ctx, coreSchema) {
  if (ctx.isPrimKey)
    return coreSchema.primaryKey;
  var index = coreSchema.getIndexByKeyPath(ctx.index);
  if (!index)
    throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
  return index;
}
function openCursor(ctx, coreTable, trans) {
  var index = getIndexOrStore(ctx, coreTable.schema);
  return coreTable.openCursor({
    trans,
    values: !ctx.keysOnly,
    reverse: ctx.dir === "prev",
    unique: !!ctx.unique,
    query: {
      index,
      range: ctx.range
    }
  });
}
function iter(ctx, fn, coreTrans, coreTable) {
  var filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
  if (!ctx.or) {
    return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn, !ctx.keysOnly && ctx.valueMapper);
  } else {
    var set_1 = {};
    var union = function (item, cursor, advance) {
      if (!filter || filter(cursor, advance, function (result) {
        return cursor.stop(result);
      }, function (err) {
        return cursor.fail(err);
      })) {
        var primaryKey = cursor.primaryKey;
        var key = "" + primaryKey;
        if (key === "[object ArrayBuffer]")
          key = "" + new Uint8Array(primaryKey);
        if (!hasOwn(set_1, key)) {
          set_1[key] = true;
          fn(item, cursor, advance);
        }
      }
    };
    return Promise.all([
      ctx.or._iterate(union, coreTrans),
      iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)
    ]);
  }
}
function iterate(cursorPromise, filter, fn, valueMapper) {
  var mappedFn = valueMapper ? function (x, c, a) {
    return fn(valueMapper(x), c, a);
  } : fn;
  var wrappedFn = wrap(mappedFn);
  return cursorPromise.then(function (cursor) {
    if (cursor) {
      return cursor.start(function () {
        var c = function () {
          return cursor.continue();
        };
        if (!filter || filter(cursor, function (advancer) {
          return c = advancer;
        }, function (val) {
          cursor.stop(val);
          c = nop;
        }, function (e) {
          cursor.fail(e);
          c = nop;
        }))
          wrappedFn(cursor.value, cursor, function (advancer) {
            return c = advancer;
          });
        c();
      });
    }
  });
}
function cmp(a, b) {
  try {
    var ta = type(a);
    var tb = type(b);
    if (ta !== tb) {
      if (ta === "Array")
        return 1;
      if (tb === "Array")
        return -1;
      if (ta === "binary")
        return 1;
      if (tb === "binary")
        return -1;
      if (ta === "string")
        return 1;
      if (tb === "string")
        return -1;
      if (ta === "Date")
        return 1;
      if (tb !== "Date")
        return NaN;
      return -1;
    }
    switch (ta) {
      case "number":
      case "Date":
      case "string":
        return a > b ? 1 : a < b ? -1 : 0;
      case "binary": {
        return compareUint8Arrays(getUint8Array(a), getUint8Array(b));
      }
      case "Array":
        return compareArrays(a, b);
    }
  } catch (_a2) {
  }
  return NaN;
}
function compareArrays(a, b) {
  var al = a.length;
  var bl = b.length;
  var l = al < bl ? al : bl;
  for (var i = 0; i < l; ++i) {
    var res = cmp(a[i], b[i]);
    if (res !== 0)
      return res;
  }
  return al === bl ? 0 : al < bl ? -1 : 1;
}
function compareUint8Arrays(a, b) {
  var al = a.length;
  var bl = b.length;
  var l = al < bl ? al : bl;
  for (var i = 0; i < l; ++i) {
    if (a[i] !== b[i])
      return a[i] < b[i] ? -1 : 1;
  }
  return al === bl ? 0 : al < bl ? -1 : 1;
}
function type(x) {
  var t = typeof x;
  if (t !== "object")
    return t;
  if (ArrayBuffer.isView(x))
    return "binary";
  var tsTag = toStringTag(x);
  return tsTag === "ArrayBuffer" ? "binary" : tsTag;
}
function getUint8Array(a) {
  if (a instanceof Uint8Array)
    return a;
  if (ArrayBuffer.isView(a))
    return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
  return new Uint8Array(a);
}
var Collection = function () {
  function Collection2() {
  }
  Collection2.prototype._read = function (fn, cb) {
    var ctx = this._ctx;
    return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readonly", fn).then(cb);
  };
  Collection2.prototype._write = function (fn) {
    var ctx = this._ctx;
    return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readwrite", fn, "locked");
  };
  Collection2.prototype._addAlgorithm = function (fn) {
    var ctx = this._ctx;
    ctx.algorithm = combine(ctx.algorithm, fn);
  };
  Collection2.prototype._iterate = function (fn, coreTrans) {
    return iter(this._ctx, fn, coreTrans, this._ctx.table.core);
  };
  Collection2.prototype.clone = function (props2) {
    var rv = Object.create(this.constructor.prototype), ctx = Object.create(this._ctx);
    if (props2)
      extend(ctx, props2);
    rv._ctx = ctx;
    return rv;
  };
  Collection2.prototype.raw = function () {
    this._ctx.valueMapper = null;
    return this;
  };
  Collection2.prototype.each = function (fn) {
    var ctx = this._ctx;
    return this._read(function (trans) {
      return iter(ctx, fn, trans, ctx.table.core);
    });
  };
  Collection2.prototype.count = function (cb) {
    var _this = this;
    return this._read(function (trans) {
      var ctx = _this._ctx;
      var coreTable = ctx.table.core;
      if (isPlainKeyRange(ctx, true)) {
        return coreTable.count({
          trans,
          query: {
            index: getIndexOrStore(ctx, coreTable.schema),
            range: ctx.range
          }
        }).then(function (count2) {
          return Math.min(count2, ctx.limit);
        });
      } else {
        var count = 0;
        return iter(ctx, function () {
          ++count;
          return false;
        }, trans, coreTable).then(function () {
          return count;
        });
      }
    }).then(cb);
  };
  Collection2.prototype.sortBy = function (keyPath, cb) {
    var parts = keyPath.split(".").reverse(), lastPart = parts[0], lastIndex = parts.length - 1;
    function getval(obj, i) {
      if (i)
        return getval(obj[parts[i]], i - 1);
      return obj[lastPart];
    }
    var order = this._ctx.dir === "next" ? 1 : -1;
    function sorter(a, b) {
      var aVal = getval(a, lastIndex), bVal = getval(b, lastIndex);
      return aVal < bVal ? -order : aVal > bVal ? order : 0;
    }
    return this.toArray(function (a) {
      return a.sort(sorter);
    }).then(cb);
  };
  Collection2.prototype.toArray = function (cb) {
    var _this = this;
    return this._read(function (trans) {
      var ctx = _this._ctx;
      if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
        var valueMapper_1 = ctx.valueMapper;
        var index = getIndexOrStore(ctx, ctx.table.core.schema);
        return ctx.table.core.query({
          trans,
          limit: ctx.limit,
          values: true,
          query: {
            index,
            range: ctx.range
          }
        }).then(function (_a2) {
          var result = _a2.result;
          return valueMapper_1 ? result.map(valueMapper_1) : result;
        });
      } else {
        var a_1 = [];
        return iter(ctx, function (item) {
          return a_1.push(item);
        }, trans, ctx.table.core).then(function () {
          return a_1;
        });
      }
    }, cb);
  };
  Collection2.prototype.offset = function (offset) {
    var ctx = this._ctx;
    if (offset <= 0)
      return this;
    ctx.offset += offset;
    if (isPlainKeyRange(ctx)) {
      addReplayFilter(ctx, function () {
        var offsetLeft = offset;
        return function (cursor, advance) {
          if (offsetLeft === 0)
            return true;
          if (offsetLeft === 1) {
            --offsetLeft;
            return false;
          }
          advance(function () {
            cursor.advance(offsetLeft);
            offsetLeft = 0;
          });
          return false;
        };
      });
    } else {
      addReplayFilter(ctx, function () {
        var offsetLeft = offset;
        return function () {
          return --offsetLeft < 0;
        };
      });
    }
    return this;
  };
  Collection2.prototype.limit = function (numRows) {
    this._ctx.limit = Math.min(this._ctx.limit, numRows);
    addReplayFilter(this._ctx, function () {
      var rowsLeft = numRows;
      return function (cursor, advance, resolve) {
        if (--rowsLeft <= 0)
          advance(resolve);
        return rowsLeft >= 0;
      };
    }, true);
    return this;
  };
  Collection2.prototype.until = function (filterFunction, bIncludeStopEntry) {
    addFilter(this._ctx, function (cursor, advance, resolve) {
      if (filterFunction(cursor.value)) {
        advance(resolve);
        return bIncludeStopEntry;
      } else {
        return true;
      }
    });
    return this;
  };
  Collection2.prototype.first = function (cb) {
    return this.limit(1).toArray(function (a) {
      return a[0];
    }).then(cb);
  };
  Collection2.prototype.last = function (cb) {
    return this.reverse().first(cb);
  };
  Collection2.prototype.filter = function (filterFunction) {
    addFilter(this._ctx, function (cursor) {
      return filterFunction(cursor.value);
    });
    addMatchFilter(this._ctx, filterFunction);
    return this;
  };
  Collection2.prototype.and = function (filter) {
    return this.filter(filter);
  };
  Collection2.prototype.or = function (indexName) {
    return new this.db.WhereClause(this._ctx.table, indexName, this);
  };
  Collection2.prototype.reverse = function () {
    this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
    if (this._ondirectionchange)
      this._ondirectionchange(this._ctx.dir);
    return this;
  };
  Collection2.prototype.desc = function () {
    return this.reverse();
  };
  Collection2.prototype.eachKey = function (cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    return this.each(function (val, cursor) {
      cb(cursor.key, cursor);
    });
  };
  Collection2.prototype.eachUniqueKey = function (cb) {
    this._ctx.unique = "unique";
    return this.eachKey(cb);
  };
  Collection2.prototype.eachPrimaryKey = function (cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    return this.each(function (val, cursor) {
      cb(cursor.primaryKey, cursor);
    });
  };
  Collection2.prototype.keys = function (cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    var a = [];
    return this.each(function (item, cursor) {
      a.push(cursor.key);
    }).then(function () {
      return a;
    }).then(cb);
  };
  Collection2.prototype.primaryKeys = function (cb) {
    var ctx = this._ctx;
    if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
      return this._read(function (trans) {
        var index = getIndexOrStore(ctx, ctx.table.core.schema);
        return ctx.table.core.query({
          trans,
          values: false,
          limit: ctx.limit,
          query: {
            index,
            range: ctx.range
          }
        });
      }).then(function (_a2) {
        var result = _a2.result;
        return result;
      }).then(cb);
    }
    ctx.keysOnly = !ctx.isMatch;
    var a = [];
    return this.each(function (item, cursor) {
      a.push(cursor.primaryKey);
    }).then(function () {
      return a;
    }).then(cb);
  };
  Collection2.prototype.uniqueKeys = function (cb) {
    this._ctx.unique = "unique";
    return this.keys(cb);
  };
  Collection2.prototype.firstKey = function (cb) {
    return this.limit(1).keys(function (a) {
      return a[0];
    }).then(cb);
  };
  Collection2.prototype.lastKey = function (cb) {
    return this.reverse().firstKey(cb);
  };
  Collection2.prototype.distinct = function () {
    var ctx = this._ctx, idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
    if (!idx || !idx.multi)
      return this;
    var set = {};
    addFilter(this._ctx, function (cursor) {
      var strKey = cursor.primaryKey.toString();
      var found = hasOwn(set, strKey);
      set[strKey] = true;
      return !found;
    });
    return this;
  };
  Collection2.prototype.modify = function (changes) {
    var _this = this;
    var ctx = this._ctx;
    return this._write(function (trans) {
      var modifyer;
      if (typeof changes === "function") {
        modifyer = changes;
      } else {
        var keyPaths = keys(changes);
        var numKeys = keyPaths.length;
        modifyer = function (item) {
          var anythingModified = false;
          for (var i = 0; i < numKeys; ++i) {
            var keyPath = keyPaths[i], val = changes[keyPath];
            if (getByKeyPath(item, keyPath) !== val) {
              setByKeyPath(item, keyPath, val);
              anythingModified = true;
            }
          }
          return anythingModified;
        };
      }
      var coreTable = ctx.table.core;
      var _a2 = coreTable.schema.primaryKey, outbound = _a2.outbound, extractKey = _a2.extractKey;
      var limit = _this.db._options.modifyChunkSize || 200;
      var totalFailures = [];
      var successCount = 0;
      var failedKeys = [];
      var applyMutateResult = function (expectedCount, res) {
        var failures = res.failures, numFailures = res.numFailures;
        successCount += expectedCount - numFailures;
        for (var _i = 0, _a3 = keys(failures); _i < _a3.length; _i++) {
          var pos = _a3[_i];
          totalFailures.push(failures[pos]);
        }
      };
      return _this.clone().primaryKeys().then(function (keys2) {
        var nextChunk = function (offset) {
          var count = Math.min(limit, keys2.length - offset);
          return coreTable.getMany({
            trans,
            keys: keys2.slice(offset, offset + count),
            cache: "immutable"
          }).then(function (values) {
            var addValues = [];
            var putValues = [];
            var putKeys = outbound ? [] : null;
            var deleteKeys = [];
            for (var i = 0; i < count; ++i) {
              var origValue = values[i];
              var ctx_1 = {
                value: deepClone(origValue),
                primKey: keys2[offset + i]
              };
              if (modifyer.call(ctx_1, ctx_1.value, ctx_1) !== false) {
                if (ctx_1.value == null) {
                  deleteKeys.push(keys2[offset + i]);
                } else if (!outbound && cmp(extractKey(origValue), extractKey(ctx_1.value)) !== 0) {
                  deleteKeys.push(keys2[offset + i]);
                  addValues.push(ctx_1.value);
                } else {
                  putValues.push(ctx_1.value);
                  if (outbound)
                    putKeys.push(keys2[offset + i]);
                }
              }
            }
            var criteria = isPlainKeyRange(ctx) && ctx.limit === Infinity && (typeof changes !== "function" || changes === deleteCallback) && {
              index: ctx.index,
              range: ctx.range
            };
            return Promise.resolve(addValues.length > 0 && coreTable.mutate({ trans, type: "add", values: addValues }).then(function (res) {
              for (var pos in res.failures) {
                deleteKeys.splice(parseInt(pos), 1);
              }
              applyMutateResult(addValues.length, res);
            })).then(function () {
              return (putValues.length > 0 || criteria && typeof changes === "object") && coreTable.mutate({
                trans,
                type: "put",
                keys: putKeys,
                values: putValues,
                criteria,
                changeSpec: typeof changes !== "function" && changes
              }).then(function (res) {
                return applyMutateResult(putValues.length, res);
              });
            }).then(function () {
              return (deleteKeys.length > 0 || criteria && changes === deleteCallback) && coreTable.mutate({
                trans,
                type: "delete",
                keys: deleteKeys,
                criteria
              }).then(function (res) {
                return applyMutateResult(deleteKeys.length, res);
              });
            }).then(function () {
              return keys2.length > offset + count && nextChunk(offset + limit);
            });
          });
        };
        return nextChunk(0).then(function () {
          if (totalFailures.length > 0)
            throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
          return keys2.length;
        });
      });
    });
  };
  Collection2.prototype.delete = function () {
    var ctx = this._ctx, range = ctx.range;
    if (isPlainKeyRange(ctx) && (ctx.isPrimKey && !hangsOnDeleteLargeKeyRange || range.type === 3)) {
      return this._write(function (trans) {
        var primaryKey = ctx.table.core.schema.primaryKey;
        var coreRange = range;
        return ctx.table.core.count({ trans, query: { index: primaryKey, range: coreRange } }).then(function (count) {
          return ctx.table.core.mutate({ trans, type: "deleteRange", range: coreRange }).then(function (_a2) {
            var failures = _a2.failures;
            _a2.lastResult;
            _a2.results;
            var numFailures = _a2.numFailures;
            if (numFailures)
              throw new ModifyError("Could not delete some values", Object.keys(failures).map(function (pos) {
                return failures[pos];
              }), count - numFailures);
            return count - numFailures;
          });
        });
      });
    }
    return this.modify(deleteCallback);
  };
  return Collection2;
}();
var deleteCallback = function (value, ctx) {
  return ctx.value = null;
};
function createCollectionConstructor(db2) {
  return makeClassConstructor(Collection.prototype, function Collection2(whereClause, keyRangeGenerator) {
    this.db = db2;
    var keyRange = AnyRange, error = null;
    if (keyRangeGenerator)
      try {
        keyRange = keyRangeGenerator();
      } catch (ex) {
        error = ex;
      }
    var whereCtx = whereClause._ctx;
    var table = whereCtx.table;
    var readingHook = table.hook.reading.fire;
    this._ctx = {
      table,
      index: whereCtx.index,
      isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
      range: keyRange,
      keysOnly: false,
      dir: "next",
      unique: "",
      algorithm: null,
      filter: null,
      replayFilter: null,
      justLimit: true,
      isMatch: null,
      offset: 0,
      limit: Infinity,
      error,
      or: whereCtx.or,
      valueMapper: readingHook !== mirror ? readingHook : null
    };
  });
}
function simpleCompare(a, b) {
  return a < b ? -1 : a === b ? 0 : 1;
}
function simpleCompareReverse(a, b) {
  return a > b ? -1 : a === b ? 0 : 1;
}
function fail(collectionOrWhereClause, err, T) {
  var collection = collectionOrWhereClause instanceof WhereClause ? new collectionOrWhereClause.Collection(collectionOrWhereClause) : collectionOrWhereClause;
  collection._ctx.error = T ? new T(err) : new TypeError(err);
  return collection;
}
function emptyCollection(whereClause) {
  return new whereClause.Collection(whereClause, function () {
    return rangeEqual("");
  }).limit(0);
}
function upperFactory(dir) {
  return dir === "next" ? function (s) {
    return s.toUpperCase();
  } : function (s) {
    return s.toLowerCase();
  };
}
function lowerFactory(dir) {
  return dir === "next" ? function (s) {
    return s.toLowerCase();
  } : function (s) {
    return s.toUpperCase();
  };
}
function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp2, dir) {
  var length = Math.min(key.length, lowerNeedle.length);
  var llp = -1;
  for (var i = 0; i < length; ++i) {
    var lwrKeyChar = lowerKey[i];
    if (lwrKeyChar !== lowerNeedle[i]) {
      if (cmp2(key[i], upperNeedle[i]) < 0)
        return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
      if (cmp2(key[i], lowerNeedle[i]) < 0)
        return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
      if (llp >= 0)
        return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
      return null;
    }
    if (cmp2(key[i], lwrKeyChar) < 0)
      llp = i;
  }
  if (length < lowerNeedle.length && dir === "next")
    return key + upperNeedle.substr(key.length);
  if (length < key.length && dir === "prev")
    return key.substr(0, upperNeedle.length);
  return llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
}
function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
  var upper, lower, compare, upperNeedles, lowerNeedles, direction, nextKeySuffix, needlesLen = needles.length;
  if (!needles.every(function (s) {
    return typeof s === "string";
  })) {
    return fail(whereClause, STRING_EXPECTED);
  }
  function initDirection(dir) {
    upper = upperFactory(dir);
    lower = lowerFactory(dir);
    compare = dir === "next" ? simpleCompare : simpleCompareReverse;
    var needleBounds = needles.map(function (needle) {
      return { lower: lower(needle), upper: upper(needle) };
    }).sort(function (a, b) {
      return compare(a.lower, b.lower);
    });
    upperNeedles = needleBounds.map(function (nb) {
      return nb.upper;
    });
    lowerNeedles = needleBounds.map(function (nb) {
      return nb.lower;
    });
    direction = dir;
    nextKeySuffix = dir === "next" ? "" : suffix;
  }
  initDirection("next");
  var c = new whereClause.Collection(whereClause, function () {
    return createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix);
  });
  c._ondirectionchange = function (direction2) {
    initDirection(direction2);
  };
  var firstPossibleNeedle = 0;
  c._addAlgorithm(function (cursor, advance, resolve) {
    var key = cursor.key;
    if (typeof key !== "string")
      return false;
    var lowerKey = lower(key);
    if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
      return true;
    } else {
      var lowestPossibleCasing = null;
      for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
        var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
        if (casing === null && lowestPossibleCasing === null)
          firstPossibleNeedle = i + 1;
        else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
          lowestPossibleCasing = casing;
        }
      }
      if (lowestPossibleCasing !== null) {
        advance(function () {
          cursor.continue(lowestPossibleCasing + nextKeySuffix);
        });
      } else {
        advance(resolve);
      }
      return false;
    }
  });
  return c;
}
function createRange(lower, upper, lowerOpen, upperOpen) {
  return {
    type: 2,
    lower,
    upper,
    lowerOpen,
    upperOpen
  };
}
function rangeEqual(value) {
  return {
    type: 1,
    lower: value,
    upper: value
  };
}
var WhereClause = function () {
  function WhereClause2() {
  }
  Object.defineProperty(WhereClause2.prototype, "Collection", {
    get: function () {
      return this._ctx.table.db.Collection;
    },
    enumerable: false,
    configurable: true
  });
  WhereClause2.prototype.between = function (lower, upper, includeLower, includeUpper) {
    includeLower = includeLower !== false;
    includeUpper = includeUpper === true;
    try {
      if (this._cmp(lower, upper) > 0 || this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper))
        return emptyCollection(this);
      return new this.Collection(this, function () {
        return createRange(lower, upper, !includeLower, !includeUpper);
      });
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
  };
  WhereClause2.prototype.equals = function (value) {
    if (value == null)
      return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, function () {
      return rangeEqual(value);
    });
  };
  WhereClause2.prototype.above = function (value) {
    if (value == null)
      return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, function () {
      return createRange(value, void 0, true);
    });
  };
  WhereClause2.prototype.aboveOrEqual = function (value) {
    if (value == null)
      return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, function () {
      return createRange(value, void 0, false);
    });
  };
  WhereClause2.prototype.below = function (value) {
    if (value == null)
      return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, function () {
      return createRange(void 0, value, false, true);
    });
  };
  WhereClause2.prototype.belowOrEqual = function (value) {
    if (value == null)
      return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, function () {
      return createRange(void 0, value);
    });
  };
  WhereClause2.prototype.startsWith = function (str) {
    if (typeof str !== "string")
      return fail(this, STRING_EXPECTED);
    return this.between(str, str + maxString, true, true);
  };
  WhereClause2.prototype.startsWithIgnoreCase = function (str) {
    if (str === "")
      return this.startsWith(str);
    return addIgnoreCaseAlgorithm(this, function (x, a) {
      return x.indexOf(a[0]) === 0;
    }, [str], maxString);
  };
  WhereClause2.prototype.equalsIgnoreCase = function (str) {
    return addIgnoreCaseAlgorithm(this, function (x, a) {
      return x === a[0];
    }, [str], "");
  };
  WhereClause2.prototype.anyOfIgnoreCase = function () {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0)
      return emptyCollection(this);
    return addIgnoreCaseAlgorithm(this, function (x, a) {
      return a.indexOf(x) !== -1;
    }, set, "");
  };
  WhereClause2.prototype.startsWithAnyOfIgnoreCase = function () {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0)
      return emptyCollection(this);
    return addIgnoreCaseAlgorithm(this, function (x, a) {
      return a.some(function (n) {
        return x.indexOf(n) === 0;
      });
    }, set, maxString);
  };
  WhereClause2.prototype.anyOf = function () {
    var _this = this;
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    var compare = this._cmp;
    try {
      set.sort(compare);
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    if (set.length === 0)
      return emptyCollection(this);
    var c = new this.Collection(this, function () {
      return createRange(set[0], set[set.length - 1]);
    });
    c._ondirectionchange = function (direction) {
      compare = direction === "next" ? _this._ascending : _this._descending;
      set.sort(compare);
    };
    var i = 0;
    c._addAlgorithm(function (cursor, advance, resolve) {
      var key = cursor.key;
      while (compare(key, set[i]) > 0) {
        ++i;
        if (i === set.length) {
          advance(resolve);
          return false;
        }
      }
      if (compare(key, set[i]) === 0) {
        return true;
      } else {
        advance(function () {
          cursor.continue(set[i]);
        });
        return false;
      }
    });
    return c;
  };
  WhereClause2.prototype.notEqual = function (value) {
    return this.inAnyRange([[minKey, value], [value, this.db._maxKey]], { includeLowers: false, includeUppers: false });
  };
  WhereClause2.prototype.noneOf = function () {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0)
      return new this.Collection(this);
    try {
      set.sort(this._ascending);
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    var ranges = set.reduce(function (res, val) {
      return res ? res.concat([[res[res.length - 1][1], val]]) : [[minKey, val]];
    }, null);
    ranges.push([set[set.length - 1], this.db._maxKey]);
    return this.inAnyRange(ranges, { includeLowers: false, includeUppers: false });
  };
  WhereClause2.prototype.inAnyRange = function (ranges, options) {
    var _this = this;
    var cmp2 = this._cmp, ascending = this._ascending, descending = this._descending, min = this._min, max = this._max;
    if (ranges.length === 0)
      return emptyCollection(this);
    if (!ranges.every(function (range) {
      return range[0] !== void 0 && range[1] !== void 0 && ascending(range[0], range[1]) <= 0;
    })) {
      return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
    }
    var includeLowers = !options || options.includeLowers !== false;
    var includeUppers = options && options.includeUppers === true;
    function addRange2(ranges2, newRange) {
      var i = 0, l = ranges2.length;
      for (; i < l; ++i) {
        var range = ranges2[i];
        if (cmp2(newRange[0], range[1]) < 0 && cmp2(newRange[1], range[0]) > 0) {
          range[0] = min(range[0], newRange[0]);
          range[1] = max(range[1], newRange[1]);
          break;
        }
      }
      if (i === l)
        ranges2.push(newRange);
      return ranges2;
    }
    var sortDirection = ascending;
    function rangeSorter(a, b) {
      return sortDirection(a[0], b[0]);
    }
    var set;
    try {
      set = ranges.reduce(addRange2, []);
      set.sort(rangeSorter);
    } catch (ex) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    var rangePos = 0;
    var keyIsBeyondCurrentEntry = includeUppers ? function (key) {
      return ascending(key, set[rangePos][1]) > 0;
    } : function (key) {
      return ascending(key, set[rangePos][1]) >= 0;
    };
    var keyIsBeforeCurrentEntry = includeLowers ? function (key) {
      return descending(key, set[rangePos][0]) > 0;
    } : function (key) {
      return descending(key, set[rangePos][0]) >= 0;
    };
    function keyWithinCurrentRange(key) {
      return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
    }
    var checkKey = keyIsBeyondCurrentEntry;
    var c = new this.Collection(this, function () {
      return createRange(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers);
    });
    c._ondirectionchange = function (direction) {
      if (direction === "next") {
        checkKey = keyIsBeyondCurrentEntry;
        sortDirection = ascending;
      } else {
        checkKey = keyIsBeforeCurrentEntry;
        sortDirection = descending;
      }
      set.sort(rangeSorter);
    };
    c._addAlgorithm(function (cursor, advance, resolve) {
      var key = cursor.key;
      while (checkKey(key)) {
        ++rangePos;
        if (rangePos === set.length) {
          advance(resolve);
          return false;
        }
      }
      if (keyWithinCurrentRange(key)) {
        return true;
      } else if (_this._cmp(key, set[rangePos][1]) === 0 || _this._cmp(key, set[rangePos][0]) === 0) {
        return false;
      } else {
        advance(function () {
          if (sortDirection === ascending)
            cursor.continue(set[rangePos][0]);
          else
            cursor.continue(set[rangePos][1]);
        });
        return false;
      }
    });
    return c;
  };
  WhereClause2.prototype.startsWithAnyOf = function () {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (!set.every(function (s) {
      return typeof s === "string";
    })) {
      return fail(this, "startsWithAnyOf() only works with strings");
    }
    if (set.length === 0)
      return emptyCollection(this);
    return this.inAnyRange(set.map(function (str) {
      return [str, str + maxString];
    }));
  };
  return WhereClause2;
}();
function createWhereClauseConstructor(db2) {
  return makeClassConstructor(WhereClause.prototype, function WhereClause2(table, index, orCollection) {
    this.db = db2;
    this._ctx = {
      table,
      index: index === ":id" ? null : index,
      or: orCollection
    };
    var indexedDB2 = db2._deps.indexedDB;
    if (!indexedDB2)
      throw new exceptions.MissingAPI();
    this._cmp = this._ascending = indexedDB2.cmp.bind(indexedDB2);
    this._descending = function (a, b) {
      return indexedDB2.cmp(b, a);
    };
    this._max = function (a, b) {
      return indexedDB2.cmp(a, b) > 0 ? a : b;
    };
    this._min = function (a, b) {
      return indexedDB2.cmp(a, b) < 0 ? a : b;
    };
    this._IDBKeyRange = db2._deps.IDBKeyRange;
  });
}
function eventRejectHandler(reject) {
  return wrap(function (event) {
    preventDefault(event);
    reject(event.target.error);
    return false;
  });
}
function preventDefault(event) {
  if (event.stopPropagation)
    event.stopPropagation();
  if (event.preventDefault)
    event.preventDefault();
}
var DEXIE_STORAGE_MUTATED_EVENT_NAME = "storagemutated";
var STORAGE_MUTATED_DOM_EVENT_NAME = "x-storagemutated-1";
var globalEvents = Events(null, DEXIE_STORAGE_MUTATED_EVENT_NAME);
var Transaction = function () {
  function Transaction2() {
  }
  Transaction2.prototype._lock = function () {
    assert(!PSD.global);
    ++this._reculock;
    if (this._reculock === 1 && !PSD.global)
      PSD.lockOwnerFor = this;
    return this;
  };
  Transaction2.prototype._unlock = function () {
    assert(!PSD.global);
    if (--this._reculock === 0) {
      if (!PSD.global)
        PSD.lockOwnerFor = null;
      while (this._blockedFuncs.length > 0 && !this._locked()) {
        var fnAndPSD = this._blockedFuncs.shift();
        try {
          usePSD(fnAndPSD[1], fnAndPSD[0]);
        } catch (e) {
        }
      }
    }
    return this;
  };
  Transaction2.prototype._locked = function () {
    return this._reculock && PSD.lockOwnerFor !== this;
  };
  Transaction2.prototype.create = function (idbtrans) {
    var _this = this;
    if (!this.mode)
      return this;
    var idbdb = this.db.idbdb;
    var dbOpenError = this.db._state.dbOpenError;
    assert(!this.idbtrans);
    if (!idbtrans && !idbdb) {
      switch (dbOpenError && dbOpenError.name) {
        case "DatabaseClosedError":
          throw new exceptions.DatabaseClosed(dbOpenError);
        case "MissingAPIError":
          throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
        default:
          throw new exceptions.OpenFailed(dbOpenError);
      }
    }
    if (!this.active)
      throw new exceptions.TransactionInactive();
    assert(this._completion._state === null);
    idbtrans = this.idbtrans = idbtrans || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }) : idbdb.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }));
    idbtrans.onerror = wrap(function (ev) {
      preventDefault(ev);
      _this._reject(idbtrans.error);
    });
    idbtrans.onabort = wrap(function (ev) {
      preventDefault(ev);
      _this.active && _this._reject(new exceptions.Abort(idbtrans.error));
      _this.active = false;
      _this.on("abort").fire(ev);
    });
    idbtrans.oncomplete = wrap(function () {
      _this.active = false;
      _this._resolve();
      if ("mutatedParts" in idbtrans) {
        globalEvents.storagemutated.fire(idbtrans["mutatedParts"]);
      }
    });
    return this;
  };
  Transaction2.prototype._promise = function (mode, fn, bWriteLock) {
    var _this = this;
    if (mode === "readwrite" && this.mode !== "readwrite")
      return rejection(new exceptions.ReadOnly("Transaction is readonly"));
    if (!this.active)
      return rejection(new exceptions.TransactionInactive());
    if (this._locked()) {
      return new DexiePromise(function (resolve, reject) {
        _this._blockedFuncs.push([function () {
          _this._promise(mode, fn, bWriteLock).then(resolve, reject);
        }, PSD]);
      });
    } else if (bWriteLock) {
      return newScope(function () {
        var p2 = new DexiePromise(function (resolve, reject) {
          _this._lock();
          var rv = fn(resolve, reject, _this);
          if (rv && rv.then)
            rv.then(resolve, reject);
        });
        p2.finally(function () {
          return _this._unlock();
        });
        p2._lib = true;
        return p2;
      });
    } else {
      var p = new DexiePromise(function (resolve, reject) {
        var rv = fn(resolve, reject, _this);
        if (rv && rv.then)
          rv.then(resolve, reject);
      });
      p._lib = true;
      return p;
    }
  };
  Transaction2.prototype._root = function () {
    return this.parent ? this.parent._root() : this;
  };
  Transaction2.prototype.waitFor = function (promiseLike) {
    var root = this._root();
    var promise = DexiePromise.resolve(promiseLike);
    if (root._waitingFor) {
      root._waitingFor = root._waitingFor.then(function () {
        return promise;
      });
    } else {
      root._waitingFor = promise;
      root._waitingQueue = [];
      var store = root.idbtrans.objectStore(root.storeNames[0]);
      (function spin() {
        ++root._spinCount;
        while (root._waitingQueue.length)
          root._waitingQueue.shift()();
        if (root._waitingFor)
          store.get(-Infinity).onsuccess = spin;
      })();
    }
    var currentWaitPromise = root._waitingFor;
    return new DexiePromise(function (resolve, reject) {
      promise.then(function (res) {
        return root._waitingQueue.push(wrap(resolve.bind(null, res)));
      }, function (err) {
        return root._waitingQueue.push(wrap(reject.bind(null, err)));
      }).finally(function () {
        if (root._waitingFor === currentWaitPromise) {
          root._waitingFor = null;
        }
      });
    });
  };
  Transaction2.prototype.abort = function () {
    if (this.active) {
      this.active = false;
      if (this.idbtrans)
        this.idbtrans.abort();
      this._reject(new exceptions.Abort());
    }
  };
  Transaction2.prototype.table = function (tableName) {
    var memoizedTables = this._memoizedTables || (this._memoizedTables = {});
    if (hasOwn(memoizedTables, tableName))
      return memoizedTables[tableName];
    var tableSchema = this.schema[tableName];
    if (!tableSchema) {
      throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
    }
    var transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
    transactionBoundTable.core = this.db.core.table(tableName);
    memoizedTables[tableName] = transactionBoundTable;
    return transactionBoundTable;
  };
  return Transaction2;
}();
function createTransactionConstructor(db2) {
  return makeClassConstructor(Transaction.prototype, function Transaction2(mode, storeNames, dbschema, chromeTransactionDurability, parent) {
    var _this = this;
    this.db = db2;
    this.mode = mode;
    this.storeNames = storeNames;
    this.schema = dbschema;
    this.chromeTransactionDurability = chromeTransactionDurability;
    this.idbtrans = null;
    this.on = Events(this, "complete", "error", "abort");
    this.parent = parent || null;
    this.active = true;
    this._reculock = 0;
    this._blockedFuncs = [];
    this._resolve = null;
    this._reject = null;
    this._waitingFor = null;
    this._waitingQueue = null;
    this._spinCount = 0;
    this._completion = new DexiePromise(function (resolve, reject) {
      _this._resolve = resolve;
      _this._reject = reject;
    });
    this._completion.then(function () {
      _this.active = false;
      _this.on.complete.fire();
    }, function (e) {
      var wasActive = _this.active;
      _this.active = false;
      _this.on.error.fire(e);
      _this.parent ? _this.parent._reject(e) : wasActive && _this.idbtrans && _this.idbtrans.abort();
      return rejection(e);
    });
  });
}
function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey) {
  return {
    name,
    keyPath,
    unique,
    multi,
    auto,
    compound,
    src: (unique && !isPrimKey ? "&" : "") + (multi ? "*" : "") + (auto ? "++" : "") + nameFromKeyPath(keyPath)
  };
}
function nameFromKeyPath(keyPath) {
  return typeof keyPath === "string" ? keyPath : keyPath ? "[" + [].join.call(keyPath, "+") + "]" : "";
}
function createTableSchema(name, primKey, indexes) {
  return {
    name,
    primKey,
    indexes,
    mappedClass: null,
    idxByName: arrayToObject(indexes, function (index) {
      return [index.name, index];
    })
  };
}
function safariMultiStoreFix(storeNames) {
  return storeNames.length === 1 ? storeNames[0] : storeNames;
}
var getMaxKey = function (IdbKeyRange) {
  try {
    IdbKeyRange.only([[]]);
    getMaxKey = function () {
      return [[]];
    };
    return [[]];
  } catch (e) {
    getMaxKey = function () {
      return maxString;
    };
    return maxString;
  }
};
function getKeyExtractor(keyPath) {
  if (keyPath == null) {
    return function () {
      return void 0;
    };
  } else if (typeof keyPath === "string") {
    return getSinglePathKeyExtractor(keyPath);
  } else {
    return function (obj) {
      return getByKeyPath(obj, keyPath);
    };
  }
}
function getSinglePathKeyExtractor(keyPath) {
  var split = keyPath.split(".");
  if (split.length === 1) {
    return function (obj) {
      return obj[keyPath];
    };
  } else {
    return function (obj) {
      return getByKeyPath(obj, keyPath);
    };
  }
}
function arrayify(arrayLike) {
  return [].slice.call(arrayLike);
}
var _id_counter = 0;
function getKeyPathAlias(keyPath) {
  return keyPath == null ? ":id" : typeof keyPath === "string" ? keyPath : "[" + keyPath.join("+") + "]";
}
function createDBCore(db2, IdbKeyRange, tmpTrans) {
  function extractSchema(db3, trans) {
    var tables2 = arrayify(db3.objectStoreNames);
    return {
      schema: {
        name: db3.name,
        tables: tables2.map(function (table) {
          return trans.objectStore(table);
        }).map(function (store) {
          var keyPath = store.keyPath, autoIncrement = store.autoIncrement;
          var compound = isArray(keyPath);
          var outbound = keyPath == null;
          var indexByKeyPath = {};
          var result = {
            name: store.name,
            primaryKey: {
              name: null,
              isPrimaryKey: true,
              outbound,
              compound,
              keyPath,
              autoIncrement,
              unique: true,
              extractKey: getKeyExtractor(keyPath)
            },
            indexes: arrayify(store.indexNames).map(function (indexName) {
              return store.index(indexName);
            }).map(function (index) {
              var name = index.name, unique = index.unique, multiEntry = index.multiEntry, keyPath2 = index.keyPath;
              var compound2 = isArray(keyPath2);
              var result2 = {
                name,
                compound: compound2,
                keyPath: keyPath2,
                unique,
                multiEntry,
                extractKey: getKeyExtractor(keyPath2)
              };
              indexByKeyPath[getKeyPathAlias(keyPath2)] = result2;
              return result2;
            }),
            getIndexByKeyPath: function (keyPath2) {
              return indexByKeyPath[getKeyPathAlias(keyPath2)];
            }
          };
          indexByKeyPath[":id"] = result.primaryKey;
          if (keyPath != null) {
            indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey;
          }
          return result;
        })
      },
      hasGetAll: tables2.length > 0 && "getAll" in trans.objectStore(tables2[0]) && !(typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
    };
  }
  function makeIDBKeyRange(range) {
    if (range.type === 3)
      return null;
    if (range.type === 4)
      throw new Error("Cannot convert never type to IDBKeyRange");
    var lower = range.lower, upper = range.upper, lowerOpen = range.lowerOpen, upperOpen = range.upperOpen;
    var idbRange = lower === void 0 ? upper === void 0 ? null : IdbKeyRange.upperBound(upper, !!upperOpen) : upper === void 0 ? IdbKeyRange.lowerBound(lower, !!lowerOpen) : IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
    return idbRange;
  }
  function createDbCoreTable(tableSchema) {
    var tableName = tableSchema.name;
    function mutate(_a3) {
      var trans = _a3.trans, type2 = _a3.type, keys2 = _a3.keys, values = _a3.values, range = _a3.range;
      return new Promise(function (resolve, reject) {
        resolve = wrap(resolve);
        var store = trans.objectStore(tableName);
        var outbound = store.keyPath == null;
        var isAddOrPut = type2 === "put" || type2 === "add";
        if (!isAddOrPut && type2 !== "delete" && type2 !== "deleteRange")
          throw new Error("Invalid operation type: " + type2);
        var length = (keys2 || values || { length: 1 }).length;
        if (keys2 && values && keys2.length !== values.length) {
          throw new Error("Given keys array must have same length as given values array.");
        }
        if (length === 0)
          return resolve({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
        var req;
        var reqs = [];
        var failures = [];
        var numFailures = 0;
        var errorHandler = function (event) {
          ++numFailures;
          preventDefault(event);
        };
        if (type2 === "deleteRange") {
          if (range.type === 4)
            return resolve({ numFailures, failures, results: [], lastResult: void 0 });
          if (range.type === 3)
            reqs.push(req = store.clear());
          else
            reqs.push(req = store.delete(makeIDBKeyRange(range)));
        } else {
          var _a4 = isAddOrPut ? outbound ? [values, keys2] : [values, null] : [keys2, null], args1 = _a4[0], args2 = _a4[1];
          if (isAddOrPut) {
            for (var i = 0; i < length; ++i) {
              reqs.push(req = args2 && args2[i] !== void 0 ? store[type2](args1[i], args2[i]) : store[type2](args1[i]));
              req.onerror = errorHandler;
            }
          } else {
            for (var i = 0; i < length; ++i) {
              reqs.push(req = store[type2](args1[i]));
              req.onerror = errorHandler;
            }
          }
        }
        var done = function (event) {
          var lastResult = event.target.result;
          reqs.forEach(function (req2, i2) {
            return req2.error != null && (failures[i2] = req2.error);
          });
          resolve({
            numFailures,
            failures,
            results: type2 === "delete" ? keys2 : reqs.map(function (req2) {
              return req2.result;
            }),
            lastResult
          });
        };
        req.onerror = function (event) {
          errorHandler(event);
          done(event);
        };
        req.onsuccess = done;
      });
    }
    function openCursor2(_a3) {
      var trans = _a3.trans, values = _a3.values, query2 = _a3.query, reverse = _a3.reverse, unique = _a3.unique;
      return new Promise(function (resolve, reject) {
        resolve = wrap(resolve);
        var index = query2.index, range = query2.range;
        var store = trans.objectStore(tableName);
        var source = index.isPrimaryKey ? store : store.index(index.name);
        var direction = reverse ? unique ? "prevunique" : "prev" : unique ? "nextunique" : "next";
        var req = values || !("openKeyCursor" in source) ? source.openCursor(makeIDBKeyRange(range), direction) : source.openKeyCursor(makeIDBKeyRange(range), direction);
        req.onerror = eventRejectHandler(reject);
        req.onsuccess = wrap(function (ev) {
          var cursor = req.result;
          if (!cursor) {
            resolve(null);
            return;
          }
          cursor.___id = ++_id_counter;
          cursor.done = false;
          var _cursorContinue = cursor.continue.bind(cursor);
          var _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
          if (_cursorContinuePrimaryKey)
            _cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);
          var _cursorAdvance = cursor.advance.bind(cursor);
          var doThrowCursorIsNotStarted = function () {
            throw new Error("Cursor not started");
          };
          var doThrowCursorIsStopped = function () {
            throw new Error("Cursor not stopped");
          };
          cursor.trans = trans;
          cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted;
          cursor.fail = wrap(reject);
          cursor.next = function () {
            var _this = this;
            var gotOne = 1;
            return this.start(function () {
              return gotOne-- ? _this.continue() : _this.stop();
            }).then(function () {
              return _this;
            });
          };
          cursor.start = function (callback) {
            var iterationPromise = new Promise(function (resolveIteration, rejectIteration) {
              resolveIteration = wrap(resolveIteration);
              req.onerror = eventRejectHandler(rejectIteration);
              cursor.fail = rejectIteration;
              cursor.stop = function (value) {
                cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped;
                resolveIteration(value);
              };
            });
            var guardedCallback = function () {
              if (req.result) {
                try {
                  callback();
                } catch (err) {
                  cursor.fail(err);
                }
              } else {
                cursor.done = true;
                cursor.start = function () {
                  throw new Error("Cursor behind last entry");
                };
                cursor.stop();
              }
            };
            req.onsuccess = wrap(function (ev2) {
              req.onsuccess = guardedCallback;
              guardedCallback();
            });
            cursor.continue = _cursorContinue;
            cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
            cursor.advance = _cursorAdvance;
            guardedCallback();
            return iterationPromise;
          };
          resolve(cursor);
        }, reject);
      });
    }
    function query(hasGetAll2) {
      return function (request) {
        return new Promise(function (resolve, reject) {
          resolve = wrap(resolve);
          var trans = request.trans, values = request.values, limit = request.limit, query2 = request.query;
          var nonInfinitLimit = limit === Infinity ? void 0 : limit;
          var index = query2.index, range = query2.range;
          var store = trans.objectStore(tableName);
          var source = index.isPrimaryKey ? store : store.index(index.name);
          var idbKeyRange = makeIDBKeyRange(range);
          if (limit === 0)
            return resolve({ result: [] });
          if (hasGetAll2) {
            var req = values ? source.getAll(idbKeyRange, nonInfinitLimit) : source.getAllKeys(idbKeyRange, nonInfinitLimit);
            req.onsuccess = function (event) {
              return resolve({ result: event.target.result });
            };
            req.onerror = eventRejectHandler(reject);
          } else {
            var count_1 = 0;
            var req_1 = values || !("openKeyCursor" in source) ? source.openCursor(idbKeyRange) : source.openKeyCursor(idbKeyRange);
            var result_1 = [];
            req_1.onsuccess = function (event) {
              var cursor = req_1.result;
              if (!cursor)
                return resolve({ result: result_1 });
              result_1.push(values ? cursor.value : cursor.primaryKey);
              if (++count_1 === limit)
                return resolve({ result: result_1 });
              cursor.continue();
            };
            req_1.onerror = eventRejectHandler(reject);
          }
        });
      };
    }
    return {
      name: tableName,
      schema: tableSchema,
      mutate,
      getMany: function (_a3) {
        var trans = _a3.trans, keys2 = _a3.keys;
        return new Promise(function (resolve, reject) {
          resolve = wrap(resolve);
          var store = trans.objectStore(tableName);
          var length = keys2.length;
          var result = new Array(length);
          var keyCount = 0;
          var callbackCount = 0;
          var req;
          var successHandler = function (event) {
            var req2 = event.target;
            if ((result[req2._pos] = req2.result) != null)
              ;
            if (++callbackCount === keyCount)
              resolve(result);
          };
          var errorHandler = eventRejectHandler(reject);
          for (var i = 0; i < length; ++i) {
            var key = keys2[i];
            if (key != null) {
              req = store.get(keys2[i]);
              req._pos = i;
              req.onsuccess = successHandler;
              req.onerror = errorHandler;
              ++keyCount;
            }
          }
          if (keyCount === 0)
            resolve(result);
        });
      },
      get: function (_a3) {
        var trans = _a3.trans, key = _a3.key;
        return new Promise(function (resolve, reject) {
          resolve = wrap(resolve);
          var store = trans.objectStore(tableName);
          var req = store.get(key);
          req.onsuccess = function (event) {
            return resolve(event.target.result);
          };
          req.onerror = eventRejectHandler(reject);
        });
      },
      query: query(hasGetAll),
      openCursor: openCursor2,
      count: function (_a3) {
        var query2 = _a3.query, trans = _a3.trans;
        var index = query2.index, range = query2.range;
        return new Promise(function (resolve, reject) {
          var store = trans.objectStore(tableName);
          var source = index.isPrimaryKey ? store : store.index(index.name);
          var idbKeyRange = makeIDBKeyRange(range);
          var req = idbKeyRange ? source.count(idbKeyRange) : source.count();
          req.onsuccess = wrap(function (ev) {
            return resolve(ev.target.result);
          });
          req.onerror = eventRejectHandler(reject);
        });
      }
    };
  }
  var _a2 = extractSchema(db2, tmpTrans), schema = _a2.schema, hasGetAll = _a2.hasGetAll;
  var tables = schema.tables.map(function (tableSchema) {
    return createDbCoreTable(tableSchema);
  });
  var tableMap = {};
  tables.forEach(function (table) {
    return tableMap[table.name] = table;
  });
  return {
    stack: "dbcore",
    transaction: db2.transaction.bind(db2),
    table: function (name) {
      var result = tableMap[name];
      if (!result)
        throw new Error("Table '" + name + "' not found");
      return tableMap[name];
    },
    MIN_KEY: -Infinity,
    MAX_KEY: getMaxKey(IdbKeyRange),
    schema
  };
}
function createMiddlewareStack(stackImpl, middlewares) {
  return middlewares.reduce(function (down, _a2) {
    var create = _a2.create;
    return __assign(__assign({}, down), create(down));
  }, stackImpl);
}
function createMiddlewareStacks(middlewares, idbdb, _a2, tmpTrans) {
  var IDBKeyRange = _a2.IDBKeyRange;
  _a2.indexedDB;
  var dbcore = createMiddlewareStack(createDBCore(idbdb, IDBKeyRange, tmpTrans), middlewares.dbcore);
  return {
    dbcore
  };
}
function generateMiddlewareStacks(_a2, tmpTrans) {
  var db2 = _a2._novip;
  var idbdb = tmpTrans.db;
  var stacks = createMiddlewareStacks(db2._middlewares, idbdb, db2._deps, tmpTrans);
  db2.core = stacks.dbcore;
  db2.tables.forEach(function (table) {
    var tableName = table.name;
    if (db2.core.schema.tables.some(function (tbl) {
      return tbl.name === tableName;
    })) {
      table.core = db2.core.table(tableName);
      if (db2[tableName] instanceof db2.Table) {
        db2[tableName].core = table.core;
      }
    }
  });
}
function setApiOnPlace(_a2, objs, tableNames, dbschema) {
  var db2 = _a2._novip;
  tableNames.forEach(function (tableName) {
    var schema = dbschema[tableName];
    objs.forEach(function (obj) {
      var propDesc = getPropertyDescriptor(obj, tableName);
      if (!propDesc || "value" in propDesc && propDesc.value === void 0) {
        if (obj === db2.Transaction.prototype || obj instanceof db2.Transaction) {
          setProp(obj, tableName, {
            get: function () {
              return this.table(tableName);
            },
            set: function (value) {
              defineProperty(this, tableName, { value, writable: true, configurable: true, enumerable: true });
            }
          });
        } else {
          obj[tableName] = new db2.Table(tableName, schema);
        }
      }
    });
  });
}
function removeTablesApi(_a2, objs) {
  var db2 = _a2._novip;
  objs.forEach(function (obj) {
    for (var key in obj) {
      if (obj[key] instanceof db2.Table)
        delete obj[key];
    }
  });
}
function lowerVersionFirst(a, b) {
  return a._cfg.version - b._cfg.version;
}
function runUpgraders(db2, oldVersion, idbUpgradeTrans, reject) {
  var globalSchema = db2._dbSchema;
  var trans = db2._createTransaction("readwrite", db2._storeNames, globalSchema);
  trans.create(idbUpgradeTrans);
  trans._completion.catch(reject);
  var rejectTransaction = trans._reject.bind(trans);
  var transless = PSD.transless || PSD;
  newScope(function () {
    PSD.trans = trans;
    PSD.transless = transless;
    if (oldVersion === 0) {
      keys(globalSchema).forEach(function (tableName) {
        createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
      });
      generateMiddlewareStacks(db2, idbUpgradeTrans);
      DexiePromise.follow(function () {
        return db2.on.populate.fire(trans);
      }).catch(rejectTransaction);
    } else
      updateTablesAndIndexes(db2, oldVersion, trans, idbUpgradeTrans).catch(rejectTransaction);
  });
}
function updateTablesAndIndexes(_a2, oldVersion, trans, idbUpgradeTrans) {
  var db2 = _a2._novip;
  var queue = [];
  var versions = db2._versions;
  var globalSchema = db2._dbSchema = buildGlobalSchema(db2, db2.idbdb, idbUpgradeTrans);
  var anyContentUpgraderHasRun = false;
  var versToRun = versions.filter(function (v) {
    return v._cfg.version >= oldVersion;
  });
  versToRun.forEach(function (version) {
    queue.push(function () {
      var oldSchema = globalSchema;
      var newSchema = version._cfg.dbschema;
      adjustToExistingIndexNames(db2, oldSchema, idbUpgradeTrans);
      adjustToExistingIndexNames(db2, newSchema, idbUpgradeTrans);
      globalSchema = db2._dbSchema = newSchema;
      var diff = getSchemaDiff(oldSchema, newSchema);
      diff.add.forEach(function (tuple) {
        createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
      });
      diff.change.forEach(function (change) {
        if (change.recreate) {
          throw new exceptions.Upgrade("Not yet support for changing primary key");
        } else {
          var store_1 = idbUpgradeTrans.objectStore(change.name);
          change.add.forEach(function (idx) {
            return addIndex(store_1, idx);
          });
          change.change.forEach(function (idx) {
            store_1.deleteIndex(idx.name);
            addIndex(store_1, idx);
          });
          change.del.forEach(function (idxName) {
            return store_1.deleteIndex(idxName);
          });
        }
      });
      var contentUpgrade = version._cfg.contentUpgrade;
      if (contentUpgrade && version._cfg.version > oldVersion) {
        generateMiddlewareStacks(db2, idbUpgradeTrans);
        trans._memoizedTables = {};
        anyContentUpgraderHasRun = true;
        var upgradeSchema_1 = shallowClone(newSchema);
        diff.del.forEach(function (table) {
          upgradeSchema_1[table] = oldSchema[table];
        });
        removeTablesApi(db2, [db2.Transaction.prototype]);
        setApiOnPlace(db2, [db2.Transaction.prototype], keys(upgradeSchema_1), upgradeSchema_1);
        trans.schema = upgradeSchema_1;
        var contentUpgradeIsAsync_1 = isAsyncFunction(contentUpgrade);
        if (contentUpgradeIsAsync_1) {
          incrementExpectedAwaits();
        }
        var returnValue_1;
        var promiseFollowed = DexiePromise.follow(function () {
          returnValue_1 = contentUpgrade(trans);
          if (returnValue_1) {
            if (contentUpgradeIsAsync_1) {
              var decrementor = decrementExpectedAwaits.bind(null, null);
              returnValue_1.then(decrementor, decrementor);
            }
          }
        });
        return returnValue_1 && typeof returnValue_1.then === "function" ? DexiePromise.resolve(returnValue_1) : promiseFollowed.then(function () {
          return returnValue_1;
        });
      }
    });
    queue.push(function (idbtrans) {
      if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug) {
        var newSchema = version._cfg.dbschema;
        deleteRemovedTables(newSchema, idbtrans);
      }
      removeTablesApi(db2, [db2.Transaction.prototype]);
      setApiOnPlace(db2, [db2.Transaction.prototype], db2._storeNames, db2._dbSchema);
      trans.schema = db2._dbSchema;
    });
  });
  function runQueue() {
    return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) : DexiePromise.resolve();
  }
  return runQueue().then(function () {
    createMissingTables(globalSchema, idbUpgradeTrans);
  });
}
function getSchemaDiff(oldSchema, newSchema) {
  var diff = {
    del: [],
    add: [],
    change: []
  };
  var table;
  for (table in oldSchema) {
    if (!newSchema[table])
      diff.del.push(table);
  }
  for (table in newSchema) {
    var oldDef = oldSchema[table], newDef = newSchema[table];
    if (!oldDef) {
      diff.add.push([table, newDef]);
    } else {
      var change = {
        name: table,
        def: newDef,
        recreate: false,
        del: [],
        add: [],
        change: []
      };
      if ("" + (oldDef.primKey.keyPath || "") !== "" + (newDef.primKey.keyPath || "") || oldDef.primKey.auto !== newDef.primKey.auto && !isIEOrEdge) {
        change.recreate = true;
        diff.change.push(change);
      } else {
        var oldIndexes = oldDef.idxByName;
        var newIndexes = newDef.idxByName;
        var idxName = void 0;
        for (idxName in oldIndexes) {
          if (!newIndexes[idxName])
            change.del.push(idxName);
        }
        for (idxName in newIndexes) {
          var oldIdx = oldIndexes[idxName], newIdx = newIndexes[idxName];
          if (!oldIdx)
            change.add.push(newIdx);
          else if (oldIdx.src !== newIdx.src)
            change.change.push(newIdx);
        }
        if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
          diff.change.push(change);
        }
      }
    }
  }
  return diff;
}
function createTable(idbtrans, tableName, primKey, indexes) {
  var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? { keyPath: primKey.keyPath, autoIncrement: primKey.auto } : { autoIncrement: primKey.auto });
  indexes.forEach(function (idx) {
    return addIndex(store, idx);
  });
  return store;
}
function createMissingTables(newSchema, idbtrans) {
  keys(newSchema).forEach(function (tableName) {
    if (!idbtrans.db.objectStoreNames.contains(tableName)) {
      createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
    }
  });
}
function deleteRemovedTables(newSchema, idbtrans) {
  [].slice.call(idbtrans.db.objectStoreNames).forEach(function (storeName) {
    return newSchema[storeName] == null && idbtrans.db.deleteObjectStore(storeName);
  });
}
function addIndex(store, idx) {
  store.createIndex(idx.name, idx.keyPath, { unique: idx.unique, multiEntry: idx.multi });
}
function buildGlobalSchema(db2, idbdb, tmpTrans) {
  var globalSchema = {};
  var dbStoreNames = slice(idbdb.objectStoreNames, 0);
  dbStoreNames.forEach(function (storeName) {
    var store = tmpTrans.objectStore(storeName);
    var keyPath = store.keyPath;
    var primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== "string", true);
    var indexes = [];
    for (var j = 0; j < store.indexNames.length; ++j) {
      var idbindex = store.index(store.indexNames[j]);
      keyPath = idbindex.keyPath;
      var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== "string", false);
      indexes.push(index);
    }
    globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
  });
  return globalSchema;
}
function readGlobalSchema(_a2, idbdb, tmpTrans) {
  var db2 = _a2._novip;
  db2.verno = idbdb.version / 10;
  var globalSchema = db2._dbSchema = buildGlobalSchema(db2, idbdb, tmpTrans);
  db2._storeNames = slice(idbdb.objectStoreNames, 0);
  setApiOnPlace(db2, [db2._allTables], keys(globalSchema), globalSchema);
}
function verifyInstalledSchema(db2, tmpTrans) {
  var installedSchema = buildGlobalSchema(db2, db2.idbdb, tmpTrans);
  var diff = getSchemaDiff(installedSchema, db2._dbSchema);
  return !(diff.add.length || diff.change.some(function (ch) {
    return ch.add.length || ch.change.length;
  }));
}
function adjustToExistingIndexNames(_a2, schema, idbtrans) {
  var db2 = _a2._novip;
  var storeNames = idbtrans.db.objectStoreNames;
  for (var i = 0; i < storeNames.length; ++i) {
    var storeName = storeNames[i];
    var store = idbtrans.objectStore(storeName);
    db2._hasGetAll = "getAll" in store;
    for (var j = 0; j < store.indexNames.length; ++j) {
      var indexName = store.indexNames[j];
      var keyPath = store.index(indexName).keyPath;
      var dexieName = typeof keyPath === "string" ? keyPath : "[" + slice(keyPath).join("+") + "]";
      if (schema[storeName]) {
        var indexSpec = schema[storeName].idxByName[dexieName];
        if (indexSpec) {
          indexSpec.name = indexName;
          delete schema[storeName].idxByName[dexieName];
          schema[storeName].idxByName[indexName] = indexSpec;
        }
      }
    }
  }
  if (typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
    db2._hasGetAll = false;
  }
}
function parseIndexSyntax(primKeyAndIndexes) {
  return primKeyAndIndexes.split(",").map(function (index, indexNum) {
    index = index.trim();
    var name = index.replace(/([&*]|\+\+)/g, "");
    var keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split("+") : name;
    return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), indexNum === 0);
  });
}
var Version = function () {
  function Version2() {
  }
  Version2.prototype._parseStoresSpec = function (stores, outSchema) {
    keys(stores).forEach(function (tableName) {
      if (stores[tableName] !== null) {
        var indexes = parseIndexSyntax(stores[tableName]);
        var primKey = indexes.shift();
        if (primKey.multi)
          throw new exceptions.Schema("Primary key cannot be multi-valued");
        indexes.forEach(function (idx) {
          if (idx.auto)
            throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
          if (!idx.keyPath)
            throw new exceptions.Schema("Index must have a name and cannot be an empty string");
        });
        outSchema[tableName] = createTableSchema(tableName, primKey, indexes);
      }
    });
  };
  Version2.prototype.stores = function (stores) {
    var db2 = this.db;
    this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;
    var versions = db2._versions;
    var storesSpec = {};
    var dbschema = {};
    versions.forEach(function (version) {
      extend(storesSpec, version._cfg.storesSource);
      dbschema = version._cfg.dbschema = {};
      version._parseStoresSpec(storesSpec, dbschema);
    });
    db2._dbSchema = dbschema;
    removeTablesApi(db2, [db2._allTables, db2, db2.Transaction.prototype]);
    setApiOnPlace(db2, [db2._allTables, db2, db2.Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema);
    db2._storeNames = keys(dbschema);
    return this;
  };
  Version2.prototype.upgrade = function (upgradeFunction) {
    this._cfg.contentUpgrade = promisableChain(this._cfg.contentUpgrade || nop, upgradeFunction);
    return this;
  };
  return Version2;
}();
function createVersionConstructor(db2) {
  return makeClassConstructor(Version.prototype, function Version2(versionNumber) {
    this.db = db2;
    this._cfg = {
      version: versionNumber,
      storesSource: null,
      dbschema: {},
      tables: {},
      contentUpgrade: null
    };
  });
}
function getDbNamesTable(indexedDB2, IDBKeyRange) {
  var dbNamesDB = indexedDB2["_dbNamesDB"];
  if (!dbNamesDB) {
    dbNamesDB = indexedDB2["_dbNamesDB"] = new Dexie$1(DBNAMES_DB, {
      addons: [],
      indexedDB: indexedDB2,
      IDBKeyRange
    });
    dbNamesDB.version(1).stores({ dbnames: "name" });
  }
  return dbNamesDB.table("dbnames");
}
function hasDatabasesNative(indexedDB2) {
  return indexedDB2 && typeof indexedDB2.databases === "function";
}
function getDatabaseNames(_a2) {
  var indexedDB2 = _a2.indexedDB, IDBKeyRange = _a2.IDBKeyRange;
  return hasDatabasesNative(indexedDB2) ? Promise.resolve(indexedDB2.databases()).then(function (infos) {
    return infos.map(function (info) {
      return info.name;
    }).filter(function (name) {
      return name !== DBNAMES_DB;
    });
  }) : getDbNamesTable(indexedDB2, IDBKeyRange).toCollection().primaryKeys();
}
function _onDatabaseCreated(_a2, name) {
  var indexedDB2 = _a2.indexedDB, IDBKeyRange = _a2.IDBKeyRange;
  !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).put({ name }).catch(nop);
}
function _onDatabaseDeleted(_a2, name) {
  var indexedDB2 = _a2.indexedDB, IDBKeyRange = _a2.IDBKeyRange;
  !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).delete(name).catch(nop);
}
function vip(fn) {
  return newScope(function () {
    PSD.letThrough = true;
    return fn();
  });
}
function idbReady() {
  var isSafari = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
  if (!isSafari || !indexedDB.databases)
    return Promise.resolve();
  var intervalId;
  return new Promise(function (resolve) {
    var tryIdb = function () {
      return indexedDB.databases().finally(resolve);
    };
    intervalId = setInterval(tryIdb, 100);
    tryIdb();
  }).finally(function () {
    return clearInterval(intervalId);
  });
}
function dexieOpen(db2) {
  var state = db2._state;
  var indexedDB2 = db2._deps.indexedDB;
  if (state.isBeingOpened || db2.idbdb)
    return state.dbReadyPromise.then(function () {
      return state.dbOpenError ? rejection(state.dbOpenError) : db2;
    });
  debug && (state.openCanceller._stackHolder = getErrorWithStack());
  state.isBeingOpened = true;
  state.dbOpenError = null;
  state.openComplete = false;
  var openCanceller = state.openCanceller;
  function throwIfCancelled() {
    if (state.openCanceller !== openCanceller)
      throw new exceptions.DatabaseClosed("db.open() was cancelled");
  }
  var resolveDbReady = state.dbReadyResolve, upgradeTransaction = null, wasCreated = false;
  return DexiePromise.race([openCanceller, (typeof navigator === "undefined" ? DexiePromise.resolve() : idbReady()).then(function () {
    return new DexiePromise(function (resolve, reject) {
      throwIfCancelled();
      if (!indexedDB2)
        throw new exceptions.MissingAPI();
      var dbName = db2.name;
      var req = state.autoSchema ? indexedDB2.open(dbName) : indexedDB2.open(dbName, Math.round(db2.verno * 10));
      if (!req)
        throw new exceptions.MissingAPI();
      req.onerror = eventRejectHandler(reject);
      req.onblocked = wrap(db2._fireOnBlocked);
      req.onupgradeneeded = wrap(function (e) {
        upgradeTransaction = req.transaction;
        if (state.autoSchema && !db2._options.allowEmptyDB) {
          req.onerror = preventDefault;
          upgradeTransaction.abort();
          req.result.close();
          var delreq = indexedDB2.deleteDatabase(dbName);
          delreq.onsuccess = delreq.onerror = wrap(function () {
            reject(new exceptions.NoSuchDatabase("Database " + dbName + " doesnt exist"));
          });
        } else {
          upgradeTransaction.onerror = eventRejectHandler(reject);
          var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
          wasCreated = oldVer < 1;
          db2._novip.idbdb = req.result;
          runUpgraders(db2, oldVer / 10, upgradeTransaction, reject);
        }
      }, reject);
      req.onsuccess = wrap(function () {
        upgradeTransaction = null;
        var idbdb = db2._novip.idbdb = req.result;
        var objectStoreNames = slice(idbdb.objectStoreNames);
        if (objectStoreNames.length > 0)
          try {
            var tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), "readonly");
            if (state.autoSchema)
              readGlobalSchema(db2, idbdb, tmpTrans);
            else {
              adjustToExistingIndexNames(db2, db2._dbSchema, tmpTrans);
              if (!verifyInstalledSchema(db2, tmpTrans)) {
                console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.");
              }
            }
            generateMiddlewareStacks(db2, tmpTrans);
          } catch (e) {
          }
        connections.push(db2);
        idbdb.onversionchange = wrap(function (ev) {
          state.vcFired = true;
          db2.on("versionchange").fire(ev);
        });
        idbdb.onclose = wrap(function (ev) {
          db2.on("close").fire(ev);
        });
        if (wasCreated)
          _onDatabaseCreated(db2._deps, dbName);
        resolve();
      }, reject);
    });
  })]).then(function () {
    throwIfCancelled();
    state.onReadyBeingFired = [];
    return DexiePromise.resolve(vip(function () {
      return db2.on.ready.fire(db2.vip);
    })).then(function fireRemainders() {
      if (state.onReadyBeingFired.length > 0) {
        var remainders_1 = state.onReadyBeingFired.reduce(promisableChain, nop);
        state.onReadyBeingFired = [];
        return DexiePromise.resolve(vip(function () {
          return remainders_1(db2.vip);
        })).then(fireRemainders);
      }
    });
  }).finally(function () {
    state.onReadyBeingFired = null;
    state.isBeingOpened = false;
  }).then(function () {
    return db2;
  }).catch(function (err) {
    state.dbOpenError = err;
    try {
      upgradeTransaction && upgradeTransaction.abort();
    } catch (_a2) {
    }
    if (openCanceller === state.openCanceller) {
      db2._close();
    }
    return rejection(err);
  }).finally(function () {
    state.openComplete = true;
    resolveDbReady();
  });
}
function awaitIterator(iterator) {
  var callNext = function (result) {
    return iterator.next(result);
  }, doThrow = function (error) {
    return iterator.throw(error);
  }, onSuccess = step(callNext), onError = step(doThrow);
  function step(getNext) {
    return function (val) {
      var next = getNext(val), value = next.value;
      return next.done ? value : !value || typeof value.then !== "function" ? isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) : value.then(onSuccess, onError);
    };
  }
  return step(callNext)();
}
function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
  var i = arguments.length;
  if (i < 2)
    throw new exceptions.InvalidArgument("Too few arguments");
  var args = new Array(i - 1);
  while (--i)
    args[i - 1] = arguments[i];
  scopeFunc = args.pop();
  var tables = flatten(args);
  return [mode, tables, scopeFunc];
}
function enterTransactionScope(db2, mode, storeNames, parentTransaction, scopeFunc) {
  return DexiePromise.resolve().then(function () {
    var transless = PSD.transless || PSD;
    var trans = db2._createTransaction(mode, storeNames, db2._dbSchema, parentTransaction);
    var zoneProps = {
      trans,
      transless
    };
    if (parentTransaction) {
      trans.idbtrans = parentTransaction.idbtrans;
    } else {
      try {
        trans.create();
        db2._state.PR1398_maxLoop = 3;
      } catch (ex) {
        if (ex.name === errnames.InvalidState && db2.isOpen() && --db2._state.PR1398_maxLoop > 0) {
          console.warn("Dexie: Need to reopen db");
          db2._close();
          return db2.open().then(function () {
            return enterTransactionScope(db2, mode, storeNames, null, scopeFunc);
          });
        }
        return rejection(ex);
      }
    }
    var scopeFuncIsAsync = isAsyncFunction(scopeFunc);
    if (scopeFuncIsAsync) {
      incrementExpectedAwaits();
    }
    var returnValue;
    var promiseFollowed = DexiePromise.follow(function () {
      returnValue = scopeFunc.call(trans, trans);
      if (returnValue) {
        if (scopeFuncIsAsync) {
          var decrementor = decrementExpectedAwaits.bind(null, null);
          returnValue.then(decrementor, decrementor);
        } else if (typeof returnValue.next === "function" && typeof returnValue.throw === "function") {
          returnValue = awaitIterator(returnValue);
        }
      }
    }, zoneProps);
    return (returnValue && typeof returnValue.then === "function" ? DexiePromise.resolve(returnValue).then(function (x) {
      return trans.active ? x : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
    }) : promiseFollowed.then(function () {
      return returnValue;
    })).then(function (x) {
      if (parentTransaction)
        trans._resolve();
      return trans._completion.then(function () {
        return x;
      });
    }).catch(function (e) {
      trans._reject(e);
      return rejection(e);
    });
  });
}
function pad(a, value, count) {
  var result = isArray(a) ? a.slice() : [a];
  for (var i = 0; i < count; ++i)
    result.push(value);
  return result;
}
function createVirtualIndexMiddleware(down) {
  return __assign(__assign({}, down), {
    table: function (tableName) {
      var table = down.table(tableName);
      var schema = table.schema;
      var indexLookup = {};
      var allVirtualIndexes = [];
      function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
        var keyPathAlias = getKeyPathAlias(keyPath);
        var indexList = indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || [];
        var keyLength = keyPath == null ? 0 : typeof keyPath === "string" ? 1 : keyPath.length;
        var isVirtual = keyTail > 0;
        var virtualIndex = __assign(__assign({}, lowLevelIndex), { isVirtual, keyTail, keyLength, extractKey: getKeyExtractor(keyPath), unique: !isVirtual && lowLevelIndex.unique });
        indexList.push(virtualIndex);
        if (!virtualIndex.isPrimaryKey) {
          allVirtualIndexes.push(virtualIndex);
        }
        if (keyLength > 1) {
          var virtualKeyPath = keyLength === 2 ? keyPath[0] : keyPath.slice(0, keyLength - 1);
          addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
        }
        indexList.sort(function (a, b) {
          return a.keyTail - b.keyTail;
        });
        return virtualIndex;
      }
      var primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
      indexLookup[":id"] = [primaryKey];
      for (var _i = 0, _a2 = schema.indexes; _i < _a2.length; _i++) {
        var index = _a2[_i];
        addVirtualIndexes(index.keyPath, 0, index);
      }
      function findBestIndex(keyPath) {
        var result2 = indexLookup[getKeyPathAlias(keyPath)];
        return result2 && result2[0];
      }
      function translateRange(range, keyTail) {
        return {
          type: range.type === 1 ? 2 : range.type,
          lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
          lowerOpen: true,
          upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
          upperOpen: true
        };
      }
      function translateRequest(req) {
        var index2 = req.query.index;
        return index2.isVirtual ? __assign(__assign({}, req), {
          query: {
            index: index2,
            range: translateRange(req.query.range, index2.keyTail)
          }
        }) : req;
      }
      var result = __assign(__assign({}, table), {
        schema: __assign(__assign({}, schema), { primaryKey, indexes: allVirtualIndexes, getIndexByKeyPath: findBestIndex }), count: function (req) {
          return table.count(translateRequest(req));
        }, query: function (req) {
          return table.query(translateRequest(req));
        }, openCursor: function (req) {
          var _a3 = req.query.index, keyTail = _a3.keyTail, isVirtual = _a3.isVirtual, keyLength = _a3.keyLength;
          if (!isVirtual)
            return table.openCursor(req);
          function createVirtualCursor(cursor) {
            function _continue(key) {
              key != null ? cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) : req.unique ? cursor.continue(cursor.key.slice(0, keyLength).concat(req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) : cursor.continue();
            }
            var virtualCursor = Object.create(cursor, {
              continue: { value: _continue },
              continuePrimaryKey: {
                value: function (key, primaryKey2) {
                  cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey2);
                }
              },
              primaryKey: {
                get: function () {
                  return cursor.primaryKey;
                }
              },
              key: {
                get: function () {
                  var key = cursor.key;
                  return keyLength === 1 ? key[0] : key.slice(0, keyLength);
                }
              },
              value: {
                get: function () {
                  return cursor.value;
                }
              }
            });
            return virtualCursor;
          }
          return table.openCursor(translateRequest(req)).then(function (cursor) {
            return cursor && createVirtualCursor(cursor);
          });
        }
      });
      return result;
    }
  });
}
var virtualIndexMiddleware = {
  stack: "dbcore",
  name: "VirtualIndexMiddleware",
  level: 1,
  create: createVirtualIndexMiddleware
};
function getObjectDiff(a, b, rv, prfx) {
  rv = rv || {};
  prfx = prfx || "";
  keys(a).forEach(function (prop) {
    if (!hasOwn(b, prop)) {
      rv[prfx + prop] = void 0;
    } else {
      var ap = a[prop], bp = b[prop];
      if (typeof ap === "object" && typeof bp === "object" && ap && bp) {
        var apTypeName = toStringTag(ap);
        var bpTypeName = toStringTag(bp);
        if (apTypeName !== bpTypeName) {
          rv[prfx + prop] = b[prop];
        } else if (apTypeName === "Object") {
          getObjectDiff(ap, bp, rv, prfx + prop + ".");
        } else if (ap !== bp) {
          rv[prfx + prop] = b[prop];
        }
      } else if (ap !== bp)
        rv[prfx + prop] = b[prop];
    }
  });
  keys(b).forEach(function (prop) {
    if (!hasOwn(a, prop)) {
      rv[prfx + prop] = b[prop];
    }
  });
  return rv;
}
function getEffectiveKeys(primaryKey, req) {
  if (req.type === "delete")
    return req.keys;
  return req.keys || req.values.map(primaryKey.extractKey);
}
var hooksMiddleware = {
  stack: "dbcore",
  name: "HooksMiddleware",
  level: 2,
  create: function (downCore) {
    return __assign(__assign({}, downCore), {
      table: function (tableName) {
        var downTable = downCore.table(tableName);
        var primaryKey = downTable.schema.primaryKey;
        var tableMiddleware = __assign(__assign({}, downTable), {
          mutate: function (req) {
            var dxTrans = PSD.trans;
            var _a2 = dxTrans.table(tableName).hook, deleting = _a2.deleting, creating = _a2.creating, updating = _a2.updating;
            switch (req.type) {
              case "add":
                if (creating.fire === nop)
                  break;
                return dxTrans._promise("readwrite", function () {
                  return addPutOrDelete(req);
                }, true);
              case "put":
                if (creating.fire === nop && updating.fire === nop)
                  break;
                return dxTrans._promise("readwrite", function () {
                  return addPutOrDelete(req);
                }, true);
              case "delete":
                if (deleting.fire === nop)
                  break;
                return dxTrans._promise("readwrite", function () {
                  return addPutOrDelete(req);
                }, true);
              case "deleteRange":
                if (deleting.fire === nop)
                  break;
                return dxTrans._promise("readwrite", function () {
                  return deleteRange(req);
                }, true);
            }
            return downTable.mutate(req);
            function addPutOrDelete(req2) {
              var dxTrans2 = PSD.trans;
              var keys2 = req2.keys || getEffectiveKeys(primaryKey, req2);
              if (!keys2)
                throw new Error("Keys missing");
              req2 = req2.type === "add" || req2.type === "put" ? __assign(__assign({}, req2), { keys: keys2 }) : __assign({}, req2);
              if (req2.type !== "delete")
                req2.values = __spreadArray([], req2.values, true);
              if (req2.keys)
                req2.keys = __spreadArray([], req2.keys, true);
              return getExistingValues(downTable, req2, keys2).then(function (existingValues) {
                var contexts = keys2.map(function (key, i) {
                  var existingValue = existingValues[i];
                  var ctx = { onerror: null, onsuccess: null };
                  if (req2.type === "delete") {
                    deleting.fire.call(ctx, key, existingValue, dxTrans2);
                  } else if (req2.type === "add" || existingValue === void 0) {
                    var generatedPrimaryKey = creating.fire.call(ctx, key, req2.values[i], dxTrans2);
                    if (key == null && generatedPrimaryKey != null) {
                      key = generatedPrimaryKey;
                      req2.keys[i] = key;
                      if (!primaryKey.outbound) {
                        setByKeyPath(req2.values[i], primaryKey.keyPath, key);
                      }
                    }
                  } else {
                    var objectDiff = getObjectDiff(existingValue, req2.values[i]);
                    var additionalChanges_1 = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans2);
                    if (additionalChanges_1) {
                      var requestedValue_1 = req2.values[i];
                      Object.keys(additionalChanges_1).forEach(function (keyPath) {
                        if (hasOwn(requestedValue_1, keyPath)) {
                          requestedValue_1[keyPath] = additionalChanges_1[keyPath];
                        } else {
                          setByKeyPath(requestedValue_1, keyPath, additionalChanges_1[keyPath]);
                        }
                      });
                    }
                  }
                  return ctx;
                });
                return downTable.mutate(req2).then(function (_a3) {
                  var failures = _a3.failures, results = _a3.results, numFailures = _a3.numFailures, lastResult = _a3.lastResult;
                  for (var i = 0; i < keys2.length; ++i) {
                    var primKey = results ? results[i] : keys2[i];
                    var ctx = contexts[i];
                    if (primKey == null) {
                      ctx.onerror && ctx.onerror(failures[i]);
                    } else {
                      ctx.onsuccess && ctx.onsuccess(
                        req2.type === "put" && existingValues[i] ? req2.values[i] : primKey
                      );
                    }
                  }
                  return { failures, results, numFailures, lastResult };
                }).catch(function (error) {
                  contexts.forEach(function (ctx) {
                    return ctx.onerror && ctx.onerror(error);
                  });
                  return Promise.reject(error);
                });
              });
            }
            function deleteRange(req2) {
              return deleteNextChunk(req2.trans, req2.range, 1e4);
            }
            function deleteNextChunk(trans, range, limit) {
              return downTable.query({ trans, values: false, query: { index: primaryKey, range }, limit }).then(function (_a3) {
                var result = _a3.result;
                return addPutOrDelete({ type: "delete", keys: result, trans }).then(function (res) {
                  if (res.numFailures > 0)
                    return Promise.reject(res.failures[0]);
                  if (result.length < limit) {
                    return { failures: [], numFailures: 0, lastResult: void 0 };
                  } else {
                    return deleteNextChunk(trans, __assign(__assign({}, range), { lower: result[result.length - 1], lowerOpen: true }), limit);
                  }
                });
              });
            }
          }
        });
        return tableMiddleware;
      }
    });
  }
};
function getExistingValues(table, req, effectiveKeys) {
  return req.type === "add" ? Promise.resolve([]) : table.getMany({ trans: req.trans, keys: effectiveKeys, cache: "immutable" });
}
function getFromTransactionCache(keys2, cache, clone) {
  try {
    if (!cache)
      return null;
    if (cache.keys.length < keys2.length)
      return null;
    var result = [];
    for (var i = 0, j = 0; i < cache.keys.length && j < keys2.length; ++i) {
      if (cmp(cache.keys[i], keys2[j]) !== 0)
        continue;
      result.push(clone ? deepClone(cache.values[i]) : cache.values[i]);
      ++j;
    }
    return result.length === keys2.length ? result : null;
  } catch (_a2) {
    return null;
  }
}
var cacheExistingValuesMiddleware = {
  stack: "dbcore",
  level: -1,
  create: function (core) {
    return {
      table: function (tableName) {
        var table = core.table(tableName);
        return __assign(__assign({}, table), {
          getMany: function (req) {
            if (!req.cache) {
              return table.getMany(req);
            }
            var cachedResult = getFromTransactionCache(req.keys, req.trans["_cache"], req.cache === "clone");
            if (cachedResult) {
              return DexiePromise.resolve(cachedResult);
            }
            return table.getMany(req).then(function (res) {
              req.trans["_cache"] = {
                keys: req.keys,
                values: req.cache === "clone" ? deepClone(res) : res
              };
              return res;
            });
          }, mutate: function (req) {
            if (req.type !== "add")
              req.trans["_cache"] = null;
            return table.mutate(req);
          }
        });
      }
    };
  }
};
var _a;
function isEmptyRange(node) {
  return !("from" in node);
}
var RangeSet = function (fromOrTree, to) {
  if (this) {
    extend(this, arguments.length ? { d: 1, from: fromOrTree, to: arguments.length > 1 ? to : fromOrTree } : { d: 0 });
  } else {
    var rv = new RangeSet();
    if (fromOrTree && "d" in fromOrTree) {
      extend(rv, fromOrTree);
    }
    return rv;
  }
};
props(RangeSet.prototype, (_a = {
  add: function (rangeSet) {
    mergeRanges(this, rangeSet);
    return this;
  },
  addKey: function (key) {
    addRange(this, key, key);
    return this;
  },
  addKeys: function (keys2) {
    var _this = this;
    keys2.forEach(function (key) {
      return addRange(_this, key, key);
    });
    return this;
  }
}, _a[iteratorSymbol] = function () {
  return getRangeSetIterator(this);
}, _a));
function addRange(target, from, to) {
  var diff = cmp(from, to);
  if (isNaN(diff))
    return;
  if (diff > 0)
    throw RangeError();
  if (isEmptyRange(target))
    return extend(target, { from, to, d: 1 });
  var left = target.l;
  var right = target.r;
  if (cmp(to, target.from) < 0) {
    left ? addRange(left, from, to) : target.l = { from, to, d: 1, l: null, r: null };
    return rebalance(target);
  }
  if (cmp(from, target.to) > 0) {
    right ? addRange(right, from, to) : target.r = { from, to, d: 1, l: null, r: null };
    return rebalance(target);
  }
  if (cmp(from, target.from) < 0) {
    target.from = from;
    target.l = null;
    target.d = right ? right.d + 1 : 1;
  }
  if (cmp(to, target.to) > 0) {
    target.to = to;
    target.r = null;
    target.d = target.l ? target.l.d + 1 : 1;
  }
  var rightWasCutOff = !target.r;
  if (left && !target.l) {
    mergeRanges(target, left);
  }
  if (right && rightWasCutOff) {
    mergeRanges(target, right);
  }
}
function mergeRanges(target, newSet) {
  function _addRangeSet(target2, _a2) {
    var from = _a2.from, to = _a2.to, l = _a2.l, r = _a2.r;
    addRange(target2, from, to);
    if (l)
      _addRangeSet(target2, l);
    if (r)
      _addRangeSet(target2, r);
  }
  if (!isEmptyRange(newSet))
    _addRangeSet(target, newSet);
}
function rangesOverlap(rangeSet1, rangeSet2) {
  var i1 = getRangeSetIterator(rangeSet2);
  var nextResult1 = i1.next();
  if (nextResult1.done)
    return false;
  var a = nextResult1.value;
  var i2 = getRangeSetIterator(rangeSet1);
  var nextResult2 = i2.next(a.from);
  var b = nextResult2.value;
  while (!nextResult1.done && !nextResult2.done) {
    if (cmp(b.from, a.to) <= 0 && cmp(b.to, a.from) >= 0)
      return true;
    cmp(a.from, b.from) < 0 ? a = (nextResult1 = i1.next(b.from)).value : b = (nextResult2 = i2.next(a.from)).value;
  }
  return false;
}
function getRangeSetIterator(node) {
  var state = isEmptyRange(node) ? null : { s: 0, n: node };
  return {
    next: function (key) {
      var keyProvided = arguments.length > 0;
      while (state) {
        switch (state.s) {
          case 0:
            state.s = 1;
            if (keyProvided) {
              while (state.n.l && cmp(key, state.n.from) < 0)
                state = { up: state, n: state.n.l, s: 1 };
            } else {
              while (state.n.l)
                state = { up: state, n: state.n.l, s: 1 };
            }
          case 1:
            state.s = 2;
            if (!keyProvided || cmp(key, state.n.to) <= 0)
              return { value: state.n, done: false };
          case 2:
            if (state.n.r) {
              state.s = 3;
              state = { up: state, n: state.n.r, s: 0 };
              continue;
            }
          case 3:
            state = state.up;
        }
      }
      return { done: true };
    }
  };
}
function rebalance(target) {
  var _a2, _b;
  var diff = (((_a2 = target.r) === null || _a2 === void 0 ? void 0 : _a2.d) || 0) - (((_b = target.l) === null || _b === void 0 ? void 0 : _b.d) || 0);
  var r = diff > 1 ? "r" : diff < -1 ? "l" : "";
  if (r) {
    var l = r === "r" ? "l" : "r";
    var rootClone = __assign({}, target);
    var oldRootRight = target[r];
    target.from = oldRootRight.from;
    target.to = oldRootRight.to;
    target[r] = oldRootRight[r];
    rootClone[r] = oldRootRight[l];
    target[l] = rootClone;
    rootClone.d = computeDepth(rootClone);
  }
  target.d = computeDepth(target);
}
function computeDepth(_a2) {
  var r = _a2.r, l = _a2.l;
  return (r ? l ? Math.max(r.d, l.d) : r.d : l ? l.d : 0) + 1;
}
var observabilityMiddleware = {
  stack: "dbcore",
  level: 0,
  create: function (core) {
    var dbName = core.schema.name;
    var FULL_RANGE = new RangeSet(core.MIN_KEY, core.MAX_KEY);
    return __assign(__assign({}, core), {
      table: function (tableName) {
        var table = core.table(tableName);
        var schema = table.schema;
        var primaryKey = schema.primaryKey;
        var extractKey = primaryKey.extractKey, outbound = primaryKey.outbound;
        var tableClone = __assign(__assign({}, table), {
          mutate: function (req) {
            var trans = req.trans;
            var mutatedParts = trans.mutatedParts || (trans.mutatedParts = {});
            var getRangeSet = function (indexName) {
              var part = "idb://" + dbName + "/" + tableName + "/" + indexName;
              return mutatedParts[part] || (mutatedParts[part] = new RangeSet());
            };
            var pkRangeSet = getRangeSet("");
            var delsRangeSet = getRangeSet(":dels");
            var type2 = req.type;
            var _a2 = req.type === "deleteRange" ? [req.range] : req.type === "delete" ? [req.keys] : req.values.length < 50 ? [[], req.values] : [], keys2 = _a2[0], newObjs = _a2[1];
            var oldCache = req.trans["_cache"];
            return table.mutate(req).then(function (res) {
              if (isArray(keys2)) {
                if (type2 !== "delete")
                  keys2 = res.results;
                pkRangeSet.addKeys(keys2);
                var oldObjs = getFromTransactionCache(keys2, oldCache);
                if (!oldObjs && type2 !== "add") {
                  delsRangeSet.addKeys(keys2);
                }
                if (oldObjs || newObjs) {
                  trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs);
                }
              } else if (keys2) {
                var range = { from: keys2.lower, to: keys2.upper };
                delsRangeSet.add(range);
                pkRangeSet.add(range);
              } else {
                pkRangeSet.add(FULL_RANGE);
                delsRangeSet.add(FULL_RANGE);
                schema.indexes.forEach(function (idx) {
                  return getRangeSet(idx.name).add(FULL_RANGE);
                });
              }
              return res;
            });
          }
        });
        var getRange = function (_a2) {
          var _b, _c;
          var _d = _a2.query, index = _d.index, range = _d.range;
          return [
            index,
            new RangeSet((_b = range.lower) !== null && _b !== void 0 ? _b : core.MIN_KEY, (_c = range.upper) !== null && _c !== void 0 ? _c : core.MAX_KEY)
          ];
        };
        var readSubscribers = {
          get: function (req) {
            return [primaryKey, new RangeSet(req.key)];
          },
          getMany: function (req) {
            return [primaryKey, new RangeSet().addKeys(req.keys)];
          },
          count: getRange,
          query: getRange,
          openCursor: getRange
        };
        keys(readSubscribers).forEach(function (method) {
          tableClone[method] = function (req) {
            var subscr = PSD.subscr;
            if (subscr) {
              var getRangeSet = function (indexName) {
                var part = "idb://" + dbName + "/" + tableName + "/" + indexName;
                return subscr[part] || (subscr[part] = new RangeSet());
              };
              var pkRangeSet_1 = getRangeSet("");
              var delsRangeSet_1 = getRangeSet(":dels");
              var _a2 = readSubscribers[method](req), queriedIndex = _a2[0], queriedRanges = _a2[1];
              getRangeSet(queriedIndex.name || "").add(queriedRanges);
              if (!queriedIndex.isPrimaryKey) {
                if (method === "count") {
                  delsRangeSet_1.add(FULL_RANGE);
                } else {
                  var keysPromise_1 = method === "query" && outbound && req.values && table.query(__assign(__assign({}, req), { values: false }));
                  return table[method].apply(this, arguments).then(function (res) {
                    if (method === "query") {
                      if (outbound && req.values) {
                        return keysPromise_1.then(function (_a3) {
                          var resultingKeys = _a3.result;
                          pkRangeSet_1.addKeys(resultingKeys);
                          return res;
                        });
                      }
                      var pKeys = req.values ? res.result.map(extractKey) : res.result;
                      if (req.values) {
                        pkRangeSet_1.addKeys(pKeys);
                      } else {
                        delsRangeSet_1.addKeys(pKeys);
                      }
                    } else if (method === "openCursor") {
                      var cursor_1 = res;
                      var wantValues_1 = req.values;
                      return cursor_1 && Object.create(cursor_1, {
                        key: {
                          get: function () {
                            delsRangeSet_1.addKey(cursor_1.primaryKey);
                            return cursor_1.key;
                          }
                        },
                        primaryKey: {
                          get: function () {
                            var pkey = cursor_1.primaryKey;
                            delsRangeSet_1.addKey(pkey);
                            return pkey;
                          }
                        },
                        value: {
                          get: function () {
                            wantValues_1 && pkRangeSet_1.addKey(cursor_1.primaryKey);
                            return cursor_1.value;
                          }
                        }
                      });
                    }
                    return res;
                  });
                }
              }
            }
            return table[method].apply(this, arguments);
          };
        });
        return tableClone;
      }
    });
  }
};
function trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs) {
  function addAffectedIndex(ix) {
    var rangeSet = getRangeSet(ix.name || "");
    function extractKey(obj) {
      return obj != null ? ix.extractKey(obj) : null;
    }
    var addKeyOrKeys = function (key) {
      return ix.multiEntry && isArray(key) ? key.forEach(function (key2) {
        return rangeSet.addKey(key2);
      }) : rangeSet.addKey(key);
    };
    (oldObjs || newObjs).forEach(function (_, i) {
      var oldKey = oldObjs && extractKey(oldObjs[i]);
      var newKey = newObjs && extractKey(newObjs[i]);
      if (cmp(oldKey, newKey) !== 0) {
        if (oldKey != null)
          addKeyOrKeys(oldKey);
        if (newKey != null)
          addKeyOrKeys(newKey);
      }
    });
  }
  schema.indexes.forEach(addAffectedIndex);
}
var Dexie$1 = function () {
  function Dexie2(name, options) {
    var _this = this;
    this._middlewares = {};
    this.verno = 0;
    var deps = Dexie2.dependencies;
    this._options = options = __assign({
      addons: Dexie2.addons,
      autoOpen: true,
      indexedDB: deps.indexedDB,
      IDBKeyRange: deps.IDBKeyRange
    }, options);
    this._deps = {
      indexedDB: options.indexedDB,
      IDBKeyRange: options.IDBKeyRange
    };
    var addons = options.addons;
    this._dbSchema = {};
    this._versions = [];
    this._storeNames = [];
    this._allTables = {};
    this.idbdb = null;
    this._novip = this;
    var state = {
      dbOpenError: null,
      isBeingOpened: false,
      onReadyBeingFired: null,
      openComplete: false,
      dbReadyResolve: nop,
      dbReadyPromise: null,
      cancelOpen: nop,
      openCanceller: null,
      autoSchema: true,
      PR1398_maxLoop: 3
    };
    state.dbReadyPromise = new DexiePromise(function (resolve) {
      state.dbReadyResolve = resolve;
    });
    state.openCanceller = new DexiePromise(function (_, reject) {
      state.cancelOpen = reject;
    });
    this._state = state;
    this.name = name;
    this.on = Events(this, "populate", "blocked", "versionchange", "close", { ready: [promisableChain, nop] });
    this.on.ready.subscribe = override(this.on.ready.subscribe, function (subscribe) {
      return function (subscriber, bSticky) {
        Dexie2.vip(function () {
          var state2 = _this._state;
          if (state2.openComplete) {
            if (!state2.dbOpenError)
              DexiePromise.resolve().then(subscriber);
            if (bSticky)
              subscribe(subscriber);
          } else if (state2.onReadyBeingFired) {
            state2.onReadyBeingFired.push(subscriber);
            if (bSticky)
              subscribe(subscriber);
          } else {
            subscribe(subscriber);
            var db_1 = _this;
            if (!bSticky)
              subscribe(function unsubscribe() {
                db_1.on.ready.unsubscribe(subscriber);
                db_1.on.ready.unsubscribe(unsubscribe);
              });
          }
        });
      };
    });
    this.Collection = createCollectionConstructor(this);
    this.Table = createTableConstructor(this);
    this.Transaction = createTransactionConstructor(this);
    this.Version = createVersionConstructor(this);
    this.WhereClause = createWhereClauseConstructor(this);
    this.on("versionchange", function (ev) {
      if (ev.newVersion > 0)
        console.warn("Another connection wants to upgrade database '" + _this.name + "'. Closing db now to resume the upgrade.");
      else
        console.warn("Another connection wants to delete database '" + _this.name + "'. Closing db now to resume the delete request.");
      _this.close();
    });
    this.on("blocked", function (ev) {
      if (!ev.newVersion || ev.newVersion < ev.oldVersion)
        console.warn("Dexie.delete('" + _this.name + "') was blocked");
      else
        console.warn("Upgrade '" + _this.name + "' blocked by other connection holding version " + ev.oldVersion / 10);
    });
    this._maxKey = getMaxKey(options.IDBKeyRange);
    this._createTransaction = function (mode, storeNames, dbschema, parentTransaction) {
      return new _this.Transaction(mode, storeNames, dbschema, _this._options.chromeTransactionDurability, parentTransaction);
    };
    this._fireOnBlocked = function (ev) {
      _this.on("blocked").fire(ev);
      connections.filter(function (c) {
        return c.name === _this.name && c !== _this && !c._state.vcFired;
      }).map(function (c) {
        return c.on("versionchange").fire(ev);
      });
    };
    this.use(virtualIndexMiddleware);
    this.use(hooksMiddleware);
    this.use(observabilityMiddleware);
    this.use(cacheExistingValuesMiddleware);
    this.vip = Object.create(this, { _vip: { value: true } });
    addons.forEach(function (addon) {
      return addon(_this);
    });
  }
  Dexie2.prototype.version = function (versionNumber) {
    if (isNaN(versionNumber) || versionNumber < 0.1)
      throw new exceptions.Type("Given version is not a positive number");
    versionNumber = Math.round(versionNumber * 10) / 10;
    if (this.idbdb || this._state.isBeingOpened)
      throw new exceptions.Schema("Cannot add version when database is open");
    this.verno = Math.max(this.verno, versionNumber);
    var versions = this._versions;
    var versionInstance = versions.filter(function (v) {
      return v._cfg.version === versionNumber;
    })[0];
    if (versionInstance)
      return versionInstance;
    versionInstance = new this.Version(versionNumber);
    versions.push(versionInstance);
    versions.sort(lowerVersionFirst);
    versionInstance.stores({});
    this._state.autoSchema = false;
    return versionInstance;
  };
  Dexie2.prototype._whenReady = function (fn) {
    var _this = this;
    return this.idbdb && (this._state.openComplete || PSD.letThrough || this._vip) ? fn() : new DexiePromise(function (resolve, reject) {
      if (_this._state.openComplete) {
        return reject(new exceptions.DatabaseClosed(_this._state.dbOpenError));
      }
      if (!_this._state.isBeingOpened) {
        if (!_this._options.autoOpen) {
          reject(new exceptions.DatabaseClosed());
          return;
        }
        _this.open().catch(nop);
      }
      _this._state.dbReadyPromise.then(resolve, reject);
    }).then(fn);
  };
  Dexie2.prototype.use = function (_a2) {
    var stack = _a2.stack, create = _a2.create, level = _a2.level, name = _a2.name;
    if (name)
      this.unuse({ stack, name });
    var middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
    middlewares.push({ stack, create, level: level == null ? 10 : level, name });
    middlewares.sort(function (a, b) {
      return a.level - b.level;
    });
    return this;
  };
  Dexie2.prototype.unuse = function (_a2) {
    var stack = _a2.stack, name = _a2.name, create = _a2.create;
    if (stack && this._middlewares[stack]) {
      this._middlewares[stack] = this._middlewares[stack].filter(function (mw) {
        return create ? mw.create !== create : name ? mw.name !== name : false;
      });
    }
    return this;
  };
  Dexie2.prototype.open = function () {
    return dexieOpen(this);
  };
  Dexie2.prototype._close = function () {
    var state = this._state;
    var idx = connections.indexOf(this);
    if (idx >= 0)
      connections.splice(idx, 1);
    if (this.idbdb) {
      try {
        this.idbdb.close();
      } catch (e) {
      }
      this._novip.idbdb = null;
    }
    state.dbReadyPromise = new DexiePromise(function (resolve) {
      state.dbReadyResolve = resolve;
    });
    state.openCanceller = new DexiePromise(function (_, reject) {
      state.cancelOpen = reject;
    });
  };
  Dexie2.prototype.close = function () {
    this._close();
    var state = this._state;
    this._options.autoOpen = false;
    state.dbOpenError = new exceptions.DatabaseClosed();
    if (state.isBeingOpened)
      state.cancelOpen(state.dbOpenError);
  };
  Dexie2.prototype.delete = function () {
    var _this = this;
    var hasArguments = arguments.length > 0;
    var state = this._state;
    return new DexiePromise(function (resolve, reject) {
      var doDelete = function () {
        _this.close();
        var req = _this._deps.indexedDB.deleteDatabase(_this.name);
        req.onsuccess = wrap(function () {
          _onDatabaseDeleted(_this._deps, _this.name);
          resolve();
        });
        req.onerror = eventRejectHandler(reject);
        req.onblocked = _this._fireOnBlocked;
      };
      if (hasArguments)
        throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");
      if (state.isBeingOpened) {
        state.dbReadyPromise.then(doDelete);
      } else {
        doDelete();
      }
    });
  };
  Dexie2.prototype.backendDB = function () {
    return this.idbdb;
  };
  Dexie2.prototype.isOpen = function () {
    return this.idbdb !== null;
  };
  Dexie2.prototype.hasBeenClosed = function () {
    var dbOpenError = this._state.dbOpenError;
    return dbOpenError && dbOpenError.name === "DatabaseClosed";
  };
  Dexie2.prototype.hasFailed = function () {
    return this._state.dbOpenError !== null;
  };
  Dexie2.prototype.dynamicallyOpened = function () {
    return this._state.autoSchema;
  };
  Object.defineProperty(Dexie2.prototype, "tables", {
    get: function () {
      var _this = this;
      return keys(this._allTables).map(function (name) {
        return _this._allTables[name];
      });
    },
    enumerable: false,
    configurable: true
  });
  Dexie2.prototype.transaction = function () {
    var args = extractTransactionArgs.apply(this, arguments);
    return this._transaction.apply(this, args);
  };
  Dexie2.prototype._transaction = function (mode, tables, scopeFunc) {
    var _this = this;
    var parentTransaction = PSD.trans;
    if (!parentTransaction || parentTransaction.db !== this || mode.indexOf("!") !== -1)
      parentTransaction = null;
    var onlyIfCompatible = mode.indexOf("?") !== -1;
    mode = mode.replace("!", "").replace("?", "");
    var idbMode, storeNames;
    try {
      storeNames = tables.map(function (table) {
        var storeName = table instanceof _this.Table ? table.name : table;
        if (typeof storeName !== "string")
          throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
        return storeName;
      });
      if (mode == "r" || mode === READONLY)
        idbMode = READONLY;
      else if (mode == "rw" || mode == READWRITE)
        idbMode = READWRITE;
      else
        throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
      if (parentTransaction) {
        if (parentTransaction.mode === READONLY && idbMode === READWRITE) {
          if (onlyIfCompatible) {
            parentTransaction = null;
          } else
            throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
        }
        if (parentTransaction) {
          storeNames.forEach(function (storeName) {
            if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
              if (onlyIfCompatible) {
                parentTransaction = null;
              } else
                throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
            }
          });
        }
        if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
          parentTransaction = null;
        }
      }
    } catch (e) {
      return parentTransaction ? parentTransaction._promise(null, function (_, reject) {
        reject(e);
      }) : rejection(e);
    }
    var enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
    return parentTransaction ? parentTransaction._promise(idbMode, enterTransaction, "lock") : PSD.trans ? usePSD(PSD.transless, function () {
      return _this._whenReady(enterTransaction);
    }) : this._whenReady(enterTransaction);
  };
  Dexie2.prototype.table = function (tableName) {
    if (!hasOwn(this._allTables, tableName)) {
      throw new exceptions.InvalidTable("Table " + tableName + " does not exist");
    }
    return this._allTables[tableName];
  };
  return Dexie2;
}();
var symbolObservable = typeof Symbol !== "undefined" && "observable" in Symbol ? Symbol.observable : "@@observable";
var Observable = function () {
  function Observable2(subscribe) {
    this._subscribe = subscribe;
  }
  Observable2.prototype.subscribe = function (x, error, complete) {
    return this._subscribe(!x || typeof x === "function" ? { next: x, error, complete } : x);
  };
  Observable2.prototype[symbolObservable] = function () {
    return this;
  };
  return Observable2;
}();
function extendObservabilitySet(target, newSet) {
  keys(newSet).forEach(function (part) {
    var rangeSet = target[part] || (target[part] = new RangeSet());
    mergeRanges(rangeSet, newSet[part]);
  });
  return target;
}
function liveQuery(querier) {
  return new Observable(function (observer) {
    var scopeFuncIsAsync = isAsyncFunction(querier);
    function execute(subscr) {
      if (scopeFuncIsAsync) {
        incrementExpectedAwaits();
      }
      var exec = function () {
        return newScope(querier, { subscr, trans: null });
      };
      var rv = PSD.trans ? usePSD(PSD.transless, exec) : exec();
      if (scopeFuncIsAsync) {
        rv.then(decrementExpectedAwaits, decrementExpectedAwaits);
      }
      return rv;
    }
    var closed = false;
    var accumMuts = {};
    var currentObs = {};
    var subscription = {
      get closed() {
        return closed;
      },
      unsubscribe: function () {
        closed = true;
        globalEvents.storagemutated.unsubscribe(mutationListener);
      }
    };
    observer.start && observer.start(subscription);
    var querying = false, startedListening = false;
    function shouldNotify() {
      return keys(currentObs).some(function (key) {
        return accumMuts[key] && rangesOverlap(accumMuts[key], currentObs[key]);
      });
    }
    var mutationListener = function (parts) {
      extendObservabilitySet(accumMuts, parts);
      if (shouldNotify()) {
        doQuery();
      }
    };
    var doQuery = function () {
      if (querying || closed)
        return;
      accumMuts = {};
      var subscr = {};
      var ret = execute(subscr);
      if (!startedListening) {
        globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, mutationListener);
        startedListening = true;
      }
      querying = true;
      Promise.resolve(ret).then(function (result) {
        querying = false;
        if (closed)
          return;
        if (shouldNotify()) {
          doQuery();
        } else {
          accumMuts = {};
          currentObs = subscr;
          observer.next && observer.next(result);
        }
      }, function (err) {
        querying = false;
        observer.error && observer.error(err);
        subscription.unsubscribe();
      });
    };
    doQuery();
    return subscription;
  });
}
var domDeps;
try {
  domDeps = {
    indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
    IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
  };
} catch (e) {
  domDeps = { indexedDB: null, IDBKeyRange: null };
}
var Dexie = Dexie$1;
props(Dexie, __assign(__assign({}, fullNameExceptions), {
  delete: function (databaseName) {
    var db2 = new Dexie(databaseName, { addons: [] });
    return db2.delete();
  },
  exists: function (name) {
    return new Dexie(name, { addons: [] }).open().then(function (db2) {
      db2.close();
      return true;
    }).catch("NoSuchDatabaseError", function () {
      return false;
    });
  },
  getDatabaseNames: function (cb) {
    try {
      return getDatabaseNames(Dexie.dependencies).then(cb);
    } catch (_a2) {
      return rejection(new exceptions.MissingAPI());
    }
  },
  defineClass: function () {
    function Class(content) {
      extend(this, content);
    }
    return Class;
  },
  ignoreTransaction: function (scopeFunc) {
    return PSD.trans ? usePSD(PSD.transless, scopeFunc) : scopeFunc();
  },
  vip,
  async: function (generatorFn) {
    return function () {
      try {
        var rv = awaitIterator(generatorFn.apply(this, arguments));
        if (!rv || typeof rv.then !== "function")
          return DexiePromise.resolve(rv);
        return rv;
      } catch (e) {
        return rejection(e);
      }
    };
  },
  spawn: function (generatorFn, args, thiz) {
    try {
      var rv = awaitIterator(generatorFn.apply(thiz, args || []));
      if (!rv || typeof rv.then !== "function")
        return DexiePromise.resolve(rv);
      return rv;
    } catch (e) {
      return rejection(e);
    }
  },
  currentTransaction: {
    get: function () {
      return PSD.trans || null;
    }
  },
  waitFor: function (promiseOrFunction, optionalTimeout) {
    var promise = DexiePromise.resolve(typeof promiseOrFunction === "function" ? Dexie.ignoreTransaction(promiseOrFunction) : promiseOrFunction).timeout(optionalTimeout || 6e4);
    return PSD.trans ? PSD.trans.waitFor(promise) : promise;
  },
  Promise: DexiePromise,
  debug: {
    get: function () {
      return debug;
    },
    set: function (value) {
      setDebug(value, value === "dexie" ? function () {
        return true;
      } : dexieStackFrameFilter);
    }
  },
  derive,
  extend,
  props,
  override,
  Events,
  on: globalEvents,
  liveQuery,
  extendObservabilitySet,
  getByKeyPath,
  setByKeyPath,
  delByKeyPath,
  shallowClone,
  deepClone,
  getObjectDiff,
  cmp,
  asap: asap$1,
  minKey,
  addons: [],
  connections,
  errnames,
  dependencies: domDeps,
  semVer: DEXIE_VERSION,
  version: DEXIE_VERSION.split(".").map(function (n) {
    return parseInt(n);
  }).reduce(function (p, c, i) {
    return p + c / Math.pow(10, i * 2);
  })
}));
Dexie.maxKey = getMaxKey(Dexie.dependencies.IDBKeyRange);
if (typeof dispatchEvent !== "undefined" && typeof addEventListener !== "undefined") {
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function (updatedParts) {
    if (!propagatingLocally) {
      var event_1;
      if (isIEOrEdge) {
        event_1 = document.createEvent("CustomEvent");
        event_1.initCustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, true, true, updatedParts);
      } else {
        event_1 = new CustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, {
          detail: updatedParts
        });
      }
      propagatingLocally = true;
      dispatchEvent(event_1);
      propagatingLocally = false;
    }
  });
  addEventListener(STORAGE_MUTATED_DOM_EVENT_NAME, function (_a2) {
    var detail = _a2.detail;
    if (!propagatingLocally) {
      propagateLocally(detail);
    }
  });
}
function propagateLocally(updateParts) {
  var wasMe = propagatingLocally;
  try {
    propagatingLocally = true;
    globalEvents.storagemutated.fire(updateParts);
  } finally {
    propagatingLocally = wasMe;
  }
}
var propagatingLocally = false;
if (typeof BroadcastChannel !== "undefined") {
  var bc_1 = new BroadcastChannel(STORAGE_MUTATED_DOM_EVENT_NAME);
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function (changedParts) {
    if (!propagatingLocally) {
      bc_1.postMessage(changedParts);
    }
  });
  bc_1.onmessage = function (ev) {
    if (ev.data)
      propagateLocally(ev.data);
  };
} else if (typeof self !== "undefined" && typeof navigator !== "undefined") {
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function (changedParts) {
    try {
      if (!propagatingLocally) {
        if (typeof localStorage !== "undefined") {
          localStorage.setItem(STORAGE_MUTATED_DOM_EVENT_NAME, JSON.stringify({
            trig: Math.random(),
            changedParts
          }));
        }
        if (typeof self["clients"] === "object") {
          __spreadArray([], self["clients"].matchAll({ includeUncontrolled: true }), true).forEach(function (client) {
            return client.postMessage({
              type: STORAGE_MUTATED_DOM_EVENT_NAME,
              changedParts
            });
          });
        }
      }
    } catch (_a2) {
    }
  });
  if (typeof addEventListener !== "undefined") {
    addEventListener("storage", function (ev) {
      if (ev.key === STORAGE_MUTATED_DOM_EVENT_NAME) {
        var data = JSON.parse(ev.newValue);
        if (data)
          propagateLocally(data.changedParts);
      }
    });
  }
  var swContainer = self.document && navigator.serviceWorker;
  if (swContainer) {
    swContainer.addEventListener("message", propagateMessageLocally);
  }
}
function propagateMessageLocally(_a2) {
  var data = _a2.data;
  if (data && data.type === STORAGE_MUTATED_DOM_EVENT_NAME) {
    propagateLocally(data.changedParts);
  }
}
DexiePromise.rejectionMapper = mapError;
setDebug(debug, dexieStackFrameFilter);
var FilamentStatus = /* @__PURE__ */ ((FilamentStatus2) => {
  FilamentStatus2["available"] = "available";
  FilamentStatus2["loaded"] = "loaded";
  FilamentStatus2["depleted"] = "depleted";
  return FilamentStatus2;
})(FilamentStatus || {});
class Filament {
  constructor(id, brand, material, color, cost, currency, weightTotal, weightPrinted, density, diameter, dateBought, nozzleTemperature, bedTemperature, filamentDepletedCutoff) {
    __publicField(this, "id");
    __publicField(this, "brand");
    __publicField(this, "material");
    __publicField(this, "color");
    __publicField(this, "cost");
    __publicField(this, "currency");
    __publicField(this, "status");
    __publicField(this, "weightTotal");
    __publicField(this, "weightPrinted");
    __publicField(this, "density");
    __publicField(this, "diameter");
    __publicField(this, "dateBought");
    __publicField(this, "nozzleTemperature");
    __publicField(this, "bedTemperature");
    __publicField(this, "filamentDepletedCutoff");
    this.id = id;
    this.brand = brand;
    this.material = material;
    this.color = color;
    this.cost = cost;
    this.currency = currency;
    this.status = "loaded";
    this.weightTotal = weightTotal;
    this.weightPrinted = weightPrinted;
    this.diameter = diameter;
    this.density = density;
    this.dateBought = dateBought;
    this.nozzleTemperature = nozzleTemperature;
    this.bedTemperature = bedTemperature;
    this.filamentDepletedCutoff = filamentDepletedCutoff;
    if (this.weightTotal - this.weightPrinted < this.filamentDepletedCutoff) {
      this.status = "depleted";
    }
  }
  get name() {
    return `${this.brand} ${this.material}`;
  }
  get percentRemaining() {
    return Math.round((this.weightTotal - this.weightPrinted) / this.weightTotal * 100);
  }
  get percentPrinted() {
    return Math.round(this.weightPrinted / this.weightTotal * 100);
  }
  get weightRemaining() {
    return this.weightTotal - this.weightPrinted;
  }
  get costPrinted() {
    return this.cost - this.percentRemaining * this.cost;
  }
  get costRemaining() {
    return this.percentRemaining * this.cost;
  }
  save(changes) {
    db.filaments.update(this.id, changes);
  }
  add() {
    db.filaments.add(this);
  }
  remove() {
    db.filaments.delete(this.id);
  }
  toString() {
    return `${this.brand} ${this.material} status: ${this.status}`;
  }
}
class NanoFactoryFile {
  constructor(id, fileName, parentDir, isWorkSpaceFile, uploaderName, type2) {
    __publicField(this, "id");
    __publicField(this, "fileName");
    __publicField(this, "parentDir");
    __publicField(this, "isWorkSpaceFile");
    __publicField(this, "type");
    __publicField(this, "uploaderName");
    __publicField(this, "fileContent");
    this.id = id;
    this.fileName = fileName;
    this.parentDir = parentDir;
    this.isWorkSpaceFile = isWorkSpaceFile;
    this.uploaderName = uploaderName;
    this.type = type2;
  }
  save(changes) {
    db.nanofactoryFiles.update(this.id, changes);
  }
  add() {
    db.nanofactoryFiles.add(this);
  }
  remove() {
    db.nanofactoryFiles.delete(this.id);
  }
}
class Networking {
  constructor(id) {
    __publicField(this, "id");
    __publicField(this, "peerID");
    __publicField(this, "apiKey");
    __publicField(this, "masterPeerID");
    this.id = id;
  }
  async save(changes) {
    await db.networking.update(this.id, changes);
  }
  async add() {
    await db.networking.add(this);
  }
  remove() {
    db.networking.delete(this.id);
  }
}
var PrinterStatus = /* @__PURE__ */ ((PrinterStatus2) => {
  PrinterStatus2["operational"] = "Operational";
  PrinterStatus2["offline"] = "Offline";
  PrinterStatus2["printing"] = "Printing";
  PrinterStatus2["error"] = "Error";
  PrinterStatus2["paused"] = "Paused";
  return PrinterStatus2;
})(PrinterStatus || {});
var QueuePausedReason = /* @__PURE__ */ ((QueuePausedReason2) => {
  QueuePausedReason2["printerOffline"] = "Printer is offline";
  QueuePausedReason2["printerError"] = "Printer is in error state";
  QueuePausedReason2["printerPaused"] = "User has paused the queue";
  QueuePausedReason2["noFilament"] = "No filament is loaded";
  QueuePausedReason2["depletedFilament"] = "Filament is depleted";
  QueuePausedReason2["filamentMismatch"] = "Assigned filament does not match the one loaded";
  QueuePausedReason2["printPaused"] = "Current print has been paused";
  QueuePausedReason2["printCompletion"] = "Print has been completed";
  QueuePausedReason2["printCancelled"] = "Print has been cancelled";
  QueuePausedReason2["printFailed"] = "Print has failed";
  QueuePausedReason2["noJob"] = "Printer has not been assigned a job";
  QueuePausedReason2["queueNotPaused"] = "";
  return QueuePausedReason2;
})(QueuePausedReason || {});
class Printer {
  constructor(id) {
    __publicField(this, "id");
    __publicField(this, "name");
    __publicField(this, "color");
    __publicField(this, "model");
    __publicField(this, "volume");
    __publicField(this, "heatedBed");
    __publicField(this, "heatedChamber");
    __publicField(this, "axes");
    __publicField(this, "extruder");
    __publicField(this, "state");
    __publicField(this, "bedLevellingGraph");
    __publicField(this, "position");
    __publicField(this, "connectionOptions");
    __publicField(this, "temperatureHistory");
    __publicField(this, "filamentID");
    __publicField(this, "isQueuePaused");
    __publicField(this, "queuePausedReason");
    __publicField(this, "nanofactoryInstallDate");
    this.id = id;
    this.name = "";
    this.model = "";
    this.volume = {
      formFactor: "rectangular",
      origin: "center",
      width: 0,
      depth: 0,
      height: 0,
      custom_box: false
    };
    this.heatedBed = true;
    this.heatedChamber = false;
    this.nanofactoryInstallDate = new Date();
    this.state = {
      status: "Offline"
    };
    this.connectionOptions = {
      ports: [],
      baudrates: [],
      printerProfiles: [],
      portPreference: "auto",
      baudratePreference: "auto",
      printerProfilePreference: "_default",
      autoconnect: false
    };
    this.temperatureHistory = [];
    this.axes = {
      x: { inverted: false, speed: 0 },
      y: { inverted: false, speed: 0 },
      z: { inverted: false, speed: 0 },
      e: { inverted: false, speed: 0 }
    };
    this.extruder = {
      count: 1,
      offsets: []
    };
    this.position = {
      x: 0,
      y: 0,
      z: 0,
      e: 0,
      relative: false,
      speed: 0
    };
    this.filamentID = "";
    this.isQueuePaused = true;
    this.queuePausedReason = "Printer has not been assigned a job";
  }
  async save(changes) {
    await db.printer.update(this.id, changes);
  }
  async add() {
    await db.printer.add(this);
  }
  remove() {
    db.printer.delete(this.id);
  }
  toString() {
    return `${this.model} ${this.name} status: ${this.state.status}`;
  }
}
var PrintJobStatus = /* @__PURE__ */ ((PrintJobStatus2) => {
  PrintJobStatus2["TOPRINT"] = "To Print";
  PrintJobStatus2["PRINTING"] = "Printing";
  PrintJobStatus2["DONE"] = "Done";
  PrintJobStatus2["FAILED"] = "Failed";
  PrintJobStatus2["CANCELLED"] = "Cancelled";
  return PrintJobStatus2;
})(PrintJobStatus || {});
class PrintJob {
  constructor(id, printerID, jobName, assignerName, estimatedPrintTime, estimatedFilamentUsage, createdDate, queuePosition, file, filamentID) {
    __publicField(this, "id");
    __publicField(this, "printerID");
    __publicField(this, "jobName");
    __publicField(this, "status");
    __publicField(this, "assignerName");
    __publicField(this, "estimatedPrintTime");
    __publicField(this, "lastPrintTime");
    __publicField(this, "estimatedFilamentUsage");
    __publicField(this, "actualFilamentUsage");
    __publicField(this, "progress");
    __publicField(this, "createdDate");
    __publicField(this, "startTime");
    __publicField(this, "endTime");
    __publicField(this, "queuePosition");
    __publicField(this, "file");
    __publicField(this, "filamentID");
    this.id = id;
    this.printerID = printerID;
    this.jobName = jobName;
    this.status = "To Print";
    this.assignerName = assignerName;
    this.estimatedPrintTime = estimatedPrintTime != null ? estimatedPrintTime : 0;
    this.estimatedFilamentUsage = estimatedFilamentUsage != null ? estimatedFilamentUsage : { length: 0, volume: 0 };
    this.actualFilamentUsage = { length: 0, volume: 0 };
    this.createdDate = createdDate != null ? createdDate : new Date().toISOString();
    this.progress = {
      completion: 0,
      filePosition: 0,
      printTime: 0,
      printTimeLeft: 0
    };
    this.queuePosition = queuePosition;
    this.file = file;
    this.filamentID = filamentID;
  }
  async calculatePosition() {
    let lastPosition = 0;
    let printJobs = await db.printQueue.reverse().sortBy("queuePosition");
    if (printJobs.length > 0) {
      lastPosition = printJobs[0].queuePosition;
    }
    this.queuePosition = lastPosition + 1;
  }
  async add(table) {
    if (table === "printQueue") {
      await this.calculatePosition();
      db.printQueue.add(this);
    } else {
      console.log("Add to jobs history called");
      db.jobsHistory.add(this);
    }
  }
  remove(table) {
    if (table === "printQueue") {
      db.printQueue.delete(this.id);
    } else {
      db.jobsHistory.delete(this.id);
    }
  }
  async save(table, changes) {
    if (table === "printQueue") {
      await db.printQueue.update(this.id, changes);
    } else {
      db.jobsHistory.update(this.id, changes);
    }
  }
  async getEstimatedFilamentWeight() {
    let filament = await db.filaments.get(this.filamentID);
    if (filament) {
      return filament.density * this.estimatedFilamentUsage.volume;
    } else {
      return 0;
    }
  }
  async getUsedFilamentWeight() {
    let filament = await db.filaments.get(this.filamentID);
    if (filament) {
      return filament.density * this.actualFilamentUsage.volume;
    } else {
      return 0;
    }
  }
  toString() {
    return `${this.jobName}`;
  }
}
class Action {
  constructor(id, name, script, filamentAction) {
    __publicField(this, "id");
    __publicField(this, "name");
    __publicField(this, "printerID");
    __publicField(this, "script");
    __publicField(this, "filamentAction");
    __publicField(this, "execute");
    this.id = id;
    this.name = name;
    this.printerID = networking.peerID;
    this.script = script;
    this.filamentAction = filamentAction;
    this.execute = false;
  }
  save(changes) {
    db.actions.update(this.id, changes);
  }
  add() {
    db.actions.add(this);
  }
  remove() {
    db.actions.delete(this.id);
  }
  toString() {
    return `${this.name}`;
  }
}
class NanofactoryDatabase extends Dexie$1 {
  constructor() {
    super("NanofactoryDatabase");
    __publicField(this, "printer");
    __publicField(this, "networking");
    __publicField(this, "printQueue");
    __publicField(this, "filaments");
    __publicField(this, "nanofactoryFiles");
    __publicField(this, "nanofactoryPeers");
    __publicField(this, "jobsHistory");
    __publicField(this, "actions");
    this.version(1.3).stores({
      printer: "id",
      networking: "id, peerID, apiKey",
      printQueue: "id,filamentID, queuePosition",
      filaments: "id",
      nanofactoryFiles: "id, filename",
      nanofactoryPeers: "id, available, whitelisted, blacklisted",
      jobsHistory: "id, status, createdDate, filamentID",
      actions: "id, name"
    });
    this.version(1.2).stores({
      printer: "id",
      networking: "id, peerID, apiKey",
      printQueue: "id,filamentID, queuePosition",
      filaments: "id",
      nanofactoryFiles: "id, filename",
      nanofactoryPeers: "id, available, whitelisted, blacklisted",
      jobsHistory: "id, status, createdDate, filamentID"
    });
    this.version(1.1).stores({
      printer: "id",
      networking: "id, peerID, apiKey",
      printQueue: "id,filamentID",
      filaments: "id",
      nanofactoryFiles: "id, filename",
      nanofactoryPeers: "id, available, whitelisted, blacklisted"
    });
    this.version(1).stores({
      printer: "id",
      networking: "id, peerID, apiKey",
      printQueue: "id,filamentID",
      filaments: "id",
      nanofactoryFiles: "id, filename"
    });
    this.printer.mapToClass(Printer);
    this.networking.mapToClass(Networking);
    this.printQueue.mapToClass(PrintJob);
    this.filaments.mapToClass(Filament);
    this.nanofactoryFiles.mapToClass(NanoFactoryFile);
    this.nanofactoryPeers.mapToClass(NanoFactoryPeers);
    this.jobsHistory.mapToClass(PrintJob);
    this.actions.mapToClass(Action);
  }
}
let db;
async function loadDatabase() {
  db = new NanofactoryDatabase();
  db.open();
}
var NanoFactoryPeerType = /* @__PURE__ */ ((NanoFactoryPeerType2) => {
  NanoFactoryPeerType2["AVAILABLE"] = "available";
  NanoFactoryPeerType2["WHITELISTED"] = "whitelisted";
  NanoFactoryPeerType2["BLACKLISTED"] = "blacklisted";
  return NanoFactoryPeerType2;
})(NanoFactoryPeerType || {});
class NanoFactoryPeers {
  constructor() {
    __publicField(this, "id");
    __publicField(this, "whitelisted");
    __publicField(this, "blacklisted");
    __publicField(this, "available");
    this.id = "1";
    this.whitelisted = /* @__PURE__ */ new Set([]);
    this.blacklisted = /* @__PURE__ */ new Set([]);
    this.available = /* @__PURE__ */ new Set([]);
  }
  async save(changes) {
    await db.nanofactoryPeers.update(this.id, changes);
  }
  async add() {
    await db.nanofactoryPeers.add(this);
  }
  remove() {
    db.nanofactoryPeers.delete(this.id);
  }
}
async function handleSecurityTasks(data, peerID, label, _metadata) {
  switch (label) {
    case ConnectionLabels.peerPermissionResponse:
      if (peerID === networking.masterPeerID) {
        if (data["accept"]) {
          addToList(NanoFactoryPeerType.WHITELISTED, data["peerID"]);
          handleSyncAllRequest(data["peerID"]);
        } else {
          addToList(NanoFactoryPeerType.BLACKLISTED, data["peerID"]);
        }
      }
      break;
    case ConnectionLabels.peerListModification:
      if (peerID === networking.masterPeerID) {
        if (data["action"] === "add") {
          addToList(data["peerType"], data["peerID"]);
        } else if (data["action"] === "delete") {
          removeFromList(data["peerType"], data["peerID"]);
        }
        sendData(networking.masterPeerID, data, ConnectionLabels.peerListModification);
      }
      break;
  }
}
async function addToList(listType, peerID) {
  nanofactoryPeersObject[listType].add(peerID);
  if (listType === NanoFactoryPeerType.WHITELISTED) {
    nanofactoryPeersObject[NanoFactoryPeerType.AVAILABLE].add(peerID);
  }
  await nanofactoryPeersObject.save(nanofactoryPeersObject);
}
async function removeFromList(listType, peerID) {
  nanofactoryPeersObject[listType].delete(peerID);
  if (listType === NanoFactoryPeerType.WHITELISTED) {
    nanofactoryPeersObject[NanoFactoryPeerType.AVAILABLE].delete(peerID);
  }
  console.log("remove from list called");
  await nanofactoryPeersObject.save(nanofactoryPeersObject);
}
function sendData(peerID, data, label) {
  const options = {
    label,
    metadata: peerID,
    serialization: "json",
    reliable: true
  };
  const peerConnection = peer.connect(peerID, options);
  peerConnection.on("open", function () {
    peerConnection.send(JSON.stringify(data));
    console.log("Sent:", data, " to peerID: ", peerID);
  });
  peerConnection.on("error", async function (err) {
    console.error("Could not send data: ", data, " to peerID: ", peerID, "\n Error: ", err);
    removeFromList(NanoFactoryPeerType.AVAILABLE, peerID);
  });
}
function sendFile(peerID, fileContent, metadata, label) {
  const options = {
    label,
    metadata,
    serialization: "binary",
    reliable: true
  };
  const peerConnection = peer.connect(peerID, options);
  peerConnection.on("open", function () {
    peerConnection.send(fileContent);
  });
  peerConnection.on("close", function () {
    console.log(" Sent file. Label:" + label);
  });
  peerConnection.on("error", function (err) {
    console.error("Could not send data: " + err);
  });
}
async function sendDataToAllAvailablePeers(data, label) {
  console.log(nanofactoryPeersObject);
  nanofactoryPeersObject.available.forEach((peerID) => {
    console.log(peerID);
    sendData(peerID, data, label);
  });
}
async function sendFileToAllAvailablePeers(fileContent, metadata, label) {
  nanofactoryPeersObject.available.forEach((peerID) => {
    sendFile(peerID, fileContent, metadata, label);
  });
}
let currentJobID = "";
async function handleJob(data, peerID, label, metadata, fileContent) {
  switch (label) {
    case ConnectionLabels.jobCreated:
      let file = new NanoFactoryFile(metadata["file"]["id"], metadata["file"]["fileName"], metadata["file"]["parentDir"], metadata["file"]["isWorkspaceFile"], metadata["file"]["uploaderName"], metadata["file"]["type"]);
      file.fileContent = new Blob([fileContent], { type: "text/plain;charset=utf-8" });
      let job = new PrintJob(metadata["id"], metadata["printerID"], metadata["jobName"], metadata["assignerName"], metadata["estimatedPrintTime"], metadata["estimatedFilamentUsage"], metadata["createdDate"], metadata["queuePosition"], file, metadata["filamentID"]);
      file.add();
      job.add("printQueue");
      await OctoPrint.files.upload("local", new File([file.fileContent], metadata["jobName"] + ".gcode"));
      if ((await db.printer.toArray())[0].state.status === PrinterStatus.operational) {
        startQueue();
      }
      break;
    case ConnectionLabels.currentJobUpdatesRequest:
      sendCurrentJobUpdates(peerID);
      break;
    case ConnectionLabels.currentJobUpdatesStop:
      jobProgressConnections[peerID].close();
      break;
    case ConnectionLabels.jobCancelled:
      let jobToCancel = await db.printQueue.get(data["id"]);
      if (jobToCancel) {
        if (currentJobID == jobToCancel.id) {
          OctoPrint.job.cancel();
        } else {
          jobToCancel.status = PrintJobStatus.CANCELLED;
          jobToCancel.add("jobsHistory");
          jobToCancel.remove("printQueue");
        }
      }
      break;
    case ConnectionLabels.jobDeleted:
      let jobToDelete = await db.printQueue.get(data["id"]);
      if (jobToDelete) {
        jobToDelete.remove("printQueue");
      }
      break;
    case ConnectionLabels.jobRankChange:
      let rankChangedJob = await db.printQueue.get(data["id"]);
      if (rankChangedJob) {
        rankChangedJob.queuePosition = data["queuePosition"];
        rankChangedJob.save("printQueue", { queuePosition: rankChangedJob.queuePosition });
      }
      sendDataToAllAvailablePeers(data, ConnectionLabels.jobRankChange);
      break;
    case ConnectionLabels.jobPause:
      pauseJob();
      break;
    case ConnectionLabels.jobResume:
      if (currentJobID.length > 0) {
        OctoPrint.job.resume();
      } else {
        startQueue();
      }
      break;
    case ConnectionLabels.jobFilamentModified:
      let jobToChangeFilament = await db.printQueue.get(data["id"]);
      if (jobToChangeFilament) {
        jobToChangeFilament.filamentID = data["filamentID"];
        jobToChangeFilament.save("printQueue", { "filamentID": jobToChangeFilament.filamentID });
        sendDataToAllAvailablePeers({
          "data": {
            "id": jobToChangeFilament.id,
            "filamentID": jobToChangeFilament.filamentID
          }
        }, ConnectionLabels.jobFilamentModified);
      }
      break;
  }
}
async function startQueue() {
  let job = (await db.printQueue.orderBy("queuePosition").toArray())[0];
  if (printer.filamentID === job.filamentID) {
    currentJobID = job.id;
    job.startTime = new Date().toISOString();
    job.status = PrintJobStatus.PRINTING;
    job.save("printQueue", { startTime: job.startTime, status: job.status });
    OctoPrint.files.select("local", job.jobName + ".gcode", true);
    printer.isQueuePaused = false;
    printer.queuePausedReason = QueuePausedReason.queueNotPaused;
    printer.save({ "isQueuePaused": printer.isQueuePaused, "queuePausedReason": printer.queuePausedReason });
  } else {
    sendDataToAllAvailablePeers({ "data": QueuePausedReason.filamentMismatch }, ConnectionLabels.queuePaused);
    printer.queuePausedReason = QueuePausedReason.filamentMismatch;
    printer.save({ "queuePausedReason": printer.queuePausedReason });
  }
}
function sendCurrentJobUpdates(peerID) {
  const options = {
    label: ConnectionLabels.currentJobUpdatesResponse,
    metadata: peerID,
    serialization: "json",
    reliable: true
  };
  let jobProgressConnection = peer.connect(peerID, options);
  jobProgressConnection.on("open", function () {
    console.log("jobProgress connection is open " + peerID);
    jobProgressConnections[peerID] = jobProgressConnection;
  });
  jobProgressConnection.on("close", function () {
    delete jobProgressConnections[peerID];
  });
  jobProgressConnection.on("error", function () {
    delete jobProgressConnections[peerID];
  });
}
function pauseJob() {
  OctoPrint.job.pause();
}
function resetCurrentJobID() {
  currentJobID = "";
}
let bedLevelingRequests = [];
const bedLevellingTimeout = 60;
const bedLevellingResponseInterval = 10;
const bedLevellingResponseMaxTries = 60;
let numberOfBedlevellingResponseTries = 0;
async function handlePrinter(data, peerID, label, _metadata) {
  switch (label) {
    case ConnectionLabels.connectPrinter:
      connectPrinter(data["port"], data["baudrate"], data["autoconnect"], data["save"]);
      break;
    case ConnectionLabels.disconnectPrinter:
      OctoPrint.connection.disconnect();
      break;
    case ConnectionLabels.executeCustomGcode:
      executeCustomGcode([data["data"]]);
      break;
    case ConnectionLabels.temperatureStreamRequest:
      startTemperatureStream(peerID);
      break;
    case ConnectionLabels.temperatureStreamStop:
      temperatureStreamConnections[peerID].close();
      break;
    case ConnectionLabels.filamentExtrude:
      OctoPrint.printer.extrude(data["data"]);
      break;
    case ConnectionLabels.home:
      OctoPrint.printer.home(data["axes"]);
      break;
    case ConnectionLabels.terminalRequest:
      startTerminalStream(peerID);
      break;
    case ConnectionLabels.terminalStop:
      terminalConnections[peerID].close();
      break;
    case ConnectionLabels.targetBed:
      OctoPrint.printer.setBedTargetTemperature(data["data"]);
      break;
    case ConnectionLabels.targetTool:
      OctoPrint.printer.setToolTargetTemperatures({ "tool0": data["data"] });
      break;
    case ConnectionLabels.positionChanged:
      handleJog(data);
      break;
    case ConnectionLabels.positionChangedRequest:
      startPositionChangedStream(peerID);
      break;
    case ConnectionLabels.positionChangedStop:
      positionChangedConnections[peerID].close();
      break;
    case ConnectionLabels.emergencyStop:
      executeCustomGcode(["M112"]);
      break;
    case ConnectionLabels.profileChanged:
      OctoPrint.printerprofiles.update("_default", data);
      sendDataToAllAvailablePeers(data, ConnectionLabels.profileChanged);
      Object.keys(data).forEach((key) => {
        printer[key] = data[key];
      });
      printer.save(printer);
      break;
    case ConnectionLabels.refreshConnectionOptions:
      await saveConnectionOptions();
      sendData(peerID, printer.connectionOptions, ConnectionLabels.connectionOptionsChanged);
      break;
    case ConnectionLabels.bedLevelingRequest:
      bedLevelingRequests.push(peerID);
      fetch(BASEURL + "plugin/NanoFactory/initiate_bed_levelling", {
        method: "GET",
        headers: {
          "X-API-KEY": networking.apiKey
        }
      });
      getBedLevellingResponse();
      break;
  }
}
function getBedLevellingResponse() {
  numberOfBedlevellingResponseTries = 0;
  setTimeout(() => {
    let bedlevellingResponsePoll = setInterval(async () => {
      if (numberOfBedlevellingResponseTries < bedLevellingResponseMaxTries) {
        numberOfBedlevellingResponseTries += 1;
        let response = (await fetch(BASEURL + "plugin/NanoFactory/get_bed_levelling", {
          method: "GET",
          headers: {
            "X-API-KEY": networking.apiKey
          }
        })).json();
        if ("data" in response) {
          clearInterval(bedlevellingResponsePoll);
          printer.bedLevellingGraph = response["data"];
          printer.save({ bedLevellingGraph: printer.bedLevellingGraph });
          for (let i = bedLevelingRequests.length - 1; i > -1; i--) {
            sendData(bedLevelingRequests[i], printer.bedLevellingGraph, ConnectionLabels.bedLevelingResponse);
            bedLevelingRequests.pop();
          }
        }
      }
    }, bedLevellingResponseInterval * 1e3);
  }, bedLevellingTimeout * 1e3);
}
function executeCustomGcode(gcode) {
  gcode.forEach(async (line) => {
    await OctoPrint.control.sendGcode(line);
  });
}
async function savePrinterProfile() {
  let profile = await OctoPrint.printerprofiles.get("_default");
  profile["id"] = peer.id;
  delete profile["default"];
  delete profile["current"];
  delete profile["resource"];
  profile["position"] = {
    "x": 0,
    "y": 0,
    "z": 0,
    "e": 0,
    "relative": false,
    "speed": 0
  };
  await printer.save(profile);
}
async function saveConnectionOptions() {
  printer.connectionOptions = (await OctoPrint.connection.getSettings())["options"];
  await printer.save({ connectionOptions: printer.connectionOptions });
}
async function updatePrinterStateAndTemperature() {
  const temperatureLHistoryLength = 50;
  let response = {};
  try {
    response = await OctoPrint.printer.getFullState({ history: true, limit: temperatureLHistoryLength });
  } catch (error) {
    response = {
      "state": {
        "text": "Offline"
      }
    };
  }
  let newPrinterStatus = convertPrinterState(response["state"]["text"]);
  if (newPrinterStatus !== printer.state.status) {
    sendDataToAllAvailablePeers({ "status": newPrinterStatus }, ConnectionLabels.printerStateChanged);
  }
  printer.state.status = newPrinterStatus;
  if ("temperature" in response) {
    printer.temperatureHistory = response["temperature"]["history"];
  }
  await printer.save({ "state": printer.state, "temperatureHistory": printer.temperatureHistory });
}
function convertPrinterState(currentState) {
  if (currentState.includes("Operational"))
    return PrinterStatus.operational;
  else if (currentState.includes("Printing"))
    return PrinterStatus.printing;
  else if (currentState.includes("Paused"))
    return PrinterStatus.paused;
  else
    return PrinterStatus.offline;
}
function startTemperatureStream(peerID) {
  const options = {
    label: ConnectionLabels.temperatureStreamResponse,
    metadata: peerID,
    serialization: "json",
    reliable: true
  };
  let temperatureStreamConnection = peer.connect(peerID, options);
  temperatureStreamConnection.on("open", function () {
    console.log("temperatureStream connection is open " + peerID);
    temperatureStreamConnections[peerID] = temperatureStreamConnection;
  });
  temperatureStreamConnection.on("close", function () {
    delete temperatureStreamConnections[peerID];
  });
  temperatureStreamConnection.on("error", function () {
    delete temperatureStreamConnections[peerID];
  });
}
async function connectPrinter(port, baudrate, autoconnect, save) {
  let payload = {
    "save": save,
    "autoconnect": autoconnect
  };
  if (!(port == null ? void 0 : port.toLowerCase().includes("auto"))) {
    payload.port = port;
  }
  if (!(baudrate == null ? void 0 : baudrate.toLowerCase().includes("auto"))) {
    payload.baudrate = parseInt(baudrate);
  }
  OctoPrint.connection.connect(payload);
}
function startTerminalStream(peerID) {
  const options = {
    label: ConnectionLabels.terminalResponse,
    metadata: peerID,
    serialization: "json",
    reliable: true
  };
  let terminalConnection = peer.connect(peerID, options);
  terminalConnection.on("open", function () {
    console.log("terminalConnection is open " + peerID);
    terminalConnections[peerID] = terminalConnection;
  });
  terminalConnection.on("close", function () {
    delete terminalConnections[peerID];
  });
  terminalConnection.on("error", function () {
    delete terminalConnections[peerID];
  });
}
function handleJog(data) {
  console.log(data);
  let payload = {
    "x": data["x"],
    "y": data["y"],
    "z": data["z"],
    "absolute": !data["relative"]
  };
  OctoPrint.printer.jog(payload);
}
function startPositionChangedStream(peerID) {
  const options = {
    label: ConnectionLabels.positionChangedResponse,
    metadata: peerID,
    serialization: "json",
    reliable: true
  };
  let positionChangedConnection = peer.connect(peerID, options);
  positionChangedConnection.on("open", function () {
    console.log("positionChangedConnection is open " + peerID);
    positionChangedConnections[peerID] = positionChangedConnection;
  });
  positionChangedConnection.on("close", function () {
    delete positionChangedConnections[peerID];
  });
  positionChangedConnection.on("error", function () {
    delete positionChangedConnections[peerID];
  });
}
const patternPositionAbsolute = /.*G90.*/;
const patternPositionRelative = /.*G91.*/;
const patternExtruderAbsolute = /.*M82.*/;
const patternExtruderRelative = /.*M83.*/;
const patternE = /E-?\d+\.?\d+/;
const patternX = /X[\-0-9]+/;
const patternY = /Y[\-0-9]+/;
const patternZ = /Z[0-9]+/;
const patternHome = /Recv: X:[0-9]+\.[0-9]{2} Y:[0-9]+\.[0-9]{2} Z:[0-9]+\.[0-9]{2} E:0.00 Count X:[0-9]+ Y:[0-9]+ Z:[0-9]+/;
const patternXHome = /X\:[\-0-9]+\.[\-0-9]+/;
const patternYHome = /Y\:[\-0-9]+\.[\-0-9]+/;
const patternZHome = /Z\:[\-0-9]+\.[\-0-9]+/;
let checkX = false;
let checkY = false;
let checkZ = false;
let positionAbsolute = true;
let extruderAbsolute = true;
let extruderPosition = 0;
function handleDataFromLogs(logLines) {
  let positionChanged = false;
  logLines.forEach((logLine) => {
    if (logLine.includes("G28 X0 Y0")) {
      checkX = true;
      checkY = true;
    }
    if (logLine.includes("G28 Z0") || logLine.replace("Send:", "").trim() === "G28") {
      checkX = true;
      checkY = true;
      checkZ = true;
    }
    if (checkX || checkY || checkZ) {
      if (logLine.match(patternHome)) {
        printer.position.x = parseFloat(logLine.match(patternXHome)[0].substring(2));
        printer.position.y = parseFloat(logLine.match(patternYHome)[0].substring(2));
        printer.position.z = parseFloat(logLine.match(patternZHome)[0].substring(2));
        printer.save({ position: printer.position });
        for (let peerID in positionChangedConnections) {
          positionChangedConnections[peerID].send(JSON.stringify(printer.position));
        }
      }
    }
    if (logLine.match(patternPositionAbsolute)) {
      positionAbsolute = true;
    } else if (logLine.match(patternPositionRelative)) {
      positionAbsolute = false;
    }
    if (logLine.match(patternExtruderAbsolute)) {
      extruderAbsolute = true;
    } else if (logLine.match(patternExtruderRelative)) {
      extruderAbsolute = false;
    }
    if (logLine.includes("G0") || logLine.includes("G1")) {
      if (logLine.match(patternX)) {
        printer.position.x = positionAbsolute ? parseFloat(logLine.match(patternX)[0].substring(1)) : printer.position.x + parseFloat(logLine.match(patternX)[0].substring(1));
        positionChanged = true;
      }
      if (logLine.match(patternY)) {
        printer.position.y = positionAbsolute ? parseFloat(logLine.match(patternY)[0].substring(1)) : printer.position.y + parseFloat(logLine.match(patternY)[0].substring(1));
        positionChanged = true;
      }
      if (logLine.match(patternZ)) {
        printer.position.z = positionAbsolute ? parseFloat(logLine.match(patternZ)[0].substring(1)) : printer.position.z + parseFloat(logLine.match(patternZ)[0].substring(1));
        positionChanged = true;
      }
      if (logLine.match(patternE)) {
        let extrudeLength = parseFloat(logLine.match(patternE)[0].substring(1));
        if (!extruderAbsolute) {
          extruderPosition += extrudeLength;
        } else {
          extruderPosition = extrudeLength;
        }
      }
      if (positionChanged) {
        printer.save({ position: printer.position });
        for (let peerID in positionChangedConnections) {
          positionChangedConnections[peerID].send(JSON.stringify(printer.position));
        }
      }
    }
  });
}
let snapshotUrl;
const FPS = 60;
async function initializeCameraStream() {
  snapshotUrl = (await OctoPrint.settings.get())["webcam"]["snapshotUrl"];
  let worker = new Worker("./camera.js");
  worker.postMessage([snapshotUrl, FPS]);
  worker.onmessage = (e) => {
    for (let peerID in cameraStreamConnections) {
      cameraStreamConnections[peerID].send(e.data);
    }
  };
}
async function handleCameraStreamRequest(peerID) {
  const options = {
    label: ConnectionLabels.cameraStreamResponse,
    metadata: peerID,
    serialization: "binary",
    reliable: true
  };
  let cameraStreamConnection = peer.connect(peerID, options);
  cameraStreamConnection.on("open", function () {
    console.log("camera stream connection is open " + peerID);
    cameraStreamConnections[peerID] = cameraStreamConnection;
  });
  cameraStreamConnection.on("close", function () {
    delete cameraStreamConnections[peerID];
  });
  cameraStreamConnection.on("error", function () {
    delete cameraStreamConnections[peerID];
  });
}
var socketEventTypes = /* @__PURE__ */ ((socketEventTypes2) => {
  socketEventTypes2["CONNECTED"] = "connected";
  socketEventTypes2["CURRENT"] = "current";
  socketEventTypes2["HISTORY"] = "history";
  socketEventTypes2["REAUTHREQUIRED"] = "reauthRequired";
  socketEventTypes2["EVENT"] = "event";
  return socketEventTypes2;
})(socketEventTypes || {});
var OctoPrintEventTypes = /* @__PURE__ */ ((OctoPrintEventTypes2) => {
  OctoPrintEventTypes2["PRINTERSTATECHANGED"] = "PrinterStateChanged";
  OctoPrintEventTypes2["PRINTSTARTED"] = "PrintStarted";
  OctoPrintEventTypes2["PRINTDONE"] = "PrintDone";
  OctoPrintEventTypes2["PRINTFAILED"] = "PrintFailed";
  OctoPrintEventTypes2["PRINTCANCELLED"] = "PrintCancelled";
  return OctoPrintEventTypes2;
})(OctoPrintEventTypes || {});
async function handleFilament(data, peerID, label, _metadata) {
  switch (label) {
    case ConnectionLabels.filamentAssigned:
      if (printer.state.status === PrinterStatus.operational) {
        let filament = new Filament(data["id"], data["brand"], data["material"], data["color"], data["cost"], data["currency"], data["weightTotal"], data["weightPrinted"], data["density"], data["diameter"], new Date(data["dateBought"]), data["nozzleTemperature"], data["bedTemperature"], data["filamentDepletedCutoff"]);
        filament.status = FilamentStatus.loaded;
        filament.add();
        sendDataToAllAvailablePeers(filament, ConnectionLabels.filamentAssigned);
        printer.filamentID = filament.id;
        printer.save({ "filamentID": printer.filamentID });
      }
      break;
    case ConnectionLabels.filamentRemoved:
      printer.filamentID = "";
      printer.save({ "filamentID": printer.filamentID });
      db.filaments.clear();
      sendDataToAllAvailablePeers({}, ConnectionLabels.filamentRemoved);
      break;
    case ConnectionLabels.filamentModified:
      let modifiedFilament = await db.filaments.get(data["id"]);
      if (modifiedFilament) {
        modifiedFilament.save(data);
      }
      break;
    case ConnectionLabels.filamentModifiedRequest:
      sendFilamentUpdates(peerID);
      break;
    case ConnectionLabels.filamentModifiedStop:
      filamentUpdateConnections[peerID].close();
      break;
  }
}
let extruderAtLastUpdate = 0;
const filamentUpdateTimeout = 10;
function updateFilamentUsage() {
  setInterval(async () => {
    let extruderPositionCopy = extruderPosition;
    let extrudeLengthForCurrentInterval = extruderPositionCopy - extruderAtLastUpdate;
    extruderAtLastUpdate = extruderPositionCopy;
    if (extrudeLengthForCurrentInterval == 0)
      return;
    let filament = (await db.filaments.toArray())[0];
    let extrudeWeight = await calculateFilamentWeightFromLength(extrudeLengthForCurrentInterval, filament.density, filament.diameter);
    filament.weightPrinted += extrudeWeight;
    filament.save({ weightPrinted: filament.weightPrinted });
    if (filament.weightRemaining < filament.filamentDepletedCutoff)
      handleFilamentDepletion();
    for (let peerID in filamentUpdateConnections) {
      filamentUpdateConnections[peerID].send(JSON.stringify(filament));
    }
  }, filamentUpdateTimeout * 1e3);
}
function sendFilamentUpdates(peerID) {
  const options = {
    label: ConnectionLabels.filamentModifiedResponse,
    metadata: peerID,
    serialization: "json",
    reliable: true
  };
  let filamentUpdateConnection = peer.connect(peerID, options);
  filamentUpdateConnection.on("open", function () {
    console.log("filamentUpdate connection is open " + peerID);
    filamentUpdateConnections[peerID] = filamentUpdateConnection;
  });
  filamentUpdateConnection.on("close", function () {
    delete filamentUpdateConnections[peerID];
  });
  filamentUpdateConnection.on("error", function () {
    delete filamentUpdateConnections[peerID];
  });
}
async function calculateFilamentWeightFromLength(length, density, diameter) {
  return density * (Math.PI * diameter * diameter * length / 4e3);
}
function handleFilamentDepletion() {
  pauseJob();
  printer.isQueuePaused = true;
  printer.queuePausedReason = QueuePausedReason.depletedFilament;
  printer.save({ isQueuePaused: printer.isQueuePaused, queuePausedReason: printer.queuePausedReason });
  sendDataToAllAvailablePeers({ "data": printer.queuePausedReason }, ConnectionLabels.queuePaused);
}
async function handleAction(data, _peerID, label, metadata, fileContent) {
  switch (label) {
    case ConnectionLabels.actionCreated:
    case ConnectionLabels.actionModified:
      let fileBlob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });
      let file = new File([fileBlob], metadata["name"] + ".gcode");
      let action = await db.actions.get(metadata["id"]);
      if (action) {
        action.name = metadata["name"];
        action.script = file;
        action.filamentAction = metadata["filamentAction"];
        action.save(action);
      } else {
        new Action(metadata["id"], metadata["name"], file, metadata["filamentAction"]).add();
      }
      sendFileToAllAvailablePeers(fileBlob, metadata, label);
      break;
    case ConnectionLabels.actionExecuted:
      let actionToExecute = (await db.actions.where("name").equals(data["name"]).toArray())[0];
      if (actionToExecute) {
        let content = await actionToExecute.script.text();
        executeCustomGcode(content.split(/\r?\n/));
      }
      break;
    case ConnectionLabels.actionDeleted:
      let actionToDelete = (await db.actions.where("name").equals(data["name"]).toArray())[0];
      actionToDelete.remove();
      sendDataToAllAvailablePeers(data, ConnectionLabels.actionDeleted);
      break;
  }
}
const fileLabels = [ConnectionLabels.jobCreated, ConnectionLabels.actionCreated, ConnectionLabels.actionModified];
async function handleIncomingData(data, peerID, label, metadata) {
  let fileContent = "";
  if (fileLabels.includes(label)) {
    fileContent = new TextDecoder("utf-8").decode(data);
  } else {
    data = JSON.parse(data);
  }
  metadata = JSON.parse(metadata);
  if (nanofactoryPeersObject.whitelisted.has(peerID)) {
    switch (label) {
      case ConnectionLabels.syncAllRequest:
        handleSyncAllRequest(peerID);
        break;
      case ConnectionLabels.connectPrinter:
      case ConnectionLabels.disconnectPrinter:
      case ConnectionLabels.executeCustomGcode:
      case ConnectionLabels.temperatureStreamRequest:
      case ConnectionLabels.temperatureStreamStop:
      case ConnectionLabels.filamentExtrude:
      case ConnectionLabels.home:
      case ConnectionLabels.terminalRequest:
      case ConnectionLabels.terminalStop:
      case ConnectionLabels.targetBed:
      case ConnectionLabels.targetTool:
      case ConnectionLabels.positionChanged:
      case ConnectionLabels.positionChangedRequest:
      case ConnectionLabels.positionChangedStop:
      case ConnectionLabels.emergencyStop:
      case ConnectionLabels.profileChanged:
      case ConnectionLabels.refreshConnectionOptions:
      case ConnectionLabels.bedLevelingRequest:
        handlePrinter(data, peerID, label);
        break;
      case ConnectionLabels.jobCreated:
      case ConnectionLabels.currentJobUpdatesRequest:
      case ConnectionLabels.currentJobUpdatesStop:
      case ConnectionLabels.jobCancelled:
      case ConnectionLabels.jobDeleted:
      case ConnectionLabels.jobRankChange:
      case ConnectionLabels.jobPause:
      case ConnectionLabels.jobResume:
      case ConnectionLabels.jobFilamentModified:
        handleJob(data, peerID, label, metadata, fileContent);
        break;
      case ConnectionLabels.filamentAssigned:
      case ConnectionLabels.filamentRemoved:
      case ConnectionLabels.filamentModified:
      case ConnectionLabels.filamentModifiedRequest:
      case ConnectionLabels.filamentModifiedStop:
        handleFilament(data, peerID, label);
        break;
      case ConnectionLabels.actionCreated:
      case ConnectionLabels.actionExecuted:
      case ConnectionLabels.actionModified:
      case ConnectionLabels.actionDeleted:
        handleAction(data, peerID, label, metadata, fileContent);
        break;
      case ConnectionLabels.peerPermissionResponse:
      case ConnectionLabels.peerListModification:
        handleSecurityTasks(data, peerID, label);
        break;
      case ConnectionLabels.handshakeRequest:
        handleHandshakeRequest(peerID);
        break;
      case ConnectionLabels.cameraStreamRequest:
        handleCameraStreamRequest(peerID);
        break;
      case ConnectionLabels.cameraStreamStop:
        cameraStreamConnections[peerID].close();
        break;
      default:
        console.log("Unhandled label: " + label);
        break;
    }
  } else if (nanofactoryPeersObject.blacklisted.has(peerID)) {
    console.log("Request from blacklisted peer: " + peerID + ". Label: " + label);
  } else {
    if (label === ConnectionLabels.syncAllRequest) {
      if (networking.masterPeerID.length > 0) {
        sendData(networking.masterPeerID, data, ConnectionLabels.peerPermissionRequest);
      } else {
        networking.masterPeerID = peerID;
        networking.save({ masterPeerID: networking.masterPeerID });
        fetch(BASEURL + "plugin/NanoFactory/save_master_peer_id?master_peer_id=" + networking.masterPeerID, {
          method: "POST",
          headers: {
            "X-API-KEY": networking.apiKey
          }
        });
        handleSyncAllRequest(peerID);
      }
    }
  }
}
async function handleSyncAllRequest(peerID) {
  let payload = {
    "printer_profile": (await db.printer.toArray())[0],
    "current_job": {
      "id": currentJobID
    },
    "print_queue": await db.printQueue.toArray(),
    "jobs_history": await db.jobsHistory.toArray(),
    "current_filament": await db.filaments.get(printer.filamentID),
    "scripts": await db.actions.toArray(),
    "is_master": peerID === networking.masterPeerID,
    "whitelisted": [""],
    "blacklisted": [""]
  };
  if (payload.is_master) {
    payload["whitelisted"] = Array.from(nanofactoryPeersObject.whitelisted);
    payload["blacklisted"] = Array.from(nanofactoryPeersObject.blacklisted);
  }
  sendData(peerID, payload, ConnectionLabels.syncAllResponse);
  addToList(NanoFactoryPeerType.AVAILABLE, peerID);
}
async function handleHandshakeRequest(peerID) {
  sendData(peerID, { "status": (await db.printer.toArray())[0].state.status }, ConnectionLabels.handshakeResponse);
}
async function handleSocketMessage(message) {
  var _a2, _b;
  switch (message.event) {
    case socketEventTypes.CONNECTED:
    case socketEventTypes.REAUTHREQUIRED:
      OctoPrint.browser.passiveLogin().done(function (response) {
        OctoPrint.socket.sendAuth(response.name, response.session);
      });
      break;
    case socketEventTypes.HISTORY:
      console.log(message);
      break;
    case socketEventTypes.CURRENT:
      if (currentJobID && "job" in message.data)
        ;
      if (currentJobID && "progress" in message.data) {
        let payload = {
          "data": {
            "id": currentJobID,
            "progress": {
              "completion": parseFloat(message.data["progress"]["completion"]).toFixed(1)
            },
            "estimatedFilamentUsage": (_b = (_a2 = message.data.job.filament) == null ? void 0 : _a2.tool0) != null ? _b : { "length": 0, "volume": 0 },
            "actualFilamentUsage": { "length": 0, "volume": 0 }
          }
        };
        if (payload.data.progress.completion) {
          for (let peerID in jobProgressConnections) {
            jobProgressConnections[peerID].send(JSON.stringify(payload));
          }
        }
      }
      if ("temps" in message.data && message.data.temps.length > 0) {
        for (let peerID in temperatureStreamConnections) {
          temperatureStreamConnections[peerID].send(JSON.stringify({
            "data": message.data.temps
          }));
        }
        message.data.temps.forEach((temperaturePoint) => {
          printer.temperatureHistory.push(temperaturePoint);
        });
        while (printer.temperatureHistory.length > 50) {
          printer.temperatureHistory.shift();
        }
        printer.save({ temperatureHistory: printer.temperatureHistory });
      }
      if ("logs" in message.data) {
        for (let peerID in terminalConnections) {
          terminalConnections[peerID].send(JSON.stringify(message.data.logs));
        }
        handleDataFromLogs(message.data.logs);
      }
      break;
    case socketEventTypes.EVENT:
      handleOctoprintEvents(message);
      break;
    default:
      console.log("Unhandled socketEventType: ", message);
  }
}
async function handleOctoprintEvents(message) {
  switch (message.data.type) {
    case OctoPrintEventTypes.PRINTERSTATECHANGED:
      printer.state.status = convertPrinterState(message.data.payload.state_string);
      printer.save({ state: printer.state });
      sendDataToAllAvailablePeers(printer.state, ConnectionLabels.printerStateChanged);
      break;
    case OctoPrintEventTypes.PRINTSTARTED:
      if (currentJobID) {
        sendDataToAllAvailablePeers({
          "data": {
            "id": currentJobID,
            "startTime": new Date().toISOString()
          }
        }, ConnectionLabels.jobPrinting);
      }
      break;
    case OctoPrintEventTypes.PRINTDONE:
    case OctoPrintEventTypes.PRINTFAILED:
    case OctoPrintEventTypes.PRINTCANCELLED:
      if (currentJobID) {
        let labels = getLabelsFromOctoprintEvent(message.data.type);
        let finishedJob = await db.printQueue.get(currentJobID);
        if (finishedJob) {
          finishedJob.endTime = new Date().toISOString();
          finishedJob.status = labels.printJobStatus;
          await finishedJob.save("printQueue", { endTime: finishedJob.endTime, status: finishedJob.status });
          finishedJob.add("jobsHistory");
          finishedJob.remove("printQueue");
        }
        sendDataToAllAvailablePeers({ "data": { "id": currentJobID, "endTime": finishedJob == null ? void 0 : finishedJob.endTime } }, labels.connectionLabel);
        sendDataToAllAvailablePeers({ "data": labels.queuePausedReason }, ConnectionLabels.queuePaused);
        resetCurrentJobID();
        printer.isQueuePaused = true;
        printer.queuePausedReason = labels.queuePausedReason;
        printer.save({ isQueuePaused: printer.isQueuePaused, queuePausedReason: printer.queuePausedReason });
      }
      break;
  }
}
function getLabelsFromOctoprintEvent(event) {
  console.log(event);
  let payload = {
    "queuePausedReason": "",
    "connectionLabel": "",
    "printJobStatus": ""
  };
  if (event === OctoPrintEventTypes.PRINTDONE) {
    payload.queuePausedReason = QueuePausedReason.printCompletion;
    payload.connectionLabel = ConnectionLabels.jobDone;
    payload.printJobStatus = PrintJobStatus.DONE;
  } else if (event === OctoPrintEventTypes.PRINTCANCELLED) {
    payload.queuePausedReason = QueuePausedReason.printCancelled;
    payload.connectionLabel = ConnectionLabels.jobCancelled;
    payload.printJobStatus = PrintJobStatus.CANCELLED;
  } else {
    payload.queuePausedReason = QueuePausedReason.printFailed;
    payload.connectionLabel = ConnectionLabels.jobFailed;
    payload.printJobStatus = PrintJobStatus.FAILED;
  }
  return payload;
}
var bufferbuilder = { exports: {} };
(function (module) {
  var binaryFeatures2 = {};
  binaryFeatures2.useBlobBuilder = function () {
    try {
      new Blob([]);
      return false;
    } catch (e) {
      return true;
    }
  }();
  binaryFeatures2.useArrayBufferView = !binaryFeatures2.useBlobBuilder && function () {
    try {
      return new Blob([new Uint8Array([])]).size === 0;
    } catch (e) {
      return true;
    }
  }();
  module.exports.binaryFeatures = binaryFeatures2;
  var BlobBuilder = module.exports.BlobBuilder;
  if (typeof window !== "undefined") {
    BlobBuilder = module.exports.BlobBuilder = window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder || window.BlobBuilder;
  }
  function BufferBuilder2() {
    this._pieces = [];
    this._parts = [];
  }
  BufferBuilder2.prototype.append = function (data) {
    if (typeof data === "number") {
      this._pieces.push(data);
    } else {
      this.flush();
      this._parts.push(data);
    }
  };
  BufferBuilder2.prototype.flush = function () {
    if (this._pieces.length > 0) {
      var buf = new Uint8Array(this._pieces);
      if (!binaryFeatures2.useArrayBufferView) {
        buf = buf.buffer;
      }
      this._parts.push(buf);
      this._pieces = [];
    }
  };
  BufferBuilder2.prototype.getBuffer = function () {
    this.flush();
    if (binaryFeatures2.useBlobBuilder) {
      var builder = new BlobBuilder();
      for (var i = 0, ii = this._parts.length; i < ii; i++) {
        builder.append(this._parts[i]);
      }
      return builder.getBlob();
    } else {
      return new Blob(this._parts);
    }
  };
  module.exports.BufferBuilder = BufferBuilder2;
})(bufferbuilder);
var BufferBuilder = bufferbuilder.exports.BufferBuilder;
var binaryFeatures = bufferbuilder.exports.binaryFeatures;
var BinaryPack = {
  unpack: function (data) {
    var unpacker = new Unpacker(data);
    return unpacker.unpack();
  },
  pack: function (data) {
    var packer = new Packer();
    packer.pack(data);
    var buffer = packer.getBuffer();
    return buffer;
  }
};
var binarypack = BinaryPack;
function Unpacker(data) {
  this.index = 0;
  this.dataBuffer = data;
  this.dataView = new Uint8Array(this.dataBuffer);
  this.length = this.dataBuffer.byteLength;
}
Unpacker.prototype.unpack = function () {
  var type2 = this.unpack_uint8();
  if (type2 < 128) {
    return type2;
  } else if ((type2 ^ 224) < 32) {
    return (type2 ^ 224) - 32;
  }
  var size;
  if ((size = type2 ^ 160) <= 15) {
    return this.unpack_raw(size);
  } else if ((size = type2 ^ 176) <= 15) {
    return this.unpack_string(size);
  } else if ((size = type2 ^ 144) <= 15) {
    return this.unpack_array(size);
  } else if ((size = type2 ^ 128) <= 15) {
    return this.unpack_map(size);
  }
  switch (type2) {
    case 192:
      return null;
    case 193:
      return void 0;
    case 194:
      return false;
    case 195:
      return true;
    case 202:
      return this.unpack_float();
    case 203:
      return this.unpack_double();
    case 204:
      return this.unpack_uint8();
    case 205:
      return this.unpack_uint16();
    case 206:
      return this.unpack_uint32();
    case 207:
      return this.unpack_uint64();
    case 208:
      return this.unpack_int8();
    case 209:
      return this.unpack_int16();
    case 210:
      return this.unpack_int32();
    case 211:
      return this.unpack_int64();
    case 212:
      return void 0;
    case 213:
      return void 0;
    case 214:
      return void 0;
    case 215:
      return void 0;
    case 216:
      size = this.unpack_uint16();
      return this.unpack_string(size);
    case 217:
      size = this.unpack_uint32();
      return this.unpack_string(size);
    case 218:
      size = this.unpack_uint16();
      return this.unpack_raw(size);
    case 219:
      size = this.unpack_uint32();
      return this.unpack_raw(size);
    case 220:
      size = this.unpack_uint16();
      return this.unpack_array(size);
    case 221:
      size = this.unpack_uint32();
      return this.unpack_array(size);
    case 222:
      size = this.unpack_uint16();
      return this.unpack_map(size);
    case 223:
      size = this.unpack_uint32();
      return this.unpack_map(size);
  }
};
Unpacker.prototype.unpack_uint8 = function () {
  var byte = this.dataView[this.index] & 255;
  this.index++;
  return byte;
};
Unpacker.prototype.unpack_uint16 = function () {
  var bytes = this.read(2);
  var uint16 = (bytes[0] & 255) * 256 + (bytes[1] & 255);
  this.index += 2;
  return uint16;
};
Unpacker.prototype.unpack_uint32 = function () {
  var bytes = this.read(4);
  var uint32 = ((bytes[0] * 256 + bytes[1]) * 256 + bytes[2]) * 256 + bytes[3];
  this.index += 4;
  return uint32;
};
Unpacker.prototype.unpack_uint64 = function () {
  var bytes = this.read(8);
  var uint64 = ((((((bytes[0] * 256 + bytes[1]) * 256 + bytes[2]) * 256 + bytes[3]) * 256 + bytes[4]) * 256 + bytes[5]) * 256 + bytes[6]) * 256 + bytes[7];
  this.index += 8;
  return uint64;
};
Unpacker.prototype.unpack_int8 = function () {
  var uint8 = this.unpack_uint8();
  return uint8 < 128 ? uint8 : uint8 - (1 << 8);
};
Unpacker.prototype.unpack_int16 = function () {
  var uint16 = this.unpack_uint16();
  return uint16 < 32768 ? uint16 : uint16 - (1 << 16);
};
Unpacker.prototype.unpack_int32 = function () {
  var uint32 = this.unpack_uint32();
  return uint32 < Math.pow(2, 31) ? uint32 : uint32 - Math.pow(2, 32);
};
Unpacker.prototype.unpack_int64 = function () {
  var uint64 = this.unpack_uint64();
  return uint64 < Math.pow(2, 63) ? uint64 : uint64 - Math.pow(2, 64);
};
Unpacker.prototype.unpack_raw = function (size) {
  if (this.length < this.index + size) {
    throw new Error("BinaryPackFailure: index is out of range " + this.index + " " + size + " " + this.length);
  }
  var buf = this.dataBuffer.slice(this.index, this.index + size);
  this.index += size;
  return buf;
};
Unpacker.prototype.unpack_string = function (size) {
  var bytes = this.read(size);
  var i = 0;
  var str = "";
  var c;
  var code;
  while (i < size) {
    c = bytes[i];
    if (c < 128) {
      str += String.fromCharCode(c);
      i++;
    } else if ((c ^ 192) < 32) {
      code = (c ^ 192) << 6 | bytes[i + 1] & 63;
      str += String.fromCharCode(code);
      i += 2;
    } else {
      code = (c & 15) << 12 | (bytes[i + 1] & 63) << 6 | bytes[i + 2] & 63;
      str += String.fromCharCode(code);
      i += 3;
    }
  }
  this.index += size;
  return str;
};
Unpacker.prototype.unpack_array = function (size) {
  var objects = new Array(size);
  for (var i = 0; i < size; i++) {
    objects[i] = this.unpack();
  }
  return objects;
};
Unpacker.prototype.unpack_map = function (size) {
  var map = {};
  for (var i = 0; i < size; i++) {
    var key = this.unpack();
    var value = this.unpack();
    map[key] = value;
  }
  return map;
};
Unpacker.prototype.unpack_float = function () {
  var uint32 = this.unpack_uint32();
  var sign = uint32 >> 31;
  var exp = (uint32 >> 23 & 255) - 127;
  var fraction = uint32 & 8388607 | 8388608;
  return (sign === 0 ? 1 : -1) * fraction * Math.pow(2, exp - 23);
};
Unpacker.prototype.unpack_double = function () {
  var h32 = this.unpack_uint32();
  var l32 = this.unpack_uint32();
  var sign = h32 >> 31;
  var exp = (h32 >> 20 & 2047) - 1023;
  var hfrac = h32 & 1048575 | 1048576;
  var frac = hfrac * Math.pow(2, exp - 20) + l32 * Math.pow(2, exp - 52);
  return (sign === 0 ? 1 : -1) * frac;
};
Unpacker.prototype.read = function (length) {
  var j = this.index;
  if (j + length <= this.length) {
    return this.dataView.subarray(j, j + length);
  } else {
    throw new Error("BinaryPackFailure: read index out of range");
  }
};
function Packer() {
  this.bufferBuilder = new BufferBuilder();
}
Packer.prototype.getBuffer = function () {
  return this.bufferBuilder.getBuffer();
};
Packer.prototype.pack = function (value) {
  var type2 = typeof value;
  if (type2 === "string") {
    this.pack_string(value);
  } else if (type2 === "number") {
    if (Math.floor(value) === value) {
      this.pack_integer(value);
    } else {
      this.pack_double(value);
    }
  } else if (type2 === "boolean") {
    if (value === true) {
      this.bufferBuilder.append(195);
    } else if (value === false) {
      this.bufferBuilder.append(194);
    }
  } else if (type2 === "undefined") {
    this.bufferBuilder.append(192);
  } else if (type2 === "object") {
    if (value === null) {
      this.bufferBuilder.append(192);
    } else {
      var constructor = value.constructor;
      if (constructor == Array) {
        this.pack_array(value);
      } else if (constructor == Blob || constructor == File || value instanceof Blob || value instanceof File) {
        this.pack_bin(value);
      } else if (constructor == ArrayBuffer) {
        if (binaryFeatures.useArrayBufferView) {
          this.pack_bin(new Uint8Array(value));
        } else {
          this.pack_bin(value);
        }
      } else if ("BYTES_PER_ELEMENT" in value) {
        if (binaryFeatures.useArrayBufferView) {
          this.pack_bin(new Uint8Array(value.buffer));
        } else {
          this.pack_bin(value.buffer);
        }
      } else if (constructor == Object || constructor.toString().startsWith("class")) {
        this.pack_object(value);
      } else if (constructor == Date) {
        this.pack_string(value.toString());
      } else if (typeof value.toBinaryPack === "function") {
        this.bufferBuilder.append(value.toBinaryPack());
      } else {
        throw new Error('Type "' + constructor.toString() + '" not yet supported');
      }
    }
  } else {
    throw new Error('Type "' + type2 + '" not yet supported');
  }
  this.bufferBuilder.flush();
};
Packer.prototype.pack_bin = function (blob) {
  var length = blob.length || blob.byteLength || blob.size;
  if (length <= 15) {
    this.pack_uint8(160 + length);
  } else if (length <= 65535) {
    this.bufferBuilder.append(218);
    this.pack_uint16(length);
  } else if (length <= 4294967295) {
    this.bufferBuilder.append(219);
    this.pack_uint32(length);
  } else {
    throw new Error("Invalid length");
  }
  this.bufferBuilder.append(blob);
};
Packer.prototype.pack_string = function (str) {
  var length = utf8Length(str);
  if (length <= 15) {
    this.pack_uint8(176 + length);
  } else if (length <= 65535) {
    this.bufferBuilder.append(216);
    this.pack_uint16(length);
  } else if (length <= 4294967295) {
    this.bufferBuilder.append(217);
    this.pack_uint32(length);
  } else {
    throw new Error("Invalid length");
  }
  this.bufferBuilder.append(str);
};
Packer.prototype.pack_array = function (ary) {
  var length = ary.length;
  if (length <= 15) {
    this.pack_uint8(144 + length);
  } else if (length <= 65535) {
    this.bufferBuilder.append(220);
    this.pack_uint16(length);
  } else if (length <= 4294967295) {
    this.bufferBuilder.append(221);
    this.pack_uint32(length);
  } else {
    throw new Error("Invalid length");
  }
  for (var i = 0; i < length; i++) {
    this.pack(ary[i]);
  }
};
Packer.prototype.pack_integer = function (num) {
  if (num >= -32 && num <= 127) {
    this.bufferBuilder.append(num & 255);
  } else if (num >= 0 && num <= 255) {
    this.bufferBuilder.append(204);
    this.pack_uint8(num);
  } else if (num >= -128 && num <= 127) {
    this.bufferBuilder.append(208);
    this.pack_int8(num);
  } else if (num >= 0 && num <= 65535) {
    this.bufferBuilder.append(205);
    this.pack_uint16(num);
  } else if (num >= -32768 && num <= 32767) {
    this.bufferBuilder.append(209);
    this.pack_int16(num);
  } else if (num >= 0 && num <= 4294967295) {
    this.bufferBuilder.append(206);
    this.pack_uint32(num);
  } else if (num >= -2147483648 && num <= 2147483647) {
    this.bufferBuilder.append(210);
    this.pack_int32(num);
  } else if (num >= -9223372036854776e3 && num <= 9223372036854776e3) {
    this.bufferBuilder.append(211);
    this.pack_int64(num);
  } else if (num >= 0 && num <= 18446744073709552e3) {
    this.bufferBuilder.append(207);
    this.pack_uint64(num);
  } else {
    throw new Error("Invalid integer");
  }
};
Packer.prototype.pack_double = function (num) {
  var sign = 0;
  if (num < 0) {
    sign = 1;
    num = -num;
  }
  var exp = Math.floor(Math.log(num) / Math.LN2);
  var frac0 = num / Math.pow(2, exp) - 1;
  var frac1 = Math.floor(frac0 * Math.pow(2, 52));
  var b32 = Math.pow(2, 32);
  var h32 = sign << 31 | exp + 1023 << 20 | frac1 / b32 & 1048575;
  var l32 = frac1 % b32;
  this.bufferBuilder.append(203);
  this.pack_int32(h32);
  this.pack_int32(l32);
};
Packer.prototype.pack_object = function (obj) {
  var keys2 = Object.keys(obj);
  var length = keys2.length;
  if (length <= 15) {
    this.pack_uint8(128 + length);
  } else if (length <= 65535) {
    this.bufferBuilder.append(222);
    this.pack_uint16(length);
  } else if (length <= 4294967295) {
    this.bufferBuilder.append(223);
    this.pack_uint32(length);
  } else {
    throw new Error("Invalid length");
  }
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      this.pack(prop);
      this.pack(obj[prop]);
    }
  }
};
Packer.prototype.pack_uint8 = function (num) {
  this.bufferBuilder.append(num);
};
Packer.prototype.pack_uint16 = function (num) {
  this.bufferBuilder.append(num >> 8);
  this.bufferBuilder.append(num & 255);
};
Packer.prototype.pack_uint32 = function (num) {
  var n = num & 4294967295;
  this.bufferBuilder.append((n & 4278190080) >>> 24);
  this.bufferBuilder.append((n & 16711680) >>> 16);
  this.bufferBuilder.append((n & 65280) >>> 8);
  this.bufferBuilder.append(n & 255);
};
Packer.prototype.pack_uint64 = function (num) {
  var high = num / Math.pow(2, 32);
  var low = num % Math.pow(2, 32);
  this.bufferBuilder.append((high & 4278190080) >>> 24);
  this.bufferBuilder.append((high & 16711680) >>> 16);
  this.bufferBuilder.append((high & 65280) >>> 8);
  this.bufferBuilder.append(high & 255);
  this.bufferBuilder.append((low & 4278190080) >>> 24);
  this.bufferBuilder.append((low & 16711680) >>> 16);
  this.bufferBuilder.append((low & 65280) >>> 8);
  this.bufferBuilder.append(low & 255);
};
Packer.prototype.pack_int8 = function (num) {
  this.bufferBuilder.append(num & 255);
};
Packer.prototype.pack_int16 = function (num) {
  this.bufferBuilder.append((num & 65280) >> 8);
  this.bufferBuilder.append(num & 255);
};
Packer.prototype.pack_int32 = function (num) {
  this.bufferBuilder.append(num >>> 24 & 255);
  this.bufferBuilder.append((num & 16711680) >>> 16);
  this.bufferBuilder.append((num & 65280) >>> 8);
  this.bufferBuilder.append(num & 255);
};
Packer.prototype.pack_int64 = function (num) {
  var high = Math.floor(num / Math.pow(2, 32));
  var low = num % Math.pow(2, 32);
  this.bufferBuilder.append((high & 4278190080) >>> 24);
  this.bufferBuilder.append((high & 16711680) >>> 16);
  this.bufferBuilder.append((high & 65280) >>> 8);
  this.bufferBuilder.append(high & 255);
  this.bufferBuilder.append((low & 4278190080) >>> 24);
  this.bufferBuilder.append((low & 16711680) >>> 16);
  this.bufferBuilder.append((low & 65280) >>> 8);
  this.bufferBuilder.append(low & 255);
};
function _utf8Replace(m) {
  var code = m.charCodeAt(0);
  if (code <= 2047)
    return "00";
  if (code <= 65535)
    return "000";
  if (code <= 2097151)
    return "0000";
  if (code <= 67108863)
    return "00000";
  return "000000";
}
function utf8Length(str) {
  if (str.length > 600) {
    return new Blob([str]).size;
  } else {
    return str.replace(/[^\u0000-\u007F]/g, _utf8Replace).length;
  }
}
let logDisabled_ = true;
let deprecationWarnings_ = true;
function extractVersion(uastring, expr, pos) {
  const match = uastring.match(expr);
  return match && match.length >= pos && parseInt(match[pos], 10);
}
function wrapPeerConnectionEvent(window2, eventNameToWrap, wrapper) {
  if (!window2.RTCPeerConnection) {
    return;
  }
  const proto = window2.RTCPeerConnection.prototype;
  const nativeAddEventListener = proto.addEventListener;
  proto.addEventListener = function (nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap) {
      return nativeAddEventListener.apply(this, arguments);
    }
    const wrappedCallback = (e) => {
      const modifiedEvent = wrapper(e);
      if (modifiedEvent) {
        if (cb.handleEvent) {
          cb.handleEvent(modifiedEvent);
        } else {
          cb(modifiedEvent);
        }
      }
    };
    this._eventMap = this._eventMap || {};
    if (!this._eventMap[eventNameToWrap]) {
      this._eventMap[eventNameToWrap] = /* @__PURE__ */ new Map();
    }
    this._eventMap[eventNameToWrap].set(cb, wrappedCallback);
    return nativeAddEventListener.apply(this, [
      nativeEventName,
      wrappedCallback
    ]);
  };
  const nativeRemoveEventListener = proto.removeEventListener;
  proto.removeEventListener = function (nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[eventNameToWrap]) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    if (!this._eventMap[eventNameToWrap].has(cb)) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    const unwrappedCb = this._eventMap[eventNameToWrap].get(cb);
    this._eventMap[eventNameToWrap].delete(cb);
    if (this._eventMap[eventNameToWrap].size === 0) {
      delete this._eventMap[eventNameToWrap];
    }
    if (Object.keys(this._eventMap).length === 0) {
      delete this._eventMap;
    }
    return nativeRemoveEventListener.apply(this, [
      nativeEventName,
      unwrappedCb
    ]);
  };
  Object.defineProperty(proto, "on" + eventNameToWrap, {
    get() {
      return this["_on" + eventNameToWrap];
    },
    set(cb) {
      if (this["_on" + eventNameToWrap]) {
        this.removeEventListener(
          eventNameToWrap,
          this["_on" + eventNameToWrap]
        );
        delete this["_on" + eventNameToWrap];
      }
      if (cb) {
        this.addEventListener(
          eventNameToWrap,
          this["_on" + eventNameToWrap] = cb
        );
      }
    },
    enumerable: true,
    configurable: true
  });
}
function disableLog(bool) {
  if (typeof bool !== "boolean") {
    return new Error("Argument type: " + typeof bool + ". Please use a boolean.");
  }
  logDisabled_ = bool;
  return bool ? "adapter.js logging disabled" : "adapter.js logging enabled";
}
function disableWarnings(bool) {
  if (typeof bool !== "boolean") {
    return new Error("Argument type: " + typeof bool + ". Please use a boolean.");
  }
  deprecationWarnings_ = !bool;
  return "adapter.js deprecation warnings " + (bool ? "disabled" : "enabled");
}
function log() {
  if (typeof window === "object") {
    if (logDisabled_) {
      return;
    }
    if (typeof console !== "undefined" && typeof console.log === "function") {
      console.log.apply(console, arguments);
    }
  }
}
function deprecated(oldMethod, newMethod) {
  if (!deprecationWarnings_) {
    return;
  }
  console.warn(oldMethod + " is deprecated, please use " + newMethod + " instead.");
}
function detectBrowser(window2) {
  const result = { browser: null, version: null };
  if (typeof window2 === "undefined" || !window2.navigator) {
    result.browser = "Not a browser.";
    return result;
  }
  const { navigator: navigator2 } = window2;
  if (navigator2.mozGetUserMedia) {
    result.browser = "firefox";
    result.version = extractVersion(
      navigator2.userAgent,
      /Firefox\/(\d+)\./,
      1
    );
  } else if (navigator2.webkitGetUserMedia || window2.isSecureContext === false && window2.webkitRTCPeerConnection && !window2.RTCIceGatherer) {
    result.browser = "chrome";
    result.version = extractVersion(
      navigator2.userAgent,
      /Chrom(e|ium)\/(\d+)\./,
      2
    );
  } else if (navigator2.mediaDevices && navigator2.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
    result.browser = "edge";
    result.version = extractVersion(
      navigator2.userAgent,
      /Edge\/(\d+).(\d+)$/,
      2
    );
  } else if (window2.RTCPeerConnection && navigator2.userAgent.match(/AppleWebKit\/(\d+)\./)) {
    result.browser = "safari";
    result.version = extractVersion(
      navigator2.userAgent,
      /AppleWebKit\/(\d+)\./,
      1
    );
    result.supportsUnifiedPlan = window2.RTCRtpTransceiver && "currentDirection" in window2.RTCRtpTransceiver.prototype;
  } else {
    result.browser = "Not a supported browser.";
    return result;
  }
  return result;
}
function isObject(val) {
  return Object.prototype.toString.call(val) === "[object Object]";
}
function compactObject(data) {
  if (!isObject(data)) {
    return data;
  }
  return Object.keys(data).reduce(function (accumulator, key) {
    const isObj = isObject(data[key]);
    const value = isObj ? compactObject(data[key]) : data[key];
    const isEmptyObject = isObj && !Object.keys(value).length;
    if (value === void 0 || isEmptyObject) {
      return accumulator;
    }
    return Object.assign(accumulator, { [key]: value });
  }, {});
}
function walkStats(stats, base, resultSet) {
  if (!base || resultSet.has(base.id)) {
    return;
  }
  resultSet.set(base.id, base);
  Object.keys(base).forEach((name) => {
    if (name.endsWith("Id")) {
      walkStats(stats, stats.get(base[name]), resultSet);
    } else if (name.endsWith("Ids")) {
      base[name].forEach((id) => {
        walkStats(stats, stats.get(id), resultSet);
      });
    }
  });
}
function filterStats(result, track, outbound) {
  const streamStatsType = outbound ? "outbound-rtp" : "inbound-rtp";
  const filteredResult = /* @__PURE__ */ new Map();
  if (track === null) {
    return filteredResult;
  }
  const trackStats = [];
  result.forEach((value) => {
    if (value.type === "track" && value.trackIdentifier === track.id) {
      trackStats.push(value);
    }
  });
  trackStats.forEach((trackStat) => {
    result.forEach((stats) => {
      if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
        walkStats(result, stats, filteredResult);
      }
    });
  });
  return filteredResult;
}
const logging = log;
function shimGetUserMedia$3(window2, browserDetails) {
  const navigator2 = window2 && window2.navigator;
  if (!navigator2.mediaDevices) {
    return;
  }
  const constraintsToChrome_ = function (c) {
    if (typeof c !== "object" || c.mandatory || c.optional) {
      return c;
    }
    const cc = {};
    Object.keys(c).forEach((key) => {
      if (key === "require" || key === "advanced" || key === "mediaSource") {
        return;
      }
      const r = typeof c[key] === "object" ? c[key] : { ideal: c[key] };
      if (r.exact !== void 0 && typeof r.exact === "number") {
        r.min = r.max = r.exact;
      }
      const oldname_ = function (prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return name === "deviceId" ? "sourceId" : name;
      };
      if (r.ideal !== void 0) {
        cc.optional = cc.optional || [];
        let oc = {};
        if (typeof r.ideal === "number") {
          oc[oldname_("min", key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname_("max", key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname_("", key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== void 0 && typeof r.exact !== "number") {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname_("", key)] = r.exact;
      } else {
        ["min", "max"].forEach((mix) => {
          if (r[mix] !== void 0) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };
  const shimConstraints_ = function (constraints, func) {
    if (browserDetails.version >= 61) {
      return func(constraints);
    }
    constraints = JSON.parse(JSON.stringify(constraints));
    if (constraints && typeof constraints.audio === "object") {
      const remap = function (obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };
      constraints = JSON.parse(JSON.stringify(constraints));
      remap(constraints.audio, "autoGainControl", "googAutoGainControl");
      remap(constraints.audio, "noiseSuppression", "googNoiseSuppression");
      constraints.audio = constraintsToChrome_(constraints.audio);
    }
    if (constraints && typeof constraints.video === "object") {
      let face = constraints.video.facingMode;
      face = face && (typeof face === "object" ? face : { ideal: face });
      const getSupportedFacingModeLies = browserDetails.version < 66;
      if (face && (face.exact === "user" || face.exact === "environment" || face.ideal === "user" || face.ideal === "environment") && !(navigator2.mediaDevices.getSupportedConstraints && navigator2.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
        delete constraints.video.facingMode;
        let matches;
        if (face.exact === "environment" || face.ideal === "environment") {
          matches = ["back", "rear"];
        } else if (face.exact === "user" || face.ideal === "user") {
          matches = ["front"];
        }
        if (matches) {
          return navigator2.mediaDevices.enumerateDevices().then((devices) => {
            devices = devices.filter((d) => d.kind === "videoinput");
            let dev = devices.find((d) => matches.some((match) => d.label.toLowerCase().includes(match)));
            if (!dev && devices.length && matches.includes("back")) {
              dev = devices[devices.length - 1];
            }
            if (dev) {
              constraints.video.deviceId = face.exact ? { exact: dev.deviceId } : { ideal: dev.deviceId };
            }
            constraints.video = constraintsToChrome_(constraints.video);
            logging("chrome: " + JSON.stringify(constraints));
            return func(constraints);
          });
        }
      }
      constraints.video = constraintsToChrome_(constraints.video);
    }
    logging("chrome: " + JSON.stringify(constraints));
    return func(constraints);
  };
  const shimError_ = function (e) {
    if (browserDetails.version >= 64) {
      return e;
    }
    return {
      name: {
        PermissionDeniedError: "NotAllowedError",
        PermissionDismissedError: "NotAllowedError",
        InvalidStateError: "NotAllowedError",
        DevicesNotFoundError: "NotFoundError",
        ConstraintNotSatisfiedError: "OverconstrainedError",
        TrackStartError: "NotReadableError",
        MediaDeviceFailedDueToShutdown: "NotAllowedError",
        MediaDeviceKillSwitchOn: "NotAllowedError",
        TabCaptureError: "AbortError",
        ScreenCaptureError: "AbortError",
        DeviceCaptureError: "AbortError"
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint || e.constraintName,
      toString() {
        return this.name + (this.message && ": ") + this.message;
      }
    };
  };
  const getUserMedia_ = function (constraints, onSuccess, onError) {
    shimConstraints_(constraints, (c) => {
      navigator2.webkitGetUserMedia(c, onSuccess, (e) => {
        if (onError) {
          onError(shimError_(e));
        }
      });
    });
  };
  navigator2.getUserMedia = getUserMedia_.bind(navigator2);
  if (navigator2.mediaDevices.getUserMedia) {
    const origGetUserMedia = navigator2.mediaDevices.getUserMedia.bind(navigator2.mediaDevices);
    navigator2.mediaDevices.getUserMedia = function (cs) {
      return shimConstraints_(cs, (c) => origGetUserMedia(c).then((stream) => {
        if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
          stream.getTracks().forEach((track) => {
            track.stop();
          });
          throw new DOMException("", "NotFoundError");
        }
        return stream;
      }, (e) => Promise.reject(shimError_(e))));
    };
  }
}
function shimGetDisplayMedia$2(window2, getSourceId) {
  if (window2.navigator.mediaDevices && "getDisplayMedia" in window2.navigator.mediaDevices) {
    return;
  }
  if (!window2.navigator.mediaDevices) {
    return;
  }
  if (typeof getSourceId !== "function") {
    console.error("shimGetDisplayMedia: getSourceId argument is not a function");
    return;
  }
  window2.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
    return getSourceId(constraints).then((sourceId) => {
      const widthSpecified = constraints.video && constraints.video.width;
      const heightSpecified = constraints.video && constraints.video.height;
      const frameRateSpecified = constraints.video && constraints.video.frameRate;
      constraints.video = {
        mandatory: {
          chromeMediaSource: "desktop",
          chromeMediaSourceId: sourceId,
          maxFrameRate: frameRateSpecified || 3
        }
      };
      if (widthSpecified) {
        constraints.video.mandatory.maxWidth = widthSpecified;
      }
      if (heightSpecified) {
        constraints.video.mandatory.maxHeight = heightSpecified;
      }
      return window2.navigator.mediaDevices.getUserMedia(constraints);
    });
  };
}
function shimMediaStream(window2) {
  window2.MediaStream = window2.MediaStream || window2.webkitMediaStream;
}
function shimOnTrack$1(window2) {
  if (typeof window2 === "object" && window2.RTCPeerConnection && !("ontrack" in window2.RTCPeerConnection.prototype)) {
    Object.defineProperty(window2.RTCPeerConnection.prototype, "ontrack", {
      get() {
        return this._ontrack;
      },
      set(f) {
        if (this._ontrack) {
          this.removeEventListener("track", this._ontrack);
        }
        this.addEventListener("track", this._ontrack = f);
      },
      enumerable: true,
      configurable: true
    });
    const origSetRemoteDescription = window2.RTCPeerConnection.prototype.setRemoteDescription;
    window2.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
      if (!this._ontrackpoly) {
        this._ontrackpoly = (e) => {
          e.stream.addEventListener("addtrack", (te) => {
            let receiver;
            if (window2.RTCPeerConnection.prototype.getReceivers) {
              receiver = this.getReceivers().find((r) => r.track && r.track.id === te.track.id);
            } else {
              receiver = { track: te.track };
            }
            const event = new Event("track");
            event.track = te.track;
            event.receiver = receiver;
            event.transceiver = { receiver };
            event.streams = [e.stream];
            this.dispatchEvent(event);
          });
          e.stream.getTracks().forEach((track) => {
            let receiver;
            if (window2.RTCPeerConnection.prototype.getReceivers) {
              receiver = this.getReceivers().find((r) => r.track && r.track.id === track.id);
            } else {
              receiver = { track };
            }
            const event = new Event("track");
            event.track = track;
            event.receiver = receiver;
            event.transceiver = { receiver };
            event.streams = [e.stream];
            this.dispatchEvent(event);
          });
        };
        this.addEventListener("addstream", this._ontrackpoly);
      }
      return origSetRemoteDescription.apply(this, arguments);
    };
  } else {
    wrapPeerConnectionEvent(window2, "track", (e) => {
      if (!e.transceiver) {
        Object.defineProperty(
          e,
          "transceiver",
          { value: { receiver: e.receiver } }
        );
      }
      return e;
    });
  }
}
function shimGetSendersWithDtmf(window2) {
  if (typeof window2 === "object" && window2.RTCPeerConnection && !("getSenders" in window2.RTCPeerConnection.prototype) && "createDTMFSender" in window2.RTCPeerConnection.prototype) {
    const shimSenderWithDtmf = function (pc, track) {
      return {
        track,
        get dtmf() {
          if (this._dtmf === void 0) {
            if (track.kind === "audio") {
              this._dtmf = pc.createDTMFSender(track);
            } else {
              this._dtmf = null;
            }
          }
          return this._dtmf;
        },
        _pc: pc
      };
    };
    if (!window2.RTCPeerConnection.prototype.getSenders) {
      window2.RTCPeerConnection.prototype.getSenders = function getSenders() {
        this._senders = this._senders || [];
        return this._senders.slice();
      };
      const origAddTrack = window2.RTCPeerConnection.prototype.addTrack;
      window2.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
        let sender = origAddTrack.apply(this, arguments);
        if (!sender) {
          sender = shimSenderWithDtmf(this, track);
          this._senders.push(sender);
        }
        return sender;
      };
      const origRemoveTrack = window2.RTCPeerConnection.prototype.removeTrack;
      window2.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
        origRemoveTrack.apply(this, arguments);
        const idx = this._senders.indexOf(sender);
        if (idx !== -1) {
          this._senders.splice(idx, 1);
        }
      };
    }
    const origAddStream = window2.RTCPeerConnection.prototype.addStream;
    window2.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      this._senders = this._senders || [];
      origAddStream.apply(this, [stream]);
      stream.getTracks().forEach((track) => {
        this._senders.push(shimSenderWithDtmf(this, track));
      });
    };
    const origRemoveStream = window2.RTCPeerConnection.prototype.removeStream;
    window2.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
      this._senders = this._senders || [];
      origRemoveStream.apply(this, [stream]);
      stream.getTracks().forEach((track) => {
        const sender = this._senders.find((s) => s.track === track);
        if (sender) {
          this._senders.splice(this._senders.indexOf(sender), 1);
        }
      });
    };
  } else if (typeof window2 === "object" && window2.RTCPeerConnection && "getSenders" in window2.RTCPeerConnection.prototype && "createDTMFSender" in window2.RTCPeerConnection.prototype && window2.RTCRtpSender && !("dtmf" in window2.RTCRtpSender.prototype)) {
    const origGetSenders = window2.RTCPeerConnection.prototype.getSenders;
    window2.RTCPeerConnection.prototype.getSenders = function getSenders() {
      const senders = origGetSenders.apply(this, []);
      senders.forEach((sender) => sender._pc = this);
      return senders;
    };
    Object.defineProperty(window2.RTCRtpSender.prototype, "dtmf", {
      get() {
        if (this._dtmf === void 0) {
          if (this.track.kind === "audio") {
            this._dtmf = this._pc.createDTMFSender(this.track);
          } else {
            this._dtmf = null;
          }
        }
        return this._dtmf;
      }
    });
  }
}
function shimGetStats(window2) {
  if (!window2.RTCPeerConnection) {
    return;
  }
  const origGetStats = window2.RTCPeerConnection.prototype.getStats;
  window2.RTCPeerConnection.prototype.getStats = function getStats() {
    const [selector, onSucc, onErr] = arguments;
    if (arguments.length > 0 && typeof selector === "function") {
      return origGetStats.apply(this, arguments);
    }
    if (origGetStats.length === 0 && (arguments.length === 0 || typeof selector !== "function")) {
      return origGetStats.apply(this, []);
    }
    const fixChromeStats_ = function (response) {
      const standardReport = {};
      const reports = response.result();
      reports.forEach((report) => {
        const standardStats = {
          id: report.id,
          timestamp: report.timestamp,
          type: {
            localcandidate: "local-candidate",
            remotecandidate: "remote-candidate"
          }[report.type] || report.type
        };
        report.names().forEach((name) => {
          standardStats[name] = report.stat(name);
        });
        standardReport[standardStats.id] = standardStats;
      });
      return standardReport;
    };
    const makeMapStats = function (stats) {
      return new Map(Object.keys(stats).map((key) => [key, stats[key]]));
    };
    if (arguments.length >= 2) {
      const successCallbackWrapper_ = function (response) {
        onSucc(makeMapStats(fixChromeStats_(response)));
      };
      return origGetStats.apply(this, [
        successCallbackWrapper_,
        selector
      ]);
    }
    return new Promise((resolve, reject) => {
      origGetStats.apply(this, [
        function (response) {
          resolve(makeMapStats(fixChromeStats_(response)));
        },
        reject
      ]);
    }).then(onSucc, onErr);
  };
}
function shimSenderReceiverGetStats(window2) {
  if (!(typeof window2 === "object" && window2.RTCPeerConnection && window2.RTCRtpSender && window2.RTCRtpReceiver)) {
    return;
  }
  if (!("getStats" in window2.RTCRtpSender.prototype)) {
    const origGetSenders = window2.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders) {
      window2.RTCPeerConnection.prototype.getSenders = function getSenders() {
        const senders = origGetSenders.apply(this, []);
        senders.forEach((sender) => sender._pc = this);
        return senders;
      };
    }
    const origAddTrack = window2.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack) {
      window2.RTCPeerConnection.prototype.addTrack = function addTrack() {
        const sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
      };
    }
    window2.RTCRtpSender.prototype.getStats = function getStats() {
      const sender = this;
      return this._pc.getStats().then((result) => filterStats(result, sender.track, true));
    };
  }
  if (!("getStats" in window2.RTCRtpReceiver.prototype)) {
    const origGetReceivers = window2.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers) {
      window2.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
        const receivers = origGetReceivers.apply(this, []);
        receivers.forEach((receiver) => receiver._pc = this);
        return receivers;
      };
    }
    wrapPeerConnectionEvent(window2, "track", (e) => {
      e.receiver._pc = e.srcElement;
      return e;
    });
    window2.RTCRtpReceiver.prototype.getStats = function getStats() {
      const receiver = this;
      return this._pc.getStats().then((result) => filterStats(result, receiver.track, false));
    };
  }
  if (!("getStats" in window2.RTCRtpSender.prototype && "getStats" in window2.RTCRtpReceiver.prototype)) {
    return;
  }
  const origGetStats = window2.RTCPeerConnection.prototype.getStats;
  window2.RTCPeerConnection.prototype.getStats = function getStats() {
    if (arguments.length > 0 && arguments[0] instanceof window2.MediaStreamTrack) {
      const track = arguments[0];
      let sender;
      let receiver;
      let err;
      this.getSenders().forEach((s) => {
        if (s.track === track) {
          if (sender) {
            err = true;
          } else {
            sender = s;
          }
        }
      });
      this.getReceivers().forEach((r) => {
        if (r.track === track) {
          if (receiver) {
            err = true;
          } else {
            receiver = r;
          }
        }
        return r.track === track;
      });
      if (err || sender && receiver) {
        return Promise.reject(new DOMException(
          "There are more than one sender or receiver for the track.",
          "InvalidAccessError"
        ));
      } else if (sender) {
        return sender.getStats();
      } else if (receiver) {
        return receiver.getStats();
      }
      return Promise.reject(new DOMException(
        "There is no sender or receiver for the track.",
        "InvalidAccessError"
      ));
    }
    return origGetStats.apply(this, arguments);
  };
}
function shimAddTrackRemoveTrackWithNative(window2) {
  window2.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    return Object.keys(this._shimmedLocalStreams).map((streamId) => this._shimmedLocalStreams[streamId][0]);
  };
  const origAddTrack = window2.RTCPeerConnection.prototype.addTrack;
  window2.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
    if (!stream) {
      return origAddTrack.apply(this, arguments);
    }
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    const sender = origAddTrack.apply(this, arguments);
    if (!this._shimmedLocalStreams[stream.id]) {
      this._shimmedLocalStreams[stream.id] = [stream, sender];
    } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
      this._shimmedLocalStreams[stream.id].push(sender);
    }
    return sender;
  };
  const origAddStream = window2.RTCPeerConnection.prototype.addStream;
  window2.RTCPeerConnection.prototype.addStream = function addStream(stream) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    stream.getTracks().forEach((track) => {
      const alreadyExists = this.getSenders().find((s) => s.track === track);
      if (alreadyExists) {
        throw new DOMException(
          "Track already exists.",
          "InvalidAccessError"
        );
      }
    });
    const existingSenders = this.getSenders();
    origAddStream.apply(this, arguments);
    const newSenders = this.getSenders().filter((newSender) => existingSenders.indexOf(newSender) === -1);
    this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
  };
  const origRemoveStream = window2.RTCPeerConnection.prototype.removeStream;
  window2.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    delete this._shimmedLocalStreams[stream.id];
    return origRemoveStream.apply(this, arguments);
  };
  const origRemoveTrack = window2.RTCPeerConnection.prototype.removeTrack;
  window2.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    if (sender) {
      Object.keys(this._shimmedLocalStreams).forEach((streamId) => {
        const idx = this._shimmedLocalStreams[streamId].indexOf(sender);
        if (idx !== -1) {
          this._shimmedLocalStreams[streamId].splice(idx, 1);
        }
        if (this._shimmedLocalStreams[streamId].length === 1) {
          delete this._shimmedLocalStreams[streamId];
        }
      });
    }
    return origRemoveTrack.apply(this, arguments);
  };
}
function shimAddTrackRemoveTrack(window2, browserDetails) {
  if (!window2.RTCPeerConnection) {
    return;
  }
  if (window2.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65) {
    return shimAddTrackRemoveTrackWithNative(window2);
  }
  const origGetLocalStreams = window2.RTCPeerConnection.prototype.getLocalStreams;
  window2.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
    const nativeStreams = origGetLocalStreams.apply(this);
    this._reverseStreams = this._reverseStreams || {};
    return nativeStreams.map((stream) => this._reverseStreams[stream.id]);
  };
  const origAddStream = window2.RTCPeerConnection.prototype.addStream;
  window2.RTCPeerConnection.prototype.addStream = function addStream(stream) {
    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};
    stream.getTracks().forEach((track) => {
      const alreadyExists = this.getSenders().find((s) => s.track === track);
      if (alreadyExists) {
        throw new DOMException(
          "Track already exists.",
          "InvalidAccessError"
        );
      }
    });
    if (!this._reverseStreams[stream.id]) {
      const newStream = new window2.MediaStream(stream.getTracks());
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      stream = newStream;
    }
    origAddStream.apply(this, [stream]);
  };
  const origRemoveStream = window2.RTCPeerConnection.prototype.removeStream;
  window2.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};
    origRemoveStream.apply(this, [this._streams[stream.id] || stream]);
    delete this._reverseStreams[this._streams[stream.id] ? this._streams[stream.id].id : stream.id];
    delete this._streams[stream.id];
  };
  window2.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
    if (this.signalingState === "closed") {
      throw new DOMException(
        "The RTCPeerConnection's signalingState is 'closed'.",
        "InvalidStateError"
      );
    }
    const streams = [].slice.call(arguments, 1);
    if (streams.length !== 1 || !streams[0].getTracks().find((t) => t === track)) {
      throw new DOMException(
        "The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.",
        "NotSupportedError"
      );
    }
    const alreadyExists = this.getSenders().find((s) => s.track === track);
    if (alreadyExists) {
      throw new DOMException(
        "Track already exists.",
        "InvalidAccessError"
      );
    }
    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};
    const oldStream = this._streams[stream.id];
    if (oldStream) {
      oldStream.addTrack(track);
      Promise.resolve().then(() => {
        this.dispatchEvent(new Event("negotiationneeded"));
      });
    } else {
      const newStream = new window2.MediaStream([track]);
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      this.addStream(newStream);
    }
    return this.getSenders().find((s) => s.track === track);
  };
  function replaceInternalStreamId(pc, description) {
    let sdp2 = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach((internalId) => {
      const externalStream = pc._reverseStreams[internalId];
      const internalStream = pc._streams[externalStream.id];
      sdp2 = sdp2.replace(
        new RegExp(internalStream.id, "g"),
        externalStream.id
      );
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp: sdp2
    });
  }
  function replaceExternalStreamId(pc, description) {
    let sdp2 = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach((internalId) => {
      const externalStream = pc._reverseStreams[internalId];
      const internalStream = pc._streams[externalStream.id];
      sdp2 = sdp2.replace(
        new RegExp(externalStream.id, "g"),
        internalStream.id
      );
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp: sdp2
    });
  }
  ["createOffer", "createAnswer"].forEach(function (method) {
    const nativeMethod = window2.RTCPeerConnection.prototype[method];
    const methodObj = {
      [method]() {
        const args = arguments;
        const isLegacyCall = arguments.length && typeof arguments[0] === "function";
        if (isLegacyCall) {
          return nativeMethod.apply(this, [
            (description) => {
              const desc = replaceInternalStreamId(this, description);
              args[0].apply(null, [desc]);
            },
            (err) => {
              if (args[1]) {
                args[1].apply(null, err);
              }
            },
            arguments[2]
          ]);
        }
        return nativeMethod.apply(this, arguments).then((description) => replaceInternalStreamId(this, description));
      }
    };
    window2.RTCPeerConnection.prototype[method] = methodObj[method];
  });
  const origSetLocalDescription = window2.RTCPeerConnection.prototype.setLocalDescription;
  window2.RTCPeerConnection.prototype.setLocalDescription = function setLocalDescription() {
    if (!arguments.length || !arguments[0].type) {
      return origSetLocalDescription.apply(this, arguments);
    }
    arguments[0] = replaceExternalStreamId(this, arguments[0]);
    return origSetLocalDescription.apply(this, arguments);
  };
  const origLocalDescription = Object.getOwnPropertyDescriptor(
    window2.RTCPeerConnection.prototype,
    "localDescription"
  );
  Object.defineProperty(
    window2.RTCPeerConnection.prototype,
    "localDescription",
    {
      get() {
        const description = origLocalDescription.get.apply(this);
        if (description.type === "") {
          return description;
        }
        return replaceInternalStreamId(this, description);
      }
    }
  );
  window2.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
    if (this.signalingState === "closed") {
      throw new DOMException(
        "The RTCPeerConnection's signalingState is 'closed'.",
        "InvalidStateError"
      );
    }
    if (!sender._pc) {
      throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
    }
    const isLocal = sender._pc === this;
    if (!isLocal) {
      throw new DOMException(
        "Sender was not created by this connection.",
        "InvalidAccessError"
      );
    }
    this._streams = this._streams || {};
    let stream;
    Object.keys(this._streams).forEach((streamid) => {
      const hasTrack = this._streams[streamid].getTracks().find((track) => sender.track === track);
      if (hasTrack) {
        stream = this._streams[streamid];
      }
    });
    if (stream) {
      if (stream.getTracks().length === 1) {
        this.removeStream(this._reverseStreams[stream.id]);
      } else {
        stream.removeTrack(sender.track);
      }
      this.dispatchEvent(new Event("negotiationneeded"));
    }
  };
}
function shimPeerConnection$2(window2, browserDetails) {
  if (!window2.RTCPeerConnection && window2.webkitRTCPeerConnection) {
    window2.RTCPeerConnection = window2.webkitRTCPeerConnection;
  }
  if (!window2.RTCPeerConnection) {
    return;
  }
  if (browserDetails.version < 53) {
    ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (method) {
      const nativeMethod = window2.RTCPeerConnection.prototype[method];
      const methodObj = {
        [method]() {
          arguments[0] = new (method === "addIceCandidate" ? window2.RTCIceCandidate : window2.RTCSessionDescription)(arguments[0]);
          return nativeMethod.apply(this, arguments);
        }
      };
      window2.RTCPeerConnection.prototype[method] = methodObj[method];
    });
  }
}
function fixNegotiationNeeded(window2, browserDetails) {
  wrapPeerConnectionEvent(window2, "negotiationneeded", (e) => {
    const pc = e.target;
    if (browserDetails.version < 72 || pc.getConfiguration && pc.getConfiguration().sdpSemantics === "plan-b") {
      if (pc.signalingState !== "stable") {
        return;
      }
    }
    return e;
  });
}
const chromeShim = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  shimMediaStream,
  shimOnTrack: shimOnTrack$1,
  shimGetSendersWithDtmf,
  shimGetStats,
  shimSenderReceiverGetStats,
  shimAddTrackRemoveTrackWithNative,
  shimAddTrackRemoveTrack,
  shimPeerConnection: shimPeerConnection$2,
  fixNegotiationNeeded,
  shimGetUserMedia: shimGetUserMedia$3,
  shimGetDisplayMedia: shimGetDisplayMedia$2
}, Symbol.toStringTag, { value: "Module" }));
function filterIceServers$1(iceServers, edgeVersion) {
  let hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter((server) => {
    if (server && (server.urls || server.url)) {
      let urls = server.urls || server.url;
      if (server.url && !server.urls) {
        deprecated("RTCIceServer.url", "RTCIceServer.urls");
      }
      const isString = typeof urls === "string";
      if (isString) {
        urls = [urls];
      }
      urls = urls.filter((url) => {
        if (url.indexOf("stun:") === 0) {
          return false;
        }
        const validTurn = url.startsWith("turn") && !url.startsWith("turn:[") && url.includes("transport=udp");
        if (validTurn && !hasTurn) {
          hasTurn = true;
          return true;
        }
        return validTurn && !hasTurn;
      });
      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
}
var sdp = { exports: {} };
(function (module) {
  var SDPUtils2 = {};
  SDPUtils2.generateIdentifier = function () {
    return Math.random().toString(36).substr(2, 10);
  };
  SDPUtils2.localCName = SDPUtils2.generateIdentifier();
  SDPUtils2.splitLines = function (blob) {
    return blob.trim().split("\n").map(function (line) {
      return line.trim();
    });
  };
  SDPUtils2.splitSections = function (blob) {
    var parts = blob.split("\nm=");
    return parts.map(function (part, index) {
      return (index > 0 ? "m=" + part : part).trim() + "\r\n";
    });
  };
  SDPUtils2.getDescription = function (blob) {
    var sections = SDPUtils2.splitSections(blob);
    return sections && sections[0];
  };
  SDPUtils2.getMediaSections = function (blob) {
    var sections = SDPUtils2.splitSections(blob);
    sections.shift();
    return sections;
  };
  SDPUtils2.matchPrefix = function (blob, prefix) {
    return SDPUtils2.splitLines(blob).filter(function (line) {
      return line.indexOf(prefix) === 0;
    });
  };
  SDPUtils2.parseCandidate = function (line) {
    var parts;
    if (line.indexOf("a=candidate:") === 0) {
      parts = line.substring(12).split(" ");
    } else {
      parts = line.substring(10).split(" ");
    }
    var candidate = {
      foundation: parts[0],
      component: parseInt(parts[1], 10),
      protocol: parts[2].toLowerCase(),
      priority: parseInt(parts[3], 10),
      ip: parts[4],
      address: parts[4],
      port: parseInt(parts[5], 10),
      type: parts[7]
    };
    for (var i = 8; i < parts.length; i += 2) {
      switch (parts[i]) {
        case "raddr":
          candidate.relatedAddress = parts[i + 1];
          break;
        case "rport":
          candidate.relatedPort = parseInt(parts[i + 1], 10);
          break;
        case "tcptype":
          candidate.tcpType = parts[i + 1];
          break;
        case "ufrag":
          candidate.ufrag = parts[i + 1];
          candidate.usernameFragment = parts[i + 1];
          break;
        default:
          candidate[parts[i]] = parts[i + 1];
          break;
      }
    }
    return candidate;
  };
  SDPUtils2.writeCandidate = function (candidate) {
    var sdp2 = [];
    sdp2.push(candidate.foundation);
    sdp2.push(candidate.component);
    sdp2.push(candidate.protocol.toUpperCase());
    sdp2.push(candidate.priority);
    sdp2.push(candidate.address || candidate.ip);
    sdp2.push(candidate.port);
    var type2 = candidate.type;
    sdp2.push("typ");
    sdp2.push(type2);
    if (type2 !== "host" && candidate.relatedAddress && candidate.relatedPort) {
      sdp2.push("raddr");
      sdp2.push(candidate.relatedAddress);
      sdp2.push("rport");
      sdp2.push(candidate.relatedPort);
    }
    if (candidate.tcpType && candidate.protocol.toLowerCase() === "tcp") {
      sdp2.push("tcptype");
      sdp2.push(candidate.tcpType);
    }
    if (candidate.usernameFragment || candidate.ufrag) {
      sdp2.push("ufrag");
      sdp2.push(candidate.usernameFragment || candidate.ufrag);
    }
    return "candidate:" + sdp2.join(" ");
  };
  SDPUtils2.parseIceOptions = function (line) {
    return line.substr(14).split(" ");
  };
  SDPUtils2.parseRtpMap = function (line) {
    var parts = line.substr(9).split(" ");
    var parsed = {
      payloadType: parseInt(parts.shift(), 10)
    };
    parts = parts[0].split("/");
    parsed.name = parts[0];
    parsed.clockRate = parseInt(parts[1], 10);
    parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
    parsed.numChannels = parsed.channels;
    return parsed;
  };
  SDPUtils2.writeRtpMap = function (codec) {
    var pt = codec.payloadType;
    if (codec.preferredPayloadType !== void 0) {
      pt = codec.preferredPayloadType;
    }
    var channels = codec.channels || codec.numChannels || 1;
    return "a=rtpmap:" + pt + " " + codec.name + "/" + codec.clockRate + (channels !== 1 ? "/" + channels : "") + "\r\n";
  };
  SDPUtils2.parseExtmap = function (line) {
    var parts = line.substr(9).split(" ");
    return {
      id: parseInt(parts[0], 10),
      direction: parts[0].indexOf("/") > 0 ? parts[0].split("/")[1] : "sendrecv",
      uri: parts[1]
    };
  };
  SDPUtils2.writeExtmap = function (headerExtension) {
    return "a=extmap:" + (headerExtension.id || headerExtension.preferredId) + (headerExtension.direction && headerExtension.direction !== "sendrecv" ? "/" + headerExtension.direction : "") + " " + headerExtension.uri + "\r\n";
  };
  SDPUtils2.parseFmtp = function (line) {
    var parsed = {};
    var kv;
    var parts = line.substr(line.indexOf(" ") + 1).split(";");
    for (var j = 0; j < parts.length; j++) {
      kv = parts[j].trim().split("=");
      parsed[kv[0].trim()] = kv[1];
    }
    return parsed;
  };
  SDPUtils2.writeFmtp = function (codec) {
    var line = "";
    var pt = codec.payloadType;
    if (codec.preferredPayloadType !== void 0) {
      pt = codec.preferredPayloadType;
    }
    if (codec.parameters && Object.keys(codec.parameters).length) {
      var params = [];
      Object.keys(codec.parameters).forEach(function (param) {
        if (codec.parameters[param]) {
          params.push(param + "=" + codec.parameters[param]);
        } else {
          params.push(param);
        }
      });
      line += "a=fmtp:" + pt + " " + params.join(";") + "\r\n";
    }
    return line;
  };
  SDPUtils2.parseRtcpFb = function (line) {
    var parts = line.substr(line.indexOf(" ") + 1).split(" ");
    return {
      type: parts.shift(),
      parameter: parts.join(" ")
    };
  };
  SDPUtils2.writeRtcpFb = function (codec) {
    var lines = "";
    var pt = codec.payloadType;
    if (codec.preferredPayloadType !== void 0) {
      pt = codec.preferredPayloadType;
    }
    if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
      codec.rtcpFeedback.forEach(function (fb) {
        lines += "a=rtcp-fb:" + pt + " " + fb.type + (fb.parameter && fb.parameter.length ? " " + fb.parameter : "") + "\r\n";
      });
    }
    return lines;
  };
  SDPUtils2.parseSsrcMedia = function (line) {
    var sp = line.indexOf(" ");
    var parts = {
      ssrc: parseInt(line.substr(7, sp - 7), 10)
    };
    var colon = line.indexOf(":", sp);
    if (colon > -1) {
      parts.attribute = line.substr(sp + 1, colon - sp - 1);
      parts.value = line.substr(colon + 1);
    } else {
      parts.attribute = line.substr(sp + 1);
    }
    return parts;
  };
  SDPUtils2.parseSsrcGroup = function (line) {
    var parts = line.substr(13).split(" ");
    return {
      semantics: parts.shift(),
      ssrcs: parts.map(function (ssrc) {
        return parseInt(ssrc, 10);
      })
    };
  };
  SDPUtils2.getMid = function (mediaSection) {
    var mid = SDPUtils2.matchPrefix(mediaSection, "a=mid:")[0];
    if (mid) {
      return mid.substr(6);
    }
  };
  SDPUtils2.parseFingerprint = function (line) {
    var parts = line.substr(14).split(" ");
    return {
      algorithm: parts[0].toLowerCase(),
      value: parts[1]
    };
  };
  SDPUtils2.getDtlsParameters = function (mediaSection, sessionpart) {
    var lines = SDPUtils2.matchPrefix(
      mediaSection + sessionpart,
      "a=fingerprint:"
    );
    return {
      role: "auto",
      fingerprints: lines.map(SDPUtils2.parseFingerprint)
    };
  };
  SDPUtils2.writeDtlsParameters = function (params, setupType) {
    var sdp2 = "a=setup:" + setupType + "\r\n";
    params.fingerprints.forEach(function (fp) {
      sdp2 += "a=fingerprint:" + fp.algorithm + " " + fp.value + "\r\n";
    });
    return sdp2;
  };
  SDPUtils2.parseCryptoLine = function (line) {
    var parts = line.substr(9).split(" ");
    return {
      tag: parseInt(parts[0], 10),
      cryptoSuite: parts[1],
      keyParams: parts[2],
      sessionParams: parts.slice(3)
    };
  };
  SDPUtils2.writeCryptoLine = function (parameters) {
    return "a=crypto:" + parameters.tag + " " + parameters.cryptoSuite + " " + (typeof parameters.keyParams === "object" ? SDPUtils2.writeCryptoKeyParams(parameters.keyParams) : parameters.keyParams) + (parameters.sessionParams ? " " + parameters.sessionParams.join(" ") : "") + "\r\n";
  };
  SDPUtils2.parseCryptoKeyParams = function (keyParams) {
    if (keyParams.indexOf("inline:") !== 0) {
      return null;
    }
    var parts = keyParams.substr(7).split("|");
    return {
      keyMethod: "inline",
      keySalt: parts[0],
      lifeTime: parts[1],
      mkiValue: parts[2] ? parts[2].split(":")[0] : void 0,
      mkiLength: parts[2] ? parts[2].split(":")[1] : void 0
    };
  };
  SDPUtils2.writeCryptoKeyParams = function (keyParams) {
    return keyParams.keyMethod + ":" + keyParams.keySalt + (keyParams.lifeTime ? "|" + keyParams.lifeTime : "") + (keyParams.mkiValue && keyParams.mkiLength ? "|" + keyParams.mkiValue + ":" + keyParams.mkiLength : "");
  };
  SDPUtils2.getCryptoParameters = function (mediaSection, sessionpart) {
    var lines = SDPUtils2.matchPrefix(
      mediaSection + sessionpart,
      "a=crypto:"
    );
    return lines.map(SDPUtils2.parseCryptoLine);
  };
  SDPUtils2.getIceParameters = function (mediaSection, sessionpart) {
    var ufrag = SDPUtils2.matchPrefix(
      mediaSection + sessionpart,
      "a=ice-ufrag:"
    )[0];
    var pwd = SDPUtils2.matchPrefix(
      mediaSection + sessionpart,
      "a=ice-pwd:"
    )[0];
    if (!(ufrag && pwd)) {
      return null;
    }
    return {
      usernameFragment: ufrag.substr(12),
      password: pwd.substr(10)
    };
  };
  SDPUtils2.writeIceParameters = function (params) {
    return "a=ice-ufrag:" + params.usernameFragment + "\r\na=ice-pwd:" + params.password + "\r\n";
  };
  SDPUtils2.parseRtpParameters = function (mediaSection) {
    var description = {
      codecs: [],
      headerExtensions: [],
      fecMechanisms: [],
      rtcp: []
    };
    var lines = SDPUtils2.splitLines(mediaSection);
    var mline = lines[0].split(" ");
    for (var i = 3; i < mline.length; i++) {
      var pt = mline[i];
      var rtpmapline = SDPUtils2.matchPrefix(
        mediaSection,
        "a=rtpmap:" + pt + " "
      )[0];
      if (rtpmapline) {
        var codec = SDPUtils2.parseRtpMap(rtpmapline);
        var fmtps = SDPUtils2.matchPrefix(
          mediaSection,
          "a=fmtp:" + pt + " "
        );
        codec.parameters = fmtps.length ? SDPUtils2.parseFmtp(fmtps[0]) : {};
        codec.rtcpFeedback = SDPUtils2.matchPrefix(
          mediaSection,
          "a=rtcp-fb:" + pt + " "
        ).map(SDPUtils2.parseRtcpFb);
        description.codecs.push(codec);
        switch (codec.name.toUpperCase()) {
          case "RED":
          case "ULPFEC":
            description.fecMechanisms.push(codec.name.toUpperCase());
            break;
        }
      }
    }
    SDPUtils2.matchPrefix(mediaSection, "a=extmap:").forEach(function (line) {
      description.headerExtensions.push(SDPUtils2.parseExtmap(line));
    });
    return description;
  };
  SDPUtils2.writeRtpDescription = function (kind, caps) {
    var sdp2 = "";
    sdp2 += "m=" + kind + " ";
    sdp2 += caps.codecs.length > 0 ? "9" : "0";
    sdp2 += " UDP/TLS/RTP/SAVPF ";
    sdp2 += caps.codecs.map(function (codec) {
      if (codec.preferredPayloadType !== void 0) {
        return codec.preferredPayloadType;
      }
      return codec.payloadType;
    }).join(" ") + "\r\n";
    sdp2 += "c=IN IP4 0.0.0.0\r\n";
    sdp2 += "a=rtcp:9 IN IP4 0.0.0.0\r\n";
    caps.codecs.forEach(function (codec) {
      sdp2 += SDPUtils2.writeRtpMap(codec);
      sdp2 += SDPUtils2.writeFmtp(codec);
      sdp2 += SDPUtils2.writeRtcpFb(codec);
    });
    var maxptime = 0;
    caps.codecs.forEach(function (codec) {
      if (codec.maxptime > maxptime) {
        maxptime = codec.maxptime;
      }
    });
    if (maxptime > 0) {
      sdp2 += "a=maxptime:" + maxptime + "\r\n";
    }
    sdp2 += "a=rtcp-mux\r\n";
    if (caps.headerExtensions) {
      caps.headerExtensions.forEach(function (extension) {
        sdp2 += SDPUtils2.writeExtmap(extension);
      });
    }
    return sdp2;
  };
  SDPUtils2.parseRtpEncodingParameters = function (mediaSection) {
    var encodingParameters = [];
    var description = SDPUtils2.parseRtpParameters(mediaSection);
    var hasRed = description.fecMechanisms.indexOf("RED") !== -1;
    var hasUlpfec = description.fecMechanisms.indexOf("ULPFEC") !== -1;
    var ssrcs = SDPUtils2.matchPrefix(mediaSection, "a=ssrc:").map(function (line) {
      return SDPUtils2.parseSsrcMedia(line);
    }).filter(function (parts) {
      return parts.attribute === "cname";
    });
    var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
    var secondarySsrc;
    var flows = SDPUtils2.matchPrefix(mediaSection, "a=ssrc-group:FID").map(function (line) {
      var parts = line.substr(17).split(" ");
      return parts.map(function (part) {
        return parseInt(part, 10);
      });
    });
    if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
      secondarySsrc = flows[0][1];
    }
    description.codecs.forEach(function (codec) {
      if (codec.name.toUpperCase() === "RTX" && codec.parameters.apt) {
        var encParam = {
          ssrc: primarySsrc,
          codecPayloadType: parseInt(codec.parameters.apt, 10)
        };
        if (primarySsrc && secondarySsrc) {
          encParam.rtx = { ssrc: secondarySsrc };
        }
        encodingParameters.push(encParam);
        if (hasRed) {
          encParam = JSON.parse(JSON.stringify(encParam));
          encParam.fec = {
            ssrc: primarySsrc,
            mechanism: hasUlpfec ? "red+ulpfec" : "red"
          };
          encodingParameters.push(encParam);
        }
      }
    });
    if (encodingParameters.length === 0 && primarySsrc) {
      encodingParameters.push({
        ssrc: primarySsrc
      });
    }
    var bandwidth = SDPUtils2.matchPrefix(mediaSection, "b=");
    if (bandwidth.length) {
      if (bandwidth[0].indexOf("b=TIAS:") === 0) {
        bandwidth = parseInt(bandwidth[0].substr(7), 10);
      } else if (bandwidth[0].indexOf("b=AS:") === 0) {
        bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1e3 * 0.95 - 50 * 40 * 8;
      } else {
        bandwidth = void 0;
      }
      encodingParameters.forEach(function (params) {
        params.maxBitrate = bandwidth;
      });
    }
    return encodingParameters;
  };
  SDPUtils2.parseRtcpParameters = function (mediaSection) {
    var rtcpParameters = {};
    var remoteSsrc = SDPUtils2.matchPrefix(mediaSection, "a=ssrc:").map(function (line) {
      return SDPUtils2.parseSsrcMedia(line);
    }).filter(function (obj) {
      return obj.attribute === "cname";
    })[0];
    if (remoteSsrc) {
      rtcpParameters.cname = remoteSsrc.value;
      rtcpParameters.ssrc = remoteSsrc.ssrc;
    }
    var rsize = SDPUtils2.matchPrefix(mediaSection, "a=rtcp-rsize");
    rtcpParameters.reducedSize = rsize.length > 0;
    rtcpParameters.compound = rsize.length === 0;
    var mux = SDPUtils2.matchPrefix(mediaSection, "a=rtcp-mux");
    rtcpParameters.mux = mux.length > 0;
    return rtcpParameters;
  };
  SDPUtils2.parseMsid = function (mediaSection) {
    var parts;
    var spec = SDPUtils2.matchPrefix(mediaSection, "a=msid:");
    if (spec.length === 1) {
      parts = spec[0].substr(7).split(" ");
      return { stream: parts[0], track: parts[1] };
    }
    var planB = SDPUtils2.matchPrefix(mediaSection, "a=ssrc:").map(function (line) {
      return SDPUtils2.parseSsrcMedia(line);
    }).filter(function (msidParts) {
      return msidParts.attribute === "msid";
    });
    if (planB.length > 0) {
      parts = planB[0].value.split(" ");
      return { stream: parts[0], track: parts[1] };
    }
  };
  SDPUtils2.parseSctpDescription = function (mediaSection) {
    var mline = SDPUtils2.parseMLine(mediaSection);
    var maxSizeLine = SDPUtils2.matchPrefix(mediaSection, "a=max-message-size:");
    var maxMessageSize;
    if (maxSizeLine.length > 0) {
      maxMessageSize = parseInt(maxSizeLine[0].substr(19), 10);
    }
    if (isNaN(maxMessageSize)) {
      maxMessageSize = 65536;
    }
    var sctpPort = SDPUtils2.matchPrefix(mediaSection, "a=sctp-port:");
    if (sctpPort.length > 0) {
      return {
        port: parseInt(sctpPort[0].substr(12), 10),
        protocol: mline.fmt,
        maxMessageSize
      };
    }
    var sctpMapLines = SDPUtils2.matchPrefix(mediaSection, "a=sctpmap:");
    if (sctpMapLines.length > 0) {
      var parts = SDPUtils2.matchPrefix(mediaSection, "a=sctpmap:")[0].substr(10).split(" ");
      return {
        port: parseInt(parts[0], 10),
        protocol: parts[1],
        maxMessageSize
      };
    }
  };
  SDPUtils2.writeSctpDescription = function (media, sctp) {
    var output = [];
    if (media.protocol !== "DTLS/SCTP") {
      output = [
        "m=" + media.kind + " 9 " + media.protocol + " " + sctp.protocol + "\r\n",
        "c=IN IP4 0.0.0.0\r\n",
        "a=sctp-port:" + sctp.port + "\r\n"
      ];
    } else {
      output = [
        "m=" + media.kind + " 9 " + media.protocol + " " + sctp.port + "\r\n",
        "c=IN IP4 0.0.0.0\r\n",
        "a=sctpmap:" + sctp.port + " " + sctp.protocol + " 65535\r\n"
      ];
    }
    if (sctp.maxMessageSize !== void 0) {
      output.push("a=max-message-size:" + sctp.maxMessageSize + "\r\n");
    }
    return output.join("");
  };
  SDPUtils2.generateSessionId = function () {
    return Math.random().toString().substr(2, 21);
  };
  SDPUtils2.writeSessionBoilerplate = function (sessId, sessVer, sessUser) {
    var sessionId;
    var version = sessVer !== void 0 ? sessVer : 2;
    if (sessId) {
      sessionId = sessId;
    } else {
      sessionId = SDPUtils2.generateSessionId();
    }
    var user = sessUser || "thisisadapterortc";
    return "v=0\r\no=" + user + " " + sessionId + " " + version + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n";
  };
  SDPUtils2.writeMediaSection = function (transceiver, caps, type2, stream) {
    var sdp2 = SDPUtils2.writeRtpDescription(transceiver.kind, caps);
    sdp2 += SDPUtils2.writeIceParameters(
      transceiver.iceGatherer.getLocalParameters()
    );
    sdp2 += SDPUtils2.writeDtlsParameters(
      transceiver.dtlsTransport.getLocalParameters(),
      type2 === "offer" ? "actpass" : "active"
    );
    sdp2 += "a=mid:" + transceiver.mid + "\r\n";
    if (transceiver.direction) {
      sdp2 += "a=" + transceiver.direction + "\r\n";
    } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
      sdp2 += "a=sendrecv\r\n";
    } else if (transceiver.rtpSender) {
      sdp2 += "a=sendonly\r\n";
    } else if (transceiver.rtpReceiver) {
      sdp2 += "a=recvonly\r\n";
    } else {
      sdp2 += "a=inactive\r\n";
    }
    if (transceiver.rtpSender) {
      var msid = "msid:" + stream.id + " " + transceiver.rtpSender.track.id + "\r\n";
      sdp2 += "a=" + msid;
      sdp2 += "a=ssrc:" + transceiver.sendEncodingParameters[0].ssrc + " " + msid;
      if (transceiver.sendEncodingParameters[0].rtx) {
        sdp2 += "a=ssrc:" + transceiver.sendEncodingParameters[0].rtx.ssrc + " " + msid;
        sdp2 += "a=ssrc-group:FID " + transceiver.sendEncodingParameters[0].ssrc + " " + transceiver.sendEncodingParameters[0].rtx.ssrc + "\r\n";
      }
    }
    sdp2 += "a=ssrc:" + transceiver.sendEncodingParameters[0].ssrc + " cname:" + SDPUtils2.localCName + "\r\n";
    if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
      sdp2 += "a=ssrc:" + transceiver.sendEncodingParameters[0].rtx.ssrc + " cname:" + SDPUtils2.localCName + "\r\n";
    }
    return sdp2;
  };
  SDPUtils2.getDirection = function (mediaSection, sessionpart) {
    var lines = SDPUtils2.splitLines(mediaSection);
    for (var i = 0; i < lines.length; i++) {
      switch (lines[i]) {
        case "a=sendrecv":
        case "a=sendonly":
        case "a=recvonly":
        case "a=inactive":
          return lines[i].substr(2);
      }
    }
    if (sessionpart) {
      return SDPUtils2.getDirection(sessionpart);
    }
    return "sendrecv";
  };
  SDPUtils2.getKind = function (mediaSection) {
    var lines = SDPUtils2.splitLines(mediaSection);
    var mline = lines[0].split(" ");
    return mline[0].substr(2);
  };
  SDPUtils2.isRejected = function (mediaSection) {
    return mediaSection.split(" ", 2)[1] === "0";
  };
  SDPUtils2.parseMLine = function (mediaSection) {
    var lines = SDPUtils2.splitLines(mediaSection);
    var parts = lines[0].substr(2).split(" ");
    return {
      kind: parts[0],
      port: parseInt(parts[1], 10),
      protocol: parts[2],
      fmt: parts.slice(3).join(" ")
    };
  };
  SDPUtils2.parseOLine = function (mediaSection) {
    var line = SDPUtils2.matchPrefix(mediaSection, "o=")[0];
    var parts = line.substr(2).split(" ");
    return {
      username: parts[0],
      sessionId: parts[1],
      sessionVersion: parseInt(parts[2], 10),
      netType: parts[3],
      addressType: parts[4],
      address: parts[5]
    };
  };
  SDPUtils2.isValidSDP = function (blob) {
    if (typeof blob !== "string" || blob.length === 0) {
      return false;
    }
    var lines = SDPUtils2.splitLines(blob);
    for (var i = 0; i < lines.length; i++) {
      if (lines[i].length < 2 || lines[i].charAt(1) !== "=") {
        return false;
      }
    }
    return true;
  };
  {
    module.exports = SDPUtils2;
  }
})(sdp);
const SDPUtils$1 = sdp.exports;
var SDPUtils = sdp.exports;
function fixStatsType(stat) {
  return {
    inboundrtp: "inbound-rtp",
    outboundrtp: "outbound-rtp",
    candidatepair: "candidate-pair",
    localcandidate: "local-candidate",
    remotecandidate: "remote-candidate"
  }[stat.type] || stat.type;
}
function writeMediaSection(transceiver, caps, type2, stream, dtlsRole) {
  var sdp2 = SDPUtils.writeRtpDescription(transceiver.kind, caps);
  sdp2 += SDPUtils.writeIceParameters(
    transceiver.iceGatherer.getLocalParameters()
  );
  sdp2 += SDPUtils.writeDtlsParameters(
    transceiver.dtlsTransport.getLocalParameters(),
    type2 === "offer" ? "actpass" : dtlsRole || "active"
  );
  sdp2 += "a=mid:" + transceiver.mid + "\r\n";
  if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp2 += "a=sendrecv\r\n";
  } else if (transceiver.rtpSender) {
    sdp2 += "a=sendonly\r\n";
  } else if (transceiver.rtpReceiver) {
    sdp2 += "a=recvonly\r\n";
  } else {
    sdp2 += "a=inactive\r\n";
  }
  if (transceiver.rtpSender) {
    var trackId = transceiver.rtpSender._initialTrackId || transceiver.rtpSender.track.id;
    transceiver.rtpSender._initialTrackId = trackId;
    var msid = "msid:" + (stream ? stream.id : "-") + " " + trackId + "\r\n";
    sdp2 += "a=" + msid;
    sdp2 += "a=ssrc:" + transceiver.sendEncodingParameters[0].ssrc + " " + msid;
    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp2 += "a=ssrc:" + transceiver.sendEncodingParameters[0].rtx.ssrc + " " + msid;
      sdp2 += "a=ssrc-group:FID " + transceiver.sendEncodingParameters[0].ssrc + " " + transceiver.sendEncodingParameters[0].rtx.ssrc + "\r\n";
    }
  }
  sdp2 += "a=ssrc:" + transceiver.sendEncodingParameters[0].ssrc + " cname:" + SDPUtils.localCName + "\r\n";
  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp2 += "a=ssrc:" + transceiver.sendEncodingParameters[0].rtx.ssrc + " cname:" + SDPUtils.localCName + "\r\n";
  }
  return sdp2;
}
function filterIceServers(iceServers, edgeVersion) {
  var hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(function (server) {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;
      if (server.url && !server.urls) {
        console.warn("RTCIceServer.url is deprecated! Use urls instead.");
      }
      var isString = typeof urls === "string";
      if (isString) {
        urls = [urls];
      }
      urls = urls.filter(function (url) {
        var validTurn = url.indexOf("turn:") === 0 && url.indexOf("transport=udp") !== -1 && url.indexOf("turn:[") === -1 && !hasTurn;
        if (validTurn) {
          hasTurn = true;
          return true;
        }
        return url.indexOf("stun:") === 0 && edgeVersion >= 14393 && url.indexOf("?transport=udp") === -1;
      });
      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
}
function getCommonCapabilities(localCapabilities, remoteCapabilities) {
  var commonCapabilities = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: []
  };
  var findCodecByPayloadType = function (pt, codecs) {
    pt = parseInt(pt, 10);
    for (var i = 0; i < codecs.length; i++) {
      if (codecs[i].payloadType === pt || codecs[i].preferredPayloadType === pt) {
        return codecs[i];
      }
    }
  };
  var rtxCapabilityMatches = function (lRtx, rRtx, lCodecs, rCodecs) {
    var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
    var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
    return lCodec && rCodec && lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
  };
  localCapabilities.codecs.forEach(function (lCodec) {
    for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
      var rCodec = remoteCapabilities.codecs[i];
      if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() && lCodec.clockRate === rCodec.clockRate) {
        if (lCodec.name.toLowerCase() === "rtx" && lCodec.parameters && rCodec.parameters.apt) {
          if (!rtxCapabilityMatches(
            lCodec,
            rCodec,
            localCapabilities.codecs,
            remoteCapabilities.codecs
          )) {
            continue;
          }
        }
        rCodec = JSON.parse(JSON.stringify(rCodec));
        rCodec.numChannels = Math.min(
          lCodec.numChannels,
          rCodec.numChannels
        );
        commonCapabilities.codecs.push(rCodec);
        rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function (fb) {
          for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
            if (lCodec.rtcpFeedback[j].type === fb.type && lCodec.rtcpFeedback[j].parameter === fb.parameter) {
              return true;
            }
          }
          return false;
        });
        break;
      }
    }
  });
  localCapabilities.headerExtensions.forEach(function (lHeaderExtension) {
    for (var i = 0; i < remoteCapabilities.headerExtensions.length; i++) {
      var rHeaderExtension = remoteCapabilities.headerExtensions[i];
      if (lHeaderExtension.uri === rHeaderExtension.uri) {
        commonCapabilities.headerExtensions.push(rHeaderExtension);
        break;
      }
    }
  });
  return commonCapabilities;
}
function isActionAllowedInSignalingState(action, type2, signalingState) {
  return {
    offer: {
      setLocalDescription: ["stable", "have-local-offer"],
      setRemoteDescription: ["stable", "have-remote-offer"]
    },
    answer: {
      setLocalDescription: ["have-remote-offer", "have-local-pranswer"],
      setRemoteDescription: ["have-local-offer", "have-remote-pranswer"]
    }
  }[type2][action].indexOf(signalingState) !== -1;
}
function maybeAddCandidate(iceTransport, candidate) {
  var alreadyAdded = iceTransport.getRemoteCandidates().find(function (remoteCandidate) {
    return candidate.foundation === remoteCandidate.foundation && candidate.ip === remoteCandidate.ip && candidate.port === remoteCandidate.port && candidate.priority === remoteCandidate.priority && candidate.protocol === remoteCandidate.protocol && candidate.type === remoteCandidate.type;
  });
  if (!alreadyAdded) {
    iceTransport.addRemoteCandidate(candidate);
  }
  return !alreadyAdded;
}
function makeError(name, description) {
  var e = new Error(description);
  e.name = name;
  e.code = {
    NotSupportedError: 9,
    InvalidStateError: 11,
    InvalidAccessError: 15,
    TypeError: void 0,
    OperationError: void 0
  }[name];
  return e;
}
var rtcpeerconnection = function (window2, edgeVersion) {
  function addTrackToStreamAndFireEvent(track, stream) {
    stream.addTrack(track);
    stream.dispatchEvent(new window2.MediaStreamTrackEvent(
      "addtrack",
      { track }
    ));
  }
  function removeTrackFromStreamAndFireEvent(track, stream) {
    stream.removeTrack(track);
    stream.dispatchEvent(new window2.MediaStreamTrackEvent(
      "removetrack",
      { track }
    ));
  }
  function fireAddTrack(pc, track, receiver, streams) {
    var trackEvent = new Event("track");
    trackEvent.track = track;
    trackEvent.receiver = receiver;
    trackEvent.transceiver = { receiver };
    trackEvent.streams = streams;
    window2.setTimeout(function () {
      pc._dispatchEvent("track", trackEvent);
    });
  }
  var RTCPeerConnection2 = function (config) {
    var pc = this;
    var _eventTarget = document.createDocumentFragment();
    ["addEventListener", "removeEventListener", "dispatchEvent"].forEach(function (method) {
      pc[method] = _eventTarget[method].bind(_eventTarget);
    });
    this.canTrickleIceCandidates = null;
    this.needNegotiation = false;
    this.localStreams = [];
    this.remoteStreams = [];
    this._localDescription = null;
    this._remoteDescription = null;
    this.signalingState = "stable";
    this.iceConnectionState = "new";
    this.connectionState = "new";
    this.iceGatheringState = "new";
    config = JSON.parse(JSON.stringify(config || {}));
    this.usingBundle = config.bundlePolicy === "max-bundle";
    if (config.rtcpMuxPolicy === "negotiate") {
      throw makeError(
        "NotSupportedError",
        "rtcpMuxPolicy 'negotiate' is not supported"
      );
    } else if (!config.rtcpMuxPolicy) {
      config.rtcpMuxPolicy = "require";
    }
    switch (config.iceTransportPolicy) {
      case "all":
      case "relay":
        break;
      default:
        config.iceTransportPolicy = "all";
        break;
    }
    switch (config.bundlePolicy) {
      case "balanced":
      case "max-compat":
      case "max-bundle":
        break;
      default:
        config.bundlePolicy = "balanced";
        break;
    }
    config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);
    this._iceGatherers = [];
    if (config.iceCandidatePoolSize) {
      for (var i = config.iceCandidatePoolSize; i > 0; i--) {
        this._iceGatherers.push(new window2.RTCIceGatherer({
          iceServers: config.iceServers,
          gatherPolicy: config.iceTransportPolicy
        }));
      }
    } else {
      config.iceCandidatePoolSize = 0;
    }
    this._config = config;
    this.transceivers = [];
    this._sdpSessionId = SDPUtils.generateSessionId();
    this._sdpSessionVersion = 0;
    this._dtlsRole = void 0;
    this._isClosed = false;
  };
  Object.defineProperty(RTCPeerConnection2.prototype, "localDescription", {
    configurable: true,
    get: function () {
      return this._localDescription;
    }
  });
  Object.defineProperty(RTCPeerConnection2.prototype, "remoteDescription", {
    configurable: true,
    get: function () {
      return this._remoteDescription;
    }
  });
  RTCPeerConnection2.prototype.onicecandidate = null;
  RTCPeerConnection2.prototype.onaddstream = null;
  RTCPeerConnection2.prototype.ontrack = null;
  RTCPeerConnection2.prototype.onremovestream = null;
  RTCPeerConnection2.prototype.onsignalingstatechange = null;
  RTCPeerConnection2.prototype.oniceconnectionstatechange = null;
  RTCPeerConnection2.prototype.onconnectionstatechange = null;
  RTCPeerConnection2.prototype.onicegatheringstatechange = null;
  RTCPeerConnection2.prototype.onnegotiationneeded = null;
  RTCPeerConnection2.prototype.ondatachannel = null;
  RTCPeerConnection2.prototype._dispatchEvent = function (name, event) {
    if (this._isClosed) {
      return;
    }
    this.dispatchEvent(event);
    if (typeof this["on" + name] === "function") {
      this["on" + name](event);
    }
  };
  RTCPeerConnection2.prototype._emitGatheringStateChange = function () {
    var event = new Event("icegatheringstatechange");
    this._dispatchEvent("icegatheringstatechange", event);
  };
  RTCPeerConnection2.prototype.getConfiguration = function () {
    return this._config;
  };
  RTCPeerConnection2.prototype.getLocalStreams = function () {
    return this.localStreams;
  };
  RTCPeerConnection2.prototype.getRemoteStreams = function () {
    return this.remoteStreams;
  };
  RTCPeerConnection2.prototype._createTransceiver = function (kind, doNotAdd) {
    var hasBundleTransport = this.transceivers.length > 0;
    var transceiver = {
      track: null,
      iceGatherer: null,
      iceTransport: null,
      dtlsTransport: null,
      localCapabilities: null,
      remoteCapabilities: null,
      rtpSender: null,
      rtpReceiver: null,
      kind,
      mid: null,
      sendEncodingParameters: null,
      recvEncodingParameters: null,
      stream: null,
      associatedRemoteMediaStreams: [],
      wantReceive: true
    };
    if (this.usingBundle && hasBundleTransport) {
      transceiver.iceTransport = this.transceivers[0].iceTransport;
      transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
    } else {
      var transports = this._createIceAndDtlsTransports();
      transceiver.iceTransport = transports.iceTransport;
      transceiver.dtlsTransport = transports.dtlsTransport;
    }
    if (!doNotAdd) {
      this.transceivers.push(transceiver);
    }
    return transceiver;
  };
  RTCPeerConnection2.prototype.addTrack = function (track, stream) {
    if (this._isClosed) {
      throw makeError(
        "InvalidStateError",
        "Attempted to call addTrack on a closed peerconnection."
      );
    }
    var alreadyExists = this.transceivers.find(function (s) {
      return s.track === track;
    });
    if (alreadyExists) {
      throw makeError("InvalidAccessError", "Track already exists.");
    }
    var transceiver;
    for (var i = 0; i < this.transceivers.length; i++) {
      if (!this.transceivers[i].track && this.transceivers[i].kind === track.kind) {
        transceiver = this.transceivers[i];
      }
    }
    if (!transceiver) {
      transceiver = this._createTransceiver(track.kind);
    }
    this._maybeFireNegotiationNeeded();
    if (this.localStreams.indexOf(stream) === -1) {
      this.localStreams.push(stream);
    }
    transceiver.track = track;
    transceiver.stream = stream;
    transceiver.rtpSender = new window2.RTCRtpSender(
      track,
      transceiver.dtlsTransport
    );
    return transceiver.rtpSender;
  };
  RTCPeerConnection2.prototype.addStream = function (stream) {
    var pc = this;
    if (edgeVersion >= 15025) {
      stream.getTracks().forEach(function (track) {
        pc.addTrack(track, stream);
      });
    } else {
      var clonedStream = stream.clone();
      stream.getTracks().forEach(function (track, idx) {
        var clonedTrack = clonedStream.getTracks()[idx];
        track.addEventListener("enabled", function (event) {
          clonedTrack.enabled = event.enabled;
        });
      });
      clonedStream.getTracks().forEach(function (track) {
        pc.addTrack(track, clonedStream);
      });
    }
  };
  RTCPeerConnection2.prototype.removeTrack = function (sender) {
    if (this._isClosed) {
      throw makeError(
        "InvalidStateError",
        "Attempted to call removeTrack on a closed peerconnection."
      );
    }
    if (!(sender instanceof window2.RTCRtpSender)) {
      throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");
    }
    var transceiver = this.transceivers.find(function (t) {
      return t.rtpSender === sender;
    });
    if (!transceiver) {
      throw makeError(
        "InvalidAccessError",
        "Sender was not created by this connection."
      );
    }
    var stream = transceiver.stream;
    transceiver.rtpSender.stop();
    transceiver.rtpSender = null;
    transceiver.track = null;
    transceiver.stream = null;
    var localStreams = this.transceivers.map(function (t) {
      return t.stream;
    });
    if (localStreams.indexOf(stream) === -1 && this.localStreams.indexOf(stream) > -1) {
      this.localStreams.splice(this.localStreams.indexOf(stream), 1);
    }
    this._maybeFireNegotiationNeeded();
  };
  RTCPeerConnection2.prototype.removeStream = function (stream) {
    var pc = this;
    stream.getTracks().forEach(function (track) {
      var sender = pc.getSenders().find(function (s) {
        return s.track === track;
      });
      if (sender) {
        pc.removeTrack(sender);
      }
    });
  };
  RTCPeerConnection2.prototype.getSenders = function () {
    return this.transceivers.filter(function (transceiver) {
      return !!transceiver.rtpSender;
    }).map(function (transceiver) {
      return transceiver.rtpSender;
    });
  };
  RTCPeerConnection2.prototype.getReceivers = function () {
    return this.transceivers.filter(function (transceiver) {
      return !!transceiver.rtpReceiver;
    }).map(function (transceiver) {
      return transceiver.rtpReceiver;
    });
  };
  RTCPeerConnection2.prototype._createIceGatherer = function (sdpMLineIndex, usingBundle) {
    var pc = this;
    if (usingBundle && sdpMLineIndex > 0) {
      return this.transceivers[0].iceGatherer;
    } else if (this._iceGatherers.length) {
      return this._iceGatherers.shift();
    }
    var iceGatherer = new window2.RTCIceGatherer({
      iceServers: this._config.iceServers,
      gatherPolicy: this._config.iceTransportPolicy
    });
    Object.defineProperty(
      iceGatherer,
      "state",
      { value: "new", writable: true }
    );
    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = [];
    this.transceivers[sdpMLineIndex].bufferCandidates = function (event) {
      var end = !event.candidate || Object.keys(event.candidate).length === 0;
      iceGatherer.state = end ? "completed" : "gathering";
      if (pc.transceivers[sdpMLineIndex].bufferedCandidateEvents !== null) {
        pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event);
      }
    };
    iceGatherer.addEventListener(
      "localcandidate",
      this.transceivers[sdpMLineIndex].bufferCandidates
    );
    return iceGatherer;
  };
  RTCPeerConnection2.prototype._gather = function (mid, sdpMLineIndex) {
    var pc = this;
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
    if (iceGatherer.onlocalcandidate) {
      return;
    }
    var bufferedCandidateEvents = this.transceivers[sdpMLineIndex].bufferedCandidateEvents;
    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = null;
    iceGatherer.removeEventListener(
      "localcandidate",
      this.transceivers[sdpMLineIndex].bufferCandidates
    );
    iceGatherer.onlocalcandidate = function (evt) {
      if (pc.usingBundle && sdpMLineIndex > 0) {
        return;
      }
      var event = new Event("icecandidate");
      event.candidate = { sdpMid: mid, sdpMLineIndex };
      var cand = evt.candidate;
      var end = !cand || Object.keys(cand).length === 0;
      if (end) {
        if (iceGatherer.state === "new" || iceGatherer.state === "gathering") {
          iceGatherer.state = "completed";
        }
      } else {
        if (iceGatherer.state === "new") {
          iceGatherer.state = "gathering";
        }
        cand.component = 1;
        cand.ufrag = iceGatherer.getLocalParameters().usernameFragment;
        var serializedCandidate = SDPUtils.writeCandidate(cand);
        event.candidate = Object.assign(
          event.candidate,
          SDPUtils.parseCandidate(serializedCandidate)
        );
        event.candidate.candidate = serializedCandidate;
        event.candidate.toJSON = function () {
          return {
            candidate: event.candidate.candidate,
            sdpMid: event.candidate.sdpMid,
            sdpMLineIndex: event.candidate.sdpMLineIndex,
            usernameFragment: event.candidate.usernameFragment
          };
        };
      }
      var sections = SDPUtils.getMediaSections(pc._localDescription.sdp);
      if (!end) {
        sections[event.candidate.sdpMLineIndex] += "a=" + event.candidate.candidate + "\r\n";
      } else {
        sections[event.candidate.sdpMLineIndex] += "a=end-of-candidates\r\n";
      }
      pc._localDescription.sdp = SDPUtils.getDescription(pc._localDescription.sdp) + sections.join("");
      var complete = pc.transceivers.every(function (transceiver) {
        return transceiver.iceGatherer && transceiver.iceGatherer.state === "completed";
      });
      if (pc.iceGatheringState !== "gathering") {
        pc.iceGatheringState = "gathering";
        pc._emitGatheringStateChange();
      }
      if (!end) {
        pc._dispatchEvent("icecandidate", event);
      }
      if (complete) {
        pc._dispatchEvent("icecandidate", new Event("icecandidate"));
        pc.iceGatheringState = "complete";
        pc._emitGatheringStateChange();
      }
    };
    window2.setTimeout(function () {
      bufferedCandidateEvents.forEach(function (e) {
        iceGatherer.onlocalcandidate(e);
      });
    }, 0);
  };
  RTCPeerConnection2.prototype._createIceAndDtlsTransports = function () {
    var pc = this;
    var iceTransport = new window2.RTCIceTransport(null);
    iceTransport.onicestatechange = function () {
      pc._updateIceConnectionState();
      pc._updateConnectionState();
    };
    var dtlsTransport = new window2.RTCDtlsTransport(iceTransport);
    dtlsTransport.ondtlsstatechange = function () {
      pc._updateConnectionState();
    };
    dtlsTransport.onerror = function () {
      Object.defineProperty(
        dtlsTransport,
        "state",
        { value: "failed", writable: true }
      );
      pc._updateConnectionState();
    };
    return {
      iceTransport,
      dtlsTransport
    };
  };
  RTCPeerConnection2.prototype._disposeIceAndDtlsTransports = function (sdpMLineIndex) {
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
    if (iceGatherer) {
      delete iceGatherer.onlocalcandidate;
      delete this.transceivers[sdpMLineIndex].iceGatherer;
    }
    var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;
    if (iceTransport) {
      delete iceTransport.onicestatechange;
      delete this.transceivers[sdpMLineIndex].iceTransport;
    }
    var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;
    if (dtlsTransport) {
      delete dtlsTransport.ondtlsstatechange;
      delete dtlsTransport.onerror;
      delete this.transceivers[sdpMLineIndex].dtlsTransport;
    }
  };
  RTCPeerConnection2.prototype._transceive = function (transceiver, send, recv) {
    var params = getCommonCapabilities(
      transceiver.localCapabilities,
      transceiver.remoteCapabilities
    );
    if (send && transceiver.rtpSender) {
      params.encodings = transceiver.sendEncodingParameters;
      params.rtcp = {
        cname: SDPUtils.localCName,
        compound: transceiver.rtcpParameters.compound
      };
      if (transceiver.recvEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
      }
      transceiver.rtpSender.send(params);
    }
    if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
      if (transceiver.kind === "video" && transceiver.recvEncodingParameters && edgeVersion < 15019) {
        transceiver.recvEncodingParameters.forEach(function (p) {
          delete p.rtx;
        });
      }
      if (transceiver.recvEncodingParameters.length) {
        params.encodings = transceiver.recvEncodingParameters;
      } else {
        params.encodings = [{}];
      }
      params.rtcp = {
        compound: transceiver.rtcpParameters.compound
      };
      if (transceiver.rtcpParameters.cname) {
        params.rtcp.cname = transceiver.rtcpParameters.cname;
      }
      if (transceiver.sendEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
      }
      transceiver.rtpReceiver.receive(params);
    }
  };
  RTCPeerConnection2.prototype.setLocalDescription = function (description) {
    var pc = this;
    if (["offer", "answer"].indexOf(description.type) === -1) {
      return Promise.reject(makeError(
        "TypeError",
        'Unsupported type "' + description.type + '"'
      ));
    }
    if (!isActionAllowedInSignalingState(
      "setLocalDescription",
      description.type,
      pc.signalingState
    ) || pc._isClosed) {
      return Promise.reject(makeError(
        "InvalidStateError",
        "Can not set local " + description.type + " in state " + pc.signalingState
      ));
    }
    var sections;
    var sessionpart;
    if (description.type === "offer") {
      sections = SDPUtils.splitSections(description.sdp);
      sessionpart = sections.shift();
      sections.forEach(function (mediaSection, sdpMLineIndex) {
        var caps = SDPUtils.parseRtpParameters(mediaSection);
        pc.transceivers[sdpMLineIndex].localCapabilities = caps;
      });
      pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
        pc._gather(transceiver.mid, sdpMLineIndex);
      });
    } else if (description.type === "answer") {
      sections = SDPUtils.splitSections(pc._remoteDescription.sdp);
      sessionpart = sections.shift();
      var isIceLite = SDPUtils.matchPrefix(
        sessionpart,
        "a=ice-lite"
      ).length > 0;
      sections.forEach(function (mediaSection, sdpMLineIndex) {
        var transceiver = pc.transceivers[sdpMLineIndex];
        var iceGatherer = transceiver.iceGatherer;
        var iceTransport = transceiver.iceTransport;
        var dtlsTransport = transceiver.dtlsTransport;
        var localCapabilities = transceiver.localCapabilities;
        var remoteCapabilities = transceiver.remoteCapabilities;
        var rejected = SDPUtils.isRejected(mediaSection) && SDPUtils.matchPrefix(mediaSection, "a=bundle-only").length === 0;
        if (!rejected && !transceiver.rejected) {
          var remoteIceParameters = SDPUtils.getIceParameters(
            mediaSection,
            sessionpart
          );
          var remoteDtlsParameters = SDPUtils.getDtlsParameters(
            mediaSection,
            sessionpart
          );
          if (isIceLite) {
            remoteDtlsParameters.role = "server";
          }
          if (!pc.usingBundle || sdpMLineIndex === 0) {
            pc._gather(transceiver.mid, sdpMLineIndex);
            if (iceTransport.state === "new") {
              iceTransport.start(
                iceGatherer,
                remoteIceParameters,
                isIceLite ? "controlling" : "controlled"
              );
            }
            if (dtlsTransport.state === "new") {
              dtlsTransport.start(remoteDtlsParameters);
            }
          }
          var params = getCommonCapabilities(
            localCapabilities,
            remoteCapabilities
          );
          pc._transceive(
            transceiver,
            params.codecs.length > 0,
            false
          );
        }
      });
    }
    pc._localDescription = {
      type: description.type,
      sdp: description.sdp
    };
    if (description.type === "offer") {
      pc._updateSignalingState("have-local-offer");
    } else {
      pc._updateSignalingState("stable");
    }
    return Promise.resolve();
  };
  RTCPeerConnection2.prototype.setRemoteDescription = function (description) {
    var pc = this;
    if (["offer", "answer"].indexOf(description.type) === -1) {
      return Promise.reject(makeError(
        "TypeError",
        'Unsupported type "' + description.type + '"'
      ));
    }
    if (!isActionAllowedInSignalingState(
      "setRemoteDescription",
      description.type,
      pc.signalingState
    ) || pc._isClosed) {
      return Promise.reject(makeError(
        "InvalidStateError",
        "Can not set remote " + description.type + " in state " + pc.signalingState
      ));
    }
    var streams = {};
    pc.remoteStreams.forEach(function (stream) {
      streams[stream.id] = stream;
    });
    var receiverList = [];
    var sections = SDPUtils.splitSections(description.sdp);
    var sessionpart = sections.shift();
    var isIceLite = SDPUtils.matchPrefix(
      sessionpart,
      "a=ice-lite"
    ).length > 0;
    var usingBundle = SDPUtils.matchPrefix(
      sessionpart,
      "a=group:BUNDLE "
    ).length > 0;
    pc.usingBundle = usingBundle;
    var iceOptions = SDPUtils.matchPrefix(
      sessionpart,
      "a=ice-options:"
    )[0];
    if (iceOptions) {
      pc.canTrickleIceCandidates = iceOptions.substr(14).split(" ").indexOf("trickle") >= 0;
    } else {
      pc.canTrickleIceCandidates = false;
    }
    sections.forEach(function (mediaSection, sdpMLineIndex) {
      var lines = SDPUtils.splitLines(mediaSection);
      var kind = SDPUtils.getKind(mediaSection);
      var rejected = SDPUtils.isRejected(mediaSection) && SDPUtils.matchPrefix(mediaSection, "a=bundle-only").length === 0;
      var protocol = lines[0].substr(2).split(" ")[2];
      var direction = SDPUtils.getDirection(mediaSection, sessionpart);
      var remoteMsid = SDPUtils.parseMsid(mediaSection);
      var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier();
      if (rejected || kind === "application" && (protocol === "DTLS/SCTP" || protocol === "UDP/DTLS/SCTP")) {
        pc.transceivers[sdpMLineIndex] = {
          mid,
          kind,
          protocol,
          rejected: true
        };
        return;
      }
      if (!rejected && pc.transceivers[sdpMLineIndex] && pc.transceivers[sdpMLineIndex].rejected) {
        pc.transceivers[sdpMLineIndex] = pc._createTransceiver(kind, true);
      }
      var transceiver;
      var iceGatherer;
      var iceTransport;
      var dtlsTransport;
      var rtpReceiver;
      var sendEncodingParameters;
      var recvEncodingParameters;
      var localCapabilities;
      var track;
      var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
      var remoteIceParameters;
      var remoteDtlsParameters;
      if (!rejected) {
        remoteIceParameters = SDPUtils.getIceParameters(
          mediaSection,
          sessionpart
        );
        remoteDtlsParameters = SDPUtils.getDtlsParameters(
          mediaSection,
          sessionpart
        );
        remoteDtlsParameters.role = "client";
      }
      recvEncodingParameters = SDPUtils.parseRtpEncodingParameters(mediaSection);
      var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);
      var isComplete = SDPUtils.matchPrefix(
        mediaSection,
        "a=end-of-candidates",
        sessionpart
      ).length > 0;
      var cands = SDPUtils.matchPrefix(mediaSection, "a=candidate:").map(function (cand) {
        return SDPUtils.parseCandidate(cand);
      }).filter(function (cand) {
        return cand.component === 1;
      });
      if ((description.type === "offer" || description.type === "answer") && !rejected && usingBundle && sdpMLineIndex > 0 && pc.transceivers[sdpMLineIndex]) {
        pc._disposeIceAndDtlsTransports(sdpMLineIndex);
        pc.transceivers[sdpMLineIndex].iceGatherer = pc.transceivers[0].iceGatherer;
        pc.transceivers[sdpMLineIndex].iceTransport = pc.transceivers[0].iceTransport;
        pc.transceivers[sdpMLineIndex].dtlsTransport = pc.transceivers[0].dtlsTransport;
        if (pc.transceivers[sdpMLineIndex].rtpSender) {
          pc.transceivers[sdpMLineIndex].rtpSender.setTransport(
            pc.transceivers[0].dtlsTransport
          );
        }
        if (pc.transceivers[sdpMLineIndex].rtpReceiver) {
          pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(
            pc.transceivers[0].dtlsTransport
          );
        }
      }
      if (description.type === "offer" && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex] || pc._createTransceiver(kind);
        transceiver.mid = mid;
        if (!transceiver.iceGatherer) {
          transceiver.iceGatherer = pc._createIceGatherer(
            sdpMLineIndex,
            usingBundle
          );
        }
        if (cands.length && transceiver.iceTransport.state === "new") {
          if (isComplete && (!usingBundle || sdpMLineIndex === 0)) {
            transceiver.iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function (candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }
        localCapabilities = window2.RTCRtpReceiver.getCapabilities(kind);
        if (edgeVersion < 15019) {
          localCapabilities.codecs = localCapabilities.codecs.filter(
            function (codec) {
              return codec.name !== "rtx";
            }
          );
        }
        sendEncodingParameters = transceiver.sendEncodingParameters || [{
          ssrc: (2 * sdpMLineIndex + 2) * 1001
        }];
        var isNewTrack = false;
        if (direction === "sendrecv" || direction === "sendonly") {
          isNewTrack = !transceiver.rtpReceiver;
          rtpReceiver = transceiver.rtpReceiver || new window2.RTCRtpReceiver(transceiver.dtlsTransport, kind);
          if (isNewTrack) {
            var stream;
            track = rtpReceiver.track;
            if (remoteMsid && remoteMsid.stream === "-")
              ;
            else if (remoteMsid) {
              if (!streams[remoteMsid.stream]) {
                streams[remoteMsid.stream] = new window2.MediaStream();
                Object.defineProperty(streams[remoteMsid.stream], "id", {
                  get: function () {
                    return remoteMsid.stream;
                  }
                });
              }
              Object.defineProperty(track, "id", {
                get: function () {
                  return remoteMsid.track;
                }
              });
              stream = streams[remoteMsid.stream];
            } else {
              if (!streams.default) {
                streams.default = new window2.MediaStream();
              }
              stream = streams.default;
            }
            if (stream) {
              addTrackToStreamAndFireEvent(track, stream);
              transceiver.associatedRemoteMediaStreams.push(stream);
            }
            receiverList.push([track, rtpReceiver, stream]);
          }
        } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track) {
          transceiver.associatedRemoteMediaStreams.forEach(function (s) {
            var nativeTrack = s.getTracks().find(function (t) {
              return t.id === transceiver.rtpReceiver.track.id;
            });
            if (nativeTrack) {
              removeTrackFromStreamAndFireEvent(nativeTrack, s);
            }
          });
          transceiver.associatedRemoteMediaStreams = [];
        }
        transceiver.localCapabilities = localCapabilities;
        transceiver.remoteCapabilities = remoteCapabilities;
        transceiver.rtpReceiver = rtpReceiver;
        transceiver.rtcpParameters = rtcpParameters;
        transceiver.sendEncodingParameters = sendEncodingParameters;
        transceiver.recvEncodingParameters = recvEncodingParameters;
        pc._transceive(
          pc.transceivers[sdpMLineIndex],
          false,
          isNewTrack
        );
      } else if (description.type === "answer" && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex];
        iceGatherer = transceiver.iceGatherer;
        iceTransport = transceiver.iceTransport;
        dtlsTransport = transceiver.dtlsTransport;
        rtpReceiver = transceiver.rtpReceiver;
        sendEncodingParameters = transceiver.sendEncodingParameters;
        localCapabilities = transceiver.localCapabilities;
        pc.transceivers[sdpMLineIndex].recvEncodingParameters = recvEncodingParameters;
        pc.transceivers[sdpMLineIndex].remoteCapabilities = remoteCapabilities;
        pc.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;
        if (cands.length && iceTransport.state === "new") {
          if ((isIceLite || isComplete) && (!usingBundle || sdpMLineIndex === 0)) {
            iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function (candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }
        if (!usingBundle || sdpMLineIndex === 0) {
          if (iceTransport.state === "new") {
            iceTransport.start(
              iceGatherer,
              remoteIceParameters,
              "controlling"
            );
          }
          if (dtlsTransport.state === "new") {
            dtlsTransport.start(remoteDtlsParameters);
          }
        }
        var commonCapabilities = getCommonCapabilities(
          transceiver.localCapabilities,
          transceiver.remoteCapabilities
        );
        var hasRtx = commonCapabilities.codecs.filter(function (c) {
          return c.name.toLowerCase() === "rtx";
        }).length;
        if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
          delete transceiver.sendEncodingParameters[0].rtx;
        }
        pc._transceive(
          transceiver,
          direction === "sendrecv" || direction === "recvonly",
          direction === "sendrecv" || direction === "sendonly"
        );
        if (rtpReceiver && (direction === "sendrecv" || direction === "sendonly")) {
          track = rtpReceiver.track;
          if (remoteMsid) {
            if (!streams[remoteMsid.stream]) {
              streams[remoteMsid.stream] = new window2.MediaStream();
            }
            addTrackToStreamAndFireEvent(track, streams[remoteMsid.stream]);
            receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
          } else {
            if (!streams.default) {
              streams.default = new window2.MediaStream();
            }
            addTrackToStreamAndFireEvent(track, streams.default);
            receiverList.push([track, rtpReceiver, streams.default]);
          }
        } else {
          delete transceiver.rtpReceiver;
        }
      }
    });
    if (pc._dtlsRole === void 0) {
      pc._dtlsRole = description.type === "offer" ? "active" : "passive";
    }
    pc._remoteDescription = {
      type: description.type,
      sdp: description.sdp
    };
    if (description.type === "offer") {
      pc._updateSignalingState("have-remote-offer");
    } else {
      pc._updateSignalingState("stable");
    }
    Object.keys(streams).forEach(function (sid) {
      var stream = streams[sid];
      if (stream.getTracks().length) {
        if (pc.remoteStreams.indexOf(stream) === -1) {
          pc.remoteStreams.push(stream);
          var event = new Event("addstream");
          event.stream = stream;
          window2.setTimeout(function () {
            pc._dispatchEvent("addstream", event);
          });
        }
        receiverList.forEach(function (item) {
          var track = item[0];
          var receiver = item[1];
          if (stream.id !== item[2].id) {
            return;
          }
          fireAddTrack(pc, track, receiver, [stream]);
        });
      }
    });
    receiverList.forEach(function (item) {
      if (item[2]) {
        return;
      }
      fireAddTrack(pc, item[0], item[1], []);
    });
    window2.setTimeout(function () {
      if (!(pc && pc.transceivers)) {
        return;
      }
      pc.transceivers.forEach(function (transceiver) {
        if (transceiver.iceTransport && transceiver.iceTransport.state === "new" && transceiver.iceTransport.getRemoteCandidates().length > 0) {
          console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification");
          transceiver.iceTransport.addRemoteCandidate({});
        }
      });
    }, 4e3);
    return Promise.resolve();
  };
  RTCPeerConnection2.prototype.close = function () {
    this.transceivers.forEach(function (transceiver) {
      if (transceiver.iceTransport) {
        transceiver.iceTransport.stop();
      }
      if (transceiver.dtlsTransport) {
        transceiver.dtlsTransport.stop();
      }
      if (transceiver.rtpSender) {
        transceiver.rtpSender.stop();
      }
      if (transceiver.rtpReceiver) {
        transceiver.rtpReceiver.stop();
      }
    });
    this._isClosed = true;
    this._updateSignalingState("closed");
  };
  RTCPeerConnection2.prototype._updateSignalingState = function (newState) {
    this.signalingState = newState;
    var event = new Event("signalingstatechange");
    this._dispatchEvent("signalingstatechange", event);
  };
  RTCPeerConnection2.prototype._maybeFireNegotiationNeeded = function () {
    var pc = this;
    if (this.signalingState !== "stable" || this.needNegotiation === true) {
      return;
    }
    this.needNegotiation = true;
    window2.setTimeout(function () {
      if (pc.needNegotiation) {
        pc.needNegotiation = false;
        var event = new Event("negotiationneeded");
        pc._dispatchEvent("negotiationneeded", event);
      }
    }, 0);
  };
  RTCPeerConnection2.prototype._updateIceConnectionState = function () {
    var newState;
    var states = {
      "new": 0,
      closed: 0,
      checking: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function (transceiver) {
      if (transceiver.iceTransport && !transceiver.rejected) {
        states[transceiver.iceTransport.state]++;
      }
    });
    newState = "new";
    if (states.failed > 0) {
      newState = "failed";
    } else if (states.checking > 0) {
      newState = "checking";
    } else if (states.disconnected > 0) {
      newState = "disconnected";
    } else if (states.new > 0) {
      newState = "new";
    } else if (states.connected > 0) {
      newState = "connected";
    } else if (states.completed > 0) {
      newState = "completed";
    }
    if (newState !== this.iceConnectionState) {
      this.iceConnectionState = newState;
      var event = new Event("iceconnectionstatechange");
      this._dispatchEvent("iceconnectionstatechange", event);
    }
  };
  RTCPeerConnection2.prototype._updateConnectionState = function () {
    var newState;
    var states = {
      "new": 0,
      closed: 0,
      connecting: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function (transceiver) {
      if (transceiver.iceTransport && transceiver.dtlsTransport && !transceiver.rejected) {
        states[transceiver.iceTransport.state]++;
        states[transceiver.dtlsTransport.state]++;
      }
    });
    states.connected += states.completed;
    newState = "new";
    if (states.failed > 0) {
      newState = "failed";
    } else if (states.connecting > 0) {
      newState = "connecting";
    } else if (states.disconnected > 0) {
      newState = "disconnected";
    } else if (states.new > 0) {
      newState = "new";
    } else if (states.connected > 0) {
      newState = "connected";
    }
    if (newState !== this.connectionState) {
      this.connectionState = newState;
      var event = new Event("connectionstatechange");
      this._dispatchEvent("connectionstatechange", event);
    }
  };
  RTCPeerConnection2.prototype.createOffer = function () {
    var pc = this;
    if (pc._isClosed) {
      return Promise.reject(makeError(
        "InvalidStateError",
        "Can not call createOffer after close"
      ));
    }
    var numAudioTracks = pc.transceivers.filter(function (t) {
      return t.kind === "audio";
    }).length;
    var numVideoTracks = pc.transceivers.filter(function (t) {
      return t.kind === "video";
    }).length;
    var offerOptions = arguments[0];
    if (offerOptions) {
      if (offerOptions.mandatory || offerOptions.optional) {
        throw new TypeError(
          "Legacy mandatory/optional constraints not supported."
        );
      }
      if (offerOptions.offerToReceiveAudio !== void 0) {
        if (offerOptions.offerToReceiveAudio === true) {
          numAudioTracks = 1;
        } else if (offerOptions.offerToReceiveAudio === false) {
          numAudioTracks = 0;
        } else {
          numAudioTracks = offerOptions.offerToReceiveAudio;
        }
      }
      if (offerOptions.offerToReceiveVideo !== void 0) {
        if (offerOptions.offerToReceiveVideo === true) {
          numVideoTracks = 1;
        } else if (offerOptions.offerToReceiveVideo === false) {
          numVideoTracks = 0;
        } else {
          numVideoTracks = offerOptions.offerToReceiveVideo;
        }
      }
    }
    pc.transceivers.forEach(function (transceiver) {
      if (transceiver.kind === "audio") {
        numAudioTracks--;
        if (numAudioTracks < 0) {
          transceiver.wantReceive = false;
        }
      } else if (transceiver.kind === "video") {
        numVideoTracks--;
        if (numVideoTracks < 0) {
          transceiver.wantReceive = false;
        }
      }
    });
    while (numAudioTracks > 0 || numVideoTracks > 0) {
      if (numAudioTracks > 0) {
        pc._createTransceiver("audio");
        numAudioTracks--;
      }
      if (numVideoTracks > 0) {
        pc._createTransceiver("video");
        numVideoTracks--;
      }
    }
    var sdp2 = SDPUtils.writeSessionBoilerplate(
      pc._sdpSessionId,
      pc._sdpSessionVersion++
    );
    pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
      var track = transceiver.track;
      var kind = transceiver.kind;
      var mid = transceiver.mid || SDPUtils.generateIdentifier();
      transceiver.mid = mid;
      if (!transceiver.iceGatherer) {
        transceiver.iceGatherer = pc._createIceGatherer(
          sdpMLineIndex,
          pc.usingBundle
        );
      }
      var localCapabilities = window2.RTCRtpSender.getCapabilities(kind);
      if (edgeVersion < 15019) {
        localCapabilities.codecs = localCapabilities.codecs.filter(
          function (codec) {
            return codec.name !== "rtx";
          }
        );
      }
      localCapabilities.codecs.forEach(function (codec) {
        if (codec.name === "H264" && codec.parameters["level-asymmetry-allowed"] === void 0) {
          codec.parameters["level-asymmetry-allowed"] = "1";
        }
        if (transceiver.remoteCapabilities && transceiver.remoteCapabilities.codecs) {
          transceiver.remoteCapabilities.codecs.forEach(function (remoteCodec) {
            if (codec.name.toLowerCase() === remoteCodec.name.toLowerCase() && codec.clockRate === remoteCodec.clockRate) {
              codec.preferredPayloadType = remoteCodec.payloadType;
            }
          });
        }
      });
      localCapabilities.headerExtensions.forEach(function (hdrExt) {
        var remoteExtensions = transceiver.remoteCapabilities && transceiver.remoteCapabilities.headerExtensions || [];
        remoteExtensions.forEach(function (rHdrExt) {
          if (hdrExt.uri === rHdrExt.uri) {
            hdrExt.id = rHdrExt.id;
          }
        });
      });
      var sendEncodingParameters = transceiver.sendEncodingParameters || [{
        ssrc: (2 * sdpMLineIndex + 1) * 1001
      }];
      if (track) {
        if (edgeVersion >= 15019 && kind === "video" && !sendEncodingParameters[0].rtx) {
          sendEncodingParameters[0].rtx = {
            ssrc: sendEncodingParameters[0].ssrc + 1
          };
        }
      }
      if (transceiver.wantReceive) {
        transceiver.rtpReceiver = new window2.RTCRtpReceiver(
          transceiver.dtlsTransport,
          kind
        );
      }
      transceiver.localCapabilities = localCapabilities;
      transceiver.sendEncodingParameters = sendEncodingParameters;
    });
    if (pc._config.bundlePolicy !== "max-compat") {
      sdp2 += "a=group:BUNDLE " + pc.transceivers.map(function (t) {
        return t.mid;
      }).join(" ") + "\r\n";
    }
    sdp2 += "a=ice-options:trickle\r\n";
    pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
      sdp2 += writeMediaSection(
        transceiver,
        transceiver.localCapabilities,
        "offer",
        transceiver.stream,
        pc._dtlsRole
      );
      sdp2 += "a=rtcp-rsize\r\n";
      if (transceiver.iceGatherer && pc.iceGatheringState !== "new" && (sdpMLineIndex === 0 || !pc.usingBundle)) {
        transceiver.iceGatherer.getLocalCandidates().forEach(function (cand) {
          cand.component = 1;
          sdp2 += "a=" + SDPUtils.writeCandidate(cand) + "\r\n";
        });
        if (transceiver.iceGatherer.state === "completed") {
          sdp2 += "a=end-of-candidates\r\n";
        }
      }
    });
    var desc = new window2.RTCSessionDescription({
      type: "offer",
      sdp: sdp2
    });
    return Promise.resolve(desc);
  };
  RTCPeerConnection2.prototype.createAnswer = function () {
    var pc = this;
    if (pc._isClosed) {
      return Promise.reject(makeError(
        "InvalidStateError",
        "Can not call createAnswer after close"
      ));
    }
    if (!(pc.signalingState === "have-remote-offer" || pc.signalingState === "have-local-pranswer")) {
      return Promise.reject(makeError(
        "InvalidStateError",
        "Can not call createAnswer in signalingState " + pc.signalingState
      ));
    }
    var sdp2 = SDPUtils.writeSessionBoilerplate(
      pc._sdpSessionId,
      pc._sdpSessionVersion++
    );
    if (pc.usingBundle) {
      sdp2 += "a=group:BUNDLE " + pc.transceivers.map(function (t) {
        return t.mid;
      }).join(" ") + "\r\n";
    }
    sdp2 += "a=ice-options:trickle\r\n";
    var mediaSectionsInOffer = SDPUtils.getMediaSections(
      pc._remoteDescription.sdp
    ).length;
    pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
      if (sdpMLineIndex + 1 > mediaSectionsInOffer) {
        return;
      }
      if (transceiver.rejected) {
        if (transceiver.kind === "application") {
          if (transceiver.protocol === "DTLS/SCTP") {
            sdp2 += "m=application 0 DTLS/SCTP 5000\r\n";
          } else {
            sdp2 += "m=application 0 " + transceiver.protocol + " webrtc-datachannel\r\n";
          }
        } else if (transceiver.kind === "audio") {
          sdp2 += "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n";
        } else if (transceiver.kind === "video") {
          sdp2 += "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n";
        }
        sdp2 += "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" + transceiver.mid + "\r\n";
        return;
      }
      if (transceiver.stream) {
        var localTrack;
        if (transceiver.kind === "audio") {
          localTrack = transceiver.stream.getAudioTracks()[0];
        } else if (transceiver.kind === "video") {
          localTrack = transceiver.stream.getVideoTracks()[0];
        }
        if (localTrack) {
          if (edgeVersion >= 15019 && transceiver.kind === "video" && !transceiver.sendEncodingParameters[0].rtx) {
            transceiver.sendEncodingParameters[0].rtx = {
              ssrc: transceiver.sendEncodingParameters[0].ssrc + 1
            };
          }
        }
      }
      var commonCapabilities = getCommonCapabilities(
        transceiver.localCapabilities,
        transceiver.remoteCapabilities
      );
      var hasRtx = commonCapabilities.codecs.filter(function (c) {
        return c.name.toLowerCase() === "rtx";
      }).length;
      if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
        delete transceiver.sendEncodingParameters[0].rtx;
      }
      sdp2 += writeMediaSection(
        transceiver,
        commonCapabilities,
        "answer",
        transceiver.stream,
        pc._dtlsRole
      );
      if (transceiver.rtcpParameters && transceiver.rtcpParameters.reducedSize) {
        sdp2 += "a=rtcp-rsize\r\n";
      }
    });
    var desc = new window2.RTCSessionDescription({
      type: "answer",
      sdp: sdp2
    });
    return Promise.resolve(desc);
  };
  RTCPeerConnection2.prototype.addIceCandidate = function (candidate) {
    var pc = this;
    var sections;
    if (candidate && !(candidate.sdpMLineIndex !== void 0 || candidate.sdpMid)) {
      return Promise.reject(new TypeError("sdpMLineIndex or sdpMid required"));
    }
    return new Promise(function (resolve, reject) {
      if (!pc._remoteDescription) {
        return reject(makeError(
          "InvalidStateError",
          "Can not add ICE candidate without a remote description"
        ));
      } else if (!candidate || candidate.candidate === "") {
        for (var j = 0; j < pc.transceivers.length; j++) {
          if (pc.transceivers[j].rejected) {
            continue;
          }
          pc.transceivers[j].iceTransport.addRemoteCandidate({});
          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[j] += "a=end-of-candidates\r\n";
          pc._remoteDescription.sdp = SDPUtils.getDescription(pc._remoteDescription.sdp) + sections.join("");
          if (pc.usingBundle) {
            break;
          }
        }
      } else {
        var sdpMLineIndex = candidate.sdpMLineIndex;
        if (candidate.sdpMid) {
          for (var i = 0; i < pc.transceivers.length; i++) {
            if (pc.transceivers[i].mid === candidate.sdpMid) {
              sdpMLineIndex = i;
              break;
            }
          }
        }
        var transceiver = pc.transceivers[sdpMLineIndex];
        if (transceiver) {
          if (transceiver.rejected) {
            return resolve();
          }
          var cand = Object.keys(candidate.candidate).length > 0 ? SDPUtils.parseCandidate(candidate.candidate) : {};
          if (cand.protocol === "tcp" && (cand.port === 0 || cand.port === 9)) {
            return resolve();
          }
          if (cand.component && cand.component !== 1) {
            return resolve();
          }
          if (sdpMLineIndex === 0 || sdpMLineIndex > 0 && transceiver.iceTransport !== pc.transceivers[0].iceTransport) {
            if (!maybeAddCandidate(transceiver.iceTransport, cand)) {
              return reject(makeError(
                "OperationError",
                "Can not add ICE candidate"
              ));
            }
          }
          var candidateString = candidate.candidate.trim();
          if (candidateString.indexOf("a=") === 0) {
            candidateString = candidateString.substr(2);
          }
          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[sdpMLineIndex] += "a=" + (cand.type ? candidateString : "end-of-candidates") + "\r\n";
          pc._remoteDescription.sdp = SDPUtils.getDescription(pc._remoteDescription.sdp) + sections.join("");
        } else {
          return reject(makeError(
            "OperationError",
            "Can not add ICE candidate"
          ));
        }
      }
      resolve();
    });
  };
  RTCPeerConnection2.prototype.getStats = function (selector) {
    if (selector && selector instanceof window2.MediaStreamTrack) {
      var senderOrReceiver = null;
      this.transceivers.forEach(function (transceiver) {
        if (transceiver.rtpSender && transceiver.rtpSender.track === selector) {
          senderOrReceiver = transceiver.rtpSender;
        } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track === selector) {
          senderOrReceiver = transceiver.rtpReceiver;
        }
      });
      if (!senderOrReceiver) {
        throw makeError("InvalidAccessError", "Invalid selector.");
      }
      return senderOrReceiver.getStats();
    }
    var promises = [];
    this.transceivers.forEach(function (transceiver) {
      [
        "rtpSender",
        "rtpReceiver",
        "iceGatherer",
        "iceTransport",
        "dtlsTransport"
      ].forEach(function (method) {
        if (transceiver[method]) {
          promises.push(transceiver[method].getStats());
        }
      });
    });
    return Promise.all(promises).then(function (allStats) {
      var results = /* @__PURE__ */ new Map();
      allStats.forEach(function (stats) {
        stats.forEach(function (stat) {
          results.set(stat.id, stat);
        });
      });
      return results;
    });
  };
  var ortcObjects = [
    "RTCRtpSender",
    "RTCRtpReceiver",
    "RTCIceGatherer",
    "RTCIceTransport",
    "RTCDtlsTransport"
  ];
  ortcObjects.forEach(function (ortcObjectName) {
    var obj = window2[ortcObjectName];
    if (obj && obj.prototype && obj.prototype.getStats) {
      var nativeGetstats = obj.prototype.getStats;
      obj.prototype.getStats = function () {
        return nativeGetstats.apply(this).then(function (nativeStats) {
          var mapStats = /* @__PURE__ */ new Map();
          Object.keys(nativeStats).forEach(function (id) {
            nativeStats[id].type = fixStatsType(nativeStats[id]);
            mapStats.set(id, nativeStats[id]);
          });
          return mapStats;
        });
      };
    }
  });
  var methods = ["createOffer", "createAnswer"];
  methods.forEach(function (method) {
    var nativeMethod = RTCPeerConnection2.prototype[method];
    RTCPeerConnection2.prototype[method] = function () {
      var args = arguments;
      if (typeof args[0] === "function" || typeof args[1] === "function") {
        return nativeMethod.apply(this, [arguments[2]]).then(function (description) {
          if (typeof args[0] === "function") {
            args[0].apply(null, [description]);
          }
        }, function (error) {
          if (typeof args[1] === "function") {
            args[1].apply(null, [error]);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });
  methods = ["setLocalDescription", "setRemoteDescription", "addIceCandidate"];
  methods.forEach(function (method) {
    var nativeMethod = RTCPeerConnection2.prototype[method];
    RTCPeerConnection2.prototype[method] = function () {
      var args = arguments;
      if (typeof args[1] === "function" || typeof args[2] === "function") {
        return nativeMethod.apply(this, arguments).then(function () {
          if (typeof args[1] === "function") {
            args[1].apply(null);
          }
        }, function (error) {
          if (typeof args[2] === "function") {
            args[2].apply(null, [error]);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });
  ["getStats"].forEach(function (method) {
    var nativeMethod = RTCPeerConnection2.prototype[method];
    RTCPeerConnection2.prototype[method] = function () {
      var args = arguments;
      if (typeof args[1] === "function") {
        return nativeMethod.apply(this, arguments).then(function () {
          if (typeof args[1] === "function") {
            args[1].apply(null);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });
  return RTCPeerConnection2;
};
function shimGetUserMedia$2(window2) {
  const navigator2 = window2 && window2.navigator;
  const shimError_ = function (e) {
    return {
      name: { PermissionDeniedError: "NotAllowedError" }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint,
      toString() {
        return this.name;
      }
    };
  };
  const origGetUserMedia = navigator2.mediaDevices.getUserMedia.bind(navigator2.mediaDevices);
  navigator2.mediaDevices.getUserMedia = function (c) {
    return origGetUserMedia(c).catch((e) => Promise.reject(shimError_(e)));
  };
}
function shimGetDisplayMedia$1(window2) {
  if (!("getDisplayMedia" in window2.navigator)) {
    return;
  }
  if (!window2.navigator.mediaDevices) {
    return;
  }
  if (window2.navigator.mediaDevices && "getDisplayMedia" in window2.navigator.mediaDevices) {
    return;
  }
  window2.navigator.mediaDevices.getDisplayMedia = window2.navigator.getDisplayMedia.bind(window2.navigator);
}
function shimPeerConnection$1(window2, browserDetails) {
  if (window2.RTCIceGatherer) {
    if (!window2.RTCIceCandidate) {
      window2.RTCIceCandidate = function RTCIceCandidate2(args) {
        return args;
      };
    }
    if (!window2.RTCSessionDescription) {
      window2.RTCSessionDescription = function RTCSessionDescription2(args) {
        return args;
      };
    }
    if (browserDetails.version < 15025) {
      const origMSTEnabled = Object.getOwnPropertyDescriptor(
        window2.MediaStreamTrack.prototype,
        "enabled"
      );
      Object.defineProperty(window2.MediaStreamTrack.prototype, "enabled", {
        set(value) {
          origMSTEnabled.set.call(this, value);
          const ev = new Event("enabled");
          ev.enabled = value;
          this.dispatchEvent(ev);
        }
      });
    }
  }
  if (window2.RTCRtpSender && !("dtmf" in window2.RTCRtpSender.prototype)) {
    Object.defineProperty(window2.RTCRtpSender.prototype, "dtmf", {
      get() {
        if (this._dtmf === void 0) {
          if (this.track.kind === "audio") {
            this._dtmf = new window2.RTCDtmfSender(this);
          } else if (this.track.kind === "video") {
            this._dtmf = null;
          }
        }
        return this._dtmf;
      }
    });
  }
  if (window2.RTCDtmfSender && !window2.RTCDTMFSender) {
    window2.RTCDTMFSender = window2.RTCDtmfSender;
  }
  const RTCPeerConnectionShim = rtcpeerconnection(
    window2,
    browserDetails.version
  );
  window2.RTCPeerConnection = function RTCPeerConnection2(config) {
    if (config && config.iceServers) {
      config.iceServers = filterIceServers$1(
        config.iceServers,
        browserDetails.version
      );
      log("ICE servers after filtering:", config.iceServers);
    }
    return new RTCPeerConnectionShim(config);
  };
  window2.RTCPeerConnection.prototype = RTCPeerConnectionShim.prototype;
}
function shimReplaceTrack(window2) {
  if (window2.RTCRtpSender && !("replaceTrack" in window2.RTCRtpSender.prototype)) {
    window2.RTCRtpSender.prototype.replaceTrack = window2.RTCRtpSender.prototype.setTrack;
  }
}
const edgeShim = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  shimPeerConnection: shimPeerConnection$1,
  shimReplaceTrack,
  shimGetUserMedia: shimGetUserMedia$2,
  shimGetDisplayMedia: shimGetDisplayMedia$1
}, Symbol.toStringTag, { value: "Module" }));
function shimGetUserMedia$1(window2, browserDetails) {
  const navigator2 = window2 && window2.navigator;
  const MediaStreamTrack = window2 && window2.MediaStreamTrack;
  navigator2.getUserMedia = function (constraints, onSuccess, onError) {
    deprecated(
      "navigator.getUserMedia",
      "navigator.mediaDevices.getUserMedia"
    );
    navigator2.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };
  if (!(browserDetails.version > 55 && "autoGainControl" in navigator2.mediaDevices.getSupportedConstraints())) {
    const remap = function (obj, a, b) {
      if (a in obj && !(b in obj)) {
        obj[b] = obj[a];
        delete obj[a];
      }
    };
    const nativeGetUserMedia = navigator2.mediaDevices.getUserMedia.bind(navigator2.mediaDevices);
    navigator2.mediaDevices.getUserMedia = function (c) {
      if (typeof c === "object" && typeof c.audio === "object") {
        c = JSON.parse(JSON.stringify(c));
        remap(c.audio, "autoGainControl", "mozAutoGainControl");
        remap(c.audio, "noiseSuppression", "mozNoiseSuppression");
      }
      return nativeGetUserMedia(c);
    };
    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
      const nativeGetSettings = MediaStreamTrack.prototype.getSettings;
      MediaStreamTrack.prototype.getSettings = function () {
        const obj = nativeGetSettings.apply(this, arguments);
        remap(obj, "mozAutoGainControl", "autoGainControl");
        remap(obj, "mozNoiseSuppression", "noiseSuppression");
        return obj;
      };
    }
    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
      const nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
      MediaStreamTrack.prototype.applyConstraints = function (c) {
        if (this.kind === "audio" && typeof c === "object") {
          c = JSON.parse(JSON.stringify(c));
          remap(c, "autoGainControl", "mozAutoGainControl");
          remap(c, "noiseSuppression", "mozNoiseSuppression");
        }
        return nativeApplyConstraints.apply(this, [c]);
      };
    }
  }
}
function shimGetDisplayMedia(window2, preferredMediaSource) {
  if (window2.navigator.mediaDevices && "getDisplayMedia" in window2.navigator.mediaDevices) {
    return;
  }
  if (!window2.navigator.mediaDevices) {
    return;
  }
  window2.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
    if (!(constraints && constraints.video)) {
      const err = new DOMException("getDisplayMedia without video constraints is undefined");
      err.name = "NotFoundError";
      err.code = 8;
      return Promise.reject(err);
    }
    if (constraints.video === true) {
      constraints.video = { mediaSource: preferredMediaSource };
    } else {
      constraints.video.mediaSource = preferredMediaSource;
    }
    return window2.navigator.mediaDevices.getUserMedia(constraints);
  };
}
function shimOnTrack(window2) {
  if (typeof window2 === "object" && window2.RTCTrackEvent && "receiver" in window2.RTCTrackEvent.prototype && !("transceiver" in window2.RTCTrackEvent.prototype)) {
    Object.defineProperty(window2.RTCTrackEvent.prototype, "transceiver", {
      get() {
        return { receiver: this.receiver };
      }
    });
  }
}
function shimPeerConnection(window2, browserDetails) {
  if (typeof window2 !== "object" || !(window2.RTCPeerConnection || window2.mozRTCPeerConnection)) {
    return;
  }
  if (!window2.RTCPeerConnection && window2.mozRTCPeerConnection) {
    window2.RTCPeerConnection = window2.mozRTCPeerConnection;
  }
  if (browserDetails.version < 53) {
    ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (method) {
      const nativeMethod = window2.RTCPeerConnection.prototype[method];
      const methodObj = {
        [method]() {
          arguments[0] = new (method === "addIceCandidate" ? window2.RTCIceCandidate : window2.RTCSessionDescription)(arguments[0]);
          return nativeMethod.apply(this, arguments);
        }
      };
      window2.RTCPeerConnection.prototype[method] = methodObj[method];
    });
  }
  const modernStatsTypes = {
    inboundrtp: "inbound-rtp",
    outboundrtp: "outbound-rtp",
    candidatepair: "candidate-pair",
    localcandidate: "local-candidate",
    remotecandidate: "remote-candidate"
  };
  const nativeGetStats = window2.RTCPeerConnection.prototype.getStats;
  window2.RTCPeerConnection.prototype.getStats = function getStats() {
    const [selector, onSucc, onErr] = arguments;
    return nativeGetStats.apply(this, [selector || null]).then((stats) => {
      if (browserDetails.version < 53 && !onSucc) {
        try {
          stats.forEach((stat) => {
            stat.type = modernStatsTypes[stat.type] || stat.type;
          });
        } catch (e) {
          if (e.name !== "TypeError") {
            throw e;
          }
          stats.forEach((stat, i) => {
            stats.set(i, Object.assign({}, stat, {
              type: modernStatsTypes[stat.type] || stat.type
            }));
          });
        }
      }
      return stats;
    }).then(onSucc, onErr);
  };
}
function shimSenderGetStats(window2) {
  if (!(typeof window2 === "object" && window2.RTCPeerConnection && window2.RTCRtpSender)) {
    return;
  }
  if (window2.RTCRtpSender && "getStats" in window2.RTCRtpSender.prototype) {
    return;
  }
  const origGetSenders = window2.RTCPeerConnection.prototype.getSenders;
  if (origGetSenders) {
    window2.RTCPeerConnection.prototype.getSenders = function getSenders() {
      const senders = origGetSenders.apply(this, []);
      senders.forEach((sender) => sender._pc = this);
      return senders;
    };
  }
  const origAddTrack = window2.RTCPeerConnection.prototype.addTrack;
  if (origAddTrack) {
    window2.RTCPeerConnection.prototype.addTrack = function addTrack() {
      const sender = origAddTrack.apply(this, arguments);
      sender._pc = this;
      return sender;
    };
  }
  window2.RTCRtpSender.prototype.getStats = function getStats() {
    return this.track ? this._pc.getStats(this.track) : Promise.resolve(/* @__PURE__ */ new Map());
  };
}
function shimReceiverGetStats(window2) {
  if (!(typeof window2 === "object" && window2.RTCPeerConnection && window2.RTCRtpSender)) {
    return;
  }
  if (window2.RTCRtpSender && "getStats" in window2.RTCRtpReceiver.prototype) {
    return;
  }
  const origGetReceivers = window2.RTCPeerConnection.prototype.getReceivers;
  if (origGetReceivers) {
    window2.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
      const receivers = origGetReceivers.apply(this, []);
      receivers.forEach((receiver) => receiver._pc = this);
      return receivers;
    };
  }
  wrapPeerConnectionEvent(window2, "track", (e) => {
    e.receiver._pc = e.srcElement;
    return e;
  });
  window2.RTCRtpReceiver.prototype.getStats = function getStats() {
    return this._pc.getStats(this.track);
  };
}
function shimRemoveStream(window2) {
  if (!window2.RTCPeerConnection || "removeStream" in window2.RTCPeerConnection.prototype) {
    return;
  }
  window2.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
    deprecated("removeStream", "removeTrack");
    this.getSenders().forEach((sender) => {
      if (sender.track && stream.getTracks().includes(sender.track)) {
        this.removeTrack(sender);
      }
    });
  };
}
function shimRTCDataChannel(window2) {
  if (window2.DataChannel && !window2.RTCDataChannel) {
    window2.RTCDataChannel = window2.DataChannel;
  }
}
function shimAddTransceiver(window2) {
  if (!(typeof window2 === "object" && window2.RTCPeerConnection)) {
    return;
  }
  const origAddTransceiver = window2.RTCPeerConnection.prototype.addTransceiver;
  if (origAddTransceiver) {
    window2.RTCPeerConnection.prototype.addTransceiver = function addTransceiver() {
      this.setParametersPromises = [];
      const initParameters = arguments[1];
      const shouldPerformCheck = initParameters && "sendEncodings" in initParameters;
      if (shouldPerformCheck) {
        initParameters.sendEncodings.forEach((encodingParam) => {
          if ("rid" in encodingParam) {
            const ridRegex = /^[a-z0-9]{0,16}$/i;
            if (!ridRegex.test(encodingParam.rid)) {
              throw new TypeError("Invalid RID value provided.");
            }
          }
          if ("scaleResolutionDownBy" in encodingParam) {
            if (!(parseFloat(encodingParam.scaleResolutionDownBy) >= 1)) {
              throw new RangeError("scale_resolution_down_by must be >= 1.0");
            }
          }
          if ("maxFramerate" in encodingParam) {
            if (!(parseFloat(encodingParam.maxFramerate) >= 0)) {
              throw new RangeError("max_framerate must be >= 0.0");
            }
          }
        });
      }
      const transceiver = origAddTransceiver.apply(this, arguments);
      if (shouldPerformCheck) {
        const { sender } = transceiver;
        const params = sender.getParameters();
        if (!("encodings" in params) || params.encodings.length === 1 && Object.keys(params.encodings[0]).length === 0) {
          params.encodings = initParameters.sendEncodings;
          sender.sendEncodings = initParameters.sendEncodings;
          this.setParametersPromises.push(
            sender.setParameters(params).then(() => {
              delete sender.sendEncodings;
            }).catch(() => {
              delete sender.sendEncodings;
            })
          );
        }
      }
      return transceiver;
    };
  }
}
function shimGetParameters(window2) {
  if (!(typeof window2 === "object" && window2.RTCRtpSender)) {
    return;
  }
  const origGetParameters = window2.RTCRtpSender.prototype.getParameters;
  if (origGetParameters) {
    window2.RTCRtpSender.prototype.getParameters = function getParameters() {
      const params = origGetParameters.apply(this, arguments);
      if (!("encodings" in params)) {
        params.encodings = [].concat(this.sendEncodings || [{}]);
      }
      return params;
    };
  }
}
function shimCreateOffer(window2) {
  if (!(typeof window2 === "object" && window2.RTCPeerConnection)) {
    return;
  }
  const origCreateOffer = window2.RTCPeerConnection.prototype.createOffer;
  window2.RTCPeerConnection.prototype.createOffer = function createOffer() {
    if (this.setParametersPromises && this.setParametersPromises.length) {
      return Promise.all(this.setParametersPromises).then(() => {
        return origCreateOffer.apply(this, arguments);
      }).finally(() => {
        this.setParametersPromises = [];
      });
    }
    return origCreateOffer.apply(this, arguments);
  };
}
function shimCreateAnswer(window2) {
  if (!(typeof window2 === "object" && window2.RTCPeerConnection)) {
    return;
  }
  const origCreateAnswer = window2.RTCPeerConnection.prototype.createAnswer;
  window2.RTCPeerConnection.prototype.createAnswer = function createAnswer() {
    if (this.setParametersPromises && this.setParametersPromises.length) {
      return Promise.all(this.setParametersPromises).then(() => {
        return origCreateAnswer.apply(this, arguments);
      }).finally(() => {
        this.setParametersPromises = [];
      });
    }
    return origCreateAnswer.apply(this, arguments);
  };
}
const firefoxShim = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  shimOnTrack,
  shimPeerConnection,
  shimSenderGetStats,
  shimReceiverGetStats,
  shimRemoveStream,
  shimRTCDataChannel,
  shimAddTransceiver,
  shimGetParameters,
  shimCreateOffer,
  shimCreateAnswer,
  shimGetUserMedia: shimGetUserMedia$1,
  shimGetDisplayMedia
}, Symbol.toStringTag, { value: "Module" }));
function shimLocalStreamsAPI(window2) {
  if (typeof window2 !== "object" || !window2.RTCPeerConnection) {
    return;
  }
  if (!("getLocalStreams" in window2.RTCPeerConnection.prototype)) {
    window2.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
      if (!this._localStreams) {
        this._localStreams = [];
      }
      return this._localStreams;
    };
  }
  if (!("addStream" in window2.RTCPeerConnection.prototype)) {
    const _addTrack = window2.RTCPeerConnection.prototype.addTrack;
    window2.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      if (!this._localStreams) {
        this._localStreams = [];
      }
      if (!this._localStreams.includes(stream)) {
        this._localStreams.push(stream);
      }
      stream.getAudioTracks().forEach((track) => _addTrack.call(
        this,
        track,
        stream
      ));
      stream.getVideoTracks().forEach((track) => _addTrack.call(
        this,
        track,
        stream
      ));
    };
    window2.RTCPeerConnection.prototype.addTrack = function addTrack(track, ...streams) {
      if (streams) {
        streams.forEach((stream) => {
          if (!this._localStreams) {
            this._localStreams = [stream];
          } else if (!this._localStreams.includes(stream)) {
            this._localStreams.push(stream);
          }
        });
      }
      return _addTrack.apply(this, arguments);
    };
  }
  if (!("removeStream" in window2.RTCPeerConnection.prototype)) {
    window2.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
      if (!this._localStreams) {
        this._localStreams = [];
      }
      const index = this._localStreams.indexOf(stream);
      if (index === -1) {
        return;
      }
      this._localStreams.splice(index, 1);
      const tracks = stream.getTracks();
      this.getSenders().forEach((sender) => {
        if (tracks.includes(sender.track)) {
          this.removeTrack(sender);
        }
      });
    };
  }
}
function shimRemoteStreamsAPI(window2) {
  if (typeof window2 !== "object" || !window2.RTCPeerConnection) {
    return;
  }
  if (!("getRemoteStreams" in window2.RTCPeerConnection.prototype)) {
    window2.RTCPeerConnection.prototype.getRemoteStreams = function getRemoteStreams() {
      return this._remoteStreams ? this._remoteStreams : [];
    };
  }
  if (!("onaddstream" in window2.RTCPeerConnection.prototype)) {
    Object.defineProperty(window2.RTCPeerConnection.prototype, "onaddstream", {
      get() {
        return this._onaddstream;
      },
      set(f) {
        if (this._onaddstream) {
          this.removeEventListener("addstream", this._onaddstream);
          this.removeEventListener("track", this._onaddstreampoly);
        }
        this.addEventListener("addstream", this._onaddstream = f);
        this.addEventListener("track", this._onaddstreampoly = (e) => {
          e.streams.forEach((stream) => {
            if (!this._remoteStreams) {
              this._remoteStreams = [];
            }
            if (this._remoteStreams.includes(stream)) {
              return;
            }
            this._remoteStreams.push(stream);
            const event = new Event("addstream");
            event.stream = stream;
            this.dispatchEvent(event);
          });
        });
      }
    });
    const origSetRemoteDescription = window2.RTCPeerConnection.prototype.setRemoteDescription;
    window2.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
      const pc = this;
      if (!this._onaddstreampoly) {
        this.addEventListener("track", this._onaddstreampoly = function (e) {
          e.streams.forEach((stream) => {
            if (!pc._remoteStreams) {
              pc._remoteStreams = [];
            }
            if (pc._remoteStreams.indexOf(stream) >= 0) {
              return;
            }
            pc._remoteStreams.push(stream);
            const event = new Event("addstream");
            event.stream = stream;
            pc.dispatchEvent(event);
          });
        });
      }
      return origSetRemoteDescription.apply(pc, arguments);
    };
  }
}
function shimCallbacksAPI(window2) {
  if (typeof window2 !== "object" || !window2.RTCPeerConnection) {
    return;
  }
  const prototype = window2.RTCPeerConnection.prototype;
  const origCreateOffer = prototype.createOffer;
  const origCreateAnswer = prototype.createAnswer;
  const setLocalDescription = prototype.setLocalDescription;
  const setRemoteDescription = prototype.setRemoteDescription;
  const addIceCandidate = prototype.addIceCandidate;
  prototype.createOffer = function createOffer(successCallback, failureCallback) {
    const options = arguments.length >= 2 ? arguments[2] : arguments[0];
    const promise = origCreateOffer.apply(this, [options]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.createAnswer = function createAnswer(successCallback, failureCallback) {
    const options = arguments.length >= 2 ? arguments[2] : arguments[0];
    const promise = origCreateAnswer.apply(this, [options]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  let withCallback = function (description, successCallback, failureCallback) {
    const promise = setLocalDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setLocalDescription = withCallback;
  withCallback = function (description, successCallback, failureCallback) {
    const promise = setRemoteDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setRemoteDescription = withCallback;
  withCallback = function (candidate, successCallback, failureCallback) {
    const promise = addIceCandidate.apply(this, [candidate]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.addIceCandidate = withCallback;
}
function shimGetUserMedia(window2) {
  const navigator2 = window2 && window2.navigator;
  if (navigator2.mediaDevices && navigator2.mediaDevices.getUserMedia) {
    const mediaDevices = navigator2.mediaDevices;
    const _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);
    navigator2.mediaDevices.getUserMedia = (constraints) => {
      return _getUserMedia(shimConstraints(constraints));
    };
  }
  if (!navigator2.getUserMedia && navigator2.mediaDevices && navigator2.mediaDevices.getUserMedia) {
    navigator2.getUserMedia = function getUserMedia(constraints, cb, errcb) {
      navigator2.mediaDevices.getUserMedia(constraints).then(cb, errcb);
    }.bind(navigator2);
  }
}
function shimConstraints(constraints) {
  if (constraints && constraints.video !== void 0) {
    return Object.assign(
      {},
      constraints,
      { video: compactObject(constraints.video) }
    );
  }
  return constraints;
}
function shimRTCIceServerUrls(window2) {
  if (!window2.RTCPeerConnection) {
    return;
  }
  const OrigPeerConnection = window2.RTCPeerConnection;
  window2.RTCPeerConnection = function RTCPeerConnection2(pcConfig, pcConstraints) {
    if (pcConfig && pcConfig.iceServers) {
      const newIceServers = [];
      for (let i = 0; i < pcConfig.iceServers.length; i++) {
        let server = pcConfig.iceServers[i];
        if (!server.hasOwnProperty("urls") && server.hasOwnProperty("url")) {
          deprecated("RTCIceServer.url", "RTCIceServer.urls");
          server = JSON.parse(JSON.stringify(server));
          server.urls = server.url;
          delete server.url;
          newIceServers.push(server);
        } else {
          newIceServers.push(pcConfig.iceServers[i]);
        }
      }
      pcConfig.iceServers = newIceServers;
    }
    return new OrigPeerConnection(pcConfig, pcConstraints);
  };
  window2.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
  if ("generateCertificate" in OrigPeerConnection) {
    Object.defineProperty(window2.RTCPeerConnection, "generateCertificate", {
      get() {
        return OrigPeerConnection.generateCertificate;
      }
    });
  }
}
function shimTrackEventTransceiver(window2) {
  if (typeof window2 === "object" && window2.RTCTrackEvent && "receiver" in window2.RTCTrackEvent.prototype && !("transceiver" in window2.RTCTrackEvent.prototype)) {
    Object.defineProperty(window2.RTCTrackEvent.prototype, "transceiver", {
      get() {
        return { receiver: this.receiver };
      }
    });
  }
}
function shimCreateOfferLegacy(window2) {
  const origCreateOffer = window2.RTCPeerConnection.prototype.createOffer;
  window2.RTCPeerConnection.prototype.createOffer = function createOffer(offerOptions) {
    if (offerOptions) {
      if (typeof offerOptions.offerToReceiveAudio !== "undefined") {
        offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
      }
      const audioTransceiver = this.getTransceivers().find((transceiver) => transceiver.receiver.track.kind === "audio");
      if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
        if (audioTransceiver.direction === "sendrecv") {
          if (audioTransceiver.setDirection) {
            audioTransceiver.setDirection("sendonly");
          } else {
            audioTransceiver.direction = "sendonly";
          }
        } else if (audioTransceiver.direction === "recvonly") {
          if (audioTransceiver.setDirection) {
            audioTransceiver.setDirection("inactive");
          } else {
            audioTransceiver.direction = "inactive";
          }
        }
      } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) {
        this.addTransceiver("audio");
      }
      if (typeof offerOptions.offerToReceiveVideo !== "undefined") {
        offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
      }
      const videoTransceiver = this.getTransceivers().find((transceiver) => transceiver.receiver.track.kind === "video");
      if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
        if (videoTransceiver.direction === "sendrecv") {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection("sendonly");
          } else {
            videoTransceiver.direction = "sendonly";
          }
        } else if (videoTransceiver.direction === "recvonly") {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection("inactive");
          } else {
            videoTransceiver.direction = "inactive";
          }
        }
      } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) {
        this.addTransceiver("video");
      }
    }
    return origCreateOffer.apply(this, arguments);
  };
}
function shimAudioContext(window2) {
  if (typeof window2 !== "object" || window2.AudioContext) {
    return;
  }
  window2.AudioContext = window2.webkitAudioContext;
}
const safariShim = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  shimLocalStreamsAPI,
  shimRemoteStreamsAPI,
  shimCallbacksAPI,
  shimGetUserMedia,
  shimConstraints,
  shimRTCIceServerUrls,
  shimTrackEventTransceiver,
  shimCreateOfferLegacy,
  shimAudioContext
}, Symbol.toStringTag, { value: "Module" }));
function shimRTCIceCandidate(window2) {
  if (!window2.RTCIceCandidate || window2.RTCIceCandidate && "foundation" in window2.RTCIceCandidate.prototype) {
    return;
  }
  const NativeRTCIceCandidate = window2.RTCIceCandidate;
  window2.RTCIceCandidate = function RTCIceCandidate2(args) {
    if (typeof args === "object" && args.candidate && args.candidate.indexOf("a=") === 0) {
      args = JSON.parse(JSON.stringify(args));
      args.candidate = args.candidate.substr(2);
    }
    if (args.candidate && args.candidate.length) {
      const nativeCandidate = new NativeRTCIceCandidate(args);
      const parsedCandidate = SDPUtils$1.parseCandidate(args.candidate);
      const augmentedCandidate = Object.assign(
        nativeCandidate,
        parsedCandidate
      );
      augmentedCandidate.toJSON = function toJSON() {
        return {
          candidate: augmentedCandidate.candidate,
          sdpMid: augmentedCandidate.sdpMid,
          sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
          usernameFragment: augmentedCandidate.usernameFragment
        };
      };
      return augmentedCandidate;
    }
    return new NativeRTCIceCandidate(args);
  };
  window2.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;
  wrapPeerConnectionEvent(window2, "icecandidate", (e) => {
    if (e.candidate) {
      Object.defineProperty(e, "candidate", {
        value: new window2.RTCIceCandidate(e.candidate),
        writable: "false"
      });
    }
    return e;
  });
}
function shimMaxMessageSize(window2, browserDetails) {
  if (!window2.RTCPeerConnection) {
    return;
  }
  if (!("sctp" in window2.RTCPeerConnection.prototype)) {
    Object.defineProperty(window2.RTCPeerConnection.prototype, "sctp", {
      get() {
        return typeof this._sctp === "undefined" ? null : this._sctp;
      }
    });
  }
  const sctpInDescription = function (description) {
    if (!description || !description.sdp) {
      return false;
    }
    const sections = SDPUtils$1.splitSections(description.sdp);
    sections.shift();
    return sections.some((mediaSection) => {
      const mLine = SDPUtils$1.parseMLine(mediaSection);
      return mLine && mLine.kind === "application" && mLine.protocol.indexOf("SCTP") !== -1;
    });
  };
  const getRemoteFirefoxVersion = function (description) {
    const match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
    if (match === null || match.length < 2) {
      return -1;
    }
    const version = parseInt(match[1], 10);
    return version !== version ? -1 : version;
  };
  const getCanSendMaxMessageSize = function (remoteIsFirefox) {
    let canSendMaxMessageSize = 65536;
    if (browserDetails.browser === "firefox") {
      if (browserDetails.version < 57) {
        if (remoteIsFirefox === -1) {
          canSendMaxMessageSize = 16384;
        } else {
          canSendMaxMessageSize = 2147483637;
        }
      } else if (browserDetails.version < 60) {
        canSendMaxMessageSize = browserDetails.version === 57 ? 65535 : 65536;
      } else {
        canSendMaxMessageSize = 2147483637;
      }
    }
    return canSendMaxMessageSize;
  };
  const getMaxMessageSize = function (description, remoteIsFirefox) {
    let maxMessageSize = 65536;
    if (browserDetails.browser === "firefox" && browserDetails.version === 57) {
      maxMessageSize = 65535;
    }
    const match = SDPUtils$1.matchPrefix(
      description.sdp,
      "a=max-message-size:"
    );
    if (match.length > 0) {
      maxMessageSize = parseInt(match[0].substr(19), 10);
    } else if (browserDetails.browser === "firefox" && remoteIsFirefox !== -1) {
      maxMessageSize = 2147483637;
    }
    return maxMessageSize;
  };
  const origSetRemoteDescription = window2.RTCPeerConnection.prototype.setRemoteDescription;
  window2.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
    this._sctp = null;
    if (browserDetails.browser === "chrome" && browserDetails.version >= 76) {
      const { sdpSemantics } = this.getConfiguration();
      if (sdpSemantics === "plan-b") {
        Object.defineProperty(this, "sctp", {
          get() {
            return typeof this._sctp === "undefined" ? null : this._sctp;
          },
          enumerable: true,
          configurable: true
        });
      }
    }
    if (sctpInDescription(arguments[0])) {
      const isFirefox = getRemoteFirefoxVersion(arguments[0]);
      const canSendMMS = getCanSendMaxMessageSize(isFirefox);
      const remoteMMS = getMaxMessageSize(arguments[0], isFirefox);
      let maxMessageSize;
      if (canSendMMS === 0 && remoteMMS === 0) {
        maxMessageSize = Number.POSITIVE_INFINITY;
      } else if (canSendMMS === 0 || remoteMMS === 0) {
        maxMessageSize = Math.max(canSendMMS, remoteMMS);
      } else {
        maxMessageSize = Math.min(canSendMMS, remoteMMS);
      }
      const sctp = {};
      Object.defineProperty(sctp, "maxMessageSize", {
        get() {
          return maxMessageSize;
        }
      });
      this._sctp = sctp;
    }
    return origSetRemoteDescription.apply(this, arguments);
  };
}
function shimSendThrowTypeError(window2) {
  if (!(window2.RTCPeerConnection && "createDataChannel" in window2.RTCPeerConnection.prototype)) {
    return;
  }
  function wrapDcSend(dc, pc) {
    const origDataChannelSend = dc.send;
    dc.send = function send() {
      const data = arguments[0];
      const length = data.length || data.size || data.byteLength;
      if (dc.readyState === "open" && pc.sctp && length > pc.sctp.maxMessageSize) {
        throw new TypeError("Message too large (can send a maximum of " + pc.sctp.maxMessageSize + " bytes)");
      }
      return origDataChannelSend.apply(dc, arguments);
    };
  }
  const origCreateDataChannel = window2.RTCPeerConnection.prototype.createDataChannel;
  window2.RTCPeerConnection.prototype.createDataChannel = function createDataChannel() {
    const dataChannel = origCreateDataChannel.apply(this, arguments);
    wrapDcSend(dataChannel, this);
    return dataChannel;
  };
  wrapPeerConnectionEvent(window2, "datachannel", (e) => {
    wrapDcSend(e.channel, e.target);
    return e;
  });
}
function shimConnectionState(window2) {
  if (!window2.RTCPeerConnection || "connectionState" in window2.RTCPeerConnection.prototype) {
    return;
  }
  const proto = window2.RTCPeerConnection.prototype;
  Object.defineProperty(proto, "connectionState", {
    get() {
      return {
        completed: "connected",
        checking: "connecting"
      }[this.iceConnectionState] || this.iceConnectionState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(proto, "onconnectionstatechange", {
    get() {
      return this._onconnectionstatechange || null;
    },
    set(cb) {
      if (this._onconnectionstatechange) {
        this.removeEventListener(
          "connectionstatechange",
          this._onconnectionstatechange
        );
        delete this._onconnectionstatechange;
      }
      if (cb) {
        this.addEventListener(
          "connectionstatechange",
          this._onconnectionstatechange = cb
        );
      }
    },
    enumerable: true,
    configurable: true
  });
  ["setLocalDescription", "setRemoteDescription"].forEach((method) => {
    const origMethod = proto[method];
    proto[method] = function () {
      if (!this._connectionstatechangepoly) {
        this._connectionstatechangepoly = (e) => {
          const pc = e.target;
          if (pc._lastConnectionState !== pc.connectionState) {
            pc._lastConnectionState = pc.connectionState;
            const newEvent = new Event("connectionstatechange", e);
            pc.dispatchEvent(newEvent);
          }
          return e;
        };
        this.addEventListener(
          "iceconnectionstatechange",
          this._connectionstatechangepoly
        );
      }
      return origMethod.apply(this, arguments);
    };
  });
}
function removeExtmapAllowMixed(window2, browserDetails) {
  if (!window2.RTCPeerConnection) {
    return;
  }
  if (browserDetails.browser === "chrome" && browserDetails.version >= 71) {
    return;
  }
  if (browserDetails.browser === "safari" && browserDetails.version >= 605) {
    return;
  }
  const nativeSRD = window2.RTCPeerConnection.prototype.setRemoteDescription;
  window2.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription(desc) {
    if (desc && desc.sdp && desc.sdp.indexOf("\na=extmap-allow-mixed") !== -1) {
      const sdp2 = desc.sdp.split("\n").filter((line) => {
        return line.trim() !== "a=extmap-allow-mixed";
      }).join("\n");
      if (window2.RTCSessionDescription && desc instanceof window2.RTCSessionDescription) {
        arguments[0] = new window2.RTCSessionDescription({
          type: desc.type,
          sdp: sdp2
        });
      } else {
        desc.sdp = sdp2;
      }
    }
    return nativeSRD.apply(this, arguments);
  };
}
function shimAddIceCandidateNullOrEmpty(window2, browserDetails) {
  if (!(window2.RTCPeerConnection && window2.RTCPeerConnection.prototype)) {
    return;
  }
  const nativeAddIceCandidate = window2.RTCPeerConnection.prototype.addIceCandidate;
  if (!nativeAddIceCandidate || nativeAddIceCandidate.length === 0) {
    return;
  }
  window2.RTCPeerConnection.prototype.addIceCandidate = function addIceCandidate() {
    if (!arguments[0]) {
      if (arguments[1]) {
        arguments[1].apply(null);
      }
      return Promise.resolve();
    }
    if ((browserDetails.browser === "chrome" && browserDetails.version < 78 || browserDetails.browser === "firefox" && browserDetails.version < 68 || browserDetails.browser === "safari") && arguments[0] && arguments[0].candidate === "") {
      return Promise.resolve();
    }
    return nativeAddIceCandidate.apply(this, arguments);
  };
}
const commonShim = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  shimRTCIceCandidate,
  shimMaxMessageSize,
  shimSendThrowTypeError,
  shimConnectionState,
  removeExtmapAllowMixed,
  shimAddIceCandidateNullOrEmpty
}, Symbol.toStringTag, { value: "Module" }));
function adapterFactory({ window: window2 } = {}, options = {
  shimChrome: true,
  shimFirefox: true,
  shimEdge: true,
  shimSafari: true
}) {
  const logging2 = log;
  const browserDetails = detectBrowser(window2);
  const adapter2 = {
    browserDetails,
    commonShim,
    extractVersion,
    disableLog,
    disableWarnings
  };
  switch (browserDetails.browser) {
    case "chrome":
      if (!chromeShim || !shimPeerConnection$2 || !options.shimChrome) {
        logging2("Chrome shim is not included in this adapter release.");
        return adapter2;
      }
      if (browserDetails.version === null) {
        logging2("Chrome shim can not determine version, not shimming.");
        return adapter2;
      }
      logging2("adapter.js shimming chrome.");
      adapter2.browserShim = chromeShim;
      shimAddIceCandidateNullOrEmpty(window2, browserDetails);
      shimGetUserMedia$3(window2, browserDetails);
      shimMediaStream(window2);
      shimPeerConnection$2(window2, browserDetails);
      shimOnTrack$1(window2);
      shimAddTrackRemoveTrack(window2, browserDetails);
      shimGetSendersWithDtmf(window2);
      shimGetStats(window2);
      shimSenderReceiverGetStats(window2);
      fixNegotiationNeeded(window2, browserDetails);
      shimRTCIceCandidate(window2);
      shimConnectionState(window2);
      shimMaxMessageSize(window2, browserDetails);
      shimSendThrowTypeError(window2);
      removeExtmapAllowMixed(window2, browserDetails);
      break;
    case "firefox":
      if (!firefoxShim || !shimPeerConnection || !options.shimFirefox) {
        logging2("Firefox shim is not included in this adapter release.");
        return adapter2;
      }
      logging2("adapter.js shimming firefox.");
      adapter2.browserShim = firefoxShim;
      shimAddIceCandidateNullOrEmpty(window2, browserDetails);
      shimGetUserMedia$1(window2, browserDetails);
      shimPeerConnection(window2, browserDetails);
      shimOnTrack(window2);
      shimRemoveStream(window2);
      shimSenderGetStats(window2);
      shimReceiverGetStats(window2);
      shimRTCDataChannel(window2);
      shimAddTransceiver(window2);
      shimGetParameters(window2);
      shimCreateOffer(window2);
      shimCreateAnswer(window2);
      shimRTCIceCandidate(window2);
      shimConnectionState(window2);
      shimMaxMessageSize(window2, browserDetails);
      shimSendThrowTypeError(window2);
      break;
    case "edge":
      if (!edgeShim || !shimPeerConnection$1 || !options.shimEdge) {
        logging2("MS edge shim is not included in this adapter release.");
        return adapter2;
      }
      logging2("adapter.js shimming edge.");
      adapter2.browserShim = edgeShim;
      shimGetUserMedia$2(window2);
      shimGetDisplayMedia$1(window2);
      shimPeerConnection$1(window2, browserDetails);
      shimReplaceTrack(window2);
      shimMaxMessageSize(window2, browserDetails);
      shimSendThrowTypeError(window2);
      break;
    case "safari":
      if (!safariShim || !options.shimSafari) {
        logging2("Safari shim is not included in this adapter release.");
        return adapter2;
      }
      logging2("adapter.js shimming safari.");
      adapter2.browserShim = safariShim;
      shimAddIceCandidateNullOrEmpty(window2, browserDetails);
      shimRTCIceServerUrls(window2);
      shimCreateOfferLegacy(window2);
      shimCallbacksAPI(window2);
      shimLocalStreamsAPI(window2);
      shimRemoteStreamsAPI(window2);
      shimTrackEventTransceiver(window2);
      shimGetUserMedia(window2);
      shimAudioContext(window2);
      shimRTCIceCandidate(window2);
      shimMaxMessageSize(window2, browserDetails);
      shimSendThrowTypeError(window2);
      removeExtmapAllowMixed(window2, browserDetails);
      break;
    default:
      logging2("Unsupported browser!");
      break;
  }
  return adapter2;
}
const adapter = adapterFactory({ window: typeof window === "undefined" ? void 0 : window });
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, { get: v, set: s, enumerable: true, configurable: true });
}
var $af8cf1f663f490f4$var$webRTCAdapter = adapter.default || adapter;
var $af8cf1f663f490f4$export$25be9502477c137d = new (function () {
  function class_1() {
    this.isIOS = [
      "iPad",
      "iPhone",
      "iPod"
    ].includes(navigator.platform);
    this.supportedBrowsers = [
      "firefox",
      "chrome",
      "safari"
    ];
    this.minFirefoxVersion = 59;
    this.minChromeVersion = 72;
    this.minSafariVersion = 605;
  }
  class_1.prototype.isWebRTCSupported = function () {
    return typeof RTCPeerConnection !== "undefined";
  };
  class_1.prototype.isBrowserSupported = function () {
    var browser = this.getBrowser();
    var version = this.getVersion();
    var validBrowser = this.supportedBrowsers.includes(browser);
    if (!validBrowser)
      return false;
    if (browser === "chrome")
      return version >= this.minChromeVersion;
    if (browser === "firefox")
      return version >= this.minFirefoxVersion;
    if (browser === "safari")
      return !this.isIOS && version >= this.minSafariVersion;
    return false;
  };
  class_1.prototype.getBrowser = function () {
    return $af8cf1f663f490f4$var$webRTCAdapter.browserDetails.browser;
  };
  class_1.prototype.getVersion = function () {
    return $af8cf1f663f490f4$var$webRTCAdapter.browserDetails.version || 0;
  };
  class_1.prototype.isUnifiedPlanSupported = function () {
    var browser = this.getBrowser();
    var version = $af8cf1f663f490f4$var$webRTCAdapter.browserDetails.version || 0;
    if (browser === "chrome" && version < this.minChromeVersion)
      return false;
    if (browser === "firefox" && version >= this.minFirefoxVersion)
      return true;
    if (!window.RTCRtpTransceiver || !("currentDirection" in RTCRtpTransceiver.prototype))
      return false;
    var tempPc;
    var supported = false;
    try {
      tempPc = new RTCPeerConnection();
      tempPc.addTransceiver("audio");
      supported = true;
    } catch (e) {
    } finally {
      if (tempPc)
        tempPc.close();
    }
    return supported;
  };
  class_1.prototype.toString = function () {
    return "Supports:\n    browser:".concat(this.getBrowser(), "\n    version:").concat(this.getVersion(), "\n    isIOS:").concat(this.isIOS, "\n    isWebRTCSupported:").concat(this.isWebRTCSupported(), "\n    isBrowserSupported:").concat(this.isBrowserSupported(), "\n    isUnifiedPlanSupported:").concat(this.isUnifiedPlanSupported());
  };
  return class_1;
}())();
var $06cb531ed7840f78$var$DEFAULT_CONFIG = {
  iceServers: [
    {
      urls: "stun:stun.l.google.com:19302"
    },
    {
      urls: [
        "turn:eu-0.turn.peerjs.com:3478",
        "turn:us-0.turn.peerjs.com:3478"
      ],
      username: "peerjs",
      credential: "peerjsp"
    }
  ],
  sdpSemantics: "unified-plan"
};
var $06cb531ed7840f78$var$Util = function () {
  function Util() {
    this.CLOUD_HOST = "0.peerjs.com";
    this.CLOUD_PORT = 443;
    this.chunkedBrowsers = {
      Chrome: 1,
      chrome: 1
    };
    this.chunkedMTU = 16300;
    this.defaultConfig = $06cb531ed7840f78$var$DEFAULT_CONFIG;
    this.browser = $af8cf1f663f490f4$export$25be9502477c137d.getBrowser();
    this.browserVersion = $af8cf1f663f490f4$export$25be9502477c137d.getVersion();
    this.supports = function () {
      var supported = {
        browser: $af8cf1f663f490f4$export$25be9502477c137d.isBrowserSupported(),
        webRTC: $af8cf1f663f490f4$export$25be9502477c137d.isWebRTCSupported(),
        audioVideo: false,
        data: false,
        binaryBlob: false,
        reliable: false
      };
      if (!supported.webRTC)
        return supported;
      var pc;
      try {
        pc = new RTCPeerConnection($06cb531ed7840f78$var$DEFAULT_CONFIG);
        supported.audioVideo = true;
        var dc = void 0;
        try {
          dc = pc.createDataChannel("_PEERJSTEST", {
            ordered: true
          });
          supported.data = true;
          supported.reliable = !!dc.ordered;
          try {
            dc.binaryType = "blob";
            supported.binaryBlob = !$af8cf1f663f490f4$export$25be9502477c137d.isIOS;
          } catch (e) {
          }
        } catch (e) {
        } finally {
          if (dc)
            dc.close();
        }
      } catch (e) {
      } finally {
        if (pc)
          pc.close();
      }
      return supported;
    }();
    this.pack = binarypack.pack;
    this.unpack = binarypack.unpack;
    this._dataCount = 1;
  }
  Util.prototype.noop = function () {
  };
  Util.prototype.validateId = function (id) {
    return !id || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(id);
  };
  Util.prototype.chunk = function (blob) {
    var chunks = [];
    var size = blob.size;
    var total = Math.ceil(size / $06cb531ed7840f78$export$7debb50ef11d5e0b.chunkedMTU);
    var index = 0;
    var start = 0;
    while (start < size) {
      var end = Math.min(size, start + $06cb531ed7840f78$export$7debb50ef11d5e0b.chunkedMTU);
      var b = blob.slice(start, end);
      var chunk = {
        __peerData: this._dataCount,
        n: index,
        data: b,
        total
      };
      chunks.push(chunk);
      start = end;
      index++;
    }
    this._dataCount++;
    return chunks;
  };
  Util.prototype.blobToArrayBuffer = function (blob, cb) {
    var fr = new FileReader();
    fr.onload = function (evt) {
      if (evt.target)
        cb(evt.target.result);
    };
    fr.readAsArrayBuffer(blob);
    return fr;
  };
  Util.prototype.binaryStringToArrayBuffer = function (binary) {
    var byteArray = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i++)
      byteArray[i] = binary.charCodeAt(i) & 255;
    return byteArray.buffer;
  };
  Util.prototype.randomToken = function () {
    return Math.random().toString(36).slice(2);
  };
  Util.prototype.isSecure = function () {
    return location.protocol === "https:";
  };
  return Util;
}();
var $06cb531ed7840f78$export$7debb50ef11d5e0b = new $06cb531ed7840f78$var$Util();
var $26088d7da5b03f69$exports = {};
$parcel$export($26088d7da5b03f69$exports, "Peer", () => $26088d7da5b03f69$export$ecd1fc136c422448, (v) => $26088d7da5b03f69$export$ecd1fc136c422448 = v);
var $ac9b757d51178e15$exports = {};
var $ac9b757d51178e15$var$has = Object.prototype.hasOwnProperty, $ac9b757d51178e15$var$prefix = "~";
function $ac9b757d51178e15$var$Events() {
}
if (Object.create) {
  $ac9b757d51178e15$var$Events.prototype = /* @__PURE__ */ Object.create(null);
  if (!new $ac9b757d51178e15$var$Events().__proto__)
    $ac9b757d51178e15$var$prefix = false;
}
function $ac9b757d51178e15$var$EE(fn, context, once2) {
  this.fn = fn;
  this.context = context;
  this.once = once2 || false;
}
function $ac9b757d51178e15$var$addListener(emitter, event, fn, context, once2) {
  if (typeof fn !== "function")
    throw new TypeError("The listener must be a function");
  var listener = new $ac9b757d51178e15$var$EE(fn, context || emitter, once2), evt = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + event : event;
  if (!emitter._events[evt])
    emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn)
    emitter._events[evt].push(listener);
  else
    emitter._events[evt] = [
      emitter._events[evt],
      listener
    ];
  return emitter;
}
function $ac9b757d51178e15$var$clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0)
    emitter._events = new $ac9b757d51178e15$var$Events();
  else
    delete emitter._events[evt];
}
function $ac9b757d51178e15$var$EventEmitter() {
  this._events = new $ac9b757d51178e15$var$Events();
  this._eventsCount = 0;
}
$ac9b757d51178e15$var$EventEmitter.prototype.eventNames = function eventNames() {
  var names = [], events, name;
  if (this._eventsCount === 0)
    return names;
  for (name in events = this._events)
    if ($ac9b757d51178e15$var$has.call(events, name))
      names.push($ac9b757d51178e15$var$prefix ? name.slice(1) : name);
  if (Object.getOwnPropertySymbols)
    return names.concat(Object.getOwnPropertySymbols(events));
  return names;
};
$ac9b757d51178e15$var$EventEmitter.prototype.listeners = function listeners(event) {
  var evt = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + event : event, handlers = this._events[evt];
  if (!handlers)
    return [];
  if (handlers.fn)
    return [
      handlers.fn
    ];
  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++)
    ee[i] = handlers[i].fn;
  return ee;
};
$ac9b757d51178e15$var$EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + event : event, listeners2 = this._events[evt];
  if (!listeners2)
    return 0;
  if (listeners2.fn)
    return 1;
  return listeners2.length;
};
$ac9b757d51178e15$var$EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + event : event;
  if (!this._events[evt])
    return false;
  var listeners2 = this._events[evt], len = arguments.length, args, i;
  if (listeners2.fn) {
    if (listeners2.once)
      this.removeListener(event, listeners2.fn, void 0, true);
    switch (len) {
      case 1:
        return listeners2.fn.call(listeners2.context), true;
      case 2:
        return listeners2.fn.call(listeners2.context, a1), true;
      case 3:
        return listeners2.fn.call(listeners2.context, a1, a2), true;
      case 4:
        return listeners2.fn.call(listeners2.context, a1, a2, a3), true;
      case 5:
        return listeners2.fn.call(listeners2.context, a1, a2, a3, a4), true;
      case 6:
        return listeners2.fn.call(listeners2.context, a1, a2, a3, a4, a5), true;
    }
    for (i = 1, args = new Array(len - 1); i < len; i++)
      args[i - 1] = arguments[i];
    listeners2.fn.apply(listeners2.context, args);
  } else {
    var length = listeners2.length, j;
    for (i = 0; i < length; i++) {
      if (listeners2[i].once)
        this.removeListener(event, listeners2[i].fn, void 0, true);
      switch (len) {
        case 1:
          listeners2[i].fn.call(listeners2[i].context);
          break;
        case 2:
          listeners2[i].fn.call(listeners2[i].context, a1);
          break;
        case 3:
          listeners2[i].fn.call(listeners2[i].context, a1, a2);
          break;
        case 4:
          listeners2[i].fn.call(listeners2[i].context, a1, a2, a3);
          break;
        default:
          if (!args)
            for (j = 1, args = new Array(len - 1); j < len; j++)
              args[j - 1] = arguments[j];
          listeners2[i].fn.apply(listeners2[i].context, args);
      }
    }
  }
  return true;
};
$ac9b757d51178e15$var$EventEmitter.prototype.on = function on(event, fn, context) {
  return $ac9b757d51178e15$var$addListener(this, event, fn, context, false);
};
$ac9b757d51178e15$var$EventEmitter.prototype.once = function once(event, fn, context) {
  return $ac9b757d51178e15$var$addListener(this, event, fn, context, true);
};
$ac9b757d51178e15$var$EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once2) {
  var evt = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + event : event;
  if (!this._events[evt])
    return this;
  if (!fn) {
    $ac9b757d51178e15$var$clearEvent(this, evt);
    return this;
  }
  var listeners2 = this._events[evt];
  if (listeners2.fn) {
    if (listeners2.fn === fn && (!once2 || listeners2.once) && (!context || listeners2.context === context))
      $ac9b757d51178e15$var$clearEvent(this, evt);
  } else {
    for (var i = 0, events = [], length = listeners2.length; i < length; i++)
      if (listeners2[i].fn !== fn || once2 && !listeners2[i].once || context && listeners2[i].context !== context)
        events.push(listeners2[i]);
    if (events.length)
      this._events[evt] = events.length === 1 ? events[0] : events;
    else
      $ac9b757d51178e15$var$clearEvent(this, evt);
  }
  return this;
};
$ac9b757d51178e15$var$EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;
  if (event) {
    evt = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + event : event;
    if (this._events[evt])
      $ac9b757d51178e15$var$clearEvent(this, evt);
  } else {
    this._events = new $ac9b757d51178e15$var$Events();
    this._eventsCount = 0;
  }
  return this;
};
$ac9b757d51178e15$var$EventEmitter.prototype.off = $ac9b757d51178e15$var$EventEmitter.prototype.removeListener;
$ac9b757d51178e15$var$EventEmitter.prototype.addListener = $ac9b757d51178e15$var$EventEmitter.prototype.on;
$ac9b757d51178e15$var$EventEmitter.prefixed = $ac9b757d51178e15$var$prefix;
$ac9b757d51178e15$var$EventEmitter.EventEmitter = $ac9b757d51178e15$var$EventEmitter;
$ac9b757d51178e15$exports = $ac9b757d51178e15$var$EventEmitter;
var $1615705ecc6adca3$exports = {};
$parcel$export($1615705ecc6adca3$exports, "LogLevel", () => $1615705ecc6adca3$export$243e62d78d3b544d, (v) => $1615705ecc6adca3$export$243e62d78d3b544d = v);
$parcel$export($1615705ecc6adca3$exports, "default", () => $1615705ecc6adca3$export$2e2bcd8739ae039, (v) => $1615705ecc6adca3$export$2e2bcd8739ae039 = v);
var $1615705ecc6adca3$var$__read = function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = {
      error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var $1615705ecc6adca3$var$__spreadArray = function (to, from, pack) {
  if (pack || arguments.length === 2) {
    for (var i = 0, l = from.length, ar; i < l; i++)
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var $1615705ecc6adca3$var$LOG_PREFIX = "PeerJS: ";
var $1615705ecc6adca3$export$243e62d78d3b544d;
(function ($1615705ecc6adca3$export$243e62d78d3b544d2) {
  $1615705ecc6adca3$export$243e62d78d3b544d2[$1615705ecc6adca3$export$243e62d78d3b544d2["Disabled"] = 0] = "Disabled";
  $1615705ecc6adca3$export$243e62d78d3b544d2[$1615705ecc6adca3$export$243e62d78d3b544d2["Errors"] = 1] = "Errors";
  $1615705ecc6adca3$export$243e62d78d3b544d2[$1615705ecc6adca3$export$243e62d78d3b544d2["Warnings"] = 2] = "Warnings";
  $1615705ecc6adca3$export$243e62d78d3b544d2[$1615705ecc6adca3$export$243e62d78d3b544d2["All"] = 3] = "All";
})($1615705ecc6adca3$export$243e62d78d3b544d || ($1615705ecc6adca3$export$243e62d78d3b544d = {}));
var $1615705ecc6adca3$var$Logger = function () {
  function Logger() {
    this._logLevel = $1615705ecc6adca3$export$243e62d78d3b544d.Disabled;
  }
  Object.defineProperty(Logger.prototype, "logLevel", {
    get: function () {
      return this._logLevel;
    },
    set: function (logLevel) {
      this._logLevel = logLevel;
    },
    enumerable: false,
    configurable: true
  });
  Logger.prototype.log = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++)
      args[_i] = arguments[_i];
    if (this._logLevel >= $1615705ecc6adca3$export$243e62d78d3b544d.All)
      this._print.apply(this, $1615705ecc6adca3$var$__spreadArray([
        $1615705ecc6adca3$export$243e62d78d3b544d.All
      ], $1615705ecc6adca3$var$__read(args), false));
  };
  Logger.prototype.warn = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++)
      args[_i] = arguments[_i];
    if (this._logLevel >= $1615705ecc6adca3$export$243e62d78d3b544d.Warnings)
      this._print.apply(this, $1615705ecc6adca3$var$__spreadArray([
        $1615705ecc6adca3$export$243e62d78d3b544d.Warnings
      ], $1615705ecc6adca3$var$__read(args), false));
  };
  Logger.prototype.error = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++)
      args[_i] = arguments[_i];
    if (this._logLevel >= $1615705ecc6adca3$export$243e62d78d3b544d.Errors)
      this._print.apply(this, $1615705ecc6adca3$var$__spreadArray([
        $1615705ecc6adca3$export$243e62d78d3b544d.Errors
      ], $1615705ecc6adca3$var$__read(args), false));
  };
  Logger.prototype.setLogFunction = function (fn) {
    this._print = fn;
  };
  Logger.prototype._print = function (logLevel) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++)
      rest[_i - 1] = arguments[_i];
    var copy = $1615705ecc6adca3$var$__spreadArray([
      $1615705ecc6adca3$var$LOG_PREFIX
    ], $1615705ecc6adca3$var$__read(rest), false);
    for (var i in copy)
      if (copy[i] instanceof Error)
        copy[i] = "(" + copy[i].name + ") " + copy[i].message;
    if (logLevel >= $1615705ecc6adca3$export$243e62d78d3b544d.All)
      console.log.apply(console, $1615705ecc6adca3$var$__spreadArray([], $1615705ecc6adca3$var$__read(copy), false));
    else if (logLevel >= $1615705ecc6adca3$export$243e62d78d3b544d.Warnings)
      console.warn.apply(console, $1615705ecc6adca3$var$__spreadArray([
        "WARNING"
      ], $1615705ecc6adca3$var$__read(copy), false));
    else if (logLevel >= $1615705ecc6adca3$export$243e62d78d3b544d.Errors)
      console.error.apply(console, $1615705ecc6adca3$var$__spreadArray([
        "ERROR"
      ], $1615705ecc6adca3$var$__read(copy), false));
  };
  return Logger;
}();
var $1615705ecc6adca3$export$2e2bcd8739ae039 = new $1615705ecc6adca3$var$Logger();
var $31d11a8d122cb4b7$exports = {};
$parcel$export($31d11a8d122cb4b7$exports, "Socket", () => $31d11a8d122cb4b7$export$4798917dbf149b79, (v) => $31d11a8d122cb4b7$export$4798917dbf149b79 = v);
var $60fadef21a2daafc$export$3157d57b4135e3bc;
(function ($60fadef21a2daafc$export$3157d57b4135e3bc2) {
  $60fadef21a2daafc$export$3157d57b4135e3bc2["Data"] = "data";
  $60fadef21a2daafc$export$3157d57b4135e3bc2["Media"] = "media";
})($60fadef21a2daafc$export$3157d57b4135e3bc || ($60fadef21a2daafc$export$3157d57b4135e3bc = {}));
var $60fadef21a2daafc$export$9547aaa2e39030ff;
(function ($60fadef21a2daafc$export$9547aaa2e39030ff2) {
  $60fadef21a2daafc$export$9547aaa2e39030ff2["BrowserIncompatible"] = "browser-incompatible";
  $60fadef21a2daafc$export$9547aaa2e39030ff2["Disconnected"] = "disconnected";
  $60fadef21a2daafc$export$9547aaa2e39030ff2["InvalidID"] = "invalid-id";
  $60fadef21a2daafc$export$9547aaa2e39030ff2["InvalidKey"] = "invalid-key";
  $60fadef21a2daafc$export$9547aaa2e39030ff2["Network"] = "network";
  $60fadef21a2daafc$export$9547aaa2e39030ff2["PeerUnavailable"] = "peer-unavailable";
  $60fadef21a2daafc$export$9547aaa2e39030ff2["SslUnavailable"] = "ssl-unavailable";
  $60fadef21a2daafc$export$9547aaa2e39030ff2["ServerError"] = "server-error";
  $60fadef21a2daafc$export$9547aaa2e39030ff2["SocketError"] = "socket-error";
  $60fadef21a2daafc$export$9547aaa2e39030ff2["SocketClosed"] = "socket-closed";
  $60fadef21a2daafc$export$9547aaa2e39030ff2["UnavailableID"] = "unavailable-id";
  $60fadef21a2daafc$export$9547aaa2e39030ff2["WebRTC"] = "webrtc";
})($60fadef21a2daafc$export$9547aaa2e39030ff || ($60fadef21a2daafc$export$9547aaa2e39030ff = {}));
var $60fadef21a2daafc$export$89f507cf986a947;
(function ($60fadef21a2daafc$export$89f507cf986a9472) {
  $60fadef21a2daafc$export$89f507cf986a9472["Binary"] = "binary";
  $60fadef21a2daafc$export$89f507cf986a9472["BinaryUTF8"] = "binary-utf8";
  $60fadef21a2daafc$export$89f507cf986a9472["JSON"] = "json";
})($60fadef21a2daafc$export$89f507cf986a947 || ($60fadef21a2daafc$export$89f507cf986a947 = {}));
var $60fadef21a2daafc$export$3b5c4a4b6354f023;
(function ($60fadef21a2daafc$export$3b5c4a4b6354f0232) {
  $60fadef21a2daafc$export$3b5c4a4b6354f0232["Message"] = "message";
  $60fadef21a2daafc$export$3b5c4a4b6354f0232["Disconnected"] = "disconnected";
  $60fadef21a2daafc$export$3b5c4a4b6354f0232["Error"] = "error";
  $60fadef21a2daafc$export$3b5c4a4b6354f0232["Close"] = "close";
})($60fadef21a2daafc$export$3b5c4a4b6354f023 || ($60fadef21a2daafc$export$3b5c4a4b6354f023 = {}));
var $60fadef21a2daafc$export$adb4a1754da6f10d;
(function ($60fadef21a2daafc$export$adb4a1754da6f10d2) {
  $60fadef21a2daafc$export$adb4a1754da6f10d2["Heartbeat"] = "HEARTBEAT";
  $60fadef21a2daafc$export$adb4a1754da6f10d2["Candidate"] = "CANDIDATE";
  $60fadef21a2daafc$export$adb4a1754da6f10d2["Offer"] = "OFFER";
  $60fadef21a2daafc$export$adb4a1754da6f10d2["Answer"] = "ANSWER";
  $60fadef21a2daafc$export$adb4a1754da6f10d2["Open"] = "OPEN";
  $60fadef21a2daafc$export$adb4a1754da6f10d2["Error"] = "ERROR";
  $60fadef21a2daafc$export$adb4a1754da6f10d2["IdTaken"] = "ID-TAKEN";
  $60fadef21a2daafc$export$adb4a1754da6f10d2["InvalidKey"] = "INVALID-KEY";
  $60fadef21a2daafc$export$adb4a1754da6f10d2["Leave"] = "LEAVE";
  $60fadef21a2daafc$export$adb4a1754da6f10d2["Expire"] = "EXPIRE";
})($60fadef21a2daafc$export$adb4a1754da6f10d || ($60fadef21a2daafc$export$adb4a1754da6f10d = {}));
var $0d1ed891c5cb27c0$exports = {};
$0d1ed891c5cb27c0$exports = JSON.parse('{"name":"peerjs","version":"1.4.6","keywords":["peerjs","webrtc","p2p","rtc"],"description":"PeerJS client","homepage":"https://peerjs.com","bugs":{"url":"https://github.com/peers/peerjs/issues"},"repository":{"type":"git","url":"https://github.com/peers/peerjs"},"license":"MIT","contributors":["Michelle Bu <michelle@michellebu.com>","afrokick <devbyru@gmail.com>","ericz <really.ez@gmail.com>","Jairo <kidandcat@gmail.com>","Jonas Gloning <34194370+jonasgloning@users.noreply.github.com>","Jairo Caro-Accino Viciana <jairo@galax.be>","Carlos Caballero <carlos.caballero.gonzalez@gmail.com>","hc <hheennrryy@gmail.com>","Muhammad Asif <capripio@gmail.com>","PrashoonB <prashoonbhattacharjee@gmail.com>","Harsh Bardhan Mishra <47351025+HarshCasper@users.noreply.github.com>","akotynski <aleksanderkotbury@gmail.com>","lmb <i@lmb.io>","Jairooo <jairocaro@msn.com>","Moritz St\xFCckler <moritz.stueckler@gmail.com>","Simon <crydotsnakegithub@gmail.com>","Denis Lukov <denismassters@gmail.com>","Philipp Hancke <fippo@andyet.net>","Hans Oksendahl <hansoksendahl@gmail.com>","Jess <jessachandler@gmail.com>","khankuan <khankuan@gmail.com>","DUODVK <kurmanov.work@gmail.com>","XiZhao <kwang1imsa@gmail.com>","Matthias Lohr <matthias@lohr.me>","=frank tree <=frnktrb@googlemail.com>","Andre Eckardt <aeckardt@outlook.com>","Chris Cowan <agentme49@gmail.com>","Alex Chuev <alex@chuev.com>","alxnull <alxnull@e.mail.de>","Yemel Jardi <angel.jardi@gmail.com>","Ben Parnell <benjaminparnell.94@gmail.com>","Benny Lichtner <bennlich@gmail.com>","fresheneesz <bitetrudpublic@gmail.com>","bob.barstead@exaptive.com <bob.barstead@exaptive.com>","chandika <chandika@gmail.com>","emersion <contact@emersion.fr>","Christopher Van <cvan@users.noreply.github.com>","eddieherm <edhermoso@gmail.com>","Eduardo Pinho <enet4mikeenet@gmail.com>","Evandro Zanatta <ezanatta@tray.net.br>","Gardner Bickford <gardner@users.noreply.github.com>","Gian Luca <gianluca.cecchi@cynny.com>","PatrickJS <github@gdi2290.com>","jonnyf <github@jonathanfoss.co.uk>","Hizkia Felix <hizkifw@gmail.com>","Hristo Oskov <hristo.oskov@gmail.com>","Isaac Madwed <i.madwed@gmail.com>","Ilya Konanykhin <ilya.konanykhin@gmail.com>","jasonbarry <jasbarry@me.com>","Jonathan Burke <jonathan.burke.1311@googlemail.com>","Josh Hamit <josh.hamit@gmail.com>","Jordan Austin <jrax86@gmail.com>","Joel Wetzell <jwetzell@yahoo.com>","xizhao <kevin.wang@cloudera.com>","Alberto Torres <kungfoobar@gmail.com>","Jonathan Mayol <mayoljonathan@gmail.com>","Jefferson Felix <me@jsfelix.dev>","Rolf Erik Lekang <me@rolflekang.com>","Kevin Mai-Husan Chia <mhchia@users.noreply.github.com>","Pepijn de Vos <pepijndevos@gmail.com>","JooYoung <qkdlql@naver.com>","Tobias Speicher <rootcommander@gmail.com>","Steve Blaurock <sblaurock@gmail.com>","Kyrylo Shegeda <shegeda@ualberta.ca>","Diwank Singh Tomer <singh@diwank.name>","So\u0308ren Balko <Soeren.Balko@gmail.com>","Arpit Solanki <solankiarpit1997@gmail.com>","Yuki Ito <yuki@gnnk.net>","Artur Zayats <zag2art@gmail.com>"],"funding":{"type":"opencollective","url":"https://opencollective.com/peer"},"collective":{"type":"opencollective","url":"https://opencollective.com/peer"},"files":["dist/*"],"type":"module","sideEffects":["lib/global.ts","lib/supports.ts"],"main":"dist/bundler.cjs","module":"dist/bundler.mjs","browser-minified":"dist/peerjs.min.cjs","browser-unminified":"dist/peerjs.cjs","types":"dist/types.d.ts","engines":{"node":">= 10"},"targets":{"types":{"source":"lib/exports.ts"},"main":{"source":"lib/exports.ts","sourceMap":{"inlineSources":true}},"module":{"source":"lib/exports.ts","includeNodeModules":["eventemitter3"],"sourceMap":{"inlineSources":true}},"browser-minified":{"includeNodeModules":true,"context":"browser","optimize":true,"engines":{"browsers":"cover 99%, not dead"},"source":"lib/global.ts"},"browser-unminified":{"includeNodeModules":true,"context":"browser","optimize":false,"engines":{"browsers":"cover 99%, not dead"},"source":"lib/global.ts"}},"scripts":{"contributors":"git-authors-cli --print=false && prettier --write package.json && git add package.json package-lock.json && git commit -m \\"chore(contributors): update and sort contributors list\\"","check":"tsc --noEmit","watch":"parcel watch","build":"rm -rf dist && parcel build && cp dist/peerjs.cjs dist/peerjs.js && cp dist/peerjs.min.cjs dist/peerjs.min.js","prepublishOnly":"npm run build","test":"mocha -r ts-node/register -r jsdom-global/register test/**/*.ts","format":"prettier --write .","semantic-release":"semantic-release"},"devDependencies":{"@parcel/config-default":"^2.5.0","@parcel/packager-ts":"^2.5.0","@parcel/transformer-typescript-tsc":"^2.5.0","@parcel/transformer-typescript-types":"^2.5.0","@semantic-release/changelog":"^6.0.1","@semantic-release/git":"^10.0.1","@types/chai":"^4.3.0","@types/mocha":"^9.1.0","@types/node":"^17.0.18","chai":"^4.3.6","git-authors-cli":"^1.0.40","jsdom":"^19.0.0","jsdom-global":"^3.0.2","mocha":"^9.2.0","mock-socket":"8.0.5","parcel":"^2.5.0","parcel-transformer-tsc-sourcemaps":"^1.0.2","prettier":"^2.6.2","semantic-release":"^19.0.2","standard":"^16.0.4","ts-node":"^10.5.0","typescript":"^4.5.5"},"dependencies":{"@swc/helpers":"^0.3.13","eventemitter3":"^4.0.7","peerjs-js-binarypack":"1.0.1","webrtc-adapter":"^7.7.1"}}');
var $31d11a8d122cb4b7$var$__extends = function () {
  var extendStatics = function (d1, b1) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b)
        if (Object.prototype.hasOwnProperty.call(b, p))
          d[p] = b[p];
    };
    return extendStatics(d1, b1);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var $31d11a8d122cb4b7$var$__read = function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = {
      error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var $31d11a8d122cb4b7$var$__spreadArray = function (to, from, pack) {
  if (pack || arguments.length === 2) {
    for (var i = 0, l = from.length, ar; i < l; i++)
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var $31d11a8d122cb4b7$var$__values = function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function () {
        if (o && i >= o.length)
          o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var $31d11a8d122cb4b7$export$4798917dbf149b79 = function (_super) {
  $31d11a8d122cb4b7$var$__extends($31d11a8d122cb4b7$export$4798917dbf149b792, _super);
  function $31d11a8d122cb4b7$export$4798917dbf149b792(secure, host, port, path, key, pingInterval) {
    if (pingInterval === void 0)
      pingInterval = 5e3;
    var _this = _super.call(this) || this;
    _this.pingInterval = pingInterval;
    _this._disconnected = true;
    _this._messagesQueue = [];
    var wsProtocol = secure ? "wss://" : "ws://";
    _this._baseUrl = wsProtocol + host + ":" + port + path + "peerjs?key=" + key;
    return _this;
  }
  $31d11a8d122cb4b7$export$4798917dbf149b792.prototype.start = function (id, token) {
    var _this = this;
    this._id = id;
    var wsUrl = "".concat(this._baseUrl, "&id=").concat(id, "&token=").concat(token);
    if (!!this._socket || !this._disconnected)
      return;
    this._socket = new WebSocket(wsUrl + "&version=" + $0d1ed891c5cb27c0$exports.version);
    this._disconnected = false;
    this._socket.onmessage = function (event) {
      var data;
      try {
        data = JSON.parse(event.data);
        $1615705ecc6adca3$exports.default.log("Server message received:", data);
      } catch (e) {
        $1615705ecc6adca3$exports.default.log("Invalid server message", event.data);
        return;
      }
      _this.emit($60fadef21a2daafc$export$3b5c4a4b6354f023.Message, data);
    };
    this._socket.onclose = function (event) {
      if (_this._disconnected)
        return;
      $1615705ecc6adca3$exports.default.log("Socket closed.", event);
      _this._cleanup();
      _this._disconnected = true;
      _this.emit($60fadef21a2daafc$export$3b5c4a4b6354f023.Disconnected);
    };
    this._socket.onopen = function () {
      if (_this._disconnected)
        return;
      _this._sendQueuedMessages();
      $1615705ecc6adca3$exports.default.log("Socket open");
      _this._scheduleHeartbeat();
    };
  };
  $31d11a8d122cb4b7$export$4798917dbf149b792.prototype._scheduleHeartbeat = function () {
    var _this = this;
    this._wsPingTimer = setTimeout(function () {
      _this._sendHeartbeat();
    }, this.pingInterval);
  };
  $31d11a8d122cb4b7$export$4798917dbf149b792.prototype._sendHeartbeat = function () {
    if (!this._wsOpen()) {
      $1615705ecc6adca3$exports.default.log("Cannot send heartbeat, because socket closed");
      return;
    }
    var message = JSON.stringify({
      type: $60fadef21a2daafc$export$adb4a1754da6f10d.Heartbeat
    });
    this._socket.send(message);
    this._scheduleHeartbeat();
  };
  $31d11a8d122cb4b7$export$4798917dbf149b792.prototype._wsOpen = function () {
    return !!this._socket && this._socket.readyState === 1;
  };
  $31d11a8d122cb4b7$export$4798917dbf149b792.prototype._sendQueuedMessages = function () {
    var e_1, _a2;
    var copiedQueue = $31d11a8d122cb4b7$var$__spreadArray([], $31d11a8d122cb4b7$var$__read(this._messagesQueue), false);
    this._messagesQueue = [];
    try {
      for (var copiedQueue_1 = $31d11a8d122cb4b7$var$__values(copiedQueue), copiedQueue_1_1 = copiedQueue_1.next(); !copiedQueue_1_1.done; copiedQueue_1_1 = copiedQueue_1.next()) {
        var message = copiedQueue_1_1.value;
        this.send(message);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (copiedQueue_1_1 && !copiedQueue_1_1.done && (_a2 = copiedQueue_1.return))
          _a2.call(copiedQueue_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  };
  $31d11a8d122cb4b7$export$4798917dbf149b792.prototype.send = function (data) {
    if (this._disconnected)
      return;
    if (!this._id) {
      this._messagesQueue.push(data);
      return;
    }
    if (!data.type) {
      this.emit($60fadef21a2daafc$export$3b5c4a4b6354f023.Error, "Invalid message");
      return;
    }
    if (!this._wsOpen())
      return;
    var message = JSON.stringify(data);
    this._socket.send(message);
  };
  $31d11a8d122cb4b7$export$4798917dbf149b792.prototype.close = function () {
    if (this._disconnected)
      return;
    this._cleanup();
    this._disconnected = true;
  };
  $31d11a8d122cb4b7$export$4798917dbf149b792.prototype._cleanup = function () {
    if (this._socket) {
      this._socket.onopen = this._socket.onmessage = this._socket.onclose = null;
      this._socket.close();
      this._socket = void 0;
    }
    clearTimeout(this._wsPingTimer);
  };
  return $31d11a8d122cb4b7$export$4798917dbf149b792;
}($ac9b757d51178e15$exports.EventEmitter);
var $353dee38f9ab557b$exports = {};
$parcel$export($353dee38f9ab557b$exports, "MediaConnection", () => $353dee38f9ab557b$export$4a84e95a2324ac29, (v) => $353dee38f9ab557b$export$4a84e95a2324ac29 = v);
var $77f14d3e81888156$exports = {};
$parcel$export($77f14d3e81888156$exports, "Negotiator", () => $77f14d3e81888156$export$89e6bb5ad64bf4a, (v) => $77f14d3e81888156$export$89e6bb5ad64bf4a = v);
var $77f14d3e81888156$var$__assign = function () {
  $77f14d3e81888156$var$__assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return $77f14d3e81888156$var$__assign.apply(this, arguments);
};
var $77f14d3e81888156$var$__awaiter = function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var $77f14d3e81888156$var$__generator = function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  }, f, y, t, g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([
        n,
        v
      ]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [
            op[0] & 2,
            t.value
          ];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [
              0
            ];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [
          6,
          e
        ];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
var $77f14d3e81888156$export$89e6bb5ad64bf4a = function () {
  function $77f14d3e81888156$export$89e6bb5ad64bf4a2(connection) {
    this.connection = connection;
  }
  $77f14d3e81888156$export$89e6bb5ad64bf4a2.prototype.startConnection = function (options) {
    var peerConnection = this._startPeerConnection();
    this.connection.peerConnection = peerConnection;
    if (this.connection.type === $60fadef21a2daafc$export$3157d57b4135e3bc.Media && options._stream)
      this._addTracksToConnection(options._stream, peerConnection);
    if (options.originator) {
      if (this.connection.type === $60fadef21a2daafc$export$3157d57b4135e3bc.Data) {
        var dataConnection = this.connection;
        var config = {
          ordered: !!options.reliable
        };
        var dataChannel = peerConnection.createDataChannel(dataConnection.label, config);
        dataConnection.initialize(dataChannel);
      }
      this._makeOffer();
    } else
      this.handleSDP("OFFER", options.sdp);
  };
  $77f14d3e81888156$export$89e6bb5ad64bf4a2.prototype._startPeerConnection = function () {
    $1615705ecc6adca3$exports.default.log("Creating RTCPeerConnection.");
    var peerConnection = new RTCPeerConnection(this.connection.provider.options.config);
    this._setupListeners(peerConnection);
    return peerConnection;
  };
  $77f14d3e81888156$export$89e6bb5ad64bf4a2.prototype._setupListeners = function (peerConnection) {
    var _this = this;
    var peerId = this.connection.peer;
    var connectionId = this.connection.connectionId;
    var connectionType = this.connection.type;
    var provider = this.connection.provider;
    $1615705ecc6adca3$exports.default.log("Listening for ICE candidates.");
    peerConnection.onicecandidate = function (evt) {
      if (!evt.candidate || !evt.candidate.candidate)
        return;
      $1615705ecc6adca3$exports.default.log("Received ICE candidates for ".concat(peerId, ":"), evt.candidate);
      provider.socket.send({
        type: $60fadef21a2daafc$export$adb4a1754da6f10d.Candidate,
        payload: {
          candidate: evt.candidate,
          type: connectionType,
          connectionId
        },
        dst: peerId
      });
    };
    peerConnection.oniceconnectionstatechange = function () {
      switch (peerConnection.iceConnectionState) {
        case "failed":
          $1615705ecc6adca3$exports.default.log("iceConnectionState is failed, closing connections to " + peerId);
          _this.connection.emit("error", new Error("Negotiation of connection to " + peerId + " failed."));
          _this.connection.close();
          break;
        case "closed":
          $1615705ecc6adca3$exports.default.log("iceConnectionState is closed, closing connections to " + peerId);
          _this.connection.emit("error", new Error("Connection to " + peerId + " closed."));
          _this.connection.close();
          break;
        case "disconnected":
          $1615705ecc6adca3$exports.default.log("iceConnectionState changed to disconnected on the connection with " + peerId);
          break;
        case "completed":
          peerConnection.onicecandidate = $06cb531ed7840f78$export$7debb50ef11d5e0b.noop;
          break;
      }
      _this.connection.emit("iceStateChanged", peerConnection.iceConnectionState);
    };
    $1615705ecc6adca3$exports.default.log("Listening for data channel");
    peerConnection.ondatachannel = function (evt) {
      $1615705ecc6adca3$exports.default.log("Received data channel");
      var dataChannel = evt.channel;
      var connection = provider.getConnection(peerId, connectionId);
      connection.initialize(dataChannel);
    };
    $1615705ecc6adca3$exports.default.log("Listening for remote stream");
    peerConnection.ontrack = function (evt) {
      $1615705ecc6adca3$exports.default.log("Received remote stream");
      var stream = evt.streams[0];
      var connection = provider.getConnection(peerId, connectionId);
      if (connection.type === $60fadef21a2daafc$export$3157d57b4135e3bc.Media) {
        var mediaConnection = connection;
        _this._addStreamToMediaConnection(stream, mediaConnection);
      }
    };
  };
  $77f14d3e81888156$export$89e6bb5ad64bf4a2.prototype.cleanup = function () {
    $1615705ecc6adca3$exports.default.log("Cleaning up PeerConnection to " + this.connection.peer);
    var peerConnection = this.connection.peerConnection;
    if (!peerConnection)
      return;
    this.connection.peerConnection = null;
    peerConnection.onicecandidate = peerConnection.oniceconnectionstatechange = peerConnection.ondatachannel = peerConnection.ontrack = function () {
    };
    var peerConnectionNotClosed = peerConnection.signalingState !== "closed";
    var dataChannelNotClosed = false;
    if (this.connection.type === $60fadef21a2daafc$export$3157d57b4135e3bc.Data) {
      var dataConnection = this.connection;
      var dataChannel = dataConnection.dataChannel;
      if (dataChannel)
        dataChannelNotClosed = !!dataChannel.readyState && dataChannel.readyState !== "closed";
    }
    if (peerConnectionNotClosed || dataChannelNotClosed)
      peerConnection.close();
  };
  $77f14d3e81888156$export$89e6bb5ad64bf4a2.prototype._makeOffer = function () {
    return $77f14d3e81888156$var$__awaiter(this, void 0, Promise, function () {
      var peerConnection, provider, offer, payload, dataConnection, err_2, err_1_1;
      return $77f14d3e81888156$var$__generator(this, function (_a2) {
        switch (_a2.label) {
          case 0:
            peerConnection = this.connection.peerConnection;
            provider = this.connection.provider;
            _a2.label = 1;
          case 1:
            _a2.trys.push([
              1,
              7,
              ,
              8
            ]);
            return [
              4,
              peerConnection.createOffer(this.connection.options.constraints)
            ];
          case 2:
            offer = _a2.sent();
            $1615705ecc6adca3$exports.default.log("Created offer.");
            if (this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform === "function")
              offer.sdp = this.connection.options.sdpTransform(offer.sdp) || offer.sdp;
            _a2.label = 3;
          case 3:
            _a2.trys.push([
              3,
              5,
              ,
              6
            ]);
            return [
              4,
              peerConnection.setLocalDescription(offer)
            ];
          case 4:
            _a2.sent();
            $1615705ecc6adca3$exports.default.log("Set localDescription:", offer, "for:".concat(this.connection.peer));
            payload = {
              sdp: offer,
              type: this.connection.type,
              connectionId: this.connection.connectionId,
              metadata: this.connection.metadata,
              browser: $06cb531ed7840f78$export$7debb50ef11d5e0b.browser
            };
            if (this.connection.type === $60fadef21a2daafc$export$3157d57b4135e3bc.Data) {
              dataConnection = this.connection;
              payload = $77f14d3e81888156$var$__assign($77f14d3e81888156$var$__assign({}, payload), {
                label: dataConnection.label,
                reliable: dataConnection.reliable,
                serialization: dataConnection.serialization
              });
            }
            provider.socket.send({
              type: $60fadef21a2daafc$export$adb4a1754da6f10d.Offer,
              payload,
              dst: this.connection.peer
            });
            return [
              3,
              6
            ];
          case 5:
            err_2 = _a2.sent();
            if (err_2 != "OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer") {
              provider.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.WebRTC, err_2);
              $1615705ecc6adca3$exports.default.log("Failed to setLocalDescription, ", err_2);
            }
            return [
              3,
              6
            ];
          case 6:
            return [
              3,
              8
            ];
          case 7:
            err_1_1 = _a2.sent();
            provider.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.WebRTC, err_1_1);
            $1615705ecc6adca3$exports.default.log("Failed to createOffer, ", err_1_1);
            return [
              3,
              8
            ];
          case 8:
            return [
              2
            ];
        }
      });
    });
  };
  $77f14d3e81888156$export$89e6bb5ad64bf4a2.prototype._makeAnswer = function () {
    return $77f14d3e81888156$var$__awaiter(this, void 0, Promise, function () {
      var peerConnection, provider, answer, err_3, err_1_2;
      return $77f14d3e81888156$var$__generator(this, function (_a2) {
        switch (_a2.label) {
          case 0:
            peerConnection = this.connection.peerConnection;
            provider = this.connection.provider;
            _a2.label = 1;
          case 1:
            _a2.trys.push([
              1,
              7,
              ,
              8
            ]);
            return [
              4,
              peerConnection.createAnswer()
            ];
          case 2:
            answer = _a2.sent();
            $1615705ecc6adca3$exports.default.log("Created answer.");
            if (this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform === "function")
              answer.sdp = this.connection.options.sdpTransform(answer.sdp) || answer.sdp;
            _a2.label = 3;
          case 3:
            _a2.trys.push([
              3,
              5,
              ,
              6
            ]);
            return [
              4,
              peerConnection.setLocalDescription(answer)
            ];
          case 4:
            _a2.sent();
            $1615705ecc6adca3$exports.default.log("Set localDescription:", answer, "for:".concat(this.connection.peer));
            provider.socket.send({
              type: $60fadef21a2daafc$export$adb4a1754da6f10d.Answer,
              payload: {
                sdp: answer,
                type: this.connection.type,
                connectionId: this.connection.connectionId,
                browser: $06cb531ed7840f78$export$7debb50ef11d5e0b.browser
              },
              dst: this.connection.peer
            });
            return [
              3,
              6
            ];
          case 5:
            err_3 = _a2.sent();
            provider.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.WebRTC, err_3);
            $1615705ecc6adca3$exports.default.log("Failed to setLocalDescription, ", err_3);
            return [
              3,
              6
            ];
          case 6:
            return [
              3,
              8
            ];
          case 7:
            err_1_2 = _a2.sent();
            provider.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.WebRTC, err_1_2);
            $1615705ecc6adca3$exports.default.log("Failed to create answer, ", err_1_2);
            return [
              3,
              8
            ];
          case 8:
            return [
              2
            ];
        }
      });
    });
  };
  $77f14d3e81888156$export$89e6bb5ad64bf4a2.prototype.handleSDP = function (type2, sdp2) {
    return $77f14d3e81888156$var$__awaiter(this, void 0, Promise, function () {
      var peerConnection, provider, self2, err_4;
      return $77f14d3e81888156$var$__generator(this, function (_a2) {
        switch (_a2.label) {
          case 0:
            sdp2 = new RTCSessionDescription(sdp2);
            peerConnection = this.connection.peerConnection;
            provider = this.connection.provider;
            $1615705ecc6adca3$exports.default.log("Setting remote description", sdp2);
            self2 = this;
            _a2.label = 1;
          case 1:
            _a2.trys.push([
              1,
              5,
              ,
              6
            ]);
            return [
              4,
              peerConnection.setRemoteDescription(sdp2)
            ];
          case 2:
            _a2.sent();
            $1615705ecc6adca3$exports.default.log("Set remoteDescription:".concat(type2, " for:").concat(this.connection.peer));
            if (!(type2 === "OFFER"))
              return [
                3,
                4
              ];
            return [
              4,
              self2._makeAnswer()
            ];
          case 3:
            _a2.sent();
            _a2.label = 4;
          case 4:
            return [
              3,
              6
            ];
          case 5:
            err_4 = _a2.sent();
            provider.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.WebRTC, err_4);
            $1615705ecc6adca3$exports.default.log("Failed to setRemoteDescription, ", err_4);
            return [
              3,
              6
            ];
          case 6:
            return [
              2
            ];
        }
      });
    });
  };
  $77f14d3e81888156$export$89e6bb5ad64bf4a2.prototype.handleCandidate = function (ice) {
    return $77f14d3e81888156$var$__awaiter(this, void 0, Promise, function () {
      var candidate, sdpMLineIndex, sdpMid, peerConnection, provider, err_5;
      return $77f14d3e81888156$var$__generator(this, function (_a2) {
        switch (_a2.label) {
          case 0:
            $1615705ecc6adca3$exports.default.log("handleCandidate:", ice);
            candidate = ice.candidate;
            sdpMLineIndex = ice.sdpMLineIndex;
            sdpMid = ice.sdpMid;
            peerConnection = this.connection.peerConnection;
            provider = this.connection.provider;
            _a2.label = 1;
          case 1:
            _a2.trys.push([
              1,
              3,
              ,
              4
            ]);
            return [
              4,
              peerConnection.addIceCandidate(new RTCIceCandidate({
                sdpMid,
                sdpMLineIndex,
                candidate
              }))
            ];
          case 2:
            _a2.sent();
            $1615705ecc6adca3$exports.default.log("Added ICE candidate for:".concat(this.connection.peer));
            return [
              3,
              4
            ];
          case 3:
            err_5 = _a2.sent();
            provider.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.WebRTC, err_5);
            $1615705ecc6adca3$exports.default.log("Failed to handleCandidate, ", err_5);
            return [
              3,
              4
            ];
          case 4:
            return [
              2
            ];
        }
      });
    });
  };
  $77f14d3e81888156$export$89e6bb5ad64bf4a2.prototype._addTracksToConnection = function (stream, peerConnection) {
    $1615705ecc6adca3$exports.default.log("add tracks from stream ".concat(stream.id, " to peer connection"));
    if (!peerConnection.addTrack)
      return $1615705ecc6adca3$exports.default.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");
    stream.getTracks().forEach(function (track) {
      peerConnection.addTrack(track, stream);
    });
  };
  $77f14d3e81888156$export$89e6bb5ad64bf4a2.prototype._addStreamToMediaConnection = function (stream, mediaConnection) {
    $1615705ecc6adca3$exports.default.log("add stream ".concat(stream.id, " to media connection ").concat(mediaConnection.connectionId));
    mediaConnection.addStream(stream);
  };
  return $77f14d3e81888156$export$89e6bb5ad64bf4a2;
}();
var $0b3b332fd86c5202$exports = {};
$parcel$export($0b3b332fd86c5202$exports, "BaseConnection", () => $0b3b332fd86c5202$export$23a2a68283c24d80, (v) => $0b3b332fd86c5202$export$23a2a68283c24d80 = v);
var $0b3b332fd86c5202$var$__extends = function () {
  var extendStatics = function (d1, b1) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b)
        if (Object.prototype.hasOwnProperty.call(b, p))
          d[p] = b[p];
    };
    return extendStatics(d1, b1);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var $0b3b332fd86c5202$export$23a2a68283c24d80 = function (_super) {
  $0b3b332fd86c5202$var$__extends($0b3b332fd86c5202$export$23a2a68283c24d802, _super);
  function $0b3b332fd86c5202$export$23a2a68283c24d802(peer2, provider, options) {
    var _this = _super.call(this) || this;
    _this.peer = peer2;
    _this.provider = provider;
    _this.options = options;
    _this._open = false;
    _this.metadata = options.metadata;
    return _this;
  }
  Object.defineProperty($0b3b332fd86c5202$export$23a2a68283c24d802.prototype, "open", {
    get: function () {
      return this._open;
    },
    enumerable: false,
    configurable: true
  });
  return $0b3b332fd86c5202$export$23a2a68283c24d802;
}($ac9b757d51178e15$exports.EventEmitter);
var $353dee38f9ab557b$var$__extends = function () {
  var extendStatics = function (d1, b1) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b)
        if (Object.prototype.hasOwnProperty.call(b, p))
          d[p] = b[p];
    };
    return extendStatics(d1, b1);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var $353dee38f9ab557b$var$__assign = function () {
  $353dee38f9ab557b$var$__assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return $353dee38f9ab557b$var$__assign.apply(this, arguments);
};
var $353dee38f9ab557b$var$__values = function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function () {
        if (o && i >= o.length)
          o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var $353dee38f9ab557b$export$4a84e95a2324ac29 = function (_super) {
  $353dee38f9ab557b$var$__extends($353dee38f9ab557b$export$4a84e95a2324ac292, _super);
  function $353dee38f9ab557b$export$4a84e95a2324ac292(peerId, provider, options) {
    var _this = _super.call(this, peerId, provider, options) || this;
    _this._localStream = _this.options._stream;
    _this.connectionId = _this.options.connectionId || $353dee38f9ab557b$export$4a84e95a2324ac292.ID_PREFIX + $06cb531ed7840f78$export$7debb50ef11d5e0b.randomToken();
    _this._negotiator = new $77f14d3e81888156$exports.Negotiator(_this);
    if (_this._localStream)
      _this._negotiator.startConnection({
        _stream: _this._localStream,
        originator: true
      });
    return _this;
  }
  Object.defineProperty($353dee38f9ab557b$export$4a84e95a2324ac292.prototype, "type", {
    get: function () {
      return $60fadef21a2daafc$export$3157d57b4135e3bc.Media;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty($353dee38f9ab557b$export$4a84e95a2324ac292.prototype, "localStream", {
    get: function () {
      return this._localStream;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty($353dee38f9ab557b$export$4a84e95a2324ac292.prototype, "remoteStream", {
    get: function () {
      return this._remoteStream;
    },
    enumerable: false,
    configurable: true
  });
  $353dee38f9ab557b$export$4a84e95a2324ac292.prototype.addStream = function (remoteStream) {
    $1615705ecc6adca3$exports.default.log("Receiving stream", remoteStream);
    this._remoteStream = remoteStream;
    _super.prototype.emit.call(this, "stream", remoteStream);
  };
  $353dee38f9ab557b$export$4a84e95a2324ac292.prototype.handleMessage = function (message) {
    var type2 = message.type;
    var payload = message.payload;
    switch (message.type) {
      case $60fadef21a2daafc$export$adb4a1754da6f10d.Answer:
        this._negotiator.handleSDP(type2, payload.sdp);
        this._open = true;
        break;
      case $60fadef21a2daafc$export$adb4a1754da6f10d.Candidate:
        this._negotiator.handleCandidate(payload.candidate);
        break;
      default:
        $1615705ecc6adca3$exports.default.warn("Unrecognized message type:".concat(type2, " from peer:").concat(this.peer));
        break;
    }
  };
  $353dee38f9ab557b$export$4a84e95a2324ac292.prototype.answer = function (stream, options) {
    var e_1, _a2;
    if (options === void 0)
      options = {};
    if (this._localStream) {
      $1615705ecc6adca3$exports.default.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");
      return;
    }
    this._localStream = stream;
    if (options && options.sdpTransform)
      this.options.sdpTransform = options.sdpTransform;
    this._negotiator.startConnection($353dee38f9ab557b$var$__assign($353dee38f9ab557b$var$__assign({}, this.options._payload), {
      _stream: stream
    }));
    var messages = this.provider._getMessages(this.connectionId);
    try {
      for (var messages_1 = $353dee38f9ab557b$var$__values(messages), messages_1_1 = messages_1.next(); !messages_1_1.done; messages_1_1 = messages_1.next()) {
        var message = messages_1_1.value;
        this.handleMessage(message);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (messages_1_1 && !messages_1_1.done && (_a2 = messages_1.return))
          _a2.call(messages_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    this._open = true;
  };
  $353dee38f9ab557b$export$4a84e95a2324ac292.prototype.close = function () {
    if (this._negotiator) {
      this._negotiator.cleanup();
      this._negotiator = null;
    }
    this._localStream = null;
    this._remoteStream = null;
    if (this.provider) {
      this.provider._removeConnection(this);
      this.provider = null;
    }
    if (this.options && this.options._stream)
      this.options._stream = null;
    if (!this.open)
      return;
    this._open = false;
    _super.prototype.emit.call(this, "close");
  };
  $353dee38f9ab557b$export$4a84e95a2324ac292.ID_PREFIX = "mc_";
  return $353dee38f9ab557b$export$4a84e95a2324ac292;
}($0b3b332fd86c5202$exports.BaseConnection);
var $3356170d7bce7f20$exports = {};
$parcel$export($3356170d7bce7f20$exports, "DataConnection", () => $3356170d7bce7f20$export$d365f7ad9d7df9c9, (v) => $3356170d7bce7f20$export$d365f7ad9d7df9c9 = v);
var $3014d862dcc9946b$exports = {};
$parcel$export($3014d862dcc9946b$exports, "EncodingQueue", () => $3014d862dcc9946b$export$c6913ae0ed687038, (v) => $3014d862dcc9946b$export$c6913ae0ed687038 = v);
var $3014d862dcc9946b$var$__extends = function () {
  var extendStatics = function (d1, b1) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b)
        if (Object.prototype.hasOwnProperty.call(b, p))
          d[p] = b[p];
    };
    return extendStatics(d1, b1);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var $3014d862dcc9946b$export$c6913ae0ed687038 = function (_super) {
  $3014d862dcc9946b$var$__extends($3014d862dcc9946b$export$c6913ae0ed6870382, _super);
  function $3014d862dcc9946b$export$c6913ae0ed6870382() {
    var _this = _super.call(this) || this;
    _this.fileReader = new FileReader();
    _this._queue = [];
    _this._processing = false;
    _this.fileReader.onload = function (evt) {
      _this._processing = false;
      if (evt.target)
        _this.emit("done", evt.target.result);
      _this.doNextTask();
    };
    _this.fileReader.onerror = function (evt) {
      $1615705ecc6adca3$exports.default.error("EncodingQueue error:", evt);
      _this._processing = false;
      _this.destroy();
      _this.emit("error", evt);
    };
    return _this;
  }
  Object.defineProperty($3014d862dcc9946b$export$c6913ae0ed6870382.prototype, "queue", {
    get: function () {
      return this._queue;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty($3014d862dcc9946b$export$c6913ae0ed6870382.prototype, "size", {
    get: function () {
      return this.queue.length;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty($3014d862dcc9946b$export$c6913ae0ed6870382.prototype, "processing", {
    get: function () {
      return this._processing;
    },
    enumerable: false,
    configurable: true
  });
  $3014d862dcc9946b$export$c6913ae0ed6870382.prototype.enque = function (blob) {
    this.queue.push(blob);
    if (this.processing)
      return;
    this.doNextTask();
  };
  $3014d862dcc9946b$export$c6913ae0ed6870382.prototype.destroy = function () {
    this.fileReader.abort();
    this._queue = [];
  };
  $3014d862dcc9946b$export$c6913ae0ed6870382.prototype.doNextTask = function () {
    if (this.size === 0)
      return;
    if (this.processing)
      return;
    this._processing = true;
    this.fileReader.readAsArrayBuffer(this.queue.shift());
  };
  return $3014d862dcc9946b$export$c6913ae0ed6870382;
}($ac9b757d51178e15$exports.EventEmitter);
var $3356170d7bce7f20$var$__extends = function () {
  var extendStatics = function (d1, b1) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b)
        if (Object.prototype.hasOwnProperty.call(b, p))
          d[p] = b[p];
    };
    return extendStatics(d1, b1);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var $3356170d7bce7f20$var$__values = function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function () {
        if (o && i >= o.length)
          o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var $3356170d7bce7f20$export$d365f7ad9d7df9c9 = function (_super) {
  $3356170d7bce7f20$var$__extends($3356170d7bce7f20$export$d365f7ad9d7df9c92, _super);
  function $3356170d7bce7f20$export$d365f7ad9d7df9c92(peerId, provider, options) {
    var _this = _super.call(this, peerId, provider, options) || this;
    _this.stringify = JSON.stringify;
    _this.parse = JSON.parse;
    _this._buffer = [];
    _this._bufferSize = 0;
    _this._buffering = false;
    _this._chunkedData = {};
    _this._encodingQueue = new $3014d862dcc9946b$exports.EncodingQueue();
    _this.connectionId = _this.options.connectionId || $3356170d7bce7f20$export$d365f7ad9d7df9c92.ID_PREFIX + $06cb531ed7840f78$export$7debb50ef11d5e0b.randomToken();
    _this.label = _this.options.label || _this.connectionId;
    _this.serialization = _this.options.serialization || $60fadef21a2daafc$export$89f507cf986a947.Binary;
    _this.reliable = !!_this.options.reliable;
    _this._encodingQueue.on("done", function (ab) {
      _this._bufferedSend(ab);
    });
    _this._encodingQueue.on("error", function () {
      $1615705ecc6adca3$exports.default.error("DC#".concat(_this.connectionId, ": Error occured in encoding from blob to arraybuffer, close DC"));
      _this.close();
    });
    _this._negotiator = new $77f14d3e81888156$exports.Negotiator(_this);
    _this._negotiator.startConnection(_this.options._payload || {
      originator: true
    });
    return _this;
  }
  Object.defineProperty($3356170d7bce7f20$export$d365f7ad9d7df9c92.prototype, "type", {
    get: function () {
      return $60fadef21a2daafc$export$3157d57b4135e3bc.Data;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty($3356170d7bce7f20$export$d365f7ad9d7df9c92.prototype, "dataChannel", {
    get: function () {
      return this._dc;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty($3356170d7bce7f20$export$d365f7ad9d7df9c92.prototype, "bufferSize", {
    get: function () {
      return this._bufferSize;
    },
    enumerable: false,
    configurable: true
  });
  $3356170d7bce7f20$export$d365f7ad9d7df9c92.prototype.initialize = function (dc) {
    this._dc = dc;
    this._configureDataChannel();
  };
  $3356170d7bce7f20$export$d365f7ad9d7df9c92.prototype._configureDataChannel = function () {
    var _this = this;
    if (!$06cb531ed7840f78$export$7debb50ef11d5e0b.supports.binaryBlob || $06cb531ed7840f78$export$7debb50ef11d5e0b.supports.reliable)
      this.dataChannel.binaryType = "arraybuffer";
    this.dataChannel.onopen = function () {
      $1615705ecc6adca3$exports.default.log("DC#".concat(_this.connectionId, " dc connection success"));
      _this._open = true;
      _this.emit("open");
    };
    this.dataChannel.onmessage = function (e) {
      $1615705ecc6adca3$exports.default.log("DC#".concat(_this.connectionId, " dc onmessage:"), e.data);
      _this._handleDataMessage(e);
    };
    this.dataChannel.onclose = function () {
      $1615705ecc6adca3$exports.default.log("DC#".concat(_this.connectionId, " dc closed for:"), _this.peer);
      _this.close();
    };
  };
  $3356170d7bce7f20$export$d365f7ad9d7df9c92.prototype._handleDataMessage = function (_a2) {
    var _this = this;
    var data = _a2.data;
    var datatype = data.constructor;
    var isBinarySerialization = this.serialization === $60fadef21a2daafc$export$89f507cf986a947.Binary || this.serialization === $60fadef21a2daafc$export$89f507cf986a947.BinaryUTF8;
    var deserializedData = data;
    if (isBinarySerialization) {
      if (datatype === Blob) {
        $06cb531ed7840f78$export$7debb50ef11d5e0b.blobToArrayBuffer(data, function (ab) {
          var unpackedData = $06cb531ed7840f78$export$7debb50ef11d5e0b.unpack(ab);
          _this.emit("data", unpackedData);
        });
        return;
      } else if (datatype === ArrayBuffer)
        deserializedData = $06cb531ed7840f78$export$7debb50ef11d5e0b.unpack(data);
      else if (datatype === String) {
        var ab1 = $06cb531ed7840f78$export$7debb50ef11d5e0b.binaryStringToArrayBuffer(data);
        deserializedData = $06cb531ed7840f78$export$7debb50ef11d5e0b.unpack(ab1);
      }
    } else if (this.serialization === $60fadef21a2daafc$export$89f507cf986a947.JSON)
      deserializedData = this.parse(data);
    if (deserializedData.__peerData) {
      this._handleChunk(deserializedData);
      return;
    }
    _super.prototype.emit.call(this, "data", deserializedData);
  };
  $3356170d7bce7f20$export$d365f7ad9d7df9c92.prototype._handleChunk = function (data) {
    var id = data.__peerData;
    var chunkInfo = this._chunkedData[id] || {
      data: [],
      count: 0,
      total: data.total
    };
    chunkInfo.data[data.n] = data.data;
    chunkInfo.count++;
    this._chunkedData[id] = chunkInfo;
    if (chunkInfo.total === chunkInfo.count) {
      delete this._chunkedData[id];
      var data_1 = new Blob(chunkInfo.data);
      this._handleDataMessage({
        data: data_1
      });
    }
  };
  $3356170d7bce7f20$export$d365f7ad9d7df9c92.prototype.close = function () {
    this._buffer = [];
    this._bufferSize = 0;
    this._chunkedData = {};
    if (this._negotiator) {
      this._negotiator.cleanup();
      this._negotiator = null;
    }
    if (this.provider) {
      this.provider._removeConnection(this);
      this.provider = null;
    }
    if (this.dataChannel) {
      this.dataChannel.onopen = null;
      this.dataChannel.onmessage = null;
      this.dataChannel.onclose = null;
      this._dc = null;
    }
    if (this._encodingQueue) {
      this._encodingQueue.destroy();
      this._encodingQueue.removeAllListeners();
      this._encodingQueue = null;
    }
    if (!this.open)
      return;
    this._open = false;
    _super.prototype.emit.call(this, "close");
  };
  $3356170d7bce7f20$export$d365f7ad9d7df9c92.prototype.send = function (data, chunked) {
    if (!this.open) {
      _super.prototype.emit.call(this, "error", new Error("Connection is not open. You should listen for the `open` event before sending messages."));
      return;
    }
    if (this.serialization === $60fadef21a2daafc$export$89f507cf986a947.JSON)
      this._bufferedSend(this.stringify(data));
    else if (this.serialization === $60fadef21a2daafc$export$89f507cf986a947.Binary || this.serialization === $60fadef21a2daafc$export$89f507cf986a947.BinaryUTF8) {
      var blob = $06cb531ed7840f78$export$7debb50ef11d5e0b.pack(data);
      if (!chunked && blob.size > $06cb531ed7840f78$export$7debb50ef11d5e0b.chunkedMTU) {
        this._sendChunks(blob);
        return;
      }
      if (!$06cb531ed7840f78$export$7debb50ef11d5e0b.supports.binaryBlob)
        this._encodingQueue.enque(blob);
      else
        this._bufferedSend(blob);
    } else
      this._bufferedSend(data);
  };
  $3356170d7bce7f20$export$d365f7ad9d7df9c92.prototype._bufferedSend = function (msg) {
    if (this._buffering || !this._trySend(msg)) {
      this._buffer.push(msg);
      this._bufferSize = this._buffer.length;
    }
  };
  $3356170d7bce7f20$export$d365f7ad9d7df9c92.prototype._trySend = function (msg) {
    var _this = this;
    if (!this.open)
      return false;
    if (this.dataChannel.bufferedAmount > $3356170d7bce7f20$export$d365f7ad9d7df9c92.MAX_BUFFERED_AMOUNT) {
      this._buffering = true;
      setTimeout(function () {
        _this._buffering = false;
        _this._tryBuffer();
      }, 50);
      return false;
    }
    try {
      this.dataChannel.send(msg);
    } catch (e) {
      $1615705ecc6adca3$exports.default.error("DC#:".concat(this.connectionId, " Error when sending:"), e);
      this._buffering = true;
      this.close();
      return false;
    }
    return true;
  };
  $3356170d7bce7f20$export$d365f7ad9d7df9c92.prototype._tryBuffer = function () {
    if (!this.open)
      return;
    if (this._buffer.length === 0)
      return;
    var msg = this._buffer[0];
    if (this._trySend(msg)) {
      this._buffer.shift();
      this._bufferSize = this._buffer.length;
      this._tryBuffer();
    }
  };
  $3356170d7bce7f20$export$d365f7ad9d7df9c92.prototype._sendChunks = function (blob) {
    var e_1, _a2;
    var blobs = $06cb531ed7840f78$export$7debb50ef11d5e0b.chunk(blob);
    $1615705ecc6adca3$exports.default.log("DC#".concat(this.connectionId, " Try to send ").concat(blobs.length, " chunks..."));
    try {
      for (var blobs_1 = $3356170d7bce7f20$var$__values(blobs), blobs_1_1 = blobs_1.next(); !blobs_1_1.done; blobs_1_1 = blobs_1.next()) {
        var blob_1 = blobs_1_1.value;
        this.send(blob_1, true);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (blobs_1_1 && !blobs_1_1.done && (_a2 = blobs_1.return))
          _a2.call(blobs_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  };
  $3356170d7bce7f20$export$d365f7ad9d7df9c92.prototype.handleMessage = function (message) {
    var payload = message.payload;
    switch (message.type) {
      case $60fadef21a2daafc$export$adb4a1754da6f10d.Answer:
        this._negotiator.handleSDP(message.type, payload.sdp);
        break;
      case $60fadef21a2daafc$export$adb4a1754da6f10d.Candidate:
        this._negotiator.handleCandidate(payload.candidate);
        break;
      default:
        $1615705ecc6adca3$exports.default.warn("Unrecognized message type:", message.type, "from peer:", this.peer);
        break;
    }
  };
  $3356170d7bce7f20$export$d365f7ad9d7df9c92.ID_PREFIX = "dc_";
  $3356170d7bce7f20$export$d365f7ad9d7df9c92.MAX_BUFFERED_AMOUNT = 8388608;
  return $3356170d7bce7f20$export$d365f7ad9d7df9c92;
}($0b3b332fd86c5202$exports.BaseConnection);
var $9e85b3e1327369e6$exports = {};
$parcel$export($9e85b3e1327369e6$exports, "API", () => $9e85b3e1327369e6$export$2c4e825dc9120f87, (v) => $9e85b3e1327369e6$export$2c4e825dc9120f87 = v);
var $9e85b3e1327369e6$var$__awaiter = function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var $9e85b3e1327369e6$var$__generator = function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  }, f, y, t, g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([
        n,
        v
      ]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [
            op[0] & 2,
            t.value
          ];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [
              0
            ];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [
          6,
          e
        ];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
var $9e85b3e1327369e6$export$2c4e825dc9120f87 = function () {
  function $9e85b3e1327369e6$export$2c4e825dc9120f872(_options) {
    this._options = _options;
  }
  $9e85b3e1327369e6$export$2c4e825dc9120f872.prototype._buildRequest = function (method) {
    var protocol = this._options.secure ? "https" : "http";
    var _a2 = this._options, host = _a2.host, port = _a2.port, path = _a2.path, key = _a2.key;
    var url = new URL("".concat(protocol, "://").concat(host, ":").concat(port).concat(path).concat(key, "/").concat(method));
    url.searchParams.set("ts", "".concat(Date.now()).concat(Math.random()));
    url.searchParams.set("version", $0d1ed891c5cb27c0$exports.version);
    return fetch(url.href, {
      referrerPolicy: this._options.referrerPolicy
    });
  };
  $9e85b3e1327369e6$export$2c4e825dc9120f872.prototype.retrieveId = function () {
    return $9e85b3e1327369e6$var$__awaiter(this, void 0, Promise, function () {
      var response, error_1, pathError;
      return $9e85b3e1327369e6$var$__generator(this, function (_a2) {
        switch (_a2.label) {
          case 0:
            _a2.trys.push([
              0,
              2,
              ,
              3
            ]);
            return [
              4,
              this._buildRequest("id")
            ];
          case 1:
            response = _a2.sent();
            if (response.status !== 200)
              throw new Error("Error. Status:".concat(response.status));
            return [
              2,
              response.text()
            ];
          case 2:
            error_1 = _a2.sent();
            $1615705ecc6adca3$exports.default.error("Error retrieving ID", error_1);
            pathError = "";
            if (this._options.path === "/" && this._options.host !== $06cb531ed7840f78$export$7debb50ef11d5e0b.CLOUD_HOST)
              pathError = " If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer.";
            throw new Error("Could not get an ID from the server." + pathError);
          case 3:
            return [
              2
            ];
        }
      });
    });
  };
  $9e85b3e1327369e6$export$2c4e825dc9120f872.prototype.listAllPeers = function () {
    return $9e85b3e1327369e6$var$__awaiter(this, void 0, Promise, function () {
      var response, helpfulError, error_2;
      return $9e85b3e1327369e6$var$__generator(this, function (_a2) {
        switch (_a2.label) {
          case 0:
            _a2.trys.push([
              0,
              2,
              ,
              3
            ]);
            return [
              4,
              this._buildRequest("peers")
            ];
          case 1:
            response = _a2.sent();
            if (response.status !== 200) {
              if (response.status === 401) {
                helpfulError = "";
                if (this._options.host === $06cb531ed7840f78$export$7debb50ef11d5e0b.CLOUD_HOST)
                  helpfulError = "It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.";
                else
                  helpfulError = "You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.";
                throw new Error("It doesn't look like you have permission to list peers IDs. " + helpfulError);
              }
              throw new Error("Error. Status:".concat(response.status));
            }
            return [
              2,
              response.json()
            ];
          case 2:
            error_2 = _a2.sent();
            $1615705ecc6adca3$exports.default.error("Error retrieving list peers", error_2);
            throw new Error("Could not get list peers from the server." + error_2);
          case 3:
            return [
              2
            ];
        }
      });
    });
  };
  return $9e85b3e1327369e6$export$2c4e825dc9120f872;
}();
var $26088d7da5b03f69$var$__extends = function () {
  var extendStatics = function (d1, b1) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b)
        if (Object.prototype.hasOwnProperty.call(b, p))
          d[p] = b[p];
    };
    return extendStatics(d1, b1);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var $26088d7da5b03f69$var$__assign = function () {
  $26088d7da5b03f69$var$__assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return $26088d7da5b03f69$var$__assign.apply(this, arguments);
};
var $26088d7da5b03f69$var$__values = function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function () {
        if (o && i >= o.length)
          o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var $26088d7da5b03f69$var$__read = function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = {
      error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var $26088d7da5b03f69$export$ecd1fc136c422448 = function (_super) {
  $26088d7da5b03f69$var$__extends($26088d7da5b03f69$export$ecd1fc136c4224482, _super);
  function $26088d7da5b03f69$export$ecd1fc136c4224482(id1, options) {
    var _this = _super.call(this) || this;
    _this._id = null;
    _this._lastServerId = null;
    _this._destroyed = false;
    _this._disconnected = false;
    _this._open = false;
    _this._connections = /* @__PURE__ */ new Map();
    _this._lostMessages = /* @__PURE__ */ new Map();
    var userId;
    if (id1 && id1.constructor == Object)
      options = id1;
    else if (id1)
      userId = id1.toString();
    options = $26088d7da5b03f69$var$__assign({
      debug: 0,
      host: $06cb531ed7840f78$export$7debb50ef11d5e0b.CLOUD_HOST,
      port: $06cb531ed7840f78$export$7debb50ef11d5e0b.CLOUD_PORT,
      path: "/",
      key: $26088d7da5b03f69$export$ecd1fc136c4224482.DEFAULT_KEY,
      token: $06cb531ed7840f78$export$7debb50ef11d5e0b.randomToken(),
      config: $06cb531ed7840f78$export$7debb50ef11d5e0b.defaultConfig,
      referrerPolicy: "strict-origin-when-cross-origin"
    }, options);
    _this._options = options;
    if (_this._options.host === "/")
      _this._options.host = window.location.hostname;
    if (_this._options.path) {
      if (_this._options.path[0] !== "/")
        _this._options.path = "/" + _this._options.path;
      if (_this._options.path[_this._options.path.length - 1] !== "/")
        _this._options.path += "/";
    }
    if (_this._options.secure === void 0 && _this._options.host !== $06cb531ed7840f78$export$7debb50ef11d5e0b.CLOUD_HOST)
      _this._options.secure = $06cb531ed7840f78$export$7debb50ef11d5e0b.isSecure();
    else if (_this._options.host == $06cb531ed7840f78$export$7debb50ef11d5e0b.CLOUD_HOST)
      _this._options.secure = true;
    if (_this._options.logFunction)
      $1615705ecc6adca3$exports.default.setLogFunction(_this._options.logFunction);
    $1615705ecc6adca3$exports.default.logLevel = _this._options.debug || 0;
    _this._api = new $9e85b3e1327369e6$exports.API(options);
    _this._socket = _this._createServerConnection();
    if (!$06cb531ed7840f78$export$7debb50ef11d5e0b.supports.audioVideo && !$06cb531ed7840f78$export$7debb50ef11d5e0b.supports.data) {
      _this._delayedAbort($60fadef21a2daafc$export$9547aaa2e39030ff.BrowserIncompatible, "The current browser does not support WebRTC");
      return _this;
    }
    if (!!userId && !$06cb531ed7840f78$export$7debb50ef11d5e0b.validateId(userId)) {
      _this._delayedAbort($60fadef21a2daafc$export$9547aaa2e39030ff.InvalidID, 'ID "'.concat(userId, '" is invalid'));
      return _this;
    }
    if (userId)
      _this._initialize(userId);
    else
      _this._api.retrieveId().then(function (id) {
        return _this._initialize(id);
      }).catch(function (error) {
        return _this._abort($60fadef21a2daafc$export$9547aaa2e39030ff.ServerError, error);
      });
    return _this;
  }
  Object.defineProperty($26088d7da5b03f69$export$ecd1fc136c4224482.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty($26088d7da5b03f69$export$ecd1fc136c4224482.prototype, "options", {
    get: function () {
      return this._options;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty($26088d7da5b03f69$export$ecd1fc136c4224482.prototype, "open", {
    get: function () {
      return this._open;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty($26088d7da5b03f69$export$ecd1fc136c4224482.prototype, "socket", {
    get: function () {
      return this._socket;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty($26088d7da5b03f69$export$ecd1fc136c4224482.prototype, "connections", {
    get: function () {
      var e_1, _a2;
      var plainConnections = /* @__PURE__ */ Object.create(null);
      try {
        for (var _b = $26088d7da5b03f69$var$__values(this._connections), _c = _b.next(); !_c.done; _c = _b.next()) {
          var _d = $26088d7da5b03f69$var$__read(_c.value, 2), k = _d[0], v = _d[1];
          plainConnections[k] = v;
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return))
            _a2.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      return plainConnections;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty($26088d7da5b03f69$export$ecd1fc136c4224482.prototype, "destroyed", {
    get: function () {
      return this._destroyed;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty($26088d7da5b03f69$export$ecd1fc136c4224482.prototype, "disconnected", {
    get: function () {
      return this._disconnected;
    },
    enumerable: false,
    configurable: true
  });
  $26088d7da5b03f69$export$ecd1fc136c4224482.prototype._createServerConnection = function () {
    var _this = this;
    var socket = new $31d11a8d122cb4b7$exports.Socket(this._options.secure, this._options.host, this._options.port, this._options.path, this._options.key, this._options.pingInterval);
    socket.on($60fadef21a2daafc$export$3b5c4a4b6354f023.Message, function (data) {
      _this._handleMessage(data);
    });
    socket.on($60fadef21a2daafc$export$3b5c4a4b6354f023.Error, function (error) {
      _this._abort($60fadef21a2daafc$export$9547aaa2e39030ff.SocketError, error);
    });
    socket.on($60fadef21a2daafc$export$3b5c4a4b6354f023.Disconnected, function () {
      if (_this.disconnected)
        return;
      _this.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.Network, "Lost connection to server.");
      _this.disconnect();
    });
    socket.on($60fadef21a2daafc$export$3b5c4a4b6354f023.Close, function () {
      if (_this.disconnected)
        return;
      _this._abort($60fadef21a2daafc$export$9547aaa2e39030ff.SocketClosed, "Underlying socket is already closed.");
    });
    return socket;
  };
  $26088d7da5b03f69$export$ecd1fc136c4224482.prototype._initialize = function (id) {
    this._id = id;
    this.socket.start(id, this._options.token);
  };
  $26088d7da5b03f69$export$ecd1fc136c4224482.prototype._handleMessage = function (message) {
    var e_2, _a2;
    var type2 = message.type;
    var payload = message.payload;
    var peerId = message.src;
    switch (type2) {
      case $60fadef21a2daafc$export$adb4a1754da6f10d.Open:
        this._lastServerId = this.id;
        this._open = true;
        this.emit("open", this.id);
        break;
      case $60fadef21a2daafc$export$adb4a1754da6f10d.Error:
        this._abort($60fadef21a2daafc$export$9547aaa2e39030ff.ServerError, payload.msg);
        break;
      case $60fadef21a2daafc$export$adb4a1754da6f10d.IdTaken:
        this._abort($60fadef21a2daafc$export$9547aaa2e39030ff.UnavailableID, 'ID "'.concat(this.id, '" is taken'));
        break;
      case $60fadef21a2daafc$export$adb4a1754da6f10d.InvalidKey:
        this._abort($60fadef21a2daafc$export$9547aaa2e39030ff.InvalidKey, 'API KEY "'.concat(this._options.key, '" is invalid'));
        break;
      case $60fadef21a2daafc$export$adb4a1754da6f10d.Leave:
        $1615705ecc6adca3$exports.default.log("Received leave message from ".concat(peerId));
        this._cleanupPeer(peerId);
        this._connections.delete(peerId);
        break;
      case $60fadef21a2daafc$export$adb4a1754da6f10d.Expire:
        this.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.PeerUnavailable, "Could not connect to peer ".concat(peerId));
        break;
      case $60fadef21a2daafc$export$adb4a1754da6f10d.Offer:
        var connectionId = payload.connectionId;
        var connection = this.getConnection(peerId, connectionId);
        if (connection) {
          connection.close();
          $1615705ecc6adca3$exports.default.warn("Offer received for existing Connection ID:".concat(connectionId));
        }
        if (payload.type === $60fadef21a2daafc$export$3157d57b4135e3bc.Media) {
          var mediaConnection = new $353dee38f9ab557b$exports.MediaConnection(peerId, this, {
            connectionId,
            _payload: payload,
            metadata: payload.metadata
          });
          connection = mediaConnection;
          this._addConnection(peerId, connection);
          this.emit("call", mediaConnection);
        } else if (payload.type === $60fadef21a2daafc$export$3157d57b4135e3bc.Data) {
          var dataConnection = new $3356170d7bce7f20$exports.DataConnection(peerId, this, {
            connectionId,
            _payload: payload,
            metadata: payload.metadata,
            label: payload.label,
            serialization: payload.serialization,
            reliable: payload.reliable
          });
          connection = dataConnection;
          this._addConnection(peerId, connection);
          this.emit("connection", dataConnection);
        } else {
          $1615705ecc6adca3$exports.default.warn("Received malformed connection type:".concat(payload.type));
          return;
        }
        var messages = this._getMessages(connectionId);
        try {
          for (var messages_1 = $26088d7da5b03f69$var$__values(messages), messages_1_1 = messages_1.next(); !messages_1_1.done; messages_1_1 = messages_1.next()) {
            var message_1 = messages_1_1.value;
            connection.handleMessage(message_1);
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (messages_1_1 && !messages_1_1.done && (_a2 = messages_1.return))
              _a2.call(messages_1);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
        break;
      default:
        if (!payload) {
          $1615705ecc6adca3$exports.default.warn("You received a malformed message from ".concat(peerId, " of type ").concat(type2));
          return;
        }
        var connectionId = payload.connectionId;
        var connection = this.getConnection(peerId, connectionId);
        if (connection && connection.peerConnection)
          connection.handleMessage(message);
        else if (connectionId)
          this._storeMessage(connectionId, message);
        else
          $1615705ecc6adca3$exports.default.warn("You received an unrecognized message:", message);
        break;
    }
  };
  $26088d7da5b03f69$export$ecd1fc136c4224482.prototype._storeMessage = function (connectionId, message) {
    if (!this._lostMessages.has(connectionId))
      this._lostMessages.set(connectionId, []);
    this._lostMessages.get(connectionId).push(message);
  };
  $26088d7da5b03f69$export$ecd1fc136c4224482.prototype._getMessages = function (connectionId) {
    var messages = this._lostMessages.get(connectionId);
    if (messages) {
      this._lostMessages.delete(connectionId);
      return messages;
    }
    return [];
  };
  $26088d7da5b03f69$export$ecd1fc136c4224482.prototype.connect = function (peer2, options) {
    if (options === void 0)
      options = {};
    if (this.disconnected) {
      $1615705ecc6adca3$exports.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available.");
      this.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
      return;
    }
    var dataConnection = new $3356170d7bce7f20$exports.DataConnection(peer2, this, options);
    this._addConnection(peer2, dataConnection);
    return dataConnection;
  };
  $26088d7da5b03f69$export$ecd1fc136c4224482.prototype.call = function (peer2, stream, options) {
    if (options === void 0)
      options = {};
    if (this.disconnected) {
      $1615705ecc6adca3$exports.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect.");
      this.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
      return;
    }
    if (!stream) {
      $1615705ecc6adca3$exports.default.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");
      return;
    }
    var mediaConnection = new $353dee38f9ab557b$exports.MediaConnection(peer2, this, $26088d7da5b03f69$var$__assign($26088d7da5b03f69$var$__assign({}, options), {
      _stream: stream
    }));
    this._addConnection(peer2, mediaConnection);
    return mediaConnection;
  };
  $26088d7da5b03f69$export$ecd1fc136c4224482.prototype._addConnection = function (peerId, connection) {
    $1615705ecc6adca3$exports.default.log("add connection ".concat(connection.type, ":").concat(connection.connectionId, " to peerId:").concat(peerId));
    if (!this._connections.has(peerId))
      this._connections.set(peerId, []);
    this._connections.get(peerId).push(connection);
  };
  $26088d7da5b03f69$export$ecd1fc136c4224482.prototype._removeConnection = function (connection) {
    var connections2 = this._connections.get(connection.peer);
    if (connections2) {
      var index = connections2.indexOf(connection);
      if (index !== -1)
        connections2.splice(index, 1);
    }
    this._lostMessages.delete(connection.connectionId);
  };
  $26088d7da5b03f69$export$ecd1fc136c4224482.prototype.getConnection = function (peerId, connectionId) {
    var e_3, _a2;
    var connections2 = this._connections.get(peerId);
    if (!connections2)
      return null;
    try {
      for (var connections_1 = $26088d7da5b03f69$var$__values(connections2), connections_1_1 = connections_1.next(); !connections_1_1.done; connections_1_1 = connections_1.next()) {
        var connection = connections_1_1.value;
        if (connection.connectionId === connectionId)
          return connection;
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (connections_1_1 && !connections_1_1.done && (_a2 = connections_1.return))
          _a2.call(connections_1);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
    return null;
  };
  $26088d7da5b03f69$export$ecd1fc136c4224482.prototype._delayedAbort = function (type2, message) {
    var _this = this;
    setTimeout(function () {
      _this._abort(type2, message);
    }, 0);
  };
  $26088d7da5b03f69$export$ecd1fc136c4224482.prototype._abort = function (type2, message) {
    $1615705ecc6adca3$exports.default.error("Aborting!");
    this.emitError(type2, message);
    if (!this._lastServerId)
      this.destroy();
    else
      this.disconnect();
  };
  $26088d7da5b03f69$export$ecd1fc136c4224482.prototype.emitError = function (type2, err) {
    $1615705ecc6adca3$exports.default.error("Error:", err);
    var error;
    if (typeof err === "string")
      error = new Error(err);
    else
      error = err;
    error.type = type2;
    this.emit("error", error);
  };
  $26088d7da5b03f69$export$ecd1fc136c4224482.prototype.destroy = function () {
    if (this.destroyed)
      return;
    $1615705ecc6adca3$exports.default.log("Destroy peer with ID:".concat(this.id));
    this.disconnect();
    this._cleanup();
    this._destroyed = true;
    this.emit("close");
  };
  $26088d7da5b03f69$export$ecd1fc136c4224482.prototype._cleanup = function () {
    var e_4, _a2;
    try {
      for (var _b = $26088d7da5b03f69$var$__values(this._connections.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var peerId = _c.value;
        this._cleanupPeer(peerId);
        this._connections.delete(peerId);
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_4)
          throw e_4.error;
      }
    }
    this.socket.removeAllListeners();
  };
  $26088d7da5b03f69$export$ecd1fc136c4224482.prototype._cleanupPeer = function (peerId) {
    var e_5, _a2;
    var connections2 = this._connections.get(peerId);
    if (!connections2)
      return;
    try {
      for (var connections_2 = $26088d7da5b03f69$var$__values(connections2), connections_2_1 = connections_2.next(); !connections_2_1.done; connections_2_1 = connections_2.next()) {
        var connection = connections_2_1.value;
        connection.close();
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (connections_2_1 && !connections_2_1.done && (_a2 = connections_2.return))
          _a2.call(connections_2);
      } finally {
        if (e_5)
          throw e_5.error;
      }
    }
  };
  $26088d7da5b03f69$export$ecd1fc136c4224482.prototype.disconnect = function () {
    if (this.disconnected)
      return;
    var currentId = this.id;
    $1615705ecc6adca3$exports.default.log("Disconnect peer with ID:".concat(currentId));
    this._disconnected = true;
    this._open = false;
    this.socket.close();
    this._lastServerId = currentId;
    this._id = null;
    this.emit("disconnected", currentId);
  };
  $26088d7da5b03f69$export$ecd1fc136c4224482.prototype.reconnect = function () {
    if (this.disconnected && !this.destroyed) {
      $1615705ecc6adca3$exports.default.log("Attempting reconnection to server with ID ".concat(this._lastServerId));
      this._disconnected = false;
      this._initialize(this._lastServerId);
    } else if (this.destroyed)
      throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");
    else if (!this.disconnected && !this.open)
      $1615705ecc6adca3$exports.default.error("In a hurry? We're still trying to make the initial connection!");
    else
      throw new Error("Peer ".concat(this.id, " cannot reconnect because it is not disconnected from the server!"));
  };
  $26088d7da5b03f69$export$ecd1fc136c4224482.prototype.listAllPeers = function (cb) {
    var _this = this;
    if (cb === void 0)
      cb = function (_) {
      };
    this._api.listAllPeers().then(function (peers) {
      return cb(peers);
    }).catch(function (error) {
      return _this._abort($60fadef21a2daafc$export$9547aaa2e39030ff.ServerError, error);
    });
  };
  $26088d7da5b03f69$export$ecd1fc136c4224482.DEFAULT_KEY = "peerjs";
  return $26088d7da5b03f69$export$ecd1fc136c4224482;
}($ac9b757d51178e15$exports.EventEmitter);
var $70d766613f57b014$export$2e2bcd8739ae039 = $26088d7da5b03f69$exports.Peer;
let peer;
let networking;
let printer;
let nanofactoryPeersObject;
let jobProgressConnections = {};
let temperatureStreamConnections = {};
let terminalConnections = {};
let positionChangedConnections = {};
let filamentUpdateConnections = {};
let cameraStreamConnections = {};
const continuousConnectionLabels = [ConnectionLabels.positionChanged];
const retryConnectionTimeout = 15;
const BASEURL = "http://localhost:5000/";
OctoPrint.options.baseurl = BASEURL;
loadDatabase().then(async () => {
  let printers = await db.printer.toArray();
  if (printers.length > 0) {
    printer = printers[0];
  }
  let nanofactoryPeersObjectArray = await db.nanofactoryPeers.toArray();
  if (nanofactoryPeersObjectArray.length > 0) {
    nanofactoryPeersObject = nanofactoryPeersObjectArray[0];
  } else {
    nanofactoryPeersObject = new NanoFactoryPeers();
    nanofactoryPeersObject.add();
  }
  networking = await db.networking.get("1");
  if (!networking) {
    networking = new Networking("1");
    await networking.add();
  }
  const params = new URLSearchParams(window.location.search);
  networking.peerID = params.get("peerID");
  networking.save({ peerID: networking.peerID });
  if (!printer) {
    printer = new Printer(networking.peerID);
    printer.add();
  }
  networking.apiKey = params.get("apiKey");
  networking.save({ apiKey: networking.apiKey });
  networking.masterPeerID = params.get("masterPeerID");
  networking.save({ masterPeerID: networking.masterPeerID });
  addToList(NanoFactoryPeerType.WHITELISTED, networking.masterPeerID);
  if (networking.peerID.length > 0) {
    startupFunctions();
  }
});
async function startupFunctions() {
  OctoPrint.options.apikey = networking.apiKey;
  peer = new $70d766613f57b014$export$2e2bcd8739ae039(networking.peerID);
  callbackFunctionsForPeer();
  await savePrinterProfile();
  printer = (await db.printer.toArray())[0];
  await saveConnectionOptions();
  await updatePrinterStateAndTemperature();
  initializeCameraStream();
  updateFilamentUsage();
  await OctoPrint.socket.connect();
  OctoPrint.socket.onMessage("*", (socketMessage) => handleSocketMessage(socketMessage));
}
function callbackFunctionsForPeer() {
  peer.on("open", function (id) {
    console.log("Connected to peer server with id:" + id);
    fetch(BASEURL + "plugin/NanoFactory/peer_connection_success", {
      method: "GET",
      headers: {
        "X-API-KEY": networking.apiKey
      }
    });
  });
  peer.on("connection", function (connection) {
    console.log("Connected with peer:" + connection.peer);
    connection.on("data", function (data) {
      console.log("Received Label: " + connection.label);
      handleIncomingData(data, connection.peer, connection.label, connection.metadata);
      if (!continuousConnectionLabels.includes(connection.label)) {
        connection.close();
      }
    });
  });
  peer.on("disconnected", function () {
    console.log("Disconnected from signaling server, reconnecting...");
    peer.reconnect();
  });
  peer.on("close", function () {
    console.log("Peer destroyed. Reconnecting...");
  });
  peer.on("error", async function (err) {
    console.error(err);
    if (err.message === 'ID "' + peer.id + '" is taken') {
      console.log("Will retry connection to Peer server in " + retryConnectionTimeout + " seconds!");
      fetch(BASEURL + "plugin/NanoFactory/peer_connection_error?timeout=" + retryConnectionTimeout, {
        method: "GET",
        headers: {
          "X-API-KEY": networking.apiKey
        }
      });
      setTimeout(() => {
        peer = new $70d766613f57b014$export$2e2bcd8739ae039(networking.peerID);
        callbackFunctionsForPeer();
      }, retryConnectionTimeout * 1e3);
    } else if (err.message.includes("Could not connect to peer ")) {
      removeFromList(NanoFactoryPeerType.AVAILABLE, err.message.replace("Could not connect to peer ", ""));
    }
  });
}
