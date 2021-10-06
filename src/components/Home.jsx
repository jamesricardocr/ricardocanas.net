import React, { Fragment } from "react";
import Logo from "./subcomponents/Logo";
import Accion from "./subcomponents/Accion";
import Contacto from "./subcomponents/Contacto";
import Redes from "./subcomponents/Redes";
import Menu from "./subcomponents/Menu";


/* -------------------------------- imagenes -------------------------------- */
import ricardo from '../img/yo.png'


const Home = () => {
  let mensajePrincipal =
    "Soy desarrollador web apasionado por las nuevas tecnologías y el diseño UI y UX.";
  let mensajeSecundario =
    "La industria TI crece y cambia constantemente motivando a nunca parar de aprender. Las tecnologías que me acreditan como desarrollador son: SASS, React.JS, Node.JS, MongoDB, Laravel, MySQL, Java, Python";

  return (
    <Fragment>
      <div className="container">
        <div className="header">
          <Menu />
          <Logo />
        </div>
        <div className="main-home">
        <Accion
          key="1"
          mensajePrincipal={mensajePrincipal}
          mensajeSecundario={mensajeSecundario}
        />
        <img className="home-imagen-principal" src={ricardo} alt="Ricardo Cañas" />
        </div>
        <Contacto />
        <Redes />
      </div>
    </Fragment>
  );
};

export default Home;
