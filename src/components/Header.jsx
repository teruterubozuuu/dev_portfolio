import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Header.css";
import pfp from "../images/pfp.png";

const transparentMaterialDark = {
  ...materialDark,
  'pre[class*="language-"]': {
    ...materialDark['pre[class*="language-"]'],
    background: "transparent",
    backgroundColor: "transparent",
  },
  'code[class*="language-"]': {
    ...materialDark['code[class*="language-"]'],
    background: "transparent",
    backgroundColor: "transparent",
  },
};

export default function Header() {
  const codeString = `
    <script type="text/javascript">
      const getInspiration = ( ) => {
        if(everyday === 'impostor syndrome'){
          startCoding() && neverGiveUp()
        }
      }
    </script>
  `;

  return (
    <>
      <div className="header-parent-cont">
        <h1 className="logo">
          <span>&lt;</span> joyjoy.dev <span>/&gt;</span>
        </h1>
        <div className="cover-photo">
          <SyntaxHighlighter
            language="javascript"
            style={transparentMaterialDark}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
        <div className="profile-photo">
          <div className="profile-photo-child">
            <img src={pfp} alt="joy-profile-pic" className="profile-pic" />
            <div className="details">
              <div style={{ display: "flex", width: "100%" }}>
                <h1>Joylynne Esportuno</h1>
                <button className="followBtn">
                  Contact
                </button>
              </div>
              <p style={{ fontWeight: "100", marginTop: "-10px" }}>
                @joyjoy.dev
              </p>
              <p>Computer Science student & Fullstack Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
