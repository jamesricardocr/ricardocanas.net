import React, { Fragment } from 'react';



const MostrarProyectos = ({proyecto}) => {

   const {nombre, url, imagen, tecnologias, descripcion} = proyecto;

    
    return (
        // animate__animated animate__slideInLeft
        <Fragment>
            <div className="proyectos animar ">
                <div className="imagen-proyecto">
                    <a  href={imagen} target="_blank"><img src={imagen} alt="" /></a> 
                </div>
                <div className="datos-proyecto">
                    <a  href={url} target="_blank"><h2 className="titulo-proyecto">{nombre}</h2></a>
                    <p className="descripcion">{descripcion}</p>
                    <a  href={url} target="_blank">Ver Proyecto</a>
                    <div className="logos-proyecto">
                        {tecnologias.map(tecnologia =>(
                            <img src={tecnologia} alt="" />
                        ))}
                    </div>
                </div>
            </div>
           
        </Fragment>
         
         );
}
 
export default MostrarProyectos;