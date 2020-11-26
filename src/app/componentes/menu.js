import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Menu extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
                  <Link to="/" className="navbar-brand ">DIARIO</Link>

                  <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/categoria/politica" className="nav-link">Politica</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/categoria/salud" className="nav-link">Salud</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/categoria/economia" className="nav-link">Economia</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/categoria/deportes" className="nav-link">Deportes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/categoria/ciencia" className="nav-link">Ciencia y Tec.</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/categoria/policial" className="nav-link">Policial</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/categoria/mundo" className="nav-link">Mundo </Link>
                        </li>
                    </ul>
                </div>
                </nav>
                <div className="container-fluid" style={estiloCorona}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 pt-2 text-black">
                        <h4>CORONAVIRUS EN MEXICO</h4>
                    </div>
                    <div className="col-md-6">
                    <div className="row ">
                            <div className="col-md-3 text-black text-center">
                                <h6>CASOS</h6>
                            </div>
                            <div className="col-md-3 text-black text-center">
                                <h6>RECUPERADOS</h6>
                            </div>
                            <div className="col-md-3 text-danger text-center">
                                <h6>MUERTOS</h6>
                            </div>
                        </div>
                        <div className="row mt-n1 mb-n1">
                            <div className="col-md-3 text-center">
                                <h6>1.06 M</h6>
                            </div>
                            <div className="col-md-3 text-center">
                                <h6>792 k</h6>
                            </div>
                            <div className="col-md-3 text-center">
                                <h6>103 k</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

const estiloCorona = {
    'backgroundColor':'orange',
    "borderBottom": "black 2px solid",
    "borderTop": "black 2px solid"
    
}
export default Menu