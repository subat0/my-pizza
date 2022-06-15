import "./App.css";
import Header from "./components/header/Header";
import Content from "./components/content/content";
import Basket from "./components/basket/Basket";
import { Route, Routes } from "react-router-dom";
import { pizzaBlock, pizzasInBusket } from "./data/db";
import { useState } from "react";
import { CartProvider } from "react-use-cart";

function App() {
  const [pizzas, setPizzas] = useState(pizzaBlock);
  const [pizzasBusket, setPizzasBusket] = useState(pizzasInBusket);
  return (
    <div className="wrapper">
      <CartProvider>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Content pizzas={pizzas} setPizzas={setPizzas} />}
          ></Route>
          <Route
            path="/basket"
            element={
              <Basket
                pizzasBusket={pizzasBusket}
                setPizzasBusket={setPizzasBusket}
              />
            }
          ></Route>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
