import { RxCross1 } from "react-icons/rx";
import type { Technology } from "../Components/types/technology";
type YourStackProps = {
  stack: Technology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
};
const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    <div className="sticky top-20 rounded-2xl p-3 sm:p-4 bg-white shadow-sm border border-gray-200">
      {" "}
      <h2 className="text-lg sm:text-xl font-bold">Your Stack</h2>{" "}
      <p className="text-xs sm:text-sm text-gray-400 mb-4 mt-2">
        {" "}
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} technology${stack.length > 1 ? "s" : ""} added.`}{" "}
      </p>{" "}
      <div className="space-y-3">
        {" "}
        {stack.length === 0 ? (
          <div className="border-2 border-dashed border-slate-200 rounded-2xl py-6 sm:py-8 px-3 sm:px-4 text-center text-xs sm:text-sm text-gray-400">
            {" "}
            Your stack is empty.{" "}
          </div>
        ) : (
          stack.map((technology) => (
            <div
              key={technology.id}
              className="border border-gray-200 rounded-lg p-2 sm:p-3 flex items-center justify-between gap-2"
            >
              {" "}
              <div className="min-w-0">
                {" "}
                <div className="flex items-center gap-2">
                  {" "}
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0"
                  />{" "}
                  <span className="text-xs sm:text-sm font-medium truncate">
                    {" "}
                    {technology.name}{" "}
                  </span>{" "}
                </div>{" "}
                <div className="text-[11px] sm:text-xs text-gray-500 ml-7 sm:ml-8">
                  {" "}
                  {technology.category}{" "}
                </div>{" "}
              </div>{" "}
              {/* Remove */}{" "}
              <button
                onClick={() => onRemove(technology.id)}
                className="text-xs text-red-500 hover:text-red-700 cursor-pointer shrink-0"
              >
                {" "}
                <RxCross1 />{" "}
              </button>{" "}
            </div>
          ))
        )}{" "}
      </div>{" "}
      {/* Remove All */}{" "}
      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full text-red-600 hover:text-red-700 cursor-pointer py-2 border border-gray-200 rounded-2xl mt-4 text-xs sm:text-sm font-medium"
        >
          {" "}
          Remove All{" "}
        </button>
      )}{" "}
    </div>
  );
};
export default YourStack;
