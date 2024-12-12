import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { Tooltip } from "react-tooltip";
import BehanceSVG from "../../../assets/light_theme/Behance";
import GitHubSVG from "../../../assets/light_theme/GitHub";
import InstagramSVG from "../../../assets/light_theme/Instagram";
import LinkedInSVG from "../../../assets/light_theme/LinkedIn";
import MouseSrollSvg from "../../../assets/light_theme/mouse_arrow_down";
import main_picture from "../../../assets/pictures/profile_photo_1.jpg";

const MainPage = () => {
  const { t } = useTranslation();
  const headerHeight = 120;

  return (
    <div id="home-main-container">
      <div className="home-main-container-1">
        <div className="home-column1">
          <img
            alt="profile-image"
            src={main_picture}
            className="home-profile-picture"
          />
          <div className="borda-animada" />
        </div>
        <div className="home-column2">
          <div className="home-line1">
            <div>
              <p className="home-paragraph-1">{t("sections.homePage.text1")}</p>
              <div
                className="home-paragraph-2"
                dangerouslySetInnerHTML={{
                  __html: t("sections.homePage.text2"),
                }}
              />
            </div>
            <div>
              <div
                className="home-paragraph-1And2-mobile"
                dangerouslySetInnerHTML={{
                  __html: t("sections.homePage.textMobile"),
                }}
              />
            </div>
            <div
              className="home-paragraph-3"
              dangerouslySetInnerHTML={{
                __html: t("sections.homePage.text3"),
              }}
            />
          </div>
          <div className="home-line2">
            <Link
              activeClass="active"
              to="about-me-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
            >
              <button id="home-button">
                {t("sections.homePage.textButton")}
              </button>
            </Link>
            <div className="home-social-medias">
              <a
                data-tooltip-id="my-tooltip-instagram"
                data-tooltip-content={t(
                  "sections.homePage.toolTipTexts.instagram"
                )}
                href="https://instagram.com/lucasorientaldev"
                target="_blank"
                className="home-social-medias-a"
              >
                <Tooltip id="my-tooltip-instagram" />
                <InstagramSVG width={40} height={40} color={"#E00036"} />
              </a>
              <a
                data-tooltip-id="my-tooltip-GitHub"
                data-tooltip-content={t(
                  "sections.homePage.toolTipTexts.gitHub"
                )}
                href="https://github.com/lucasoriental"
                target="_blank"
                className="home-social-medias-a"
              >
                <Tooltip id="my-tooltip-GitHub" />
                <GitHubSVG width={40} height={40} color={"#E00036"} />
              </a>
              <a
                data-tooltip-id="my-tooltip-LinkedIn"
                data-tooltip-content={t(
                  "sections.homePage.toolTipTexts.linkedIn"
                )}
                href="https://linkedin.com/in/lucas-oriental-dos-santos"
                target="_blank"
                className="home-social-medias-a"
              >
                <Tooltip id="my-tooltip-LinkedIn" />
                <LinkedInSVG width={40} height={40} color={"#E00036"} />
              </a>
              <a
                data-tooltip-id="my-tooltip-Behance"
                data-tooltip-content={t(
                  "sections.homePage.toolTipTexts.behance"
                )}
                href="https://behance.net/lucasoriental"
                target="_blank"
                className="home-social-medias-a"
              >
                <Tooltip id="my-tooltip-Behance" />
                <BehanceSVG width={40} height={40} color={"#E00036"} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-main-container-2">
        <MouseSrollSvg />
      </div>
    </div>
  );
};

export default MainPage;
