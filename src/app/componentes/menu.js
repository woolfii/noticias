import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Menu extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-2">
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
            </div>
        )
    }
}
export default Menu