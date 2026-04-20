import {
  CheckCircle,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { Layout } from "../components/Layout";
import { MilitaryCard } from "../components/MilitaryCard";
import { SectionHeader } from "../components/SectionHeader";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { useSubmitContact } from "../hooks/use-backend";

const SOCIAL_LINKS = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://facebook.com/azadhindsquad",
    handle: "@AzadHindSquad",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/azadhindsquad",
    handle: "@AzadHindSquad",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://youtube.com/@azadhindsquad",
    handle: "Azad Hind United Squad",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
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

  const handleBlur = (field: keyof typeof form) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await submitContact.mutateAsync(form);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
      toast.success("Message sent! We'll be in touch soon.");
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section
        className="bg-primary py-20 text-primary-foreground"
        data-ocid="contact.hero_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block mb-3 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase">
              Reach Us
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-primary-foreground/70 max-w-xl text-lg leading-relaxed">
              Get in touch for admissions, queries, or to learn more about our
              programs. We respond within 24–48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section
        className="py-16 md:py-20 bg-background"
        data-ocid="contact.content_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* LEFT — Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-ocid="contact.form_panel"
            >
              <SectionHeader
                badge="Message"
                title="Send Us a Message"
                centered={false}
              />

              {submitted ? (
                <MilitaryCard
                  className="text-center py-14"
                  data-ocid="contact.success_state"
                >
                  <CheckCircle className="h-14 w-14 text-secondary mx-auto mb-4" />
                  <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-xs mx-auto">
                    Thank you for reaching out. We'll respond within 24–48
                    hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="military-button-secondary text-sm"
                    data-ocid="contact.send_another_button"
                  >
                    Send Another Message
                  </button>
                </MilitaryCard>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                  data-ocid="contact.form"
                >
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1.5 block"
                    >
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      onBlur={() => handleBlur("name")}
                      placeholder="Enter your full name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      data-ocid="contact.name_input"
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        className="mt-1 text-xs text-destructive"
                        data-ocid="contact.name_field_error"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1.5 block"
                    >
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      onBlur={() => handleBlur("email")}
                      placeholder="your@email.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      data-ocid="contact.email_input"
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="mt-1 text-xs text-destructive"
                        data-ocid="contact.email_field_error"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1.5 block"
                    >
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      onBlur={() => handleBlur("message")}
                      placeholder="Your enquiry, question, or message..."
                      rows={5}
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                      data-ocid="contact.message_textarea"
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="mt-1 text-xs text-destructive"
                        data-ocid="contact.message_field_error"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitContact.isPending}
                    className="military-button w-full flex items-center justify-center gap-2 disabled:opacity-60"
                    data-ocid="contact.submit_button"
                  >
                    {submitContact.isPending ? (
                      <span data-ocid="contact.loading_state">Sending...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* RIGHT — Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              data-ocid="contact.info_panel"
            >
              <SectionHeader
                badge="Info"
                title="Get In Touch"
                centered={false}
              />

              {/* Contact Details */}
              <div className="space-y-3 mb-8">
                <MilitaryCard accent className="flex items-start gap-4 p-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      Phone
                    </div>
                    <a
                      href="tel:+919804312544"
                      className="font-semibold text-foreground hover:text-primary transition-smooth"
                      data-ocid="contact.phone_link"
                    >
                      +91 98043 12544
                    </a>
                  </div>
                </MilitaryCard>

                <MilitaryCard accent className="flex items-start gap-4 p-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      Headquarters
                    </div>
                    <address className="not-italic font-medium text-foreground text-sm leading-relaxed">
                      Behala Chowrasta
                      <br />
                      15/1 Raja Rammohan Roy Road
                      <br />
                      Kolkata – 700008, West Bengal
                    </address>
                  </div>
                </MilitaryCard>

                <MilitaryCard accent className="flex items-start gap-4 p-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:contact@azadhindsquad.org"
                      className="font-semibold text-foreground hover:text-primary transition-smooth break-all"
                      data-ocid="contact.email_link"
                    >
                      contact@azadhindsquad.org
                    </a>
                  </div>
                </MilitaryCard>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">
                  Follow Us
                </div>
                <div className="flex gap-3" data-ocid="contact.social_links">
                  {SOCIAL_LINKS.map(({ icon: Icon, label, href, handle }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={handle}
                      className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border hover:border-secondary hover:bg-secondary/10 transition-smooth group"
                      data-ocid={`contact.social_${label.toLowerCase()}_link`}
                    >
                      <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                      <span className="text-xs font-semibold tracking-wide uppercase text-muted-foreground group-hover:text-foreground transition-smooth hidden sm:block">
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Google Maps Embed */}
              <div
                className="border border-border overflow-hidden"
                data-ocid="contact.map_section"
              >
                <div className="bg-muted px-4 py-2 border-b border-border flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-secondary flex-shrink-0" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Behala Chowrasta, Kolkata
                  </span>
                </div>
                <iframe
                  title="Azad Hind United Squad HQ Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.6395823014!2d88.31399687600!3d22.49887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027129a9d2aef5%3A0x8c7e17e8c9d1f0a5!2sBehala%20Chowrasta%2C%20Kolkata%2C%20West%20Bengal%20700060!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block"
                />
                <div className="bg-muted px-4 py-2 border-t border-border text-center">
                  <a
                    href="https://maps.google.com/?q=Behala+Chowrasta,+15/1+Raja+Rammohan+Roy+Road,+Kolkata+700008"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-primary hover:underline tracking-wide"
                    data-ocid="contact.open_maps_link"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Banner */}
      <section
        className="bg-muted/40 border-t border-border py-8"
        data-ocid="contact.registration_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          >
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1 font-semibold">
                Registration & Affiliation
              </div>
              <p className="text-sm text-foreground font-medium">
                S/20/755 &nbsp;·&nbsp; NYK/6221/2024–2025 &nbsp;·&nbsp; Reg. No.
                62213686
              </p>
            </div>
            <div className="h-px w-full sm:h-10 sm:w-px bg-border" />
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1 font-semibold">
                Operating Hours
              </div>
              <p className="text-sm text-foreground font-medium">
                Mon – Sat &nbsp;·&nbsp; 9:00 AM – 6:00 PM
              </p>
            </div>
            <div className="h-px w-full sm:h-10 sm:w-px bg-border" />
            <a
              href="tel:+919804312544"
              className="military-button-secondary text-sm whitespace-nowrap"
              data-ocid="contact.call_now_button"
            >
              Call Now
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
