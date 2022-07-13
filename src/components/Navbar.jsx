import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
      </nav>
    </div>
  );
};

export default Navbar;
