import React, { useState } from "react";
import Form from "../SignInForm/Form";
import styles from "./style.module.css";
const Http = ({ userExist, setUserExist }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const loadUsers = async () => {
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
          email: data[key]?.email,
          password: data[key]?.password,
        });
      }
      const matchUser = loadedUsers.filter(
        (user) => user.email === signInEmail && user.password === signInPassword
      );
      const boolUserMatch = matchUser.length > 0 ? true : false;
      console.log("Users", loadedUsers);
      setUserExist(boolUserMatch);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  return (
    <Form
      userExist={userExist}
      setSignInEmail={setSignInEmail}
      setSignInPassword={setSignInPassword}
      loadUsers={loadUsers}
      loading={loading}
      error={error}
    />
  );
};

export default Http;
