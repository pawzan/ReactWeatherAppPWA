import React, { useState } from "react";
import "./WeatherComponent.css";
import {
  AiFillHeart,
  AiOutlineConsoleSql,
  AiOutlineHeart,
  AiOutlineSearch,
  AiFillDelete,
} from "react-icons/ai";

import Input from "../Input/Input";
import kelvintoCelusis from "../../helpers/tempConversion";

const WeatherComponent = ({
  data,
  city,
  setCity,
  setFavoriteCity,
  favoritesCity,
}) => {
  const hasCity = favoritesCity.some((item) => item.name === city);

  console.log(data);

  const changeLike = () => {
    setFavoriteCity([...favoritesCity, data]);
  };

  const changeLikeDelate = () => {
    setFavoriteCity(favoritesCity.filter((element) => element.name !== city));
  };

  const cities = JSON.parse(localStorage.getItem("favoritesCity"));
  const cityFromLocalForOffline = cities.find((item) => item.name === city);

  return (
    <div className="weatherComponent">
      <Input setCity={setCity} city={city} />
      {data.weather !== undefined ? (
        <>
          <div className="weatherHeart">
            {hasCity ? (
              <AiFillHeart size={44} color="red" onClick={changeLikeDelate} />
            ) : (
              <AiOutlineHeart size={44} color="red" onClick={changeLike} />
            )}
          </div>
          <div className="weatherLocation">{data?.name}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <div className="weatherPhoto">
              <img src={`icons/${data?.weather[0].icon}.png`} />
            </div>
            <div className="weatherDisplay">
              {kelvintoCelusis(data?.main?.temp)} ℃
            </div>
          </div>
        </>
      ) : navigator.onLine === false && cityFromLocalForOffline ? (
        <>
          <div className="weatherHeart">
            {hasCity ? (
              <AiFillHeart size={44} color="red" onClick={changeLikeDelate} />
            ) : (
              <AiOutlineHeart size={44} color="red" onClick={changeLike} />
            )}
          </div>
          <div className="weatherLocation">{cityFromLocalForOffline?.name}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "20px",
              justifyContent: "center",
            }}
          >
            <div className="weatherPhoto">
              <img
                src={`icons/${cityFromLocalForOffline?.weather[0].icon}.png`}
              />
            </div>
            <div className="weatherDisplay">
              {kelvintoCelusis(cityFromLocalForOffline?.main.temp)} ℃
            </div>
          </div>
        </>
      ) : (
        <div className="weatherDisplay">
          {navigator.onLine
            ? "Wpisz poprawną nazwę miasta"
            : "Jesteś offline, spróbuj później"}
        </div>
      )}
    </div>
  );
};
export default WeatherComponent;
