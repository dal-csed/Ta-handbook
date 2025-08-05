import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';


gsap.registerPlugin(ScrambleTextPlugin) 


const CustomHeader = () => {
  useGSAP(() => {
    gsap.to('.title-page', {
      duration: 1,
      scrambleText: "Graduate TA Handbook",
    });
  });

  return (
    <div className="border-b-4 border-[#ffcc00] w-full h-24">
      <div className="flex px-3 flex-row items-center justify-between gap-4 m-auto max-w-7xl h-full">
        <div className="h-14 w-50 relative">
          <Image src="/dal-logo.png" alt="Dalhousie University" fill />
        </div>
        <p className="title-page text-[#474646] text-4xl font-semibold">
          
        </p>

        <div className="flex flex-row justify-between gap-x-2">
          <a
            href="https://csed.cs.dal.ca/"
            target="_blank"
            className="font-semibold py-2 px-3 hover:border-b-2 hover:mb-[-2] hover:border-[#ffcc00]"
          >
            CSEd
          </a>
          <a
            href="https://projects.cs.dal.ca/justintime/dist/index.php"
            target="_blank"
            className="font-semibold py-2 px-3 hover:border-b-2 hover:mb-[-2] hover:border-[#ffcc00]"
          >
            Just In Time Resources
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;
