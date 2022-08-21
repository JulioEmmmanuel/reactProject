import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./routes";
import GlobalStyle from "./styles/global";
import { CartContextProvider } from "./context/cart";
import Footer from "./components/footer";

function App() {
  return (
    <CartContextProvider>
      <Router>
        <div className="flex flex-column vh-100 justify-between">
          <Routing />
          <Footer />
        </div>
      </Router>
      <GlobalStyle />
    </CartContextProvider>
  );
}

export default App;
