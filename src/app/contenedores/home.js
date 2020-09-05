import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
//componenetes
import Menu from '../componentes/menu'
import Noticias from './noticias'
import Noticia from "./noticia"

class App extends Component{
    render(){
        return(
            <Router>    
                <Menu/>
                <Route path="/" exact component={Noticias}/>
                <Route path="/categoria/:categoriaDeNoticias" component={Noticias}/>
                <Route path="/noticia/:id" component={Noticia} />
            </Router>
        )
    }
}

  
export default App