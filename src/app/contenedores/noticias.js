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
            skip:0,
            skipo:0,
            categoria:this.props.match.params.categoriaDeNoticias
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.handleScrollOp = this.handleScrollOp.bind(this);
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
            const res = await fetch('http://localhost:3000/api/tasks/0');
            const resJSON = await res.json();
            
            let peticionOpinologos = await fetch('http://localhost:3000/api/opinologos/0');
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

    async handleScroll(e){
        const { offsetHeight, scrollTop, scrollHeight} = e.target
        if (offsetHeight + scrollTop === scrollHeight) {
            let skp = this.state.skip + 6;
            this.setState({skip:skp});
            let res = await fetch(`http://localhost:3000/api/tasks/${skp}`);
            let resJSON = await res.json();
            if(resJSON.length == 0 ){
                console.log("parece que ya no hay mas noticias");
            }else{
                let fusionDeObjetos = this.state.noticias.concat(resJSON);
                this.setState({noticias:fusionDeObjetos});  
            }  
        }
    }
    async handleScrollOp(e){
        const { offsetHeight, scrollTop, scrollHeight} = e.target;
        if (offsetHeight + scrollTop === scrollHeight) {
            let skp = this.state.skipo + 4;
            this.setState({skipo:skp});
            let res = await fetch(`http://localhost:3000/api/opinologos/${skp}`);
            let resJSON = await res.json();
            if(resJSON.length == 0 ){
                console.log("parece que ya no hay mas opiniones");
            }else{
                let fusionDeObjetos = this.state.opiniones.concat(resJSON);
                this.setState({opiniones:fusionDeObjetos});  
            }  
        }
    }

    render(){
        let {noticias, opiniones} = this.state;
        return(
            <div className="row mt-4 ml-1 mr-0" >

                <div className="col-md-9 ">
                    <div className="row" style={estilo} onScroll={this.handleScroll}>
                        {
                        noticias.map(( noticia, i )=>(
                            <Noticia datosNoticia={noticia} key={i}/>
                            ))
                        }   
                    </div>
                </div>

                <div  style={estilo} onScroll={this.handleScrollOp}>  
                    <div className="row" >
                        <div className="col-md-12" >
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