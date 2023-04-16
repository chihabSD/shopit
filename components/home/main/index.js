import React from "react";

import styles from "./styles.module.scss";
import MainSwiper from "./swiper";
import Offers from "./offers";
import Menu from "./Menu";
export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>header</div>
      <Menu />
      <MainSwiper />
      <Offers />
      <div className={styles.user}> user </div>
    </div>
  );
}
