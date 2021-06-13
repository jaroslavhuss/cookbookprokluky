import React from 'react'
import './App.css';
import Main from "./pages/Main";
import Recipes from "./pages/Recipes";
import AddRecipe from "./pages/AddRecipes";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Menu from "./components/Menu";
import {GlobalProvider} from "./context/globalContext/globalContext"
import ShowDetail from './components/ShowDetail';
import SearchRecipe from './pages/SearchRecipe';
const App = () => {
  return (
    <GlobalProvider>
        <BrowserRouter>
          <Menu />
          <Switch>
            <Route exact path="/" component={Main}/>
    
            <Route exact path="/search" component={SearchRecipe} />
            <Route exact path="/recipes" component={Recipes} />
            <Route exact path="/recipes/:id" component={ShowDetail} />
            <Route exact path="/add-recipe" component={AddRecipe} />
          </Switch>
        </BrowserRouter>
      </GlobalProvider>
  )
}

export default App