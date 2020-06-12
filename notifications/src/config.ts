const dotenv = require('dotenv');
dotenv.config();

export default {
    gmail : {
        user: process.env.GMAIL_USER ||'i.love.colab@gmail.com',
        pass: process.env.GMAIL_PASS || 'autobudgetoptions = optimize-manual',
    },
    amqp: {
        uri: process.env.AMQP_URI || 'amqp://guest:guest@docker.for.mac.host.internal:5672',
        exchange: process.env.AMQP_EXCHANGE || 'events',
        queue: process.env.AMQP_QUEUE || 'notifications',
        topic: process.env.AMQP_TOPIC || 't_notifications',
    },
}