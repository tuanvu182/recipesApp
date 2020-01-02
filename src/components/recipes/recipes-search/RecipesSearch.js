import React from "react";
import "./RecipesSearch.scss";

const RecipesInput = () => {
  return (
    <form className="searchbar">
      <input type="text" placeholder="Tìm món ăn..."></input>
      <button type="submit">Tìm kiếm</button>
    </form>
  );
};

export default RecipesInput;
