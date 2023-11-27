import React from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
 
export function DefaultPagination() {
  const [active, setActive] = React.useState(1);
 
  const next = () => {
    if (active === 5) return;
 
    setActive(active + 1);
  };
 
  const prev = () => {
    if (active === 1) return;
 
    setActive(active - 1);
  };
 
  return (
    <div className="flex items-center gap-8">
      <button
        className="flex items-center gap-2 p-2 px-3 rounded-full hover:bg-gray-300"
        onClick={prev}
        disabled={active === 1}
      >
        <AiOutlineCaretLeft strokeWidth={2} className="h-4 w-4" /> Previous
      </button>
      <p color="gray" className="font-normal">
        Page <strong className="text-gray-900">{active}</strong> of{" "}
        <strong className="text-gray-900">10</strong>
      </p>
      <button
        className="flex items-center gap-2 p-2 px-3 rounded-full hover:bg-gray-300"
        onClick={next}
        disabled={active === 5}
      >
        Next
        <AiOutlineCaretRight strokeWidth={2} className="h-4 w-4" />
      </button>
    </div>
  );
}