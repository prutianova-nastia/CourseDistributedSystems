import Routes from './routes/itemRoute';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const mongoDB = 'mongodb://mongodb/items';
const port = 8080;

const init = async () => {
    await mongoose.connect(mongoDB);

    const app = express();
    app.use(bodyParser.json());

    app.use('/', Routes());

    app.listen(port, () => {
        console.log('started at 8080');
    });
};

init();