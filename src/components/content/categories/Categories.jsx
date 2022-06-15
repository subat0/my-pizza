import { useState } from "react";

const Categories = ({ items, onClickCategories, onFilter }) => {
  const [active, setActive] = useState("");

  const onSelectCategories = (index) => {
    onClickCategories(index);
    setActive(index);
    onFilter(index)
  };

  return (
    <div className="categories">
      <ul>
        <li 
          className={active === "" ? "active" : ""}
          onClick={() => onSelectCategories("")}
          >Все</li>
        {items.map((item, index) => (
          <li
            className={active === index ? "active" : ""}
            key={`${item}_${index}`}
            onClick={() => onSelectCategories(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
