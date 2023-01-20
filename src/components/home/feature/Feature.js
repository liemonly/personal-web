import React from "react";
import * as Style from "./feature.module.scss";
import * as Layout from "../../../styles/container.module.scss";

export default function Feature() {
  const List = [
    {
      title: "Image 1",
    },
    {
      title: "Image 2",
    },
    {
      title: "Image 3",
    },
  ];
  return (
    <div className={Style.feature}>
      <div className={Layout.container}>
        <div className={Style.area}>
          <div className={Style.list}>
          {List.map((data, index) => (
            <div key={index}>{data.title}</div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
