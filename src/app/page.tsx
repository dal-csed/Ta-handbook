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
      {/* Yellow Bar Header */}
      <div className="border-b-4 border-[#ffcc00] flex px-6 py-3 flex-row items-center justify-between gap-4">
        <img src="/dal-logo.png" alt="Dalhousie University" className="h-16" />
        <p className="text-black text-3xl font-bold">TA Handbook</p>

        <div className="flex flex-row justify-between gap-x-10">
          <button className="font-semibold">CSEd</button>
          <button className="font-semibold">Just In Time Resources</button>
        </div>
      </div>

      {/* <div className="relative w-full h-[300px]">
        <img
          src="/GoldbergPicture.jpg"
          alt="Goldberg Building"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h2 className="text-white text-4xl font-bold text-center">
            Faculty of Computer Science TA Handbook
          </h2>
        </div>
      </div> */}

      <section className="bg-gray-100 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 font-sans">Introduction</h2>
          <p className="whitespace-pre-line text-gray-800 text-lg leading-relaxed">
            {introduction}
          </p>
        </div>
      </section>

      <div className="w-full max-w-6xl mx-auto mb-8 px-6">
        <img
          src="/GoldbergPicture.jpg"
          alt="Goldberg Building"
          className="w-full object-cover rounded shadow-md"
        />
      </div>

      {/* Collapsible Sections */}
      <section className="max-w-7xl mx-auto space-y-4 mb-16 px-6">
        {collapsable.map((section, index) => (
          <div
            key={section.id}
            className="border border-gray-300 rounded shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 font-medium text-lg"
            >
              {section.title}
              <img
                src={openIndex === index ? "/arrow-up.svg" : "/arrow-down.svg"}
                alt="toggle"
                className="h-5 w-5 ml-2"
              />
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 whitespace-pre-line text-gray-800 bg-white">
                {section.content}
              </div>
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
