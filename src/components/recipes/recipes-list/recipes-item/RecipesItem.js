import React from "react";
import "./RecipesItem.scss";

const RecipesItem = () => {
  return (
    <div className="recipesItem">
      <p className="recipesItem__img">
        <img src="https://vnn-imgs-f.vgcloud.vn/2019/05/23/14/cach-lam-bun-cha-don-gian-tai-nha.jpg"></img>
      </p>
      <div className="recipesItem__info">
        <p className="recipesItem__title">Bun Cha</p>
        <p className="recipesItem__content">
          Bún chả is a Vietnamese dish of grilled pork and noodle, which is
          thought to have originated from Hanoi, Vietnam.
        </p>
      </div>
    </div>
  );
};

export default RecipesItem;
