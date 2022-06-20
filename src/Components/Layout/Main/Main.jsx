import React, { useState, useEffect } from "react";
import PreLoader from "../../../UI/PreLoader/PreLoader";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import styles from "./style.module.css";

const Main = () => {
  const [userExist, setUserExist] = useState(null);
  const [loader, setLoader] = useState(undefined);
  const [userData, setUserData] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 2000);
  }, [userData, isAdmin]);
  return (
    <>
      {!loader && <PreLoader />}
      {loader && (
        <>
          {userExist && (
            <Header
              setUserExist={setUserExist}
              userData={userData}
              isAdmin={isAdmin}
            />
          )}
          <div className={styles.navigation}>
            <Navigation
              userExist={userExist}
              setUserExist={setUserExist}
              userData={userData}
              setUserData={setUserData}
              isAdmin={isAdmin}
              setIsAdmin={setIsAdmin}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Main;
