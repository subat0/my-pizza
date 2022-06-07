import {
  ClearBasketSvg,
  CountMinusSvg,
  CountPlusSvg,
  CountRemoveSvg,
  GoBackSvg,
  HeaderSvg,
} from "../../assets/svg/Svg";
import { Link } from "react-router-dom";
import EmptyBasket from "./emptyBasket/EmptyBasket";
const Basket = ({ pizzasBusket, setPizzasBusket }) => {
  return (
    <div class="wrapper">
      {pizzasBusket.length !== 0 ? (
        <div class="content">
          <div class="container container--cart">
            <div class="cart">
              <div class="cart__top">
                <h2 class="content__title">
                  <HeaderSvg />
                  Корзина
                </h2>
                <div class="cart__clear">
                  <ClearBasketSvg />
                  <span>Очистить корзину</span>
                </div>
              </div>
              <div class="content__items">
                {pizzasBusket.map((pizzaInBasket) => (
                  <div key={pizzaInBasket.id} class="cart__item">
                    <div class="cart__item-img">
                      <img
                        class="pizza-block__image"
                        src={pizzaInBasket.img}
                        alt="Pizza"
                      /> 
                    </div>
                    <div class="cart__item-info">
                      <h3>{pizzaInBasket.name}</h3>
                      <p>тонкое тесто, 26 см.</p>
                    </div>
                    <div class="cart__item-count">
                      <div class="button button--outline button--circle cart__item-count-minus">
                        <CountMinusSvg />
                      </div>
                      <b>2</b>
                      <div class="button button--outline button--circle cart__item-count-plus">
                        <CountPlusSvg />
                      </div>
                    </div>
                    <div class="cart__item-price">
                      <b>770 ₽</b>
                    </div>
                    <div class="cart__item-remove">
                      <div class="button button--outline button--circle">
                        <CountRemoveSvg />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div class="cart__bottom">
                <div class="cart__bottom-details">
                  <span>
                    {" "}
                    Всего пицц: <b>3 шт.</b>{" "}
                  </span>
                  <span>
                    {" "}
                    Сумма заказа: <b>900 ₽</b>{" "}
                  </span>
                </div>
                <div class="cart__bottom-buttons">
                  <Link
                    to="/"
                    class="button button--outline button--add go-back-btn"
                  >
                    <GoBackSvg />
                    <span>Вернуться назад</span>
                  </Link>
                  <div class="button pay-btn">
                    <span>Оплатить сейчас</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyBasket />
      )}
    </div>
  );
};

export default Basket;
