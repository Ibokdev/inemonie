import React from "react";
import styles from "./home.module.css";
import ngn from "../../assets/images/ngn.svg";
import appstore from "../../assets/images/appstore.svg";
import googleplay from "../../assets/images/googleplay.svg";

function footer2() {
  return (
    <div className={styles.footer2}>
      <div className={styles.footerM}>
        <div className={styles.ngn}>
          <img src={ngn} id={styles.ngnpic} alt="" />
          <p>Nigeria</p>
        </div>
        <div className={styles.socials}>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Linkedin</p>
        </div>
      </div>
      <div className={styles.ngn}>
        <div className="">
          <p>© 2022 Inemoni. All right reserved.</p>
        </div>
        <div className={styles.socials}>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Cookie Policy</p>
        </div>
      </div>
      <div className="">
        <img src={appstore} id={styles.store} alt="" />
        <img src={googleplay} id={styles.store} alt="" />
      </div>
    </div>
  );
}

export default footer2;
