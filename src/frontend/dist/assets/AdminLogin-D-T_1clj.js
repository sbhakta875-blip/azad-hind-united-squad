import { d as useNavigate, r as reactExports, j as jsxRuntimeExports, a as LoadingPage, L as Link } from "./index-Di1Y5MzV.js";
import { u as useAuth } from "./use-auth-Cq73UH12.js";
import { c as createLucideIcon, S as Shield } from "./backend-CA2XpFJp.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
];
const LogIn = createLucideIcon("log-in", __iconNode);
function AdminLoginPage() {
  const {
    isAuthenticated,
    isAdmin,
    login,
    isLoggingIn,
    isInitializing,
    isCheckingAdmin
  } = useAuth();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (isAuthenticated && isAdmin) {
      navigate({ to: "/admin" });
    }
  }, [isAuthenticated, isAdmin, navigate]);
  if (isInitializing || isAuthenticated && isCheckingAdmin) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingPage, {}) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen bg-primary flex items-center justify-center p-4",
      "data-ocid": "admin_login.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-secondary opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-secondary opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-secondary opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-secondary opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-secondary h-2 w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border-x border-b border-border px-8 pt-10 pb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-block mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 bg-primary border-2 border-secondary mx-auto flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-10 w-10 text-secondary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 -right-1 h-4 w-4 bg-secondary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 -left-1 h-4 w-4 bg-secondary" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-2xl text-foreground tracking-tight mb-1", children: "Admin Command Centre" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary font-semibold text-sm tracking-widest uppercase", children: "Azad Hind United Squad" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t-2 border-primary mb-8" }),
            isAuthenticated && !isAdmin ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-center",
                "data-ocid": "admin_login.not_admin_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-destructive/10 border-l-4 border-destructive p-4 mb-6 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-sm font-medium", children: "Access denied. Your account does not have admin privileges. Contact the commanding officer to request access." }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/",
                      className: "military-button-secondary text-sm block text-center",
                      "data-ocid": "admin_login.back_home_link",
                      children: "Return to Home"
                    }
                  )
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "admin_login.login_form", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm text-center mb-6 leading-relaxed", children: "Authenticate with Internet Identity to access the secure admin dashboard and manage all organisation content." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: login,
                  disabled: isLoggingIn,
                  className: "military-button w-full flex items-center justify-center gap-3 py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed",
                  "data-ocid": "admin_login.login_button",
                  children: isLoggingIn ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" }),
                    "Authenticating…"
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-5 w-5" }),
                    "Login with Internet Identity"
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-6 border-t border-border text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/",
                className: "text-xs text-muted-foreground hover:text-foreground transition-smooth",
                "data-ocid": "admin_login.home_link",
                children: "← Return to main site"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-secondary h-2 w-full" })
        ] })
      ]
    }
  );
}
export {
  AdminLoginPage as default
};
