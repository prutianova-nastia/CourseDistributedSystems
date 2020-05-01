export default {
    port: 8080,
    db: 'mongodb://mongodb/db',
    auth: {
        secret: "secret",
        accessTokenExpiration: 300 * 1000,
        refreshTokenExpiration: 900 * 1000,
    }
}