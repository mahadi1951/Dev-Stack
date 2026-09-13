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
      {data.map((technology) => (
        <div key={technology.id} className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-10 h-10 mr-3"
            />
            <h3 className="text-lg font-bold">{technology.name}</h3>
          </div>
          <p className="text-gray-500 mb-2">{technology.description}</p>
          <div className=" items-center">
            <span className="text-sm text-gray-500">{technology.category}</span>
            <button
              onClick={() => onAdd(technology)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add to Stack
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnologyCard;
