// Esercizio
// Dopo aver completato tutte le operazioni CRUD, completiamo le nostre API inserendo un middleware per la gestione delle rotte non registrate e uno per la gestione degli errori.
// Se viene chiamato un endpoint inesistente, un middleware dovrà rispondere un messaggio e uno status appropriato.
// Se viene generato un errore, un middleware si occuperà di rispondere con un messaggio e uno status appropriato.

const posts = require('../data/posts');

function index(req, res) {
    res.json(posts);
};

function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if(!post) {
        res.status(404);
        return res.json({
            error: 'Not found',
            message: 'Post non trovato'
        })
    };

    res.json(post);
};

function store(req, res) {
    const newId = posts[posts.length - 1].id + 1;

    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        // image: req.body.image,
        tags: req.body.tags,
    }

    posts.push(newPost);

    console.log(posts);

    res.status(201);
    res.json(newPost);
};

function update(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if(!post) {
        res.status(404);
        return res.json({
            error: 'Not found',
            message: 'Post non trovato'
        })
    };

    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    console.log(posts);
    
    res.json(post);
};

function modify(req, res) {
    res.send(`Modifica parziale del post ${req.params.id}`)
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if(!post) {
        res.status(404);
        return res.json({
            error: 'Not found',
            message: 'Post non trovato'
        })
    };

    posts.splice(posts.indexOf(post), 1);
    console.log(posts);
    res.sendStatus(204);
};

module.exports = { index, show, store, update, modify, destroy};