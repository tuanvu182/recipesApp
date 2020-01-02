import React from "react";
import "./RecipeDetail.scss";

import RecipeIngridient from "./recipe-ingredient/RecipeIngredient";
import RecipeMethod from "./recipe-method/RecipeMethod";

const RecipeDetail = () => {
  return (
    <section className="recipeDetail">
      <h2 className="recipeDetail__header">RecipeDetail</h2>
      <hr />
      <h3 className="recipeDetail__title">Ingredients</h3>
      <ul>
        <li>
          1. Táo (<span>20 units</span>)
        </li>
        <li>
          2. Táo (<span>20 units</span>)
        </li>
        <li>
          3. Táo (<span>20 units</span>)
        </li>
        <li>
          4. Táo (<span>20 units</span>)
        </li>
      </ul>
      <h3 className="recipeDetail__title">How to make</h3>
      <ul>
        <li>Bước 1: Rửa táo</li>
        <li>Bước 2: Rửa táo</li>
        <li>Bước 3: Rửa táo</li>
        <li>Bước 4: Rửa táo</li>
      </ul>
    </section>
  );
};

export default RecipeDetail;
