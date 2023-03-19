import React from "react";
import styles from "./home.module.css";
import usdcard from "../../assets/images/usdcard.svg";

function gstmiddle() {
  return (
    <div className={styles.gstM1}>
      <div className={styles.taglineM}>
        <p>Cards that work globally</p>
        <h1>Physical & Virtual Cards <span>That Works.</span></h1>
        <div className={styles.gspMDwn}>
          <button>
            <a href="">Download App</a>
          </button>
          <p>Sign In</p>
        </div>
      </div>
      <img src={usdcard} alt="" />
    </div>
  );
}

export default gstmiddle;
