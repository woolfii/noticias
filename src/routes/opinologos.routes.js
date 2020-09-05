const {Router} = require('express');
const router = Router();

const {getOpinologos, postOpinologos} = require('../controllers/opinologos.controller');

router.route('/')
    .get(getOpinologos)
    .post(postOpinologos);

module.exports = router;