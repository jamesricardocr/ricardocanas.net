import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';


const Accion = () => {
    return ( 
        <Fragment>
            <div className="accion">
                <h1>Lorem isum dolor sit, amet consectetur adipisicing elit.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eum iure placeat, quis soluta quibusdam temporibus. Qui sequi id obcaecati.</p>
                <div className="botones">
                <Link className="Whatsapp" to ="/Whatsapp" >Whatsapp</Link>
                <Link className="Portafolio" to ="/Portafolio" >Portafolio</Link>
                </div>
            </div>
        </Fragment>

     );
}
 
export default Accion;