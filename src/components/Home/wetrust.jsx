import React from 'react'
import styles from './home.module.css'
import trustee from "../../assets/images/trustee.svg";

function Wetrust() {
  return (
    <div className={styles.trust}>
        <p>We are trusted by <span>verified</span> businesses</p>
        <img src={trustee} alt=""/>
    </div>
  )
}

export default Wetrust