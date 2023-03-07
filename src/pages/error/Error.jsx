import Button from "react-bootstrap/Button";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error.module.css";

export default function Error() {
  return (
    <div className={styles.page}>
      <div className={styles.errText}>404</div>
      <img
        className={styles.img}
        src={"https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/DeathStar2.jpg/220px-DeathStar2.jpg"}
        alt="img"
      />
      <Link to="/">
        <Button className={styles.btn} variant="success" size="lg">
          <div className={styles.text}>Return</div>
        </Button>
      </Link>
    </div>
  );
}
