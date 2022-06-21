import React, { useState, useEffect, useCallback } from "react";
import Dashboard from "../Dashboard/Dashboard";
import styles from "./style.module.css";
const Home = ({ userData, isAdmin }) => {
  const [allCourses, setAllCourses] = useState([]);
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
        console.log("User Data", data[key]?.firstName);
        if (data[key]?.userId === userData[0]?.id) {
          loadedCourses.push({
            courseId: key,
            course: data[key]?.course,
            name: data[key]?.firstName,
            isCompleted: data[key]?.isCompleted,
          });
        }
      }
      console.log("Users Courses", loadedCourses);
      setAllCourses(loadedCourses);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAllCourses();
  }, []);
  return (
    <div>
      {!isAdmin && (
        <h2 className="text-center">Welcome Mr. {userData[0]?.firstName}</h2>
      )}
      {!isAdmin && (
        <>
          {!loading && (
            <div className={styles.block}>
              <h3>Your Courses</h3>
              {allCourses?.map((item) => (
                <p className={styles.items} key={item?.courseId}>
                  {item?.course}
                </p>
              ))}
            </div>
          )}
          {loading && <p>Loading...</p>}
        </>
      )}
      {isAdmin && <Dashboard />}
    </div>
  );
};

export default Home;
