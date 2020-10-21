const commentController ={};

const Comment = require('../models/CommentsSchema');

commentController.getComments = async (req,res) =>{
    const comentario = await Comment.find({idNoticias:req.params.id});
    res.json(comentario);
}

commentController.postComment = async (req,res)=>{
    const{autor, comment, idNoticias} = req.body;
    const nuevoComment = new Comment({autor, comment, idNoticias});
    await nuevoComment.save();
    res.json('guardado');
}

module.exports = commentController;