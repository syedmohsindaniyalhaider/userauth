import React, { useState, useEffect, useContext } from "react";
import CourseContext from "../../Context/UserContext";
import styles from "./style.module.css";
const Dashboard = () => {
  const courseCtx = useContext(CourseContext);
  const [allCourses, setAllCourses] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getAllCourses = async () => {
    setLoading(true);
    setError(null);
    try {
      const url =
        "https://usersauth-58fb3-default-rtdb.firebaseio.com/courses.json";
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Something went Wrong!");
      }
      const data = await res.json();
      const loadedCourses = [];
      for (const key in data) {
        loadedCourses.push({
          courseId: key,
          course: data[key]?.course,
          name: data[key]?.firstName,
          isCompleted: data[key]?.isCompleted,
        });
      }
      setAllCourses(loadedCourses);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const getAllUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const url =
        "https://usersauth-58fb3-default-rtdb.firebaseio.com/users.json";
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Something went Wrong!");
      }
      const data = await res.json();
      const loadedCourses = [];
      for (const key in data) {
        loadedCourses.push({
          id: key,
          firstName: data[key]?.firstName,
          lastName: data[key]?.lastName,
          email: data[key]?.email,
        });
      }
      setAllUsers(loadedCourses);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAllCourses();
    getAllUsers();
    console.log("Context", courseCtx);
  }, []);

  return (
    <>
      <div className={styles.grid}>
        <div className={styles.block}>
          <h2 className="text-center">Courses</h2>
          <table>
            <thead>
              <tr>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
              {allCourses?.map((item) => (
                <tr key={item?.courseId}>
                  <td>{item?.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.block}>
          <h2 className="text-center">Users</h2>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allUsers?.map((item) => (
                <tr key={item?.id}>
                  <td>{item?.firstName}</td>
                  <td>{item?.lastName}</td>
                  <td>{item?.email}</td>
                  <td>
                    <button className={styles.give}>Accept</button>
                    <button className={styles.cancel}>Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
