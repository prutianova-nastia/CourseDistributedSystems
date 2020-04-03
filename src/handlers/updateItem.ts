import Item from '../models/item';
import {getCategory, getId, getName, notFoundResponse} from '../utils/utils';

export default async (request, response) => {
    if (!getId(request)) {
        notFoundResponse(response, getId(request));
        return;
    }

    await Item.count({_id: getId(request)}).then(async count => {
        if (count)  {
            Item.update({_id: getId(request)}, {
                name: getName(request),
                category: getCategory(request)
            }).then((doc) => {
                response.json(doc);
                response.status(200);
                response.send();
            })
        } else {
            notFoundResponse(response, getId(request));
        }
    });
}