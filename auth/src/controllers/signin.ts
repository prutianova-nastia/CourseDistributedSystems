import User from '../models/user';
import Session from '../models/session';
import config from '../config';
import createTokens from '../utils/createToken';

export default async (request, response) => {
    const user = await User.findOne({
        username: request.body.username
    });
    // @ts-ignore
    if (!user || user.password !== request.body.password) {
        return response.status(403).json({ error: "Wrong user or password"}).send();
    }
    // @ts-ignore
    const tokens = createTokens(user.id, user.email);

    let admin = false;
    if (request.body.username == 'admin') {
        console.log(request.body.username);
        console.log("HERE we are")
        admin = true;
    }
    Session.create({
        refreshToken: tokens.refreshToken,
        accessToken: tokens.accessToken,
        // @ts-ignore
        admin: user.admin,
        refreshTokenExpireAt: Date.now() + config.auth.refreshTokenExpiration,
        userId: user.id
    }).then(() => {
        response.send({
            access: tokens.accessToken,
            refresh: tokens.refreshToken
        });
    })
}
