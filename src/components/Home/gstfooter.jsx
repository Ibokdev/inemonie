import React from "react";
import styles from "./home.module.css";

function gstfooter() {
  return (
    <div className={styles.get1}>
      <div className={styles.tagline}>
        <p>Ready to get started?</p>
        <h1>Technology To Keep Our Services <span>99% Uptime</span></h1>
        <div className={styles.gspDwn}>
          <button>
            <a href="">Download App</a>
          </button>
          <p>Sign In</p>
        </div>
      </div>
    </div>
  );
}

export default gstfooter;
