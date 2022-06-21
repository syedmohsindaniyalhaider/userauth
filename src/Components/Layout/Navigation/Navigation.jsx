import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../Home/Home";
import Course from "../../Course/Course";
import Registration from "../Registration/Registration";
import PageNotFound from "../PageNotFound/PageNotFound";
import SignIn from "../Registration/SignIn/SignIn";
import SignUp from "../Registration/SignUp/SignUp";
import GreenPass from "../../GreenPass/GreenPass";
const Navigation = ({
  userExist,
  setUserExist,
  userData,
  setUserData,
  isAdmin,
  setIsAdmin,
}) => {
  return (
    <Routes>
      {userExist ? (
        <Route
          path="/signin"
          element={
            <Navigate
              replace
              to={isAdmin ? "/home" : `/home/${userData[0]?.id}`}
            />
          }
        />
      ) : (
        <Route path="/" element={<Navigate replace to="/signin" />} />
      )}
      <Route
        exact
        path="/"
        element={
          <Registration
            userExist={userExist}
            setUserExist={setUserExist}
            setUserData={setUserData}
            setIsAdmin={setIsAdmin}
          />
        }
      >
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Route>
      <Route
        exact
        path={isAdmin ? "/home" : `/home/${userData[0]?.id}`}
        element={<Home isAdmin={isAdmin} userData={userData} />}
      />
      <Route
        exact
        path={isAdmin ? "/course" : `/course/${userData[0]?.id}`}
        element={<Course userData={userData} />}
      />
      <Route
        exact
        path={isAdmin ? "/green-pass" : `/green-pass/${userData[0]?.id}`}
        element={<GreenPass userData={userData} />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Navigation;
