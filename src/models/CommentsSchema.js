const mongoose = require('mongoose');
const {Schema}= mongoose;

const CommentsSchema = new Schema({
    autor:{type: String},
    comment:{type:String},
    idNoticias:{type:String}
});

module.exports =  mongoose.model('CommentsSchema', CommentsSchema);
