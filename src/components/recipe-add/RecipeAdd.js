import React from "react";
import { Link } from "react-router-dom";
import "./RecipeAdd.scss";

import RecipeAddImg from "./recipe-addImg/RecipeAddImg";
import RecipeAddIngre from "./recipe-addIngre/RecipeAddIngre";
import RecipeAddStep from "./recipe-addStep/RecipeAddStep";

const RecipeAdd = props => {
  console.log(props.someprops);
  return (
    <section className="recipeAdd">
      <h3 className="recipeAdd__title">Recipe Add</h3>
      <hr />
      <form className="recipeAdd__form">
        <div className="recipeAdd__left">
          <p className="recipeAdd__name">Tên món</p>
          <input className="recipeAdd__nameinput" name="recipeName"></input>
          <p className="recipeAdd__name">Miêu tả</p>
          <textarea
            minLength="20"
            className="recipeAdd__desc"
            name="recipeDesc"
          ></textarea>
          <br></br>

          <RecipeAddImg />
          <RecipeAddIngre />
        </div>
        <div className="recipeAdd__right">
          <RecipeAddStep />
          <div className="recipeAdd__btngroup">
            <Link to="/" className="recipeAdd__btn recipeAdd__btn--1">
              Hủy
            </Link>
            <p className="recipeAdd__btn recipeAdd__btn--2" type="submit">
              Đồng ý
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RecipeAdd;
