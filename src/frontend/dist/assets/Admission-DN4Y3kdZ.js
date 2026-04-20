import { j as jsxRuntimeExports, a as LoadingPage, L as Link } from "./index-Di1Y5MzV.js";
import { L as Layout, S as SectionHeader } from "./SectionHeader-DfAs1Yby.js";
import { M as MilitaryCard } from "./MilitaryCard-CVprCRYX.js";
import { k as useAdmissionInfo, m as motion } from "./use-backend-CkKQvMLG.js";
import { c as createLucideIcon } from "./backend-CA2XpFJp.js";
import { F as FileText } from "./file-text-CiJvhevZ.js";
import { C as CircleCheckBig } from "./circle-check-big-BrQfFvta.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode);
const FALLBACK_DOCS = [
  "Passport-size photographs (4 copies)",
  "School/College Certificate",
  "Address Proof (Aadhaar/Voter ID)",
  "Photo ID Proof"
];
const FALLBACK_FEES = { admission: 350n, monthly: 50n };
function AdmissionPage() {
  const { data: admissionInfo, isLoading } = useAdmissionInfo();
  if (isLoading)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingPage, {}) });
  const fees = (admissionInfo == null ? void 0 : admissionInfo.fees) ?? FALLBACK_FEES;
  const docs = (admissionInfo == null ? void 0 : admissionInfo.documents) ?? FALLBACK_DOCS;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-primary py-20 text-primary-foreground",
        "data-ocid": "admission.hero_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block mb-3 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase", children: "Enroll Today" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4", children: "Admission" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 max-w-xl text-lg leading-relaxed", children: "Join the Azad Hind United Squad — a disciplined path to leadership, fitness, and national service." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 md:py-20 bg-background",
        "data-ocid": "admission.fees_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { badge: "Fees", title: "Admission Fees" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                "data-ocid": "admission.admission_fee_card",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MilitaryCard, { className: "text-center border-t-4 border-t-primary", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-8 w-8 text-secondary mx-auto mb-3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-bold text-4xl text-primary mb-1", children: [
                    "₹",
                    fees.admission.toString()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground uppercase tracking-widest font-semibold", children: "One-Time Admission Fee" })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: 0.1 },
                "data-ocid": "admission.monthly_fee_card",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MilitaryCard, { className: "text-center border-t-4 border-t-secondary", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-8 w-8 text-primary mx-auto mb-3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-bold text-4xl text-primary mb-1", children: [
                    "₹",
                    fees.monthly.toString()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground uppercase tracking-widest font-semibold", children: "Monthly Fee" })
                ] })
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-muted/40 border-y border-border",
        "data-ocid": "admission.documents_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              badge: "Required",
              title: "Documents Needed",
              subtitle: "Prepare these documents before submitting your application."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MilitaryCard, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-6 w-6 text-secondary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground", children: "Required Documents" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", "data-ocid": "admission.documents_list", children: docs.map((doc, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-center gap-3 text-foreground",
                "data-ocid": `admission.doc_item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-secondary flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: doc })
                ]
              },
              doc
            )) })
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-background",
        "data-ocid": "admission.steps_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { badge: "Process", title: "How to Apply" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-10", children: [
            {
              step: "01",
              title: "Contact Us",
              desc: "Call or visit our headquarters at Behala Chowrasta, Kolkata."
            },
            {
              step: "02",
              title: "Submit Documents",
              desc: "Bring required documents and passport-size photos for registration."
            },
            {
              step: "03",
              title: "Pay Admission Fee",
              desc: "Pay the one-time ₹350 admission fee and ₹50/month ongoing."
            }
          ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.12 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MilitaryCard, { accent: true, className: "h-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-4xl text-primary/20 mb-2", children: s.step }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground mb-2", children: s.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: s.desc })
              ] })
            },
            s.step
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contact",
              className: "military-button inline-flex items-center gap-2",
              "data-ocid": "admission.apply_button",
              children: [
                "Apply Now ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          ) })
        ] })
      }
    )
  ] });
}
export {
  AdmissionPage as default
};
