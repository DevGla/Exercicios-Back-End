const express = require('express');
const router = express.Router();
const {controllerGetAuthor,controllerGetByIdAuthor,controllerPostAuthor } = require('../controller/controllerAuthor');

router.get('/author', controllerGetAuthor);
router.get('/author/:id', controllerGetByIdAuthor);
router.post('/author', controllerPostAuthor);

module.exports = router;