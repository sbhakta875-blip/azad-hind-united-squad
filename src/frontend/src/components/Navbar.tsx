import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Shield, X } from "lucide-react";
import { useState } from "react";
import { useOrgInfo } from "../hooks/use-backend";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Leadership", to: "/leadership" },
  { label: "Training", to: "/training" },
  { label: "Camps", to: "/camps" },
  { label: "Branches", to: "/branches" },
  { label: "Gallery", to: "/gallery" },
  { label: "Admission", to: "/admission" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const { data: orgInfo } = useOrgInfo();

  const orgName = orgInfo?.name ?? "AZAD HIND UNITED SQUAD";
  const logoUrl = orgInfo?.logoBlob?.getDirectURL();

  const isActive = (to: string) => {
    if (to === "/") return currentPath === "/";
    return currentPath.startsWith(to);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-card border-b-2 border-primary shadow-lg"
      data-ocid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo + Name */}
          <Link
            to="/"
            className="flex items-center gap-3 min-w-0"
            data-ocid="navbar.logo_link"
          >
            {logoUrl ? (
              <img
                src={logoUrl}
                alt="Logo"
                className="h-10 w-10 object-contain flex-shrink-0"
              />
            ) : (
              <div className="h-10 w-10 bg-primary flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
            )}
            <div className="min-w-0">
              <div className="font-display font-bold text-sm md:text-base text-foreground leading-tight truncate">
                {orgName}
              </div>
              <div className="text-xs text-muted-foreground tracking-widest uppercase hidden sm:block">
                Ministry of Youth Affairs
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-xs font-semibold tracking-widest uppercase transition-smooth border-b-2 ${
                  isActive(link.to)
                    ? "border-secondary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-secondary/50"
                }`}
                data-ocid={`navbar.${link.label.toLowerCase()}_link`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/admission"
              className="ml-3 military-button text-xs"
              data-ocid="navbar.join_button"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            data-ocid="navbar.hamburger_toggle"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden bg-card border-t border-border"
          data-ocid="navbar.mobile_menu"
        >
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 text-sm font-semibold tracking-wider uppercase border-l-4 transition-smooth ${
                  isActive(link.to)
                    ? "border-l-secondary bg-muted text-foreground"
                    : "border-l-transparent text-muted-foreground hover:border-l-secondary/50 hover:bg-muted/50 hover:text-foreground"
                }`}
                data-ocid={`navbar.mobile_${link.label.toLowerCase()}_link`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/admission"
              onClick={() => setIsOpen(false)}
              className="block military-button text-center mt-2"
              data-ocid="navbar.mobile_join_button"
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
