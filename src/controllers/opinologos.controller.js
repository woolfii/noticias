const controladoOpinologos = {};

const OpinologoSchema = require('../models/Opinologos');
const OpinionSchema = require('../models/opinionSchema');

controladoOpinologos.getOpinologos = async (req, res) =>{
    const Opinologos = await OpinologoSchema.find();  
    res.json(Opinologos);  
}

controladoOpinologos.postOpinologos = async (req,res)=>{
    const {Nombre, Imagen, Genero,Titulo} = req.body;
    const nuevoOpinologo = new OpinologoSchema({Nombre, Imagen, Genero,Titulo});
    await nuevoOpinologo.save();
    res.json('opinologo registraduky');
}

controladoOpinologos.getOpinion = async (req, res)=>{
    const opinion = await OpinionSchema.find({idOpinologos:req.params.id});
    res.json(opinion)
}

controladoOpinologos.postOpinion = async(req, res)=>{
    const {titulo,contenido, idOpinologos} = req.body;
    const nuevaOpinion = new OpinionSchema({titulo,contenido, idOpinologos});
    await nuevaOpinion.save();
    res.json('opinion registrada');
}

controladoOpinologos.getOpinologosPorCategoria = async (req, res) => {
    let catego = req.params.categoria;
    if( Number(catego) > -1 ){
        let opinions = await OpinologoSchema.find().skip(Number(catego)).limit(4);
        res.json(opinions);
    }
    else{
        const opiniones = await OpinologoSchema.find({Genero:req.params.categoria});
        res.json(opiniones); 
    }
}

module.exports = controladoOpinologos;