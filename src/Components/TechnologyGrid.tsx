import { use, useState } from "react";
import type { Technology } from "../Components/types/technology";
import { toast } from "react-toastify";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

type TechnologyGridProps = {
  technologiesPromise: Promise<Technology[]>;
};

const TechnologyGrid = ({ technologiesPromise }: TechnologyGridProps) => {
  const data = use(technologiesPromise);

  const [stack, setStack] = useState<Technology[]>([]);

  const handleAddToStack = (technology: Technology) => {
    setStack((prev) => [...prev, technology]);

    toast.success(`${technology.name} added to your stack!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleRemoveFromStack = (id: number) => {
    const technology = stack.find((item) => item.id === id);

    setStack((prev) => prev.filter((tech) => tech.id !== id));

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleRemoveAll = () => {
    setStack([]);

    toast.info(`All technologies removed from your stack.`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="technology-grid container mx-auto px-4 md:px-8 lg:px-0 py-4 md:py-4">
      {/* Heading */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold mb-2">
          Explore the <span className="brand-gradient">Technologies</span>
        </h2>

        <p className="text-sm md:text-base text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-9 gap-4 mt-4">
        {/* Technology Cards */}
        <div className="col-span-1 md:col-span-6 lg:col-span-7">
          <TechnologyCard
            data={data}
            stack={stack}
            onAdd={handleAddToStack}
          />
        </div>

        {/* Your Stack */}
        <div className="col-span-1 md:col-span-3 lg:col-span-2">
          <YourStack
            stack={stack}
            onRemove={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologyGrid;