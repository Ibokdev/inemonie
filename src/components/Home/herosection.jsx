import React from "react";
import styles from "./home.module.css";
import sidebarimage from "../../assets/images/sidebarimg.svg";

function Herosection() {
  return (
    <section id={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.col50} id={styles.heroArticle}>
          <h1 id={styles.heroHeader}>
            Manage Your Money <span>& Achieve Your Goals</span>
          </h1>
          <p id={styles.heroP}>
            Our user-friendly interface and intuitive features make managing
            your finances a breeze, so you can focus on the things that matter
            most.
          </p>
          <div className={styles.heroBottom}>
            <button>
              <a href="">Get Started</a>
            </button>
            <a id={styles.heroLink} href="">Learn More</a>
          </div>
        </div>
        <div className={styles.col50}>
          <img src={sidebarimage} />
        </div>
      </div>
    </section>
  );
}

export default Herosection;
