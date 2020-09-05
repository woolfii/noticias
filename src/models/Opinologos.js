const mongoose = require('mongoose');
const {Schema} = mongoose;

const OpinologoSchema = new Schema({
    Nombre:{type: String},
    Imagen:{type: String},
    Genero:{type:String},
    Titulo:{type:String}
});

module.exports = mongoose.model('OpinologoSchema',OpinologoSchema);