import Item from '../models/item';
import { getName, getCategory } from '../common/utils';
import validate from '../grpc/client';
import { noPermition } from "../common/responses";

function add(request , response, admin) {
    if (!admin) {
        noPermition(response);
    }
    Item.create({
        name: getName(request),
        category: getCategory(request)
    }).then(doc => {
        response.json(doc)
            .status(201).send();
    });
}

export default async (request , response) => {
    validate(request, response, add);
}