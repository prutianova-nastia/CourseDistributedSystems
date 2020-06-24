import {invalidTokenResponse} from "../common/responses";
import { getToken } from '../common/utils';
import config from '../config';


export default async (request, response, callFunction) => {
    let grpc = require('grpc');
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

    let client = new auth_proto.Validator('docker.for.mac.host.internal:50051', grpc.credentials.createInsecure());
    client.validateToken({token: getToken(request)}, function(err, res) {
        if (!res.is_valid) {
            invalidTokenResponse(response, 'access');
        } else {
            callFunction(request, response, res.is_admin);
        }
        console.log('Validate token:', res.is_valid);
    });
}
