import Item from '../models/item';
import { getName, getCategory } from '../utils/utils';

export default async (request , response) => {
    await Item.create({
        name: getName(request),
        category: getCategory(request)
    }).then(doc => {
        response.json(doc);
        response.status(201);
        response.send();
    });
}