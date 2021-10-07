import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';


const Accion = ({mensajePrincipal, mensajeSecundario}) => {

    const enviarWhatsapp = function(){
        window.open('https://wa.me/573232923238', '_blank');
    }
    return ( 
        <Fragment>
            <div className="accion">
                <h1>{mensajePrincipal}</h1>
                <p>{mensajeSecundario}</p>
                <div className="botones">
                
                <p 
                className="btn-whatsapp-home " 
                onClick = {()=> enviarWhatsapp()}
                >Whatsapp</p>
        
                <Link
                
                className="btn-portafolio-home " 
                to ="/Portafolio" 
                >Portafolio</Link>
                </div>
            </div>
        </Fragment>

     );
}
 
export default Accion;