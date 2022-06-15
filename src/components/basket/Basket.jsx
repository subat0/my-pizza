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
import { useCart } from "react-use-cart";
const Basket = () => {
  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
    totalItems,
    cartTotal,
  } = useCart();

  return (
    <div class="wrapper">
      {!isEmpty ? (
        <div class="content">
          <div class="container container--cart">
            <div class="cart">
              <div class="cart__top">
                <h2 class="content__title">
                  <HeaderSvg />
                  Корзина
                </h2>
                <div class="cart__clear" onClick={()=>emptyCart()}>
                  <ClearBasketSvg />
                  <span>Очистить корзину</span>
                </div>
              </div>
              <div class="content__items">
                {items.map((pizzaInBasket) => (
                  <div key={pizzaInBasket.id} class="cart__item">
                    <div class="cart__item-img">
                      <img
                        class="pizza-block__image"
                        src={pizzaInBasket.image}
                        alt="Pizza"
                      /> 
                    </div>
                    <div class="cart__item-info">
                      <h3>{pizzaInBasket.name}</h3>
                      <p>{pizzaInBasket.type}, {pizzaInBasket.size} см.</p>
                    </div>
                    <div  class="cart__item-count">
                      <div onClick={() => updateItemQuantity(pizzaInBasket.id, pizzaInBasket.quantity - 1)} class="button button--outline button--circle cart__item-count-minus">
                        <CountMinusSvg />
                      </div>
                      <b>{pizzaInBasket.quantity}</b>
                      <div onClick={() => updateItemQuantity(pizzaInBasket.id, pizzaInBasket.quantity + 1)} class="button button--outline button--circle cart__item-count-plus">
                        <CountPlusSvg />
                      </div>
                    </div>
                    <div class="cart__item-price">
                      <b>{pizzaInBasket.price} <u>С</u></b>
                    </div>
                    <div class="cart__item-remove" onClick={()=>removeItem(pizzaInBasket.id)}>
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
                    Всего пицц: <b>{totalItems}</b>{" "}
                  </span>
                  <span>
                    Сумма заказа: <b>{cartTotal} <u>С</u> </b>
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
