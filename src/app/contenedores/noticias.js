import React, {Component} from 'react';
import Noticia from '../componentes/noticia';
import Opinologos from './opinologos'
import './noticias.css'
class Noticias extends Component{

    constructor(props){
        super(props);
        this.state ={
            noticias:[],
            opiniones:[],
            categoria:this.props.match.params.categoriaDeNoticias
        };
    }
    async componentDidMount() {
        let parametro = this.props.match.params.categoriaDeNoticias;
        if(parametro){
            let peticion = await fetch(`http://localhost:3000/api/categoria/${parametro}`);
            let peticionJson = await peticion.json();

            let peticionOpinologos = await fetch(`http://localhost:3000/api/opinologos/${parametro}`);
            let peticionOpinologosJSON = await peticionOpinologos.json();

            this.setState({noticias:peticionJson, opiniones:peticionOpinologosJSON}); 
        }
        else{
            const res = await fetch('http://localhost:3000/api/tasks');
            const resJSON = await res.json();
            
            let peticionOpinologos = await fetch('http://localhost:3000/api/opinologos');
            let peticionOpinologosJSON = await peticionOpinologos.json();

            this.setState({noticias:resJSON, opiniones:peticionOpinologosJSON}); 
        }

        
    }

    async UNSAFE_componentWillReceiveProps(nextprops){
        if(nextprops.match.params.categoriaDeNoticias != this.state.categoria){
            let cdn = nextprops.match.params.categoriaDeNoticias;
            let peticion = await fetch(`http://localhost:3000/api/categoria/${cdn}`);
            let peticionJson = await peticion.json();

            let peticionOpinologos = await fetch(`http://localhost:3000/api/opinologos/${cdn}`);
            let peticionOpinologosJSON = await peticionOpinologos.json();
            
            this.setState({noticias:peticionJson, categoria:cdn, opiniones:peticionOpinologosJSON }); 
        }
    }

    render(){
        let {noticias, opiniones} = this.state;
        return(
            <div className="row mt-4 ml-1 mr-0" >

                <div className="col-md-9 ">
                    <div className="row" style={estilo}>
                        {
                        noticias.map(( noticia, i )=>(
                            <Noticia datosNoticia={noticia} key={i}/>
                            ))
                        }   
                    </div>
                </div>

                <div  style={estilo} >  
                    <div className="row" >
                        <div className="col-md-12">
                            <div className="list-group ">
                                <a className="list-group-item list-group-item-action list-group-item-dark ">
                                    ¿Que opinan nuestros expertos sobre?
                                </a><br/>
                                {
                                opiniones.map((opinion, i )=>(
                                <Opinologos opiniones={opinion} key={i}/>    
                                ))    
                                }
                            </div>
                        </div>
                    </div>
                </div>
                   
            </div>
              
        )
    }
}

const estilo = {
    "maxHeight":"490px",
    'overflowY': 'auto',
    'overflowX':'hidden'
}

export default Noticias