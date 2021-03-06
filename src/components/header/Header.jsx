import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import logo from "../../assets/img/logoPizza.svg";
import { HeaderSvg } from "../../assets/svg/Svg";
import Button from "../../commons/button/Button";

const Header = () => {

  const {
    totalItems,
    cartTotal,
  } = useCart();

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logo} alt="Pizza logo" />
            <div>
              <h1>EMIRISHKINO and MARLESHKINO Pizzas</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <Link to="/basket">
            <Button className="button button--cart">
              <span>
                {cartTotal} <u>С</u>
              </span>
              <div className="button__delimiter"></div>
              <HeaderSvg />
              <span>{totalItems}</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
