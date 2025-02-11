// Milestone 1
// Come prima cosa, creiamo un controller per i nostri post, in una cartella controllers.
// All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi).
// Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.
// Testiamo su postman se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima.
// Se tutto funziona, passiamo alla prossima milestone
// Milestone 2
// Per iniziare, creiamo una cartella data in cui creare un file che contenga ed esporti l’array di posts che trovate in allegato. Importiamo questo file in cima al controller.
// Ora passiamo ad implementare le logiche delle nostre CRUD:
// Index dovrà restituire la lista dei post in formato JSON
// Show dovrà restituire un singolo post in formato JSON
// Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.

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
    res.send('Creazione nuovo post');
};

function update(req, res) {
    res.send(`Modifica parziale del post ${req.params.id}`);
};

function modify(req, res) {
    res.send(`Modifica integrale del post ${req.params.id}`)
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