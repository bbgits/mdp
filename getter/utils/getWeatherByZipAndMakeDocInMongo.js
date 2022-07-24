import { MongoClient } from 'mongodb'; // IMORT MONGO
import fetch from 'node-fetch';

/**
 * 
 * @param {*} client [the MongoClient connection object]
 * @param {*} zip [zipcode to search weather '87.6298']
 * @param {*} targetDB [database name to store j(b)son doc]
 * @param {*} targetCollection [collection name to store in]
 */
export default async function getWeatherByZipAndMakeDocInMongo(aClient, aZip, targetDB, targetCollection) {

    console.log(`running getWeatherByZipAndMakeDocInMongo:  ${aZip} `)

    const zipCursor = await aClient.db('main').collection('zipcodes').find({
        'zipCode': aZip
    })



    const zipResults = await zipCursor.toArray();



    const myLat = await zipResults[0]["lat"];
    const myLon = await zipResults[0]["lon"];



    const fetch_url = await 'https://api.openweathermap.org/data/3.0/onecall?lat=' + myLat + '&lon=' + myLon + '&exclude={part}&appid=9a4e349ddb3d06c7b89fab8c2146c72b&units=imperial'

    const response = await fetch(fetch_url);

    const data = await response.json();

    data["zipCode"] = aZip;

    const result = await aClient.db(targetDB).collection(targetCollection).insertOne(data);

    console.log(`New Doc created with the following IDdatabases: ${result.insertedId}`);

}


