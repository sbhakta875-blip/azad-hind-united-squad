import { j as jsxRuntimeExports, a as LoadingPage } from "./index-Di1Y5MzV.js";
import { c as createLucideIcon, A as ActivityCategory, S as Shield } from "./backend-CA2XpFJp.js";
import { L as Layout, S as SectionHeader } from "./SectionHeader-DfAs1Yby.js";
import { M as MilitaryCard } from "./MilitaryCard-CVprCRYX.js";
import { b as useActivities, m as motion } from "./use-backend-CkKQvMLG.js";
import { F as Flag, T as Target } from "./target-CUVSN_kR.js";
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
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const FALLBACK_TRAINING = [
  {
    id: 1n,
    name: "Drill & Marching",
    description: "Precision parade formations, cadence drills, and command-response training.",
    category: ActivityCategory.training
  },
  {
    id: 2n,
    name: "Physical Training",
    description: "Endurance runs, strength conditioning, and military fitness benchmarks.",
    category: ActivityCategory.training
  },
  {
    id: 3n,
    name: "Traffic Training",
    description: "Road safety, traffic management duties, and public service coordination.",
    category: ActivityCategory.training
  },
  {
    id: 4n,
    name: "Band Training",
    description: "Military band performance, instrument proficiency, and ceremonial music.",
    category: ActivityCategory.training
  },
  {
    id: 5n,
    name: "Govt. Exam Training",
    description: "Preparation for government and defense service competitive examinations.",
    category: ActivityCategory.training
  },
  {
    id: 6n,
    name: "First Aid",
    description: "Basic emergency response, wound care, and casualty management protocols.",
    category: ActivityCategory.training
  },
  {
    id: 7n,
    name: "Defense Training",
    description: "Self-defense techniques, situational awareness, and tactical fundamentals.",
    category: ActivityCategory.training
  },
  {
    id: 8n,
    name: "Camping",
    description: "Field craft, survival skills, and outdoor leadership exercises.",
    category: ActivityCategory.training
  }
];
const FALLBACK_EVENTS = [
  {
    id: 9n,
    name: "RDC Parade",
    description: "Republic Day Camp parade training and national-level competitive drill.",
    category: ActivityCategory.event
  },
  {
    id: 10n,
    name: "Independence Day Parade",
    description: "Annual 15th August parade drills and ceremonial formations.",
    category: ActivityCategory.event
  },
  {
    id: 11n,
    name: "PTS Parade",
    description: "Pre-Trekking and Service parade training exercises.",
    category: ActivityCategory.event
  }
];
const ICON_MAP = {
  "Drill & Marching": /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-6 w-6" }),
  "Physical Training": /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-6 w-6" }),
  "Defense Training": /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-6 w-6" })
};
function TrainingPage() {
  const { data: activities = [], isLoading } = useActivities();
  if (isLoading)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingPage, {}) });
  const trainings = activities.filter(
    (a) => a.category === ActivityCategory.training
  );
  const events = activities.filter(
    (a) => a.category === ActivityCategory.event
  );
  const displayTrainings = trainings.length > 0 ? trainings : FALLBACK_TRAINING;
  const displayEvents = events.length > 0 ? events : FALLBACK_EVENTS;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-primary py-20 text-primary-foreground",
        "data-ocid": "training.hero_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block mb-3 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase", children: "Programs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4", children: "Training & Activities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 max-w-xl text-lg leading-relaxed", children: "Comprehensive military-style training programs building discipline, fitness, and national character." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 md:py-20 bg-background",
        "data-ocid": "training.programs_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              badge: "Training",
              title: "Core Training Programs",
              subtitle: "Eight pillars of cadet development forming the foundation of the Azad Hind United Squad program."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: displayTrainings.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 25 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.08 },
              "data-ocid": `training.program_card.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MilitaryCard, { accent: true, className: "h-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-secondary mb-3", children: ICON_MAP[t.name] ?? /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { className: "h-6 w-6" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground mb-2", children: t.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: t.description })
              ] })
            },
            String(t.id)
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-muted/40 border-y border-border",
        "data-ocid": "training.events_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              badge: "Events",
              title: "Key Parade Events",
              subtitle: "Annual parades and ceremonies where cadets represent the organization at national level."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: displayEvents.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.97 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              "data-ocid": `training.event_card.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MilitaryCard, { className: "border-t-4 border-t-primary h-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { className: "h-6 w-6 text-secondary mb-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground mb-2", children: e.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: e.description })
              ] })
            },
            String(e.id)
          )) })
        ] })
      }
    )
  ] });
}
export {
  TrainingPage as default
};
