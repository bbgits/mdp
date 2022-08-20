/*
*   This script sends an email:
*       -input from "run.js" specifies the user
*       -get user data from db
*       -get pdf
*       -send email with pdf
*/
import sendMail from './utils/mailer.mjs';

/** TODO FUNCTION:
 *   -accepts email or username as input
 *   -returns mail variables
 *   -variables can then be assigned locally
 */



// assign variables locally
const mailTo = "brian.david.burns@gmail.com";
const mailSubj = "To, Subj, Msg, and Attach, all programatically assigned!";
const mailText = "To, Subj, Msg, and Attach, all programatically assigned!";
const mailHtml = "<h1> A header!</h1><h2> A subheader</h2><p>An html paragraph, at last!</p>"
const mailAttachmentList = [
    { path: './myOutput.pdf' }
]


// send email with local variables
sendMail(mailTo, mailSubj, mailText, mailHtml, mailAttachmentList)
    .then(result => console.log('ran sendMail...', result))
    .catch((error) => console.log("failed to execute sendMail(): " + error.message));