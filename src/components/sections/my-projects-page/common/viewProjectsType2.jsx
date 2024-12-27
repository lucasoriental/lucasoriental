import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n";
import "./projects.scss";

function ViewProjectsType2() {
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState([]);
  //const [selectedProject, setSelectedProject] = useState(null);
  //const [modalOpen, setModalOpen] = useState(false);

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
        { myProjectsPage: dynamicTranslations },
        true,
        true
      );
      setProject(dynamicTranslations);
      setIsLoading(false);
    } catch (err) {
      console.error(
        "Something error happend during fetch on the My Projects page, please try refreshing the site..."
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

  console.log(isLoading);
  console.log(project.projects);
  return (
    <>
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
        <div className="view-projects-type-2-grid">
          {project.projects.map((proj) => {
            return (
              <div key={proj.id} className="view-projects-type-2-card">
                <img
                  src={proj.img}
                  alt="imagem do projeto"
                  className="view-projects-type-2-image"
                />
                <div className="view-projects-type-2-info">
                  <p className="view-projects-type-2-project-name">
                    {proj.projectName}
                  </p>
                  <p className="view-projects-type-2-project-areas">
                    {proj.projectArea}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default ViewProjectsType2;
