import React from "react";
import Form from "./SignInForm/Form";
import Http from "./SignInHttp/Http";
const SignIn = ({ userExist, setUserExist }) => {
  return (
    <>
      <Http userExist={userExist} setUserExist={setUserExist} />
    </>
  );
};

export default SignIn;
