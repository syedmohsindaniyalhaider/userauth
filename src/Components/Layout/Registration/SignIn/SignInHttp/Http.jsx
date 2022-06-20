import React, { useState } from "react";
import Form from "../SignInForm/Form";
import styles from "./style.module.css";
const Http = ({ userExist, setUserExist, setUserData, setIsAdmin }) => {
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
          firstName: data[key]?.firstName,
          email: data[key]?.email,
          password: data[key]?.password,
          roles: data[key]?.roles,
        });
      }
      const matchUser = loadedUsers.filter(
        (user) => user.email === signInEmail && user.password === signInPassword
      );
      const isAdmin = matchUser[0].roles[0] === "admin" ? true : false;
      const boolUserMatch =
        matchUser.length > 0 && matchUser.length < 2 ? true : false;
      setUserExist(boolUserMatch);
      setUserData(matchUser);
      setIsAdmin(isAdmin);
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
