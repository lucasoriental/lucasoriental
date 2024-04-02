import React from "react";
import Header from "../src/components/global/header/header";
import "./App.scss";
import EducationAndSkills from "./components/sections/education-and-skills-page/educationAndSkills";
import MainPage from "./components/sections/home-page/home";
import MyProjects from "./components/sections/my-projects-page/myProjects";
import JobExperiences from "./components/sections/job-experiences-page/jobExperiences";
import AboutMe from "./components/sections/about-me-page/aboutMe";
import ContactMe from "./components/sections/contact-me-page/contactMe";

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <MyProjects />
      <EducationAndSkills />
      <JobExperiences />
      <AboutMe />
      <ContactMe />
      {/*<HaveAFun />
      <Footer /> */}
    </>
  );
}

export default App;
