import Item from '../models/item';

export default async (request , response) => {
    await Item.find().then(doc => {
        response.json(doc);
        response.send();
    });
}
