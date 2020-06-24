import User from '../models/user';
import UserToConfirm from '../models/userToConfirm';
import config from '../config';
import * as crypto from "crypto";


export default async (request, response) => {
    const isUserExist = await User.count({
        username: request.body.username
    });
    if(isUserExist) {
        return response.json({error: "User with this username already exists"}).send();
    }

    const token = crypto.createHash('sha256')
        .update(Math.random().toString(16).substr(2))
        .digest()
        .toString('hex');

    await UserToConfirm.create({
        username: request.body.username,
        password: request.body.password,
        email: request.body.email,
        token: token,
    });

    const link = "http://localhost:8081/confirm?email=" + request.body.email + "&token=" + token;

    const channel = config.amqp.channel;
    const mailOptions = {
        from: 'i.love.colab@gmail.com', // sender address
        to: request.body.email, // list of receivers
        subject: "Registration to Internetshop", // Subject line
        text: "Follow link to confirm your email " + link, // plain text body
    };

    channel.sendToQueue(config.amqp.queue, Buffer.from(JSON.stringify(mailOptions)));

    return response.status(200).json({notification: "Please confirm your email"}).send();
}
