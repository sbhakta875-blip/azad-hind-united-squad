interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span
          className={`inline-block mb-3 px-4 py-1 text-xs font-semibold tracking-widest uppercase border ${
            light
              ? "border-secondary/60 bg-secondary/20 text-secondary-foreground"
              : "border-primary/40 bg-primary/10 text-primary"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight ${
          light ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base md:text-lg leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 ${centered ? "mx-auto" : ""} h-1 w-16 ${
          light ? "bg-secondary" : "bg-primary"
        }`}
      />
    </div>
  );
}
