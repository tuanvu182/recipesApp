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
        <h3 className="recipes__heading">KQ tìm kiếm</h3>
        <hr />
        <RecipesList />
      </section>
      <section className="recipes recipes--3">
        <h3 className="recipes__heading">Món của bạn</h3>
        <hr />
        <RecipesList />
      </section>
    </React.Fragment>
  );
};

export default Recipes;
