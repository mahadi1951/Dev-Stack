type Technology = {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

type TechnologyCardProps = {
  data: Technology[];
  stack: Technology[];
  onAdd: (technology: Technology) => void;
};

const TechnologyCard = ({ data, stack, onAdd }: TechnologyCardProps) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {data.map((technology) => {
        const isAdded = stack.some((item) => item.id === technology.id);

        return (
          <div
            key={technology.id}
            className={`rounded-xl p-[1px] transition-all duration-300 ${
              isAdded
                ? "bg-gradient-to-r from-[#9F62F2] via-[#632EE3] to-[#EC4899]"
                : "bg-transparent"
            }`}
          >
            <div
              className={`rounded-[11px] p-4 bg-white shadow-sm h-full ${
                !isAdded ? "border border-gray-200" : ""
              }`}
            >
              {/* Icon + Badge */}
              <div className="flex items-center justify-between">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-7 h-7 object-contain"
                />

                <span className="text-[10px] text-blue-500 bg-blue-50 px-3 py-1 rounded-full">
                  {technology.badge}
                </span>
              </div>

              {/* Name */}
              <h2 className="text-[15px] font-bold text-gray-900 mt-5">
                {technology.name}
              </h2>

              {/* Description */}
              <p className="text-[10px] leading-4 text-gray-500 mt-2 min-h-[48px]">
                {technology.description}
              </p>

              {/* Information */}
              <div className="flex items-center justify-between mt-4 gap-2">
                <span className="text-[9px] text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {technology.category}
                </span>

                <span className="text-[9px] text-gray-500">
                  {technology.difficulty}
                </span>

                <span className="text-[10px] text-gray-600 flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  {technology.rating}
                </span>
              </div>

              {/* Add Button */}
              <button
                onClick={() => onAdd(technology)}
                disabled={isAdded}
                className={`w-full text-white text-[10px] py-2 rounded-md mt-4 transition ${
                  isAdded
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#080d1b] hover:bg-gray-800"
                }`}
              >
                {isAdded ? "Added to Stack" : "Add to Stack"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechnologyCard;
