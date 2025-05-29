import React from "react";
import Footer from "../../components/footer/Footer";
import homeStyle from "./Home.module.scss";

const Home = () => {
  return (
    <main className={homeStyle.main}>
      <div className={homeStyle.flexDiv}>
        <div className={homeStyle.container}>
          <h4 className={homeStyle.h4}> Hi! My Name Is</h4>
          <h3 className={homeStyle.h3}> Wednesday Addams</h3>
          <div className={homeStyle.line}></div>
          <h4 className={homeStyle.lasth4}>Full Stack Web Developer</h4>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Home;
