import fetch, { Headers } from 'node-fetch';
import { MongoClient } from 'mongodb'; // IMORT MONGO
import prepareToPrint from './prepareToPrint.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//config env path
const envFilePath = path.resolve(__dirname, '../env');
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
        var configs = await prepareToPrint(Client);
        console.log("\n \n \n CURRENT CONFIGS:");
        console.log(configs);

    } catch (e) {
        console.error(e);
    } finally {
        await Client.close();
    }

}


main().catch(console.error);