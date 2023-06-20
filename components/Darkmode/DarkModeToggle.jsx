"use client";

import React, { useContext } from "react";
import styles from "./darkModeToggle.module.css";
import { ThemeContext } from "@/Context/Context";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  // mode = dark;
  return (
    <div>
      <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🔆</div>
        <div
          className={styles.ball}
          style={mode === "light" ? { left: "2px" } : { right: "2px" }}
        />
      </div>
    </div>
  );
};

export default DarkModeToggle;
