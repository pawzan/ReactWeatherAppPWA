import React from "react";
import FavoritesCityItem from "./FavoritesCityItem";
import "./FavoritesCity.css";

const FavoritesCity = ({ favoritesCity, setCity, setFavoriteCity }) => {
  return favoritesCity.map((item, id) => (
    <div className="FavoritesCity" key={id}>
      <FavoritesCityItem
        item={item}
        id={id}
        setCity={setCity}
        favoritesCity={favoritesCity}
        setFavoriteCity={setFavoriteCity}
      />
    </div>
  ));
};
export default FavoritesCity;
