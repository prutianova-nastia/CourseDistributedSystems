import * as amqp from 'amqplib';
import MailService from "./mailService";
import config from './config';

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

async function init() {
    await connectRabbit();
    console.log('Rabbit connected');
    const channel = await connection.createChannel();
    await channel.assertQueue(config.amqp.queue);
    await channel.assertExchange(config.amqp.exchange, 'topic');
    await channel.bindQueue(config.amqp.queue, config.amqp.exchange, config.amqp.topic);

    const mailService = new MailService();

    channel.consume(config.amqp.queue, async (mailOptions) => {
        await mailService.send(JSON.parse(mailOptions.content));
        channel.ack(mailOptions);
    });

    return channel;
};

init();

