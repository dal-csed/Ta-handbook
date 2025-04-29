"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CollapsibleSectionProps {
  title: string;
  content: React.ReactNode; 
}

export default function CollapsibleSection({ title, content }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full flex items-center justify-between py-4 px-4 text-left rounded-sm
          font-semibold text-xl transition-colors duration-300
          ${isOpen
            ? "bg-[#242424] text-[#FFFFFF]"                                   // open
            : "bg-[#FFFFFF] text-[#242424] hover:bg-[#FFD400] hover:text-[#242424]" // closed + hover
          }
        `}
      >
        {title}
        <span className="ml-4">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden px-6 text-gray-800 whitespace-pre-line ${
          isOpen ? "max-h-[3000px] pb-6" : "max-h-0"
        }`}
      >
        {content}
      </div>
    </div>
  );
}
