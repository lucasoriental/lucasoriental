import React, {useEffect} from "react";
import XIconSvg from "../../../../assets/common_elements/icon_X"

export default function clinicaDoPaiao({ setOpenModal, information }) {

    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
          document.body.classList.remove("modal-open");
        };
      }, []);

    return (
      <>
        <div className="modal-background">
          <div className="modal-container">
            <div className="modal-header">
              <button
                className="modal-close-button"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                <XIconSvg />
              </button>
              <p className="modal-header-title">Check the Project</p>
            </div>
            <div className="modal-body">
              <canvas className="modal-img" src="#" alt="#" />
              <div className="modal-body-text-area">
                <p className="modal-body-title"></p>
                <p className="modal-body-sub-title">Web Development</p>
                <p className="modal-text">
                  Clinica Do Paião is a medical clinic situated on Paião in
                  Portugal, that offers medical services! Like General Clinic,
                  Psycology, Physioterapy, acupunture and other ones!
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal-button-project">GitHub</button>
              <button className="modal-button-project">Website</button>
              <button className="modal-button-project">behance</button>
            </div>
          </div>
        </div>
      </>
    );
}
