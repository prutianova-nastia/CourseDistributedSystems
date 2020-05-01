import { Schema, model } from 'mongoose';

export default model('user', new Schema({
    username: String,
    password: String,
    email: String,
}));