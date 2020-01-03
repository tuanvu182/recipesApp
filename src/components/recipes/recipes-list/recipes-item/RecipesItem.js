import React from "react";
import "./RecipesItem.scss";
import { Link } from "react-router-dom";

const RecipesItem = props => {
  const { img, title, content, id } = props.list;
  return (
    <Link to={`/recipeDetail/${id}`} className="recipesItem">
      <p className="recipesItem__img">
        <img src={img} alt={title}></img>
      </p>
      <div className="recipesItem__info">
        <p className="recipesItem__title">{title}</p>
        <p className="recipesItem__content">{content}</p>
      </div>
    </Link>
  );
};

export default RecipesItem;
