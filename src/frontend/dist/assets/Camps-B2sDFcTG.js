import { j as jsxRuntimeExports, a as LoadingPage } from "./index-Di1Y5MzV.js";
import { L as Layout, S as SectionHeader } from "./SectionHeader-DfAs1Yby.js";
import { M as MilitaryCard } from "./MilitaryCard-CVprCRYX.js";
import { c as useCamps, m as motion } from "./use-backend-CkKQvMLG.js";
import { T as Tent } from "./tent-KMKJzj4R.js";
import { c as createLucideIcon } from "./backend-CA2XpFJp.js";
import { C as CircleCheckBig } from "./circle-check-big-BrQfFvta.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode);
const FALLBACK_CAMPS = [
  {
    id: 1n,
    name: "Summer Camp",
    duration: "4–7 days",
    description: "An intensive summer training program combining physical endurance, military skills, and team building exercises.",
    activities: [
      "Gun shooting",
      "Rock climbing",
      "Fire fighting",
      "Self-defense",
      "Cultural programs"
    ]
  },
  {
    id: 2n,
    name: "Winter Camp",
    duration: "5–7 days",
    description: "Cold-weather survival training, mountain trekking, and advanced military skills in challenging winter conditions.",
    activities: [
      "Cold weather survival",
      "Trekking",
      "First aid drills",
      "Camp craft",
      "Cultural programs"
    ]
  }
];
function CampsPage() {
  const { data: camps = [], isLoading } = useCamps();
  if (isLoading)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingPage, {}) });
  const displayCamps = camps.length > 0 ? camps : FALLBACK_CAMPS;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-primary py-20 text-primary-foreground",
        "data-ocid": "camps.hero_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block mb-3 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase", children: "Field Training" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4", children: "Camps & Programs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 max-w-xl text-lg leading-relaxed", children: "Multi-day immersive camps that build survival skills, teamwork, and national character in real field conditions." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 md:py-20 bg-background",
        "data-ocid": "camps.list_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { badge: "Camps", title: "Annual Camp Programs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: displayCamps.map((camp, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              "data-ocid": `camps.camp_card.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MilitaryCard, { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-1 md:col-span-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 bg-primary flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tent, { className: "h-6 w-6 text-primary-foreground" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-2xl text-foreground", children: camp.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 text-secondary" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                          "Duration: ",
                          camp.duration
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: camp.description })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3", children: "Activities Include" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: camp.activities.map((activity) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-center gap-2 text-sm text-foreground",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 text-secondary flex-shrink-0" }),
                        activity
                      ]
                    },
                    activity
                  )) })
                ] })
              ] })
            },
            String(camp.id)
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14 bg-muted/40 border-t border-border",
        "data-ocid": "camps.highlights_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { badge: "Experience", title: "What to Expect" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5", children: [
            {
              icon: "🎯",
              label: "Gun Shooting",
              desc: "Supervised target practice with safety protocols."
            },
            {
              icon: "🧗",
              label: "Rock Climbing",
              desc: "Vertical training builds courage and physical strength."
            },
            {
              icon: "🔥",
              label: "Fire Fighting",
              desc: "Emergency response and fire safety fundamentals."
            },
            {
              icon: "🎭",
              label: "Cultural Programs",
              desc: "Patriotic performances celebrating national pride."
            }
          ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 15 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MilitaryCard, { accent: true, className: "text-center h-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: item.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground mb-1", children: item.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: item.desc })
              ] })
            },
            item.label
          )) })
        ] })
      }
    )
  ] });
}
export {
  CampsPage as default
};
