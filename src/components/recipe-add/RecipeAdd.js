import React from "react";
import "./RecipeAdd.scss";

import RecipeAddImg from "./recipe-addImg/RecipeAddImg";
import RecipeAddIngre from "./recipe-addIngre/RecipeAddIngre";
import RecipeAddStep from "./recipe-addStep/RecipeAddStep";

const RecipeAdd = () => {
  return (
    <section className="recipeAdd">
      <h3 className="recipeAdd__title">Recipe Add</h3>
      <hr />
      <form className="recipeAdd__form">
        <div className="recipeAdd__left">
          <p className="recipeAdd__name">Tên món</p>
          <input className="recipeAdd__nameinput" name="recipeName"></input>
          <br></br>

          <RecipeAddImg />
          <RecipeAddIngre />
        </div>
        <div className="recipeAdd__right">
          <RecipeAddStep />
          <div>
            <button>Hủy</button>
            <button type="submit">Đồng ý</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RecipeAdd;
