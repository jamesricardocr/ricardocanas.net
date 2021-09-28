import React, {Fragment} from 'react'
import Logo from './subcomponents/Logo';
import logosti from '../img/logosti.png';
import Accion from './Accion';
import Contacto from './Contacto';
const Home = () => {
    return ( 
    
    <Fragment>
        <img className="logosti" src={logosti} alt="" />
        <Logo/>
        <Accion/>
        <Contacto/>
    </Fragment>
    );
}
 
export default Home;