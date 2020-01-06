import React from "react";
import "./RecipesList.scss";

import RecipesItem from "./recipes-item/RecipesItem";

const RecipesList = props => {
  return (
    <div className="recipesList">
      {props.lists.map((list, index) => {
        return <RecipesItem key={index} list={list} />;
      })}
    </div>
  );
};

export default RecipesList;
