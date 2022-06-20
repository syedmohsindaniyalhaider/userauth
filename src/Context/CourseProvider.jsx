import React, { useContext, useReducer } from "react";
import Course from "./CourseContext";

const initialState = {
  courses: [],
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COURSE":
      const updateCourses = state.courses.concat(action.payload);
      return { courses: updateCourses };
    case "REMOVE_COURSE": {
      return state;
    }
    case "CLEAR_COURSES": {
      return initialState;
    }
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(courseReducer, initialState);
  const addCourseHandler = (item) => {
    dispatch({ type: "ADD_COURSE", payload: item });
  };
  const removeCourseHandler = (id) => {
    dispatch({ type: "REMOVE_COURSE", payload: id });
  };

  const clearCoursesHandler = () => {
    dispatch({ type: "CLEAR_COURSES" });
  };

  const courseContext = {
    courses: state.courses,
    addCourse: addCourseHandler,
    removeCourse: removeCourseHandler,
    clearCourses: clearCoursesHandler,
  };

  return (
    <>
      <Course.Provider value={courseContext}>{children}</Course.Provider>
    </>
  );
};

export default UserProvider;
