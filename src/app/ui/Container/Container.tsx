import React, { ReactNode } from "react";
import Styles from "./sass/Container.module.scss";

interface Props {
  className?: string;
  children: ReactNode;
}

export const Container: React.FC<Props> = ({ children, className }) => {
  return <div className={`${Styles.container} ${className}`}>{children}</div>;
};
