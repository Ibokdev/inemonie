import React from "react";
import styles from "./home.module.css";

function footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.attribute}>
        <p>Company</p>
        <ul>
          <li>Cash Withdrawal</li>
          <li>Money Transfer</li>
          <li>Pay Bills</li>
          <li>Savings</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className={styles.attribute}>
        <p>Developers</p>
        <ul>
          <li>Api Documentation</li>
          <li>Api Status </li>
          <li>Api Reference</li>
        </ul>
      </div>
      <div className={styles.attribute}>
        <p>Support</p>
        <ul>
          <li>Give us Feedback</li>
          <li>Help Center</li>
          <li>Live Chat</li>
        </ul>
      </div>
      <div className={styles.attribute}>
        <p>Resources</p>
        <ul>
          <li>FAQ</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className={styles.adrs}>
        <p>Contact</p>
        <ul>
          <li>support@inemoni.com</li>
          <li>No. 67 Bakori road,FHA, Kubwa,Abuja</li>
        </ul>
      </div>
    </div>
  );
}

export default footer;
