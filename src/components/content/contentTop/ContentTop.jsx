import { SortLabelSvg } from "../../../assets/svg/Svg";

const ContentTop = () => {
  return (
    <div className="content__top">
      <div className="categories">
        <ul>
          <li>Все</li>
          <li>Мясные</li>
          <li>Вегетарианская</li>
          <li>Гриль</li>
          <li>Острые</li>
          <li>Закрытые</li>
        </ul>
      </div>
      <div className="sort">
        <div className="sort__label">
          <SortLabelSvg />
          <b>Сортировка по:</b>
          <span>популярности</span>
        </div>
        <div className="sort__popup">
          <ul>
            <li>популярности</li>
            <li>цене</li>
            <li>алфавиту</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ContentTop;
