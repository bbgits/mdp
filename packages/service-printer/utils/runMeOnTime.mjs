/* 

This script pulls the report doc from the database

*/

//IMPORT TOOLS
import { MongoClient } from 'mongodb'; // IMORT MONGO
import dotenv from 'dotenv';
import makePrintableHeaderObj from './makePrintableHeaderObj.mjs';
import makePrintableLgDivObj from './makePrintableLgDivObj.mjs';

export default async function runMeOnTime() {
    // set env path and get env variables
    let env = dotenv.config({ path: '../.env' });
    const MONGO_USER = env.parsed.MONGO_USER
    const MONGO_PASS = env.parsed.MONGO_PASS

    console.log(MONGO_USER);
    console.log(MONGO_PASS);




    // This function is designed to be run while connected to a client db
    // it returns a single json that can be printed
    async function pullReportAndReturnPrintableJson(client, reportId) {
        // declare printable object, we will append printable objs into this list
        // each section of the report will be an object in the "divs" list
        var myPrintable = { "divs": [], }

        //Get report data 
        const cursor = await client.db('main').collection('reports').find({
            'email': reportId
        });
        const results = await cursor.toArray();



        /// Create HEADER OBJECT   
        var reportType = results[0]["reportType"] // grabs the most recent object
        var repTitleName = results[0]["reportName"];
        var repZipCode = await results[0]["reportZip"];
        // ToDo: make quote generation dynamic based on preferences
        var myHeaderObj = await makePrintableHeaderObj(client, repZipCode)
        console.log("***  MY HEADER OBJ:  ***")
        console.log(myHeaderObj)

        console.log(results);


        /// Map LG DIV 1 to local variables

        var repLgDiv1Type = await results[0]['reportLgDiv1Type'];
        var repLgDiv1Data1 = await results[0]['reportLgDiv1Data1'];
        var repLgDiv1Data2 = await results[0]['reportLgDiv1Data2'];
        var repLgDiv1Data3 = await results[0]['reportLgDiv1Data3'];
        var repLgDiv1Data4 = await results[0]['reportLgDiv1Data4'];
        var repLgDiv1Data5 = await results[0]['reportLgDiv1Data5'];

        console.log("Div1 Type:  " + repLgDiv1Type)
        console.log("Div1 Data1:  " + repLgDiv1Data1)
        console.log("Div1 Data2:  " + repLgDiv1Data2)
        console.log("Div1 Data3:  " + repLgDiv1Data3)
        console.log("Div1 Data4:  " + repLgDiv1Data5)
        console.log("Div1 Data5:  " + repLgDiv1Data5)

        // Make LG DIV 1 printable object
        var myLgDiv1Obj = await makePrintableLgDivObj(repLgDiv1Type, repLgDiv1Data1, repLgDiv1Data2, repLgDiv1Data3, repLgDiv1Data4, repLgDiv1Data5);

        console.log("***  MY LG DIV 1 OBJ:  ***")
        console.log(await myLgDiv1Obj)





        var repLgDiv1Type = results[0]["reportLgDiv1Type"];
        var repLgDiv1Data1 = results[0]["reportLgDiv1Data1"];
        var repLgDiv1Data2 = results[0]["reportLgDiv1Data2"];
        var repLgDiv1Data3 = results[0]["reportLgDiv1Data3"];
        var repLgDiv1Data4 = results[0]["reportLgDiv1Data4"];
        var repLgDiv1Data5 = results[0]["reportLgDiv1Data5"];



        var repLgDiv2Type = results[0]["reportLgDiv2Type"];
        var repLgDiv2Data1 = results[0]["reportLgDiv2Data1"];
        var repLgDiv2Data2 = results[0]["reportLgDiv2Data2"];
        var repLgDiv2Data3 = results[0]["reportLgDiv2Data3"];
        var repLgDiv2Data4 = results[0]["reportLgDiv2Data4"];
        var repLgDiv2Data5 = results[0]["reportLgDiv2Data5"];

        var repLgDiv3Type = results[0]["reportLgDiv3Type"];
        var repLgDiv3Data1 = results[0]["reportLgDiv3Data1"];
        var repLgDiv3Data2 = results[0]["reportLgDiv3Data2"];
        var repLgDiv3Data3 = results[0]["reportLgDiv3Data3"];
        var repLgDiv3Data4 = results[0]["reportLgDiv3Data4"];
        var repLgDiv3Data5 = results[0]["reportLgDiv3Data5"];


        var repTitleName = results[0]["reportName"];
        var repTitleName = results[0]["reportName"];
        var repTitleName = results[0]["reportName"];

    };


    async function main() {
        // Declare database variables
        const uri = "mongodb+srv://" + MONGO_USER + ":" + MONGO_PASS + "@my-daily-pdf.ddfuw.mongodb.net/?retryWrites=true&w=majority";
        const Client = new MongoClient(uri);

        //FUNCTION BODY
        try {
            // Connect to database
            await Client.connect();
            console.log("client connected...");

            // Load Report File From DB
            // This is the starting point / recipe
            await pullReportAndReturnPrintableJson(Client, "Susan@Seconds.com");

            console.log("--- end of try block---");

            // parseToPrintable(report);



        } catch (e) {
            console.error(e);
        } finally {
            await Client.close();
            console.log("CLOSED CLIENT")
        }

    }

    main().catch(console.error);

}
