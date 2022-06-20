import React from "react";
import Form from "./SignInForm/Form";
import Http from "./SignInHttp/Http";
const SignIn = ({ userExist, setUserExist, setUserData, setIsAdmin }) => {
  return (
    <>
      <Http
        userExist={userExist}
        setUserExist={setUserExist}
        setUserData={setUserData}
        setIsAdmin={setIsAdmin}
      />
    </>
  );
};

export default SignIn;
