import React, {Component, Fragment} from 'react';

import {Link} from "react-router-dom"
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
        //console.log(offsetHeight);
        //console.log(scrollTop);
        //console.log(scrollHeight);
        if (offsetHeight + scrollTop >= scrollHeight) {
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
        if (offsetHeight + scrollTop >= scrollHeight) {
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
            <Fragment>

            <div className="row mt-4 ml-3" >
            <img src={`http://localhost:3000/img/unnamed.gif`} style={imggif}/>  
            <div className="col-md-9">
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

            <div className="container-fluid " style={estContenedor}>
                <div className="container">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            {
                                noticias.map((noti, i) => {
                                    if(i==0){
                                        return(
                                            <div className="carousel-item active">
                                                <Link to={`/noticia/${noti._id}`}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <img src={`http://localhost:3000/img/${noti.imagen}.jpg`} className="rounded" style={estiloImagen}/>
                                                    </div>
                                                    <div className="col-md-6 text-white mt-3">
                                                        <h3 >{noti.titulo}</h3>
                                                        <h5 className="text-justify">{noti.subtitulo}</h5> 
                                                    </div>
                                                </div>
                                                </Link>
                                            </div>  
                                        )
                                    }
                                    else{
                                        return(
                                            <div className="carousel-item">
                                                <Link to={`/noticia/${noti._id}`}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <img src={`http://localhost:3000/img/${noti.imagen}.jpg`} className="rounded" style={estiloImagen}/>
                                                    </div>
                                                    <div className="col-md-6 text-white mt-3">
                                                        <h3 >{noti.titulo}</h3>
                                                        <h5 className="text-justify">{noti.subtitulo}</h5> 
                                                    </div>
                                                </div>
                                                </Link>
                                            </div>   
                                            )
                                    }
                                })
                            }
                            
                            
                        </div>
                    </div> 
                </div>
            </div> 
            
            <br/>

            <div class="card bg-dark text-white" style={EstiloMasVistos}>
                <img src={`http://localhost:3000/img/diego.jpg`}   class="card-img" style={estiloImagenMV } alt="..."/>
                <div class="card-img-overlay">
                    <h3 class="card-text">Muere Maradona a los 60 anos por un paro cardio respiratorio.</h3>                
                </div>
            </div>
            <div class="card bg-dark text-white" style={EstiloMasVistos}>
                <img src={`http://localhost:3000/img/ebrard.jpg`}   class="card-img" alt="..." style={estiloImagenMV }/>
                <div class="card-img-overlay">
                    <h3 class="card-text">Ebrard asegura que habra vacuna en diciembre</h3>                
                </div>
            </div>
                
            <br/>
            
            <div class="card bg-dark text-white" style={EstiloMasVistos}>
                <img src={`http://localhost:3000/img/trumpi.jpg`}   class="card-img" style={estiloImagenMV } alt="..."/>
                <div class="card-img-overlay">
                    <h3 class="card-text">Trump invita a los estadounidenses a reunirse en casas e iglesias</h3>                
                </div>
            </div>
            <div class="card bg-dark text-white" style={EstiloMasVistos}>
                <img src={`http://localhost:3000/img/amli.jpg`}   class="card-img" alt="..." style={estiloImagenMV }/>
                <div class="card-img-overlay">
                    <h3 class="card-text">AMLO presenta Guía Ética para la Transformación de México</h3>                
                </div>
            </div>
                
            <br/>

        </Fragment>
        )
    }
}

const estilo = {
    "maxHeight":"490px",
    'overflowY': 'auto',
    'overflowX':'hidden'
}
const estiloImagen = {
    'height':'250px',
    'width':'100%',
    'margin':'20px'
}
const estiloImagenMV = {
    'height':'100%',
    'width':'100%',
    'margin':'15px',
    "display":"inline-block"
}
const EstiloMasVistos = {
    'height':'250px',
    'width':'600px',
    'margin':'20px',
    "display":"inline-block"
}
const estiloImagenBlog= {
    'height':'250px',
    'width':'300px',
    'margin':'20px'
}
const imggif = {
    'height':'70px',
    'width':'50px',
    'position':'absolute',
    'z-index':'7',
    'marginLeft':'-25px'
}

const estContenedor = {
    'backgroundColor':'#1e2124',
    "marginTop":"60px",
    "borderTop": "black 3px solid",
    "borderBottom": "black 3px solid"
}


const EstiloBlog = {
}

export default Noticias