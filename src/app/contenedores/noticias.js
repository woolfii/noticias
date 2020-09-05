import React, {Component} from 'react';
import Noticia from '../componentes/noticia';
import Opinologos from './opinologos'
class Noticias extends Component{

    constructor(props){
        super(props);
        this.state ={
            noticias:[],
            categoria:this.props.match.params.categoriaDeNoticias
        };
    }
    async componentDidMount() {
        let parametro = this.props.match.params.categoriaDeNoticias;
        if(parametro){
            let peticion = await fetch(`http://localhost:3000/api/categoria/${parametro}`);
            let peticionJson = await peticion.json();
            this.setState({noticias:peticionJson}); 
        }
        else{
           const res = await fetch('http://localhost:3000/api/tasks');
            const resJSON = await res.json();
            this.setState({noticias:resJSON}); 
        }

        
    }

    async UNSAFE_componentWillReceiveProps(nextprops){
        if(nextprops.match.params.categoriaDeNoticias != this.state.categoria){
            let cdn = nextprops.match.params.categoriaDeNoticias;
            let peticion = await fetch(`http://localhost:3000/api/categoria/${cdn}`);
            let peticionJson = await peticion.json();
            this.setState({noticias:peticionJson, categoria:cdn}); 
        }
    }
    render(){
        let {noticias} = this.state;
        return(
            <div className="row mt-4 ml-1 mr-1">

                <div className="col-md-9 ">
                    <div className="row">
                        {
                        noticias.map(( noticia, i )=>(
                            <Noticia datosNoticia={noticia} key={i}/>
                            ))
                        }   
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
export default Noticias