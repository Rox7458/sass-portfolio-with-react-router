import React from "react";
import notStyle from "./NotFound.module.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className={notStyle.main}>
      <div className={notStyle.upperDiv}>
        <h3 className={notStyle.h3}>404</h3>
        <h2 className={notStyle.h2}>You Shall Not Pass!</h2>

        <p className={notStyle.p}>
          The page you are looking for not available!
        </p>

        <Link to="/">
          <button className={notStyle.button}>Go to Home</button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
