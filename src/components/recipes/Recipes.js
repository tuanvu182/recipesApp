import React from "react";
import "./Recipes.scss";

import RecipesSearch from "./recipes-search/RecipesSearch";
import RecipesList from "./recipes-list/RecipesList";

const Recipes = () => {
  return (
    <React.Fragment>
      <section className="recipes recipes--1">
        <RecipesSearch />
      </section>
      <section className="recipes recipes--2">
        <RecipesList />
      </section>
    </React.Fragment>
  );
};

export default Recipes;
