const express = require('express');
const postsRouter = express.Router();
const postsController = require('../controllers/posts-controller');

const posts = require('../data/posts');


postsRouter.get('/', postsController.index);

postsRouter.get('/:id', postsController.show);

postsRouter.post('/', postsController.store);

postsRouter.put('/:id', postsController.update);

postsRouter.patch('/:id', postsController.modify);

postsRouter.delete('/:id', postsController.destroy);

module.exports = postsRouter;