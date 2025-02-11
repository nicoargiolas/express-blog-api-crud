

const express = require('express');
const app = express();
const port = 3000;

// Importazione
const posts = require('./data/posts');
const postsRouter = require('./routers/posts-router');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Home');
});

app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});