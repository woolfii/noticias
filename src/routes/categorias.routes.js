const {Router} = require('express');
const router = Router();
const {getCatego} =require('../controllers/catego.controler');

router.route('/:catego')
    .get(getCatego);
 
module.exports = router;