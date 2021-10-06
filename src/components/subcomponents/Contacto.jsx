import React, { Fragment } from 'react'
import Formulario from './Formulario';

const Contacto = () => {
    return ( 
        <Fragment>
        <div id="contacto" className="contacto">
            <h2>Contacto</h2>
            <Formulario/>
            {/* <Redes/> */}
        </div>
        </Fragment>
     );
}
 
export default Contacto;