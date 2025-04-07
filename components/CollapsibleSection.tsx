"use client";
import { useState } from "react";

interface CollapsibleSectionProps {
  title: string;
  content: string;
}

export default function CollapsibleSection({ title, content }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 px-2 font-semibold text-lg text-gray-800 hover:text-blue-600 focus:outline-none"
      >
        {title}
      </button>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden px-4 pb-6 text-gray-700 whitespace-pre-line ${
          isOpen ? "max-h-[3000px]" : "max-h-0"
        }`}
      >
        {content}
      </div>
    </div>
  );
}
