import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";
import styles from "./style.module.css";
const GreenPass = ({ userData }) => {
  return (
    <div className={styles.block}>
      <h2>Apply For Green Pass</h2>
      <button className={styles.button} type="button">
        Apply
      </button>
    </div>
  );
};

export default GreenPass;
