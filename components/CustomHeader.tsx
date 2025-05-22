import React from 'react'

const CustomHeader = () => {
  return (
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
  )
}

export default CustomHeader