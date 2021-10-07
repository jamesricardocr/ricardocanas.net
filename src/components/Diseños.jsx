import React, { Fragment, useState } from "react";
// componentes
import MostrarProyectos from "./subcomponents/MostrarProyectos";
import Logo from "./subcomponents/Logo";
import AccionPortafolio from "./subcomponents/AccionPortafolio";
import Redes from "./subcomponents/Redes";
import Menu from "./subcomponents/Menu";

// imagenes de los proyectos
import pharma from "../img/imagenes-diseños/Pharmaweb.png";
import diseñoGuerrero from "../img/imagenes-diseños/diseñoGuerrero.jpg";
import bioing from "../img/imagenes-diseños/bioing.jpg";
import cash from "../img/imagenes-diseños/cash.png";
import ricardo from "../img/imagenes-proyectos/ricardo.jpg";

// logos tecnologias
import figma from "../img/logos-tecnologias/figma.png";
import adobe from "../img/logos-tecnologias/adobe.png";

const Diseños = () => {
  const [proyectos, setProyectos] = useState([
    {
      id: 5,
      nombre: "Cash Register",
      url: "https://www.figma.com/file/m5yGcLqQ0342wtRd9GHIfP/RicardoCañas?node-id=0%3A1",
      imagen: ricardo,
      descripcion: "Diseño aplicación web ",
      tecnologias: [figma],
    },
    {
      id: 4,
      nombre: "Cash Register",
      url: "https://www.figma.com/file/WoPLXvEjQ2361slT24Vaup/Cash-Register?node-id=198%3A2",
      imagen: cash,
      descripcion: "Diseño aplicación web caja registradora ",
      tecnologias: [figma],
    },
    {
      id: 3,
      nombre: "PharmaWeb",
      url: "https://www.figma.com/file/7aHcYP0URrVHymyvRBteyC/PharmaWeb?node-id=0%3A1",
      imagen: pharma,
      descripcion: "Diseño plataforma para formulas medicas",
      tecnologias: [figma],
    },
    {
      id: 2,
      nombre: "BioingData",
      url: "https://www.figma.com/file/GBEBnlfNffM5PZMYQmTWNd/BioingData?node-id=0%3A1",
      imagen: bioing,
      descripcion: "Diselo aplicación web, colecciónes biológicas  ",
      tecnologias: [figma],
    },
    {
      id: 1,
      nombre: "Jhon Guerrero",
      url: "https://xd.adobe.com/view/91b5826c-8ac3-4417-876f-444467b7a022-c4e6/",
      imagen: diseñoGuerrero,
      descripcion: "Diseño sitio web ",
      tecnologias: [adobe],
    },
  ]);

  const mensaje = "En esta sección encuentras todos mis proyectos de diseño.";
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

export default Diseños;
