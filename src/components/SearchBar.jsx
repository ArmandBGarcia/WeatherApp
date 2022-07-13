import React, { useState } from "react";
import styles from "../components/styles/SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");
  return (
    <div className={styles.container}>
      <div></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(city);
          setCity("");
        }}
      >
        <input
          className={styles.inputText}
          type="text"
          placeholder="City..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input className={styles.inputSubmit} type="submit" value="Send" />
      </form>
    </div>
  );
};

export default SearchBar;
