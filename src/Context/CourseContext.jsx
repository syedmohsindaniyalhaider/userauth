import { createContext } from "react";

const initialContext = {
  courses: [],
  addCourse: (item) => {},
  removeCourse: (id) => {},
  clearCourses: () => {},
};

const CourseContext = createContext(initialContext);

export default CourseContext;
