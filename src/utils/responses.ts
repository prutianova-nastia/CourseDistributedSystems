import express from 'express';

export function notFoundResponse(response: express.Response, id: string) {
    response.status(404)
        .json({error: "No item with id " + id})
        .send();
}

export function invalidTokenResponse(response: express.Response, tokenType: string) {
    response.status(401)
        .json({error: "Wrong " + tokenType + " token"})
        .send();
}


