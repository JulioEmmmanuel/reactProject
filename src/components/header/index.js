import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Container, HeaderContainer, Cart } from "./styles";
import CartContext from "../../context/cart";

function Header() {
  const { setState, state } = useContext(CartContext);
  const totalQuantity = state.cart.reduce(
    (acc, travel) => acc + travel.quantity,
    0
  );

  return (
    <Container>
      <HeaderContainer>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/cart">
          <Cart>
            <div>
              <span>{totalQuantity}</span>
            </div>
            <FaShoppingCart size={30} color="#fff" />
          </Cart>
        </Link>
      </HeaderContainer>
    </Container>
  );
}

export default Header;
