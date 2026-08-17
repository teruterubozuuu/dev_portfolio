import React, { useEffect } from "react";

export default function ProjectPreviewModal({ onClose, projImg }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/80">
      <i
        className="bi bi-x text-3xl cursor-pointer absolute right-3 top-3 opacity-60 hover:opacity-100"
        onClick={onClose}
      />
      <div className="md:p-20 flex justify-center items-center h-full">
        <img src={projImg} alt="Project Image" className="rounded-xl" />
      </div>
    </div>
  );
}
