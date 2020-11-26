import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const Opinologos =({opiniones}) =>  {
        return (
            <div >
                <Link to={`/opinion/${opiniones._id}`}>

                 <a href="#" className="list-group-item list-group-item-action bg-dark" style={EstiloTarjeta}>
                    <div className="text-uppercase text-white ">
                        {opiniones.Titulo}
                    </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action" style={EstiloTarjeta}>
                    <div className="row mb-0">
                        <div className="col-md-4">
                            <img src={`http://localhost:3000/IMGopinologos/${opiniones.Imagen}.png`} />
                        </div>
                        <div className="col-md-8">
                            <br/>{opiniones.Nombre}<br/>
                            <small className="text-muted">{opiniones.Genero}</small>
                        </div>
                    </div>
                </a>
                </Link><br/>
            </div> 
        )
}

const EstiloTarjeta = {
    "borderLeft": "black 6px solid"
}

export default Opinologos