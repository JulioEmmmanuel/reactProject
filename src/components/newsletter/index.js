import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
// import axios from "axios";
import Swal from "sweetalert2";
import { Container, NewsletterContainer } from "./styles";

function Newsletter(props) {
  const { theme } = props;

  const [error, setError] = useState();
  const [email, setEmail] = useState();

  function request() {
    // const config = {
    //  method: "POST",
    //  url: "/no-cache/",
    //  data: email,
    // };
    // axios(config)
    //  .then(() => {
    Swal.fire({
      title: "Gracias",
      text: "Tu correo se registró correctamente",
      icon: "success",
      confirmButtonText: "ok",
    });
    // })
    //  .catch((err) => {
    //    setError(err.message);
    //    console.error(err.message);
    //  });
  }

  function submit(evt) {
    evt.preventDefault();
    if (email) {
      // console.log("si");
      request(email);
    } else {
      // console.log("no");
    }
  }

  function handleChange(e) {
    const valor = e.target.value;
    const emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (valor.length > 0) {
      if (emailRegex.test(valor)) {
        setEmail(valor);
        setError("");
      } else {
        setEmail("");
        setError("Por favor, ingrese un valor válido");
      }
    } else {
      setEmail("");
      setError("Introduce un correo");
    }
  }

  return (
    <Container theme={theme} className="pv4">
      <NewsletterContainer className="flex flex-row items-center justify-between">
        <div>
          <h3>
            Regístrate y obtén las <br /> mejores ofertas
          </h3>
        </div>
        <div>
          <form id="newsletter" method="post" onSubmit={(e) => submit(e)}>
            <input
              type="email"
              id="input_email_newsletter"
              name="input_email_newsletter"
              placeholder="Escribe tu correo"
              required
              onChange={(e) => handleChange(e)}
              className="ph3 pv2 ba b--white br2"
            />
            <button
              type="submit"
              className="ph3 pv2 ba b--black bg-black white br2"
            >
              Suscribirme
            </button>
          </form>
          <p className="error_newsletter f6 white mt1 b">{error}</p>
          <p className="f6 mt2">
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
