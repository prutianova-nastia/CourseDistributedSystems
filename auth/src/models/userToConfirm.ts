import { Schema, model } from 'mongoose';

export default model('userToConfirm', new Schema({
    token: String,
    username: String,
    password: String,
    email: String,
}));