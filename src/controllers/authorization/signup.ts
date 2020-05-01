import User from '../../models/user';

export default async (request, response) => {
    const isUserExist = await User.count({
        username: request.body.username
    });
    if(isUserExist){
        return response.json({error: "User with this username already exists"}).send();
    }
    User.create({
        username: request.body.username,
        password: request.body.password,
        email: request.body.email
    }).then(() => {
        response.status(201).send();
    })

}
