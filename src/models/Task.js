const mongoose = require('mongoose');
const {Schema} = mongoose;

const TaskSchema = new Schema({
    titulo: {type: String, required:true},
    subtitulo:{type: String, required:true},
    fecha:{type: String, required:true},
    imagen:{type: String, required:true},
    etiquetas:{type: String, required:true},
    genero:{type: String, required:true}
});

module.exports = mongoose.model('Task', TaskSchema);