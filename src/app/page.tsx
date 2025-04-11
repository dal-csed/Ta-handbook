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

      {/* Goldberg Image as Full-Width Backdrop */}
      <div className="relative w-full lg:h-[700px] overflow-auto">
        <img
          src="/GoldbergPicture.png"
          alt="Goldberg Building"
          className="w-full h-full object-cover object-center bg-cover"
        />
        <div className="absolute inset-0 bg-black/30" />{" "}
        {/* optional overlay for contrast */}
      </div>

      <section className="-mt-84 relative z-10 bg-gray-100 py-12 px-6 rounded-md shadow-lg max-w-screen-xl mx-auto">
        <div className="px-16 mx-auto font-sans">
          <h2 className="text-2xl font-bold mb-6">Introduction</h2>
          <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line">
            {introduction}
          </p>
        </div>
      </section>

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
