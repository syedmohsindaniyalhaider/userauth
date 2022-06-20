import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
const Registration = ({ userExist, setUserExist }) => {
  const [layout, setLayout] = useState(false);
  return (
    <>
      {!userExist && (
        <div className="min-h">
          <div className="text-center">
            <h3>
              React Registration <br /> using Real Time Firebase
            </h3>
          </div>
          <div className="outer-form">
            <div>
              <div className="form">
                <div className="button-group">
                  <Link
                    onClick={() => setLayout(false)}
                    className="left-btn text-center"
                    to="/signin"
                  >
                    Sign In
                  </Link>
                  <Link
                    onClick={() => setLayout(true)}
                    className="right-btn text-center"
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </div>
                {!layout && (
                  <SignIn userExist={userExist} setUserExist={setUserExist} />
                )}
                {layout && <SignUp />}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Registration;
