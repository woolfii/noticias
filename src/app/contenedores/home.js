import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom'
//componenetes
import Menu from '../componentes/menu'
import Noticias from './noticias'
const Task = require('../../models/Task');

class App extends Component{
    render(){
        return(
            <Router>    
                <Menu/>
                <div className="container p-8">
                    <Switch>
                        <Route path="/:categoriaDeNoticias" exact children={<NoticiasContenedor/>} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
function NoticiasContenedor() {
    let { categoriaDeNoticias } = useParams();
    return (
      <Noticias categoriaDeNoticias={categoriaDeNoticias}/>
    );
  }
  
export default App