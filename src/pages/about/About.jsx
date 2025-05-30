import React from "react";
import Footer from "../../components/footer/Footer";
import { aboutInfo } from "../../helper/imageData";
import aboutStyle from "./About.module.scss";

const About = () => {
  return (
    <main className={aboutStyle.main}>
      <h2 className={aboutStyle.h2}>BIO</h2>
      <p className={aboutStyle.p}>
        Wednesday Addams is a fictional character from the Addams Family
        multimedia franchise created by American cartoonist Charles Addams. She
        is typically portrayed as a morbid and emotionally reserved child that
        is fascinated by the macabre, often identified by her pale skin and
        black pigtails. Wednesday has been portrayed by several actresses in
        various films and television series, including Lisa Loring in the
        television series The Addams Family (1964), Christina Ricci in the
        feature films The Addams Family (1991) and Addams Family Values (1993),
        and Jenna Ortega in the streaming television series Wednesday (2022).
      </p>
      <div className={aboutStyle.cardContainer}>
        <div className={aboutStyle.card}>
          {aboutInfo.map((b) => (
            <div className={aboutStyle.div}>
              <h3 className={aboutStyle.h3}>{b.date}</h3>
              <h4 className={aboutStyle.h3}>{b.place}</h4>
              <h5 className={aboutStyle.h5}>{b.title}</h5>
              <h5 className={aboutStyle.h5}>{b.bio}</h5>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default About;
