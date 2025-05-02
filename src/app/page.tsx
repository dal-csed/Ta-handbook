"use client";

import { useState } from "react";
import { collapsable, introduction } from "../../constants/content";
import CollapsibleSection from "../../components/CollapsibleSection";
import TechBits from "../../components/TechBits";

export default function Home() {
  return (
    <>
      {/* Yellow Bar Header */}
      <div className="border-b-4 border-[#ffcc00] w-full h-24">
        <div className="flex px-3 flex-row items-center justify-between gap-4 m-auto max-w-7xl h-full">
          <img
            src="/dal-logo.png"
            alt="Dalhousie University"
            className="h-16"
          />
          <p className="text-[#474646] text-4xl font-semibold">TA Handbook</p>

          <div className="flex flex-row justify-between gap-x-2">
            <a
              href="https://csed.cs.dal.ca/"
              target="_blank"
              className="font-semibold py-2 px-3 hover:border-b-2 hover:border-[#ffcc00]"
            >
              CSEd
            </a>
            <a
              href="https://projects.cs.dal.ca/justintime/dist/index.php"
              target="_blank"
              className="font-semibold py-2 px-3 hover:border-b-2 hover:border-[#ffcc00]"
            >
              Just In Time Resources
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1500px] m-auto bg-white">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden">
          <img
            src="/GoldbergPicture.png"
            alt="Goldberg Building"
            className="w-full object-cover rounded shadow-md"
          />
        </div>

        <section className="-mt-95 relative z-10 bg-gray-100 py-6 px-6 rounded-md shadow-sm max-w-[1225px] mx-auto">
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
        <section className="max-w-[1225px] mx-auto my-3 space-y-4 mb-16 ">
          {collapsable.map((section) => (
            <CollapsibleSection
              key={section.id}
              title={`${section.id}. ${section.title}`}
              content={section.content}
            />
          ))}
        </section>
      </div>

      <TechBits />

      {/* Footer */}
      <footer className="bg-black text-white text-xs text-center py-8 border-t-4 border-[#ffcc00]">
        <div className="flex flex-row w-[85%] m-auto justify-between">
          <div className="flex flex-col gap-y-8">
            <div>
              <p className="font-bold justify-self-start">
                Faculty of Computer Science
              </p>
              <p className="justify-self-start">
                Goldberg Computer Science Building
              </p>
            </div>
            <div>
              <p className="font-bold justify-self-start">
                Dalhousie University
              </p>
              <p className="justify-self-start">
                Halifax, Nova Scotia, Canada B3H 4R2
              </p>
              <p className="justify-self-start">1-902-494-2211</p>
            </div>
          </div>
          <div className="content-center text-lg">
            <p className="font-semibold justify-self-start">
              {" "}
              © Created by CSEd
            </p>
            <p className="font-light justify-self-start">
              Faculty of Computer Science
            </p>
            <p className="font-light justify-self-start">
              Dalhousie University
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
