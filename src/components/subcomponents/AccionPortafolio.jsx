import React, { Fragment } from "react";

const AccionPortafolio = () => {

  const enviarWhatsapp = function () {
    window.open("https://wa.me/573232923238", "_blank");
  };

  return (
    <Fragment>
      <div className="accion">
        <h1>Lorem isum dolor sit, amet consectetur adipisicing elit.</h1>
        <p 
        className="whatsapp-portafolio" 
        onClick={() => enviarWhatsapp()}>
        Whatsapp</p>
      </div>
    </Fragment>
  );
};

export default AccionPortafolio;
