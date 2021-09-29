import React, {Fragment} from 'react'
import Logo from './subcomponents/Logo';
import Accion from './subcomponents/Accion';
import Contacto from './subcomponents/Contacto';
import Redes from './subcomponents/Redes';
const Home = () => {
    return ( 
    
    <Fragment>
        <div className="container">
        <Logo/>
        <Accion/>
        <Contacto/>
        <Redes/>
        </div>
    </Fragment>
    );
}
 
export default Home;