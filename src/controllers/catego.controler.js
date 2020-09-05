const categoControlers = {};

const Task = require('../models/Task');

categoControlers.getCatego = async (req, res) => {
    const noticias = await Task.find({genero:req.params.catego}); 
    res.json(noticias);
};

module.exports = categoControlers;