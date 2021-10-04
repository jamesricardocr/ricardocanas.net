import React, { Fragment } from 'react';



const MostrarProyectos = ({proyecto}) => {

   const {nombre, url, imagen, tecnologias, descripcion} = proyecto;

    
    return (
         
        <Fragment>
            <div className="proyectos animate__animated animate__fadeIn">
                <div className="imagen-proyecto">
                    <a className="link" href={imagen} target="_blank"><img src={imagen} alt="" /></a> 
                </div>
                <div className="datos-proyecto">
                    <a className="link" href={url} target="_blank"><h2 className="titulo-proyecto">{nombre}</h2></a>
                    <p className="descripcion">{descripcion}</p>
                    <a className="link" href={url} target="_blank">Ver Proyecto</a>
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