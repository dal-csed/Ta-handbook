"use client";

import { collapsable, introduction } from "../../constants/content";
import CollapsibleSection from "../../components/CollapsibleSection";
import TechBits from "../../components/TechBits";
import CustomHeader from "../../components/CustomHeader";
import CustomFooter from "../../components/CustomFooter";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Yellow Bar Header */}
    
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

        <section className="-mt-95 relative z-10 bg-gray-100 py-6 px-6 rounded-md shadow-sm max-w-[1280px] mx-auto">
          <div className="mx-auto">
            <h2 className="text-2xl font-bold font-sans text-[#55585ded] ">
              Introduction
            </h2>
            <div className="text-gray-800 text-md">
              {introduction.map((item, index) => (
                <p key={index} className="my-5">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Collapsible Sections */}
        <section className="max-w-[1280px] mx-auto my-3 space-y-4 mb-16 ">
          {collapsable.map((section) => (
            <div id={`section-${section.id}`} key={section.id}>
              <CollapsibleSection
                id={section.id}
                title={`${section.id}. ${section.title}`}
                content={section.content}
              />
            </div>
          ))}
        </section>
      </div>

      <TechBits />

      {/* Footer */}
      <CustomFooter />
    </>
  );
}
