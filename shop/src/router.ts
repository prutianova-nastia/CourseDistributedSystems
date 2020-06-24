import express from 'express';
import addItem from './controllers/add';
import getAll from './controllers/getAll';
import deleteItem from './controllers/delete';
import updateItem from './controllers/update';
import getItem from './controllers/get';

const init = (): express.Router => {
    const router = express.Router();
    router.get('/', getAll);
    router.get('/:itemId', getItem);
    router.post('/', addItem);
    router.put('/:itemId', updateItem);
    router.delete('/:itemId', deleteItem);
    return router;
};

export default init;
