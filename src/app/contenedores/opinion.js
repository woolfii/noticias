import React, { Component } from 'react'

export default class opinion extends Component {
    constructor(props){
        super(props);
        this.state ={
            informacion:{}
        }
    }

    async componentDidMount(){
        let parametro = this.props.match.params.id;
        let opinion = await fetch(`http://localhost:3000/api/opinion/${parametro}`)
        let opinionjson = await opinion.json();
        this.setState({informacion:opinionjson});
    }
    render() {
        let{informacion}= this.state;
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
                            Aqui van a ir los comentariosAqui van a ir los comentarios
                        </div>
                    </div>
                </div>
            )
        }
        else{
           return (
            <div>
                estas en Opinion 
            </div>
          )   
        }
        
    }
}
