import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n";
import MyProjectModal from "./myProjectModal";

export default function ViewProjectsType1() {
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

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
        <div className="project-view">
          {project.projects.map((project, index) => {
            let tecs = [];
            for (let i = 0; i < project.iconTechs.length; i++) {
              tecs.push(
                <img
                  className="img-icon"
                  key={i}
                  src={project.iconTechs[i]}
                  alt="icon"
                />
              );
            }
            return (
              <div key={project.id} className="div-each-project">
                <div className="div-project-image" data-aos="fade-left">
                  <img
                    className="project-image"
                    src={project.img}
                    alt="Project_image"
                  />
                </div>
                <div data-aos="fade-right">
                  <p className="project-title">{project.projectName}</p>
                  <p className="project-sub-title">{project.projectArea}</p>
                  <div className="my-project-tec-images">{tecs}</div>
                </div>
                <a className="project-link-button" data-aos="fade-left">
                  <button
                    onClick={() => {
                      setSelectedProject(index);
                      setModalOpen(true);
                    }}
                    className="project-button"
                  >
                    {t("sections.myProjectsPage.buttonText")}
                  </button>
                </a>
                {modalOpen && selectedProject === index && (
                  <MyProjectModal
                    information={project}
                    setOpenModal={setModalOpen}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
