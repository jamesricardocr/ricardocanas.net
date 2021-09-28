import React from 'react'
import logoRicardo from '../../img/logoBlanco.png'
const Logo = () => {

    const saludar = function (){
        alert('Funciona')
    }
    return ( 
        <img 
        src={logoRicardo} alt="ricardo cañas" 
        className="logo"
        onClick = {()=> saludar()}
        />
     );
}
 
export default Logo;