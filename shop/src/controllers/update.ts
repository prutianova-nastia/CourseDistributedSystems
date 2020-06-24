import Item from '../models/item';
import { getCategory, getId, getName } from '../common/utils';
import validate from '../grpc/client';
import {invalidTokenResponse, noPermition, notFoundResponse} from "../common/responses";

async function update (request, response, admin) {
    if (!admin) {
        noPermition(response);
    }
    if (!getId(request)) {
        return notFoundResponse(response, getId(request));
    }
    try {
        await Item.update({_id: getId(request)}, {
            name: getName(request),
            category: getCategory(request)
        }).then((doc) => {
            response.json(doc)
                .status(200).send();
        });
    } catch (error) {
        notFoundResponse(response, getId(request));
    }
}

export default async (request , response) => {
    validate(request, response, update);
}