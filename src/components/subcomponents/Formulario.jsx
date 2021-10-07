import React, { Fragment } from 'react'
const Formulario = () => {
    return ( 
        <Fragment>
            <form className="formulario-contacto">
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Whatsapp"/>
                <button id="btn-enviar">Enviar</button>
                
            </form>
        </Fragment>
    );
}
 
export default Formulario;