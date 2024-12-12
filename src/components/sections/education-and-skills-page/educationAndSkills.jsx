import React, { useEffect, useState } from "react";
import Certificates from "./common/certificates";
import College from "./common/college";
import Skills from "./common/skills";

import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

const EducationAndSkillsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [educationAndSkillsInformation, setEducationAndSkillsInformation] =
    useState(null);

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
        { myEducationAndSkillsPage: dynamicTranslations },
        true,
        true
      );
      setEducationAndSkillsInformation(dynamicTranslations);
      setIsLoading(false);
    } catch (err) {
      console.error(
        'Something error happend during fetch on the "My Projects" page, please try refreshing the site...'
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
    <div id="education-and-skills-page">
      <div className="container-general">
        <p
          className="title-general"
          style={{ color: "#444444" }}
          data-aos="fade-right"
        >
          {t("sections.educationAndSkillsPage.title")}
        </p>
        {isLoading === true ? (
          <p
            style={{
              textAlign: "center",
              fontSize: "25px",
              color: "#FF003D",
              margin: "90px 0px",
              fontWeight: "500",
            }}
          >
            {t("errorMessages")}
          </p>
        ) : (
          <div>
            <div>
              <div className="title-and-canvas">
                <div className="column-1-teste">
                  <p
                    className="EAS-title-general"
                    style={{ color: "#444444" }}
                    data-aos="fade-right"
                  >
                    {t("sections.educationAndSkillsPage.section1.title")}
                  </p>
                </div>
                <div className="column-2-teste">
                  <canvas className="bar-1" data-aos="fade-right" />
                  <canvas className="bar-2" data-aos="fade-left" />
                </div>
              </div>
              <College data={educationAndSkillsInformation.college} />
            </div>
            <div>
              <div className="title-and-canvas">
                <div className="column-1-teste">
                  <p
                    className="EAS-title-general"
                    style={{ color: "#444444" }}
                    data-aos="fade-right"
                  >
                    {t(
                      "sections.educationAndSkillsPage.section2and3.titleSkills"
                    )}
                  </p>
                </div>
                <div className="column-2-teste">
                  <canvas className="bar-1" data-aos="fade-right" />
                  <canvas className="bar-2" data-aos="fade-left" />
                </div>
              </div>
              <div className="subtitle-and-canvas">
                <canvas className="bar-before" data-aos="fade-right" />
                <p
                  className="EAS-title-section"
                  style={{ color: "#444444" }}
                  data-aos="fade-right"
                >
                  {t("sections.educationAndSkillsPage.section2and3.itSec")}
                </p>
                <canvas className="bar-after" data-aos="fade-left" />
              </div>
              <Skills data={educationAndSkillsInformation.skillsIT} />
              <div className="subtitle-and-canvas">
                <canvas className="bar-before" data-aos="fade-right" />
                <p
                  className="EAS-title-section"
                  style={{ color: "#444444" }}
                  data-aos="fade-right"
                >
                  {t("sections.educationAndSkillsPage.section2and3.desSec")}
                </p>
                <canvas className="bar-after" data-aos="fade-left" />
              </div>
              <Skills data={educationAndSkillsInformation.skillsDesign} />
            </div>
            <div>
              <div className="title-and-canvas">
                <div className="column-1-teste">
                  <p
                    className="EAS-title-general"
                    style={{ color: "#444444" }}
                    data-aos="fade-right"
                  >
                    {t(
                      "sections.educationAndSkillsPage.section2and3.titleCert"
                    )}
                  </p>
                </div>
                <div className="column-2-teste">
                  <canvas className="bar-1" data-aos="fade-right" />
                  <canvas className="bar-2" data-aos="fade-left" />
                </div>
              </div>
              <div className="subtitle-and-canvas">
                <canvas className="bar-before" data-aos="fade-right" />
                <p
                  className="EAS-title-section"
                  style={{ color: "#444444" }}
                  data-aos="fade-right"
                >
                  {t("sections.educationAndSkillsPage.section2and3.itSec")}
                </p>
                <canvas className="bar-after" data-aos="fade-left" />
              </div>
              <Certificates
                data={educationAndSkillsInformation.certificatesIT}
              />
              <div className="subtitle-and-canvas">
                <canvas className="bar-before" data-aos="fade-right" />
                <p
                  className="EAS-title-section"
                  style={{ color: "#444444" }}
                  data-aos="fade-right"
                >
                  {t("sections.educationAndSkillsPage.section2and3.desSec")}
                </p>
                <canvas className="bar-after" data-aos="fade-left" />
              </div>
              <Certificates
                data={educationAndSkillsInformation.certificatesDesign}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationAndSkillsPage;
