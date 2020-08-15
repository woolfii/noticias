import React, {Component} from 'react';
class Menu extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between" >
                  <a className="navbar-brand " href="#" >DIARIO</a>

                  <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Politica</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Economia</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Deportes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ciencia y Tec.</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Policial</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Mundo</a>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}
export default Menu