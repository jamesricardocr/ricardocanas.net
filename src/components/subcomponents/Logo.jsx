import React from 'react'
import logoRicardo from '../../img/logoBlanco.png'
import { Link } from 'react-router-dom'

const Logo = () => {

    return ( 
        <Link to="/">
            <img src={logoRicardo} alt="ricardo cañas" className="logo" />
        </Link>
     );
}
 
export default Logo;