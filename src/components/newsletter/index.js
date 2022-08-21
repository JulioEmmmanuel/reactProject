import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container, NewsletterContainer } from "./styles";

function Newsletter(props) {
  const { theme } = props;

  return (
    <Container theme={theme} className="pv4">
      <NewsletterContainer className="flex flex-row items-center justify-between">
        <div>
          <h3>
            Regístrate y obtén las <br /> mejores ofertas
          </h3>
        </div>
        <div>
          <p className="f6">
            Al registrarte estás aceptando los términos y condiciones
          </p>
        </div>
        <div className="flex flex-column">
          <p className="f6">Siguenos en redes sociales</p>
          <div clasName="flex flex-row">
            <Link to="/">
              <FaFacebook size={16} color="#000" />
            </Link>
            <Link to="/">
              <FaTwitter size={16} color="#000" />
            </Link>
            <Link to="/">
              <FaYoutube size={16} color="#000" />
            </Link>
          </div>
        </div>
      </NewsletterContainer>
    </Container>
  );
}

export default Newsletter;
