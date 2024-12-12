import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import XIconSvg from "../../../../assets/common_elements/icon_X";
import BehanceIcon from "../../../../assets/light_theme/Behance";
import GitHubIcon from "../../../../assets/light_theme/GitHub";
import BrowserIcon from "../../../../assets/light_theme/browser";

export default function MyProjectModal({ information, setOpenModal }) {
  const [iconSize, setIconSize] = useState(window.innerWidth <= 800 ? 15 : 30);

  const { t } = useTranslation();

  useEffect(() => {
    document.body.classList.add("modal-open");

    const handleResize = () => {
      setIconSize(window.innerWidth <= 800 ? 15 : 30);
    };
    

    window.addEventListener("resize", handleResize);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-header">
          <button
            className="modal-close-button"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <XIconSvg width={30} height={30} strokeWidth={3} color="white" />
          </button>
          <p className="modal-header-title">
            {t("sections.myProjectsPage.headerModalText")}
          </p>
        </div>
        <div className="modal-body">
          <img className="modal-img" src={information.img} alt="#" />
          <div className="modal-body-text-area">
            <p className="modal-body-title">{information.projectName}</p>
            <p className="modal-body-sub-title">{information.projectArea}</p>
            <div
              className="modal-text"
              dangerouslySetInnerHTML={{
                __html: information.projectDescription,
              }}
            />
          </div>
        </div>
        <div className="modal-footer">
          {information.gitHubRepo.length > 0 ? (
            <a
              className="modal-link-a"
              href={information.gitHubRepo}
              target="_blank"
            >
              <div className="modal-button-project">
                <div className="modal-button-project-icon">
                  <GitHubIcon
                    height={iconSize}
                    width={iconSize}
                    color={"white"}
                  />
                </div>
                <p className="modal-button-project-text">GitHub</p>
              </div>
            </a>
          ) : (
            <></>
          )}
          {information.website.length > 0 ? (
            <a
              className="modal-link-a"
              href={information.website}
              target="_blank"
            >
              <div className="modal-button-project">
                <div className="modal-button-project-icon">
                  <BrowserIcon
                    width={iconSize}
                    height={iconSize}
                    color="white"
                  />
                </div>
                <p className="modal-button-project-text">WebSite</p>
              </div>
            </a>
          ) : (
            <></>
          )}
          {information.behanceRepo.length > 0 ? (
            <a
              className="modal-link-a"
              href={information.behanceRepo}
              target="_blank"
            >
              <div className="modal-button-project">
                <div className="modal-button-project-icon">
                  <BehanceIcon
                    width={iconSize}
                    height={iconSize}
                    color="white"
                  />
                </div>
                <p className="modal-button-project-text">Behance</p>
              </div>
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
