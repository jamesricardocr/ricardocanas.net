import React, { Fragment } from "react";
import Logo from "./subcomponents/Logo";
import Redes from "./subcomponents/Redes";
import { Link } from "react-router-dom";
import Menu from "./subcomponents/Menu";

const Portfolio = () => {
  return (
    <Fragment>
      <div className="container">
      <div className="header">
          <Menu />
          <Logo />
        </div>
        <div className="accion accion-portafolio">
          <h1 className="portafolio-titulo">¿Quieres conocer mi trayectoria como desarrollador web?</h1>
          <p className="portafolio-parrafo">
            Haciendo clic sobre cada opción, encontrarás los proyectos que he
            realizado hasta la fecha.
          </p>
        </div>
        <div className="btn-portafolio">
          <Link
            className="laborales animate__animated animate__pulse"
            to="/Laborales"
          >
            Laborales
          </Link>

          <Link
            className="academicos animate__animated animate__pulse"
            to="/Academicos"
          >
            Académicos
          </Link>

          <Link
            className="personales animate__animated animate__pulse"
            to="/Personales"
          >
            Personales
          </Link>

          <Link
            className="diseños animate__animated animate__pulse"
            to="/Diseños"
          >
            Diseños
          </Link>
        </div>
        <Redes />
      </div>
    </Fragment>
  );
};

export default Portfolio;
