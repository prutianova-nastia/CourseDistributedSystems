import User from '../models/user';
import UserToConfirm from '../models/userToConfirm';
import { getEmail, getToken } from '../utils/utils';

export default async (request, response) => {
    let user;
    user = await UserToConfirm.findOne({
        token: getToken(request),
        email: getEmail(request),
    }).catch(error =>  {
        response.json({error: "Wrong token or email"}).send();
    });
    if (!user) {
        response.json({error: "Wrong token or email"}).send();
    }
    const isUserExist = await User.count({
        username: user.username,
    });
    if(isUserExist){
        return response.json({error: "Smbd created user with this username"}).send();
    }

    User.create({
        username: user.username,
        password: user.password,
        email: user.email,
        admin: false,
    }).then(() => {
        response.status(201).send();
    })
}
