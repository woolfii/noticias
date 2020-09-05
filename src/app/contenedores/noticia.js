import React, { Component } from 'react'
import Contenido from '../componentes/contenidoNoticia'
import Commentarios from '../componentes/comments'
export default class Noticia extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:{}
        };
    }

    async componentDidMount(){
        let parametro = this.props.match.params.id;
        const not = await fetch(`http://localhost:3000/api/noticias/${parametro}`);
        const notic = await not.json();
        this.setState({data:notic});
    }

    render() {
        let {data} = this.state;
        return (
            <div className="row mx-2 mt-4">

                <div className="col-md-8">
                    { 
                    data[0] ? <Contenido contenido={data[0]} />  : null
                    }
                    
                </div>
                <div className="col-md-4">
                    <Commentarios />
                </div>

            </div>
        )
    }
}
