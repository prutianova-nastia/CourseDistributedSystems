import { Schema, model } from 'mongoose';

export default model('item', new Schema({
    name: String,
    category: String
}));