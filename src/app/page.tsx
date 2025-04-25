"use client";

import { useState } from "react";
import { introduction, collapsable } from "../../constants/content";
import TabGroup from "../../components/TabGroup";

const tabsResponsibilities = [
  {
    label: "Checklist",
    content:
      collapsable[3]?.content
        ?.toString()
        .split("Teaching Assistant Checklist")[0] || "",
  },
  {
    label: "Clarifying Role",
    content:
      "Teaching Assistant Checklist" +
      (collapsable[3]?.content
        ?.toString()
        .split("Teaching Assistant Checklist")[1] || ""),
  },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="border-b-4 border-[#ffcc00] flex px-6 py-3 flex-row items-center justify-between gap-4">
        <img src="/dal-logo.png" alt="Dalhousie University" className="h-16" />
        <p className="text-black text-3xl font-bold">TA Handbook</p>
        <div className="flex flex-row justify-between gap-x-10">
          <button className="font-semibold">CSEd</button>
          <button className="font-semibold">Just In Time Resources</button>
        </div>
      </div>

      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden">
        <img
          src="/GoldbergPicture.png"
          alt="Goldberg Building"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <section className="-mt-100 relative z-10 bg-gray-100 py-12 px-6 rounded-md shadow-lg max-w-screen-xl mx-auto">
        <div className="px-16 mx-auto font-sans">
          <h2 className="text-2xl font-bold mb-6">Introduction</h2>
          <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line">
            {introduction}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto space-y-4 mb-16 px-6 py-12">
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
              <div className="px-6 py-4 text-gray-800 bg-white">
                {section.id === 4 ? (
                  <TabGroup tabs={tabsResponsibilities} />
                ) : (
                  <p className="whitespace-pre-line">{section.content}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </section>

      <footer className="bg-black text-white text-xs text-center py-3">
        © Faculty of Computer Science, Dalhousie University — Created by CSEd
      </footer>
    </>
  );
}
