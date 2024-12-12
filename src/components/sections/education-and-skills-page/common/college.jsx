import React from "react";

import { useTranslation } from "react-i18next";

export default function College(props) {
  const { t } = useTranslation();

  return (
    <div className="allColeges">
      {props.data.map((college) => {
        return (
          <div className="EAS-college-img-and-info" key={college.id}>
            <img
              data-aos="fade-left"
              alt="College_picture"
              src={college.img}
              className="EAS-college-picture"
            />
            <div
              className="EAS-college-info-div"
              data-aos="fade-right"
            >
              <a
                href={college.websiteLink}
                target="_blank"
                className="EAS-college-title"
              >
                {college.courseTitle}
              </a>
              <p className="EAS-college-info">{college.universityName}</p>
              <p className="EAS-college-info">{college.time}</p>
              <a
                href={college.websiteLink}
                target="_blank"
                className="EAS-college-button"
              >
                <button className="EAS-college-button">
                  {t('sections.educationAndSkillsPage.section1.buttonText')}
                </button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
