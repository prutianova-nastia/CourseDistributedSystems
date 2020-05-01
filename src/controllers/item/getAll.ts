import Item from '../../models/item';
import validate from "../authorization/validate";
import {invalidTokenResponse} from "../../utils/responses";

export default async (request , response) => {
    if (!validate(request)) {
        return invalidTokenResponse(response, 'access');
    }
    Item.find().then(doc => {
        response.json(doc).send();
    });
}
