import React, { Fragment } from "react";

const AccionPortafolio = ({mensaje}) => {

  const enviarWhatsapp = function () {
    window.open("https://wa.me/573232923238", "_blank");
  };

  return (
    <Fragment>
      <div className="accion">
        <h1 className = "titulo-accion-portafolio">{mensaje}</h1>
        <p
        id="whatsapp-portafolio"
        className="whatsapp-portafolio" 
        onClick={() => enviarWhatsapp()}>
        Whatsapp</p>
      </div>
    </Fragment>
  );
};

export default AccionPortafolio;
