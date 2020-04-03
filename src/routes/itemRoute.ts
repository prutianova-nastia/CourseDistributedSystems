import express from 'express';
import addItem from '../handlers/addItem';
import getAll from '../handlers/getAll';
import deleteItem from '../handlers/deleteItem';
import updateItem from '../handlers/updateItem';
import getItem from '../handlers/getItem';

const init = (): express.Router => {
    const router = express.Router();
    router.get('/items', getAll);
    router.get('/items/:itemId', getItem);
    router.post('/items', addItem);
    router.put('/items/:itemId', updateItem);
    router.delete('/items/:itemId', deleteItem);
    return router;
};

export default init;

