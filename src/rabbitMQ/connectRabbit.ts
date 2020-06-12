import config from "../config";
import * as amqp from 'amqplib';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let connection;

async function connectRabbit() {
    connection =  await amqp.connect(config.amqp.uri).catch(async () => {
        await sleep(2000);
        return await connectRabbit();
    });
    return connection;
}

export default async () => {
    await connectRabbit();
    return await connection.createChannel();
};

