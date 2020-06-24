import { Schema, model } from 'mongoose';

export default model('session-a', new Schema({
    refreshToken: String,
    accessToken: String,
    admin: Boolean,
    refreshTokenExpireAt: {
        type: Date,
        expires: 300 * 1000
    },
    userId: String
}));