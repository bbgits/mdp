/* 

This script retrievs data from the web:
> imports main search config from mongo (lists of all search terms/usernames/weather zip codes
> goes to internet via API or Selenium webscraper and retrieves data
> saves that data to main DB

*/

//IMPORT TOOLS
import fetch, { Headers } from 'node-fetch';
import { MongoClient } from 'mongodb'; // IMORT MONGO
import pullConfigDoc from './utils/pullConfigDoc.js';
import getWeatherByZipAndMakeDocInDb from './utils/getWeatherByZipAndMakeDocInMongo.js';
import getTwitterByUsernameAndMakeDocInMongo from './utils/getTwitterByUsernameAndMakeDocInMongo.js';
import scrapeInstaByUsernameAndMakeDocInMongo from './utils/scrapeInstaByUsernameAndMakeDocInMongo.js';


const envFilePath = path.resolve(__dirname, './.env');
const env = require("dotenv").config({ path: envFilePath });


async function main() {
    // Declare database variables
    const uri = "mongodb+srv://" + process.env.MONGO_USER + ":" + process.env.MONGO_PASS + "@my-daily-pdf.ddfuw.mongodb.net/?retryWrites=true&w=majority";
    const Client = new MongoClient(uri);

    //FUNCTION BODY
    try {
        // Connect to database
        await Client.connect();
        console.log("myCLient Connected...");

        // Load Config File From DB
        var configs = await pullConfigDoc(Client);
        console.log("\n \n \n CURRENT CONFIGS:");
        console.log(configs);

        // Assign config array for Twitter users to local variable
        const twitterUsersArray = configs["allTwitterUsers"];
        //Twitter FOR LOOP:
        for (const twiUser of twitterUsersArray) {
            await getTwitterByUsernameAndMakeDocInMongo(twiUser, Client, "data", "twitter")
        };

        // Assign config array for Weather Zip Codes to local variable
        const weatherZipCodesArray = configs["allWeatherZipCodes"];
        // Weather FOR LOOP:
        for (const zip of weatherZipCodesArray) {
            await getWeatherByZipAndMakeDocInDb(Client, zip, "data", "weather")
        };

        // Assign config array for Instagram users to local variable
        const instaUsersArray = configs["allInstaUsers"];
        console.log("\n \n \n INSTA USERS:")
        console.log(instaUsersArray);

        // Insta FOR LOOP:
        for (const instaUser of instaUsersArray) {
            await scrapeInstaByUsernameAndMakeDocInMongo(instaUser, Client, "data", "instagram4");
        }



    } catch (e) {
        console.error(e);
    } finally {
        await Client.close();
    }

}


main().catch(console.error);