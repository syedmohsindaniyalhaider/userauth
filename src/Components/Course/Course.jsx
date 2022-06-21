import React, { useContext, useState } from "react";
import Input from "../../UI/Input/Input";
import styles from "./style.module.css";

const Course = ({ userData }) => {
  const [addCourse, setAddCourse] = useState("");

  const addTodo = async (course) => {
    await fetch(
      "https://usersauth-58fb3-default-rtdb.firebaseio.com/courses.json",
      {
        method: "POST",
        body: JSON.stringify(course),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };
  const handleClick = (e) => {
    e.preventDefault();
    const newCourse = {
      userId: userData[0].id,
      firstName: userData[0].firstName,
      course: addCourse,
      isCompleted: false,
    };
    addTodo(newCourse);
    setAddCourse("");
  };
  return (
    <>
      <div className={styles.block}>
        <h2>Add Course</h2>
        <Input
          name="todo"
          value={addCourse}
          onChange={(e) => {
            setAddCourse(e.target.value);
          }}
          error={addCourse === "" ? "* Please enter a course" : ""}
        />
        <button
          className={addCourse === "" ? styles.disable : styles.button}
          onClick={handleClick}
          disabled={addCourse === "" ? true : false}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default Course;
