import "./App.css";
import Header from "./components/header/Header";
import Content from "./components/content/content";
import Basket from "./components/basket/Basket";
import { Route, Routes } from "react-router-dom";
import { pizzaBlock } from "./data/db";
import { useState } from "react";

function App() {
  const [pizzas, setPizzas] = useState(pizzaBlock);
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Content pizzas={pizzas} setPizzas={setPizzas} />}
        ></Route>
        <Route path="/basket" element={<Basket />}></Route>
      </Routes>
    </div>
  );
}

export default App;
