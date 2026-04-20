import { j as jsxRuntimeExports, a as LoadingPage } from "./index-Di1Y5MzV.js";
import { L as Layout, S as SectionHeader, P as Phone } from "./SectionHeader-DfAs1Yby.js";
import { M as MilitaryCard } from "./MilitaryCard-CVprCRYX.js";
import { d as useBranches, m as motion, M as MapPin } from "./use-backend-CkKQvMLG.js";
import { S as Star } from "./star-w2kgbZwp.js";
import { c as createLucideIcon } from "./backend-CA2XpFJp.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
const FALLBACK_BRANCHES = [
  {
    id: 1n,
    name: "Behala Chowrasta Unit",
    address: "15/1 Raja Rammohan Roy Road, Kolkata – 700008",
    contactPerson: "Ratan Halder",
    phone: "9804312544",
    isHQ: true
  },
  {
    id: 2n,
    name: "Barisha Branch",
    address: "Barisha, Kolkata",
    contactPerson: "Branch Commander",
    phone: "9804312544",
    isHQ: false
  },
  {
    id: 3n,
    name: "Thakurpukur Branch",
    address: "Thakurpukur, Kolkata",
    contactPerson: "Branch Commander",
    phone: "9804312544",
    isHQ: false
  },
  {
    id: 4n,
    name: "Bishnupur Branch",
    address: "Bishnupur, West Bengal",
    contactPerson: "Branch Commander",
    phone: "9804312544",
    isHQ: false
  },
  {
    id: 5n,
    name: "Falta Branch",
    address: "Falta, South 24 Parganas",
    contactPerson: "Branch Commander",
    phone: "9804312544",
    isHQ: false
  },
  {
    id: 6n,
    name: "Newtown Branch",
    address: "Newtown, Kolkata",
    contactPerson: "Branch Commander",
    phone: "9804312544",
    isHQ: false
  },
  {
    id: 7n,
    name: "Kalagachhia Branch",
    address: "Kalagachhia, Howrah",
    contactPerson: "Branch Commander",
    phone: "9804312544",
    isHQ: false
  },
  {
    id: 8n,
    name: "Shibrampur Branch",
    address: "Shibrampur, West Bengal",
    contactPerson: "Branch Commander",
    phone: "9804312544",
    isHQ: false
  },
  {
    id: 9n,
    name: "Howrah Singur Branch",
    address: "Singur, Hooghly",
    contactPerson: "Branch Commander",
    phone: "9804312544",
    isHQ: false
  }
];
function BranchesPage() {
  const { data: branches = [], isLoading } = useBranches();
  if (isLoading)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingPage, {}) });
  const displayBranches = branches.length > 0 ? branches : FALLBACK_BRANCHES;
  const hq = displayBranches.find((b) => b.isHQ);
  const regional = displayBranches.filter((b) => !b.isHQ);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-primary py-20 text-primary-foreground",
        "data-ocid": "branches.hero_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block mb-3 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase", children: "Network" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4", children: "Our Branches" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-primary-foreground/70 max-w-xl text-lg leading-relaxed", children: [
            "Operating across ",
            displayBranches.length,
            " locations in West Bengal, bringing military training to youth across the region."
          ] })
        ] })
      }
    ),
    hq && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14 bg-background",
        "data-ocid": "branches.hq_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { badge: "Headquarters", title: "Main HQ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "max-w-2xl mx-auto",
              "data-ocid": "branches.hq_card",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MilitaryCard, { className: "border-l-4 border-l-secondary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-6 w-6 text-secondary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground", children: hq.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "military-badge", children: "HQ" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 mt-0.5 flex-shrink-0 text-secondary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: hq.address })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 flex-shrink-0 text-secondary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: hq.contactPerson })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 flex-shrink-0 text-secondary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: `tel:${hq.phone}`,
                        className: "hover:text-foreground transition-smooth",
                        children: hq.phone
                      }
                    )
                  ] })
                ] })
              ] })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-muted/40 border-y border-border",
        "data-ocid": "branches.regional_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              badge: "Branches",
              title: "Regional Branches",
              subtitle: `${regional.length} branches spread across the region`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: regional.map((branch, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.07 },
              "data-ocid": `branches.branch_card.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MilitaryCard, { className: "h-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground mb-3", children: branch.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 mt-0.5 flex-shrink-0 text-secondary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: branch.address })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 flex-shrink-0 text-secondary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: branch.contactPerson })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 flex-shrink-0 text-secondary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: `tel:${branch.phone}`,
                        className: "hover:text-foreground transition-smooth",
                        children: branch.phone
                      }
                    )
                  ] })
                ] })
              ] })
            },
            String(branch.id)
          )) })
        ] })
      }
    )
  ] });
}
export {
  BranchesPage as default
};
