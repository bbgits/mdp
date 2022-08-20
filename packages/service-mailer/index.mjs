import sendMail from './utils/mailer.mjs';

sendMail()
    .then(result => console.log('sucesfully sent email...', result))
    .catch((error) => console.log("failed to execute sendMail(): " + error.message));