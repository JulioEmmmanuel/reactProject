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

function Cart() {
  const { state, setState } = useContext(CartContext);

  return (
    <Container>
      <ContainerList>
        {state.cart.map((el) => {
          return (
            <TravelItem>
              <img src={el.photo} alt={el.title} />
              <Info>
                <p>{el.title}</p>
                <strong>${el.price}</strong>
              </Info>
              <Quantity readOnly type="number" value={el.quantity} />
              <Subtotal>
                <p>${el.quantity * el.price}.00</p>
                <button type="button">
                  <MdDelete size={24} color="#0676d9" />
                </button>
              </Subtotal>
            </TravelItem>
          );
        })}
      </ContainerList>
      <Total>
        <p>Total: </p>
        <strong>
          $
          {state.cart.reduce(
            (prev, curr) => prev + curr.price * curr.quantity,
            0
          )}
          .00
        </strong>
      </Total>
    </Container>
  );
}

export default Cart;
