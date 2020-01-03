import React from "react";
import "./App.scss";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Recipes from "./recipes/Recipes";
import RecipeDetail from "./recipe-detail/RecipeDetail";
import RecipeAdd from "./recipe-add/RecipeAdd";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        {/* <Recipes />
        <RecipeDetail /> */}
        <RecipeAdd />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
