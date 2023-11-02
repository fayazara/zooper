import { shallowRef as G, ref as I, watch as z, unref as r, onBeforeUnmount as J, readonly as K, computed as C } from "vue";
const B = typeof window > "u";
function M() {
  return !B && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
const T = "cubic-bezier(0.16, 1, 0.3, 1)", Y = { enterDelta: 0.5, leaveDelta: 0.15, root: null, toggleVisibility: !0, enterStyles: { transition: `transform 0.3s ${T} 0s`, transform: "translateY(0px)" }, leaveStyles: { transition: `transform 0.5s ${T} 0s`, transform: "translateY(-101%)" }, watch: () => null };
function P(a, H = Y) {
  const n = function (t, e) {
    const o = { ...t };
    for (const i in e)
      e[i] !== void 0 && (o[i] = e[i]);
    return o;
  }(Y, H);
  let c, h = !1, w = !1;
  const y = G({}), u = I(0);
  function m(t) {
    y.value = t;
  }
  function E(t) {
    u.value = t;
  }
  function p() {
    const t = r(n.root);
    return t ?? document.documentElement;
  }
  function s() {
    const t = p();
    return t ? t.scrollTop : 0;
  }
  function S() {
    const t = r(a);
    if (!t)
      return !1;
    const { position: e, display: o } = getComputedStyle(t);
    return (e === "fixed" || e === "sticky") && o !== "none";
  }
  function F() {
    const t = r(a);
    if (!t)
      return 0;
    let e = t.scrollHeight;
    const { marginTop: o, marginBottom: i } = getComputedStyle(t);
    return e += parseFloat(o) + parseFloat(i), e;
  }
  function L() {
    u.value !== 1 && (g(!0), m({ ...n.enterStyles, ...n.toggleVisibility ? { visibility: "" } : {}, ...M() ? { transition: "none" } : {} }), E(1));
  }
  function R(t) {
    g(!0), t.target === r(a) && m({ ...n.leaveStyles, ...n.toggleVisibility ? { visibility: "hidden" } : {} });
  }
  function g(t = !1) {
    const e = r(a);
    e && e[t ? "removeEventListener" : "addEventListener"]("transitionend", R);
  }
  const $ = function () {
    let t = !0, e = !0, o = 0;
    function i(l) {
      let d, v = 0;
      const f = performance.now(), O = s();
      d = requestAnimationFrame(function U() {
        const j = s();
        v === 10 ? (l(Math.abs(O - j) / (performance.now() - f)), cancelAnimationFrame(d)) : (v++, requestAnimationFrame(U));
      });
    }
    return () => {
      const l = s() <= F(), d = s() < o, v = s() > o;
      l ? L() : !w && o > 0 && (d && t ? (t = !1, i((f) => {
        f >= n.enterDelta && L(), t = !0;
      })) : v && e && (e = !1, i((f) => {
        f >= n.leaveDelta && u.value !== 2 && (m({ ...n.leaveStyles, ...M() ? { transition: "none" } : {} }), E(2), g()), e = !0;
      }))), o = s();
    };
  }();
  function x(t = !1) {
    const e = p();
    e && ((e === document.documentElement ? document : e)[t ? "removeEventListener" : "addEventListener"]("scroll", $, { passive: !0 }), h = !t);
  }
  function k(t) {
    var e;
    w = ((e = r(a)) == null ? void 0 : e.contains(t.target)) ?? !1;
  }
  function A(t = !1) {
    document[t ? "removeEventListener" : "addEventListener"]("pointermove", k);
  }
  function D() {
    x(!0), A(!0);
  }
  function b() {
    const t = S();
    h ? t || (D(), y.value = {}) : t && (x(), A());
  }
  function V() {
    D(), c == null || c.disconnect();
  }
  let q = !0;
  return z(() => [r(a), r(n.root)], ([t, e], o, i) => {
    if (!B && t && (e || e === null)) {
      if (function () {
        c = new ResizeObserver(() => {
          if (q)
            return q = !1;
          b();
        });
        const l = p();
        l && c.observe(l);
      }(), !S())
        return;
      requestAnimationFrame(() => {
        m(s() > 1.2 * F() ? { ...n.leaveStyles, ...n.toggleVisibility ? { visibility: "hidden" } : {}, transition: "" } : { ...n.enterStyles, transition: "" });
      }), b();
    }
    i(V);
  }, { immediate: !0, flush: "post" }), z(n.watch, b, { flush: "post" }), J(V), { styles: K(y), isLeave: C(() => u.value === 2), isEnter: C(() => u.value === 1) };
}
export {
  P as useFixedHeader
};
