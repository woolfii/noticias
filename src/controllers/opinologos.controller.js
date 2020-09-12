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

module.exports = controladoOpinologos;