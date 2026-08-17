import React from "react";

export default function AboutMe() {
  return (
    <section className="md:rounded-lg border border-[#171717] md:p-8 py-8 px-10">
      <div className="flex items-center gap-3 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#F8AA2C"
          className="bi bi-briefcase"
          viewBox="0 0 16 16"
        >
          <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
        </svg>
        <p className="font-bold text-xl">About</p>
      </div>
      <p className="md:text-lg font-medium mb-4">
        Hey there, I'm <span className="text-[#F8AA2C]">Joy!</span>
      </p>
      <div className="space-y-4 ">
        <p>
          An emerging frontend developer with hands-on experience building
          full-stack projects using React, Next.js, TypeScript, and Supabase. I
          focus on crafting polished interfaces using Tailwind CSS and
          shadcn/ui, while actively expanding my backend capabilities in
          Laravel. Passionate about clean code, continuous learning, and solving
          practical problems in a team environment.
        </p>
        <p>Feel free to explore and learn more about me!</p>
        <p>You can email me at joylynnegrace@gmail.com</p>
      </div>
    </section>
  );
}
