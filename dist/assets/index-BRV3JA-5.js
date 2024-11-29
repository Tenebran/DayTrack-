var qx = Object.defineProperty;
var Xx = (e, t, n) =>
  t in e
    ? qx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Xr = (e, t, n) => Xx(e, typeof t != "symbol" ? t + "" : t, n);
function Qx(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var MD =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function Mp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var w0 = { exports: {} },
  ku = {},
  x0 = { exports: {} },
  ge = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ha = Symbol.for("react.element"),
  Yx = Symbol.for("react.portal"),
  Jx = Symbol.for("react.fragment"),
  Zx = Symbol.for("react.strict_mode"),
  eC = Symbol.for("react.profiler"),
  tC = Symbol.for("react.provider"),
  nC = Symbol.for("react.context"),
  rC = Symbol.for("react.forward_ref"),
  oC = Symbol.for("react.suspense"),
  iC = Symbol.for("react.memo"),
  sC = Symbol.for("react.lazy"),
  Mm = Symbol.iterator;
function aC(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Mm && e[Mm]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var C0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  E0 = Object.assign,
  k0 = {};
function Ai(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = k0),
    (this.updater = n || C0);
}
Ai.prototype.isReactComponent = {};
Ai.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ai.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function R0() {}
R0.prototype = Ai.prototype;
function Np(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = k0),
    (this.updater = n || C0);
}
var jp = (Np.prototype = new R0());
jp.constructor = Np;
E0(jp, Ai.prototype);
jp.isPureReactComponent = !0;
var Nm = Array.isArray,
  T0 = Object.prototype.hasOwnProperty,
  Fp = { current: null },
  P0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function O0(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      T0.call(t, r) && !P0.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: ha,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Fp.current,
  };
}
function lC(e, t) {
  return {
    $$typeof: ha,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Dp(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ha;
}
function uC(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var jm = /\/+/g;
function qc(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? uC("" + e.key)
    : t.toString(36);
}
function il(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ha:
          case Yx:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + qc(s, 0) : r),
      Nm(o)
        ? ((n = ""),
          e != null && (n = e.replace(jm, "$&/") + "/"),
          il(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Dp(o) &&
            (o = lC(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(jm, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Nm(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + qc(i, a);
      s += il(i, t, n, l, o);
    }
  else if (((l = aC(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + qc(i, a++)), (s += il(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return s;
}
function Aa(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    il(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function cC(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var It = { current: null },
  sl = { transition: null },
  dC = {
    ReactCurrentDispatcher: It,
    ReactCurrentBatchConfig: sl,
    ReactCurrentOwner: Fp,
  };
function $0() {
  throw Error("act(...) is not supported in production builds of React.");
}
ge.Children = {
  map: Aa,
  forEach: function (e, t, n) {
    Aa(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Aa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Aa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Dp(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
ge.Component = Ai;
ge.Fragment = Jx;
ge.Profiler = eC;
ge.PureComponent = Np;
ge.StrictMode = Zx;
ge.Suspense = oC;
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dC;
ge.act = $0;
ge.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = E0({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Fp.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      T0.call(t, l) &&
        !P0.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ha, type: e.type, key: o, ref: i, props: r, _owner: s };
};
ge.createContext = function (e) {
  return (
    (e = {
      $$typeof: nC,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: tC, _context: e }),
    (e.Consumer = e)
  );
};
ge.createElement = O0;
ge.createFactory = function (e) {
  var t = O0.bind(null, e);
  return (t.type = e), t;
};
ge.createRef = function () {
  return { current: null };
};
ge.forwardRef = function (e) {
  return { $$typeof: rC, render: e };
};
ge.isValidElement = Dp;
ge.lazy = function (e) {
  return { $$typeof: sC, _payload: { _status: -1, _result: e }, _init: cC };
};
ge.memo = function (e, t) {
  return { $$typeof: iC, type: e, compare: t === void 0 ? null : t };
};
ge.startTransition = function (e) {
  var t = sl.transition;
  sl.transition = {};
  try {
    e();
  } finally {
    sl.transition = t;
  }
};
ge.unstable_act = $0;
ge.useCallback = function (e, t) {
  return It.current.useCallback(e, t);
};
ge.useContext = function (e) {
  return It.current.useContext(e);
};
ge.useDebugValue = function () {};
ge.useDeferredValue = function (e) {
  return It.current.useDeferredValue(e);
};
ge.useEffect = function (e, t) {
  return It.current.useEffect(e, t);
};
ge.useId = function () {
  return It.current.useId();
};
ge.useImperativeHandle = function (e, t, n) {
  return It.current.useImperativeHandle(e, t, n);
};
ge.useInsertionEffect = function (e, t) {
  return It.current.useInsertionEffect(e, t);
};
ge.useLayoutEffect = function (e, t) {
  return It.current.useLayoutEffect(e, t);
};
ge.useMemo = function (e, t) {
  return It.current.useMemo(e, t);
};
ge.useReducer = function (e, t, n) {
  return It.current.useReducer(e, t, n);
};
ge.useRef = function (e) {
  return It.current.useRef(e);
};
ge.useState = function (e) {
  return It.current.useState(e);
};
ge.useSyncExternalStore = function (e, t, n) {
  return It.current.useSyncExternalStore(e, t, n);
};
ge.useTransition = function () {
  return It.current.useTransition();
};
ge.version = "18.3.1";
x0.exports = ge;
var S = x0.exports;
const kn = Mp(S),
  vi = Qx({ __proto__: null, default: kn }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fC = S,
  pC = Symbol.for("react.element"),
  hC = Symbol.for("react.fragment"),
  mC = Object.prototype.hasOwnProperty,
  gC = fC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  yC = { key: !0, ref: !0, __self: !0, __source: !0 };
function A0(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) mC.call(t, r) && !yC.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: pC,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: gC.current,
  };
}
ku.Fragment = hC;
ku.jsx = A0;
ku.jsxs = A0;
w0.exports = ku;
var R = w0.exports,
  Hd = {},
  I0 = { exports: {} },
  nn = {},
  L0 = { exports: {} },
  _0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, F) {
    var W = A.length;
    A.push(F);
    e: for (; 0 < W; ) {
      var q = (W - 1) >>> 1,
        Y = A[q];
      if (0 < o(Y, F)) (A[q] = F), (A[W] = Y), (W = q);
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var F = A[0],
      W = A.pop();
    if (W !== F) {
      A[0] = W;
      e: for (var q = 0, Y = A.length, re = Y >>> 1; q < re; ) {
        var te = 2 * (q + 1) - 1,
          ve = A[te],
          Ee = te + 1,
          Oe = A[Ee];
        if (0 > o(ve, W))
          Ee < Y && 0 > o(Oe, ve)
            ? ((A[q] = Oe), (A[Ee] = W), (q = Ee))
            : ((A[q] = ve), (A[te] = W), (q = te));
        else if (Ee < Y && 0 > o(Oe, W)) (A[q] = Oe), (A[Ee] = W), (q = Ee);
        else break e;
      }
    }
    return F;
  }
  function o(A, F) {
    var W = A.sortIndex - F.sortIndex;
    return W !== 0 ? W : A.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    g = !1,
    p = !1,
    v = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(A) {
    for (var F = n(u); F !== null; ) {
      if (F.callback === null) r(u);
      else if (F.startTime <= A)
        r(u), (F.sortIndex = F.expirationTime), t(l, F);
      else break;
      F = n(u);
    }
  }
  function b(A) {
    if (((v = !1), h(A), !p))
      if (n(l) !== null) (p = !0), B(C);
      else {
        var F = n(u);
        F !== null && K(b, F.startTime - A);
      }
  }
  function C(A, F) {
    (p = !1), v && ((v = !1), m(T), (T = -1)), (g = !0);
    var W = f;
    try {
      for (
        h(F), d = n(l);
        d !== null && (!(d.expirationTime > F) || (A && !P()));

      ) {
        var q = d.callback;
        if (typeof q == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var Y = q(d.expirationTime <= F);
          (F = e.unstable_now()),
            typeof Y == "function" ? (d.callback = Y) : d === n(l) && r(l),
            h(F);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var re = !0;
      else {
        var te = n(u);
        te !== null && K(b, te.startTime - F), (re = !1);
      }
      return re;
    } finally {
      (d = null), (f = W), (g = !1);
    }
  }
  var k = !1,
    E = null,
    T = -1,
    $ = 5,
    w = -1;
  function P() {
    return !(e.unstable_now() - w < $);
  }
  function D() {
    if (E !== null) {
      var A = e.unstable_now();
      w = A;
      var F = !0;
      try {
        F = E(!0, A);
      } finally {
        F ? N() : ((k = !1), (E = null));
      }
    } else k = !1;
  }
  var N;
  if (typeof y == "function")
    N = function () {
      y(D);
    };
  else if (typeof MessageChannel < "u") {
    var j = new MessageChannel(),
      _ = j.port2;
    (j.port1.onmessage = D),
      (N = function () {
        _.postMessage(null);
      });
  } else
    N = function () {
      x(D, 0);
    };
  function B(A) {
    (E = A), k || ((k = !0), N());
  }
  function K(A, F) {
    T = x(function () {
      A(e.unstable_now());
    }, F);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      p || g || ((p = !0), B(C));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : ($ = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (A) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = f;
      }
      var W = f;
      f = F;
      try {
        return A();
      } finally {
        f = W;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, F) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var W = f;
      f = A;
      try {
        return F();
      } finally {
        f = W;
      }
    }),
    (e.unstable_scheduleCallback = function (A, F, W) {
      var q = e.unstable_now();
      switch (
        (typeof W == "object" && W !== null
          ? ((W = W.delay), (W = typeof W == "number" && 0 < W ? q + W : q))
          : (W = q),
        A)
      ) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return (
        (Y = W + Y),
        (A = {
          id: c++,
          callback: F,
          priorityLevel: A,
          startTime: W,
          expirationTime: Y,
          sortIndex: -1,
        }),
        W > q
          ? ((A.sortIndex = W),
            t(u, A),
            n(l) === null &&
              A === n(u) &&
              (v ? (m(T), (T = -1)) : (v = !0), K(b, W - q)))
          : ((A.sortIndex = Y), t(l, A), p || g || ((p = !0), B(C))),
        A
      );
    }),
    (e.unstable_shouldYield = P),
    (e.unstable_wrapCallback = function (A) {
      var F = f;
      return function () {
        var W = f;
        f = F;
        try {
          return A.apply(this, arguments);
        } finally {
          f = W;
        }
      };
    });
})(_0);
L0.exports = _0;
var vC = L0.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var SC = S,
  Zt = vC;
function U(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var M0 = new Set(),
  Ls = {};
function Oo(e, t) {
  Si(e, t), Si(e + "Capture", t);
}
function Si(e, t) {
  for (Ls[e] = t, e = 0; e < t.length; e++) M0.add(t[e]);
}
var ir = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Kd = Object.prototype.hasOwnProperty,
  bC =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Fm = {},
  Dm = {};
function wC(e) {
  return Kd.call(Dm, e)
    ? !0
    : Kd.call(Fm, e)
      ? !1
      : bC.test(e)
        ? (Dm[e] = !0)
        : ((Fm[e] = !0), !1);
}
function xC(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function CC(e, t, n, r) {
  if (t === null || typeof t > "u" || xC(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Lt(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var vt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    vt[e] = new Lt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  vt[t] = new Lt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  vt[e] = new Lt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  vt[e] = new Lt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    vt[e] = new Lt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  vt[e] = new Lt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  vt[e] = new Lt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  vt[e] = new Lt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  vt[e] = new Lt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bp = /[\-:]([a-z])/g;
function zp(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bp, zp);
    vt[t] = new Lt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bp, zp);
    vt[t] = new Lt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Bp, zp);
  vt[t] = new Lt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  vt[e] = new Lt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
vt.xlinkHref = new Lt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  vt[e] = new Lt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Up(e, t, n, r) {
  var o = vt.hasOwnProperty(t) ? vt[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (CC(t, n, o, r) && (n = null),
    r || o === null
      ? wC(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var pr = SC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ia = Symbol.for("react.element"),
  Xo = Symbol.for("react.portal"),
  Qo = Symbol.for("react.fragment"),
  Wp = Symbol.for("react.strict_mode"),
  Gd = Symbol.for("react.profiler"),
  N0 = Symbol.for("react.provider"),
  j0 = Symbol.for("react.context"),
  Vp = Symbol.for("react.forward_ref"),
  qd = Symbol.for("react.suspense"),
  Xd = Symbol.for("react.suspense_list"),
  Hp = Symbol.for("react.memo"),
  Sr = Symbol.for("react.lazy"),
  F0 = Symbol.for("react.offscreen"),
  Bm = Symbol.iterator;
function Wi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bm && e[Bm]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Xe = Object.assign,
  Xc;
function is(e) {
  if (Xc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Xc = (t && t[1]) || "";
    }
  return (
    `
` +
    Xc +
    e
  );
}
var Qc = !1;
function Yc(e, t) {
  if (!e || Qc) return "";
  Qc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Qc = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? is(e) : "";
}
function EC(e) {
  switch (e.tag) {
    case 5:
      return is(e.type);
    case 16:
      return is("Lazy");
    case 13:
      return is("Suspense");
    case 19:
      return is("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Yc(e.type, !1)), e;
    case 11:
      return (e = Yc(e.type.render, !1)), e;
    case 1:
      return (e = Yc(e.type, !0)), e;
    default:
      return "";
  }
}
function Qd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Qo:
      return "Fragment";
    case Xo:
      return "Portal";
    case Gd:
      return "Profiler";
    case Wp:
      return "StrictMode";
    case qd:
      return "Suspense";
    case Xd:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case j0:
        return (e.displayName || "Context") + ".Consumer";
      case N0:
        return (e._context.displayName || "Context") + ".Provider";
      case Vp:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Hp:
        return (
          (t = e.displayName || null), t !== null ? t : Qd(e.type) || "Memo"
        );
      case Sr:
        (t = e._payload), (e = e._init);
        try {
          return Qd(e(t));
        } catch {}
    }
  return null;
}
function kC(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qd(t);
    case 8:
      return t === Wp ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Mr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function D0(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function RC(e) {
  var t = D0(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function La(e) {
  e._valueTracker || (e._valueTracker = RC(e));
}
function B0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = D0(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function El(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Yd(e, t) {
  var n = t.checked;
  return Xe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function zm(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Mr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function z0(e, t) {
  (t = t.checked), t != null && Up(e, "checked", t, !1);
}
function Jd(e, t) {
  z0(e, t);
  var n = Mr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Zd(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Zd(e, t.type, Mr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Um(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Zd(e, t, n) {
  (t !== "number" || El(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ss = Array.isArray;
function ai(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Mr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ef(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(U(91));
  return Xe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Wm(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(U(92));
      if (ss(n)) {
        if (1 < n.length) throw Error(U(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Mr(n) };
}
function U0(e, t) {
  var n = Mr(t.value),
    r = Mr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Vm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function W0(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function tf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? W0(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var _a,
  V0 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        _a = _a || document.createElement("div"),
          _a.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = _a.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function _s(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ms = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  TC = ["Webkit", "ms", "Moz", "O"];
Object.keys(ms).forEach(function (e) {
  TC.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ms[t] = ms[e]);
  });
});
function H0(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ms.hasOwnProperty(e) && ms[e])
      ? ("" + t).trim()
      : t + "px";
}
function K0(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = H0(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var PC = Xe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function nf(e, t) {
  if (t) {
    if (PC[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(U(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(U(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(U(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(U(62));
  }
}
function rf(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var of = null;
function Kp(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var sf = null,
  li = null,
  ui = null;
function Hm(e) {
  if ((e = ya(e))) {
    if (typeof sf != "function") throw Error(U(280));
    var t = e.stateNode;
    t && ((t = $u(t)), sf(e.stateNode, e.type, t));
  }
}
function G0(e) {
  li ? (ui ? ui.push(e) : (ui = [e])) : (li = e);
}
function q0() {
  if (li) {
    var e = li,
      t = ui;
    if (((ui = li = null), Hm(e), t)) for (e = 0; e < t.length; e++) Hm(t[e]);
  }
}
function X0(e, t) {
  return e(t);
}
function Q0() {}
var Jc = !1;
function Y0(e, t, n) {
  if (Jc) return e(t, n);
  Jc = !0;
  try {
    return X0(e, t, n);
  } finally {
    (Jc = !1), (li !== null || ui !== null) && (Q0(), q0());
  }
}
function Ms(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = $u(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(U(231, t, typeof n));
  return n;
}
var af = !1;
if (ir)
  try {
    var Vi = {};
    Object.defineProperty(Vi, "passive", {
      get: function () {
        af = !0;
      },
    }),
      window.addEventListener("test", Vi, Vi),
      window.removeEventListener("test", Vi, Vi);
  } catch {
    af = !1;
  }
function OC(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var gs = !1,
  kl = null,
  Rl = !1,
  lf = null,
  $C = {
    onError: function (e) {
      (gs = !0), (kl = e);
    },
  };
function AC(e, t, n, r, o, i, s, a, l) {
  (gs = !1), (kl = null), OC.apply($C, arguments);
}
function IC(e, t, n, r, o, i, s, a, l) {
  if ((AC.apply(this, arguments), gs)) {
    if (gs) {
      var u = kl;
      (gs = !1), (kl = null);
    } else throw Error(U(198));
    Rl || ((Rl = !0), (lf = u));
  }
}
function $o(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function J0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Km(e) {
  if ($o(e) !== e) throw Error(U(188));
}
function LC(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = $o(e)), t === null)) throw Error(U(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Km(o), e;
        if (i === r) return Km(o), t;
        i = i.sibling;
      }
      throw Error(U(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(U(189));
      }
    }
    if (n.alternate !== r) throw Error(U(190));
  }
  if (n.tag !== 3) throw Error(U(188));
  return n.stateNode.current === n ? e : t;
}
function Z0(e) {
  return (e = LC(e)), e !== null ? e1(e) : null;
}
function e1(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = e1(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var t1 = Zt.unstable_scheduleCallback,
  Gm = Zt.unstable_cancelCallback,
  _C = Zt.unstable_shouldYield,
  MC = Zt.unstable_requestPaint,
  Ze = Zt.unstable_now,
  NC = Zt.unstable_getCurrentPriorityLevel,
  Gp = Zt.unstable_ImmediatePriority,
  n1 = Zt.unstable_UserBlockingPriority,
  Tl = Zt.unstable_NormalPriority,
  jC = Zt.unstable_LowPriority,
  r1 = Zt.unstable_IdlePriority,
  Ru = null,
  zn = null;
function FC(e) {
  if (zn && typeof zn.onCommitFiberRoot == "function")
    try {
      zn.onCommitFiberRoot(Ru, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Rn = Math.clz32 ? Math.clz32 : zC,
  DC = Math.log,
  BC = Math.LN2;
function zC(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((DC(e) / BC) | 0)) | 0;
}
var Ma = 64,
  Na = 4194304;
function as(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Pl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = as(a)) : ((i &= s), i !== 0 && (r = as(i)));
  } else (s = n & ~o), s !== 0 ? (r = as(s)) : i !== 0 && (r = as(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Rn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function UC(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function WC(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Rn(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = UC(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function uf(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function o1() {
  var e = Ma;
  return (Ma <<= 1), !(Ma & 4194240) && (Ma = 64), e;
}
function Zc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ma(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Rn(t)),
    (e[t] = n);
}
function VC(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Rn(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function qp(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Rn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Re = 0;
function i1(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var s1,
  Xp,
  a1,
  l1,
  u1,
  cf = !1,
  ja = [],
  Rr = null,
  Tr = null,
  Pr = null,
  Ns = new Map(),
  js = new Map(),
  wr = [],
  HC =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function qm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Rr = null;
      break;
    case "dragenter":
    case "dragleave":
      Tr = null;
      break;
    case "mouseover":
    case "mouseout":
      Pr = null;
      break;
    case "pointerover":
    case "pointerout":
      Ns.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      js.delete(t.pointerId);
  }
}
function Hi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ya(t)), t !== null && Xp(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function KC(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Rr = Hi(Rr, e, t, n, r, o)), !0;
    case "dragenter":
      return (Tr = Hi(Tr, e, t, n, r, o)), !0;
    case "mouseover":
      return (Pr = Hi(Pr, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ns.set(i, Hi(Ns.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), js.set(i, Hi(js.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function c1(e) {
  var t = oo(e.target);
  if (t !== null) {
    var n = $o(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = J0(n)), t !== null)) {
          (e.blockedOn = t),
            u1(e.priority, function () {
              a1(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function al(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = df(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (of = r), n.target.dispatchEvent(r), (of = null);
    } else return (t = ya(n)), t !== null && Xp(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Xm(e, t, n) {
  al(e) && n.delete(t);
}
function GC() {
  (cf = !1),
    Rr !== null && al(Rr) && (Rr = null),
    Tr !== null && al(Tr) && (Tr = null),
    Pr !== null && al(Pr) && (Pr = null),
    Ns.forEach(Xm),
    js.forEach(Xm);
}
function Ki(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    cf ||
      ((cf = !0),
      Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority, GC)));
}
function Fs(e) {
  function t(o) {
    return Ki(o, e);
  }
  if (0 < ja.length) {
    Ki(ja[0], e);
    for (var n = 1; n < ja.length; n++) {
      var r = ja[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Rr !== null && Ki(Rr, e),
      Tr !== null && Ki(Tr, e),
      Pr !== null && Ki(Pr, e),
      Ns.forEach(t),
      js.forEach(t),
      n = 0;
    n < wr.length;
    n++
  )
    (r = wr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < wr.length && ((n = wr[0]), n.blockedOn === null); )
    c1(n), n.blockedOn === null && wr.shift();
}
var ci = pr.ReactCurrentBatchConfig,
  Ol = !0;
function qC(e, t, n, r) {
  var o = Re,
    i = ci.transition;
  ci.transition = null;
  try {
    (Re = 1), Qp(e, t, n, r);
  } finally {
    (Re = o), (ci.transition = i);
  }
}
function XC(e, t, n, r) {
  var o = Re,
    i = ci.transition;
  ci.transition = null;
  try {
    (Re = 4), Qp(e, t, n, r);
  } finally {
    (Re = o), (ci.transition = i);
  }
}
function Qp(e, t, n, r) {
  if (Ol) {
    var o = df(e, t, n, r);
    if (o === null) ud(e, t, r, $l, n), qm(e, r);
    else if (KC(o, e, t, n, r)) r.stopPropagation();
    else if ((qm(e, r), t & 4 && -1 < HC.indexOf(e))) {
      for (; o !== null; ) {
        var i = ya(o);
        if (
          (i !== null && s1(i),
          (i = df(e, t, n, r)),
          i === null && ud(e, t, r, $l, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else ud(e, t, r, null, n);
  }
}
var $l = null;
function df(e, t, n, r) {
  if ((($l = null), (e = Kp(r)), (e = oo(e)), e !== null))
    if (((t = $o(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = J0(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ($l = e), null;
}
function d1(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (NC()) {
        case Gp:
          return 1;
        case n1:
          return 4;
        case Tl:
        case jC:
          return 16;
        case r1:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Cr = null,
  Yp = null,
  ll = null;
function f1() {
  if (ll) return ll;
  var e,
    t = Yp,
    n = t.length,
    r,
    o = "value" in Cr ? Cr.value : Cr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (ll = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ul(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Fa() {
  return !0;
}
function Qm() {
  return !1;
}
function rn(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Fa
        : Qm),
      (this.isPropagationStopped = Qm),
      this
    );
  }
  return (
    Xe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Fa));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Fa));
      },
      persist: function () {},
      isPersistent: Fa,
    }),
    t
  );
}
var Ii = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Jp = rn(Ii),
  ga = Xe({}, Ii, { view: 0, detail: 0 }),
  QC = rn(ga),
  ed,
  td,
  Gi,
  Tu = Xe({}, ga, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Zp,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Gi &&
            (Gi && e.type === "mousemove"
              ? ((ed = e.screenX - Gi.screenX), (td = e.screenY - Gi.screenY))
              : (td = ed = 0),
            (Gi = e)),
          ed);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : td;
    },
  }),
  Ym = rn(Tu),
  YC = Xe({}, Tu, { dataTransfer: 0 }),
  JC = rn(YC),
  ZC = Xe({}, ga, { relatedTarget: 0 }),
  nd = rn(ZC),
  eE = Xe({}, Ii, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  tE = rn(eE),
  nE = Xe({}, Ii, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  rE = rn(nE),
  oE = Xe({}, Ii, { data: 0 }),
  Jm = rn(oE),
  iE = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  sE = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  aE = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function lE(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = aE[e]) ? !!t[e] : !1;
}
function Zp() {
  return lE;
}
var uE = Xe({}, ga, {
    key: function (e) {
      if (e.key) {
        var t = iE[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ul(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? sE[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Zp,
    charCode: function (e) {
      return e.type === "keypress" ? ul(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ul(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  cE = rn(uE),
  dE = Xe({}, Tu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Zm = rn(dE),
  fE = Xe({}, ga, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zp,
  }),
  pE = rn(fE),
  hE = Xe({}, Ii, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  mE = rn(hE),
  gE = Xe({}, Tu, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  yE = rn(gE),
  vE = [9, 13, 27, 32],
  eh = ir && "CompositionEvent" in window,
  ys = null;
ir && "documentMode" in document && (ys = document.documentMode);
var SE = ir && "TextEvent" in window && !ys,
  p1 = ir && (!eh || (ys && 8 < ys && 11 >= ys)),
  eg = " ",
  tg = !1;
function h1(e, t) {
  switch (e) {
    case "keyup":
      return vE.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function m1(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Yo = !1;
function bE(e, t) {
  switch (e) {
    case "compositionend":
      return m1(t);
    case "keypress":
      return t.which !== 32 ? null : ((tg = !0), eg);
    case "textInput":
      return (e = t.data), e === eg && tg ? null : e;
    default:
      return null;
  }
}
function wE(e, t) {
  if (Yo)
    return e === "compositionend" || (!eh && h1(e, t))
      ? ((e = f1()), (ll = Yp = Cr = null), (Yo = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return p1 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var xE = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ng(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!xE[e.type] : t === "textarea";
}
function g1(e, t, n, r) {
  G0(r),
    (t = Al(t, "onChange")),
    0 < t.length &&
      ((n = new Jp("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var vs = null,
  Ds = null;
function CE(e) {
  T1(e, 0);
}
function Pu(e) {
  var t = ei(e);
  if (B0(t)) return e;
}
function EE(e, t) {
  if (e === "change") return t;
}
var y1 = !1;
if (ir) {
  var rd;
  if (ir) {
    var od = "oninput" in document;
    if (!od) {
      var rg = document.createElement("div");
      rg.setAttribute("oninput", "return;"),
        (od = typeof rg.oninput == "function");
    }
    rd = od;
  } else rd = !1;
  y1 = rd && (!document.documentMode || 9 < document.documentMode);
}
function og() {
  vs && (vs.detachEvent("onpropertychange", v1), (Ds = vs = null));
}
function v1(e) {
  if (e.propertyName === "value" && Pu(Ds)) {
    var t = [];
    g1(t, Ds, e, Kp(e)), Y0(CE, t);
  }
}
function kE(e, t, n) {
  e === "focusin"
    ? (og(), (vs = t), (Ds = n), vs.attachEvent("onpropertychange", v1))
    : e === "focusout" && og();
}
function RE(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Pu(Ds);
}
function TE(e, t) {
  if (e === "click") return Pu(t);
}
function PE(e, t) {
  if (e === "input" || e === "change") return Pu(t);
}
function OE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Pn = typeof Object.is == "function" ? Object.is : OE;
function Bs(e, t) {
  if (Pn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Kd.call(t, o) || !Pn(e[o], t[o])) return !1;
  }
  return !0;
}
function ig(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function sg(e, t) {
  var n = ig(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ig(n);
  }
}
function S1(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? S1(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function b1() {
  for (var e = window, t = El(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = El(e.document);
  }
  return t;
}
function th(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function $E(e) {
  var t = b1(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    S1(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && th(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = sg(n, i));
        var s = sg(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var AE = ir && "documentMode" in document && 11 >= document.documentMode,
  Jo = null,
  ff = null,
  Ss = null,
  pf = !1;
function ag(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  pf ||
    Jo == null ||
    Jo !== El(r) ||
    ((r = Jo),
    "selectionStart" in r && th(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ss && Bs(Ss, r)) ||
      ((Ss = r),
      (r = Al(ff, "onSelect")),
      0 < r.length &&
        ((t = new Jp("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Jo))));
}
function Da(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Zo = {
    animationend: Da("Animation", "AnimationEnd"),
    animationiteration: Da("Animation", "AnimationIteration"),
    animationstart: Da("Animation", "AnimationStart"),
    transitionend: Da("Transition", "TransitionEnd"),
  },
  id = {},
  w1 = {};
ir &&
  ((w1 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Zo.animationend.animation,
    delete Zo.animationiteration.animation,
    delete Zo.animationstart.animation),
  "TransitionEvent" in window || delete Zo.transitionend.transition);
function Ou(e) {
  if (id[e]) return id[e];
  if (!Zo[e]) return e;
  var t = Zo[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in w1) return (id[e] = t[n]);
  return e;
}
var x1 = Ou("animationend"),
  C1 = Ou("animationiteration"),
  E1 = Ou("animationstart"),
  k1 = Ou("transitionend"),
  R1 = new Map(),
  lg =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function zr(e, t) {
  R1.set(e, t), Oo(t, [e]);
}
for (var sd = 0; sd < lg.length; sd++) {
  var ad = lg[sd],
    IE = ad.toLowerCase(),
    LE = ad[0].toUpperCase() + ad.slice(1);
  zr(IE, "on" + LE);
}
zr(x1, "onAnimationEnd");
zr(C1, "onAnimationIteration");
zr(E1, "onAnimationStart");
zr("dblclick", "onDoubleClick");
zr("focusin", "onFocus");
zr("focusout", "onBlur");
zr(k1, "onTransitionEnd");
Si("onMouseEnter", ["mouseout", "mouseover"]);
Si("onMouseLeave", ["mouseout", "mouseover"]);
Si("onPointerEnter", ["pointerout", "pointerover"]);
Si("onPointerLeave", ["pointerout", "pointerover"]);
Oo(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Oo(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Oo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Oo(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Oo(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Oo(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var ls =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  _E = new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));
function ug(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), IC(r, t, void 0, e), (e.currentTarget = null);
}
function T1(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          ug(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          ug(o, a, u), (i = l);
        }
    }
  }
  if (Rl) throw ((e = lf), (Rl = !1), (lf = null), e);
}
function Fe(e, t) {
  var n = t[vf];
  n === void 0 && (n = t[vf] = new Set());
  var r = e + "__bubble";
  n.has(r) || (P1(t, e, 2, !1), n.add(r));
}
function ld(e, t, n) {
  var r = 0;
  t && (r |= 4), P1(n, e, r, t);
}
var Ba = "_reactListening" + Math.random().toString(36).slice(2);
function zs(e) {
  if (!e[Ba]) {
    (e[Ba] = !0),
      M0.forEach(function (n) {
        n !== "selectionchange" && (_E.has(n) || ld(n, !1, e), ld(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ba] || ((t[Ba] = !0), ld("selectionchange", !1, t));
  }
}
function P1(e, t, n, r) {
  switch (d1(t)) {
    case 1:
      var o = qC;
      break;
    case 4:
      o = XC;
      break;
    default:
      o = Qp;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !af ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function ud(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = oo(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Y0(function () {
    var u = i,
      c = Kp(n),
      d = [];
    e: {
      var f = R1.get(e);
      if (f !== void 0) {
        var g = Jp,
          p = e;
        switch (e) {
          case "keypress":
            if (ul(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = cE;
            break;
          case "focusin":
            (p = "focus"), (g = nd);
            break;
          case "focusout":
            (p = "blur"), (g = nd);
            break;
          case "beforeblur":
          case "afterblur":
            g = nd;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Ym;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = JC;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = pE;
            break;
          case x1:
          case C1:
          case E1:
            g = tE;
            break;
          case k1:
            g = mE;
            break;
          case "scroll":
            g = QC;
            break;
          case "wheel":
            g = yE;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = rE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Zm;
        }
        var v = (t & 4) !== 0,
          x = !v && e === "scroll",
          m = v ? (f !== null ? f + "Capture" : null) : f;
        v = [];
        for (var y = u, h; y !== null; ) {
          h = y;
          var b = h.stateNode;
          if (
            (h.tag === 5 &&
              b !== null &&
              ((h = b),
              m !== null && ((b = Ms(y, m)), b != null && v.push(Us(y, b, h)))),
            x)
          )
            break;
          y = y.return;
        }
        0 < v.length &&
          ((f = new g(f, p, null, n, c)), d.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          f &&
            n !== of &&
            (p = n.relatedTarget || n.fromElement) &&
            (oo(p) || p[sr]))
        )
          break e;
        if (
          (g || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          g
            ? ((p = n.relatedTarget || n.toElement),
              (g = u),
              (p = p ? oo(p) : null),
              p !== null &&
                ((x = $o(p)), p !== x || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((g = null), (p = u)),
          g !== p)
        ) {
          if (
            ((v = Ym),
            (b = "onMouseLeave"),
            (m = "onMouseEnter"),
            (y = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Zm),
              (b = "onPointerLeave"),
              (m = "onPointerEnter"),
              (y = "pointer")),
            (x = g == null ? f : ei(g)),
            (h = p == null ? f : ei(p)),
            (f = new v(b, y + "leave", g, n, c)),
            (f.target = x),
            (f.relatedTarget = h),
            (b = null),
            oo(c) === u &&
              ((v = new v(m, y + "enter", p, n, c)),
              (v.target = h),
              (v.relatedTarget = x),
              (b = v)),
            (x = b),
            g && p)
          )
            t: {
              for (v = g, m = p, y = 0, h = v; h; h = Fo(h)) y++;
              for (h = 0, b = m; b; b = Fo(b)) h++;
              for (; 0 < y - h; ) (v = Fo(v)), y--;
              for (; 0 < h - y; ) (m = Fo(m)), h--;
              for (; y--; ) {
                if (v === m || (m !== null && v === m.alternate)) break t;
                (v = Fo(v)), (m = Fo(m));
              }
              v = null;
            }
          else v = null;
          g !== null && cg(d, f, g, v, !1),
            p !== null && x !== null && cg(d, x, p, v, !0);
        }
      }
      e: {
        if (
          ((f = u ? ei(u) : window),
          (g = f.nodeName && f.nodeName.toLowerCase()),
          g === "select" || (g === "input" && f.type === "file"))
        )
          var C = EE;
        else if (ng(f))
          if (y1) C = PE;
          else {
            C = RE;
            var k = kE;
          }
        else
          (g = f.nodeName) &&
            g.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = TE);
        if (C && (C = C(e, u))) {
          g1(d, C, n, c);
          break e;
        }
        k && k(e, f, u),
          e === "focusout" &&
            (k = f._wrapperState) &&
            k.controlled &&
            f.type === "number" &&
            Zd(f, "number", f.value);
      }
      switch (((k = u ? ei(u) : window), e)) {
        case "focusin":
          (ng(k) || k.contentEditable === "true") &&
            ((Jo = k), (ff = u), (Ss = null));
          break;
        case "focusout":
          Ss = ff = Jo = null;
          break;
        case "mousedown":
          pf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (pf = !1), ag(d, n, c);
          break;
        case "selectionchange":
          if (AE) break;
        case "keydown":
        case "keyup":
          ag(d, n, c);
      }
      var E;
      if (eh)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Yo
          ? h1(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (p1 &&
          n.locale !== "ko" &&
          (Yo || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Yo && (E = f1())
            : ((Cr = c),
              (Yp = "value" in Cr ? Cr.value : Cr.textContent),
              (Yo = !0))),
        (k = Al(u, T)),
        0 < k.length &&
          ((T = new Jm(T, e, null, n, c)),
          d.push({ event: T, listeners: k }),
          E ? (T.data = E) : ((E = m1(n)), E !== null && (T.data = E)))),
        (E = SE ? bE(e, n) : wE(e, n)) &&
          ((u = Al(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Jm("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    T1(d, t);
  });
}
function Us(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Al(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ms(e, n)),
      i != null && r.unshift(Us(e, i, o)),
      (i = Ms(e, t)),
      i != null && r.push(Us(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Fo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function cg(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = Ms(n, i)), l != null && s.unshift(Us(n, l, a)))
        : o || ((l = Ms(n, i)), l != null && s.push(Us(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var ME = /\r\n?/g,
  NE = /\u0000|\uFFFD/g;
function dg(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ME,
      `
`,
    )
    .replace(NE, "");
}
function za(e, t, n) {
  if (((t = dg(t)), dg(e) !== t && n)) throw Error(U(425));
}
function Il() {}
var hf = null,
  mf = null;
function gf(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var yf = typeof setTimeout == "function" ? setTimeout : void 0,
  jE = typeof clearTimeout == "function" ? clearTimeout : void 0,
  fg = typeof Promise == "function" ? Promise : void 0,
  FE =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof fg < "u"
        ? function (e) {
            return fg.resolve(null).then(e).catch(DE);
          }
        : yf;
function DE(e) {
  setTimeout(function () {
    throw e;
  });
}
function cd(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Fs(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Fs(t);
}
function Or(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function pg(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Li = Math.random().toString(36).slice(2),
  Fn = "__reactFiber$" + Li,
  Ws = "__reactProps$" + Li,
  sr = "__reactContainer$" + Li,
  vf = "__reactEvents$" + Li,
  BE = "__reactListeners$" + Li,
  zE = "__reactHandles$" + Li;
function oo(e) {
  var t = e[Fn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[sr] || n[Fn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = pg(e); e !== null; ) {
          if ((n = e[Fn])) return n;
          e = pg(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ya(e) {
  return (
    (e = e[Fn] || e[sr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ei(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(U(33));
}
function $u(e) {
  return e[Ws] || null;
}
var Sf = [],
  ti = -1;
function Ur(e) {
  return { current: e };
}
function Be(e) {
  0 > ti || ((e.current = Sf[ti]), (Sf[ti] = null), ti--);
}
function Ne(e, t) {
  ti++, (Sf[ti] = e.current), (e.current = t);
}
var Nr = {},
  kt = Ur(Nr),
  jt = Ur(!1),
  mo = Nr;
function bi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Nr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ft(e) {
  return (e = e.childContextTypes), e != null;
}
function Ll() {
  Be(jt), Be(kt);
}
function hg(e, t, n) {
  if (kt.current !== Nr) throw Error(U(168));
  Ne(kt, t), Ne(jt, n);
}
function O1(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(U(108, kC(e) || "Unknown", o));
  return Xe({}, n, r);
}
function _l(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Nr),
    (mo = kt.current),
    Ne(kt, e),
    Ne(jt, jt.current),
    !0
  );
}
function mg(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(U(169));
  n
    ? ((e = O1(e, t, mo)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Be(jt),
      Be(kt),
      Ne(kt, e))
    : Be(jt),
    Ne(jt, n);
}
var Yn = null,
  Au = !1,
  dd = !1;
function $1(e) {
  Yn === null ? (Yn = [e]) : Yn.push(e);
}
function UE(e) {
  (Au = !0), $1(e);
}
function Wr() {
  if (!dd && Yn !== null) {
    dd = !0;
    var e = 0,
      t = Re;
    try {
      var n = Yn;
      for (Re = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Yn = null), (Au = !1);
    } catch (o) {
      throw (Yn !== null && (Yn = Yn.slice(e + 1)), t1(Gp, Wr), o);
    } finally {
      (Re = t), (dd = !1);
    }
  }
  return null;
}
var ni = [],
  ri = 0,
  Ml = null,
  Nl = 0,
  un = [],
  cn = 0,
  go = null,
  Zn = 1,
  er = "";
function Jr(e, t) {
  (ni[ri++] = Nl), (ni[ri++] = Ml), (Ml = e), (Nl = t);
}
function A1(e, t, n) {
  (un[cn++] = Zn), (un[cn++] = er), (un[cn++] = go), (go = e);
  var r = Zn;
  e = er;
  var o = 32 - Rn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Rn(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Zn = (1 << (32 - Rn(t) + o)) | (n << o) | r),
      (er = i + e);
  } else (Zn = (1 << i) | (n << o) | r), (er = e);
}
function nh(e) {
  e.return !== null && (Jr(e, 1), A1(e, 1, 0));
}
function rh(e) {
  for (; e === Ml; )
    (Ml = ni[--ri]), (ni[ri] = null), (Nl = ni[--ri]), (ni[ri] = null);
  for (; e === go; )
    (go = un[--cn]),
      (un[cn] = null),
      (er = un[--cn]),
      (un[cn] = null),
      (Zn = un[--cn]),
      (un[cn] = null);
}
var Qt = null,
  qt = null,
  We = !1,
  Cn = null;
function I1(e, t) {
  var n = pn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function gg(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Qt = e), (qt = Or(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Qt = e), (qt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = go !== null ? { id: Zn, overflow: er } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = pn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Qt = e),
            (qt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function bf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wf(e) {
  if (We) {
    var t = qt;
    if (t) {
      var n = t;
      if (!gg(e, t)) {
        if (bf(e)) throw Error(U(418));
        t = Or(n.nextSibling);
        var r = Qt;
        t && gg(e, t)
          ? I1(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (We = !1), (Qt = e));
      }
    } else {
      if (bf(e)) throw Error(U(418));
      (e.flags = (e.flags & -4097) | 2), (We = !1), (Qt = e);
    }
  }
}
function yg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Qt = e;
}
function Ua(e) {
  if (e !== Qt) return !1;
  if (!We) return yg(e), (We = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !gf(e.type, e.memoizedProps))),
    t && (t = qt))
  ) {
    if (bf(e)) throw (L1(), Error(U(418)));
    for (; t; ) I1(e, t), (t = Or(t.nextSibling));
  }
  if ((yg(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(U(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              qt = Or(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      qt = null;
    }
  } else qt = Qt ? Or(e.stateNode.nextSibling) : null;
  return !0;
}
function L1() {
  for (var e = qt; e; ) e = Or(e.nextSibling);
}
function wi() {
  (qt = Qt = null), (We = !1);
}
function oh(e) {
  Cn === null ? (Cn = [e]) : Cn.push(e);
}
var WE = pr.ReactCurrentBatchConfig;
function qi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(U(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(U(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(U(284));
    if (!n._owner) throw Error(U(290, e));
  }
  return e;
}
function Wa(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      U(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function vg(e) {
  var t = e._init;
  return t(e._payload);
}
function _1(e) {
  function t(m, y) {
    if (e) {
      var h = m.deletions;
      h === null ? ((m.deletions = [y]), (m.flags |= 16)) : h.push(y);
    }
  }
  function n(m, y) {
    if (!e) return null;
    for (; y !== null; ) t(m, y), (y = y.sibling);
    return null;
  }
  function r(m, y) {
    for (m = new Map(); y !== null; )
      y.key !== null ? m.set(y.key, y) : m.set(y.index, y), (y = y.sibling);
    return m;
  }
  function o(m, y) {
    return (m = Lr(m, y)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, y, h) {
    return (
      (m.index = h),
      e
        ? ((h = m.alternate),
          h !== null
            ? ((h = h.index), h < y ? ((m.flags |= 2), y) : h)
            : ((m.flags |= 2), y))
        : ((m.flags |= 1048576), y)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, y, h, b) {
    return y === null || y.tag !== 6
      ? ((y = vd(h, m.mode, b)), (y.return = m), y)
      : ((y = o(y, h)), (y.return = m), y);
  }
  function l(m, y, h, b) {
    var C = h.type;
    return C === Qo
      ? c(m, y, h.props.children, b, h.key)
      : y !== null &&
          (y.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === Sr &&
              vg(C) === y.type))
        ? ((b = o(y, h.props)), (b.ref = qi(m, y, h)), (b.return = m), b)
        : ((b = gl(h.type, h.key, h.props, null, m.mode, b)),
          (b.ref = qi(m, y, h)),
          (b.return = m),
          b);
  }
  function u(m, y, h, b) {
    return y === null ||
      y.tag !== 4 ||
      y.stateNode.containerInfo !== h.containerInfo ||
      y.stateNode.implementation !== h.implementation
      ? ((y = Sd(h, m.mode, b)), (y.return = m), y)
      : ((y = o(y, h.children || [])), (y.return = m), y);
  }
  function c(m, y, h, b, C) {
    return y === null || y.tag !== 7
      ? ((y = co(h, m.mode, b, C)), (y.return = m), y)
      : ((y = o(y, h)), (y.return = m), y);
  }
  function d(m, y, h) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (y = vd("" + y, m.mode, h)), (y.return = m), y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ia:
          return (
            (h = gl(y.type, y.key, y.props, null, m.mode, h)),
            (h.ref = qi(m, null, y)),
            (h.return = m),
            h
          );
        case Xo:
          return (y = Sd(y, m.mode, h)), (y.return = m), y;
        case Sr:
          var b = y._init;
          return d(m, b(y._payload), h);
      }
      if (ss(y) || Wi(y))
        return (y = co(y, m.mode, h, null)), (y.return = m), y;
      Wa(m, y);
    }
    return null;
  }
  function f(m, y, h, b) {
    var C = y !== null ? y.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return C !== null ? null : a(m, y, "" + h, b);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ia:
          return h.key === C ? l(m, y, h, b) : null;
        case Xo:
          return h.key === C ? u(m, y, h, b) : null;
        case Sr:
          return (C = h._init), f(m, y, C(h._payload), b);
      }
      if (ss(h) || Wi(h)) return C !== null ? null : c(m, y, h, b, null);
      Wa(m, h);
    }
    return null;
  }
  function g(m, y, h, b, C) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return (m = m.get(h) || null), a(y, m, "" + b, C);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Ia:
          return (m = m.get(b.key === null ? h : b.key) || null), l(y, m, b, C);
        case Xo:
          return (m = m.get(b.key === null ? h : b.key) || null), u(y, m, b, C);
        case Sr:
          var k = b._init;
          return g(m, y, h, k(b._payload), C);
      }
      if (ss(b) || Wi(b)) return (m = m.get(h) || null), c(y, m, b, C, null);
      Wa(y, b);
    }
    return null;
  }
  function p(m, y, h, b) {
    for (
      var C = null, k = null, E = y, T = (y = 0), $ = null;
      E !== null && T < h.length;
      T++
    ) {
      E.index > T ? (($ = E), (E = null)) : ($ = E.sibling);
      var w = f(m, E, h[T], b);
      if (w === null) {
        E === null && (E = $);
        break;
      }
      e && E && w.alternate === null && t(m, E),
        (y = i(w, y, T)),
        k === null ? (C = w) : (k.sibling = w),
        (k = w),
        (E = $);
    }
    if (T === h.length) return n(m, E), We && Jr(m, T), C;
    if (E === null) {
      for (; T < h.length; T++)
        (E = d(m, h[T], b)),
          E !== null &&
            ((y = i(E, y, T)), k === null ? (C = E) : (k.sibling = E), (k = E));
      return We && Jr(m, T), C;
    }
    for (E = r(m, E); T < h.length; T++)
      ($ = g(E, m, T, h[T], b)),
        $ !== null &&
          (e && $.alternate !== null && E.delete($.key === null ? T : $.key),
          (y = i($, y, T)),
          k === null ? (C = $) : (k.sibling = $),
          (k = $));
    return (
      e &&
        E.forEach(function (P) {
          return t(m, P);
        }),
      We && Jr(m, T),
      C
    );
  }
  function v(m, y, h, b) {
    var C = Wi(h);
    if (typeof C != "function") throw Error(U(150));
    if (((h = C.call(h)), h == null)) throw Error(U(151));
    for (
      var k = (C = null), E = y, T = (y = 0), $ = null, w = h.next();
      E !== null && !w.done;
      T++, w = h.next()
    ) {
      E.index > T ? (($ = E), (E = null)) : ($ = E.sibling);
      var P = f(m, E, w.value, b);
      if (P === null) {
        E === null && (E = $);
        break;
      }
      e && E && P.alternate === null && t(m, E),
        (y = i(P, y, T)),
        k === null ? (C = P) : (k.sibling = P),
        (k = P),
        (E = $);
    }
    if (w.done) return n(m, E), We && Jr(m, T), C;
    if (E === null) {
      for (; !w.done; T++, w = h.next())
        (w = d(m, w.value, b)),
          w !== null &&
            ((y = i(w, y, T)), k === null ? (C = w) : (k.sibling = w), (k = w));
      return We && Jr(m, T), C;
    }
    for (E = r(m, E); !w.done; T++, w = h.next())
      (w = g(E, m, T, w.value, b)),
        w !== null &&
          (e && w.alternate !== null && E.delete(w.key === null ? T : w.key),
          (y = i(w, y, T)),
          k === null ? (C = w) : (k.sibling = w),
          (k = w));
    return (
      e &&
        E.forEach(function (D) {
          return t(m, D);
        }),
      We && Jr(m, T),
      C
    );
  }
  function x(m, y, h, b) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Qo &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Ia:
          e: {
            for (var C = h.key, k = y; k !== null; ) {
              if (k.key === C) {
                if (((C = h.type), C === Qo)) {
                  if (k.tag === 7) {
                    n(m, k.sibling),
                      (y = o(k, h.props.children)),
                      (y.return = m),
                      (m = y);
                    break e;
                  }
                } else if (
                  k.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Sr &&
                    vg(C) === k.type)
                ) {
                  n(m, k.sibling),
                    (y = o(k, h.props)),
                    (y.ref = qi(m, k, h)),
                    (y.return = m),
                    (m = y);
                  break e;
                }
                n(m, k);
                break;
              } else t(m, k);
              k = k.sibling;
            }
            h.type === Qo
              ? ((y = co(h.props.children, m.mode, b, h.key)),
                (y.return = m),
                (m = y))
              : ((b = gl(h.type, h.key, h.props, null, m.mode, b)),
                (b.ref = qi(m, y, h)),
                (b.return = m),
                (m = b));
          }
          return s(m);
        case Xo:
          e: {
            for (k = h.key; y !== null; ) {
              if (y.key === k)
                if (
                  y.tag === 4 &&
                  y.stateNode.containerInfo === h.containerInfo &&
                  y.stateNode.implementation === h.implementation
                ) {
                  n(m, y.sibling),
                    (y = o(y, h.children || [])),
                    (y.return = m),
                    (m = y);
                  break e;
                } else {
                  n(m, y);
                  break;
                }
              else t(m, y);
              y = y.sibling;
            }
            (y = Sd(h, m.mode, b)), (y.return = m), (m = y);
          }
          return s(m);
        case Sr:
          return (k = h._init), x(m, y, k(h._payload), b);
      }
      if (ss(h)) return p(m, y, h, b);
      if (Wi(h)) return v(m, y, h, b);
      Wa(m, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        y !== null && y.tag === 6
          ? (n(m, y.sibling), (y = o(y, h)), (y.return = m), (m = y))
          : (n(m, y), (y = vd(h, m.mode, b)), (y.return = m), (m = y)),
        s(m))
      : n(m, y);
  }
  return x;
}
var xi = _1(!0),
  M1 = _1(!1),
  jl = Ur(null),
  Fl = null,
  oi = null,
  ih = null;
function sh() {
  ih = oi = Fl = null;
}
function ah(e) {
  var t = jl.current;
  Be(jl), (e._currentValue = t);
}
function xf(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function di(e, t) {
  (Fl = e),
    (ih = oi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Nt = !0), (e.firstContext = null));
}
function mn(e) {
  var t = e._currentValue;
  if (ih !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), oi === null)) {
      if (Fl === null) throw Error(U(308));
      (oi = e), (Fl.dependencies = { lanes: 0, firstContext: e });
    } else oi = oi.next = e;
  return t;
}
var io = null;
function lh(e) {
  io === null ? (io = [e]) : io.push(e);
}
function N1(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), lh(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    ar(e, r)
  );
}
function ar(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var br = !1;
function uh(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function j1(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function nr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function $r(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Se & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      ar(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), lh(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    ar(e, n)
  );
}
function cl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qp(e, n);
  }
}
function Sg(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Dl(e, t, n, r) {
  var o = e.updateQueue;
  br = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (c = u = l = null), (a = i);
    do {
      var f = a.lane,
        g = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var p = e,
            v = a;
          switch (((f = t), (g = n), v.tag)) {
            case 1:
              if (((p = v.payload), typeof p == "function")) {
                d = p.call(g, d, f);
                break e;
              }
              d = p;
              break e;
            case 3:
              p.flags = (p.flags & -65537) | 128;
            case 0:
              if (
                ((p = v.payload),
                (f = typeof p == "function" ? p.call(g, d, f) : p),
                f == null)
              )
                break e;
              d = Xe({}, d, f);
              break e;
            case 2:
              br = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [a]) : f.push(a));
      } else
        (g = {
          eventTime: g,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (l = d)) : (c = c.next = g),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (vo |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function bg(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(U(191, o));
        o.call(r);
      }
    }
}
var va = {},
  Un = Ur(va),
  Vs = Ur(va),
  Hs = Ur(va);
function so(e) {
  if (e === va) throw Error(U(174));
  return e;
}
function ch(e, t) {
  switch ((Ne(Hs, t), Ne(Vs, e), Ne(Un, va), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : tf(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = tf(t, e));
  }
  Be(Un), Ne(Un, t);
}
function Ci() {
  Be(Un), Be(Vs), Be(Hs);
}
function F1(e) {
  so(Hs.current);
  var t = so(Un.current),
    n = tf(t, e.type);
  t !== n && (Ne(Vs, e), Ne(Un, n));
}
function dh(e) {
  Vs.current === e && (Be(Un), Be(Vs));
}
var Ke = Ur(0);
function Bl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var fd = [];
function fh() {
  for (var e = 0; e < fd.length; e++)
    fd[e]._workInProgressVersionPrimary = null;
  fd.length = 0;
}
var dl = pr.ReactCurrentDispatcher,
  pd = pr.ReactCurrentBatchConfig,
  yo = 0,
  Ge = null,
  st = null,
  ut = null,
  zl = !1,
  bs = !1,
  Ks = 0,
  VE = 0;
function bt() {
  throw Error(U(321));
}
function ph(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Pn(e[n], t[n])) return !1;
  return !0;
}
function hh(e, t, n, r, o, i) {
  if (
    ((yo = i),
    (Ge = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (dl.current = e === null || e.memoizedState === null ? qE : XE),
    (e = n(r, o)),
    bs)
  ) {
    i = 0;
    do {
      if (((bs = !1), (Ks = 0), 25 <= i)) throw Error(U(301));
      (i += 1),
        (ut = st = null),
        (t.updateQueue = null),
        (dl.current = QE),
        (e = n(r, o));
    } while (bs);
  }
  if (
    ((dl.current = Ul),
    (t = st !== null && st.next !== null),
    (yo = 0),
    (ut = st = Ge = null),
    (zl = !1),
    t)
  )
    throw Error(U(300));
  return e;
}
function mh() {
  var e = Ks !== 0;
  return (Ks = 0), e;
}
function Mn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ut === null ? (Ge.memoizedState = ut = e) : (ut = ut.next = e), ut;
}
function gn() {
  if (st === null) {
    var e = Ge.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = st.next;
  var t = ut === null ? Ge.memoizedState : ut.next;
  if (t !== null) (ut = t), (st = e);
  else {
    if (e === null) throw Error(U(310));
    (st = e),
      (e = {
        memoizedState: st.memoizedState,
        baseState: st.baseState,
        baseQueue: st.baseQueue,
        queue: st.queue,
        next: null,
      }),
      ut === null ? (Ge.memoizedState = ut = e) : (ut = ut.next = e);
  }
  return ut;
}
function Gs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function hd(e) {
  var t = gn(),
    n = t.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = st,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((yo & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (Ge.lanes |= c),
          (vo |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      Pn(r, t.memoizedState) || (Nt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Ge.lanes |= i), (vo |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function md(e) {
  var t = gn(),
    n = t.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    Pn(i, t.memoizedState) || (Nt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function D1() {}
function B1(e, t) {
  var n = Ge,
    r = gn(),
    o = t(),
    i = !Pn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Nt = !0)),
    (r = r.queue),
    gh(W1.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ut !== null && ut.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      qs(9, U1.bind(null, n, r, o, t), void 0, null),
      ct === null)
    )
      throw Error(U(349));
    yo & 30 || z1(n, t, o);
  }
  return o;
}
function z1(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ge.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function U1(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), V1(t) && H1(e);
}
function W1(e, t, n) {
  return n(function () {
    V1(t) && H1(e);
  });
}
function V1(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Pn(e, n);
  } catch {
    return !0;
  }
}
function H1(e) {
  var t = ar(e, 1);
  t !== null && Tn(t, e, 1, -1);
}
function wg(e) {
  var t = Mn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = GE.bind(null, Ge, e)),
    [t.memoizedState, e]
  );
}
function qs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ge.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function K1() {
  return gn().memoizedState;
}
function fl(e, t, n, r) {
  var o = Mn();
  (Ge.flags |= e),
    (o.memoizedState = qs(1 | t, n, void 0, r === void 0 ? null : r));
}
function Iu(e, t, n, r) {
  var o = gn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (st !== null) {
    var s = st.memoizedState;
    if (((i = s.destroy), r !== null && ph(r, s.deps))) {
      o.memoizedState = qs(t, n, i, r);
      return;
    }
  }
  (Ge.flags |= e), (o.memoizedState = qs(1 | t, n, i, r));
}
function xg(e, t) {
  return fl(8390656, 8, e, t);
}
function gh(e, t) {
  return Iu(2048, 8, e, t);
}
function G1(e, t) {
  return Iu(4, 2, e, t);
}
function q1(e, t) {
  return Iu(4, 4, e, t);
}
function X1(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Q1(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Iu(4, 4, X1.bind(null, t, e), n)
  );
}
function yh() {}
function Y1(e, t) {
  var n = gn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ph(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function J1(e, t) {
  var n = gn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ph(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Z1(e, t, n) {
  return yo & 21
    ? (Pn(n, t) || ((n = o1()), (Ge.lanes |= n), (vo |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Nt = !0)), (e.memoizedState = n));
}
function HE(e, t) {
  var n = Re;
  (Re = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = pd.transition;
  pd.transition = {};
  try {
    e(!1), t();
  } finally {
    (Re = n), (pd.transition = r);
  }
}
function eS() {
  return gn().memoizedState;
}
function KE(e, t, n) {
  var r = Ir(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    tS(e))
  )
    nS(t, n);
  else if (((n = N1(e, t, n, r)), n !== null)) {
    var o = At();
    Tn(n, e, r, o), rS(n, t, r);
  }
}
function GE(e, t, n) {
  var r = Ir(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (tS(e)) nS(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Pn(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), lh(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = N1(e, t, o, r)),
      n !== null && ((o = At()), Tn(n, e, r, o), rS(n, t, r));
  }
}
function tS(e) {
  var t = e.alternate;
  return e === Ge || (t !== null && t === Ge);
}
function nS(e, t) {
  bs = zl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function rS(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qp(e, n);
  }
}
var Ul = {
    readContext: mn,
    useCallback: bt,
    useContext: bt,
    useEffect: bt,
    useImperativeHandle: bt,
    useInsertionEffect: bt,
    useLayoutEffect: bt,
    useMemo: bt,
    useReducer: bt,
    useRef: bt,
    useState: bt,
    useDebugValue: bt,
    useDeferredValue: bt,
    useTransition: bt,
    useMutableSource: bt,
    useSyncExternalStore: bt,
    useId: bt,
    unstable_isNewReconciler: !1,
  },
  qE = {
    readContext: mn,
    useCallback: function (e, t) {
      return (Mn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: mn,
    useEffect: xg,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        fl(4194308, 4, X1.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return fl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return fl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Mn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Mn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = KE.bind(null, Ge, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Mn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: wg,
    useDebugValue: yh,
    useDeferredValue: function (e) {
      return (Mn().memoizedState = e);
    },
    useTransition: function () {
      var e = wg(!1),
        t = e[0];
      return (e = HE.bind(null, e[1])), (Mn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ge,
        o = Mn();
      if (We) {
        if (n === void 0) throw Error(U(407));
        n = n();
      } else {
        if (((n = t()), ct === null)) throw Error(U(349));
        yo & 30 || z1(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        xg(W1.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        qs(9, U1.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Mn(),
        t = ct.identifierPrefix;
      if (We) {
        var n = er,
          r = Zn;
        (n = (r & ~(1 << (32 - Rn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ks++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = VE++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  XE = {
    readContext: mn,
    useCallback: Y1,
    useContext: mn,
    useEffect: gh,
    useImperativeHandle: Q1,
    useInsertionEffect: G1,
    useLayoutEffect: q1,
    useMemo: J1,
    useReducer: hd,
    useRef: K1,
    useState: function () {
      return hd(Gs);
    },
    useDebugValue: yh,
    useDeferredValue: function (e) {
      var t = gn();
      return Z1(t, st.memoizedState, e);
    },
    useTransition: function () {
      var e = hd(Gs)[0],
        t = gn().memoizedState;
      return [e, t];
    },
    useMutableSource: D1,
    useSyncExternalStore: B1,
    useId: eS,
    unstable_isNewReconciler: !1,
  },
  QE = {
    readContext: mn,
    useCallback: Y1,
    useContext: mn,
    useEffect: gh,
    useImperativeHandle: Q1,
    useInsertionEffect: G1,
    useLayoutEffect: q1,
    useMemo: J1,
    useReducer: md,
    useRef: K1,
    useState: function () {
      return md(Gs);
    },
    useDebugValue: yh,
    useDeferredValue: function (e) {
      var t = gn();
      return st === null ? (t.memoizedState = e) : Z1(t, st.memoizedState, e);
    },
    useTransition: function () {
      var e = md(Gs)[0],
        t = gn().memoizedState;
      return [e, t];
    },
    useMutableSource: D1,
    useSyncExternalStore: B1,
    useId: eS,
    unstable_isNewReconciler: !1,
  };
function wn(e, t) {
  if (e && e.defaultProps) {
    (t = Xe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Cf(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Xe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Lu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? $o(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = At(),
      o = Ir(e),
      i = nr(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = $r(e, i, o)),
      t !== null && (Tn(t, e, o, r), cl(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = At(),
      o = Ir(e),
      i = nr(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = $r(e, i, o)),
      t !== null && (Tn(t, e, o, r), cl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = At(),
      r = Ir(e),
      o = nr(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = $r(e, o, r)),
      t !== null && (Tn(t, e, r, n), cl(t, e, r));
  },
};
function Cg(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Bs(n, r) || !Bs(o, i)
        : !0
  );
}
function oS(e, t, n) {
  var r = !1,
    o = Nr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = mn(i))
      : ((o = Ft(t) ? mo : kt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? bi(e, o) : Nr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Lu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Eg(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Lu.enqueueReplaceState(t, t.state, null);
}
function Ef(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), uh(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = mn(i))
    : ((i = Ft(t) ? mo : kt.current), (o.context = bi(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Cf(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Lu.enqueueReplaceState(o, o.state, null),
      Dl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ei(e, t) {
  try {
    var n = "",
      r = t;
    do (n += EC(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function gd(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function kf(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var YE = typeof WeakMap == "function" ? WeakMap : Map;
function iS(e, t, n) {
  (n = nr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Vl || ((Vl = !0), (Mf = r)), kf(e, t);
    }),
    n
  );
}
function sS(e, t, n) {
  (n = nr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        kf(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        kf(e, t),
          typeof r != "function" &&
            (Ar === null ? (Ar = new Set([this])) : Ar.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function kg(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new YE();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = dk.bind(null, e, t, n)), t.then(e, e));
}
function Rg(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Tg(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = nr(-1, 1)), (t.tag = 2), $r(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var JE = pr.ReactCurrentOwner,
  Nt = !1;
function Ot(e, t, n, r) {
  t.child = e === null ? M1(t, null, n, r) : xi(t, e.child, n, r);
}
function Pg(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    di(t, o),
    (r = hh(e, t, n, r, i, o)),
    (n = mh()),
    e !== null && !Nt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        lr(e, t, o))
      : (We && n && nh(t), (t.flags |= 1), Ot(e, t, r, o), t.child)
  );
}
function Og(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !kh(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), aS(e, t, i, r, o))
      : ((e = gl(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Bs), n(s, r) && e.ref === t.ref)
    )
      return lr(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Lr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function aS(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Bs(i, r) && e.ref === t.ref)
      if (((Nt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Nt = !0);
      else return (t.lanes = e.lanes), lr(e, t, o);
  }
  return Rf(e, t, n, r, o);
}
function lS(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ne(si, Kt),
        (Kt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Ne(si, Kt),
          (Kt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Ne(si, Kt),
        (Kt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Ne(si, Kt),
      (Kt |= r);
  return Ot(e, t, o, n), t.child;
}
function uS(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Rf(e, t, n, r, o) {
  var i = Ft(n) ? mo : kt.current;
  return (
    (i = bi(t, i)),
    di(t, o),
    (n = hh(e, t, n, r, i, o)),
    (r = mh()),
    e !== null && !Nt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        lr(e, t, o))
      : (We && r && nh(t), (t.flags |= 1), Ot(e, t, n, o), t.child)
  );
}
function $g(e, t, n, r, o) {
  if (Ft(n)) {
    var i = !0;
    _l(t);
  } else i = !1;
  if ((di(t, o), t.stateNode === null))
    pl(e, t), oS(t, n, r), Ef(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = mn(u))
      : ((u = Ft(n) ? mo : kt.current), (u = bi(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Eg(t, s, r, u)),
      (br = !1);
    var f = t.memoizedState;
    (s.state = f),
      Dl(t, r, s, o),
      (l = t.memoizedState),
      a !== r || f !== l || jt.current || br
        ? (typeof c == "function" && (Cf(t, n, c, r), (l = t.memoizedState)),
          (a = br || Cg(t, n, a, r, f, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      j1(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : wn(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = mn(l))
        : ((l = Ft(n) ? mo : kt.current), (l = bi(t, l)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && Eg(t, s, r, l)),
      (br = !1),
      (f = t.memoizedState),
      (s.state = f),
      Dl(t, r, s, o);
    var p = t.memoizedState;
    a !== d || f !== p || jt.current || br
      ? (typeof g == "function" && (Cf(t, n, g, r), (p = t.memoizedState)),
        (u = br || Cg(t, n, u, r, f, p, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, p, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, p, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = p)),
        (s.props = r),
        (s.state = p),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Tf(e, t, n, r, i, o);
}
function Tf(e, t, n, r, o, i) {
  uS(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && mg(t, n, !1), lr(e, t, i);
  (r = t.stateNode), (JE.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = xi(t, e.child, null, i)), (t.child = xi(t, null, a, i)))
      : Ot(e, t, a, i),
    (t.memoizedState = r.state),
    o && mg(t, n, !0),
    t.child
  );
}
function cS(e) {
  var t = e.stateNode;
  t.pendingContext
    ? hg(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && hg(e, t.context, !1),
    ch(e, t.containerInfo);
}
function Ag(e, t, n, r, o) {
  return wi(), oh(o), (t.flags |= 256), Ot(e, t, n, r), t.child;
}
var Pf = { dehydrated: null, treeContext: null, retryLane: 0 };
function Of(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function dS(e, t, n) {
  var r = t.pendingProps,
    o = Ke.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Ne(Ke, o & 1),
    e === null)
  )
    return (
      wf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Nu(s, r, 0, null)),
              (e = co(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Of(n)),
              (t.memoizedState = Pf),
              e)
            : vh(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return ZE(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Lr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = Lr(a, i)) : ((i = co(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Of(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Pf),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Lr(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function vh(e, t) {
  return (
    (t = Nu({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Va(e, t, n, r) {
  return (
    r !== null && oh(r),
    xi(t, e.child, null, n),
    (e = vh(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ZE(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = gd(Error(U(422)))), Va(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Nu({ mode: "visible", children: r.children }, o, 0, null)),
          (i = co(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && xi(t, e.child, null, s),
          (t.child.memoizedState = Of(s)),
          (t.memoizedState = Pf),
          i);
  if (!(t.mode & 1)) return Va(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(U(419))), (r = gd(i, r, void 0)), Va(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Nt || a)) {
    if (((r = ct), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), ar(e, o), Tn(r, e, o, -1));
    }
    return Eh(), (r = gd(Error(U(421)))), Va(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = fk.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (qt = Or(o.nextSibling)),
      (Qt = t),
      (We = !0),
      (Cn = null),
      e !== null &&
        ((un[cn++] = Zn),
        (un[cn++] = er),
        (un[cn++] = go),
        (Zn = e.id),
        (er = e.overflow),
        (go = t)),
      (t = vh(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ig(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), xf(e.return, t, n);
}
function yd(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function fS(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ot(e, t, r.children, n), (r = Ke.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ig(e, n, t);
        else if (e.tag === 19) Ig(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Ne(Ke, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Bl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          yd(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Bl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        yd(t, !0, n, null, i);
        break;
      case "together":
        yd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function pl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function lr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (vo |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(U(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Lr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Lr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ek(e, t, n) {
  switch (t.tag) {
    case 3:
      cS(t), wi();
      break;
    case 5:
      F1(t);
      break;
    case 1:
      Ft(t.type) && _l(t);
      break;
    case 4:
      ch(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Ne(jl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ne(Ke, Ke.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? dS(e, t, n)
            : (Ne(Ke, Ke.current & 1),
              (e = lr(e, t, n)),
              e !== null ? e.sibling : null);
      Ne(Ke, Ke.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return fS(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Ne(Ke, Ke.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), lS(e, t, n);
  }
  return lr(e, t, n);
}
var pS, $f, hS, mS;
pS = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
$f = function () {};
hS = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), so(Un.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Yd(e, o)), (r = Yd(e, r)), (i = []);
        break;
      case "select":
        (o = Xe({}, o, { value: void 0 })),
          (r = Xe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = ef(e, o)), (r = ef(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Il);
    }
    nf(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ls.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (i = i || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Ls.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && Fe("scroll", e),
                    i || a === l || (i = []))
                  : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
mS = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Xi(e, t) {
  if (!We)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function wt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function tk(e, t, n) {
  var r = t.pendingProps;
  switch ((rh(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return wt(t), null;
    case 1:
      return Ft(t.type) && Ll(), wt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ci(),
        Be(jt),
        Be(kt),
        fh(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ua(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Cn !== null && (Ff(Cn), (Cn = null)))),
        $f(e, t),
        wt(t),
        null
      );
    case 5:
      dh(t);
      var o = so(Hs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        hS(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(U(166));
          return wt(t), null;
        }
        if (((e = so(Un.current)), Ua(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Fn] = t), (r[Ws] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Fe("cancel", r), Fe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Fe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ls.length; o++) Fe(ls[o], r);
              break;
            case "source":
              Fe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Fe("error", r), Fe("load", r);
              break;
            case "details":
              Fe("toggle", r);
              break;
            case "input":
              zm(r, i), Fe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Fe("invalid", r);
              break;
            case "textarea":
              Wm(r, i), Fe("invalid", r);
          }
          nf(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      za(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      za(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Ls.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  Fe("scroll", r);
            }
          switch (n) {
            case "input":
              La(r), Um(r, i, !0);
              break;
            case "textarea":
              La(r), Vm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Il);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = W0(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Fn] = t),
            (e[Ws] = r),
            pS(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = rf(n, r)), n)) {
              case "dialog":
                Fe("cancel", e), Fe("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Fe("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < ls.length; o++) Fe(ls[o], e);
                o = r;
                break;
              case "source":
                Fe("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                Fe("error", e), Fe("load", e), (o = r);
                break;
              case "details":
                Fe("toggle", e), (o = r);
                break;
              case "input":
                zm(e, r), (o = Yd(e, r)), Fe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Xe({}, r, { value: void 0 })),
                  Fe("invalid", e);
                break;
              case "textarea":
                Wm(e, r), (o = ef(e, r)), Fe("invalid", e);
                break;
              default:
                o = r;
            }
            nf(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? K0(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && V0(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && _s(e, l)
                        : typeof l == "number" && _s(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Ls.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && Fe("scroll", e)
                          : l != null && Up(e, i, l, s));
              }
            switch (n) {
              case "input":
                La(e), Um(e, r, !1);
                break;
              case "textarea":
                La(e), Vm(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Mr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ai(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      ai(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Il);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return wt(t), null;
    case 6:
      if (e && t.stateNode != null) mS(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(U(166));
        if (((n = so(Hs.current)), so(Un.current), Ua(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Fn] = t),
            (i = r.nodeValue !== n) && ((e = Qt), e !== null))
          )
            switch (e.tag) {
              case 3:
                za(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  za(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Fn] = t),
            (t.stateNode = r);
      }
      return wt(t), null;
    case 13:
      if (
        (Be(Ke),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (We && qt !== null && t.mode & 1 && !(t.flags & 128))
          L1(), wi(), (t.flags |= 98560), (i = !1);
        else if (((i = Ua(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(U(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(U(317));
            i[Fn] = t;
          } else
            wi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          wt(t), (i = !1);
        } else Cn !== null && (Ff(Cn), (Cn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ke.current & 1 ? at === 0 && (at = 3) : Eh())),
          t.updateQueue !== null && (t.flags |= 4),
          wt(t),
          null);
    case 4:
      return (
        Ci(), $f(e, t), e === null && zs(t.stateNode.containerInfo), wt(t), null
      );
    case 10:
      return ah(t.type._context), wt(t), null;
    case 17:
      return Ft(t.type) && Ll(), wt(t), null;
    case 19:
      if ((Be(Ke), (i = t.memoizedState), i === null)) return wt(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Xi(i, !1);
        else {
          if (at !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Bl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Xi(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Ne(Ke, (Ke.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Ze() > ki &&
            ((t.flags |= 128), (r = !0), Xi(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Bl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Xi(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !We)
            )
              return wt(t), null;
          } else
            2 * Ze() - i.renderingStartTime > ki &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Xi(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Ze()),
          (t.sibling = null),
          (n = Ke.current),
          Ne(Ke, r ? (n & 1) | 2 : n & 1),
          t)
        : (wt(t), null);
    case 22:
    case 23:
      return (
        Ch(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Kt & 1073741824 && (wt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : wt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(U(156, t.tag));
}
function nk(e, t) {
  switch ((rh(t), t.tag)) {
    case 1:
      return (
        Ft(t.type) && Ll(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ci(),
        Be(jt),
        Be(kt),
        fh(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return dh(t), null;
    case 13:
      if (
        (Be(Ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(U(340));
        wi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Be(Ke), null;
    case 4:
      return Ci(), null;
    case 10:
      return ah(t.type._context), null;
    case 22:
    case 23:
      return Ch(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ha = !1,
  Ct = !1,
  rk = typeof WeakSet == "function" ? WeakSet : Set,
  G = null;
function ii(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Je(e, t, r);
      }
    else n.current = null;
}
function Af(e, t, n) {
  try {
    n();
  } catch (r) {
    Je(e, t, r);
  }
}
var Lg = !1;
function ok(e, t) {
  if (((hf = Ol), (e = b1()), th(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var g;
              d !== n || (o !== 0 && d.nodeType !== 3) || (a = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (f = d), (d = g);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (a = s),
                f === i && ++c === r && (l = s),
                (g = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = g;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (mf = { focusedElem: e, selectionRange: n }, Ol = !1, G = t; G !== null; )
    if (((t = G), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (G = e);
    else
      for (; G !== null; ) {
        t = G;
        try {
          var p = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (p !== null) {
                  var v = p.memoizedProps,
                    x = p.memoizedState,
                    m = t.stateNode,
                    y = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : wn(t.type, v),
                      x,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = y;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(U(163));
            }
        } catch (b) {
          Je(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (G = e);
          break;
        }
        G = t.return;
      }
  return (p = Lg), (Lg = !1), p;
}
function ws(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Af(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function _u(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function If(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function gS(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), gS(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Fn], delete t[Ws], delete t[vf], delete t[BE], delete t[zE])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function yS(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _g(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || yS(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Lf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Il));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Lf(e, t, n), e = e.sibling; e !== null; ) Lf(e, t, n), (e = e.sibling);
}
function _f(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_f(e, t, n), e = e.sibling; e !== null; ) _f(e, t, n), (e = e.sibling);
}
var mt = null,
  xn = !1;
function gr(e, t, n) {
  for (n = n.child; n !== null; ) vS(e, t, n), (n = n.sibling);
}
function vS(e, t, n) {
  if (zn && typeof zn.onCommitFiberUnmount == "function")
    try {
      zn.onCommitFiberUnmount(Ru, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ct || ii(n, t);
    case 6:
      var r = mt,
        o = xn;
      (mt = null),
        gr(e, t, n),
        (mt = r),
        (xn = o),
        mt !== null &&
          (xn
            ? ((e = mt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : mt.removeChild(n.stateNode));
      break;
    case 18:
      mt !== null &&
        (xn
          ? ((e = mt),
            (n = n.stateNode),
            e.nodeType === 8
              ? cd(e.parentNode, n)
              : e.nodeType === 1 && cd(e, n),
            Fs(e))
          : cd(mt, n.stateNode));
      break;
    case 4:
      (r = mt),
        (o = xn),
        (mt = n.stateNode.containerInfo),
        (xn = !0),
        gr(e, t, n),
        (mt = r),
        (xn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ct &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Af(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      gr(e, t, n);
      break;
    case 1:
      if (
        !Ct &&
        (ii(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Je(n, t, a);
        }
      gr(e, t, n);
      break;
    case 21:
      gr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ct = (r = Ct) || n.memoizedState !== null), gr(e, t, n), (Ct = r))
        : gr(e, t, n);
      break;
    default:
      gr(e, t, n);
  }
}
function Mg(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new rk()),
      t.forEach(function (r) {
        var o = pk.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Sn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (mt = a.stateNode), (xn = !1);
              break e;
            case 3:
              (mt = a.stateNode.containerInfo), (xn = !0);
              break e;
            case 4:
              (mt = a.stateNode.containerInfo), (xn = !0);
              break e;
          }
          a = a.return;
        }
        if (mt === null) throw Error(U(160));
        vS(i, s, o), (mt = null), (xn = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        Je(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) SS(t, e), (t = t.sibling);
}
function SS(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Sn(t, e), In(e), r & 4)) {
        try {
          ws(3, e, e.return), _u(3, e);
        } catch (v) {
          Je(e, e.return, v);
        }
        try {
          ws(5, e, e.return);
        } catch (v) {
          Je(e, e.return, v);
        }
      }
      break;
    case 1:
      Sn(t, e), In(e), r & 512 && n !== null && ii(n, n.return);
      break;
    case 5:
      if (
        (Sn(t, e),
        In(e),
        r & 512 && n !== null && ii(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          _s(o, "");
        } catch (v) {
          Je(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && z0(o, i),
              rf(a, s);
            var u = rf(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === "style"
                ? K0(o, d)
                : c === "dangerouslySetInnerHTML"
                  ? V0(o, d)
                  : c === "children"
                    ? _s(o, d)
                    : Up(o, c, d, u);
            }
            switch (a) {
              case "input":
                Jd(o, i);
                break;
              case "textarea":
                U0(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? ai(o, !!i.multiple, g, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ai(o, !!i.multiple, i.defaultValue, !0)
                      : ai(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Ws] = i;
          } catch (v) {
            Je(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Sn(t, e), In(e), r & 4)) {
        if (e.stateNode === null) throw Error(U(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          Je(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Sn(t, e), In(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Fs(t.containerInfo);
        } catch (v) {
          Je(e, e.return, v);
        }
      break;
    case 4:
      Sn(t, e), In(e);
      break;
    case 13:
      Sn(t, e),
        In(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (wh = Ze())),
        r & 4 && Mg(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ct = (u = Ct) || c), Sn(t, e), (Ct = u)) : Sn(t, e),
        In(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (G = e, c = e.child; c !== null; ) {
            for (d = G = c; G !== null; ) {
              switch (((f = G), (g = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ws(4, f, f.return);
                  break;
                case 1:
                  ii(f, f.return);
                  var p = f.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (p.props = t.memoizedProps),
                        (p.state = t.memoizedState),
                        p.componentWillUnmount();
                    } catch (v) {
                      Je(r, n, v);
                    }
                  }
                  break;
                case 5:
                  ii(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    jg(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = f), (G = g)) : jg(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = H0("display", s)));
              } catch (v) {
                Je(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (v) {
                Je(e, e.return, v);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Sn(t, e), In(e), r & 4 && Mg(e);
      break;
    case 21:
      break;
    default:
      Sn(t, e), In(e);
  }
}
function In(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (yS(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(U(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (_s(o, ""), (r.flags &= -33));
          var i = _g(e);
          _f(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = _g(e);
          Lf(e, a, s);
          break;
        default:
          throw Error(U(161));
      }
    } catch (l) {
      Je(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ik(e, t, n) {
  (G = e), bS(e);
}
function bS(e, t, n) {
  for (var r = (e.mode & 1) !== 0; G !== null; ) {
    var o = G,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Ha;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || Ct;
        a = Ha;
        var u = Ct;
        if (((Ha = s), (Ct = l) && !u))
          for (G = o; G !== null; )
            (s = G),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Fg(o)
                : l !== null
                  ? ((l.return = s), (G = l))
                  : Fg(o);
        for (; i !== null; ) (G = i), bS(i), (i = i.sibling);
        (G = o), (Ha = a), (Ct = u);
      }
      Ng(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (G = i)) : Ng(e);
  }
}
function Ng(e) {
  for (; G !== null; ) {
    var t = G;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ct || _u(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ct)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : wn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && bg(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                bg(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Fs(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(U(163));
          }
        Ct || (t.flags & 512 && If(t));
      } catch (f) {
        Je(t, t.return, f);
      }
    }
    if (t === e) {
      G = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (G = n);
      break;
    }
    G = t.return;
  }
}
function jg(e) {
  for (; G !== null; ) {
    var t = G;
    if (t === e) {
      G = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (G = n);
      break;
    }
    G = t.return;
  }
}
function Fg(e) {
  for (; G !== null; ) {
    var t = G;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _u(4, t);
          } catch (l) {
            Je(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Je(t, o, l);
            }
          }
          var i = t.return;
          try {
            If(t);
          } catch (l) {
            Je(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            If(t);
          } catch (l) {
            Je(t, s, l);
          }
      }
    } catch (l) {
      Je(t, t.return, l);
    }
    if (t === e) {
      G = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (G = a);
      break;
    }
    G = t.return;
  }
}
var sk = Math.ceil,
  Wl = pr.ReactCurrentDispatcher,
  Sh = pr.ReactCurrentOwner,
  hn = pr.ReactCurrentBatchConfig,
  Se = 0,
  ct = null,
  it = null,
  yt = 0,
  Kt = 0,
  si = Ur(0),
  at = 0,
  Xs = null,
  vo = 0,
  Mu = 0,
  bh = 0,
  xs = null,
  _t = null,
  wh = 0,
  ki = 1 / 0,
  Qn = null,
  Vl = !1,
  Mf = null,
  Ar = null,
  Ka = !1,
  Er = null,
  Hl = 0,
  Cs = 0,
  Nf = null,
  hl = -1,
  ml = 0;
function At() {
  return Se & 6 ? Ze() : hl !== -1 ? hl : (hl = Ze());
}
function Ir(e) {
  return e.mode & 1
    ? Se & 2 && yt !== 0
      ? yt & -yt
      : WE.transition !== null
        ? (ml === 0 && (ml = o1()), ml)
        : ((e = Re),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : d1(e.type))),
          e)
    : 1;
}
function Tn(e, t, n, r) {
  if (50 < Cs) throw ((Cs = 0), (Nf = null), Error(U(185)));
  ma(e, n, r),
    (!(Se & 2) || e !== ct) &&
      (e === ct && (!(Se & 2) && (Mu |= n), at === 4 && xr(e, yt)),
      Dt(e, r),
      n === 1 && Se === 0 && !(t.mode & 1) && ((ki = Ze() + 500), Au && Wr()));
}
function Dt(e, t) {
  var n = e.callbackNode;
  WC(e, t);
  var r = Pl(e, e === ct ? yt : 0);
  if (r === 0)
    n !== null && Gm(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Gm(n), t === 1))
      e.tag === 0 ? UE(Dg.bind(null, e)) : $1(Dg.bind(null, e)),
        FE(function () {
          !(Se & 6) && Wr();
        }),
        (n = null);
    else {
      switch (i1(r)) {
        case 1:
          n = Gp;
          break;
        case 4:
          n = n1;
          break;
        case 16:
          n = Tl;
          break;
        case 536870912:
          n = r1;
          break;
        default:
          n = Tl;
      }
      n = PS(n, wS.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function wS(e, t) {
  if (((hl = -1), (ml = 0), Se & 6)) throw Error(U(327));
  var n = e.callbackNode;
  if (fi() && e.callbackNode !== n) return null;
  var r = Pl(e, e === ct ? yt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Kl(e, r);
  else {
    t = r;
    var o = Se;
    Se |= 2;
    var i = CS();
    (ct !== e || yt !== t) && ((Qn = null), (ki = Ze() + 500), uo(e, t));
    do
      try {
        uk();
        break;
      } catch (a) {
        xS(e, a);
      }
    while (!0);
    sh(),
      (Wl.current = i),
      (Se = o),
      it !== null ? (t = 0) : ((ct = null), (yt = 0), (t = at));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = uf(e)), o !== 0 && ((r = o), (t = jf(e, o)))), t === 1)
    )
      throw ((n = Xs), uo(e, 0), xr(e, r), Dt(e, Ze()), n);
    if (t === 6) xr(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !ak(o) &&
          ((t = Kl(e, r)),
          t === 2 && ((i = uf(e)), i !== 0 && ((r = i), (t = jf(e, i)))),
          t === 1))
      )
        throw ((n = Xs), uo(e, 0), xr(e, r), Dt(e, Ze()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(U(345));
        case 2:
          Zr(e, _t, Qn);
          break;
        case 3:
          if (
            (xr(e, r), (r & 130023424) === r && ((t = wh + 500 - Ze()), 10 < t))
          ) {
            if (Pl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              At(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = yf(Zr.bind(null, e, _t, Qn), t);
            break;
          }
          Zr(e, _t, Qn);
          break;
        case 4:
          if ((xr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Rn(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Ze() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * sk(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = yf(Zr.bind(null, e, _t, Qn), r);
            break;
          }
          Zr(e, _t, Qn);
          break;
        case 5:
          Zr(e, _t, Qn);
          break;
        default:
          throw Error(U(329));
      }
    }
  }
  return Dt(e, Ze()), e.callbackNode === n ? wS.bind(null, e) : null;
}
function jf(e, t) {
  var n = xs;
  return (
    e.current.memoizedState.isDehydrated && (uo(e, t).flags |= 256),
    (e = Kl(e, t)),
    e !== 2 && ((t = _t), (_t = n), t !== null && Ff(t)),
    e
  );
}
function Ff(e) {
  _t === null ? (_t = e) : _t.push.apply(_t, e);
}
function ak(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Pn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function xr(e, t) {
  for (
    t &= ~bh,
      t &= ~Mu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Rn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Dg(e) {
  if (Se & 6) throw Error(U(327));
  fi();
  var t = Pl(e, 0);
  if (!(t & 1)) return Dt(e, Ze()), null;
  var n = Kl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = uf(e);
    r !== 0 && ((t = r), (n = jf(e, r)));
  }
  if (n === 1) throw ((n = Xs), uo(e, 0), xr(e, t), Dt(e, Ze()), n);
  if (n === 6) throw Error(U(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Zr(e, _t, Qn),
    Dt(e, Ze()),
    null
  );
}
function xh(e, t) {
  var n = Se;
  Se |= 1;
  try {
    return e(t);
  } finally {
    (Se = n), Se === 0 && ((ki = Ze() + 500), Au && Wr());
  }
}
function So(e) {
  Er !== null && Er.tag === 0 && !(Se & 6) && fi();
  var t = Se;
  Se |= 1;
  var n = hn.transition,
    r = Re;
  try {
    if (((hn.transition = null), (Re = 1), e)) return e();
  } finally {
    (Re = r), (hn.transition = n), (Se = t), !(Se & 6) && Wr();
  }
}
function Ch() {
  (Kt = si.current), Be(si);
}
function uo(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), jE(n)), it !== null))
    for (n = it.return; n !== null; ) {
      var r = n;
      switch ((rh(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ll();
          break;
        case 3:
          Ci(), Be(jt), Be(kt), fh();
          break;
        case 5:
          dh(r);
          break;
        case 4:
          Ci();
          break;
        case 13:
          Be(Ke);
          break;
        case 19:
          Be(Ke);
          break;
        case 10:
          ah(r.type._context);
          break;
        case 22:
        case 23:
          Ch();
      }
      n = n.return;
    }
  if (
    ((ct = e),
    (it = e = Lr(e.current, null)),
    (yt = Kt = t),
    (at = 0),
    (Xs = null),
    (bh = Mu = vo = 0),
    (_t = xs = null),
    io !== null)
  ) {
    for (t = 0; t < io.length; t++)
      if (((n = io[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    io = null;
  }
  return e;
}
function xS(e, t) {
  do {
    var n = it;
    try {
      if ((sh(), (dl.current = Ul), zl)) {
        for (var r = Ge.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        zl = !1;
      }
      if (
        ((yo = 0),
        (ut = st = Ge = null),
        (bs = !1),
        (Ks = 0),
        (Sh.current = null),
        n === null || n.return === null)
      ) {
        (at = 1), (Xs = t), (it = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = yt),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Rg(s);
          if (g !== null) {
            (g.flags &= -257),
              Tg(g, s, a, i, t),
              g.mode & 1 && kg(i, u, t),
              (t = g),
              (l = u);
            var p = t.updateQueue;
            if (p === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else p.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              kg(i, u, t), Eh();
              break e;
            }
            l = Error(U(426));
          }
        } else if (We && a.mode & 1) {
          var x = Rg(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              Tg(x, s, a, i, t),
              oh(Ei(l, a));
            break e;
          }
        }
        (i = l = Ei(l, a)),
          at !== 4 && (at = 2),
          xs === null ? (xs = [i]) : xs.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = iS(i, l, t);
              Sg(i, m);
              break e;
            case 1:
              a = l;
              var y = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof y.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Ar === null || !Ar.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var b = sS(i, a, t);
                Sg(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      kS(n);
    } catch (C) {
      (t = C), it === n && n !== null && (it = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function CS() {
  var e = Wl.current;
  return (Wl.current = Ul), e === null ? Ul : e;
}
function Eh() {
  (at === 0 || at === 3 || at === 2) && (at = 4),
    ct === null || (!(vo & 268435455) && !(Mu & 268435455)) || xr(ct, yt);
}
function Kl(e, t) {
  var n = Se;
  Se |= 2;
  var r = CS();
  (ct !== e || yt !== t) && ((Qn = null), uo(e, t));
  do
    try {
      lk();
      break;
    } catch (o) {
      xS(e, o);
    }
  while (!0);
  if ((sh(), (Se = n), (Wl.current = r), it !== null)) throw Error(U(261));
  return (ct = null), (yt = 0), at;
}
function lk() {
  for (; it !== null; ) ES(it);
}
function uk() {
  for (; it !== null && !_C(); ) ES(it);
}
function ES(e) {
  var t = TS(e.alternate, e, Kt);
  (e.memoizedProps = e.pendingProps),
    t === null ? kS(e) : (it = t),
    (Sh.current = null);
}
function kS(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = nk(n, t)), n !== null)) {
        (n.flags &= 32767), (it = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (at = 6), (it = null);
        return;
      }
    } else if (((n = tk(n, t, Kt)), n !== null)) {
      it = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      it = t;
      return;
    }
    it = t = e;
  } while (t !== null);
  at === 0 && (at = 5);
}
function Zr(e, t, n) {
  var r = Re,
    o = hn.transition;
  try {
    (hn.transition = null), (Re = 1), ck(e, t, n, r);
  } finally {
    (hn.transition = o), (Re = r);
  }
  return null;
}
function ck(e, t, n, r) {
  do fi();
  while (Er !== null);
  if (Se & 6) throw Error(U(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(U(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (VC(e, i),
    e === ct && ((it = ct = null), (yt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ka ||
      ((Ka = !0),
      PS(Tl, function () {
        return fi(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = hn.transition), (hn.transition = null);
    var s = Re;
    Re = 1;
    var a = Se;
    (Se |= 4),
      (Sh.current = null),
      ok(e, n),
      SS(n, e),
      $E(mf),
      (Ol = !!hf),
      (mf = hf = null),
      (e.current = n),
      ik(n),
      MC(),
      (Se = a),
      (Re = s),
      (hn.transition = i);
  } else e.current = n;
  if (
    (Ka && ((Ka = !1), (Er = e), (Hl = o)),
    (i = e.pendingLanes),
    i === 0 && (Ar = null),
    FC(n.stateNode),
    Dt(e, Ze()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Vl) throw ((Vl = !1), (e = Mf), (Mf = null), e);
  return (
    Hl & 1 && e.tag !== 0 && fi(),
    (i = e.pendingLanes),
    i & 1 ? (e === Nf ? Cs++ : ((Cs = 0), (Nf = e))) : (Cs = 0),
    Wr(),
    null
  );
}
function fi() {
  if (Er !== null) {
    var e = i1(Hl),
      t = hn.transition,
      n = Re;
    try {
      if (((hn.transition = null), (Re = 16 > e ? 16 : e), Er === null))
        var r = !1;
      else {
        if (((e = Er), (Er = null), (Hl = 0), Se & 6)) throw Error(U(331));
        var o = Se;
        for (Se |= 4, G = e.current; G !== null; ) {
          var i = G,
            s = i.child;
          if (G.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (G = u; G !== null; ) {
                  var c = G;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ws(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (G = d);
                  else
                    for (; G !== null; ) {
                      c = G;
                      var f = c.sibling,
                        g = c.return;
                      if ((gS(c), c === u)) {
                        G = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = g), (G = f);
                        break;
                      }
                      G = g;
                    }
                }
              }
              var p = i.alternate;
              if (p !== null) {
                var v = p.child;
                if (v !== null) {
                  p.child = null;
                  do {
                    var x = v.sibling;
                    (v.sibling = null), (v = x);
                  } while (v !== null);
                }
              }
              G = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (G = s);
          else
            e: for (; G !== null; ) {
              if (((i = G), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ws(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (G = m);
                break e;
              }
              G = i.return;
            }
        }
        var y = e.current;
        for (G = y; G !== null; ) {
          s = G;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) (h.return = s), (G = h);
          else
            e: for (s = y; G !== null; ) {
              if (((a = G), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _u(9, a);
                  }
                } catch (C) {
                  Je(a, a.return, C);
                }
              if (a === s) {
                G = null;
                break e;
              }
              var b = a.sibling;
              if (b !== null) {
                (b.return = a.return), (G = b);
                break e;
              }
              G = a.return;
            }
        }
        if (
          ((Se = o), Wr(), zn && typeof zn.onPostCommitFiberRoot == "function")
        )
          try {
            zn.onPostCommitFiberRoot(Ru, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Re = n), (hn.transition = t);
    }
  }
  return !1;
}
function Bg(e, t, n) {
  (t = Ei(n, t)),
    (t = iS(e, t, 1)),
    (e = $r(e, t, 1)),
    (t = At()),
    e !== null && (ma(e, 1, t), Dt(e, t));
}
function Je(e, t, n) {
  if (e.tag === 3) Bg(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Bg(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ar === null || !Ar.has(r)))
        ) {
          (e = Ei(n, e)),
            (e = sS(t, e, 1)),
            (t = $r(t, e, 1)),
            (e = At()),
            t !== null && (ma(t, 1, e), Dt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function dk(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = At()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ct === e &&
      (yt & n) === n &&
      (at === 4 || (at === 3 && (yt & 130023424) === yt && 500 > Ze() - wh)
        ? uo(e, 0)
        : (bh |= n)),
    Dt(e, t);
}
function RS(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Na), (Na <<= 1), !(Na & 130023424) && (Na = 4194304))
      : (t = 1));
  var n = At();
  (e = ar(e, t)), e !== null && (ma(e, t, n), Dt(e, n));
}
function fk(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), RS(e, n);
}
function pk(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(U(314));
  }
  r !== null && r.delete(t), RS(e, n);
}
var TS;
TS = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || jt.current) Nt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Nt = !1), ek(e, t, n);
      Nt = !!(e.flags & 131072);
    }
  else (Nt = !1), We && t.flags & 1048576 && A1(t, Nl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      pl(e, t), (e = t.pendingProps);
      var o = bi(t, kt.current);
      di(t, n), (o = hh(null, t, r, e, o, n));
      var i = mh();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ft(r) ? ((i = !0), _l(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            uh(t),
            (o.updater = Lu),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ef(t, r, e, n),
            (t = Tf(null, t, r, !0, i, n)))
          : ((t.tag = 0), We && i && nh(t), Ot(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (pl(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = mk(r)),
          (e = wn(r, e)),
          o)
        ) {
          case 0:
            t = Rf(null, t, r, e, n);
            break e;
          case 1:
            t = $g(null, t, r, e, n);
            break e;
          case 11:
            t = Pg(null, t, r, e, n);
            break e;
          case 14:
            t = Og(null, t, r, wn(r.type, e), n);
            break e;
        }
        throw Error(U(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : wn(r, o)),
        Rf(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : wn(r, o)),
        $g(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((cS(t), e === null)) throw Error(U(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          j1(e, t),
          Dl(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Ei(Error(U(423)), t)), (t = Ag(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Ei(Error(U(424)), t)), (t = Ag(e, t, r, n, o));
            break e;
          } else
            for (
              qt = Or(t.stateNode.containerInfo.firstChild),
                Qt = t,
                We = !0,
                Cn = null,
                n = M1(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((wi(), r === o)) {
            t = lr(e, t, n);
            break e;
          }
          Ot(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        F1(t),
        e === null && wf(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        gf(r, o) ? (s = null) : i !== null && gf(r, i) && (t.flags |= 32),
        uS(e, t),
        Ot(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && wf(t), null;
    case 13:
      return dS(e, t, n);
    case 4:
      return (
        ch(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = xi(t, null, r, n)) : Ot(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : wn(r, o)),
        Pg(e, t, r, o, n)
      );
    case 7:
      return Ot(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ot(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ot(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          Ne(jl, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Pn(i.value, s)) {
            if (i.children === o.children && !jt.current) {
              t = lr(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = nr(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      xf(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(U(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  xf(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Ot(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        di(t, n),
        (o = mn(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ot(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = wn(r, t.pendingProps)),
        (o = wn(r.type, o)),
        Og(e, t, r, o, n)
      );
    case 15:
      return aS(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : wn(r, o)),
        pl(e, t),
        (t.tag = 1),
        Ft(r) ? ((e = !0), _l(t)) : (e = !1),
        di(t, n),
        oS(t, r, o),
        Ef(t, r, o, n),
        Tf(null, t, r, !0, e, n)
      );
    case 19:
      return fS(e, t, n);
    case 22:
      return lS(e, t, n);
  }
  throw Error(U(156, t.tag));
};
function PS(e, t) {
  return t1(e, t);
}
function hk(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function pn(e, t, n, r) {
  return new hk(e, t, n, r);
}
function kh(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function mk(e) {
  if (typeof e == "function") return kh(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Vp)) return 11;
    if (e === Hp) return 14;
  }
  return 2;
}
function Lr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = pn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function gl(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) kh(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Qo:
        return co(n.children, o, i, t);
      case Wp:
        (s = 8), (o |= 8);
        break;
      case Gd:
        return (
          (e = pn(12, n, t, o | 2)), (e.elementType = Gd), (e.lanes = i), e
        );
      case qd:
        return (e = pn(13, n, t, o)), (e.elementType = qd), (e.lanes = i), e;
      case Xd:
        return (e = pn(19, n, t, o)), (e.elementType = Xd), (e.lanes = i), e;
      case F0:
        return Nu(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case N0:
              s = 10;
              break e;
            case j0:
              s = 9;
              break e;
            case Vp:
              s = 11;
              break e;
            case Hp:
              s = 14;
              break e;
            case Sr:
              (s = 16), (r = null);
              break e;
          }
        throw Error(U(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = pn(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function co(e, t, n, r) {
  return (e = pn(7, e, r, t)), (e.lanes = n), e;
}
function Nu(e, t, n, r) {
  return (
    (e = pn(22, e, r, t)),
    (e.elementType = F0),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function vd(e, t, n) {
  return (e = pn(6, e, null, t)), (e.lanes = n), e;
}
function Sd(e, t, n) {
  return (
    (t = pn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function gk(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Zc(0)),
    (this.expirationTimes = Zc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Zc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Rh(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new gk(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = pn(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    uh(i),
    e
  );
}
function yk(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Xo,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function OS(e) {
  if (!e) return Nr;
  e = e._reactInternals;
  e: {
    if ($o(e) !== e || e.tag !== 1) throw Error(U(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ft(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(U(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ft(n)) return O1(e, n, t);
  }
  return t;
}
function $S(e, t, n, r, o, i, s, a, l) {
  return (
    (e = Rh(n, r, !0, e, o, i, s, a, l)),
    (e.context = OS(null)),
    (n = e.current),
    (r = At()),
    (o = Ir(n)),
    (i = nr(r, o)),
    (i.callback = t ?? null),
    $r(n, i, o),
    (e.current.lanes = o),
    ma(e, o, r),
    Dt(e, r),
    e
  );
}
function ju(e, t, n, r) {
  var o = t.current,
    i = At(),
    s = Ir(o);
  return (
    (n = OS(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = nr(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = $r(o, t, s)),
    e !== null && (Tn(e, o, s, i), cl(e, o, s)),
    s
  );
}
function Gl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function zg(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Th(e, t) {
  zg(e, t), (e = e.alternate) && zg(e, t);
}
function vk() {
  return null;
}
var AS =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ph(e) {
  this._internalRoot = e;
}
Fu.prototype.render = Ph.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(U(409));
  ju(e, t, null, null);
};
Fu.prototype.unmount = Ph.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    So(function () {
      ju(null, e, null, null);
    }),
      (t[sr] = null);
  }
};
function Fu(e) {
  this._internalRoot = e;
}
Fu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = l1();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < wr.length && t !== 0 && t < wr[n].priority; n++);
    wr.splice(n, 0, e), n === 0 && c1(e);
  }
};
function Oh(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Du(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ug() {}
function Sk(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Gl(s);
        i.call(u);
      };
    }
    var s = $S(t, r, e, 0, null, !1, !1, "", Ug);
    return (
      (e._reactRootContainer = s),
      (e[sr] = s.current),
      zs(e.nodeType === 8 ? e.parentNode : e),
      So(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Gl(l);
      a.call(u);
    };
  }
  var l = Rh(e, 0, !1, null, null, !1, !1, "", Ug);
  return (
    (e._reactRootContainer = l),
    (e[sr] = l.current),
    zs(e.nodeType === 8 ? e.parentNode : e),
    So(function () {
      ju(t, l, n, r);
    }),
    l
  );
}
function Bu(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = Gl(s);
        a.call(l);
      };
    }
    ju(t, s, e, o);
  } else s = Sk(n, t, e, o, r);
  return Gl(s);
}
s1 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = as(t.pendingLanes);
        n !== 0 &&
          (qp(t, n | 1), Dt(t, Ze()), !(Se & 6) && ((ki = Ze() + 500), Wr()));
      }
      break;
    case 13:
      So(function () {
        var r = ar(e, 1);
        if (r !== null) {
          var o = At();
          Tn(r, e, 1, o);
        }
      }),
        Th(e, 1);
  }
};
Xp = function (e) {
  if (e.tag === 13) {
    var t = ar(e, 134217728);
    if (t !== null) {
      var n = At();
      Tn(t, e, 134217728, n);
    }
    Th(e, 134217728);
  }
};
a1 = function (e) {
  if (e.tag === 13) {
    var t = Ir(e),
      n = ar(e, t);
    if (n !== null) {
      var r = At();
      Tn(n, e, t, r);
    }
    Th(e, t);
  }
};
l1 = function () {
  return Re;
};
u1 = function (e, t) {
  var n = Re;
  try {
    return (Re = e), t();
  } finally {
    Re = n;
  }
};
sf = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Jd(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = $u(r);
            if (!o) throw Error(U(90));
            B0(r), Jd(r, o);
          }
        }
      }
      break;
    case "textarea":
      U0(e, n);
      break;
    case "select":
      (t = n.value), t != null && ai(e, !!n.multiple, t, !1);
  }
};
X0 = xh;
Q0 = So;
var bk = { usingClientEntryPoint: !1, Events: [ya, ei, $u, G0, q0, xh] },
  Qi = {
    findFiberByHostInstance: oo,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  wk = {
    bundleType: Qi.bundleType,
    version: Qi.version,
    rendererPackageName: Qi.rendererPackageName,
    rendererConfig: Qi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: pr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Z0(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Qi.findFiberByHostInstance || vk,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ga = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ga.isDisabled && Ga.supportsFiber)
    try {
      (Ru = Ga.inject(wk)), (zn = Ga);
    } catch {}
}
nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bk;
nn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Oh(t)) throw Error(U(200));
  return yk(e, t, null, n);
};
nn.createRoot = function (e, t) {
  if (!Oh(e)) throw Error(U(299));
  var n = !1,
    r = "",
    o = AS;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Rh(e, 1, !1, null, null, n, !1, r, o)),
    (e[sr] = t.current),
    zs(e.nodeType === 8 ? e.parentNode : e),
    new Ph(t)
  );
};
nn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(U(188))
      : ((e = Object.keys(e).join(",")), Error(U(268, e)));
  return (e = Z0(t)), (e = e === null ? null : e.stateNode), e;
};
nn.flushSync = function (e) {
  return So(e);
};
nn.hydrate = function (e, t, n) {
  if (!Du(t)) throw Error(U(200));
  return Bu(null, e, t, !0, n);
};
nn.hydrateRoot = function (e, t, n) {
  if (!Oh(e)) throw Error(U(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = AS;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = $S(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[sr] = t.current),
    zs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Fu(t);
};
nn.render = function (e, t, n) {
  if (!Du(t)) throw Error(U(200));
  return Bu(null, e, t, !1, n);
};
nn.unmountComponentAtNode = function (e) {
  if (!Du(e)) throw Error(U(40));
  return e._reactRootContainer
    ? (So(function () {
        Bu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[sr] = null);
        });
      }),
      !0)
    : !1;
};
nn.unstable_batchedUpdates = xh;
nn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Du(n)) throw Error(U(200));
  if (e == null || e._reactInternals === void 0) throw Error(U(38));
  return Bu(e, t, n, !1, r);
};
nn.version = "18.3.1-next-f1338f8080-20240426";
function IS() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(IS);
    } catch (e) {
      console.error(e);
    }
}
IS(), (I0.exports = nn);
var $h = I0.exports;
const qa = Mp($h);
var Wg = $h;
(Hd.createRoot = Wg.createRoot), (Hd.hydrateRoot = Wg.hydrateRoot);
const Qs = { black: "#000", white: "#fff" },
  Do = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  Bo = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  zo = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  Uo = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Wo = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  Yi = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  xk = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  };
function ur(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return (
    t.forEach((r) => n.searchParams.append("args[]", r)),
    `Minified MUI error #${e}; visit ${n} for the full message.`
  );
}
const rr = "$$material";
function ql() {
  return (
    (ql = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ql.apply(null, arguments)
  );
}
function LS(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Ck =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Ek = LS(function (e) {
    return (
      Ck.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  kk = !1;
function Rk(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Tk(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var Pk = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
              ? (i = r.container.firstChild)
              : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !kk : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Tk(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = Rk(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          var o;
          return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  xt = "-ms-",
  Xl = "-moz-",
  xe = "-webkit-",
  _S = "comm",
  Ah = "rule",
  Ih = "decl",
  Ok = "@import",
  MS = "@keyframes",
  $k = "@layer",
  Ak = Math.abs,
  zu = String.fromCharCode,
  Ik = Object.assign;
function Lk(e, t) {
  return gt(e, 0) ^ 45
    ? (((((((t << 2) ^ gt(e, 0)) << 2) ^ gt(e, 1)) << 2) ^ gt(e, 2)) << 2) ^
        gt(e, 3)
    : 0;
}
function NS(e) {
  return e.trim();
}
function _k(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ce(e, t, n) {
  return e.replace(t, n);
}
function Df(e, t) {
  return e.indexOf(t);
}
function gt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ys(e, t, n) {
  return e.slice(t, n);
}
function Nn(e) {
  return e.length;
}
function Lh(e) {
  return e.length;
}
function Xa(e, t) {
  return t.push(e), e;
}
function Mk(e, t) {
  return e.map(t).join("");
}
var Uu = 1,
  Ri = 1,
  jS = 0,
  Wt = 0,
  ot = 0,
  _i = "";
function Wu(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Uu,
    column: Ri,
    length: s,
    return: "",
  };
}
function Ji(e, t) {
  return Ik(Wu("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Nk() {
  return ot;
}
function jk() {
  return (
    (ot = Wt > 0 ? gt(_i, --Wt) : 0), Ri--, ot === 10 && ((Ri = 1), Uu--), ot
  );
}
function Yt() {
  return (
    (ot = Wt < jS ? gt(_i, Wt++) : 0), Ri++, ot === 10 && ((Ri = 1), Uu++), ot
  );
}
function Wn() {
  return gt(_i, Wt);
}
function yl() {
  return Wt;
}
function Sa(e, t) {
  return Ys(_i, e, t);
}
function Js(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function FS(e) {
  return (Uu = Ri = 1), (jS = Nn((_i = e))), (Wt = 0), [];
}
function DS(e) {
  return (_i = ""), e;
}
function vl(e) {
  return NS(Sa(Wt - 1, Bf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Fk(e) {
  for (; (ot = Wn()) && ot < 33; ) Yt();
  return Js(e) > 2 || Js(ot) > 3 ? "" : " ";
}
function Dk(e, t) {
  for (
    ;
    --t &&
    Yt() &&
    !(ot < 48 || ot > 102 || (ot > 57 && ot < 65) || (ot > 70 && ot < 97));

  );
  return Sa(e, yl() + (t < 6 && Wn() == 32 && Yt() == 32));
}
function Bf(e) {
  for (; Yt(); )
    switch (ot) {
      case e:
        return Wt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Bf(ot);
        break;
      case 40:
        e === 41 && Bf(e);
        break;
      case 92:
        Yt();
        break;
    }
  return Wt;
}
function Bk(e, t) {
  for (; Yt() && e + ot !== 57; ) if (e + ot === 84 && Wn() === 47) break;
  return "/*" + Sa(t, Wt - 1) + "*" + zu(e === 47 ? e : Yt());
}
function zk(e) {
  for (; !Js(Wn()); ) Yt();
  return Sa(e, Wt);
}
function Uk(e) {
  return DS(Sl("", null, null, null, [""], (e = FS(e)), 0, [0], e));
}
function Sl(e, t, n, r, o, i, s, a, l) {
  for (
    var u = 0,
      c = 0,
      d = s,
      f = 0,
      g = 0,
      p = 0,
      v = 1,
      x = 1,
      m = 1,
      y = 0,
      h = "",
      b = o,
      C = i,
      k = r,
      E = h;
    x;

  )
    switch (((p = y), (y = Yt()))) {
      case 40:
        if (p != 108 && gt(E, d - 1) == 58) {
          Df((E += Ce(vl(y), "&", "&\f")), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += vl(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += Fk(p);
        break;
      case 92:
        E += Dk(yl() - 1, 7);
        continue;
      case 47:
        switch (Wn()) {
          case 42:
          case 47:
            Xa(Wk(Bk(Yt(), yl()), t, n), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * v:
        a[u++] = Nn(E) * m;
      case 125 * v:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            x = 0;
          case 59 + c:
            m == -1 && (E = Ce(E, /\f/g, "")),
              g > 0 &&
                Nn(E) - d &&
                Xa(
                  g > 32
                    ? Hg(E + ";", r, n, d - 1)
                    : Hg(Ce(E, " ", "") + ";", r, n, d - 2),
                  l,
                );
            break;
          case 59:
            E += ";";
          default:
            if (
              (Xa((k = Vg(E, t, n, u, c, o, a, h, (b = []), (C = []), d)), i),
              y === 123)
            )
              if (c === 0) Sl(E, t, k, k, b, i, d, a, C);
              else
                switch (f === 99 && gt(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Sl(
                      e,
                      k,
                      k,
                      r && Xa(Vg(e, k, k, 0, 0, o, a, h, o, (b = []), d), C),
                      o,
                      C,
                      d,
                      a,
                      r ? b : C,
                    );
                    break;
                  default:
                    Sl(E, k, k, k, [""], C, 0, a, C);
                }
        }
        (u = c = g = 0), (v = m = 1), (h = E = ""), (d = s);
        break;
      case 58:
        (d = 1 + Nn(E)), (g = p);
      default:
        if (v < 1) {
          if (y == 123) --v;
          else if (y == 125 && v++ == 0 && jk() == 125) continue;
        }
        switch (((E += zu(y)), y * v)) {
          case 38:
            m = c > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            (a[u++] = (Nn(E) - 1) * m), (m = 1);
            break;
          case 64:
            Wn() === 45 && (E += vl(Yt())),
              (f = Wn()),
              (c = d = Nn((h = E += zk(yl())))),
              y++;
            break;
          case 45:
            p === 45 && Nn(E) == 2 && (v = 0);
        }
    }
  return i;
}
function Vg(e, t, n, r, o, i, s, a, l, u, c) {
  for (
    var d = o - 1, f = o === 0 ? i : [""], g = Lh(f), p = 0, v = 0, x = 0;
    p < r;
    ++p
  )
    for (var m = 0, y = Ys(e, d + 1, (d = Ak((v = s[p])))), h = e; m < g; ++m)
      (h = NS(v > 0 ? f[m] + " " + y : Ce(y, /&\f/g, f[m]))) && (l[x++] = h);
  return Wu(e, t, n, o === 0 ? Ah : a, l, u, c);
}
function Wk(e, t, n) {
  return Wu(e, t, n, _S, zu(Nk()), Ys(e, 2, -2), 0);
}
function Hg(e, t, n, r) {
  return Wu(e, t, n, Ih, Ys(e, 0, r), Ys(e, r + 1, -1), r);
}
function pi(e, t) {
  for (var n = "", r = Lh(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function Vk(e, t, n, r) {
  switch (e.type) {
    case $k:
      if (e.children.length) break;
    case Ok:
    case Ih:
      return (e.return = e.return || e.value);
    case _S:
      return "";
    case MS:
      return (e.return = e.value + "{" + pi(e.children, r) + "}");
    case Ah:
      e.value = e.props.join(",");
  }
  return Nn((n = pi(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function Hk(e) {
  var t = Lh(e);
  return function (n, r, o, i) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, o, i) || "";
    return s;
  };
}
function Kk(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var Gk = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = Wn()), o === 38 && i === 12 && (n[r] = 1), !Js(i);

    )
      Yt();
    return Sa(t, Wt);
  },
  qk = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Js(o)) {
        case 0:
          o === 38 && Wn() === 12 && (n[r] = 1), (t[r] += Gk(Wt - 1, n, r));
          break;
        case 2:
          t[r] += vl(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = Wn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += zu(o);
      }
    while ((o = Yt()));
    return t;
  },
  Xk = function (t, n) {
    return DS(qk(FS(t), n));
  },
  Kg = new WeakMap(),
  Qk = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Kg.get(r)) &&
        !o
      ) {
        Kg.set(t, !0);
        for (
          var i = [], s = Xk(n, i), a = r.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
      }
    }
  },
  Yk = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function BS(e, t) {
  switch (Lk(e, t)) {
    case 5103:
      return xe + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return xe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return xe + e + Xl + e + xt + e + e;
    case 6828:
    case 4268:
      return xe + e + xt + e + e;
    case 6165:
      return xe + e + xt + "flex-" + e + e;
    case 5187:
      return (
        xe + e + Ce(e, /(\w+).+(:[^]+)/, xe + "box-$1$2" + xt + "flex-$1$2") + e
      );
    case 5443:
      return xe + e + xt + "flex-item-" + Ce(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        xe +
        e +
        xt +
        "flex-line-pack" +
        Ce(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return xe + e + xt + Ce(e, "shrink", "negative") + e;
    case 5292:
      return xe + e + xt + Ce(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        xe +
        "box-" +
        Ce(e, "-grow", "") +
        xe +
        e +
        xt +
        Ce(e, "grow", "positive") +
        e
      );
    case 4554:
      return xe + Ce(e, /([^-])(transform)/g, "$1" + xe + "$2") + e;
    case 6187:
      return (
        Ce(
          Ce(Ce(e, /(zoom-|grab)/, xe + "$1"), /(image-set)/, xe + "$1"),
          e,
          "",
        ) + e
      );
    case 5495:
    case 3959:
      return Ce(e, /(image-set\([^]*)/, xe + "$1$`$1");
    case 4968:
      return (
        Ce(
          Ce(e, /(.+:)(flex-)?(.*)/, xe + "box-pack:$3" + xt + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        xe +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ce(e, /(.+)-inline(.+)/, xe + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Nn(e) - 1 - t > 6)
        switch (gt(e, t + 1)) {
          case 109:
            if (gt(e, t + 4) !== 45) break;
          case 102:
            return (
              Ce(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  xe +
                  "$2-$3$1" +
                  Xl +
                  (gt(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Df(e, "stretch")
              ? BS(Ce(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (gt(e, t + 1) !== 115) break;
    case 6444:
      switch (gt(e, Nn(e) - 3 - (~Df(e, "!important") && 10))) {
        case 107:
          return Ce(e, ":", ":" + xe) + e;
        case 101:
          return (
            Ce(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                xe +
                (gt(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                xe +
                "$2$3$1" +
                xt +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (gt(e, t + 11)) {
        case 114:
          return xe + e + xt + Ce(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return xe + e + xt + Ce(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return xe + e + xt + Ce(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return xe + e + xt + e + e;
  }
  return e;
}
var Jk = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Ih:
          t.return = BS(t.value, t.length);
          break;
        case MS:
          return pi([Ji(t, { value: Ce(t.value, "@", "@" + xe) })], o);
        case Ah:
          if (t.length)
            return Mk(t.props, function (i) {
              switch (_k(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return pi(
                    [Ji(t, { props: [Ce(i, /:(read-\w+)/, ":" + Xl + "$1")] })],
                    o,
                  );
                case "::placeholder":
                  return pi(
                    [
                      Ji(t, {
                        props: [Ce(i, /:(plac\w+)/, ":" + xe + "input-$1")],
                      }),
                      Ji(t, { props: [Ce(i, /:(plac\w+)/, ":" + Xl + "$1")] }),
                      Ji(t, { props: [Ce(i, /:(plac\w+)/, xt + "input-$1")] }),
                    ],
                    o,
                  );
              }
              return "";
            });
      }
  },
  Zk = [Jk],
  eR = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (v) {
        var x = v.getAttribute("data-emotion");
        x.indexOf(" ") !== -1 &&
          (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || Zk,
      i = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (v) {
          for (
            var x = v.getAttribute("data-emotion").split(" "), m = 1;
            m < x.length;
            m++
          )
            i[x[m]] = !0;
          a.push(v);
        },
      );
    var l,
      u = [Qk, Yk];
    {
      var c,
        d = [
          Vk,
          Kk(function (v) {
            c.insert(v);
          }),
        ],
        f = Hk(u.concat(o, d)),
        g = function (x) {
          return pi(Uk(x), f);
        };
      l = function (x, m, y, h) {
        (c = y),
          g(x ? x + "{" + m.styles + "}" : m.styles),
          h && (p.inserted[m.name] = !0);
      };
    }
    var p = {
      key: n,
      sheet: new Pk({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return p.sheet.hydrate(a), p;
  },
  zS = { exports: {} },
  Te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ft = typeof Symbol == "function" && Symbol.for,
  _h = ft ? Symbol.for("react.element") : 60103,
  Mh = ft ? Symbol.for("react.portal") : 60106,
  Vu = ft ? Symbol.for("react.fragment") : 60107,
  Hu = ft ? Symbol.for("react.strict_mode") : 60108,
  Ku = ft ? Symbol.for("react.profiler") : 60114,
  Gu = ft ? Symbol.for("react.provider") : 60109,
  qu = ft ? Symbol.for("react.context") : 60110,
  Nh = ft ? Symbol.for("react.async_mode") : 60111,
  Xu = ft ? Symbol.for("react.concurrent_mode") : 60111,
  Qu = ft ? Symbol.for("react.forward_ref") : 60112,
  Yu = ft ? Symbol.for("react.suspense") : 60113,
  tR = ft ? Symbol.for("react.suspense_list") : 60120,
  Ju = ft ? Symbol.for("react.memo") : 60115,
  Zu = ft ? Symbol.for("react.lazy") : 60116,
  nR = ft ? Symbol.for("react.block") : 60121,
  rR = ft ? Symbol.for("react.fundamental") : 60117,
  oR = ft ? Symbol.for("react.responder") : 60118,
  iR = ft ? Symbol.for("react.scope") : 60119;
function on(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case _h:
        switch (((e = e.type), e)) {
          case Nh:
          case Xu:
          case Vu:
          case Ku:
          case Hu:
          case Yu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case qu:
              case Qu:
              case Zu:
              case Ju:
              case Gu:
                return e;
              default:
                return t;
            }
        }
      case Mh:
        return t;
    }
  }
}
function US(e) {
  return on(e) === Xu;
}
Te.AsyncMode = Nh;
Te.ConcurrentMode = Xu;
Te.ContextConsumer = qu;
Te.ContextProvider = Gu;
Te.Element = _h;
Te.ForwardRef = Qu;
Te.Fragment = Vu;
Te.Lazy = Zu;
Te.Memo = Ju;
Te.Portal = Mh;
Te.Profiler = Ku;
Te.StrictMode = Hu;
Te.Suspense = Yu;
Te.isAsyncMode = function (e) {
  return US(e) || on(e) === Nh;
};
Te.isConcurrentMode = US;
Te.isContextConsumer = function (e) {
  return on(e) === qu;
};
Te.isContextProvider = function (e) {
  return on(e) === Gu;
};
Te.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === _h;
};
Te.isForwardRef = function (e) {
  return on(e) === Qu;
};
Te.isFragment = function (e) {
  return on(e) === Vu;
};
Te.isLazy = function (e) {
  return on(e) === Zu;
};
Te.isMemo = function (e) {
  return on(e) === Ju;
};
Te.isPortal = function (e) {
  return on(e) === Mh;
};
Te.isProfiler = function (e) {
  return on(e) === Ku;
};
Te.isStrictMode = function (e) {
  return on(e) === Hu;
};
Te.isSuspense = function (e) {
  return on(e) === Yu;
};
Te.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Vu ||
    e === Xu ||
    e === Ku ||
    e === Hu ||
    e === Yu ||
    e === tR ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Zu ||
        e.$$typeof === Ju ||
        e.$$typeof === Gu ||
        e.$$typeof === qu ||
        e.$$typeof === Qu ||
        e.$$typeof === rR ||
        e.$$typeof === oR ||
        e.$$typeof === iR ||
        e.$$typeof === nR))
  );
};
Te.typeOf = on;
zS.exports = Te;
var sR = zS.exports,
  WS = sR,
  aR = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  lR = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  VS = {};
VS[WS.ForwardRef] = aR;
VS[WS.Memo] = lR;
var uR = !0;
function cR(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
    }),
    r
  );
}
var HS = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || uR === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  KS = function (t, n, r) {
    HS(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function dR(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var fR = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  pR = !1,
  hR = /[A-Z]|^ms/g,
  mR = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  GS = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Gg = function (t) {
    return t != null && typeof t != "boolean";
  },
  bd = LS(function (e) {
    return GS(e) ? e : e.replace(hR, "-$&").toLowerCase();
  }),
  qg = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(mR, function (r, o, i) {
            return (jn = { name: o, styles: i, next: jn }), o;
          });
    }
    return fR[t] !== 1 && !GS(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  },
  gR =
    "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Zs(e, t, n) {
  if (n == null) return "";
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return (jn = { name: o.name, styles: o.styles, next: jn }), o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            (jn = { name: s.name, styles: s.styles, next: jn }), (s = s.next);
        var a = i.styles + ";";
        return a;
      }
      return yR(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = jn,
          u = n(e);
        return (jn = l), Zs(e, t, u);
      }
      break;
    }
  }
  var c = n;
  if (t == null) return c;
  var d = t[c];
  return d !== void 0 ? d : c;
}
function yR(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += Zs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0
          ? (r += i + "{" + t[a] + "}")
          : Gg(a) && (r += bd(i) + ":" + qg(i, a) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && pR) throw new Error(gR);
        if (
          Array.isArray(s) &&
          typeof s[0] == "string" &&
          (t == null || t[s[0]] === void 0)
        )
          for (var l = 0; l < s.length; l++)
            Gg(s[l]) && (r += bd(i) + ":" + qg(i, s[l]) + ";");
        else {
          var u = Zs(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              r += bd(i) + ":" + u + ";";
              break;
            }
            default:
              r += i + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var Xg = /label:\s*([^\s;{]+)\s*(;|$)/g,
  jn;
function ec(e, t, n) {
  if (
    e.length === 1 &&
    typeof e[0] == "object" &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0];
  var r = !0,
    o = "";
  jn = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) (r = !1), (o += Zs(n, t, i));
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (((o += Zs(n, t, e[a])), r)) {
      var l = i;
      o += l[a];
    }
  Xg.lastIndex = 0;
  for (var u = "", c; (c = Xg.exec(o)) !== null; ) u += "-" + c[1];
  var d = dR(o) + u;
  return { name: d, styles: o, next: jn };
}
var vR = function (t) {
    return t();
  },
  qS = vi.useInsertionEffect ? vi.useInsertionEffect : !1,
  SR = qS || vR,
  Qg = qS || S.useLayoutEffect,
  XS = S.createContext(typeof HTMLElement < "u" ? eR({ key: "css" }) : null);
XS.Provider;
var QS = function (t) {
    return S.forwardRef(function (n, r) {
      var o = S.useContext(XS);
      return t(n, o, r);
    });
  },
  tc = S.createContext({}),
  bR = QS(function (e, t) {
    var n = e.styles,
      r = ec([n], void 0, S.useContext(tc)),
      o = S.useRef();
    return (
      Qg(
        function () {
          var i = t.key + "-global",
            s = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            a = !1,
            l = document.querySelector(
              'style[data-emotion="' + i + " " + r.name + '"]',
            );
          return (
            t.sheet.tags.length && (s.before = t.sheet.tags[0]),
            l !== null &&
              ((a = !0), l.setAttribute("data-emotion", i), s.hydrate([l])),
            (o.current = [s, a]),
            function () {
              s.flush();
            }
          );
        },
        [t],
      ),
      Qg(
        function () {
          var i = o.current,
            s = i[0],
            a = i[1];
          if (a) {
            i[1] = !1;
            return;
          }
          if ((r.next !== void 0 && KS(t, r.next, !0), s.tags.length)) {
            var l = s.tags[s.tags.length - 1].nextElementSibling;
            (s.before = l), s.flush();
          }
          t.insert("", r, s, !1);
        },
        [t, r.name],
      ),
      null
    );
  });
function Mi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ec(t);
}
var Vr = function () {
    var t = Mi.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  wR = Ek,
  xR = function (t) {
    return t !== "theme";
  },
  Yg = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? wR : xR;
  },
  Jg = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  CR = !1,
  ER = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      HS(n, r, o),
      SR(function () {
        return KS(n, r, o);
      }),
      null
    );
  },
  kR = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s;
    n !== void 0 && ((i = n.label), (s = n.target));
    var a = Jg(t, n, r),
      l = a || Yg(o),
      u = !l("as");
    return function () {
      var c = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, g = 1; g < f; g++) d.push(c[g], c[0][g]);
      }
      var p = QS(function (v, x, m) {
        var y = (u && v.as) || o,
          h = "",
          b = [],
          C = v;
        if (v.theme == null) {
          C = {};
          for (var k in v) C[k] = v[k];
          C.theme = S.useContext(tc);
        }
        typeof v.className == "string"
          ? (h = cR(x.registered, b, v.className))
          : v.className != null && (h = v.className + " ");
        var E = ec(d.concat(b), x.registered, C);
        (h += x.key + "-" + E.name), s !== void 0 && (h += " " + s);
        var T = u && a === void 0 ? Yg(y) : l,
          $ = {};
        for (var w in v) (u && w === "as") || (T(w) && ($[w] = v[w]));
        return (
          ($.className = h),
          m && ($.ref = m),
          S.createElement(
            S.Fragment,
            null,
            S.createElement(ER, {
              cache: x,
              serialized: E,
              isStringTag: typeof y == "string",
            }),
            S.createElement(y, $),
          )
        );
      });
      return (
        (p.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (p.defaultProps = t.defaultProps),
        (p.__emotion_real = p),
        (p.__emotion_base = o),
        (p.__emotion_styles = d),
        (p.__emotion_forwardProp = a),
        Object.defineProperty(p, "toString", {
          value: function () {
            return s === void 0 && CR ? "NO_COMPONENT_SELECTOR" : "." + s;
          },
        }),
        (p.withComponent = function (v, x) {
          return e(v, ql({}, n, x, { shouldForwardProp: Jg(p, x, !0) })).apply(
            void 0,
            d,
          );
        }),
        p
      );
    };
  },
  RR = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  zf = kR.bind();
RR.forEach(function (e) {
  zf[e] = zf(e);
});
function TR(e) {
  return e == null || Object.keys(e).length === 0;
}
function YS(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == "function" ? (o) => t(TR(o) ? n : o) : t;
  return R.jsx(bR, { styles: r });
}
/**
 * @mui/styled-engine v6.1.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function PR(e, t) {
  return zf(e, t);
}
function OR(e, t) {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = t(e.__emotion_styles));
}
const Zg = [];
function ey(e) {
  return (Zg[0] = e), ec(Zg);
}
function Dn(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function JS(e) {
  if (!Dn(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = JS(e[n]);
    }),
    t
  );
}
function Et(e, t, n = { clone: !0 }) {
  const r = n.clone ? { ...e } : e;
  return (
    Dn(e) &&
      Dn(t) &&
      Object.keys(t).forEach((o) => {
        Dn(t[o]) && Object.prototype.hasOwnProperty.call(e, o) && Dn(e[o])
          ? (r[o] = Et(e[o], t[o], n))
          : n.clone
            ? (r[o] = Dn(t[o]) ? JS(t[o]) : t[o])
            : (r[o] = t[o]);
      }),
    r
  );
}
const $R = (e) => {
  const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
  return (
    t.sort((n, r) => n.val - r.val),
    t.reduce((n, r) => ({ ...n, [r.key]: r.val }), {})
  );
};
function AR(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
      ...o
    } = e,
    i = $R(t),
    s = Object.keys(i);
  function a(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function l(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - r / 100}${n})`;
  }
  function u(f, g) {
    const p = s.indexOf(g);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n}) and (max-width:${(p !== -1 && typeof t[s[p]] == "number" ? t[s[p]] : g) - r / 100}${n})`;
  }
  function c(f) {
    return s.indexOf(f) + 1 < s.length ? u(f, s[s.indexOf(f) + 1]) : a(f);
  }
  function d(f) {
    const g = s.indexOf(f);
    return g === 0
      ? a(s[1])
      : g === s.length - 1
        ? l(s[g])
        : u(f, s[s.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: a,
    down: l,
    between: u,
    only: c,
    not: d,
    unit: n,
    ...o,
  };
}
function IR(e, t) {
  if (!e.containerQueries) return t;
  const n = Object.keys(t)
    .filter((r) => r.startsWith("@container"))
    .sort((r, o) => {
      var s, a;
      const i = /min-width:\s*([0-9.]+)/;
      return (
        +(((s = r.match(i)) == null ? void 0 : s[1]) || 0) -
        +(((a = o.match(i)) == null ? void 0 : a[1]) || 0)
      );
    });
  return n.length
    ? n.reduce(
        (r, o) => {
          const i = t[o];
          return delete r[o], (r[o] = i), r;
        },
        { ...t },
      )
    : t;
}
function LR(e, t) {
  return (
    t === "@" ||
    (t.startsWith("@") &&
      (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/)))
  );
}
function _R(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) return null;
  const [, r, o] = n,
    i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function MR(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function n(i, s) {
    (i.up = (...a) => t(e.breakpoints.up(...a), s)),
      (i.down = (...a) => t(e.breakpoints.down(...a), s)),
      (i.between = (...a) => t(e.breakpoints.between(...a), s)),
      (i.only = (...a) => t(e.breakpoints.only(...a), s)),
      (i.not = (...a) => {
        const l = t(e.breakpoints.not(...a), s);
        return l.includes("not all and")
          ? l
              .replace("not all and ", "")
              .replace("min-width:", "width<")
              .replace("max-width:", "width>")
              .replace("and", "or")
          : l;
      });
  }
  const r = {},
    o = (i) => (n(r, i), r);
  return n(o), { ...e, containerQueries: o };
}
const NR = { borderRadius: 4 };
function Es(e, t) {
  return t ? Et(e, t, { clone: !1 }) : e;
}
const nc = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  ty = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${nc[e]}px)`,
  },
  jR = {
    containerQueries: (e) => ({
      up: (t) => {
        let n = typeof t == "number" ? t : nc[t] || t;
        return (
          typeof n == "number" && (n = `${n}px`),
          e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`
        );
      },
    }),
  };
function cr(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || ty;
    return t.reduce((s, a, l) => ((s[i.up(i.keys[l])] = n(t[l])), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || ty;
    return Object.keys(t).reduce((s, a) => {
      if (LR(i.keys, a)) {
        const l = _R(r.containerQueries ? r : jR, a);
        l && (s[l] = n(t[a], a));
      } else if (Object.keys(i.values || nc).includes(a)) {
        const l = i.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function FR(e = {}) {
  var n;
  return (
    ((n = e.keys) == null
      ? void 0
      : n.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function DR(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function z(e) {
  if (typeof e != "string") throw new Error(ur(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function rc(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function Ql(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
        ? (o = e[n] || r)
        : (o = rc(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function nt(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        u = rc(l, r) || {};
      return cr(s, a, (d) => {
        let f = Ql(u, o, d);
        return (
          d === f &&
            typeof d == "string" &&
            (f = Ql(u, o, `${t}${d === "default" ? "" : z(d)}`, d)),
          n === !1 ? f : { [n]: f }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function BR(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const zR = { m: "margin", p: "padding" },
  UR = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  ny = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  WR = BR((e) => {
    if (e.length > 2)
      if (ny[e]) e = ny[e];
      else return [e];
    const [t, n] = e.split(""),
      r = zR[t],
      o = UR[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  jh = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Fh = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...jh, ...Fh];
function ba(e, t, n, r) {
  const o = rc(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string"
    ? (i) =>
        typeof i == "string"
          ? i
          : typeof o == "string"
            ? `calc(${i} * ${o})`
            : o * i
    : Array.isArray(o)
      ? (i) => {
          if (typeof i == "string") return i;
          const s = Math.abs(i),
            a = o[s];
          return i >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
        }
      : typeof o == "function"
        ? o
        : () => {};
}
function Dh(e) {
  return ba(e, "spacing", 8);
}
function wa(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function VR(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = wa(t, n)), r), {});
}
function HR(e, t, n, r) {
  if (!t.includes(n)) return null;
  const o = WR(n),
    i = VR(o, r),
    s = e[n];
  return cr(e, s, i);
}
function ZS(e, t) {
  const n = Dh(e.theme);
  return Object.keys(e)
    .map((r) => HR(e, t, r, n))
    .reduce(Es, {});
}
function Qe(e) {
  return ZS(e, jh);
}
Qe.propTypes = {};
Qe.filterProps = jh;
function Ye(e) {
  return ZS(e, Fh);
}
Ye.propTypes = {};
Ye.filterProps = Fh;
function eb(e = 8, t = Dh({ spacing: e })) {
  if (e.mui) return e;
  const n = (...r) =>
    (r.length === 0 ? [1] : r)
      .map((i) => {
        const s = t(i);
        return typeof s == "number" ? `${s}px` : s;
      })
      .join(" ");
  return (n.mui = !0), n;
}
function oc(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {},
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? Es(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function dn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function yn(e, t) {
  return nt({ prop: e, themeKey: "borders", transform: t });
}
const KR = yn("border", dn),
  GR = yn("borderTop", dn),
  qR = yn("borderRight", dn),
  XR = yn("borderBottom", dn),
  QR = yn("borderLeft", dn),
  YR = yn("borderColor"),
  JR = yn("borderTopColor"),
  ZR = yn("borderRightColor"),
  eT = yn("borderBottomColor"),
  tT = yn("borderLeftColor"),
  nT = yn("outline", dn),
  rT = yn("outlineColor"),
  ic = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = ba(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: wa(t, r) });
      return cr(e, e.borderRadius, n);
    }
    return null;
  };
ic.propTypes = {};
ic.filterProps = ["borderRadius"];
oc(KR, GR, qR, XR, QR, YR, JR, ZR, eT, tT, ic, nT, rT);
const sc = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ba(e.theme, "spacing", 8),
      n = (r) => ({ gap: wa(t, r) });
    return cr(e, e.gap, n);
  }
  return null;
};
sc.propTypes = {};
sc.filterProps = ["gap"];
const ac = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ba(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: wa(t, r) });
    return cr(e, e.columnGap, n);
  }
  return null;
};
ac.propTypes = {};
ac.filterProps = ["columnGap"];
const lc = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ba(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: wa(t, r) });
    return cr(e, e.rowGap, n);
  }
  return null;
};
lc.propTypes = {};
lc.filterProps = ["rowGap"];
const oT = nt({ prop: "gridColumn" }),
  iT = nt({ prop: "gridRow" }),
  sT = nt({ prop: "gridAutoFlow" }),
  aT = nt({ prop: "gridAutoColumns" }),
  lT = nt({ prop: "gridAutoRows" }),
  uT = nt({ prop: "gridTemplateColumns" }),
  cT = nt({ prop: "gridTemplateRows" }),
  dT = nt({ prop: "gridTemplateAreas" }),
  fT = nt({ prop: "gridArea" });
oc(sc, ac, lc, oT, iT, sT, aT, lT, uT, cT, dT, fT);
function hi(e, t) {
  return t === "grey" ? t : e;
}
const pT = nt({ prop: "color", themeKey: "palette", transform: hi }),
  hT = nt({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: hi,
  }),
  mT = nt({ prop: "backgroundColor", themeKey: "palette", transform: hi });
oc(pT, hT, mT);
function Gt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const gT = nt({ prop: "width", transform: Gt }),
  Bh = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var o, i, s, a, l;
        const r =
          ((s =
            (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null
              ? void 0
              : i.values) == null
            ? void 0
            : s[n]) || nc[n];
        return r
          ? ((l = (a = e.theme) == null ? void 0 : a.breakpoints) == null
              ? void 0
              : l.unit) !== "px"
            ? { maxWidth: `${r}${e.theme.breakpoints.unit}` }
            : { maxWidth: r }
          : { maxWidth: Gt(n) };
      };
      return cr(e, e.maxWidth, t);
    }
    return null;
  };
Bh.filterProps = ["maxWidth"];
const yT = nt({ prop: "minWidth", transform: Gt }),
  vT = nt({ prop: "height", transform: Gt }),
  ST = nt({ prop: "maxHeight", transform: Gt }),
  bT = nt({ prop: "minHeight", transform: Gt });
nt({ prop: "size", cssProperty: "width", transform: Gt });
nt({ prop: "size", cssProperty: "height", transform: Gt });
const wT = nt({ prop: "boxSizing" });
oc(gT, Bh, yT, vT, ST, bT, wT);
const xa = {
  border: { themeKey: "borders", transform: dn },
  borderTop: { themeKey: "borders", transform: dn },
  borderRight: { themeKey: "borders", transform: dn },
  borderBottom: { themeKey: "borders", transform: dn },
  borderLeft: { themeKey: "borders", transform: dn },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: dn },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: ic },
  color: { themeKey: "palette", transform: hi },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: hi,
  },
  backgroundColor: { themeKey: "palette", transform: hi },
  p: { style: Ye },
  pt: { style: Ye },
  pr: { style: Ye },
  pb: { style: Ye },
  pl: { style: Ye },
  px: { style: Ye },
  py: { style: Ye },
  padding: { style: Ye },
  paddingTop: { style: Ye },
  paddingRight: { style: Ye },
  paddingBottom: { style: Ye },
  paddingLeft: { style: Ye },
  paddingX: { style: Ye },
  paddingY: { style: Ye },
  paddingInline: { style: Ye },
  paddingInlineStart: { style: Ye },
  paddingInlineEnd: { style: Ye },
  paddingBlock: { style: Ye },
  paddingBlockStart: { style: Ye },
  paddingBlockEnd: { style: Ye },
  m: { style: Qe },
  mt: { style: Qe },
  mr: { style: Qe },
  mb: { style: Qe },
  ml: { style: Qe },
  mx: { style: Qe },
  my: { style: Qe },
  margin: { style: Qe },
  marginTop: { style: Qe },
  marginRight: { style: Qe },
  marginBottom: { style: Qe },
  marginLeft: { style: Qe },
  marginX: { style: Qe },
  marginY: { style: Qe },
  marginInline: { style: Qe },
  marginInlineStart: { style: Qe },
  marginInlineEnd: { style: Qe },
  marginBlock: { style: Qe },
  marginBlockStart: { style: Qe },
  marginBlockEnd: { style: Qe },
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({ "@media print": { display: e } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: sc },
  rowGap: { style: lc },
  columnGap: { style: ac },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: "zIndex" },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: "shadows" },
  width: { transform: Gt },
  maxWidth: { style: Bh },
  minWidth: { transform: Gt },
  height: { transform: Gt },
  maxHeight: { transform: Gt },
  minHeight: { transform: Gt },
  boxSizing: {},
  font: { themeKey: "font" },
  fontFamily: { themeKey: "typography" },
  fontSize: { themeKey: "typography" },
  fontStyle: { themeKey: "typography" },
  fontWeight: { themeKey: "typography" },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: "typography" },
};
function xT(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function CT(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ET() {
  function e(n, r, o, i) {
    const s = { [n]: r, theme: o },
      a = i[n];
    if (!a) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: c, style: d } = a;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const f = rc(o, u) || {};
    return d
      ? d(s)
      : cr(s, r, (p) => {
          let v = Ql(f, c, p);
          return (
            p === v &&
              typeof p == "string" &&
              (v = Ql(f, c, `${n}${p === "default" ? "" : z(p)}`, p)),
            l === !1 ? v : { [l]: v }
          );
        });
  }
  function t(n) {
    const { sx: r, theme: o = {} } = n || {};
    if (!r) return null;
    const i = o.unstable_sxConfig ?? xa;
    function s(a) {
      let l = a;
      if (typeof a == "function") l = a(o);
      else if (typeof a != "object") return a;
      if (!l) return null;
      const u = FR(o.breakpoints),
        c = Object.keys(u);
      let d = u;
      return (
        Object.keys(l).forEach((f) => {
          const g = CT(l[f], o);
          if (g != null)
            if (typeof g == "object")
              if (i[f]) d = Es(d, e(f, g, o, i));
              else {
                const p = cr({ theme: o }, g, (v) => ({ [f]: v }));
                xT(p, g) ? (d[f] = t({ sx: g, theme: o })) : (d = Es(d, p));
              }
            else d = Es(d, e(f, g, o, i));
        }),
        IR(o, DR(c, d))
      );
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return t;
}
const bo = ET();
bo.filterProps = ["sx"];
function kT(e, t) {
  var r;
  const n = this;
  if (n.vars) {
    if (
      !((r = n.colorSchemes) != null && r[e]) ||
      typeof n.getColorSchemeSelector != "function"
    )
      return {};
    let o = n.getColorSchemeSelector(e);
    return o === "&"
      ? t
      : ((o.includes("data-") || o.includes(".")) &&
          (o = `*:where(${o.replace(/\s*&$/, "")}) &`),
        { [o]: t });
  }
  return n.palette.mode === e ? t : {};
}
function Ca(e = {}, ...t) {
  const {
      breakpoints: n = {},
      palette: r = {},
      spacing: o,
      shape: i = {},
      ...s
    } = e,
    a = AR(n),
    l = eb(o);
  let u = Et(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: { mode: "light", ...r },
      spacing: l,
      shape: { ...NR, ...i },
    },
    s,
  );
  return (
    (u = MR(u)),
    (u.applyStyles = kT),
    (u = t.reduce((c, d) => Et(c, d), u)),
    (u.unstable_sxConfig = {
      ...xa,
      ...(s == null ? void 0 : s.unstable_sxConfig),
    }),
    (u.unstable_sx = function (d) {
      return bo({ sx: d, theme: this });
    }),
    u
  );
}
function RT(e) {
  return Object.keys(e).length === 0;
}
function tb(e = null) {
  const t = S.useContext(tc);
  return !t || RT(t) ? e : t;
}
const TT = Ca();
function uc(e = TT) {
  return tb(e);
}
function PT({ styles: e, themeId: t, defaultTheme: n = {} }) {
  const r = uc(n),
    o = typeof e == "function" ? e((t && r[t]) || r) : e;
  return R.jsx(YS, { styles: o });
}
const OT = (e) => {
  var r;
  const t = { systemProps: {}, otherProps: {} },
    n =
      ((r = e == null ? void 0 : e.theme) == null
        ? void 0
        : r.unstable_sxConfig) ?? xa;
  return (
    Object.keys(e).forEach((o) => {
      n[o] ? (t.systemProps[o] = e[o]) : (t.otherProps[o] = e[o]);
    }),
    t
  );
};
function nb(e) {
  const { sx: t, ...n } = e,
    { systemProps: r, otherProps: o } = OT(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
        ? (i = (...s) => {
            const a = t(...s);
            return Dn(a) ? { ...r, ...a } : r;
          })
        : (i = { ...r, ...t }),
    { ...o, sx: i }
  );
}
const ry = (e) => e,
  $T = () => {
    let e = ry;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = ry;
      },
    };
  },
  AT = $T();
function rb(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = rb(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function J() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = rb(e)) && (r && (r += " "), (r += t));
  return r;
}
const IT = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function de(e, t, n = "Mui") {
  const r = IT[t];
  return r ? `${n}-${r}` : `${AT.generate(e)}-${t}`;
}
function pe(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = de(e, o, n);
    }),
    r
  );
}
function ob(e) {
  const { variants: t, ...n } = e,
    r = { variants: t, style: ey(n), isProcessed: !0 };
  return (
    r.style === n ||
      (t &&
        t.forEach((o) => {
          typeof o.style != "function" && (o.style = ey(o.style));
        })),
    r
  );
}
const LT = Ca();
function wd(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function _T(e) {
  return e ? (t, n) => n[e] : null;
}
function MT(e, t, n) {
  e.theme = jT(e.theme) ? n : e.theme[t] || e.theme;
}
function bl(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n)) return n.flatMap((r) => bl(e, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let r;
    if (n.isProcessed) r = n.style;
    else {
      const { variants: o, ...i } = n;
      r = i;
    }
    return ib(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function ib(e, t, n = []) {
  var o;
  let r;
  e: for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (typeof s.props == "function") {
      if (
        (r ?? (r = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        !s.props(r))
      )
        continue;
    } else
      for (const a in s.props)
        if (
          e[a] !== s.props[a] &&
          ((o = e.ownerState) == null ? void 0 : o[a]) !== s.props[a]
        )
          continue e;
    typeof s.style == "function"
      ? (r ?? (r = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        n.push(s.style(r)))
      : n.push(s.style);
  }
  return n;
}
function sb(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = LT,
    rootShouldForwardProp: r = wd,
    slotShouldForwardProp: o = wd,
  } = e;
  function i(a) {
    MT(a, t, n);
  }
  return (a, l = {}) => {
    OR(a, (C) => C.filter((k) => k !== bo));
    const {
        name: u,
        slot: c,
        skipVariantsResolver: d,
        skipSx: f,
        overridesResolver: g = _T(DT(c)),
        ...p
      } = l,
      v = d !== void 0 ? d : (c && c !== "Root" && c !== "root") || !1,
      x = f || !1;
    let m = wd;
    c === "Root" || c === "root"
      ? (m = r)
      : c
        ? (m = o)
        : FT(a) && (m = void 0);
    const y = PR(a, { shouldForwardProp: m, label: NT(), ...p }),
      h = (C) => {
        if (typeof C == "function" && C.__emotion_real !== C)
          return function (E) {
            return bl(E, C);
          };
        if (Dn(C)) {
          const k = ob(C);
          return k.variants
            ? function (T) {
                return bl(T, k);
              }
            : k.style;
        }
        return C;
      },
      b = (...C) => {
        const k = [],
          E = C.map(h),
          T = [];
        if (
          (k.push(i),
          u &&
            g &&
            T.push(function (D) {
              var B, K;
              const j =
                (K = (B = D.theme.components) == null ? void 0 : B[u]) == null
                  ? void 0
                  : K.styleOverrides;
              if (!j) return null;
              const _ = {};
              for (const A in j) _[A] = bl(D, j[A]);
              return g(D, _);
            }),
          u &&
            !v &&
            T.push(function (D) {
              var _, B;
              const N = D.theme,
                j =
                  (B =
                    (_ = N == null ? void 0 : N.components) == null
                      ? void 0
                      : _[u]) == null
                    ? void 0
                    : B.variants;
              return j ? ib(D, j) : null;
            }),
          x || T.push(bo),
          Array.isArray(E[0]))
        ) {
          const P = E.shift(),
            D = new Array(k.length).fill(""),
            N = new Array(T.length).fill("");
          let j;
          (j = [...D, ...P, ...N]),
            (j.raw = [...D, ...P.raw, ...N]),
            k.unshift(j);
        }
        const $ = [...k, ...E, ...T],
          w = y(...$);
        return a.muiName && (w.muiName = a.muiName), w;
      };
    return y.withConfig && (b.withConfig = y.withConfig), b;
  };
}
function NT(e, t) {
  return void 0;
}
function jT(e) {
  for (const t in e) return !1;
  return !0;
}
function FT(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function DT(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const ab = sb();
function ea(e, t) {
  const n = { ...t };
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      const o = r;
      if (o === "components" || o === "slots") n[o] = { ...e[o], ...n[o] };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o],
          s = t[o];
        if (!s) n[o] = i || {};
        else if (!i) n[o] = s;
        else {
          n[o] = { ...s };
          for (const a in i)
            if (Object.prototype.hasOwnProperty.call(i, a)) {
              const l = a;
              n[o][l] = ea(i[l], s[l]);
            }
        }
      } else n[o] === void 0 && (n[o] = e[o]);
    }
  return n;
}
function BT(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : ea(t.components[n].defaultProps, r);
}
function lb({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = uc(n);
  return r && (o = o[r] || o), BT({ theme: o, name: t, props: e });
}
const wo = typeof window < "u" ? S.useLayoutEffect : S.useEffect;
function zT(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function zh(e, t = 0, n = 1) {
  return zT(e, t, n);
}
function UT(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => (o < 3 ? parseInt(r, 16) : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3)).join(", ")})`
      : ""
  );
}
function jr(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return jr(UT(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(ur(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(
        o,
      ))
    )
      throw new Error(ur(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
const WT = (e) => {
    const t = jr(e);
    return t.values
      .slice(0, 3)
      .map((n, r) => (t.type.includes("hsl") && r !== 0 ? `${n}%` : n))
      .join(" ");
  },
  us = (e, t) => {
    try {
      return WT(e);
    } catch {
      return e;
    }
  };
function cc(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.includes("rgb")
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.includes("hsl") && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.includes("color") ? (r = `${n} ${r.join(" ")}`) : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function ub(e) {
  e = jr(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    s = (u, c = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = "rgb";
  const l = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ];
  return (
    e.type === "hsla" && ((a += "a"), l.push(t[3])), cc({ type: a, values: l })
  );
}
function Uf(e) {
  e = jr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? jr(ub(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      ),
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function VT(e, t) {
  const n = Uf(e),
    r = Uf(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function $t(e, t) {
  return (
    (e = jr(e)),
    (t = zh(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    cc(e)
  );
}
function Qa(e, t, n) {
  try {
    return $t(e, t);
  } catch {
    return e;
  }
}
function xo(e, t) {
  if (((e = jr(e)), (t = zh(t)), e.type.includes("hsl"))) e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return cc(e);
}
function Ie(e, t, n) {
  try {
    return xo(e, t);
  } catch {
    return e;
  }
}
function Co(e, t) {
  if (((e = jr(e)), (t = zh(t)), e.type.includes("hsl")))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return cc(e);
}
function Le(e, t, n) {
  try {
    return Co(e, t);
  } catch {
    return e;
  }
}
function cb(e, t = 0.15) {
  return Uf(e) > 0.5 ? xo(e, t) : Co(e, t);
}
function Ya(e, t, n) {
  try {
    return cb(e, t);
  } catch {
    return e;
  }
}
function oy(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          },
    () => {},
  );
}
function db(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function ks(e, t) {
  var n, r, o;
  return (
    S.isValidElement(e) &&
    t.indexOf(
      e.type.muiName ??
        ((o =
          (r = (n = e.type) == null ? void 0 : n._payload) == null
            ? void 0
            : r.value) == null
          ? void 0
          : o.muiName),
    ) !== -1
  );
}
function Bt(e) {
  return (e && e.ownerDocument) || document;
}
function dr(e) {
  return Bt(e).defaultView || window;
}
function Wf(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let iy = 0;
function HT(e) {
  const [t, n] = S.useState(e),
    r = e || t;
  return (
    S.useEffect(() => {
      t == null && ((iy += 1), n(`mui-${iy}`));
    }, [t]),
    r
  );
}
const KT = { ...vi },
  sy = KT.useId;
function fb(e) {
  if (sy !== void 0) {
    const t = sy();
    return e ?? t;
  }
  return HT(e);
}
function Vf({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: o } = S.useRef(e !== void 0),
    [i, s] = S.useState(t),
    a = o ? e : i,
    l = S.useCallback((u) => {
      o || s(u);
    }, []);
  return [a, l];
}
function tr(e) {
  const t = S.useRef(e);
  return (
    wo(() => {
      t.current = e;
    }),
    S.useRef((...n) => (0, t.current)(...n)).current
  );
}
function dt(...e) {
  return S.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              Wf(n, t);
            });
          },
    e,
  );
}
const ay = {};
function pb(e, t) {
  const n = S.useRef(ay);
  return n.current === ay && (n.current = e(t)), n;
}
const GT = [];
function qT(e) {
  S.useEffect(e, GT);
}
class Uh {
  constructor() {
    Xr(this, "currentId", null);
    Xr(this, "clear", () => {
      this.currentId !== null &&
        (clearTimeout(this.currentId), (this.currentId = null));
    });
    Xr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Uh();
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), n();
      }, t));
  }
}
function Wh() {
  const e = pb(Uh.create).current;
  return qT(e.disposeEffect), e;
}
function ly(e) {
  try {
    return e.matches(":focus-visible");
  } catch {}
  return !1;
}
function hb(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function XT(e) {
  return S.Children.toArray(e).filter((t) => S.isValidElement(t));
}
function he(e, t, n = void 0) {
  const r = {};
  for (const o in e) {
    const i = e[o];
    let s = "",
      a = !0;
    for (let l = 0; l < i.length; l += 1) {
      const u = i[l];
      u &&
        ((s += (a === !0 ? "" : " ") + t(u)),
        (a = !1),
        n && n[u] && (s += " " + n[u]));
    }
    r[o] = s;
  }
  return r;
}
function QT(e) {
  return typeof e == "string";
}
function mb(e, t, n) {
  return e === void 0 || QT(e)
    ? t
    : { ...t, ownerState: { ...t.ownerState, ...n } };
}
function Yl(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r),
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function uy(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function gb(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i,
  } = e;
  if (!t) {
    const g = J(
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className,
      ),
      p = {
        ...(n == null ? void 0 : n.style),
        ...(o == null ? void 0 : o.style),
        ...(r == null ? void 0 : r.style),
      },
      v = { ...n, ...o, ...r };
    return (
      g.length > 0 && (v.className = g),
      Object.keys(p).length > 0 && (v.style = p),
      { props: v, internalRef: void 0 }
    );
  }
  const s = Yl({ ...o, ...r }),
    a = uy(r),
    l = uy(o),
    u = t(s),
    c = J(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className,
    ),
    d = {
      ...(u == null ? void 0 : u.style),
      ...(n == null ? void 0 : n.style),
      ...(o == null ? void 0 : o.style),
      ...(r == null ? void 0 : r.style),
    },
    f = { ...u, ...n, ...l, ...a };
  return (
    c.length > 0 && (f.className = c),
    Object.keys(d).length > 0 && (f.style = d),
    { props: f, internalRef: u.ref }
  );
}
function yb(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Hf(e) {
  var d;
  const {
      elementType: t,
      externalSlotProps: n,
      ownerState: r,
      skipResolvingSlotProps: o = !1,
      ...i
    } = e,
    s = o ? {} : yb(n, r),
    { props: a, internalRef: l } = gb({ ...i, externalSlotProps: s }),
    u = dt(
      l,
      s == null ? void 0 : s.ref,
      (d = e.additionalProps) == null ? void 0 : d.ref,
    );
  return mb(t, { ...a, ref: u }, r);
}
function Ni(e) {
  var t;
  return parseInt(S.version, 10) >= 19
    ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null
    : (e == null ? void 0 : e.ref) || null;
}
const vb = S.createContext(null);
function Vh() {
  return S.useContext(vb);
}
const YT = typeof Symbol == "function" && Symbol.for,
  JT = YT ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function ZT(e, t) {
  return typeof t == "function" ? t(e) : { ...e, ...t };
}
function e2(e) {
  const { children: t, theme: n } = e,
    r = Vh(),
    o = S.useMemo(() => {
      const i = r === null ? { ...n } : ZT(r, n);
      return i != null && (i[JT] = r !== null), i;
    }, [n, r]);
  return R.jsx(vb.Provider, { value: o, children: t });
}
const Sb = S.createContext();
function t2({ value: e, ...t }) {
  return R.jsx(Sb.Provider, { value: e ?? !0, ...t });
}
const bb = () => S.useContext(Sb) ?? !1,
  wb = S.createContext(void 0);
function n2({ value: e, children: t }) {
  return R.jsx(wb.Provider, { value: e, children: t });
}
function r2(e) {
  const { theme: t, name: n, props: r } = e;
  if (!t || !t.components || !t.components[n]) return r;
  const o = t.components[n];
  return o.defaultProps
    ? ea(o.defaultProps, r)
    : !o.styleOverrides && !o.variants
      ? ea(o, r)
      : r;
}
function o2({ props: e, name: t }) {
  const n = S.useContext(wb);
  return r2({ props: e, name: t, theme: { components: n } });
}
const cy = {};
function dy(e, t, n, r = !1) {
  return S.useMemo(() => {
    const o = (e && t[e]) || t;
    if (typeof n == "function") {
      const i = n(o),
        s = e ? { ...t, [e]: i } : i;
      return r ? () => s : s;
    }
    return e ? { ...t, [e]: n } : { ...t, ...n };
  }, [e, t, n, r]);
}
function xb(e) {
  const { children: t, theme: n, themeId: r } = e,
    o = tb(cy),
    i = Vh() || cy,
    s = dy(r, o, n),
    a = dy(r, i, n, !0),
    l = s.direction === "rtl";
  return R.jsx(e2, {
    theme: a,
    children: R.jsx(tc.Provider, {
      value: s,
      children: R.jsx(t2, {
        value: l,
        children: R.jsx(n2, {
          value: s == null ? void 0 : s.components,
          children: t,
        }),
      }),
    }),
  });
}
const fy = { theme: void 0 };
function i2(e) {
  let t, n;
  return function (o) {
    let i = t;
    return (
      (i === void 0 || o.theme !== n) &&
        ((fy.theme = o.theme), (i = ob(e(fy))), (t = i), (n = o.theme)),
      i
    );
  };
}
const Hh = "mode",
  Kh = "color-scheme",
  s2 = "data-color-scheme";
function a2(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = Hh,
    colorSchemeStorageKey: i = Kh,
    attribute: s = s2,
    colorSchemeNode: a = "document.documentElement",
    nonce: l,
  } = e || {};
  let u = "",
    c = s;
  if (
    (s === "class" && (c = ".%s"),
    s === "data" && (c = "[data-%s]"),
    c.startsWith("."))
  ) {
    const f = c.substring(1);
    u += `${a}.classList.remove('${f}'.replace('%s', light), '${f}'.replace('%s', dark));
      ${a}.classList.add('${f}'.replace('%s', colorScheme));`;
  }
  const d = c.match(/\[([^\]]+)\]/);
  if (d) {
    const [f, g] = d[1].split("=");
    g ||
      (u += `${a}.removeAttribute('${f}'.replace('%s', light));
      ${a}.removeAttribute('${f}'.replace('%s', dark));`),
      (u += `
      ${a}.setAttribute('${f}'.replace('%s', colorScheme), ${g ? `${g}.replace('%s', colorScheme)` : '""'});`);
  } else u += `${a}.setAttribute('${c}', colorScheme);`;
  return R.jsx(
    "script",
    {
      suppressHydrationWarning: !0,
      nonce: typeof window > "u" ? l : "",
      dangerouslySetInnerHTML: {
        __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${t}';
  const dark = localStorage.getItem('${i}-dark') || '${r}';
  const light = localStorage.getItem('${i}-light') || '${n}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${u}
  }
} catch(e){}})();`,
      },
    },
    "mui-color-scheme-init",
  );
}
function py(e) {
  if (
    typeof window < "u" &&
    typeof window.matchMedia == "function" &&
    e === "system"
  )
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
}
function Cb(e, t) {
  if (e.mode === "light" || (e.mode === "system" && e.systemMode === "light"))
    return t("light");
  if (e.mode === "dark" || (e.mode === "system" && e.systemMode === "dark"))
    return t("dark");
}
function l2(e) {
  return Cb(e, (t) => {
    if (t === "light") return e.lightColorScheme;
    if (t === "dark") return e.darkColorScheme;
  });
}
function xd(e, t) {
  if (typeof window > "u") return;
  let n;
  try {
    (n = localStorage.getItem(e) || void 0), n || localStorage.setItem(e, t);
  } catch {}
  return n || t;
}
function u2(e) {
  const {
      defaultMode: t = "light",
      defaultLightColorScheme: n,
      defaultDarkColorScheme: r,
      supportedColorSchemes: o = [],
      modeStorageKey: i = Hh,
      colorSchemeStorageKey: s = Kh,
      storageWindow: a = typeof window > "u" ? void 0 : window,
    } = e,
    l = o.join(","),
    u = o.length > 1,
    [c, d] = S.useState(() => {
      const h = xd(i, t),
        b = xd(`${s}-light`, n),
        C = xd(`${s}-dark`, r);
      return {
        mode: h,
        systemMode: py(h),
        lightColorScheme: b,
        darkColorScheme: C,
      };
    }),
    [, f] = S.useState(!1),
    g = S.useRef(!1);
  S.useEffect(() => {
    u && f(!0), (g.current = !0);
  }, [u]);
  const p = l2(c),
    v = S.useCallback(
      (h) => {
        d((b) => {
          if (h === b.mode) return b;
          const C = h ?? t;
          try {
            localStorage.setItem(i, C);
          } catch {}
          return { ...b, mode: C, systemMode: py(C) };
        });
      },
      [i, t],
    ),
    x = S.useCallback(
      (h) => {
        h
          ? typeof h == "string"
            ? h && !l.includes(h)
              ? console.error(
                  `\`${h}\` does not exist in \`theme.colorSchemes\`.`,
                )
              : d((b) => {
                  const C = { ...b };
                  return (
                    Cb(b, (k) => {
                      try {
                        localStorage.setItem(`${s}-${k}`, h);
                      } catch {}
                      k === "light" && (C.lightColorScheme = h),
                        k === "dark" && (C.darkColorScheme = h);
                    }),
                    C
                  );
                })
            : d((b) => {
                const C = { ...b },
                  k = h.light === null ? n : h.light,
                  E = h.dark === null ? r : h.dark;
                if (k)
                  if (!l.includes(k))
                    console.error(
                      `\`${k}\` does not exist in \`theme.colorSchemes\`.`,
                    );
                  else {
                    C.lightColorScheme = k;
                    try {
                      localStorage.setItem(`${s}-light`, k);
                    } catch {}
                  }
                if (E)
                  if (!l.includes(E))
                    console.error(
                      `\`${E}\` does not exist in \`theme.colorSchemes\`.`,
                    );
                  else {
                    C.darkColorScheme = E;
                    try {
                      localStorage.setItem(`${s}-dark`, E);
                    } catch {}
                  }
                return C;
              })
          : d((b) => {
              try {
                localStorage.setItem(`${s}-light`, n),
                  localStorage.setItem(`${s}-dark`, r);
              } catch {}
              return { ...b, lightColorScheme: n, darkColorScheme: r };
            });
      },
      [l, s, n, r],
    ),
    m = S.useCallback(
      (h) => {
        c.mode === "system" &&
          d((b) => {
            const C = h != null && h.matches ? "dark" : "light";
            return b.systemMode === C ? b : { ...b, systemMode: C };
          });
      },
      [c.mode],
    ),
    y = S.useRef(m);
  return (
    (y.current = m),
    S.useEffect(() => {
      if (typeof window.matchMedia != "function" || !u) return;
      const h = (...C) => y.current(...C),
        b = window.matchMedia("(prefers-color-scheme: dark)");
      return (
        b.addListener(h),
        h(b),
        () => {
          b.removeListener(h);
        }
      );
    }, [u]),
    S.useEffect(() => {
      if (a && u) {
        const h = (b) => {
          const C = b.newValue;
          typeof b.key == "string" &&
            b.key.startsWith(s) &&
            (!C || l.match(C)) &&
            (b.key.endsWith("light") && x({ light: C }),
            b.key.endsWith("dark") && x({ dark: C })),
            b.key === i &&
              (!C || ["light", "dark", "system"].includes(C)) &&
              v(C || t);
        };
        return (
          a.addEventListener("storage", h),
          () => {
            a.removeEventListener("storage", h);
          }
        );
      }
    }, [x, v, i, s, l, t, a, u]),
    {
      ...c,
      mode: g.current || !u ? c.mode : void 0,
      systemMode: g.current || !u ? c.systemMode : void 0,
      colorScheme: g.current || !u ? p : void 0,
      setMode: v,
      setColorScheme: x,
    }
  );
}
const c2 =
  "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function d2(e) {
  const {
      themeId: t,
      theme: n = {},
      modeStorageKey: r = Hh,
      colorSchemeStorageKey: o = Kh,
      disableTransitionOnChange: i = !1,
      defaultColorScheme: s,
      resolveTheme: a,
    } = e,
    l = {
      allColorSchemes: [],
      colorScheme: void 0,
      darkColorScheme: void 0,
      lightColorScheme: void 0,
      mode: void 0,
      setColorScheme: () => {},
      setMode: () => {},
      systemMode: void 0,
    },
    u = S.createContext(void 0),
    c = () => S.useContext(u) || l;
  function d(v) {
    var O, M, H, X, Z;
    const {
        children: x,
        theme: m,
        modeStorageKey: y = r,
        colorSchemeStorageKey: h = o,
        disableTransitionOnChange: b = i,
        storageWindow: C = typeof window > "u" ? void 0 : window,
        documentNode: k = typeof document > "u" ? void 0 : document,
        colorSchemeNode: E = typeof document > "u"
          ? void 0
          : document.documentElement,
        disableNestedContext: T = !1,
        disableStyleSheetGeneration: $ = !1,
        defaultMode: w = "system",
      } = v,
      P = S.useRef(!1),
      D = Vh(),
      N = S.useContext(u),
      j = !!N && !T,
      _ = S.useMemo(() => m || (typeof n == "function" ? n() : n), [m]),
      B = _[t],
      {
        colorSchemes: K = {},
        components: A = {},
        cssVarPrefix: F,
        ...W
      } = B || _,
      q = Object.keys(K)
        .filter((Q) => !!K[Q])
        .join(","),
      Y = S.useMemo(() => q.split(","), [q]),
      re = typeof s == "string" ? s : s.light,
      te = typeof s == "string" ? s : s.dark,
      ve =
        K[re] && K[te]
          ? w
          : ((M = (O = K[W.defaultColorScheme]) == null ? void 0 : O.palette) ==
            null
              ? void 0
              : M.mode) || ((H = W.palette) == null ? void 0 : H.mode),
      {
        mode: Ee,
        setMode: Oe,
        systemMode: rt,
        lightColorScheme: $e,
        darkColorScheme: se,
        colorScheme: ye,
        setColorScheme: fe,
      } = u2({
        supportedColorSchemes: Y,
        defaultLightColorScheme: re,
        defaultDarkColorScheme: te,
        modeStorageKey: y,
        colorSchemeStorageKey: h,
        defaultMode: ve,
        storageWindow: C,
      });
    let ze = Ee,
      ne = ye;
    j && ((ze = N.mode), (ne = N.colorScheme));
    const be = ne || W.defaultColorScheme,
      St = ((X = W.generateThemeVars) == null ? void 0 : X.call(W)) || W.vars,
      _e = { ...W, components: A, colorSchemes: K, cssVarPrefix: F, vars: St };
    if (
      (typeof _e.generateSpacing == "function" &&
        (_e.spacing = _e.generateSpacing()),
      be)
    ) {
      const Q = K[be];
      Q &&
        typeof Q == "object" &&
        Object.keys(Q).forEach((oe) => {
          Q[oe] && typeof Q[oe] == "object"
            ? (_e[oe] = { ..._e[oe], ...Q[oe] })
            : (_e[oe] = Q[oe]);
        });
    }
    const je = W.colorSchemeSelector;
    S.useEffect(() => {
      if (ne && E && je && je !== "media") {
        const Q = je;
        let oe = je;
        if (
          (Q === "class" && (oe = ".%s"),
          Q === "data" && (oe = "[data-%s]"),
          Q != null &&
            Q.startsWith("data-") &&
            !Q.includes("%s") &&
            (oe = `[${Q}="%s"]`),
          oe.startsWith("."))
        )
          E.classList.remove(
            ...Y.map((He) => oe.substring(1).replace("%s", He)),
          ),
            E.classList.add(oe.substring(1).replace("%s", ne));
        else {
          const He = oe.replace("%s", ne).match(/\[([^\]]+)\]/);
          if (He) {
            const [Vt, we] = He[1].split("=");
            we ||
              Y.forEach((qn) => {
                E.removeAttribute(Vt.replace(ne, qn));
              }),
              E.setAttribute(Vt, we ? we.replace(/"|'/g, "") : "");
          } else E.setAttribute(oe, ne);
        }
      }
    }, [ne, je, E, Y]),
      S.useEffect(() => {
        let Q;
        if (b && P.current && k) {
          const oe = k.createElement("style");
          oe.appendChild(k.createTextNode(c2)),
            k.head.appendChild(oe),
            window.getComputedStyle(k.body),
            (Q = setTimeout(() => {
              k.head.removeChild(oe);
            }, 1));
        }
        return () => {
          clearTimeout(Q);
        };
      }, [ne, b, k]),
      S.useEffect(
        () => (
          (P.current = !0),
          () => {
            P.current = !1;
          }
        ),
        [],
      );
    const Ve = S.useMemo(
      () => ({
        allColorSchemes: Y,
        colorScheme: ne,
        darkColorScheme: se,
        lightColorScheme: $e,
        mode: ze,
        setColorScheme: fe,
        setMode: Oe,
        systemMode: rt,
      }),
      [Y, ne, se, $e, ze, fe, Oe, rt],
    );
    let Tt = !0;
    ($ ||
      W.cssVariables === !1 ||
      (j && (D == null ? void 0 : D.cssVarPrefix) === F)) &&
      (Tt = !1);
    const ke = R.jsxs(S.Fragment, {
      children: [
        R.jsx(xb, {
          themeId: B ? t : void 0,
          theme: a ? a(_e) : _e,
          children: x,
        }),
        Tt &&
          R.jsx(YS, {
            styles:
              ((Z = _e.generateStyleSheets) == null ? void 0 : Z.call(_e)) ||
              [],
          }),
      ],
    });
    return j ? ke : R.jsx(u.Provider, { value: Ve, children: ke });
  }
  const f = typeof s == "string" ? s : s.light,
    g = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: d,
    useColorScheme: c,
    getInitColorSchemeScript: (v) =>
      a2({
        colorSchemeStorageKey: o,
        defaultLightColorScheme: f,
        defaultDarkColorScheme: g,
        modeStorageKey: r,
        ...v,
      }),
  };
}
function f2(e = "") {
  function t(...r) {
    if (!r.length) return "";
    const o = r[0];
    return typeof o == "string" &&
      !o.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/,
      )
      ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})`
      : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const hy = (e, t, n, r = []) => {
    let o = e;
    t.forEach((i, s) => {
      s === t.length - 1
        ? Array.isArray(o)
          ? (o[Number(i)] = n)
          : o && typeof o == "object" && (o[i] = n)
        : o &&
          typeof o == "object" &&
          (o[i] || (o[i] = r.includes(i) ? [] : {}), (o = o[i]));
    });
  },
  p2 = (e, t, n) => {
    function r(o, i = [], s = []) {
      Object.entries(o).forEach(([a, l]) => {
        (!n || (n && !n([...i, a]))) &&
          l != null &&
          (typeof l == "object" && Object.keys(l).length > 0
            ? r(l, [...i, a], Array.isArray(l) ? [...s, a] : s)
            : t([...i, a], l, s));
      });
    }
    r(e);
  },
  h2 = (e, t) =>
    typeof t == "number"
      ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) =>
          e.includes(r),
        ) || e[e.length - 1].toLowerCase().includes("opacity")
        ? t
        : `${t}px`
      : t;
function Cd(e, t) {
  const { prefix: n, shouldSkipGeneratingVar: r } = t || {},
    o = {},
    i = {},
    s = {};
  return (
    p2(
      e,
      (a, l, u) => {
        if (
          (typeof l == "string" || typeof l == "number") &&
          (!r || !r(a, l))
        ) {
          const c = `--${n ? `${n}-` : ""}${a.join("-")}`,
            d = h2(a, l);
          Object.assign(o, { [c]: d }),
            hy(i, a, `var(${c})`, u),
            hy(s, a, `var(${c}, ${d})`, u);
        }
      },
      (a) => a[0] === "vars",
    ),
    { css: o, vars: i, varsWithDefaults: s }
  );
}
function m2(e, t = {}) {
  const {
      getSelector: n = x,
      disableCssColorScheme: r,
      colorSchemeSelector: o,
    } = t,
    {
      colorSchemes: i = {},
      components: s,
      defaultColorScheme: a = "light",
      ...l
    } = e,
    { vars: u, css: c, varsWithDefaults: d } = Cd(l, t);
  let f = d;
  const g = {},
    { [a]: p, ...v } = i;
  if (
    (Object.entries(v || {}).forEach(([h, b]) => {
      const { vars: C, css: k, varsWithDefaults: E } = Cd(b, t);
      (f = Et(f, E)), (g[h] = { css: k, vars: C });
    }),
    p)
  ) {
    const { css: h, vars: b, varsWithDefaults: C } = Cd(p, t);
    (f = Et(f, C)), (g[a] = { css: h, vars: b });
  }
  function x(h, b) {
    var k, E;
    let C = o;
    if (
      (o === "class" && (C = ".%s"),
      o === "data" && (C = "[data-%s]"),
      o != null &&
        o.startsWith("data-") &&
        !o.includes("%s") &&
        (C = `[${o}="%s"]`),
      h)
    ) {
      if (C === "media")
        return e.defaultColorScheme === h
          ? ":root"
          : {
              [`@media (prefers-color-scheme: ${((E = (k = i[h]) == null ? void 0 : k.palette) == null ? void 0 : E.mode) || h})`]:
                { ":root": b },
            };
      if (C)
        return e.defaultColorScheme === h
          ? `:root, ${C.replace("%s", String(h))}`
          : C.replace("%s", String(h));
    }
    return ":root";
  }
  return {
    vars: f,
    generateThemeVars: () => {
      let h = { ...u };
      return (
        Object.entries(g).forEach(([, { vars: b }]) => {
          h = Et(h, b);
        }),
        h
      );
    },
    generateStyleSheets: () => {
      var T, $;
      const h = [],
        b = e.defaultColorScheme || "light";
      function C(w, P) {
        Object.keys(P).length &&
          h.push(typeof w == "string" ? { [w]: { ...P } } : w);
      }
      C(n(void 0, { ...c }), c);
      const { [b]: k, ...E } = g;
      if (k) {
        const { css: w } = k,
          P =
            ($ = (T = i[b]) == null ? void 0 : T.palette) == null
              ? void 0
              : $.mode,
          D = !r && P ? { colorScheme: P, ...w } : { ...w };
        C(n(b, { ...D }), D);
      }
      return (
        Object.entries(E).forEach(([w, { css: P }]) => {
          var j, _;
          const D =
              (_ = (j = i[w]) == null ? void 0 : j.palette) == null
                ? void 0
                : _.mode,
            N = !r && D ? { colorScheme: D, ...P } : { ...P };
          C(n(w, { ...N }), N);
        }),
        h
      );
    },
  };
}
function g2(e) {
  return function (n) {
    return e === "media"
      ? `@media (prefers-color-scheme: ${n})`
      : e
        ? e.startsWith("data-") && !e.includes("%s")
          ? `[${e}="${n}"] &`
          : e === "class"
            ? `.${n} &`
            : e === "data"
              ? `[data-${n}] &`
              : `${e.replace("%s", n)} &`
        : "&";
  };
}
const y2 = Ca(),
  v2 = ab("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`maxWidth${z(String(n.maxWidth))}`],
        n.fixed && t.fixed,
        n.disableGutters && t.disableGutters,
      ];
    },
  }),
  S2 = (e) => lb({ props: e, name: "MuiContainer", defaultTheme: y2 }),
  b2 = (e, t) => {
    const n = (l) => de(t, l),
      { classes: r, fixed: o, disableGutters: i, maxWidth: s } = e,
      a = {
        root: [
          "root",
          s && `maxWidth${z(String(s))}`,
          o && "fixed",
          i && "disableGutters",
        ],
      };
    return he(a, n, r);
  };
function w2(e = {}) {
  const {
      createStyledComponent: t = v2,
      useThemeProps: n = S2,
      componentName: r = "MuiContainer",
    } = e,
    o = t(
      ({ theme: s, ownerState: a }) => ({
        width: "100%",
        marginLeft: "auto",
        boxSizing: "border-box",
        marginRight: "auto",
        ...(!a.disableGutters && {
          paddingLeft: s.spacing(2),
          paddingRight: s.spacing(2),
          [s.breakpoints.up("sm")]: {
            paddingLeft: s.spacing(3),
            paddingRight: s.spacing(3),
          },
        }),
      }),
      ({ theme: s, ownerState: a }) =>
        a.fixed &&
        Object.keys(s.breakpoints.values).reduce((l, u) => {
          const c = u,
            d = s.breakpoints.values[c];
          return (
            d !== 0 &&
              (l[s.breakpoints.up(c)] = {
                maxWidth: `${d}${s.breakpoints.unit}`,
              }),
            l
          );
        }, {}),
      ({ theme: s, ownerState: a }) => ({
        ...(a.maxWidth === "xs" && {
          [s.breakpoints.up("xs")]: {
            maxWidth: Math.max(s.breakpoints.values.xs, 444),
          },
        }),
        ...(a.maxWidth &&
          a.maxWidth !== "xs" && {
            [s.breakpoints.up(a.maxWidth)]: {
              maxWidth: `${s.breakpoints.values[a.maxWidth]}${s.breakpoints.unit}`,
            },
          }),
      }),
    );
  return S.forwardRef(function (a, l) {
    const u = n(a),
      {
        className: c,
        component: d = "div",
        disableGutters: f = !1,
        fixed: g = !1,
        maxWidth: p = "lg",
        classes: v,
        ...x
      } = u,
      m = { ...u, component: d, disableGutters: f, fixed: g, maxWidth: p },
      y = b2(m, r);
    return R.jsx(o, {
      as: d,
      ownerState: m,
      className: J(y.root, c),
      ref: l,
      ...x,
    });
  });
}
const x2 = (e, t) => e.filter((n) => t.includes(n)),
  ji = (e, t, n) => {
    const r = e.keys[0];
    Array.isArray(t)
      ? t.forEach((o, i) => {
          n((s, a) => {
            i <= e.keys.length - 1 &&
              (i === 0 ? Object.assign(s, a) : (s[e.up(e.keys[i])] = a));
          }, o);
        })
      : t && typeof t == "object"
        ? (Object.keys(t).length > e.keys.length
            ? e.keys
            : x2(e.keys, Object.keys(t))
          ).forEach((i) => {
            if (e.keys.includes(i)) {
              const s = t[i];
              s !== void 0 &&
                n((a, l) => {
                  r === i ? Object.assign(a, l) : (a[e.up(i)] = l);
                }, s);
            }
          })
        : (typeof t == "number" || typeof t == "string") &&
          n((o, i) => {
            Object.assign(o, i);
          }, t);
  };
function Jl(e) {
  return `--Grid-${e}Spacing`;
}
function dc(e) {
  return `--Grid-parent-${e}Spacing`;
}
const my = "--Grid-columns",
  mi = "--Grid-parent-columns",
  C2 = ({ theme: e, ownerState: t }) => {
    const n = {};
    return (
      ji(e.breakpoints, t.size, (r, o) => {
        let i = {};
        o === "grow" && (i = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" }),
          o === "auto" &&
            (i = {
              flexBasis: "auto",
              flexGrow: 0,
              flexShrink: 0,
              maxWidth: "none",
              width: "auto",
            }),
          typeof o == "number" &&
            (i = {
              flexGrow: 0,
              flexBasis: "auto",
              width: `calc(100% * ${o} / var(${mi}) - (var(${mi}) - ${o}) * (var(${dc("column")}) / var(${mi})))`,
            }),
          r(n, i);
      }),
      n
    );
  },
  E2 = ({ theme: e, ownerState: t }) => {
    const n = {};
    return (
      ji(e.breakpoints, t.offset, (r, o) => {
        let i = {};
        o === "auto" && (i = { marginLeft: "auto" }),
          typeof o == "number" &&
            (i = {
              marginLeft:
                o === 0
                  ? "0px"
                  : `calc(100% * ${o} / var(${mi}) + var(${dc("column")}) * ${o} / var(${mi}))`,
            }),
          r(n, i);
      }),
      n
    );
  },
  k2 = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const n = { [my]: 12 };
    return (
      ji(e.breakpoints, t.columns, (r, o) => {
        const i = o ?? 12;
        r(n, { [my]: i, "> *": { [mi]: i } });
      }),
      n
    );
  },
  R2 = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const n = {};
    return (
      ji(e.breakpoints, t.rowSpacing, (r, o) => {
        var s;
        const i =
          typeof o == "string"
            ? o
            : (s = e.spacing) == null
              ? void 0
              : s.call(e, o);
        r(n, { [Jl("row")]: i, "> *": { [dc("row")]: i } });
      }),
      n
    );
  },
  T2 = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const n = {};
    return (
      ji(e.breakpoints, t.columnSpacing, (r, o) => {
        var s;
        const i =
          typeof o == "string"
            ? o
            : (s = e.spacing) == null
              ? void 0
              : s.call(e, o);
        r(n, { [Jl("column")]: i, "> *": { [dc("column")]: i } });
      }),
      n
    );
  },
  P2 = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const n = {};
    return (
      ji(e.breakpoints, t.direction, (r, o) => {
        r(n, { flexDirection: o });
      }),
      n
    );
  },
  O2 = ({ ownerState: e }) => ({
    minWidth: 0,
    boxSizing: "border-box",
    ...(e.container && {
      display: "flex",
      flexWrap: "wrap",
      ...(e.wrap && e.wrap !== "wrap" && { flexWrap: e.wrap }),
      gap: `var(${Jl("row")}) var(${Jl("column")})`,
    }),
  }),
  $2 = (e) => {
    const t = [];
    return (
      Object.entries(e).forEach(([n, r]) => {
        r !== !1 && r !== void 0 && t.push(`grid-${n}-${String(r)}`);
      }),
      t
    );
  },
  A2 = (e, t = "xs") => {
    function n(r) {
      return r === void 0
        ? !1
        : (typeof r == "string" && !Number.isNaN(Number(r))) ||
            (typeof r == "number" && r > 0);
    }
    if (n(e)) return [`spacing-${t}-${String(e)}`];
    if (typeof e == "object" && !Array.isArray(e)) {
      const r = [];
      return (
        Object.entries(e).forEach(([o, i]) => {
          n(i) && r.push(`spacing-${o}-${String(i)}`);
        }),
        r
      );
    }
    return [];
  },
  I2 = (e) =>
    e === void 0
      ? []
      : typeof e == "object"
        ? Object.entries(e).map(([t, n]) => `direction-${t}-${n}`)
        : [`direction-xs-${String(e)}`],
  L2 = Ca(),
  _2 = ab("div", {
    name: "MuiGrid",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  });
function M2(e) {
  return lb({ props: e, name: "MuiGrid", defaultTheme: L2 });
}
function N2(e = {}) {
  const {
      createStyledComponent: t = _2,
      useThemeProps: n = M2,
      componentName: r = "MuiGrid",
    } = e,
    o = (l, u) => {
      const { container: c, direction: d, spacing: f, wrap: g, size: p } = l,
        v = {
          root: [
            "root",
            c && "container",
            g !== "wrap" && `wrap-xs-${String(g)}`,
            ...I2(d),
            ...$2(p),
            ...(c ? A2(f, u.breakpoints.keys[0]) : []),
          ],
        };
      return he(v, (x) => de(r, x), {});
    };
  function i(l, u, c = () => !0) {
    const d = {};
    return (
      l === null ||
        (Array.isArray(l)
          ? l.forEach((f, g) => {
              f !== null && c(f) && u.keys[g] && (d[u.keys[g]] = f);
            })
          : typeof l == "object"
            ? Object.keys(l).forEach((f) => {
                const g = l[f];
                g != null && c(g) && (d[f] = g);
              })
            : (d[u.keys[0]] = l)),
      d
    );
  }
  const s = t(k2, T2, R2, C2, P2, O2, E2),
    a = S.forwardRef(function (u, c) {
      const d = uc(),
        f = n(u),
        g = nb(f),
        {
          className: p,
          children: v,
          columns: x = 12,
          container: m = !1,
          component: y = "div",
          direction: h = "row",
          wrap: b = "wrap",
          size: C = {},
          offset: k = {},
          spacing: E = 0,
          rowSpacing: T = E,
          columnSpacing: $ = E,
          unstable_level: w = 0,
          ...P
        } = g,
        D = i(C, d.breakpoints, (W) => W !== !1),
        N = i(k, d.breakpoints),
        j = u.columns ?? (w ? void 0 : x),
        _ = u.spacing ?? (w ? void 0 : E),
        B = u.rowSpacing ?? u.spacing ?? (w ? void 0 : T),
        K = u.columnSpacing ?? u.spacing ?? (w ? void 0 : $),
        A = {
          ...g,
          level: w,
          columns: j,
          container: m,
          direction: h,
          wrap: b,
          spacing: _,
          rowSpacing: B,
          columnSpacing: K,
          size: D,
          offset: N,
        },
        F = o(A, d);
      return R.jsx(s, {
        ref: c,
        as: y,
        ownerState: A,
        className: J(F.root, p),
        ...P,
        children: S.Children.map(v, (W) => {
          var q;
          return S.isValidElement(W) &&
            ks(W, ["Grid"]) &&
            m &&
            W.props.container
            ? S.cloneElement(W, {
                unstable_level:
                  ((q = W.props) == null ? void 0 : q.unstable_level) ?? w + 1,
              })
            : W;
        }),
      });
    });
  return (a.muiName = "Grid"), a;
}
function Eb() {
  return {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: Qs.white, default: Qs.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
}
const j2 = Eb();
function kb() {
  return {
    text: {
      primary: Qs.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: Qs.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
}
const gy = kb();
function yy(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
        ? (e.light = Co(e.main, o))
        : t === "dark" && (e.dark = xo(e.main, i)));
}
function F2(e = "light") {
  return e === "dark"
    ? { main: zo[200], light: zo[50], dark: zo[400] }
    : { main: zo[700], light: zo[400], dark: zo[800] };
}
function D2(e = "light") {
  return e === "dark"
    ? { main: Bo[200], light: Bo[50], dark: Bo[400] }
    : { main: Bo[500], light: Bo[300], dark: Bo[700] };
}
function B2(e = "light") {
  return e === "dark"
    ? { main: Do[500], light: Do[300], dark: Do[700] }
    : { main: Do[700], light: Do[400], dark: Do[800] };
}
function z2(e = "light") {
  return e === "dark"
    ? { main: Uo[400], light: Uo[300], dark: Uo[700] }
    : { main: Uo[700], light: Uo[500], dark: Uo[900] };
}
function U2(e = "light") {
  return e === "dark"
    ? { main: Wo[400], light: Wo[300], dark: Wo[700] }
    : { main: Wo[800], light: Wo[500], dark: Wo[900] };
}
function W2(e = "light") {
  return e === "dark"
    ? { main: Yi[400], light: Yi[300], dark: Yi[700] }
    : { main: "#ed6c02", light: Yi[500], dark: Yi[900] };
}
function Gh(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
      ...o
    } = e,
    i = e.primary || F2(t),
    s = e.secondary || D2(t),
    a = e.error || B2(t),
    l = e.info || z2(t),
    u = e.success || U2(t),
    c = e.warning || W2(t);
  function d(v) {
    return VT(v, gy.text.primary) >= n ? gy.text.primary : j2.text.primary;
  }
  const f = ({
    color: v,
    name: x,
    mainShade: m = 500,
    lightShade: y = 300,
    darkShade: h = 700,
  }) => {
    if (
      ((v = { ...v }),
      !v.main && v[m] && (v.main = v[m]),
      !v.hasOwnProperty("main"))
    )
      throw new Error(ur(11, x ? ` (${x})` : "", m));
    if (typeof v.main != "string")
      throw new Error(ur(12, x ? ` (${x})` : "", JSON.stringify(v.main)));
    return (
      yy(v, "light", y, r),
      yy(v, "dark", h, r),
      v.contrastText || (v.contrastText = d(v.main)),
      v
    );
  };
  let g;
  return (
    t === "light" ? (g = Eb()) : t === "dark" && (g = kb()),
    Et(
      {
        common: { ...Qs },
        mode: t,
        primary: f({ color: i, name: "primary" }),
        secondary: f({
          color: s,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: f({ color: a, name: "error" }),
        warning: f({ color: c, name: "warning" }),
        info: f({ color: l, name: "info" }),
        success: f({ color: u, name: "success" }),
        grey: xk,
        contrastThreshold: n,
        getContrastText: d,
        augmentColor: f,
        tonalOffset: r,
        ...g,
      },
      o,
    )
  );
}
function V2(e) {
  const t = {};
  return (
    Object.entries(e).forEach((r) => {
      const [o, i] = r;
      typeof i == "object" &&
        (t[o] =
          `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
    }),
    t
  );
}
function H2(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
      [e.up("sm")]: { minHeight: 64 },
    },
    ...t,
  };
}
function K2(e) {
  return Math.round(e * 1e5) / 1e5;
}
const vy = { textTransform: "uppercase" },
  Sy = '"Roboto", "Helvetica", "Arial", sans-serif';
function Rb(e, t) {
  const {
      fontFamily: n = Sy,
      fontSize: r = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: i = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: a = 700,
      htmlFontSize: l = 16,
      allVariants: u,
      pxToRem: c,
      ...d
    } = typeof t == "function" ? t(e) : t,
    f = r / 14,
    g = c || ((x) => `${(x / l) * f}rem`),
    p = (x, m, y, h, b) => ({
      fontFamily: n,
      fontWeight: x,
      fontSize: g(m),
      lineHeight: y,
      ...(n === Sy ? { letterSpacing: `${K2(h / m)}em` } : {}),
      ...b,
      ...u,
    }),
    v = {
      h1: p(o, 96, 1.167, -1.5),
      h2: p(o, 60, 1.2, -0.5),
      h3: p(i, 48, 1.167, 0),
      h4: p(i, 34, 1.235, 0.25),
      h5: p(i, 24, 1.334, 0),
      h6: p(s, 20, 1.6, 0.15),
      subtitle1: p(i, 16, 1.75, 0.15),
      subtitle2: p(s, 14, 1.57, 0.1),
      body1: p(i, 16, 1.5, 0.15),
      body2: p(i, 14, 1.43, 0.15),
      button: p(s, 14, 1.75, 0.4, vy),
      caption: p(i, 12, 1.66, 0.4),
      overline: p(i, 12, 2.66, 1, vy),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Et(
    {
      htmlFontSize: l,
      pxToRem: g,
      fontFamily: n,
      fontSize: r,
      fontWeightLight: o,
      fontWeightRegular: i,
      fontWeightMedium: s,
      fontWeightBold: a,
      ...v,
    },
    d,
    { clone: !1 },
  );
}
const G2 = 0.2,
  q2 = 0.14,
  X2 = 0.12;
function Ue(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${G2})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${q2})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${X2})`,
  ].join(",");
}
const Q2 = [
    "none",
    Ue(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Ue(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Ue(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Ue(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Ue(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Ue(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Ue(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Ue(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Ue(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Ue(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Ue(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Ue(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Ue(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Ue(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Ue(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Ue(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Ue(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Ue(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Ue(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Ue(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Ue(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Ue(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Ue(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Ue(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  Y2 = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  J2 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function by(e) {
  return `${Math.round(e)}ms`;
}
function Z2(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function eP(e) {
  const t = { ...Y2, ...e.easing },
    n = { ...J2, ...e.duration };
  return {
    getAutoHeightDuration: Z2,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: a = t.easeInOut,
        delay: l = 0,
        ...u
      } = i;
      return (Array.isArray(o) ? o : [o])
        .map(
          (c) =>
            `${c} ${typeof s == "string" ? s : by(s)} ${a} ${typeof l == "string" ? l : by(l)}`,
        )
        .join(",");
    },
    ...e,
    easing: t,
    duration: n,
  };
}
const tP = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function nP(e) {
  return (
    Dn(e) ||
    typeof e > "u" ||
    typeof e == "string" ||
    typeof e == "boolean" ||
    typeof e == "number" ||
    Array.isArray(e)
  );
}
function Tb(e = {}) {
  const t = { ...e };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, a] = o[i];
      !nP(a) || s.startsWith("unstable_")
        ? delete r[s]
        : Dn(a) && ((r[s] = { ...a }), n(r[s]));
    }
  }
  return (
    n(t),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function Kf(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: a = {},
    shape: l,
    ...u
  } = e;
  if (e.vars) throw new Error(ur(20));
  const c = Gh(i),
    d = Ca(e);
  let f = Et(d, {
    mixins: H2(d.breakpoints, r),
    palette: c,
    shadows: Q2.slice(),
    typography: Rb(c, a),
    transitions: eP(s),
    zIndex: { ...tP },
  });
  return (
    (f = Et(f, u)),
    (f = t.reduce((g, p) => Et(g, p), f)),
    (f.unstable_sxConfig = {
      ...xa,
      ...(u == null ? void 0 : u.unstable_sxConfig),
    }),
    (f.unstable_sx = function (p) {
      return bo({ sx: p, theme: this });
    }),
    (f.toRuntimeSource = Tb),
    f
  );
}
function Gf(e) {
  let t;
  return (
    e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
    Math.round(t * 10) / 1e3
  );
}
const rP = [...Array(25)].map((e, t) => {
  if (t === 0) return "none";
  const n = Gf(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function Pb(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38,
  };
}
function Ob(e) {
  return e === "dark" ? rP : [];
}
function oP(e) {
  const { palette: t = { mode: "light" }, opacity: n, overlays: r, ...o } = e,
    i = Gh(t);
  return {
    palette: i,
    opacity: { ...Pb(i.mode), ...n },
    overlays: r || Ob(i.mode),
    ...o,
  };
}
function iP(e) {
  var t;
  return (
    !!e[0].match(
      /(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/,
    ) ||
    !!e[0].match(/sxConfig$/) ||
    (e[0] === "palette" &&
      !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/)))
  );
}
const sP = (e) => [
    ...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`),
    `--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ""}palette-AppBar-darkColor`,
  ],
  aP = (e) => (t, n) => {
    const r = e.rootSelector || ":root",
      o = e.colorSchemeSelector;
    let i = o;
    if (
      (o === "class" && (i = ".%s"),
      o === "data" && (i = "[data-%s]"),
      o != null &&
        o.startsWith("data-") &&
        !o.includes("%s") &&
        (i = `[${o}="%s"]`),
      e.defaultColorScheme === t)
    ) {
      if (t === "dark") {
        const s = {};
        return (
          sP(e.cssVarPrefix).forEach((a) => {
            (s[a] = n[a]), delete n[a];
          }),
          i === "media"
            ? { [r]: n, "@media (prefers-color-scheme: dark)": { [r]: s } }
            : i
              ? { [i.replace("%s", t)]: s, [`${r}, ${i.replace("%s", t)}`]: n }
              : { [r]: { ...n, ...s } }
        );
      }
      if (i && i !== "media") return `${r}, ${i.replace("%s", String(t))}`;
    } else if (t) {
      if (i === "media")
        return { [`@media (prefers-color-scheme: ${String(t)})`]: { [r]: n } };
      if (i) return i.replace("%s", String(t));
    }
    return r;
  };
function lP(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function L(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function cs(e) {
  return !e || !e.startsWith("hsl") ? e : ub(e);
}
function Xn(e, t) {
  `${t}Channel` in e ||
    (e[`${t}Channel`] = us(
      cs(e[t]),
      `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`,
    ));
}
function uP(e) {
  return typeof e == "number"
    ? `${e}px`
    : typeof e == "string" || typeof e == "function" || Array.isArray(e)
      ? e
      : "8px";
}
const Ln = (e) => {
    try {
      return e();
    } catch {}
  },
  cP = (e = "mui") => f2(e);
function Ed(e, t, n, r) {
  if (!t) return;
  t = t === !0 ? {} : t;
  const o = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = oP({
      ...t,
      palette: { mode: o, ...(t == null ? void 0 : t.palette) },
    });
    return;
  }
  const { palette: i, ...s } = Kf({
    ...n,
    palette: { mode: o, ...(t == null ? void 0 : t.palette) },
  });
  return (
    (e[r] = {
      ...t,
      palette: i,
      opacity: { ...Pb(o), ...(t == null ? void 0 : t.opacity) },
      overlays: (t == null ? void 0 : t.overlays) || Ob(o),
    }),
    s
  );
}
function dP(e = {}, ...t) {
  const {
      colorSchemes: n = { light: !0 },
      defaultColorScheme: r,
      disableCssColorScheme: o = !1,
      cssVarPrefix: i = "mui",
      shouldSkipGeneratingVar: s = iP,
      colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
      rootSelector: l = ":root",
      ...u
    } = e,
    c = Object.keys(n)[0],
    d = r || (n.light && c !== "light" ? "light" : c),
    f = cP(i),
    { [d]: g, light: p, dark: v, ...x } = n,
    m = { ...x };
  let y = g;
  if (
    (((d === "dark" && !("dark" in n)) || (d === "light" && !("light" in n))) &&
      (y = !0),
    !y)
  )
    throw new Error(ur(21, d));
  const h = Ed(m, y, u, d);
  p && !m.light && Ed(m, p, void 0, "light"),
    v && !m.dark && Ed(m, v, void 0, "dark");
  let b = {
    defaultColorScheme: d,
    ...h,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: l,
    getCssVar: f,
    colorSchemes: m,
    font: { ...V2(h.typography), ...h.font },
    spacing: uP(u.spacing),
  };
  Object.keys(b.colorSchemes).forEach(($) => {
    const w = b.colorSchemes[$].palette,
      P = (D) => {
        const N = D.split("-"),
          j = N[1],
          _ = N[2];
        return f(D, w[j][_]);
      };
    if (
      (w.mode === "light" &&
        (L(w.common, "background", "#fff"),
        L(w.common, "onBackground", "#000")),
      w.mode === "dark" &&
        (L(w.common, "background", "#000"),
        L(w.common, "onBackground", "#fff")),
      lP(w, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip",
      ]),
      w.mode === "light")
    ) {
      L(w.Alert, "errorColor", Ie(w.error.light, 0.6)),
        L(w.Alert, "infoColor", Ie(w.info.light, 0.6)),
        L(w.Alert, "successColor", Ie(w.success.light, 0.6)),
        L(w.Alert, "warningColor", Ie(w.warning.light, 0.6)),
        L(w.Alert, "errorFilledBg", P("palette-error-main")),
        L(w.Alert, "infoFilledBg", P("palette-info-main")),
        L(w.Alert, "successFilledBg", P("palette-success-main")),
        L(w.Alert, "warningFilledBg", P("palette-warning-main")),
        L(
          w.Alert,
          "errorFilledColor",
          Ln(() => w.getContrastText(w.error.main)),
        ),
        L(
          w.Alert,
          "infoFilledColor",
          Ln(() => w.getContrastText(w.info.main)),
        ),
        L(
          w.Alert,
          "successFilledColor",
          Ln(() => w.getContrastText(w.success.main)),
        ),
        L(
          w.Alert,
          "warningFilledColor",
          Ln(() => w.getContrastText(w.warning.main)),
        ),
        L(w.Alert, "errorStandardBg", Le(w.error.light, 0.9)),
        L(w.Alert, "infoStandardBg", Le(w.info.light, 0.9)),
        L(w.Alert, "successStandardBg", Le(w.success.light, 0.9)),
        L(w.Alert, "warningStandardBg", Le(w.warning.light, 0.9)),
        L(w.Alert, "errorIconColor", P("palette-error-main")),
        L(w.Alert, "infoIconColor", P("palette-info-main")),
        L(w.Alert, "successIconColor", P("palette-success-main")),
        L(w.Alert, "warningIconColor", P("palette-warning-main")),
        L(w.AppBar, "defaultBg", P("palette-grey-100")),
        L(w.Avatar, "defaultBg", P("palette-grey-400")),
        L(w.Button, "inheritContainedBg", P("palette-grey-300")),
        L(w.Button, "inheritContainedHoverBg", P("palette-grey-A100")),
        L(w.Chip, "defaultBorder", P("palette-grey-400")),
        L(w.Chip, "defaultAvatarColor", P("palette-grey-700")),
        L(w.Chip, "defaultIconColor", P("palette-grey-700")),
        L(w.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
        L(w.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
        L(w.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
        L(w.LinearProgress, "primaryBg", Le(w.primary.main, 0.62)),
        L(w.LinearProgress, "secondaryBg", Le(w.secondary.main, 0.62)),
        L(w.LinearProgress, "errorBg", Le(w.error.main, 0.62)),
        L(w.LinearProgress, "infoBg", Le(w.info.main, 0.62)),
        L(w.LinearProgress, "successBg", Le(w.success.main, 0.62)),
        L(w.LinearProgress, "warningBg", Le(w.warning.main, 0.62)),
        L(w.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.11)`),
        L(w.Slider, "primaryTrack", Le(w.primary.main, 0.62)),
        L(w.Slider, "secondaryTrack", Le(w.secondary.main, 0.62)),
        L(w.Slider, "errorTrack", Le(w.error.main, 0.62)),
        L(w.Slider, "infoTrack", Le(w.info.main, 0.62)),
        L(w.Slider, "successTrack", Le(w.success.main, 0.62)),
        L(w.Slider, "warningTrack", Le(w.warning.main, 0.62));
      const D = Ya(w.background.default, 0.8);
      L(w.SnackbarContent, "bg", D),
        L(
          w.SnackbarContent,
          "color",
          Ln(() => w.getContrastText(D)),
        ),
        L(w.SpeedDialAction, "fabHoverBg", Ya(w.background.paper, 0.15)),
        L(w.StepConnector, "border", P("palette-grey-400")),
        L(w.StepContent, "border", P("palette-grey-400")),
        L(w.Switch, "defaultColor", P("palette-common-white")),
        L(w.Switch, "defaultDisabledColor", P("palette-grey-100")),
        L(w.Switch, "primaryDisabledColor", Le(w.primary.main, 0.62)),
        L(w.Switch, "secondaryDisabledColor", Le(w.secondary.main, 0.62)),
        L(w.Switch, "errorDisabledColor", Le(w.error.main, 0.62)),
        L(w.Switch, "infoDisabledColor", Le(w.info.main, 0.62)),
        L(w.Switch, "successDisabledColor", Le(w.success.main, 0.62)),
        L(w.Switch, "warningDisabledColor", Le(w.warning.main, 0.62)),
        L(w.TableCell, "border", Le(Qa(w.divider, 1), 0.88)),
        L(w.Tooltip, "bg", Qa(w.grey[700], 0.92));
    }
    if (w.mode === "dark") {
      L(w.Alert, "errorColor", Le(w.error.light, 0.6)),
        L(w.Alert, "infoColor", Le(w.info.light, 0.6)),
        L(w.Alert, "successColor", Le(w.success.light, 0.6)),
        L(w.Alert, "warningColor", Le(w.warning.light, 0.6)),
        L(w.Alert, "errorFilledBg", P("palette-error-dark")),
        L(w.Alert, "infoFilledBg", P("palette-info-dark")),
        L(w.Alert, "successFilledBg", P("palette-success-dark")),
        L(w.Alert, "warningFilledBg", P("palette-warning-dark")),
        L(
          w.Alert,
          "errorFilledColor",
          Ln(() => w.getContrastText(w.error.dark)),
        ),
        L(
          w.Alert,
          "infoFilledColor",
          Ln(() => w.getContrastText(w.info.dark)),
        ),
        L(
          w.Alert,
          "successFilledColor",
          Ln(() => w.getContrastText(w.success.dark)),
        ),
        L(
          w.Alert,
          "warningFilledColor",
          Ln(() => w.getContrastText(w.warning.dark)),
        ),
        L(w.Alert, "errorStandardBg", Ie(w.error.light, 0.9)),
        L(w.Alert, "infoStandardBg", Ie(w.info.light, 0.9)),
        L(w.Alert, "successStandardBg", Ie(w.success.light, 0.9)),
        L(w.Alert, "warningStandardBg", Ie(w.warning.light, 0.9)),
        L(w.Alert, "errorIconColor", P("palette-error-main")),
        L(w.Alert, "infoIconColor", P("palette-info-main")),
        L(w.Alert, "successIconColor", P("palette-success-main")),
        L(w.Alert, "warningIconColor", P("palette-warning-main")),
        L(w.AppBar, "defaultBg", P("palette-grey-900")),
        L(w.AppBar, "darkBg", P("palette-background-paper")),
        L(w.AppBar, "darkColor", P("palette-text-primary")),
        L(w.Avatar, "defaultBg", P("palette-grey-600")),
        L(w.Button, "inheritContainedBg", P("palette-grey-800")),
        L(w.Button, "inheritContainedHoverBg", P("palette-grey-700")),
        L(w.Chip, "defaultBorder", P("palette-grey-700")),
        L(w.Chip, "defaultAvatarColor", P("palette-grey-300")),
        L(w.Chip, "defaultIconColor", P("palette-grey-300")),
        L(w.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
        L(w.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
        L(w.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
        L(w.LinearProgress, "primaryBg", Ie(w.primary.main, 0.5)),
        L(w.LinearProgress, "secondaryBg", Ie(w.secondary.main, 0.5)),
        L(w.LinearProgress, "errorBg", Ie(w.error.main, 0.5)),
        L(w.LinearProgress, "infoBg", Ie(w.info.main, 0.5)),
        L(w.LinearProgress, "successBg", Ie(w.success.main, 0.5)),
        L(w.LinearProgress, "warningBg", Ie(w.warning.main, 0.5)),
        L(w.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.13)`),
        L(w.Slider, "primaryTrack", Ie(w.primary.main, 0.5)),
        L(w.Slider, "secondaryTrack", Ie(w.secondary.main, 0.5)),
        L(w.Slider, "errorTrack", Ie(w.error.main, 0.5)),
        L(w.Slider, "infoTrack", Ie(w.info.main, 0.5)),
        L(w.Slider, "successTrack", Ie(w.success.main, 0.5)),
        L(w.Slider, "warningTrack", Ie(w.warning.main, 0.5));
      const D = Ya(w.background.default, 0.98);
      L(w.SnackbarContent, "bg", D),
        L(
          w.SnackbarContent,
          "color",
          Ln(() => w.getContrastText(D)),
        ),
        L(w.SpeedDialAction, "fabHoverBg", Ya(w.background.paper, 0.15)),
        L(w.StepConnector, "border", P("palette-grey-600")),
        L(w.StepContent, "border", P("palette-grey-600")),
        L(w.Switch, "defaultColor", P("palette-grey-300")),
        L(w.Switch, "defaultDisabledColor", P("palette-grey-600")),
        L(w.Switch, "primaryDisabledColor", Ie(w.primary.main, 0.55)),
        L(w.Switch, "secondaryDisabledColor", Ie(w.secondary.main, 0.55)),
        L(w.Switch, "errorDisabledColor", Ie(w.error.main, 0.55)),
        L(w.Switch, "infoDisabledColor", Ie(w.info.main, 0.55)),
        L(w.Switch, "successDisabledColor", Ie(w.success.main, 0.55)),
        L(w.Switch, "warningDisabledColor", Ie(w.warning.main, 0.55)),
        L(w.TableCell, "border", Ie(Qa(w.divider, 1), 0.68)),
        L(w.Tooltip, "bg", Qa(w.grey[700], 0.92));
    }
    Xn(w.background, "default"),
      Xn(w.background, "paper"),
      Xn(w.common, "background"),
      Xn(w.common, "onBackground"),
      Xn(w, "divider"),
      Object.keys(w).forEach((D) => {
        const N = w[D];
        N &&
          typeof N == "object" &&
          (N.main && L(w[D], "mainChannel", us(cs(N.main))),
          N.light && L(w[D], "lightChannel", us(cs(N.light))),
          N.dark && L(w[D], "darkChannel", us(cs(N.dark))),
          N.contrastText &&
            L(w[D], "contrastTextChannel", us(cs(N.contrastText))),
          D === "text" && (Xn(w[D], "primary"), Xn(w[D], "secondary")),
          D === "action" &&
            (N.active && Xn(w[D], "active"),
            N.selected && Xn(w[D], "selected")));
      });
  }),
    (b = t.reduce(($, w) => Et($, w), b));
  const C = {
      prefix: i,
      disableCssColorScheme: o,
      shouldSkipGeneratingVar: s,
      getSelector: aP(b),
    },
    { vars: k, generateThemeVars: E, generateStyleSheets: T } = m2(b, C);
  return (
    (b.vars = k),
    Object.entries(b.colorSchemes[b.defaultColorScheme]).forEach(([$, w]) => {
      b[$] = w;
    }),
    (b.generateThemeVars = E),
    (b.generateStyleSheets = T),
    (b.generateSpacing = function () {
      return eb(u.spacing, Dh(this));
    }),
    (b.getColorSchemeSelector = g2(a)),
    (b.spacing = b.generateSpacing()),
    (b.shouldSkipGeneratingVar = s),
    (b.unstable_sxConfig = {
      ...xa,
      ...(u == null ? void 0 : u.unstable_sxConfig),
    }),
    (b.unstable_sx = function (w) {
      return bo({ sx: w, theme: this });
    }),
    (b.toRuntimeSource = Tb),
    b
  );
}
function wy(e, t, n) {
  e.colorSchemes &&
    n &&
    (e.colorSchemes[t] = {
      ...(n !== !0 && n),
      palette: Gh({ ...(n === !0 ? {} : n.palette), mode: t }),
    });
}
function qh(e = {}, ...t) {
  const {
      palette: n,
      cssVariables: r = !1,
      colorSchemes: o = n ? void 0 : { light: !0 },
      defaultColorScheme: i = n == null ? void 0 : n.mode,
      ...s
    } = e,
    a = i || "light",
    l = o == null ? void 0 : o[a],
    u = {
      ...o,
      ...(n
        ? { [a]: { ...(typeof l != "boolean" && l), palette: n } }
        : void 0),
    };
  if (r === !1) {
    if (!("colorSchemes" in e)) return Kf(e, ...t);
    let c = n;
    "palette" in e ||
      (u[a] &&
        (u[a] !== !0
          ? (c = u[a].palette)
          : a === "dark" && (c = { mode: "dark" })));
    const d = Kf({ ...e, palette: c }, ...t);
    return (
      (d.defaultColorScheme = a),
      (d.colorSchemes = u),
      d.palette.mode === "light" &&
        ((d.colorSchemes.light = {
          ...(u.light !== !0 && u.light),
          palette: d.palette,
        }),
        wy(d, "dark", u.dark)),
      d.palette.mode === "dark" &&
        ((d.colorSchemes.dark = {
          ...(u.dark !== !0 && u.dark),
          palette: d.palette,
        }),
        wy(d, "light", u.light)),
      d
    );
  }
  return (
    !n && !("light" in u) && a === "light" && (u.light = !0),
    dP(
      {
        ...s,
        colorSchemes: u,
        defaultColorScheme: a,
        ...(typeof r != "boolean" && r),
      },
      ...t,
    )
  );
}
const Xh = qh();
function fc() {
  const e = uc(Xh);
  return e[rr] || e;
}
function $b(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const sn = (e) => $b(e) && e !== "classes",
  V = sb({ themeId: rr, defaultTheme: Xh, rootShouldForwardProp: sn });
function xy({ theme: e, ...t }) {
  const n = rr in e ? e[rr] : void 0;
  return R.jsx(xb, { ...t, themeId: n ? rr : void 0, theme: n || e });
}
const Ja = {
    attribute: "data-mui-color-scheme",
    colorSchemeStorageKey: "mui-color-scheme",
    defaultLightColorScheme: "light",
    defaultDarkColorScheme: "dark",
    modeStorageKey: "mui-mode",
  },
  {
    CssVarsProvider: fP,
    useColorScheme: ND,
    getInitColorSchemeScript: jD,
  } = d2({
    themeId: rr,
    theme: () => qh({ cssVariables: !0 }),
    colorSchemeStorageKey: Ja.colorSchemeStorageKey,
    modeStorageKey: Ja.modeStorageKey,
    defaultColorScheme: {
      light: Ja.defaultLightColorScheme,
      dark: Ja.defaultDarkColorScheme,
    },
    resolveTheme: (e) => {
      const t = { ...e, typography: Rb(e.palette, e.typography) };
      return (
        (t.unstable_sx = function (r) {
          return bo({ sx: r, theme: this });
        }),
        t
      );
    },
  }),
  pP = fP;
function hP({ theme: e, ...t }) {
  return typeof e == "function"
    ? R.jsx(xy, { theme: e, ...t })
    : "colorSchemes" in (rr in e ? e[rr] : e)
      ? R.jsx(pP, { theme: e, ...t })
      : R.jsx(xy, { theme: e, ...t });
}
function mP(e) {
  return R.jsx(PT, { ...e, defaultTheme: Xh, themeId: rr });
}
function Qh(e) {
  return function (n) {
    return R.jsx(mP, {
      styles: typeof e == "function" ? (r) => e({ theme: r, ...n }) : e,
    });
  };
}
function gP() {
  return nb;
}
const ce = i2;
function me(e) {
  return o2(e);
}
function yP(e) {
  return de("MuiSvgIcon", e);
}
pe("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const vP = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${z(t)}`, `fontSize${z(n)}`],
      };
    return he(o, yP, r);
  },
  SP = V("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${z(n.color)}`],
        t[`fontSize${z(n.fontSize)}`],
      ];
    },
  })(
    ce(({ theme: e }) => {
      var t, n, r, o, i, s, a, l, u, c, d, f, g, p;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        flexShrink: 0,
        transition:
          (o = (t = e.transitions) == null ? void 0 : t.create) == null
            ? void 0
            : o.call(t, "fill", {
                duration:
                  (r =
                    (n = (e.vars ?? e).transitions) == null
                      ? void 0
                      : n.duration) == null
                    ? void 0
                    : r.shorter,
              }),
        variants: [
          { props: (v) => !v.hasSvgAsChild, style: { fill: "currentColor" } },
          { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } },
          {
            props: { fontSize: "small" },
            style: {
              fontSize:
                ((s = (i = e.typography) == null ? void 0 : i.pxToRem) == null
                  ? void 0
                  : s.call(i, 20)) || "1.25rem",
            },
          },
          {
            props: { fontSize: "medium" },
            style: {
              fontSize:
                ((l = (a = e.typography) == null ? void 0 : a.pxToRem) == null
                  ? void 0
                  : l.call(a, 24)) || "1.5rem",
            },
          },
          {
            props: { fontSize: "large" },
            style: {
              fontSize:
                ((c = (u = e.typography) == null ? void 0 : u.pxToRem) == null
                  ? void 0
                  : c.call(u, 35)) || "2.1875rem",
            },
          },
          ...Object.entries((e.vars ?? e).palette)
            .filter(([, v]) => v && v.main)
            .map(([v]) => {
              var x, m;
              return {
                props: { color: v },
                style: {
                  color:
                    (m = (x = (e.vars ?? e).palette) == null ? void 0 : x[v]) ==
                    null
                      ? void 0
                      : m.main,
                },
              };
            }),
          {
            props: { color: "action" },
            style: {
              color:
                (f = (d = (e.vars ?? e).palette) == null ? void 0 : d.action) ==
                null
                  ? void 0
                  : f.active,
            },
          },
          {
            props: { color: "disabled" },
            style: {
              color:
                (p = (g = (e.vars ?? e).palette) == null ? void 0 : g.action) ==
                null
                  ? void 0
                  : p.disabled,
            },
          },
          { props: { color: "inherit" }, style: { color: void 0 } },
        ],
      };
    }),
  ),
  Zl = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: i,
        color: s = "inherit",
        component: a = "svg",
        fontSize: l = "medium",
        htmlColor: u,
        inheritViewBox: c = !1,
        titleAccess: d,
        viewBox: f = "0 0 24 24",
        ...g
      } = r,
      p = S.isValidElement(o) && o.type === "svg",
      v = {
        ...r,
        color: s,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: c,
        viewBox: f,
        hasSvgAsChild: p,
      },
      x = {};
    c || (x.viewBox = f);
    const m = vP(v);
    return R.jsxs(SP, {
      as: a,
      className: J(m.root, i),
      focusable: "false",
      color: u,
      "aria-hidden": d ? void 0 : !0,
      role: d ? "img" : void 0,
      ref: n,
      ...x,
      ...g,
      ...(p && o.props),
      ownerState: v,
      children: [
        p ? o.props.children : o,
        d ? R.jsx("title", { children: d }) : null,
      ],
    });
  });
Zl && (Zl.muiName = "SvgIcon");
function On(e, t) {
  function n(r, o) {
    return R.jsx(Zl, { "data-testid": `${t}Icon`, ref: o, ...r, children: e });
  }
  return (n.muiName = Zl.muiName), S.memo(S.forwardRef(n));
}
var Pe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yh = Symbol.for("react.element"),
  Jh = Symbol.for("react.portal"),
  pc = Symbol.for("react.fragment"),
  hc = Symbol.for("react.strict_mode"),
  mc = Symbol.for("react.profiler"),
  gc = Symbol.for("react.provider"),
  yc = Symbol.for("react.context"),
  bP = Symbol.for("react.server_context"),
  vc = Symbol.for("react.forward_ref"),
  Sc = Symbol.for("react.suspense"),
  bc = Symbol.for("react.suspense_list"),
  wc = Symbol.for("react.memo"),
  xc = Symbol.for("react.lazy"),
  wP = Symbol.for("react.offscreen"),
  Ab;
Ab = Symbol.for("react.module.reference");
function vn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Yh:
        switch (((e = e.type), e)) {
          case pc:
          case mc:
          case hc:
          case Sc:
          case bc:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case bP:
              case yc:
              case vc:
              case xc:
              case wc:
              case gc:
                return e;
              default:
                return t;
            }
        }
      case Jh:
        return t;
    }
  }
}
Pe.ContextConsumer = yc;
Pe.ContextProvider = gc;
Pe.Element = Yh;
Pe.ForwardRef = vc;
Pe.Fragment = pc;
Pe.Lazy = xc;
Pe.Memo = wc;
Pe.Portal = Jh;
Pe.Profiler = mc;
Pe.StrictMode = hc;
Pe.Suspense = Sc;
Pe.SuspenseList = bc;
Pe.isAsyncMode = function () {
  return !1;
};
Pe.isConcurrentMode = function () {
  return !1;
};
Pe.isContextConsumer = function (e) {
  return vn(e) === yc;
};
Pe.isContextProvider = function (e) {
  return vn(e) === gc;
};
Pe.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yh;
};
Pe.isForwardRef = function (e) {
  return vn(e) === vc;
};
Pe.isFragment = function (e) {
  return vn(e) === pc;
};
Pe.isLazy = function (e) {
  return vn(e) === xc;
};
Pe.isMemo = function (e) {
  return vn(e) === wc;
};
Pe.isPortal = function (e) {
  return vn(e) === Jh;
};
Pe.isProfiler = function (e) {
  return vn(e) === mc;
};
Pe.isStrictMode = function (e) {
  return vn(e) === hc;
};
Pe.isSuspense = function (e) {
  return vn(e) === Sc;
};
Pe.isSuspenseList = function (e) {
  return vn(e) === bc;
};
Pe.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === pc ||
    e === mc ||
    e === hc ||
    e === Sc ||
    e === bc ||
    e === wP ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === xc ||
        e.$$typeof === wc ||
        e.$$typeof === gc ||
        e.$$typeof === yc ||
        e.$$typeof === vc ||
        e.$$typeof === Ab ||
        e.getModuleId !== void 0))
  );
};
Pe.typeOf = vn;
function Ib(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
function qf(e, t) {
  return (
    (qf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    qf(e, t)
  );
}
function Lb(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    qf(e, t);
}
const Cy = { disabled: !1 },
  eu = kn.createContext(null);
var xP = function (t) {
    return t.scrollTop;
  },
  ds = "unmounted",
  eo = "exited",
  to = "entering",
  qo = "entered",
  Xf = "exiting",
  Hn = (function (e) {
    Lb(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = o,
        a = s && !s.isMounting ? r.enter : r.appear,
        l;
      return (
        (i.appearStatus = null),
        r.in
          ? a
            ? ((l = eo), (i.appearStatus = to))
            : (l = qo)
          : r.unmountOnExit || r.mountOnEnter
            ? (l = ds)
            : (l = eo),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in;
      return s && i.status === ds ? { status: eo } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== to && s !== qo && (i = to)
            : (s === to || s === qo) && (i = Xf);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          s,
          a;
        return (
          (i = s = a = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (s = o.enter),
            (a = o.appear !== void 0 ? o.appear : s)),
          { exit: i, enter: s, appear: a }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === to)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : qa.findDOMNode(this);
              s && xP(s);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === eo &&
            this.setState({ status: ds });
      }),
      (n.performEnter = function (o) {
        var i = this,
          s = this.props.enter,
          a = this.context ? this.context.isMounting : o,
          l = this.props.nodeRef ? [a] : [qa.findDOMNode(this), a],
          u = l[0],
          c = l[1],
          d = this.getTimeouts(),
          f = a ? d.appear : d.enter;
        if ((!o && !s) || Cy.disabled) {
          this.safeSetState({ status: qo }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, c),
          this.safeSetState({ status: to }, function () {
            i.props.onEntering(u, c),
              i.onTransitionEnd(f, function () {
                i.safeSetState({ status: qo }, function () {
                  i.props.onEntered(u, c);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          s = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : qa.findDOMNode(this);
        if (!i || Cy.disabled) {
          this.safeSetState({ status: eo }, function () {
            o.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: Xf }, function () {
            o.props.onExiting(a),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: eo }, function () {
                  o.props.onExited(a);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          s = !0;
        return (
          (this.nextCallback = function (a) {
            s && ((s = !1), (i.nextCallback = null), o(a));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : qa.findDOMNode(this),
          a = o == null && !this.props.addEndListener;
        if (!s || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            u = l[0],
            c = l[1];
          this.props.addEndListener(u, c);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === ds) return null;
        var i = this.props,
          s = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var a = Ib(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return kn.createElement(
          eu.Provider,
          { value: null },
          typeof s == "function"
            ? s(o, a)
            : kn.cloneElement(kn.Children.only(s), a),
        );
      }),
      t
    );
  })(kn.Component);
Hn.contextType = eu;
Hn.propTypes = {};
function Vo() {}
Hn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Vo,
  onEntering: Vo,
  onEntered: Vo,
  onExit: Vo,
  onExiting: Vo,
  onExited: Vo,
};
Hn.UNMOUNTED = ds;
Hn.EXITED = eo;
Hn.ENTERING = to;
Hn.ENTERED = qo;
Hn.EXITING = Xf;
function CP(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Zh(e, t) {
  var n = function (i) {
      return t && S.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      S.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function EP(e, t) {
  (e = e || {}), (t = t || {});
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var s,
    a = {};
  for (var l in t) {
    if (r[l])
      for (s = 0; s < r[l].length; s++) {
        var u = r[l][s];
        a[r[l][s]] = n(u);
      }
    a[l] = n(l);
  }
  for (s = 0; s < o.length; s++) a[o[s]] = n(o[s]);
  return a;
}
function ao(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function kP(e, t) {
  return Zh(e.children, function (n) {
    return S.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: ao(n, "appear", e),
      enter: ao(n, "enter", e),
      exit: ao(n, "exit", e),
    });
  });
}
function RP(e, t, n) {
  var r = Zh(e.children),
    o = EP(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var s = o[i];
      if (S.isValidElement(s)) {
        var a = i in t,
          l = i in r,
          u = t[i],
          c = S.isValidElement(u) && !u.props.in;
        l && (!a || c)
          ? (o[i] = S.cloneElement(s, {
              onExited: n.bind(null, s),
              in: !0,
              exit: ao(s, "exit", e),
              enter: ao(s, "enter", e),
            }))
          : !l && a && !c
            ? (o[i] = S.cloneElement(s, { in: !1 }))
            : l &&
              a &&
              S.isValidElement(u) &&
              (o[i] = S.cloneElement(s, {
                onExited: n.bind(null, s),
                in: u.props.in,
                exit: ao(s, "exit", e),
                enter: ao(s, "enter", e),
              }));
      }
    }),
    o
  );
}
var TP =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  PP = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  em = (function (e) {
    Lb(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = i.handleExited.bind(CP(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: s,
          firstRender: !0,
        }),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var s = i.children,
          a = i.handleExited,
          l = i.firstRender;
        return { children: l ? kP(o, a) : RP(o, s, a), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var s = Zh(this.props.children);
        o.key in s ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (a) {
              var l = ql({}, a.children);
              return delete l[o.key], { children: l };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          s = o.childFactory,
          a = Ib(o, ["component", "childFactory"]),
          l = this.state.contextValue,
          u = TP(this.state.children).map(s);
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          i === null
            ? kn.createElement(eu.Provider, { value: l }, u)
            : kn.createElement(
                eu.Provider,
                { value: l },
                kn.createElement(i, a, u),
              )
        );
      }),
      t
    );
  })(kn.Component);
em.propTypes = {};
em.defaultProps = PP;
const _b = (e) => e.scrollTop;
function tu(e, t) {
  const { timeout: n, easing: r, style: o = {} } = e;
  return {
    duration:
      o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing:
      o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay,
  };
}
function OP(e) {
  return de("MuiPaper", e);
}
pe("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const $P = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = {
        root: [
          "root",
          r,
          !t && "rounded",
          r === "elevation" && `elevation${n}`,
        ],
      };
    return he(i, OP, o);
  },
  AP = V("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === "elevation" && t[`elevation${n.elevation}`],
      ];
    },
  })(
    ce(({ theme: e }) => ({
      backgroundColor: (e.vars || e).palette.background.paper,
      color: (e.vars || e).palette.text.primary,
      transition: e.transitions.create("box-shadow"),
      variants: [
        {
          props: ({ ownerState: t }) => !t.square,
          style: { borderRadius: e.shape.borderRadius },
        },
        {
          props: { variant: "outlined" },
          style: { border: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: { variant: "elevation" },
          style: {
            boxShadow: "var(--Paper-shadow)",
            backgroundImage: "var(--Paper-overlay)",
          },
        },
      ],
    })),
  ),
  Ea = S.forwardRef(function (t, n) {
    var g;
    const r = me({ props: t, name: "MuiPaper" }),
      o = fc(),
      {
        className: i,
        component: s = "div",
        elevation: a = 1,
        square: l = !1,
        variant: u = "elevation",
        ...c
      } = r,
      d = { ...r, component: s, elevation: a, square: l, variant: u },
      f = $P(d);
    return R.jsx(AP, {
      as: s,
      ownerState: d,
      className: J(f.root, i),
      ref: n,
      ...c,
      style: {
        ...(u === "elevation" && {
          "--Paper-shadow": (o.vars || o).shadows[a],
          ...(o.vars && {
            "--Paper-overlay": (g = o.vars.overlays) == null ? void 0 : g[a],
          }),
          ...(!o.vars &&
            o.palette.mode === "dark" && {
              "--Paper-overlay": `linear-gradient(${$t("#fff", Gf(a))}, ${$t("#fff", Gf(a))})`,
            }),
        }),
        ...c.style,
      },
    });
  });
function Mt(e, t) {
  const {
      className: n,
      elementType: r,
      ownerState: o,
      externalForwardedProps: i,
      getSlotOwnerState: s,
      internalForwardedProps: a,
      ...l
    } = t,
    {
      component: u,
      slots: c = { [e]: void 0 },
      slotProps: d = { [e]: void 0 },
      ...f
    } = i,
    g = c[e] || r,
    p = yb(d[e], o),
    {
      props: { component: v, ...x },
      internalRef: m,
    } = gb({
      className: n,
      ...l,
      externalForwardedProps: e === "root" ? f : void 0,
      externalSlotProps: p,
    }),
    y = dt(m, p == null ? void 0 : p.ref, t.ref),
    h = s ? s(x) : {},
    b = { ...o, ...h },
    C = e === "root" ? v || u : v,
    k = mb(
      g,
      {
        ...(e === "root" && !u && !c[e] && a),
        ...(e !== "root" && !c[e] && a),
        ...x,
        ...(C && { as: C }),
        ref: y,
      },
      b,
    );
  return (
    Object.keys(h).forEach((E) => {
      delete k[E];
    }),
    [g, k]
  );
}
class nu {
  constructor() {
    Xr(this, "mountEffect", () => {
      this.shouldMount &&
        !this.didMount &&
        this.ref.current !== null &&
        ((this.didMount = !0), this.mounted.resolve());
    });
    (this.ref = { current: null }),
      (this.mounted = null),
      (this.didMount = !1),
      (this.shouldMount = !1),
      (this.setShouldMount = null);
  }
  static create() {
    return new nu();
  }
  static use() {
    const t = pb(nu.create).current,
      [n, r] = S.useState(!1);
    return (
      (t.shouldMount = n),
      (t.setShouldMount = r),
      S.useEffect(t.mountEffect, [n]),
      t
    );
  }
  mount() {
    return (
      this.mounted ||
        ((this.mounted = LP()),
        (this.shouldMount = !0),
        this.setShouldMount(this.shouldMount)),
      this.mounted
    );
  }
  start(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.pulsate(...t);
    });
  }
}
function IP() {
  return nu.use();
}
function LP() {
  let e, t;
  const n = new Promise((r, o) => {
    (e = r), (t = o);
  });
  return (n.resolve = e), (n.reject = t), n;
}
function _P(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: s,
      in: a,
      onExited: l,
      timeout: u,
    } = e,
    [c, d] = S.useState(!1),
    f = J(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    g = { width: s, height: s, top: -(s / 2) + i, left: -(s / 2) + o },
    p = J(n.child, c && n.childLeaving, r && n.childPulsate);
  return (
    !a && !c && d(!0),
    S.useEffect(() => {
      if (!a && l != null) {
        const v = setTimeout(l, u);
        return () => {
          clearTimeout(v);
        };
      }
    }, [l, a, u]),
    R.jsx("span", {
      className: f,
      style: g,
      children: R.jsx("span", { className: p }),
    })
  );
}
const ln = pe("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  Qf = 550,
  MP = 80,
  NP = Vr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  jP = Vr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  FP = Vr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
  DP = V("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  BP = V(_P, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${ln.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${NP};
    animation-duration: ${Qf}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  &.${ln.ripplePulsate} {
    animation-duration: ${({ theme: e }) => e.transitions.duration.shorter}ms;
  }

  & .${ln.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${ln.childLeaving} {
    opacity: 0;
    animation-name: ${jP};
    animation-duration: ${Qf}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  & .${ln.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${FP};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  zP = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: s, ...a } = r,
      [l, u] = S.useState([]),
      c = S.useRef(0),
      d = S.useRef(null);
    S.useEffect(() => {
      d.current && (d.current(), (d.current = null));
    }, [l]);
    const f = S.useRef(!1),
      g = Wh(),
      p = S.useRef(null),
      v = S.useRef(null),
      x = S.useCallback(
        (b) => {
          const {
            pulsate: C,
            rippleX: k,
            rippleY: E,
            rippleSize: T,
            cb: $,
          } = b;
          u((w) => [
            ...w,
            R.jsx(
              BP,
              {
                classes: {
                  ripple: J(i.ripple, ln.ripple),
                  rippleVisible: J(i.rippleVisible, ln.rippleVisible),
                  ripplePulsate: J(i.ripplePulsate, ln.ripplePulsate),
                  child: J(i.child, ln.child),
                  childLeaving: J(i.childLeaving, ln.childLeaving),
                  childPulsate: J(i.childPulsate, ln.childPulsate),
                },
                timeout: Qf,
                pulsate: C,
                rippleX: k,
                rippleY: E,
                rippleSize: T,
              },
              c.current,
            ),
          ]),
            (c.current += 1),
            (d.current = $);
        },
        [i],
      ),
      m = S.useCallback(
        (b = {}, C = {}, k = () => {}) => {
          const {
            pulsate: E = !1,
            center: T = o || C.pulsate,
            fakeElement: $ = !1,
          } = C;
          if ((b == null ? void 0 : b.type) === "mousedown" && f.current) {
            f.current = !1;
            return;
          }
          (b == null ? void 0 : b.type) === "touchstart" && (f.current = !0);
          const w = $ ? null : v.current,
            P = w
              ? w.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let D, N, j;
          if (
            T ||
            b === void 0 ||
            (b.clientX === 0 && b.clientY === 0) ||
            (!b.clientX && !b.touches)
          )
            (D = Math.round(P.width / 2)), (N = Math.round(P.height / 2));
          else {
            const { clientX: _, clientY: B } =
              b.touches && b.touches.length > 0 ? b.touches[0] : b;
            (D = Math.round(_ - P.left)), (N = Math.round(B - P.top));
          }
          if (T)
            (j = Math.sqrt((2 * P.width ** 2 + P.height ** 2) / 3)),
              j % 2 === 0 && (j += 1);
          else {
            const _ =
                Math.max(Math.abs((w ? w.clientWidth : 0) - D), D) * 2 + 2,
              B = Math.max(Math.abs((w ? w.clientHeight : 0) - N), N) * 2 + 2;
            j = Math.sqrt(_ ** 2 + B ** 2);
          }
          b != null && b.touches
            ? p.current === null &&
              ((p.current = () => {
                x({ pulsate: E, rippleX: D, rippleY: N, rippleSize: j, cb: k });
              }),
              g.start(MP, () => {
                p.current && (p.current(), (p.current = null));
              }))
            : x({ pulsate: E, rippleX: D, rippleY: N, rippleSize: j, cb: k });
        },
        [o, x, g],
      ),
      y = S.useCallback(() => {
        m({}, { pulsate: !0 });
      }, [m]),
      h = S.useCallback(
        (b, C) => {
          if (
            (g.clear(),
            (b == null ? void 0 : b.type) === "touchend" && p.current)
          ) {
            p.current(),
              (p.current = null),
              g.start(0, () => {
                h(b, C);
              });
            return;
          }
          (p.current = null),
            u((k) => (k.length > 0 ? k.slice(1) : k)),
            (d.current = C);
        },
        [g],
      );
    return (
      S.useImperativeHandle(n, () => ({ pulsate: y, start: m, stop: h }), [
        y,
        m,
        h,
      ]),
      R.jsx(DP, {
        className: J(ln.root, i.root, s),
        ref: v,
        ...a,
        children: R.jsx(em, { component: null, exit: !0, children: l }),
      })
    );
  });
function UP(e) {
  return de("MuiButtonBase", e);
}
const WP = pe("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  VP = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      s = he({ root: ["root", t && "disabled", n && "focusVisible"] }, UP, o);
    return n && r && (s.root += ` ${r}`), s;
  },
  HP = V("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${WP.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  tm = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: s,
        className: a,
        component: l = "button",
        disabled: u = !1,
        disableRipple: c = !1,
        disableTouchRipple: d = !1,
        focusRipple: f = !1,
        focusVisibleClassName: g,
        LinkComponent: p = "a",
        onBlur: v,
        onClick: x,
        onContextMenu: m,
        onDragLeave: y,
        onFocus: h,
        onFocusVisible: b,
        onKeyDown: C,
        onKeyUp: k,
        onMouseDown: E,
        onMouseLeave: T,
        onMouseUp: $,
        onTouchEnd: w,
        onTouchMove: P,
        onTouchStart: D,
        tabIndex: N = 0,
        TouchRippleProps: j,
        touchRippleRef: _,
        type: B,
        ...K
      } = r,
      A = S.useRef(null),
      F = IP(),
      W = dt(F.ref, _),
      [q, Y] = S.useState(!1);
    u && q && Y(!1),
      S.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            Y(!0), A.current.focus();
          },
        }),
        [],
      );
    const re = F.shouldMount && !c && !u;
    S.useEffect(() => {
      q && f && !c && F.pulsate();
    }, [c, f, q, F]);
    function te(M, H, X = d) {
      return tr((Z) => (H && H(Z), X || F[M](Z), !0));
    }
    const ve = te("start", E),
      Ee = te("stop", m),
      Oe = te("stop", y),
      rt = te("stop", $),
      $e = te("stop", (M) => {
        q && M.preventDefault(), T && T(M);
      }),
      se = te("start", D),
      ye = te("stop", w),
      fe = te("stop", P),
      ze = te(
        "stop",
        (M) => {
          ly(M.target) || Y(!1), v && v(M);
        },
        !1,
      ),
      ne = tr((M) => {
        A.current || (A.current = M.currentTarget),
          ly(M.target) && (Y(!0), b && b(M)),
          h && h(M);
      }),
      be = () => {
        const M = A.current;
        return l && l !== "button" && !(M.tagName === "A" && M.href);
      },
      St = tr((M) => {
        f &&
          !M.repeat &&
          q &&
          M.key === " " &&
          F.stop(M, () => {
            F.start(M);
          }),
          M.target === M.currentTarget &&
            be() &&
            M.key === " " &&
            M.preventDefault(),
          C && C(M),
          M.target === M.currentTarget &&
            be() &&
            M.key === "Enter" &&
            !u &&
            (M.preventDefault(), x && x(M));
      }),
      _e = tr((M) => {
        f &&
          M.key === " " &&
          q &&
          !M.defaultPrevented &&
          F.stop(M, () => {
            F.pulsate(M);
          }),
          k && k(M),
          x &&
            M.target === M.currentTarget &&
            be() &&
            M.key === " " &&
            !M.defaultPrevented &&
            x(M);
      });
    let je = l;
    je === "button" && (K.href || K.to) && (je = p);
    const Ve = {};
    je === "button"
      ? ((Ve.type = B === void 0 ? "button" : B), (Ve.disabled = u))
      : (!K.href && !K.to && (Ve.role = "button"),
        u && (Ve["aria-disabled"] = u));
    const Tt = dt(n, A),
      ke = {
        ...r,
        centerRipple: i,
        component: l,
        disabled: u,
        disableRipple: c,
        disableTouchRipple: d,
        focusRipple: f,
        tabIndex: N,
        focusVisible: q,
      },
      O = VP(ke);
    return R.jsxs(HP, {
      as: je,
      className: J(O.root, a),
      ownerState: ke,
      onBlur: ze,
      onClick: x,
      onContextMenu: Ee,
      onFocus: ne,
      onKeyDown: St,
      onKeyUp: _e,
      onMouseDown: ve,
      onMouseLeave: $e,
      onMouseUp: rt,
      onDragLeave: Oe,
      onTouchEnd: ye,
      onTouchMove: fe,
      onTouchStart: se,
      ref: Tt,
      tabIndex: u ? -1 : N,
      type: B,
      ...Ve,
      ...K,
      children: [s, re ? R.jsx(zP, { ref: W, center: i, ...j }) : null],
    });
  });
function KP(e) {
  return typeof e.main == "string";
}
function GP(e, t = []) {
  if (!KP(e)) return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string") return !1;
  return !0;
}
function qe(e = []) {
  return ([, t]) => t && GP(t, e);
}
function qP(e) {
  return de("MuiAlert", e);
}
const Ey = pe("MuiAlert", [
  "root",
  "action",
  "icon",
  "message",
  "filled",
  "colorSuccess",
  "colorInfo",
  "colorWarning",
  "colorError",
  "filledSuccess",
  "filledInfo",
  "filledWarning",
  "filledError",
  "outlined",
  "outlinedSuccess",
  "outlinedInfo",
  "outlinedWarning",
  "outlinedError",
  "standard",
  "standardSuccess",
  "standardInfo",
  "standardWarning",
  "standardError",
]);
function XP(e) {
  return de("MuiIconButton", e);
}
const QP = pe("MuiIconButton", [
    "root",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "edgeStart",
    "edgeEnd",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
  ]),
  YP = (e) => {
    const { classes: t, disabled: n, color: r, edge: o, size: i } = e,
      s = {
        root: [
          "root",
          n && "disabled",
          r !== "default" && `color${z(r)}`,
          o && `edge${z(o)}`,
          `size${z(i)}`,
        ],
      };
    return he(s, XP, t);
  },
  JP = V(tm, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "default" && t[`color${z(n.color)}`],
        n.edge && t[`edge${z(n.edge)}`],
        t[`size${z(n.size)}`],
      ];
    },
  })(
    ce(({ theme: e }) => ({
      textAlign: "center",
      flex: "0 0 auto",
      fontSize: e.typography.pxToRem(24),
      padding: 8,
      borderRadius: "50%",
      color: (e.vars || e).palette.action.active,
      transition: e.transitions.create("background-color", {
        duration: e.transitions.duration.shortest,
      }),
      variants: [
        {
          props: (t) => !t.disableRipple,
          style: {
            "--IconButton-hoverBg": e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : $t(e.palette.action.active, e.palette.action.hoverOpacity),
            "&:hover": {
              backgroundColor: "var(--IconButton-hoverBg)",
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
          },
        },
        { props: { edge: "start" }, style: { marginLeft: -12 } },
        { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } },
        { props: { edge: "end" }, style: { marginRight: -12 } },
        { props: { edge: "end", size: "small" }, style: { marginRight: -3 } },
      ],
    })),
    ce(({ theme: e }) => ({
      variants: [
        { props: { color: "inherit" }, style: { color: "inherit" } },
        ...Object.entries(e.palette)
          .filter(qe())
          .map(([t]) => ({
            props: { color: t },
            style: { color: (e.vars || e).palette[t].main },
          })),
        ...Object.entries(e.palette)
          .filter(qe())
          .map(([t]) => ({
            props: { color: t },
            style: {
              "--IconButton-hoverBg": e.vars
                ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                : $t(
                    (e.vars || e).palette[t].main,
                    e.palette.action.hoverOpacity,
                  ),
            },
          })),
        {
          props: { size: "small" },
          style: { padding: 5, fontSize: e.typography.pxToRem(18) },
        },
        {
          props: { size: "large" },
          style: { padding: 12, fontSize: e.typography.pxToRem(28) },
        },
      ],
      [`&.${QP.disabled}`]: {
        backgroundColor: "transparent",
        color: (e.vars || e).palette.action.disabled,
      },
    })),
  ),
  nm = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiIconButton" }),
      {
        edge: o = !1,
        children: i,
        className: s,
        color: a = "default",
        disabled: l = !1,
        disableFocusRipple: u = !1,
        size: c = "medium",
        ...d
      } = r,
      f = {
        ...r,
        edge: o,
        color: a,
        disabled: l,
        disableFocusRipple: u,
        size: c,
      },
      g = YP(f);
    return R.jsx(JP, {
      className: J(g.root, s),
      centerRipple: !0,
      focusRipple: !u,
      disabled: l,
      ref: n,
      ...d,
      ownerState: f,
      children: i,
    });
  }),
  ZP = On(
    R.jsx("path", {
      d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z",
    }),
    "SuccessOutlined",
  ),
  eO = On(
    R.jsx("path", {
      d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z",
    }),
    "ReportProblemOutlined",
  ),
  tO = On(
    R.jsx("path", {
      d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    }),
    "ErrorOutline",
  ),
  nO = On(
    R.jsx("path", {
      d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z",
    }),
    "InfoOutlined",
  ),
  rO = On(
    R.jsx("path", {
      d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    }),
    "Close",
  ),
  oO = (e) => {
    const { variant: t, color: n, severity: r, classes: o } = e,
      i = {
        root: ["root", `color${z(n || r)}`, `${t}${z(n || r)}`, `${t}`],
        icon: ["icon"],
        message: ["message"],
        action: ["action"],
      };
    return he(i, qP, o);
  },
  iO = V(Ea, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${z(n.color || n.severity)}`],
      ];
    },
  })(
    ce(({ theme: e }) => {
      const t = e.palette.mode === "light" ? xo : Co,
        n = e.palette.mode === "light" ? Co : xo;
      return {
        ...e.typography.body2,
        backgroundColor: "transparent",
        display: "flex",
        padding: "6px 16px",
        variants: [
          ...Object.entries(e.palette)
            .filter(qe(["light"]))
            .map(([r]) => ({
              props: { colorSeverity: r, variant: "standard" },
              style: {
                color: e.vars
                  ? e.vars.palette.Alert[`${r}Color`]
                  : t(e.palette[r].light, 0.6),
                backgroundColor: e.vars
                  ? e.vars.palette.Alert[`${r}StandardBg`]
                  : n(e.palette[r].light, 0.9),
                [`& .${Ey.icon}`]: e.vars
                  ? { color: e.vars.palette.Alert[`${r}IconColor`] }
                  : { color: e.palette[r].main },
              },
            })),
          ...Object.entries(e.palette)
            .filter(qe(["light"]))
            .map(([r]) => ({
              props: { colorSeverity: r, variant: "outlined" },
              style: {
                color: e.vars
                  ? e.vars.palette.Alert[`${r}Color`]
                  : t(e.palette[r].light, 0.6),
                border: `1px solid ${(e.vars || e).palette[r].light}`,
                [`& .${Ey.icon}`]: e.vars
                  ? { color: e.vars.palette.Alert[`${r}IconColor`] }
                  : { color: e.palette[r].main },
              },
            })),
          ...Object.entries(e.palette)
            .filter(qe(["dark"]))
            .map(([r]) => ({
              props: { colorSeverity: r, variant: "filled" },
              style: {
                fontWeight: e.typography.fontWeightMedium,
                ...(e.vars
                  ? {
                      color: e.vars.palette.Alert[`${r}FilledColor`],
                      backgroundColor: e.vars.palette.Alert[`${r}FilledBg`],
                    }
                  : {
                      backgroundColor:
                        e.palette.mode === "dark"
                          ? e.palette[r].dark
                          : e.palette[r].main,
                      color: e.palette.getContrastText(e.palette[r].main),
                    }),
              },
            })),
        ],
      };
    }),
  ),
  sO = V("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon,
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9,
  }),
  aO = V("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (e, t) => t.message,
  })({ padding: "8px 0", minWidth: 0, overflow: "auto" }),
  ky = V("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (e, t) => t.action,
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8,
  }),
  Ry = {
    success: R.jsx(ZP, { fontSize: "inherit" }),
    warning: R.jsx(eO, { fontSize: "inherit" }),
    error: R.jsx(tO, { fontSize: "inherit" }),
    info: R.jsx(nO, { fontSize: "inherit" }),
  },
  lO = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiAlert" }),
      {
        action: o,
        children: i,
        className: s,
        closeText: a = "Close",
        color: l,
        components: u = {},
        componentsProps: c = {},
        icon: d,
        iconMapping: f = Ry,
        onClose: g,
        role: p = "alert",
        severity: v = "success",
        slotProps: x = {},
        slots: m = {},
        variant: y = "standard",
        ...h
      } = r,
      b = { ...r, color: l, severity: v, variant: y, colorSeverity: l || v },
      C = oO(b),
      k = {
        slots: { closeButton: u.CloseButton, closeIcon: u.CloseIcon, ...m },
        slotProps: { ...c, ...x },
      },
      [E, T] = Mt("closeButton", {
        elementType: nm,
        externalForwardedProps: k,
        ownerState: b,
      }),
      [$, w] = Mt("closeIcon", {
        elementType: rO,
        externalForwardedProps: k,
        ownerState: b,
      });
    return R.jsxs(iO, {
      role: p,
      elevation: 0,
      ownerState: b,
      className: J(C.root, s),
      ref: n,
      ...h,
      children: [
        d !== !1
          ? R.jsx(sO, {
              ownerState: b,
              className: C.icon,
              children: d || f[v] || Ry[v],
            })
          : null,
        R.jsx(aO, { ownerState: b, className: C.message, children: i }),
        o != null
          ? R.jsx(ky, { ownerState: b, className: C.action, children: o })
          : null,
        o == null && g
          ? R.jsx(ky, {
              ownerState: b,
              className: C.action,
              children: R.jsx(E, {
                size: "small",
                "aria-label": a,
                title: a,
                color: "inherit",
                onClick: g,
                ...T,
                children: R.jsx($, { fontSize: "small", ...w }),
              }),
            })
          : null,
      ],
    });
  });
function uO(e) {
  return de("MuiTypography", e);
}
pe("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const cO = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0,
  },
  dO = gP(),
  fO = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: o,
        variant: i,
        classes: s,
      } = e,
      a = {
        root: [
          "root",
          i,
          e.align !== "inherit" && `align${z(t)}`,
          n && "gutterBottom",
          r && "noWrap",
          o && "paragraph",
        ],
      };
    return he(a, uO, s);
  },
  pO = V("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== "inherit" && t[`align${z(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(
    ce(({ theme: e }) => {
      var t;
      return {
        margin: 0,
        variants: [
          {
            props: { variant: "inherit" },
            style: {
              font: "inherit",
              lineHeight: "inherit",
              letterSpacing: "inherit",
            },
          },
          ...Object.entries(e.typography)
            .filter(([n, r]) => n !== "inherit" && r && typeof r == "object")
            .map(([n, r]) => ({ props: { variant: n }, style: r })),
          ...Object.entries(e.palette)
            .filter(qe())
            .map(([n]) => ({
              props: { color: n },
              style: { color: (e.vars || e).palette[n].main },
            })),
          ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {})
            .filter(([, n]) => typeof n == "string")
            .map(([n]) => ({
              props: { color: `text${z(n)}` },
              style: { color: (e.vars || e).palette.text[n] },
            })),
          {
            props: ({ ownerState: n }) => n.align !== "inherit",
            style: { textAlign: "var(--Typography-textAlign)" },
          },
          {
            props: ({ ownerState: n }) => n.noWrap,
            style: {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
          },
          {
            props: ({ ownerState: n }) => n.gutterBottom,
            style: { marginBottom: "0.35em" },
          },
          {
            props: ({ ownerState: n }) => n.paragraph,
            style: { marginBottom: 16 },
          },
        ],
      };
    }),
  ),
  Ty = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  Yf = S.forwardRef(function (t, n) {
    const { color: r, ...o } = me({ props: t, name: "MuiTypography" }),
      i = !cO[r],
      s = dO({ ...o, ...(i && { color: r }) }),
      {
        align: a = "inherit",
        className: l,
        component: u,
        gutterBottom: c = !1,
        noWrap: d = !1,
        paragraph: f = !1,
        variant: g = "body1",
        variantMapping: p = Ty,
        ...v
      } = s,
      x = {
        ...s,
        align: a,
        color: r,
        className: l,
        component: u,
        gutterBottom: c,
        noWrap: d,
        paragraph: f,
        variant: g,
        variantMapping: p,
      },
      m = u || (f ? "p" : p[g] || Ty[g]) || "span",
      y = fO(x);
    return R.jsx(pO, {
      as: m,
      ref: n,
      className: J(y.root, l),
      ...v,
      ownerState: x,
      style: {
        ...(a !== "inherit" && { "--Typography-textAlign": a }),
        ...v.style,
      },
    });
  });
function hO(e) {
  return de("MuiAppBar", e);
}
pe("MuiAppBar", [
  "root",
  "positionFixed",
  "positionAbsolute",
  "positionSticky",
  "positionStatic",
  "positionRelative",
  "colorDefault",
  "colorPrimary",
  "colorSecondary",
  "colorInherit",
  "colorTransparent",
  "colorError",
  "colorInfo",
  "colorSuccess",
  "colorWarning",
]);
const mO = (e) => {
    const { color: t, position: n, classes: r } = e,
      o = { root: ["root", `color${z(t)}`, `position${z(n)}`] };
    return he(o, hO, r);
  },
  Py = (e, t) => (e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t),
  gO = V(Ea, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[`position${z(n.position)}`], t[`color${z(n.color)}`]];
    },
  })(
    ce(({ theme: e }) => ({
      display: "flex",
      flexDirection: "column",
      width: "100%",
      boxSizing: "border-box",
      flexShrink: 0,
      variants: [
        {
          props: { position: "fixed" },
          style: {
            position: "fixed",
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
            "@media print": { position: "absolute" },
          },
        },
        {
          props: { position: "absolute" },
          style: {
            position: "absolute",
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
          },
        },
        {
          props: { position: "sticky" },
          style: {
            position: "sticky",
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
          },
        },
        { props: { position: "static" }, style: { position: "static" } },
        { props: { position: "relative" }, style: { position: "relative" } },
        { props: { color: "inherit" }, style: { "--AppBar-color": "inherit" } },
        {
          props: { color: "default" },
          style: {
            "--AppBar-background": e.vars
              ? e.vars.palette.AppBar.defaultBg
              : e.palette.grey[100],
            "--AppBar-color": e.vars
              ? e.vars.palette.text.primary
              : e.palette.getContrastText(e.palette.grey[100]),
            ...e.applyStyles("dark", {
              "--AppBar-background": e.vars
                ? e.vars.palette.AppBar.defaultBg
                : e.palette.grey[900],
              "--AppBar-color": e.vars
                ? e.vars.palette.text.primary
                : e.palette.getContrastText(e.palette.grey[900]),
            }),
          },
        },
        ...Object.entries(e.palette)
          .filter(qe(["contrastText"]))
          .map(([t]) => ({
            props: { color: t },
            style: {
              "--AppBar-background": (e.vars ?? e).palette[t].main,
              "--AppBar-color": (e.vars ?? e).palette[t].contrastText,
            },
          })),
        {
          props: (t) =>
            t.enableColorOnDark === !0 &&
            !["inherit", "transparent"].includes(t.color),
          style: {
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
          },
        },
        {
          props: (t) =>
            t.enableColorOnDark === !1 &&
            !["inherit", "transparent"].includes(t.color),
          style: {
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
            ...e.applyStyles("dark", {
              backgroundColor: e.vars
                ? Py(e.vars.palette.AppBar.darkBg, "var(--AppBar-background)")
                : null,
              color: e.vars
                ? Py(e.vars.palette.AppBar.darkColor, "var(--AppBar-color)")
                : null,
            }),
          },
        },
        {
          props: { color: "transparent" },
          style: {
            "--AppBar-background": "transparent",
            "--AppBar-color": "inherit",
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
            ...e.applyStyles("dark", { backgroundImage: "none" }),
          },
        },
      ],
    })),
  ),
  yO = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiAppBar" }),
      {
        className: o,
        color: i = "primary",
        enableColorOnDark: s = !1,
        position: a = "fixed",
        ...l
      } = r,
      u = { ...r, color: i, position: a, enableColorOnDark: s },
      c = mO(u);
    return R.jsx(gO, {
      square: !0,
      component: "header",
      ownerState: u,
      elevation: 4,
      className: J(c.root, o, a === "fixed" && "mui-fixed"),
      ref: n,
      ...l,
    });
  });
function vO(e) {
  return typeof e == "function" ? e() : e;
}
const SO = S.forwardRef(function (t, n) {
  const { children: r, container: o, disablePortal: i = !1 } = t,
    [s, a] = S.useState(null),
    l = dt(S.isValidElement(r) ? Ni(r) : null, n);
  if (
    (wo(() => {
      i || a(vO(o) || document.body);
    }, [o, i]),
    wo(() => {
      if (s && !i)
        return (
          Wf(n, s),
          () => {
            Wf(n, null);
          }
        );
    }, [n, s, i]),
    i)
  ) {
    if (S.isValidElement(r)) {
      const u = { ref: l };
      return S.cloneElement(r, u);
    }
    return R.jsx(S.Fragment, { children: r });
  }
  return R.jsx(S.Fragment, { children: s && $h.createPortal(r, s) });
});
function Za(e) {
  return parseInt(e, 10) || 0;
}
const bO = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  },
};
function wO(e) {
  return (
    e == null ||
    Object.keys(e).length === 0 ||
    (e.outerHeightStyle === 0 && !e.overflowing)
  );
}
const xO = S.forwardRef(function (t, n) {
  const {
      onChange: r,
      maxRows: o,
      minRows: i = 1,
      style: s,
      value: a,
      ...l
    } = t,
    { current: u } = S.useRef(a != null),
    c = S.useRef(null),
    d = dt(n, c),
    f = S.useRef(null),
    g = S.useRef(null),
    p = S.useCallback(() => {
      const m = c.current,
        h = dr(m).getComputedStyle(m);
      if (h.width === "0px") return { outerHeightStyle: 0, overflowing: !1 };
      const b = g.current;
      (b.style.width = h.width),
        (b.value = m.value || t.placeholder || "x"),
        b.value.slice(-1) ===
          `
` && (b.value += " ");
      const C = h.boxSizing,
        k = Za(h.paddingBottom) + Za(h.paddingTop),
        E = Za(h.borderBottomWidth) + Za(h.borderTopWidth),
        T = b.scrollHeight;
      b.value = "x";
      const $ = b.scrollHeight;
      let w = T;
      i && (w = Math.max(Number(i) * $, w)),
        o && (w = Math.min(Number(o) * $, w)),
        (w = Math.max(w, $));
      const P = w + (C === "border-box" ? k + E : 0),
        D = Math.abs(w - T) <= 1;
      return { outerHeightStyle: P, overflowing: D };
    }, [o, i, t.placeholder]),
    v = S.useCallback(() => {
      const m = p();
      if (wO(m)) return;
      const y = m.outerHeightStyle,
        h = c.current;
      f.current !== y && ((f.current = y), (h.style.height = `${y}px`)),
        (h.style.overflow = m.overflowing ? "hidden" : "");
    }, [p]);
  wo(() => {
    const m = () => {
      v();
    };
    let y;
    const h = db(m),
      b = c.current,
      C = dr(b);
    C.addEventListener("resize", h);
    let k;
    return (
      typeof ResizeObserver < "u" &&
        ((k = new ResizeObserver(m)), k.observe(b)),
      () => {
        h.clear(),
          cancelAnimationFrame(y),
          C.removeEventListener("resize", h),
          k && k.disconnect();
      }
    );
  }, [p, v]),
    wo(() => {
      v();
    });
  const x = (m) => {
    u || v(), r && r(m);
  };
  return R.jsxs(S.Fragment, {
    children: [
      R.jsx("textarea", {
        value: a,
        onChange: x,
        ref: d,
        rows: i,
        style: s,
        ...l,
      }),
      R.jsx("textarea", {
        "aria-hidden": !0,
        className: t.className,
        readOnly: !0,
        ref: g,
        tabIndex: -1,
        style: { ...bO.shadow, ...s, paddingTop: 0, paddingBottom: 0 },
      }),
    ],
  });
});
function ta(e) {
  return typeof e == "string";
}
function Hr({ props: e, states: t, muiFormControl: n }) {
  return t.reduce(
    (r, o) => ((r[o] = e[o]), n && typeof e[o] > "u" && (r[o] = n[o]), r),
    {},
  );
}
const rm = S.createContext(void 0);
function hr() {
  return S.useContext(rm);
}
function Oy(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function ru(e, t = !1) {
  return (
    e &&
    ((Oy(e.value) && e.value !== "") ||
      (t && Oy(e.defaultValue) && e.defaultValue !== ""))
  );
}
function CO(e) {
  return e.startAdornment;
}
function EO(e) {
  return de("MuiInputBase", e);
}
const Ti = pe("MuiInputBase", [
  "root",
  "formControl",
  "focused",
  "disabled",
  "adornedStart",
  "adornedEnd",
  "error",
  "sizeSmall",
  "multiline",
  "colorSecondary",
  "fullWidth",
  "hiddenLabel",
  "readOnly",
  "input",
  "inputSizeSmall",
  "inputMultiline",
  "inputTypeSearch",
  "inputAdornedStart",
  "inputAdornedEnd",
  "inputHiddenLabel",
]);
var $y;
const Cc = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.formControl && t.formControl,
      n.startAdornment && t.adornedStart,
      n.endAdornment && t.adornedEnd,
      n.error && t.error,
      n.size === "small" && t.sizeSmall,
      n.multiline && t.multiline,
      n.color && t[`color${z(n.color)}`],
      n.fullWidth && t.fullWidth,
      n.hiddenLabel && t.hiddenLabel,
    ];
  },
  Ec = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.input,
      n.size === "small" && t.inputSizeSmall,
      n.multiline && t.inputMultiline,
      n.type === "search" && t.inputTypeSearch,
      n.startAdornment && t.inputAdornedStart,
      n.endAdornment && t.inputAdornedEnd,
      n.hiddenLabel && t.inputHiddenLabel,
    ];
  },
  kO = (e) => {
    const {
        classes: t,
        color: n,
        disabled: r,
        error: o,
        endAdornment: i,
        focused: s,
        formControl: a,
        fullWidth: l,
        hiddenLabel: u,
        multiline: c,
        readOnly: d,
        size: f,
        startAdornment: g,
        type: p,
      } = e,
      v = {
        root: [
          "root",
          `color${z(n)}`,
          r && "disabled",
          o && "error",
          l && "fullWidth",
          s && "focused",
          a && "formControl",
          f && f !== "medium" && `size${z(f)}`,
          c && "multiline",
          g && "adornedStart",
          i && "adornedEnd",
          u && "hiddenLabel",
          d && "readOnly",
        ],
        input: [
          "input",
          r && "disabled",
          p === "search" && "inputTypeSearch",
          c && "inputMultiline",
          f === "small" && "inputSizeSmall",
          u && "inputHiddenLabel",
          g && "inputAdornedStart",
          i && "inputAdornedEnd",
          d && "readOnly",
        ],
      };
    return he(v, EO, t);
  },
  kc = V("div", { name: "MuiInputBase", slot: "Root", overridesResolver: Cc })(
    ce(({ theme: e }) => ({
      ...e.typography.body1,
      color: (e.vars || e).palette.text.primary,
      lineHeight: "1.4375em",
      boxSizing: "border-box",
      position: "relative",
      cursor: "text",
      display: "inline-flex",
      alignItems: "center",
      [`&.${Ti.disabled}`]: {
        color: (e.vars || e).palette.text.disabled,
        cursor: "default",
      },
      variants: [
        {
          props: ({ ownerState: t }) => t.multiline,
          style: { padding: "4px 0 5px" },
        },
        {
          props: ({ ownerState: t, size: n }) => t.multiline && n === "small",
          style: { paddingTop: 1 },
        },
        { props: ({ ownerState: t }) => t.fullWidth, style: { width: "100%" } },
      ],
    })),
  ),
  Rc = V("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: Ec,
  })(
    ce(({ theme: e }) => {
      const t = e.palette.mode === "light",
        n = {
          color: "currentColor",
          ...(e.vars
            ? { opacity: e.vars.opacity.inputPlaceholder }
            : { opacity: t ? 0.42 : 0.5 }),
          transition: e.transitions.create("opacity", {
            duration: e.transitions.duration.shorter,
          }),
        },
        r = { opacity: "0 !important" },
        o = e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: t ? 0.42 : 0.5 };
      return {
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        "&::-webkit-input-placeholder": n,
        "&::-moz-placeholder": n,
        "&::-ms-input-placeholder": n,
        "&:focus": { outline: 0 },
        "&:invalid": { boxShadow: "none" },
        "&::-webkit-search-decoration": { WebkitAppearance: "none" },
        [`label[data-shrink=false] + .${Ti.formControl} &`]: {
          "&::-webkit-input-placeholder": r,
          "&::-moz-placeholder": r,
          "&::-ms-input-placeholder": r,
          "&:focus::-webkit-input-placeholder": o,
          "&:focus::-moz-placeholder": o,
          "&:focus::-ms-input-placeholder": o,
        },
        [`&.${Ti.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        variants: [
          {
            props: ({ ownerState: i }) => !i.disableInjectingGlobalStyles,
            style: {
              animationName: "mui-auto-fill-cancel",
              animationDuration: "10ms",
              "&:-webkit-autofill": {
                animationDuration: "5000s",
                animationName: "mui-auto-fill",
              },
            },
          },
          { props: { size: "small" }, style: { paddingTop: 1 } },
          {
            props: ({ ownerState: i }) => i.multiline,
            style: {
              height: "auto",
              resize: "none",
              padding: 0,
              paddingTop: 0,
            },
          },
          { props: { type: "search" }, style: { MozAppearance: "textfield" } },
        ],
      };
    }),
  ),
  Ay = Qh({
    "@keyframes mui-auto-fill": { from: { display: "block" } },
    "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
  }),
  om = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiInputBase" }),
      {
        "aria-describedby": o,
        autoComplete: i,
        autoFocus: s,
        className: a,
        color: l,
        components: u = {},
        componentsProps: c = {},
        defaultValue: d,
        disabled: f,
        disableInjectingGlobalStyles: g,
        endAdornment: p,
        error: v,
        fullWidth: x = !1,
        id: m,
        inputComponent: y = "input",
        inputProps: h = {},
        inputRef: b,
        margin: C,
        maxRows: k,
        minRows: E,
        multiline: T = !1,
        name: $,
        onBlur: w,
        onChange: P,
        onClick: D,
        onFocus: N,
        onKeyDown: j,
        onKeyUp: _,
        placeholder: B,
        readOnly: K,
        renderSuffix: A,
        rows: F,
        size: W,
        slotProps: q = {},
        slots: Y = {},
        startAdornment: re,
        type: te = "text",
        value: ve,
        ...Ee
      } = r,
      Oe = h.value != null ? h.value : ve,
      { current: rt } = S.useRef(Oe != null),
      $e = S.useRef(),
      se = S.useCallback((we) => {}, []),
      ye = dt($e, b, h.ref, se),
      [fe, ze] = S.useState(!1),
      ne = hr(),
      be = Hr({
        props: r,
        muiFormControl: ne,
        states: [
          "color",
          "disabled",
          "error",
          "hiddenLabel",
          "size",
          "required",
          "filled",
        ],
      });
    (be.focused = ne ? ne.focused : fe),
      S.useEffect(() => {
        !ne && f && fe && (ze(!1), w && w());
      }, [ne, f, fe, w]);
    const St = ne && ne.onFilled,
      _e = ne && ne.onEmpty,
      je = S.useCallback(
        (we) => {
          ru(we) ? St && St() : _e && _e();
        },
        [St, _e],
      );
    wo(() => {
      rt && je({ value: Oe });
    }, [Oe, je, rt]);
    const Ve = (we) => {
        N && N(we),
          h.onFocus && h.onFocus(we),
          ne && ne.onFocus ? ne.onFocus(we) : ze(!0);
      },
      Tt = (we) => {
        w && w(we),
          h.onBlur && h.onBlur(we),
          ne && ne.onBlur ? ne.onBlur(we) : ze(!1);
      },
      ke = (we, ...qn) => {
        if (!rt) {
          const No = we.target || $e.current;
          if (No == null) throw new Error(ur(1));
          je({ value: No.value });
        }
        h.onChange && h.onChange(we, ...qn), P && P(we, ...qn);
      };
    S.useEffect(() => {
      je($e.current);
    }, []);
    const O = (we) => {
      $e.current && we.currentTarget === we.target && $e.current.focus(),
        D && D(we);
    };
    let M = y,
      H = h;
    T &&
      M === "input" &&
      (F
        ? (H = { type: void 0, minRows: F, maxRows: F, ...H })
        : (H = { type: void 0, maxRows: k, minRows: E, ...H }),
      (M = xO));
    const X = (we) => {
      je(
        we.animationName === "mui-auto-fill-cancel"
          ? $e.current
          : { value: "x" },
      );
    };
    S.useEffect(() => {
      ne && ne.setAdornedStart(!!re);
    }, [ne, re]);
    const Z = {
        ...r,
        color: be.color || "primary",
        disabled: be.disabled,
        endAdornment: p,
        error: be.error,
        focused: be.focused,
        formControl: ne,
        fullWidth: x,
        hiddenLabel: be.hiddenLabel,
        multiline: T,
        size: be.size,
        startAdornment: re,
        type: te,
      },
      Q = kO(Z),
      oe = Y.root || u.Root || kc,
      He = q.root || c.root || {},
      Vt = Y.input || u.Input || Rc;
    return (
      (H = { ...H, ...(q.input ?? c.input) }),
      R.jsxs(S.Fragment, {
        children: [
          !g && typeof Ay == "function" && ($y || ($y = R.jsx(Ay, {}))),
          R.jsxs(oe, {
            ...He,
            ref: n,
            onClick: O,
            ...Ee,
            ...(!ta(oe) && { ownerState: { ...Z, ...He.ownerState } }),
            className: J(Q.root, He.className, a, K && "MuiInputBase-readOnly"),
            children: [
              re,
              R.jsx(rm.Provider, {
                value: null,
                children: R.jsx(Vt, {
                  "aria-invalid": be.error,
                  "aria-describedby": o,
                  autoComplete: i,
                  autoFocus: s,
                  defaultValue: d,
                  disabled: be.disabled,
                  id: m,
                  onAnimationStart: X,
                  name: $,
                  placeholder: B,
                  readOnly: K,
                  required: be.required,
                  rows: F,
                  value: Oe,
                  onKeyDown: j,
                  onKeyUp: _,
                  type: te,
                  ...H,
                  ...(!ta(Vt) && {
                    as: M,
                    ownerState: { ...Z, ...H.ownerState },
                  }),
                  ref: ye,
                  className: J(
                    Q.input,
                    H.className,
                    K && "MuiInputBase-readOnly",
                  ),
                  onBlur: Tt,
                  onChange: ke,
                  onFocus: Ve,
                }),
              }),
              p,
              A ? A({ ...be, startAdornment: re }) : null,
            ],
          }),
        ],
      })
    );
  });
function RO(e) {
  return de("MuiInput", e);
}
const Zi = { ...Ti, ...pe("MuiInput", ["root", "underline", "input"]) };
function TO(e) {
  return de("MuiOutlinedInput", e);
}
const _n = {
  ...Ti,
  ...pe("MuiOutlinedInput", ["root", "notchedOutline", "input"]),
};
function PO(e) {
  return de("MuiFilledInput", e);
}
const Qr = {
    ...Ti,
    ...pe("MuiFilledInput", [
      "root",
      "underline",
      "input",
      "adornedStart",
      "adornedEnd",
      "sizeSmall",
      "multiline",
      "hiddenLabel",
    ]),
  },
  OO = On(R.jsx("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
  $O = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  AO = S.forwardRef(function (t, n) {
    const r = fc(),
      o = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: i,
        appear: s = !0,
        children: a,
        easing: l,
        in: u,
        onEnter: c,
        onEntered: d,
        onEntering: f,
        onExit: g,
        onExited: p,
        onExiting: v,
        style: x,
        timeout: m = o,
        TransitionComponent: y = Hn,
        ...h
      } = t,
      b = S.useRef(null),
      C = dt(b, Ni(a), n),
      k = (j) => (_) => {
        if (j) {
          const B = b.current;
          _ === void 0 ? j(B) : j(B, _);
        }
      },
      E = k(f),
      T = k((j, _) => {
        _b(j);
        const B = tu({ style: x, timeout: m, easing: l }, { mode: "enter" });
        (j.style.webkitTransition = r.transitions.create("opacity", B)),
          (j.style.transition = r.transitions.create("opacity", B)),
          c && c(j, _);
      }),
      $ = k(d),
      w = k(v),
      P = k((j) => {
        const _ = tu({ style: x, timeout: m, easing: l }, { mode: "exit" });
        (j.style.webkitTransition = r.transitions.create("opacity", _)),
          (j.style.transition = r.transitions.create("opacity", _)),
          g && g(j);
      }),
      D = k(p),
      N = (j) => {
        i && i(b.current, j);
      };
    return R.jsx(y, {
      appear: s,
      in: u,
      nodeRef: b,
      onEnter: T,
      onEntered: $,
      onEntering: E,
      onExit: P,
      onExited: D,
      onExiting: w,
      addEndListener: N,
      timeout: m,
      ...h,
      children: (j, _) =>
        S.cloneElement(a, {
          style: {
            opacity: 0,
            visibility: j === "exited" && !u ? "hidden" : void 0,
            ...$O[j],
            ...x,
            ...a.props.style,
          },
          ref: C,
          ..._,
        }),
    });
  });
function IO(e) {
  return de("MuiBackdrop", e);
}
pe("MuiBackdrop", ["root", "invisible"]);
const LO = (e) => {
    const { ownerState: t, ...n } = e;
    return n;
  },
  _O = (e) => {
    const { classes: t, invisible: n } = e;
    return he({ root: ["root", n && "invisible"] }, IO, t);
  },
  MO = V("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.invisible && t.invisible];
    },
  })({
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent",
    variants: [
      { props: { invisible: !0 }, style: { backgroundColor: "transparent" } },
    ],
  }),
  NO = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiBackdrop" }),
      {
        children: o,
        className: i,
        component: s = "div",
        invisible: a = !1,
        open: l,
        components: u = {},
        componentsProps: c = {},
        slotProps: d = {},
        slots: f = {},
        TransitionComponent: g,
        transitionDuration: p,
        ...v
      } = r,
      x = { ...r, component: s, invisible: a },
      m = _O(x),
      y = { transition: g, root: u.Root, ...f },
      h = { ...c, ...d },
      b = { slots: y, slotProps: h },
      [C, k] = Mt("root", {
        elementType: MO,
        externalForwardedProps: b,
        className: J(m.root, i),
        ownerState: x,
      }),
      [E, T] = Mt("transition", {
        elementType: AO,
        externalForwardedProps: b,
        ownerState: x,
      }),
      $ = LO(T);
    return R.jsx(E, {
      in: l,
      timeout: p,
      ...v,
      ...$,
      children: R.jsx(C, {
        "aria-hidden": !0,
        ...k,
        classes: m,
        ref: n,
        children: o,
      }),
    });
  });
function jO(e) {
  return de("MuiButton", e);
}
const Ho = pe("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorError",
    "colorInfo",
    "colorWarning",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "icon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
  ]),
  Mb = S.createContext({}),
  Nb = S.createContext(void 0),
  FO = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: o,
        variant: i,
        classes: s,
      } = e,
      a = {
        root: [
          "root",
          i,
          `${i}${z(t)}`,
          `size${z(o)}`,
          `${i}Size${z(o)}`,
          `color${z(t)}`,
          n && "disableElevation",
          r && "fullWidth",
        ],
        label: ["label"],
        startIcon: ["icon", "startIcon", `iconSize${z(o)}`],
        endIcon: ["icon", "endIcon", `iconSize${z(o)}`],
      },
      l = he(a, jO, s);
    return { ...s, ...l };
  },
  jb = [
    {
      props: { size: "small" },
      style: { "& > *:nth-of-type(1)": { fontSize: 18 } },
    },
    {
      props: { size: "medium" },
      style: { "& > *:nth-of-type(1)": { fontSize: 20 } },
    },
    {
      props: { size: "large" },
      style: { "& > *:nth-of-type(1)": { fontSize: 22 } },
    },
  ],
  DO = V(tm, {
    shouldForwardProp: (e) => sn(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${z(n.color)}`],
        t[`size${z(n.size)}`],
        t[`${n.variant}Size${z(n.size)}`],
        n.color === "inherit" && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    ce(({ theme: e }) => {
      const t =
          e.palette.mode === "light"
            ? e.palette.grey[300]
            : e.palette.grey[800],
        n =
          e.palette.mode === "light"
            ? e.palette.grey.A100
            : e.palette.grey[700];
      return {
        ...e.typography.button,
        minWidth: 64,
        padding: "6px 16px",
        border: 0,
        borderRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create(
          ["background-color", "box-shadow", "border-color", "color"],
          { duration: e.transitions.duration.short },
        ),
        "&:hover": { textDecoration: "none" },
        [`&.${Ho.disabled}`]: { color: (e.vars || e).palette.action.disabled },
        variants: [
          {
            props: { variant: "contained" },
            style: {
              color: "var(--variant-containedColor)",
              backgroundColor: "var(--variant-containedBg)",
              boxShadow: (e.vars || e).shadows[2],
              "&:hover": {
                boxShadow: (e.vars || e).shadows[4],
                "@media (hover: none)": { boxShadow: (e.vars || e).shadows[2] },
              },
              "&:active": { boxShadow: (e.vars || e).shadows[8] },
              [`&.${Ho.focusVisible}`]: { boxShadow: (e.vars || e).shadows[6] },
              [`&.${Ho.disabled}`]: {
                color: (e.vars || e).palette.action.disabled,
                boxShadow: (e.vars || e).shadows[0],
                backgroundColor: (e.vars || e).palette.action
                  .disabledBackground,
              },
            },
          },
          {
            props: { variant: "outlined" },
            style: {
              padding: "5px 15px",
              border: "1px solid currentColor",
              borderColor: "var(--variant-outlinedBorder, currentColor)",
              backgroundColor: "var(--variant-outlinedBg)",
              color: "var(--variant-outlinedColor)",
              [`&.${Ho.disabled}`]: {
                border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`,
              },
            },
          },
          {
            props: { variant: "text" },
            style: {
              padding: "6px 8px",
              color: "var(--variant-textColor)",
              backgroundColor: "var(--variant-textBg)",
            },
          },
          ...Object.entries(e.palette)
            .filter(qe())
            .map(([r]) => ({
              props: { color: r },
              style: {
                "--variant-textColor": (e.vars || e).palette[r].main,
                "--variant-outlinedColor": (e.vars || e).palette[r].main,
                "--variant-outlinedBorder": e.vars
                  ? `rgba(${e.vars.palette[r].mainChannel} / 0.5)`
                  : $t(e.palette[r].main, 0.5),
                "--variant-containedColor": (e.vars || e).palette[r]
                  .contrastText,
                "--variant-containedBg": (e.vars || e).palette[r].main,
                "@media (hover: hover)": {
                  "&:hover": {
                    "--variant-containedBg": (e.vars || e).palette[r].dark,
                    "--variant-textBg": e.vars
                      ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : $t(e.palette[r].main, e.palette.action.hoverOpacity),
                    "--variant-outlinedBorder": (e.vars || e).palette[r].main,
                    "--variant-outlinedBg": e.vars
                      ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : $t(e.palette[r].main, e.palette.action.hoverOpacity),
                  },
                },
              },
            })),
          {
            props: { color: "inherit" },
            style: {
              color: "inherit",
              borderColor: "currentColor",
              "--variant-containedBg": e.vars
                ? e.vars.palette.Button.inheritContainedBg
                : t,
              "@media (hover: hover)": {
                "&:hover": {
                  "--variant-containedBg": e.vars
                    ? e.vars.palette.Button.inheritContainedHoverBg
                    : n,
                  "--variant-textBg": e.vars
                    ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : $t(e.palette.text.primary, e.palette.action.hoverOpacity),
                  "--variant-outlinedBg": e.vars
                    ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : $t(e.palette.text.primary, e.palette.action.hoverOpacity),
                },
              },
            },
          },
          {
            props: { size: "small", variant: "text" },
            style: { padding: "4px 5px", fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "text" },
            style: { padding: "8px 11px", fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { size: "small", variant: "outlined" },
            style: { padding: "3px 9px", fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "outlined" },
            style: { padding: "7px 21px", fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { size: "small", variant: "contained" },
            style: { padding: "4px 10px", fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "contained" },
            style: { padding: "8px 22px", fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { disableElevation: !0 },
            style: {
              boxShadow: "none",
              "&:hover": { boxShadow: "none" },
              [`&.${Ho.focusVisible}`]: { boxShadow: "none" },
              "&:active": { boxShadow: "none" },
              [`&.${Ho.disabled}`]: { boxShadow: "none" },
            },
          },
          { props: { fullWidth: !0 }, style: { width: "100%" } },
        ],
      };
    }),
  ),
  BO = V("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${z(n.size)}`]];
    },
  })({
    display: "inherit",
    marginRight: 8,
    marginLeft: -4,
    variants: [{ props: { size: "small" }, style: { marginLeft: -2 } }, ...jb],
  }),
  zO = V("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${z(n.size)}`]];
    },
  })({
    display: "inherit",
    marginRight: -4,
    marginLeft: 8,
    variants: [{ props: { size: "small" }, style: { marginRight: -2 } }, ...jb],
  }),
  Tc = S.forwardRef(function (t, n) {
    const r = S.useContext(Mb),
      o = S.useContext(Nb),
      i = ea(r, t),
      s = me({ props: i, name: "MuiButton" }),
      {
        children: a,
        color: l = "primary",
        component: u = "button",
        className: c,
        disabled: d = !1,
        disableElevation: f = !1,
        disableFocusRipple: g = !1,
        endIcon: p,
        focusVisibleClassName: v,
        fullWidth: x = !1,
        size: m = "medium",
        startIcon: y,
        type: h,
        variant: b = "text",
        ...C
      } = s,
      k = {
        ...s,
        color: l,
        component: u,
        disabled: d,
        disableElevation: f,
        disableFocusRipple: g,
        fullWidth: x,
        size: m,
        type: h,
        variant: b,
      },
      E = FO(k),
      T =
        y && R.jsx(BO, { className: E.startIcon, ownerState: k, children: y }),
      $ = p && R.jsx(zO, { className: E.endIcon, ownerState: k, children: p }),
      w = o || "";
    return R.jsxs(DO, {
      ownerState: k,
      className: J(r.className, E.root, c, w),
      component: u,
      disabled: d,
      focusRipple: !g,
      focusVisibleClassName: J(E.focusVisible, v),
      ref: n,
      type: h,
      ...C,
      classes: E,
      children: [T, a, $],
    });
  });
function UO(e) {
  return de("MuiButtonGroup", e);
}
const le = pe("MuiButtonGroup", [
    "root",
    "contained",
    "outlined",
    "text",
    "disableElevation",
    "disabled",
    "firstButton",
    "fullWidth",
    "horizontal",
    "vertical",
    "colorPrimary",
    "colorSecondary",
    "grouped",
    "groupedHorizontal",
    "groupedVertical",
    "groupedText",
    "groupedTextHorizontal",
    "groupedTextVertical",
    "groupedTextPrimary",
    "groupedTextSecondary",
    "groupedOutlined",
    "groupedOutlinedHorizontal",
    "groupedOutlinedVertical",
    "groupedOutlinedPrimary",
    "groupedOutlinedSecondary",
    "groupedContained",
    "groupedContainedHorizontal",
    "groupedContainedVertical",
    "groupedContainedPrimary",
    "groupedContainedSecondary",
    "lastButton",
    "middleButton",
  ]),
  WO = (e, t) => {
    const { ownerState: n } = e;
    return [
      { [`& .${le.grouped}`]: t.grouped },
      { [`& .${le.grouped}`]: t[`grouped${z(n.orientation)}`] },
      { [`& .${le.grouped}`]: t[`grouped${z(n.variant)}`] },
      { [`& .${le.grouped}`]: t[`grouped${z(n.variant)}${z(n.orientation)}`] },
      { [`& .${le.grouped}`]: t[`grouped${z(n.variant)}${z(n.color)}`] },
      { [`& .${le.firstButton}`]: t.firstButton },
      { [`& .${le.lastButton}`]: t.lastButton },
      { [`& .${le.middleButton}`]: t.middleButton },
      t.root,
      t[n.variant],
      n.disableElevation === !0 && t.disableElevation,
      n.fullWidth && t.fullWidth,
      n.orientation === "vertical" && t.vertical,
    ];
  },
  VO = (e) => {
    const {
        classes: t,
        color: n,
        disabled: r,
        disableElevation: o,
        fullWidth: i,
        orientation: s,
        variant: a,
      } = e,
      l = {
        root: [
          "root",
          a,
          s,
          i && "fullWidth",
          o && "disableElevation",
          `color${z(n)}`,
        ],
        grouped: [
          "grouped",
          `grouped${z(s)}`,
          `grouped${z(a)}`,
          `grouped${z(a)}${z(s)}`,
          `grouped${z(a)}${z(n)}`,
          r && "disabled",
        ],
        firstButton: ["firstButton"],
        lastButton: ["lastButton"],
        middleButton: ["middleButton"],
      };
    return he(l, UO, t);
  },
  HO = V("div", {
    name: "MuiButtonGroup",
    slot: "Root",
    overridesResolver: WO,
  })(
    ce(({ theme: e }) => ({
      display: "inline-flex",
      borderRadius: (e.vars || e).shape.borderRadius,
      variants: [
        {
          props: { variant: "contained" },
          style: { boxShadow: (e.vars || e).shadows[2] },
        },
        { props: { disableElevation: !0 }, style: { boxShadow: "none" } },
        { props: { fullWidth: !0 }, style: { width: "100%" } },
        {
          props: { orientation: "vertical" },
          style: {
            flexDirection: "column",
            [`& .${le.lastButton},& .${le.middleButton}`]: {
              borderTopRightRadius: 0,
              borderTopLeftRadius: 0,
            },
            [`& .${le.firstButton},& .${le.middleButton}`]: {
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 0,
            },
          },
        },
        {
          props: { orientation: "horizontal" },
          style: {
            [`& .${le.firstButton},& .${le.middleButton}`]: {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
            [`& .${le.lastButton},& .${le.middleButton}`]: {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
          },
        },
        {
          props: { variant: "text", orientation: "horizontal" },
          style: {
            [`& .${le.firstButton},& .${le.middleButton}`]: {
              borderRight: e.vars
                ? `1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
                : `1px solid ${e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
              [`&.${le.disabled}`]: {
                borderRight: `1px solid ${(e.vars || e).palette.action.disabled}`,
              },
            },
          },
        },
        {
          props: { variant: "text", orientation: "vertical" },
          style: {
            [`& .${le.firstButton},& .${le.middleButton}`]: {
              borderBottom: e.vars
                ? `1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
                : `1px solid ${e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
              [`&.${le.disabled}`]: {
                borderBottom: `1px solid ${(e.vars || e).palette.action.disabled}`,
              },
            },
          },
        },
        ...Object.entries(e.palette)
          .filter(qe())
          .flatMap(([t]) => [
            {
              props: { variant: "text", color: t },
              style: {
                [`& .${le.firstButton},& .${le.middleButton}`]: {
                  borderColor: e.vars
                    ? `rgba(${e.vars.palette[t].mainChannel} / 0.5)`
                    : $t(e.palette[t].main, 0.5),
                },
              },
            },
          ]),
        {
          props: { variant: "outlined", orientation: "horizontal" },
          style: {
            [`& .${le.firstButton},& .${le.middleButton}`]: {
              borderRightColor: "transparent",
              "&:hover": { borderRightColor: "currentColor" },
            },
            [`& .${le.lastButton},& .${le.middleButton}`]: { marginLeft: -1 },
          },
        },
        {
          props: { variant: "outlined", orientation: "vertical" },
          style: {
            [`& .${le.firstButton},& .${le.middleButton}`]: {
              borderBottomColor: "transparent",
              "&:hover": { borderBottomColor: "currentColor" },
            },
            [`& .${le.lastButton},& .${le.middleButton}`]: { marginTop: -1 },
          },
        },
        {
          props: { variant: "contained", orientation: "horizontal" },
          style: {
            [`& .${le.firstButton},& .${le.middleButton}`]: {
              borderRight: `1px solid ${(e.vars || e).palette.grey[400]}`,
              [`&.${le.disabled}`]: {
                borderRight: `1px solid ${(e.vars || e).palette.action.disabled}`,
              },
            },
          },
        },
        {
          props: { variant: "contained", orientation: "vertical" },
          style: {
            [`& .${le.firstButton},& .${le.middleButton}`]: {
              borderBottom: `1px solid ${(e.vars || e).palette.grey[400]}`,
              [`&.${le.disabled}`]: {
                borderBottom: `1px solid ${(e.vars || e).palette.action.disabled}`,
              },
            },
          },
        },
        ...Object.entries(e.palette)
          .filter(qe(["dark"]))
          .map(([t]) => ({
            props: { variant: "contained", color: t },
            style: {
              [`& .${le.firstButton},& .${le.middleButton}`]: {
                borderColor: (e.vars || e).palette[t].dark,
              },
            },
          })),
      ],
      [`& .${le.grouped}`]: {
        minWidth: 40,
        boxShadow: "none",
        props: { variant: "contained" },
        style: { "&:hover": { boxShadow: "none" } },
      },
    })),
  ),
  Fb = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiButtonGroup" }),
      {
        children: o,
        className: i,
        color: s = "primary",
        component: a = "div",
        disabled: l = !1,
        disableElevation: u = !1,
        disableFocusRipple: c = !1,
        disableRipple: d = !1,
        fullWidth: f = !1,
        orientation: g = "horizontal",
        size: p = "medium",
        variant: v = "outlined",
        ...x
      } = r,
      m = {
        ...r,
        color: s,
        component: a,
        disabled: l,
        disableElevation: u,
        disableFocusRipple: c,
        disableRipple: d,
        fullWidth: f,
        orientation: g,
        size: p,
        variant: v,
      },
      y = VO(m),
      h = S.useMemo(
        () => ({
          className: y.grouped,
          color: s,
          disabled: l,
          disableElevation: u,
          disableFocusRipple: c,
          disableRipple: d,
          fullWidth: f,
          size: p,
          variant: v,
        }),
        [s, l, u, c, d, f, p, v, y.grouped],
      ),
      b = XT(o),
      C = b.length,
      k = (E) => {
        const T = E === 0,
          $ = E === C - 1;
        return T && $
          ? ""
          : T
            ? y.firstButton
            : $
              ? y.lastButton
              : y.middleButton;
      };
    return R.jsx(HO, {
      as: a,
      role: "group",
      className: J(y.root, i),
      ref: n,
      ownerState: m,
      ...x,
      children: R.jsx(Mb.Provider, {
        value: h,
        children: b.map((E, T) =>
          R.jsx(Nb.Provider, { value: k(T), children: E }, T),
        ),
      }),
    });
  });
function KO(e) {
  return de("PrivateSwitchBase", e);
}
pe("PrivateSwitchBase", [
  "root",
  "checked",
  "disabled",
  "input",
  "edgeStart",
  "edgeEnd",
]);
const GO = (e) => {
    const { classes: t, checked: n, disabled: r, edge: o } = e,
      i = {
        root: ["root", n && "checked", r && "disabled", o && `edge${z(o)}`],
        input: ["input"],
      };
    return he(i, KO, t);
  },
  qO = V(tm)({
    padding: 9,
    borderRadius: "50%",
    variants: [
      { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } },
      {
        props: ({ edge: e, ownerState: t }) =>
          e === "start" && t.size !== "small",
        style: { marginLeft: -12 },
      },
      { props: { edge: "end", size: "small" }, style: { marginRight: -3 } },
      {
        props: ({ edge: e, ownerState: t }) =>
          e === "end" && t.size !== "small",
        style: { marginRight: -12 },
      },
    ],
  }),
  XO = V("input", { shouldForwardProp: sn })({
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1,
  }),
  Db = S.forwardRef(function (t, n) {
    const {
        autoFocus: r,
        checked: o,
        checkedIcon: i,
        className: s,
        defaultChecked: a,
        disabled: l,
        disableFocusRipple: u = !1,
        edge: c = !1,
        icon: d,
        id: f,
        inputProps: g,
        inputRef: p,
        name: v,
        onBlur: x,
        onChange: m,
        onFocus: y,
        readOnly: h,
        required: b = !1,
        tabIndex: C,
        type: k,
        value: E,
        ...T
      } = t,
      [$, w] = Vf({
        controlled: o,
        default: !!a,
        name: "SwitchBase",
        state: "checked",
      }),
      P = hr(),
      D = (F) => {
        y && y(F), P && P.onFocus && P.onFocus(F);
      },
      N = (F) => {
        x && x(F), P && P.onBlur && P.onBlur(F);
      },
      j = (F) => {
        if (F.nativeEvent.defaultPrevented) return;
        const W = F.target.checked;
        w(W), m && m(F, W);
      };
    let _ = l;
    P && typeof _ > "u" && (_ = P.disabled);
    const B = k === "checkbox" || k === "radio",
      K = { ...t, checked: $, disabled: _, disableFocusRipple: u, edge: c },
      A = GO(K);
    return R.jsxs(qO, {
      component: "span",
      className: J(A.root, s),
      centerRipple: !0,
      focusRipple: !u,
      disabled: _,
      tabIndex: null,
      role: void 0,
      onFocus: D,
      onBlur: N,
      ownerState: K,
      ref: n,
      ...T,
      children: [
        R.jsx(XO, {
          autoFocus: r,
          checked: o,
          defaultChecked: a,
          className: A.input,
          disabled: _,
          id: B ? f : void 0,
          name: v,
          onChange: j,
          readOnly: h,
          ref: p,
          required: b,
          ownerState: K,
          tabIndex: C,
          type: k,
          ...(k === "checkbox" && E === void 0 ? {} : { value: E }),
          ...g,
        }),
        $ ? i : d,
      ],
    });
  }),
  QO = On(
    R.jsx("path", {
      d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
    }),
    "CheckBoxOutlineBlank",
  ),
  YO = On(
    R.jsx("path", {
      d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    }),
    "CheckBox",
  ),
  JO = On(
    R.jsx("path", {
      d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z",
    }),
    "IndeterminateCheckBox",
  );
function ZO(e) {
  return de("MuiCheckbox", e);
}
const kd = pe("MuiCheckbox", [
    "root",
    "checked",
    "disabled",
    "indeterminate",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
    "sizeMedium",
  ]),
  e$ = (e) => {
    const { classes: t, indeterminate: n, color: r, size: o } = e,
      i = {
        root: ["root", n && "indeterminate", `color${z(r)}`, `size${z(o)}`],
      },
      s = he(i, ZO, t);
    return { ...t, ...s };
  },
  t$ = V(Db, {
    shouldForwardProp: (e) => sn(e) || e === "classes",
    name: "MuiCheckbox",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.indeterminate && t.indeterminate,
        t[`size${z(n.size)}`],
        n.color !== "default" && t[`color${z(n.color)}`],
      ];
    },
  })(
    ce(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      variants: [
        {
          props: { color: "default", disableRipple: !1 },
          style: {
            "&:hover": {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
                : $t(e.palette.action.active, e.palette.action.hoverOpacity),
            },
          },
        },
        ...Object.entries(e.palette)
          .filter(qe())
          .map(([t]) => ({
            props: { color: t, disableRipple: !1 },
            style: {
              "&:hover": {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                  : $t(e.palette[t].main, e.palette.action.hoverOpacity),
              },
            },
          })),
        ...Object.entries(e.palette)
          .filter(qe())
          .map(([t]) => ({
            props: { color: t },
            style: {
              [`&.${kd.checked}, &.${kd.indeterminate}`]: {
                color: (e.vars || e).palette[t].main,
              },
              [`&.${kd.disabled}`]: {
                color: (e.vars || e).palette.action.disabled,
              },
            },
          })),
        {
          props: { disableRipple: !1 },
          style: {
            "&:hover": {
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
          },
        },
      ],
    })),
  ),
  n$ = R.jsx(YO, {}),
  r$ = R.jsx(QO, {}),
  o$ = R.jsx(JO, {}),
  Bb = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiCheckbox" }),
      {
        checkedIcon: o = n$,
        color: i = "primary",
        icon: s = r$,
        indeterminate: a = !1,
        indeterminateIcon: l = o$,
        inputProps: u,
        size: c = "medium",
        disableRipple: d = !1,
        className: f,
        ...g
      } = r,
      p = a ? l : s,
      v = a ? l : o,
      x = { ...r, disableRipple: d, color: i, indeterminate: a, size: c },
      m = e$(x);
    return R.jsx(t$, {
      type: "checkbox",
      inputProps: { "data-indeterminate": a, ...u },
      icon: S.cloneElement(p, { fontSize: p.props.fontSize ?? c }),
      checkedIcon: S.cloneElement(v, { fontSize: v.props.fontSize ?? c }),
      ownerState: x,
      ref: n,
      className: J(m.root, f),
      disableRipple: d,
      ...g,
      classes: m,
    });
  });
function i$(e) {
  return de("MuiCircularProgress", e);
}
pe("MuiCircularProgress", [
  "root",
  "determinate",
  "indeterminate",
  "colorPrimary",
  "colorSecondary",
  "svg",
  "circle",
  "circleDeterminate",
  "circleIndeterminate",
  "circleDisableShrink",
]);
const yr = 44,
  Jf = Vr`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  Zf = Vr`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,
  s$ =
    typeof Jf != "string"
      ? Mi`
        animation: ${Jf} 1.4s linear infinite;
      `
      : null,
  a$ =
    typeof Zf != "string"
      ? Mi`
        animation: ${Zf} 1.4s ease-in-out infinite;
      `
      : null,
  l$ = (e) => {
    const { classes: t, variant: n, color: r, disableShrink: o } = e,
      i = {
        root: ["root", n, `color${z(r)}`],
        svg: ["svg"],
        circle: ["circle", `circle${z(n)}`, o && "circleDisableShrink"],
      };
    return he(i, i$, t);
  },
  u$ = V("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[n.variant], t[`color${z(n.color)}`]];
    },
  })(
    ce(({ theme: e }) => ({
      display: "inline-block",
      variants: [
        {
          props: { variant: "determinate" },
          style: { transition: e.transitions.create("transform") },
        },
        {
          props: { variant: "indeterminate" },
          style: s$ || { animation: `${Jf} 1.4s linear infinite` },
        },
        ...Object.entries(e.palette)
          .filter(qe())
          .map(([t]) => ({
            props: { color: t },
            style: { color: (e.vars || e).palette[t].main },
          })),
      ],
    })),
  ),
  c$ = V("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (e, t) => t.svg,
  })({ display: "block" }),
  d$ = V("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.circle,
        t[`circle${z(n.variant)}`],
        n.disableShrink && t.circleDisableShrink,
      ];
    },
  })(
    ce(({ theme: e }) => ({
      stroke: "currentColor",
      variants: [
        {
          props: { variant: "determinate" },
          style: { transition: e.transitions.create("stroke-dashoffset") },
        },
        {
          props: { variant: "indeterminate" },
          style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 },
        },
        {
          props: ({ ownerState: t }) =>
            t.variant === "indeterminate" && !t.disableShrink,
          style: a$ || { animation: `${Zf} 1.4s ease-in-out infinite` },
        },
      ],
    })),
  ),
  f$ = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiCircularProgress" }),
      {
        className: o,
        color: i = "primary",
        disableShrink: s = !1,
        size: a = 40,
        style: l,
        thickness: u = 3.6,
        value: c = 0,
        variant: d = "indeterminate",
        ...f
      } = r,
      g = {
        ...r,
        color: i,
        disableShrink: s,
        size: a,
        thickness: u,
        value: c,
        variant: d,
      },
      p = l$(g),
      v = {},
      x = {},
      m = {};
    if (d === "determinate") {
      const y = 2 * Math.PI * ((yr - u) / 2);
      (v.strokeDasharray = y.toFixed(3)),
        (m["aria-valuenow"] = Math.round(c)),
        (v.strokeDashoffset = `${(((100 - c) / 100) * y).toFixed(3)}px`),
        (x.transform = "rotate(-90deg)");
    }
    return R.jsx(u$, {
      className: J(p.root, o),
      style: { width: a, height: a, ...x, ...l },
      ownerState: g,
      ref: n,
      role: "progressbar",
      ...m,
      ...f,
      children: R.jsx(c$, {
        className: p.svg,
        ownerState: g,
        viewBox: `${yr / 2} ${yr / 2} ${yr} ${yr}`,
        children: R.jsx(d$, {
          className: p.circle,
          style: v,
          ownerState: g,
          cx: yr,
          cy: yr,
          r: (yr - u) / 2,
          fill: "none",
          strokeWidth: u,
        }),
      }),
    });
  });
function Iy(e) {
  return e.substring(2).toLowerCase();
}
function p$(e, t) {
  return (
    t.documentElement.clientWidth < e.clientX ||
    t.documentElement.clientHeight < e.clientY
  );
}
function h$(e) {
  const {
      children: t,
      disableReactTree: n = !1,
      mouseEvent: r = "onClick",
      onClickAway: o,
      touchEvent: i = "onTouchEnd",
    } = e,
    s = S.useRef(!1),
    a = S.useRef(null),
    l = S.useRef(!1),
    u = S.useRef(!1);
  S.useEffect(
    () => (
      setTimeout(() => {
        l.current = !0;
      }, 0),
      () => {
        l.current = !1;
      }
    ),
    [],
  );
  const c = dt(Ni(t), a),
    d = tr((p) => {
      const v = u.current;
      u.current = !1;
      const x = Bt(a.current);
      if (!l.current || !a.current || ("clientX" in p && p$(p, x))) return;
      if (s.current) {
        s.current = !1;
        return;
      }
      let m;
      p.composedPath
        ? (m = p.composedPath().includes(a.current))
        : (m =
            !x.documentElement.contains(p.target) ||
            a.current.contains(p.target)),
        !m && (n || !v) && o(p);
    }),
    f = (p) => (v) => {
      u.current = !0;
      const x = t.props[p];
      x && x(v);
    },
    g = { ref: c };
  return (
    i !== !1 && (g[i] = f(i)),
    S.useEffect(() => {
      if (i !== !1) {
        const p = Iy(i),
          v = Bt(a.current),
          x = () => {
            s.current = !0;
          };
        return (
          v.addEventListener(p, d),
          v.addEventListener("touchmove", x),
          () => {
            v.removeEventListener(p, d), v.removeEventListener("touchmove", x);
          }
        );
      }
    }, [d, i]),
    r !== !1 && (g[r] = f(r)),
    S.useEffect(() => {
      if (r !== !1) {
        const p = Iy(r),
          v = Bt(a.current);
        return (
          v.addEventListener(p, d),
          () => {
            v.removeEventListener(p, d);
          }
        );
      }
    }, [d, r]),
    R.jsx(S.Fragment, { children: S.cloneElement(t, g) })
  );
}
const m$ = w2({
    createStyledComponent: V("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[`maxWidth${z(String(n.maxWidth))}`],
          n.fixed && t.fixed,
          n.disableGutters && t.disableGutters,
        ];
      },
    }),
    useThemeProps: (e) => me({ props: e, name: "MuiContainer" }),
  }),
  ep = typeof Qh({}) == "function",
  g$ = (e, t) => ({
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    boxSizing: "border-box",
    WebkitTextSizeAdjust: "100%",
    ...(t && !e.vars && { colorScheme: e.palette.mode }),
  }),
  y$ = (e) => ({
    color: (e.vars || e).palette.text.primary,
    ...e.typography.body1,
    backgroundColor: (e.vars || e).palette.background.default,
    "@media print": { backgroundColor: (e.vars || e).palette.common.white },
  }),
  zb = (e, t = !1) => {
    var i, s;
    const n = {};
    t &&
      e.colorSchemes &&
      typeof e.getColorSchemeSelector == "function" &&
      Object.entries(e.colorSchemes).forEach(([a, l]) => {
        var c, d;
        const u = e.getColorSchemeSelector(a);
        u.startsWith("@")
          ? (n[u] = {
              ":root": {
                colorScheme: (c = l.palette) == null ? void 0 : c.mode,
              },
            })
          : (n[u.replace(/\s*&/, "")] = {
              colorScheme: (d = l.palette) == null ? void 0 : d.mode,
            });
      });
    let r = {
      html: g$(e, t),
      "*, *::before, *::after": { boxSizing: "inherit" },
      "strong, b": { fontWeight: e.typography.fontWeightBold },
      body: {
        margin: 0,
        ...y$(e),
        "&::backdrop": {
          backgroundColor: (e.vars || e).palette.background.default,
        },
      },
      ...n,
    };
    const o =
      (s = (i = e.components) == null ? void 0 : i.MuiCssBaseline) == null
        ? void 0
        : s.styleOverrides;
    return o && (r = [r, o]), r;
  },
  wl = "mui-ecs",
  v$ = (e) => {
    const t = zb(e, !1),
      n = Array.isArray(t) ? t[0] : t;
    return (
      !e.vars &&
        n &&
        (n.html[`:root:has(${wl})`] = { colorScheme: e.palette.mode }),
      e.colorSchemes &&
        Object.entries(e.colorSchemes).forEach(([r, o]) => {
          var s, a;
          const i = e.getColorSchemeSelector(r);
          i.startsWith("@")
            ? (n[i] = {
                [`:root:not(:has(.${wl}))`]: {
                  colorScheme: (s = o.palette) == null ? void 0 : s.mode,
                },
              })
            : (n[i.replace(/\s*&/, "")] = {
                [`&:not(:has(.${wl}))`]: {
                  colorScheme: (a = o.palette) == null ? void 0 : a.mode,
                },
              });
        }),
      t
    );
  },
  S$ = Qh(
    ep
      ? ({ theme: e, enableColorScheme: t }) => zb(e, t)
      : ({ theme: e }) => v$(e),
  );
function b$(e) {
  const t = me({ props: e, name: "MuiCssBaseline" }),
    { children: n, enableColorScheme: r = !1 } = t;
  return R.jsxs(S.Fragment, {
    children: [
      ep && R.jsx(S$, { enableColorScheme: r }),
      !ep && !r && R.jsx("span", { className: wl, style: { display: "none" } }),
      n,
    ],
  });
}
function w$(e) {
  const t = Bt(e);
  return t.body === e
    ? dr(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function Rs(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Ly(e) {
  return parseInt(dr(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function x$(e) {
  const n = [
      "TEMPLATE",
      "SCRIPT",
      "STYLE",
      "LINK",
      "MAP",
      "META",
      "NOSCRIPT",
      "PICTURE",
      "COL",
      "COLGROUP",
      "PARAM",
      "SLOT",
      "SOURCE",
      "TRACK",
    ].includes(e.tagName),
    r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function _y(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = !i.includes(s),
      l = !x$(s);
    a && l && Rs(s, o);
  });
}
function Rd(e, t) {
  let n = -1;
  return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
}
function C$(e, t) {
  const n = [],
    r = e.container;
  if (!t.disableScrollLock) {
    if (w$(r)) {
      const s = hb(dr(r));
      n.push({ value: r.style.paddingRight, property: "padding-right", el: r }),
        (r.style.paddingRight = `${Ly(r) + s}px`);
      const a = Bt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l,
        }),
          (l.style.paddingRight = `${Ly(l) + s}px`);
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment) i = Bt(r).body;
    else {
      const s = r.parentElement,
        a = dr(r);
      i =
        (s == null ? void 0 : s.nodeName) === "HTML" &&
        a.getComputedStyle(s).overflowY === "scroll"
          ? s
          : r;
    }
    n.push(
      { value: i.style.overflow, property: "overflow", el: i },
      { value: i.style.overflowX, property: "overflow-x", el: i },
      { value: i.style.overflowY, property: "overflow-y", el: i },
    ),
      (i.style.overflow = "hidden");
  }
  return () => {
    n.forEach(({ value: i, el: s, property: a }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function E$(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute("aria-hidden") === "true" && t.push(n);
    }),
    t
  );
}
class k$ {
  constructor() {
    (this.modals = []), (this.containers = []);
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    (r = this.modals.length),
      this.modals.push(t),
      t.modalRef && Rs(t.modalRef, !1);
    const o = E$(n);
    _y(n, t.mount, t.modalRef, o, !0);
    const i = Rd(this.containers, (s) => s.container === n);
    return i !== -1
      ? (this.containers[i].modals.push(t), r)
      : (this.containers.push({
          modals: [t],
          container: n,
          restore: null,
          hiddenSiblings: o,
        }),
        r);
  }
  mount(t, n) {
    const r = Rd(this.containers, (i) => i.modals.includes(t)),
      o = this.containers[r];
    o.restore || (o.restore = C$(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const o = Rd(this.containers, (s) => s.modals.includes(t)),
      i = this.containers[o];
    if (
      (i.modals.splice(i.modals.indexOf(t), 1),
      this.modals.splice(r, 1),
      i.modals.length === 0)
    )
      i.restore && i.restore(),
        t.modalRef && Rs(t.modalRef, n),
        _y(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Rs(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const R$ = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",");
function T$(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : t;
}
function P$(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function O$(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    P$(e)
  );
}
function $$(e) {
  const t = [],
    n = [];
  return (
    Array.from(e.querySelectorAll(R$)).forEach((r, o) => {
      const i = T$(r);
      i === -1 ||
        !O$(r) ||
        (i === 0
          ? t.push(r)
          : n.push({ documentOrder: o, tabIndex: i, node: r }));
    }),
    n
      .sort((r, o) =>
        r.tabIndex === o.tabIndex
          ? r.documentOrder - o.documentOrder
          : r.tabIndex - o.tabIndex,
      )
      .map((r) => r.node)
      .concat(t)
  );
}
function A$() {
  return !0;
}
function I$(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = $$,
      isEnabled: s = A$,
      open: a,
    } = e,
    l = S.useRef(!1),
    u = S.useRef(null),
    c = S.useRef(null),
    d = S.useRef(null),
    f = S.useRef(null),
    g = S.useRef(!1),
    p = S.useRef(null),
    v = dt(Ni(t), p),
    x = S.useRef(null);
  S.useEffect(() => {
    !a || !p.current || (g.current = !n);
  }, [n, a]),
    S.useEffect(() => {
      if (!a || !p.current) return;
      const h = Bt(p.current);
      return (
        p.current.contains(h.activeElement) ||
          (p.current.hasAttribute("tabIndex") ||
            p.current.setAttribute("tabIndex", "-1"),
          g.current && p.current.focus()),
        () => {
          o ||
            (d.current &&
              d.current.focus &&
              ((l.current = !0), d.current.focus()),
            (d.current = null));
        }
      );
    }, [a]),
    S.useEffect(() => {
      if (!a || !p.current) return;
      const h = Bt(p.current),
        b = (E) => {
          (x.current = E),
            !(r || !s() || E.key !== "Tab") &&
              h.activeElement === p.current &&
              E.shiftKey &&
              ((l.current = !0), c.current && c.current.focus());
        },
        C = () => {
          var $, w;
          const E = p.current;
          if (E === null) return;
          if (!h.hasFocus() || !s() || l.current) {
            l.current = !1;
            return;
          }
          if (
            E.contains(h.activeElement) ||
            (r &&
              h.activeElement !== u.current &&
              h.activeElement !== c.current)
          )
            return;
          if (h.activeElement !== f.current) f.current = null;
          else if (f.current !== null) return;
          if (!g.current) return;
          let T = [];
          if (
            ((h.activeElement === u.current || h.activeElement === c.current) &&
              (T = i(p.current)),
            T.length > 0)
          ) {
            const P = !!(
                ($ = x.current) != null &&
                $.shiftKey &&
                ((w = x.current) == null ? void 0 : w.key) === "Tab"
              ),
              D = T[0],
              N = T[T.length - 1];
            typeof D != "string" &&
              typeof N != "string" &&
              (P ? N.focus() : D.focus());
          } else E.focus();
        };
      h.addEventListener("focusin", C), h.addEventListener("keydown", b, !0);
      const k = setInterval(() => {
        h.activeElement && h.activeElement.tagName === "BODY" && C();
      }, 50);
      return () => {
        clearInterval(k),
          h.removeEventListener("focusin", C),
          h.removeEventListener("keydown", b, !0);
      };
    }, [n, r, o, s, a, i]);
  const m = (h) => {
      d.current === null && (d.current = h.relatedTarget),
        (g.current = !0),
        (f.current = h.target);
      const b = t.props.onFocus;
      b && b(h);
    },
    y = (h) => {
      d.current === null && (d.current = h.relatedTarget), (g.current = !0);
    };
  return R.jsxs(S.Fragment, {
    children: [
      R.jsx("div", {
        tabIndex: a ? 0 : -1,
        onFocus: y,
        ref: u,
        "data-testid": "sentinelStart",
      }),
      S.cloneElement(t, { ref: v, onFocus: m }),
      R.jsx("div", {
        tabIndex: a ? 0 : -1,
        onFocus: y,
        ref: c,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function L$(e) {
  return typeof e == "function" ? e() : e;
}
function _$(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const el = new k$();
function M$(e) {
  const {
      container: t,
      disableEscapeKeyDown: n = !1,
      disableScrollLock: r = !1,
      closeAfterTransition: o = !1,
      onTransitionEnter: i,
      onTransitionExited: s,
      children: a,
      onClose: l,
      open: u,
      rootRef: c,
    } = e,
    d = S.useRef({}),
    f = S.useRef(null),
    g = S.useRef(null),
    p = dt(g, c),
    [v, x] = S.useState(!u),
    m = _$(a);
  let y = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (y = !1);
  const h = () => Bt(f.current),
    b = () => (
      (d.current.modalRef = g.current), (d.current.mount = f.current), d.current
    ),
    C = () => {
      el.mount(b(), { disableScrollLock: r }),
        g.current && (g.current.scrollTop = 0);
    },
    k = tr(() => {
      const _ = L$(t) || h().body;
      el.add(b(), _), g.current && C();
    }),
    E = () => el.isTopModal(b()),
    T = tr((_) => {
      (f.current = _), _ && (u && E() ? C() : g.current && Rs(g.current, y));
    }),
    $ = S.useCallback(() => {
      el.remove(b(), y);
    }, [y]);
  S.useEffect(
    () => () => {
      $();
    },
    [$],
  ),
    S.useEffect(() => {
      u ? k() : (!m || !o) && $();
    }, [u, $, m, o, k]);
  const w = (_) => (B) => {
      var K;
      (K = _.onKeyDown) == null || K.call(_, B),
        !(B.key !== "Escape" || B.which === 229 || !E()) &&
          (n || (B.stopPropagation(), l && l(B, "escapeKeyDown")));
    },
    P = (_) => (B) => {
      var K;
      (K = _.onClick) == null || K.call(_, B),
        B.target === B.currentTarget && l && l(B, "backdropClick");
    };
  return {
    getRootProps: (_ = {}) => {
      const B = Yl(e);
      delete B.onTransitionEnter, delete B.onTransitionExited;
      const K = { ...B, ..._ };
      return { role: "presentation", ...K, onKeyDown: w(K), ref: p };
    },
    getBackdropProps: (_ = {}) => {
      const B = _;
      return { "aria-hidden": !0, ...B, onClick: P(B), open: u };
    },
    getTransitionProps: () => {
      const _ = () => {
          x(!1), i && i();
        },
        B = () => {
          x(!0), s && s(), o && $();
        };
      return {
        onEnter: oy(_, a == null ? void 0 : a.props.onEnter),
        onExited: oy(B, a == null ? void 0 : a.props.onExited),
      };
    },
    rootRef: p,
    portalRef: T,
    isTopModal: E,
    exited: v,
    hasTransition: m,
  };
}
function N$(e) {
  return de("MuiModal", e);
}
pe("MuiModal", ["root", "hidden", "backdrop"]);
const j$ = (e) => {
    const { open: t, exited: n, classes: r } = e;
    return he(
      { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
      N$,
      r,
    );
  },
  F$ = V("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.open && n.exited && t.hidden];
    },
  })(
    ce(({ theme: e }) => ({
      position: "fixed",
      zIndex: (e.vars || e).zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      variants: [
        {
          props: ({ ownerState: t }) => !t.open && t.exited,
          style: { visibility: "hidden" },
        },
      ],
    })),
  ),
  D$ = V(NO, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  B$ = S.forwardRef(function (t, n) {
    const r = me({ name: "MuiModal", props: t }),
      {
        BackdropComponent: o = D$,
        BackdropProps: i,
        classes: s,
        className: a,
        closeAfterTransition: l = !1,
        children: u,
        container: c,
        component: d,
        components: f = {},
        componentsProps: g = {},
        disableAutoFocus: p = !1,
        disableEnforceFocus: v = !1,
        disableEscapeKeyDown: x = !1,
        disablePortal: m = !1,
        disableRestoreFocus: y = !1,
        disableScrollLock: h = !1,
        hideBackdrop: b = !1,
        keepMounted: C = !1,
        onBackdropClick: k,
        onClose: E,
        onTransitionEnter: T,
        onTransitionExited: $,
        open: w,
        slotProps: P = {},
        slots: D = {},
        theme: N,
        ...j
      } = r,
      _ = {
        ...r,
        closeAfterTransition: l,
        disableAutoFocus: p,
        disableEnforceFocus: v,
        disableEscapeKeyDown: x,
        disablePortal: m,
        disableRestoreFocus: y,
        disableScrollLock: h,
        hideBackdrop: b,
        keepMounted: C,
      },
      {
        getRootProps: B,
        getBackdropProps: K,
        getTransitionProps: A,
        portalRef: F,
        isTopModal: W,
        exited: q,
        hasTransition: Y,
      } = M$({ ..._, rootRef: n }),
      re = { ..._, exited: q },
      te = j$(re),
      ve = {};
    if ((u.props.tabIndex === void 0 && (ve.tabIndex = "-1"), Y)) {
      const { onEnter: fe, onExited: ze } = A();
      (ve.onEnter = fe), (ve.onExited = ze);
    }
    const Ee = {
        ...j,
        slots: { root: f.Root, backdrop: f.Backdrop, ...D },
        slotProps: { ...g, ...P },
      },
      [Oe, rt] = Mt("root", {
        elementType: F$,
        externalForwardedProps: Ee,
        getSlotProps: B,
        additionalProps: { ref: n, as: d },
        ownerState: re,
        className: J(
          a,
          te == null ? void 0 : te.root,
          !re.open && re.exited && (te == null ? void 0 : te.hidden),
        ),
      }),
      [$e, se] = Mt("backdrop", {
        elementType: o,
        externalForwardedProps: Ee,
        additionalProps: i,
        getSlotProps: (fe) =>
          K({
            ...fe,
            onClick: (ze) => {
              k && k(ze), fe != null && fe.onClick && fe.onClick(ze);
            },
          }),
        className: J(
          i == null ? void 0 : i.className,
          te == null ? void 0 : te.backdrop,
        ),
        ownerState: re,
      }),
      ye = dt(i == null ? void 0 : i.ref, se.ref);
    return !C && !w && (!Y || q)
      ? null
      : R.jsx(SO, {
          ref: F,
          container: c,
          disablePortal: m,
          children: R.jsxs(Oe, {
            ...rt,
            children: [
              !b && o ? R.jsx($e, { ...se, ref: ye }) : null,
              R.jsx(I$, {
                disableEnforceFocus: v,
                disableAutoFocus: p,
                disableRestoreFocus: y,
                isEnabled: W,
                open: w,
                children: S.cloneElement(u, ve),
              }),
            ],
          }),
        });
  }),
  z$ = (e) => {
    const {
        classes: t,
        disableUnderline: n,
        startAdornment: r,
        endAdornment: o,
        size: i,
        hiddenLabel: s,
        multiline: a,
      } = e,
      l = {
        root: [
          "root",
          !n && "underline",
          r && "adornedStart",
          o && "adornedEnd",
          i === "small" && `size${z(i)}`,
          s && "hiddenLabel",
          a && "multiline",
        ],
        input: ["input"],
      },
      u = he(l, PO, t);
    return { ...t, ...u };
  },
  U$ = V(kc, {
    shouldForwardProp: (e) => sn(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...Cc(e, t), !n.disableUnderline && t.underline];
    },
  })(
    ce(({ theme: e }) => {
      const t = e.palette.mode === "light",
        n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
        r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
        o = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
        i = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
      return {
        position: "relative",
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        "&:hover": {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : o,
          "@media (hover: none)": {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
          },
        },
        [`&.${Qr.focused}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
        },
        [`&.${Qr.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : i,
        },
        variants: [
          {
            props: ({ ownerState: s }) => !s.disableUnderline,
            style: {
              "&::after": {
                left: 0,
                bottom: 0,
                content: '""',
                position: "absolute",
                right: 0,
                transform: "scaleX(0)",
                transition: e.transitions.create("transform", {
                  duration: e.transitions.duration.shorter,
                  easing: e.transitions.easing.easeOut,
                }),
                pointerEvents: "none",
              },
              [`&.${Qr.focused}:after`]: {
                transform: "scaleX(1) translateX(0)",
              },
              [`&.${Qr.error}`]: {
                "&::before, &::after": {
                  borderBottomColor: (e.vars || e).palette.error.main,
                },
              },
              "&::before": {
                borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : n}`,
                left: 0,
                bottom: 0,
                content: '"\\00a0"',
                position: "absolute",
                right: 0,
                transition: e.transitions.create("border-bottom-color", {
                  duration: e.transitions.duration.shorter,
                }),
                pointerEvents: "none",
              },
              [`&:hover:not(.${Qr.disabled}, .${Qr.error}):before`]: {
                borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
              },
              [`&.${Qr.disabled}:before`]: { borderBottomStyle: "dotted" },
            },
          },
          ...Object.entries(e.palette)
            .filter(qe())
            .map(([s]) => {
              var a;
              return {
                props: { disableUnderline: !1, color: s },
                style: {
                  "&::after": {
                    borderBottom: `2px solid ${(a = (e.vars || e).palette[s]) == null ? void 0 : a.main}`,
                  },
                },
              };
            }),
          {
            props: ({ ownerState: s }) => s.startAdornment,
            style: { paddingLeft: 12 },
          },
          {
            props: ({ ownerState: s }) => s.endAdornment,
            style: { paddingRight: 12 },
          },
          {
            props: ({ ownerState: s }) => s.multiline,
            style: { padding: "25px 12px 8px" },
          },
          {
            props: ({ ownerState: s, size: a }) => s.multiline && a === "small",
            style: { paddingTop: 21, paddingBottom: 4 },
          },
          {
            props: ({ ownerState: s }) => s.multiline && s.hiddenLabel,
            style: { paddingTop: 16, paddingBottom: 17 },
          },
          {
            props: ({ ownerState: s }) =>
              s.multiline && s.hiddenLabel && s.size === "small",
            style: { paddingTop: 8, paddingBottom: 9 },
          },
        ],
      };
    }),
  ),
  W$ = V(Rc, { name: "MuiFilledInput", slot: "Input", overridesResolver: Ec })(
    ce(({ theme: e }) => ({
      paddingTop: 25,
      paddingRight: 12,
      paddingBottom: 8,
      paddingLeft: 12,
      ...(!e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
        },
      }),
      ...(e.vars && {
        "&:-webkit-autofill": {
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
        },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      }),
      variants: [
        {
          props: { size: "small" },
          style: { paddingTop: 21, paddingBottom: 4 },
        },
        {
          props: ({ ownerState: t }) => t.hiddenLabel,
          style: { paddingTop: 16, paddingBottom: 17 },
        },
        {
          props: ({ ownerState: t }) => t.startAdornment,
          style: { paddingLeft: 0 },
        },
        {
          props: ({ ownerState: t }) => t.endAdornment,
          style: { paddingRight: 0 },
        },
        {
          props: ({ ownerState: t }) => t.hiddenLabel && t.size === "small",
          style: { paddingTop: 8, paddingBottom: 9 },
        },
        {
          props: ({ ownerState: t }) => t.multiline,
          style: {
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
      ],
    })),
  ),
  ou = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiFilledInput" }),
      {
        disableUnderline: o = !1,
        components: i = {},
        componentsProps: s,
        fullWidth: a = !1,
        hiddenLabel: l,
        inputComponent: u = "input",
        multiline: c = !1,
        slotProps: d,
        slots: f = {},
        type: g = "text",
        ...p
      } = r,
      v = {
        ...r,
        disableUnderline: o,
        fullWidth: a,
        inputComponent: u,
        multiline: c,
        type: g,
      },
      x = z$(r),
      m = { root: { ownerState: v }, input: { ownerState: v } },
      y = (d ?? s) ? Et(m, d ?? s) : m,
      h = f.root ?? i.Root ?? U$,
      b = f.input ?? i.Input ?? W$;
    return R.jsx(om, {
      slots: { root: h, input: b },
      componentsProps: y,
      fullWidth: a,
      inputComponent: u,
      multiline: c,
      ref: n,
      type: g,
      ...p,
      classes: x,
    });
  });
ou && (ou.muiName = "Input");
function V$(e) {
  return de("MuiFormControl", e);
}
pe("MuiFormControl", [
  "root",
  "marginNone",
  "marginNormal",
  "marginDense",
  "fullWidth",
  "disabled",
]);
const H$ = (e) => {
    const { classes: t, margin: n, fullWidth: r } = e,
      o = { root: ["root", n !== "none" && `margin${z(n)}`, r && "fullWidth"] };
    return he(o, V$, t);
  },
  K$ = V("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) => ({
      ...t.root,
      ...t[`margin${z(e.margin)}`],
      ...(e.fullWidth && t.fullWidth),
    }),
  })({
    display: "inline-flex",
    flexDirection: "column",
    position: "relative",
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: "top",
    variants: [
      {
        props: { margin: "normal" },
        style: { marginTop: 16, marginBottom: 8 },
      },
      { props: { margin: "dense" }, style: { marginTop: 8, marginBottom: 4 } },
      { props: { fullWidth: !0 }, style: { width: "100%" } },
    ],
  }),
  Ub = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiFormControl" }),
      {
        children: o,
        className: i,
        color: s = "primary",
        component: a = "div",
        disabled: l = !1,
        error: u = !1,
        focused: c,
        fullWidth: d = !1,
        hiddenLabel: f = !1,
        margin: g = "none",
        required: p = !1,
        size: v = "medium",
        variant: x = "outlined",
        ...m
      } = r,
      y = {
        ...r,
        color: s,
        component: a,
        disabled: l,
        error: u,
        fullWidth: d,
        hiddenLabel: f,
        margin: g,
        required: p,
        size: v,
        variant: x,
      },
      h = H$(y),
      [b, C] = S.useState(() => {
        let N = !1;
        return (
          o &&
            S.Children.forEach(o, (j) => {
              if (!ks(j, ["Input", "Select"])) return;
              const _ = ks(j, ["Select"]) ? j.props.input : j;
              _ && CO(_.props) && (N = !0);
            }),
          N
        );
      }),
      [k, E] = S.useState(() => {
        let N = !1;
        return (
          o &&
            S.Children.forEach(o, (j) => {
              ks(j, ["Input", "Select"]) &&
                (ru(j.props, !0) || ru(j.props.inputProps, !0)) &&
                (N = !0);
            }),
          N
        );
      }),
      [T, $] = S.useState(!1);
    l && T && $(!1);
    const w = c !== void 0 && !l ? c : T;
    let P;
    S.useRef(!1);
    const D = S.useMemo(
      () => ({
        adornedStart: b,
        setAdornedStart: C,
        color: s,
        disabled: l,
        error: u,
        filled: k,
        focused: w,
        fullWidth: d,
        hiddenLabel: f,
        size: v,
        onBlur: () => {
          $(!1);
        },
        onEmpty: () => {
          E(!1);
        },
        onFilled: () => {
          E(!0);
        },
        onFocus: () => {
          $(!0);
        },
        registerEffect: P,
        required: p,
        variant: x,
      }),
      [b, s, l, u, k, w, d, f, P, p, v, x],
    );
    return R.jsx(rm.Provider, {
      value: D,
      children: R.jsx(K$, {
        as: a,
        ownerState: y,
        className: J(h.root, i),
        ref: n,
        ...m,
        children: o,
      }),
    });
  });
function G$(e) {
  return de("MuiFormControlLabel", e);
}
const fs = pe("MuiFormControlLabel", [
    "root",
    "labelPlacementStart",
    "labelPlacementTop",
    "labelPlacementBottom",
    "disabled",
    "label",
    "error",
    "required",
    "asterisk",
  ]),
  q$ = (e) => {
    const {
        classes: t,
        disabled: n,
        labelPlacement: r,
        error: o,
        required: i,
      } = e,
      s = {
        root: [
          "root",
          n && "disabled",
          `labelPlacement${z(r)}`,
          o && "error",
          i && "required",
        ],
        label: ["label", n && "disabled"],
        asterisk: ["asterisk", o && "error"],
      };
    return he(s, G$, t);
  },
  X$ = V("label", {
    name: "MuiFormControlLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${fs.label}`]: t.label },
        t.root,
        t[`labelPlacement${z(n.labelPlacement)}`],
      ];
    },
  })(
    ce(({ theme: e }) => ({
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      verticalAlign: "middle",
      WebkitTapHighlightColor: "transparent",
      marginLeft: -11,
      marginRight: 16,
      [`&.${fs.disabled}`]: { cursor: "default" },
      [`& .${fs.label}`]: {
        [`&.${fs.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      },
      variants: [
        {
          props: { labelPlacement: "start" },
          style: { flexDirection: "row-reverse", marginRight: -11 },
        },
        {
          props: { labelPlacement: "top" },
          style: { flexDirection: "column-reverse" },
        },
        {
          props: { labelPlacement: "bottom" },
          style: { flexDirection: "column" },
        },
        {
          props: ({ labelPlacement: t }) =>
            t === "start" || t === "top" || t === "bottom",
          style: { marginLeft: 16 },
        },
      ],
    })),
  ),
  Q$ = V("span", {
    name: "MuiFormControlLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })(
    ce(({ theme: e }) => ({
      [`&.${fs.error}`]: { color: (e.vars || e).palette.error.main },
    })),
  ),
  Y$ = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiFormControlLabel" }),
      {
        checked: o,
        className: i,
        componentsProps: s = {},
        control: a,
        disabled: l,
        disableTypography: u,
        inputRef: c,
        label: d,
        labelPlacement: f = "end",
        name: g,
        onChange: p,
        required: v,
        slots: x = {},
        slotProps: m = {},
        value: y,
        ...h
      } = r,
      b = hr(),
      C = l ?? a.props.disabled ?? (b == null ? void 0 : b.disabled),
      k = v ?? a.props.required,
      E = { disabled: C, required: k };
    ["checked", "name", "onChange", "value", "inputRef"].forEach((_) => {
      typeof a.props[_] > "u" && typeof r[_] < "u" && (E[_] = r[_]);
    });
    const T = Hr({ props: r, muiFormControl: b, states: ["error"] }),
      $ = { ...r, disabled: C, labelPlacement: f, required: k, error: T.error },
      w = q$($),
      P = { slots: x, slotProps: { ...s, ...m } },
      [D, N] = Mt("typography", {
        elementType: Yf,
        externalForwardedProps: P,
        ownerState: $,
      });
    let j = d;
    return (
      j != null &&
        j.type !== Yf &&
        !u &&
        (j = R.jsx(D, {
          component: "span",
          ...N,
          className: J(w.label, N == null ? void 0 : N.className),
          children: j,
        })),
      R.jsxs(X$, {
        className: J(w.root, i),
        ownerState: $,
        ref: n,
        ...h,
        children: [
          S.cloneElement(a, E),
          k
            ? R.jsxs("div", {
                children: [
                  j,
                  R.jsxs(Q$, {
                    ownerState: $,
                    "aria-hidden": !0,
                    className: w.asterisk,
                    children: [" ", "*"],
                  }),
                ],
              })
            : j,
        ],
      })
    );
  });
function J$(e) {
  return de("MuiFormGroup", e);
}
pe("MuiFormGroup", ["root", "row", "error"]);
const Z$ = (e) => {
    const { classes: t, row: n, error: r } = e;
    return he({ root: ["root", n && "row", r && "error"] }, J$, t);
  },
  eA = V("div", {
    name: "MuiFormGroup",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.row && t.row];
    },
  })({
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    variants: [{ props: { row: !0 }, style: { flexDirection: "row" } }],
  }),
  tA = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiFormGroup" }),
      { className: o, row: i = !1, ...s } = r,
      a = hr(),
      l = Hr({ props: r, muiFormControl: a, states: ["error"] }),
      u = { ...r, row: i, error: l.error },
      c = Z$(u);
    return R.jsx(eA, { className: J(c.root, o), ownerState: u, ref: n, ...s });
  });
function nA(e) {
  return de("MuiFormHelperText", e);
}
const My = pe("MuiFormHelperText", [
  "root",
  "error",
  "disabled",
  "sizeSmall",
  "sizeMedium",
  "contained",
  "focused",
  "filled",
  "required",
]);
var Ny;
const rA = (e) => {
    const {
        classes: t,
        contained: n,
        size: r,
        disabled: o,
        error: i,
        filled: s,
        focused: a,
        required: l,
      } = e,
      u = {
        root: [
          "root",
          o && "disabled",
          i && "error",
          r && `size${z(r)}`,
          n && "contained",
          a && "focused",
          s && "filled",
          l && "required",
        ],
      };
    return he(u, nA, t);
  },
  oA = V("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.size && t[`size${z(n.size)}`],
        n.contained && t.contained,
        n.filled && t.filled,
      ];
    },
  })(
    ce(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.caption,
      textAlign: "left",
      marginTop: 3,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      [`&.${My.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${My.error}`]: { color: (e.vars || e).palette.error.main },
      variants: [
        { props: { size: "small" }, style: { marginTop: 4 } },
        {
          props: ({ ownerState: t }) => t.contained,
          style: { marginLeft: 14, marginRight: 14 },
        },
      ],
    })),
  ),
  iA = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiFormHelperText" }),
      {
        children: o,
        className: i,
        component: s = "p",
        disabled: a,
        error: l,
        filled: u,
        focused: c,
        margin: d,
        required: f,
        variant: g,
        ...p
      } = r,
      v = hr(),
      x = Hr({
        props: r,
        muiFormControl: v,
        states: [
          "variant",
          "size",
          "disabled",
          "error",
          "filled",
          "focused",
          "required",
        ],
      }),
      m = {
        ...r,
        component: s,
        contained: x.variant === "filled" || x.variant === "outlined",
        variant: x.variant,
        size: x.size,
        disabled: x.disabled,
        error: x.error,
        filled: x.filled,
        focused: x.focused,
        required: x.required,
      };
    delete m.ownerState;
    const y = rA(m);
    return R.jsx(oA, {
      as: s,
      className: J(y.root, i),
      ref: n,
      ...p,
      ownerState: m,
      children:
        o === " "
          ? Ny ||
            (Ny = R.jsx("span", { className: "notranslate", children: "​" }))
          : o,
    });
  });
function sA(e) {
  return de("MuiFormLabel", e);
}
const Ts = pe("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  aA = (e) => {
    const {
        classes: t,
        color: n,
        focused: r,
        disabled: o,
        error: i,
        filled: s,
        required: a,
      } = e,
      l = {
        root: [
          "root",
          `color${z(n)}`,
          o && "disabled",
          i && "error",
          s && "filled",
          r && "focused",
          a && "required",
        ],
        asterisk: ["asterisk", i && "error"],
      };
    return he(l, sA, t);
  },
  lA = V("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) => ({
      ...t.root,
      ...(e.color === "secondary" && t.colorSecondary),
      ...(e.filled && t.filled),
    }),
  })(
    ce(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.body1,
      lineHeight: "1.4375em",
      padding: 0,
      position: "relative",
      variants: [
        ...Object.entries(e.palette)
          .filter(qe())
          .map(([t]) => ({
            props: { color: t },
            style: {
              [`&.${Ts.focused}`]: { color: (e.vars || e).palette[t].main },
            },
          })),
        {
          props: {},
          style: {
            [`&.${Ts.disabled}`]: {
              color: (e.vars || e).palette.text.disabled,
            },
            [`&.${Ts.error}`]: { color: (e.vars || e).palette.error.main },
          },
        },
      ],
    })),
  ),
  uA = V("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })(
    ce(({ theme: e }) => ({
      [`&.${Ts.error}`]: { color: (e.vars || e).palette.error.main },
    })),
  ),
  Wb = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiFormLabel" }),
      {
        children: o,
        className: i,
        color: s,
        component: a = "label",
        disabled: l,
        error: u,
        filled: c,
        focused: d,
        required: f,
        ...g
      } = r,
      p = hr(),
      v = Hr({
        props: r,
        muiFormControl: p,
        states: ["color", "required", "focused", "disabled", "error", "filled"],
      }),
      x = {
        ...r,
        color: v.color || "primary",
        component: a,
        disabled: v.disabled,
        error: v.error,
        filled: v.filled,
        focused: v.focused,
        required: v.required,
      },
      m = aA(x);
    return R.jsxs(lA, {
      as: a,
      ownerState: x,
      className: J(m.root, i),
      ref: n,
      ...g,
      children: [
        o,
        v.required &&
          R.jsxs(uA, {
            ownerState: x,
            "aria-hidden": !0,
            className: m.asterisk,
            children: [" ", "*"],
          }),
      ],
    });
  }),
  iu = N2({
    createStyledComponent: V("div", {
      name: "MuiGrid2",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    }),
    componentName: "MuiGrid2",
    useThemeProps: (e) => me({ props: e, name: "MuiGrid2" }),
  });
function tp(e) {
  return `scale(${e}, ${e ** 2})`;
}
const cA = {
    entering: { opacity: 1, transform: tp(1) },
    entered: { opacity: 1, transform: "none" },
  },
  Td =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  su = S.forwardRef(function (t, n) {
    const {
        addEndListener: r,
        appear: o = !0,
        children: i,
        easing: s,
        in: a,
        onEnter: l,
        onEntered: u,
        onEntering: c,
        onExit: d,
        onExited: f,
        onExiting: g,
        style: p,
        timeout: v = "auto",
        TransitionComponent: x = Hn,
        ...m
      } = t,
      y = Wh(),
      h = S.useRef(),
      b = fc(),
      C = S.useRef(null),
      k = dt(C, Ni(i), n),
      E = (_) => (B) => {
        if (_) {
          const K = C.current;
          B === void 0 ? _(K) : _(K, B);
        }
      },
      T = E(c),
      $ = E((_, B) => {
        _b(_);
        const {
          duration: K,
          delay: A,
          easing: F,
        } = tu({ style: p, timeout: v, easing: s }, { mode: "enter" });
        let W;
        v === "auto"
          ? ((W = b.transitions.getAutoHeightDuration(_.clientHeight)),
            (h.current = W))
          : (W = K),
          (_.style.transition = [
            b.transitions.create("opacity", { duration: W, delay: A }),
            b.transitions.create("transform", {
              duration: Td ? W : W * 0.666,
              delay: A,
              easing: F,
            }),
          ].join(",")),
          l && l(_, B);
      }),
      w = E(u),
      P = E(g),
      D = E((_) => {
        const {
          duration: B,
          delay: K,
          easing: A,
        } = tu({ style: p, timeout: v, easing: s }, { mode: "exit" });
        let F;
        v === "auto"
          ? ((F = b.transitions.getAutoHeightDuration(_.clientHeight)),
            (h.current = F))
          : (F = B),
          (_.style.transition = [
            b.transitions.create("opacity", { duration: F, delay: K }),
            b.transitions.create("transform", {
              duration: Td ? F : F * 0.666,
              delay: Td ? K : K || F * 0.333,
              easing: A,
            }),
          ].join(",")),
          (_.style.opacity = 0),
          (_.style.transform = tp(0.75)),
          d && d(_);
      }),
      N = E(f),
      j = (_) => {
        v === "auto" && y.start(h.current || 0, _), r && r(C.current, _);
      };
    return R.jsx(x, {
      appear: o,
      in: a,
      nodeRef: C,
      onEnter: $,
      onEntered: w,
      onEntering: T,
      onExit: D,
      onExited: N,
      onExiting: P,
      addEndListener: j,
      timeout: v === "auto" ? null : v,
      ...m,
      children: (_, B) =>
        S.cloneElement(i, {
          style: {
            opacity: 0,
            transform: tp(0.75),
            visibility: _ === "exited" && !a ? "hidden" : void 0,
            ...cA[_],
            ...p,
            ...i.props.style,
          },
          ref: k,
          ...B,
        }),
    });
  });
su && (su.muiSupportAuto = !0);
const dA = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = he({ root: ["root", !n && "underline"], input: ["input"] }, RO, t);
    return { ...t, ...o };
  },
  fA = V(kc, {
    shouldForwardProp: (e) => sn(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...Cc(e, t), !n.disableUnderline && t.underline];
    },
  })(
    ce(({ theme: e }) => {
      let n =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.42)"
          : "rgba(255, 255, 255, 0.7)";
      return (
        e.vars &&
          (n = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
        {
          position: "relative",
          variants: [
            {
              props: ({ ownerState: r }) => r.formControl,
              style: { "label + &": { marginTop: 16 } },
            },
            {
              props: ({ ownerState: r }) => !r.disableUnderline,
              style: {
                "&::after": {
                  left: 0,
                  bottom: 0,
                  content: '""',
                  position: "absolute",
                  right: 0,
                  transform: "scaleX(0)",
                  transition: e.transitions.create("transform", {
                    duration: e.transitions.duration.shorter,
                    easing: e.transitions.easing.easeOut,
                  }),
                  pointerEvents: "none",
                },
                [`&.${Zi.focused}:after`]: {
                  transform: "scaleX(1) translateX(0)",
                },
                [`&.${Zi.error}`]: {
                  "&::before, &::after": {
                    borderBottomColor: (e.vars || e).palette.error.main,
                  },
                },
                "&::before": {
                  borderBottom: `1px solid ${n}`,
                  left: 0,
                  bottom: 0,
                  content: '"\\00a0"',
                  position: "absolute",
                  right: 0,
                  transition: e.transitions.create("border-bottom-color", {
                    duration: e.transitions.duration.shorter,
                  }),
                  pointerEvents: "none",
                },
                [`&:hover:not(.${Zi.disabled}, .${Zi.error}):before`]: {
                  borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
                  "@media (hover: none)": { borderBottom: `1px solid ${n}` },
                },
                [`&.${Zi.disabled}:before`]: { borderBottomStyle: "dotted" },
              },
            },
            ...Object.entries(e.palette)
              .filter(qe())
              .map(([r]) => ({
                props: { color: r, disableUnderline: !1 },
                style: {
                  "&::after": {
                    borderBottom: `2px solid ${(e.vars || e).palette[r].main}`,
                  },
                },
              })),
          ],
        }
      );
    }),
  ),
  pA = V(Rc, { name: "MuiInput", slot: "Input", overridesResolver: Ec })({}),
  au = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiInput" }),
      {
        disableUnderline: o = !1,
        components: i = {},
        componentsProps: s,
        fullWidth: a = !1,
        inputComponent: l = "input",
        multiline: u = !1,
        slotProps: c,
        slots: d = {},
        type: f = "text",
        ...g
      } = r,
      p = dA(r),
      x = { root: { ownerState: { disableUnderline: o } } },
      m = (c ?? s) ? Et(c ?? s, x) : x,
      y = d.root ?? i.Root ?? fA,
      h = d.input ?? i.Input ?? pA;
    return R.jsx(om, {
      slots: { root: y, input: h },
      slotProps: m,
      fullWidth: a,
      inputComponent: l,
      multiline: u,
      ref: n,
      type: f,
      ...g,
      classes: p,
    });
  });
au && (au.muiName = "Input");
function hA(e) {
  return de("MuiInputLabel", e);
}
pe("MuiInputLabel", [
  "root",
  "focused",
  "disabled",
  "error",
  "required",
  "asterisk",
  "formControl",
  "sizeSmall",
  "shrink",
  "animated",
  "standard",
  "filled",
  "outlined",
]);
const mA = (e) => {
    const {
        classes: t,
        formControl: n,
        size: r,
        shrink: o,
        disableAnimation: i,
        variant: s,
        required: a,
      } = e,
      l = {
        root: [
          "root",
          n && "formControl",
          !i && "animated",
          o && "shrink",
          r && r !== "normal" && `size${z(r)}`,
          s,
        ],
        asterisk: [a && "asterisk"],
      },
      u = he(l, hA, t);
    return { ...t, ...u };
  },
  gA = V(Wb, {
    shouldForwardProp: (e) => sn(e) || e === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${Ts.asterisk}`]: t.asterisk },
        t.root,
        n.formControl && t.formControl,
        n.size === "small" && t.sizeSmall,
        n.shrink && t.shrink,
        !n.disableAnimation && t.animated,
        n.focused && t.focused,
        t[n.variant],
      ];
    },
  })(
    ce(({ theme: e }) => ({
      display: "block",
      transformOrigin: "top left",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "100%",
      variants: [
        {
          props: ({ ownerState: t }) => t.formControl,
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            transform: "translate(0, 20px) scale(1)",
          },
        },
        {
          props: { size: "small" },
          style: { transform: "translate(0, 17px) scale(1)" },
        },
        {
          props: ({ ownerState: t }) => t.shrink,
          style: {
            transform: "translate(0, -1.5px) scale(0.75)",
            transformOrigin: "top left",
            maxWidth: "133%",
          },
        },
        {
          props: ({ ownerState: t }) => !t.disableAnimation,
          style: {
            transition: e.transitions.create(
              ["color", "transform", "max-width"],
              {
                duration: e.transitions.duration.shorter,
                easing: e.transitions.easing.easeOut,
              },
            ),
          },
        },
        {
          props: { variant: "filled" },
          style: {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(12px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
        },
        {
          props: { variant: "filled", size: "small" },
          style: { transform: "translate(12px, 13px) scale(1)" },
        },
        {
          props: ({ variant: t, ownerState: n }) => t === "filled" && n.shrink,
          style: {
            userSelect: "none",
            pointerEvents: "auto",
            transform: "translate(12px, 7px) scale(0.75)",
            maxWidth: "calc(133% - 24px)",
          },
        },
        {
          props: ({ variant: t, ownerState: n, size: r }) =>
            t === "filled" && n.shrink && r === "small",
          style: { transform: "translate(12px, 4px) scale(0.75)" },
        },
        {
          props: { variant: "outlined" },
          style: {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(14px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
        },
        {
          props: { variant: "outlined", size: "small" },
          style: { transform: "translate(14px, 9px) scale(1)" },
        },
        {
          props: ({ variant: t, ownerState: n }) =>
            t === "outlined" && n.shrink,
          style: {
            userSelect: "none",
            pointerEvents: "auto",
            maxWidth: "calc(133% - 32px)",
            transform: "translate(14px, -9px) scale(0.75)",
          },
        },
      ],
    })),
  ),
  yA = S.forwardRef(function (t, n) {
    const r = me({ name: "MuiInputLabel", props: t }),
      {
        disableAnimation: o = !1,
        margin: i,
        shrink: s,
        variant: a,
        className: l,
        ...u
      } = r,
      c = hr();
    let d = s;
    typeof d > "u" && c && (d = c.filled || c.focused || c.adornedStart);
    const f = Hr({
        props: r,
        muiFormControl: c,
        states: ["size", "variant", "required", "focused"],
      }),
      g = {
        ...r,
        disableAnimation: o,
        formControl: c,
        shrink: d,
        size: f.size,
        variant: f.variant,
        required: f.required,
        focused: f.focused,
      },
      p = mA(g);
    return R.jsx(gA, {
      "data-shrink": d,
      ref: n,
      className: J(p.root, l),
      ...u,
      ownerState: g,
      classes: p,
    });
  });
function vA(e) {
  return de("MuiLinearProgress", e);
}
pe("MuiLinearProgress", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "determinate",
  "indeterminate",
  "buffer",
  "query",
  "dashed",
  "dashedColorPrimary",
  "dashedColorSecondary",
  "bar",
  "barColorPrimary",
  "barColorSecondary",
  "bar1Indeterminate",
  "bar1Determinate",
  "bar1Buffer",
  "bar2Indeterminate",
  "bar2Buffer",
]);
const np = 4,
  rp = Vr`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,
  SA =
    typeof rp != "string"
      ? Mi`
        animation: ${rp} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `
      : null,
  op = Vr`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,
  bA =
    typeof op != "string"
      ? Mi`
        animation: ${op} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `
      : null,
  ip = Vr`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,
  wA =
    typeof ip != "string"
      ? Mi`
        animation: ${ip} 3s infinite linear;
      `
      : null,
  xA = (e) => {
    const { classes: t, variant: n, color: r } = e,
      o = {
        root: ["root", `color${z(r)}`, n],
        dashed: ["dashed", `dashedColor${z(r)}`],
        bar1: [
          "bar",
          `barColor${z(r)}`,
          (n === "indeterminate" || n === "query") && "bar1Indeterminate",
          n === "determinate" && "bar1Determinate",
          n === "buffer" && "bar1Buffer",
        ],
        bar2: [
          "bar",
          n !== "buffer" && `barColor${z(r)}`,
          n === "buffer" && `color${z(r)}`,
          (n === "indeterminate" || n === "query") && "bar2Indeterminate",
          n === "buffer" && "bar2Buffer",
        ],
      };
    return he(o, vA, t);
  },
  im = (e, t) =>
    e.vars
      ? e.vars.palette.LinearProgress[`${t}Bg`]
      : e.palette.mode === "light"
        ? Co(e.palette[t].main, 0.62)
        : xo(e.palette[t].main, 0.5),
  CA = V("span", {
    name: "MuiLinearProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[`color${z(n.color)}`], t[n.variant]];
    },
  })(
    ce(({ theme: e }) => ({
      position: "relative",
      overflow: "hidden",
      display: "block",
      height: 4,
      zIndex: 0,
      "@media print": { colorAdjust: "exact" },
      variants: [
        ...Object.entries(e.palette)
          .filter(qe())
          .map(([t]) => ({
            props: { color: t },
            style: { backgroundColor: im(e, t) },
          })),
        {
          props: ({ ownerState: t }) =>
            t.color === "inherit" && t.variant !== "buffer",
          style: {
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "currentColor",
              opacity: 0.3,
            },
          },
        },
        {
          props: { variant: "buffer" },
          style: { backgroundColor: "transparent" },
        },
        { props: { variant: "query" }, style: { transform: "rotate(180deg)" } },
      ],
    })),
  ),
  EA = V("span", {
    name: "MuiLinearProgress",
    slot: "Dashed",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.dashed, t[`dashedColor${z(n.color)}`]];
    },
  })(
    ce(({ theme: e }) => ({
      position: "absolute",
      marginTop: 0,
      height: "100%",
      width: "100%",
      backgroundSize: "10px 10px",
      backgroundPosition: "0 -23px",
      variants: [
        {
          props: { color: "inherit" },
          style: {
            opacity: 0.3,
            backgroundImage:
              "radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)",
          },
        },
        ...Object.entries(e.palette)
          .filter(qe())
          .map(([t]) => {
            const n = im(e, t);
            return {
              props: { color: t },
              style: {
                backgroundImage: `radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`,
              },
            };
          }),
      ],
    })),
    wA || { animation: `${ip} 3s infinite linear` },
  ),
  kA = V("span", {
    name: "MuiLinearProgress",
    slot: "Bar1",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.bar,
        t[`barColor${z(n.color)}`],
        (n.variant === "indeterminate" || n.variant === "query") &&
          t.bar1Indeterminate,
        n.variant === "determinate" && t.bar1Determinate,
        n.variant === "buffer" && t.bar1Buffer,
      ];
    },
  })(
    ce(({ theme: e }) => ({
      width: "100%",
      position: "absolute",
      left: 0,
      bottom: 0,
      top: 0,
      transition: "transform 0.2s linear",
      transformOrigin: "left",
      variants: [
        {
          props: { color: "inherit" },
          style: { backgroundColor: "currentColor" },
        },
        ...Object.entries(e.palette)
          .filter(qe())
          .map(([t]) => ({
            props: { color: t },
            style: { backgroundColor: (e.vars || e).palette[t].main },
          })),
        {
          props: { variant: "determinate" },
          style: { transition: `transform .${np}s linear` },
        },
        {
          props: { variant: "buffer" },
          style: { zIndex: 1, transition: `transform .${np}s linear` },
        },
        {
          props: ({ ownerState: t }) =>
            t.variant === "indeterminate" || t.variant === "query",
          style: { width: "auto" },
        },
        {
          props: ({ ownerState: t }) =>
            t.variant === "indeterminate" || t.variant === "query",
          style: SA || {
            animation: `${rp} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`,
          },
        },
      ],
    })),
  ),
  RA = V("span", {
    name: "MuiLinearProgress",
    slot: "Bar2",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.bar,
        t[`barColor${z(n.color)}`],
        (n.variant === "indeterminate" || n.variant === "query") &&
          t.bar2Indeterminate,
        n.variant === "buffer" && t.bar2Buffer,
      ];
    },
  })(
    ce(({ theme: e }) => ({
      width: "100%",
      position: "absolute",
      left: 0,
      bottom: 0,
      top: 0,
      transition: "transform 0.2s linear",
      transformOrigin: "left",
      variants: [
        ...Object.entries(e.palette)
          .filter(qe())
          .map(([t]) => ({
            props: { color: t },
            style: {
              "--LinearProgressBar2-barColor": (e.vars || e).palette[t].main,
            },
          })),
        {
          props: ({ ownerState: t }) =>
            t.variant !== "buffer" && t.color !== "inherit",
          style: {
            backgroundColor: "var(--LinearProgressBar2-barColor, currentColor)",
          },
        },
        {
          props: ({ ownerState: t }) =>
            t.variant !== "buffer" && t.color === "inherit",
          style: { backgroundColor: "currentColor" },
        },
        { props: { color: "inherit" }, style: { opacity: 0.3 } },
        ...Object.entries(e.palette)
          .filter(qe())
          .map(([t]) => ({
            props: { color: t, variant: "buffer" },
            style: {
              backgroundColor: im(e, t),
              transition: `transform .${np}s linear`,
            },
          })),
        {
          props: ({ ownerState: t }) =>
            t.variant === "indeterminate" || t.variant === "query",
          style: { width: "auto" },
        },
        {
          props: ({ ownerState: t }) =>
            t.variant === "indeterminate" || t.variant === "query",
          style: bA || {
            animation: `${op} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`,
          },
        },
      ],
    })),
  ),
  TA = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiLinearProgress" }),
      {
        className: o,
        color: i = "primary",
        value: s,
        valueBuffer: a,
        variant: l = "indeterminate",
        ...u
      } = r,
      c = { ...r, color: i, variant: l },
      d = xA(c),
      f = bb(),
      g = {},
      p = { bar1: {}, bar2: {} };
    if ((l === "determinate" || l === "buffer") && s !== void 0) {
      (g["aria-valuenow"] = Math.round(s)),
        (g["aria-valuemin"] = 0),
        (g["aria-valuemax"] = 100);
      let v = s - 100;
      f && (v = -v), (p.bar1.transform = `translateX(${v}%)`);
    }
    if (l === "buffer" && a !== void 0) {
      let v = (a || 0) - 100;
      f && (v = -v), (p.bar2.transform = `translateX(${v}%)`);
    }
    return R.jsxs(CA, {
      className: J(d.root, o),
      ownerState: c,
      role: "progressbar",
      ...g,
      ref: n,
      ...u,
      children: [
        l === "buffer"
          ? R.jsx(EA, { className: d.dashed, ownerState: c })
          : null,
        R.jsx(kA, { className: d.bar1, ownerState: c, style: p.bar1 }),
        l === "determinate"
          ? null
          : R.jsx(RA, { className: d.bar2, ownerState: c, style: p.bar2 }),
      ],
    });
  }),
  Ps = S.createContext({});
function PA(e) {
  return de("MuiList", e);
}
pe("MuiList", ["root", "padding", "dense", "subheader"]);
const OA = (e) => {
    const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
    return he(
      { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
      PA,
      t,
    );
  },
  $A = V("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        !n.disablePadding && t.padding,
        n.dense && t.dense,
        n.subheader && t.subheader,
      ];
    },
  })({
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative",
    variants: [
      {
        props: ({ ownerState: e }) => !e.disablePadding,
        style: { paddingTop: 8, paddingBottom: 8 },
      },
      { props: ({ ownerState: e }) => e.subheader, style: { paddingTop: 0 } },
    ],
  }),
  Vb = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiList" }),
      {
        children: o,
        className: i,
        component: s = "ul",
        dense: a = !1,
        disablePadding: l = !1,
        subheader: u,
        ...c
      } = r,
      d = S.useMemo(() => ({ dense: a }), [a]),
      f = { ...r, component: s, dense: a, disablePadding: l },
      g = OA(f);
    return R.jsx(Ps.Provider, {
      value: d,
      children: R.jsxs($A, {
        as: s,
        className: J(g.root, i),
        ref: n,
        ownerState: f,
        ...c,
        children: [u, o],
      }),
    });
  });
function AA(e) {
  return de("MuiListItem", e);
}
pe("MuiListItem", [
  "root",
  "container",
  "dense",
  "alignItemsFlexStart",
  "divider",
  "gutters",
  "padding",
  "secondaryAction",
]);
const IA = pe("MuiListItemButton", [
  "root",
  "focusVisible",
  "dense",
  "alignItemsFlexStart",
  "disabled",
  "divider",
  "gutters",
  "selected",
]);
function LA(e) {
  return de("MuiListItemSecondaryAction", e);
}
pe("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const _A = (e) => {
    const { disableGutters: t, classes: n } = e;
    return he({ root: ["root", t && "disableGutters"] }, LA, n);
  },
  MA = V("div", {
    name: "MuiListItemSecondaryAction",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.disableGutters && t.disableGutters];
    },
  })({
    position: "absolute",
    right: 16,
    top: "50%",
    transform: "translateY(-50%)",
    variants: [
      { props: ({ ownerState: e }) => e.disableGutters, style: { right: 0 } },
    ],
  }),
  Hb = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiListItemSecondaryAction" }),
      { className: o, ...i } = r,
      s = S.useContext(Ps),
      a = { ...r, disableGutters: s.disableGutters },
      l = _A(a);
    return R.jsx(MA, { className: J(l.root, o), ownerState: a, ref: n, ...i });
  });
Hb.muiName = "ListItemSecondaryAction";
const NA = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.alignItems === "flex-start" && t.alignItemsFlexStart,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
      !n.disablePadding && t.padding,
      n.hasSecondaryAction && t.secondaryAction,
    ];
  },
  jA = (e) => {
    const {
      alignItems: t,
      classes: n,
      dense: r,
      disableGutters: o,
      disablePadding: i,
      divider: s,
      hasSecondaryAction: a,
    } = e;
    return he(
      {
        root: [
          "root",
          r && "dense",
          !o && "gutters",
          !i && "padding",
          s && "divider",
          t === "flex-start" && "alignItemsFlexStart",
          a && "secondaryAction",
        ],
        container: ["container"],
      },
      AA,
      n,
    );
  },
  FA = V("div", { name: "MuiListItem", slot: "Root", overridesResolver: NA })(
    ce(({ theme: e }) => ({
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "relative",
      textDecoration: "none",
      width: "100%",
      boxSizing: "border-box",
      textAlign: "left",
      variants: [
        {
          props: ({ ownerState: t }) => !t.disablePadding,
          style: { paddingTop: 8, paddingBottom: 8 },
        },
        {
          props: ({ ownerState: t }) => !t.disablePadding && t.dense,
          style: { paddingTop: 4, paddingBottom: 4 },
        },
        {
          props: ({ ownerState: t }) => !t.disablePadding && !t.disableGutters,
          style: { paddingLeft: 16, paddingRight: 16 },
        },
        {
          props: ({ ownerState: t }) =>
            !t.disablePadding && !!t.secondaryAction,
          style: { paddingRight: 48 },
        },
        {
          props: ({ ownerState: t }) => !!t.secondaryAction,
          style: { [`& > .${IA.root}`]: { paddingRight: 48 } },
        },
        {
          props: { alignItems: "flex-start" },
          style: { alignItems: "flex-start" },
        },
        {
          props: ({ ownerState: t }) => t.divider,
          style: {
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
            backgroundClip: "padding-box",
          },
        },
        {
          props: ({ ownerState: t }) => t.button,
          style: {
            transition: e.transitions.create("background-color", {
              duration: e.transitions.duration.shortest,
            }),
            "&:hover": {
              textDecoration: "none",
              backgroundColor: (e.vars || e).palette.action.hover,
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
          },
        },
        {
          props: ({ ownerState: t }) => t.hasSecondaryAction,
          style: { paddingRight: 48 },
        },
      ],
    })),
  ),
  DA = V("li", {
    name: "MuiListItem",
    slot: "Container",
    overridesResolver: (e, t) => t.container,
  })({ position: "relative" }),
  BA = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiListItem" }),
      {
        alignItems: o = "center",
        children: i,
        className: s,
        component: a,
        components: l = {},
        componentsProps: u = {},
        ContainerComponent: c = "li",
        ContainerProps: { className: d, ...f } = {},
        dense: g = !1,
        disableGutters: p = !1,
        disablePadding: v = !1,
        divider: x = !1,
        secondaryAction: m,
        slotProps: y = {},
        slots: h = {},
        ...b
      } = r,
      C = S.useContext(Ps),
      k = S.useMemo(
        () => ({ dense: g || C.dense || !1, alignItems: o, disableGutters: p }),
        [o, C.dense, g, p],
      ),
      E = S.useRef(null),
      T = S.Children.toArray(i),
      $ = T.length && ks(T[T.length - 1], ["ListItemSecondaryAction"]),
      w = {
        ...r,
        alignItems: o,
        dense: k.dense,
        disableGutters: p,
        disablePadding: v,
        divider: x,
        hasSecondaryAction: $,
      },
      P = jA(w),
      D = dt(E, n),
      N = h.root || l.Root || FA,
      j = y.root || u.root || {},
      _ = { className: J(P.root, j.className, s), ...b };
    let B = a || "li";
    return $
      ? ((B = !_.component && !a ? "div" : B),
        c === "li" &&
          (B === "li"
            ? (B = "div")
            : _.component === "li" && (_.component = "div")),
        R.jsx(Ps.Provider, {
          value: k,
          children: R.jsxs(DA, {
            as: c,
            className: J(P.container, d),
            ref: D,
            ownerState: w,
            ...f,
            children: [
              R.jsx(N, {
                ...j,
                ...(!ta(N) && { as: B, ownerState: { ...w, ...j.ownerState } }),
                ..._,
                children: T,
              }),
              T.pop(),
            ],
          }),
        }))
      : R.jsx(Ps.Provider, {
          value: k,
          children: R.jsxs(N, {
            ...j,
            as: B,
            ref: D,
            ...(!ta(N) && { ownerState: { ...w, ...j.ownerState } }),
            ..._,
            children: [T, m && R.jsx(Hb, { children: m })],
          }),
        });
  });
function Pd(e, t, n) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
      ? t.nextElementSibling
      : n
        ? null
        : e.firstChild;
}
function jy(e, t, n) {
  return e === t
    ? n
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
      ? t.previousElementSibling
      : n
        ? null
        : e.lastChild;
}
function Kb(e, t) {
  if (t === void 0) return !0;
  let n = e.innerText;
  return (
    n === void 0 && (n = e.textContent),
    (n = n.trim().toLowerCase()),
    n.length === 0
      ? !1
      : t.repeating
        ? n[0] === t.keys[0]
        : n.startsWith(t.keys.join(""))
  );
}
function es(e, t, n, r, o, i) {
  let s = !1,
    a = o(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s) return !1;
      s = !0;
    }
    const l = r ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !Kb(a, i) || l) a = o(e, a, n);
    else return a.focus(), !0;
  }
  return !1;
}
const zA = S.forwardRef(function (t, n) {
  const {
      actions: r,
      autoFocus: o = !1,
      autoFocusItem: i = !1,
      children: s,
      className: a,
      disabledItemsFocusable: l = !1,
      disableListWrap: u = !1,
      onKeyDown: c,
      variant: d = "selectedMenu",
      ...f
    } = t,
    g = S.useRef(null),
    p = S.useRef({
      keys: [],
      repeating: !0,
      previousKeyMatched: !0,
      lastTime: null,
    });
  wo(() => {
    o && g.current.focus();
  }, [o]),
    S.useImperativeHandle(
      r,
      () => ({
        adjustStyleForScrollbar: (h, { direction: b }) => {
          const C = !g.current.style.width;
          if (h.clientHeight < g.current.clientHeight && C) {
            const k = `${hb(dr(h))}px`;
            (g.current.style[b === "rtl" ? "paddingLeft" : "paddingRight"] = k),
              (g.current.style.width = `calc(100% + ${k})`);
          }
          return g.current;
        },
      }),
      [],
    );
  const v = (h) => {
      const b = g.current,
        C = h.key;
      if (h.ctrlKey || h.metaKey || h.altKey) {
        c && c(h);
        return;
      }
      const E = Bt(b).activeElement;
      if (C === "ArrowDown") h.preventDefault(), es(b, E, u, l, Pd);
      else if (C === "ArrowUp") h.preventDefault(), es(b, E, u, l, jy);
      else if (C === "Home") h.preventDefault(), es(b, null, u, l, Pd);
      else if (C === "End") h.preventDefault(), es(b, null, u, l, jy);
      else if (C.length === 1) {
        const T = p.current,
          $ = C.toLowerCase(),
          w = performance.now();
        T.keys.length > 0 &&
          (w - T.lastTime > 500
            ? ((T.keys = []), (T.repeating = !0), (T.previousKeyMatched = !0))
            : T.repeating && $ !== T.keys[0] && (T.repeating = !1)),
          (T.lastTime = w),
          T.keys.push($);
        const P = E && !T.repeating && Kb(E, T);
        T.previousKeyMatched && (P || es(b, E, !1, l, Pd, T))
          ? h.preventDefault()
          : (T.previousKeyMatched = !1);
      }
      c && c(h);
    },
    x = dt(g, n);
  let m = -1;
  S.Children.forEach(s, (h, b) => {
    if (!S.isValidElement(h)) {
      m === b && ((m += 1), m >= s.length && (m = -1));
      return;
    }
    h.props.disabled ||
      (((d === "selectedMenu" && h.props.selected) || m === -1) && (m = b)),
      m === b &&
        (h.props.disabled ||
          h.props.muiSkipListHighlight ||
          h.type.muiSkipListHighlight) &&
        ((m += 1), m >= s.length && (m = -1));
  });
  const y = S.Children.map(s, (h, b) => {
    if (b === m) {
      const C = {};
      return (
        i && (C.autoFocus = !0),
        h.props.tabIndex === void 0 && d === "selectedMenu" && (C.tabIndex = 0),
        S.cloneElement(h, C)
      );
    }
    return h;
  });
  return R.jsx(Vb, {
    role: "menu",
    ref: x,
    className: a,
    onKeyDown: v,
    tabIndex: o ? 0 : -1,
    ...f,
    children: y,
  });
});
function UA(e) {
  return de("MuiPopover", e);
}
pe("MuiPopover", ["root", "paper"]);
function Fy(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
        ? (n = e.height / 2)
        : t === "bottom" && (n = e.height),
    n
  );
}
function Dy(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
        ? (n = e.width / 2)
        : t === "right" && (n = e.width),
    n
  );
}
function By(e) {
  return [e.horizontal, e.vertical]
    .map((t) => (typeof t == "number" ? `${t}px` : t))
    .join(" ");
}
function Od(e) {
  return typeof e == "function" ? e() : e;
}
const WA = (e) => {
    const { classes: t } = e;
    return he({ root: ["root"], paper: ["paper"] }, UA, t);
  },
  VA = V(B$, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  Gb = V(Ea, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  HA = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiPopover" }),
      {
        action: o,
        anchorEl: i,
        anchorOrigin: s = { vertical: "top", horizontal: "left" },
        anchorPosition: a,
        anchorReference: l = "anchorEl",
        children: u,
        className: c,
        container: d,
        elevation: f = 8,
        marginThreshold: g = 16,
        open: p,
        PaperProps: v = {},
        slots: x = {},
        slotProps: m = {},
        transformOrigin: y = { vertical: "top", horizontal: "left" },
        TransitionComponent: h = su,
        transitionDuration: b = "auto",
        TransitionProps: { onEntering: C, ...k } = {},
        disableScrollLock: E = !1,
        ...T
      } = r,
      $ = (m == null ? void 0 : m.paper) ?? v,
      w = S.useRef(),
      P = {
        ...r,
        anchorOrigin: s,
        anchorReference: l,
        elevation: f,
        marginThreshold: g,
        externalPaperSlotProps: $,
        transformOrigin: y,
        TransitionComponent: h,
        transitionDuration: b,
        TransitionProps: k,
      },
      D = WA(P),
      N = S.useCallback(() => {
        if (l === "anchorPosition") return a;
        const se = Od(i),
          fe = (
            se && se.nodeType === 1 ? se : Bt(w.current).body
          ).getBoundingClientRect();
        return {
          top: fe.top + Fy(fe, s.vertical),
          left: fe.left + Dy(fe, s.horizontal),
        };
      }, [i, s.horizontal, s.vertical, a, l]),
      j = S.useCallback(
        (se) => ({
          vertical: Fy(se, y.vertical),
          horizontal: Dy(se, y.horizontal),
        }),
        [y.horizontal, y.vertical],
      ),
      _ = S.useCallback(
        (se) => {
          const ye = { width: se.offsetWidth, height: se.offsetHeight },
            fe = j(ye);
          if (l === "none")
            return { top: null, left: null, transformOrigin: By(fe) };
          const ze = N();
          let ne = ze.top - fe.vertical,
            be = ze.left - fe.horizontal;
          const St = ne + ye.height,
            _e = be + ye.width,
            je = dr(Od(i)),
            Ve = je.innerHeight - g,
            Tt = je.innerWidth - g;
          if (g !== null && ne < g) {
            const ke = ne - g;
            (ne -= ke), (fe.vertical += ke);
          } else if (g !== null && St > Ve) {
            const ke = St - Ve;
            (ne -= ke), (fe.vertical += ke);
          }
          if (g !== null && be < g) {
            const ke = be - g;
            (be -= ke), (fe.horizontal += ke);
          } else if (_e > Tt) {
            const ke = _e - Tt;
            (be -= ke), (fe.horizontal += ke);
          }
          return {
            top: `${Math.round(ne)}px`,
            left: `${Math.round(be)}px`,
            transformOrigin: By(fe),
          };
        },
        [i, l, N, j, g],
      ),
      [B, K] = S.useState(p),
      A = S.useCallback(() => {
        const se = w.current;
        if (!se) return;
        const ye = _(se);
        ye.top !== null && se.style.setProperty("top", ye.top),
          ye.left !== null && (se.style.left = ye.left),
          (se.style.transformOrigin = ye.transformOrigin),
          K(!0);
      }, [_]);
    S.useEffect(
      () => (
        E && window.addEventListener("scroll", A),
        () => window.removeEventListener("scroll", A)
      ),
      [i, E, A],
    );
    const F = (se, ye) => {
        C && C(se, ye), A();
      },
      W = () => {
        K(!1);
      };
    S.useEffect(() => {
      p && A();
    }),
      S.useImperativeHandle(
        o,
        () =>
          p
            ? {
                updatePosition: () => {
                  A();
                },
              }
            : null,
        [p, A],
      ),
      S.useEffect(() => {
        if (!p) return;
        const se = db(() => {
            A();
          }),
          ye = dr(i);
        return (
          ye.addEventListener("resize", se),
          () => {
            se.clear(), ye.removeEventListener("resize", se);
          }
        );
      }, [i, p, A]);
    let q = b;
    b === "auto" && !h.muiSupportAuto && (q = void 0);
    const Y = d || (i ? Bt(Od(i)).body : void 0),
      re = { slots: x, slotProps: { ...m, paper: $ } },
      [te, ve] = Mt("paper", {
        elementType: Gb,
        externalForwardedProps: re,
        additionalProps: {
          elevation: f,
          className: J(D.paper, $ == null ? void 0 : $.className),
          style: B ? $.style : { ...$.style, opacity: 0 },
        },
        ownerState: P,
      }),
      [Ee, { slotProps: Oe, ...rt }] = Mt("root", {
        elementType: VA,
        externalForwardedProps: re,
        additionalProps: {
          slotProps: { backdrop: { invisible: !0 } },
          container: Y,
          open: p,
        },
        ownerState: P,
        className: J(D.root, c),
      }),
      $e = dt(w, ve.ref);
    return R.jsx(Ee, {
      ...rt,
      ...(!ta(Ee) && { slotProps: Oe, disableScrollLock: E }),
      ...T,
      ref: n,
      children: R.jsx(h, {
        appear: !0,
        in: p,
        onEntering: F,
        onExited: W,
        timeout: q,
        ...k,
        children: R.jsx(te, { ...ve, ref: $e, children: u }),
      }),
    });
  });
function KA(e) {
  return de("MuiMenu", e);
}
pe("MuiMenu", ["root", "paper", "list"]);
const GA = { vertical: "top", horizontal: "right" },
  qA = { vertical: "top", horizontal: "left" },
  XA = (e) => {
    const { classes: t } = e;
    return he({ root: ["root"], paper: ["paper"], list: ["list"] }, KA, t);
  },
  QA = V(HA, {
    shouldForwardProp: (e) => sn(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  YA = V(Gb, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
  JA = V(zA, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, t) => t.list,
  })({ outline: 0 }),
  ZA = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiMenu" }),
      {
        autoFocus: o = !0,
        children: i,
        className: s,
        disableAutoFocusItem: a = !1,
        MenuListProps: l = {},
        onClose: u,
        open: c,
        PaperProps: d = {},
        PopoverClasses: f,
        transitionDuration: g = "auto",
        TransitionProps: { onEntering: p, ...v } = {},
        variant: x = "selectedMenu",
        slots: m = {},
        slotProps: y = {},
        ...h
      } = r,
      b = bb(),
      C = {
        ...r,
        autoFocus: o,
        disableAutoFocusItem: a,
        MenuListProps: l,
        onEntering: p,
        PaperProps: d,
        transitionDuration: g,
        TransitionProps: v,
        variant: x,
      },
      k = XA(C),
      E = o && !a && c,
      T = S.useRef(null),
      $ = (B, K) => {
        T.current &&
          T.current.adjustStyleForScrollbar(B, {
            direction: b ? "rtl" : "ltr",
          }),
          p && p(B, K);
      },
      w = (B) => {
        B.key === "Tab" && (B.preventDefault(), u && u(B, "tabKeyDown"));
      };
    let P = -1;
    S.Children.map(i, (B, K) => {
      S.isValidElement(B) &&
        (B.props.disabled ||
          (((x === "selectedMenu" && B.props.selected) || P === -1) &&
            (P = K)));
    });
    const D = m.paper ?? YA,
      N = y.paper ?? d,
      j = Hf({
        elementType: m.root,
        externalSlotProps: y.root,
        ownerState: C,
        className: [k.root, s],
      }),
      _ = Hf({
        elementType: D,
        externalSlotProps: N,
        ownerState: C,
        className: k.paper,
      });
    return R.jsx(QA, {
      onClose: u,
      anchorOrigin: { vertical: "bottom", horizontal: b ? "right" : "left" },
      transformOrigin: b ? GA : qA,
      slots: { paper: D, root: m.root },
      slotProps: { root: j, paper: _ },
      open: c,
      ref: n,
      transitionDuration: g,
      TransitionProps: { onEntering: $, ...v },
      ownerState: C,
      ...h,
      classes: f,
      children: R.jsx(JA, {
        onKeyDown: w,
        actions: T,
        autoFocus: o && (P === -1 || a),
        autoFocusItem: E,
        variant: x,
        ...l,
        className: J(k.list, l.className),
        children: i,
      }),
    });
  });
function eI(e) {
  return de("MuiNativeSelect", e);
}
const sm = pe("MuiNativeSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  tI = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: s,
      } = e,
      a = {
        select: ["select", n, r && "disabled", o && "multiple", s && "error"],
        icon: ["icon", `icon${z(n)}`, i && "iconOpen", r && "disabled"],
      };
    return he(a, eI, t);
  },
  qb = V("select")(({ theme: e }) => ({
    MozAppearance: "none",
    WebkitAppearance: "none",
    userSelect: "none",
    borderRadius: 0,
    cursor: "pointer",
    "&:focus": { borderRadius: 0 },
    [`&.${sm.disabled}`]: { cursor: "default" },
    "&[multiple]": { height: "auto" },
    "&:not([multiple]) option, &:not([multiple]) optgroup": {
      backgroundColor: (e.vars || e).palette.background.paper,
    },
    variants: [
      {
        props: ({ ownerState: t }) =>
          t.variant !== "filled" && t.variant !== "outlined",
        style: { "&&&": { paddingRight: 24, minWidth: 16 } },
      },
      { props: { variant: "filled" }, style: { "&&&": { paddingRight: 32 } } },
      {
        props: { variant: "outlined" },
        style: {
          borderRadius: (e.vars || e).shape.borderRadius,
          "&:focus": { borderRadius: (e.vars || e).shape.borderRadius },
          "&&&": { paddingRight: 32 },
        },
      },
    ],
  })),
  nI = V(qb, {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: sn,
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.select,
        t[n.variant],
        n.error && t.error,
        { [`&.${sm.multiple}`]: t.multiple },
      ];
    },
  })({}),
  Xb = V("svg")(({ theme: e }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (e.vars || e).palette.action.active,
    [`&.${sm.disabled}`]: { color: (e.vars || e).palette.action.disabled },
    variants: [
      {
        props: ({ ownerState: t }) => t.open,
        style: { transform: "rotate(180deg)" },
      },
      { props: { variant: "filled" }, style: { right: 7 } },
      { props: { variant: "outlined" }, style: { right: 7 } },
    ],
  })),
  rI = V(Xb, {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${z(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })({}),
  oI = S.forwardRef(function (t, n) {
    const {
        className: r,
        disabled: o,
        error: i,
        IconComponent: s,
        inputRef: a,
        variant: l = "standard",
        ...u
      } = t,
      c = { ...t, disabled: o, variant: l, error: i },
      d = tI(c);
    return R.jsxs(S.Fragment, {
      children: [
        R.jsx(nI, {
          ownerState: c,
          className: J(d.select, r),
          disabled: o,
          ref: a || n,
          ...u,
        }),
        t.multiple
          ? null
          : R.jsx(rI, { as: s, ownerState: c, className: d.icon }),
      ],
    });
  });
var zy;
const iI = V("fieldset", { shouldForwardProp: sn })({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
  }),
  sI = V("legend", { shouldForwardProp: sn })(
    ce(({ theme: e }) => ({
      float: "unset",
      width: "auto",
      overflow: "hidden",
      variants: [
        {
          props: ({ ownerState: t }) => !t.withLabel,
          style: {
            padding: 0,
            lineHeight: "11px",
            transition: e.transitions.create("width", {
              duration: 150,
              easing: e.transitions.easing.easeOut,
            }),
          },
        },
        {
          props: ({ ownerState: t }) => t.withLabel,
          style: {
            display: "block",
            padding: 0,
            height: 11,
            fontSize: "0.75em",
            visibility: "hidden",
            maxWidth: 0.01,
            transition: e.transitions.create("max-width", {
              duration: 50,
              easing: e.transitions.easing.easeOut,
            }),
            whiteSpace: "nowrap",
            "& > span": {
              paddingLeft: 5,
              paddingRight: 5,
              display: "inline-block",
              opacity: 0,
              visibility: "visible",
            },
          },
        },
        {
          props: ({ ownerState: t }) => t.withLabel && t.notched,
          style: {
            maxWidth: "100%",
            transition: e.transitions.create("max-width", {
              duration: 100,
              easing: e.transitions.easing.easeOut,
              delay: 50,
            }),
          },
        },
      ],
    })),
  );
function aI(e) {
  const {
      children: t,
      classes: n,
      className: r,
      label: o,
      notched: i,
      ...s
    } = e,
    a = o != null && o !== "",
    l = { ...e, notched: i, withLabel: a };
  return R.jsx(iI, {
    "aria-hidden": !0,
    className: r,
    ownerState: l,
    ...s,
    children: R.jsx(sI, {
      ownerState: l,
      children: a
        ? R.jsx("span", { children: o })
        : zy ||
          (zy = R.jsx("span", { className: "notranslate", children: "​" })),
    }),
  });
}
const lI = (e) => {
    const { classes: t } = e,
      r = he(
        {
          root: ["root"],
          notchedOutline: ["notchedOutline"],
          input: ["input"],
        },
        TO,
        t,
      );
    return { ...t, ...r };
  },
  uI = V(kc, {
    shouldForwardProp: (e) => sn(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: Cc,
  })(
    ce(({ theme: e }) => {
      const t =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return {
        position: "relative",
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${_n.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.text.primary,
        },
        "@media (hover: none)": {
          [`&:hover .${_n.notchedOutline}`]: {
            borderColor: e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
              : t,
          },
        },
        [`&.${_n.focused} .${_n.notchedOutline}`]: { borderWidth: 2 },
        variants: [
          ...Object.entries(e.palette)
            .filter(qe())
            .map(([n]) => ({
              props: { color: n },
              style: {
                [`&.${_n.focused} .${_n.notchedOutline}`]: {
                  borderColor: (e.vars || e).palette[n].main,
                },
              },
            })),
          {
            props: {},
            style: {
              [`&.${_n.error} .${_n.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.error.main,
              },
              [`&.${_n.disabled} .${_n.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.action.disabled,
              },
            },
          },
          {
            props: ({ ownerState: n }) => n.startAdornment,
            style: { paddingLeft: 14 },
          },
          {
            props: ({ ownerState: n }) => n.endAdornment,
            style: { paddingRight: 14 },
          },
          {
            props: ({ ownerState: n }) => n.multiline,
            style: { padding: "16.5px 14px" },
          },
          {
            props: ({ ownerState: n, size: r }) => n.multiline && r === "small",
            style: { padding: "8.5px 14px" },
          },
        ],
      };
    }),
  ),
  cI = V(aI, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (e, t) => t.notchedOutline,
  })(
    ce(({ theme: e }) => {
      const t =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return {
        borderColor: e.vars
          ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
          : t,
      };
    }),
  ),
  dI = V(Rc, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: Ec,
  })(
    ce(({ theme: e }) => ({
      padding: "16.5px 14px",
      ...(!e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderRadius: "inherit",
        },
      }),
      ...(e.vars && {
        "&:-webkit-autofill": { borderRadius: "inherit" },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      }),
      variants: [
        { props: { size: "small" }, style: { padding: "8.5px 14px" } },
        { props: ({ ownerState: t }) => t.multiline, style: { padding: 0 } },
        {
          props: ({ ownerState: t }) => t.startAdornment,
          style: { paddingLeft: 0 },
        },
        {
          props: ({ ownerState: t }) => t.endAdornment,
          style: { paddingRight: 0 },
        },
      ],
    })),
  ),
  lu = S.forwardRef(function (t, n) {
    var r;
    const o = me({ props: t, name: "MuiOutlinedInput" }),
      {
        components: i = {},
        fullWidth: s = !1,
        inputComponent: a = "input",
        label: l,
        multiline: u = !1,
        notched: c,
        slots: d = {},
        type: f = "text",
        ...g
      } = o,
      p = lI(o),
      v = hr(),
      x = Hr({
        props: o,
        muiFormControl: v,
        states: [
          "color",
          "disabled",
          "error",
          "focused",
          "hiddenLabel",
          "size",
          "required",
        ],
      }),
      m = {
        ...o,
        color: x.color || "primary",
        disabled: x.disabled,
        error: x.error,
        focused: x.focused,
        formControl: v,
        fullWidth: s,
        hiddenLabel: x.hiddenLabel,
        multiline: u,
        size: x.size,
        type: f,
      },
      y = d.root ?? i.Root ?? uI,
      h = d.input ?? i.Input ?? dI;
    return R.jsx(om, {
      slots: { root: y, input: h },
      renderSuffix: (b) =>
        R.jsx(cI, {
          ownerState: m,
          className: p.notchedOutline,
          label:
            l != null && l !== "" && x.required
              ? r || (r = R.jsxs(S.Fragment, { children: [l, " ", "*"] }))
              : l,
          notched:
            typeof c < "u" ? c : !!(b.startAdornment || b.filled || b.focused),
        }),
      fullWidth: s,
      inputComponent: a,
      multiline: u,
      ref: n,
      type: f,
      ...g,
      classes: { ...p, notchedOutline: null },
    });
  });
lu && (lu.muiName = "Input");
function fI(e) {
  return de("MuiSelect", e);
}
const ts = pe("MuiSelect", [
  "root",
  "select",
  "multiple",
  "filled",
  "outlined",
  "standard",
  "disabled",
  "focused",
  "icon",
  "iconOpen",
  "iconFilled",
  "iconOutlined",
  "iconStandard",
  "nativeInput",
  "error",
]);
var Uy;
const pI = V(qb, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`&.${ts.select}`]: t.select },
        { [`&.${ts.select}`]: t[n.variant] },
        { [`&.${ts.error}`]: t.error },
        { [`&.${ts.multiple}`]: t.multiple },
      ];
    },
  })({
    [`&.${ts.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  }),
  hI = V(Xb, {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${z(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })({}),
  mI = V("input", {
    shouldForwardProp: (e) => $b(e) && e !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (e, t) => t.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box",
  });
function Wy(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function gI(e) {
  return e == null || (typeof e == "string" && !e.trim());
}
const yI = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: s,
      } = e,
      a = {
        select: ["select", n, r && "disabled", o && "multiple", s && "error"],
        icon: ["icon", `icon${z(n)}`, i && "iconOpen", r && "disabled"],
        nativeInput: ["nativeInput"],
      };
    return he(a, fI, t);
  },
  vI = S.forwardRef(function (t, n) {
    var No;
    const {
        "aria-describedby": r,
        "aria-label": o,
        autoFocus: i,
        autoWidth: s,
        children: a,
        className: l,
        defaultOpen: u,
        defaultValue: c,
        disabled: d,
        displayEmpty: f,
        error: g = !1,
        IconComponent: p,
        inputRef: v,
        labelId: x,
        MenuProps: m = {},
        multiple: y,
        name: h,
        onBlur: b,
        onChange: C,
        onClose: k,
        onFocus: E,
        onOpen: T,
        open: $,
        readOnly: w,
        renderValue: P,
        SelectDisplayProps: D = {},
        tabIndex: N,
        type: j,
        value: _,
        variant: B = "standard",
        ...K
      } = t,
      [A, F] = Vf({ controlled: _, default: c, name: "Select" }),
      [W, q] = Vf({ controlled: $, default: u, name: "Select" }),
      Y = S.useRef(null),
      re = S.useRef(null),
      [te, ve] = S.useState(null),
      { current: Ee } = S.useRef($ != null),
      [Oe, rt] = S.useState(),
      $e = dt(n, v),
      se = S.useCallback((ee) => {
        (re.current = ee), ee && ve(ee);
      }, []),
      ye = te == null ? void 0 : te.parentNode;
    S.useImperativeHandle(
      $e,
      () => ({
        focus: () => {
          re.current.focus();
        },
        node: Y.current,
        value: A,
      }),
      [A],
    ),
      S.useEffect(() => {
        u &&
          W &&
          te &&
          !Ee &&
          (rt(s ? null : ye.clientWidth), re.current.focus());
      }, [te, s]),
      S.useEffect(() => {
        i && re.current.focus();
      }, [i]),
      S.useEffect(() => {
        if (!x) return;
        const ee = Bt(re.current).getElementById(x);
        if (ee) {
          const Ae = () => {
            getSelection().isCollapsed && re.current.focus();
          };
          return (
            ee.addEventListener("click", Ae),
            () => {
              ee.removeEventListener("click", Ae);
            }
          );
        }
      }, [x]);
    const fe = (ee, Ae) => {
        ee ? T && T(Ae) : k && k(Ae),
          Ee || (rt(s ? null : ye.clientWidth), q(ee));
      },
      ze = (ee) => {
        ee.button === 0 &&
          (ee.preventDefault(), re.current.focus(), fe(!0, ee));
      },
      ne = (ee) => {
        fe(!1, ee);
      },
      be = S.Children.toArray(a),
      St = (ee) => {
        const Ae = be.find((pt) => pt.props.value === ee.target.value);
        Ae !== void 0 && (F(Ae.props.value), C && C(ee, Ae));
      },
      _e = (ee) => (Ae) => {
        let pt;
        if (Ae.currentTarget.hasAttribute("tabindex")) {
          if (y) {
            pt = Array.isArray(A) ? A.slice() : [];
            const jo = A.indexOf(ee.props.value);
            jo === -1 ? pt.push(ee.props.value) : pt.splice(jo, 1);
          } else pt = ee.props.value;
          if (
            (ee.props.onClick && ee.props.onClick(Ae), A !== pt && (F(pt), C))
          ) {
            const jo = Ae.nativeEvent || Ae,
              _m = new jo.constructor(jo.type, jo);
            Object.defineProperty(_m, "target", {
              writable: !0,
              value: { value: pt, name: h },
            }),
              C(_m, ee);
          }
          y || fe(!1, Ae);
        }
      },
      je = (ee) => {
        w ||
          ([" ", "ArrowUp", "ArrowDown", "Enter"].includes(ee.key) &&
            (ee.preventDefault(), fe(!0, ee)));
      },
      Ve = te !== null && W,
      Tt = (ee) => {
        !Ve &&
          b &&
          (Object.defineProperty(ee, "target", {
            writable: !0,
            value: { value: A, name: h },
          }),
          b(ee));
      };
    delete K["aria-invalid"];
    let ke, O;
    const M = [];
    let H = !1;
    (ru({ value: A }) || f) && (P ? (ke = P(A)) : (H = !0));
    const X = be.map((ee) => {
      if (!S.isValidElement(ee)) return null;
      let Ae;
      if (y) {
        if (!Array.isArray(A)) throw new Error(ur(2));
        (Ae = A.some((pt) => Wy(pt, ee.props.value))),
          Ae && H && M.push(ee.props.children);
      } else (Ae = Wy(A, ee.props.value)), Ae && H && (O = ee.props.children);
      return S.cloneElement(ee, {
        "aria-selected": Ae ? "true" : "false",
        onClick: _e(ee),
        onKeyUp: (pt) => {
          pt.key === " " && pt.preventDefault(),
            ee.props.onKeyUp && ee.props.onKeyUp(pt);
        },
        role: "option",
        selected: Ae,
        value: void 0,
        "data-value": ee.props.value,
      });
    });
    H &&
      (y
        ? M.length === 0
          ? (ke = null)
          : (ke = M.reduce(
              (ee, Ae, pt) => (
                ee.push(Ae), pt < M.length - 1 && ee.push(", "), ee
              ),
              [],
            ))
        : (ke = O));
    let Z = Oe;
    !s && Ee && te && (Z = ye.clientWidth);
    let Q;
    typeof N < "u" ? (Q = N) : (Q = d ? null : 0);
    const oe = D.id || (h ? `mui-component-select-${h}` : void 0),
      He = { ...t, variant: B, value: A, open: Ve, error: g },
      Vt = yI(He),
      we = {
        ...m.PaperProps,
        ...((No = m.slotProps) == null ? void 0 : No.paper),
      },
      qn = fb();
    return R.jsxs(S.Fragment, {
      children: [
        R.jsx(pI, {
          as: "div",
          ref: se,
          tabIndex: Q,
          role: "combobox",
          "aria-controls": qn,
          "aria-disabled": d ? "true" : void 0,
          "aria-expanded": Ve ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": o,
          "aria-labelledby": [x, oe].filter(Boolean).join(" ") || void 0,
          "aria-describedby": r,
          onKeyDown: je,
          onMouseDown: d || w ? null : ze,
          onBlur: Tt,
          onFocus: E,
          ...D,
          ownerState: He,
          className: J(D.className, Vt.select, l),
          id: oe,
          children: gI(ke)
            ? Uy ||
              (Uy = R.jsx("span", { className: "notranslate", children: "​" }))
            : ke,
        }),
        R.jsx(mI, {
          "aria-invalid": g,
          value: Array.isArray(A) ? A.join(",") : A,
          name: h,
          ref: Y,
          "aria-hidden": !0,
          onChange: St,
          tabIndex: -1,
          disabled: d,
          className: Vt.nativeInput,
          autoFocus: i,
          ...K,
          ownerState: He,
        }),
        R.jsx(hI, { as: p, className: Vt.icon, ownerState: He }),
        R.jsx(ZA, {
          id: `menu-${h || ""}`,
          anchorEl: ye,
          open: Ve,
          onClose: ne,
          anchorOrigin: { vertical: "bottom", horizontal: "center" },
          transformOrigin: { vertical: "top", horizontal: "center" },
          ...m,
          MenuListProps: {
            "aria-labelledby": x,
            role: "listbox",
            "aria-multiselectable": y ? "true" : void 0,
            disableListWrap: !0,
            id: qn,
            ...m.MenuListProps,
          },
          slotProps: {
            ...m.slotProps,
            paper: {
              ...we,
              style: { minWidth: Z, ...(we != null ? we.style : null) },
            },
          },
          children: X,
        }),
      ],
    });
  }),
  SI = (e) => {
    const { classes: t } = e;
    return t;
  },
  am = {
    name: "MuiSelect",
    overridesResolver: (e, t) => t.root,
    shouldForwardProp: (e) => sn(e) && e !== "variant",
    slot: "Root",
  },
  bI = V(au, am)(""),
  wI = V(lu, am)(""),
  xI = V(ou, am)(""),
  Qb = S.forwardRef(function (t, n) {
    const r = me({ name: "MuiSelect", props: t }),
      {
        autoWidth: o = !1,
        children: i,
        classes: s = {},
        className: a,
        defaultOpen: l = !1,
        displayEmpty: u = !1,
        IconComponent: c = OO,
        id: d,
        input: f,
        inputProps: g,
        label: p,
        labelId: v,
        MenuProps: x,
        multiple: m = !1,
        native: y = !1,
        onClose: h,
        onOpen: b,
        open: C,
        renderValue: k,
        SelectDisplayProps: E,
        variant: T = "outlined",
        ...$
      } = r,
      w = y ? oI : vI,
      P = hr(),
      D = Hr({ props: r, muiFormControl: P, states: ["variant", "error"] }),
      N = D.variant || T,
      j = { ...r, variant: N, classes: s },
      _ = SI(j),
      { root: B, ...K } = _,
      A =
        f ||
        {
          standard: R.jsx(bI, { ownerState: j }),
          outlined: R.jsx(wI, { label: p, ownerState: j }),
          filled: R.jsx(xI, { ownerState: j }),
        }[N],
      F = dt(n, Ni(A));
    return R.jsx(S.Fragment, {
      children: S.cloneElement(A, {
        inputComponent: w,
        inputProps: {
          children: i,
          error: D.error,
          IconComponent: c,
          variant: N,
          type: void 0,
          multiple: m,
          ...(y
            ? { id: d }
            : {
                autoWidth: o,
                defaultOpen: l,
                displayEmpty: u,
                labelId: v,
                MenuProps: x,
                onClose: h,
                onOpen: b,
                open: C,
                renderValue: k,
                SelectDisplayProps: { id: d, ...E },
              }),
          ...g,
          classes: g ? Et(K, g.classes) : K,
          ...(f ? f.props.inputProps : {}),
        },
        ...(((m && y) || u) && N === "outlined" ? { notched: !0 } : {}),
        ref: F,
        className: J(A.props.className, a, _.root),
        ...(!f && { variant: N }),
        ...$,
      }),
    });
  });
Qb.muiName = "Select";
function CI(e = {}) {
  const {
      autoHideDuration: t = null,
      disableWindowBlurListener: n = !1,
      onClose: r,
      open: o,
      resumeHideDuration: i,
    } = e,
    s = Wh();
  S.useEffect(() => {
    if (!o) return;
    function m(y) {
      y.defaultPrevented ||
        (y.key === "Escape" && (r == null || r(y, "escapeKeyDown")));
    }
    return (
      document.addEventListener("keydown", m),
      () => {
        document.removeEventListener("keydown", m);
      }
    );
  }, [o, r]);
  const a = tr((m, y) => {
      r == null || r(m, y);
    }),
    l = tr((m) => {
      !r ||
        m == null ||
        s.start(m, () => {
          a(null, "timeout");
        });
    });
  S.useEffect(() => (o && l(t), s.clear), [o, t, l, s]);
  const u = (m) => {
      r == null || r(m, "clickaway");
    },
    c = s.clear,
    d = S.useCallback(() => {
      t != null && l(i ?? t * 0.5);
    }, [t, i, l]),
    f = (m) => (y) => {
      const h = m.onBlur;
      h == null || h(y), d();
    },
    g = (m) => (y) => {
      const h = m.onFocus;
      h == null || h(y), c();
    },
    p = (m) => (y) => {
      const h = m.onMouseEnter;
      h == null || h(y), c();
    },
    v = (m) => (y) => {
      const h = m.onMouseLeave;
      h == null || h(y), d();
    };
  return (
    S.useEffect(() => {
      if (!n && o)
        return (
          window.addEventListener("focus", d),
          window.addEventListener("blur", c),
          () => {
            window.removeEventListener("focus", d),
              window.removeEventListener("blur", c);
          }
        );
    }, [n, o, d, c]),
    {
      getRootProps: (m = {}) => {
        const y = { ...Yl(e), ...Yl(m) };
        return {
          role: "presentation",
          ...m,
          ...y,
          onBlur: f(y),
          onFocus: g(y),
          onMouseEnter: p(y),
          onMouseLeave: v(y),
        };
      },
      onClickAway: u,
    }
  );
}
function EI(e) {
  return de("MuiSnackbarContent", e);
}
pe("MuiSnackbarContent", ["root", "message", "action"]);
const kI = (e) => {
    const { classes: t } = e;
    return he(
      { root: ["root"], action: ["action"], message: ["message"] },
      EI,
      t,
    );
  },
  RI = V(Ea, {
    name: "MuiSnackbarContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(
    ce(({ theme: e }) => {
      const t = e.palette.mode === "light" ? 0.8 : 0.98,
        n = cb(e.palette.background.default, t);
      return {
        ...e.typography.body2,
        color: e.vars
          ? e.vars.palette.SnackbarContent.color
          : e.palette.getContrastText(n),
        backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : n,
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "6px 16px",
        borderRadius: (e.vars || e).shape.borderRadius,
        flexGrow: 1,
        [e.breakpoints.up("sm")]: { flexGrow: "initial", minWidth: 288 },
      };
    }),
  ),
  TI = V("div", {
    name: "MuiSnackbarContent",
    slot: "Message",
    overridesResolver: (e, t) => t.message,
  })({ padding: "8px 0" }),
  PI = V("div", {
    name: "MuiSnackbarContent",
    slot: "Action",
    overridesResolver: (e, t) => t.action,
  })({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8,
  }),
  OI = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiSnackbarContent" }),
      { action: o, className: i, message: s, role: a = "alert", ...l } = r,
      u = r,
      c = kI(u);
    return R.jsxs(RI, {
      role: a,
      square: !0,
      elevation: 6,
      className: J(c.root, i),
      ownerState: u,
      ref: n,
      ...l,
      children: [
        R.jsx(TI, { className: c.message, ownerState: u, children: s }),
        o
          ? R.jsx(PI, { className: c.action, ownerState: u, children: o })
          : null,
      ],
    });
  });
function $I(e) {
  return de("MuiSnackbar", e);
}
pe("MuiSnackbar", [
  "root",
  "anchorOriginTopCenter",
  "anchorOriginBottomCenter",
  "anchorOriginTopRight",
  "anchorOriginBottomRight",
  "anchorOriginTopLeft",
  "anchorOriginBottomLeft",
]);
const AI = (e) => {
    const { classes: t, anchorOrigin: n } = e,
      r = { root: ["root", `anchorOrigin${z(n.vertical)}${z(n.horizontal)}`] };
    return he(r, $I, t);
  },
  Vy = V("div", {
    name: "MuiSnackbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[
          `anchorOrigin${z(n.anchorOrigin.vertical)}${z(n.anchorOrigin.horizontal)}`
        ],
      ];
    },
  })(
    ce(({ theme: e }) => ({
      zIndex: (e.vars || e).zIndex.snackbar,
      position: "fixed",
      display: "flex",
      left: 8,
      right: 8,
      justifyContent: "center",
      alignItems: "center",
      variants: [
        {
          props: ({ ownerState: t }) => t.anchorOrigin.vertical === "top",
          style: { top: 8, [e.breakpoints.up("sm")]: { top: 24 } },
        },
        {
          props: ({ ownerState: t }) => t.anchorOrigin.vertical !== "top",
          style: { bottom: 8, [e.breakpoints.up("sm")]: { bottom: 24 } },
        },
        {
          props: ({ ownerState: t }) => t.anchorOrigin.horizontal === "left",
          style: {
            justifyContent: "flex-start",
            [e.breakpoints.up("sm")]: { left: 24, right: "auto" },
          },
        },
        {
          props: ({ ownerState: t }) => t.anchorOrigin.horizontal === "right",
          style: {
            justifyContent: "flex-end",
            [e.breakpoints.up("sm")]: { right: 24, left: "auto" },
          },
        },
        {
          props: ({ ownerState: t }) => t.anchorOrigin.horizontal === "center",
          style: {
            [e.breakpoints.up("sm")]: {
              left: "50%",
              right: "auto",
              transform: "translateX(-50%)",
            },
          },
        },
      ],
    })),
  ),
  II = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiSnackbar" }),
      o = fc(),
      i = {
        enter: o.transitions.duration.enteringScreen,
        exit: o.transitions.duration.leavingScreen,
      },
      {
        action: s,
        anchorOrigin: { vertical: a, horizontal: l } = {
          vertical: "bottom",
          horizontal: "left",
        },
        autoHideDuration: u = null,
        children: c,
        className: d,
        ClickAwayListenerProps: f,
        ContentProps: g,
        disableWindowBlurListener: p = !1,
        message: v,
        onBlur: x,
        onClose: m,
        onFocus: y,
        onMouseEnter: h,
        onMouseLeave: b,
        open: C,
        resumeHideDuration: k,
        TransitionComponent: E = su,
        transitionDuration: T = i,
        TransitionProps: { onEnter: $, onExited: w, ...P } = {},
        ...D
      } = r,
      N = {
        ...r,
        anchorOrigin: { vertical: a, horizontal: l },
        autoHideDuration: u,
        disableWindowBlurListener: p,
        TransitionComponent: E,
        transitionDuration: T,
      },
      j = AI(N),
      { getRootProps: _, onClickAway: B } = CI({ ...N }),
      [K, A] = S.useState(!0),
      F = Hf({
        elementType: Vy,
        getSlotProps: _,
        externalForwardedProps: D,
        ownerState: N,
        additionalProps: { ref: n },
        className: [j.root, d],
      }),
      W = (Y) => {
        A(!0), w && w(Y);
      },
      q = (Y, re) => {
        A(!1), $ && $(Y, re);
      };
    return !C && K
      ? null
      : R.jsx(h$, {
          onClickAway: B,
          ...f,
          children: R.jsx(Vy, {
            ...F,
            children: R.jsx(E, {
              appear: !0,
              in: C,
              timeout: T,
              direction: a === "top" ? "down" : "up",
              onEnter: q,
              onExited: W,
              ...P,
              children: c || R.jsx(OI, { message: v, action: s, ...g }),
            }),
          }),
        });
  });
function LI(e) {
  return de("MuiSwitch", e);
}
const Pt = pe("MuiSwitch", [
    "root",
    "edgeStart",
    "edgeEnd",
    "switchBase",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
    "sizeMedium",
    "checked",
    "disabled",
    "input",
    "thumb",
    "track",
  ]),
  _I = (e) => {
    const {
        classes: t,
        edge: n,
        size: r,
        color: o,
        checked: i,
        disabled: s,
      } = e,
      a = {
        root: ["root", n && `edge${z(n)}`, `size${z(r)}`],
        switchBase: [
          "switchBase",
          `color${z(o)}`,
          i && "checked",
          s && "disabled",
        ],
        thumb: ["thumb"],
        track: ["track"],
        input: ["input"],
      },
      l = he(a, LI, t);
    return { ...t, ...l };
  },
  MI = V("span", {
    name: "MuiSwitch",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.edge && t[`edge${z(n.edge)}`], t[`size${z(n.size)}`]];
    },
  })({
    display: "inline-flex",
    width: 34 + 12 * 2,
    height: 14 + 12 * 2,
    overflow: "hidden",
    padding: 12,
    boxSizing: "border-box",
    position: "relative",
    flexShrink: 0,
    zIndex: 0,
    verticalAlign: "middle",
    "@media print": { colorAdjust: "exact" },
    variants: [
      { props: { edge: "start" }, style: { marginLeft: -8 } },
      { props: { edge: "end" }, style: { marginRight: -8 } },
      {
        props: { size: "small" },
        style: {
          width: 40,
          height: 24,
          padding: 7,
          [`& .${Pt.thumb}`]: { width: 16, height: 16 },
          [`& .${Pt.switchBase}`]: {
            padding: 4,
            [`&.${Pt.checked}`]: { transform: "translateX(16px)" },
          },
        },
      },
    ],
  }),
  NI = V(Db, {
    name: "MuiSwitch",
    slot: "SwitchBase",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.switchBase,
        { [`& .${Pt.input}`]: t.input },
        n.color !== "default" && t[`color${z(n.color)}`],
      ];
    },
  })(
    ce(({ theme: e }) => ({
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      color: e.vars
        ? e.vars.palette.Switch.defaultColor
        : `${e.palette.mode === "light" ? e.palette.common.white : e.palette.grey[300]}`,
      transition: e.transitions.create(["left", "transform"], {
        duration: e.transitions.duration.shortest,
      }),
      [`&.${Pt.checked}`]: { transform: "translateX(20px)" },
      [`&.${Pt.disabled}`]: {
        color: e.vars
          ? e.vars.palette.Switch.defaultDisabledColor
          : `${e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[600]}`,
      },
      [`&.${Pt.checked} + .${Pt.track}`]: { opacity: 0.5 },
      [`&.${Pt.disabled} + .${Pt.track}`]: {
        opacity: e.vars
          ? e.vars.opacity.switchTrackDisabled
          : `${e.palette.mode === "light" ? 0.12 : 0.2}`,
      },
      [`& .${Pt.input}`]: { left: "-100%", width: "300%" },
    })),
    ce(({ theme: e }) => ({
      "&:hover": {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
          : $t(e.palette.action.active, e.palette.action.hoverOpacity),
        "@media (hover: none)": { backgroundColor: "transparent" },
      },
      variants: [
        ...Object.entries(e.palette)
          .filter(qe(["light"]))
          .map(([t]) => ({
            props: { color: t },
            style: {
              [`&.${Pt.checked}`]: {
                color: (e.vars || e).palette[t].main,
                "&:hover": {
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : $t(e.palette[t].main, e.palette.action.hoverOpacity),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
                [`&.${Pt.disabled}`]: {
                  color: e.vars
                    ? e.vars.palette.Switch[`${t}DisabledColor`]
                    : `${e.palette.mode === "light" ? Co(e.palette[t].main, 0.62) : xo(e.palette[t].main, 0.55)}`,
                },
              },
              [`&.${Pt.checked} + .${Pt.track}`]: {
                backgroundColor: (e.vars || e).palette[t].main,
              },
            },
          })),
      ],
    })),
  ),
  jI = V("span", {
    name: "MuiSwitch",
    slot: "Track",
    overridesResolver: (e, t) => t.track,
  })(
    ce(({ theme: e }) => ({
      height: "100%",
      width: "100%",
      borderRadius: 14 / 2,
      zIndex: -1,
      transition: e.transitions.create(["opacity", "background-color"], {
        duration: e.transitions.duration.shortest,
      }),
      backgroundColor: e.vars
        ? e.vars.palette.common.onBackground
        : `${e.palette.mode === "light" ? e.palette.common.black : e.palette.common.white}`,
      opacity: e.vars
        ? e.vars.opacity.switchTrack
        : `${e.palette.mode === "light" ? 0.38 : 0.3}`,
    })),
  ),
  FI = V("span", {
    name: "MuiSwitch",
    slot: "Thumb",
    overridesResolver: (e, t) => t.thumb,
  })(
    ce(({ theme: e }) => ({
      boxShadow: (e.vars || e).shadows[1],
      backgroundColor: "currentColor",
      width: 20,
      height: 20,
      borderRadius: "50%",
    })),
  ),
  DI = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiSwitch" }),
      {
        className: o,
        color: i = "primary",
        edge: s = !1,
        size: a = "medium",
        sx: l,
        ...u
      } = r,
      c = { ...r, color: i, edge: s, size: a },
      d = _I(c),
      f = R.jsx(FI, { className: d.thumb, ownerState: c });
    return R.jsxs(MI, {
      className: J(d.root, o),
      sx: l,
      ownerState: c,
      children: [
        R.jsx(NI, {
          type: "checkbox",
          icon: f,
          checkedIcon: f,
          ref: n,
          ownerState: c,
          ...u,
          classes: { ...d, root: d.switchBase },
        }),
        R.jsx(jI, { className: d.track, ownerState: c }),
      ],
    });
  });
function BI(e) {
  return de("MuiToolbar", e);
}
pe("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const zI = (e) => {
    const { classes: t, disableGutters: n, variant: r } = e;
    return he({ root: ["root", !n && "gutters", r] }, BI, t);
  },
  UI = V("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
    },
  })(
    ce(({ theme: e }) => ({
      position: "relative",
      display: "flex",
      alignItems: "center",
      variants: [
        {
          props: ({ ownerState: t }) => !t.disableGutters,
          style: {
            paddingLeft: e.spacing(2),
            paddingRight: e.spacing(2),
            [e.breakpoints.up("sm")]: {
              paddingLeft: e.spacing(3),
              paddingRight: e.spacing(3),
            },
          },
        },
        { props: { variant: "dense" }, style: { minHeight: 48 } },
        { props: { variant: "regular" }, style: e.mixins.toolbar },
      ],
    })),
  ),
  WI = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiToolbar" }),
      {
        className: o,
        component: i = "div",
        disableGutters: s = !1,
        variant: a = "regular",
        ...l
      } = r,
      u = { ...r, component: i, disableGutters: s, variant: a },
      c = zI(u);
    return R.jsx(UI, {
      as: i,
      className: J(c.root, o),
      ref: n,
      ownerState: u,
      ...l,
    });
  });
function VI(e) {
  return de("MuiTextField", e);
}
pe("MuiTextField", ["root"]);
const HI = { standard: au, filled: ou, outlined: lu },
  KI = (e) => {
    const { classes: t } = e;
    return he({ root: ["root"] }, VI, t);
  },
  GI = V(Ub, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  uu = S.forwardRef(function (t, n) {
    const r = me({ props: t, name: "MuiTextField" }),
      {
        autoComplete: o,
        autoFocus: i = !1,
        children: s,
        className: a,
        color: l = "primary",
        defaultValue: u,
        disabled: c = !1,
        error: d = !1,
        FormHelperTextProps: f,
        fullWidth: g = !1,
        helperText: p,
        id: v,
        InputLabelProps: x,
        inputProps: m,
        InputProps: y,
        inputRef: h,
        label: b,
        maxRows: C,
        minRows: k,
        multiline: E = !1,
        name: T,
        onBlur: $,
        onChange: w,
        onFocus: P,
        placeholder: D,
        required: N = !1,
        rows: j,
        select: _ = !1,
        SelectProps: B,
        slots: K = {},
        slotProps: A = {},
        type: F,
        value: W,
        variant: q = "outlined",
        ...Y
      } = r,
      re = {
        ...r,
        autoFocus: i,
        color: l,
        disabled: c,
        error: d,
        fullWidth: g,
        multiline: E,
        required: N,
        select: _,
        variant: q,
      },
      te = KI(re),
      ve = fb(v),
      Ee = p && ve ? `${ve}-helper-text` : void 0,
      Oe = b && ve ? `${ve}-label` : void 0,
      rt = HI[q],
      $e = {
        slots: K,
        slotProps: {
          input: y,
          inputLabel: x,
          htmlInput: m,
          formHelperText: f,
          select: B,
          ...A,
        },
      },
      se = {},
      ye = $e.slotProps.inputLabel;
    q === "outlined" &&
      (ye && typeof ye.shrink < "u" && (se.notched = ye.shrink),
      (se.label = b)),
      _ &&
        ((!B || !B.native) && (se.id = void 0),
        (se["aria-describedby"] = void 0));
    const [fe, ze] = Mt("input", {
        elementType: rt,
        externalForwardedProps: $e,
        additionalProps: se,
        ownerState: re,
      }),
      [ne, be] = Mt("inputLabel", {
        elementType: yA,
        externalForwardedProps: $e,
        ownerState: re,
      }),
      [St, _e] = Mt("htmlInput", {
        elementType: "input",
        externalForwardedProps: $e,
        ownerState: re,
      }),
      [je, Ve] = Mt("formHelperText", {
        elementType: iA,
        externalForwardedProps: $e,
        ownerState: re,
      }),
      [Tt, ke] = Mt("select", {
        elementType: Qb,
        externalForwardedProps: $e,
        ownerState: re,
      }),
      O = R.jsx(fe, {
        "aria-describedby": Ee,
        autoComplete: o,
        autoFocus: i,
        defaultValue: u,
        fullWidth: g,
        multiline: E,
        name: T,
        rows: j,
        maxRows: C,
        minRows: k,
        type: F,
        value: W,
        id: ve,
        inputRef: h,
        onBlur: $,
        onChange: w,
        onFocus: P,
        placeholder: D,
        inputProps: _e,
        slots: { input: K.htmlInput ? St : void 0 },
        ...ze,
      });
    return R.jsxs(GI, {
      className: J(te.root, a),
      disabled: c,
      error: d,
      fullWidth: g,
      ref: n,
      required: N,
      color: l,
      variant: q,
      ownerState: re,
      ...Y,
      children: [
        b != null &&
          b !== "" &&
          R.jsx(ne, { htmlFor: ve, id: Oe, ...be, children: b }),
        _
          ? R.jsx(Tt, {
              "aria-describedby": Ee,
              id: ve,
              labelId: Oe,
              value: W,
              input: O,
              ...ke,
              children: s,
            })
          : O,
        p && R.jsx(je, { id: Ee, ...Ve, children: p }),
      ],
    });
  }),
  qI = On(
    R.jsx("path", { d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" }),
    "Send",
  ),
  XI = V(Tc)({ maxHeight: "39.99px" }),
  Yb = ({
    addItem: e,
    maxLengthUserMeaasge: t,
    taskID: n,
    disabled: r,
    todoListsID: o,
  }) => {
    const [i, s] = S.useState(""),
      [a, l] = S.useState(!1),
      u = a
        ? "Your tottle is too empty"
        : i.length < t
          ? null
          : "Your title is to long",
      c = (f) => {
        a && l(!1);
        const g = f.target.value.trim();
        g || f.target.value.length === 0
          ? g.length <= t && s(f.target.value)
          : l(!0);
      },
      d = () => {
        i.length && e(i), s("");
      };
    return R.jsxs(Fb, {
      children: [
        R.jsx(uu, {
          variant: "outlined",
          size: "small",
          label: "Please, enter title",
          autoFocus: !!n,
          value: i,
          onChange: c,
          onKeyDown: (f) => {
            f.key === "Enter" && d();
          },
          error: !!u,
          helperText: u,
          disabled: r,
        }),
        R.jsx(XI, {
          size: "small",
          variant: "contained",
          color: "primary",
          onClick: () => d(),
          disabled: !i.length || i.length >= t || r,
          endIcon: R.jsx(qI, {}),
          children: "ADD",
        }),
      ],
    });
  },
  Jb = ({ title: e, spanClasses: t, changeTitleHandler: n }) => {
    const [r, o] = S.useState(!1),
      [i, s] = S.useState(e),
      a = (c) => {
        const d = c.target.value.trim();
        (d || c.target.value.length === 0) &&
          d.length <= 15 &&
          s(c.target.value),
          s(c.target.value);
      },
      l = () => {
        o(!r);
      },
      u = () => {
        o(!r), n(i);
      };
    return R.jsx(R.Fragment, {
      children: r
        ? R.jsx(uu, {
            variant: "standard",
            size: "small",
            value: i,
            onChange: a,
            autoFocus: !0,
            onBlur: u,
          })
        : R.jsx("span", { className: t, onDoubleClick: l, children: e }),
    });
  },
  Zb = On(
    [
      R.jsx(
        "path",
        {
          d: "M21 19.1H3V5h18zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2",
        },
        "0",
      ),
      R.jsx(
        "path",
        {
          d: "M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41z",
        },
        "1",
      ),
    ],
    "CancelPresentation",
  );
function ht(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var QI = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  Hy = QI,
  $d = () => Math.random().toString(36).substring(7).split("").join("."),
  YI = {
    INIT: `@@redux/INIT${$d()}`,
    REPLACE: `@@redux/REPLACE${$d()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${$d()}`,
  },
  cu = YI;
function lm(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function ew(e, t, n) {
  if (typeof e != "function") throw new Error(ht(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(ht(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(ht(1));
    return n(ew)(e, t);
  }
  let r = e,
    o = t,
    i = new Map(),
    s = i,
    a = 0,
    l = !1;
  function u() {
    s === i &&
      ((s = new Map()),
      i.forEach((x, m) => {
        s.set(m, x);
      }));
  }
  function c() {
    if (l) throw new Error(ht(3));
    return o;
  }
  function d(x) {
    if (typeof x != "function") throw new Error(ht(4));
    if (l) throw new Error(ht(5));
    let m = !0;
    u();
    const y = a++;
    return (
      s.set(y, x),
      function () {
        if (m) {
          if (l) throw new Error(ht(6));
          (m = !1), u(), s.delete(y), (i = null);
        }
      }
    );
  }
  function f(x) {
    if (!lm(x)) throw new Error(ht(7));
    if (typeof x.type > "u") throw new Error(ht(8));
    if (typeof x.type != "string") throw new Error(ht(17));
    if (l) throw new Error(ht(9));
    try {
      (l = !0), (o = r(o, x));
    } finally {
      l = !1;
    }
    return (
      (i = s).forEach((y) => {
        y();
      }),
      x
    );
  }
  function g(x) {
    if (typeof x != "function") throw new Error(ht(10));
    (r = x), f({ type: cu.REPLACE });
  }
  function p() {
    const x = d;
    return {
      subscribe(m) {
        if (typeof m != "object" || m === null) throw new Error(ht(11));
        function y() {
          const b = m;
          b.next && b.next(c());
        }
        return y(), { unsubscribe: x(y) };
      },
      [Hy]() {
        return this;
      },
    };
  }
  return (
    f({ type: cu.INIT }),
    { dispatch: f, subscribe: d, getState: c, replaceReducer: g, [Hy]: p }
  );
}
function JI(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: cu.INIT }) > "u") throw new Error(ht(12));
    if (typeof n(void 0, { type: cu.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(ht(13));
  });
}
function ZI(e) {
  const t = Object.keys(e),
    n = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let o;
  try {
    JI(n);
  } catch (i) {
    o = i;
  }
  return function (s = {}, a) {
    if (o) throw o;
    let l = !1;
    const u = {};
    for (let c = 0; c < r.length; c++) {
      const d = r[c],
        f = n[d],
        g = s[d],
        p = f(g, a);
      if (typeof p > "u") throw (a && a.type, new Error(ht(14)));
      (u[d] = p), (l = l || p !== g);
    }
    return (l = l || r.length !== Object.keys(s).length), l ? u : s;
  };
}
function du(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
      ? e[0]
      : e.reduce(
          (t, n) =>
            (...r) =>
              t(n(...r)),
        );
}
function eL(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(ht(15));
    };
    const s = { getState: o.getState, dispatch: (l, ...u) => i(l, ...u) },
      a = e.map((l) => l(s));
    return (i = du(...a)(o.dispatch)), { ...o, dispatch: i };
  };
}
function tL(e) {
  return lm(e) && "type" in e && typeof e.type == "string";
}
var tw = Symbol.for("immer-nothing"),
  Ky = Symbol.for("immer-draftable"),
  en = Symbol.for("immer-state");
function En(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var Pi = Object.getPrototypeOf;
function Eo(e) {
  return !!e && !!e[en];
}
function fr(e) {
  var t;
  return e
    ? nw(e) ||
        Array.isArray(e) ||
        !!e[Ky] ||
        !!((t = e.constructor) != null && t[Ky]) ||
        Oc(e) ||
        $c(e)
    : !1;
}
var nL = Object.prototype.constructor.toString();
function nw(e) {
  if (!e || typeof e != "object") return !1;
  const t = Pi(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === nL;
}
function fu(e, t) {
  Pc(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function Pc(e) {
  const t = e[en];
  return t ? t.type_ : Array.isArray(e) ? 1 : Oc(e) ? 2 : $c(e) ? 3 : 0;
}
function sp(e, t) {
  return Pc(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function rw(e, t, n) {
  const r = Pc(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function rL(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Oc(e) {
  return e instanceof Map;
}
function $c(e) {
  return e instanceof Set;
}
function no(e) {
  return e.copy_ || e.base_;
}
function ap(e, t) {
  if (Oc(e)) return new Map(e);
  if ($c(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = nw(e);
  if (t === !0 || (t === "class_only" && !n)) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[en];
    let o = Reflect.ownKeys(r);
    for (let i = 0; i < o.length; i++) {
      const s = o[i],
        a = r[s];
      a.writable === !1 && ((a.writable = !0), (a.configurable = !0)),
        (a.get || a.set) &&
          (r[s] = {
            configurable: !0,
            writable: !0,
            enumerable: a.enumerable,
            value: e[s],
          });
    }
    return Object.create(Pi(e), r);
  } else {
    const r = Pi(e);
    if (r !== null && n) return { ...e };
    const o = Object.create(r);
    return Object.assign(o, e);
  }
}
function um(e, t = !1) {
  return (
    Ac(e) ||
      Eo(e) ||
      !fr(e) ||
      (Pc(e) > 1 && (e.set = e.add = e.clear = e.delete = oL),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => um(r, !0))),
    e
  );
}
function oL() {
  En(2);
}
function Ac(e) {
  return Object.isFrozen(e);
}
var iL = {};
function ko(e) {
  const t = iL[e];
  return t || En(0, e), t;
}
var na;
function ow() {
  return na;
}
function sL(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Gy(e, t) {
  t &&
    (ko("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function lp(e) {
  up(e), e.drafts_.forEach(aL), (e.drafts_ = null);
}
function up(e) {
  e === na && (na = e.parent_);
}
function qy(e) {
  return (na = sL(na, e));
}
function aL(e) {
  const t = e[en];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Xy(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[en].modified_ && (lp(t), En(4)),
        fr(e) && ((e = pu(t, e)), t.parent_ || hu(t, e)),
        t.patches_ &&
          ko("Patches").generateReplacementPatches_(
            n[en].base_,
            e,
            t.patches_,
            t.inversePatches_,
          ))
      : (e = pu(t, n, [])),
    lp(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== tw ? e : void 0
  );
}
function pu(e, t, n) {
  if (Ac(t)) return t;
  const r = t[en];
  if (!r) return fu(t, (o, i) => Qy(e, r, t, o, i, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return hu(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o,
      s = !1;
    r.type_ === 3 && ((i = new Set(o)), o.clear(), (s = !0)),
      fu(i, (a, l) => Qy(e, r, o, a, l, n, s)),
      hu(e, o, !1),
      n &&
        e.patches_ &&
        ko("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function Qy(e, t, n, r, o, i, s) {
  if (Eo(o)) {
    const a =
        i && t && t.type_ !== 3 && !sp(t.assigned_, r) ? i.concat(r) : void 0,
      l = pu(e, o, a);
    if ((rw(n, r, l), Eo(l))) e.canAutoFreeze_ = !1;
    else return;
  } else s && n.add(o);
  if (fr(o) && !Ac(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    pu(e, o),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        hu(e, o);
  }
}
function hu(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && um(t, n);
}
function lL(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : ow(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let o = r,
    i = cm;
  n && ((o = [r]), (i = ra));
  const { revoke: s, proxy: a } = Proxy.revocable(o, i);
  return (r.draft_ = a), (r.revoke_ = s), a;
}
var cm = {
    get(e, t) {
      if (t === en) return e;
      const n = no(e);
      if (!sp(n, t)) return uL(e, n, t);
      const r = n[t];
      return e.finalized_ || !fr(r)
        ? r
        : r === Ad(e.base_, t)
          ? (Id(e), (e.copy_[t] = dp(r, e)))
          : r;
    },
    has(e, t) {
      return t in no(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(no(e));
    },
    set(e, t, n) {
      const r = iw(no(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const o = Ad(no(e), t),
          i = o == null ? void 0 : o[en];
        if (i && i.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (rL(n, o) && (n !== void 0 || sp(e.base_, t))) return !0;
        Id(e), cp(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        Ad(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Id(e), cp(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = no(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      En(11);
    },
    getPrototypeOf(e) {
      return Pi(e.base_);
    },
    setPrototypeOf() {
      En(12);
    },
  },
  ra = {};
fu(cm, (e, t) => {
  ra[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
ra.deleteProperty = function (e, t) {
  return ra.set.call(this, e, t, void 0);
};
ra.set = function (e, t, n) {
  return cm.set.call(this, e[0], t, n, e[0]);
};
function Ad(e, t) {
  const n = e[en];
  return (n ? no(n) : e)[t];
}
function uL(e, t, n) {
  var o;
  const r = iw(t, n);
  return r
    ? "value" in r
      ? r.value
      : (o = r.get) == null
        ? void 0
        : o.call(e.draft_)
    : void 0;
}
function iw(e, t) {
  if (!(t in e)) return;
  let n = Pi(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = Pi(n);
  }
}
function cp(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && cp(e.parent_));
}
function Id(e) {
  e.copy_ || (e.copy_ = ap(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var cL = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const i = n;
          n = t;
          const s = this;
          return function (l = i, ...u) {
            return s.produce(l, (c) => n.call(this, c, ...u));
          };
        }
        typeof n != "function" && En(6),
          r !== void 0 && typeof r != "function" && En(7);
        let o;
        if (fr(t)) {
          const i = qy(this),
            s = dp(t, void 0);
          let a = !0;
          try {
            (o = n(s)), (a = !1);
          } finally {
            a ? lp(i) : up(i);
          }
          return Gy(i, r), Xy(o, i);
        } else if (!t || typeof t != "object") {
          if (
            ((o = n(t)),
            o === void 0 && (o = t),
            o === tw && (o = void 0),
            this.autoFreeze_ && um(o, !0),
            r)
          ) {
            const i = [],
              s = [];
            ko("Patches").generateReplacementPatches_(t, o, i, s), r(i, s);
          }
          return o;
        } else En(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (s, ...a) => this.produceWithPatches(s, (l) => t(l, ...a));
        let r, o;
        return [
          this.produce(t, n, (s, a) => {
            (r = s), (o = a);
          }),
          r,
          o,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    fr(e) || En(8), Eo(e) && (e = dL(e));
    const t = qy(this),
      n = dp(e, void 0);
    return (n[en].isManual_ = !0), up(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[en];
    (!n || !n.isManual_) && En(9);
    const { scope_: r } = n;
    return Gy(r, t), Xy(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const o = t[n];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = ko("Patches").applyPatches_;
    return Eo(e) ? r(e, t) : this.produce(e, (o) => r(o, t));
  }
};
function dp(e, t) {
  const n = Oc(e)
    ? ko("MapSet").proxyMap_(e, t)
    : $c(e)
      ? ko("MapSet").proxySet_(e, t)
      : lL(e, t);
  return (t ? t.scope_ : ow()).drafts_.push(n), n;
}
function dL(e) {
  return Eo(e) || En(10, e), sw(e);
}
function sw(e) {
  if (!fr(e) || Ac(e)) return e;
  const t = e[en];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = ap(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = ap(e, !0);
  return (
    fu(n, (r, o) => {
      rw(n, r, sw(o));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var tn = new cL(),
  aw = tn.produce;
tn.produceWithPatches.bind(tn);
tn.setAutoFreeze.bind(tn);
tn.setUseStrictShallowCopy.bind(tn);
tn.applyPatches.bind(tn);
tn.createDraft.bind(tn);
tn.finishDraft.bind(tn);
function lw(e) {
  return ({ dispatch: n, getState: r }) =>
    (o) =>
    (i) =>
      typeof i == "function" ? i(n, r, e) : o(i);
}
var fL = lw(),
  pL = lw,
  hL =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? du
              : du.apply(null, arguments);
        },
  mL = (e) => e && typeof e.match == "function";
function gi(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o) throw new Error(Vn(0));
      return {
        type: e,
        payload: o.payload,
        ...("meta" in o && { meta: o.meta }),
        ...("error" in o && { error: o.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => tL(r) && r.type === e),
    n
  );
}
var uw = class ps extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, ps.prototype);
  }
  static get [Symbol.species]() {
    return ps;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new ps(...t[0].concat(this))
      : new ps(...t.concat(this));
  }
};
function Yy(e) {
  return fr(e) ? aw(e, () => {}) : e;
}
function Jy(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && ((o = n.update(o, t, e)), e.set(t, o)), o;
  }
  if (!n.insert) throw new Error(Vn(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function gL(e) {
  return typeof e == "boolean";
}
var yL = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: o = !0,
        actionCreatorCheck: i = !0,
      } = t ?? {};
      let s = new uw();
      return n && (gL(n) ? s.push(fL) : s.push(pL(n.extraArgument))), s;
    },
  vL = "RTK_autoBatch",
  cw = (e) => (t) => {
    setTimeout(t, e);
  },
  SL =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : cw(10),
  bL =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let o = !0,
        i = !1,
        s = !1;
      const a = new Set(),
        l =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
              ? SL
              : e.type === "callback"
                ? e.queueNotification
                : cw(e.timeout),
        u = () => {
          (s = !1), i && ((i = !1), a.forEach((c) => c()));
        };
      return Object.assign({}, r, {
        subscribe(c) {
          const d = () => o && c(),
            f = r.subscribe(d);
          return (
            a.add(c),
            () => {
              f(), a.delete(c);
            }
          );
        },
        dispatch(c) {
          var d;
          try {
            return (
              (o = !((d = c == null ? void 0 : c.meta) != null && d[vL])),
              (i = !o),
              i && (s || ((s = !0), l(u))),
              r.dispatch(c)
            );
          } finally {
            o = !0;
          }
        },
      });
    },
  wL = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let o = new uw(e);
      return r && o.push(bL(typeof r == "object" ? r : void 0)), o;
    };
function xL(e) {
  const t = yL(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: o = !0,
      preloadedState: i = void 0,
      enhancers: s = void 0,
    } = e || {};
  let a;
  if (typeof n == "function") a = n;
  else if (lm(n)) a = ZI(n);
  else throw new Error(Vn(1));
  let l;
  typeof r == "function" ? (l = r(t)) : (l = t());
  let u = du;
  o && (u = hL({ trace: !1, ...(typeof o == "object" && o) }));
  const c = eL(...l),
    d = wL(c);
  let f = typeof s == "function" ? s(d) : d();
  const g = u(...f);
  return ew(a, i, g);
}
function dw(e) {
  const t = {},
    n = [];
  let r;
  const o = {
    addCase(i, s) {
      const a = typeof i == "string" ? i : i.type;
      if (!a) throw new Error(Vn(28));
      if (a in t) throw new Error(Vn(29));
      return (t[a] = s), o;
    },
    addMatcher(i, s) {
      return n.push({ matcher: i, reducer: s }), o;
    },
    addDefaultCase(i) {
      return (r = i), o;
    },
  };
  return e(o), [t, n, r];
}
function CL(e) {
  return typeof e == "function";
}
function EL(e, t) {
  let [n, r, o] = dw(t),
    i;
  if (CL(e)) i = () => Yy(e());
  else {
    const a = Yy(e);
    i = () => a;
  }
  function s(a = i(), l) {
    let u = [
      n[l.type],
      ...r.filter(({ matcher: c }) => c(l)).map(({ reducer: c }) => c),
    ];
    return (
      u.filter((c) => !!c).length === 0 && (u = [o]),
      u.reduce((c, d) => {
        if (d)
          if (Eo(c)) {
            const g = d(c, l);
            return g === void 0 ? c : g;
          } else {
            if (fr(c)) return aw(c, (f) => d(f, l));
            {
              const f = d(c, l);
              if (f === void 0) {
                if (c === null) return c;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined",
                );
              }
              return f;
            }
          }
        return c;
      }, a)
    );
  }
  return (s.getInitialState = i), s;
}
var kL = (e, t) => (mL(e) ? e.match(t) : e(t));
function fw(...e) {
  return (t) => e.some((n) => kL(n, t));
}
var RL = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  TL = (e = 21) => {
    let t = "",
      n = e;
    for (; n--; ) t += RL[(Math.random() * 64) | 0];
    return t;
  },
  PL = ["name", "message", "stack", "code"],
  Ld = class {
    constructor(e, t) {
      Xr(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  Zy = class {
    constructor(e, t) {
      Xr(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  OL = (e) => {
    if (typeof e == "object" && e !== null) {
      const t = {};
      for (const n of PL) typeof e[n] == "string" && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  Kn = (() => {
    function e(t, n, r) {
      const o = gi(t + "/fulfilled", (l, u, c, d) => ({
          payload: l,
          meta: {
            ...(d || {}),
            arg: c,
            requestId: u,
            requestStatus: "fulfilled",
          },
        })),
        i = gi(t + "/pending", (l, u, c) => ({
          payload: void 0,
          meta: {
            ...(c || {}),
            arg: u,
            requestId: l,
            requestStatus: "pending",
          },
        })),
        s = gi(t + "/rejected", (l, u, c, d, f) => ({
          payload: d,
          error: ((r && r.serializeError) || OL)(l || "Rejected"),
          meta: {
            ...(f || {}),
            arg: c,
            requestId: u,
            rejectedWithValue: !!d,
            requestStatus: "rejected",
            aborted: (l == null ? void 0 : l.name) === "AbortError",
            condition: (l == null ? void 0 : l.name) === "ConditionError",
          },
        }));
      function a(l) {
        return (u, c, d) => {
          const f = r != null && r.idGenerator ? r.idGenerator(l) : TL(),
            g = new AbortController();
          let p, v;
          function x(y) {
            (v = y), g.abort();
          }
          const m = (async function () {
            var b, C;
            let y;
            try {
              let k =
                (b = r == null ? void 0 : r.condition) == null
                  ? void 0
                  : b.call(r, l, { getState: c, extra: d });
              if ((AL(k) && (k = await k), k === !1 || g.signal.aborted))
                throw {
                  name: "ConditionError",
                  message: "Aborted due to condition callback returning false.",
                };
              const E = new Promise((T, $) => {
                (p = () => {
                  $({ name: "AbortError", message: v || "Aborted" });
                }),
                  g.signal.addEventListener("abort", p);
              });
              u(
                i(
                  f,
                  l,
                  (C = r == null ? void 0 : r.getPendingMeta) == null
                    ? void 0
                    : C.call(
                        r,
                        { requestId: f, arg: l },
                        { getState: c, extra: d },
                      ),
                ),
              ),
                (y = await Promise.race([
                  E,
                  Promise.resolve(
                    n(l, {
                      dispatch: u,
                      getState: c,
                      extra: d,
                      requestId: f,
                      signal: g.signal,
                      abort: x,
                      rejectWithValue: (T, $) => new Ld(T, $),
                      fulfillWithValue: (T, $) => new Zy(T, $),
                    }),
                  ).then((T) => {
                    if (T instanceof Ld) throw T;
                    return T instanceof Zy
                      ? o(T.payload, f, l, T.meta)
                      : o(T, f, l);
                  }),
                ]));
            } catch (k) {
              y =
                k instanceof Ld ? s(null, f, l, k.payload, k.meta) : s(k, f, l);
            } finally {
              p && g.signal.removeEventListener("abort", p);
            }
            return (
              (r &&
                !r.dispatchConditionRejection &&
                s.match(y) &&
                y.meta.condition) ||
                u(y),
              y
            );
          })();
          return Object.assign(m, {
            abort: x,
            requestId: f,
            arg: l,
            unwrap() {
              return m.then($L);
            },
          });
        };
      }
      return Object.assign(a, {
        pending: i,
        rejected: s,
        fulfilled: o,
        settled: fw(s, o),
        typePrefix: t,
      });
    }
    return (e.withTypes = () => e), e;
  })();
function $L(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function AL(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var IL = Symbol.for("rtk-slice-createasyncthunk");
function LL(e, t) {
  return `${e}/${t}`;
}
function _L({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[IL];
  return function (o) {
    const { name: i, reducerPath: s = i } = o;
    if (!i) throw new Error(Vn(11));
    typeof process < "u";
    const a =
        (typeof o.reducers == "function" ? o.reducers(NL()) : o.reducers) || {},
      l = Object.keys(a),
      u = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      c = {
        addCase(h, b) {
          const C = typeof h == "string" ? h : h.type;
          if (!C) throw new Error(Vn(12));
          if (C in u.sliceCaseReducersByType) throw new Error(Vn(13));
          return (u.sliceCaseReducersByType[C] = b), c;
        },
        addMatcher(h, b) {
          return u.sliceMatchers.push({ matcher: h, reducer: b }), c;
        },
        exposeAction(h, b) {
          return (u.actionCreators[h] = b), c;
        },
        exposeCaseReducer(h, b) {
          return (u.sliceCaseReducersByName[h] = b), c;
        },
      };
    l.forEach((h) => {
      const b = a[h],
        C = {
          reducerName: h,
          type: LL(i, h),
          createNotation: typeof o.reducers == "function",
        };
      FL(b) ? BL(C, b, c, t) : jL(C, b, c);
    });
    function d() {
      const [h = {}, b = [], C = void 0] =
          typeof o.extraReducers == "function"
            ? dw(o.extraReducers)
            : [o.extraReducers],
        k = { ...h, ...u.sliceCaseReducersByType };
      return EL(o.initialState, (E) => {
        for (let T in k) E.addCase(T, k[T]);
        for (let T of u.sliceMatchers) E.addMatcher(T.matcher, T.reducer);
        for (let T of b) E.addMatcher(T.matcher, T.reducer);
        C && E.addDefaultCase(C);
      });
    }
    const f = (h) => h,
      g = new Map();
    let p;
    function v(h, b) {
      return p || (p = d()), p(h, b);
    }
    function x() {
      return p || (p = d()), p.getInitialState();
    }
    function m(h, b = !1) {
      function C(E) {
        let T = E[h];
        return typeof T > "u" && b && (T = x()), T;
      }
      function k(E = f) {
        const T = Jy(g, b, { insert: () => new WeakMap() });
        return Jy(T, E, {
          insert: () => {
            const $ = {};
            for (const [w, P] of Object.entries(o.selectors ?? {}))
              $[w] = ML(P, E, x, b);
            return $;
          },
        });
      }
      return {
        reducerPath: h,
        getSelectors: k,
        get selectors() {
          return k(C);
        },
        selectSlice: C,
      };
    }
    const y = {
      name: i,
      reducer: v,
      actions: u.actionCreators,
      caseReducers: u.sliceCaseReducersByName,
      getInitialState: x,
      ...m(s),
      injectInto(h, { reducerPath: b, ...C } = {}) {
        const k = b ?? s;
        return (
          h.inject({ reducerPath: k, reducer: v }, C), { ...y, ...m(k, !0) }
        );
      },
    };
    return y;
  };
}
function ML(e, t, n, r) {
  function o(i, ...s) {
    let a = t(i);
    return typeof a > "u" && r && (a = n()), e(a, ...s);
  }
  return (o.unwrapped = e), o;
}
var Ic = _L();
function NL() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" },
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function jL({ type: e, reducerName: t, createNotation: n }, r, o) {
  let i, s;
  if ("reducer" in r) {
    if (n && !DL(r)) throw new Error(Vn(17));
    (i = r.reducer), (s = r.prepare);
  } else i = r;
  o.addCase(e, i)
    .exposeCaseReducer(t, i)
    .exposeAction(t, s ? gi(e, s) : gi(e));
}
function FL(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function DL(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function BL({ type: e, reducerName: t }, n, r, o) {
  if (!o) throw new Error(Vn(18));
  const {
      payloadCreator: i,
      fulfilled: s,
      pending: a,
      rejected: l,
      settled: u,
      options: c,
    } = n,
    d = o(e, i, c);
  r.exposeAction(t, d),
    s && r.addCase(d.fulfilled, s),
    a && r.addCase(d.pending, a),
    l && r.addCase(d.rejected, l),
    u && r.addMatcher(d.settled, u),
    r.exposeCaseReducer(t, {
      fulfilled: s || tl,
      pending: a || tl,
      rejected: l || tl,
      settled: u || tl,
    });
}
function tl() {}
function Vn(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const pw = Ic({
    name: "app",
    initialState: { isInitialized: !1, status: "idle", error: null },
    reducers: {
      setAppStatus: (e, t) => {
        e.status = t.payload.status;
      },
      setAppError: (e, t) => {
        e.error = t.payload.error;
      },
      setIsInitialized: (e, t) => {
        e.isInitialized = t.payload.isInitialized;
      },
    },
  }),
  zL = pw.reducer,
  ue = pw.actions,
  dm = (e, t, n = !0) => {
    n &&
      e(
        ue.setAppError({
          error: t.messages.length ? t.messages[0] : "Some Error",
        }),
      ),
      e(ue.setAppStatus({ status: "failed" }));
  };
function hw(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: UL } = Object.prototype,
  { getPrototypeOf: fm } = Object,
  Lc = ((e) => (t) => {
    const n = UL.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  $n = (e) => ((e = e.toLowerCase()), (t) => Lc(t) === e),
  _c = (e) => (t) => typeof t === e,
  { isArray: Fi } = Array,
  oa = _c("undefined");
function WL(e) {
  return (
    e !== null &&
    !oa(e) &&
    e.constructor !== null &&
    !oa(e.constructor) &&
    Jt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const mw = $n("ArrayBuffer");
function VL(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && mw(e.buffer)),
    t
  );
}
const HL = _c("string"),
  Jt = _c("function"),
  gw = _c("number"),
  Mc = (e) => e !== null && typeof e == "object",
  KL = (e) => e === !0 || e === !1,
  xl = (e) => {
    if (Lc(e) !== "object") return !1;
    const t = fm(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  GL = $n("Date"),
  qL = $n("File"),
  XL = $n("Blob"),
  QL = $n("FileList"),
  YL = (e) => Mc(e) && Jt(e.pipe),
  JL = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Jt(e.append) &&
          ((t = Lc(e)) === "formdata" ||
            (t === "object" &&
              Jt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  ZL = $n("URLSearchParams"),
  [e_, t_, n_, r_] = ["ReadableStream", "Request", "Response", "Headers"].map(
    $n,
  ),
  o_ = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ka(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), Fi(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length;
    let a;
    for (r = 0; r < s; r++) (a = i[r]), t.call(null, e[a], a, e);
  }
}
function yw(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const lo =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  vw = (e) => !oa(e) && e !== lo;
function fp() {
  const { caseless: e } = (vw(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && yw(t, o)) || o;
      xl(t[i]) && xl(r)
        ? (t[i] = fp(t[i], r))
        : xl(r)
          ? (t[i] = fp({}, r))
          : Fi(r)
            ? (t[i] = r.slice())
            : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && ka(arguments[r], n);
  return t;
}
const i_ = (e, t, n, { allOwnKeys: r } = {}) => (
    ka(
      t,
      (o, i) => {
        n && Jt(o) ? (e[i] = hw(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  s_ = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  a_ = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  l_ = (e, t, n, r) => {
    let o, i, s;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (s = o[i]), (!r || r(s, e, t)) && !a[s] && ((t[s] = e[s]), (a[s] = !0));
      e = n !== !1 && fm(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  u_ = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  c_ = (e) => {
    if (!e) return null;
    if (Fi(e)) return e;
    let t = e.length;
    if (!gw(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  d_ = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && fm(Uint8Array)),
  f_ = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  p_ = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  h_ = $n("HTMLFormElement"),
  m_ = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  ev = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  g_ = $n("RegExp"),
  Sw = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    ka(n, (o, i) => {
      let s;
      (s = t(o, i, e)) !== !1 && (r[i] = s || o);
    }),
      Object.defineProperties(e, r);
  },
  y_ = (e) => {
    Sw(e, (t, n) => {
      if (Jt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Jt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  v_ = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return Fi(e) ? r(e) : r(String(e).split(t)), n;
  },
  S_ = () => {},
  b_ = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  _d = "abcdefghijklmnopqrstuvwxyz",
  tv = "0123456789",
  bw = { DIGIT: tv, ALPHA: _d, ALPHA_DIGIT: _d + _d.toUpperCase() + tv },
  w_ = (e = 16, t = bw.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function x_(e) {
  return !!(
    e &&
    Jt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const C_ = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Mc(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = Fi(r) ? [] : {};
            return (
              ka(r, (s, a) => {
                const l = n(s, o + 1);
                !oa(l) && (i[a] = l);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  E_ = $n("AsyncFunction"),
  k_ = (e) => e && (Mc(e) || Jt(e)) && Jt(e.then) && Jt(e.catch),
  ww = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, r) => (
            lo.addEventListener(
              "message",
              ({ source: o, data: i }) => {
                o === lo && i === n && r.length && r.shift()();
              },
              !1,
            ),
            (o) => {
              r.push(o), lo.postMessage(n, "*");
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Jt(lo.postMessage),
  ),
  R_ =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(lo)
      : (typeof process < "u" && process.nextTick) || ww,
  I = {
    isArray: Fi,
    isArrayBuffer: mw,
    isBuffer: WL,
    isFormData: JL,
    isArrayBufferView: VL,
    isString: HL,
    isNumber: gw,
    isBoolean: KL,
    isObject: Mc,
    isPlainObject: xl,
    isReadableStream: e_,
    isRequest: t_,
    isResponse: n_,
    isHeaders: r_,
    isUndefined: oa,
    isDate: GL,
    isFile: qL,
    isBlob: XL,
    isRegExp: g_,
    isFunction: Jt,
    isStream: YL,
    isURLSearchParams: ZL,
    isTypedArray: d_,
    isFileList: QL,
    forEach: ka,
    merge: fp,
    extend: i_,
    trim: o_,
    stripBOM: s_,
    inherits: a_,
    toFlatObject: l_,
    kindOf: Lc,
    kindOfTest: $n,
    endsWith: u_,
    toArray: c_,
    forEachEntry: f_,
    matchAll: p_,
    isHTMLForm: h_,
    hasOwnProperty: ev,
    hasOwnProp: ev,
    reduceDescriptors: Sw,
    freezeMethods: y_,
    toObjectSet: v_,
    toCamelCase: m_,
    noop: S_,
    toFiniteNumber: b_,
    findKey: yw,
    global: lo,
    isContextDefined: vw,
    ALPHABET: bw,
    generateString: w_,
    isSpecCompliantForm: x_,
    toJSONObject: C_,
    isAsyncFn: E_,
    isThenable: k_,
    setImmediate: ww,
    asap: R_,
  };
function ae(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
I.inherits(ae, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: I.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const xw = ae.prototype,
  Cw = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Cw[e] = { value: e };
});
Object.defineProperties(ae, Cw);
Object.defineProperty(xw, "isAxiosError", { value: !0 });
ae.from = (e, t, n, r, o, i) => {
  const s = Object.create(xw);
  return (
    I.toFlatObject(
      e,
      s,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError",
    ),
    ae.call(s, e.message, t, n, r, o),
    (s.cause = e),
    (s.name = e.name),
    i && Object.assign(s, i),
    s
  );
};
const T_ = null;
function pp(e) {
  return I.isPlainObject(e) || I.isArray(e);
}
function Ew(e) {
  return I.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function nv(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = Ew(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function P_(e) {
  return I.isArray(e) && !e.some(pp);
}
const O_ = I.toFlatObject(I, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Nc(e, t, n) {
  if (!I.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = I.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, x) {
        return !I.isUndefined(x[v]);
      },
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    s = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && I.isSpecCompliantForm(t);
  if (!I.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null) return "";
    if (I.isDate(p)) return p.toISOString();
    if (!l && I.isBlob(p))
      throw new ae("Blob is not supported. Use a Buffer instead.");
    return I.isArrayBuffer(p) || I.isTypedArray(p)
      ? l && typeof Blob == "function"
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function c(p, v, x) {
    let m = p;
    if (p && !x && typeof p == "object") {
      if (I.endsWith(v, "{}"))
        (v = r ? v : v.slice(0, -2)), (p = JSON.stringify(p));
      else if (
        (I.isArray(p) && P_(p)) ||
        ((I.isFileList(p) || I.endsWith(v, "[]")) && (m = I.toArray(p)))
      )
        return (
          (v = Ew(v)),
          m.forEach(function (h, b) {
            !(I.isUndefined(h) || h === null) &&
              t.append(
                s === !0 ? nv([v], b, i) : s === null ? v : v + "[]",
                u(h),
              );
          }),
          !1
        );
    }
    return pp(p) ? !0 : (t.append(nv(x, v, i), u(p)), !1);
  }
  const d = [],
    f = Object.assign(O_, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: pp,
    });
  function g(p, v) {
    if (!I.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(p),
        I.forEach(p, function (m, y) {
          (!(I.isUndefined(m) || m === null) &&
            o.call(t, m, I.isString(y) ? y.trim() : y, v, f)) === !0 &&
            g(m, v ? v.concat(y) : [y]);
        }),
        d.pop();
    }
  }
  if (!I.isObject(e)) throw new TypeError("data must be an object");
  return g(e), t;
}
function rv(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function pm(e, t) {
  (this._pairs = []), e && Nc(e, this, t);
}
const kw = pm.prototype;
kw.append = function (t, n) {
  this._pairs.push([t, n]);
};
kw.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, rv);
      }
    : rv;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function $_(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Rw(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || $_,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = I.isURLSearchParams(t) ? t.toString() : new pm(t, n).toString(r)),
    i)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class ov {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    I.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Tw = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  A_ = typeof URLSearchParams < "u" ? URLSearchParams : pm,
  I_ = typeof FormData < "u" ? FormData : null,
  L_ = typeof Blob < "u" ? Blob : null,
  __ = {
    isBrowser: !0,
    classes: { URLSearchParams: A_, FormData: I_, Blob: L_ },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  hm = typeof window < "u" && typeof document < "u",
  hp = (typeof navigator == "object" && navigator) || void 0,
  M_ =
    hm &&
    (!hp || ["ReactNative", "NativeScript", "NS"].indexOf(hp.product) < 0),
  N_ =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  j_ = (hm && window.location.href) || "http://localhost",
  F_ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: hm,
        hasStandardBrowserEnv: M_,
        hasStandardBrowserWebWorkerEnv: N_,
        navigator: hp,
        origin: j_,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  zt = { ...F_, ...__ };
function D_(e, t) {
  return Nc(
    e,
    new zt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return zt.isNode && I.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function B_(e) {
  return I.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0],
  );
}
function z_(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function Pw(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s),
      l = i >= n.length;
    return (
      (s = !s && I.isArray(o) ? o.length : s),
      l
        ? (I.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !a)
        : ((!o[s] || !I.isObject(o[s])) && (o[s] = []),
          t(n, r, o[s], i) && I.isArray(o[s]) && (o[s] = z_(o[s])),
          !a)
    );
  }
  if (I.isFormData(e) && I.isFunction(e.entries)) {
    const n = {};
    return (
      I.forEachEntry(e, (r, o) => {
        t(B_(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function U_(e, t, n) {
  if (I.isString(e))
    try {
      return (t || JSON.parse)(e), I.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const Ra = {
  transitional: Tw,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = I.isObject(t);
      if ((i && I.isHTMLForm(t) && (t = new FormData(t)), I.isFormData(t)))
        return o ? JSON.stringify(Pw(t)) : t;
      if (
        I.isArrayBuffer(t) ||
        I.isBuffer(t) ||
        I.isStream(t) ||
        I.isFile(t) ||
        I.isBlob(t) ||
        I.isReadableStream(t)
      )
        return t;
      if (I.isArrayBufferView(t)) return t.buffer;
      if (I.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let a;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return D_(t, this.formSerializer).toString();
        if ((a = I.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return Nc(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer,
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), U_(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ra.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (I.isResponse(t) || I.isReadableStream(t)) return t;
      if (t && I.isString(t) && ((r && !this.responseType) || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (s)
            throw a.name === "SyntaxError"
              ? ae.from(a, ae.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: zt.classes.FormData, Blob: zt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
I.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ra.headers[e] = {};
});
const W_ = I.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  V_ = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (s) {
            (o = s.indexOf(":")),
              (n = s.substring(0, o).trim().toLowerCase()),
              (r = s.substring(o + 1).trim()),
              !(!n || (t[n] && W_[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  iv = Symbol("internals");
function ns(e) {
  return e && String(e).trim().toLowerCase();
}
function Cl(e) {
  return e === !1 || e == null ? e : I.isArray(e) ? e.map(Cl) : String(e);
}
function H_(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const K_ = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Md(e, t, n, r, o) {
  if (I.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!I.isString(t))) {
    if (I.isString(r)) return t.indexOf(r) !== -1;
    if (I.isRegExp(r)) return r.test(t);
  }
}
function G_(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function q_(e, t) {
  const n = I.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0,
    });
  });
}
class Ut {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(a, l, u) {
      const c = ns(l);
      if (!c) throw new Error("header name must be a non-empty string");
      const d = I.findKey(o, c);
      (!d || o[d] === void 0 || u === !0 || (u === void 0 && o[d] !== !1)) &&
        (o[d || l] = Cl(a));
    }
    const s = (a, l) => I.forEach(a, (u, c) => i(u, c, l));
    if (I.isPlainObject(t) || t instanceof this.constructor) s(t, n);
    else if (I.isString(t) && (t = t.trim()) && !K_(t)) s(V_(t), n);
    else if (I.isHeaders(t)) for (const [a, l] of t.entries()) i(l, a, r);
    else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = ns(t)), t)) {
      const r = I.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return H_(o);
        if (I.isFunction(n)) return n.call(this, o, r);
        if (I.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = ns(t)), t)) {
      const r = I.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Md(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (((s = ns(s)), s)) {
        const a = I.findKey(r, s);
        a && (!n || Md(r, r[a], a, n)) && (delete r[a], (o = !0));
      }
    }
    return I.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Md(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      I.forEach(this, (o, i) => {
        const s = I.findKey(r, i);
        if (s) {
          (n[s] = Cl(o)), delete n[i];
          return;
        }
        const a = t ? G_(i) : String(i).trim();
        a !== i && delete n[i], (n[a] = Cl(o)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      I.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && I.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[iv] = this[iv] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(s) {
      const a = ns(s);
      r[a] || (q_(o, s), (r[a] = !0));
    }
    return I.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Ut.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
I.reduceDescriptors(Ut.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
I.freezeMethods(Ut);
function Nd(e, t) {
  const n = this || Ra,
    r = t || n,
    o = Ut.from(r.headers);
  let i = r.data;
  return (
    I.forEach(e, function (a) {
      i = a.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function Ow(e) {
  return !!(e && e.__CANCEL__);
}
function Di(e, t, n) {
  ae.call(this, e ?? "canceled", ae.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
I.inherits(Di, ae, { __CANCEL__: !0 });
function $w(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new ae(
          "Request failed with status code " + n.status,
          [ae.ERR_BAD_REQUEST, ae.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
function X_(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Q_(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        c = r[i];
      s || (s = u), (n[o] = l), (r[o] = u);
      let d = i,
        f = 0;
      for (; d !== o; ) (f += n[d++]), (d = d % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - s < t)) return;
      const g = c && u - c;
      return g ? Math.round((f * 1e3) / g) : void 0;
    }
  );
}
function Y_(e, t) {
  let n = 0,
    r = 1e3 / t,
    o,
    i;
  const s = (u, c = Date.now()) => {
    (n = c), (o = null), i && (clearTimeout(i), (i = null)), e.apply(null, u);
  };
  return [
    (...u) => {
      const c = Date.now(),
        d = c - n;
      d >= r
        ? s(u, c)
        : ((o = u),
          i ||
            (i = setTimeout(() => {
              (i = null), s(o);
            }, r - d)));
    },
    () => o && s(o),
  ];
}
const mu = (e, t, n = 3) => {
    let r = 0;
    const o = Q_(50, 250);
    return Y_((i) => {
      const s = i.loaded,
        a = i.lengthComputable ? i.total : void 0,
        l = s - r,
        u = o(l),
        c = s <= a;
      r = s;
      const d = {
        loaded: s,
        total: a,
        progress: a ? s / a : void 0,
        bytes: l,
        rate: u || void 0,
        estimated: u && a && c ? (a - s) / u : void 0,
        event: i,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(d);
    }, n);
  },
  sv = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  av =
    (e) =>
    (...t) =>
      I.asap(() => e(...t)),
  J_ = zt.hasStandardBrowserEnv
    ? (function () {
        const t =
            zt.navigator && /(msie|trident)/i.test(zt.navigator.userAgent),
          n = document.createElement("a");
        let r;
        function o(i) {
          let s = i;
          return (
            t && (n.setAttribute("href", s), (s = n.href)),
            n.setAttribute("href", s),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = o(window.location.href)),
          function (s) {
            const a = I.isString(s) ? o(s) : s;
            return a.protocol === r.protocol && a.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  Z_ = zt.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, i) {
          const s = [e + "=" + encodeURIComponent(t)];
          I.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
            I.isString(r) && s.push("path=" + r),
            I.isString(o) && s.push("domain=" + o),
            i === !0 && s.push("secure"),
            (document.cookie = s.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function eM(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function tM(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Aw(e, t) {
  return e && !eM(t) ? tM(e, t) : t;
}
const lv = (e) => (e instanceof Ut ? { ...e } : e);
function Ro(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, d) {
    return I.isPlainObject(u) && I.isPlainObject(c)
      ? I.merge.call({ caseless: d }, u, c)
      : I.isPlainObject(c)
        ? I.merge({}, c)
        : I.isArray(c)
          ? c.slice()
          : c;
  }
  function o(u, c, d) {
    if (I.isUndefined(c)) {
      if (!I.isUndefined(u)) return r(void 0, u, d);
    } else return r(u, c, d);
  }
  function i(u, c) {
    if (!I.isUndefined(c)) return r(void 0, c);
  }
  function s(u, c) {
    if (I.isUndefined(c)) {
      if (!I.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function a(u, c, d) {
    if (d in t) return r(u, c);
    if (d in e) return r(void 0, u);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (u, c) => o(lv(u), lv(c), !0),
  };
  return (
    I.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const d = l[c] || o,
        f = d(e[c], t[c], c);
      (I.isUndefined(f) && d !== a) || (n[c] = f);
    }),
    n
  );
}
const Iw = (e) => {
    const t = Ro({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: i,
      headers: s,
      auth: a,
    } = t;
    (t.headers = s = Ut.from(s)),
      (t.url = Rw(Aw(t.baseURL, t.url), e.params, e.paramsSerializer)),
      a &&
        s.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : ""),
            ),
        );
    let l;
    if (I.isFormData(n)) {
      if (zt.hasStandardBrowserEnv || zt.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
      else if ((l = s.getContentType()) !== !1) {
        const [u, ...c] = l
          ? l
              .split(";")
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        s.setContentType([u || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      zt.hasStandardBrowserEnv &&
      (r && I.isFunction(r) && (r = r(t)), r || (r !== !1 && J_(t.url)))
    ) {
      const u = o && i && Z_.read(i);
      u && s.set(o, u);
    }
    return t;
  },
  nM = typeof XMLHttpRequest < "u",
  rM =
    nM &&
    function (e) {
      return new Promise(function (n, r) {
        const o = Iw(e);
        let i = o.data;
        const s = Ut.from(o.headers).normalize();
        let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = o,
          c,
          d,
          f,
          g,
          p;
        function v() {
          g && g(),
            p && p(),
            o.cancelToken && o.cancelToken.unsubscribe(c),
            o.signal && o.signal.removeEventListener("abort", c);
        }
        let x = new XMLHttpRequest();
        x.open(o.method.toUpperCase(), o.url, !0), (x.timeout = o.timeout);
        function m() {
          if (!x) return;
          const h = Ut.from(
              "getAllResponseHeaders" in x && x.getAllResponseHeaders(),
            ),
            C = {
              data:
                !a || a === "text" || a === "json"
                  ? x.responseText
                  : x.response,
              status: x.status,
              statusText: x.statusText,
              headers: h,
              config: e,
              request: x,
            };
          $w(
            function (E) {
              n(E), v();
            },
            function (E) {
              r(E), v();
            },
            C,
          ),
            (x = null);
        }
        "onloadend" in x
          ? (x.onloadend = m)
          : (x.onreadystatechange = function () {
              !x ||
                x.readyState !== 4 ||
                (x.status === 0 &&
                  !(x.responseURL && x.responseURL.indexOf("file:") === 0)) ||
                setTimeout(m);
            }),
          (x.onabort = function () {
            x &&
              (r(new ae("Request aborted", ae.ECONNABORTED, e, x)), (x = null));
          }),
          (x.onerror = function () {
            r(new ae("Network Error", ae.ERR_NETWORK, e, x)), (x = null);
          }),
          (x.ontimeout = function () {
            let b = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const C = o.transitional || Tw;
            o.timeoutErrorMessage && (b = o.timeoutErrorMessage),
              r(
                new ae(
                  b,
                  C.clarifyTimeoutError ? ae.ETIMEDOUT : ae.ECONNABORTED,
                  e,
                  x,
                ),
              ),
              (x = null);
          }),
          i === void 0 && s.setContentType(null),
          "setRequestHeader" in x &&
            I.forEach(s.toJSON(), function (b, C) {
              x.setRequestHeader(C, b);
            }),
          I.isUndefined(o.withCredentials) ||
            (x.withCredentials = !!o.withCredentials),
          a && a !== "json" && (x.responseType = o.responseType),
          u && (([f, p] = mu(u, !0)), x.addEventListener("progress", f)),
          l &&
            x.upload &&
            (([d, g] = mu(l)),
            x.upload.addEventListener("progress", d),
            x.upload.addEventListener("loadend", g)),
          (o.cancelToken || o.signal) &&
            ((c = (h) => {
              x &&
                (r(!h || h.type ? new Di(null, e, x) : h),
                x.abort(),
                (x = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(c),
            o.signal &&
              (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
        const y = X_(o.url);
        if (y && zt.protocols.indexOf(y) === -1) {
          r(new ae("Unsupported protocol " + y + ":", ae.ERR_BAD_REQUEST, e));
          return;
        }
        x.send(i || null);
      });
    },
  oM = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        o;
      const i = function (u) {
        if (!o) {
          (o = !0), a();
          const c = u instanceof Error ? u : this.reason;
          r.abort(
            c instanceof ae ? c : new Di(c instanceof Error ? c.message : c),
          );
        }
      };
      let s =
        t &&
        setTimeout(() => {
          (s = null), i(new ae(`timeout ${t} of ms exceeded`, ae.ETIMEDOUT));
        }, t);
      const a = () => {
        e &&
          (s && clearTimeout(s),
          (s = null),
          e.forEach((u) => {
            u.unsubscribe
              ? u.unsubscribe(i)
              : u.removeEventListener("abort", i);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener("abort", i));
      const { signal: l } = r;
      return (l.unsubscribe = () => I.asap(a)), l;
    }
  },
  iM = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  sM = async function* (e, t) {
    for await (const n of aM(e)) yield* iM(n, t);
  },
  aM = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  uv = (e, t, n, r) => {
    const o = sM(e, t);
    let i = 0,
      s,
      a = (l) => {
        s || ((s = !0), r && r(l));
      };
    return new ReadableStream(
      {
        async pull(l) {
          try {
            const { done: u, value: c } = await o.next();
            if (u) {
              a(), l.close();
              return;
            }
            let d = c.byteLength;
            if (n) {
              let f = (i += d);
              n(f);
            }
            l.enqueue(new Uint8Array(c));
          } catch (u) {
            throw (a(u), u);
          }
        },
        cancel(l) {
          return a(l), o.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  jc =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Lw = jc && typeof ReadableStream == "function",
  lM =
    jc &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  _w = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  uM =
    Lw &&
    _w(() => {
      let e = !1;
      const t = new Request(zt.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  cv = 64 * 1024,
  mp = Lw && _w(() => I.isReadableStream(new Response("").body)),
  gu = { stream: mp && ((e) => e.body) };
jc &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !gu[t] &&
        (gu[t] = I.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new ae(
                `Response type '${t}' is not supported`,
                ae.ERR_NOT_SUPPORT,
                r,
              );
            });
    });
  })(new Response());
const cM = async (e) => {
    if (e == null) return 0;
    if (I.isBlob(e)) return e.size;
    if (I.isSpecCompliantForm(e))
      return (
        await new Request(zt.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (I.isArrayBufferView(e) || I.isArrayBuffer(e)) return e.byteLength;
    if ((I.isURLSearchParams(e) && (e = e + ""), I.isString(e)))
      return (await lM(e)).byteLength;
  },
  dM = async (e, t) => {
    const n = I.toFiniteNumber(e.getContentLength());
    return n ?? cM(t);
  },
  fM =
    jc &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: o,
        cancelToken: i,
        timeout: s,
        onDownloadProgress: a,
        onUploadProgress: l,
        responseType: u,
        headers: c,
        withCredentials: d = "same-origin",
        fetchOptions: f,
      } = Iw(e);
      u = u ? (u + "").toLowerCase() : "text";
      let g = oM([o, i && i.toAbortSignal()], s),
        p;
      const v =
        g &&
        g.unsubscribe &&
        (() => {
          g.unsubscribe();
        });
      let x;
      try {
        if (
          l &&
          uM &&
          n !== "get" &&
          n !== "head" &&
          (x = await dM(c, r)) !== 0
        ) {
          let C = new Request(t, { method: "POST", body: r, duplex: "half" }),
            k;
          if (
            (I.isFormData(r) &&
              (k = C.headers.get("content-type")) &&
              c.setContentType(k),
            C.body)
          ) {
            const [E, T] = sv(x, mu(av(l)));
            r = uv(C.body, cv, E, T);
          }
        }
        I.isString(d) || (d = d ? "include" : "omit");
        const m = "credentials" in Request.prototype;
        p = new Request(t, {
          ...f,
          signal: g,
          method: n.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: m ? d : void 0,
        });
        let y = await fetch(p);
        const h = mp && (u === "stream" || u === "response");
        if (mp && (a || (h && v))) {
          const C = {};
          ["status", "statusText", "headers"].forEach(($) => {
            C[$] = y[$];
          });
          const k = I.toFiniteNumber(y.headers.get("content-length")),
            [E, T] = (a && sv(k, mu(av(a), !0))) || [];
          y = new Response(
            uv(y.body, cv, E, () => {
              T && T(), v && v();
            }),
            C,
          );
        }
        u = u || "text";
        let b = await gu[I.findKey(gu, u) || "text"](y, e);
        return (
          !h && v && v(),
          await new Promise((C, k) => {
            $w(C, k, {
              data: b,
              headers: Ut.from(y.headers),
              status: y.status,
              statusText: y.statusText,
              config: e,
              request: p,
            });
          })
        );
      } catch (m) {
        throw (
          (v && v(),
          m && m.name === "TypeError" && /fetch/i.test(m.message)
            ? Object.assign(new ae("Network Error", ae.ERR_NETWORK, e, p), {
                cause: m.cause || m,
              })
            : ae.from(m, m && m.code, e, p))
        );
      }
    }),
  gp = { http: T_, xhr: rM, fetch: fM };
I.forEach(gp, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const dv = (e) => `- ${e}`,
  pM = (e) => I.isFunction(e) || e === null || e === !1,
  Mw = {
    getAdapter: (e) => {
      e = I.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let s;
        if (
          ((r = n),
          !pM(n) && ((r = gp[(s = String(n)).toLowerCase()]), r === void 0))
        )
          throw new ae(`Unknown adapter '${s}'`);
        if (r) break;
        o[s || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let s = t
          ? i.length > 1
            ? `since :
` +
              i.map(dv).join(`
`)
            : " " + dv(i[0])
          : "as no adapter specified";
        throw new ae(
          "There is no suitable adapter to dispatch the request " + s,
          "ERR_NOT_SUPPORT",
        );
      }
      return r;
    },
    adapters: gp,
  };
function jd(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Di(null, e);
}
function fv(e) {
  return (
    jd(e),
    (e.headers = Ut.from(e.headers)),
    (e.data = Nd.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Mw.getAdapter(e.adapter || Ra.adapter)(e).then(
      function (r) {
        return (
          jd(e),
          (r.data = Nd.call(e, e.transformResponse, r)),
          (r.headers = Ut.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Ow(r) ||
            (jd(e),
            r &&
              r.response &&
              ((r.response.data = Nd.call(e, e.transformResponse, r.response)),
              (r.response.headers = Ut.from(r.response.headers)))),
          Promise.reject(r)
        );
      },
    )
  );
}
const Nw = "1.7.7",
  mm = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    mm[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const pv = {};
mm.transitional = function (t, n, r) {
  function o(i, s) {
    return (
      "[Axios v" +
      Nw +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (i, s, a) => {
    if (t === !1)
      throw new ae(
        o(s, " has been removed" + (n ? " in " + n : "")),
        ae.ERR_DEPRECATED,
      );
    return (
      n &&
        !pv[s] &&
        ((pv[s] = !0),
        console.warn(
          o(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      t ? t(i, s, a) : !0
    );
  };
};
function hM(e, t, n) {
  if (typeof e != "object")
    throw new ae("options must be an object", ae.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      s = t[i];
    if (s) {
      const a = e[i],
        l = a === void 0 || s(a, i, e);
      if (l !== !0)
        throw new ae("option " + i + " must be " + l, ae.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new ae("Unknown option " + i, ae.ERR_BAD_OPTION);
  }
}
const yp = { assertOptions: hM, validators: mm },
  vr = yp.validators;
class fo {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new ov(), response: new ov() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Ro(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      yp.assertOptions(
        r,
        {
          silentJSONParsing: vr.transitional(vr.boolean),
          forcedJSONParsing: vr.transitional(vr.boolean),
          clarifyTimeoutError: vr.transitional(vr.boolean),
        },
        !1,
      ),
      o != null &&
        (I.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : yp.assertOptions(
              o,
              { encode: vr.function, serialize: vr.function },
              !0,
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s = i && I.merge(i.common, i[n.method]);
    i &&
      I.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (p) => {
          delete i[p];
        },
      ),
      (n.headers = Ut.concat(s, i));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((l = l && v.synchronous), a.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (v) {
      u.push(v.fulfilled, v.rejected);
    });
    let c,
      d = 0,
      f;
    if (!l) {
      const p = [fv.bind(this), void 0];
      for (
        p.unshift.apply(p, a),
          p.push.apply(p, u),
          f = p.length,
          c = Promise.resolve(n);
        d < f;

      )
        c = c.then(p[d++], p[d++]);
      return c;
    }
    f = a.length;
    let g = n;
    for (d = 0; d < f; ) {
      const p = a[d++],
        v = a[d++];
      try {
        g = p(g);
      } catch (x) {
        v.call(this, x);
        break;
      }
    }
    try {
      c = fv.call(this, g);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, f = u.length; d < f; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = Ro(this.defaults, t);
    const n = Aw(t.baseURL, t.url);
    return Rw(n, t.params, t.paramsSerializer);
  }
}
I.forEach(["delete", "get", "head", "options"], function (t) {
  fo.prototype[t] = function (n, r) {
    return this.request(
      Ro(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
I.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, s, a) {
      return this.request(
        Ro(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: s,
        }),
      );
    };
  }
  (fo.prototype[t] = n()), (fo.prototype[t + "Form"] = n(!0));
});
class gm {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const s = new Promise((a) => {
          r.subscribe(a), (i = a);
        }).then(o);
        return (
          (s.cancel = function () {
            r.unsubscribe(i);
          }),
          s
        );
      }),
      t(function (i, s, a) {
        r.reason || ((r.reason = new Di(i, s, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new gm(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
function mM(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function gM(e) {
  return I.isObject(e) && e.isAxiosError === !0;
}
const vp = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(vp).forEach(([e, t]) => {
  vp[t] = e;
});
function jw(e) {
  const t = new fo(e),
    n = hw(fo.prototype.request, t);
  return (
    I.extend(n, fo.prototype, t, { allOwnKeys: !0 }),
    I.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return jw(Ro(e, o));
    }),
    n
  );
}
const tt = jw(Ra);
tt.Axios = fo;
tt.CanceledError = Di;
tt.CancelToken = gm;
tt.isCancel = Ow;
tt.VERSION = Nw;
tt.toFormData = Nc;
tt.AxiosError = ae;
tt.Cancel = tt.CanceledError;
tt.all = function (t) {
  return Promise.all(t);
};
tt.spread = mM;
tt.isAxiosError = gM;
tt.mergeConfig = Ro;
tt.AxiosHeaders = Ut;
tt.formToJSON = (e) => Pw(I.isHTMLForm(e) ? new FormData(e) : e);
tt.getAdapter = Mw.getAdapter;
tt.HttpStatusCode = vp;
tt.default = tt;
const An = (e, t) => {
    var r, o;
    let n = "Some error occurred";
    tt.isAxiosError(e)
      ? (n =
          ((o = (r = e.response) == null ? void 0 : r.data) == null
            ? void 0
            : o.message) ||
          (e == null ? void 0 : e.message) ||
          n)
      : e instanceof Error
        ? (n = `Native error: ${e.message}`)
        : (n = JSON.stringify(e)),
      t(ue.setAppError({ error: n })),
      t(ue.setAppStatus({ status: "failed" }));
  },
  Fc = gi("common/clearAllData");
var yM = {
  ALLUSERSPROFILE: "C:\\ProgramData",
  APPDATA: "C:\\Users\\teneb\\AppData\\Roaming",
  CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_3124_CFDDOUDKBUPQWGPI",
  COLOR: "1",
  COLORTERM: "truecolor",
  CommonProgramFiles: "C:\\Program Files\\Common Files",
  "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files",
  CommonProgramW6432: "C:\\Program Files\\Common Files",
  COMPUTERNAME: "MSI",
  ComSpec: "C:\\WINDOWS\\system32\\cmd.exe",
  configsetroot: "C:\\WINDOWS\\ConfigSetRoot",
  DriverData: "C:\\Windows\\System32\\Drivers\\DriverData",
  EDITOR: "C:\\WINDOWS\\notepad.exe",
  EFC_11452: "1",
  FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer",
  FPS_BROWSER_USER_PROFILE_STRING: "Default",
  GIT_ASKPASS:
    "c:\\Users\\teneb\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",
  HOME: "C:\\Users\\teneb",
  HOMEDRIVE: "C:",
  HOMEPATH: "\\Users\\teneb",
  INIT_CWD: "C:\\Users\\teneb\\Desktop\\it-kamasutra\\DayTrack\\DayTrack-",
  LANG: "ru_RU.UTF-8",
  LOCALAPPDATA: "C:\\Users\\teneb\\AppData\\Local",
  LOGONSERVER: "\\\\MSI",
  NODE: "C:\\Program Files\\nodejs\\node.exe",
  NODE_ENV: "production",
  npm_command: "run-script",
  npm_config_cache: "C:\\Users\\teneb\\AppData\\Local\\npm-cache",
  npm_config_globalconfig:
    "C:\\Users\\teneb\\AppData\\Roaming\\npm\\etc\\npmrc",
  npm_config_global_prefix: "C:\\Users\\teneb\\AppData\\Roaming\\npm",
  npm_config_init_module: "C:\\Users\\teneb\\.npm-init.js",
  npm_config_local_prefix:
    "C:\\Users\\teneb\\Desktop\\it-kamasutra\\DayTrack\\DayTrack-",
  npm_config_node_gyp:
    "C:\\Users\\teneb\\AppData\\Roaming\\nvm\\v22.11.0\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js",
  npm_config_noproxy: "",
  npm_config_npm_version: "10.9.0",
  npm_config_prefix: "C:\\Users\\teneb\\AppData\\Roaming\\npm",
  npm_config_userconfig: "C:\\Users\\teneb\\.npmrc",
  npm_config_user_agent: "npm/10.9.0 node/v22.11.0 win32 x64 workspaces/false",
  npm_execpath:
    "C:\\Users\\teneb\\AppData\\Roaming\\nvm\\v22.11.0\\node_modules\\npm\\bin\\npm-cli.js",
  npm_lifecycle_event: "build",
  npm_lifecycle_script: "vite build",
  npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe",
  npm_package_json:
    "C:\\Users\\teneb\\Desktop\\it-kamasutra\\DayTrack\\DayTrack-\\package.json",
  npm_package_name: "daytrack-",
  npm_package_version: "1.0.0",
  NUMBER_OF_PROCESSORS: "16",
  NVM_HOME: "C:\\Users\\teneb\\AppData\\Roaming\\nvm",
  NVM_SYMLINK: "C:\\Program Files\\nodejs",
  OneDrive: "C:\\Users\\teneb\\OneDrive",
  OneDriveConsumer: "C:\\Users\\teneb\\OneDrive",
  ORIGINAL_XDG_CURRENT_DESKTOP: "undefined",
  OS: "Windows_NT",
  Path: "C:\\Users\\teneb\\Desktop\\it-kamasutra\\DayTrack\\DayTrack-\\node_modules\\.bin;C:\\Users\\teneb\\Desktop\\it-kamasutra\\DayTrack\\node_modules\\.bin;C:\\Users\\teneb\\Desktop\\it-kamasutra\\node_modules\\.bin;C:\\Users\\teneb\\Desktop\\node_modules\\.bin;C:\\Users\\teneb\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Users\\teneb\\AppData\\Roaming\\nvm\\v22.11.0\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Program Files\\nodejs\\;;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Program Files\\NVIDIA Corporation\\NVIDIA app\\NvDLISR;C:\\Program Files\\Git\\cmd;C:\\Users\\teneb\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Program Files\\nodejs\\;C:\\Users\\teneb\\AppData\\Local\\Programs\\Python\\Python311\\Scripts\\;C:\\Users\\teneb\\AppData\\Local\\Programs\\Python\\Python311\\;C:\\Users\\teneb\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\teneb\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\teneb\\AppData\\Local\\Microsoft\\WinGet\\Links;C:\\Users\\teneb\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\teneb\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Users\\teneb\\AppData\\Roaming\\npm",
  PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL",
  PROCESSOR_ARCHITECTURE: "AMD64",
  PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 2, GenuineIntel",
  PROCESSOR_LEVEL: "6",
  PROCESSOR_REVISION: "a502",
  ProgramData: "C:\\ProgramData",
  ProgramFiles: "C:\\Program Files",
  "ProgramFiles(x86)": "C:\\Program Files (x86)",
  ProgramW6432: "C:\\Program Files",
  PROMPT: "$P$G",
  PSModulePath:
    "C:\\Users\\teneb\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules;",
  PUBLIC: "C:\\Users\\Public",
  REACT_APP_BASENAME: "/DayTrack-/",
  SESSIONNAME: "Console",
  SystemDrive: "C:",
  SystemRoot: "C:\\WINDOWS",
  TEMP: "C:\\Users\\teneb\\AppData\\Local\\Temp",
  TERM_PROGRAM: "vscode",
  TERM_PROGRAM_VERSION: "1.95.3",
  TMP: "C:\\Users\\teneb\\AppData\\Local\\Temp",
  USERDOMAIN: "MSI",
  USERDOMAIN_ROAMINGPROFILE: "MSI",
  USERNAME: "teneb",
  USERPROFILE: "C:\\Users\\teneb",
  VITE_APP_API_KEY: "52a6535d-c6be-47a9-8e7e-07bf48f2b904",
  VSCODE_GIT_ASKPASS_EXTRA_ARGS: "",
  VSCODE_GIT_ASKPASS_MAIN:
    "c:\\Users\\teneb\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",
  VSCODE_GIT_ASKPASS_NODE:
    "C:\\Users\\teneb\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",
  VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-ec3897bbd8-sock",
  VSCODE_INJECTION: "1",
  windir: "C:\\WINDOWS",
};
const fn = tt.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    withCredentials: !0,
    headers: { "API-KEY": yM.VITE_APP_API_KEY },
  }),
  Dc = {
    updateTitleTask(e, t, n) {
      return fn.put(`/todo-lists/${e}/tasks/${t}`, { title: n });
    },
    updateStatusTask(e) {
      return fn.put(`/todo-lists/${e.todoListId}/tasks/${e.id}`, { ...e });
    },
    getTasks(e) {
      return fn.get(`/todo-lists/${e}/tasks`);
    },
    createTasks(e, t) {
      return fn.post(`/todo-lists/${e}/tasks`, { title: t });
    },
    deleteTask(e, t) {
      return fn.delete(`/todo-lists/${e}/tasks/${t}`);
    },
  },
  Fw = Ic({
    name: "tasks",
    initialState: {},
    reducers: {
      setTasksLists: (e, t) => {
        e[t.payload.todoID] = t.payload.tasks;
      },
    },
    extraReducers: (e) => {
      e.addCase(Bw.fulfilled, (t, n) => {
        var r, o, i;
        (r = n.payload) != null &&
          r.todolistID &&
          (t[(o = n.payload) == null ? void 0 : o.todolistID] =
            (i = n.payload) == null ? void 0 : i.tasks);
      })
        .addCase(sa.deleteTodolist.fulfilled, (t, n) => {
          delete t[n.payload.id];
        })
        .addCase(zw.fulfilled, (t, n) => {
          const r = t[n.payload.todolistId].findIndex(
            (o) => o.id === n.payload.id,
          );
          r !== -1 && t[n.payload.todolistId].splice(r, 1);
        })
        .addCase(Uw.fulfilled, (t, n) => {
          t[n.payload.task.todoListId].unshift(n.payload.task);
        })
        .addCase(Ww.fulfilled, (t, n) => {
          var o, i;
          const r =
            (i = t[(o = n.payload.model) == null ? void 0 : o.todoListId]) ==
            null
              ? void 0
              : i.find((s) => s.id === n.payload.model.id);
          r && Object.assign(r, n.payload.model);
        })
        .addCase(Fc, (t) => {
          Object.keys(t).forEach((n) => delete t[n]);
        })
        .addCase(sa.addTodolist.fulfilled, (t, n) => {
          t[n.payload.todolist.id] = [];
        })
        .addCase(ia.setTodolists, (t, n) => {
          n.payload.todos.forEach((r) => {
            t[r.id];
          });
        });
    },
  });
var Dw = ((e) => (
  (e[(e.SUCCEEDED = 0)] = "SUCCEEDED"), (e[(e.ERROR = 1)] = "ERROR"), e
))(Dw || {});
const Bw = Kn("tasks/getTasks", async (e, t) => {
    const { dispatch: n, rejectWithValue: r } = t;
    n(ue.setAppStatus({ status: "loading" }));
    try {
      const o = await Dc.getTasks(e);
      return (
        n(ue.setAppStatus({ status: "succeeded" })),
        { tasks: o.data.items, todolistID: e }
      );
    } catch (o) {
      return n(ue.setAppStatus({ status: "failed" })), An(o, n), r(null);
    }
  }),
  zw = Kn("tasks/remove", async (e, t) => {
    const { dispatch: n, rejectWithValue: r } = t;
    n(ue.setAppStatus({ status: "loading" }));
    try {
      return (
        await Dc.deleteTask(e.todolistID, e.taskID),
        n(ue.setAppStatus({ status: "succeeded" })),
        { id: e.taskID, todolistId: e.todolistID }
      );
    } catch (o) {
      return An(o, n), n(ue.setAppStatus({ status: "failed" })), r(null);
    }
  }),
  Uw = Kn("tasks/addTask", async (e, t) => {
    const { dispatch: n, rejectWithValue: r } = t;
    try {
      n(ue.setAppStatus({ status: "loading" }));
      const o = await Dc.createTasks(e.todolistID, e.title);
      return o.data.resultCode === 0
        ? (n(ue.setAppStatus({ status: "succeeded" })),
          { task: o.data.data.item })
        : (dm(n, o.data), r(null));
    } catch (o) {
      return An(o, n), r(null);
    }
  }),
  Ww = Kn("tasks/updateTask", async (e, t) => {
    const { dispatch: n, rejectWithValue: r, getState: o } = t,
      s = o().tasks[e.todoListId].find((a) => e.id === a.id);
    n(ue.setAppStatus({ status: "loading" }));
    try {
      if (s) {
        const a = {
            title: e.title ?? s.title,
            status: e.status ?? s.status,
            description: e.description,
            priority: s.priority,
            deadline: s.deadline,
            id: s.id,
            todoListId: s.todoListId,
          },
          l = await Dc.updateStatusTask(a);
        return (
          l.data,
          n(ue.setAppStatus({ status: "succeeded" })),
          { state: l.data.items, model: a }
        );
      } else return r(null);
    } catch (a) {
      return An(a, n), n(ue.setAppStatus({ status: "failed" })), r(null);
    }
  }),
  vM = Fw.reducer,
  SM = Fw.actions,
  Os = { getTasks: Bw, addTask: Uw, updateTask: Ww, removeTask: zw },
  Bc = {
    updateTodoList(e, t) {
      return fn.put(`/todo-lists/${e}`, { todoListID: e, title: t });
    },
    getTodoLists() {
      return fn.get("/todo-lists");
    },
    deleteTodolist(e) {
      return fn.delete(`/todo-lists/${e}`);
    },
    createTodolist(e) {
      return fn.post("/todo-lists", { title: e });
    },
  },
  ym = Ic({
    name: "todolistss",
    initialState: [],
    reducers: {
      changeTodoListFilter: (e, t) => {
        const n = e.find((r) => r.id === t.payload.id);
        n && (n.filter = t.payload.filter);
      },
      setTodolists: (e, t) => {
        t.payload.todos.forEach((n) =>
          e.push({ ...n, filter: "all", entityStatus: "idle" }),
        );
      },
      setEntityStatus: (e, t) => {
        const n = e.find((r) => r.id === t.payload.todoId);
        n && (n.entityStatus = t.payload.entityStatus);
      },
    },
    extraReducers: (e) => {
      e.addCase(Fc, () => [])
        .addCase(Vw.fulfilled, (t, n) => {
          const r = t.findIndex((o) => o.id === n.payload.id);
          r !== -1 && t.splice(r, 1);
        })
        .addCase(Hw.fulfilled, (t, n) => {
          const r = t.find((o) => o.id === n.payload.id);
          r && (r.title = n.payload.title);
        })
        .addCase(Kw.fulfilled, (t, n) => {
          t.unshift({
            ...n.payload.todolist,
            filter: "all",
            entityStatus: "idle",
          });
        });
    },
  }),
  bM = () => (e) => (
    e(ue.setAppStatus({ status: "loading" })),
    Bc.getTodoLists()
      .then(
        (t) => (
          e(Fc()),
          e(ym.actions.setTodolists({ todos: t.data })),
          e(ue.setAppStatus({ status: "succeeded" })),
          t.data
        ),
      )
      .then((t) =>
        t.forEach((n) => {
          e(Os.getTasks(n.id));
        }),
      )
      .catch((t) => {
        An(t, e), e(ue.setAppStatus({ status: "failed" }));
      })
  ),
  Vw = Kn("todolists/delete", async (e, t) => {
    const { dispatch: n, rejectWithValue: r } = t;
    try {
      return (
        n(ue.setAppStatus({ status: "loading" })),
        n(
          ia.setEntityStatus({ todoId: e.todolistId, entityStatus: "loading" }),
        ),
        await Bc.deleteTodolist(e.todolistId),
        n(ue.setAppStatus({ status: "succeeded" })),
        { id: e.todolistId }
      );
    } catch (o) {
      return (
        An(o, n),
        n(ia.setEntityStatus({ todoId: e.todolistId, entityStatus: "idle" })),
        n(ue.setAppStatus({ status: "failed" })),
        r(null)
      );
    }
  }),
  Hw = Kn("todolist/update", async (e, t) => {
    const { dispatch: n, rejectWithValue: r } = t;
    try {
      return (
        n(ue.setAppStatus({ status: "loading" })),
        await Bc.updateTodoList(e.todolistId, e.title),
        n(ue.setAppStatus({ status: "succeeded" })),
        { title: e.title, id: e.todolistId }
      );
    } catch (o) {
      return (
        An(o, n),
        n(ia.setEntityStatus({ todoId: e.todolistId, entityStatus: "idle" })),
        n(ue.setAppStatus({ status: "failed" })),
        r(null)
      );
    }
  }),
  Kw = Kn("todolist/create", async (e, t) => {
    const { dispatch: n, rejectWithValue: r } = t;
    try {
      n(ue.setAppStatus({ status: "loading" }));
      const o = await Bc.createTodolist(e.title);
      return o.data.resultCode === Dw.SUCCEEDED
        ? (n(SM.setTasksLists({ todoID: o.data.data.item.id, tasks: [] })),
          n(ue.setAppStatus({ status: "succeeded" })),
          { todolist: o.data.data.item })
        : o.data.messages.length
          ? (n(ue.setAppError({ error: o.data.messages[0] })), r(null))
          : (n(ue.setAppError({ error: "Some Error" })), r(null));
    } catch (o) {
      return An(o, n), n(ue.setAppStatus({ status: "failed" })), r(null);
    }
  }),
  wM = ym.reducer,
  ia = ym.actions,
  sa = { deleteTodolist: Vw, updateTodolist: Hw, addTodolist: Kw };
var Gw = { exports: {} },
  qw = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta = S;
function xM(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var CM = typeof Object.is == "function" ? Object.is : xM,
  EM = Ta.useSyncExternalStore,
  kM = Ta.useRef,
  RM = Ta.useEffect,
  TM = Ta.useMemo,
  PM = Ta.useDebugValue;
qw.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = kM(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = TM(
    function () {
      function l(g) {
        if (!u) {
          if (((u = !0), (c = g), (g = r(g)), o !== void 0 && s.hasValue)) {
            var p = s.value;
            if (o(p, g)) return (d = p);
          }
          return (d = g);
        }
        if (((p = d), CM(c, g))) return p;
        var v = r(g);
        return o !== void 0 && o(p, v) ? p : ((c = g), (d = v));
      }
      var u = !1,
        c,
        d,
        f = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        f === null
          ? void 0
          : function () {
              return l(f());
            },
      ];
    },
    [t, n, r, o],
  );
  var a = EM(e, i[0], i[1]);
  return (
    RM(
      function () {
        (s.hasValue = !0), (s.value = a);
      },
      [a],
    ),
    PM(a),
    a
  );
};
Gw.exports = qw;
var OM = Gw.exports,
  Xt = "default" in vi ? kn : vi,
  hv = Symbol.for("react-redux-context"),
  mv = typeof globalThis < "u" ? globalThis : {};
function $M() {
  if (!Xt.createContext) return {};
  const e = mv[hv] ?? (mv[hv] = new Map());
  let t = e.get(Xt.createContext);
  return t || ((t = Xt.createContext(null)), e.set(Xt.createContext, t)), t;
}
var Fr = $M(),
  AM = () => {
    throw new Error("uSES not initialized!");
  };
function vm(e = Fr) {
  return function () {
    return Xt.useContext(e);
  };
}
var Xw = vm(),
  Qw = AM,
  IM = (e) => {
    Qw = e;
  },
  LM = (e, t) => e === t;
function _M(e = Fr) {
  const t = e === Fr ? Xw : vm(e),
    n = (r, o = {}) => {
      const { equalityFn: i = LM, devModeChecks: s = {} } =
          typeof o == "function" ? { equalityFn: o } : o,
        {
          store: a,
          subscription: l,
          getServerState: u,
          stabilityCheck: c,
          identityFunctionCheck: d,
        } = t();
      Xt.useRef(!0);
      const f = Xt.useCallback(
          {
            [r.name](p) {
              return r(p);
            },
          }[r.name],
          [r, c, s.stabilityCheck],
        ),
        g = Qw(l.addNestedSub, a.getState, u || a.getState, f, i);
      return Xt.useDebugValue(g), g;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var MM = _M();
function NM(e) {
  e();
}
function jM() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      NM(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const o = (t = { callback: n, next: null, prev: t });
      return (
        o.prev ? (o.prev.next = o) : (e = o),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            o.next ? (o.next.prev = o.prev) : (t = o.prev),
            o.prev ? (o.prev.next = o.next) : (e = o.next));
        }
      );
    },
  };
}
var gv = { notify() {}, get: () => [] };
function FM(e, t) {
  let n,
    r = gv,
    o = 0,
    i = !1;
  function s(v) {
    c();
    const x = r.subscribe(v);
    let m = !1;
    return () => {
      m || ((m = !0), x(), d());
    };
  }
  function a() {
    r.notify();
  }
  function l() {
    p.onStateChange && p.onStateChange();
  }
  function u() {
    return i;
  }
  function c() {
    o++, n || ((n = e.subscribe(l)), (r = jM()));
  }
  function d() {
    o--, n && o === 0 && (n(), (n = void 0), r.clear(), (r = gv));
  }
  function f() {
    i || ((i = !0), c());
  }
  function g() {
    i && ((i = !1), d());
  }
  const p = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: f,
    tryUnsubscribe: g,
    getListeners: () => r,
  };
  return p;
}
var DM =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  BM = typeof navigator < "u" && navigator.product === "ReactNative",
  zM = DM || BM ? Xt.useLayoutEffect : Xt.useEffect;
function UM({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once",
}) {
  const s = Xt.useMemo(() => {
      const u = FM(e);
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: o,
        identityFunctionCheck: i,
      };
    }, [e, r, o, i]),
    a = Xt.useMemo(() => e.getState(), [e]);
  zM(() => {
    const { subscription: u } = s;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      a !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0);
      }
    );
  }, [s, a]);
  const l = t || Fr;
  return Xt.createElement(l.Provider, { value: s }, n);
}
var WM = UM;
function Yw(e = Fr) {
  const t = e === Fr ? Xw : vm(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var VM = Yw();
function HM(e = Fr) {
  const t = e === Fr ? VM : Yw(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var KM = HM();
IM(OM.useSyncExternalStoreWithSelector);
const Ao = KM,
  GM = ({ task: e, todolistID: t }) => {
    const n = Ao(),
      r = (s, a) => {
        n(Os.removeTask({ todolistID: s, taskID: a }));
      },
      o = (s, a, l) => {
        n(
          Os.updateTask({
            id: a,
            todoListId: s,
            status: l.target.checked ? 2 : 0,
          }),
        );
      },
      i = (s, a, l) => {
        n(Os.updateTask({ todoListId: s, id: a, title: l }));
      };
    return R.jsx(R.Fragment, {
      children: R.jsxs(
        BA,
        {
          children: [
            R.jsx(Bb, {
              id: e.id,
              checked: e.status === 2,
              onChange: (s) => o(t, e.id, s),
            }),
            R.jsx(Jb, {
              title: e.title,
              changeTitleHandler: (s) => i(t, e.id, s),
            }),
            R.jsx(nm, {
              size: "small",
              color: "primary",
              onClick: () => r(t, e.id),
              children: R.jsx(Zb, {}),
            }),
          ],
        },
        e.id,
      ),
    });
  },
  Dr = MM,
  qM = V(Tc)({ margin: "0 2px" }),
  XM = V("div")({ maxWidth: "100%" }),
  QM = ({ todoList: e }) => {
    const t = Dr((u) => u.tasks[e.id]),
      n = ["all", "active", "completed"],
      r = Ao();
    let o = t;
    e.filter === "active"
      ? (o = t.filter((u) => u.status === 0))
      : e.filter === "completed" && (o = t.filter((u) => u.status === 2));
    const i = (u, c) => {
        r(Os.addTask({ todolistID: u, title: c }));
      },
      s = (u) => {
        r(sa.deleteTodolist({ todolistId: u }));
      },
      a = (u, c) => {
        r(sa.updateTodolist({ title: u, todolistId: c }));
      },
      l = (u, c) => {
        r(ia.changeTodoListFilter({ filter: u, id: c }));
      };
    return R.jsxs("div", {
      children: [
        R.jsxs("h3", {
          children: [
            R.jsx(Jb, {
              title: e.title,
              changeTitleHandler: (u) => a(u, e.id),
            }),
            R.jsx(nm, {
              size: "small",
              color: "primary",
              onClick: () => s(e.id),
              disabled: e.entityStatus === "loading",
              children: R.jsx(Zb, {}),
            }),
          ],
        }),
        R.jsx(Yb, {
          todoListsID: e.id,
          addItem: (u) => i(e.id, u),
          maxLengthUserMeaasge: 15,
          disabled: e.entityStatus === "loading",
        }),
        R.jsx(XM, {
          children: R.jsx(Fb, {
            fullWidth: !0,
            children: n.map((u) =>
              R.jsx(
                qM,
                {
                  size: "small",
                  variant: e.filter === u ? "contained" : "outlined",
                  onClick: () => l(u, e.id),
                  children: u.charAt(0).toUpperCase() + u.slice(1),
                },
                u,
              ),
            ),
          }),
        }),
        R.jsx(Vb, {
          children:
            o != null && o.length
              ? o.map((u) => R.jsx(GM, { task: u, todolistID: e.id }, u.id))
              : R.jsx("span", { children: "Your task list is empty" }),
        }),
      ],
    });
  };
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function aa() {
  return (
    (aa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    aa.apply(this, arguments)
  );
}
var kr;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(kr || (kr = {}));
const yv = "popstate";
function YM(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: a } = r.location;
    return Sp(
      "",
      { pathname: i, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : yu(o);
  }
  return ZM(t, n, null, e);
}
function et(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Jw(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function JM() {
  return Math.random().toString(36).substr(2, 8);
}
function vv(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Sp(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    aa(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Bi(t) : t,
      { state: n, key: (t && t.key) || r || JM() },
    )
  );
}
function yu(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Bi(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function ZM(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    a = kr.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(aa({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    a = kr.Pop;
    let x = c(),
      m = x == null ? null : x - u;
    (u = x), l && l({ action: a, location: v.location, delta: m });
  }
  function f(x, m) {
    a = kr.Push;
    let y = Sp(v.location, x, m);
    u = c() + 1;
    let h = vv(y, u),
      b = v.createHref(y);
    try {
      s.pushState(h, "", b);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(b);
    }
    i && l && l({ action: a, location: v.location, delta: 1 });
  }
  function g(x, m) {
    a = kr.Replace;
    let y = Sp(v.location, x, m);
    u = c();
    let h = vv(y, u),
      b = v.createHref(y);
    s.replaceState(h, "", b),
      i && l && l({ action: a, location: v.location, delta: 0 });
  }
  function p(x) {
    let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
      y = typeof x == "string" ? x : yu(x);
    return (
      (y = y.replace(/ $/, "%20")),
      et(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          y,
      ),
      new URL(y, m)
    );
  }
  let v = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(x) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(yv, d),
        (l = x),
        () => {
          o.removeEventListener(yv, d), (l = null);
        }
      );
    },
    createHref(x) {
      return t(o, x);
    },
    createURL: p,
    encodeLocation(x) {
      let m = p(x);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: f,
    replace: g,
    go(x) {
      return s.go(x);
    },
  };
  return v;
}
var Sv;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Sv || (Sv = {}));
function eN(e, t, n) {
  return n === void 0 && (n = "/"), tN(e, t, n, !1);
}
function tN(e, t, n, r) {
  let o = typeof t == "string" ? Bi(t) : t,
    i = Sm(o.pathname || "/", n);
  if (i == null) return null;
  let s = Zw(e);
  nN(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = pN(i);
    a = dN(s[l], u, r);
  }
  return a;
}
function Zw(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (et(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = _r([r, l.relativePath]),
      c = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (et(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      Zw(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: uN(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
      else for (let l of ex(i.path)) o(i, s, l);
    }),
    t
  );
}
function ex(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = ex(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function nN(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : cN(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const rN = /^:[\w-]+$/,
  oN = 3,
  iN = 2,
  sN = 1,
  aN = 10,
  lN = -2,
  bv = (e) => e === "*";
function uN(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(bv) && (r += lN),
    t && (r += iN),
    n
      .filter((o) => !bv(o))
      .reduce((o, i) => o + (rN.test(i) ? oN : i === "" ? sN : aN), r)
  );
}
function cN(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function dN(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      d = wv(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c,
      ),
      f = l.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = wv(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c,
        )),
      !d)
    )
      return null;
    Object.assign(o, d.params),
      s.push({
        params: o,
        pathname: _r([i, d.pathname]),
        pathnameBase: yN(_r([i, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== "/" && (i = _r([i, d.pathnameBase]));
  }
  return s;
}
function wv(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = fN(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: g } = c;
      if (f === "*") {
        let v = a[d] || "";
        s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const p = a[d];
      return (
        g && !p ? (u[f] = void 0) : (u[f] = (p || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function fN(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Jw(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function pN(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Jw(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function Sm(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function hN(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Bi(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : mN(n, t)) : t,
    search: vN(r),
    hash: SN(o),
  };
}
function mN(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Fd(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function gN(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function bm(e, t) {
  let n = gN(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function wm(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Bi(e))
    : ((o = aa({}, e)),
      et(
        !o.pathname || !o.pathname.includes("?"),
        Fd("?", "pathname", "search", o),
      ),
      et(
        !o.pathname || !o.pathname.includes("#"),
        Fd("#", "pathname", "hash", o),
      ),
      et(!o.search || !o.search.includes("#"), Fd("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    a;
  if (s == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && s.startsWith("..")) {
      let f = s.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      o.pathname = f.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let l = hN(o, a),
    u = s && s !== "/" && s.endsWith("/"),
    c = (i || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const _r = (e) => e.join("/").replace(/\/\/+/g, "/"),
  yN = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  vN = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  SN = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function bN(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const tx = ["post", "put", "patch", "delete"];
new Set(tx);
const wN = ["get", ...tx];
new Set(wN);
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function la() {
  return (
    (la = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    la.apply(this, arguments)
  );
}
const xm = S.createContext(null),
  xN = S.createContext(null),
  Kr = S.createContext(null),
  zc = S.createContext(null),
  Gr = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  nx = S.createContext(null);
function CN(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  zi() || et(!1);
  let { basename: r, navigator: o } = S.useContext(Kr),
    { hash: i, pathname: s, search: a } = ix(e, { relative: n }),
    l = s;
  return (
    r !== "/" && (l = s === "/" ? r : _r([r, s])),
    o.createHref({ pathname: l, search: a, hash: i })
  );
}
function zi() {
  return S.useContext(zc) != null;
}
function Pa() {
  return zi() || et(!1), S.useContext(zc).location;
}
function rx(e) {
  S.useContext(Kr).static || S.useLayoutEffect(e);
}
function ox() {
  let { isDataRoute: e } = S.useContext(Gr);
  return e ? NN() : EN();
}
function EN() {
  zi() || et(!1);
  let e = S.useContext(xm),
    { basename: t, future: n, navigator: r } = S.useContext(Kr),
    { matches: o } = S.useContext(Gr),
    { pathname: i } = Pa(),
    s = JSON.stringify(bm(o, n.v7_relativeSplatPath)),
    a = S.useRef(!1);
  return (
    rx(() => {
      a.current = !0;
    }),
    S.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = wm(u, JSON.parse(s), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : _r([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, s, i, e],
    )
  );
}
function ix(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = S.useContext(Kr),
    { matches: o } = S.useContext(Gr),
    { pathname: i } = Pa(),
    s = JSON.stringify(bm(o, r.v7_relativeSplatPath));
  return S.useMemo(() => wm(e, JSON.parse(s), i, n === "path"), [e, s, i, n]);
}
function kN(e, t) {
  return RN(e, t);
}
function RN(e, t, n, r) {
  zi() || et(!1);
  let { navigator: o } = S.useContext(Kr),
    { matches: i } = S.useContext(Gr),
    s = i[i.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = Pa(),
    c;
  if (t) {
    var d;
    let x = typeof t == "string" ? Bi(t) : t;
    l === "/" || ((d = x.pathname) != null && d.startsWith(l)) || et(!1),
      (c = x);
  } else c = u;
  let f = c.pathname || "/",
    g = f;
  if (l !== "/") {
    let x = l.replace(/^\//, "").split("/");
    g = "/" + f.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let p = eN(e, { pathname: g }),
    v = AN(
      p &&
        p.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, a, x.params),
            pathname: _r([
              l,
              o.encodeLocation
                ? o.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? l
                : _r([
                    l,
                    o.encodeLocation
                      ? o.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
      r,
    );
  return t && v
    ? S.createElement(
        zc.Provider,
        {
          value: {
            location: la(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: kr.Pop,
          },
        },
        v,
      )
    : v;
}
function TN() {
  let e = MN(),
    t = bN(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? S.createElement("pre", { style: o }, n) : null,
    null,
  );
}
const PN = S.createElement(TN, null);
class ON extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? S.createElement(
          Gr.Provider,
          { value: this.props.routeContext },
          S.createElement(nx.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function $N(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = S.useContext(xm);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(Gr.Provider, { value: t }, r)
  );
}
function AN(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let c = s.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0,
    );
    c >= 0 || et(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let d = s[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: g } = n,
          p =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!g || g[d.route.id] === void 0);
        if (d.route.lazy || p) {
          (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, d, f) => {
    let g,
      p = !1,
      v = null,
      x = null;
    n &&
      ((g = a && d.route.id ? a[d.route.id] : void 0),
      (v = d.route.errorElement || PN),
      l &&
        (u < 0 && f === 0
          ? ((p = !0), (x = null))
          : u === f &&
            ((p = !0), (x = d.route.hydrateFallbackElement || null))));
    let m = t.concat(s.slice(0, f + 1)),
      y = () => {
        let h;
        return (
          g
            ? (h = v)
            : p
              ? (h = x)
              : d.route.Component
                ? (h = S.createElement(d.route.Component, null))
                : d.route.element
                  ? (h = d.route.element)
                  : (h = c),
          S.createElement($N, {
            match: d,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? S.createElement(ON, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: g,
          children: y(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : y();
  }, null);
}
var sx = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(sx || {}),
  vu = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(vu || {});
function IN(e) {
  let t = S.useContext(xm);
  return t || et(!1), t;
}
function LN(e) {
  let t = S.useContext(xN);
  return t || et(!1), t;
}
function _N(e) {
  let t = S.useContext(Gr);
  return t || et(!1), t;
}
function ax(e) {
  let t = _N(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || et(!1), n.route.id;
}
function MN() {
  var e;
  let t = S.useContext(nx),
    n = LN(vu.UseRouteError),
    r = ax(vu.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function NN() {
  let { router: e } = IN(sx.UseNavigateStable),
    t = ax(vu.UseNavigateStable),
    n = S.useRef(!1);
  return (
    rx(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, la({ fromRouteId: t }, i)));
      },
      [e, t],
    )
  );
}
const xv = {};
function jN(e, t) {
  xv[t] || ((xv[t] = !0), console.warn(t));
}
const Cv = (e, t, n) =>
  jN(
    e,
    "⚠️ React Router Future Flag Warning: " +
      t +
      ". " +
      ("You can use the `" + e + "` future flag to opt-in early. ") +
      ("For more information, see " + n + "."),
  );
function FN(e, t) {
  (e != null && e.v7_startTransition) ||
    Cv(
      "v7_startTransition",
      "React Router will begin wrapping state updates in `React.startTransition` in v7",
      "https://reactrouter.com/v6/upgrading/future#v7_starttransition",
    ),
    !(e != null && e.v7_relativeSplatPath) &&
      !t &&
      Cv(
        "v7_relativeSplatPath",
        "Relative route resolution within Splat routes is changing in v7",
        "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath",
      );
}
function Cm(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  zi() || et(!1);
  let { future: i, static: s } = S.useContext(Kr),
    { matches: a } = S.useContext(Gr),
    { pathname: l } = Pa(),
    u = ox(),
    c = wm(t, bm(a, i.v7_relativeSplatPath), l, o === "path"),
    d = JSON.stringify(c);
  return (
    S.useEffect(
      () => u(JSON.parse(d), { replace: n, state: r, relative: o }),
      [u, d, o, n, r],
    ),
    null
  );
}
function hs(e) {
  et(!1);
}
function DN(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = kr.Pop,
    navigator: i,
    static: s = !1,
    future: a,
  } = e;
  zi() && et(!1);
  let l = t.replace(/^\/*/, "/"),
    u = S.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: s,
        future: la({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, s],
    );
  typeof r == "string" && (r = Bi(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: g = null,
      key: p = "default",
    } = r,
    v = S.useMemo(() => {
      let x = Sm(c, l);
      return x == null
        ? null
        : {
            location: { pathname: x, search: d, hash: f, state: g, key: p },
            navigationType: o,
          };
    }, [l, c, d, f, g, p, o]);
  return v == null
    ? null
    : S.createElement(
        Kr.Provider,
        { value: u },
        S.createElement(zc.Provider, { children: n, value: v }),
      );
}
function BN(e) {
  let { children: t, location: n } = e;
  return kN(bp(t), n);
}
new Promise(() => {});
function bp(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (r, o) => {
      if (!S.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === S.Fragment) {
        n.push.apply(n, bp(r.props.children, i));
        return;
      }
      r.type !== hs && et(!1), !r.props.index || !r.props.children || et(!1);
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = bp(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function wp() {
  return (
    (wp = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    wp.apply(this, arguments)
  );
}
function zN(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function UN(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function WN(e, t) {
  return e.button === 0 && (!t || t === "_self") && !UN(e);
}
const VN = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  HN = "6";
try {
  window.__reactRouterVersion = HN;
} catch {}
const KN = "startTransition",
  Ev = vi[KN];
function GN(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = S.useRef();
  i.current == null && (i.current = YM({ window: o, v5Compat: !0 }));
  let s = i.current,
    [a, l] = S.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = S.useCallback(
      (d) => {
        u && Ev ? Ev(() => l(d)) : l(d);
      },
      [l, u],
    );
  return (
    S.useLayoutEffect(() => s.listen(c), [s, c]),
    S.useEffect(() => FN(r), [r]),
    S.createElement(DN, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
const qN =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  XN = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  QN = S.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: s,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        viewTransition: d,
      } = t,
      f = zN(t, VN),
      { basename: g } = S.useContext(Kr),
      p,
      v = !1;
    if (typeof u == "string" && XN.test(u) && ((p = u), qN))
      try {
        let h = new URL(window.location.href),
          b = u.startsWith("//") ? new URL(h.protocol + u) : new URL(u),
          C = Sm(b.pathname, g);
        b.origin === h.origin && C != null
          ? (u = C + b.search + b.hash)
          : (v = !0);
      } catch {}
    let x = CN(u, { relative: o }),
      m = YN(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: o,
        viewTransition: d,
      });
    function y(h) {
      r && r(h), h.defaultPrevented || m(h);
    }
    return S.createElement(
      "a",
      wp({}, f, { href: p || x, onClick: v || i ? r : y, ref: n, target: l }),
    );
  });
var kv;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(kv || (kv = {}));
var Rv;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Rv || (Rv = {}));
function YN(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: s,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    l = ox(),
    u = Pa(),
    c = ix(e, { relative: s });
  return S.useCallback(
    (d) => {
      if (WN(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : yu(u) === yu(c);
        l(e, {
          replace: f,
          state: o,
          preventScrollReset: i,
          relative: s,
          viewTransition: a,
        });
      }
    },
    [u, l, c, r, o, n, e, i, s, a],
  );
}
const JN = V(Ea)({ padding: "16px", marginBottom: "16px", maxWidth: "312px" }),
  ZN = V(iu)({ margin: "10px 0" }),
  ej = () => {
    const e = Dr((o) => o.todolists),
      t = Dr((o) => o.auth.isLoggedIn),
      n = Ao();
    if (
      (S.useEffect(() => {
        t && n(bM());
      }, [t]),
      !t)
    )
      return R.jsx(Cm, { to: "/login" });
    const r = (o) => {
      n(sa.addTodolist({ title: o }));
    };
    return R.jsxs(R.Fragment, {
      children: [
        R.jsx(ZN, {
          container: !0,
          children: R.jsx(Yb, { maxLengthUserMeaasge: 15, addItem: r }),
        }),
        R.jsx(iu, {
          container: !0,
          spacing: 4,
          alignItems: "stretch",
          justifyContent: "center",
          children: e.map((o) =>
            R.jsx(
              JN,
              {
                elevation: 3,
                children: R.jsx(QM, { todoList: o, isLoggedIn: t }),
              },
              o.id,
            ),
          ),
        }),
      ],
    });
  },
  lx = S.createContext(void 0),
  tj = () => {
    const e = S.useContext(lx);
    if (!e)
      throw new Error("useThemeContext must be used within a ThemeProvider");
    return e;
  },
  nj = ({ children: e }) => {
    const [t, n] = S.useState(() => {
      const i = localStorage.getItem("theme");
      return i === "light" || i === "dark"
        ? i
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    });
    S.useEffect(() => {
      localStorage.setItem("theme", t);
    }, [t]);
    const r = () => {
        n((i) => (i === "light" ? "dark" : "light"));
      },
      o = qh({ palette: { mode: t } });
    return R.jsx(lx.Provider, {
      value: { theme: o, toggleTheme: r },
      children: R.jsx(hP, { theme: o, children: e }),
    });
  },
  Em = {
    me() {
      return fn.get("/auth/me");
    },
    logOut() {
      return fn.delete("/auth/login");
    },
    login(e) {
      return fn.post("/auth/login", e);
    },
  },
  rj = Ic({
    name: "auth",
    initialState: { isLoggedIn: !1 },
    reducers: {
      setIsLoggedIn: (e, t) => {
        e.isLoggedIn = t.payload.isLoggedIn;
      },
    },
    extraReducers: (e) => {
      e.addMatcher(
        fw(yi.initialized.fulfilled, yi.logOut.fulfilled, yi.login.fulfilled),
        (t, n) => {
          t.isLoggedIn = n.payload.isLoggedIn;
        },
      );
    },
  }),
  oj = Kn("auth/login", async (e, t) => {
    const { dispatch: n, rejectWithValue: r } = t;
    n(ue.setAppStatus({ status: "loading" }));
    try {
      const o = await Em.login(e);
      return (
        o.data.data.userId,
        o.data.resultCode === 0
          ? (n(ue.setAppStatus({ status: "succeeded" })), { isLoggedIn: !0 })
          : (dm(n, o.data), n(ue.setAppStatus({ status: "failed" })), r(null))
      );
    } catch (o) {
      return An(o, n), n(ue.setAppStatus({ status: "failed" })), r(null);
    }
  }),
  ij = Kn("auth/initialized", async (e, t) => {
    const { dispatch: n, rejectWithValue: r } = t;
    try {
      const o = await Em.me();
      return (
        o.data.data.userId,
        o.data.resultCode === 0
          ? (n(ue.setAppStatus({ status: "succeeded" })), { isLoggedIn: !0 })
          : r(null)
      );
    } catch (o) {
      return An(o, n), n(ue.setAppStatus({ status: "failed" })), r(null);
    } finally {
      n(ue.setIsInitialized({ isInitialized: !0 }));
    }
  }),
  sj = Kn("auth/logout", async (e, t) => {
    const { dispatch: n, rejectWithValue: r } = t;
    n(ue.setAppStatus({ status: "loading" }));
    try {
      const o = await Em.logOut();
      return o.data.resultCode === 0
        ? (n(ue.setAppStatus({ status: "succeeded" })),
          n(Fc()),
          { isLoggedIn: !1 })
        : (dm(n, o.data), n(ue.setAppStatus({ status: "failed" })), r(null));
    } catch (o) {
      return An(o, n), n(ue.setAppStatus({ status: "failed" })), r(null);
    }
  }),
  aj = rj.reducer,
  yi = { login: oj, logOut: sj, initialized: ij },
  lj = "/DayTrack-/assets/logo-7iDZKe6J.svg",
  uj = (...e) => {
    console != null &&
      console.warn &&
      (po(e[0]) && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e));
  },
  Tv = {},
  xp = (...e) => {
    (po(e[0]) && Tv[e[0]]) || (po(e[0]) && (Tv[e[0]] = new Date()), uj(...e));
  },
  ux = (e, t) => () => {
    if (e.isInitialized) t();
    else {
      const n = () => {
        setTimeout(() => {
          e.off("initialized", n);
        }, 0),
          t();
      };
      e.on("initialized", n);
    }
  },
  Cp = (e, t, n) => {
    e.loadNamespaces(t, ux(e, n));
  },
  Pv = (e, t, n, r) => {
    if (
      (po(n) && (n = [n]),
      e.options.preload && e.options.preload.indexOf(t) > -1)
    )
      return Cp(e, n, r);
    n.forEach((o) => {
      e.options.ns.indexOf(o) < 0 && e.options.ns.push(o);
    }),
      e.loadLanguages(t, ux(e, r));
  },
  cj = (e, t, n = {}) =>
    !t.languages || !t.languages.length
      ? (xp("i18n.languages were undefined or empty", t.languages), !0)
      : t.hasLoadedNamespace(e, {
          lng: n.lng,
          precheck: (r, o) => {
            var i;
            if (
              ((i = n.bindI18n) == null
                ? void 0
                : i.indexOf("languageChanging")) > -1 &&
              r.services.backendConnector.backend &&
              r.isLanguageChangingTo &&
              !o(r.isLanguageChangingTo, e)
            )
              return !1;
          },
        }),
  po = (e) => typeof e == "string",
  dj = (e) => typeof e == "object" && e !== null,
  fj =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  pj = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  hj = (e) => pj[e],
  mj = (e) => e.replace(fj, hj);
let Ep = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: mj,
};
const gj = (e = {}) => {
    Ep = { ...Ep, ...e };
  },
  yj = () => Ep;
let cx;
const vj = (e) => {
    cx = e;
  },
  Sj = () => cx,
  bj = {
    type: "3rdParty",
    init(e) {
      gj(e.options.react), vj(e);
    },
  },
  wj = S.createContext();
class xj {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const Cj = (e, t) => {
    const n = S.useRef();
    return (
      S.useEffect(() => {
        n.current = e;
      }, [e, t]),
      n.current
    );
  },
  dx = (e, t, n, r) => e.getFixedT(t, n, r),
  Ej = (e, t, n, r) => S.useCallback(dx(e, t, n, r), [e, t, n, r]),
  kj = (e, t = {}) => {
    var b, C, k, E;
    const { i18n: n } = t,
      { i18n: r, defaultNS: o } = S.useContext(wj) || {},
      i = n || r || Sj();
    if ((i && !i.reportNamespaces && (i.reportNamespaces = new xj()), !i)) {
      xp(
        "You will need to pass in an i18next instance by using initReactI18next",
      );
      const T = (w, P) =>
          po(P)
            ? P
            : dj(P) && po(P.defaultValue)
              ? P.defaultValue
              : Array.isArray(w)
                ? w[w.length - 1]
                : w,
        $ = [T, {}, !1];
      return ($.t = T), ($.i18n = {}), ($.ready = !1), $;
    }
    (b = i.options.react) != null &&
      b.wait &&
      xp(
        "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.",
      );
    const s = { ...yj(), ...i.options.react, ...t },
      { useSuspense: a, keyPrefix: l } = s;
    let u = o || ((C = i.options) == null ? void 0 : C.defaultNS);
    (u = po(u) ? [u] : u || ["translation"]),
      (E = (k = i.reportNamespaces).addUsedNamespaces) == null || E.call(k, u);
    const c =
        (i.isInitialized || i.initializedStoreOnce) &&
        u.every((T) => cj(T, i, s)),
      d = Ej(i, t.lng || null, s.nsMode === "fallback" ? u : u[0], l),
      f = () => d,
      g = () => dx(i, t.lng || null, s.nsMode === "fallback" ? u : u[0], l),
      [p, v] = S.useState(f);
    let x = u.join();
    t.lng && (x = `${t.lng}${x}`);
    const m = Cj(x),
      y = S.useRef(!0);
    S.useEffect(() => {
      const { bindI18n: T, bindI18nStore: $ } = s;
      (y.current = !0),
        !c &&
          !a &&
          (t.lng
            ? Pv(i, t.lng, u, () => {
                y.current && v(g);
              })
            : Cp(i, u, () => {
                y.current && v(g);
              })),
        c && m && m !== x && y.current && v(g);
      const w = () => {
        y.current && v(g);
      };
      return (
        T && (i == null || i.on(T, w)),
        $ && (i == null || i.store.on($, w)),
        () => {
          (y.current = !1),
            i && (T == null || T.split(" ").forEach((P) => i.off(P, w))),
            $ && i && $.split(" ").forEach((P) => i.store.off(P, w));
        }
      );
    }, [i, x]),
      S.useEffect(() => {
        y.current && c && v(f);
      }, [i, l, c]);
    const h = [p, i, c];
    if (((h.t = p), (h.i18n = i), (h.ready = c), c || (!c && !a))) return h;
    throw new Promise((T) => {
      t.lng ? Pv(i, t.lng, u, () => T()) : Cp(i, u, () => T());
    });
  },
  Rj = V("img")({
    height: "58px",
    width: "60px",
    display: "block",
    overflow: "hidden",
    transformOrigin: "center",
  }),
  Tj = V(DI)(({ theme: e }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#aab4be",
          ...e.applyStyles("dark", { backgroundColor: "#8796A5" }),
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: "#001e3c",
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
      ...e.applyStyles("dark", { backgroundColor: "#003892" }),
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: "#aab4be",
      borderRadius: 20 / 2,
      ...e.applyStyles("dark", { backgroundColor: "#8796A5" }),
    },
  })),
  Pj = () => {
    const e = Dr((s) => s.auth.isLoggedIn),
      t = Ao();
    kj();
    const n = () => {
        t(yi.logOut());
      },
      { theme: r, toggleTheme: o } = tj(),
      i = r.palette.mode === "dark";
    return R.jsx(yO, {
      position: "static",
      children: R.jsxs(WI, {
        children: [
          R.jsx(Yf, {
            variant: "h6",
            component: "div",
            sx: { flexGrow: 1 },
            children: R.jsx(QN, {
              to: "/",
              style: { display: "inline-block" },
              children: R.jsx(Rj, { src: lj }),
            }),
          }),
          R.jsx(Tj, { sx: { m: 1 }, checked: i, onChange: o }),
          e && R.jsx(Tc, { color: "inherit", onClick: n, children: "Log out" }),
        ],
      }),
    });
  },
  Oj = () => {
    const e = Ao(),
      t = Dr((r) => r.app.error),
      n = (r, o) => {
        o !== "clickaway" && e(ue.setAppError({ error: null }));
      };
    return R.jsx(II, {
      open: !!t,
      autoHideDuration: 6e3,
      onClose: n,
      anchorOrigin: { vertical: "bottom", horizontal: "right" },
      children: R.jsx(lO, {
        onClose: n,
        severity: "error",
        variant: "filled",
        sx: { width: "100%" },
        children: t && t,
      }),
    });
  };
var $j = function (t) {
  return Aj(t) && !Ij(t);
};
function Aj(e) {
  return !!e && typeof e == "object";
}
function Ij(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Mj(e);
}
var Lj = typeof Symbol == "function" && Symbol.for,
  _j = Lj ? Symbol.for("react.element") : 60103;
function Mj(e) {
  return e.$$typeof === _j;
}
function Nj(e) {
  return Array.isArray(e) ? [] : {};
}
function Su(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? ua(Nj(e), e, t) : e;
}
function jj(e, t, n) {
  return e.concat(t).map(function (r) {
    return Su(r, n);
  });
}
function Fj(e, t, n) {
  var r = {};
  return (
    n.isMergeableObject(e) &&
      Object.keys(e).forEach(function (o) {
        r[o] = Su(e[o], n);
      }),
    Object.keys(t).forEach(function (o) {
      !n.isMergeableObject(t[o]) || !e[o]
        ? (r[o] = Su(t[o], n))
        : (r[o] = ua(e[o], t[o], n));
    }),
    r
  );
}
function ua(e, t, n) {
  (n = n || {}),
    (n.arrayMerge = n.arrayMerge || jj),
    (n.isMergeableObject = n.isMergeableObject || $j);
  var r = Array.isArray(t),
    o = Array.isArray(e),
    i = r === o;
  return i ? (r ? n.arrayMerge(e, t, n) : Fj(e, t, n)) : Su(t, n);
}
ua.all = function (t, n) {
  if (!Array.isArray(t)) throw new Error("first argument should be an array");
  return t.reduce(function (r, o) {
    return ua(r, o, n);
  }, {});
};
var kp = ua,
  fx =
    typeof global == "object" && global && global.Object === Object && global,
  Dj = typeof self == "object" && self && self.Object === Object && self,
  Gn = fx || Dj || Function("return this")(),
  Br = Gn.Symbol,
  px = Object.prototype,
  Bj = px.hasOwnProperty,
  zj = px.toString,
  rs = Br ? Br.toStringTag : void 0;
function Uj(e) {
  var t = Bj.call(e, rs),
    n = e[rs];
  try {
    e[rs] = void 0;
    var r = !0;
  } catch {}
  var o = zj.call(e);
  return r && (t ? (e[rs] = n) : delete e[rs]), o;
}
var Wj = Object.prototype,
  Vj = Wj.toString;
function Hj(e) {
  return Vj.call(e);
}
var Kj = "[object Null]",
  Gj = "[object Undefined]",
  Ov = Br ? Br.toStringTag : void 0;
function Io(e) {
  return e == null
    ? e === void 0
      ? Gj
      : Kj
    : Ov && Ov in Object(e)
      ? Uj(e)
      : Hj(e);
}
function hx(e, t) {
  return function (n) {
    return e(t(n));
  };
}
var km = hx(Object.getPrototypeOf, Object);
function Lo(e) {
  return e != null && typeof e == "object";
}
var qj = "[object Object]",
  Xj = Function.prototype,
  Qj = Object.prototype,
  mx = Xj.toString,
  Yj = Qj.hasOwnProperty,
  Jj = mx.call(Object);
function $v(e) {
  if (!Lo(e) || Io(e) != qj) return !1;
  var t = km(e);
  if (t === null) return !0;
  var n = Yj.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && mx.call(n) == Jj;
}
function Zj() {
  (this.__data__ = []), (this.size = 0);
}
function gx(e, t) {
  return e === t || (e !== e && t !== t);
}
function Uc(e, t) {
  for (var n = e.length; n--; ) if (gx(e[n][0], t)) return n;
  return -1;
}
var e5 = Array.prototype,
  t5 = e5.splice;
function n5(e) {
  var t = this.__data__,
    n = Uc(t, e);
  if (n < 0) return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : t5.call(t, n, 1), --this.size, !0;
}
function r5(e) {
  var t = this.__data__,
    n = Uc(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function o5(e) {
  return Uc(this.__data__, e) > -1;
}
function i5(e, t) {
  var n = this.__data__,
    r = Uc(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
}
function mr(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
mr.prototype.clear = Zj;
mr.prototype.delete = n5;
mr.prototype.get = r5;
mr.prototype.has = o5;
mr.prototype.set = i5;
function s5() {
  (this.__data__ = new mr()), (this.size = 0);
}
function a5(e) {
  var t = this.__data__,
    n = t.delete(e);
  return (this.size = t.size), n;
}
function l5(e) {
  return this.__data__.get(e);
}
function u5(e) {
  return this.__data__.has(e);
}
function Oa(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var c5 = "[object AsyncFunction]",
  d5 = "[object Function]",
  f5 = "[object GeneratorFunction]",
  p5 = "[object Proxy]";
function yx(e) {
  if (!Oa(e)) return !1;
  var t = Io(e);
  return t == d5 || t == f5 || t == c5 || t == p5;
}
var Dd = Gn["__core-js_shared__"],
  Av = (function () {
    var e = /[^.]+$/.exec((Dd && Dd.keys && Dd.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function h5(e) {
  return !!Av && Av in e;
}
var m5 = Function.prototype,
  g5 = m5.toString;
function _o(e) {
  if (e != null) {
    try {
      return g5.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var y5 = /[\\^$.*+?()[\]{}|]/g,
  v5 = /^\[object .+?Constructor\]$/,
  S5 = Function.prototype,
  b5 = Object.prototype,
  w5 = S5.toString,
  x5 = b5.hasOwnProperty,
  C5 = RegExp(
    "^" +
      w5
        .call(x5)
        .replace(y5, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?",
        ) +
      "$",
  );
function E5(e) {
  if (!Oa(e) || h5(e)) return !1;
  var t = yx(e) ? C5 : v5;
  return t.test(_o(e));
}
function k5(e, t) {
  return e == null ? void 0 : e[t];
}
function Mo(e, t) {
  var n = k5(e, t);
  return E5(n) ? n : void 0;
}
var ca = Mo(Gn, "Map"),
  da = Mo(Object, "create");
function R5() {
  (this.__data__ = da ? da(null) : {}), (this.size = 0);
}
function T5(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var P5 = "__lodash_hash_undefined__",
  O5 = Object.prototype,
  $5 = O5.hasOwnProperty;
function A5(e) {
  var t = this.__data__;
  if (da) {
    var n = t[e];
    return n === P5 ? void 0 : n;
  }
  return $5.call(t, e) ? t[e] : void 0;
}
var I5 = Object.prototype,
  L5 = I5.hasOwnProperty;
function _5(e) {
  var t = this.__data__;
  return da ? t[e] !== void 0 : L5.call(t, e);
}
var M5 = "__lodash_hash_undefined__";
function N5(e, t) {
  var n = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (n[e] = da && t === void 0 ? M5 : t),
    this
  );
}
function To(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
To.prototype.clear = R5;
To.prototype.delete = T5;
To.prototype.get = A5;
To.prototype.has = _5;
To.prototype.set = N5;
function j5() {
  (this.size = 0),
    (this.__data__ = {
      hash: new To(),
      map: new (ca || mr)(),
      string: new To(),
    });
}
function F5(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
function Wc(e, t) {
  var n = e.__data__;
  return F5(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function D5(e) {
  var t = Wc(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
function B5(e) {
  return Wc(this, e).get(e);
}
function z5(e) {
  return Wc(this, e).has(e);
}
function U5(e, t) {
  var n = Wc(this, e),
    r = n.size;
  return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
}
function qr(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
qr.prototype.clear = j5;
qr.prototype.delete = D5;
qr.prototype.get = B5;
qr.prototype.has = z5;
qr.prototype.set = U5;
var W5 = 200;
function V5(e, t) {
  var n = this.__data__;
  if (n instanceof mr) {
    var r = n.__data__;
    if (!ca || r.length < W5 - 1)
      return r.push([e, t]), (this.size = ++n.size), this;
    n = this.__data__ = new qr(r);
  }
  return n.set(e, t), (this.size = n.size), this;
}
function Ui(e) {
  var t = (this.__data__ = new mr(e));
  this.size = t.size;
}
Ui.prototype.clear = s5;
Ui.prototype.delete = a5;
Ui.prototype.get = l5;
Ui.prototype.has = u5;
Ui.prototype.set = V5;
function H5(e, t) {
  for (
    var n = -1, r = e == null ? 0 : e.length;
    ++n < r && t(e[n], n, e) !== !1;

  );
  return e;
}
var Iv = (function () {
  try {
    var e = Mo(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {}
})();
function vx(e, t, n) {
  t == "__proto__" && Iv
    ? Iv(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
    : (e[t] = n);
}
var K5 = Object.prototype,
  G5 = K5.hasOwnProperty;
function Sx(e, t, n) {
  var r = e[t];
  (!(G5.call(e, t) && gx(r, n)) || (n === void 0 && !(t in e))) && vx(e, t, n);
}
function Vc(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var i = -1, s = t.length; ++i < s; ) {
    var a = t[i],
      l = void 0;
    l === void 0 && (l = e[a]), o ? vx(n, a, l) : Sx(n, a, l);
  }
  return n;
}
function q5(e, t) {
  for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
  return r;
}
var X5 = "[object Arguments]";
function Lv(e) {
  return Lo(e) && Io(e) == X5;
}
var bx = Object.prototype,
  Q5 = bx.hasOwnProperty,
  Y5 = bx.propertyIsEnumerable,
  J5 = Lv(
    (function () {
      return arguments;
    })(),
  )
    ? Lv
    : function (e) {
        return Lo(e) && Q5.call(e, "callee") && !Y5.call(e, "callee");
      },
  $a = Array.isArray;
function Z5() {
  return !1;
}
var wx = typeof exports == "object" && exports && !exports.nodeType && exports,
  _v = wx && typeof module == "object" && module && !module.nodeType && module,
  eF = _v && _v.exports === wx,
  Mv = eF ? Gn.Buffer : void 0,
  tF = Mv ? Mv.isBuffer : void 0,
  xx = tF || Z5,
  nF = 9007199254740991,
  rF = /^(?:0|[1-9]\d*)$/;
function oF(e, t) {
  var n = typeof e;
  return (
    (t = t ?? nF),
    !!t &&
      (n == "number" || (n != "symbol" && rF.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var iF = 9007199254740991;
function Cx(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= iF;
}
var sF = "[object Arguments]",
  aF = "[object Array]",
  lF = "[object Boolean]",
  uF = "[object Date]",
  cF = "[object Error]",
  dF = "[object Function]",
  fF = "[object Map]",
  pF = "[object Number]",
  hF = "[object Object]",
  mF = "[object RegExp]",
  gF = "[object Set]",
  yF = "[object String]",
  vF = "[object WeakMap]",
  SF = "[object ArrayBuffer]",
  bF = "[object DataView]",
  wF = "[object Float32Array]",
  xF = "[object Float64Array]",
  CF = "[object Int8Array]",
  EF = "[object Int16Array]",
  kF = "[object Int32Array]",
  RF = "[object Uint8Array]",
  TF = "[object Uint8ClampedArray]",
  PF = "[object Uint16Array]",
  OF = "[object Uint32Array]",
  De = {};
De[wF] =
  De[xF] =
  De[CF] =
  De[EF] =
  De[kF] =
  De[RF] =
  De[TF] =
  De[PF] =
  De[OF] =
    !0;
De[sF] =
  De[aF] =
  De[SF] =
  De[lF] =
  De[bF] =
  De[uF] =
  De[cF] =
  De[dF] =
  De[fF] =
  De[pF] =
  De[hF] =
  De[mF] =
  De[gF] =
  De[yF] =
  De[vF] =
    !1;
function $F(e) {
  return Lo(e) && Cx(e.length) && !!De[Io(e)];
}
function Rm(e) {
  return function (t) {
    return e(t);
  };
}
var Ex = typeof exports == "object" && exports && !exports.nodeType && exports,
  $s = Ex && typeof module == "object" && module && !module.nodeType && module,
  AF = $s && $s.exports === Ex,
  Bd = AF && fx.process,
  Oi = (function () {
    try {
      var e = $s && $s.require && $s.require("util").types;
      return e || (Bd && Bd.binding && Bd.binding("util"));
    } catch {}
  })(),
  Nv = Oi && Oi.isTypedArray,
  IF = Nv ? Rm(Nv) : $F,
  LF = Object.prototype,
  _F = LF.hasOwnProperty;
function kx(e, t) {
  var n = $a(e),
    r = !n && J5(e),
    o = !n && !r && xx(e),
    i = !n && !r && !o && IF(e),
    s = n || r || o || i,
    a = s ? q5(e.length, String) : [],
    l = a.length;
  for (var u in e)
    (t || _F.call(e, u)) &&
      !(
        s &&
        (u == "length" ||
          (o && (u == "offset" || u == "parent")) ||
          (i && (u == "buffer" || u == "byteLength" || u == "byteOffset")) ||
          oF(u, l))
      ) &&
      a.push(u);
  return a;
}
var MF = Object.prototype;
function Tm(e) {
  var t = e && e.constructor,
    n = (typeof t == "function" && t.prototype) || MF;
  return e === n;
}
var NF = hx(Object.keys, Object),
  jF = Object.prototype,
  FF = jF.hasOwnProperty;
function DF(e) {
  if (!Tm(e)) return NF(e);
  var t = [];
  for (var n in Object(e)) FF.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Rx(e) {
  return e != null && Cx(e.length) && !yx(e);
}
function Pm(e) {
  return Rx(e) ? kx(e) : DF(e);
}
function BF(e, t) {
  return e && Vc(t, Pm(t), e);
}
function zF(e) {
  var t = [];
  if (e != null) for (var n in Object(e)) t.push(n);
  return t;
}
var UF = Object.prototype,
  WF = UF.hasOwnProperty;
function VF(e) {
  if (!Oa(e)) return zF(e);
  var t = Tm(e),
    n = [];
  for (var r in e) (r == "constructor" && (t || !WF.call(e, r))) || n.push(r);
  return n;
}
function Om(e) {
  return Rx(e) ? kx(e, !0) : VF(e);
}
function HF(e, t) {
  return e && Vc(t, Om(t), e);
}
var Tx = typeof exports == "object" && exports && !exports.nodeType && exports,
  jv = Tx && typeof module == "object" && module && !module.nodeType && module,
  KF = jv && jv.exports === Tx,
  Fv = KF ? Gn.Buffer : void 0,
  Dv = Fv ? Fv.allocUnsafe : void 0;
function GF(e, t) {
  if (t) return e.slice();
  var n = e.length,
    r = Dv ? Dv(n) : new e.constructor(n);
  return e.copy(r), r;
}
function Px(e, t) {
  var n = -1,
    r = e.length;
  for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
  return t;
}
function qF(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (i[o++] = s);
  }
  return i;
}
function Ox() {
  return [];
}
var XF = Object.prototype,
  QF = XF.propertyIsEnumerable,
  Bv = Object.getOwnPropertySymbols,
  $m = Bv
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            qF(Bv(e), function (t) {
              return QF.call(e, t);
            }));
      }
    : Ox;
function YF(e, t) {
  return Vc(e, $m(e), t);
}
function $x(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
  return e;
}
var JF = Object.getOwnPropertySymbols,
  Ax = JF
    ? function (e) {
        for (var t = []; e; ) $x(t, $m(e)), (e = km(e));
        return t;
      }
    : Ox;
function ZF(e, t) {
  return Vc(e, Ax(e), t);
}
function Ix(e, t, n) {
  var r = t(e);
  return $a(e) ? r : $x(r, n(e));
}
function e3(e) {
  return Ix(e, Pm, $m);
}
function t3(e) {
  return Ix(e, Om, Ax);
}
var Rp = Mo(Gn, "DataView"),
  Tp = Mo(Gn, "Promise"),
  Pp = Mo(Gn, "Set"),
  Op = Mo(Gn, "WeakMap"),
  zv = "[object Map]",
  n3 = "[object Object]",
  Uv = "[object Promise]",
  Wv = "[object Set]",
  Vv = "[object WeakMap]",
  Hv = "[object DataView]",
  r3 = _o(Rp),
  o3 = _o(ca),
  i3 = _o(Tp),
  s3 = _o(Pp),
  a3 = _o(Op),
  Jn = Io;
((Rp && Jn(new Rp(new ArrayBuffer(1))) != Hv) ||
  (ca && Jn(new ca()) != zv) ||
  (Tp && Jn(Tp.resolve()) != Uv) ||
  (Pp && Jn(new Pp()) != Wv) ||
  (Op && Jn(new Op()) != Vv)) &&
  (Jn = function (e) {
    var t = Io(e),
      n = t == n3 ? e.constructor : void 0,
      r = n ? _o(n) : "";
    if (r)
      switch (r) {
        case r3:
          return Hv;
        case o3:
          return zv;
        case i3:
          return Uv;
        case s3:
          return Wv;
        case a3:
          return Vv;
      }
    return t;
  });
var l3 = Object.prototype,
  u3 = l3.hasOwnProperty;
function c3(e) {
  var t = e.length,
    n = new e.constructor(t);
  return (
    t &&
      typeof e[0] == "string" &&
      u3.call(e, "index") &&
      ((n.index = e.index), (n.input = e.input)),
    n
  );
}
var Kv = Gn.Uint8Array;
function Am(e) {
  var t = new e.constructor(e.byteLength);
  return new Kv(t).set(new Kv(e)), t;
}
function d3(e, t) {
  var n = t ? Am(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var f3 = /\w*$/;
function p3(e) {
  var t = new e.constructor(e.source, f3.exec(e));
  return (t.lastIndex = e.lastIndex), t;
}
var Gv = Br ? Br.prototype : void 0,
  qv = Gv ? Gv.valueOf : void 0;
function h3(e) {
  return qv ? Object(qv.call(e)) : {};
}
function m3(e, t) {
  var n = t ? Am(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var g3 = "[object Boolean]",
  y3 = "[object Date]",
  v3 = "[object Map]",
  S3 = "[object Number]",
  b3 = "[object RegExp]",
  w3 = "[object Set]",
  x3 = "[object String]",
  C3 = "[object Symbol]",
  E3 = "[object ArrayBuffer]",
  k3 = "[object DataView]",
  R3 = "[object Float32Array]",
  T3 = "[object Float64Array]",
  P3 = "[object Int8Array]",
  O3 = "[object Int16Array]",
  $3 = "[object Int32Array]",
  A3 = "[object Uint8Array]",
  I3 = "[object Uint8ClampedArray]",
  L3 = "[object Uint16Array]",
  _3 = "[object Uint32Array]";
function M3(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case E3:
      return Am(e);
    case g3:
    case y3:
      return new r(+e);
    case k3:
      return d3(e, n);
    case R3:
    case T3:
    case P3:
    case O3:
    case $3:
    case A3:
    case I3:
    case L3:
    case _3:
      return m3(e, n);
    case v3:
      return new r();
    case S3:
    case x3:
      return new r(e);
    case b3:
      return p3(e);
    case w3:
      return new r();
    case C3:
      return h3(e);
  }
}
var Xv = Object.create,
  N3 = (function () {
    function e() {}
    return function (t) {
      if (!Oa(t)) return {};
      if (Xv) return Xv(t);
      e.prototype = t;
      var n = new e();
      return (e.prototype = void 0), n;
    };
  })();
function j3(e) {
  return typeof e.constructor == "function" && !Tm(e) ? N3(km(e)) : {};
}
var F3 = "[object Map]";
function D3(e) {
  return Lo(e) && Jn(e) == F3;
}
var Qv = Oi && Oi.isMap,
  B3 = Qv ? Rm(Qv) : D3,
  z3 = "[object Set]";
function U3(e) {
  return Lo(e) && Jn(e) == z3;
}
var Yv = Oi && Oi.isSet,
  W3 = Yv ? Rm(Yv) : U3,
  V3 = 1,
  H3 = 2,
  K3 = 4,
  Lx = "[object Arguments]",
  G3 = "[object Array]",
  q3 = "[object Boolean]",
  X3 = "[object Date]",
  Q3 = "[object Error]",
  _x = "[object Function]",
  Y3 = "[object GeneratorFunction]",
  J3 = "[object Map]",
  Z3 = "[object Number]",
  Mx = "[object Object]",
  e4 = "[object RegExp]",
  t4 = "[object Set]",
  n4 = "[object String]",
  r4 = "[object Symbol]",
  o4 = "[object WeakMap]",
  i4 = "[object ArrayBuffer]",
  s4 = "[object DataView]",
  a4 = "[object Float32Array]",
  l4 = "[object Float64Array]",
  u4 = "[object Int8Array]",
  c4 = "[object Int16Array]",
  d4 = "[object Int32Array]",
  f4 = "[object Uint8Array]",
  p4 = "[object Uint8ClampedArray]",
  h4 = "[object Uint16Array]",
  m4 = "[object Uint32Array]",
  Me = {};
Me[Lx] =
  Me[G3] =
  Me[i4] =
  Me[s4] =
  Me[q3] =
  Me[X3] =
  Me[a4] =
  Me[l4] =
  Me[u4] =
  Me[c4] =
  Me[d4] =
  Me[J3] =
  Me[Z3] =
  Me[Mx] =
  Me[e4] =
  Me[t4] =
  Me[n4] =
  Me[r4] =
  Me[f4] =
  Me[p4] =
  Me[h4] =
  Me[m4] =
    !0;
Me[Q3] = Me[_x] = Me[o4] = !1;
function As(e, t, n, r, o, i) {
  var s,
    a = t & V3,
    l = t & H3,
    u = t & K3;
  if (s !== void 0) return s;
  if (!Oa(e)) return e;
  var c = $a(e);
  if (c) {
    if (((s = c3(e)), !a)) return Px(e, s);
  } else {
    var d = Jn(e),
      f = d == _x || d == Y3;
    if (xx(e)) return GF(e, a);
    if (d == Mx || d == Lx || (f && !o)) {
      if (((s = l || f ? {} : j3(e)), !a))
        return l ? ZF(e, HF(s, e)) : YF(e, BF(s, e));
    } else {
      if (!Me[d]) return o ? e : {};
      s = M3(e, d, a);
    }
  }
  i || (i = new Ui());
  var g = i.get(e);
  if (g) return g;
  i.set(e, s),
    W3(e)
      ? e.forEach(function (x) {
          s.add(As(x, t, n, x, e, i));
        })
      : B3(e) &&
        e.forEach(function (x, m) {
          s.set(m, As(x, t, n, m, e, i));
        });
  var p = u ? (l ? t3 : e3) : l ? Om : Pm,
    v = c ? void 0 : p(e);
  return (
    H5(v || e, function (x, m) {
      v && ((m = x), (x = e[m])), Sx(s, m, As(x, t, n, m, e, i));
    }),
    s
  );
}
var g4 = 1,
  y4 = 4;
function nl(e) {
  return As(e, g4 | y4);
}
var Jv = Array.isArray,
  Zv = Object.keys,
  v4 = Object.prototype.hasOwnProperty,
  S4 = typeof Element < "u";
function $p(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    var n = Jv(e),
      r = Jv(t),
      o,
      i,
      s;
    if (n && r) {
      if (((i = e.length), i != t.length)) return !1;
      for (o = i; o-- !== 0; ) if (!$p(e[o], t[o])) return !1;
      return !0;
    }
    if (n != r) return !1;
    var a = e instanceof Date,
      l = t instanceof Date;
    if (a != l) return !1;
    if (a && l) return e.getTime() == t.getTime();
    var u = e instanceof RegExp,
      c = t instanceof RegExp;
    if (u != c) return !1;
    if (u && c) return e.toString() == t.toString();
    var d = Zv(e);
    if (((i = d.length), i !== Zv(t).length)) return !1;
    for (o = i; o-- !== 0; ) if (!v4.call(t, d[o])) return !1;
    if (S4 && e instanceof Element && t instanceof Element) return e === t;
    for (o = i; o-- !== 0; )
      if (((s = d[o]), !(s === "_owner" && e.$$typeof) && !$p(e[s], t[s])))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var b4 = function (t, n) {
  try {
    return $p(t, n);
  } catch (r) {
    if (
      (r.message && r.message.match(/stack|recursion/i)) ||
      r.number === -2146828260
    )
      return (
        console.warn(
          "Warning: react-fast-compare does not handle circular references.",
          r.name,
          r.message,
        ),
        !1
      );
    throw r;
  }
};
const ro = Mp(b4);
var w4 = 4;
function e0(e) {
  return As(e, w4);
}
function Nx(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var x4 = "[object Symbol]";
function Im(e) {
  return typeof e == "symbol" || (Lo(e) && Io(e) == x4);
}
var C4 = "Expected a function";
function Lm(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(C4);
  var n = function () {
    var r = arguments,
      o = t ? t.apply(this, r) : r[0],
      i = n.cache;
    if (i.has(o)) return i.get(o);
    var s = e.apply(this, r);
    return (n.cache = i.set(o, s) || i), s;
  };
  return (n.cache = new (Lm.Cache || qr)()), n;
}
Lm.Cache = qr;
var E4 = 500;
function k4(e) {
  var t = Lm(e, function (r) {
      return n.size === E4 && n.clear(), r;
    }),
    n = t.cache;
  return t;
}
var R4 =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  T4 = /\\(\\)?/g,
  P4 = k4(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(""),
      e.replace(R4, function (n, r, o, i) {
        t.push(o ? i.replace(T4, "$1") : r || n);
      }),
      t
    );
  }),
  O4 = 1 / 0;
function $4(e) {
  if (typeof e == "string" || Im(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -O4 ? "-0" : t;
}
var A4 = 1 / 0,
  t0 = Br ? Br.prototype : void 0,
  n0 = t0 ? t0.toString : void 0;
function jx(e) {
  if (typeof e == "string") return e;
  if ($a(e)) return Nx(e, jx) + "";
  if (Im(e)) return n0 ? n0.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -A4 ? "-0" : t;
}
function I4(e) {
  return e == null ? "" : jx(e);
}
function Fx(e) {
  return $a(e) ? Nx(e, $4) : Im(e) ? [e] : Px(P4(I4(e)));
}
function lt() {
  return (
    (lt =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    lt.apply(this, arguments)
  );
}
function Dx(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Hc = S.createContext(void 0);
Hc.displayName = "FormikContext";
Hc.Provider;
Hc.Consumer;
function L4() {
  var e = S.useContext(Hc);
  return e;
}
var bn = function (t) {
    return typeof t == "function";
  },
  Kc = function (t) {
    return t !== null && typeof t == "object";
  },
  _4 = function (t) {
    return String(Math.floor(Number(t))) === t;
  },
  zd = function (t) {
    return Object.prototype.toString.call(t) === "[object String]";
  },
  Ud = function (t) {
    return Kc(t) && bn(t.then);
  };
function Ht(e, t, n, r) {
  r === void 0 && (r = 0);
  for (var o = Fx(t); e && r < o.length; ) e = e[o[r++]];
  return (r !== o.length && !e) || e === void 0 ? n : e;
}
function ho(e, t, n) {
  for (var r = e0(e), o = r, i = 0, s = Fx(t); i < s.length - 1; i++) {
    var a = s[i],
      l = Ht(e, s.slice(0, i + 1));
    if (l && (Kc(l) || Array.isArray(l))) o = o[a] = e0(l);
    else {
      var u = s[i + 1];
      o = o[a] = _4(u) && Number(u) >= 0 ? [] : {};
    }
  }
  return (i === 0 ? e : o)[s[i]] === n
    ? e
    : (n === void 0 ? delete o[s[i]] : (o[s[i]] = n),
      i === 0 && n === void 0 && delete r[s[i]],
      r);
}
function Bx(e, t, n, r) {
  n === void 0 && (n = new WeakMap()), r === void 0 && (r = {});
  for (var o = 0, i = Object.keys(e); o < i.length; o++) {
    var s = i[o],
      a = e[s];
    Kc(a)
      ? n.get(a) ||
        (n.set(a, !0), (r[s] = Array.isArray(a) ? [] : {}), Bx(a, t, n, r[s]))
      : (r[s] = t);
  }
  return r;
}
function M4(e, t) {
  switch (t.type) {
    case "SET_VALUES":
      return lt({}, e, { values: t.payload });
    case "SET_TOUCHED":
      return lt({}, e, { touched: t.payload });
    case "SET_ERRORS":
      return ro(e.errors, t.payload) ? e : lt({}, e, { errors: t.payload });
    case "SET_STATUS":
      return lt({}, e, { status: t.payload });
    case "SET_ISSUBMITTING":
      return lt({}, e, { isSubmitting: t.payload });
    case "SET_ISVALIDATING":
      return lt({}, e, { isValidating: t.payload });
    case "SET_FIELD_VALUE":
      return lt({}, e, {
        values: ho(e.values, t.payload.field, t.payload.value),
      });
    case "SET_FIELD_TOUCHED":
      return lt({}, e, {
        touched: ho(e.touched, t.payload.field, t.payload.value),
      });
    case "SET_FIELD_ERROR":
      return lt({}, e, {
        errors: ho(e.errors, t.payload.field, t.payload.value),
      });
    case "RESET_FORM":
      return lt({}, e, t.payload);
    case "SET_FORMIK_STATE":
      return t.payload(e);
    case "SUBMIT_ATTEMPT":
      return lt({}, e, {
        touched: Bx(e.values, !0),
        isSubmitting: !0,
        submitCount: e.submitCount + 1,
      });
    case "SUBMIT_FAILURE":
      return lt({}, e, { isSubmitting: !1 });
    case "SUBMIT_SUCCESS":
      return lt({}, e, { isSubmitting: !1 });
    default:
      return e;
  }
}
var Yr = {},
  rl = {};
function N4(e) {
  var t = e.validateOnChange,
    n = t === void 0 ? !0 : t,
    r = e.validateOnBlur,
    o = r === void 0 ? !0 : r,
    i = e.validateOnMount,
    s = i === void 0 ? !1 : i,
    a = e.isInitialValid,
    l = e.enableReinitialize,
    u = l === void 0 ? !1 : l,
    c = e.onSubmit,
    d = Dx(e, [
      "validateOnChange",
      "validateOnBlur",
      "validateOnMount",
      "isInitialValid",
      "enableReinitialize",
      "onSubmit",
    ]),
    f = lt(
      {
        validateOnChange: n,
        validateOnBlur: o,
        validateOnMount: s,
        onSubmit: c,
      },
      d,
    ),
    g = S.useRef(f.initialValues),
    p = S.useRef(f.initialErrors || Yr),
    v = S.useRef(f.initialTouched || rl),
    x = S.useRef(f.initialStatus),
    m = S.useRef(!1),
    y = S.useRef({});
  S.useEffect(function () {
    return (
      (m.current = !0),
      function () {
        m.current = !1;
      }
    );
  }, []);
  var h = S.useState(0),
    b = h[1],
    C = S.useRef({
      values: nl(f.initialValues),
      errors: nl(f.initialErrors) || Yr,
      touched: nl(f.initialTouched) || rl,
      status: nl(f.initialStatus),
      isSubmitting: !1,
      isValidating: !1,
      submitCount: 0,
    }),
    k = C.current,
    E = S.useCallback(function (O) {
      var M = C.current;
      (C.current = M4(M, O)),
        M !== C.current &&
          b(function (H) {
            return H + 1;
          });
    }, []),
    T = S.useCallback(
      function (O, M) {
        return new Promise(function (H, X) {
          var Z = f.validate(O, M);
          Z == null
            ? H(Yr)
            : Ud(Z)
              ? Z.then(
                  function (Q) {
                    H(Q || Yr);
                  },
                  function (Q) {
                    X(Q);
                  },
                )
              : H(Z);
        });
      },
      [f.validate],
    ),
    $ = S.useCallback(
      function (O, M) {
        var H = f.validationSchema,
          X = bn(H) ? H(M) : H,
          Z = M && X.validateAt ? X.validateAt(M, O) : F4(O, X);
        return new Promise(function (Q, oe) {
          Z.then(
            function () {
              Q(Yr);
            },
            function (He) {
              He.name === "ValidationError" ? Q(j4(He)) : oe(He);
            },
          );
        });
      },
      [f.validationSchema],
    ),
    w = S.useCallback(function (O, M) {
      return new Promise(function (H) {
        return H(y.current[O].validate(M));
      });
    }, []),
    P = S.useCallback(
      function (O) {
        var M = Object.keys(y.current).filter(function (X) {
            return bn(y.current[X].validate);
          }),
          H =
            M.length > 0
              ? M.map(function (X) {
                  return w(X, Ht(O, X));
                })
              : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
        return Promise.all(H).then(function (X) {
          return X.reduce(function (Z, Q, oe) {
            return (
              Q === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" ||
                (Q && (Z = ho(Z, M[oe], Q))),
              Z
            );
          }, {});
        });
      },
      [w],
    ),
    D = S.useCallback(
      function (O) {
        return Promise.all([
          P(O),
          f.validationSchema ? $(O) : {},
          f.validate ? T(O) : {},
        ]).then(function (M) {
          var H = M[0],
            X = M[1],
            Z = M[2],
            Q = kp.all([H, X, Z], { arrayMerge: D4 });
          return Q;
        });
      },
      [f.validate, f.validationSchema, P, T, $],
    ),
    N = an(function (O) {
      return (
        O === void 0 && (O = k.values),
        E({ type: "SET_ISVALIDATING", payload: !0 }),
        D(O).then(function (M) {
          return (
            m.current &&
              (E({ type: "SET_ISVALIDATING", payload: !1 }),
              E({ type: "SET_ERRORS", payload: M })),
            M
          );
        })
      );
    });
  S.useEffect(
    function () {
      s && m.current === !0 && ro(g.current, f.initialValues) && N(g.current);
    },
    [s, N],
  );
  var j = S.useCallback(
    function (O) {
      var M = O && O.values ? O.values : g.current,
        H =
          O && O.errors
            ? O.errors
            : p.current
              ? p.current
              : f.initialErrors || {},
        X =
          O && O.touched
            ? O.touched
            : v.current
              ? v.current
              : f.initialTouched || {},
        Z = O && O.status ? O.status : x.current ? x.current : f.initialStatus;
      (g.current = M), (p.current = H), (v.current = X), (x.current = Z);
      var Q = function () {
        E({
          type: "RESET_FORM",
          payload: {
            isSubmitting: !!O && !!O.isSubmitting,
            errors: H,
            touched: X,
            status: Z,
            values: M,
            isValidating: !!O && !!O.isValidating,
            submitCount:
              O && O.submitCount && typeof O.submitCount == "number"
                ? O.submitCount
                : 0,
          },
        });
      };
      if (f.onReset) {
        var oe = f.onReset(k.values, ze);
        Ud(oe) ? oe.then(Q) : Q();
      } else Q();
    },
    [f.initialErrors, f.initialStatus, f.initialTouched, f.onReset],
  );
  S.useEffect(
    function () {
      m.current === !0 &&
        !ro(g.current, f.initialValues) &&
        u &&
        ((g.current = f.initialValues), j(), s && N(g.current));
    },
    [u, f.initialValues, j, s, N],
  ),
    S.useEffect(
      function () {
        u &&
          m.current === !0 &&
          !ro(p.current, f.initialErrors) &&
          ((p.current = f.initialErrors || Yr),
          E({ type: "SET_ERRORS", payload: f.initialErrors || Yr }));
      },
      [u, f.initialErrors],
    ),
    S.useEffect(
      function () {
        u &&
          m.current === !0 &&
          !ro(v.current, f.initialTouched) &&
          ((v.current = f.initialTouched || rl),
          E({ type: "SET_TOUCHED", payload: f.initialTouched || rl }));
      },
      [u, f.initialTouched],
    ),
    S.useEffect(
      function () {
        u &&
          m.current === !0 &&
          !ro(x.current, f.initialStatus) &&
          ((x.current = f.initialStatus),
          E({ type: "SET_STATUS", payload: f.initialStatus }));
      },
      [u, f.initialStatus, f.initialTouched],
    );
  var _ = an(function (O) {
      if (y.current[O] && bn(y.current[O].validate)) {
        var M = Ht(k.values, O),
          H = y.current[O].validate(M);
        return Ud(H)
          ? (E({ type: "SET_ISVALIDATING", payload: !0 }),
            H.then(function (X) {
              return X;
            }).then(function (X) {
              E({ type: "SET_FIELD_ERROR", payload: { field: O, value: X } }),
                E({ type: "SET_ISVALIDATING", payload: !1 });
            }))
          : (E({ type: "SET_FIELD_ERROR", payload: { field: O, value: H } }),
            Promise.resolve(H));
      } else if (f.validationSchema)
        return (
          E({ type: "SET_ISVALIDATING", payload: !0 }),
          $(k.values, O)
            .then(function (X) {
              return X;
            })
            .then(function (X) {
              E({
                type: "SET_FIELD_ERROR",
                payload: { field: O, value: Ht(X, O) },
              }),
                E({ type: "SET_ISVALIDATING", payload: !1 });
            })
        );
      return Promise.resolve();
    }),
    B = S.useCallback(function (O, M) {
      var H = M.validate;
      y.current[O] = { validate: H };
    }, []),
    K = S.useCallback(function (O) {
      delete y.current[O];
    }, []),
    A = an(function (O, M) {
      E({ type: "SET_TOUCHED", payload: O });
      var H = M === void 0 ? o : M;
      return H ? N(k.values) : Promise.resolve();
    }),
    F = S.useCallback(function (O) {
      E({ type: "SET_ERRORS", payload: O });
    }, []),
    W = an(function (O, M) {
      var H = bn(O) ? O(k.values) : O;
      E({ type: "SET_VALUES", payload: H });
      var X = M === void 0 ? n : M;
      return X ? N(H) : Promise.resolve();
    }),
    q = S.useCallback(function (O, M) {
      E({ type: "SET_FIELD_ERROR", payload: { field: O, value: M } });
    }, []),
    Y = an(function (O, M, H) {
      E({ type: "SET_FIELD_VALUE", payload: { field: O, value: M } });
      var X = H === void 0 ? n : H;
      return X ? N(ho(k.values, O, M)) : Promise.resolve();
    }),
    re = S.useCallback(
      function (O, M) {
        var H = M,
          X = O,
          Z;
        if (!zd(O)) {
          O.persist && O.persist();
          var Q = O.target ? O.target : O.currentTarget,
            oe = Q.type,
            He = Q.name,
            Vt = Q.id,
            we = Q.value,
            qn = Q.checked,
            No = Q.outerHTML,
            ee = Q.options,
            Ae = Q.multiple;
          (H = M || He || Vt),
            (X = /number|range/.test(oe)
              ? ((Z = parseFloat(we)), isNaN(Z) ? "" : Z)
              : /checkbox/.test(oe)
                ? z4(Ht(k.values, H), qn, we)
                : ee && Ae
                  ? B4(ee)
                  : we);
        }
        H && Y(H, X);
      },
      [Y, k.values],
    ),
    te = an(function (O) {
      if (zd(O))
        return function (M) {
          return re(M, O);
        };
      re(O);
    }),
    ve = an(function (O, M, H) {
      M === void 0 && (M = !0),
        E({ type: "SET_FIELD_TOUCHED", payload: { field: O, value: M } });
      var X = H === void 0 ? o : H;
      return X ? N(k.values) : Promise.resolve();
    }),
    Ee = S.useCallback(
      function (O, M) {
        O.persist && O.persist();
        var H = O.target,
          X = H.name,
          Z = H.id,
          Q = H.outerHTML,
          oe = M || X || Z;
        ve(oe, !0);
      },
      [ve],
    ),
    Oe = an(function (O) {
      if (zd(O))
        return function (M) {
          return Ee(M, O);
        };
      Ee(O);
    }),
    rt = S.useCallback(function (O) {
      bn(O)
        ? E({ type: "SET_FORMIK_STATE", payload: O })
        : E({
            type: "SET_FORMIK_STATE",
            payload: function () {
              return O;
            },
          });
    }, []),
    $e = S.useCallback(function (O) {
      E({ type: "SET_STATUS", payload: O });
    }, []),
    se = S.useCallback(function (O) {
      E({ type: "SET_ISSUBMITTING", payload: O });
    }, []),
    ye = an(function () {
      return (
        E({ type: "SUBMIT_ATTEMPT" }),
        N().then(function (O) {
          var M = O instanceof Error,
            H = !M && Object.keys(O).length === 0;
          if (H) {
            var X;
            try {
              if (((X = ne()), X === void 0)) return;
            } catch (Z) {
              throw Z;
            }
            return Promise.resolve(X)
              .then(function (Z) {
                return m.current && E({ type: "SUBMIT_SUCCESS" }), Z;
              })
              .catch(function (Z) {
                if (m.current) throw (E({ type: "SUBMIT_FAILURE" }), Z);
              });
          } else if (m.current && (E({ type: "SUBMIT_FAILURE" }), M)) throw O;
        })
      );
    }),
    fe = an(function (O) {
      O && O.preventDefault && bn(O.preventDefault) && O.preventDefault(),
        O && O.stopPropagation && bn(O.stopPropagation) && O.stopPropagation(),
        ye().catch(function (M) {
          console.warn(
            "Warning: An unhandled error was caught from submitForm()",
            M,
          );
        });
    }),
    ze = {
      resetForm: j,
      validateForm: N,
      validateField: _,
      setErrors: F,
      setFieldError: q,
      setFieldTouched: ve,
      setFieldValue: Y,
      setStatus: $e,
      setSubmitting: se,
      setTouched: A,
      setValues: W,
      setFormikState: rt,
      submitForm: ye,
    },
    ne = an(function () {
      return c(k.values, ze);
    }),
    be = an(function (O) {
      O && O.preventDefault && bn(O.preventDefault) && O.preventDefault(),
        O && O.stopPropagation && bn(O.stopPropagation) && O.stopPropagation(),
        j();
    }),
    St = S.useCallback(
      function (O) {
        return {
          value: Ht(k.values, O),
          error: Ht(k.errors, O),
          touched: !!Ht(k.touched, O),
          initialValue: Ht(g.current, O),
          initialTouched: !!Ht(v.current, O),
          initialError: Ht(p.current, O),
        };
      },
      [k.errors, k.touched, k.values],
    ),
    _e = S.useCallback(
      function (O) {
        return {
          setValue: function (H, X) {
            return Y(O, H, X);
          },
          setTouched: function (H, X) {
            return ve(O, H, X);
          },
          setError: function (H) {
            return q(O, H);
          },
        };
      },
      [Y, ve, q],
    ),
    je = S.useCallback(
      function (O) {
        var M = Kc(O),
          H = M ? O.name : O,
          X = Ht(k.values, H),
          Z = { name: H, value: X, onChange: te, onBlur: Oe };
        if (M) {
          var Q = O.type,
            oe = O.value,
            He = O.as,
            Vt = O.multiple;
          Q === "checkbox"
            ? oe === void 0
              ? (Z.checked = !!X)
              : ((Z.checked = !!(Array.isArray(X) && ~X.indexOf(oe))),
                (Z.value = oe))
            : Q === "radio"
              ? ((Z.checked = X === oe), (Z.value = oe))
              : He === "select" &&
                Vt &&
                ((Z.value = Z.value || []), (Z.multiple = !0));
        }
        return Z;
      },
      [Oe, te, k.values],
    ),
    Ve = S.useMemo(
      function () {
        return !ro(g.current, k.values);
      },
      [g.current, k.values],
    ),
    Tt = S.useMemo(
      function () {
        return typeof a < "u"
          ? Ve
            ? k.errors && Object.keys(k.errors).length === 0
            : a !== !1 && bn(a)
              ? a(f)
              : a
          : k.errors && Object.keys(k.errors).length === 0;
      },
      [a, Ve, k.errors, f],
    ),
    ke = lt({}, k, {
      initialValues: g.current,
      initialErrors: p.current,
      initialTouched: v.current,
      initialStatus: x.current,
      handleBlur: Oe,
      handleChange: te,
      handleReset: be,
      handleSubmit: fe,
      resetForm: j,
      setErrors: F,
      setFormikState: rt,
      setFieldTouched: ve,
      setFieldValue: Y,
      setFieldError: q,
      setStatus: $e,
      setSubmitting: se,
      setTouched: A,
      setValues: W,
      submitForm: ye,
      validateForm: N,
      validateField: _,
      isValid: Tt,
      dirty: Ve,
      unregisterField: K,
      registerField: B,
      getFieldProps: je,
      getFieldMeta: St,
      getFieldHelpers: _e,
      validateOnBlur: o,
      validateOnChange: n,
      validateOnMount: s,
    });
  return ke;
}
function j4(e) {
  var t = {};
  if (e.inner) {
    if (e.inner.length === 0) return ho(t, e.path, e.message);
    for (
      var o = e.inner,
        n = Array.isArray(o),
        r = 0,
        o = n ? o : o[Symbol.iterator]();
      ;

    ) {
      var i;
      if (n) {
        if (r >= o.length) break;
        i = o[r++];
      } else {
        if (((r = o.next()), r.done)) break;
        i = r.value;
      }
      var s = i;
      Ht(t, s.path) || (t = ho(t, s.path, s.message));
    }
  }
  return t;
}
function F4(e, t, n, r) {
  n === void 0 && (n = !1);
  var o = Ap(e);
  return t[n ? "validateSync" : "validate"](o, { abortEarly: !1, context: o });
}
function Ap(e) {
  var t = Array.isArray(e) ? [] : {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      var r = String(n);
      Array.isArray(e[r]) === !0
        ? (t[r] = e[r].map(function (o) {
            return Array.isArray(o) === !0 || $v(o)
              ? Ap(o)
              : o !== ""
                ? o
                : void 0;
          }))
        : $v(e[r])
          ? (t[r] = Ap(e[r]))
          : (t[r] = e[r] !== "" ? e[r] : void 0);
    }
  return t;
}
function D4(e, t, n) {
  var r = e.slice();
  return (
    t.forEach(function (i, s) {
      if (typeof r[s] > "u") {
        var a = n.clone !== !1,
          l = a && n.isMergeableObject(i);
        r[s] = l ? kp(Array.isArray(i) ? [] : {}, i, n) : i;
      } else
        n.isMergeableObject(i)
          ? (r[s] = kp(e[s], i, n))
          : e.indexOf(i) === -1 && r.push(i);
    }),
    r
  );
}
function B4(e) {
  return Array.from(e)
    .filter(function (t) {
      return t.selected;
    })
    .map(function (t) {
      return t.value;
    });
}
function z4(e, t, n) {
  if (typeof e == "boolean") return !!t;
  var r = [],
    o = !1,
    i = -1;
  if (Array.isArray(e)) (r = e), (i = e.indexOf(n)), (o = i >= 0);
  else if (!n || n == "true" || n == "false") return !!t;
  return t && n && !o
    ? r.concat(n)
    : o
      ? r.slice(0, i).concat(r.slice(i + 1))
      : r;
}
var U4 =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u"
    ? S.useLayoutEffect
    : S.useEffect;
function an(e) {
  var t = S.useRef(e);
  return (
    U4(function () {
      t.current = e;
    }),
    S.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return t.current.apply(void 0, r);
    }, [])
  );
}
var W4 = S.forwardRef(function (e, t) {
  var n = e.action,
    r = Dx(e, ["action"]),
    o = n ?? "#",
    i = L4(),
    s = i.handleReset,
    a = i.handleSubmit;
  return S.createElement(
    "form",
    lt({ onSubmit: a, ref: t, onReset: s, action: o }, r),
  );
});
W4.displayName = "Form";
const V4 = () => {
    const e = Ao(),
      t = Dr((r) => r.auth.isLoggedIn);
    return {
      formik: N4({
        initialValues: { email: "", password: "", rememberMe: !1 },
        validate: (r) => {
          const o = {};
          return (
            r.email
              ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(r.email) ||
                (o.email = "Invalid email address")
              : (o.email = "Required"),
            r.password
              ? r.password.length < 3 &&
                (o.password = "Must be more five symbols")
              : (o.password = "Required"),
            o
          );
        },
        onSubmit: (r) => {
          e(yi.login(r));
        },
      }),
      isLoggedIn: t,
    };
  },
  H4 = () => {
    const { formik: e, isLoggedIn: t } = V4();
    return t
      ? R.jsx(Cm, { to: "/" })
      : R.jsx(iu, {
          container: !0,
          justifyContent: "center",
          component: "div",
          children: R.jsx(iu, {
            justifyContent: "center",
            component: "div",
            children: R.jsxs(Ub, {
              children: [
                R.jsxs(Wb, {
                  children: [
                    R.jsxs("p", {
                      children: [
                        "To log in get registered",
                        R.jsx("a", {
                          href: "https://social-network.samuraijs.com/",
                          target: "_blank",
                          rel: "noreferrer",
                          children: "here",
                        }),
                      ],
                    }),
                    R.jsx("p", {
                      children: "or use common test account credentials:",
                    }),
                    R.jsx("p", { children: "Email: free@samuraijs.com" }),
                    R.jsx("p", { children: "Password: free" }),
                  ],
                }),
                R.jsx("form", {
                  onSubmit: e.handleSubmit,
                  children: R.jsxs(tA, {
                    children: [
                      R.jsx(uu, {
                        label: "Email",
                        margin: "normal",
                        error: e.touched.email && !!e.errors.email,
                        helperText: e.touched.email && e.errors.email,
                        ...e.getFieldProps("email"),
                      }),
                      R.jsx(uu, {
                        type: "password",
                        label: "Password",
                        margin: "normal",
                        error: e.touched.password && !!e.errors.password,
                        helperText: e.touched.password && e.errors.password,
                        ...e.getFieldProps("password"),
                      }),
                      R.jsx(Y$, {
                        label: "Remember me",
                        control: R.jsx(Bb, {
                          name: "rememberMe",
                          checked: e.values.rememberMe,
                          onChange: e.handleChange,
                        }),
                      }),
                      R.jsx(Tc, {
                        type: "submit",
                        variant: "contained",
                        color: "primary",
                        children: "Login",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
  };
function K4() {
  const e = Dr((r) => r.app.status),
    t = Dr((r) => r.app.isInitialized),
    n = Ao();
  return (
    S.useEffect(() => {
      n(yi.initialized());
    }, []),
    t
      ? R.jsxs(R.Fragment, {
          children: [
            e === "loading" && R.jsx(TA, {}),
            R.jsx(Pj, {}),
            R.jsx(Oj, {}),
            R.jsx(m$, {
              children: R.jsxs(BN, {
                children: [
                  R.jsx(hs, { path: "/", element: R.jsx(ej, {}) }),
                  R.jsx(hs, { path: "/login", element: R.jsx(H4, {}) }),
                  R.jsx(hs, {
                    path: "/404",
                    element: R.jsx("h1", { children: "PAGE NOT FOUND 404 " }),
                  }),
                  R.jsx(hs, { path: "*", element: R.jsx(Cm, { to: "/404" }) }),
                ],
              }),
            }),
          ],
        })
      : R.jsx("div", {
          style: {
            position: "fixed",
            top: "30%",
            textAlign: "center",
            width: "100%",
          },
          children: R.jsx(f$, {}),
        })
  );
}
const zx = xL({ reducer: { tasks: vM, todolists: wM, app: zL, auth: aj } });
window.store = zx;
const ie = (e) => typeof e == "string",
  os = () => {
    let e, t;
    const n = new Promise((r, o) => {
      (e = r), (t = o);
    });
    return (n.resolve = e), (n.reject = t), n;
  },
  r0 = (e) => (e == null ? "" : "" + e),
  G4 = (e, t, n) => {
    e.forEach((r) => {
      t[r] && (n[r] = t[r]);
    });
  },
  q4 = /###/g,
  o0 = (e) => (e && e.indexOf("###") > -1 ? e.replace(q4, ".") : e),
  i0 = (e) => !e || ie(e),
  Is = (e, t, n) => {
    const r = ie(t) ? t.split(".") : t;
    let o = 0;
    for (; o < r.length - 1; ) {
      if (i0(e)) return {};
      const i = o0(r[o]);
      !e[i] && n && (e[i] = new n()),
        Object.prototype.hasOwnProperty.call(e, i) ? (e = e[i]) : (e = {}),
        ++o;
    }
    return i0(e) ? {} : { obj: e, k: o0(r[o]) };
  },
  s0 = (e, t, n) => {
    const { obj: r, k: o } = Is(e, t, Object);
    if (r !== void 0 || t.length === 1) {
      r[o] = n;
      return;
    }
    let i = t[t.length - 1],
      s = t.slice(0, t.length - 1),
      a = Is(e, s, Object);
    for (; a.obj === void 0 && s.length; )
      (i = `${s[s.length - 1]}.${i}`),
        (s = s.slice(0, s.length - 1)),
        (a = Is(e, s, Object)),
        a != null &&
          a.obj &&
          typeof a.obj[`${a.k}.${i}`] < "u" &&
          (a.obj = void 0);
    a.obj[`${a.k}.${i}`] = n;
  },
  X4 = (e, t, n, r) => {
    const { obj: o, k: i } = Is(e, t, Object);
    (o[i] = o[i] || []), o[i].push(n);
  },
  bu = (e, t) => {
    const { obj: n, k: r } = Is(e, t);
    if (n) return n[r];
  },
  Q4 = (e, t, n) => {
    const r = bu(e, n);
    return r !== void 0 ? r : bu(t, n);
  },
  Ux = (e, t, n) => {
    for (const r in t)
      r !== "__proto__" &&
        r !== "constructor" &&
        (r in e
          ? ie(e[r]) ||
            e[r] instanceof String ||
            ie(t[r]) ||
            t[r] instanceof String
            ? n && (e[r] = t[r])
            : Ux(e[r], t[r], n)
          : (e[r] = t[r]));
    return e;
  },
  Ko = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Y4 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
const J4 = (e) => (ie(e) ? e.replace(/[&<>"'\/]/g, (t) => Y4[t]) : e);
class Z4 {
  constructor(t) {
    (this.capacity = t), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0) return n;
    const r = new RegExp(t);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(t, r),
      this.regExpQueue.push(t),
      r
    );
  }
}
const eD = [" ", ",", "?", "!", ";"],
  tD = new Z4(20),
  nD = (e, t, n) => {
    (t = t || ""), (n = n || "");
    const r = eD.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
    if (r.length === 0) return !0;
    const o = tD.getRegExp(
      `(${r.map((s) => (s === "?" ? "\\?" : s)).join("|")})`,
    );
    let i = !o.test(e);
    if (!i) {
      const s = e.indexOf(n);
      s > 0 && !o.test(e.substring(0, s)) && (i = !0);
    }
    return i;
  },
  Ip = function (e, t) {
    let n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (!e) return;
    if (e[t]) return e[t];
    const r = t.split(n);
    let o = e;
    for (let i = 0; i < r.length; ) {
      if (!o || typeof o != "object") return;
      let s,
        a = "";
      for (let l = i; l < r.length; ++l)
        if ((l !== i && (a += n), (a += r[l]), (s = o[a]), s !== void 0)) {
          if (
            ["string", "number", "boolean"].indexOf(typeof s) > -1 &&
            l < r.length - 1
          )
            continue;
          i += l - i + 1;
          break;
        }
      o = s;
    }
    return o;
  },
  wu = (e) => (e == null ? void 0 : e.replace("_", "-")),
  rD = {
    type: "logger",
    log(e) {
      this.output("log", e);
    },
    warn(e) {
      this.output("warn", e);
    },
    error(e) {
      this.output("error", e);
    },
    output(e, t) {
      var n, r;
      (r =
        (n = console == null ? void 0 : console[e]) == null
          ? void 0
          : n.apply) == null || r.call(n, console, t);
    },
  };
class xu {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = n.prefix || "i18next:"),
      (this.logger = t || rD),
      (this.options = n),
      (this.debug = n.debug);
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, o) {
    return o && !this.debug
      ? null
      : (ie(t[0]) && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new xu(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    });
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new xu(this.logger, t)
    );
  }
}
var Bn = new xu();
class Gc {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return (
      t.split(" ").forEach((r) => {
        this.observers[r] || (this.observers[r] = new Map());
        const o = this.observers[r].get(n) || 0;
        this.observers[r].set(n, o + 1);
      }),
      this
    );
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
      o < n;
      o++
    )
      r[o - 1] = arguments[o];
    this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach((s) => {
        let [a, l] = s;
        for (let u = 0; u < l; u++) a(...r);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach((s) => {
          let [a, l] = s;
          for (let u = 0; u < l; u++) a.apply(a, [t, ...r]);
        });
  }
}
class a0 extends Gc {
  constructor(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ["translation"], defaultNS: "translation" };
    super(),
      (this.data = t || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    var u, c;
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i =
        o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
      s =
        o.ignoreJSONStructure !== void 0
          ? o.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let a;
    t.indexOf(".") > -1
      ? (a = t.split("."))
      : ((a = [t, n]),
        r &&
          (Array.isArray(r)
            ? a.push(...r)
            : ie(r) && i
              ? a.push(...r.split(i))
              : a.push(r)));
    const l = bu(this.data, a);
    return (
      !l &&
        !n &&
        !r &&
        t.indexOf(".") > -1 &&
        ((t = a[0]), (n = a[1]), (r = a.slice(2).join("."))),
      l || !s || !ie(r)
        ? l
        : Ip(
            (c = (u = this.data) == null ? void 0 : u[t]) == null
              ? void 0
              : c[n],
            r,
            i,
          )
    );
  }
  addResource(t, n, r, o) {
    let i =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const s =
      i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let a = [t, n];
    r && (a = a.concat(s ? r.split(s) : r)),
      t.indexOf(".") > -1 && ((a = t.split(".")), (o = n), (n = a[1])),
      this.addNamespaces(n),
      s0(this.data, a, o),
      i.silent || this.emit("added", t, n, r, o);
  }
  addResources(t, n, r) {
    let o =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const i in r)
      (ie(r[i]) || Array.isArray(r[i])) &&
        this.addResource(t, n, i, r[i], { silent: !0 });
    o.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, o, i) {
    let s =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      a = [t, n];
    t.indexOf(".") > -1 && ((a = t.split(".")), (o = r), (r = n), (n = a[1])),
      this.addNamespaces(n);
    let l = bu(this.data, a) || {};
    s.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      o ? Ux(l, r, i) : (l = { ...l, ...r }),
      s0(this.data, a, l),
      s.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n],
      this.removeNamespaces(n),
      this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return n || (n = this.options.defaultNS), this.getResource(t, n);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!((n && Object.keys(n)) || []).find(
      (o) => n[o] && Object.keys(n[o]).length > 0,
    );
  }
  toJSON() {
    return this.data;
  }
}
var Wx = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, o) {
    return (
      e.forEach((i) => {
        var s;
        t =
          ((s = this.processors[i]) == null ? void 0 : s.process(t, n, r, o)) ??
          t;
      }),
      t
    );
  },
};
const l0 = {};
class Cu extends Gc {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      G4(
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ],
        t,
        this,
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = Bn.create("translator"));
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    if (t == null) return !1;
    const r = this.resolve(t, n);
    return (r == null ? void 0 : r.res) !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const o =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let i = n.ns || this.options.defaultNS || [];
    const s = r && t.indexOf(r) > -1,
      a =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !nD(t, r, o);
    if (s && !a) {
      const l = t.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0) return { key: t, namespaces: ie(i) ? [i] : i };
      const u = t.split(r);
      (r !== o || (r === o && this.options.ns.indexOf(u[0]) > -1)) &&
        (i = u.shift()),
        (t = u.join(o));
    }
    return { key: t, namespaces: ie(i) ? [i] : i };
  }
  translate(t, n, r) {
    if (
      (typeof n != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == "object" && (n = { ...n }),
      n || (n = {}),
      t == null)
    )
      return "";
    Array.isArray(t) || (t = [String(t)]);
    const o =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      i =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: s, namespaces: a } = this.extractFromKey(t[t.length - 1], n),
      l = a[a.length - 1],
      u = n.lng || this.language,
      c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((u == null ? void 0 : u.toLowerCase()) === "cimode") {
      if (c) {
        const b = n.nsSeparator || this.options.nsSeparator;
        return o
          ? {
              res: `${l}${b}${s}`,
              usedKey: s,
              exactUsedKey: s,
              usedLng: u,
              usedNS: l,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${l}${b}${s}`;
      }
      return o
        ? {
            res: s,
            usedKey: s,
            exactUsedKey: s,
            usedLng: u,
            usedNS: l,
            usedParams: this.getUsedParamsDetails(n),
          }
        : s;
    }
    const d = this.resolve(t, n);
    let f = d == null ? void 0 : d.res;
    const g = (d == null ? void 0 : d.usedKey) || s,
      p = (d == null ? void 0 : d.exactUsedKey) || s,
      v = Object.prototype.toString.apply(f),
      x = ["[object Number]", "[object Function]", "[object RegExp]"],
      m = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      y = !this.i18nFormat || this.i18nFormat.handleAsObject,
      h = !ie(f) && typeof f != "boolean" && typeof f != "number";
    if (y && f && h && x.indexOf(v) < 0 && !(ie(m) && Array.isArray(f))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!",
          );
        const b = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(g, f, { ...n, ns: a })
          : `key '${s} (${this.language})' returned an object instead of string.`;
        return o
          ? ((d.res = b), (d.usedParams = this.getUsedParamsDetails(n)), d)
          : b;
      }
      if (i) {
        const b = Array.isArray(f),
          C = b ? [] : {},
          k = b ? p : g;
        for (const E in f)
          if (Object.prototype.hasOwnProperty.call(f, E)) {
            const T = `${k}${i}${E}`;
            (C[E] = this.translate(T, { ...n, joinArrays: !1, ns: a })),
              C[E] === T && (C[E] = f[E]);
          }
        f = C;
      }
    } else if (y && ie(m) && Array.isArray(f))
      (f = f.join(m)), f && (f = this.extendTranslation(f, t, n, r));
    else {
      let b = !1,
        C = !1;
      const k = n.count !== void 0 && !ie(n.count),
        E = Cu.hasDefaultValue(n),
        T = k ? this.pluralResolver.getSuffix(u, n.count, n) : "",
        $ =
          n.ordinal && k
            ? this.pluralResolver.getSuffix(u, n.count, { ordinal: !1 })
            : "",
        w = k && !n.ordinal && n.count === 0,
        P =
          (w && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${T}`] ||
          n[`defaultValue${$}`] ||
          n.defaultValue;
      !this.isValidLookup(f) && E && ((b = !0), (f = P)),
        this.isValidLookup(f) || ((C = !0), (f = s));
      const N =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          C
            ? void 0
            : f,
        j = E && P !== f && this.options.updateMissing;
      if (C || b || j) {
        if (
          (this.logger.log(j ? "updateKey" : "missingKey", u, l, s, j ? P : f),
          i)
        ) {
          const A = this.resolve(s, { ...n, keySeparator: !1 });
          A &&
            A.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
            );
        }
        let _ = [];
        const B = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language,
        );
        if (this.options.saveMissingTo === "fallback" && B && B[0])
          for (let A = 0; A < B.length; A++) _.push(B[A]);
        else
          this.options.saveMissingTo === "all"
            ? (_ = this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
              ))
            : _.push(n.lng || this.language);
        const K = (A, F, W) => {
          var Y;
          const q = E && W !== f ? W : N;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(A, l, F, q, j, n)
            : (Y = this.backendConnector) != null &&
              Y.saveMissing &&
              this.backendConnector.saveMissing(A, l, F, q, j, n),
            this.emit("missingKey", A, l, F, f);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && k
            ? _.forEach((A) => {
                const F = this.pluralResolver.getSuffixes(A, n);
                w &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  F.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  F.push(`${this.options.pluralSeparator}zero`),
                  F.forEach((W) => {
                    K([A], s + W, n[`defaultValue${W}`] || P);
                  });
              })
            : K(_, s, P));
      }
      (f = this.extendTranslation(f, t, n, d, r)),
        C &&
          f === s &&
          this.options.appendNamespaceToMissingKey &&
          (f = `${l}:${s}`),
        (C || b) &&
          this.options.parseMissingKeyHandler &&
          (f = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${l}:${s}` : s,
            b ? f : void 0,
          ));
    }
    return o
      ? ((d.res = f), (d.usedParams = this.getUsedParamsDetails(n)), d)
      : f;
  }
  extendTranslation(t, n, r, o, i) {
    var u, c;
    var s = this;
    if ((u = this.i18nFormat) != null && u.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || o.usedLng,
        o.usedNS,
        o.usedKey,
        { resolved: o },
      );
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: { ...this.options.interpolation, ...r.interpolation },
        });
      const d =
        ie(t) &&
        (((c = r == null ? void 0 : r.interpolation) == null
          ? void 0
          : c.skipOnVariables) !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let f;
      if (d) {
        const p = t.match(this.interpolator.nestingRegexp);
        f = p && p.length;
      }
      let g = r.replace && !ie(r.replace) ? r.replace : r;
      if (
        (this.options.interpolation.defaultVariables &&
          (g = { ...this.options.interpolation.defaultVariables, ...g }),
        (t = this.interpolator.interpolate(
          t,
          g,
          r.lng || this.language || o.usedLng,
          r,
        )),
        d)
      ) {
        const p = t.match(this.interpolator.nestingRegexp),
          v = p && p.length;
        f < v && (r.nest = !1);
      }
      !r.lng && o && o.res && (r.lng = this.language || o.usedLng),
        r.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (
                var p = arguments.length, v = new Array(p), x = 0;
                x < p;
                x++
              )
                v[x] = arguments[x];
              return (i == null ? void 0 : i[0]) === v[0] && !r.context
                ? (s.logger.warn(
                    `It seems you are nesting recursively key: ${v[0]} in key: ${n[0]}`,
                  ),
                  null)
                : s.translate(...v, n);
            },
            r,
          )),
        r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess,
      l = ie(a) ? [a] : a;
    return (
      t != null &&
        l != null &&
        l.length &&
        r.applyPostProcessor !== !1 &&
        (t = Wx.handle(
          l,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...o,
                  usedParams: this.getUsedParamsDetails(r),
                },
                ...r,
              }
            : r,
          this,
        )),
      t
    );
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      o,
      i,
      s,
      a;
    return (
      ie(t) && (t = [t]),
      t.forEach((l) => {
        if (this.isValidLookup(r)) return;
        const u = this.extractFromKey(l, n),
          c = u.key;
        o = c;
        let d = u.namespaces;
        this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
        const f = n.count !== void 0 && !ie(n.count),
          g = f && !n.ordinal && n.count === 0,
          p =
            n.context !== void 0 &&
            (ie(n.context) || typeof n.context == "number") &&
            n.context !== "",
          v = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng,
              );
        d.forEach((x) => {
          var m, y;
          this.isValidLookup(r) ||
            ((a = x),
            !l0[`${v[0]}-${x}`] &&
              (m = this.utils) != null &&
              m.hasLoadedNamespace &&
              !((y = this.utils) != null && y.hasLoadedNamespace(a)) &&
              ((l0[`${v[0]}-${x}`] = !0),
              this.logger.warn(
                `key "${o}" for languages "${v.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
              )),
            v.forEach((h) => {
              var k;
              if (this.isValidLookup(r)) return;
              s = h;
              const b = [c];
              if ((k = this.i18nFormat) != null && k.addLookupKeys)
                this.i18nFormat.addLookupKeys(b, c, h, x, n);
              else {
                let E;
                f && (E = this.pluralResolver.getSuffix(h, n.count, n));
                const T = `${this.options.pluralSeparator}zero`,
                  $ = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (f &&
                    (b.push(c + E),
                    n.ordinal &&
                      E.indexOf($) === 0 &&
                      b.push(c + E.replace($, this.options.pluralSeparator)),
                    g && b.push(c + T)),
                  p)
                ) {
                  const w = `${c}${this.options.contextSeparator}${n.context}`;
                  b.push(w),
                    f &&
                      (b.push(w + E),
                      n.ordinal &&
                        E.indexOf($) === 0 &&
                        b.push(w + E.replace($, this.options.pluralSeparator)),
                      g && b.push(w + T));
                }
              }
              let C;
              for (; (C = b.pop()); )
                this.isValidLookup(r) ||
                  ((i = C), (r = this.getResource(h, x, C, n)));
            }));
        });
      }),
      { res: r, usedKey: o, exactUsedKey: i, usedLng: s, usedNS: a }
    );
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === "")
    );
  }
  getResource(t, n, r) {
    var i;
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (i = this.i18nFormat) != null && i.getResource
      ? this.i18nFormat.getResource(t, n, r, o)
      : this.resourceStore.getResource(t, n, r, o);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = [
        "defaultValue",
        "ordinal",
        "context",
        "replace",
        "lng",
        "lngs",
        "fallbackLng",
        "ns",
        "keySeparator",
        "nsSeparator",
        "returnObjects",
        "returnDetails",
        "joinArrays",
        "postProcess",
        "interpolation",
      ],
      r = t.replace && !ie(t.replace);
    let o = r ? t.replace : t;
    if (
      (r && typeof t.count < "u" && (o.count = t.count),
      this.options.interpolation.defaultVariables &&
        (o = { ...this.options.interpolation.defaultVariables, ...o }),
      !r)
    ) {
      o = { ...o };
      for (const i of n) delete o[i];
    }
    return o;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t)
      if (
        Object.prototype.hasOwnProperty.call(t, r) &&
        n === r.substring(0, n.length) &&
        t[r] !== void 0
      )
        return !0;
    return !1;
  }
}
class u0 {
  constructor(t) {
    (this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Bn.create("languageUtils"));
  }
  getScriptPartFromCode(t) {
    if (((t = wu(t)), !t || t.indexOf("-") < 0)) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (((t = wu(t)), !t || t.indexOf("-") < 0)) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (ie(t) && t.indexOf("-") > -1) {
      let n = Intl.getCanonicalLocales(t)[0];
      return (
        n && this.options.lowerCaseLng && (n = n.toLowerCase()),
        n || (this.options.lowerCaseLng ? t.toLowerCase() : t)
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? t.toLowerCase()
      : t;
  }
  isSupportedCode(t) {
    return (
      (this.options.load === "languageOnly" ||
        this.options.nonExplicitSupportedLngs) &&
        (t = this.getLanguagePartFromCode(t)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(t) > -1
    );
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return (
      t.forEach((r) => {
        if (n) return;
        const o = this.formatLanguageCode(r);
        (!this.options.supportedLngs || this.isSupportedCode(o)) && (n = o);
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((r) => {
          if (n) return;
          const o = this.getLanguagePartFromCode(r);
          if (this.isSupportedCode(o)) return (n = o);
          n = this.options.supportedLngs.find((i) => {
            if (i === o) return i;
            if (
              !(i.indexOf("-") < 0 && o.indexOf("-") < 0) &&
              ((i.indexOf("-") > 0 &&
                o.indexOf("-") < 0 &&
                i.substring(0, i.indexOf("-")) === o) ||
                (i.indexOf(o) === 0 && o.length > 1))
            )
              return i;
          });
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    );
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (
      (typeof t == "function" && (t = t(n)),
      ie(t) && (t = [t]),
      Array.isArray(t))
    )
      return t;
    if (!n) return t.default || [];
    let r = t[n];
    return (
      r || (r = t[this.getScriptPartFromCode(n)]),
      r || (r = t[this.formatLanguageCode(n)]),
      r || (r = t[this.getLanguagePartFromCode(n)]),
      r || (r = t.default),
      r || []
    );
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
      o = [],
      i = (s) => {
        s &&
          (this.isSupportedCode(s)
            ? o.push(s)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${s}`,
              ));
      };
    return (
      ie(t) && (t.indexOf("-") > -1 || t.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            i(this.formatLanguageCode(t)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            i(this.getScriptPartFromCode(t)),
          this.options.load !== "currentOnly" &&
            i(this.getLanguagePartFromCode(t)))
        : ie(t) && i(this.formatLanguageCode(t)),
      r.forEach((s) => {
        o.indexOf(s) < 0 && i(this.formatLanguageCode(s));
      }),
      o
    );
  }
}
const c0 = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  d0 = {
    select: (e) => (e === 1 ? "one" : "other"),
    resolvedOptions: () => ({ pluralCategories: ["one", "other"] }),
  };
class oD {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = t),
      (this.options = n),
      (this.logger = Bn.create("pluralResolver")),
      (this.pluralRulesCache = {});
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = wu(t === "dev" ? "en" : t),
      o = n.ordinal ? "ordinal" : "cardinal",
      i = JSON.stringify({ cleanedCode: r, type: o });
    if (i in this.pluralRulesCache) return this.pluralRulesCache[i];
    let s;
    try {
      s = new Intl.PluralRules(r, { type: o });
    } catch {
      if (!Intl)
        return (
          this.logger.error("No Intl support, please use an Intl polyfill!"), d0
        );
      if (!t.match(/-|_/)) return d0;
      const l = this.languageUtils.getLanguagePartFromCode(t);
      s = this.getRule(l, n);
    }
    return (this.pluralRulesCache[i] = s), s;
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = this.getRule(t, n);
    return (
      r || (r = this.getRule("dev", n)),
      (r == null ? void 0 : r.resolvedOptions().pluralCategories.length) > 1
    );
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((o) => `${n}${o}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = this.getRule(t, n);
    return (
      r || (r = this.getRule("dev", n)),
      r
        ? r
            .resolvedOptions()
            .pluralCategories.sort((o, i) => c0[o] - c0[i])
            .map(
              (o) =>
                `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`,
            )
        : []
    );
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const o = this.getRule(t, r);
    return o
      ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${o.select(n)}`
      : (this.logger.warn(`no plural rule found for: ${t}`),
        this.getSuffix("dev", n, r));
  }
}
const f0 = function (e, t, n) {
    let r =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
      o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      i = Q4(e, t, n);
    return (
      !i &&
        o &&
        ie(n) &&
        ((i = Ip(e, n, r)), i === void 0 && (i = Ip(t, n, r))),
      i
    );
  },
  Wd = (e) => e.replace(/\$/g, "$$$$");
class iD {
  constructor() {
    var n;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Bn.create("interpolator")),
      (this.options = t),
      (this.format =
        ((n = t == null ? void 0 : t.interpolation) == null
          ? void 0
          : n.format) || ((r) => r)),
      this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: o,
      prefix: i,
      prefixEscaped: s,
      suffix: a,
      suffixEscaped: l,
      formatSeparator: u,
      unescapeSuffix: c,
      unescapePrefix: d,
      nestingPrefix: f,
      nestingPrefixEscaped: g,
      nestingSuffix: p,
      nestingSuffixEscaped: v,
      nestingOptionsSeparator: x,
      maxReplaces: m,
      alwaysFormat: y,
    } = t.interpolation;
    (this.escape = n !== void 0 ? n : J4),
      (this.escapeValue = r !== void 0 ? r : !0),
      (this.useRawValueToEscape = o !== void 0 ? o : !1),
      (this.prefix = i ? Ko(i) : s || "{{"),
      (this.suffix = a ? Ko(a) : l || "}}"),
      (this.formatSeparator = u || ","),
      (this.unescapePrefix = c ? "" : d || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : c || ""),
      (this.nestingPrefix = f ? Ko(f) : g || Ko("$t(")),
      (this.nestingSuffix = p ? Ko(p) : v || Ko(")")),
      (this.nestingOptionsSeparator = x || ","),
      (this.maxReplaces = m || 1e3),
      (this.alwaysFormat = y !== void 0 ? y : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) =>
      (n == null ? void 0 : n.source) === r
        ? ((n.lastIndex = 0), n)
        : new RegExp(r, "g");
    (this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
      )),
      (this.nestingRegexp = t(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`,
      ));
  }
  interpolate(t, n, r, o) {
    var g;
    let i, s, a;
    const l =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      u = (p) => {
        if (p.indexOf(this.formatSeparator) < 0) {
          const y = f0(
            n,
            l,
            p,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          );
          return this.alwaysFormat
            ? this.format(y, void 0, r, { ...o, ...n, interpolationkey: p })
            : y;
        }
        const v = p.split(this.formatSeparator),
          x = v.shift().trim(),
          m = v.join(this.formatSeparator).trim();
        return this.format(
          f0(
            n,
            l,
            x,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          ),
          m,
          r,
          { ...o, ...n, interpolationkey: x },
        );
      };
    this.resetRegExp();
    const c =
        (o == null ? void 0 : o.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      d =
        ((g = o == null ? void 0 : o.interpolation) == null
          ? void 0
          : g.skipOnVariables) !== void 0
          ? o.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (p) => Wd(p) },
        {
          regex: this.regexp,
          safeValue: (p) => (this.escapeValue ? Wd(this.escape(p)) : Wd(p)),
        },
      ].forEach((p) => {
        for (a = 0; (i = p.regex.exec(t)); ) {
          const v = i[1].trim();
          if (((s = u(v)), s === void 0))
            if (typeof c == "function") {
              const m = c(t, i, o);
              s = ie(m) ? m : "";
            } else if (o && Object.prototype.hasOwnProperty.call(o, v)) s = "";
            else if (d) {
              s = i[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${v} for interpolating ${t}`,
              ),
                (s = "");
          else !ie(s) && !this.useRawValueToEscape && (s = r0(s));
          const x = p.safeValue(s);
          if (
            ((t = t.replace(i[0], x)),
            d
              ? ((p.regex.lastIndex += s.length),
                (p.regex.lastIndex -= i[0].length))
              : (p.regex.lastIndex = 0),
            a++,
            a >= this.maxReplaces)
          )
            break;
        }
      }),
      t
    );
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      o,
      i,
      s;
    const a = (l, u) => {
      const c = this.nestingOptionsSeparator;
      if (l.indexOf(c) < 0) return l;
      const d = l.split(new RegExp(`${c}[ ]*{`));
      let f = `{${d[1]}`;
      (l = d[0]), (f = this.interpolate(f, s));
      const g = f.match(/'/g),
        p = f.match(/"/g);
      ((((g == null ? void 0 : g.length) ?? 0) % 2 === 0 && !p) ||
        p.length % 2 !== 0) &&
        (f = f.replace(/'/g, '"'));
      try {
        (s = JSON.parse(f)), u && (s = { ...u, ...s });
      } catch (v) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${l}`,
            v,
          ),
          `${l}${c}${f}`
        );
      }
      return (
        s.defaultValue &&
          s.defaultValue.indexOf(this.prefix) > -1 &&
          delete s.defaultValue,
        l
      );
    };
    for (; (o = this.nestingRegexp.exec(t)); ) {
      let l = [];
      (s = { ...r }),
        (s = s.replace && !ie(s.replace) ? s.replace : s),
        (s.applyPostProcessor = !1),
        delete s.defaultValue;
      let u = !1;
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const c = o[1].split(this.formatSeparator).map((d) => d.trim());
        (o[1] = c.shift()), (l = c), (u = !0);
      }
      if (((i = n(a.call(this, o[1].trim(), s), s)), i && o[0] === t && !ie(i)))
        return i;
      ie(i) || (i = r0(i)),
        i ||
          (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),
          (i = "")),
        u &&
          (i = l.reduce(
            (c, d) =>
              this.format(c, d, r.lng, { ...r, interpolationkey: o[1].trim() }),
            i.trim(),
          )),
        (t = t.replace(o[0], i)),
        (this.regexp.lastIndex = 0);
    }
    return t;
  }
}
const sD = (e) => {
    let t = e.toLowerCase().trim();
    const n = {};
    if (e.indexOf("(") > -1) {
      const r = e.split("(");
      t = r[0].toLowerCase().trim();
      const o = r[1].substring(0, r[1].length - 1);
      t === "currency" && o.indexOf(":") < 0
        ? n.currency || (n.currency = o.trim())
        : t === "relativetime" && o.indexOf(":") < 0
          ? n.range || (n.range = o.trim())
          : o.split(";").forEach((s) => {
              if (s) {
                const [a, ...l] = s.split(":"),
                  u = l
                    .join(":")
                    .trim()
                    .replace(/^'+|'+$/g, ""),
                  c = a.trim();
                n[c] || (n[c] = u),
                  u === "false" && (n[c] = !1),
                  u === "true" && (n[c] = !0),
                  isNaN(u) || (n[c] = parseInt(u, 10));
              }
            });
    }
    return { formatName: t, formatOptions: n };
  },
  Go = (e) => {
    const t = {};
    return (n, r, o) => {
      let i = o;
      o &&
        o.interpolationkey &&
        o.formatParams &&
        o.formatParams[o.interpolationkey] &&
        o[o.interpolationkey] &&
        (i = { ...i, [o.interpolationkey]: void 0 });
      const s = r + JSON.stringify(i);
      let a = t[s];
      return a || ((a = e(wu(r), o)), (t[s] = a)), a(n);
    };
  };
class aD {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Bn.create("formatter")),
      (this.options = t),
      (this.formats = {
        number: Go((n, r) => {
          const o = new Intl.NumberFormat(n, { ...r });
          return (i) => o.format(i);
        }),
        currency: Go((n, r) => {
          const o = new Intl.NumberFormat(n, { ...r, style: "currency" });
          return (i) => o.format(i);
        }),
        datetime: Go((n, r) => {
          const o = new Intl.DateTimeFormat(n, { ...r });
          return (i) => o.format(i);
        }),
        relativetime: Go((n, r) => {
          const o = new Intl.RelativeTimeFormat(n, { ...r });
          return (i) => o.format(i, r.range || "day");
        }),
        list: Go((n, r) => {
          const o = new Intl.ListFormat(n, { ...r });
          return (i) => o.format(i);
        }),
      }),
      this.init(t);
  }
  init(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    this.formatSeparator = n.interpolation.formatSeparator || ",";
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = Go(n);
  }
  format(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = n.split(this.formatSeparator);
    if (
      i.length > 1 &&
      i[0].indexOf("(") > 1 &&
      i[0].indexOf(")") < 0 &&
      i.find((a) => a.indexOf(")") > -1)
    ) {
      const a = i.findIndex((l) => l.indexOf(")") > -1);
      i[0] = [i[0], ...i.splice(1, a)].join(this.formatSeparator);
    }
    return i.reduce((a, l) => {
      var d;
      const { formatName: u, formatOptions: c } = sD(l);
      if (this.formats[u]) {
        let f = a;
        try {
          const g =
              ((d = o == null ? void 0 : o.formatParams) == null
                ? void 0
                : d[o.interpolationkey]) || {},
            p = g.locale || g.lng || o.locale || o.lng || r;
          f = this.formats[u](a, p, { ...c, ...o, ...g });
        } catch (g) {
          this.logger.warn(g);
        }
        return f;
      } else this.logger.warn(`there was no format function for ${u}`);
      return a;
    }, t);
  }
}
const lD = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class uD extends Gc {
  constructor(t, n, r) {
    var i, s;
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = o),
      (this.logger = Bn.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = o.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5),
      (this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      (s = (i = this.backend) == null ? void 0 : i.init) == null ||
        s.call(i, r, o.backend, o);
  }
  queueLoad(t, n, r, o) {
    const i = {},
      s = {},
      a = {},
      l = {};
    return (
      t.forEach((u) => {
        let c = !0;
        n.forEach((d) => {
          const f = `${u}|${d}`;
          !r.reload && this.store.hasResourceBundle(u, d)
            ? (this.state[f] = 2)
            : this.state[f] < 0 ||
              (this.state[f] === 1
                ? s[f] === void 0 && (s[f] = !0)
                : ((this.state[f] = 1),
                  (c = !1),
                  s[f] === void 0 && (s[f] = !0),
                  i[f] === void 0 && (i[f] = !0),
                  l[d] === void 0 && (l[d] = !0)));
        }),
          c || (a[u] = !0);
      }),
      (Object.keys(i).length || Object.keys(s).length) &&
        this.queue.push({
          pending: s,
          pendingCount: Object.keys(s).length,
          loaded: {},
          errors: [],
          callback: o,
        }),
      {
        toLoad: Object.keys(i),
        pending: Object.keys(s),
        toLoadLanguages: Object.keys(a),
        toLoadNamespaces: Object.keys(l),
      }
    );
  }
  loaded(t, n, r) {
    const o = t.split("|"),
      i = o[0],
      s = o[1];
    n && this.emit("failedLoading", i, s, n),
      !n &&
        r &&
        this.store.addResourceBundle(i, s, r, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = n ? -1 : 2),
      n && r && (this.state[t] = 0);
    const a = {};
    this.queue.forEach((l) => {
      X4(l.loaded, [i], s),
        lD(l, t),
        n && l.errors.push(n),
        l.pendingCount === 0 &&
          !l.done &&
          (Object.keys(l.loaded).forEach((u) => {
            a[u] || (a[u] = {});
            const c = l.loaded[u];
            c.length &&
              c.forEach((d) => {
                a[u][d] === void 0 && (a[u][d] = !0);
              });
          }),
          (l.done = !0),
          l.errors.length ? l.callback(l.errors) : l.callback());
    }),
      this.emit("loaded", a),
      (this.queue = this.queue.filter((l) => !l.done));
  }
  read(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      i =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      s = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: o,
        wait: i,
        callback: s,
      });
      return;
    }
    this.readingCalls++;
    const a = (u, c) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const d = this.waitingReads.shift();
          this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
        }
        if (u && c && o < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, r, o + 1, i * 2, s);
          }, i);
          return;
        }
        s(u, c);
      },
      l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(t, n);
        u && typeof u.then == "function"
          ? u.then((c) => a(null, c)).catch(a)
          : a(null, u);
      } catch (u) {
        a(u);
      }
      return;
    }
    return l(t, n, a);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      o = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources.",
        ),
        o && o()
      );
    ie(t) && (t = this.languageUtils.toResolveHierarchy(t)), ie(n) && (n = [n]);
    const i = this.queueLoad(t, n, r, o);
    if (!i.toLoad.length) return i.pending.length || o(), null;
    i.toLoad.forEach((s) => {
      this.loadOne(s);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, { reload: !0 }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = t.split("|"),
      o = r[0],
      i = r[1];
    this.read(o, i, "read", void 0, void 0, (s, a) => {
      s &&
        this.logger.warn(
          `${n}loading namespace ${i} for language ${o} failed`,
          s,
        ),
        !s &&
          a &&
          this.logger.log(`${n}loaded namespace ${i} for language ${o}`, a),
        this.loaded(t, s, a);
    });
  }
  saveMissing(t, n, r, o, i) {
    var l, u, c, d, f;
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      a =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {};
    if (
      (u = (l = this.services) == null ? void 0 : l.utils) != null &&
      u.hasLoadedNamespace &&
      !(
        (d = (c = this.services) == null ? void 0 : c.utils) != null &&
        d.hasLoadedNamespace(n)
      )
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
      );
      return;
    }
    if (!(r == null || r === "")) {
      if ((f = this.backend) != null && f.create) {
        const g = { ...s, isUpdate: i },
          p = this.backend.create.bind(this.backend);
        if (p.length < 6)
          try {
            let v;
            p.length === 5 ? (v = p(t, n, r, o, g)) : (v = p(t, n, r, o)),
              v && typeof v.then == "function"
                ? v.then((x) => a(null, x)).catch(a)
                : a(null, v);
          } catch (v) {
            a(v);
          }
        else p(t, n, r, o, a, g);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, o);
    }
  }
}
const p0 = () => ({
    debug: !1,
    initAsync: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (e) => {
      let t = {};
      if (
        (typeof e[1] == "object" && (t = e[1]),
        ie(e[1]) && (t.defaultValue = e[1]),
        ie(e[2]) && (t.tDescription = e[2]),
        typeof e[2] == "object" || typeof e[3] == "object")
      ) {
        const n = e[3] || e[2];
        Object.keys(n).forEach((r) => {
          t[r] = n[r];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  h0 = (e) => {
    var t, n;
    return (
      ie(e.ns) && (e.ns = [e.ns]),
      ie(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]),
      ie(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]),
      ((n = (t = e.supportedLngs) == null ? void 0 : t.indexOf) == null
        ? void 0
        : n.call(t, "cimode")) < 0 &&
        (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
      typeof e.initImmediate == "boolean" && (e.initAsync = e.initImmediate),
      e
    );
  },
  ol = () => {},
  cD = (e) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
      typeof e[n] == "function" && (e[n] = e[n].bind(e));
    });
  };
class fa extends Gc {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = h0(t)),
      (this.services = {}),
      (this.logger = Bn),
      (this.modules = { external: [] }),
      cD(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initAsync) return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof n == "function" && ((r = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (ie(n.ns)
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const o = p0();
    (this.options = { ...o, ...this.options, ...h0(n) }),
      (this.options.interpolation = {
        ...o.interpolation,
        ...this.options.interpolation,
      }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator);
    const i = (c) => (c ? (typeof c == "function" ? new c() : c) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? Bn.init(i(this.modules.logger), this.options)
        : Bn.init(null, this.options);
      let c;
      this.modules.formatter ? (c = this.modules.formatter) : (c = aD);
      const d = new u0(this.options);
      this.store = new a0(this.options.resources, this.options);
      const f = this.services;
      (f.logger = Bn),
        (f.resourceStore = this.store),
        (f.languageUtils = d),
        (f.pluralResolver = new oD(d, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        c &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === o.interpolation.format) &&
          ((f.formatter = i(c)),
          f.formatter.init(f, this.options),
          (this.options.interpolation.format = f.formatter.format.bind(
            f.formatter,
          ))),
        (f.interpolator = new iD(this.options)),
        (f.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (f.backendConnector = new uD(
          i(this.modules.backend),
          f.resourceStore,
          f,
          this.options,
        )),
        f.backendConnector.on("*", function (g) {
          for (
            var p = arguments.length, v = new Array(p > 1 ? p - 1 : 0), x = 1;
            x < p;
            x++
          )
            v[x - 1] = arguments[x];
          t.emit(g, ...v);
        }),
        this.modules.languageDetector &&
          ((f.languageDetector = i(this.modules.languageDetector)),
          f.languageDetector.init &&
            f.languageDetector.init(f, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((f.i18nFormat = i(this.modules.i18nFormat)),
          f.i18nFormat.init && f.i18nFormat.init(this)),
        (this.translator = new Cu(this.services, this.options)),
        this.translator.on("*", function (g) {
          for (
            var p = arguments.length, v = new Array(p > 1 ? p - 1 : 0), x = 1;
            x < p;
            x++
          )
            v[x - 1] = arguments[x];
          t.emit(g, ...v);
        }),
        this.modules.external.forEach((g) => {
          g.init && g.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = ol),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const c = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng,
      );
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined",
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments);
        };
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments), t;
        };
      });
    const l = os(),
      u = () => {
        const c = (d, f) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                "init: i18next is already initialized. You should call init just once!",
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            l.resolve(f),
            r(d, f);
        };
        if (this.languages && !this.isInitialized)
          return c(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, c);
      };
    return (
      this.options.resources || !this.options.initAsync
        ? u()
        : setTimeout(u, 0),
      l
    );
  }
  loadResources(t) {
    var i, s;
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ol;
    const o = ie(t) ? t : this.language;
    if (
      (typeof t == "function" && (r = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        (o == null ? void 0 : o.toLowerCase()) === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r();
      const a = [],
        l = (u) => {
          if (!u || u === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(u).forEach((d) => {
            d !== "cimode" && a.indexOf(d) < 0 && a.push(d);
          });
        };
      o
        ? l(o)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((c) => l(c)),
        (s = (i = this.options.preload) == null ? void 0 : i.forEach) == null ||
          s.call(i, (u) => l(u)),
        this.services.backendConnector.load(a, this.options.ns, (u) => {
          !u &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            r(u);
        });
    } else r(null);
  }
  reloadResources(t, n, r) {
    const o = os();
    return (
      typeof t == "function" && ((r = t), (t = void 0)),
      typeof n == "function" && ((r = n), (n = void 0)),
      t || (t = this.languages),
      n || (n = this.options.ns),
      r || (r = ol),
      this.services.backendConnector.reload(t, n, (i) => {
        o.resolve(), r(i);
      }),
      o
    );
  }
  use(t) {
    if (!t)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()",
      );
    if (!t.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()",
      );
    return (
      t.type === "backend" && (this.modules.backend = t),
      (t.type === "logger" || (t.log && t.warn && t.error)) &&
        (this.modules.logger = t),
      t.type === "languageDetector" && (this.modules.languageDetector = t),
      t.type === "i18nFormat" && (this.modules.i18nFormat = t),
      t.type === "postProcessor" && Wx.addPostProcessor(t),
      t.type === "formatter" && (this.modules.formatter = t),
      t.type === "3rdParty" && this.modules.external.push(t),
      this
    );
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (
          !(["cimode", "dev"].indexOf(r) > -1) &&
          this.store.hasLanguageSomeTranslations(r)
        ) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const o = os();
    this.emit("languageChanging", t);
    const i = (l) => {
        (this.language = l),
          (this.languages = this.services.languageUtils.toResolveHierarchy(l)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(l);
      },
      s = (l, u) => {
        u
          ? (i(u),
            this.translator.changeLanguage(u),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", u),
            this.logger.log("languageChanged", u))
          : (this.isLanguageChangingTo = void 0),
          o.resolve(function () {
            return r.t(...arguments);
          }),
          n &&
            n(l, function () {
              return r.t(...arguments);
            });
      },
      a = (l) => {
        var c, d;
        !t && !l && this.services.languageDetector && (l = []);
        const u = ie(l)
          ? l
          : this.services.languageUtils.getBestMatchFromCodes(l);
        u &&
          (this.language || i(u),
          this.translator.language || this.translator.changeLanguage(u),
          (d =
            (c = this.services.languageDetector) == null
              ? void 0
              : c.cacheUserLanguage) == null || d.call(c, u)),
          this.loadResources(u, (f) => {
            s(f, u);
          });
      };
    return (
      !t &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? a(this.services.languageDetector.detect())
        : !t &&
            this.services.languageDetector &&
            this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(a)
            : this.services.languageDetector.detect(a)
          : a(t),
      o
    );
  }
  getFixedT(t, n, r) {
    var o = this;
    const i = function (s, a) {
      let l;
      if (typeof a != "object") {
        for (
          var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), d = 2;
          d < u;
          d++
        )
          c[d - 2] = arguments[d];
        l = o.options.overloadTranslationOptionHandler([s, a].concat(c));
      } else l = { ...a };
      (l.lng = l.lng || i.lng),
        (l.lngs = l.lngs || i.lngs),
        (l.ns = l.ns || i.ns),
        l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || r || i.keyPrefix);
      const f = o.options.keySeparator || ".";
      let g;
      return (
        l.keyPrefix && Array.isArray(s)
          ? (g = s.map((p) => `${l.keyPrefix}${f}${p}`))
          : (g = l.keyPrefix ? `${l.keyPrefix}${f}${s}` : s),
        o.t(g, l)
      );
    };
    return ie(t) ? (i.lng = t) : (i.lngs = t), (i.ns = n), (i.keyPrefix = r), i;
  }
  t() {
    var o;
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return (o = this.translator) == null ? void 0 : o.translate(...n);
  }
  exists() {
    var o;
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return (o = this.translator) == null ? void 0 : o.exists(...n);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18next was not initialized",
          this.languages,
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages,
        ),
        !1
      );
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      o = this.options ? this.options.fallbackLng : !1,
      i = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const s = (a, l) => {
      const u = this.services.backendConnector.state[`${a}|${l}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (n.precheck) {
      const a = n.precheck(this, s);
      if (a !== void 0) return a;
    }
    return !!(
      this.hasResourceBundle(r, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (s(r, t) && (!o || s(i, t)))
    );
  }
  loadNamespaces(t, n) {
    const r = os();
    return this.options.ns
      ? (ie(t) && (t = [t]),
        t.forEach((o) => {
          this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
        }),
        this.loadResources((o) => {
          r.resolve(), n && n(o);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = os();
    ie(t) && (t = [t]);
    const o = this.options.preload || [],
      i = t.filter(
        (s) =>
          o.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s),
      );
    return i.length
      ? ((this.options.preload = o.concat(i)),
        this.loadResources((s) => {
          r.resolve(), n && n(s);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  dir(t) {
    var o, i;
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (((o = this.languages) == null ? void 0 : o.length) > 0
            ? this.languages[0]
            : this.language)),
      !t)
    )
      return "rtl";
    const n = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ],
      r =
        ((i = this.services) == null ? void 0 : i.languageUtils) ||
        new u0(p0());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 ||
      t.toLowerCase().indexOf("-arab") > 1
      ? "rtl"
      : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new fa(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ol;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const o = { ...this.options, ...t, isClone: !0 },
      i = new fa(o);
    return (
      (t.debug !== void 0 || t.prefix !== void 0) &&
        (i.logger = i.logger.clone(t)),
      ["store", "services", "language"].forEach((a) => {
        i[a] = this[a];
      }),
      (i.services = { ...this.services }),
      (i.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }),
      r &&
        ((i.store = new a0(this.store.data, o)),
        (i.services.resourceStore = i.store)),
      (i.translator = new Cu(i.services, o)),
      i.translator.on("*", function (a) {
        for (
          var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), c = 1;
          c < l;
          c++
        )
          u[c - 1] = arguments[c];
        i.emit(a, ...u);
      }),
      i.init(o, n),
      (i.translator.options = o),
      (i.translator.backendConnector.services.utils = {
        hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
      }),
      i
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const Rt = fa.createInstance();
Rt.createInstance = fa.createInstance;
Rt.createInstance;
Rt.dir;
Rt.init;
Rt.loadResources;
Rt.reloadResources;
Rt.use;
Rt.changeLanguage;
Rt.getFixedT;
Rt.t;
Rt.exists;
Rt.setDefaultNamespace;
Rt.hasLoadedNamespace;
Rt.loadNamespaces;
Rt.loadLanguages;
function Lp(e) {
  "@babel/helpers - typeof";
  return (
    (Lp =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Lp(e)
  );
}
function Vx() {
  return (
    typeof XMLHttpRequest == "function" ||
    (typeof XMLHttpRequest > "u" ? "undefined" : Lp(XMLHttpRequest)) ===
      "object"
  );
}
function dD(e) {
  return !!e && typeof e.then == "function";
}
function fD(e) {
  return dD(e) ? e : Promise.resolve(e);
}
const pD = "modulepreload",
  hD = function (e) {
    return "/DayTrack-/" + e;
  },
  m0 = {},
  mD = function (t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const s = document.querySelector("meta[property=csp-nonce]"),
        a =
          (s == null ? void 0 : s.nonce) ||
          (s == null ? void 0 : s.getAttribute("nonce"));
      o = Promise.allSettled(
        n.map((l) => {
          if (((l = hD(l)), l in m0)) return;
          m0[l] = !0;
          const u = l.endsWith(".css"),
            c = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = u ? "stylesheet" : pD),
            u || (d.as = "script"),
            (d.crossOrigin = ""),
            (d.href = l),
            a && d.setAttribute("nonce", a),
            document.head.appendChild(d),
            u)
          )
            return new Promise((f, g) => {
              d.addEventListener("load", f),
                d.addEventListener("error", () =>
                  g(new Error(`Unable to preload CSS for ${l}`)),
                );
            });
        }),
      );
    }
    function i(s) {
      const a = new Event("vite:preloadError", { cancelable: !0 });
      if (((a.payload = s), window.dispatchEvent(a), !a.defaultPrevented))
        throw s;
    }
    return o.then((s) => {
      for (const a of s || []) a.status === "rejected" && i(a.reason);
      return t().catch(i);
    });
  };
function g0(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function y0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? g0(Object(n), !0).forEach(function (r) {
          gD(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : g0(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function gD(e, t, n) {
  return (
    (t = yD(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function yD(e) {
  var t = vD(e, "string");
  return Po(t) == "symbol" ? t : t + "";
}
function vD(e, t) {
  if (Po(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Po(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Po(e) {
  "@babel/helpers - typeof";
  return (
    (Po =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Po(e)
  );
}
var or;
typeof fetch == "function" &&
  (typeof global < "u" && global.fetch
    ? (or = global.fetch)
    : typeof window < "u" && window.fetch
      ? (or = window.fetch)
      : (or = fetch));
var pa;
Vx() &&
  (typeof global < "u" && global.XMLHttpRequest
    ? (pa = global.XMLHttpRequest)
    : typeof window < "u" &&
      window.XMLHttpRequest &&
      (pa = window.XMLHttpRequest));
var Eu;
typeof ActiveXObject == "function" &&
  (typeof global < "u" && global.ActiveXObject
    ? (Eu = global.ActiveXObject)
    : typeof window < "u" &&
      window.ActiveXObject &&
      (Eu = window.ActiveXObject));
typeof or != "function" && (or = void 0);
if (!or && !pa && !Eu)
  try {
    mD(() => import("./browser-ponyfill-rMQb6noz.js").then((e) => e.b), [])
      .then(function (e) {
        or = e.default;
      })
      .catch(function () {});
  } catch {}
var _p = function (t, n) {
    if (n && Po(n) === "object") {
      var r = "";
      for (var o in n)
        r += "&" + encodeURIComponent(o) + "=" + encodeURIComponent(n[o]);
      if (!r) return t;
      t = t + (t.indexOf("?") !== -1 ? "&" : "?") + r.slice(1);
    }
    return t;
  },
  v0 = function (t, n, r, o) {
    var i = function (l) {
      if (!l.ok) return r(l.statusText || "Error", { status: l.status });
      l.text()
        .then(function (u) {
          r(null, { status: l.status, data: u });
        })
        .catch(r);
    };
    if (o) {
      var s = o(t, n);
      if (s instanceof Promise) {
        s.then(i).catch(r);
        return;
      }
    }
    typeof fetch == "function"
      ? fetch(t, n).then(i).catch(r)
      : or(t, n).then(i).catch(r);
  },
  S0 = !1,
  SD = function (t, n, r, o) {
    t.queryStringParams && (n = _p(n, t.queryStringParams));
    var i = y0(
      {},
      typeof t.customHeaders == "function"
        ? t.customHeaders()
        : t.customHeaders,
    );
    typeof window > "u" &&
      typeof global < "u" &&
      typeof global.process < "u" &&
      global.process.versions &&
      global.process.versions.node &&
      (i["User-Agent"] = "i18next-http-backend (node/"
        .concat(global.process.version, "; ")
        .concat(global.process.platform, " ")
        .concat(global.process.arch, ")")),
      r && (i["Content-Type"] = "application/json");
    var s =
        typeof t.requestOptions == "function"
          ? t.requestOptions(r)
          : t.requestOptions,
      a = y0(
        {
          method: r ? "POST" : "GET",
          body: r ? t.stringify(r) : void 0,
          headers: i,
        },
        S0 ? {} : s,
      ),
      l =
        typeof t.alternateFetch == "function" && t.alternateFetch.length >= 1
          ? t.alternateFetch
          : void 0;
    try {
      v0(n, a, o, l);
    } catch (u) {
      if (
        !s ||
        Object.keys(s).length === 0 ||
        !u.message ||
        u.message.indexOf("not implemented") < 0
      )
        return o(u);
      try {
        Object.keys(s).forEach(function (c) {
          delete a[c];
        }),
          v0(n, a, o, l),
          (S0 = !0);
      } catch (c) {
        o(c);
      }
    }
  },
  bD = function (t, n, r, o) {
    r && Po(r) === "object" && (r = _p("", r).slice(1)),
      t.queryStringParams && (n = _p(n, t.queryStringParams));
    try {
      var i = pa ? new pa() : new Eu("MSXML2.XMLHTTP.3.0");
      i.open(r ? "POST" : "GET", n, 1),
        t.crossDomain ||
          i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        (i.withCredentials = !!t.withCredentials),
        r &&
          i.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded",
          ),
        i.overrideMimeType && i.overrideMimeType("application/json");
      var s = t.customHeaders;
      if (((s = typeof s == "function" ? s() : s), s))
        for (var a in s) i.setRequestHeader(a, s[a]);
      (i.onreadystatechange = function () {
        i.readyState > 3 &&
          o(i.status >= 400 ? i.statusText : null, {
            status: i.status,
            data: i.responseText,
          });
      }),
        i.send(r);
    } catch (l) {
      console && console.log(l);
    }
  },
  wD = function (t, n, r, o) {
    if (
      (typeof r == "function" && ((o = r), (r = void 0)),
      (o = o || function () {}),
      or && n.indexOf("file:") !== 0)
    )
      return SD(t, n, r, o);
    if (Vx() || typeof ActiveXObject == "function") return bD(t, n, r, o);
    o(new Error("No fetch and no xhr implementation found!"));
  };
function $i(e) {
  "@babel/helpers - typeof";
  return (
    ($i =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    $i(e)
  );
}
function b0(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Vd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? b0(Object(n), !0).forEach(function (r) {
          Hx(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : b0(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function xD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function CD(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, Kx(r.key), r);
  }
}
function ED(e, t, n) {
  return (
    t && CD(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Hx(e, t, n) {
  return (
    (t = Kx(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Kx(e) {
  var t = kD(e, "string");
  return $i(t) == "symbol" ? t : t + "";
}
function kD(e, t) {
  if ($i(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if ($i(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var RD = function () {
    return {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
      addPath: "/locales/add/{{lng}}/{{ns}}",
      parse: function (n) {
        return JSON.parse(n);
      },
      stringify: JSON.stringify,
      parsePayload: function (n, r, o) {
        return Hx({}, r, o || "");
      },
      parseLoadPayload: function (n, r) {},
      request: wD,
      reloadInterval: typeof window < "u" ? !1 : 60 * 60 * 1e3,
      customHeaders: {},
      queryStringParams: {},
      crossDomain: !1,
      withCredentials: !1,
      overrideMimeType: !1,
      requestOptions: {
        mode: "cors",
        credentials: "same-origin",
        cache: "default",
      },
    };
  },
  Gx = (function () {
    function e(t) {
      var n =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      xD(this, e),
        (this.services = t),
        (this.options = n),
        (this.allOptions = r),
        (this.type = "backend"),
        this.init(t, n, r);
    }
    return ED(e, [
      {
        key: "init",
        value: function (n) {
          var r = this,
            o =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {};
          if (
            ((this.services = n),
            (this.options = Vd(Vd(Vd({}, RD()), this.options || {}), o)),
            (this.allOptions = i),
            this.services && this.options.reloadInterval)
          ) {
            var s = setInterval(function () {
              return r.reload();
            }, this.options.reloadInterval);
            $i(s) === "object" && typeof s.unref == "function" && s.unref();
          }
        },
      },
      {
        key: "readMulti",
        value: function (n, r, o) {
          this._readAny(n, n, r, r, o);
        },
      },
      {
        key: "read",
        value: function (n, r, o) {
          this._readAny([n], n, [r], r, o);
        },
      },
      {
        key: "_readAny",
        value: function (n, r, o, i, s) {
          var a = this,
            l = this.options.loadPath;
          typeof this.options.loadPath == "function" &&
            (l = this.options.loadPath(n, o)),
            (l = fD(l)),
            l.then(function (u) {
              if (!u) return s(null, {});
              var c = a.services.interpolator.interpolate(u, {
                lng: n.join("+"),
                ns: o.join("+"),
              });
              a.loadUrl(c, s, r, i);
            });
        },
      },
      {
        key: "loadUrl",
        value: function (n, r, o, i) {
          var s = this,
            a = typeof o == "string" ? [o] : o,
            l = typeof i == "string" ? [i] : i,
            u = this.options.parseLoadPayload(a, l);
          this.options.request(this.options, n, u, function (c, d) {
            if (d && ((d.status >= 500 && d.status < 600) || !d.status))
              return r(
                "failed loading " + n + "; status code: " + d.status,
                !0,
              );
            if (d && d.status >= 400 && d.status < 500)
              return r(
                "failed loading " + n + "; status code: " + d.status,
                !1,
              );
            if (!d && c && c.message) {
              var f = c.message.toLowerCase(),
                g = ["failed", "fetch", "network", "load"].find(function (x) {
                  return f.indexOf(x) > -1;
                });
              if (g) return r("failed loading " + n + ": " + c.message, !0);
            }
            if (c) return r(c, !1);
            var p, v;
            try {
              typeof d.data == "string"
                ? (p = s.options.parse(d.data, o, i))
                : (p = d.data);
            } catch {
              v = "failed parsing " + n + " to json";
            }
            if (v) return r(v, !1);
            r(null, p);
          });
        },
      },
      {
        key: "create",
        value: function (n, r, o, i, s) {
          var a = this;
          if (this.options.addPath) {
            typeof n == "string" && (n = [n]);
            var l = this.options.parsePayload(r, o, i),
              u = 0,
              c = [],
              d = [];
            n.forEach(function (f) {
              var g = a.options.addPath;
              typeof a.options.addPath == "function" &&
                (g = a.options.addPath(f, r));
              var p = a.services.interpolator.interpolate(g, { lng: f, ns: r });
              a.options.request(a.options, p, l, function (v, x) {
                (u += 1),
                  c.push(v),
                  d.push(x),
                  u === n.length && typeof s == "function" && s(c, d);
              });
            });
          }
        },
      },
      {
        key: "reload",
        value: function () {
          var n = this,
            r = this.services,
            o = r.backendConnector,
            i = r.languageUtils,
            s = r.logger,
            a = o.language;
          if (!(a && a.toLowerCase() === "cimode")) {
            var l = [],
              u = function (d) {
                var f = i.toResolveHierarchy(d);
                f.forEach(function (g) {
                  l.indexOf(g) < 0 && l.push(g);
                });
              };
            u(a),
              this.allOptions.preload &&
                this.allOptions.preload.forEach(function (c) {
                  return u(c);
                }),
              l.forEach(function (c) {
                n.allOptions.ns.forEach(function (d) {
                  o.read(c, d, "read", null, null, function (f, g) {
                    f &&
                      s.warn(
                        "loading namespace "
                          .concat(d, " for language ")
                          .concat(c, " failed"),
                        f,
                      ),
                      !f &&
                        g &&
                        s.log(
                          "loaded namespace "
                            .concat(d, " for language ")
                            .concat(c),
                          g,
                        ),
                      o.loaded("".concat(c, "|").concat(d), f, g);
                  });
                });
              });
          }
        },
      },
    ]);
  })();
Gx.type = "backend";
const TD = "Welcome to the app!",
  PD = "This is an example of i18next integration.",
  OD = { welcome: TD, description: PD },
  $D = "Добро пожаловать в приложение!",
  AD = "Это пример интеграции i18next.",
  ID = { welcome: $D, description: AD };
Rt.use(Gx)
  .use(bj)
  .init({
    resources: { en: { translation: OD }, ru: { translation: ID } },
    lng: "ru",
    fallbackLng: "ru",
    interpolation: { escapeValue: !1 },
  });
const LD = Hd.createRoot(document.getElementById("root"));
LD.render(
  R.jsx(GN, {
    basename: "/DayTrack-/",
    children: R.jsx(WM, {
      store: zx,
      children: R.jsxs(nj, { children: [R.jsx(b$, {}), R.jsx(K4, {})] }),
    }),
  }),
);
export { MD as c, Mp as g };
