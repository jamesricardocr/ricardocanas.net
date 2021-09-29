import React, { Fragment, useState } from "react";
// componentes
import MostrarProyectos from "./subcomponents/MostrarProyectos";
import Logo from './subcomponents/Logo';
import AccionPortafolio from "./subcomponents/AccionPortafolio";
import Redes from "./subcomponents/Redes"

// imagenes de los proyectos
import tacticos from "../img/imagenes-proyectos/tacticosJhon.png";
import conde from "../img/imagenes-proyectos/conde.png";

// logos tecnologias
import css from "../img/logos-tecnologias/css.png";
import html from "../img/logos-tecnologias/html.png";
import javascript from "../img/logos-tecnologias/javascript.png";
import wordpress from "../img/logos-tecnologias/wordpress.png";

// ojo en la propiedad de tecnologias pasar hasta un maximo de tres imagenes ya que se puede romper el diseño
const Laborales = () => {
  const [proyectos, setProyectos] = useState([
    {
      id: 3,
      nombre: "Drogueria Conde",
      ulr: "https://drogueriacondeplus.com/",
      imagen: conde,
      descripcion: "Landing page, de una cadena de droguerias.",
      tecnologias: [wordpress, javascript],
    },
    {
      id: 2,
      nombre: "Ana Leal Design",
      ulr: "https://drogueriacondeplus.com/",
      imagen: conde,
      descripcion: "Landing page, de una cadena de droguerias.",
      tecnologias: [wordpress, javascript],
    },
    {
      id: 1,
      nombre: "Tacticos Jhon",
      ulr: "https://tacticosjhon.com/",
      imagen: tacticos,
      descripcion: "Ecommerce de una empresa de articulos militares y civiles.",
      tecnologias: [wordpress, javascript],
    },
  ]);

  return (
    <Fragment>
      <Logo/>
      <AccionPortafolio/>
      {proyectos.map((proyecto) => (
        <MostrarProyectos key={proyecto.id} proyecto={proyecto} />
      ))}
      <Redes/>
    </Fragment>
  );
};

export default Laborales;
