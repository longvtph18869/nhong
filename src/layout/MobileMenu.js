import { useState } from "react";
const MobileMenu = ({ logo }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="dizme_tm_mobile_menu">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <a href="#">
              <img src={logo ? logo : "img/logo/logo.png"} alt="image" />
            </a>
          </div>
          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
              onClick={() => setToggle(!toggle)}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown" style={{ display: toggle ? "block" : "none" }}>
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            <li className="current">
              <a href="#home" onClick={() => setToggle(false)}>
                Home
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(false)} href="#about">
                About
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(false)} href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(false)} href="#service">
                Service
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(false)} href="#blog">
                Blog
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(false)} href="#contact">
                Contact
              </a>
            </li>
            <li className="download_cv">
              <a href="img/cv/1.jpg" download="">
                <span>Download CV</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
