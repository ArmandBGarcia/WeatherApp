import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import City from "./pages/City";
import Home from "./pages/Home";

const App = () => {
  const [cities, setCities] = useState([]);

  function onSearch(city) {
    //Llamado a la API del clima
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa340a68aaec2a41344c33f139f80ff8`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          let cityFound = cities.find((c) => c.id === city.id);
          if (cityFound) return alert("This city its already on the  list");
          else return setCities((oldCities) => [...oldCities, city]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  function onFilter(cityId) {
    let cityToFind = cities.filter((c) => c.id === parseInt(cityId));
    if (cityToFind.length > 0) {
      return cityToFind[0];
    } else {
      return null;
    }
  }

  return (
    <div>
      <Navbar onSearch={onSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <Home onSearch={onSearch} cities={cities} onClose={onClose} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          exact
          path="/city/:cityId"
          element={<City onFilter={onFilter} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
