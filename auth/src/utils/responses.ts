import express from 'express';

export function invalidTokenResponse(response: express.Response, tokenType: string) {
    response.status(401)
        .json({error: "Wrong " + tokenType + " token"})
        .send();
}