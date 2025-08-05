"use client";

import { useState, useEffect } from "react";
import { collapsable, introduction } from "../../constants/content";
import CollapsibleSection from "../../components/CollapsibleSection";
import TechBits from "../../components/TechBits";
import CustomHeader from "../../components/CustomHeader";
import CustomFooter from "../../components/CustomFooter";
import Image from "next/image";

export default function Home() {
  const [expandedStates, setExpandedStates] = useState<boolean[]>(
    collapsable.map(() => false)
  );

  // Clear hash on page load to prevent auto-opening sections
  useEffect(() => {
    // Clear hash immediately and prevent any hash-based behavior on initial load
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    // Set a flag to indicate the page has just loaded
    sessionStorage.setItem("justLoaded", "true");

    // Clear the flag after a short delay to allow normal hash behavior
    const timer = setTimeout(() => {
      sessionStorage.removeItem("justLoaded");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Expand/Collapse all functionality
  const expandAll = () => setExpandedStates(collapsable.map(() => true));
  const collapseAll = () => setExpandedStates(collapsable.map(() => false));

  return (
    <>
      <CustomHeader />

      <div className="max-w-[1500px] m-auto bg-white">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden">
          <Image
            src="/GoldbergPicture.png"
            alt="Goldberg Building"
            fill
            className="w-full object-cover rounded shadow-md"
          />
        </div>

        <section className="-mt-95 relative z-10 bg-gray-100 py-5 px-6 rounded-md shadow-sm max-w-[1280px] mx-auto">
          <div className="mx-auto">
            <h2 className="text-2xl font-bold font-sans text-[#55585ded] ">
              Introduction
            </h2>
            <div className="text-gray-800 text-md">
              {introduction.map((item, index) => (
                <p key={index} className="my-3">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Collapsible Sections */}
        <section className="max-w-[1280px] mx-auto my-3 space-y-4 mb-5">
          {/* Add Expand/Collapse buttons */}
          <div className="flex justify-end space-x-4 mb-4">
            <button
              onClick={expandAll}
              className="px-4 py-2 bg-[#FFD400] text-[#242424] rounded font-medium hover:bg-[#e6bf00]"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-4 py-2 bg-[#242424] text-white rounded font-medium hover:bg-[#333]"
            >
              Collapse All
            </button>
          </div>

          {collapsable.map((section, index) => (
            <div id={`section-${section.id}`} key={section.id}>
              <CollapsibleSection
                id={section.id}
                title={`${section.id}. ${section.title}`}
                content={section.content}
                isOpen={expandedStates[index]}
                onToggle={() => {
                  setExpandedStates((prev) => {
                    const newState = [...prev];
                    newState[index] = !newState[index];
                    return newState;
                  });
                }}
              />
            </div>
          ))}
        </section>

        {/* Microsoft Form Section */}
        <section className="max-w-[1280px] mx-auto my-5 px-6">
          <h2 className="text-2xl font-bold font-sans text-[#55585ded] mb-3">
            Feedback Form
          </h2>
          <div className="w-full h-[650px] min-h-[650px] rounded-lg shadow-md overflow-auto">
            <iframe
              key="feedback-form"
              src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=mRm4YH8LLUGSo-F9iunj4NzTh9MpfExCrttgO73tTB1URFdHVUE3V05XSDJQTFBPN0swWDQyQVpBNC4u&embed=true"
              title="Feedback Form"
              className="w-full h-full border-none"
              loading="lazy"
            />
          </div>
        </section>
      </div>

      <TechBits />
      <CustomFooter />
    </>
  );
}
