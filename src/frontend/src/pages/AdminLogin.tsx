import { Link, useNavigate } from "@tanstack/react-router";
import { LogIn, Shield } from "lucide-react";
import { useEffect } from "react";
import { LoadingPage } from "../components/LoadingSpinner";
import { useAuth } from "../hooks/use-auth";

export default function AdminLoginPage() {
  const {
    isAuthenticated,
    isAdmin,
    login,
    isLoggingIn,
    isInitializing,
    isCheckingAdmin,
  } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && isAdmin) {
      navigate({ to: "/admin" });
    }
  }, [isAuthenticated, isAdmin, navigate]);

  if (isInitializing || (isAuthenticated && isCheckingAdmin)) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <LoadingPage />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-primary flex items-center justify-center p-4"
      data-ocid="admin_login.page"
    >
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-secondary opacity-50" />
      <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-secondary opacity-50" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-secondary opacity-50" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-secondary opacity-50" />

      <div className="w-full max-w-md relative">
        {/* Header bar */}
        <div className="bg-secondary h-2 w-full" />

        <div className="bg-card border-x border-b border-border px-8 pt-10 pb-10">
          {/* Emblem */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-4">
              <div className="h-20 w-20 bg-primary border-2 border-secondary mx-auto flex items-center justify-center">
                <Shield className="h-10 w-10 text-secondary" />
              </div>
              <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-secondary" />
              <div className="absolute -bottom-1 -left-1 h-4 w-4 bg-secondary" />
            </div>
            <h1 className="font-display font-bold text-2xl text-foreground tracking-tight mb-1">
              Admin Command Centre
            </h1>
            <p className="text-secondary font-semibold text-sm tracking-widest uppercase">
              Azad Hind United Squad
            </p>
          </div>

          <div className="border-t-2 border-primary mb-8" />

          {isAuthenticated && !isAdmin ? (
            <div
              className="text-center"
              data-ocid="admin_login.not_admin_state"
            >
              <div className="bg-destructive/10 border-l-4 border-destructive p-4 mb-6 text-left">
                <p className="text-destructive text-sm font-medium">
                  Access denied. Your account does not have admin privileges.
                  Contact the commanding officer to request access.
                </p>
              </div>
              <Link
                to="/"
                className="military-button-secondary text-sm block text-center"
                data-ocid="admin_login.back_home_link"
              >
                Return to Home
              </Link>
            </div>
          ) : (
            <div data-ocid="admin_login.login_form">
              <p className="text-muted-foreground text-sm text-center mb-6 leading-relaxed">
                Authenticate with Internet Identity to access the secure admin
                dashboard and manage all organisation content.
              </p>
              <button
                type="button"
                onClick={login}
                disabled={isLoggingIn}
                className="military-button w-full flex items-center justify-center gap-3 py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                data-ocid="admin_login.login_button"
              >
                {isLoggingIn ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Authenticating…
                  </span>
                ) : (
                  <>
                    <LogIn className="h-5 w-5" />
                    Login with Internet Identity
                  </>
                )}
              </button>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-border text-center">
            <Link
              to="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-smooth"
              data-ocid="admin_login.home_link"
            >
              ← Return to main site
            </Link>
          </div>
        </div>
        {/* Bottom accent */}
        <div className="bg-secondary h-2 w-full" />
      </div>
    </div>
  );
}
