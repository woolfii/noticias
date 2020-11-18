import React, { Component } from 'react'
import Contenido from '../componentes/contenidoNoticia'
import Commentarios from '../componentes/comments'
export default class Noticia extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:{},
            comentarios:[]
        };
        this.comentar = this.comentar.bind(this);
    }

    async componentDidMount(){
        let parametro = this.props.match.params.id;
        
        const not = await fetch(`http://localhost:3000/api/noticias/${parametro}`);
        const notic = await not.json();

        const coms = await fetch(`http://localhost:3000/api/comentarios/${parametro}`);
        const comments = await coms.json(coms);

        this.setState({data:notic,comentarios:comments});
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
            input.value="";
            txta.value="";
            this.setState({comentarios:comments});
        }
    }

    render() {
        let {data,comentarios} = this.state;
        return (
            <div className="row mx-2 mt-4">

                <div className="col-md-9">
                    { 
                    data[0] ? <Contenido contenido={data[0]} />  : null
                    }
                    
                </div>
                <div className="col-md-3 mt-4">
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
        )
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