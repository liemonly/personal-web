import React from "react";
import * as Style from "./content.module.scss";
import * as Layout from "../../../styles/container.module.scss";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Content() {
  return (
    <div className={Style.content}>
      <div className={Layout.container}>
        <section>
          <div>
            <h3>Design is a journey of discovery</h3>
            <p>Showcase and explore creative work</p>
            <Link>Coming Soon</Link>
          </div>
          <StaticImage src="./design.png" alt="Design" placeholder="blurred" />
        </section>
        <section>
          <div>
            <h3>Figma UI UX Design Essentials</h3>
            <p>A Comprehensive Guide to Learning in UI/UX</p>
            <Link>Learn Now</Link>
          </div>
          <StaticImage src="./learn.png" alt="Learn" placeholder="blurred" />
        </section>
      </div>
    </div>
  );
}
