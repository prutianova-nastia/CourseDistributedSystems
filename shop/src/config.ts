const dotenv = require('dotenv');
dotenv.config();

export default {
    port: process.env.PORT || 8080,
    db: process.env.DB || 'mongodb://mongodb/db',
    proto: {
        path: "/app/proto/auth.proto"
    },
}