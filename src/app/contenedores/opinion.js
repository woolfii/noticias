import React, { Component } from 'react'
import Commentarios from '../componentes/comments'

export default class opinion extends Component {
    constructor(props){
        super(props);
        this.state ={
            informacion:{},
            comentarios:{}
        }
        this.comentar = this.comentar.bind(this);
    }

    async componentDidMount(){
        let parametro = this.props.match.params.id;
        let opinion = await fetch(`http://localhost:3000/api/opinion/${parametro}`)
        let opinionjson = await opinion.json();
        let coms = await fetch(`http://localhost:3000/api/comentarios/${parametro}`);
        let comments = await coms.json(coms);
        this.setState({informacion:opinionjson, comentarios:comments});
    }

    async comentar(){
        let parametro = this.props.match.params.id;
        let input = document.getElementById("inp");
        let txta = document.getElementById("txta");
        let cuerpo = {
            autor:input.value,
            comment:txta.value,
            idNoticias:parametro
        }
        if(input.value != "" && txta.value != "" ){
            let respons = await fetch('http://localhost:3000/api/comentarios',{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(cuerpo)
            });
            let response = await respons.json();
            let coms = await fetch(`http://localhost:3000/api/comentarios/${parametro}`);
            let comments = await coms.json(coms);
            input.value = "";
            txta.value = "";
            this.setState({comentarios:comments});
        }
    }

    render() {
        let{informacion,comentarios}= this.state;
        let opin = informacion[0];
        if(opin){
            return(
                <div>
                    <div className="row mt-4 mx-2">
                        <div className="col-md-1">
                            <img src={`http://localhost:3000/IMGopinologos/Loret.png`}  /><br/>
                            Loret
                        </div>
                        <div className="col-md-8">
                            <h1>{opin.titulo}</h1>
                            <p className="text-justify">
                                El 1 de septiembre, un día después de que Ricardo Peralta Saucedo fue destituido de su cargo en la subsecretaría de Gobierno, su director General de Juegos y Sorteos, Luis Calvo Reyes, otorgó cuatro nuevos permisos para operar casinos, todos ellos ligados al grupo de empresarios que se vieron involucrados en la tragedia del Casino Royale.
                                <br/><br/>
                                Calvo Reyes fue destituido también este lunes de la Segob, escoltado hasta la salida de su edificio por policías y con advertencias de que será investigado. Pero en medio de una purga en la dependencia para extirpar los tentáculos de Peralta Saucedo, el directivo tuvo tiempo de firmar cuatro oficios que ampararán el funcionamiento de 50 nuevos centros de apuestas en el país. 
                                <br/><br/>
                                La autorización para abrir nuevas casas de apuesta, el cobro de cuotas para no clausurar establecimientos y la expedición de nuevos permisos para administrar juegos y sorteos se convirtieron, según diversos testigos de la Segob, en un negocio millonario para Ricardo Peralta y para un grupo de funcionarios que él designó en puestos clave de la dependencia.
                                
                                
                            </p>
                            <h2>China, una de varias estrategias</h2>
                                El secretario de Turismo, Miguel Torruco, se comunicó con esta columna para comentar que su estrategia de atracción de turistas chinos sí funcionó, aunque la crisis del coronavirus afectó parte del plan.
                                Al inicio del gobierno, el titular de la Sectur invitó a 12 secretarios de turismo, 50 touroperadores y cinco líneas aéreas a reunirse con empresarios y funcionarios asiáticos para estrechar relaciones.
                                “Se cruzó la pandemia, pero el próximo año vamos a concluir la estrategia”, apuntó.
                        </div>
                        <div className="col-md-3">
                            <div style={estiloDeComments}>
                                <input id="inp" placeholder="Tu nombre" style={estiloComentario}/><br/>
                                <textarea id="txta" placeholder="Escribe tu comentario" rows="3" style={estiloComentario}/>
                                <button className="float-right btn btn-primary btn-sm" onClick={this.comentar}> Comentar! </button><br/><br/>
                                <br/>
                                <div style={estCajaComentarios}>
                                    <hr/>
                                    {
                                    comentarios.map((comentario,i)=>(
                                        <Commentarios comentario={comentario} key={i}/> 
                                    ))
                                    }  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
           return (
            <div>
                <h1>
                  !OPS! algo salio mal, ya estamos trabando para arreglarlo...  
                </h1>
            </div>
          )   
        }
        
    }
    
}
const estCajaComentarios = {
    "maxHeight":"600px",
    "overflowY":"auto"
}
const estiloComentario = {
    "width":"100%"
}
const estiloDeComments= {
    "paddingLeft":"0px"
}