


import pullReportAndReturnPrintableJson from './utils/pullReportAndReturnPrintableJson.mjs';
import { MongoClient } from 'mongodb'; // IMORT MONGO
import dotenv from 'dotenv';
import puppeteer from 'puppeteer';
import hbs from 'handlebars';
import path from 'path';
import fs from 'fs-extra';

// import makePdf from './utils/makePdf.mjs';


// set env path and get env variables
let env = dotenv.config({ path: '.env' });
const MONGO_USER = env.parsed.MONGO_USER
const MONGO_PASS = env.parsed.MONGO_PASS

async function main() {

    const uri = "mongodb+srv://" + MONGO_USER + ":" + MONGO_PASS + "@my-daily-pdf.ddfuw.mongodb.net/?retryWrites=true&w=majority";
    const Client = new MongoClient(uri);

    //FUNCTION BODY
    try {
        // Connect to database
        await Client.connect();


        // This is the starting point / recipe
        var context = await pullReportAndReturnPrintableJson(Client, "Susan@Seconds.com");

        console.log(JSON.stringify(context, null, 4))

        async function makePdf(context) {
            var myContext = await context;
            const compile = async function (templateName, dataName) { //template name and data source as input
                const filePath = await path.join(process.cwd(), 'templates', `${templateName}.hbs`); // set relative file path to template
                const html = await fs.readFile(filePath, 'utf-8'); // read template and save as html text
                return await hbs.compile(html)(dataName); // HBS compiles html/data and returns
            };

            //////SET UP HELPER ( ? Not sure what this does? )
            hbs.registerHelper('ifCond', function (v1, operator, v2, options) {

                switch (operator) {
                    case '==':
                        return (v1 == v2) ? options.fn(this) : options.inverse(this);
                    case '===':
                        return (v1 === v2) ? options.fn(this) : options.inverse(this);
                    case '!=':
                        return (v1 != v2) ? options.fn(this) : options.inverse(this);
                    case '!==':
                        return (v1 !== v2) ? options.fn(this) : options.inverse(this);
                    case '<':
                        return (v1 < v2) ? options.fn(this) : options.inverse(this);
                    case '<=':
                        return (v1 <= v2) ? options.fn(this) : options.inverse(this);
                    case '>':
                        return (v1 > v2) ? options.fn(this) : options.inverse(this);
                    case '>=':
                        return (v1 >= v2) ? options.fn(this) : options.inverse(this);
                    case '&&':
                        return (v1 && v2) ? options.fn(this) : options.inverse(this);
                    case '||':
                        return (v1 || v2) ? options.fn(this) : options.inverse(this);
                    default:
                        return options.inverse(this);
                }
            });
            hbs.registerHelper('nl2br', function (text, isXhtml) {
                const breakTag = isXhtml ? '<br />' : '<br>'
                const withBr = Handlebars.escapeExpression(text).replace(
                    /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
                    '$1' + breakTag + '$2'
                )
                return new Handlebars.SafeString(withBr)
            });

            ////// RUN FUNCTION 
            async function main() {
                try {


                    const browser = await puppeteer.launch(); // Create Pupeteer Browser Object
                    const page = await browser.newPage(); // Create New Page on the Browser Object called 'page'
                    const content = await compile('myTemplate', myContext); // Use Handlebars to render content ** FUNC FROM ABOVE **

                    await page.setContent(await content); // assign content to 'page'
                    await page.pdf({ //set options for 'page':
                        path: 'newOutput6.pdf', // output file name
                        height: '11in', // output file dimensions
                        width: '8.5in',
                        printBackground: true, // usually set to True
                        waitUntil: "networkidle0"
                    });
                    await browser.close(); //close browser object
                    process.exit(); //exit the process

                } catch (e) {
                    console.log('Error from printer, index.js', e);
                }
            }
            await main();
        }

        await makePdf(await context);


        // parseToPrintable(report);
    } catch (e) {
        console.error(e);
    } finally {
        await Client.close();
        console.log("CLOSED CLIENT")
    }
}

main();


