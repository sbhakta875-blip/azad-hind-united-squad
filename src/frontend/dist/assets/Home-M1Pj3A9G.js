import { j as jsxRuntimeExports, L as Link, r as reactExports } from "./index-Di1Y5MzV.js";
import { c as createLucideIcon, T as TeamRole, A as ActivityCategory, S as Shield } from "./backend-CA2XpFJp.js";
import { L as Layout, S as SectionHeader, P as Phone } from "./SectionHeader-DfAs1Yby.js";
import { M as MilitaryCard, S as StatCard } from "./MilitaryCard-CVprCRYX.js";
import { u as useOrgInfo, a as useTeamMembers, b as useActivities, m as motion, M as MapPin } from "./use-backend-CkKQvMLG.js";
import { C as ChevronRight, A as AnimatePresence, a as ChevronLeft } from "./index-CuCNRzDb.js";
import { S as Star } from "./star-w2kgbZwp.js";
import { F as Flag, T as Target } from "./target-CUVSN_kR.js";
import { U as Users } from "./users-CcVL-bXY.js";
import { A as Award } from "./award-CEx0g8ha.js";
import { T as Tent } from "./tent-KMKJzj4R.js";
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
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode);
const CAROUSEL_SLIDES = [
  {
    src: "/assets/generated/hero-parade.dim_1600x900.jpg",
    alt: "Cadets on parade",
    label: "Parade & Drill",
    caption: "Precision formations that build discipline and teamwork"
  },
  {
    src: "/assets/generated/carousel-drill.dim_1600x900.jpg",
    alt: "Drill formation",
    label: "Military Drill",
    caption: "Command-response training for sharp, focused minds"
  },
  {
    src: "/assets/generated/carousel-camp.dim_1600x900.jpg",
    alt: "Training camp",
    label: "National Camps",
    caption: "Summer & winter camps with adventure and leadership programs"
  },
  {
    src: "/assets/generated/carousel-flag.dim_1600x900.jpg",
    alt: "Flag ceremony",
    label: "Flag Ceremony",
    caption: "Instilling patriotism and pride in every cadet"
  },
  {
    src: "/assets/generated/carousel-service.dim_1600x900.jpg",
    alt: "Community service",
    label: "Social Work",
    caption: "Serving communities and building a stronger nation"
  }
];
const INTERVAL_MS = 5e3;
function Carousel() {
  const [current, setCurrent] = reactExports.useState(0);
  const [direction, setDirection] = reactExports.useState(1);
  const [paused, setPaused] = reactExports.useState(false);
  const goTo = reactExports.useCallback((index, dir = 1) => {
    setDirection(dir);
    setCurrent(index);
  }, []);
  const next = reactExports.useCallback(() => {
    goTo((current + 1) % CAROUSEL_SLIDES.length, 1);
  }, [current, goTo]);
  const prev = reactExports.useCallback(() => {
    goTo((current - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length, -1);
  }, [current, goTo]);
  reactExports.useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL_MS);
    return () => clearInterval(id);
  }, [next, paused]);
  const variants = {
    enter: (d) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0.6 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0.6 })
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative w-full overflow-hidden bg-primary",
      style: { aspectRatio: "16/7" },
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
      "data-ocid": "home.carousel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, custom: direction, mode: "sync", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.img,
          {
            custom: direction,
            variants,
            initial: "enter",
            animate: "center",
            exit: "exit",
            transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
            src: CAROUSEL_SLIDES[current].src,
            alt: CAROUSEL_SLIDES[current].alt,
            className: "absolute inset-0 w-full h-full object-cover object-center",
            style: { willChange: "transform, opacity" }
          },
          current
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-primary/50 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 left-0 right-0 px-6 text-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4, delay: 0.25 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-4 py-1 bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase mb-2", children: CAROUSEL_SLIDES[current].label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/90 text-sm md:text-base max-w-md mx-auto leading-relaxed hidden sm:block", children: CAROUSEL_SLIDES[current].caption })
            ]
          },
          `caption-${current}`
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: prev,
            className: "absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-primary/60 border border-primary-foreground/20 text-primary-foreground hover:bg-primary/90 transition-smooth",
            "aria-label": "Previous slide",
            type: "button",
            "data-ocid": "home.carousel_prev",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: next,
            type: "button",
            className: "absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-primary/60 border border-primary-foreground/20 text-primary-foreground hover:bg-primary/90 transition-smooth",
            "aria-label": "Next slide",
            "data-ocid": "home.carousel_next",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20", children: CAROUSEL_SLIDES.map((slide, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => goTo(i, i > current ? 1 : -1),
            "aria-label": `Go to slide ${i + 1}`,
            "data-ocid": `home.carousel_dot.${i + 1}`,
            className: `transition-smooth ${i === current ? "w-6 h-2 bg-secondary" : "w-2 h-2 bg-primary-foreground/40 hover:bg-primary-foreground/70"}`
          },
          slide.label
        )) })
      ]
    }
  );
}
const HIGHLIGHTS = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-8 w-8" }),
    title: "Military Training",
    desc: "Drill, marching, defense, first aid and physical conditioning for youth."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Tent, { className: "h-8 w-8" }),
    title: "National Camps",
    desc: "Summer & winter camps with rock climbing, shooting and cultural programs."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-8 w-8" }),
    title: "Social Work",
    desc: "Community service, traffic training, and nation-building activities."
  }
];
const QUICK_NAV = [
  { label: "About Us", to: "/about", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }) },
  {
    label: "Leadership",
    to: "/leadership",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-5 w-5" })
  },
  { label: "Training", to: "/training", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5" }) },
  { label: "Camps", to: "/camps", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Tent, { className: "h-5 w-5" }) },
  { label: "Branches", to: "/branches", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5" }) },
  { label: "Gallery", to: "/gallery", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { className: "h-5 w-5" }) },
  { label: "Admission", to: "/admission", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5" }) },
  { label: "Contact", to: "/contact", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }) }
];
function HomePage() {
  const { data: orgInfo } = useOrgInfo();
  const { data: teamMembers = [] } = useTeamMembers();
  const { data: activities = [] } = useActivities();
  const leaders = teamMembers.filter((m) => m.role === TeamRole.leadership).sort((a, b) => Number(a.order - b.order)).slice(0, 4);
  const trainings = activities.filter((a) => a.category === ActivityCategory.training).slice(0, 3);
  const defaultLeaders = [
    {
      id: 1n,
      name: "Ratan Halder",
      title: "Chief Commander Officer",
      order: 1n,
      role: TeamRole.leadership,
      bio: [],
      photoUrl: []
    },
    {
      id: 2n,
      name: "Subham Bhakta",
      title: "Asst. Chief Commander Officer",
      order: 2n,
      role: TeamRole.leadership,
      bio: [],
      photoUrl: []
    },
    {
      id: 3n,
      name: "Abhijit Adhikary",
      title: "Senior Trainer",
      order: 3n,
      role: TeamRole.trainer,
      bio: [],
      photoUrl: []
    },
    {
      id: 4n,
      name: "Mousumi Mondal",
      title: "Official Member",
      order: 4n,
      role: TeamRole.senior,
      bio: [],
      photoUrl: []
    }
  ];
  const displayLeaders = leaders.length > 0 ? leaders : defaultLeaders;
  const defaultTrainings = [
    {
      id: 1n,
      name: "Drill & Marching",
      description: "Precision formations, parade drills, and command-response training for cadets.",
      category: ActivityCategory.training
    },
    {
      id: 2n,
      name: "Physical Training",
      description: "Strength conditioning, endurance runs, and fitness benchmarks.",
      category: ActivityCategory.training
    },
    {
      id: 3n,
      name: "Defense Training",
      description: "Self-defense, discipline, and tactical awareness fundamentals.",
      category: ActivityCategory.training
    }
  ];
  const displayTrainings = trainings.length > 0 ? trainings : defaultTrainings;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative bg-primary overflow-hidden",
        "data-ocid": "home.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)",
                color: "var(--secondary)"
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "flex-1 min-w-0",
                initial: { opacity: 0, x: -40 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.7 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block mb-4 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase", children: "Reg. No: S/20/755 · NYK / 6221 / 2024–2025" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-4 tracking-tight", children: [
                    "AZAD HIND",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary", children: "UNITED SQUAD" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-base md:text-xl max-w-xl mb-8 leading-relaxed", children: (orgInfo == null ? void 0 : orgInfo.tagline) ?? "Building Discipline, Leadership & Patriotism — Empowering the youth to serve the nation with dedication and honor." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", "data-ocid": "home.hero_cta", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: "/admission",
                        className: "military-button text-sm inline-flex items-center gap-2",
                        "data-ocid": "home.join_button",
                        children: [
                          "Join Now ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: "/contact",
                        className: "military-button-secondary text-sm",
                        "data-ocid": "home.contact_button",
                        children: "Contact Us"
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "flex-shrink-0 flex gap-4 flex-col items-start",
                initial: { opacity: 0, x: 40 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.7, delay: 0.15 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [
                  { val: "9+", lbl: "Branches" },
                  { val: "500+", lbl: "Cadets" },
                  { val: "8+", lbl: "Programs" },
                  { val: "2024", lbl: "Affiliated" }
                ].map(({ val, lbl }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "bg-primary-foreground/10 border border-primary-foreground/20 px-5 py-4 text-center min-w-[100px]",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-2xl text-secondary", children: val }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-primary-foreground/70 uppercase tracking-widest mt-1", children: lbl })
                    ]
                  },
                  lbl
                )) })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-1 bg-secondary" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "data-ocid": "home.carousel_section", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Carousel, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-secondary text-secondary-foreground py-4 border-b border-secondary/40",
        "data-ocid": "home.stats_bar",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-bold tracking-widest uppercase text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Reg: S/20/755" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block", children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Affiliation: 62213686 / NYK / 6221 / 2024–25" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block", children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "HQ: Behala, Kolkata" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block", children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "9+ Branches Across West Bengal" })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 md:py-20 bg-background",
        "data-ocid": "home.highlights_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              badge: "Our Focus",
              title: "What We Stand For",
              subtitle: "Committed to building discipline, leadership, and patriotism in Indian youth."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: HIGHLIGHTS.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.12 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MilitaryCard, { accent: true, className: "h-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-secondary mb-4", children: h.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground mb-2", children: h.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: h.desc })
              ] })
            },
            h.title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-10 bg-muted/40 border-y border-border",
        "data-ocid": "home.quick_nav_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6", children: "Explore Our Programs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 sm:grid-cols-8 gap-3", children: QUICK_NAV.map((nav, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: { delay: i * 0.05 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: nav.to,
                  className: "flex flex-col items-center gap-2 p-3 bg-card border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-center group",
                  "data-ocid": `home.quick_nav.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary group-hover:text-primary-foreground transition-colors", children: nav.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold tracking-wide", children: nav.label })
                  ]
                }
              )
            },
            nav.to
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 md:py-20 bg-background",
        "data-ocid": "home.leadership_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { badge: "Our Team", title: "Meet Our Leadership" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: displayLeaders.map((member, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              "data-ocid": `home.leader_card.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MilitaryCard, { className: "text-center h-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 w-24 mx-auto mb-4 bg-primary/10 border-2 border-secondary flex items-center justify-center overflow-hidden", children: member.photoUrl.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: member.photoUrl[0],
                    alt: member.name,
                    className: "h-full w-full object-cover"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-10 w-10 text-primary/40" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-base text-foreground", children: member.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-secondary font-semibold tracking-widest uppercase mt-1", children: member.title })
              ] })
            },
            String(member.id)
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/leadership",
              className: "military-button text-sm",
              "data-ocid": "home.view_leadership_button",
              children: "View Full Team"
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 md:py-20 bg-primary text-primary-foreground",
        "data-ocid": "home.training_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { badge: "Programs", title: "Training Programs", light: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: displayTrainings.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              "data-ocid": `home.training_card.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary-foreground/10 border border-primary-foreground/20 p-6 hover:bg-primary-foreground/15 transition-smooth h-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-6 w-6 text-secondary mb-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg mb-2", children: t.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 text-sm leading-relaxed", children: t.description })
              ] })
            },
            String(t.id)
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/training",
              className: "military-button-secondary text-sm",
              "data-ocid": "home.view_training_button",
              children: "View All Programs"
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-muted/40 border-y border-border",
        "data-ocid": "home.stats_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatCard,
                {
                  value: "9+",
                  label: "Branches",
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { className: "h-6 w-6" })
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.1 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatCard,
                {
                  value: "500+",
                  label: "Cadets",
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-6 w-6" })
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.2 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatCard,
                {
                  value: "8+",
                  label: "Programs",
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-6 w-6" })
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.3 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatCard,
                {
                  value: "2024",
                  label: "Affiliated",
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-6 w-6" })
                }
              )
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14 bg-secondary/20 border-b border-secondary/40",
        "data-ocid": "home.cta_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-foreground mb-4", children: "Ready to Serve Your Nation?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto mb-8 text-base leading-relaxed", children: "Join Azad Hind United Squad today. Build discipline, earn respect, and make a difference." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/admission",
                    className: "military-button",
                    "data-ocid": "home.cta_apply_button",
                    children: "Apply Now — ₹350 Admission"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/contact",
                    className: "military-button-secondary",
                    "data-ocid": "home.cta_contact_button",
                    children: "Contact Us"
                  }
                )
              ] })
            ]
          }
        ) })
      }
    )
  ] });
}
export {
  HomePage as default
};
