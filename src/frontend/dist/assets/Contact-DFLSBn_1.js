import { r as reactExports, j as jsxRuntimeExports, u as ue } from "./index-Di1Y5MzV.js";
import { L as Layout, S as SectionHeader, P as Phone } from "./SectionHeader-DfAs1Yby.js";
import { M as MilitaryCard } from "./MilitaryCard-CVprCRYX.js";
import { L as Label, I as Input, T as Textarea } from "./textarea-COvvYzql.js";
import { l as useSubmitContact, m as motion, M as MapPin, n as Mail } from "./use-backend-CkKQvMLG.js";
import { C as CircleCheckBig } from "./circle-check-big-BrQfFvta.js";
import { c as createLucideIcon } from "./backend-CA2XpFJp.js";
import "./utils-DdB4LPY_.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
];
const Facebook = createLucideIcon("facebook", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode$1);
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
      d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
      key: "1q2vi4"
    }
  ],
  ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }]
];
const Youtube = createLucideIcon("youtube", __iconNode);
const SOCIAL_LINKS = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://facebook.com/azadhindsquad",
    handle: "@AzadHindSquad"
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/azadhindsquad",
    handle: "@AzadHindSquad"
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://youtube.com/@azadhindsquad",
    handle: "Azad Hind United Squad"
  }
];
function ContactPage() {
  const [form, setForm] = reactExports.useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = reactExports.useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const submitContact = useSubmitContact();
  function validate() {
    const next = { name: "", email: "", message: "" };
    let valid = true;
    if (!form.name.trim()) {
      next.name = "Full name is required.";
      valid = false;
    }
    if (!form.email.trim()) {
      next.email = "Email address is required.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
      valid = false;
    }
    if (!form.message.trim()) {
      next.message = "Message is required.";
      valid = false;
    }
    setErrors(next);
    return valid;
  }
  const handleBlur = (field) => {
    const next = { ...errors };
    if (field === "name")
      next.name = form.name.trim() ? "" : "Full name is required.";
    if (field === "email") {
      if (!form.email.trim()) next.email = "Email address is required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        next.email = "Enter a valid email address.";
      else next.email = "";
    }
    if (field === "message")
      next.message = form.message.trim() ? "" : "Message is required.";
    setErrors(next);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await submitContact.mutateAsync(form);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
      ue.success("Message sent! We'll be in touch soon.");
    } catch {
      ue.error("Failed to send message. Please try again.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-primary py-20 text-primary-foreground",
        "data-ocid": "contact.hero_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block mb-3 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase", children: "Reach Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4", children: "Contact Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 max-w-xl text-lg leading-relaxed", children: "Get in touch for admissions, queries, or to learn more about our programs. We respond within 24–48 hours." })
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 md:py-20 bg-background",
        "data-ocid": "contact.content_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              "data-ocid": "contact.form_panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SectionHeader,
                  {
                    badge: "Message",
                    title: "Send Us a Message",
                    centered: false
                  }
                ),
                submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  MilitaryCard,
                  {
                    className: "text-center py-14",
                    "data-ocid": "contact.success_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-14 w-14 text-secondary mx-auto mb-4" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-2xl text-foreground mb-2", children: "Message Sent!" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 max-w-xs mx-auto", children: "Thank you for reaching out. We'll respond within 24–48 hours." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setSubmitted(false),
                          className: "military-button-secondary text-sm",
                          "data-ocid": "contact.send_another_button",
                          children: "Send Another Message"
                        }
                      )
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "form",
                  {
                    onSubmit: handleSubmit,
                    className: "space-y-6",
                    noValidate: true,
                    "data-ocid": "contact.form",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Label,
                          {
                            htmlFor: "name",
                            className: "text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1.5 block",
                            children: [
                              "Full Name ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "name",
                            value: form.name,
                            onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
                            onBlur: () => handleBlur("name"),
                            placeholder: "Enter your full name",
                            "aria-invalid": !!errors.name,
                            "aria-describedby": errors.name ? "name-error" : void 0,
                            "data-ocid": "contact.name_input"
                          }
                        ),
                        errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            id: "name-error",
                            className: "mt-1 text-xs text-destructive",
                            "data-ocid": "contact.name_field_error",
                            children: errors.name
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Label,
                          {
                            htmlFor: "email",
                            className: "text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1.5 block",
                            children: [
                              "Email Address ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "email",
                            type: "email",
                            value: form.email,
                            onChange: (e) => setForm((p) => ({ ...p, email: e.target.value })),
                            onBlur: () => handleBlur("email"),
                            placeholder: "your@email.com",
                            "aria-invalid": !!errors.email,
                            "aria-describedby": errors.email ? "email-error" : void 0,
                            "data-ocid": "contact.email_input"
                          }
                        ),
                        errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            id: "email-error",
                            className: "mt-1 text-xs text-destructive",
                            "data-ocid": "contact.email_field_error",
                            children: errors.email
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Label,
                          {
                            htmlFor: "message",
                            className: "text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1.5 block",
                            children: [
                              "Message ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Textarea,
                          {
                            id: "message",
                            value: form.message,
                            onChange: (e) => setForm((p) => ({ ...p, message: e.target.value })),
                            onBlur: () => handleBlur("message"),
                            placeholder: "Your enquiry, question, or message...",
                            rows: 5,
                            "aria-invalid": !!errors.message,
                            "aria-describedby": errors.message ? "message-error" : void 0,
                            "data-ocid": "contact.message_textarea"
                          }
                        ),
                        errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            id: "message-error",
                            className: "mt-1 text-xs text-destructive",
                            "data-ocid": "contact.message_field_error",
                            children: errors.message
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "submit",
                          disabled: submitContact.isPending,
                          className: "military-button w-full flex items-center justify-center gap-2 disabled:opacity-60",
                          "data-ocid": "contact.submit_button",
                          children: submitContact.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-ocid": "contact.loading_state", children: "Sending..." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
                            " Send Message"
                          ] })
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: 0.1 },
              "data-ocid": "contact.info_panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SectionHeader,
                  {
                    badge: "Info",
                    title: "Get In Touch",
                    centered: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(MilitaryCard, { accent: true, className: "flex items-start gap-4 p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-10 h-10 bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-1", children: "Phone" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: "tel:+919804312544",
                          className: "font-semibold text-foreground hover:text-primary transition-smooth",
                          "data-ocid": "contact.phone_link",
                          children: "+91 98043 12544"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(MilitaryCard, { accent: true, className: "flex items-start gap-4 p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-10 h-10 bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-1", children: "Headquarters" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { className: "not-italic font-medium text-foreground text-sm leading-relaxed", children: [
                        "Behala Chowrasta",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        "15/1 Raja Rammohan Roy Road",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        "Kolkata – 700008, West Bengal"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(MilitaryCard, { accent: true, className: "flex items-start gap-4 p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-10 h-10 bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-1", children: "Email" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: "mailto:contact@azadhindsquad.org",
                          className: "font-semibold text-foreground hover:text-primary transition-smooth break-all",
                          "data-ocid": "contact.email_link",
                          children: "contact@azadhindsquad.org"
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold", children: "Follow Us" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", "data-ocid": "contact.social_links", children: SOCIAL_LINKS.map(({ icon: Icon, label, href, handle }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": label,
                      title: handle,
                      className: "flex items-center gap-2 px-4 py-2.5 bg-card border border-border hover:border-secondary hover:bg-secondary/10 transition-smooth group",
                      "data-ocid": `contact.social_${label.toLowerCase()}_link`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold tracking-wide uppercase text-muted-foreground group-hover:text-foreground transition-smooth hidden sm:block", children: label })
                      ]
                    },
                    label
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "border border-border overflow-hidden",
                    "data-ocid": "contact.map_section",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted px-4 py-2 border-b border-border flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-secondary flex-shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: "Behala Chowrasta, Kolkata" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "iframe",
                        {
                          title: "Azad Hind United Squad HQ Location",
                          src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.6395823014!2d88.31399687600!3d22.49887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027129a9d2aef5%3A0x8c7e17e8c9d1f0a5!2sBehala%20Chowrasta%2C%20Kolkata%2C%20West%20Bengal%20700060!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
                          width: "100%",
                          height: "260",
                          style: { border: 0 },
                          allowFullScreen: true,
                          loading: "lazy",
                          referrerPolicy: "no-referrer-when-downgrade",
                          className: "block"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted px-4 py-2 border-t border-border text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: "https://maps.google.com/?q=Behala+Chowrasta,+15/1+Raja+Rammohan+Roy+Road,+Kolkata+700008",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "text-xs font-semibold text-primary hover:underline tracking-wide",
                          "data-ocid": "contact.open_maps_link",
                          children: "Open in Google Maps ↗"
                        }
                      ) })
                    ]
                  }
                )
              ]
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/40 border-t border-border py-8",
        "data-ocid": "contact.registration_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-1 font-semibold", children: "Registration & Affiliation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-medium", children: "S/20/755  ·  NYK/6221/2024–2025  ·  Reg. No. 62213686" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-full sm:h-10 sm:w-px bg-border" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-1 font-semibold", children: "Operating Hours" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-medium", children: "Mon – Sat  ·  9:00 AM – 6:00 PM" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-full sm:h-10 sm:w-px bg-border" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "tel:+919804312544",
                  className: "military-button-secondary text-sm whitespace-nowrap",
                  "data-ocid": "contact.call_now_button",
                  children: "Call Now"
                }
              )
            ]
          }
        ) })
      }
    )
  ] });
}
export {
  ContactPage as default
};
