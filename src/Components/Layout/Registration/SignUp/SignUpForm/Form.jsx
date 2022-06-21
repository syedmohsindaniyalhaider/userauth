import Input from "../../../../../UI/Input/Input";
import useInput from "../../../../../Hooks/use-input";
import styles from "./style.module.css";
import { useContext, useEffect } from "react";

const Form = ({
  setSignUpEmail,
  setSignUpPassword,
  userAlreadyExist,
  checkUser,
  loading,
  error,
}) => {
  const {
    value: firstName,
    hasError: firstNameHasError,
    isValid: firstNameIsValid,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: lastName,
    hasError: lastNameHasError,
    isValid: lastNameIsValid,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");
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
  const {
    value: confirmPassword,
    hasError: confirmPasswordHasError,
    isValid: confirmPasswordIsValid,
    inputChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: resetConfirmPassword,
  } = useInput((value) => value.trim() !== "");

  let formIsValid =
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid;

  let passwordMatch = password === confirmPassword;

  let userDetails = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    roles: ["user"],
  };

  useEffect(() => {}, [userAlreadyExist]);

  const submitHandler = (e) => {
    e.preventDefault();
    checkUser(userDetails);
    resetFirstName();
    resetLastName();
    resetEmail();
    resetPassword();
    resetConfirmPassword();
  };
  return (
    <form onSubmit={submitHandler}>
      <h2 className="form-head">Sign Up</h2>
      <Input
        label="First Name"
        name="firstname"
        value={firstName}
        onChange={firstNameChangeHandler}
        onBlur={firstNameBlurHandler}
        error={firstNameHasError ? "* Enter a valid first name" : ""}
      />
      <Input
        label="Last Name"
        name="lastname"
        value={lastName}
        onChange={lastNameChangeHandler}
        onBlur={lastNameBlurHandler}
        error={lastNameHasError ? "* Enter a valid last name" : ""}
      />
      <Input
        label="Email"
        name="email"
        value={email}
        onChange={(e) => {
          emailChangeHandler(e);
          setSignUpEmail(e.target.value);
        }}
        onBlur={emailBlurHandler}
        error={emailHasError ? "* Enter a valid email" : ""}
      />
      <Input
        label="Password"
        name="password"
        value={password}
        type="password"
        onChange={(e) => {
          passwordChangeHandler(e);
          setSignUpPassword(e.target.value);
        }}
        onBlur={passwordBlurHandler}
        error={passwordHasError ? "* Enter a valid password" : ""}
      />
      <Input
        label="Confirm Password"
        name="confirmpassword"
        value={confirmPassword}
        type="password"
        onChange={confirmPasswordChangeHandler}
        onBlur={confirmPasswordBlurHandler}
        className={confirmPasswordHasError ? styles.invalid : ""}
        error={confirmPasswordHasError ? "* Enter a valid password" : ""}
      />
      <button
        disabled={!formIsValid || !passwordMatch}
        className={
          !formIsValid || !passwordMatch
            ? styles["disable-submit"]
            : styles.submit
        }
      >
        Sign Up
      </button>
      {passwordMatch ? "" : <p>Password does not match</p>}
      {loading && !userAlreadyExist && <p>Loading...</p>}
      {userAlreadyExist && <p>User already exists</p>}
    </form>
  );
};

export default Form;
