const mongoose = require('mongoose');
const {Schema} = mongoose;

const OpinionSchema = new Schema({
    titulo:{type:String},
    contenido:{type:String},
    idOpinologos:{type:String}
});

module.exports = mongoose.model('OpinionSchema',OpinionSchema);