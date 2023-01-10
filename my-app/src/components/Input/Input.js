import React, { useState } from "react";
import "./Input.css";
import {
  AiFillHeart,
  AiOutlineConsoleSql,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";

const Input = ({ city, setCity }) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleButton = () => {
    setCity(input);
    setInput("");
  };

  return (
    <div className="Input">
      <input
        type="text"
        placeholder="Wyszukaj miasto"
        onChange={handleChange}
        value={input}
      ></input>
      <button className="InputButton" onClick={handleButton}>
        <AiOutlineSearch />
      </button>
    </div>
  );
};

export default Input;
