import React, { Fragment } from 'react';
import facebook from '../../img/iconos-redes/facebook.svg';
import github from '../../img/iconos-redes/github.svg';
import instagram from '../../img/iconos-redes/instagram.svg';
import linkedin from '../../img/iconos-redes/linkedin.svg';
import twitter from '../../img/iconos-redes/twitter.svg';
import whatsapp from '../../img/iconos-redes/whatsapp.svg';


const Redes = () => {

    return ( 
        <Fragment>
            <div className="redes animate__animated animate__pulse">
            <img className="" src={facebook} alt="icono facebook" />
            <img className="" src={github} alt="icono github" />
            <img className="" src={instagram} alt="icono instagram" />
            <img className="" src={linkedin} alt="icono linkedin" />
            <img className="" src={twitter} alt="icono twitter" />
            <img className="" src={whatsapp} alt="icono whatsapp" />
            </div>
        </Fragment>
     );
}
 
export default Redes;