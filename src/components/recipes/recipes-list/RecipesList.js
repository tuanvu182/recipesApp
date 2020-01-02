import React from "react";
import "./RecipesList.scss";

import RecipesItem from "./recipes-item/RecipesItem";

const RecipesList = () => {
  return (
    <div className="recipesList">
      <RecipesItem />
      <RecipesItem />
      <RecipesItem />
      <RecipesItem />
      <RecipesItem />
      <RecipesItem />
      <RecipesItem />
    </div>
  );
};

export default RecipesList;
