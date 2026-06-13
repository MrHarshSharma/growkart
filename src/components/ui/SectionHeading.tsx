import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
}

export default function SectionHeading({
  label,
  title,
  highlight,
  subtitle,
  center = false,
  dark = false,
}: SectionHeadingProps) {
  const align = center ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${align}`}>
      {label && (
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#079AC6] border border-[#079AC630] rounded-full px-4 py-1.5 bg-[#079AC610]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#079AC6]" />
            {label}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] ${dark ? "text-white" : "text-[#061119]"}`}
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {title}{" "}
          {highlight && <span className="gradient-text">{highlight}</span>}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p className={`text-lg max-w-xl leading-relaxed ${dark ? "text-[#7db3cc]" : "text-[#475569]"}`}>
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
