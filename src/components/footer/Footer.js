import React from "react";
import * as Style from "./footer.module.scss";
import * as Layout from "../../styles/container.module.scss";
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
  return (
    <div className={Style.footer}>
      <div className={Layout.container}>
        <nav>
          <StaticImage
            src="./logo.png"
            alt="Ryan web"
            placeholder="blurred"
            className={Style.logo}
          />
          <p>Ryan Yudha Satria, 2023</p>
        </nav>
      </div>
    </div>
  );
}
