import config from '../config';
import * as jwt from 'jsonwebtoken';

export default async (request, response) => {
    let decoded = null;
    try {
        decoded = jwt.verify(request.body.token, config.auth.secret);
    } catch (error) {
        response.text("False" ).send();
    }
    response.text("True" ).send();
}
