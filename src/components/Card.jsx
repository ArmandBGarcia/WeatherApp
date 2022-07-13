import React from "react";
import { Link } from "react-router-dom";
import styles from "../components/styles/Card.module.css";

const Card = ({ min, max, name, img, onClose, id }) => {
  return (
    <div className={styles.firstContainer}>
      <div className={styles.container}>
        <div className={styles.btn}>
          <button className={styles.btnbtn} onClick={onClose}>
            X
          </button>
        </div>
        <div className={styles.name}>
          <Link to={`/city/${id}`}>
            <h5 className={styles.name2}>{name}</h5>
          </Link>
        </div>
        <div className={styles.temps}>
          <div className={styles.min}>
            <p>Min: </p>
            <p>{min}°</p>
          </div>
          <div className={styles.max}>
            <p>Max: </p>
            <p>{max}°</p>
          </div>
        </div>
        <div className={styles.imgage}>
          <img
            src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
            width="80"
            height="80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
