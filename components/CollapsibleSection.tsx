"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CollapsibleSectionProps {
  title: string;
  content: string;
}

export default function CollapsibleSection({ title, content }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 px-4 bg-white text-left font-semibold text-xl text-gray-900 hover:text-[#ffcc00] transition-colors"
      >
        {title}
        <span className="ml-4 text-gray-600">
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
