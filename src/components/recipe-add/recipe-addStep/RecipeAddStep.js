import React, { useState } from "react";
import "./RecipeAddStep.scss";

const RecipeAddStep = () => {
  const [steps, setSteps] = useState([]);

  const onAdd = e => {
    e.preventDefault();
    let context = document.querySelector(".recipeAddStep__context").value;
    console.log(context);
    setSteps([...steps, context]);
  };

  const onDelete = e => {
    let index = e.target.parentNode.dataset.key;
    let newSteps = steps.filter(step => step !== steps[index]);
    setSteps(newSteps);
  };

  const Step = (context, key) => {
    return (
      <li key={key}>
        <p data-key={key}>{context}</p>
      </li>
    );
  };

  return (
    <React.Fragment>
      <label className="recipeAddStep__title">Cách làm:</label>
      <textarea className="recipeAddStep__context" name="recipeName"></textarea>
      <button onClick={e => onAdd(e)}>Click</button>
      <ul className="recipeAddStep__contain">
        {steps.map((step, index) => {
          return Step(step, index);
        })}
      </ul>
    </React.Fragment>
  );
};

export default RecipeAddStep;
