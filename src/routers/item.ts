import express from 'express';
import addItem from '../controllers/item/add';
import getAll from '../controllers/item/getAll';
import deleteItem from '../controllers/item/delete';
import updateItem from '../controllers/item/update';
import getItem from '../controllers/item/get';

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
