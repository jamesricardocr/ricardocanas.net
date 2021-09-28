import React, { Fragment } from 'react'
const Formulario = () => {
    return ( 
        <Fragment>
            <form className="formulario-contacto">
                <input type="email" placeholder="Email" />
                <input type="number" placeholder="Whatsapp"/>
                <input id="btn-enviar" type="submit" value="Enviar" />
            </form>
        </Fragment>
    );
}
 
export default Formulario;