import React, {Component} from 'react';
import Noticia from '../componentes/noticia'
class Noticias extends Component{
    render(){
        return(
            <div>
                Aqui van las noticias {this.props.categoriaDeNoticias}
            </div>
        )
    }
}
export default Noticias