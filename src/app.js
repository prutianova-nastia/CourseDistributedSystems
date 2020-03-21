const express = require('express');
const bodyParser = require('body-parser');
const Model = require('./model');


const app = express();
app.use(bodyParser.json());

const port = 8080;
const model = new Model();

function notFound(response, id) {
    response.status(404);
    response.json({error: "No item with id " + id});
}


app.get('/items', (request, response) => {
    response.json(model.getAll());
})

app.get('/items/:itemId', (request, response) => {
    if (model.has(request.params.itemId)) {
        response.json( model.get(request.params.itemId))
    } else {
        notFound(response, request.params.itemId);
    }
})

app.post('/items', (request, response) => {
    const name = request.body.name ? request.body.name : request.query.name;
    const category = request.body.category ? request.body.category : request.query.category;

    const itemId = model.add(name, category);

    response.status(201);
    response.json(model.get(itemId));
})

app.put('/items/:itemId', (request, response) => {
    if (!model.has(request.params.itemId)) {
        notFound(response, request.params.itemId);
        return;
    }

    const name = request.body.name ? request.body.name : request.query.name;
    const category = request.body.category ? request.body.category : request.query.category;

    const itemId = model.add(name, category);

    response.status(201);
    response.json(model.get(itemId));
})

app.delete('/items/:itemId', (request, response) => {
    if (model.delete(request.params.itemId)) {
        response.status(204);
    } else {
        notFound(response, request.params.itemId);
    }
})


app.listen(port, () => {
    console.log('Express server listening on port 8080');
});