import config from '../config';
import * as jwt from 'jsonwebtoken';
import Session from '../models/session';

export default async (call, callback) => {
    let valid = true;
    let admin = false;
    try {
        const is_valid = jwt.verify(call.request.token, config.auth.secret);
    } catch (error) {
        valid = false;
    }
    if (valid) {
        const session = await Session.findOne({
            accessToken: call.request.token,
        });
        // @ts-ignore
        admin = session.admin;
    }
    console.log(valid, admin);
    callback(null, {is_valid: valid, is_admin: admin });
}