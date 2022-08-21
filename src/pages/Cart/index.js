import React, { useContext } from "react";

import { MdDelete } from "react-icons/md";
import CartContext from "../../context/cart";
import {
  ContainerList,
  Container,
  TravelItem,
  Info,
  Quantity,
  Subtotal,
  Total,
} from "./styles";

import Newsletter from "../../components/newsletter";
import Header from "../../components/header";

function Cart() {
  const { state, setState } = useContext(CartContext);

  function totalPrice() {
    const total = state.cart.reduce(
      (prev, curr) => prev + curr.price * curr.quantity,
      0
    );
    return total;
  }

  function formatMoney(num) {
    const asNum = parseInt(num, 10);
    const money = asNum.toLocaleString("en-us", {
      style: "currency",
      currency: "USD",
    });
    return money;
  }

  function handleDelete(travel) {
    const copyCart = [...state.cart];
    const travelIndex = copyCart.findIndex((el) => el.id === travel.id);
    if (copyCart[travelIndex].quantity > 1) {
      copyCart[travelIndex].quantity -= 1;
    } else {
      copyCart.splice(travelIndex, 1);
    }
    setState({
      cart: copyCart,
    });
  }

  return (
    <>
      <Header displayCart="hidden" />
      <Container>
        <ContainerList>
          {state.cart.map((el) => {
            return (
              <TravelItem>
                <img src={el.photo} alt={el.title} />
                <Info>
                  <p>{el.title}</p>
                  <strong>{formatMoney(el.price)}</strong>
                </Info>
                <Quantity readOnly type="number" value={el.quantity} />
                <Subtotal>
                  <p>{formatMoney(el.quantity * el.price)}</p>
                  <button type="button">
                    <MdDelete
                      size={24}
                      color="#0676d9"
                      onClick={() => handleDelete(el)}
                    />
                  </button>
                </Subtotal>
              </TravelItem>
            );
          })}
        </ContainerList>
        <Total>
          <p>Total: </p>
          <strong>{formatMoney(totalPrice())}</strong>
        </Total>
      </Container>
      <Newsletter theme="orange" />
    </>
  );
}

export default Cart;
