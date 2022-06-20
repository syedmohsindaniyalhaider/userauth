import React, { useState } from "react";
import Input from "../../UI/Input/Input";
import styles from "./style.module.css";

const Course = () => {
  const [addCourse, setAddCourse] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const newCourse = {
      text: addCourse,
      isCompleted: false,
    };
  };
  return (
    <>
      <div className={styles.block}>
        <h2>Add Course</h2>
        <Input
          name="todo"
          value={addCourse}
          onChange={(e) => setAddCourse(e.target.value)}
        />
        <button className={styles.button} onClick={handleClick}>
          Add
        </button>
      </div>
    </>
  );
};

export default Course;
