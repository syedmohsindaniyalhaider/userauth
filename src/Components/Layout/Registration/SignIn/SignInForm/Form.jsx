import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../../../UI/Input/Input";
import useInput from "../../../../../Hooks/use-input";
import styles from "./style.module.css";
const Form = ({
  userExist,
  setSignInEmail,
  setSignInPassword,
  loadUsers,
  loading,
  error,
}) => {
  const {
    value: email,
    hasError: emailHasError,
    isValid: emailIsValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim().includes("@"));
  const {
    value: password,
    hasError: passwordHasError,
    isValid: passwordIsValid,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = emailIsValid && passwordIsValid;
  const submitHandler = (e) => {
    e.preventDefault();
    loadUsers();
    resetEmail();
    resetPassword();
  };
  return (
    <form onSubmit={submitHandler}>
      <h2 className="form-head">Sign In</h2>
      <Input
        label="Email"
        name="email"
        value={email}
        onChange={(e) => {
          emailChangeHandler(e);
          setSignInEmail(e.target.value);
        }}
        onBlur={emailBlurHandler}
        error={emailHasError ? "* Enter a valid Email" : ""}
      />
      <Input
        label="Password"
        name="password"
        value={password}
        type="password"
        onChange={(e) => {
          passwordChangeHandler(e);
          setSignInPassword(e.target.value);
        }}
        onBlur={passwordBlurHandler}
        error={passwordHasError ? "* Enter a valid Password" : ""}
      />
      <button
        disabled={!formIsValid}
        className={!formIsValid ? styles["disable-submit"] : styles.submit}
      >
        Sign In
      </button>
      <div>
        {!loading && !userExist && userExist !== null && (
          <span>User not found!</span>
        )}
        {loading && <span>Loading...</span>}
        {!loading && <span>{error}</span>}
      </div>
    </form>
  );
};

export default Form;
