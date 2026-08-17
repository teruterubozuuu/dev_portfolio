import React from "react";
import SocialLinksDropdown from "./SocialLinksDropdownMenu";

export default function HeaderDetails({ pfp, onOpenSocialLinks, open, setOpen}) {
  return (
    <div className="flex items-center relative z-50 top-38 w-full">
      <img
        src={pfp}
        alt="Image"
        className="w-25 md:w-[120px] border-[5px] border-[#08060b] rounded-md"
      />
      <div className="flex items-center w-full mx-2 mt-10">
        <div className="flex-1">
          <div className="flex gap-1 md:gap-2 items-center flex-wrap mb-1">
            <h1 className="font-semibold md:text-4xl">Joylynne Esportuno</h1>
          </div>
          <p className="font-extralight text-sm md:text-base">Web Developer</p>
        </div>
        <div className="relative ml-auto md:-translate-y-5 -translate-y-3">
          <button
            className="flex items-center gap-1 justify-center md:text-[15px] text-xs"
            onClick={onOpenSocialLinks}
          >
            <span className="md:flex hidden">+</span>Follow
          </button>

          {open && (
            <SocialLinksDropdown onClose={() => setOpen(false)} />
          )}
        </div>
      </div>
    </div>
  );
}
