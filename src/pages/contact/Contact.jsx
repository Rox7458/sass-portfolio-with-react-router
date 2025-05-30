import React from "react";
import contactStyle from "./Contact.module.scss";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <main className={contactStyle.main}>
      <h2 className={contactStyle.h2}>Contact Me ...</h2>

      <div className={contactStyle.div}>
        <section className={contactStyle.section}>
          <h3 className={contactStyle.h3}>📧 Email</h3>
          <p className={contactStyle.p}>wednesday@nevermoreacademy.edu</p>
        </section>
        <section className={contactStyle.section}>
          <h3 className={contactStyle.h3}>📞 Phone</h3>
          <p className={contactStyle.p}>+40 (571) 360-1234</p>
        </section>
        <section className={contactStyle.section}>
          <h3 className={contactStyle.h3}>𞄹 Address</h3>
          <p className={contactStyle.p}>
            Strada Zamorei 1, Bușteni 105500, Romania
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default Contact;
