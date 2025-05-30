import React from "react";
import Footer from "../../components/footer/Footer";
import { imgData } from "../../helper/imageData";
import projectStyle from "./Projects.module.scss";

const Projects = () => {
  return (
    <div className={projectStyle.container}>
      <h2 className={projectStyle.h2}>MY PROJECTS</h2>
      <main className={projectStyle.main}>
        {imgData.map((img) => (
          <div className={projectStyle.div}>
            <img className={projectStyle.img} src={img.image} alt="" />
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
