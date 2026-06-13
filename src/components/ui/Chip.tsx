interface ChipProps {
  label: string;
  variant?: "cyan" | "dark" | "light";
  className?: string;
}

export default function Chip({ label, variant = "cyan", className = "" }: ChipProps) {
  const variants = {
    cyan: "bg-[#079AC610] border border-[#079AC630] text-[#057a9e]",
    dark: "bg-[#0611190f] border border-[#06111920] text-[#061119]",
    light: "bg-white border border-[#e2e8f0] text-[#475569]",
  };

  return (
    <span
      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full tracking-wide ${variants[variant]} ${className}`}
    >
      {label}
    </span>
  );
}
