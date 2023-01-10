import React from "react";
import WeatherComponent from "./components/WeatherComponents/WeatherComponent";
import Input from "./components/Input/Input";
import FavoritesCity from "./components/FavoritesCity/FavoritesCity";
import { useState } from "react";
import { useEffect } from "react";
import getLocalFavorite from "./helpers/getLocalFavorite";

function App() {
  const [city, setCity] = useState("Warsaw");
  const [data, setData] = useState({});
  const [favoritesCity, setFavoriteCity] = useState(getLocalFavorite());

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=52c1189af975d171ec717ce4d77fd0d5`
      );
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, [city]);

  useEffect(() => {
    localStorage.setItem("favoritesCity", JSON.stringify(favoritesCity));
  }, [favoritesCity]);

  return (
    <div className="App">
      <div className="AppContainer">
        <WeatherComponent
          city={city}
          setCity={setCity}
          data={data}
          favoritesCity={favoritesCity}
          setFavoriteCity={setFavoriteCity}
        />
      </div>
      <FavoritesCity
        favoritesCity={favoritesCity}
        setCity={setCity}
        city={city}
        setFavoriteCity={setFavoriteCity}
      />
    </div>
  );
}

export default App;
