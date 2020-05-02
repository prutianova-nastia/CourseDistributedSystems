import Item from '../../models/item';
import { getName, getCategory } from '../../utils/utils';
import validate from '../authorization/validate';
import { invalidTokenResponse } from '../../utils/responses'

export default async (request , response) => {
    if (!validate(request)) {
        return invalidTokenResponse(response, 'access');
    }
    Item.create({
        name: getName(request),
        category: getCategory(request)
    }).then(doc => {
        response.json(doc)
            .status(201).send();
    });
}