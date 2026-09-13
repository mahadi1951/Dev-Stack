
type BadgeProps = {
  badge: string;
};

const getBadgeColor = (badge: string) => {
  switch (badge) {
    case "Popular":
      return "bg-blue-100 text-blue-700 border-blue-200";

    case "Enterprise":
      return "bg-purple-100 text-purple-700 border-purple-200";

    case "Trending":
      return "bg-pink-100 text-pink-700 border-pink-200";

    case "Top SQL":
      return "bg-cyan-100 text-cyan-700 border-cyan-200";

    case "Easy Setup":
      return "bg-amber-100 text-amber-700 border-amber-200";

    case "Essential":
      return "bg-emerald-100 text-emerald-700 border-emerald-200";

    case "DevOps":
      return "bg-indigo-100 text-indigo-700 border-indigo-200";

    case "Cloud Leader":
      return "bg-orange-100 text-orange-700 border-orange-200";

    case "Fast Deploy":
      return "bg-teal-100 text-teal-700 border-teal-200";

    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

const Badge = ({ badge }: BadgeProps) => {
  return (
    <span
      className={`text-xs px-2.5 py-1 rounded-full font-medium border ${getBadgeColor(
        badge
      )}`}
    >
      {badge}
    </span>
  );
};

export default Badge;

