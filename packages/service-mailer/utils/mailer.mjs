/**
 This script accepts to, subj, textMsg, htmlMsg, and attach as inputs and sends a nicely formatted email. 
 */

import nodemailer from 'nodemailer'; // send emails
import { google } from 'googleapis'; // google's email api
import dotenv from 'dotenv';

// get secrets from .env
// executed from index.js .env path is not one level up
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

// function so send email
export default async function sendMail(myRecipient, mySubject, myText, myHtml, myAttachments) {
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
            to: myRecipient,
            subject: mySubject,
            // always include text version, will send as backup
            text: myText,
            // html version is tried first
            html: myHtml,
            attachments: myAttachments,
        };

        // send email and return result
        const result = await transport.sendMail(mailOptions);
        return result;

    } catch (error) {
        return ("mail sender faieled: " + error)
    };
}

