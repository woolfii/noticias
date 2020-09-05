const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

router.get('/',  async (req, res) => {
    const tasks = await Task.find(); 
    res.json(tasks);
});

router.post('/', async (req, res) =>{
   const{titulo, subtitulo, fecha, imagen, etiquetas, genero} = req.body;
   const task = new Task({titulo, subtitulo, fecha, imagen, etiquetas, genero});
   await task.save();
   res.json('recivido')
});


router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    const newTask = {title, description};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: 'Task Updated'});
  });
  
  router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Task Deleted'});
  });
  

module.exports = router;