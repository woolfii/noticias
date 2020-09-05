import React, {Component} from 'react';
import Noticia from '../componentes/noticia';
import Opinologos from './opinologos'
class Noticias extends Component{

    constructor(props){
        super(props);
        this.state ={
            noticias:[]
        };
    }
    async componentDidMount() {
        const res = await fetch('http://localhost:3000/api/tasks');
        const resJSON = await res.json();
        console.log(this.props.match.params.categoriaDeNoticias);
        this.setState({noticias:resJSON});
    }
    
    async cargarNoticia(parametro){
        let peticion = await fetch(`http://localhost:3000/api/categoria/${parametro}`);
        let peticionJson = await peticion.json();
    }

    render(){
        let parametro = this.props.match.params.categoriaDeNoticias;
        if (parametro) {
            this.cargarNoticia(parametro);
            return(
                <div>
                    aqui va a ir noticia
                </div>
            )
        }
        else{  
            let {noticias} = this.state;
            return(
                <div className="row mt-4 ml-1 mr-1">

                    <div className="col-md-9 ">
                        <div className="row">
                         {
                            noticias.map(( noticia, i )=>(
                                <Noticia datosNoticia={noticia} key={i}/>
                            )

                        )}   
                        </div>
                        
                    </div>

                    <div className="col-md-3" >  
                        <div className="row">
                            <Opinologos /> 
                        </div>
                    </div>
                   
                </div>
              
        )

        }
      
    }
}
export default Noticias