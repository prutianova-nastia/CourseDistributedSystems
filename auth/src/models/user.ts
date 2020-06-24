import { Schema, model } from 'mongoose';

export default model('user-a', new Schema({
    username: String,
    password: String,
    email: String,
    admin: Boolean,
}));