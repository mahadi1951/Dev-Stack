import React, { use, useState } from "react";
import TechnologyCard from "../Components/TechnologyCard";
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
          <TechnologyCard data={data} />
        </div>

        {/* Your Stack */}
        <div className="col-span-2 sticky top-0 z-50">
          <div className=" mb-4">
            <h2 className="text-xl font-bold">Your Stack</h2>

            <button className="text-xs text-red-500 hover:text-red-700 font-medium flex items-center mt-2">
              Remove All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyGrid;
