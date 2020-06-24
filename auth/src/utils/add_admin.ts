import User from '../models/user';

export default async () => {
    const isUserExist = await User.count({
        username: 'admin',
    });
    if(!isUserExist){
        User.create({
            username: 'admin',
            password: 'adminPassword',
            email: '-',
            admin: true,
        });
    };
    console.log('Admin added');
}