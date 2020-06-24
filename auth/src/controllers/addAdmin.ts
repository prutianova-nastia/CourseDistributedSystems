import User from '../models/user';
import { getToken, getUsername } from '../utils/utils';
import config from "../config";
import Session from "../models/session";
import * as jwt from 'jsonwebtoken';

async function is_admin(request) {
    let valid = true;
    let admin = false;
    try {
        const is_valid = jwt.verify(getToken(request), config.auth.secret);
    } catch (error) {
        valid = false;
    }
    if (valid) {
        const session = await Session.findOne({
            accessToken: getToken(request),
        });
        // @ts-ignore
        admin = session.admin;
    }
    return admin;
}

export default async (request, response) => {
    if (is_admin(request)) {
        const user = await User.findOne({
            username: getUsername(request),
        }).catch(error =>  {
            response.json({error: "Wrong username"}).send();
        });

        // @ts-ignore
        await User.update({ _id: user.id }, {
            // @ts-ignore
            username: user.username,
            // @ts-ignore
            email: user.email,
            // @ts-ignore
            password: user.password,
            admin: true,
        }).then((doc) => {
            response.json(doc)
                .status(200).send();
        });
    } else {
        response.json({error: "No permitions"}).send();
    }
}