import React, { useState, useEffect } from "react";
import PreLoader from "../../../UI/PreLoader/PreLoader";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import styles from "./style.module.css";

const Main = () => {
  const [userExist, setUserExist] = useState(null);
  const [loader, setLoader] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 2000);
  });
  return (
    <>
      {!loader && <PreLoader />}
      {loader && (
        <>
          {userExist && <Header setUserExist={setUserExist} />}
          <div className={styles.navigation}>
            <Navigation userExist={userExist} setUserExist={setUserExist} />
          </div>
        </>
      )}
    </>
  );
};

export default Main;
