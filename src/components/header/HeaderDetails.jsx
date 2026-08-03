import React from "react";

export default function HeaderDetails({ pfp }) {
  return (
    <div className="flex items-center relative z-50 top-38 w-full">
      <img
        src={pfp}
        alt="Image"
        className="w-25 md:w-[120px] border-[5px] border-[#08060b]"
      />
      <div className="flex  items-center  justify-between  mx-2 mt-10">
        <div className="flex-1">
          <div className="flex gap-1 md:gap-2 items-center flex-wrap">
            <h1 className="font-semibold md:text-4xl">Joylynne Esportuno</h1>
          </div>
          <p className="font-light text-sm md:text-base text-primary">Web Developer</p>
        </div>
          <button className="absolute right-5 top-15">Asdasd</button>
      </div>
    </div>
  );
}
