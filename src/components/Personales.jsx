import React, { Fragment, useState } from "react";
// componentes
import MostrarProyectos from "./subcomponents/MostrarProyectos";
import Logo from './subcomponents/Logo';
import AccionPortafolio from "./subcomponents/AccionPortafolio";
import Redes from "./subcomponents/Redes"

// imagenes de los proyectos
import gym from "../img/imagenes-proyectos/gym.jpg";


// logos tecnologias
import css from "../img/logos-tecnologias/css.png";
import html from "../img/logos-tecnologias/html.png";
import javascript from "../img/logos-tecnologias/javascript.png";
import php from "../img/logos-tecnologias/php.png";
import react from "../img/logos-tecnologias/react.png";

// ojo en la propiedad de tecnologias pasar hasta un maximo de tres imagenes ya que se puede romper el diseño
const Personales = () => {
    
  const [proyectos, setProyectos] = useState([

    {
      id: 1,
      nombre: "Gym",
      url: "http://gym.smartcreaty.com/",
      imagen: gym,
      descripcion: "CRUD, registro de usuarios y panel de administración.",
      tecnologias: [css, php, javascript],
    },
  ]);

  return (
    <Fragment>
      <Logo/>
      <AccionPortafolio/>
      {proyectos.map((proyecto) => (
        <MostrarProyectos key={proyecto.id} proyecto={proyecto} />
      ))}
      <br />
      <Redes/>
    </Fragment>
  );
};

 
export default Personales;