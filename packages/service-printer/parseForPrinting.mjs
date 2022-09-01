import fetch, { Headers } from 'node-fetch';
import { MongoClient } from 'mongodb'; // IMORT MONGO

export default async function parseForPrinting(reportID) {

    await console.log("Making Printable for: " + reportID);

    // TASK: Pull report form database, save to local variable:
    // myPrintSettings = reportID.toJson

    // TASK: Create empty array to hold printable objects
    // myPrintableArray = [];

    // TASK: Make Header Printable
    // flatHeader = printableArray.pop[3]
    // myPrintableArray.append(MakePrintableHeader(flatHeader))

    // TASK: Parse Remaining Report
    // While myPrintSettings != 0:
    //     nextFlatBlock = printableArray.pop[5];
    //     if nextFlatBlock[0] = twitter { 
    //          myPrintableArray.append(MakePrintableTwitterObj(nextFlatBlock)) 
    //      } else if nextFlatBlock[0] = insta { 
    //          myPrintableArray.append(MakePrintableInstaObj(nextFlatBlock)) 
    //      } else if nextFlatBlock[0] = news { 
    //          myPrintableArray.append(MakePrintableNewsObj(nextFlatBlock)) 
    //      } else if nextFlatBlock[0] = insta {} 

    //TASK: Return myPrintableArray






};

parseForPrinting("12345");
