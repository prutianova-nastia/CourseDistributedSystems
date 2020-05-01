import config from '../../config';
import * as jwt from 'jsonwebtoken';

export default (request) => {
    let decoded = null;
    try {
        decoded = jwt.verify(request.body.token, config.auth.secret);
    } catch (error) {
        return false;
    }
    return true;
}