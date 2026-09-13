import Badge from "./Badge";
import type { Technology } from "../Components/types/technology";

type TechnologyCardProps = {
  data: Technology[];
  stack: Technology[];
  onAdd: (technology: Technology) => void;
};

const TechnologyCard = ({ data, stack, onAdd }: TechnologyCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((tech) => {
        const isAdded = stack.some((item) => item.id === tech.id);

        return (
          <div
            key={tech.id}
            className={`rounded-2xl p-[1px] transition-all duration-300 ${
              isAdded
                ? "bg-gradient-to-r from-[#9F62F2] via-[#632EE3] to-[#EC4899]"
                : "border border-gray-200"
            }`}
          >
            <div className="rounded-[15px] p-5 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-10 h-10 object-contain"
                  />

                  {tech.badge && <Badge badge={tech.badge} />}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800">{tech.name}</h3>

                {/* Description */}
                <p className="text-gray-500 text-sm mt-1 mb-4 line-clamp-2">
                  {tech.description}
                </p>
              </div>

              {/* Bottom */}
              <div>
                {/* Info */}  
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      {tech.category}
                    </span>

                    <span className="bg-gray-100 px-2 py-1 rounded">
                      {tech.difficulty}
                    </span>
                  </div>

                  <span className="font-semibold text-amber-500">
                    ★ {tech.rating}
                  </span>
                </div>

                {/* Button */}
                <button
                  disabled={isAdded}
                  onClick={() => onAdd(tech)}
                  className={`w-full py-2 rounded-xl text-sm font-medium transition-colors ${
                    isAdded
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-black text-white hover:bg-gray-800 cursor-pointer"
                  }`}
                >
                  {isAdded ? "Added to Stack" : "Add to Stack"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechnologyCard;
