import React, { Fragment, useState } from "react";

// componentes
import MostrarProyectos from "./subcomponents/MostrarProyectos";
import Logo from "./subcomponents/Logo";
import AccionPortafolio from "./subcomponents/AccionPortafolio";
import Redes from "./subcomponents/Redes";
import Menu from "./subcomponents/Menu";

// imagenes de los proyectos
import carrito from "../img/imagenes-proyectos/carrito.png";
import mensajes from "../img/imagenes-proyectos/mensajes.jpg";
import buscador from "../img/imagenes-proyectos/buscador.png";
import twitter from "../img/imagenes-proyectos/twitter.jpg";
import seguro from "../img/imagenes-proyectos/seguro.jpg";
import contabilidad from "../img/imagenes-proyectos/contabilidad.jpg";
import citas from "../img/imagenes-proyectos/citas.jpg";
import clientes from "../img/imagenes-proyectos/clientes.jpg";
import canciones from "../img/imagenes-proyectos/canciones.png";
import clima from "../img/imagenes-proyectos/clima.jpg";
import imagenes from "../img/imagenes-proyectos/imagenes.png";
import cafe from "../img/imagenes-proyectos/cafe.png";
import bienes from "../img/imagenes-proyectos/bienes.png";
import cripto from "../img/imagenes-proyectos/cripto.jpg";
import paciente from "../img/imagenes-proyectos/paciente.jpg";

// logos tecnologias
import css from "../img/logos-tecnologias/css.png";
import html from "../img/logos-tecnologias/html.png";
import javascript from "../img/logos-tecnologias/javascript.png";
import wordpress from "../img/logos-tecnologias/wordpress.png";
import react from "../img/logos-tecnologias/react.png";

const Academicos = () => {
  const [proyectos, setProyectos] = useState([
    {
      id: 15,
      nombre: "Administrador de citas",
      url: "https://cocky-heyrovsky-cf7ed8.netlify.app/",
      imagen: paciente,
      descripcion: "administrador de pacientes.",
      tecnologias: [react, css, javascript],
    },
    {
      id: 14,
      nombre: "Criptomonedas",
      url: "https://nostalgic-euclid-6327ae.netlify.app/",
      imagen: cripto,
      descripcion: "Cotizador de criptomonedas API",
      tecnologias: [html, css, javascript],
    },
    {
      id: 11,
      nombre: "Buscador de imagenes",
      url: "https://jamesricardocr.github.io/academic-javascript/11-PROYECTO-PixabayImagenes/",
      imagen: imagenes,
      descripcion: "Implementando y consultando la API de Pixabay",
      tecnologias: [html, css, javascript],
    },
    {
      id: 10,
      nombre: "Buscador de canciones",
      url: "https://jamesricardocr.github.io/academic-javascript/10-PROYECTO-BuscarCanciones/",
      imagen: canciones,
      descripcion: "Buscador de letras de canciones, consultando API",
      tecnologias: [html, css, javascript],
    },
    {
      id: 9,
      nombre: "Consulta Clima",
      url: "https://jamesricardocr.github.io/academic-javascript/9-PROYECTO-Clima/",
      imagen: clima,
      descripcion: "Buscador de datos climaticos, consultando API del clima",
      tecnologias: [html, css, javascript],
    },
    {
      id: 8,
      nombre: "CRM IndexDB",
      url: "https://jamesricardocr.github.io/academic-javascript/8-PROYECTO-CRMIndexedDB/",
      imagen: clientes,
      descripcion: "administrador de clientes con IndexDB",
      tecnologias: [html, css, javascript],
    },
    {
      id: 7,
      nombre: "Administrador de citas",
      url: "https://jamesricardocr.github.io/academic-javascript/7-PROYECTO-AdministrarCitas/",
      imagen: citas,
      descripcion: "Sistema de contabilidad para gastos semanales.",
      tecnologias: [html, css, javascript],
    },
    {
      id: 6,
      nombre: "Gasto semanal",
      url: "https://jamesricardocr.github.io/academic-javascript/6-PROYECTO-GastoSemanal/",
      imagen: contabilidad,
      descripcion: "Sistema de contabilidad para gastos semanales.",
      tecnologias: [html, css, javascript],
    },
    {
      id: 5,
      nombre: "Cotizador de seguros",
      url: "https://jamesricardocr.github.io/academic-javascript/5-PROYECTO-Prototypes-Seguro/",
      imagen: seguro,
      descripcion: "Basico simulador de twitter, con local Storage",
      tecnologias: [html, css, javascript],
    },
    {
      id: 4,
      nombre: "Simulador de tuits",
      url: "https://jamesricardocr.github.io/academic-javascript/4-PROYECTO-LocalStorage/",
      imagen: twitter,
      descripcion: "Basico simulador de twitter, con local Storage",
      tecnologias: [html, css, javascript],
    },
    {
      id: 3,
      nombre: "Buscador de autos",
      url: "https://jamesricardocr.github.io/academic-javascript/3-PROYECTO-Buscador/",
      imagen: buscador,
      descripcion: "Proyecto basado en validacion de campos y array metodos.",
      tecnologias: [html, css, javascript],
    },
    {
      id: 2,
      nombre: "Envio de Emails",
      url: "https://jamesricardocr.github.io/academic-javascript/2-PROYECTO-EnviarEmail/",
      imagen: mensajes,
      descripcion:
        "Simulador de envio de correos, con validacion de formulario.",
      tecnologias: [html, css, javascript],
    },
    {
      id: 1,
      nombre: "Carrito de compras",
      url: "https://jamesricardocr.github.io/academic-javascript/1-PROYECTO-Carrito%20localStorage/",
      imagen: carrito,
      descripcion: "Carrito de compras con local storage",
      tecnologias: [html, css, javascript],
    },
    {
      id: 13,
      nombre: "Bienes raices",
      url: "https://jamesricardocr.github.io/HTML-CSS/proyecto-finca-raiz/",
      imagen: bienes,
      descripcion: "Sitio web creado con HTML y CSS",
      tecnologias: [html, css, javascript],
    },
    {
      id: 12,
      nombre: "Blog café",
      url: "https://jamesricardocr.github.io/HTML-CSS/proyecto-cafe/",
      imagen: cafe,
      descripcion: "Sitio web creado con HTML y CSS",
      tecnologias: [html, css, javascript],
    },
  ]);

  const mensaje = "En esta sección encuentras todos mis proyectos académicos.";
  return (
    <ragment>
      <div className="header">
        <Menu />
        <Logo />
      </div>
      <AccionPortafolio mensaje={mensaje} />
      <div className="container-proyectos">
        {proyectos.map((proyecto) => (
          <MostrarProyectos key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
      <br />
      <Redes />
    </ragment>
  );
};

export default Academicos;
