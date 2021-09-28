import React, {Fragment} from 'react'
import Logo from './subcomponents/Logo';
import Accion from './Accion';
import Contacto from './Contacto';
import Redes from './subcomponents/Redes';
const Home = () => {
    return ( 
    
    <Fragment>
        <Logo/>
        <Accion/>
        <Contacto/>
        <Redes/>
    </Fragment>
    );
}
 
export default Home;