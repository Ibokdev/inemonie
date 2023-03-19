import React from "react";
import styles from "../Home/home.module.css";
import gsp from "../../assets/images/gsp.svg";

function gst() {
  return (
    <div className={styles.get1}>
      <div className={styles.tagline}>
        <p>Send money to anyone</p>
        <h1>
          <span>Fast</span> Transfers.<span>Safe</span> Cards. Cash Backs.
        </h1>
        <div className={styles.gspDwn}>
          <button><a href="">Download App</a></button>
          <p>Sign In</p>
        </div>
      </div>
      <img src={gsp} alt="" />
    </div>
  );
}

export default gst;
