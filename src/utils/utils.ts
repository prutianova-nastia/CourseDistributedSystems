import express from 'express';

export function getName(request: express.Request): string | undefined {
    return request.body.name ? request.body.name : request.query.name;
}

export function getCategory(request: express.Request) : string | undefined {
    return request.body.category ? request.body.category : request.query.category;
}

export function getId(request: express.Request) : string | undefined {
    return request.params.itemId;
}
