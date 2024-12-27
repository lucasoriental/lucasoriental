import { useTranslation } from "react-i18next";
import ViewProjectsType2 from "./common/viewProjectsType2";

const MyProjectsPage = () => {

  const { t } = useTranslation();

  return (
    <div id="my-projects-container">
      <div className="container-general">
        <div>
          <p className="title-general" data-aos="fade-up">
            {t("sections.myProjectsPage.title")}
          </p>
        </div>
       <ViewProjectsType2 />
      </div>
    </div>
  );
};

export default MyProjectsPage;
