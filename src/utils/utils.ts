import express from 'express';

export function getName(request: express.Request): string | undefined {
    return request.body.name ? request.body.name : request.query.name;
}

export function getCategory(request: express.Request) : string | undefined {
    return request.body.category ? request.body.category : request.query.category;
}

export function getEmail(request: express.Request) : string | undefined {
    return request.body.email ? request.body.email : request.query.email;
}

export function getToken(request: express.Request) : string | undefined {
    return request.body.token ? request.body.token : request.query.token;
}

export function getId(request: express.Request) : string | undefined {
    return request.params.itemId;
}
