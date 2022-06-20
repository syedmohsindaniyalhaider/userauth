import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../Home/Home";
import Course from "../../Course/Course";
import Registration from "../Registration/Registration";
import PageNotFound from "../PageNotFound/PageNotFound";
import SignIn from "../Registration/SignIn/SignIn";
import SignUp from "../Registration/SignUp/SignUp";
const Navigation = ({ userExist, setUserExist }) => {
  console.log("From Navigation Exist::", userExist);
  return (
    <Routes>
      {userExist ? (
        <Route path="/signin" element={<Navigate replace to="/home" />} />
      ) : (
        <Route path="/" element={<Navigate replace to="/signin" />} />
      )}
      <Route
        exact
        path="/"
        element={
          <Registration userExist={userExist} setUserExist={setUserExist} />
        }
      >
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Route>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/course" element={<Course />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Navigation;
