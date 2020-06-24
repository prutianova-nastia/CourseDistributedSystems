import Item from '../models/item';
import validate from '../grpc/client';


async function getAll(request , response, admin) {
    Item.find().then(doc => {
        response.json(doc).send();
    });
}

export default async (request , response) => {
    validate(request, response, getAll);
}