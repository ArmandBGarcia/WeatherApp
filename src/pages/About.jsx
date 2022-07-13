import React from "react";
import Navbar from "../components/Navbar.jsx";
import styles from "../pages/styles/About.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Weather App</h1>
        <p>
          This is the weather app, it shows the real-time temperature of
          almostany city in the world.
        </p>
        <p>This app is made with HTML, CSS, JS, React and React Router Dom.</p>
        <p>Is a SPA(single page aplication)</p>
      </div>
    </div>
  );
};

export default About;
