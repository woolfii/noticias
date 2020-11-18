import React from 'react'

const contenidoNoticia = ({ contenido }) => {
    return (
        <div>
            <h1 className="p-4">{contenido.titulo}</h1> 
            <img src={`http://localhost:3000/img/${contenido.imagen}.jpg`} style={estilo}/>
            <h5 className="text-justify p-4"> {contenido.contenido} </h5>
        </div>
    );
};

const estilo = {
    "width":"100%",
    "padding":"10px"
}

export default contenidoNoticia
