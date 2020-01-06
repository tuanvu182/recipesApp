import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./RecipeAdd.scss";

import RecipeAddImg from "./recipe-addImg/RecipeAddImg";
import RecipeAddIngre from "./recipe-addIngre/RecipeAddIngre";
import RecipeAddStep from "./recipe-addStep/RecipeAddStep";

const RecipeAdd = props => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const onChange = e => {
    let value = e.target.value;
    switch (e.target.name) {
      case "name":
        setName(value);
        break;
      case "desc":
        setDesc(value);
        break;
      default:
        break;
    }
  };

  return (
    <section className="recipeAdd">
      <h3 className="recipeAdd__title">
        Recipe {props.match.path.split("/")[2]}
        {props.match.path.split("/")[2] === "edit" ? (
          <span>
            <Link to={`/recipeDetail/${props.match.params.id}`}>Quay lại</Link>
          </span>
        ) : null}
      </h3>

      <hr />
      <form className="recipeAdd__form">
        <div className="recipeAdd__left">
          <p className="recipeAdd__name">Tên món</p>
          <input
            className="recipeAdd__nameinput"
            name="name"
            placeholder="Nhập tên món..."
            value={name}
            onChange={e => onChange(e)}
          ></input>
          <p className="recipeAdd__name">Thông tin & xuất xứ</p>
          <textarea
            minLength="20"
            className="recipeAdd__desc"
            name="desc"
            placeholder="Miêu tả món ăn một cách đơn giản..."
            value={desc}
            onChange={e => onChange(e)}
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
            <p
              onClick={() => console.log("OK!!")}
              className="recipeAdd__btn recipeAdd__btn--2"
              type="submit"
            >
              Đồng ý
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default withRouter(RecipeAdd);
