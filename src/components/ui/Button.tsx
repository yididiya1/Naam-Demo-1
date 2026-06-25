import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "gold" | "outline" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500 disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-card hover:bg-brand-700 hover:-translate-y-0.5",
  gold: "bg-gold-300 text-brand-900 shadow-card hover:bg-gold-400 hover:-translate-y-0.5",
  outline:
    "border-2 border-brand-600 text-brand-700 hover:bg-brand-600 hover:text-white",
  ghost: "text-brand-700 hover:bg-brand-50",
  white:
    "bg-white text-brand-700 shadow-card hover:-translate-y-0.5 hover:bg-cloud",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type Props = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const external = href.startsWith("http");
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
