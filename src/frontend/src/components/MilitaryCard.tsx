import type { ReactNode } from "react";

interface MilitaryCardProps {
  children: ReactNode;
  className?: string;
  accent?: boolean;
  hover?: boolean;
}

export function MilitaryCard({
  children,
  className = "",
  accent = false,
  hover = true,
}: MilitaryCardProps) {
  return (
    <div
      className={`
        bg-card border border-border p-6
        ${accent ? "border-l-4 border-l-secondary" : ""}
        ${hover ? "transition-smooth hover:shadow-lg hover:-translate-y-0.5" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
}

export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <MilitaryCard accent className="text-center">
      {icon && (
        <div className="flex justify-center mb-3 text-secondary">{icon}</div>
      )}
      <div className="font-display font-bold text-3xl text-primary mb-1">
        {value}
      </div>
      <div className="text-sm text-muted-foreground tracking-wide uppercase">
        {label}
      </div>
    </MilitaryCard>
  );
}
