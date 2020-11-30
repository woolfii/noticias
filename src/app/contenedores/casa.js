import React,{Component} from 'react'


export default class Casa extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:{}
        }
        this.enClick = this.enClick.bind(this);
    }
    
    async enClick() {
        let input = document.getElementById("txta");
        if(input.value == null || input.value == "" ){
            alert("ingresa algo por favor!")
        }
        else{
            let inp = encodeURI(input.value);
            try{
                let response = await fetch(`https://rjzh17nu94.execute-api.us-east-1.amazonaws.com/dev/buscar3/${inp}`);
                let responsejson = await response.json();
                this.setState({data:responsejson})
            }
            catch{
                alert("algo a salido mal vuelve a cargar la pagina");
                location.reload();
            }
        }
        
        
    }
    render() {
        if (typeof(Storage) !== 'undefined') {
           console.log(sessionStorage.getItem('tabSessionId'));
          } else {
            console.log("else")
          }
        let {data} = this.state;
        let datos=[];
        for (let clave in data){
            datos.push(clave);
            data[clave]?datos.push(data[clave]):datos.push("No se encontraron registros.")
        }
         return(
            <div>
                <div className="container-fluid mb-3" style={estiloBarra}>
                    <div className="container">
                      <input id="txta" placeholder="ingresa algo" className="  m-2"></input>
                      <button className="btn-primary" onClick={this.enClick}>Buscar</button> 
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {datos.map((dat,i)=>{
                            let x = i%2;
                            if(x){
                                return <div className="col-md-9 text-left text-white" style={estiloCol2} key={i}>{dat}</div>
                            }
                            else{
                                return <div className="col-md-3 text-left text-white" style={estiloCol} key={i}>{dat}</div>
                            }
                            })}
                    </div>
                </div>    
          </div>
      
      )}
  }
  const estiloBarra={
    'backgroundColor':'#1c2331  ',
  }
  const estiloCol={
    "borderBottom": "black 1px solid",
    "borderTop": "black 1px solid",
    "borderLeft": "black 1px solid",
    'backgroundColor':'gray'
    
  }
  const estiloCol2={
    "borderLeft": "black 1px solid",
    "borderBottom": "black 1px solid",
    "borderTop": "black 1px solid",
    "borderRight": "black 1px solid",
    'backgroundColor':'darkgray'
    
  }