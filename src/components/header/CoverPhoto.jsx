import React from "react";

export default function CoverPhoto({ coverphoto }) {
  return (
    <div className="bg-[#0D0A12] w-full h-[180px] flex justify-center items-center absolute z-0">
      <img
        src={coverphoto}
        alt="Cover Photo"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
