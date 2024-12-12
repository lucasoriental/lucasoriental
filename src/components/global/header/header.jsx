import React, { useState } from "react";
import XIconSvg from "../../../assets/common_elements/icon_X";
import MenuHamburguer from "../../../assets/common_elements/icon_menu_hamburger";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../../LanguageSwitcher";

import { Link } from "react-scroll";

const Header = () => {
  const { t } = useTranslation();
  const headerHeight = 120;
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    const btnMenu = document.querySelector(".hamburguer");
    const mob_menu = document.querySelector(".header-mobile-side-bar");
    btnMenu.classList.toggle("is-active");
    mob_menu.classList.toggle("is-active");
    setIsActive(!isActive);
  };

  const handleClickLink = () => {
    setIsActive(false);
  };

  return (
    <header id="header-main">
      <div id="header-desktop">
        <nav className="header-desktop-nav">
          <LanguageSwitcher />
          <Link
            activeClass="active"
            to="home-main-container"
            spy={true}
            smooth={true}
            offset={-headerHeight}
            duration={1000}
          >
            {t("header.home")}
          </Link>
          <Link
            activeClass="active"
            to="my-projects-container"
            spy={true}
            smooth={true}
            offset={-headerHeight}
            duration={1000}
          >
            {t("header.projects")}
          </Link>
          <Link
            activeClass="active"
            to="education-and-skills-page"
            spy={true}
            smooth={true}
            offset={-headerHeight}
            duration={1000}
          >
            {t("header.education")}
          </Link>
          <Link
            activeClass="active"
            to="job-experiences-container"
            spy={true}
            smooth={true}
            offset={-headerHeight}
            duration={1000}
          >
            {t("header.jobs")}
          </Link>
          <Link
            activeClass="active"
            to="about-me-container"
            spy={true}
            smooth={true}
            offset={-headerHeight}
            duration={1000}
          >
            {t("header.about")}
          </Link>
          <Link
            activeClass="active"
            to="contact-me-container"
            spy={true}
            smooth={true}
            offset={-headerHeight}
            duration={1000}
          >
            {t("header.contact")}
          </Link>
        </nav>
      </div>
      <div id="header-mobile">
        <div className="header-mobile-bar">
          <button className="hamburguer" onClick={handleClick}>
            <MenuHamburguer
              width={41}
              height={26}
              strokeWidth={3}
              strokeColor="white"
            />
          </button>
          <LanguageSwitcher onClick={handleClickLink} />
        </div>
        <div
          className={`header-mobile-side-bar ${isActive ? "is-active" : ""}`}
        >
          <div className="header-mobile-side-bar-top">
            <div className="header-mobile-side-bar-top-XIcon">
              <button className="hamburguer" onClick={handleClick}>
                <XIconSvg
                  width={35}
                  height={35}
                  strokeWidth={3}
                  color="white"
                />
              </button>
            </div>
          </div>
          <nav className="header-mobile-side-bar-nav">
            <Link
              activeClass="active"
              to="home-main-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              {t("header.home")}
            </Link>
            <Link
              activeClass="active"
              to="my-projects-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              {t("header.projects")}
            </Link>
            <Link
              activeClass="active"
              to="education-and-skills-page"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              {t("header.education")}
            </Link>
            <Link
              activeClass="active"
              to="job-experiences-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              {t("header.jobs")}
            </Link>
            <Link
              activeClass="active"
              to="about-me-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              {t("header.about")}
            </Link>
            <Link
              activeClass="active"
              to="contact-me-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              {t("header.contact")}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
