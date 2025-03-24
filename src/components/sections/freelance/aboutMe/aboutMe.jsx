import React from "react";
import MeshBackground from "../home/meshBackground";

const AboutMe = () => {
  return (
    <section className="dark: relative pb-36 pt-36">
      <MeshBackground />
      <div className="mx-auto w-[90%] max-w-4xl">
        <p className="text-4xl font-extrabold drop-shadow-xl text-center text-white mb-5 select-none lg:text-start lg:w-[20em]">
          Sobre Mim
        </p>
        <p className="text-lg font-medium text text-zinc-100 mb-7 text-center select-none lg:text-start lg:w-[40em]">
          Com uma abordagem estratégica e personalizada, ajudo a transformar a
          presença online da tua marca, desde o desenvolvimento até ao marketing
          digital.
        </p>
      </div>
      <div className="max-w-4xl w-[90%] mx-auto">
        {/* <img src="#" alt="img" className="w-48 h-48 self-center mb-5 float-left mr-5"/> */}
        <canvas className="w-48 h-48 bg-zinc-100 self-center mb-5 float-left mr-5" />
        <p className="text-justify mx-auto text-zinc-100">
          Hello! My name is Lucas Oriental dos Santos, and I am a Full Stack
          Developer with three years of experience in React.js, Node.js, and
          database management. My academic background includes a Bachelor's
          Degree in Computer Science, complemented by specialized courses in
          UX/UI Design, React, JavaScript, and database management. This
          combination of technical and theoretical knowledge allows me to create
          complete solutions that merge development and design to generate
          impactful and efficient experiences. Throughout my professional
          journey, I have had the opportunity to work on the development of
          dynamic web applications and digital projects focused on high
          performance, scalability, and accessibility. I am passionate about
          cutting-edge web technologies and am always looking for new skills to
          enhance my technical experience. During my time at IBM, I had the
          opportunity to contribute to the front-end and back-end development of
          high-quality systems, mainly in financial systems (GAPTS, MISC &
          GCMS). My work involved creating user interfaces with React,
          optimizing back-end processes with Node.js, and ensuring data security
          and reliability. I gained hands-on experience in managing sensitive
          data, improving system performance, and migrating legacy systems to
          modern web applications. I also helped optimize code quality by
          implementing unit tests and addressing security vulnerabilities,
          ensuring stability and security throughout the development process. In
          addition to my full-stack experience, I have a solid foundation in
          UX/UI Design, having created intuitive and accessible interfaces for
          various digital products. My focus is on linking user needs with
          business objectives through design, from wireframes and prototypes to
          the final interface. Currently, I work as a freelancer, developing
          dynamic, user-centered websites and mobile applications. My goal is to
          help clients build strong digital presences with tailored solutions
          that reflect their unique identity and vision. I am an organized,
          proactive, and dedicated professional, always looking to grow and
          refine my skills. Whether collaborating on complex systems or
          exploring new technologies, I am ready to contribute to innovative
          projects that push the boundaries of what’s possible. If you are
          looking for a passionate and versatile Full Stack Developer, with a
          strong foundation in both front-end and back-end, as well as an eye
          for design, feel free to get in touch. I would be happy to discuss how
          I can contribute to your project!
        </p>
      </div>
    </section>
  );
};
export default AboutMe;
