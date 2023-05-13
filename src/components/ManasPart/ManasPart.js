import React from "react";
import styles from "./ManasPart.module.css";

const ManasPart = () => {
  return (
    <div className={styles.parent_manasPart}>
      <div className="container">
        <div className={styles.child_manasPart}></div>
      </div>
    </div>
  );
};

export default ManasPart;
