import express from 'express';

export function getEmail(request: express.Request) : string | undefined {
    return request.body.email ? request.body.email : request.query.email;
}

export function getToken(request: express.Request) : string | undefined {
    return request.body.token ? request.body.token : request.query.token;
}

export function getUsername(request: express.Request) : string | undefined {
    return request.body.username ? request.body.username : request.query.token;
}

