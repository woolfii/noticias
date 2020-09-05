const {Router} = require('express');
const router = Router();

const { getnoticia, postNoticia, deleteNoticia } = require('../controllers/noticia.controller')

router.route('/:id')
     .get(getnoticia)
     .delete(deleteNoticia);
router.route('/')
     .post(postNoticia);

module.exports = router;

