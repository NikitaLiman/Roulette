"use client";
import React from "react";
import Styles from "./sass/Card.module.scss";
import diamond from "@/app/img/Vector (5).svg";
import token from "@/app/img/New Black.svg";
import Image from "next/image";
interface Props {
  title: string;
  pays: number;
  backgroundColor: string;
}

export const Card: React.FC<Props> = ({ title, pays, backgroundColor }) => {
  const userList = [
    { icon: diamond, name: "user", token: token, count: "100.00" },
    { icon: diamond, name: "user", token: token, count: "80.00" },
    { icon: diamond, name: "user", token: token, count: "50.00" },
    { icon: diamond, name: "user", token: token, count: "0.80" },
  ];
  return (
    <div className={Styles.Card}>
      <div style={{ backgroundColor: backgroundColor }} className={Styles.bet}>
        <h1>BET ON {title}</h1>
        <p>PAYS {pays}X</p>
      </div>
      <div className={Styles.bestTotal}>
        <p>4 Bets total</p>
        <div className={Styles.tokenBlock}>
          <Image src={token} alt="" />
          <span>100.00</span>
        </div>
      </div>
      <div className={Styles.usersBets}>
        {userList.map((item, i) => (
          <div
            style={i === 1 ? { backgroundColor: "#2D323C" } : {}}
            key={i}
            className={Styles.usersBets__rows}
          >
            <div className={Styles.user}>
              <Image src={item.icon} alt="" />
              <p>User</p>
            </div>
            <div className={Styles.token}>
              <Image src={item.token} alt="" />
              <p>{item.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
