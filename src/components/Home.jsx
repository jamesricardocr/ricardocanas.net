import React, {Fragment} from 'react'
import Logo from './subcomponents/Logo';
import Accion from './subcomponents/Accion';
import Contacto from './subcomponents/Contacto';
import Redes from './subcomponents/Redes';
const Home = () => {
    let mensajePrincipal = "Soy desarrollador web apasionado por las nuevas tecnologías y el diseño UI y UX.";
    let mensajeSecundario = "La industria TI crece y cambia constantemente motivando a nunca parar de aprender. Las tecnologías que me acreditan como desarrollador son: SASS, React.JS, Node.JS, MongoDB, Laravel, MySQL, Java, Python";

    return ( 
        <Fragment>
        <div className="container">
        <Logo/>
        <Accion 
            key="1"
            mensajePrincipal = {mensajePrincipal}
            mensajeSecundario = {mensajeSecundario}
        />
        <Contacto/>
        <Redes/>
        </div>
    </Fragment>
    );
}
 
export default Home;