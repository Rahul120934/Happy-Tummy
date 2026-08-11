import type { Badge } from "../data/menuData";

interface BadgeComponentProps {
  type: Badge;
}

export default function BadgeComponent({ type }: BadgeComponentProps) {
  const styles = {
    "BEST SELLER": "bg-red/15 text-red border-red/20",
    NEW: "bg-green/15 text-green border-green/20",
  };

  const icons = {
    "BEST SELLER": "🔥",
    NEW: "✨",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border tracking-wide ${styles[type]}`}
    >
      <span>{icons[type]}</span>
      {type}
    </span>
  );
}
