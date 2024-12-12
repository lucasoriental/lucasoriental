import { useEffect } from "react";
import XIconSvg from "../../../../../assets/common_elements/icon_X";

import { useTranslation } from "react-i18next";

export default function CertModal({ setOpenModal, information }) {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <div className="modal-background">
      <div className="modal-container-cert">
        <div className="modal-header-cert">
          <button
            className="modal-close-button"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <XIconSvg width={30} height={30} strokeWidth={3} color="white" />
          </button>
          <p className="modal-header-title">
            {t(
              "sections.educationAndSkillsPage.section2and3.modal_cert.header"
            )}
          </p>
        </div>
        <div className="modal-body">
          <div className="modal-block-info-cert-all">
            <div className="modal-block-info-cert">
              <p className="modal-cert-title">
                {t(
                  "sections.educationAndSkillsPage.section2and3.modal_cert.input1"
                )}
              </p>
              <p className="modal-cert-value">{information.credentialCode}</p>
            </div>
            <div className="modal-block-info-cert">
              <p className="modal-cert-title">
                {t(
                  "sections.educationAndSkillsPage.section2and3.modal_cert.input2"
                )}
              </p>
              <a
                href={information.credentialLink}
                target="_blank"
                className="modal-cert-value-a"
              >
                <p className="modal-cert-value">
                  {t(
                    "sections.educationAndSkillsPage.section2and3.modal_cert.button"
                  )}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
