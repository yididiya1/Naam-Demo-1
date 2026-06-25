import {
  Briefcase,
  Languages,
  Compass,
  HeartPulse,
  GraduationCap,
  Scale,
  Apple,
  PiggyBank,
  HandHeart,
  Gift,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  languages: Languages,
  compass: Compass,
  "heart-pulse": HeartPulse,
  "graduation-cap": GraduationCap,
  scale: Scale,
  apple: Apple,
  "piggy-bank": PiggyBank,
  "hand-heart": HandHeart,
  gift: Gift,
  "heart-handshake": HeartHandshake,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = map[name] ?? Compass;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
