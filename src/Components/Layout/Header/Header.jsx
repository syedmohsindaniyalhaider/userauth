import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
const Header = ({ setUserExist, userData, isAdmin }) => {
  return (
    <div className={styles.header}>
      <div className={styles.navigate}>
        <ul className={styles.list}>
          <li>
            <Link
              className={styles.items}
              to={isAdmin ? "/home" : `/home/${userData[0]?.id}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={styles.items}
              to={isAdmin ? "/course" : `/course/${userData[0]?.id}`}
            >
              Course
            </Link>
          </li>
        </ul>
        <Link
          to="/"
          onClick={() => setUserExist(null)}
          className={styles.button}
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Header;
