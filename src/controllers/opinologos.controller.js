const controladoOpinologos = {};

const OpinologoSchema = require('../models/Opinologos');


controladoOpinologos.getOpinologos = async (req, res) =>{
    const Opinologos = await OpinologoSchema.find();  
    res.json(Opinologos);  
}

controladoOpinologos.postOpinologos = async (req,res)=>{
    const {Nombre, Imagen, Genero,Titulo} = req.body;
    const nuevoOpinologo = new OpinologoSchema({Nombre, Imagen, Genero,Titulo});
    await nuevoOpinologo.save();
    res.json('opinologo registraduky')
}
module.exports = controladoOpinologos;