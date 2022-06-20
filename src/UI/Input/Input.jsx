import React from "react";
import styles from "./Input.module.css";

const Input = ({
  label,
  value,
  type = "text",
  name,
  className = "",
  error,
  onChange = () => {},
  onBlur = () => {},
}) => {
  return (
    <>
      <div className={styles["input-block"]}>
        <label>{label}</label>
        <div>
          <input
            className={`${className} ${styles.input}`}
            type={type}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
          <div>
            <small className={styles.error}>{error}</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
