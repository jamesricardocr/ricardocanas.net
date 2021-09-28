import React, { Fragment } from 'react'
import Formulario from './subcomponents/Formulario';

const Contacto = () => {
    return ( 
        <Fragment>
        <div className="contacto">
            <h2>Contacto</h2>
            <Formulario/>
            {/* <Redes/> */}
        </div>
        </Fragment>
     );
}
 
export default Contacto;