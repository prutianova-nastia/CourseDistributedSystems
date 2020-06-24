import Item from '../models/item';
import { getId } from '../common/utils';
import validate from '../grpc/client';
import { notFoundResponse} from "../common/responses";

async function getItem (request , response, admin) {
    if (!getId(request)) {
        return notFoundResponse(response, getId(request));
    }
    try {
        await Item.find({_id: getId(request)}).then(doc => {
            response.json(doc).send();
        });
    } catch (error) {
        notFoundResponse(response, getId(request));
    }
}

export default async (request , response) => {
    validate(request, response, getItem);
}
