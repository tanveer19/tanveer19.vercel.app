import React, { useState, useRef } from "react";
import { Scrollspy } from "@makotot/ghostui";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import {
  FiUser,
  FiBriefcase,
  FiFileText,
  FiPhoneOutgoing,
} from "react-icons/fi";
import { FaHome, FaBlog } from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    if (window.innerWidth <= 768) {
      setClick(!click);
    } else {
      setClick(false);
    }
  };

  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [homeRef, aboutRef, resumeRef, workRef, contactRef];

  // Attach refs to sections on mount
  React.useEffect(() => {
    homeRef.current = document.getElementById("home");
    aboutRef.current = document.getElementById("about");
    resumeRef.current = document.getElementById("resume");
    workRef.current = document.getElementById("work");
    contactRef.current = document.getElementById("contactus");
  }, []);

  return (
    <>
      {/* Header */}
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Header */}

      {/* nav bar */}
      <header className={click ? "header-left menu-open" : "header-left  z-10"}>
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <Link to="/">T</Link>
            </div>
          </div>
          {/* End htl-top */}

          <Scrollspy sectionRefs={sectionRefs} offset={-30}>
            {({ currentElementIndexInViewport }) => (
              <ul className="flex flex-wrap nav-menu w-1/2 mx-auto">
                <li>
                  <a
                    className={`nav-link block ${currentElementIndexInViewport === 0 ? "active" : ""}`}
                    href="#home"
                    data-tooltip-id="HOME"
                    onClick={handleClick}
                  >
                    <FaHome />
                  </a>
                  <Tooltip id="HOME" place="right">
                    <span>Home</span>
                  </Tooltip>
                </li>
                <li>
                  <a
                    className={`nav-link block ${currentElementIndexInViewport === 1 ? "active" : ""}`}
                    href="#about"
                    data-tooltip-id="ABOUT"
                    onClick={handleClick}
                  >
                    <FiUser />
                  </a>
                  <Tooltip id="ABOUT" place="right">
                    <span>About</span>
                  </Tooltip>
                </li>
                <li>
                  <a
                    className={`nav-link block ${currentElementIndexInViewport === 2 ? "active" : ""}`}
                    href="#resume"
                    data-tooltip-id="RESUME"
                    onClick={handleClick}
                  >
                    <FiFileText />
                  </a>
                  <Tooltip id="RESUME" place="right">
                    <span>Resume</span>
                  </Tooltip>
                </li>
                <li>
                  <a
                    className={`nav-link block ${currentElementIndexInViewport === 3 ? "active" : ""}`}
                    href="#work"
                    data-tooltip-id="WORK"
                    onClick={handleClick}
                  >
                    <FiBriefcase />
                  </a>
                  <Tooltip id="WORK" place="right">
                    <span>Work</span>
                  </Tooltip>
                </li>
                {/* <li>
                  <a
                    className={`nav-link block ${currentElementIndexInViewport === 4 ? "active" : ""}`}
                    href="#blog"
                    data-tooltip-id="BLOG"
                    onClick={handleClick}
                  >
                    <FaBlog />
                  </a>
                  <Tooltip id="BLOG" place="right">
                    <span>Blog</span>
                  </Tooltip>
                </li> */}
                <li>
                  <a
                    className={`nav-link block ${currentElementIndexInViewport === 4 ? "active" : ""}`}
                    href="#contactus"
                    data-tooltip-id="CONTACT"
                    onClick={handleClick}
                  >
                    <FiPhoneOutgoing />
                  </a>
                  <Tooltip id="CONTACT" place="right">
                    <span>Contact</span>
                  </Tooltip>
                </li>
              </ul>
            )}
          </Scrollspy>
        </div>
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
