import React from "react";
import BehanceSVG from "../../../assets/light_theme/Behance";
import GitHubSVG from "../../../assets/light_theme/GitHub";
import InstagramSVG from "../../../assets/light_theme/Instagram";
import LinkedInSVG from "../../../assets/light_theme/LinkedIn";
import LocationSVG from "../../../assets/light_theme/locate";
import MailSVG from "../../../assets/light_theme/mail";
import NumberSVG from "../../../assets/light_theme/wpp_or_call";

import { useTranslation } from "react-i18next";

const ContactMePage = () => {
  const { t } = useTranslation();
  return (
    <div id="contact-me-container">
      <div className="container-general">
        <p className="title-general" data-aos="fade-up">
          {t("sections.contactMePage.title")}
        </p>
        <div className="contact-me-form-social">
          <div className="contact-me-left-side">
            <div>
              <div className="left-side-title-and-canvas">
                <p
                  className="left-side-form-title"
                  data-aos="fade-right"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  {t("sections.contactMePage.text1")}
                </p>
                <canvas className="left-side-form-above-title" />
              </div>
              <div className="left-side-all-items">
                <div className="left-side-item">
                  <a
                    href="https://maps.app.goo.gl/WRGVPhNip7Dmu8Zg7"
                    target="_blank"
                    className="left-side-item-a"
                  >
                    <p className="social-media-name">
                      {t("sections.contactMePage.localization")}
                    </p>
                    <LocationSVG width={40} height={41} color={"#E00036"} />
                  </a>
                </div>
                <div className="left-side-item">
                  <a
                    href="mailto:lucasoriental@gmail.com"
                    target="_blank"
                    className="left-side-item-a"
                  >
                    <p className="social-media-name">lucasoriental@gmail.com</p>
                    <MailSVG width={40} height={37} color={"#E00036"} />
                  </a>
                </div>
                <div className="left-side-item">
                  <a
                    href="https://web.whatsapp.com/send?phone=5521995253580"
                    target="_blank"
                    className="left-side-item-a"
                  >
                    <p className="social-media-name">+55 (21) 99525-3580</p>
                    <NumberSVG width={39} height={42} color={"#E00036"} />
                  </a>
                </div>
                <div className="left-side-item">
                  <a
                    href="https://instagram.com/lucasorientaldev"
                    target="_blank"
                    className="left-side-item-a"
                  >
                    <p className="social-media-name">@lucasorientaldev</p>
                    <InstagramSVG width={40} height={40} color={"#E00036"} />
                  </a>
                </div>
                <div className="left-side-item">
                  <a
                    href="https://github.com/lucasoriental"
                    className="left-side-item-a"
                    target="_blank"
                  >
                    <p className="social-media-name">/lucasoriental</p>
                    <GitHubSVG width={40} height={40} color={"#E00036"} />
                  </a>
                </div>
                <div className="left-side-item">
                  <a
                    href="https://linkedin.com/in/lucas-oriental-dos-santos/"
                    target="_blank"
                    className="left-side-item-a"
                  >
                    <p className="social-media-name">
                      Lucas Oriental dos Santos
                    </p>
                    <LinkedInSVG width={40} height={40} color={"#E00036"} />
                  </a>
                </div>
                <div className="left-side-item">
                  <a
                    href="https://behance.net/lucasoriental"
                    target="_blank"
                    className="left-side-item-a"
                  >
                    <p className="social-media-name">/lucasoriental</p>
                    <BehanceSVG width={40} height={40} color={"#E00036"} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMePage;
