type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  href,
  target,
  rel,
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer select-none";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[#079AC6] text-white px-7 py-3 hover:bg-[#057a9e] shadow-[0_4px_14px_#079AC640] hover:shadow-[0_6px_20px_#079AC655] active:scale-95",
    secondary:
      "bg-[#061119] text-white px-7 py-3 hover:bg-[#0a1e2c] shadow-[0_4px_14px_#06111920] active:scale-95",
    outline:
      "border-2 border-[#061119] text-[#061119] px-7 py-3 hover:bg-[#061119] hover:text-white active:scale-95",
    ghost:
      "text-[#061119] px-7 py-3 hover:text-[#079AC6] hover:bg-[#079AC610] active:scale-95",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
