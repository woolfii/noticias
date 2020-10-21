const {Router} = require('express');
const router = Router();
const {getComments, postComment} = require('../controllers/comments.controler');


router.route('/:id')
    .get(getComments);
router.route('/')
    .post(postComment);

module.exports = router;