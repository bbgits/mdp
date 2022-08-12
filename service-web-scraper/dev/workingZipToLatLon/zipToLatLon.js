import { MongoClient } from 'mongodb'; // IMORT MONGO



export default async function zipToLatLon(client, zipCode) {

    console.log("running zipToLatLon...")

    const cursor = await client.db('main').collection('zipcodes').find({
        'zipCode': zipCode
    })

    const results = await cursor.toArray();

    const lat = results[0]["lat"];
    const lon = results[0]["lon"];

    const geo = [lat, lon];

    return geo

}

async function main() {
    const uri = "mongodb+srv://admin01:monc0dedUP@my-daily-pdf.ddfuw.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        await client.connect();

        await zipToLatLon(client, "90210");


    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}

main().catch(console.error);
