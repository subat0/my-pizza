import { useState } from "react";
import { CardAddPlusSvg } from "../../../assets/svg/Svg";
import cn from "classnames";

const PizzaBlock = ({ id, image, name, price, types, sizes }) => {
  const availableTypes = ["тонкое", "традиционное"];
  const availableSizes = [26, 30, 40];
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const onSelectType=(index)=>{
    setActiveType(index)
  }
  const onSelectSize=(index)=>{
    setActiveSize(index)
  }

  return (
    // <div className="pizza-block" key={id}>
    <div className="pizza-block">
      <img className="pizza-block__image" src={image} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((type, index) => (
            <li
              key={index}
              onClick={()=>onSelectType(index)}
              className={cn({
                active: activeType === index,
                disabled: !types.includes(index),
              })}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, index) => (
            <li
              key={index}
              onClick={()=>onSelectSize(index)}
              className={cn({
                active: activeSize === index,
                disabled: !sizes.includes(size),
              })}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">
          от {price} <u>С</u>
        </div>
        <div className="button button--outline button--add">
          <CardAddPlusSvg />
          <span>Добавить</span>
          <i>1</i>
        </div>
      </div>
    </div>
  );
};
export default PizzaBlock;
