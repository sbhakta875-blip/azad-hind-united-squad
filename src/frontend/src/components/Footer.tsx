import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Shield } from "lucide-react";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

const year = new Date().getFullYear();
const hostname =
  typeof window !== "undefined"
    ? encodeURIComponent(window.location.hostname)
    : "";

const siteLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Programs", to: "/training" },
  { label: "Gallery", to: "/gallery" },
];

const leadershipLinks = [
  { label: "Leadership", to: "/leadership" },
  { label: "Branches", to: "/branches" },
  { label: "Careers", to: "/admission" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" data-ocid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Org Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 bg-secondary flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div className="font-display font-bold text-base leading-tight">
                AZAD HIND
                <br />
                UNITED SQUAD
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Building Discipline, Leadership & Patriotism for the youth of
              India.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-8 w-8 bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-smooth"
                data-ocid="footer.facebook_link"
              >
                <SiFacebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-8 w-8 bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-smooth"
                data-ocid="footer.instagram_link"
              >
                <SiInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter/X"
                className="h-8 w-8 bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-smooth"
                data-ocid="footer.twitter_link"
              >
                <SiX className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Site Links */}
          <div>
            <h3 className="font-display font-bold text-sm tracking-widest uppercase text-secondary mb-4">
              Site
            </h3>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-primary-foreground/70 hover:text-secondary text-sm transition-smooth"
                    data-ocid={`footer.${link.label.toLowerCase().replace(" ", "_")}_link`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Leadership Links */}
          <div>
            <h3 className="font-display font-bold text-sm tracking-widest uppercase text-secondary mb-4">
              Leadership
            </h3>
            <ul className="space-y-2">
              {leadershipLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-primary-foreground/70 hover:text-secondary text-sm transition-smooth"
                    data-ocid={`footer.${link.label.toLowerCase().replace(" ", "_")}_link`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-sm tracking-widest uppercase text-secondary mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-secondary" />
                <a
                  href="tel:+919804312544"
                  className="hover:text-secondary transition-smooth"
                >
                  +91 98043 12544
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-secondary" />
                <span>
                  Behala Chowrasta, 15/1 Raja Rammohan Roy Road, Kolkata –
                  700008
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-secondary" />
                <span>contact@azadhindsquad.org</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/50">
          <span>© {year} Azad Hind United Squad. Reg. No: S/20/755</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-smooth"
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
