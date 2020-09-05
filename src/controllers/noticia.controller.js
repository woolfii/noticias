const noticiaControlador = {};

const NoticiaSchema = require('../models/Noticia');



noticiaControlador.getnoticia = async (req, res) => {
    const noticia = await NoticiaSchema.find({idnoticias : req.params.id})
    res.json(noticia);
};

noticiaControlador.postNoticia = async (req, res) => {
    const{titulo, imagen, contenido, idnoticias} = req.body;
    const NuevaNoticia = new NoticiaSchema({titulo, imagen, contenido, idnoticias});
    await NuevaNoticia.save();
    res.json('recivido')
};

noticiaControlador.deleteNoticia = async (req, res) => {
    await NoticiaSchema.findByIdAndDelete(req.params.id);
    res.json({status: 'noticia eliminada'});
}

module.exports = noticiaControlador;