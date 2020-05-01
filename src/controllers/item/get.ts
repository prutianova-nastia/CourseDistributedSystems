import Item from '../../models/item';
import { getId } from '../../utils/utils';
import validate from "../authorization/validate";
import { invalidTokenResponse, notFoundResponse } from "../../utils/responses";

export default async (request , response) => {
    if (!validate(request)) {
        return invalidTokenResponse(response, 'access');
    }
    if (!getId(request)) {
        return notFoundResponse(response, getId(request));
    }
    Item.count({_id: getId(request)}).then(async count => {
        if (count)  {
            Item.find({_id: getId(request)}).then(doc => {
                response.json(doc).send();
            });
        } else {
            notFoundResponse(response, getId(request));
        }
    });
}
