import React from "react";
import * as Style from "./hero.module.scss";
import * as Layout from "../../../styles/container.module.scss";

export default function Hero() {
  return (
    <div className={Style.hero}>
      <div className={Layout.container}>
        <h1>
          I’m Ryan, a UI/UX Designer based in Jakarta with more than 3 years of
          experiences
        </h1>
        <h2>Currently at KITA &#40;Member of Dexa Group&#41;</h2>
      </div>
    </div>
  );
}
