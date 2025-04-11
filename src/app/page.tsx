"use client";

import { useState } from "react";
import { introduction } from "../../constants/content";
import TabGroup from "../../components/TabGroup";

const tabsForResponsibilities = [
  {
    label: "Checklist",
    content: `TA roles differ in tasks depending on the course and the professor you are working with. You must be clear on your responsibilities when you accept a role as TA. Every instructor will have their own needs and ideas for what it is that they would like you to do and how they would like you to approach tasks. The first meeting with the instructor can be seen as an “Orientation Meeting”. This meeting is an opportunity to start your role in a positive and clear direction. To ensure that you are successful in your role, a helpful checklist of questions in this section will help guide your discussion with the instructor of the class as you embark on your TA journey.`,
  },
  {
    label: "Syllabus",
    content: `Understanding the Course Syllabus\n\n- The first step to understanding the course—its content, learning outcomes, structure (lectures, labs, and tutorials), and important policies—is to carefully read the course syllabus. The first question you must ask the instructor is: May I please have a copy of the course syllabus?`,
  },
  {
    label: "Feedback",
    content: `Receiving and acting on feedback is an essential part of your growth as a TA. Be open to constructive feedback from supervisors, professors, and colleagues, and use it as an opportunity to reflect and improve your practice. Don’t hesitate to seek advice or discuss challenges you may face—building a strong support network is crucial for professional development.`,
  },
];

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
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src="/GoldbergPicture.png"
          alt="Goldberg Building"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Introduction Section */}
      <section className="-mt-84 relative z-10 bg-gray-100 py-12 px-6 rounded-md shadow-lg max-w-screen-xl mx-auto">
        <div className="px-16 mx-auto font-sans">
          <h2 className="text-2xl font-bold mb-6">Introduction</h2>
          <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line">
            {introduction}
          </p>
        </div>
      </section>

      {/* Collapsible Section with Tabs Example */}
      <section className="max-w-7xl mx-auto space-y-4 mb-16 px-6 py-12">
        <div className="border border-gray-300 rounded shadow-sm">
          <button
            onClick={() => toggle(0)}
            className="w-full text-left flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 font-medium text-lg"
          >
            Your Responsibilities as a TA
            <img
              src={openIndex === 0 ? "/arrow-up.svg" : "/arrow-down.svg"}
              alt="toggle"
              className="h-5 w-5 ml-2"
            />
          </button>
          {openIndex === 0 && (
            <div className="px-6 py-4 text-gray-800 bg-white">
              <TabGroup tabs={tabsForResponsibilities} />
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-xs text-center py-3">
        © Faculty of Computer Science, Dalhousie University — Created by CSEd
      </footer>
    </>
  );
}
