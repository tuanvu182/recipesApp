import React, { useState } from "react";
import "./RecipeAddStep.scss";

const RecipeAddStep = () => {
  const [methods, setMethods] = useState([]);
  const [context, setContext] = useState("");

  const onAdd = () => {
    if (context !== "") {
      setMethods([...methods, context]);
      setContext("");
    }
  };

  const onDelete = e => {
    let index = e.target.previousSibling.dataset.key;
    let newMethods = [...methods];
    newMethods.splice(index, 1);
    setMethods(newMethods);
  };

  const Step = (context, key) => {
    return (
      <li className="recipeAddStep__item" key={key}>
        <p className="recipeAddStep__info" data-key={key}>
          + {context}
        </p>
        <span onClick={e => onDelete(e)} className="recipeAddStep__remove">
          Xóa
        </span>
      </li>
    );
  };

  return (
    <React.Fragment>
      <label className="recipeAddStep__title">Cách làm:</label>
      <textarea
        onChange={e => {
          setContext(e.target.value);
        }}
        value={context}
        placeholder="Nhập cách làm..."
        className="recipeAddStep__context"
        name="recipeName"
      ></textarea>
      <button
        type="button"
        className="recipeAddStep__btn"
        onClick={() => onAdd()}
      >
        Thêm
      </button>
      <ul className="recipeAddStep__contain">
        {methods.map((method, index) => {
          return Step(method, index);
        })}
      </ul>
    </React.Fragment>
  );
};

export default RecipeAddStep;
