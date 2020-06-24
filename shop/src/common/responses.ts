import express from 'express';

export function notFoundResponse(response: express.Response, id: string) {
    response.status(404)
        .json({error: "No controllers with id " + id})
        .send();
}

export function noPermition(response: express.Response) {
    response.status(404)
        .json({error: "Not found"})
        .send();
}

export function invalidTokenResponse(response: express.Response, tokenType: string) {
    response.status(401)
        .json({error: "Wrong " + tokenType + " token"})
        .send();
}


