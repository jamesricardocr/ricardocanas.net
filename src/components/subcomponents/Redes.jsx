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
            <div className="redes">
            <img src={facebook} alt="icono facebook" />
            <img src={github} alt="icono github" />
            <img src={instagram} alt="icono instagram" />
            <img src={linkedin} alt="icono linkedin" />
            <img src={twitter} alt="icono twitter" />
            <img src={whatsapp} alt="icono whatsapp" />
            </div>
        </Fragment>
     );
}
 
export default Redes;