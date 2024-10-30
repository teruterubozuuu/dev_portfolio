import React from "react";
import Posts from "../components/Posts";
import pfp from "../images/pfp.png";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import react from "../images/react.png";
import mongodb from "../images/mongodb.png";
import python from "../images/python.png";

export default function HomePage() {
  const postsData = [
    {
      username: "Joylynne Esportuno",
      handle: "joyjoy.dev",
      date: "Oct 29",
      description: "Hello there! I’m a Computer Science student from Quezon City, Philippines, immersed in web development studies focusing on:",
      techIcons: {
        pinIcon:<i class="bi bi-pin-angle-fill"></i>,
        profilePic: pfp,
        stack: [
          { src: html, name: "HTML" },
          { src: css, name: "CSS" },
          { src: js, name: "JavaScript" },
          { src: react, name: "React" },
          { src: mongodb, name: "MongoDB" },
          { src: python, name: "Python" },
        ]
      }
    },
    {
      username: "Joylynne Esportuno",
      handle: "joyjoy.dev",
      date: "Oct 30",
      description: "Excited to share my latest project with everyone!",
      techIcons:{
        profilePic:pfp
      }
    }

  ];

  return (
    <div className="homepage-parent-cont">
      <div className="homepage-child-cont">
        {postsData.map((post, index) => (
          <Posts
            key={index}
            username={post.username}
            handle={post.handle}
            date={post.date}
            description={post.description}
            techIcons={post.techIcons}
          />
          
        ))}
      </div>
    </div>
  );
}
