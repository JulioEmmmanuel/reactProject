import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Container, FooterContainer } from "./styles";

function Footer() {
  return (
    <Container>
      <FooterContainer>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </FooterContainer>
    </Container>
  );
}

export default Footer;
