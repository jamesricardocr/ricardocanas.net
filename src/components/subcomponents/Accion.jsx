import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';


const Accion = () => {

    const enviarWhatsapp = function(){
        window.open('https://wa.me/573232923238', '_blank');
    }
    return ( 
        <Fragment>
            <div className="accion">
                <h1>Lorem isum dolor sit, amet consectetur adipisicing elit.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eum iure placeat, quis soluta quibusdam temporibus. Qui sequi id obcaecati.</p>
                <div className="botones">
                
                <p 
                className="Whatsapp redes animate__animated animate__pulse" 
                onClick = {()=> enviarWhatsapp()}
                >Whatsapp</p>
        
                <Link 
                className="Portafolio redes animate__animated animate__pulse" 
                to ="/Portafolio" 
                >Portafolio</Link>
                </div>
            </div>
        </Fragment>

     );
}
 
export default Accion;