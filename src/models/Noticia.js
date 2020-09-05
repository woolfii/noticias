const mongoose = require('mongoose');
const { Schema } =  mongoose;

const NoticiaSchema = new Schema({
    titulo: {type: String, required:true},
    imagen: {type: String},
    contenido: {type:String},
    idnoticias:{type:String, required:true}
});

module.exports = mongoose.model('NoticiaSchema', NoticiaSchema);