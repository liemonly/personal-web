import React from "react";
import * as Style from "./navbar.module.scss";
import * as Layout from "../../styles/container.module.scss";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Navbar() {
  const Menu = [
    {
      title: "Resume",
      link: "/resume",
    },
    {
      title: "About",
      link: "/about",
    },
  ];
  return (
    <div className={Style.navbar}>
      <div className={Layout.container}>
        <nav>
          <StaticImage
            src="./logo.png"
            alt="Ryan web"
            placeholder="blurred"
            className={Style.logo}
          />
          <ul>
            {Menu.map((data, index) => (
              <li key={index}>
                <Link to={data.link}>{data.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
