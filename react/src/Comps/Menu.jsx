import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import NewIngredient from "../Pages/NewIngredient";
import NewRecipe from "../Pages/NewRecipe";
import Home from "../Pages/Home";

export default function Menu(props) {
  return (
    <>
      <div className="menu-Button">
        <Link to="/Home">Home</Link>
        <Link to="/">New Recipe</Link>
        <Link to="/NewIngredient">New Ingredient</Link>
      </div>
      <div>
        <Routes>
        <Route path="/Home" element={<Home />} />
          <Route path="/" element={<NewRecipe />} />
          <Route path="/NewIngredient" element={<NewIngredient />}/>
        </Routes>
      </div>
    </>
  );
}
