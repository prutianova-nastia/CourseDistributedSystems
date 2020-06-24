import Item from '../models/item';
import { getId } from '../common/utils';
import {noPermition, notFoundResponse} from "../common/responses";
import validate from '../grpc/client';

async function deleteItem (request, response, admin) {
    if (!admin) {
        noPermition(response);
    }
    if (!getId(request)) {
        return notFoundResponse(response, getId(request));
    }
    try {
        await Item.findOneAndDelete({_id: getId(request)}).then(() => {
            response.status(204).send();
        });
    } catch (error) {
        notFoundResponse(response, getId(request));
    }
}

export default async (request , response) => {
    validate(request, response, deleteItem);
}