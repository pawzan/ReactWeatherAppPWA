import React from "react";
import "./FavoritesCityItem.css";
import getLocalFavorite from "../../helpers/getLocalFavorite";
import kelvintoCelusis from "../../helpers/tempConversion";
import { useEffect } from "react";
import {
  AiFillDelete,
  AiOutlineEye,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";
import { useState } from "react";

const FavoritesCityItem = ({
  item,
  id,
  setCity,
  favoritesCity,
  setFavoriteCity,
}) => {
  const [show, setShow] = useState(false);
  const handleDelate = (city) => {
    setFavoriteCity(favoritesCity.filter((element) => element.name !== city));
  };

  const handleClick = (city) => {
    setCity(city);
  };

  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <div className="FavoritesCityContainer">
      <div className="test">
        <div className="FavoritesLeft">
          <div className="FavoritesCityPhoto">
            <img
              src={`icons/${item?.weather[0]?.icon}.png`}
              width="40px"
              height="40px"
            />
          </div>
          <div className="FavoritesCityName">{item?.name}</div>
          <div className="FavoritesCityTemperatre">
            {kelvintoCelusis(item?.main?.temp)}℃
          </div>
        </div>
        <div className="FavoritesCityOptions">
          <span className="spanIcon" onClick={() => handleDelate(item?.name)}>
            <AiFillDelete size={24} />
          </span>
          <span className="spanIcon" onClick={() => handleClick(item?.name)}>
            <AiOutlineEye size={24} />
          </span>
          <span className="spanIcon" onClick={() => handleShow()}>
            {show ? <AiFillCaretUp size={24} /> : <AiFillCaretDown size={24} />}
          </span>
        </div>
      </div>
      {show ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            fontWeight: "500",
          }}
        >
          <span>
            Temperatura odczuwalna: {kelvintoCelusis(item?.main?.feels_like)}℃
          </span>
          <span>Wilgotność: {item?.main?.humidity} %</span>
          <span>
            Maksymalna temperatura dzisiaj:{" "}
            {kelvintoCelusis(item?.main?.temp_max)}℃
          </span>
          <span>
            Minimalna temperatura dzisiaj:{" "}
            {kelvintoCelusis(item?.main?.temp_min)}℃
          </span>
        </div>
      ) : null}
    </div>
  );
};
export default FavoritesCityItem;
