/* 

This script runs the Printer: 
-imports all necessary functions
-runs printer scripts
-passes that Context & Logic Helper through ../templates/myTemplate.hbrs (a Hbrs template)
-saves output from Hbrs template as PDF

*/

console.log("IMPORTING FROM MAKEPDF.MJS...")
////// IMPORT TOOLS
import puppeteer from 'puppeteer';
import fs from 'fs-extra';
import hbs from 'handlebars';
import path from 'path';
import moment from 'moment';
// import context from "../newPrintable.json" assert {type: 'json'}; //// Set the context

console.log('imports sucessful');


////// DEFINE COMPILE FUNCTION
export default async function makePdf(context) {
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

    ////// RUN FUNCTION 
    async function main() {
        try {
            console.log("Running Try Block from makePdf.mjs...")

            const browser = await puppeteer.launch(); // Create Pupeteer Browser Object
            const page = await browser.newPage(); // Create New Page on the Browser Object called 'page'
            const content = await compile('myTemplate', myContext); // Use Handlebars to render content ** FUNC FROM ABOVE **
            console.log("CONTENT FROM MakePdf: " + content)
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

makePdf();