import React, { Fragment } from "react";
import github from "../../img/iconos-redes/github.svg";
import instagram from "../../img/iconos-redes/instagram.svg";
import linkedin from "../../img/iconos-redes/linkedin.svg";
import whatsapp from "../../img/iconos-redes/whatsapp.svg";

const Redes = () => {
  const redesSociales = function (redSocial) {
    const redesSociales = ["linkedin", "gitHub", "instagram", "whatsapp"];

    if (redSocial === redesSociales[0]) {
      window.open("https://www.linkedin.com/in/james-ricardo-ca%C3%B1as-reales-29b639133", "_blank");
    } else if (redSocial === redesSociales[1]) {
      window.open("https://github.com/jamesricardocr", "_blank");
    } else if (redSocial === redesSociales[2]) {
      window.open("https://www.instagram.com/jamesricardocr/", "_blank");
    }else if (redSocial === redesSociales[3]){
        window.open("https://wa.me/573232923238", "_blank");
    }
  };

  return (
    <Fragment>
      <div className="redes animate__animated animate__pulse">
        <img
          className=""
          src={linkedin}
          onClick={() => redesSociales("linkedin")}
          alt="icono linkedin"
        />
        <img
          className=""
          src={github}
          onClick={() => redesSociales("gitHub")}
          alt="icono github"
        />
        <img
          className=""
          src={instagram}
          onClick={() => redesSociales("instagram")}
          alt="icono instagram"
        />
        <img
          className=""
          src={whatsapp}
          onClick={() => redesSociales("whatsapp")}
          alt="icono whatsapp"
        />
      </div>
    </Fragment>
  );
};

export default Redes;
