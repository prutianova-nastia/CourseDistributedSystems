const http = require('http');
const url = require('url');
const querystring = require('querystring');
const Model = require('./model');

const port = 8080;
const model = new Model();

function setResponse(response, statusCode, content) {
    response.writeHead(statusCode, {"Content-Type": "application/json"});
    response.write(content);
    response.end();
    return response;
}

function getId(path) {
    const pathParts = path.split('/');
    if (pathParts.length < 3 || pathParts[2] === "") return 0;
    return pathParts[2];
}

const server = http.createServer(function(request, response) {
    const params = querystring.parse(url.parse(request.url).query);
    const path = url.parse(request.url).pathname;

    const itemId = getId(path);

    if (request.method == "GET") {
        if (itemId && model.has(itemId)) {
            setResponse(response, 200, model.get(itemId));
        } else {
            setResponse(response, 200, model.getAll());
        }
    }

    if (request.method == "POST") {
        const itemId = model.add(params['name'], params['category']);
        setResponse(response, 201, model.get(itemId));
    }

    if (request.method == "PUT") {
        const itemId = model.add(params['name'], params['category']);
        setResponse(response, 200, model.get(itemId));
    }

    if (request.method == "DELETE") {
        model.delete(itemId);
        setResponse(response, 204, JSON.stringify(new Object()));
    }
});

server.listen(port);