import pfp from "../assets/img.jpeg";
import coverphoto from "../assets/coverphoto.jpg";
import proj1 from "../assets/project1.png";
import proj2 from "../assets/project2.png";
import proj3 from "../assets/project3.png";
import proj4 from "../assets/project4.png";
import proj5 from "../assets/proj5.png";
import CoverPhoto from "../components/header/CoverPhoto";
import WebsiteTitle from "../components/header/WebsiteTitle";
import HeaderDetails from "../components/header/HeaderDetails";


export default function Layout({children}) {
  const skills = [
    {id: "html", label: "HTML"}, 
    {id:"css", label: "CSS"},
    {id: "javascript", label: "JavaScript"},
    {id: "typescript", label: "TypeScript"},
    {id: "react", label: "React"},
    {id: "nextjs", label: "Next.js"},
    {id: "tailwindCSS", label: "TailwindCSS"},
    {id: "shadcn", label: "Shadcn/ui"},
    {id: "figma", label: "Figma"},
    {id: "git", label: "Git"},
    {id: "github", label: "Github"},
    {id: "vercel", label: "Vercel"}
  ];

  return (
    <div className="flex justify-center flex-wrap text-white">
      <header className="w-full md:max-w-[900px] mx-auto relative">
        <WebsiteTitle/>
        <CoverPhoto coverphoto={coverphoto}/>
        <HeaderDetails pfp={pfp}/>
      </header>
      
      <main className='border-t border-[#181818] absolute p-5 md:top-[360px] top-85 flex justify-center w-full md:max-w-[900px] mx-auto'>
            <div className="space-y-4">
      <div className=" flex md:flex-row flex-col  gap-4 justify-center">
        {/**
         * ABOUT ME
         */}
        <section className="md:rounded-lg bg-[#0D0A12] p-8">
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
          <p className="text-lg font-medium mb-5">
            Hey there, I'm <span className="text-[#F8AA2C]">Joy!</span>
          </p>
          <p className="mb-2">
            I'm a Computer Science student from CIIT College of Arts and
            Technology and an aspiring Software Engineer. I enjoy pursuing my
            web development studies, especially frontend development using tools
            such as HTML, CSS, JavaScript, TailwindCSS, and React.js{" "}
          </p>
          <p className="mb-2 mt-5">
            Feel free to explore and learn more about me!
          </p>
          <div className="flex md:flex-row flex-col gap-4 justify-center mt-5"></div>
        </section>

        <div className="space-y-4">
          {/**
           * SKILLS
           */}
          <section className="p-8 md:rounded-lg bg-[#0D0A12] ">
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
              <p className="text-xl w-[220px] font-bold">Skills</p>
            </div>
            <div className="gap-2 flex flex-wrap">
              {
                skills.map((skill)=> (
                <p className="border border-[#F8AA2C] p-2 rounded-lg text-[12px]" key={skill.id}>{skill.label}</p>

                ))
              }                
            </div>
          </section>
          <section className="p-8 md:rounded-lg bg-[#0D0A12] space-y-3">
            <div className="flex items-center gap-3 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#F8AA2C"
                className="bi bi-link-45deg"
                viewBox="0 0 16 16"
              >
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
              </svg>
              <p className="text-xl w-[220px] font-bold">Social links</p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
              <p className="font-light">joylynnegrace@gmail.com</p>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/teruterubozuuu" target="blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-github cursor-pointer hover:text-[#F8AA2C] transition-all ease-in"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/joylynne-grace-esportuno-43288a24a/"
                target="blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-linkedin cursor-pointer hover:text-[#F8AA2C] transition-all ease-in"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/teruterubozuuuu" target="blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-facebook cursor-pointer hover:text-[#F8AA2C] transition-all ease-in"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </div>

      <section className="p-8 md:rounded-lg bg-[#0D0A12]">
        <div className="flex items-center gap-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#F8AA2C"
            className="bi bi-columns-gap"
            viewBox="0 0 16 16"
          >
            <path d="M6 1v3H1V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm14 12v3h-5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 8v7H1V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm14-6v7h-5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z" />
          </svg>
          <p className="text-xl w-[220px] font-bold">Projects</p>
        </div>

        <div className="space-y-3">
          <div className="border border-[#211e2a] p-5 rounded-lg">
            <div className="flex md:flex-row flex-col md:justify-start items-center gap-3">
              <img
                src={proj1}
                alt="ArtVault"
                className="w-[100%] md:w-50 h-auto rounded-lg"
              />
              <div>
                <a
                  href="https://www.figma.com/proto/Z5fm7tgAwX6ywLYOr9ACmh/PROTOTYPE_ART-VAULT?node-id=2-40&t=qRmGjKNFOuDrTnmp-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A40"
                  className="text-xl font-bold space-y-2 hover:text-[#F8AA2C] transition-all ease-in"
                  target="blank"
                >
                  ArtVault
                </a>
                <p className="text-[#cbcad1]">
                  ArtVault is a platform for creative individuals to showcase
                  their work, commission other artists, and sell digital art
                  assets through the marketplace.
                </p>
                <p className="border border-[#F8AA2C] p-2 rounded-lg text-[10px] w-fit">
                  Figma
                </p>
              </div>
            </div>
          </div>

          <div className="border border-[#211e2a] p-5 rounded-lg">
            <div className="flex md:flex-row flex-col gap-3">
              <img
                src={proj2}
                alt="CIIT Online Library"
                className="w-[100%] md:w-50 h-auto rounded-lg"
              />
              <div>
                <a
                  href="https://teruterubozuuu.github.io/ciit-online-library2/"
                  className="text-xl font-bold space-y-2 hover:text-[#F8AA2C] transition-all ease-in"
                  target="blank"
                >
                  CIIT Online Library Redesign
                </a>
                <p className="text-[#cbcad1]">
                  This project is a UI Redesign of CIIT’s Online Library for our
                  Technical Communication class.
                </p>
                <div className="flex gap-2">
                  <p className="border border-[#F8AA2C] p-2 rounded-lg text-[10px] w-fit">
                    HTML
                  </p>
                  <p className="border border-[#F8AA2C] p-2 rounded-lg text-[10px] w-fit">
                    CSS
                  </p>
                  <p className="border border-[#F8AA2C] p-2 rounded-lg text-[10px] w-fit">
                    React
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#211e2a] p-5 rounded-lg">
            <div className="flex md:flex-row flex-col gap-3">
              <img
                src={proj3}
                alt="Landing Page - The Odin Project"
                className="w-[100%] md:w-50 h-auto rounded-lg"
              />
              <div>
                <a
                  href="https://teruterubozuuu.github.io/odin-landing-page/"
                  className="text-xl font-bold space-y-2  hover:text-[#F8AA2C] transition-all ease-in"
                  target="blank"
                >
                  Landing Page - The Odin Project
                </a>
                <p className="text-[#cbcad1]">
                  A landing page project in the Odin Project's Foundations path.
                </p>
                <div className="flex gap-2">
                  <p className="border border-[#F8AA2C] p-2 rounded-lg text-[10px] w-fit">
                    HTML
                  </p>
                  <p className="border border-[#F8AA2C] p-2 rounded-lg text-[10px] w-fit">
                    CSS
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#211e2a] p-5 rounded-lg">
            <div className="flex md:flex-row flex-col gap-3">
              <img
                src={proj4}
                alt="Rock Paper Scissors - The Odin Project"
                className="w-[100%] md:w-50 h-auto rounded-lg"
              />
              <div>
                <a
                  href="https://teruterubozuuu.github.io/odin-rock-paper-scissors/"
                  className="text-xl font-bold space-y-2  hover:text-[#F8AA2C] transition-all ease-in"
                  target="blank"
                >
                  Rock, Paper, Scissors - The Odin Project
                </a>
                <p className="text-[#cbcad1]">
                  Odin Rock-Paper-Scissors is a fun game created in HTML, CSS,
                  and JavaScript in partial fulfillment of the Odin Project's
                  Foundations Path
                </p>
                <div className="flex gap-2">
                  <p className="border border-[#F8AA2C] p-2 rounded-lg text-[10px] w-fit">
                    HTML
                  </p>
                  <p className="border border-[#F8AA2C] p-2 rounded-lg text-[10px] w-fit">
                    CSS
                  </p>
                  <p className="border border-[#F8AA2C] p-2 rounded-lg text-[10px] w-fit">
                    JavaScript
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#211e2a] p-5 rounded-lg">
            <div className="flex md:flex-row flex-col gap-3">
              <img
                src={proj5}
                alt="FURS"
                className="w-[100%] md:w-50 h-auto rounded-lg"
              />
              <div>
                <a
                  href="https://github.com/teruterubozuuu/furs-project"
                  className="text-xl font-bold space-y-2  hover:text-[#F8AA2C] transition-all ease-in"
                  target="blank"
                >
                  F.U.R.S.
                </a>
                <p className="text-[#cbcad1]">
                  F.U.R.S. or Find, Unite, and Rescue Strays is a
                  community-driven application to report stray sightings and
                  identify areas with significant stray animal density.
                </p>
                <div className="flex gap-2">
                  <p className="border border-[#F8AA2C] p-2 rounded-lg text-[10px] w-fit">
                    HTML
                  </p>
                  <p className="border border-[#F8AA2C] p-2 rounded-lg text-[10px] w-fit">
                    TailwindCSS
                  </p>
                  <p className="border border-[#F8AA2C] p-2 rounded-lg text-[10px] w-fit">
                    JavaScript
                  </p>
                  <p className="border border-[#F8AA2C] p-2 rounded-lg text-[10px] w-fit">
                    React
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
      </main>
    </div>
  )
}
