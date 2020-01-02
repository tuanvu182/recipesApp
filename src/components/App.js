import React from "react";
import "./App.scss";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Recipes from "./recipes/Recipes";
import RecipeDetail from "./recipe-detail/RecipeDetail";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Recipes />
        <RecipeDetail />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
