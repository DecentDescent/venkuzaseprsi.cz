import styles from "./Header.scss";
import classnames from "classnames";
import { useState } from "react";

function Header(props) {
  const [navState, navToggle] = useState(false);

  return (
    <header
      className={classnames({
        [styles["header"]]: true,
        [styles["header--home"]]: props.type === "home"
      })}
    >
      <div className={styles["header__logo"]}>
        <h1>venku zase prší</h1>
      </div>
      <div className={styles["header__toggle"]}>
        <svg
          viewBox="0 0 64 64"
        >
          <g
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-width="4"
          >
            <path d="m22 32h26" />
            <path d="m16 48h32" />
            <path d="m16 16h32" />
          </g>
        </svg>
      </div>
    </header>
  );
}

export default Header;
