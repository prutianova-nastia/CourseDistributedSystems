import { Schema, model } from 'mongoose';

export default model('session', new Schema({
    refreshToken: String,
    refreshTokenExpireAt: {
        type: Date,
        expires: 300 * 1000
    },
    userId: String
}));