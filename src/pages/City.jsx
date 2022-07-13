import React from "react";
import { useParams } from "react-router-dom";
import styles from "../pages/styles/City.module.css";

export default function City({ onFilter }) {
  const { cityId } = useParams();
  const city = onFilter(cityId);
  return city ? (
    <div id={styles.container}>
      <h2 id={styles.name}>{city.name}</h2>
      <div id={styles.container02}>
        <div>Temperature: {city.temp} ºC</div>
        <div>Weather: {city.weather}</div>
        <div>Wind: {city.wind} km/h</div>
        <div>Amount of clouds: {city.clouds}</div>
        <div>Latitude: {city.latitud}º</div>
        <div>Longitude: {city.longitud}º</div>
      </div>
    </div>
  ) : (
    <h3>No hay ciudad para mostrar</h3>
  );
}
