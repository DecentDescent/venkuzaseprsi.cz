import Head from "../Head";
import styles from "./Header.scss";
import classnames from "classnames";
import { useState } from "react";

function Header() {
  const [navState, navToggle] = useState(false);

  return (
    <>
      <div
        className={styles["header__nav"]}
        onClick={() => navToggle(!navState)}
      >
        <a>
          <svg viewBox="0 0 64 64">
            <rect
              height="6"
              rx="3"
              width="54"
              x="5"
              y="6"
              className={styles["scale"]}
            />
            <rect height="6" rx="3" width="60" x="2" y="29" />
            <rect
              height="6"
              rx="3"
              width="54"
              x="5"
              y="52"
              className={styles["scale"]}
            />
          </svg>
        </a>
      </div>
      <nav className={classnames({ [styles["nav--opened"]]: navState })}>
        <div className={styles["nav__image"]}>
          <div className={styles["image__mask"]}>
            venku
            <br />
            zase
            <br />
            prshi
          </div>
        </div>
        <div className={styles["nav__content"]}>
          <ul>
            <li>
              <a href="#">Domů</a>
            </li>
            <li>
              <a href="#">Náhodný záznam</a>
            </li>
            <li>
              <a href="#">Tracklist</a>
            </li>
            <li>
              <a href="#">O blogu</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
