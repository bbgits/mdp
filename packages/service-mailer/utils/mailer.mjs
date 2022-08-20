import nodemailer from 'nodemailer'; // send emails
import { google } from 'googleapis'; // google's email api
import dotenv from 'dotenv';

// get secrets from .env
const env = dotenv.config({ path: ".env" });
const CLIENT_ID = env.parsed.CLIENT_ID;
const CLIENT_SECRET = env.parsed.CLIENT_SECRET
const REDIRECT_URI = env.parsed.REDIRECT_URI;
const REFRESH_TOKEN = env.parsed.REFRESH_TOKEN;

// create auth object and set secrets
const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// funciton so send email
export default async function sendMail() {
    try {

        // get token
        const accessToken = await oAuth2Client.getAccessToken();

        // pass secrets to create email transport object
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'brian.b@mydailypdf.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });

        // set message details
        const mailOptions = {
            from: 'My Dialy PDF Mailer <brian.b@mydailypdf.com>',
            to: 'brian.david.burns@gmail.com',
            subject: "Hello from gmailAPI!!",
            // always include text version, will send as backup
            text: "Here's the text version of the email.",
            // html version is tried first
            html: "<h1> html version:</h1> <p>Here's the HTML version of the email.</p>",

        };

        // send email and return result
        const result = await transport.sendMail(mailOptions);
        return result;

    } catch (error) {
        return ("mail sender faieled: " + error)
    };
}

