import React from "react";
import "./RecipesItem.scss";
import { Link } from "react-router-dom";

const RecipesItem = () => {
  return (
    <Link to="/recipeDetail/:id" className="recipesItem">
      <p className="recipesItem__img">
        <img
          src="https://vnn-imgs-f.vgcloud.vn/2019/05/23/14/cach-lam-bun-cha-don-gian-tai-nha.jpg"
          alt="main"
        ></img>
      </p>
      <div className="recipesItem__info">
        <p className="recipesItem__title">Bun Cha</p>
        <p className="recipesItem__content">
          Bún chả is a Vietnamese dish of grilled pork and noodle, which is
          thought to have originated from Hanoi, Vietnam.
        </p>
      </div>
    </Link>
  );
};

export default RecipesItem;
