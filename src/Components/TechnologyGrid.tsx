import React, { use, useState } from "react";
import TechnologyCard from "../Components/TechnologyCard";
import { toast } from "react-toastify";
import { RxCross1 } from "react-icons/rx";
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

  const handleRemoveAll = () => {
    setStack([]);
    toast.info(`All technologies removed from your stack.`, {
      position: "top-right",
      autoClose: 3000,
    });
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
        <div className="col-span-2 sticky top-0 z-50 rounded-[11px] p-4 bg-white shadow-sm h-full border border-gray-200">
          <div className="mb-2">
            <h2 className="text-xl font-bold">Your Stack</h2>
          </div>

          {/* ১. টেক্সটটি কন্ডিশনের বাইরে বসানো হলো যাতে সবসময় দেখা যায় */}
          <p className="text-sm text-gray-400 mb-4">
            {stack.length === 0
              ? "No technologies selected yet."
              : `${stack.length} technology ${stack.length === 1 ? "added" : "s added"}.`}
          </p>

          {/* ২. স্ট্যাক ফাকা থাকলে ড্যাশড বক্স দেখাবে, না থাকলে কার্ডের লিস্ট দেখাবে */}
          <div className="space-y-3">
            {stack.length === 0 ? (
              <div className="border-2 border-dashed border-slate-200 rounded-2xl py-8 px-4 text-center text-sm text-gray-400">
                Your stack is empty.
              </div>
            ) : (
              stack.map((technology) => (
                <div
                  key={technology.id}
                  className="border rounded-lg p-3 flex items-center justify-between"
                >
                  <div className="">
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
                    <div className="text-xs text-gray-500 ml-8">
                      {technology.category}
                    </div>
                    
                  </div>

                  <button
                    onClick={() => handleRemoveFromStack(technology.id)}
                    className="text-xs text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    <RxCross1 />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* ৩. স্ট্যাকে আইটেম থাকলেই শুধু Remove All বাটনটি দেখাবে */}
          {stack.length > 0 && (
            <button
              className="w-full text-red-600 hover:text-red-700 cursor-pointer py-2 border rounded-2xl mt-4 text-sm font-medium"
              onClick={handleRemoveAll}
            >
              Remove All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechnologyGrid;
