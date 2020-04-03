import Item from '../models/item';
import {getCategory, getId, getName, notFoundResponse} from '../utils/utils';

export default async (request , response) => {
    if (!getId(request)) {
        notFoundResponse(response, getId(request));
        return;
    }

    await Item.count({_id: getId(request)}).then(async count => {
        if (count)  {
            await Item.find({_id: getId(request)}).then(doc => {
                response.json(doc);
                response.send();
            });
        } else {
            notFoundResponse(response, getId(request));
        }
    });
}
