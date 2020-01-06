import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import NotFound from "./layout/NotFound";

import Recipes from "./recipes/Recipes";
import RecipeDetail from "./recipe-detail/RecipeDetail";
import RecipeAdd from "./recipe-add/RecipeAdd";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Recipes} />
            <Route exact path="/recipeDetail/:id" component={RecipeDetail} />
            <Route exact path="/recipe/add" component={RecipeAdd} />
            <Route exact path="/recipe/edit/:id" component={RecipeAdd} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    </Router>
  );
};

export default App;
