import React from "react";
import { skills } from "../lib/constants";

export default function Skills() {
  return (
    <section className="md:p-8 py-8 px-10 md:rounded-lg bg-[#0D0A12] border border-[#181818]">
      <div className="flex items-center gap-3 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#F8AA2C"
          className="bi bi-layers"
          viewBox="0 0 16 16"
        >
          <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0zM8 9.433 1.562 6 8 2.567 14.438 6z" />
        </svg>
        <span className="text-xl font-bold">Skills</span>
      </div>
      <div className="gap-2 flex flex-wrap">
        {skills.map((skill) => (
          <p
            className="border border-[#F8AA2C] p-2 rounded-lg md:text-sm text-xs"
            key={skill.id}
          >
            {skill.label}
          </p>
        ))}
      </div>
    </section>
  );
}
