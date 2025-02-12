// Milestone 1
// Per iniziare, andiamo su Postman e prepariamo una nuova chiamata verso la nostra rotta store.
// Impostiamo il verbo e l’endpoint corretti
// Selezioniamo il tab body e scegliamo il formato raw e JSON
// Inseriamo come corpo della nostra request un oggetto che rappresenti un nuovo post
// Nota: se vogliamo avere delle immagini, inventiamole pure.
// Nota: ricordiamo che non bisogna passare l’id quando si crea una nuova risorsa: sarà il server (con l’aiuto del database) a fornirlo.
// Milestone 2
// Impostiamo il body-parser per far sì che la nostra app riesca a decifrare il request body.
// Poi, all’interno della rotta Store, stampiamo nel terminale i dati in arrivo, grazie a un console.log
// Milestone 3
// Implementiamo quindi la logica per aggiungere un nuovo post al nostro blog, e prepariamo la risposta adeguata.
// Testiamolo con postman.
// Milestone 4
// Ripetiamo il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le nostre risorse.
// Bonus
// Quelli del giorno prima, se non già fatti
// In Update, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.

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