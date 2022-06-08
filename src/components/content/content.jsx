import SliderSlick from "../../commons/slider/Slider";
import Categories from "./categories/Categories";
import PizzaBlock from "./pizzaBlock/PizzaBlock";
import Sort from "./sort/Sort";
import { useState } from "react";

const Content = ({ pizzas, setPizzas }) => {
  const [categories, setCategories] = useState(null);
  const [sort, setSort] = useState({
    type: "rating",
  });

  const onClickCategories = (index) => {
    setCategories(categories);
  };
  const onClickSort = (type) => {
    console.log(type)
    setSort(type);
    const sortedPizzas = pizzas.sort((a, b) =>
      a[type.type]?.localeCompare(b[type.type])
    );
    setPizzas(sortedPizzas);
    console.log(sortedPizzas)
  };

  return (
    <div className="content">
      <div className="container">
        <SliderSlick />
        <div className="content__top">
          <Categories
            onClickCategories={onClickCategories}
            items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
          />
          <Sort
            activeSortType={sort.type}
            onClickSort={onClickSort}
            items={[
              { name: "популярности", type: "rating" },
              { name: "цене", type: "price" },
              { name: "алфавиту", type: "name" },
            ]}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizzas.map((pizza) => (
            <PizzaBlock
              key={pizza.id}
              {...pizza}
              pizzas={pizzas}
              pizza={pizza}
              setPizzas={setPizzas}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
