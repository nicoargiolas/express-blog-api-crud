const express = require('express');
const app = express();
const cors = require("cors");
const port = 3000;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

// Importazione
const posts = require('./data/posts');
const postsRouter = require('./routers/posts-router');
const errorsHandler = require('./middlewares/errorsHandler');
const notFound = require('./middlewares/notFound');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Home');
});

app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

app.use(errorsHandler);
app.use(notFound);