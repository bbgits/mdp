/* 
This script sends an email with attachments.
*/

const nodemailer = require("nodemailer");

async function main() {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "....",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        }
    })

    let info = await transporter.sendMail({
        from: "b2dailyreports@gmail.com",
        to: "brian.david.burns@gmail.com",
        subject: "hello world subject",
        text: "hello world body text",
        html: "hellow body html",
    });
    console.log("Message send: %s", info.messageId);

}



main().catch(console.error);


