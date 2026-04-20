import { j as jsxRuntimeExports, a as LoadingPage } from "./index-Di1Y5MzV.js";
import { L as Layout, S as SectionHeader } from "./SectionHeader-DfAs1Yby.js";
import { M as MilitaryCard } from "./MilitaryCard-CVprCRYX.js";
import { u as useOrgInfo, m as motion } from "./use-backend-CkKQvMLG.js";
import { c as createLucideIcon, S as Shield } from "./backend-CA2XpFJp.js";
import { A as Award } from "./award-CEx0g8ha.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode);
function AboutPage() {
  const { data: orgInfo, isLoading } = useOrgInfo();
  const name = (orgInfo == null ? void 0 : orgInfo.name) ?? "AZAD HIND UNITED SQUAD";
  const dept = (orgInfo == null ? void 0 : orgInfo.department) ?? "Ministry of Youth Affairs & Sports, Govt. of India";
  const regNo = (orgInfo == null ? void 0 : orgInfo.registrationNo) ?? "S/20/755";
  const affNo = (orgInfo == null ? void 0 : orgInfo.affiliationNo) ?? "62213686 / NYK / 6221 / 2024–2025";
  const address = (orgInfo == null ? void 0 : orgInfo.address) ?? "Behala Chowrasta, 15/1 Raja Rammohan Roy Road, Kolkata – 700008";
  const phone = (orgInfo == null ? void 0 : orgInfo.phone) ?? "9804312544";
  const mission = (orgInfo == null ? void 0 : orgInfo.mission) ?? [
    "Character building through military discipline",
    "Self-reliance and physical fitness",
    "Patriotism and national service",
    "Leadership and community development"
  ];
  if (isLoading)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingPage, {}) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-primary py-20 text-primary-foreground",
        "data-ocid": "about.hero_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block mb-3 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase", children: "About Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4", children: name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 max-w-2xl text-lg leading-relaxed", children: "A premier youth development organization committed to building the next generation of disciplined, patriotic leaders." })
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 md:py-20 bg-background",
        "data-ocid": "about.info_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SectionHeader,
                  {
                    badge: "Identity",
                    title: "Our Organization",
                    centered: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "space-y-4", children: [
                  ["Organization Name", name],
                  ["Department", dept],
                  ["Registration No.", regNo],
                  ["Affiliation No.", affNo],
                  ["Headquarters", address],
                  ["Phone", phone]
                ].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border pb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-0.5", children: k }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-foreground font-medium", children: v })
                ] }, k)) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SectionHeader,
                  {
                    badge: "Purpose",
                    title: "Our Mission",
                    centered: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mb-8", children: mission.map((item, missionIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  MilitaryCard,
                  {
                    accent: true,
                    className: "flex items-center gap-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 bg-primary flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground text-sm font-bold", children: missionIndex + 1 }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: item })
                    ]
                  },
                  item
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/5 border border-primary/20 p-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed italic", children: '"Our goal is to instill in the youth of India the values of discipline, service, and patriotism — equipping them to be responsible citizens and future leaders of the nation."' }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-xs font-semibold text-muted-foreground uppercase tracking-widest", children: "— Azad Hind United Squad" })
                ] })
              ]
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-muted/40 border-y border-border",
        "data-ocid": "about.values_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { badge: "Values", title: "What Guides Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-8 w-8" }),
              title: "Discipline",
              desc: "Strict adherence to military values, time management, and personal responsibility."
            },
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-8 w-8" }),
              title: "Education",
              desc: "Preparation for government exams, first aid, and civic knowledge."
            },
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-8 w-8" }),
              title: "Honor",
              desc: "Serving the nation with integrity, courage, and unwavering commitment."
            }
          ].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MilitaryCard, { className: "text-center h-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-secondary mb-4 flex justify-center", children: v.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground mb-2", children: v.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: v.desc })
              ] })
            },
            v.title
          )) })
        ] })
      }
    )
  ] });
}
export {
  AboutPage as default
};
