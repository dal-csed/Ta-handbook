"use client";

import { useState } from "react";
import { collapsable, introduction } from "../../constants/content";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Header (Top Black Bar) */}
      <div className="bg-black text-white text-sm flex justify-between items-center px-4 py-2">
        <div className="font-semibold">FACULTY OF COMPUTER SCIENCE, DALHOUSIE UNIVERSITY</div>
        <div className="text-xs text-gray-300">Created by CSEd</div>
      </div>

      {/* Yellow Bar Header */}
      <div className="bg-[#ffcc00] flex justify-between items-center px-6 py-3">
        <div className="flex items-center gap-4">
          <img src="/dal-logo-horizontal-colour (1).png" alt="Dalhousie University" className="h-10" />
          <h1 className="text-black text-xl font-bold">TA Handbook</h1>
        </div>
      </div>

      {/* Intro + Banner */}

      <h1 className="text-4xl font-bold text-dalgray border-b border-gray-300 pb-4 mb-10 max-w-4xl mx-auto px-6">
        Faculty of Computer Science TA Handbook
      </h1>


      <section className="bg-white text-black px-6 py-8 max-w-4xl mx-auto">
        <p className="mb-4">
          {introduction}
        </p>
      
      </section>

      <div className="w-full max-w-5xl mx-auto mb-8 px-6">
        <img
          src="/goldberg.jpg"
          alt="Goldberg Building"
          className="w-full object-cover rounded shadow-md"
        />
      </div>

      {/* Collapsible Sections */}
      <section className="max-w-4xl mx-auto space-y-4 mb-16 px-6">
        {collapsable.map((section, index) => (
          <div key={section.id} className="border border-gray-300 rounded shadow-sm">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 font-medium text-lg"
            >
              {section.title}
              <img src={openIndex === index ? "/arrow-up.svg" : "/arrow-down.svg"} alt="toggle" className="h-5 w-5 ml-2" />

            </button>
            {openIndex === index && (
              <div className="px-6 py-4 whitespace-pre-line text-gray-800 bg-white">{section.content}</div>
            )}
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-xs text-center py-3">
        © Faculty of Computer Science, Dalhousie University — Created by CSEd
      </footer>
    </>
  );
}
