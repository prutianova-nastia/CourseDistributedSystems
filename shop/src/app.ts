import itemRouter from './router';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config';

const init = async () => {
    await mongoose.connect(config.db);

    const app = express();
    app.use(bodyParser.json());
    app.use('/items', itemRouter());

    app.listen(config.port, () => {
        console.log('started at 8080');
    });
};

init();

