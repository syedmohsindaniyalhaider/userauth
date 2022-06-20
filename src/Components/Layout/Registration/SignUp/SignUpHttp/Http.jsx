import React from "react";
import SignUpForm from "../SignUpForm/Form";

const Http = () => {
  const addUser = async (userDetails) => {
    console.log("User Details::", userDetails);
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
  return <SignUpForm onAddUser={addUser} />;
};

export default Http;
