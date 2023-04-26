import { openBlock as p, createElementBlock as N, createElementVNode as ne, reactive as St, computed as E, unref as d, ref as H, watch as Qe, toRef as Tt, onMounted as Le, nextTick as Xe, defineComponent as Ue, renderSlot as G, createCommentVNode as $, normalizeClass as ye, withKeys as ue, createBlock as ve, withModifiers as At, normalizeProps as Oe, mergeProps as be, Fragment as me, createTextVNode as We, toDisplayString as Pe, renderList as De, normalizeStyle as lt, createVNode as Je, Transition as mt, withCtx as ie, onBeforeUpdate as qn, onUnmounted as On, withDirectives as _t, vShow as Nt, createSlots as Ye, isRef as qe, guardReactiveProps as He, resolveDynamicComponent as In, useSlots as on, getCurrentScope as Xn, onScopeDispose as Jn, Teleport as Qn } from "vue";
import { isBefore as sn, isEqual as Bn, isAfter as un, set as Se, setHours as Yn, setMinutes as Vn, setSeconds as En, setMilliseconds as dn, parse as an, isValid as Rt, isDate as ea, format as Dt, getMonth as pe, getDay as ta, getYear as ke, getHours as je, getMinutes as Ke, getSeconds as ft, parseISO as na, startOfWeek as yn, endOfWeek as aa, setMonth as Ot, setYear as it, addDays as ct, add as Fn, addMonths as ot, subMonths as $t, getWeek as ra, getISOWeek as la, differenceInCalendarDays as oa, eachDayOfInterval as gn, addYears as sa, subYears as ia, sub as ua } from "date-fns";
function Lt() {
  return p(), N(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ne("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      ne("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      ne("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      ne("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
function da() {
  return p(), N(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ne("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      ne("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
function hn() {
  return p(), N(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ne("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function pn() {
  return p(), N(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ne("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
function Ln() {
  return p(), N(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ne("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      ne("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
function Un() {
  return p(), N(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ne("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function Hn() {
  return p(), N(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ne("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
const kn = (e, n, a, t) => {
  const s = an(e, n.slice(0, e.length), /* @__PURE__ */ new Date());
  return Rt(s) && ea(s) ? t ? s : Se(s, {
    hours: +a.hours,
    minutes: +(a == null ? void 0 : a.minutes),
    seconds: +(a == null ? void 0 : a.seconds),
    milliseconds: 0
  }) : null;
}, ca = (e, n, a, t) => {
  const s = Array.isArray(a) ? a[0] : a;
  if (typeof n == "string")
    return kn(e, n, s, t);
  if (Array.isArray(n)) {
    let f = null;
    for (const k of n)
      if (f = kn(e, k, s, t), f)
        break;
    return f;
  }
  return typeof n == "function" ? n(e) : null;
}, D = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), fa = (e, n) => {
  if (n) {
    const t = (e.getMonth() + 1).toString().padStart(2, "0"), s = e.getDate().toString().padStart(2, "0"), f = e.getHours().toString().padStart(2, "0"), k = e.getMinutes().toString().padStart(2, "0");
    return `${e.getFullYear()}-${t}-${s}T${f}:${k}:00.000Z`;
  }
  const a = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(a).toISOString();
}, Fe = (e) => {
  let n = D(JSON.parse(JSON.stringify(e)));
  return n = Yn(n, 0), n = Vn(n, 0), n = En(n, 0), n = dn(n, 0), n;
}, Ee = (e, n, a, t) => {
  let s = e ? D(e) : D();
  return (n || n === 0) && (s = Yn(s, +n)), (a || a === 0) && (s = Vn(s, +a)), (t || t === 0) && (s = En(s, +t)), dn(s, 0);
}, Ce = (e, n) => !e || !n ? !1 : sn(Fe(e), Fe(n)), ge = (e, n) => !e || !n ? !1 : Bn(Fe(e), Fe(n)), Be = (e, n) => !e || !n ? !1 : un(Fe(e), Fe(n)), Wn = (e, n, a) => e && e[0] && e[1] ? Be(a, e[0]) && Ce(a, e[1]) : e && e[0] && n ? Be(a, e[0]) && Ce(a, n) || Ce(a, e[0]) && Be(a, n) : !1, wt = (e) => {
  const n = Se(new Date(e), { date: 1 });
  return Fe(n);
}, bt = St({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), zn = () => {
  const e = (t) => {
    bt.menuFocused = t;
  }, n = (t) => {
    bt.shiftKeyInMenu !== t && (bt.shiftKeyInMenu = t);
  };
  return {
    control: E(() => ({ shiftKeyInMenu: bt.shiftKeyInMenu, menuFocused: bt.menuFocused })),
    setMenuFocused: e,
    setShiftKey: n
  };
};
function cn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bt = {}, ma = {
  get exports() {
    return Bt;
  },
  set exports(e) {
    Bt = e;
  }
};
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t) {
    if (t === null || t === !0 || t === !1)
      return NaN;
    var s = Number(t);
    return isNaN(s) ? s : s < 0 ? Math.ceil(s) : Math.floor(s);
  }
  e.exports = n.default;
})(ma, Bt);
const va = /* @__PURE__ */ cn(Bt);
var Yt = {}, ya = {
  get exports() {
    return Yt;
  },
  set exports(e) {
    Yt = e;
  }
};
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t) {
    var s = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return s.setUTCFullYear(t.getFullYear()), t.getTime() - s.getTime();
  }
  e.exports = n.default;
})(ya, Yt);
const wn = /* @__PURE__ */ cn(Yt);
function ga(e, n) {
  var a = wa(n);
  return a.formatToParts ? pa(a, e) : ka(a, e);
}
var ha = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function pa(e, n) {
  try {
    for (var a = e.formatToParts(n), t = [], s = 0; s < a.length; s++) {
      var f = ha[a[s].type];
      f >= 0 && (t[f] = parseInt(a[s].value, 10));
    }
    return t;
  } catch (k) {
    if (k instanceof RangeError)
      return [NaN];
    throw k;
  }
}
function ka(e, n) {
  var a = e.format(n).replace(/\u200E/g, ""), t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(a);
  return [t[3], t[1], t[2], t[4], t[5], t[6]];
}
var Kt = {};
function wa(e) {
  if (!Kt[e]) {
    var n = new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), a = n === "06/25/2014, 00:00:00" || n === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    Kt[e] = a ? new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return Kt[e];
}
function fn(e, n, a, t, s, f, k) {
  var _ = /* @__PURE__ */ new Date(0);
  return _.setUTCFullYear(e, n, a), _.setUTCHours(t, s, f, k), _;
}
var bn = 36e5, ba = 6e4, Gt = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function mn(e, n, a) {
  var t, s;
  if (!e || (t = Gt.timezoneZ.exec(e), t))
    return 0;
  var f;
  if (t = Gt.timezoneHH.exec(e), t)
    return f = parseInt(t[1], 10), Dn(f) ? -(f * bn) : NaN;
  if (t = Gt.timezoneHHMM.exec(e), t) {
    f = parseInt(t[1], 10);
    var k = parseInt(t[2], 10);
    return Dn(f, k) ? (s = Math.abs(f) * bn + k * ba, f > 0 ? -s : s) : NaN;
  }
  if (Ma(e)) {
    n = new Date(n || Date.now());
    var _ = a ? n : Da(n), B = rn(_, e), T = a ? B : $a(n, B, e);
    return -T;
  }
  return NaN;
}
function Da(e) {
  return fn(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function rn(e, n) {
  var a = ga(e, n), t = fn(
    a[0],
    a[1] - 1,
    a[2],
    a[3] % 24,
    a[4],
    a[5],
    0
  ).getTime(), s = e.getTime(), f = s % 1e3;
  return s -= f >= 0 ? f : 1e3 + f, t - s;
}
function $a(e, n, a) {
  var t = e.getTime(), s = t - n, f = rn(new Date(s), a);
  if (n === f)
    return n;
  s -= f - n;
  var k = rn(new Date(s), a);
  return f === k ? f : Math.max(f, k);
}
function Dn(e, n) {
  return -23 <= e && e <= 23 && (n == null || 0 <= n && n <= 59);
}
var $n = {};
function Ma(e) {
  if ($n[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), $n[e] = !0, !0;
  } catch {
    return !1;
  }
}
var Ta = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
const xn = Ta;
var Zt = 36e5, Mn = 6e4, Aa = 2, Ie = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: xn
};
function ln(e, n) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  var a = n || {}, t = a.additionalDigits == null ? Aa : va(a.additionalDigits);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var s = Sa(e), f = Pa(s.date, t), k = f.year, _ = f.restDateString, B = Ca(_, k);
  if (isNaN(B))
    return /* @__PURE__ */ new Date(NaN);
  if (B) {
    var T = B.getTime(), V = 0, A;
    if (s.time && (V = _a(s.time), isNaN(V)))
      return /* @__PURE__ */ new Date(NaN);
    if (s.timeZone || a.timeZone) {
      if (A = mn(s.timeZone || a.timeZone, new Date(T + V)), isNaN(A))
        return /* @__PURE__ */ new Date(NaN);
    } else
      A = wn(new Date(T + V)), A = wn(new Date(T + V + A));
    return new Date(T + V + A);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function Sa(e) {
  var n = {}, a = Ie.dateTimePattern.exec(e), t;
  if (a ? (n.date = a[1], t = a[3]) : (a = Ie.datePattern.exec(e), a ? (n.date = a[1], t = a[2]) : (n.date = null, t = e)), t) {
    var s = Ie.timeZone.exec(t);
    s ? (n.time = t.replace(s[1], ""), n.timeZone = s[1].trim()) : n.time = t;
  }
  return n;
}
function Pa(e, n) {
  var a = Ie.YYY[n], t = Ie.YYYYY[n], s;
  if (s = Ie.YYYY.exec(e) || t.exec(e), s) {
    var f = s[1];
    return {
      year: parseInt(f, 10),
      restDateString: e.slice(f.length)
    };
  }
  if (s = Ie.YY.exec(e) || a.exec(e), s) {
    var k = s[1];
    return {
      year: parseInt(k, 10) * 100,
      restDateString: e.slice(k.length)
    };
  }
  return {
    year: null
  };
}
function Ca(e, n) {
  if (n === null)
    return null;
  var a, t, s, f;
  if (e.length === 0)
    return t = /* @__PURE__ */ new Date(0), t.setUTCFullYear(n), t;
  if (a = Ie.MM.exec(e), a)
    return t = /* @__PURE__ */ new Date(0), s = parseInt(a[1], 10) - 1, An(n, s) ? (t.setUTCFullYear(n, s), t) : /* @__PURE__ */ new Date(NaN);
  if (a = Ie.DDD.exec(e), a) {
    t = /* @__PURE__ */ new Date(0);
    var k = parseInt(a[1], 10);
    return Oa(n, k) ? (t.setUTCFullYear(n, 0, k), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Ie.MMDD.exec(e), a) {
    t = /* @__PURE__ */ new Date(0), s = parseInt(a[1], 10) - 1;
    var _ = parseInt(a[2], 10);
    return An(n, s, _) ? (t.setUTCFullYear(n, s, _), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Ie.Www.exec(e), a)
    return f = parseInt(a[1], 10) - 1, Sn(n, f) ? Tn(n, f) : /* @__PURE__ */ new Date(NaN);
  if (a = Ie.WwwD.exec(e), a) {
    f = parseInt(a[1], 10) - 1;
    var B = parseInt(a[2], 10) - 1;
    return Sn(n, f, B) ? Tn(n, f, B) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function _a(e) {
  var n, a, t;
  if (n = Ie.HH.exec(e), n)
    return a = parseFloat(n[1].replace(",", ".")), qt(a) ? a % 24 * Zt : NaN;
  if (n = Ie.HHMM.exec(e), n)
    return a = parseInt(n[1], 10), t = parseFloat(n[2].replace(",", ".")), qt(a, t) ? a % 24 * Zt + t * Mn : NaN;
  if (n = Ie.HHMMSS.exec(e), n) {
    a = parseInt(n[1], 10), t = parseInt(n[2], 10);
    var s = parseFloat(n[3].replace(",", "."));
    return qt(a, t, s) ? a % 24 * Zt + t * Mn + s * 1e3 : NaN;
  }
  return null;
}
function Tn(e, n, a) {
  n = n || 0, a = a || 0;
  var t = /* @__PURE__ */ new Date(0);
  t.setUTCFullYear(e, 0, 4);
  var s = t.getUTCDay() || 7, f = n * 7 + a + 1 - s;
  return t.setUTCDate(t.getUTCDate() + f), t;
}
var Na = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Ra = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function jn(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function An(e, n, a) {
  if (n < 0 || n > 11)
    return !1;
  if (a != null) {
    if (a < 1)
      return !1;
    var t = jn(e);
    if (t && a > Ra[n] || !t && a > Na[n])
      return !1;
  }
  return !0;
}
function Oa(e, n) {
  if (n < 1)
    return !1;
  var a = jn(e);
  return !(a && n > 366 || !a && n > 365);
}
function Sn(e, n, a) {
  return !(n < 0 || n > 52 || a != null && (a < 0 || a > 6));
}
function qt(e, n, a) {
  return !(e != null && (e < 0 || e >= 25) || n != null && (n < 0 || n >= 60) || a != null && (a < 0 || a >= 60));
}
var Vt = {}, Ia = {
  get exports() {
    return Vt;
  },
  set exports(e) {
    Vt = e;
  }
}, Et = {}, Ba = {
  get exports() {
    return Et;
  },
  set exports(e) {
    Et = e;
  }
};
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t, s) {
    if (t == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var f in s)
      Object.prototype.hasOwnProperty.call(s, f) && (t[f] = s[f]);
    return t;
  }
  e.exports = n.default;
})(Ba, Et);
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = s;
  var a = t(Et);
  function t(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function s(f) {
    return (0, a.default)({}, f);
  }
  e.exports = n.default;
})(Ia, Vt);
const Ya = /* @__PURE__ */ cn(Vt);
function Va(e, n, a) {
  var t = ln(e, a), s = mn(n, t, !0), f = new Date(t.getTime() - s), k = /* @__PURE__ */ new Date(0);
  return k.setFullYear(f.getUTCFullYear(), f.getUTCMonth(), f.getUTCDate()), k.setHours(f.getUTCHours(), f.getUTCMinutes(), f.getUTCSeconds(), f.getUTCMilliseconds()), k;
}
function Ea(e, n, a) {
  if (typeof e == "string" && !e.match(xn)) {
    var t = Ya(a);
    return t.timeZone = n, ln(e, t);
  }
  var s = ln(e, a), f = fn(
    s.getFullYear(),
    s.getMonth(),
    s.getDate(),
    s.getHours(),
    s.getMinutes(),
    s.getSeconds(),
    s.getMilliseconds()
  ).getTime(), k = mn(n, new Date(f));
  return new Date(f + k);
}
const Fa = (e, n = 3) => {
  const a = [];
  for (let t = 0; t < e.length; t += n)
    a.push([e[t], e[t + 1], e[t + 2]]);
  return a;
}, La = (e, n) => {
  const a = [1, 2, 3, 4, 5, 6, 7].map((f) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${f}T00:00:00+00:00`)).slice(0, 2)), t = a.slice(0, n), s = a.slice(n + 1, a.length);
  return [a[n]].concat(...s).concat(...t);
}, Ua = (e, n) => {
  const a = [];
  for (let t = +e[0]; t <= +e[1]; t++)
    a.push({ value: +t, text: `${t}` });
  return n ? a.reverse() : a;
}, Ha = (e, n) => {
  const a = new Intl.DateTimeFormat(e, { month: n, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((s) => {
    const f = s < 10 ? `0${s}` : s;
    return /* @__PURE__ */ new Date(`2017-${f}-01T00:00:00+00:00`);
  }).map((s, f) => ({
    text: a.format(s),
    value: f
  }));
}, Wa = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Me = (e) => {
  const n = d(e);
  return n != null && n.$el ? n == null ? void 0 : n.$el : n;
}, za = (e) => Object.assign({ type: "dot" }, e), Kn = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Ft = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, $e = (e) => e, Pn = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, Cn = (e) => Object.assign(
  {
    menuAppear: "dp-menu-appear",
    open: "dp-slide-down",
    close: "dp-slide-up",
    next: "calendar-next",
    previous: "calendar-prev",
    vNext: "dp-slide-up",
    vPrevious: "dp-slide-down"
  },
  e
), xa = (e) => Object.assign(
  {
    toggleOverlay: "Toggle overlay",
    menu: "Datepicker menu",
    input: "Datepicker input",
    calendarWrap: "Calendar wrapper",
    calendarDays: "Calendar days",
    openTimePicker: "Open time picker",
    closeTimePicker: "Close time Picker",
    incrementValue: (n) => `Increment ${n}`,
    decrementValue: (n) => `Decrement ${n}`,
    openTpOverlay: (n) => `Open ${n} overlay`,
    amPmButton: "Switch AM/PM mode",
    openYearsOverlay: "Open years overlay",
    openMonthsOverlay: "Open months overlay",
    nextMonth: "Next month",
    prevMonth: "Previous month",
    day: () => ""
  },
  e
), ja = (e) => e === null ? 0 : typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2, Ka = (e, n, a) => e || (typeof a == "string" ? a : n), Ga = (e) => typeof e == "boolean" ? e ? Cn({}) : !1 : Cn(e), Za = () => ({
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: !0,
  rangeSeparator: " - "
}), qa = (e) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e), Ve = (e) => {
  const n = () => {
    if (e.partialRange)
      return null;
    throw new Error(Ft.prop("partial-range"));
  }, a = E(() => ({
    ariaLabels: xa(e.ariaLabels),
    textInputOptions: Object.assign(Za(), e.textInputOptions),
    multiCalendars: ja(e.multiCalendars),
    previewFormat: Ka(e.previewFormat, e.format, f()),
    filters: qa(e.filters),
    transitions: Ga(e.transitions),
    startTime: v()
  })), t = (i) => {
    if (e.range)
      return i();
    throw new Error(Ft.prop("range"));
  }, s = () => {
    const i = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${i}` : `hh:mm${i} aa`;
  }, f = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? s() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${s()}` : "MM/dd/yyyy", k = (i, r) => {
    if (typeof e.format == "function")
      return e.format(i);
    const c = r || f(), b = e.formatLocale ? { locale: e.formatLocale } : void 0;
    return Array.isArray(i) ? `${Dt(i[0], c, b)} ${e.modelAuto && !i[1] ? "" : a.value.textInputOptions.rangeSeparator || "-"} ${i[1] ? Dt(i[1], c, b) : ""}` : Dt(i, c, b);
  }, _ = (i) => e.timezone ? Va(i, e.timezone) : i, B = (i) => e.timezone ? Ea(i, e.timezone) : i, T = E(() => (i) => {
    var r;
    return (r = e.hideNavigation) == null ? void 0 : r.includes(i);
  }), V = (i) => {
    const r = e.maxDate ? Be(_(i), _(D(e.maxDate))) : !1, c = e.minDate ? Ce(_(i), _(D(e.minDate))) : !1, b = S(i, e.disabledDates), I = a.value.filters.months.map((K) => +K).includes(pe(i)), g = e.disabledWeekDays.length ? e.disabledWeekDays.some((K) => +K === ta(i)) : !1, w = e.allowedDates.length ? !e.allowedDates.some((K) => ge(_(D(K)), _(i))) : !1, ce = ke(i), y = ce < +e.yearRange[0] || ce > +e.yearRange[1];
    return !(r || c || b || I || y || g || w);
  }, A = (i) => {
    const r = {
      hours: je(D()),
      minutes: Ke(D()),
      seconds: e.enableSeconds ? ft(D()) : 0
    };
    return Object.assign(r, i);
  }, v = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [A(e.startTime[0]), A(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? A(e.startTime) : null, M = (i) => !V(i), q = (i) => Array.isArray(i) ? Rt(i[0]) && (i[1] ? Rt(i[1]) : !0) : i ? Rt(i) : !1, J = (i) => i instanceof Date ? i : na(i), F = (i) => {
    const r = yn(_(i), { weekStartsOn: +e.weekStart }), c = aa(_(i), { weekStartsOn: +e.weekStart });
    return [r, c];
  }, S = (i, r) => Array.isArray(r) ? r.some((c) => ge(_(D(c)), _(i))) : r(i), j = (i, r, c) => {
    let b = i ? D(i) : D();
    return (r || r === 0) && (b = Ot(b, r)), c && (b = it(b, c)), b;
  }, R = (i) => Se(D(), { hours: je(i), minutes: Ke(i), seconds: ft(i) }), X = (i) => Se(D(), {
    hours: +i.hours || 0,
    minutes: +i.minutes || 0,
    seconds: +i.seconds || 0
  }), Z = (i, r, c, b) => {
    if (!i)
      return !0;
    if (b) {
      const L = c === "max" ? sn(i, r) : un(i, r), I = { seconds: 0, milliseconds: 0 };
      return L || Bn(Se(i, I), Se(r, I));
    }
    return c === "max" ? i.getTime() <= r.getTime() : i.getTime() >= r.getTime();
  }, Q = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, le = (i) => Array.isArray(i) ? [i[0] ? R(i[0]) : null, i[1] ? R(i[1]) : null] : R(i), P = (i) => {
    const r = e.maxTime ? X(e.maxTime) : D(e.maxDate);
    return Array.isArray(i) ? Z(i[0], r, "max", !!e.maxDate) && Z(i[1], r, "max", !!e.maxDate) : Z(i, r, "max", !!e.maxDate);
  }, Y = (i, r) => {
    const c = e.minTime ? X(e.minTime) : D(e.minDate);
    return Array.isArray(i) ? Z(i[0], c, "min", !!e.minDate) && Z(i[1], c, "min", !!e.minDate) && r : Z(i, c, "min", !!e.minDate) && r;
  }, x = (i) => {
    let r = !0;
    if (!i || Q())
      return !0;
    const c = !e.minDate && !e.maxDate ? le(i) : i;
    return (e.maxTime || e.maxDate) && (r = P($e(c))), (e.minTime || e.minDate) && (r = Y($e(c), r)), r;
  }, m = (i, r) => {
    const c = D(JSON.parse(JSON.stringify(i))), b = [];
    for (let L = 0; L < 7; L++) {
      const I = ct(c, L), g = pe(I) !== r;
      b.push({
        text: e.hideOffsetDates && g ? "" : I.getDate(),
        value: I,
        current: !g,
        classData: {}
      });
    }
    return b;
  }, C = (i, r) => {
    const c = [], b = D(_(new Date(r, i))), L = D(_(new Date(r, i + 1, 0))), I = yn(b, { weekStartsOn: e.weekStart }), g = (w) => {
      const ce = m(w, i);
      if (c.push({ days: ce }), !c[c.length - 1].days.some(
        (y) => ge(Fe(y.value), Fe(L))
      )) {
        const y = ct(w, 7);
        g(y);
      }
    };
    if (g(I), e.sixWeeks && c.length < 6) {
      const w = 6 - c.length;
      for (let ce = 1; ce <= w; ce++) {
        const y = c[c.length - 1], K = y.days[y.days.length - 1], Te = m(ct(K.value, 1), pe(b));
        c.push({ days: Te });
      }
    }
    return c;
  }, W = (i, r, c) => [Se(D(i), { date: 1 }), Se(D(), { month: r, year: c, date: 1 })], oe = (i, r) => Ce(...W(e.minDate, i, r)) || ge(...W(e.minDate, i, r)), ee = (i, r) => Be(...W(e.maxDate, i, r)) || ge(...W(e.maxDate, i, r)), O = (i, r, c) => {
    let b = !1;
    return e.maxDate && c && ee(i, r) && (b = !0), e.minDate && !c && oe(i, r) && (b = !0), b;
  };
  return {
    checkPartialRangeValue: n,
    checkRangeEnabled: t,
    getZonedDate: _,
    getZonedToUtc: B,
    formatDate: k,
    getDefaultPattern: f,
    validateDate: V,
    getDefaultStartTime: v,
    isDisabled: M,
    isValidDate: q,
    sanitizeDate: J,
    getWeekFromDate: F,
    matchDate: S,
    setDateMonthOrYear: j,
    isValidTime: x,
    getCalendarDays: C,
    validateMonthYearInRange: (i, r, c, b) => {
      let L = !1;
      return b ? e.minDate && e.maxDate ? L = O(i, r, c) : (e.minDate && oe(i, r) || e.maxDate && ee(i, r)) && (L = !0) : L = !0, L;
    },
    validateMaxDate: ee,
    validateMinDate: oe,
    assignDefaultTime: A,
    defaults: a,
    hideNavigationButtons: T
  };
}, he = St({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), Xt = H(null), Ct = H(!1), Jt = H(!1), Qt = H(!1), en = H(!1), Re = H(0), Ae = H(0), et = () => {
  const e = E(() => Ct.value ? [...he.selectionGrid, he.actionRow].filter((S) => S.length) : Jt.value ? [
    ...he.timePicker[0],
    ...he.timePicker[1],
    en.value ? [] : [Xt.value],
    he.actionRow
  ].filter((S) => S.length) : Qt.value ? [...he.monthPicker, he.actionRow] : [he.monthYear, ...he.calendar, he.time, he.actionRow].filter((S) => S.length)), n = (S) => {
    Re.value = S ? Re.value + 1 : Re.value - 1;
    let j = null;
    e.value[Ae.value] && (j = e.value[Ae.value][Re.value]), j || (Re.value = S ? Re.value - 1 : Re.value + 1);
  }, a = (S) => {
    if (Ae.value === 0 && !S || Ae.value === e.value.length && S)
      return;
    Ae.value = S ? Ae.value + 1 : Ae.value - 1, e.value[Ae.value] ? e.value[Ae.value] && !e.value[Ae.value][Re.value] && Re.value !== 0 && (Re.value = e.value[Ae.value].length - 1) : Ae.value = S ? Ae.value - 1 : Ae.value + 1;
  }, t = (S) => {
    let j = null;
    e.value[Ae.value] && (j = e.value[Ae.value][Re.value]), j ? j.focus({ preventScroll: !Ct.value }) : Re.value = S ? Re.value - 1 : Re.value + 1;
  }, s = () => {
    n(!0), t(!0);
  }, f = () => {
    n(!1), t(!1);
  }, k = () => {
    a(!1), t(!0);
  }, _ = () => {
    a(!0), t(!0);
  }, B = (S, j) => {
    he[j] = S;
  }, T = (S, j) => {
    he[j] = S;
  }, V = () => {
    Re.value = 0, Ae.value = 0;
  };
  return {
    buildMatrix: B,
    buildMultiLevelMatrix: T,
    setTimePickerBackRef: (S) => {
      Xt.value = S;
    },
    setSelectionGrid: (S) => {
      Ct.value = S, V(), S || (he.selectionGrid = []);
    },
    setTimePicker: (S, j = !1) => {
      Jt.value = S, en.value = j, V(), S || (he.timePicker[0] = [], he.timePicker[1] = []);
    },
    setTimePickerElements: (S, j = 0) => {
      he.timePicker[j] = S;
    },
    arrowRight: s,
    arrowLeft: f,
    arrowUp: k,
    arrowDown: _,
    clearArrowNav: () => {
      he.monthYear = [], he.calendar = [], he.time = [], he.actionRow = [], he.selectionGrid = [], he.timePicker[0] = [], he.timePicker[1] = [], Ct.value = !1, Jt.value = !1, en.value = !1, Qt.value = !1, V(), Xt.value = null;
    },
    setMonthPicker: (S) => {
      Qt.value = S, V();
    },
    refSets: he
    // exposed for testing
  };
}, _n = (e) => Array.isArray(e), rt = (e) => Array.isArray(e), Nn = (e) => Array.isArray(e) && e.length === 2, Xa = (e, n, a, t, s) => {
  const {
    getDefaultStartTime: f,
    isDisabled: k,
    sanitizeDate: _,
    getWeekFromDate: B,
    setDateMonthOrYear: T,
    validateMonthYearInRange: V,
    defaults: A
  } = Ve(e), v = E({
    get: () => e.internalModelValue,
    set: (u) => {
      !e.readonly && !e.disabled && n("update:internal-model-value", u);
    }
  }), M = H([]);
  Qe(v, () => {
    Q();
  });
  const q = Tt(e, "multiCalendars");
  Qe(q, () => {
    te(0);
  });
  const J = H([{ month: pe(D()), year: ke(D()) }]), F = St({
    hours: e.range ? [je(D()), je(D())] : je(D()),
    minutes: e.range ? [Ke(D()), Ke(D())] : Ke(D()),
    seconds: e.range ? [0, 0] : 0
  }), S = E(
    () => (u) => J.value[u] ? J.value[u].month : 0
  ), j = E(
    () => (u) => J.value[u] ? J.value[u].year : 0
  ), R = E(() => e.flow && e.flow.length && !e.partialFlow ? s.value === e.flow.length : !0), X = (u, o, h) => {
    var z, se;
    J.value[u] || (J.value[u] = { month: 0, year: 0 }), J.value[u].month = o === null ? (z = J.value[u]) == null ? void 0 : z.month : o, J.value[u].year = h === null ? (se = J.value[u]) == null ? void 0 : se.year : h;
  }, Z = (u, o) => {
    F[u] = o;
  };
  Le(() => {
    v.value || (e.startDate && (X(0, pe(D(e.startDate)), ke(D(e.startDate))), A.value.multiCalendars && te(0)), A.value.startTime && O()), Q(!0);
  });
  const Q = (u = !1) => {
    if (v.value)
      return Array.isArray(v.value) ? (M.value = v.value, m(u)) : P(v.value);
    if (e.timePicker)
      return C();
    if (e.monthPicker && !e.range)
      return W();
    if (e.yearPicker && !e.range)
      return oe();
    if (A.value.multiCalendars && u && !e.startDate)
      return le(D(), u);
  }, le = (u, o = !1) => {
    if ((!A.value.multiCalendars || !e.multiStatic || o) && X(0, pe(u), ke(u)), A.value.multiCalendars)
      for (let h = 1; h < A.value.multiCalendars; h++) {
        const z = Se(D(), { month: S.value(h - 1), year: j.value(h - 1) }), se = Fn(z, { months: 1 });
        J.value[h] = { month: pe(se), year: ke(se) };
      }
  }, P = (u) => {
    le(u), Z("hours", je(u)), Z("minutes", Ke(u)), Z("seconds", ft(u));
  }, Y = (u, o) => {
    le(u[0], o);
    const h = (z, se) => [
      z(u[0]),
      u[1] ? z(u[1]) : F[se][1]
    ];
    Z("hours", h(je, "hours")), Z("minutes", h(Ke, "minutes")), Z("seconds", h(ft, "seconds"));
  }, x = (u, o) => {
    if ((e.range || e.weekPicker) && !e.multiDates)
      return Y(u, o);
    if (e.multiDates) {
      const h = u[u.length - 1];
      return P(h);
    }
  }, m = (u) => {
    const o = v.value;
    x(o, u), A.value.multiCalendars && e.multiCalendarsSolo && i();
  }, C = () => {
    if (O(), !e.range)
      v.value = Ee(D(), F.hours, F.minutes, ee());
    else {
      const u = F.hours, o = F.minutes;
      v.value = [
        Ee(D(), u[0], o[0], ee()),
        Ee(D(), u[1], o[1], ee(!1))
      ];
    }
  }, W = () => {
    e.multiDates ? v.value = [T(D(), S.value(0), j.value(0))] : v.value = T(D(), S.value(0), j.value(0));
  }, oe = () => {
    v.value = D();
  }, ee = (u = !0) => e.enableSeconds ? Array.isArray(F.seconds) ? u ? F.seconds[0] : F.seconds[1] : F.seconds : 0, O = () => {
    const u = f();
    if (u) {
      const o = Array.isArray(u), h = o ? [+u[0].hours, +u[1].hours] : +u.hours, z = o ? [+u[0].minutes, +u[1].minutes] : +u.minutes, se = o ? [+u[0].seconds, +u[1].seconds] : +u.seconds;
      Z("hours", h), Z("minutes", z), e.enableSeconds && Z("seconds", se);
    }
  }, l = () => Array.isArray(v.value) && v.value.length ? v.value[v.value.length - 1] : null, i = () => {
    if (Array.isArray(v.value) && v.value.length === 2) {
      const u = D(
        D(v.value[1] ? v.value[1] : ot(v.value[0], 1))
      ), [o, h] = [pe(v.value[0]), ke(v.value[0])], [z, se] = [pe(v.value[1]), ke(v.value[1])];
      (o !== z || o === z && h !== se) && e.multiCalendarsSolo && X(1, pe(u), ke(u));
    }
  }, r = (u) => {
    const o = ot(u, 1);
    return { month: pe(o), year: ke(o) };
  }, c = (u) => {
    const o = pe(D(u)), h = ke(D(u));
    if (X(0, o, h), A.value.multiCalendars > 0)
      for (let z = 1; z < A.value.multiCalendars; z++) {
        const se = r(
          Se(D(u), { year: S.value(z - 1), month: j.value(z - 1) })
        );
        X(z, se.month, se.year);
      }
  }, b = (u) => {
    if (v.value && Array.isArray(v.value))
      if (v.value.some((o) => ge(u, o))) {
        const o = v.value.filter((h) => !ge(h, u));
        v.value = o.length ? o : null;
      } else
        (e.multiDatesLimit && +e.multiDatesLimit > v.value.length || !e.multiDatesLimit) && v.value.push(u);
    else
      v.value = [u];
  }, L = (u, o) => {
    const h = Be(u, o) ? o : u, z = Be(o, u) ? o : u;
    return gn({ start: h, end: z });
  }, I = (u, o = 0) => {
    if (Array.isArray(v.value) && v.value[o]) {
      const h = oa(u, v.value[o]), z = L(v.value[o], u), se = z.length === 1 ? 0 : z.filter((U) => k(U)).length, Ne = Math.abs(h) - se;
      if (e.minRange && e.maxRange)
        return Ne >= +e.minRange && Ne <= +e.maxRange;
      if (e.minRange)
        return Ne >= +e.minRange;
      if (e.maxRange)
        return Ne <= +e.maxRange;
    }
    return !0;
  }, g = (u) => Array.isArray(v.value) && v.value.length === 2 ? e.fixedStart && (Be(u, v.value[0]) || ge(u, v.value[0])) ? [v.value[0], u] : e.fixedEnd && (Ce(u, v.value[1]) || ge(u, v.value[1])) ? [u, v.value[1]] : (n("invalid-fixed-range", u), v.value) : [], w = () => {
    e.autoApply && R.value && n("auto-apply", e.partialFlow);
  }, ce = () => {
    e.autoApply && n("select-date");
  }, y = (u) => !gn({ start: u[0], end: u[1] }).some((h) => k(h)), K = (u) => (v.value = B(D(u.value)), w()), Te = (u) => {
    const o = Ee(D(u.value), F.hours, F.minutes, ee());
    e.multiDates ? b(o) : v.value = o, a(), w();
  }, we = () => {
    M.value = v.value ? v.value.slice() : [], M.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (M.value = []);
  }, re = (u, o) => {
    const h = [D(u.value), ct(D(u.value), +e.autoRange)];
    y(h) && (o && c(u.value), M.value = h);
  }, Ge = (u) => {
    ze(u.value) || !I(u.value, e.fixedStart ? 0 : 1) || (M.value = g(D(u.value)));
  }, ze = (u) => e.noDisabledRange ? L(M.value[0], u).some((h) => k(h)) : !1, _e = (u, o) => {
    if (we(), e.autoRange)
      return re(u, o);
    if (e.fixedStart || e.fixedEnd)
      return Ge(u);
    M.value[0] ? I(D(u.value)) && !ze(u.value) && (Ce(D(u.value), D(M.value[0])) ? M.value.unshift(D(u.value)) : M.value[1] = D(u.value)) : M.value[0] = D(u.value);
  }, nt = (u) => {
    M.value[u] = Ee(
      M.value[u],
      F.hours[u],
      F.minutes[u],
      ee(u !== 1)
    );
  }, vt = () => {
    M.value.length && (M.value[0] && !M.value[1] ? nt(0) : (nt(0), nt(1), a()), v.value = M.value.slice(), M.value[0] && M.value[1] && e.autoApply && n("auto-apply"), M.value[0] && !M.value[1] && e.modelAuto && e.autoApply && n("auto-apply"));
  }, yt = (u, o = !1) => {
    if (!(k(u.value) || !u.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return K(u);
      if (!e.range)
        return Te(u);
      rt(F.hours) && rt(F.minutes) && !e.multiDates && (_e(u, o), vt());
    }
  }, ut = (u) => {
    const o = u[0];
    return e.weekNumbers === "local" ? ra(o.value, { weekStartsOn: +e.weekStart }) : e.weekNumbers === "iso" ? la(o.value) : typeof e.weekNumbers == "function" ? e.weekNumbers(o.value) : "";
  }, te = (u) => {
    for (let o = u - 1; o >= 0; o--) {
      const h = $t(Se(D(), { month: S.value(o + 1), year: j.value(o + 1) }), 1);
      X(o, pe(h), ke(h));
    }
    for (let o = u + 1; o <= A.value.multiCalendars - 1; o++) {
      const h = ot(Se(D(), { month: S.value(o - 1), year: j.value(o - 1) }), 1);
      X(o, pe(h), ke(h));
    }
  }, de = (u) => T(D(), S.value(u), j.value(u)), fe = (u) => Ee(u, F.hours, F.minutes, ee()), gt = (u) => {
    b(de(u));
  }, at = (u, o) => {
    const h = e.monthPicker ? S.value(u) !== o.month || !o.fromNav : j.value(u) !== o.year || !o.fromNav;
    if (X(u, o.month, o.year), A.value.multiCalendars && !e.multiCalendarsSolo && te(u), e.monthPicker || e.yearPicker)
      if (e.multiDates)
        h && gt(u);
      else if (e.range) {
        if (h && I(de(u))) {
          let z = v.value ? v.value.slice() : [];
          z.length === 2 && z[1] !== null && (z = []), z.length ? Ce(de(u), z[0]) ? z.unshift(de(u)) : z[1] = de(u) : z = [de(u)], v.value = z;
        }
      } else
        v.value = de(u);
    n("update-month-year", { instance: u, month: o.month, year: o.year }), t(e.multiCalendarsSolo ? u : void 0);
  }, Ht = async (u = !1) => {
    if (e.autoApply && (e.monthPicker || e.yearPicker)) {
      await Xe();
      const o = e.monthPicker ? u : !1;
      e.range ? n("auto-apply", o || !v.value || v.value.length === 1) : n("auto-apply", o);
    }
    a();
  }, Pt = (u, o) => {
    const h = Se(D(), { month: S.value(o), year: j.value(o) }), z = u < 0 ? ot(h, 1) : $t(h, 1);
    V(pe(z), ke(z), u < 0, e.preventMinMaxNavigation) && (X(o, pe(z), ke(z)), A.value.multiCalendars && !e.multiCalendarsSolo && te(o), n("update-month-year", { instance: o, month: pe(z), year: ke(z) }), t());
  }, ht = (u) => {
    _n(u) && _n(v.value) && rt(F.hours) && rt(F.minutes) ? (u[0] && v.value[0] && (v.value[0] = Ee(u[0], F.hours[0], F.minutes[0], ee())), u[1] && v.value[1] && (v.value[1] = Ee(u[1], F.hours[1], F.minutes[1], ee(!1)))) : e.multiDates && Array.isArray(v.value) ? v.value[v.value.length - 1] = fe(u) : !e.range && !Nn(u) && (v.value = fe(u)), n("time-update");
  }, Wt = (u, o = !0, h = !1) => {
    const z = o ? u : F.hours, se = !o && !h ? u : F.minutes, Ne = h ? u : F.seconds;
    if (e.range && Nn(v.value) && rt(z) && rt(se) && rt(Ne) && !e.disableTimeRangeValidation) {
      const U = (ae) => Ee(v.value[ae], z[ae], se[ae], Ne[ae]), xe = (ae) => dn(v.value[ae], 0);
      if (ge(v.value[0], v.value[1]) && (un(U(0), xe(1)) || sn(U(1), xe(0))))
        return;
    }
    if (Z("hours", z), Z("minutes", se), Z("seconds", Ne), v.value)
      if (e.multiDates) {
        const U = l();
        U && ht(U);
      } else
        ht(v.value);
    else
      e.timePicker && ht(e.range ? [D(), D()] : D());
    a();
  }, zt = (u, o) => {
    e.monthChangeOnScroll && Pt(e.monthChangeOnScroll !== "inverse" ? -u.deltaY : u.deltaY, o);
  }, pt = (u, o, h = !1) => {
    e.monthChangeOnArrows && e.vertical === h && Ze(u, o);
  }, Ze = (u, o) => {
    Pt(u === "right" ? -1 : 1, o);
  };
  return {
    time: F,
    month: S,
    year: j,
    modelValue: v,
    calendars: J,
    monthYearSelect: Ht,
    isDisabled: k,
    updateTime: Wt,
    getWeekNum: ut,
    selectDate: yt,
    updateMonthYear: at,
    handleScroll: zt,
    getMarker: (u) => e.markers.find((o) => ge(_(u.value), _(o.date))),
    handleArrow: pt,
    handleSwipe: Ze,
    selectCurrentDate: () => {
      e.range ? v.value && Array.isArray(v.value) && v.value[0] ? v.value = Ce(D(), v.value[0]) ? [D(), v.value[0]] : [v.value[0], D()] : v.value = [D()] : v.value = D(), ce();
    },
    presetDateRange: (u, o, h) => {
      if (!u) {
        if (e.presetRangesDynamic.dynamic) {
          if (o && e.presetRangesDynamic.data) {
            if (!e.presetRangesDynamic.data.find((U) => U.txt == o))
              return;
            const se = e.qweqweqwe(o, e);
            if (!se)
              return;
            const Ne = [se.startDate, se.endDate];
            v.value = Ne, ce(), e.multiCalendars && Xe().then(() => Q(!0));
          }
          n("update:internal-range-picked-name", o), n("preset-range-clicked", o);
        }
        h && (h.length && h.length <= 2 && e.range && (v.value = h.map((z) => D(z))), ce(), e.multiCalendars && Xe().then(() => Q(!0)));
      }
    }
  };
}, Ja = (e, n, a) => {
  const t = H(), s = H(""), {
    getZonedToUtc: f,
    getZonedDate: k,
    formatDate: _,
    getDefaultPattern: B,
    checkRangeEnabled: T,
    checkPartialRangeValue: V,
    isValidDate: A,
    setDateMonthOrYear: v,
    defaults: M
  } = Ve(n), q = H(""), J = Tt(n, "format");
  Qe(t, () => {
    e("internal-model-change", t.value);
  }), Qe(J, () => {
    r();
  });
  const F = (y) => {
    const K = y || D();
    return n.modelType ? b(K) : {
      hours: je(K),
      minutes: Ke(K),
      seconds: n.enableSeconds ? ft(K) : 0
    };
  }, S = (y) => n.modelType ? b(y) : { month: pe(y), year: ke(y) }, j = (y) => Array.isArray(y) ? T(() => [
    it(D(), y[0]),
    y[1] ? it(D(), y[1]) : V()
  ]) : it(D(), +y), R = (y, K) => (typeof y == "string" || typeof y == "number") && n.modelType ? c(y) : K, X = (y) => Array.isArray(y) ? [
    R(
      y[0],
      Ee(null, +y[0].hours, +y[0].minutes, y[0].seconds)
    ),
    R(
      y[1],
      Ee(null, +y[1].hours, +y[1].minutes, y[1].seconds)
    )
  ] : R(y, Ee(null, y.hours, y.minutes, y.seconds)), Z = (y) => Array.isArray(y) ? n.multiDates ? y.map((K) => R(K, v(null, +K.month, +K.year))) : T(() => [
    R(y[0], v(null, +y[0].month, +y[0].year)),
    R(
      y[1],
      y[1] ? v(null, +y[1].month, +y[1].year) : V()
    )
  ]) : R(y, v(null, +y.month, +y.year)), Q = (y) => {
    if (Array.isArray(y))
      return y.map((K) => c(K));
    throw new Error(Ft.dateArr("multi-dates"));
  }, le = (y) => {
    if (Array.isArray(y))
      return [D(y[0]), D(y[1])];
    throw new Error(Ft.dateArr("week-picker"));
  }, P = (y) => n.modelAuto ? Array.isArray(y) ? [c(y[0]), c(y[1])] : n.autoApply ? [c(y)] : [c(y), null] : Array.isArray(y) ? T(() => [
    c(y[0]),
    y[1] ? c(y[1]) : V()
  ]) : c(y), Y = () => {
    Array.isArray(t.value) && n.range && t.value.length === 1 && t.value.push(V());
  }, x = () => {
    const y = t.value;
    return [
      b(y[0]),
      y[1] ? b(y[1]) : V()
    ];
  }, m = () => t.value[1] ? x() : b($e(t.value[0])), C = () => (t.value || []).map((y) => b(y)), W = () => (Y(), n.modelAuto ? m() : n.multiDates ? C() : Array.isArray(t.value) ? T(() => x()) : b($e(t.value))), oe = (y) => y ? n.timePicker ? X($e(y)) : n.monthPicker ? Z($e(y)) : n.yearPicker ? j($e(y)) : n.multiDates ? Q($e(y)) : n.weekPicker ? le($e(y)) : P($e(y)) : null, ee = (y) => {
    const K = oe(y);
    A($e(K)) ? (t.value = $e(K), r()) : (t.value = null, q.value = "");
  }, O = () => {
    var K;
    const y = (Te) => {
      var we;
      return Dt(Te, (we = M.value.textInputOptions) == null ? void 0 : we.format);
    };
    return `${y(t.value[0])} ${(K = M.value.textInputOptions) == null ? void 0 : K.rangeSeparator} ${t.value[1] ? y(t.value[1]) : ""}`;
  }, l = () => {
    var y;
    return a.value && t.value ? Array.isArray(t.value) ? O() : Dt(t.value, (y = M.value.textInputOptions) == null ? void 0 : y.format) : _(t.value);
  }, i = () => {
    var y;
    return t.value ? n.multiDates ? t.value.map((K) => _(K)).join("; ") : n.textInput && typeof ((y = M.value.textInputOptions) == null ? void 0 : y.format) == "string" ? l() : _(t.value) : "";
  }, r = () => {
    !n.format || typeof n.format == "string" ? q.value = i() : q.value = n.format(t.value);
  }, c = (y) => {
    if (n.utc) {
      const K = new Date(y);
      return n.utc === "preserve" ? new Date(K.getTime() + K.getTimezoneOffset() * 6e4) : K;
    }
    return n.modelType ? n.modelType === "date" || n.modelType === "timestamp" ? k(new Date(y)) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? an(y, B(), /* @__PURE__ */ new Date()) : k(an(y, n.modelType, /* @__PURE__ */ new Date())) : k(new Date(y));
  }, b = (y) => y ? n.utc ? fa(y, n.utc === "preserve") : n.modelType ? n.modelType === "timestamp" ? +f(y) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? _(f(y)) : _(f(y), n.modelType) : f(y) : "", L = (y, K) => {
    K ? e("update:model-value", y, K) : e("update:model-value", y);
  }, I = (y) => Array.isArray(t.value) ? n.multiDates ? t.value.map((K) => y(K)) : [
    y(t.value[0]),
    t.value[1] ? y(t.value[1]) : V()
  ] : y($e(t.value)), g = (y) => L($e(I(y)));
  return {
    inputValue: q,
    internalModelValue: t,
    internalPresetName: s,
    checkBeforeEmit: () => t.value ? n.range ? n.partialRange ? t.value.length >= 1 : t.value.length === 2 : !!t.value : !1,
    parseExternalModelValue: ee,
    formatInputValue: r,
    emitModelValue: (y) => (r(), n.monthPicker ? g(S) : n.timePicker ? g(F) : n.yearPicker ? g(ke) : n.weekPicker ? L(t.value) : y ? L(W(), y) : L(W()))
  };
}, Qa = (e, n) => {
  const { validateMonthYearInRange: a, validateMaxDate: t, validateMinDate: s, defaults: f } = Ve(e), k = (A, v) => {
    let M = A;
    return f.value.filters.months.includes(pe(M)) ? (M = v ? ot(A, 1) : $t(A, 1), k(M, v)) : M;
  }, _ = (A, v) => {
    let M = A;
    return f.value.filters.years.includes(ke(M)) ? (M = v ? sa(A, 1) : ia(A, 1), _(M, v)) : M;
  }, B = (A) => {
    const v = Se(/* @__PURE__ */ new Date(), { month: e.month, year: e.year });
    let M = A ? ot(v, 1) : $t(v, 1), q = pe(M), J = ke(M);
    f.value.filters.months.includes(q) && (M = k(M, A), q = pe(M), J = ke(M)), f.value.filters.years.includes(J) && (M = _(M, A), J = ke(M)), a(q, J, A, e.preventMinMaxNavigation) && T(q, J);
  }, T = (A, v) => {
    n("update-month-year", { month: A, year: v });
  }, V = E(() => (A) => {
    if (!e.preventMinMaxNavigation || A && !e.maxDate || !A && !e.minDate)
      return !1;
    const v = Se(/* @__PURE__ */ new Date(), { month: e.month, year: e.year }), M = A ? ot(v, 1) : $t(v, 1), q = [pe(M), ke(M)];
    return A ? !t(...q) : !s(...q);
  });
  return { handleMonthYearChange: B, isDisabled: V, updateMonthYear: T };
};
var It = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(It || {});
const er = (e, n, a, t) => {
  const s = H({
    top: "0",
    left: "0",
    transform: "none"
  }), f = H(!1), k = Tt(t, "teleportCenter");
  Qe(k, () => {
    J();
  });
  const _ = (P) => {
    if (t.teleport) {
      const Y = P.getBoundingClientRect();
      return {
        left: Y.left + window.scrollX,
        top: Y.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, B = (P, Y) => {
    s.value.left = `${P + Y}px`, s.value.transform = "translateX(-100%)";
  }, T = (P) => {
    s.value.left = `${P}px`, s.value.transform = "translateX(0)";
  }, V = (P, Y, x = !1) => {
    t.position === It.left && T(P), t.position === It.right && B(P, Y), t.position === It.center && (s.value.left = `${P + Y / 2}px`, s.value.transform = x ? "translate(-50%, -50%)" : "translateX(-50%)");
  }, A = (P) => {
    const { width: Y, height: x } = P.getBoundingClientRect(), { top: m, left: C } = t.altPosition ? t.altPosition(P) : _(P);
    return { top: +m, left: +C, width: Y, height: x };
  }, v = () => {
    const P = Me(n);
    if (P) {
      const { top: Y, left: x, width: m, height: C } = A(P);
      s.value.top = `${Y + C / 2}px`, s.value.transform = "translateY(-50%)", V(x, m, !0);
    }
  }, M = () => {
    s.value.left = "50%", s.value.top = "50%", s.value.transform = "translate(-50%, -50%)", s.value.position = "fixed";
  }, q = () => {
    const P = Me(n), { top: Y, left: x, transform: m } = t.altPosition(P);
    s.value = { top: `${Y}px`, left: `${x}px`, transform: m || "" };
  }, J = (P = !0) => {
    if (!t.inline)
      return k.value ? M() : t.altPosition !== null ? q() : (P && a("recalculate-position"), Z());
  }, F = ({
    inputEl: P,
    menuEl: Y,
    left: x,
    width: m
  }) => {
    window.screen.width > 768 && V(x, m), R(P, Y);
  }, S = (P, Y) => {
    const { top: x, left: m, height: C, width: W } = A(P);
    s.value.top = `${C + x + +t.offset}px`, F({ inputEl: P, menuEl: Y, left: m, width: W }), f.value = !1;
  }, j = (P, Y) => {
    const { top: x, left: m, width: C } = A(P), { height: W } = Y.getBoundingClientRect();
    s.value.top = `${x - W - +t.offset}px`, F({ inputEl: P, menuEl: Y, left: m, width: C }), f.value = !0;
  }, R = (P, Y) => {
    if (t.autoPosition) {
      const { left: x, width: m } = A(P), { left: C, right: W } = Y.getBoundingClientRect();
      return C <= 0 || C <= x ? T(x) : W >= document.documentElement.clientWidth ? B(x, m) : V(x, m);
    }
  }, X = (P, Y) => {
    const { height: x } = Y.getBoundingClientRect(), { top: m, height: C } = P.getBoundingClientRect(), oe = window.innerHeight - m - C, ee = m;
    return x <= oe ? S(P, Y) : x > oe && x <= ee ? j(P, Y) : oe >= ee ? S(P, Y) : j(P, Y);
  }, Z = () => {
    const P = Me(n), Y = Me(e);
    if (P && Y)
      return t.autoPosition ? X(P, Y) : S(P, Y);
  }, Q = function(P) {
    if (P) {
      const Y = P.scrollHeight > P.clientHeight, m = window.getComputedStyle(P).overflowY.indexOf("hidden") !== -1;
      return Y && !m;
    }
    return !0;
  }, le = function(P) {
    return !P || P === document.body || P.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : Q(P) ? P : le(P.parentNode);
  };
  return { openOnTop: f, menuPosition: s, setMenuPosition: J, setInitialPosition: v, getScrollableParent: le };
}, dt = [
  { name: "clock-icon", use: ["time", "calendar"] },
  { name: "arrow-left", use: ["month-year", "calendar"] },
  { name: "arrow-right", use: ["month-year", "calendar"] },
  { name: "arrow-up", use: ["time", "calendar"] },
  { name: "arrow-down", use: ["time", "calendar"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar"] },
  { name: "day", use: ["calendar"] },
  { name: "month-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay", use: ["month-year"] },
  { name: "month-overlay", use: ["month-year"] },
  { name: "month-overlay-header", use: ["month-year"] },
  { name: "year-overlay-header", use: ["month-year"] },
  { name: "hours-overlay-value", use: ["calendar", "time"] },
  { name: "minutes-overlay-value", use: ["calendar", "time"] },
  { name: "seconds-overlay-value", use: ["calendar", "time"] },
  { name: "hours", use: ["calendar", "time"] },
  { name: "minutes", use: ["calendar", "time"] },
  { name: "month", use: ["calendar", "month-year"] },
  { name: "year", use: ["calendar", "month-year"] },
  { name: "action-select", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar"] },
  { name: "marker-tooltip", use: ["calendar"] },
  { name: "now-button", use: [] },
  { name: "time-picker-overlay", use: ["calendar", "time"] },
  { name: "am-pm-button", use: ["calendar", "time"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year"] },
  { name: "time-picker", use: ["menu"] },
  { name: "action-row", use: ["action"] }
], tr = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], nr = {
  all: () => dt,
  monthYear: () => dt.filter((e) => e.use.includes("month-year")),
  input: () => tr,
  timePicker: () => dt.filter((e) => e.use.includes("time")),
  action: () => dt.filter((e) => e.use.includes("action")),
  calendar: () => dt.filter((e) => e.use.includes("calendar")),
  menu: () => dt.filter((e) => e.use.includes("menu"))
}, st = (e, n, a) => {
  const t = [];
  return nr[n]().forEach((s) => {
    e[s.name] && t.push(s.name);
  }), a && a.length && a.forEach((s) => {
    s.slot && t.push(s.slot);
  }), t;
}, Ut = (e) => ({ transitionName: E(() => (a) => e && typeof e != "boolean" ? a ? e.open : e.close : ""), showTransition: !!e }), tt = {
  internalRangePickedName: { type: String, default: "" },
  presetRangePickedName: { type: String, default: null },
  presetRangesDynamic: { type: Object, default: { dynamic: !1, data: null } },
  qweqweqwe: { type: Function, default: null },
  multiCalendars: { type: [Boolean, Number, String], default: null },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  closeOnScroll: { type: Boolean, default: !1 },
  autoPosition: { type: Boolean, default: !0 },
  closeOnAutoApply: { type: Boolean, default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  multiCalendarsSolo: { type: Boolean, default: !1 },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: () => [] },
  showNowButton: { type: Boolean, default: !1 },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  modeHeight: { type: [Number, String], default: 255 },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetRanges: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  keepActionRow: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  multiStatic: { type: Boolean, default: !0 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Array, Function],
    default: null
  },
  highlightWeekDays: {
    type: Array,
    default: null
  },
  highlightDisabledDays: { type: Boolean, default: !1 },
  teleport: { type: [String, Boolean], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function],
    default: null
  },
  calendarClassName: { type: String, default: null },
  noSwipe: { type: Boolean, default: !1 },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  inlineWithInput: { type: Boolean, default: !1 },
  textInputOptions: { type: Object, default: () => null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: Boolean, default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: Boolean, default: !1 },
  textInput: { type: Boolean, default: !1 },
  onClickOutside: { type: Function, default: null },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: Boolean, default: !1 }
}, ar = ["aria-label", "aria-disabled", "aria-readonly"], rr = {
  key: 1,
  class: "dp__input_wrap"
}, lr = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "onKeydown"], or = {
  key: 2,
  class: "dp__input_icon"
}, sr = {
  key: 4,
  class: "dp__clear_icon"
}, ir = /* @__PURE__ */ Ue({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...tt
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { getDefaultPattern: s, isValidDate: f, defaults: k, getDefaultStartTime: _, assignDefaultTime: B } = Ve(t), T = H(), V = H(null), A = H(!1), v = E(
      () => ({
        dp__pointer: !t.disabled && !t.readonly && !t.textInput,
        dp__disabled: t.disabled,
        dp__input_readonly: !t.textInput,
        dp__input: !0,
        dp__input_icon_pad: !t.hideInputIcon,
        dp__input_valid: t.state,
        dp__input_invalid: t.state === !1,
        dp__input_focus: A.value || t.isMenuOpen,
        dp__input_reg: !t.textInput,
        [t.inputClassName]: !!t.inputClassName
      })
    ), M = () => {
      a("set-input-date", null), t.autoApply && (a("set-empty-date"), T.value = null);
    }, q = (m) => {
      var W;
      const C = _();
      return ca(
        m,
        ((W = k.value.textInputOptions) == null ? void 0 : W.format) || s(),
        C || B({}),
        t.inputValue
      );
    }, J = (m) => {
      const { rangeSeparator: C } = k.value.textInputOptions, [W, oe] = m.split(`${C}`);
      if (W) {
        const ee = q(W.trim()), O = oe ? q(oe.trim()) : null, l = ee && O ? [ee, O] : [ee];
        T.value = ee ? l : null;
      }
    }, F = (m) => {
      if (t.range)
        J(m);
      else if (t.multiDates) {
        const C = m.split(";");
        T.value = C.map((W) => q(W.trim())).filter((W) => W);
      } else
        T.value = q(m);
    }, S = (m) => {
      var W;
      const { value: C } = m.target;
      C !== "" ? ((W = k.value.textInputOptions) != null && W.openMenu && !t.isMenuOpen && a("open"), F(C), a("set-input-date", T.value)) : M(), a("update:input-value", C);
    }, j = () => {
      var m, C;
      (m = k.value.textInputOptions) != null && m.enterSubmit && f(T.value) && t.inputValue !== "" ? (a("set-input-date", T.value, !0), T.value = null) : (C = k.value.textInputOptions) != null && C.enterSubmit && t.inputValue === "" && (T.value = null, a("clear"));
    }, R = () => {
      var m, C;
      (m = k.value.textInputOptions) != null && m.tabSubmit && f(T.value) && t.inputValue !== "" ? (a("set-input-date", T.value, !0), T.value = null) : (C = k.value.textInputOptions) != null && C.tabSubmit && t.inputValue === "" && (T.value = null, a("clear"));
    }, X = () => {
      A.value = !0, a("focus");
    }, Z = (m) => {
      var C;
      m.preventDefault(), m.stopImmediatePropagation(), m.stopPropagation(), t.textInput && ((C = k.value.textInputOptions) != null && C.openMenu) && !t.inlineWithInput ? t.isMenuOpen ? k.value.textInputOptions.enterSubmit && a("select-date") : a("open") : t.textInput || a("toggle");
    }, Q = () => {
      A.value = !1, t.isMenuOpen || a("blur"), t.autoApply && t.textInput && T.value && (a("set-input-date", T.value), a("select-date"), T.value = null);
    }, le = () => {
      a("clear");
    }, P = (m) => {
      if (!t.textInput) {
        if (m.code === "Tab")
          return;
        m.preventDefault();
      }
    };
    return n({
      focusInput: () => {
        V.value && V.value.focus({ preventScroll: !0 });
      },
      setParsedDate: (m) => {
        T.value = m;
      }
    }), (m, C) => {
      var W;
      return p(), N("div", {
        onClick: Z,
        "aria-label": (W = d(k).ariaLabels) == null ? void 0 : W.input,
        role: "textbox",
        "aria-multiline": "false",
        "aria-disabled": m.disabled,
        "aria-readonly": m.readonly
      }, [
        m.$slots.trigger && !m.$slots["dp-input"] && !m.inline ? G(m.$slots, "trigger", { key: 0 }) : $("", !0),
        !m.$slots.trigger && (!m.inline || m.inlineWithInput) ? (p(), N("div", rr, [
          m.$slots["dp-input"] && !m.$slots.trigger && !m.inline ? G(m.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            onInput: S,
            onEnter: j,
            onTab: R,
            onClear: le,
            onBlur: Q
          }) : $("", !0),
          m.$slots["dp-input"] ? $("", !0) : (p(), N("input", {
            key: 1,
            ref_key: "inputRef",
            ref: V,
            id: m.uid ? `dp-input-${m.uid}` : void 0,
            name: m.name,
            class: ye(d(v)),
            inputmode: m.textInput ? "text" : "none",
            placeholder: m.placeholder,
            disabled: m.disabled,
            readonly: m.readonly,
            required: m.required,
            value: e.inputValue,
            autocomplete: m.autocomplete,
            onInput: S,
            onKeydown: [
              ue(Z, ["enter"]),
              ue(R, ["tab"]),
              P
            ],
            onBlur: Q,
            onFocus: X,
            onKeypress: P
          }, null, 42, lr)),
          m.$slots["input-icon"] && !m.hideInputIcon ? (p(), N("span", or, [
            G(m.$slots, "input-icon")
          ])) : $("", !0),
          !m.$slots["input-icon"] && !m.hideInputIcon && !m.$slots["dp-input"] ? (p(), ve(d(Lt), {
            key: 3,
            class: "dp__input_icon dp__input_icons"
          })) : $("", !0),
          m.$slots["clear-icon"] && e.inputValue && m.clearable && !m.disabled && !m.readonly ? (p(), N("span", sr, [
            G(m.$slots, "clear-icon", { clear: le })
          ])) : $("", !0),
          m.clearable && !m.$slots["clear-icon"] && e.inputValue && !m.disabled && !m.readonly ? (p(), ve(d(da), {
            key: 5,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: At(le, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : $("", !0)
        ])) : $("", !0)
      ], 8, ar);
    };
  }
}), ur = { class: "dp__action_row" }, dr = { class: "dp__selection_preview" }, cr = { class: "dp__action_buttons" }, fr = ["onKeydown"], mr = /* @__PURE__ */ Ue({
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...tt
  },
  emits: ["close-picker", "select-date", "invalid-select"],
  setup(e, { emit: n }) {
    const a = e, { formatDate: t, isValidTime: s, defaults: f } = Ve(a), { buildMatrix: k } = et(), _ = H(null), B = H(null);
    Le(() => {
      a.arrowNavigation && k([Me(_), Me(B)], "actionRow");
    });
    const T = E(() => a.range && !a.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : !0), V = E(() => !v.value || !M.value || !T.value), A = E(() => ({
      dp__action: !0,
      dp__select: !0,
      dp__action_disabled: V.value
    })), v = E(() => !a.enableTimePicker || a.ignoreTimeValidation ? !0 : s(a.internalModelValue)), M = E(() => a.monthPicker ? a.range && Array.isArray(a.internalModelValue) ? !a.internalModelValue.filter((X) => !S(X)).length : S(a.internalModelValue) : !0), q = () => {
      const R = f.value.previewFormat;
      return a.timePicker || a.monthPicker, R($e(a.internalModelValue));
    }, J = () => {
      const R = a.internalModelValue;
      return f.value.multiCalendars > 0 ? `${t(R[0])} - ${t(R[1])}` : [t(R[0]), t(R[1])];
    }, F = E(() => !a.internalModelValue || !a.menuMount ? "" : typeof f.value.previewFormat == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? J() : a.multiDates ? a.internalModelValue.map((R) => `${t(R)}`) : a.modelAuto ? `${t(a.internalModelValue[0])}` : `${t(a.internalModelValue[0])} -` : t(a.internalModelValue) : q()), S = (R) => {
      if (!a.monthPicker)
        return !0;
      let X = !0;
      const Z = D(wt(R));
      if (a.minDate && a.maxDate) {
        const Q = D(wt(a.minDate)), le = D(wt(a.maxDate));
        return Be(Z, Q) && Ce(Z, le) || ge(Z, Q) || ge(Z, le);
      }
      if (a.minDate) {
        const Q = D(wt(a.minDate));
        X = Be(Z, Q) || ge(Z, Q);
      }
      if (a.maxDate) {
        const Q = D(wt(a.maxDate));
        X = Ce(Z, Q) || ge(Z, Q);
      }
      return X;
    }, j = () => {
      v.value && M.value && T.value ? n("select-date") : n("invalid-select");
    };
    return (R, X) => (p(), N("div", ur, [
      R.$slots["action-row"] ? G(R.$slots, "action-row", Oe(be({ key: 0 }, {
        internalModelValue: e.internalModelValue,
        disabled: d(V),
        selectDate: () => R.$emit("select-date"),
        closePicker: () => R.$emit("close-picker")
      }))) : (p(), N(me, { key: 1 }, [
        ne("div", dr, [
          R.$slots["action-preview"] ? G(R.$slots, "action-preview", {
            key: 0,
            value: e.internalModelValue
          }) : $("", !0),
          R.$slots["action-preview"] ? $("", !0) : (p(), N(me, { key: 1 }, [
            Array.isArray(d(F)) ? $("", !0) : (p(), N(me, { key: 0 }, [
              We(Pe(d(F)), 1)
            ], 64)),
            Array.isArray(d(F)) ? (p(!0), N(me, { key: 1 }, De(d(F), (Z, Q) => (p(), N("div", { key: Q }, Pe(Z), 1))), 128)) : $("", !0)
          ], 64))
        ]),
        ne("div", cr, [
          R.$slots["action-select"] ? G(R.$slots, "action-select", {
            key: 0,
            value: e.internalModelValue
          }) : $("", !0),
          R.$slots["action-select"] ? $("", !0) : (p(), N(me, { key: 1 }, [
            R.inline ? $("", !0) : (p(), N("span", {
              key: 0,
              class: "dp__action dp__cancel",
              ref_key: "cancelButtonRef",
              ref: _,
              tabindex: "0",
              onClick: X[0] || (X[0] = (Z) => R.$emit("close-picker")),
              onKeydown: [
                X[1] || (X[1] = ue((Z) => R.$emit("close-picker"), ["enter"])),
                X[2] || (X[2] = ue((Z) => R.$emit("close-picker"), ["space"]))
              ]
            }, Pe(R.cancelText), 545)),
            ne("span", {
              class: ye(d(A)),
              tabindex: "0",
              onKeydown: [
                ue(j, ["enter"]),
                ue(j, ["space"])
              ],
              onClick: j,
              "data-test": "select-button",
              ref_key: "selectButtonRef",
              ref: B
            }, Pe(R.selectText), 43, fr)
          ], 64))
        ])
      ], 64))
    ]));
  }
}), vr = ["aria-label"], yr = {
  class: "dp__calendar_header",
  role: "row"
}, gr = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, hr = /* @__PURE__ */ ne("div", { class: "dp__calendar_header_separator" }, null, -1), pr = ["aria-label"], kr = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, wr = { class: "dp__cell_inner" }, br = ["aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], Dr = /* @__PURE__ */ Ue({
  __name: "Calendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    getWeekNum: {
      type: Function,
      default: () => ""
    },
    specificMode: { type: Boolean, default: !1 },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...tt
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { buildMultiLevelMatrix: s } = et(), { setDateMonthOrYear: f, defaults: k } = Ve(t), _ = H(null), B = H({
      bottom: "",
      left: "",
      transform: ""
    }), T = H([]), V = H(null), A = H(!0), v = H(""), M = H({ startX: 0, endX: 0, startY: 0, endY: 0 }), q = H([]), J = H({ left: "50%" }), F = E(() => t.dayNames ? Array.isArray(t.dayNames) ? t.dayNames : t.dayNames(t.locale, +t.weekStart) : La(t.locale, +t.weekStart));
    Le(() => {
      a("mount", { cmp: "calendar", refs: T }), t.noSwipe || V.value && (V.value.addEventListener("touchstart", m, { passive: !1 }), V.value.addEventListener("touchend", C, { passive: !1 }), V.value.addEventListener("touchmove", W, { passive: !1 })), t.monthChangeOnScroll && V.value && V.value.addEventListener("wheel", O, { passive: !1 });
    });
    const S = (l) => l ? t.vertical ? "vNext" : "next" : t.vertical ? "vPrevious" : "previous", j = (l, i) => {
      if (t.transitions) {
        const r = Fe(f(D(), t.month, t.year));
        v.value = Be(Fe(f(D(), l, i)), r) ? k.value.transitions[S(!0)] : k.value.transitions[S(!1)], A.value = !1, Xe(() => {
          A.value = !0;
        });
      }
    }, R = E(
      () => ({
        dp__calendar_wrap: !0,
        [t.calendarClassName]: !!t.calendarClassName
      })
    ), X = E(() => (l) => {
      const i = za(l);
      return {
        dp__marker_dot: i.type === "dot",
        dp__marker_line: i.type === "line"
      };
    }), Z = E(() => (l) => ge(l, _.value)), Q = E(() => ({
      dp__calendar: !0,
      dp__calendar_next: k.value.multiCalendars > 0 && t.instance !== 0
    })), le = E(() => (l) => t.hideOffsetDates ? l.current : !0), P = E(() => t.specificMode ? { height: `${t.modeHeight}px` } : void 0), Y = async (l, i, r) => {
      var c, b;
      if (a("set-hover-date", l), (b = (c = l.marker) == null ? void 0 : c.tooltip) != null && b.length) {
        const L = Me(T.value[i][r]);
        if (L) {
          const { width: I, height: g } = L.getBoundingClientRect();
          _.value = l.value;
          let w = { left: `${I / 2}px` }, ce = -50;
          if (await Xe(), q.value[0]) {
            const { left: y, width: K } = q.value[0].getBoundingClientRect();
            y < 0 && (w = { left: "0" }, ce = 0, J.value.left = `${I / 2}px`), window.innerWidth < y + K && (w = { right: "0" }, ce = 0, J.value.left = `${K - I / 2}px`);
          }
          B.value = {
            bottom: `${g}px`,
            ...w,
            transform: `translateX(${ce}%)`
          }, a("tooltip-open", l.marker);
        }
      }
    }, x = (l) => {
      _.value && (_.value = null, B.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), a("tooltip-close", l.marker));
    }, m = (l) => {
      M.value.startX = l.changedTouches[0].screenX, M.value.startY = l.changedTouches[0].screenY;
    }, C = (l) => {
      M.value.endX = l.changedTouches[0].screenX, M.value.endY = l.changedTouches[0].screenY, oe();
    }, W = (l) => {
      t.vertical && !t.inline && l.preventDefault();
    }, oe = () => {
      const l = t.vertical ? "Y" : "X";
      Math.abs(M.value[`start${l}`] - M.value[`end${l}`]) > 10 && a("handle-swipe", M.value[`start${l}`] > M.value[`end${l}`] ? "right" : "left");
    }, ee = (l, i, r) => {
      l && (Array.isArray(T.value[i]) ? T.value[i][r] = l : T.value[i] = [l]), t.arrowNavigation && s(T.value, "calendar");
    }, O = (l) => {
      t.monthChangeOnScroll && (l.preventDefault(), a("handle-scroll", l));
    };
    return n({ triggerTransition: j }), (l, i) => {
      var r;
      return p(), N("div", {
        class: ye(d(Q))
      }, [
        ne("div", {
          style: lt(d(P))
        }, [
          e.specificMode ? $("", !0) : (p(), N("div", {
            key: 0,
            ref_key: "calendarWrapRef",
            ref: V,
            class: ye(d(R)),
            role: "grid",
            "aria-label": (r = d(k).ariaLabels) == null ? void 0 : r.calendarWrap
          }, [
            ne("div", yr, [
              l.weekNumbers ? (p(), N("div", gr, Pe(l.weekNumName), 1)) : $("", !0),
              (p(!0), N(me, null, De(d(F), (c, b) => (p(), N("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: b,
                "data-test": "calendar-header"
              }, [
                l.$slots["calendar-header"] ? G(l.$slots, "calendar-header", {
                  key: 0,
                  day: c,
                  index: b
                }) : $("", !0),
                l.$slots["calendar-header"] ? $("", !0) : (p(), N(me, { key: 1 }, [
                  We(Pe(c), 1)
                ], 64))
              ]))), 128))
            ]),
            hr,
            Je(mt, {
              name: v.value,
              css: !!l.transitions
            }, {
              default: ie(() => {
                var c;
                return [
                  A.value ? (p(), N("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": (c = d(k).ariaLabels) == null ? void 0 : c.calendarDays
                  }, [
                    (p(!0), N(me, null, De(e.mappedDates, (b, L) => (p(), N("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: L
                    }, [
                      l.weekNumbers ? (p(), N("div", kr, [
                        ne("div", wr, Pe(e.getWeekNum(b.days)), 1)
                      ])) : $("", !0),
                      (p(!0), N(me, null, De(b.days, (I, g) => {
                        var w, ce, y;
                        return p(), N("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (K) => ee(K, L, g),
                          key: g + L,
                          "aria-selected": I.classData.dp__active_date || I.classData.dp__range_start || I.classData.dp__range_start,
                          "aria-disabled": I.classData.dp__cell_disabled,
                          "aria-label": (ce = (w = d(k).ariaLabels) == null ? void 0 : w.day) == null ? void 0 : ce.call(w, I),
                          tabindex: "0",
                          "data-test": I.value,
                          onClick: At((K) => l.$emit("select-date", I), ["stop", "prevent"]),
                          onKeydown: [
                            ue((K) => l.$emit("select-date", I), ["enter"]),
                            ue((K) => l.$emit("handle-space", I), ["space"])
                          ],
                          onMouseenter: (K) => Y(I, L, g),
                          onMouseleave: (K) => x(I)
                        }, [
                          ne("div", {
                            class: ye(["dp__cell_inner", I.classData])
                          }, [
                            l.$slots.day && d(le)(I) ? G(l.$slots, "day", {
                              key: 0,
                              day: +I.text,
                              date: I.value
                            }) : $("", !0),
                            l.$slots.day ? $("", !0) : (p(), N(me, { key: 1 }, [
                              We(Pe(I.text), 1)
                            ], 64)),
                            I.marker && d(le)(I) ? (p(), N("div", {
                              key: 2,
                              class: ye(d(X)(I.marker)),
                              style: lt(I.marker.color ? { backgroundColor: I.marker.color } : {})
                            }, null, 6)) : $("", !0),
                            d(Z)(I.value) ? (p(), N("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              ref_for: !0,
                              ref_key: "activeTooltip",
                              ref: q,
                              style: lt(B.value)
                            }, [
                              (y = I.marker) != null && y.tooltip ? (p(), N("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: i[0] || (i[0] = At(() => {
                                }, ["stop"]))
                              }, [
                                (p(!0), N(me, null, De(I.marker.tooltip, (K, Te) => (p(), N("div", {
                                  key: Te,
                                  class: "dp__tooltip_text"
                                }, [
                                  l.$slots["marker-tooltip"] ? G(l.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltip: K,
                                    day: I.value
                                  }) : $("", !0),
                                  l.$slots["marker-tooltip"] ? $("", !0) : (p(), N(me, { key: 1 }, [
                                    ne("div", {
                                      class: "dp__tooltip_mark",
                                      style: lt(K.color ? { backgroundColor: K.color } : {})
                                    }, null, 4),
                                    ne("div", null, Pe(K.text), 1)
                                  ], 64))
                                ]))), 128)),
                                ne("div", {
                                  class: "dp__arrow_bottom_tp",
                                  style: lt(J.value)
                                }, null, 4)
                              ])) : $("", !0)
                            ], 4)) : $("", !0)
                          ], 2)
                        ], 40, br);
                      }), 128))
                    ]))), 128))
                  ], 8, pr)) : $("", !0)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 10, vr))
        ], 4)
      ], 2);
    };
  }
}), $r = ["aria-label", "aria-disabled"], tn = /* @__PURE__ */ Ue({
  __name: "ActionIcon",
  props: {
    ariaLabel: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: n }) {
    const a = H(null);
    return Le(() => n("set-ref", a)), (t, s) => (p(), N("div", {
      class: "dp__month_year_col_nav",
      onClick: s[0] || (s[0] = (f) => t.$emit("activate")),
      onKeydown: [
        s[1] || (s[1] = ue((f) => t.$emit("activate"), ["enter"])),
        s[2] || (s[2] = ue((f) => t.$emit("activate"), ["space"]))
      ],
      tabindex: "0",
      role: "button",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled,
      ref_key: "elRef",
      ref: a
    }, [
      ne("div", {
        class: ye(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        G(t.$slots, "default")
      ], 2)
    ], 40, $r));
  }
}), Mr = ["onKeydown"], Tr = { class: "dp__selection_grid_header" }, Ar = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], Sr = ["aria-label", "onKeydown"], Mt = /* @__PURE__ */ Ue({
  __name: "SelectionGrid",
  props: {
    items: { type: Array, default: () => [] },
    modelValue: { type: [String, Number], default: null },
    multiModelValue: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: [Number, String], default: null },
    maxValue: { type: [Number, String], default: null },
    year: { type: Number, default: 0 },
    skipActive: { type: Boolean, default: !1 },
    headerRefs: { type: Array, default: () => [] },
    skipButtonRef: { type: Boolean, default: !1 },
    monthPicker: { type: Boolean, default: !1 },
    yearPicker: { type: Boolean, default: !1 },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "selected", "toggle", "reset-flow"],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setSelectionGrid: s, buildMultiLevelMatrix: f, setMonthPicker: k } = et(), { hideNavigationButtons: _ } = Ve(t), B = H(!1), T = H(null), V = H(null), A = H([]), v = H(), M = H(null), q = H(0), J = H(null);
    qn(() => {
      T.value = null;
    }), Le(() => {
      Xe().then(() => Y()), S(), F(!0);
    }), On(() => F(!1));
    const F = (O) => {
      var l;
      t.arrowNavigation && ((l = t.headerRefs) != null && l.length ? k(O) : s(O));
    }, S = () => {
      const O = Me(V);
      O && (t.textInput || O.focus({ preventScroll: !0 }), B.value = O.clientHeight < O.scrollHeight);
    }, j = E(
      () => ({
        dp__overlay: !0
      })
    ), R = E(() => ({
      dp__overlay_col: !0
    })), X = (O) => t.skipActive ? !1 : O.value === t.modelValue, Z = E(() => t.items.map((O) => O.filter((l) => l).map((l) => {
      var c, b, L;
      const i = t.disabledValues.some((I) => I === l.value) || P(l.value), r = (c = t.multiModelValue) != null && c.length ? (b = t.multiModelValue) == null ? void 0 : b.some(
        (I) => ge(
          I,
          it(
            t.monthPicker ? Ot(/* @__PURE__ */ new Date(), l.value) : /* @__PURE__ */ new Date(),
            t.monthPicker ? t.year : l.value
          )
        )
      ) : X(l);
      return {
        ...l,
        className: {
          dp__overlay_cell_active: r,
          dp__overlay_cell: !r,
          dp__overlay_cell_disabled: i,
          dp__overlay_cell_active_disabled: i && r,
          dp__overlay_cell_pad: !0,
          dp__cell_in_between: (L = t.multiModelValue) != null && L.length && t.skipActive ? m(l.value) : !1
        }
      };
    }))), Q = E(
      () => ({
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: B.value,
        dp__button_bottom: t.autoApply
      })
    ), le = E(() => {
      var O, l;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((O = t.items) == null ? void 0 : O.length) <= 6,
        dp__container_block: ((l = t.items) == null ? void 0 : l.length) > 6
      };
    }), P = (O) => {
      const l = t.maxValue || t.maxValue === 0, i = t.minValue || t.minValue === 0;
      return !l && !i ? !1 : l && i ? +O > +t.maxValue || +O < +t.minValue : l ? +O > +t.maxValue : i ? +O < +t.minValue : !1;
    }, Y = () => {
      const O = Me(T), l = Me(V), i = Me(M), r = Me(J), c = i ? i.getBoundingClientRect().height : 0;
      l && (q.value = l.getBoundingClientRect().height - c), O && r && (r.scrollTop = O.offsetTop - r.offsetTop - (q.value / 2 - O.getBoundingClientRect().height) - c);
    }, x = (O) => {
      !t.disabledValues.some((l) => l === O) && !P(O) && (a("update:model-value", O), a("selected"));
    }, m = (O) => {
      const l = t.monthPicker ? t.year : O;
      return Wn(
        t.multiModelValue,
        it(
          t.monthPicker ? Ot(/* @__PURE__ */ new Date(), v.value || 0) : /* @__PURE__ */ new Date(),
          t.monthPicker ? l : v.value || l
        ),
        it(t.monthPicker ? Ot(/* @__PURE__ */ new Date(), O) : /* @__PURE__ */ new Date(), l)
      );
    }, C = () => {
      a("toggle"), a("reset-flow");
    }, W = () => {
      t.escClose && C();
    }, oe = (O, l, i, r) => {
      O && (l.value === +t.modelValue && !t.disabledValues.includes(l.value) && (T.value = O), t.arrowNavigation && (Array.isArray(A.value[i]) ? A.value[i][r] = O : A.value[i] = [O], ee()));
    }, ee = () => {
      var l, i;
      const O = (l = t.headerRefs) != null && l.length ? [t.headerRefs].concat(A.value) : A.value.concat([t.skipButtonRef ? [] : [M.value]]);
      f($e(O), (i = t.headerRefs) != null && i.length ? "monthPicker" : "selectionGrid");
    };
    return n({ focusGrid: S }), (O, l) => {
      var i;
      return p(), N("div", {
        ref_key: "gridWrapRef",
        ref: V,
        class: ye(d(j)),
        role: "dialog",
        tabindex: "0",
        onKeydown: ue(W, ["esc"])
      }, [
        ne("div", {
          class: ye(d(le)),
          ref_key: "containerRef",
          ref: J,
          role: "grid",
          style: lt({ height: `${q.value}px` })
        }, [
          ne("div", Tr, [
            G(O.$slots, "header")
          ]),
          O.$slots.overlay ? G(O.$slots, "overlay", { key: 0 }) : (p(!0), N(me, { key: 1 }, De(d(Z), (r, c) => (p(), N("div", {
            class: ye(["dp__overlay_row", { dp__flex_row: d(Z).length >= 3 }]),
            key: c,
            role: "row"
          }, [
            (p(!0), N(me, null, De(r, (b, L) => (p(), N("div", {
              role: "gridcell",
              class: ye(d(R)),
              key: b.value,
              "aria-selected": b.value === e.modelValue && !e.disabledValues.includes(b.value),
              "aria-disabled": b.className.dp__overlay_cell_disabled,
              ref_for: !0,
              ref: (I) => oe(I, b, c, L),
              tabindex: "0",
              "data-test": b.text,
              onClick: (I) => x(b.value),
              onKeydown: [
                ue((I) => x(b.value), ["enter"]),
                ue((I) => x(b.value), ["space"])
              ],
              onMouseover: (I) => v.value = b.value
            }, [
              ne("div", {
                class: ye(b.className)
              }, [
                O.$slots.item ? G(O.$slots, "item", {
                  key: 0,
                  item: b
                }) : $("", !0),
                O.$slots.item ? $("", !0) : (p(), N(me, { key: 1 }, [
                  We(Pe(b.text), 1)
                ], 64))
              ], 2)
            ], 42, Ar))), 128))
          ], 2))), 128))
        ], 6),
        O.$slots["button-icon"] ? _t((p(), N("div", {
          key: 0,
          role: "button",
          "aria-label": (i = e.ariaLabels) == null ? void 0 : i.toggleOverlay,
          class: ye(d(Q)),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: M,
          onClick: C,
          onKeydown: ue(C, ["enter"])
        }, [
          G(O.$slots, "button-icon")
        ], 42, Sr)), [
          [Nt, !d(_)(e.type)]
        ]) : $("", !0)
      ], 42, Mr);
    };
  }
}), Pr = ["aria-label"], Rn = /* @__PURE__ */ Ue({
  __name: "RegularPicker",
  props: {
    ariaLabel: { type: String, default: "" },
    showSelectionGrid: { type: Boolean, default: !1 },
    modelValue: { type: Number, default: null },
    items: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: Number, default: null },
    maxValue: { type: Number, default: null },
    slotName: { type: String, default: "" },
    overlaySlot: { type: String, default: "" },
    headerRefs: { type: Array, default: () => [] },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    transitions: { type: [Object, Boolean], default: !1 },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "toggle", "set-ref"],
  setup(e, { emit: n }) {
    const a = e, { transitionName: t, showTransition: s } = Ut(a.transitions), f = H(null);
    return Le(() => n("set-ref", f)), (k, _) => (p(), N(me, null, [
      ne("div", {
        class: "dp__month_year_select",
        onClick: _[0] || (_[0] = (B) => k.$emit("toggle")),
        onKeydown: [
          _[1] || (_[1] = ue((B) => k.$emit("toggle"), ["enter"])),
          _[2] || (_[2] = ue((B) => k.$emit("toggle"), ["space"]))
        ],
        role: "button",
        "aria-label": e.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: f
      }, [
        G(k.$slots, "default")
      ], 40, Pr),
      Je(mt, {
        name: d(t)(e.showSelectionGrid),
        css: d(s)
      }, {
        default: ie(() => [
          e.showSelectionGrid ? (p(), ve(Mt, be({ key: 0 }, {
            modelValue: e.modelValue,
            items: e.items,
            disabledValues: e.disabledValues,
            minValue: e.minValue,
            maxValue: e.maxValue,
            escClose: e.escClose,
            type: e.type,
            arrowNavigation: e.arrowNavigation,
            textInput: e.textInput,
            autoApply: e.autoApply,
            ariaLabels: e.ariaLabels,
            hideNavigation: e.hideNavigation
          }, {
            "header-refs": [],
            "onUpdate:modelValue": _[3] || (_[3] = (B) => k.$emit("update:model-value", B)),
            onToggle: _[4] || (_[4] = (B) => k.$emit("toggle"))
          }), Ye({
            "button-icon": ie(() => [
              k.$slots["calendar-icon"] ? G(k.$slots, "calendar-icon", { key: 0 }) : $("", !0),
              k.$slots["calendar-icon"] ? $("", !0) : (p(), ve(d(Lt), { key: 1 }))
            ]),
            _: 2
          }, [
            k.$slots[e.slotName] ? {
              name: "item",
              fn: ie(({ item: B }) => [
                G(k.$slots, e.slotName, { item: B })
              ]),
              key: "0"
            } : void 0,
            k.$slots[e.overlaySlot] ? {
              name: "overlay",
              fn: ie(() => [
                G(k.$slots, e.overlaySlot)
              ]),
              key: "1"
            } : void 0,
            k.$slots[`${e.overlaySlot}-header`] ? {
              name: "header",
              fn: ie(() => [
                G(k.$slots, `${e.overlaySlot}-header`)
              ]),
              key: "2"
            } : void 0
          ]), 1040)) : $("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), Cr = { class: "dp__month_year_row" }, _r = { class: "dp__month_year_wrap" }, Nr = { class: "dp__month_picker_header" }, Rr = ["aria-label"], Or = ["aria-label"], Ir = ["aria-label"], Br = /* @__PURE__ */ Ue({
  __name: "MonthYearPicker",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    internalModelValue: { type: [Date, Array], default: null },
    ...tt
  },
  emits: ["update-month-year", "month-year-select", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, { defaults: s } = Ve(t), { transitionName: f, showTransition: k } = Ut(s.value.transitions), { buildMatrix: _ } = et(), { handleMonthYearChange: B, isDisabled: T, updateMonthYear: V } = Qa(t, a), A = H(!1), v = H(!1), M = H([null, null, null, null]), q = H(null), J = H(null), F = H(null);
    Le(() => {
      a("mount");
    });
    const S = (g) => ({
      get: () => t[g],
      set: (w) => {
        const ce = g === "month" ? "year" : "month";
        a("update-month-year", { [g]: w, [ce]: t[ce] }), a("month-year-select", g === "year"), g === "month" ? r(!0) : c(!0);
      }
    }), j = E(S("month")), R = E(S("year")), X = (g) => {
      const w = ke(D(g));
      return t.year === w;
    }, Z = E(() => t.monthPicker ? Array.isArray(t.disabledDates) ? t.disabledDates.map((g) => D(g)).filter((g) => X(g)).map((g) => pe(g)) : [] : []), Q = E(() => (g) => {
      const w = g === "month";
      return {
        showSelectionGrid: (w ? A : v).value,
        items: (w ? ee : O).value,
        disabledValues: s.value.filters[w ? "months" : "years"].concat(Z.value),
        minValue: (w ? x : P).value,
        maxValue: (w ? m : Y).value,
        headerRefs: w && t.monthPicker ? [q.value, J.value, F.value] : [],
        escClose: t.escClose,
        transitions: s.value.transitions,
        ariaLabels: s.value.ariaLabels,
        textInput: t.textInput,
        autoApply: t.autoApply,
        arrowNavigation: t.arrowNavigation,
        hideNavigation: t.hideNavigation
      };
    }), le = E(() => (g) => ({
      month: t.month,
      year: t.year,
      items: g === "month" ? t.months : t.years,
      instance: t.instance,
      updateMonthYear: V,
      toggle: g === "month" ? r : c
    })), P = E(() => t.minDate ? ke(D(t.minDate)) : null), Y = E(() => t.maxDate ? ke(D(t.maxDate)) : null), x = E(() => {
      if (t.minDate && P.value) {
        if (P.value > t.year)
          return 12;
        if (P.value === t.year)
          return pe(D(t.minDate));
      }
      return null;
    }), m = E(() => t.maxDate && Y.value ? Y.value < t.year ? -1 : Y.value === t.year ? pe(D(t.maxDate)) : null : null), C = E(() => (t.range || t.multiDates) && t.internalModelValue && (t.monthPicker || t.yearPicker) ? t.internalModelValue : []), W = (g) => {
      const w = [], ce = (y) => y;
      for (let y = 0; y < g.length; y += 3) {
        const K = [g[y], g[y + 1], g[y + 2]];
        w.push(ce(K));
      }
      return w;
    }, oe = E(() => {
      const g = t.months.find((w) => w.value === t.month);
      return g || { text: "", value: 0 };
    }), ee = E(() => W(t.months)), O = E(() => W(t.years)), l = E(() => s.value.multiCalendars ? t.multiCalendarsSolo ? !0 : t.instance === 0 : !0), i = E(() => s.value.multiCalendars ? t.multiCalendarsSolo ? !0 : t.instance === s.value.multiCalendars - 1 : !0), r = (g = !1) => {
      b(g), A.value = !A.value, A.value || a("overlay-closed");
    }, c = (g = !1) => {
      b(g), v.value = !v.value, v.value || a("overlay-closed");
    }, b = (g) => {
      g || a("reset-flow");
    }, L = (g = !1) => {
      T.value(g) || a("update-month-year", {
        year: g ? t.year + 1 : t.year - 1,
        month: t.month,
        fromNav: !0
      });
    }, I = (g, w) => {
      t.arrowNavigation && (M.value[w] = Me(g), _(M.value, "monthYear"));
    };
    return n({
      toggleMonthPicker: r,
      toggleYearPicker: c,
      handleMonthYearChange: B
    }), (g, w) => {
      var ce, y, K, Te, we;
      return p(), N("div", Cr, [
        g.$slots["month-year"] ? G(g.$slots, "month-year", Oe(be({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: d(V), handleMonthYearChange: d(B), instance: e.instance }))) : (p(), N(me, { key: 1 }, [
          !g.monthPicker && !g.yearPicker ? (p(), N(me, { key: 0 }, [
            d(l) && !g.vertical ? (p(), ve(tn, {
              key: 0,
              "aria-label": (ce = d(s).ariaLabels) == null ? void 0 : ce.prevMonth,
              disabled: d(T)(!1),
              onActivate: w[0] || (w[0] = (re) => d(B)(!1)),
              onSetRef: w[1] || (w[1] = (re) => I(re, 0))
            }, {
              default: ie(() => [
                g.$slots["arrow-left"] ? G(g.$slots, "arrow-left", { key: 0 }) : $("", !0),
                g.$slots["arrow-left"] ? $("", !0) : (p(), ve(d(hn), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : $("", !0),
            ne("div", _r, [
              Je(Rn, be({
                type: "month",
                "slot-name": "month-overlay-val",
                "overlay-slot": "overlay-month",
                "aria-label": (y = d(s).ariaLabels) == null ? void 0 : y.openMonthsOverlay,
                modelValue: d(j),
                "onUpdate:modelValue": w[2] || (w[2] = (re) => qe(j) ? j.value = re : null)
              }, d(Q)("month"), {
                onToggle: r,
                onSetRef: w[3] || (w[3] = (re) => I(re, 1))
              }), Ye({
                default: ie(() => [
                  g.$slots.month ? G(g.$slots, "month", Oe(be({ key: 0 }, d(oe)))) : $("", !0),
                  g.$slots.month ? $("", !0) : (p(), N(me, { key: 1 }, [
                    We(Pe(d(oe).text), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                g.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: ie(() => [
                    G(g.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                g.$slots["month-overlay-value"] ? {
                  name: "month-overlay-val",
                  fn: ie(({ item: re }) => [
                    G(g.$slots, "month-overlay-value", {
                      text: re.text,
                      value: re.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                g.$slots["month-overlay"] ? {
                  name: "overlay-month",
                  fn: ie(() => [
                    G(g.$slots, "month-overlay", Oe(He(d(le)("month"))))
                  ]),
                  key: "2"
                } : void 0,
                g.$slots["month-overlay-header"] ? {
                  name: "overlay-month-header",
                  fn: ie(() => [
                    G(g.$slots, "month-overlay-header", { toggle: r })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]),
              Je(Rn, be({
                type: "year",
                "slot-name": "year-overlay-val",
                "overlay-slot": "overlay-year",
                "aria-label": (K = d(s).ariaLabels) == null ? void 0 : K.openYearsOverlay,
                modelValue: d(R),
                "onUpdate:modelValue": w[4] || (w[4] = (re) => qe(R) ? R.value = re : null)
              }, d(Q)("year"), {
                onToggle: c,
                onSetRef: w[5] || (w[5] = (re) => I(re, 2))
              }), Ye({
                default: ie(() => [
                  g.$slots.year ? G(g.$slots, "year", {
                    key: 0,
                    year: e.year
                  }) : $("", !0),
                  g.$slots.year ? $("", !0) : (p(), N(me, { key: 1 }, [
                    We(Pe(e.year), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                g.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: ie(() => [
                    G(g.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                g.$slots["year-overlay-value"] ? {
                  name: "year-overlay-val",
                  fn: ie(({ item: re }) => [
                    G(g.$slots, "year-overlay-value", {
                      text: re.text,
                      value: re.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                g.$slots["year-overlay"] ? {
                  name: "overlay-year",
                  fn: ie(() => [
                    G(g.$slots, "year-overlay", Oe(He(d(le)("year"))))
                  ]),
                  key: "2"
                } : void 0,
                g.$slots["year-overlay-header"] ? {
                  name: "overlay-year-header",
                  fn: ie(() => [
                    G(g.$slots, "year-overlay-header", { toggle: c })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"])
            ]),
            d(l) && g.vertical ? (p(), ve(tn, {
              key: 1,
              "aria-label": (Te = d(s).ariaLabels) == null ? void 0 : Te.prevMonth,
              disabled: d(T)(!1),
              onActivate: w[6] || (w[6] = (re) => d(B)(!1))
            }, {
              default: ie(() => [
                g.$slots["arrow-up"] ? G(g.$slots, "arrow-up", { key: 0 }) : $("", !0),
                g.$slots["arrow-up"] ? $("", !0) : (p(), ve(d(Un), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : $("", !0),
            d(i) ? (p(), ve(tn, {
              key: 2,
              ref: "rightIcon",
              disabled: d(T)(!0),
              "aria-label": (we = d(s).ariaLabels) == null ? void 0 : we.nextMonth,
              onActivate: w[7] || (w[7] = (re) => d(B)(!0)),
              onSetRef: w[8] || (w[8] = (re) => I(re, 3))
            }, {
              default: ie(() => [
                g.$slots[g.vertical ? "arrow-down" : "arrow-right"] ? G(g.$slots, g.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : $("", !0),
                g.$slots[g.vertical ? "arrow-down" : "arrow-right"] ? $("", !0) : (p(), ve(In(g.vertical ? d(Hn) : d(pn)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label"])) : $("", !0)
          ], 64)) : $("", !0),
          g.monthPicker ? (p(), ve(Mt, be({ key: 1 }, d(Q)("month"), {
            "skip-active": g.range,
            year: e.year,
            "multi-model-value": d(C),
            "month-picker": "",
            modelValue: d(j),
            "onUpdate:modelValue": w[17] || (w[17] = (re) => qe(j) ? j.value = re : null),
            onToggle: r,
            onSelected: w[18] || (w[18] = (re) => g.$emit("overlay-closed"))
          }), Ye({
            header: ie(() => {
              var re, Ge, ze;
              return [
                ne("div", Nr, [
                  ne("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpPrevIconRef",
                    ref: q,
                    onClick: w[9] || (w[9] = (_e) => L(!1)),
                    onKeydown: w[10] || (w[10] = ue((_e) => L(!1), ["enter"]))
                  }, [
                    ne("div", {
                      class: ye(["dp__inner_nav", { dp__inner_nav_disabled: d(T)(!1) }]),
                      role: "button",
                      "aria-label": (re = d(s).ariaLabels) == null ? void 0 : re.prevMonth
                    }, [
                      g.$slots["arrow-left"] ? G(g.$slots, "arrow-left", { key: 0 }) : $("", !0),
                      g.$slots["arrow-left"] ? $("", !0) : (p(), ve(d(hn), { key: 1 }))
                    ], 10, Rr)
                  ], 544),
                  ne("div", {
                    class: "dp__pointer",
                    role: "button",
                    ref_key: "mpYearButtonRef",
                    ref: J,
                    "aria-label": (Ge = d(s).ariaLabels) == null ? void 0 : Ge.openYearsOverlay,
                    tabindex: "0",
                    onClick: w[11] || (w[11] = () => c(!1)),
                    onKeydown: w[12] || (w[12] = ue(() => c(!1), ["enter"]))
                  }, [
                    g.$slots.year ? G(g.$slots, "year", {
                      key: 0,
                      year: e.year
                    }) : $("", !0),
                    g.$slots.year ? $("", !0) : (p(), N(me, { key: 1 }, [
                      We(Pe(e.year), 1)
                    ], 64))
                  ], 40, Or),
                  ne("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpNextIconRef",
                    ref: F,
                    onClick: w[13] || (w[13] = (_e) => L(!0)),
                    onKeydown: w[14] || (w[14] = ue((_e) => L(!0), ["enter"]))
                  }, [
                    ne("div", {
                      class: ye(["dp__inner_nav", { dp__inner_nav_disabled: d(T)(!0) }]),
                      role: "button",
                      "aria-label": (ze = d(s).ariaLabels) == null ? void 0 : ze.nextMonth
                    }, [
                      g.$slots["arrow-right"] ? G(g.$slots, "arrow-right", { key: 0 }) : $("", !0),
                      g.$slots["arrow-right"] ? $("", !0) : (p(), ve(d(pn), { key: 1 }))
                    ], 10, Ir)
                  ], 544)
                ]),
                Je(mt, {
                  name: d(f)(v.value),
                  css: d(k)
                }, {
                  default: ie(() => [
                    v.value ? (p(), ve(Mt, be({ key: 0 }, d(Q)("year"), {
                      modelValue: d(R),
                      "onUpdate:modelValue": w[15] || (w[15] = (_e) => qe(R) ? R.value = _e : null),
                      onToggle: c,
                      onSelected: w[16] || (w[16] = (_e) => g.$emit("overlay-closed"))
                    }), Ye({
                      "button-icon": ie(() => [
                        g.$slots["calendar-icon"] ? G(g.$slots, "calendar-icon", { key: 0 }) : $("", !0),
                        g.$slots["calendar-icon"] ? $("", !0) : (p(), ve(d(Lt), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      g.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: ie(({ item: _e }) => [
                          G(g.$slots, "year-overlay-value", {
                            text: _e.text,
                            value: _e.value
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : $("", !0)
                  ]),
                  _: 3
                }, 8, ["name", "css"])
              ];
            }),
            _: 2
          }, [
            g.$slots["month-overlay-value"] ? {
              name: "item",
              fn: ie(({ item: re }) => [
                G(g.$slots, "month-overlay-value", {
                  text: re.text,
                  value: re.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : $("", !0),
          g.yearPicker ? (p(), ve(Mt, be({ key: 2 }, d(Q)("year"), {
            modelValue: d(R),
            "onUpdate:modelValue": w[19] || (w[19] = (re) => qe(R) ? R.value = re : null),
            "multi-model-value": d(C),
            "skip-active": g.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: c,
            onSelected: w[20] || (w[20] = (re) => g.$emit("overlay-closed"))
          }), Ye({ _: 2 }, [
            g.$slots["year-overlay-value"] ? {
              name: "item",
              fn: ie(({ item: re }) => [
                G(g.$slots, "year-overlay-value", {
                  text: re.text,
                  value: re.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : $("", !0)
        ], 64))
      ]);
    };
  }
}), Yr = {
  key: 0,
  class: "dp__time_input"
}, Vr = ["aria-label", "onKeydown", "onClick"], Er = ["aria-label", "data-test", "onKeydown", "onClick"], Fr = ["aria-label", "onKeydown", "onClick"], Lr = { key: 0 }, Ur = ["aria-label", "onKeydown"], Hr = /* @__PURE__ */ Ue({
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    ...tt
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setTimePickerElements: s, setTimePickerBackRef: f } = et(), { defaults: k } = Ve(t), { transitionName: _, showTransition: B } = Ut(k.value.transitions), T = St({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), V = H("AM"), A = H(null), v = H([]);
    Le(() => {
      a("mounted");
    });
    const M = E(() => (l) => !!(t.maxTime && t.maxTime[l] && t.maxTime[l] < t[l] + +t[`${l}Increment`])), q = E(() => (l) => !!(t.minTime && t.minTime[l] && t.minTime[l] > t[l] - +t[`${l}Increment`])), J = (l, i) => Fn(Se(D(), l), i), F = (l, i) => ua(Se(D(), l), i), S = E(
      () => ({
        dp__time_col: !0,
        dp__time_col_reg: !t.enableSeconds && t.is24,
        dp__time_col_reg_with_button: !t.enableSeconds && !t.is24,
        dp__time_col_sec: t.enableSeconds && t.is24,
        dp__time_col_sec_with_button: t.enableSeconds && !t.is24
      })
    ), j = E(() => {
      const l = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return t.enableSeconds ? l.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : l;
    }), R = E(() => j.value.filter((l) => !l.separator)), X = E(() => (l) => {
      if (l === "hours") {
        const i = C(t.hours);
        return { text: i < 10 ? `0${i}` : `${i}`, value: i };
      }
      return { text: t[l] < 10 ? `0${t[l]}` : `${t[l]}`, value: t[l] };
    }), Z = (l) => {
      const i = t.is24 ? 24 : 12, r = l === "hours" ? i : 60, c = +t[`${l}GridIncrement`], b = l === "hours" && !t.is24 ? c : 0, L = [];
      for (let I = b; I < r; I += c)
        L.push({ value: I, text: I < 10 ? `0${I}` : `${I}` });
      return l === "hours" && !t.is24 && L.push({ value: 0, text: "12" }), Fa(L);
    }, Q = (l, i) => {
      const r = t.minTime && t.minTime[i], c = t.maxTime && t.maxTime[i];
      return r && c ? l < r || l > c : r ? l < r : c ? l > c : !1;
    }, le = E(() => (l) => Z(l).flat().filter((r) => r).map((r) => r.value).filter((r) => Q(r, l))), P = (l) => t[`no${l[0].toUpperCase() + l.slice(1)}Overlay`], Y = (l) => {
      P(l) || (T[l] = !T[l], T[l] || a("overlay-closed"));
    }, x = (l) => l === "hours" ? je : l === "minutes" ? Ke : ft, m = (l, i = !0) => {
      const r = i ? J : F;
      (i ? M.value(l) : q.value(l)) || a(
        `update:${l}`,
        x(l)(r({ [l]: +t[l] }, { [l]: +t[`${l}Increment`] }))
      );
    }, C = (l) => t.is24 ? l : (l >= 12 ? V.value = "PM" : V.value = "AM", Wa(l)), W = () => {
      V.value === "PM" ? (V.value = "AM", a("update:hours", t.hours - 12)) : (V.value = "PM", a("update:hours", t.hours + 12));
    }, oe = (l) => {
      T[l] = !0;
    }, ee = (l, i, r) => {
      if (l && t.arrowNavigation) {
        Array.isArray(v.value[i]) ? v.value[i][r] = l : v.value[i] = [l];
        const c = v.value.reduce(
          (b, L) => L.map((I, g) => [...b[g] || [], L[g]]),
          []
        );
        f(t.closeTimePickerBtn), A.value && (c[1] = c[1].concat(A.value)), s(c, t.order);
      }
    }, O = (l, i) => l === "hours" && !t.is24 ? a(`update:${l}`, V.value === "PM" ? i + 12 : i) : a(`update:${l}`, i);
    return n({ openChildCmp: oe }), (l, i) => {
      var r;
      return l.disabled ? $("", !0) : (p(), N("div", Yr, [
        (p(!0), N(me, null, De(d(j), (c, b) => {
          var L, I, g;
          return p(), N("div", {
            key: b,
            class: ye(d(S))
          }, [
            c.separator ? (p(), N(me, { key: 0 }, [
              We(" : ")
            ], 64)) : (p(), N(me, { key: 1 }, [
              ne("div", {
                class: ye({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: d(M)(c.type)
                }),
                role: "button",
                "data-test": "time-inc-btn",
                "aria-label": (L = d(k).ariaLabels) == null ? void 0 : L.incrementValue(c.type),
                tabindex: "0",
                onKeydown: [
                  ue((w) => m(c.type), ["enter"]),
                  ue((w) => m(c.type), ["space"])
                ],
                onClick: (w) => m(c.type),
                ref_for: !0,
                ref: (w) => ee(w, b, 0)
              }, [
                l.$slots["arrow-up"] ? G(l.$slots, "arrow-up", { key: 0 }) : $("", !0),
                l.$slots["arrow-up"] ? $("", !0) : (p(), ve(d(Un), { key: 1 }))
              ], 42, Vr),
              ne("div", {
                role: "button",
                "aria-label": (I = d(k).ariaLabels) == null ? void 0 : I.openTpOverlay(c.type),
                class: ye(P(c.type) ? "" : "dp__time_display"),
                tabindex: "0",
                "data-test": `${c.type}-toggle-overlay-btn`,
                onKeydown: [
                  ue((w) => Y(c.type), ["enter"]),
                  ue((w) => Y(c.type), ["space"])
                ],
                onClick: (w) => Y(c.type),
                ref_for: !0,
                ref: (w) => ee(w, b, 1)
              }, [
                l.$slots[c.type] ? G(l.$slots, c.type, {
                  key: 0,
                  text: d(X)(c.type).text,
                  value: d(X)(c.type).value
                }) : $("", !0),
                l.$slots[c.type] ? $("", !0) : (p(), N(me, { key: 1 }, [
                  We(Pe(d(X)(c.type).text), 1)
                ], 64))
              ], 42, Er),
              ne("div", {
                class: ye({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: d(q)(c.type)
                }),
                role: "button",
                "data-test": "time-dec-btn",
                "aria-label": (g = d(k).ariaLabels) == null ? void 0 : g.decrementValue(c.type),
                tabindex: "0",
                onKeydown: [
                  ue((w) => m(c.type, !1), ["enter"]),
                  ue((w) => m(c.type, !1), ["space"])
                ],
                onClick: (w) => m(c.type, !1),
                ref_for: !0,
                ref: (w) => ee(w, b, 2)
              }, [
                l.$slots["arrow-down"] ? G(l.$slots, "arrow-down", { key: 0 }) : $("", !0),
                l.$slots["arrow-down"] ? $("", !0) : (p(), ve(d(Hn), { key: 1 }))
              ], 42, Fr)
            ], 64))
          ], 2);
        }), 128)),
        l.is24 ? $("", !0) : (p(), N("div", Lr, [
          l.$slots["am-pm-button"] ? G(l.$slots, "am-pm-button", {
            key: 0,
            toggle: W,
            value: V.value
          }) : $("", !0),
          l.$slots["am-pm-button"] ? $("", !0) : (p(), N("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: A,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (r = d(k).ariaLabels) == null ? void 0 : r.amPmButton,
            tabindex: "0",
            onClick: W,
            onKeydown: [
              ue(At(W, ["prevent"]), ["enter"]),
              ue(At(W, ["prevent"]), ["space"])
            ]
          }, Pe(V.value), 41, Ur))
        ])),
        (p(!0), N(me, null, De(d(R), (c, b) => (p(), ve(mt, {
          key: b,
          name: d(_)(T[c.type]),
          css: d(B)
        }, {
          default: ie(() => [
            T[c.type] ? (p(), ve(Mt, {
              key: 0,
              items: Z(c.type),
              "disabled-values": d(k).filters.times[c.type].concat(d(le)(c.type)),
              "esc-close": l.escClose,
              "aria-labels": d(k).ariaLabels,
              "hide-navigation": l.hideNavigation,
              "onUpdate:modelValue": (L) => O(c.type, L),
              onSelected: (L) => Y(c.type),
              onToggle: (L) => Y(c.type),
              onResetFlow: i[0] || (i[0] = (L) => l.$emit("reset-flow")),
              type: c.type
            }, Ye({
              "button-icon": ie(() => [
                l.$slots["clock-icon"] ? G(l.$slots, "clock-icon", { key: 0 }) : $("", !0),
                l.$slots["clock-icon"] ? $("", !0) : (p(), ve(d(Ln), { key: 1 }))
              ]),
              _: 2
            }, [
              l.$slots[`${c.type}-overlay-value`] ? {
                name: "item",
                fn: ie(({ item: L }) => [
                  G(l.$slots, `${c.type}-overlay-value`, {
                    text: L.text,
                    value: L.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "disabled-values", "esc-close", "aria-labels", "hide-navigation", "onUpdate:modelValue", "onSelected", "onToggle", "type"])) : $("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), Wr = ["aria-label"], zr = { class: "dp__overlay_container dp__container_flex dp__time_picker_overlay_container" }, xr = {
  key: 1,
  class: "dp__overlay_row dp__flex_row"
}, jr = ["aria-label"], Kr = /* @__PURE__ */ Ue({
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    internalModelValue: { type: [Date, Array], default: null },
    ...tt
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { buildMatrix: s, setTimePicker: f } = et(), k = on(), { hideNavigationButtons: _, defaults: B } = Ve(t), { transitionName: T, showTransition: V } = Ut(B.value.transitions), A = H(null), v = H(null), M = H([]), q = H(null);
    Le(() => {
      a("mount"), !t.timePicker && t.arrowNavigation ? s([Me(A.value)], "time") : f(!0, t.timePicker);
    });
    const J = E(() => t.range && t.modelAuto ? Kn(t.internalModelValue) : !0), F = H(!1), S = (m) => ({
      hours: Array.isArray(t.hours) ? t.hours[m] : t.hours,
      minutes: Array.isArray(t.minutes) ? t.minutes[m] : t.minutes,
      seconds: Array.isArray(t.seconds) ? t.seconds[m] : t.seconds
    }), j = E(() => {
      const m = [];
      if (t.range)
        for (let C = 0; C < 2; C++)
          m.push(S(C));
      else
        m.push(S(0));
      return m;
    }), R = (m, C = !1, W = "") => {
      C || a("reset-flow"), F.value = m, m && a("overlay-opened"), t.arrowNavigation && (f(m), m || a("overlay-closed")), Xe(() => {
        W !== "" && M.value[0] && M.value[0].openChildCmp(W);
      });
    }, X = E(() => ({
      dp__button: !0,
      dp__button_bottom: t.autoApply
    })), Z = st(k, "timePicker"), Q = (m, C, W) => t.range ? C === 0 ? [m, j.value[1][W]] : [j.value[0][W], m] : m, le = (m) => {
      a("update:hours", m);
    }, P = (m) => {
      a("update:minutes", m);
    }, Y = (m) => {
      a("update:seconds", m);
    }, x = () => {
      q.value && t.arrowNavigation && q.value.focus({ preventScroll: !0 });
    };
    return n({ toggleTimePicker: R }), (m, C) => {
      var W;
      return p(), N("div", null, [
        m.timePicker ? $("", !0) : _t((p(), N("div", {
          key: 0,
          class: ye(d(X)),
          role: "button",
          "aria-label": (W = d(B).ariaLabels) == null ? void 0 : W.openTimePicker,
          tabindex: "0",
          "data-test": "open-time-picker-btn",
          ref_key: "openTimePickerBtn",
          ref: A,
          onKeydown: [
            C[0] || (C[0] = ue((oe) => R(!0), ["enter"])),
            C[1] || (C[1] = ue((oe) => R(!0), ["space"]))
          ],
          onClick: C[2] || (C[2] = (oe) => R(!0))
        }, [
          m.$slots["clock-icon"] ? G(m.$slots, "clock-icon", { key: 0 }) : $("", !0),
          m.$slots["clock-icon"] ? $("", !0) : (p(), ve(d(Ln), { key: 1 }))
        ], 42, Wr)), [
          [Nt, !d(_)("time")]
        ]),
        Je(mt, {
          name: d(T)(F.value),
          css: d(V)
        }, {
          default: ie(() => {
            var oe;
            return [
              F.value || m.timePicker ? (p(), N("div", {
                key: 0,
                class: "dp__overlay",
                ref_key: "overlayRef",
                ref: q,
                tabindex: "0"
              }, [
                ne("div", zr, [
                  m.$slots["time-picker-overlay"] ? G(m.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: le,
                    setMinutes: P,
                    setSeconds: Y
                  }) : $("", !0),
                  m.$slots["time-picker-overlay"] ? $("", !0) : (p(), N("div", xr, [
                    (p(!0), N(me, null, De(d(j), (ee, O) => _t((p(), ve(Hr, be({ key: O }, {
                      ...m.$props,
                      order: O,
                      hours: ee.hours,
                      minutes: ee.minutes,
                      seconds: ee.seconds,
                      closeTimePickerBtn: v.value,
                      disabled: O === 0 ? m.fixedStart : m.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: M,
                      "onUpdate:hours": (l) => le(Q(l, O, "hours")),
                      "onUpdate:minutes": (l) => P(Q(l, O, "minutes")),
                      "onUpdate:seconds": (l) => Y(Q(l, O, "seconds")),
                      onMounted: x,
                      onOverlayClosed: x
                    }), Ye({ _: 2 }, [
                      De(d(Z), (l, i) => ({
                        name: l,
                        fn: ie((r) => [
                          G(m.$slots, l, Oe(He(r)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [Nt, O === 0 ? !0 : d(J)]
                    ])), 128))
                  ])),
                  m.timePicker ? $("", !0) : _t((p(), N("div", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: v,
                    class: ye(d(X)),
                    role: "button",
                    "aria-label": (oe = d(B).ariaLabels) == null ? void 0 : oe.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      C[3] || (C[3] = ue((ee) => R(!1), ["enter"])),
                      C[4] || (C[4] = ue((ee) => R(!1), ["space"]))
                    ],
                    onClick: C[5] || (C[5] = (ee) => R(!1))
                  }, [
                    m.$slots["calendar-icon"] ? G(m.$slots, "calendar-icon", { key: 0 }) : $("", !0),
                    m.$slots["calendar-icon"] ? $("", !0) : (p(), ve(d(Lt), { key: 1 }))
                  ], 42, jr)), [
                    [Nt, !d(_)("time")]
                  ])
                ])
              ], 512)) : $("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Gr = (e, n) => {
  const { isDisabled: a, matchDate: t, getWeekFromDate: s } = Ve(n), f = H(null), k = H(D()), _ = (r) => {
    !r.current && n.hideOffsetDates || (f.value = r.value);
  }, B = () => {
    f.value = null;
  }, T = (r) => Array.isArray(e.value) && n.range && e.value[0] && f.value ? r ? Be(f.value, e.value[0]) : Ce(f.value, e.value[0]) : !0, V = (r, c) => {
    const b = () => e.value ? c ? e.value[0] || null : e.value[1] : null, L = e.value && Array.isArray(e.value) ? b() : null;
    return ge(D(r.value), L);
  }, A = (r) => {
    const c = Array.isArray(e.value) ? e.value[0] : null;
    return r ? !Ce(f.value || null, c) : !0;
  }, v = (r, c = !0) => (n.range || n.weekPicker) && Array.isArray(e.value) ? n.hideOffsetDates && !r.current ? !1 : ge(D(r.value), e.value[c ? 0 : 1]) : n.range ? V(r, c) && A(c) || ge(r.value, Array.isArray(e.value) ? e.value[0] : null) && T(c) : !1, M = (r, c, b) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? r ? !1 : b ? Be(e.value[0], c.value) : Ce(e.value[0], c.value) : !1, q = (r) => !e.value || n.hideOffsetDates && !r.current ? !1 : n.range ? n.modelAuto && Array.isArray(e.value) ? ge(r.value, e.value[0] ? e.value[0] : k.value) : !1 : n.multiDates && Array.isArray(e.value) ? e.value.some((c) => ge(c, r.value)) : ge(r.value, e.value ? e.value : k.value), J = (r) => {
    if (n.autoRange || n.weekPicker) {
      if (f.value) {
        if (n.hideOffsetDates && !r.current)
          return !1;
        const c = ct(f.value, +n.autoRange), b = s(D(f.value));
        return n.weekPicker ? ge(b[1], D(r.value)) : ge(c, D(r.value));
      }
      return !1;
    }
    return !1;
  }, F = (r) => {
    if (n.autoRange || n.weekPicker) {
      if (f.value) {
        const c = ct(f.value, +n.autoRange);
        if (n.hideOffsetDates && !r.current)
          return !1;
        const b = s(D(f.value));
        return n.weekPicker ? Be(r.value, b[0]) && Ce(r.value, b[1]) : Be(r.value, f.value) && Ce(r.value, c);
      }
      return !1;
    }
    return !1;
  }, S = (r) => {
    if (n.autoRange || n.weekPicker) {
      if (f.value) {
        if (n.hideOffsetDates && !r.current)
          return !1;
        const c = s(D(f.value));
        return n.weekPicker ? ge(c[0], r.value) : ge(f.value, r.value);
      }
      return !1;
    }
    return !1;
  }, j = (r) => Wn(e.value, f.value, r.value), R = () => n.modelAuto && Array.isArray(n.internalModelValue) ? !!n.internalModelValue[0] : !1, X = () => n.modelAuto ? Kn(n.internalModelValue) : !0, Z = (r) => {
    if (Array.isArray(e.value) && e.value.length || n.weekPicker)
      return !1;
    const c = n.range ? !v(r) && !v(r, !1) : !0;
    return !a(r.value) && !q(r) && !(!r.current && n.hideOffsetDates) && c;
  }, Q = (r) => n.range ? n.modelAuto ? R() && q(r) : !1 : q(r), le = (r) => n.highlight ? t(r.value, n.highlight) : !1, P = (r) => a(r.value) && n.highlightDisabledDays === !1, Y = (r) => n.highlightWeekDays && n.highlightWeekDays.includes(r.value.getDay()), x = (r) => (n.range || n.weekPicker) && (!(n.multiCalendars > 0) || r.current) && X() && !(!r.current && n.hideOffsetDates) && !q(r) ? j(r) : !1, m = (r) => {
    const { isRangeStart: c, isRangeEnd: b } = oe(r), L = n.range ? c || b : !1;
    return {
      dp__cell_offset: !r.current,
      dp__pointer: !n.disabled && !(!r.current && n.hideOffsetDates) && !a(r.value),
      dp__cell_disabled: a(r.value),
      dp__cell_highlight: !P(r) && (le(r) || Y(r)) && !Q(r) && !L,
      dp__cell_highlight_active: !P(r) && (le(r) || Y(r)) && Q(r),
      dp__today: !n.noToday && ge(r.value, k.value) && r.current
    };
  }, C = (r) => ({
    dp__active_date: Q(r),
    dp__date_hover: Z(r)
  }), W = (r) => ({
    ...ee(r),
    ...O(r),
    dp__range_between_week: x(r) && n.weekPicker
  }), oe = (r) => {
    const c = n.multiCalendars > 0 ? r.current && v(r) && X() : v(r) && X(), b = n.multiCalendars > 0 ? r.current && v(r, !1) && X() : v(r, !1) && X();
    return { isRangeStart: c, isRangeEnd: b };
  }, ee = (r) => {
    const { isRangeStart: c, isRangeEnd: b } = oe(r);
    return {
      dp__range_start: c,
      dp__range_end: b,
      dp__range_between: x(r) && !n.weekPicker,
      dp__date_hover_start: M(Z(r), r, !0),
      dp__date_hover_end: M(Z(r), r, !1)
    };
  }, O = (r) => ({
    ...ee(r),
    dp__cell_auto_range: F(r),
    dp__cell_auto_range_start: S(r),
    dp__cell_auto_range_end: J(r)
  }), l = (r) => n.range ? n.autoRange ? O(r) : n.modelAuto ? { ...C(r), ...ee(r) } : ee(r) : n.weekPicker ? W(r) : C(r);
  return {
    setHoverDate: _,
    clearHoverDate: B,
    getDayClassData: (r) => ({
      ...m(r),
      ...l(r),
      [n.dayClass ? n.dayClass(r.value) : ""]: !0,
      [n.calendarCellClassName]: !!n.calendarCellClassName
    })
  };
}, Zr = ["id", "onKeydown"], qr = {
  key: 0,
  class: "dp__sidebar_left"
}, Xr = {
  key: 1,
  class: "dp__preset_ranges"
}, Jr = { class: "dp__preset_ranges__wrapper" }, Qr = ["onClick"], el = {
  key: 2,
  class: "dp__sidebar_right"
}, tl = {
  key: 3,
  class: "dp__now_wrap"
}, nl = /* @__PURE__ */ Ue({
  __name: "DatepickerMenu",
  props: {
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...tt
  },
  emits: [
    "update:internal-range-picked-name",
    "preset-range-clicked",
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setMenuFocused: s, setShiftKey: f, control: k } = zn(), { getCalendarDays: _, defaults: B } = Ve(t), T = on(), V = H(null), A = St({
      timePicker: !!(!t.enableTimePicker || t.timePicker || t.monthPicker),
      monthYearInput: !!t.timePicker,
      calendar: !1
    }), v = H([]), M = H([]), q = H(null), J = H(null), F = H(!1), S = H(0);
    Le(() => {
      F.value = !0;
      const o = Me(J);
      if (o && !t.textInput && !t.inline && (s(!0), le()), o) {
        const h = (z) => {
          ["action-row", "time-picker", "month-year", "right-sidebar"].some(
            (se) => Object.keys(T).includes(se)
          ) || z.preventDefault(), z.stopImmediatePropagation(), z.stopPropagation();
        };
        o.addEventListener("pointerdown", h), o.addEventListener("mousedown", h);
      }
    });
    const { arrowRight: j, arrowLeft: R, arrowDown: X, arrowUp: Z } = et(), Q = (o) => {
      o || o === 0 ? M.value[o].triggerTransition(
        C.value(o),
        W.value(o)
      ) : M.value.forEach(
        (h, z) => h.triggerTransition(C.value(z), W.value(z))
      );
    }, le = () => {
      const o = Me(J);
      o && o.focus({ preventScroll: !0 });
    }, P = () => {
      var o;
      (o = t.flow) != null && o.length && S.value !== -1 && (S.value += 1, a("flow-step", S.value), xt());
    }, Y = () => {
      S.value = -1;
    }, {
      calendars: x,
      modelValue: m,
      month: C,
      year: W,
      time: oe,
      updateTime: ee,
      updateMonthYear: O,
      selectDate: l,
      getWeekNum: i,
      monthYearSelect: r,
      handleScroll: c,
      handleArrow: b,
      handleSwipe: L,
      getMarker: I,
      selectCurrentDate: g,
      presetDateRange: w
    } = Xa(t, a, P, Q, S), { setHoverDate: ce, clearHoverDate: y, getDayClassData: K } = Gr(m, t);
    Qe(
      x,
      () => {
        t.openOnTop && setTimeout(() => {
          a("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const Te = st(T, "calendar"), we = st(T, "action"), re = st(T, "timePicker"), Ge = st(T, "monthYear"), ze = E(() => t.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), _e = E(() => Ua(t.yearRange, t.reverseYears)), nt = E(() => Ha(t.locale, t.monthNameFormat)), vt = E(() => (o) => _(C.value(o), W.value(o))), yt = E(
      () => B.value.multiCalendars > 0 && t.range ? [...Array(B.value.multiCalendars).keys()] : [0]
    ), ut = E(
      () => (o) => o === 1
    ), te = E(() => t.monthPicker || t.timePicker || t.yearPicker), de = E(
      () => ({
        dp__flex_display: B.value.multiCalendars > 0
      })
    ), fe = E(() => ({
      dp__instance_calendar: B.value.multiCalendars > 0
    })), gt = E(() => ({
      dp__menu_disabled: t.disabled,
      dp__menu_readonly: t.readonly
    })), at = E(
      () => (o) => Pt(vt, o)
    ), Ht = E(
      () => ({
        dp__menu: !0,
        dp__menu_index: !t.inline,
        dp__relative: t.inline,
        [t.menuClassName]: !!t.menuClassName
      })
    ), Pt = (o, h) => o.value(h).map((z) => ({
      ...z,
      days: z.days.map((se) => (se.marker = I(se), se.classData = K(se), se))
    })), ht = (o) => {
      o.stopPropagation(), o.stopImmediatePropagation();
    }, Wt = () => {
      t.escClose && a("close-picker");
    }, zt = (o, h = !1) => {
      l(o, h), t.spaceConfirm && a("select-date");
    }, pt = (o) => {
      var h;
      (h = t.flow) != null && h.length && (A[o] = !0, Object.keys(A).filter((z) => !A[z]).length || xt());
    }, Ze = (o, h, z, se, ...Ne) => {
      if (t.flow[S.value] === o) {
        const U = se ? h.value[0] : h.value;
        U && U[z](...Ne);
      }
    }, xt = () => {
      Ze("month", v, "toggleMonthPicker", !0, !0), Ze("year", v, "toggleYearPicker", !0, !0), Ze("calendar", q, "toggleTimePicker", !1, !1, !0), Ze("time", q, "toggleTimePicker", !1, !0, !0);
      const o = t.flow[S.value];
      (o === "hours" || o === "minutes" || o === "seconds") && Ze(o, q, "toggleTimePicker", !1, !0, !0, o);
    }, kt = (o, h) => {
      const z = ["left-sidebar", "right-sidebar"].some(
        (se) => Object.keys(T).includes(se)
      );
      if (!(h.target && h.target.tagName === "INPUT" && z)) {
        if (t.arrowNavigation) {
          if (o === "up")
            return Z();
          if (o === "down")
            return X();
          if (o === "left")
            return R();
          if (o === "right")
            return j();
        } else
          o === "left" || o === "up" ? b("left", 0, o === "up") : b("right", 0, o === "down");
        h.preventDefault();
      }
    }, vn = (o) => {
      f(o.shiftKey), !t.disableMonthYearSelect && o.code === "Tab" && o.target.classList.contains("dp__menu") && k.value.shiftKeyInMenu && (o.preventDefault(), o.stopImmediatePropagation(), a("close-picker"));
    }, u = (o) => {
      v.value[0] && v.value[0].handleMonthYearChange(o);
    };
    return n({
      updateMonthYear: O
    }), (o, h) => {
      var z;
      return p(), ve(mt, {
        appear: "",
        name: (z = d(B).transitions) == null ? void 0 : z.menuAppear,
        mode: "out-in",
        css: !!o.transitions
      }, {
        default: ie(() => {
          var se, Ne;
          return [
            ne("div", {
              id: o.uid ? `dp-menu-${o.uid}` : void 0,
              tabindex: "0",
              ref_key: "dpMenuRef",
              ref: J,
              role: "dialog",
              class: ye(d(Ht)),
              onMouseleave: h[15] || (h[15] = //@ts-ignore
              (...U) => d(y) && d(y)(...U)),
              onClick: ht,
              onKeydown: [
                ue(Wt, ["esc"]),
                h[16] || (h[16] = ue((U) => kt("left", U), ["left"])),
                h[17] || (h[17] = ue((U) => kt("up", U), ["up"])),
                h[18] || (h[18] = ue((U) => kt("down", U), ["down"])),
                h[19] || (h[19] = ue((U) => kt("right", U), ["right"])),
                vn
              ]
            }, [
              (o.disabled || o.readonly) && o.inline ? (p(), N("div", {
                key: 0,
                class: ye(d(gt))
              }, null, 2)) : $("", !0),
              !o.inline && !o.teleportCenter ? (p(), N("div", {
                key: 1,
                class: ye(d(ze))
              }, null, 2)) : $("", !0),
              ne("div", {
                class: ye({
                  dp__menu_content_wrapper: ((se = o.presetRanges) == null ? void 0 : se.length) || !!o.$slots["left-sidebar"] || !!o.$slots["right-sidebar"]
                })
              }, [
                o.$slots["left-sidebar"] ? (p(), N("div", qr, [
                  G(o.$slots, "left-sidebar", Oe(He({ handleMonthYearChange: u })))
                ])) : $("", !0),
                (Ne = o.presetRanges) != null && Ne.length ? (p(), N("div", Xr, [
                  ne("div", Jr, [
                    (p(!0), N(me, null, De(o.presetRanges, (U, xe) => (p(), N("div", {
                      key: xe,
                      style: lt(U.style || {}),
                      class: ye([{ dp__preset_range__active: t.internalRangePickedName == U.label }, "dp__preset_range"]),
                      onClick: (ae) => d(w)(!!U.slot, U.label, U.range)
                    }, [
                      U.slot ? G(o.$slots, U.slot, {
                        key: 0,
                        presetDateRange: d(w),
                        label: U.label,
                        range: U.range
                      }) : (p(), N(me, { key: 1 }, [
                        We(Pe(U.label), 1)
                      ], 64))
                    ], 14, Qr))), 128))
                  ])
                ])) : $("", !0),
                ne("div", {
                  class: "dp__instance_calendar",
                  ref_key: "calendarWrapperRef",
                  ref: V,
                  role: "document"
                }, [
                  ne("div", {
                    class: ye(d(de))
                  }, [
                    (p(!0), N(me, null, De(d(yt), (U, xe) => (p(), N("div", {
                      key: U,
                      class: ye(d(fe))
                    }, [
                      !o.disableMonthYearSelect && !o.timePicker ? (p(), ve(Br, be({
                        key: 0,
                        ref_for: !0,
                        ref: (ae) => {
                          ae && (v.value[xe] = ae);
                        },
                        months: d(nt),
                        years: d(_e),
                        month: d(C)(U),
                        year: d(W)(U),
                        instance: U,
                        "internal-model-value": e.internalModelValue
                      }, o.$props, {
                        onMount: h[0] || (h[0] = (ae) => pt("monthYearInput")),
                        onResetFlow: Y,
                        onUpdateMonthYear: (ae) => d(O)(U, ae),
                        onMonthYearSelect: d(r),
                        onOverlayClosed: le
                      }), Ye({ _: 2 }, [
                        De(d(Ge), (ae, Zn) => ({
                          name: ae,
                          fn: ie((jt) => [
                            G(o.$slots, ae, Oe(He(jt)))
                          ])
                        }))
                      ]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : $("", !0),
                      Je(Dr, be({
                        ref_for: !0,
                        ref: (ae) => {
                          ae && (M.value[xe] = ae);
                        },
                        "specific-mode": d(te),
                        "get-week-num": d(i),
                        instance: U,
                        "mapped-dates": d(at)(U),
                        month: d(C)(U),
                        year: d(W)(U)
                      }, o.$props, {
                        "flow-step": S.value,
                        "onUpdate:flowStep": h[1] || (h[1] = (ae) => S.value = ae),
                        onSelectDate: (ae) => {
                          d(l)(ae, !d(ut)(U)), a("update:internal-range-picked-name", "");
                        },
                        onHandleSpace: (ae) => zt(ae, !d(ut)(U)),
                        onSetHoverDate: h[2] || (h[2] = (ae) => d(ce)(ae)),
                        onHandleScroll: (ae) => d(c)(ae, U),
                        onHandleSwipe: (ae) => d(L)(ae, U),
                        onMount: h[3] || (h[3] = (ae) => pt("calendar")),
                        onResetFlow: Y,
                        onTooltipOpen: h[4] || (h[4] = (ae) => o.$emit("tooltip-open", ae)),
                        onTooltipClose: h[5] || (h[5] = (ae) => o.$emit("tooltip-close", ae))
                      }), Ye({ _: 2 }, [
                        De(d(Te), (ae, Zn) => ({
                          name: ae,
                          fn: ie((jt) => [
                            G(o.$slots, ae, Oe(He({ ...jt })))
                          ])
                        }))
                      ]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "flow-step", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                    ], 2))), 128))
                  ], 2),
                  ne("div", null, [
                    o.$slots["time-picker"] ? G(o.$slots, "time-picker", Oe(be({ key: 0 }, { time: d(oe), updateTime: d(ee) }))) : (p(), N(me, { key: 1 }, [
                      o.enableTimePicker && !o.monthPicker && !o.weekPicker ? (p(), ve(Kr, be({
                        key: 0,
                        ref_key: "timePickerRef",
                        ref: q,
                        hours: d(oe).hours,
                        minutes: d(oe).minutes,
                        seconds: d(oe).seconds,
                        "internal-model-value": e.internalModelValue
                      }, o.$props, {
                        onMount: h[6] || (h[6] = (U) => pt("timePicker")),
                        "onUpdate:hours": h[7] || (h[7] = (U) => {
                          d(ee)(U), a("update:internal-range-picked-name", "");
                        }),
                        "onUpdate:minutes": h[8] || (h[8] = (U) => {
                          d(ee)(U, !1), a("update:internal-range-picked-name", "");
                        }),
                        "onUpdate:seconds": h[9] || (h[9] = (U) => {
                          d(ee)(U, !1, !0), a("update:internal-range-picked-name", "");
                        }),
                        onResetFlow: Y,
                        onOverlayClosed: le,
                        onOverlayOpened: h[10] || (h[10] = (U) => o.$emit("time-picker-open", U))
                      }), Ye({ _: 2 }, [
                        De(d(re), (U, xe) => ({
                          name: U,
                          fn: ie((ae) => [
                            G(o.$slots, U, Oe(He(ae)))
                          ])
                        }))
                      ]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : $("", !0)
                    ], 64))
                  ])
                ], 512),
                o.$slots["right-sidebar"] ? (p(), N("div", el, [
                  G(o.$slots, "right-sidebar", be({
                    value: o.$props.internalModelValue
                  }, { handleMonthYearChange: u }))
                ])) : $("", !0),
                o.showNowButton ? (p(), N("div", tl, [
                  o.$slots["now-button"] ? G(o.$slots, "now-button", {
                    key: 0,
                    selectCurrentDate: d(g)
                  }) : $("", !0),
                  o.$slots["now-button"] ? $("", !0) : (p(), N("button", {
                    key: 1,
                    type: "button",
                    role: "button",
                    class: "dp__now_button",
                    onClick: h[11] || (h[11] = //@ts-ignore
                    (...U) => d(g) && d(g)(...U))
                  }, Pe(o.nowButtonLabel), 1))
                ])) : $("", !0)
              ], 2),
              !o.autoApply || o.keepActionRow ? (p(), ve(mr, be({
                key: 2,
                "menu-mount": F.value,
                "internal-model-value": e.internalModelValue
              }, o.$props, {
                onClosePicker: h[12] || (h[12] = (U) => o.$emit("close-picker")),
                onSelectDate: h[13] || (h[13] = (U) => o.$emit("select-date")),
                onInvalidSelect: h[14] || (h[14] = (U) => o.$emit("invalid-select"))
              }), Ye({ _: 2 }, [
                De(d(we), (U, xe) => ({
                  name: U,
                  fn: ie((ae) => [
                    G(o.$slots, U, Oe(He({ ...ae })))
                  ])
                }))
              ]), 1040, ["menu-mount", "internal-model-value"])) : $("", !0)
            ], 42, Zr)
          ];
        }),
        _: 3
      }, 8, ["name", "css"]);
    };
  }
}), al = typeof window < "u" ? window : void 0, nn = () => {
}, rl = (e) => Xn() ? (Jn(e), !0) : !1, ll = (e, n, a, t) => {
  if (!e)
    return nn;
  let s = nn;
  const f = Qe(
    () => d(e),
    (_) => {
      s(), _ && (_.addEventListener(n, a, t), s = () => {
        _.removeEventListener(n, a, t), s = nn;
      });
    },
    { immediate: !0, flush: "post" }
  ), k = () => {
    f(), s();
  };
  return rl(k), k;
}, ol = (e, n, a, t = {}) => {
  const { window: s = al, event: f = "pointerdown" } = t;
  return s ? ll(s, f, (_) => {
    const B = Me(e), T = Me(n);
    !B || !T || B === _.target || _.composedPath().includes(B) || _.composedPath().includes(T) || a(_);
  }, { passive: !0 }) : void 0;
}, sl = /* @__PURE__ */ Ue({
  __name: "VueDatePicker",
  props: {
    ...tt
  },
  emits: [
    "preset-range-clicked",
    "update:model-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = on(), f = H(!1), k = Tt(t, "modelValue"), _ = Tt(t, "timezone"), B = H(null), T = H(null), V = H(!1), A = H(null), v = H(), { setMenuFocused: M, setShiftKey: q } = zn(), { clearArrowNav: J } = et(), { validateDate: F, isValidTime: S } = Ve(t);
    Le(() => {
      t.presetRangePickedName && (m.value = t.presetRangePickedName), C(t.modelValue), t.inline || (P(A.value).addEventListener("scroll", r), window.addEventListener("resize", c)), t.inline && (f.value = !0);
    }), On(() => {
      if (!t.inline) {
        const te = P(A.value);
        te && te.removeEventListener("scroll", r), window.removeEventListener("resize", c);
      }
    });
    const j = st(s, "all", t.presetRanges), R = st(s, "input");
    Qe(
      [k, _],
      () => {
        C(k.value);
      },
      { deep: !0 }
    );
    const { openOnTop: X, menuPosition: Z, setMenuPosition: Q, setInitialPosition: le, getScrollableParent: P } = er(
      B,
      T,
      a,
      t
    ), {
      inputValue: Y,
      internalModelValue: x,
      internalPresetName: m,
      parseExternalModelValue: C,
      emitModelValue: W,
      formatInputValue: oe,
      checkBeforeEmit: ee
    } = Ja(a, t, V), O = E(
      () => ({
        dp__main: !0,
        dp__theme_dark: t.dark,
        dp__theme_light: !t.dark,
        dp__flex_display: t.inline,
        dp__flex_display_with_input: t.inlineWithInput
      })
    ), l = E(() => t.dark ? "dp__theme_dark" : "dp__theme_light"), i = E(() => t.teleport ? {
      to: typeof t.teleport == "boolean" ? "body" : t.teleport,
      disabled: t.inline
    } : { class: "dp__outer_menu_wrap" }), r = () => {
      f.value && (t.closeOnScroll ? we() : Q());
    }, c = () => {
      f.value && Q();
    }, b = () => {
      !t.disabled && !t.readonly && (le(), f.value = !0, Xe().then(() => {
        Q(), f.value && a("open");
      }), f.value || Te(), C(t.modelValue));
    }, L = () => {
      Y.value = "", Te(), a("update:model-value", null), a("cleared"), we();
    };
    function I(te) {
      v.value = te, m.value = te;
    }
    const g = () => {
      const te = x.value;
      return !te || !Array.isArray(te) && F(te) ? !0 : Array.isArray(te) ? te.length === 2 && F(te[0]) && F(te[1]) ? !0 : F(te[0]) : !1;
    }, w = () => {
      ee() && g() ? (W(m.value), we()) : a("invalid-select", x.value);
    }, ce = (te) => {
      y(), W(), t.closeOnAutoApply && !te && we();
    }, y = () => {
      T.value && t.textInput && T.value.setParsedDate(x.value);
    }, K = (te = !1) => {
      t.autoApply && S(x.value) && g() && (t.range && Array.isArray(x.value) ? (t.partialRange || x.value.length === 2) && ce(te) : ce(te));
    }, Te = () => {
      t.textInput || (x.value = null);
    }, we = () => {
      t.inline || (f.value && (f.value = !1, M(!1), q(!1), J(), a("closed"), le(), Y.value && C(k.value)), Te());
    }, re = (te, de) => {
      if (!te) {
        x.value = null;
        return;
      }
      x.value = te, de && (w(), a("text-submit"));
    }, Ge = () => {
      t.autoApply && S(x.value) && W(), y();
    }, ze = () => f.value ? we() : b(), _e = (te) => {
      x.value = te;
    }, nt = () => {
      t.textInput && (V.value = !0, oe()), a("focus");
    }, vt = () => {
      t.textInput && (V.value = !1, C(t.modelValue)), a("blur");
    }, yt = (te) => {
      B.value && B.value.updateMonthYear(0, {
        month: Pn(te.month),
        year: Pn(te.year)
      });
    }, ut = (te) => {
      C(te || t.modelValue);
    };
    return ol(
      B,
      T,
      t.onClickOutside ? () => t.onClickOutside(g) : we
    ), n({
      closeMenu: we,
      selectDate: w,
      clearValue: L,
      openMenu: b,
      onScroll: r,
      formatInputValue: oe,
      // exposed for testing purposes
      updateInternalModelValue: _e,
      // modify internal modelValue
      setMonthYear: yt,
      parseModel: ut
    }), (te, de) => (p(), N("div", {
      class: ye(d(O)),
      ref_key: "pickerWrapperRef",
      ref: A
    }, [
      Je(ir, be({
        "data-qwe": d(m),
        ref_key: "inputRef",
        ref: T,
        "is-menu-open": f.value,
        "input-value": d(Y),
        "onUpdate:inputValue": de[0] || (de[0] = (fe) => qe(Y) ? Y.value = fe : null)
      }, te.$props, {
        onClear: L,
        onOpen: b,
        onSetInputDate: re,
        onSetEmptyDate: d(W),
        onSelectDate: w,
        onToggle: ze,
        onClose: we,
        onFocus: nt,
        onBlur: vt
      }), Ye({ _: 2 }, [
        De(d(R), (fe, gt) => ({
          name: fe,
          fn: ie((at) => [
            G(te.$slots, fe, Oe(He(at)))
          ])
        }))
      ]), 1040, ["data-qwe", "is-menu-open", "input-value", "onSetEmptyDate"]),
      f.value ? (p(), ve(In(te.teleport ? Qn : "div"), Oe(be({ key: 0 }, d(i))), {
        default: ie(() => [
          f.value ? (p(), ve(nl, be({
            key: 0,
            ref_key: "dpMenuRef",
            ref: B,
            class: d(l),
            style: d(Z),
            "open-on-top": d(X)
          }, te.$props, {
            "internal-model-value": d(x),
            "onUpdate:internalModelValue": de[1] || (de[1] = (fe) => qe(x) ? x.value = fe : null),
            "internal-range-picked-name": d(m),
            "onUpdate:internalRangePickedName": de[2] || (de[2] = (fe) => qe(m) ? m.value = fe : null),
            onClosePicker: we,
            onSelectDate: w,
            onAutoApply: K,
            onTimeUpdate: Ge,
            onFlowStep: de[3] || (de[3] = (fe) => te.$emit("flow-step", fe)),
            onPresetRangeClicked: de[4] || (de[4] = (fe) => I(fe)),
            onUpdateMonthYear: de[5] || (de[5] = (fe) => te.$emit("update-month-year", fe)),
            onInvalidSelect: de[6] || (de[6] = (fe) => te.$emit("invalid-select", d(x))),
            onInvalidFixedRange: de[7] || (de[7] = (fe) => te.$emit("invalid-fixed-range", fe)),
            onRecalculatePosition: d(Q),
            onTooltipOpen: de[8] || (de[8] = (fe) => te.$emit("tooltip-open", fe)),
            onTooltipClose: de[9] || (de[9] = (fe) => te.$emit("tooltip-close", fe)),
            onTimePickerOpen: de[10] || (de[10] = (fe) => te.$emit("time-picker-open", fe))
          }), Ye({ _: 2 }, [
            De(d(j), (fe, gt) => ({
              name: fe,
              fn: ie((at) => [
                G(te.$slots, fe, Oe(He({ ...at })))
              ])
            }))
          ]), 1040, ["class", "style", "open-on-top", "internal-model-value", "internal-range-picked-name", "onRecalculatePosition"])) : $("", !0)
        ]),
        _: 3
      }, 16)) : $("", !0)
    ], 2));
  }
}), Gn = /* @__PURE__ */ (() => {
  const e = sl;
  return e.install = (n) => {
    n.component("Vue3DatePicker", e);
  }, e;
})(), il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gn
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(il).forEach(([e, n]) => {
  e !== "default" && (Gn[e] = n);
});
export {
  Gn as default
};
