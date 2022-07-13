import React from "react";
import Card from "../components/Card";
import styles from ".././components/styles/Cards.module.css";

const Cards = ({ cities, onClose }) => {
  return (
    <div className={styles.container}>
      {cities.map((c) => (
        <Card
          key={c.id}
          id={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          weather={c.weather}
          onClose={() => onClose(c.id)}
        />
      ))}
    </div>
  );
};

export default Cards;
