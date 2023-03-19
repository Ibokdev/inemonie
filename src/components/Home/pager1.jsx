import React from "react";
import styles from "./home.module.css";
import casual from "../../assets/images/casualimage.svg";

function Pager1() {
  return (
    <div className={styles.pager1grid}>
      <div className={styles.col34}>
        <h5>Bills Payment</h5>
        <p>
          Life could be hard but making payments shouldn't. Pay for Power
          supply, Internet bundles or Cable TV subscriptions at your comfort
          zone. With Inemoni, we make payment of bills easily accessible to
          everyone through our agents.
        </p>
        <button>
          <a href="">Download App</a>
        </button>
      </div>
      <div className={styles.col30}>
        <img src={casual} alt="" />
      </div>
      <div className={styles.col35}>
        <div className="">
          <h5>Accept Payments</h5>
          <p>
            Easily receive money from anyone, anytime and anywhere in the world.
          </p>
          <a href="">Learn More</a>
        </div>
        <div id={styles.moneyTransfer}>
          <h5>Money Transfer</h5>
          <p>
            Make single or bulk transfers to bank accounts from your Inemoni
            dashboard. Your transfer goes through seamlessly with Inemoni.
          </p>
          <a href="">Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default Pager1;
