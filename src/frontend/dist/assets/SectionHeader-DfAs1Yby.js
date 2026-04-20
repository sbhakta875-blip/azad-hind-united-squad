import { R as React, j as jsxRuntimeExports, L as Link, r as reactExports, b as useRouterState } from "./index-Di1Y5MzV.js";
import { c as createLucideIcon, S as Shield } from "./backend-CA2XpFJp.js";
import { M as MapPin, n as Mail, u as useOrgInfo, X } from "./use-backend-CkKQvMLG.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 18h16", key: "19g7jn" }],
  ["path", { d: "M4 6h16", key: "1o0s65" }]
];
const Menu = createLucideIcon("menu", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = React.createContext && /* @__PURE__ */ React.createContext(DefaultContext);
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /* @__PURE__ */ React.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ React.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr,
      size,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ React.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /* @__PURE__ */ React.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? /* @__PURE__ */ React.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}
function SiX(props) {
  return GenIcon({ "attr": { "role": "img", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" }, "child": [] }] })(props);
}
function SiInstagram(props) {
  return GenIcon({ "attr": { "role": "img", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" }, "child": [] }] })(props);
}
function SiFacebook(props) {
  return GenIcon({ "attr": { "role": "img", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" }, "child": [] }] })(props);
}
const year = (/* @__PURE__ */ new Date()).getFullYear();
const hostname = typeof window !== "undefined" ? encodeURIComponent(window.location.hostname) : "";
const siteLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Programs", to: "/training" },
  { label: "Gallery", to: "/gallery" }
];
const leadershipLinks = [
  { label: "Leadership", to: "/leadership" },
  { label: "Branches", to: "/branches" },
  { label: "Careers", to: "/admission" }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-primary text-primary-foreground", "data-ocid": "footer", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-1 sm:col-span-2 lg:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 bg-secondary flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-6 w-6 text-secondary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-bold text-base leading-tight", children: [
            "AZAD HIND",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "UNITED SQUAD"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 text-sm leading-relaxed mb-4", children: "Building Discipline, Leadership & Patriotism for the youth of India." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://facebook.com",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "Facebook",
              className: "h-8 w-8 bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-smooth",
              "data-ocid": "footer.facebook_link",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiFacebook, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://instagram.com",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "Instagram",
              className: "h-8 w-8 bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-smooth",
              "data-ocid": "footer.instagram_link",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiInstagram, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://x.com",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "Twitter/X",
              className: "h-8 w-8 bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-smooth",
              "data-ocid": "footer.twitter_link",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiX, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm tracking-widest uppercase text-secondary mb-4", children: "Site" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: siteLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: link.to,
            className: "text-primary-foreground/70 hover:text-secondary text-sm transition-smooth",
            "data-ocid": `footer.${link.label.toLowerCase().replace(" ", "_")}_link`,
            children: link.label
          }
        ) }, link.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm tracking-widest uppercase text-secondary mb-4", children: "Leadership" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: leadershipLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: link.to,
            className: "text-primary-foreground/70 hover:text-secondary text-sm transition-smooth",
            "data-ocid": `footer.${link.label.toLowerCase().replace(" ", "_")}_link`,
            children: link.label
          }
        ) }, link.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm tracking-widest uppercase text-secondary mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-primary-foreground/70", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 mt-0.5 flex-shrink-0 text-secondary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "tel:+919804312544",
                className: "hover:text-secondary transition-smooth",
                children: "+91 98043 12544"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-primary-foreground/70", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 mt-0.5 flex-shrink-0 text-secondary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Behala Chowrasta, 15/1 Raja Rammohan Roy Road, Kolkata – 700008" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-primary-foreground/70", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 mt-0.5 flex-shrink-0 text-secondary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "contact@azadhindsquad.org" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-primary-foreground/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        year,
        " Azad Hind United Squad. Reg. No: S/20/755"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "hover:text-secondary transition-smooth",
          children: "Built with love using caffeine.ai"
        }
      )
    ] }) })
  ] });
}
const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Leadership", to: "/leadership" },
  { label: "Training", to: "/training" },
  { label: "Camps", to: "/camps" },
  { label: "Branches", to: "/branches" },
  { label: "Gallery", to: "/gallery" },
  { label: "Admission", to: "/admission" },
  { label: "Contact", to: "/contact" }
];
function Navbar() {
  var _a;
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const { data: orgInfo } = useOrgInfo();
  const orgName = (orgInfo == null ? void 0 : orgInfo.name) ?? "AZAD HIND UNITED SQUAD";
  const logoUrl = (_a = orgInfo == null ? void 0 : orgInfo.logoBlob) == null ? void 0 : _a.getDirectURL();
  const isActive = (to) => {
    if (to === "/") return currentPath === "/";
    return currentPath.startsWith(to);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "nav",
    {
      className: "fixed top-0 left-0 right-0 z-50 bg-card border-b-2 border-primary shadow-lg",
      "data-ocid": "navbar",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between h-16 md:h-18", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/",
              className: "flex items-center gap-3 min-w-0",
              "data-ocid": "navbar.logo_link",
              children: [
                logoUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: logoUrl,
                    alt: "Logo",
                    className: "h-10 w-10 object-contain flex-shrink-0"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 bg-primary flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-6 w-6 text-primary-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-sm md:text-base text-foreground leading-tight truncate", children: orgName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground tracking-widest uppercase hidden sm:block", children: "Ministry of Youth Affairs" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center gap-1", children: [
            navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: link.to,
                className: `px-3 py-2 text-xs font-semibold tracking-widest uppercase transition-smooth border-b-2 ${isActive(link.to) ? "border-secondary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground hover:border-secondary/50"}`,
                "data-ocid": `navbar.${link.label.toLowerCase()}_link`,
                children: link.label
              },
              link.to
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/admission",
                className: "ml-3 military-button text-xs",
                "data-ocid": "navbar.join_button",
                children: "Join Now"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "lg:hidden p-2 text-foreground",
              onClick: () => setIsOpen(!isOpen),
              "aria-label": isOpen ? "Close menu" : "Open menu",
              "data-ocid": "navbar.hamburger_toggle",
              children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
            }
          )
        ] }) }),
        isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "lg:hidden bg-card border-t border-border",
            "data-ocid": "navbar.mobile_menu",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 space-y-1", children: [
              navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: link.to,
                  onClick: () => setIsOpen(false),
                  className: `block px-3 py-2.5 text-sm font-semibold tracking-wider uppercase border-l-4 transition-smooth ${isActive(link.to) ? "border-l-secondary bg-muted text-foreground" : "border-l-transparent text-muted-foreground hover:border-l-secondary/50 hover:bg-muted/50 hover:text-foreground"}`,
                  "data-ocid": `navbar.mobile_${link.label.toLowerCase()}_link`,
                  children: link.label
                },
                link.to
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/admission",
                  onClick: () => setIsOpen(false),
                  className: "block military-button text-center mt-2",
                  "data-ocid": "navbar.mobile_join_button",
                  children: "Join Now"
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 pt-16 md:pt-18", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  light = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mb-10 md:mb-14 ${centered ? "text-center" : ""}`, children: [
    badge && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: `inline-block mb-3 px-4 py-1 text-xs font-semibold tracking-widest uppercase border ${light ? "border-secondary/60 bg-secondary/20 text-secondary-foreground" : "border-primary/40 bg-primary/10 text-primary"}`,
        children: badge
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        className: `font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight ${light ? "text-primary-foreground" : "text-foreground"}`,
        children: title
      }
    ),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: `mt-4 max-w-2xl text-base md:text-lg leading-relaxed ${centered ? "mx-auto" : ""} ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`,
        children: subtitle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `mt-5 ${centered ? "mx-auto" : ""} h-1 w-16 ${light ? "bg-secondary" : "bg-primary"}`
      }
    )
  ] });
}
export {
  Layout as L,
  Phone as P,
  SectionHeader as S
};
