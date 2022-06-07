import { NavLink } from 'react-router-dom'
import EmptyImg from '..//..//..//assets/img/empty-cart.png'

function EmptyBasket() {
  return (
    <div className="content">
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>Корзина пустая 😕</h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src={EmptyImg} alt="Empty cart" />
          <NavLink to="/" className="button button--black">
            <span>Вернуться назад</span>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default EmptyBasket