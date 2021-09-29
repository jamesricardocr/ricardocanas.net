import React, { Fragment } from 'react';



const MostrarProyectos = ({proyecto}) => {
   const {nombre, url, imagen, tecnologias, descripcion} = proyecto;
    console.log(tecnologias);

    return (
         
        <Fragment>
            <div className="proyectos">
                <div className="imagen-proyecto">
                    <img src={imagen} alt="" />
                </div>
                <div className="datos-proyecto">
                    <h2 className="titulo-proyecto">{nombre}</h2>
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