import { MongoClient } from 'mongodb'; // IMORT MONGO
import fetch from 'node-fetch';


/**
 * 
 * @param {*} client [the MongoClient connection object]
 * @param {*} lat [latitude to search weather '87.6298']
 * @param {*} lon  [longitude to search weather '41.8781']
 * @param {*} targetDB 
 * @param {*} targetCollection 
 */
async function getWeatherByLatLongAndMakeDocInDb(client, lat, lon, targetDB, targetCollection) { //DEFINE FUNCTION
    const latitutde = lat;
    const longitude = lon;

    const fetch_url = 'https://api.openweathermap.org/data/3.0/onecall?lat=' + lat + '&lon=' + lon + '&exclude={part}&appid=9a4e349ddb3d06c7b89fab8c2146c72b&units=imperial'





    const response = await fetch('https://api.openweathermap.org/data/3.0/onecall?lat=25.76178&lon=80.1918&exclude={part}&appid=9a4e349ddb3d06c7b89fab8c2146c72b&units=imperial');

    const data = await response.json();


    const result = await client.db(targetDB).collection(targetCollection).insertOne(data);

    console.log(`New Doc created with the following IDdatabases: ${result.insertedId}`);

}

async function main() {
    const uri = "mongodb+srv://admin01:monc0dedUP@my-daily-pdf.ddfuw.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        await client.connect();

        await getWeatherByLatLongAndMakeDocInDb(client, 25.76178, 80.1918, "data", "weather");


    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}

main().catch(console.error);

