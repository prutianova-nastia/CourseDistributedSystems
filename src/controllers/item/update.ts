import Item from '../../models/item';
import { getCategory, getId, getName } from '../../utils/utils';
import validate from "../authorization/validate";
import { invalidTokenResponse, notFoundResponse } from "../../utils/responses";

export default async (request, response) => {
    if (!validate(request)) {
        return invalidTokenResponse(response, 'access');
    }
    if (!getId(request)) {
        return notFoundResponse(response, getId(request));
    }
    Item.count({_id: getId(request)}).then(async count => {
        if (count)  {
            Item.update({_id: getId(request)}, {
                name: getName(request),
                category: getCategory(request)
            }).then((doc) => {
                response.json(doc)
                    .status(200).send();
            })
        } else {
            notFoundResponse(response, getId(request));
        }
    });
}