import React from 'react';
import {Link} from "react-router-dom"

const Noticia = ({ datosNoticia }) => {
    return (
        <div className="col-md-4">
            <Link to={`/noticia/${datosNoticia._id}`}>
                <div className="card text-white  bg-primary mb-3" style={estilo}>
                    <img src={`http://localhost:3000/img${datosNoticia.imagen}.jpg`}  className="card-img-top"/>
                    <div className="card-body">
                        {datosNoticia.titulo}
                    </div>
                </div>            
            </Link>
        </div>
    );
};

const estilo = {
    "maxWidth": "20rem",
    "maxHeight":"300px"
}
export default Noticia