/* 

This script makes PDFs: 
-imports myPrintable.json (an array of objects, each describing a div on the final pdf)
-defines a Logic Helper for use with Handlebars (no native logic in Hbrs)
-passes that Context & Logic Helper through ../templates/myTemplate.hbrs (a Hbrs template)
-saves output from Hbrs template as PDF

*/

////// IMPORT TOOLS
const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const hbs = require('handlebars');
const path = require('path');
const moment = require('moment');
console.log('imports sucessful');
var context = require("./newPrintable.json"); //// Set the context


////// DEFINE COMPILE FUNCTION
const compile = async function (templateName, dataName) { //template name and data source as input
    const filePath = path.join(process.cwd(), 'templates', `${templateName}.hbs`); // set relative file path to template
    const html = await fs.readFile(filePath, 'utf-8'); // read template and save as html text
    return hbs.compile(html)(dataName); // HBS compiles html/data and returns
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
(async function () {
    try {

        const browser = await puppeteer.launch(); // Create Pupeteer Browser Object
        const page = await browser.newPage(); // Create New Page on the Browser Object called 'page'
        const content = await compile('myTemplate', context); // Use Handlebars to render content ** FUNC FROM ABOVE **
        await page.setContent(content); // assign content to 'page'
        await page.pdf({ //set options for 'page':
            path: 'newOutput.pdf', // output file name
            height: '11in', // output file dimensions
            width: '8.5in',
            printBackground: true // usually set to True
        });
        await browser.close(); //close browser object
        process.exit(); //exit the process

    } catch (e) {
        console.log('Error from printer, index.js', e);
    }
})();