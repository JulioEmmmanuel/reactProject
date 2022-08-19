import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./routes";
import GlobalStyle from "./styles/global";
import Header from "./components/header";
import { CartContextProvider } from "./context/cart";

function App() {
  return (
    <CartContextProvider>
      <Router>
        <Header />
        <Routing />
      </Router>
      <GlobalStyle />
    </CartContextProvider>
  );
}

export default App;
