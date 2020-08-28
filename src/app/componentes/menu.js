import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Menu extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
                  <Link to="/" className="navbar-brand ">DIARIO</Link>

                  <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/Politica" className="nav-link">Politica</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Economia" className="nav-link">Economia</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Deportes" className="nav-link">Deportes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Ciencia" className="nav-link">Ciencia y Tec.</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Policial" className="nav-link">Policial</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Mundo" className="nav-link">Mundo </Link>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}
export default Menu