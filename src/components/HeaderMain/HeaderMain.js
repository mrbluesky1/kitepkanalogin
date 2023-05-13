import React from "react";
import styles from "./HeaderMain.module.css";

const HeaderMain = () => {
  return (
    <div className={styles.parent_header}>
      <div className="container">
        <div className={styles.child_header}>
          <h1>Заголовок</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Fermentum maecenas
            scelerisque placerat adipiscing neque
          </p>
          <span>
            Lorem ipsum dolor sit amet consectetur. Viverra nunc vulputate
            vestibulum vitae eget tellus bibendum commodo sed. Cursus mauris
            bibendum nulla porta volutpat.
          </span>
          <div>
            <button>Смотреть все книги</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
