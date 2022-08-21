import React, { useEffect, useState, useContext } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import CartContext from "../../context/cart";
import api from "../../services/api";
import { Container, List, Unit } from "./styles";
import Newsletter from "../../components/newsletter";
import Header from "../../components/header";

function Home() {
  const [travelList, setTravelList] = useState([]);
  const { state, setState } = useContext(CartContext);

  useEffect(() => {
    async function getTravelList() {
      const { data } = await api.get("/travels");
      setTravelList(data);
    }
    getTravelList();
  });

  function handleAddToCart(travel) {
    const copyCart = [...state.cart];
    const travelIndex = copyCart.findIndex((el) => el.id === travel.id);
    if (travelIndex >= 0) {
      copyCart[travelIndex].quantity += 1;
    } else {
      copyCart.push({ ...travel, quantity: 1 });
    }
    setState({
      cart: copyCart,
    });
  }

  function formatMoney(num) {
    const asNum = parseInt(num, 10);
    const money = asNum.toLocaleString("en-us", {
      style: "currency",
      currency: "USD",
    });
    return money;
  }

  return (
    <>
      <Header displayAmount="visible" />
      <Container>
        <List>
          {travelList.map((el) => {
            return (
              <Unit>
                <img src={el.photo} alt="Travel" />
                <p>{el.title}</p>
                <strong>{formatMoney(el.price)}</strong>
                <button type="button" onClick={() => handleAddToCart(el)}>
                  <div>
                    <MdAddShoppingCart size={16} color="#fff" />
                  </div>
                  <span>Agregar al carrito</span>
                </button>
              </Unit>
            );
          })}
        </List>
      </Container>
      <Newsletter theme="yellow" />
    </>
  );
}

export default Home;
