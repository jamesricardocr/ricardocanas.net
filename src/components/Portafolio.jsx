import React, { Fragment } from "react";
import Logo from "./subcomponents/Logo";
import Redes from "./subcomponents/Redes";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <Fragment>
      <Logo />
      <div className="accion">
        <h1>Lorem isum dolor sit, amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          eum iure placeat, quis soluta quibusdam temporibus. Qui sequi id
          obcaecati.
        </p>
      </div>

        <div className="btn-portafolio">
          <Link className="laborales" to="/Laborales">
            Laborales
          </Link>

          <Link className="academicos" to="/Academicos">
            Academicos
          </Link>

          <Link className="personales" to="/Personales">
            Personales
          </Link>

          <Link className="diseños" to="/Diseños">
            Diseños
          </Link>
        </div>
      <Redes />
    </Fragment>
  );
};

export default Portfolio;
