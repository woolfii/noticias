const {Router} = require('express');
const router = Router();

const {getOpinologos, postOpinologos, getOpinologosPorCategoria} = require('../controllers/opinologos.controller');

router.route('/')
    .get(getOpinologos)
    .post(postOpinologos);
router.route('/:categoria')
    .get(getOpinologosPorCategoria);
    
module.exports = router;