import { j as jsxRuntimeExports } from "./index-Di1Y5MzV.js";
function MilitaryCard({
  children,
  className = "",
  accent = false,
  hover = true
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `
        bg-card border border-border p-6
        ${accent ? "border-l-4 border-l-secondary" : ""}
        ${hover ? "transition-smooth hover:shadow-lg hover:-translate-y-0.5" : ""}
        ${className}
      `,
      children
    }
  );
}
function StatCard({ value, label, icon }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MilitaryCard, { accent: true, className: "text-center", children: [
    icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-3 text-secondary", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-3xl text-primary mb-1", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground tracking-wide uppercase", children: label })
  ] });
}
export {
  MilitaryCard as M,
  StatCard as S
};
