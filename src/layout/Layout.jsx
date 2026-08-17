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
import { useState } from "react";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import SocialLinksModal from "../components/header/SocialLinksDropdownMenu";
import Projects from "../components/Projects";

export default function Layout({ children }) {
  const [openSocialLinks, setOpenSocialLinks] = useState(false);


  const handleOpenSocialLinks = () => {
    setOpenSocialLinks(true);
  };

  return (
    <div className="flex justify-center flex-wrap text-white">
      <header className="w-full mx-auto relative md:max-w-200">
        <WebsiteTitle />
        <CoverPhoto coverphoto={coverphoto} />
        <HeaderDetails pfp={pfp} onOpenSocialLinks={handleOpenSocialLinks} setOpen={setOpenSocialLinks} open={openSocialLinks}/>
      </header>

      <main className="absolute md:top-[360px] top-85 flex justify-center  pb-5">
          <div className=" justify-center space-y-4 w-full md:max-w-200">
            {/* ABOUT ME */}
            <AboutMe />
                            
            {/* SKILLS */} 
            <Skills />
            
            {/* PROJECTS */}
            <Projects/>

        </div>
      </main>
    </div>
  );
}
