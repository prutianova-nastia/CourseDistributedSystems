import authRouter from './router';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config';
import getChannel from './rabbitMQ/connectRabbit';
import startRpcServer from './grpc/server';
import addAdmin from './utils/add_admin';


const init = async () => {
    config.amqp.channel = await getChannel();
    await mongoose.connect(config.db);


    // addAdmin();

    const app = express();
    app.use(bodyParser.json());
    app.use('/', authRouter());

    app.listen(config.port, () => {
        console.log('started at 8081');
    });
    startRpcServer();
};

console.log("here we are");

init();