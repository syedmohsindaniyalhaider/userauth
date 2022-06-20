import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
const Header = ({ setUserExist }) => {
  return (
    <div className={styles.header}>
      <div className={styles.navigate}>
        <ul className={styles.list}>
          <li>
            <Link className={styles.items} to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.items} to="/course">
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
