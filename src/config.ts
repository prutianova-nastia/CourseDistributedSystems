const dotenv = require('dotenv');
dotenv.config();

export default {
    port: process.env.PORT || 8080,
    db: process.env.DB || 'mongodb://mongodb/db',
    auth: {
        secret: process.env.SECRET || "secret",
        accessTokenExpiration: process.env.AUTH_ACCESS_TOKEN_EXPIRATION ? parseInt(process.env.AUTH_ACCESS_TOKEN_EXPIRATION) : 300 * 1000,
        refreshTokenExpiration: process.env.AUTH_REFRESH_TOKEN_EXPIRATION ? parseInt(process.env.AUTH_REFRESH_TOKEN_EXPIRATION) : 900 * 1000,
    },
    amqp: {
        uri: process.env.AMQP_URI || 'amqp://guest:guest@docker.for.mac.host.internal:5672',
        exchange: process.env.AMQP_EXCHANGE || 'events',
        queue: process.env.AMQP_QUEUE || 'notifications',
        topic: process.env.AMQP_TOPIC || 't_notifications',
        channel: null,
    },
}