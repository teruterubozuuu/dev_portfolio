import artVault from "../assets/project1.png";
import odinGame from "../assets/proj4.png";
import theHunt from "../assets/the-hunt-img.png"
import visualCanvas from "../assets/visual-canvas.png";

export const skills = [
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "javascript", label: "JavaScript" },
  { id: "typescript", label: "TypeScript" },
  { id: "react", label: "React" },
  { id: "nextjs", label: "Next.js" },
  { id: "tailwindCSS", label: "TailwindCSS" },
  { id: "shadcn", label: "Shadcn/ui" },
  { id: "figma", label: "Figma" },
  { id: "git", label: "Git" },
  { id: "github", label: "Github" },
  { id: "vercel", label: "Vercel" },
  {id: "laravel", label: "Laravel"},
  {id: "php", label: "PHP"}
];

export const projects = [
  {
    id: "Art-Vault",
    description:
      "Art-Vault is a platform for creative individuals to showcase their work, commission other artists, and sell digital art assets through the marketplace. Soon to be built as a web app and renamed to 'Artchive'.",
    link: "https://www.figma.com/proto/Z5fm7tgAwX6ywLYOr9ACmh/PROTOTYPE_ART-VAULT?node-id=2-40&starting-point-node-id=2%3A40",
    photo: artVault,
    stack: ["Figma"]
  },
  {
    id: "Visual Canvas",
    description:
      "This project is the first major feature I developed for WyzLab Solutions. Its main purpose is to provide users a way to visually organize their scenarios or the content of their quest/course.",
    photo: visualCanvas,
    stack: ["Next.js", "TypeScript", "ReactFlow", "Supabase", "dnd-kit", "shadcn/ui"]
  },
  {
    id: "Rock, Paper, Scissors, Shoot!",
    description: "This project is a fun game created in HTML, CSS, and JavaScript in partial fulfillment of The Odin Project's foundations path.",
    photo: odinGame,
    link: "https://teruterubozuuu.github.io/odin-rock-paper-scissors/",
    stack: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: "The Hunt (In Progress)",
    description: "The Hunt is a job application tracker where you can manually input necessary job details, or provide the link of the job posting and let the system automatically fill it for you.",
    photo: theHunt,
    link:"https://the-hunt-dusky.vercel.app/",
    stack: ["Next.js", "TypeScript", "Supabase", "dnd-kit", "shadcn/ui", "Vercel"]
  }
];
