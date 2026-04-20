import { j as jsxRuntimeExports, a as LoadingPage } from "./index-Di1Y5MzV.js";
import { T as TeamRole, S as Shield } from "./backend-CA2XpFJp.js";
import { L as Layout, S as SectionHeader } from "./SectionHeader-DfAs1Yby.js";
import { M as MilitaryCard } from "./MilitaryCard-CVprCRYX.js";
import { a as useTeamMembers, m as motion } from "./use-backend-CkKQvMLG.js";
import { S as Star } from "./star-w2kgbZwp.js";
const FALLBACK_LEADERS = [
  {
    id: 1n,
    name: "Ratan Halder",
    title: "Chief Commander Officer",
    role: TeamRole.leadership,
    order: 1n
  },
  {
    id: 2n,
    name: "Subham Bhakta",
    title: "Asst. Chief Commander Officer",
    role: TeamRole.leadership,
    order: 2n
  }
];
const FALLBACK_TRAINERS = [
  {
    id: 3n,
    name: "Abhijit Adhikary",
    title: "Senior Trainer",
    role: TeamRole.trainer,
    order: 1n
  },
  {
    id: 4n,
    name: "Mousumi Mondal",
    title: "Official Member",
    role: TeamRole.senior,
    order: 2n
  },
  {
    id: 5n,
    name: "Keya Samanta",
    title: "Senior Member",
    role: TeamRole.senior,
    order: 3n
  }
];
function MemberCard({ member, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: index * 0.1 },
      "data-ocid": `leadership.member_card.${index + 1}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MilitaryCard, { className: "text-center h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-28 w-28 mx-auto mb-4 border-2 border-secondary bg-primary/10 flex items-center justify-center overflow-hidden", children: member.photoBlob ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: member.photoBlob.getDirectURL(),
            alt: member.name,
            className: "h-full w-full object-cover"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-12 w-12 text-primary/30" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground", children: member.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "military-badge mt-2", children: member.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs text-muted-foreground uppercase tracking-widest", children: member.role === TeamRole.leadership ? "Leadership" : member.role === TeamRole.trainer ? "Trainer" : "Senior" })
      ] })
    }
  );
}
function LeadershipPage() {
  const { data: members = [], isLoading } = useTeamMembers();
  if (isLoading)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingPage, {}) });
  const leaders = members.filter((m) => m.role === TeamRole.leadership).sort((a, b) => Number(a.order - b.order));
  const trainers = members.filter((m) => m.role === TeamRole.trainer || m.role === TeamRole.senior).sort((a, b) => Number(a.order - b.order));
  const displayLeaders = leaders.length > 0 ? leaders : FALLBACK_LEADERS;
  const displayTrainers = trainers.length > 0 ? trainers : FALLBACK_TRAINERS;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-primary py-20 text-primary-foreground",
        "data-ocid": "leadership.hero_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block mb-3 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase", children: "Our Team" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4", children: "Meet Our Leadership" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 max-w-xl text-lg leading-relaxed", children: "Empowering the youth to serve the nation with dedication and honor." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 md:py-20 bg-background",
        "data-ocid": "leadership.command_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { badge: "Command", title: "Commanding Officers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto", children: displayLeaders.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(MemberCard, { member: m, index: i }, String(m.id))) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-muted/40 border-y border-border",
        "data-ocid": "leadership.trainers_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { badge: "Staff", title: "Seniors & Trainers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: displayTrainers.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(MemberCard, { member: m, index: i }, String(m.id))) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14 bg-background",
        "data-ocid": "leadership.values_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { badge: "Motto", title: "Our Core Principles" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
            "Service Before Self",
            "Discipline & Honor",
            "Unity & Strength"
          ].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MilitaryCard, { accent: true, className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-6 w-6 text-secondary mx-auto mb-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground", children: v })
              ] })
            },
            v
          )) })
        ] })
      }
    )
  ] });
}
export {
  LeadershipPage as default
};
