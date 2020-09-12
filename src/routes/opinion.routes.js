const {Router} = require('express');
const router = Router();
const { getOpinion,postOpinion} = require('../controllers/opinologos.controller');

router.route('/:id')
    .get(getOpinion);

router.route('/')
    .post(postOpinion);
module.exports = router;