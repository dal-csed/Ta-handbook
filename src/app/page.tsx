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
      <div className="border-b-4 border-[#ffcc00] w-full h-24">
        <div className="flex px-3 flex-row items-center justify-between gap-4 m-auto w-[85%] h-full"> 
          <img src="/dal-logo.png" alt="Dalhousie University" className="h-16" />
          <p className="text-black text-4xl font-semibold">TA Handbook</p>

          <div className="flex flex-row justify-between gap-x-6">
            <a 
              href="https://csed.cs.dal.ca/" 
              target="_blank" 
              className="font-semibold rounded-md py-2 px-4 bg-[#ffcc00]"
            >
              CSEd
            </a>
            <a href="https://projects.cs.dal.ca/justintime/dist/index.php" target="_blank" className="font-semibold rounded-md py-2 px-4 bg-[#ffcc00]">Just In Time Resources</a>
          </div>
        </div>
      </div>


      <div className="w-[85%] m-auto">
        <section className=" py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold font-sans text-[#55585ded] ">Introduction</h2>
            <div className=" text-gray-800 text-md leading-relaxed">
              {introduction.map((item, index)=> 
                <p key={index} className="my-5" >{item}</p>
              )}
            </div>
          </div>
        </section>

        <div className="w-full max-w-6xl mx-auto mb-8 px-6">
          <img
            src="/GoldbergPicture.png"
            alt="Goldberg Building"
            className="w-full object-cover rounded shadow-md"
          />
        </div>

        {/* Collapsible Sections */}
        <section className="max-w-7xl mx-auto space-y-4 mb-16 px-2">
          {collapsable.map((section, index) => (
            <div
              key={section.id}
              className=""
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex font-bold justify-between items-center px-4 py-3 text-[#55585ded] bg-gray-100 hover:bg-gray-200 text-lg"
              >
                {section.id}. {section.title}
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
      </div>

      {/* Footer */}
      <footer className=" bg-black text-white text-xs text-center py-8 border-t-4 border-[#ffcc00]">
        <div className="flex flex-row w-[85%] m-auto justify-between">
          <div className="flex flex-col gap-y-8">
            <div>
              <p className="font-bold justify-self-start">Faculty of Computer Science</p>
              <p className="justify-self-start">Goldberg Computer Science Building</p>
            </div>
            <div>
              <p className="font-bold justify-self-start">Dalhousie University</p>
              <p className="justify-self-start">Halifax, Nova Scotia, Canada  B3H 4R2</p>
              <p className="justify-self-start">1-902-494-2211</p>
            </div>
          </div>
          <div className="content-center text-lg">
            <p className="font-semibold justify-self-start"> © Created by CSEd</p>
            <p className="font-light justify-self-start">Faculty of Computer Science</p>
            <p className="font-light justify-self-start">Dalhousie University</p>
          </div>
        </div>
      </footer>
    </>
  );
}
