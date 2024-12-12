import React, { useEffect, useState } from "react";
import image from "../../../assets/pictures/img_about_me_section.jpeg";

import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

const AboutMePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [aboutMe, setAboutMe] = useState(null);
  const { t } = useTranslation();

  const fetchData = async (lng) => {
    try {
      const response = await fetch(
        `https://lucasoriental.github.io/lucasorientalapi/database.json`
      );
      const data = await response.json();
      const dynamicTranslations = data[lng];

      i18n.addResourceBundle(
        lng,
        "translation",
        { AboutMePage: dynamicTranslations },
        true,
        true
      );
      setAboutMe(dynamicTranslations);
      setIsLoading(false);
    } catch (err) {
      console.error(
        "Something went wrong during the fetch. Please try refreshing the site..."
      );
    }
  };

  useEffect(() => {
    fetchData(i18n.language);

    const handleLanguageChange = () => {
      fetchData(i18n.language);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return (
    <div id="about-me-container">
      <div className="container-general">
        <p
          className="title-general"
          style={{ color: "#444444" }}
          data-aos="fade-up"
        >
          {t("sections.aboutMePage.title")}
        </p>
        <div className="about-me-container-items">
          <img
            alt="imagem"
            src={image}
            className="about-me-image"
            data-aos="fade-right"
          />

          {isLoading === true ? (
            <p
              style={{
                textAlign: "center",
                fontSize: "25px",
                color: "#FFF",
                margin: "90px 0px",
                fontWeight: "500",
              }}
            >
              {t("errorMessages")}
            </p>
          ) : (
            <div
              className="about-me-text"
              dangerouslySetInnerHTML={{ __html: aboutMe.aboutMe }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
