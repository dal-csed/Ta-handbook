"use client";
import { useState } from "react";

interface Tab {
  label: string;
  content: string;
}

interface TabGroupProps {
  tabs: Tab[];
}

export default function TabGroup({ tabs }: TabGroupProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mt-4">
      <div className="flex border-b border-gray-300 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors duration-300 ${
              activeTab === index
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="text-gray-800 whitespace-pre-line">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}
