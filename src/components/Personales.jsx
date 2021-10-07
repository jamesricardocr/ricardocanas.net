import React, { Fragment, useState } from "react";
// componentes
import Logo from "./subcomponents/Logo";
import AccionPortafolio from "./subcomponents/AccionPortafolio";
import MostrarProyectos from "./subcomponents/MostrarProyectos";
import Redes from "./subcomponents/Redes";
import Menu from "./subcomponents/Menu";

// imagenes de los proyectos
import gym from "../img/imagenes-proyectos/gym.jpg";
import psicotest from "../img/imagenes-proyectos/psicotest.jpg";
import hamilton from "../img/imagenes-proyectos/hamilton.jpg";
import poke from "../img/imagenes-proyectos/poke.jpg";
import ricardo from "../img/imagenes-proyectos/ricardo.jpg";

// logos tecnologias
import css from "../img/logos-tecnologias/css.png";
import html from "../img/logos-tecnologias/html.png";
import javascript from "../img/logos-tecnologias/javascript.png";
import php from "../img/logos-tecnologias/php.png";
import react from "../img/logos-tecnologias/react.png";
import mysql from "../img/logos-tecnologias/mysql.png";

// ojo en la propiedad de tecnologias pasar hasta un maximo de tres imagenes ya que se puede romper el diseño
const Personales = () => {
  const [proyectos, setProyectos] = useState([
    {
      id: 5,
      nombre: "Ricardo Cañas",
      url: "https://ricardocanas.net/",
      imagen: ricardo,
      descripcion: "Sitio web y portafolio",
      tecnologias: [react, javascript, css],
    },
    {
      id: 4,
      nombre: "Poké cards",
      url: "https://jamesricardocr.github.io/pokemon/",
      imagen: poke,
      descripcion: "Consultando la PokeAPI para crear cartas de pokémon",
      tecnologias: [html, css, javascript],
    },
    {
      id: 3,
      nombre: "Gym",
      url: "http://gym.smartcreaty.com/",
      imagen: gym,
      descripcion: "CRUD, registro de usuarios y panel de administración.",
      tecnologias: [javascript, php, mysql],
    },
    {
      id: 2,
      nombre: "Psicotest v1.0",
      url: "https://dreamy-villani-5d65f8.netlify.app/",
      imagen: psicotest,
      descripcion: "plataforma de test psicologicos",
      tecnologias: [html, css, javascript],
    },
    {
      id: 1,
      nombre: "Test de Hamilton",
      url: "https://boring-spence-29ef28.netlify.app/",
      imagen: hamilton,
      descripcion: "programacion del test de Hamilton",
      tecnologias: [html, css, javascript],
    },
  ]);

  const mensaje = "En esta sección encuentras todos mis proyectos personales.";
  return (
    <Fragment>
      <div className="header">
        <Menu />
        <Logo />
      </div>
      <AccionPortafolio mensaje={mensaje} />
      {proyectos.map((proyecto) => (
        <MostrarProyectos key={proyecto.id} proyecto={proyecto} />
      ))}
      <br />
      <Redes />
    </Fragment>
  );
};

export default Personales;
