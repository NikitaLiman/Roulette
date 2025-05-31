import React from "react";
import Styles from "./sass/Header.module.scss";
import Image from "next/image";
import BlackVector from "@/app/img/Vector.svg";
import WhiteVector from "@/app/img/Vector (1).svg";
import ClownVector from "@/app/img/Originals icons.svg";
interface Props {}

export const Header: React.FC<Props> = () => {
  const iconBricks = [
    { icon: WhiteVector, backgroundColor: "#343843" },
    { icon: BlackVector, backgroundColor: "#FF4242" },
    { icon: WhiteVector, backgroundColor: "#343843" },
    { icon: WhiteVector, backgroundColor: "#47FF69" },
    { icon: WhiteVector, backgroundColor: "#343843" },
    { icon: BlackVector, backgroundColor: "#FF4242" },
    { icon: BlackVector, backgroundColor: "#FF4242" },
    { icon: WhiteVector, backgroundColor: "#343843" },
    { icon: ClownVector, backgroundColor: "#FF4242" },
    { icon: BlackVector, backgroundColor: "#FF4242" },
  ];

  const lastStats = [
    { icon: BlackVector, count: 39, backgroundColor: "#FF4242" },
    { icon: WhiteVector, count: 39, backgroundColor: "#343843" },
    { icon: WhiteVector, count: 9, backgroundColor: "#47FF69" },
    { icon: ClownVector, count: 13, backgroundColor: "#7246D9" },
  ];
  return (
    <div className={Styles.header}>
      <div className={Styles.header__icons}>
        {iconBricks.map((item, i) => (
          <div
            style={{ backgroundColor: item.backgroundColor }}
            key={i}
            className={Styles["header__icons-brick"]}
          >
            <Image src={item.icon} alt="" />
          </div>
        ))}
      </div>

      <div className={Styles.header__stats}>
        <h1 className={Styles["header__stats-title"]}>LAST 100</h1>
        {lastStats.map((item, i) => (
          <div className={Styles["header__stats-item"]} key={i}>
            <div
              style={{ backgroundColor: item.backgroundColor }}
              className={Styles["header__stats-item-icon"]}
            >
              <Image src={item.icon} alt="" />
            </div>
            <div className={Styles["header__stats-item-count"]}>
              <span>{item.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
