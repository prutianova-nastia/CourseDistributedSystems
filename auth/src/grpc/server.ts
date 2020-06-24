import * as grpc from "grpc";
import validate from "./validate";
import config from '../config';

export default () => {
    let protoLoader = require('@grpc/proto-loader');
    let packageDefinition = protoLoader.loadSync(
        config.proto.path,
        {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true
        });
    let auth_proto = grpc.loadPackageDefinition(packageDefinition).auth;

    let server = new grpc.Server();
    // @ts-ignore
    server.addService(auth_proto.Validator.service, { validateToken: validate });
    server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    server.start();
}