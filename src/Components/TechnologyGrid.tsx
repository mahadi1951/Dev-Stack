import React, { use, useState } from "react";
import TechnologyCard from "../Components/TechnologyCard";
import { toast } from "react-toastify";
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

type TechnologyGridProps = {
  technologiesPromise: Promise<Technology[]>;
};

const TechnologyGrid = ({ technologiesPromise }: TechnologyGridProps) => {
  const data = use(technologiesPromise);

  const [stack, setStack] = useState<Technology[]>([]);

  const handleAddToStack = (technology: Technology) => {
    // Check if the technology is already in the stack
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

  return (
    <div className="technology-grid container mx-auto py-10">
      {/* Heading */}
      <div>
        <h2 className="text-2xl font-bold mb-2">
          Explore the <span className="brand-gradient">Technologies</span>
        </h2>

        <p className="text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-9 gap-4 mt-4">
        {/* Technology Cards */}
        <div className="col-span-7">
          <TechnologyCard data={data} stack={stack} onAdd={handleAddToStack} />
        </div>

        {/* Your Stack */}
        <div className="col-span-2 sticky top-0 z-50">
          <div className=" mb-4">
            <h2 className="text-xl font-bold">Your Stack</h2>

            {stack.length === 0 && (
              <button className="text-xs text-red-500 hover:text-red-700 font-medium flex justify-center items-center mt-2">
                Remove All
              </button>
            )}
          </div>
          <div className="space-y-3">
            {stack.length === 0 ? (
              <p className="text-sm text-gray-400">No technology added yet.</p>
            ) : (
              stack.map((technology) => (
                <div
                  key={technology.id}
                  className="border rounded-lg p-3 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="w-6 h-6"
                    />

                    <span className="text-sm font-medium">
                      {technology.name}
                    </span>
                  </div>

                  <button
                    onClick={() => handleRemoveFromStack(technology.id)}
                    className="text-xs text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyGrid;
