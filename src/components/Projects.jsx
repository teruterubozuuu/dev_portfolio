import React, { useState } from "react";
import { projects } from "../lib/constants";
import ProjectPreviewModal from "./ProjectPreviewModal";

export default function Projects() {
  const [openPrev, setOpenPrev] = useState(null);

  return (
    <section className="md:rounded-lg border border-[#171717] md:p-8 py-8 px-10 ">
      <span className="text-xl font-bold flex gap-3 items-center mb-4">
        <i className="bi bi-kanban text-[#F8AA2C]"></i>Projects
      </span>
      {projects.map((project) => (
        <div className=" p-2 flex gap-4" key={project.id}>
          <div className="flex  md:flex-row flex-col md:items-start md:justify-start items-center justify-center gap-4 rounded-md flex-1 p-5">
            <img
              src={project.photo}
              alt={project.id}
              className="md:max-w-80 w-full rounded-md cursor-pointer"
              onClick={() => setOpenPrev(project)}
            />
            <div className="space-y-2">
              {project.link ? (
                <a
                  href={project.link}
                  className="font-bold text-[#F8AA2C] hover:underline"
                  target="_blank"
                  rel="noopen noreferrer"
                >
                  {project.id}
                </a>
              ) : (
                <span className="font-bold text-[#F8AA2C]">{project.id}</span>
              )}
              <p className="text-sm mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((stack) => (
                  <div
                    key={stack}
                    className="border border-[#F8AA2C] rounded-sm px-2 text-xs"
                  >
                    {stack}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      {openPrev && (
        <ProjectPreviewModal
          onClose={() => setOpenPrev(null)}
          projImg={openPrev.photo}
        />
      )}
    </section>
  );
}
