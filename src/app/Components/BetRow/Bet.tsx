import React from "react";
import Image from "next/image";
import token from "@/app/img/New Black.svg";
import Styles from "./sass/Bet.module.scss";

export const Bet: React.FC = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.token}>
        <Image src={token} alt="" />
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
