import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import footerStyle from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={footerStyle.container}>
      <ul className={footerStyle.ul}>
        <a href="" className={footerStyle.a}>
          <FaSquareXTwitter />
        </a>
        <a className={footerStyle.a} href="">
          <FaFacebook />
        </a>
        <a className={footerStyle.a} href="">
          {" "}
          <FaInstagramSquare />
        </a>
        <a className={footerStyle.a} href="">
          {" "}
          <FaGithubSquare />
        </a>
      </ul>

      <h5 className={footerStyle.h5}>© Copyright 2025</h5>
    </div>
  );
};

export default Footer;
