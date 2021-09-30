import React, { Fragment, useState } from "react";
// componentes
import MostrarProyectos from "./subcomponents/MostrarProyectos";
import Logo from './subcomponents/Logo';
import AccionPortafolio from "./subcomponents/AccionPortafolio";
import Redes from "./subcomponents/Redes"

// imagenes de los proyectos
import tacticos from "../img/imagenes-proyectos/tacticosJhon.png";
import conde from "../img/imagenes-proyectos/conde.png";
import imaqcol from "../img/imagenes-proyectos/imaqcol.png";
import inner from "../img/imagenes-proyectos/inner.png";
import guerrero from "../img/imagenes-proyectos/guerrero.png";

// logos tecnologias
import css from "../img/logos-tecnologias/css.png";
import html from "../img/logos-tecnologias/html.png";
import javascript from "../img/logos-tecnologias/javascript.png";
import wordpress from "../img/logos-tecnologias/wordpress.png";
import react from "../img/logos-tecnologias/react.png";

// ojo en la propiedad de tecnologias pasar hasta un maximo de tres imagenes ya que se puede romper el diseño
const Laborales = () => {
  const [proyectos, setProyectos] = useState([
    {
      id: 6,
      nombre: "Jhon Guerrero",
      url: "https://johnguerreromusic.com",
      imagen: guerrero,
      descripcion: "Sitio Web personal de un maestro y artista musical. ",
      tecnologias: [react, javascript,css],
    },
    {
      id: 5,
      nombre: "Inner Beaming",
      url: "https://innerbeaming.com/",
      imagen: inner,
      descripcion: "Sistema para agendamiento de citas.",
      tecnologias: [wordpress, javascript, css],
    },
    {
      id: 4,
      nombre: "Imaqcol",
      url: "https://imaqcol.com/",
      imagen: imaqcol,
      descripcion: "Ecommerce de la empresa de ingenieria de maquinas de Colombia",
      tecnologias: [wordpress, javascript, css],
    },
    {
      id: 3,
      nombre: "Drogueria Conde",
      url: "https://drogueriacondeplus.com/",
      imagen: conde,
      descripcion: "Landing page, de una cadena de droguerias.",
      tecnologias: [wordpress, javascript,css],
    },
    // {
    //   id: 2,
    //   nombre: "Ana Leal Design",
    //   url: "https://drogueriacondeplus.com/",
    //   imagen: conde,
    //   descripcion: "Landing page, de una cadena de droguerias.",
    //   tecnologias: [wordpress, javascript],
    // },
    {
      id: 1,
      nombre: "Tacticos Jhon",
      url: "https://tacticosjhon.com/",
      imagen: tacticos,
      descripcion: "Ecommerce de una empresa de articulos militares y civiles.",
      tecnologias: [wordpress, javascript, css],
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

export default Laborales;
