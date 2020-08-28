const mongoose = require('mongoose')
const URI = 'mongodb://localhost/noticias';

mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('db is connected'))
    .catch(err => console.log("no se pudo conectar"));

module.exports = mongoose;