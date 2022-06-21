import React, { useContext, useState } from "react";
import SignUpForm from "../SignUpForm/Form";
const Http = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userAlreadyExist, setUserAlreadyExist] = useState(null);
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const addUser = async (userDetails) => {
    await fetch(
      "https://usersauth-58fb3-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };

  const checkUser = async (user) => {
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
      const loadedUsers = [];
      for (const key in data) {
        loadedUsers.push({
          id: key,
          firstName: data[key]?.firstName,
          email: data[key]?.email,
          password: data[key]?.password,
          roles: data[key]?.roles,
        });
      }
      const matchUser = loadedUsers.filter(
        (user) => user.email === signUpEmail && user.password === signUpPassword
      );

      const boolUserMatch = matchUser.length === 1 ? true : false;
      if (boolUserMatch) {
        setUserAlreadyExist(true);
        return;
      }
      addUser(user);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  return (
    <SignUpForm
      setSignUpEmail={setSignUpEmail}
      setSignUpPassword={setSignUpPassword}
      checkUser={checkUser}
      userAlreadyExist={userAlreadyExist}
      loading={loading}
      error={error}
    />
  );
};

export default Http;
