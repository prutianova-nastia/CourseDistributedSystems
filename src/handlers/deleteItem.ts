import Item from '../models/item';
import { getId, notFoundResponse } from '../utils/utils';

export default async (request, response) => {
    if (!getId(request)) {
        notFoundResponse(response, getId(request));
        return;
    }

    await Item.count({_id: getId(request)}).then(async count => {
        if (count)  {
            await Item.findOneAndDelete({_id: getId(request)}).then(() => {
                response.status(204);
                response.send();
            });
        } else {
            notFoundResponse(response, getId(request));
        }
    });
}