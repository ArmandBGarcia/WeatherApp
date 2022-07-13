import React from "react";
import Searchbar from "../components/SearchBar";
import Cards from "../components/Cards";
import styles from "./styles/Home.module.css";
// import { Route, Routes, useParams } from "react-router-dom";
const Home = ({ cities, onClose, onSearch }) => {
  return (
    <div className={styles.container}>
      <Searchbar onSearch={onSearch} />
      <div className={styles.cards}>
        <Cards cities={cities} onClose={onClose} />
      </div>
    </div>
  );
};

export default Home;
