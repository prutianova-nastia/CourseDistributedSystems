import * as nodemailer from 'nodemailer';
import config from './config';

class MailService {
    public transporter: any;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config.gmail.user,
                pass: config.gmail.pass,
            }
        });
    }

    public async send(mailOptions : any) {
        return await this.transporter.sendMail(mailOptions).catch((error) => {
            console.log('Propably wrong email');
        });
    }
}

export default MailService;