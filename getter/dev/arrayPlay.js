import { MongoClient } from 'mongodb'; // IMORT MONGO



async function main() {
    const uri = "mongodb+srv://admin01:monc0dedUP@my-daily-pdf.ddfuw.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Connected Sucessfully!");

        var configs = await pullConfigData(client);

        console.log(configs)

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
        console.log("Disconnected :)");
    }

}

main().catch(console.error);

async function pullConfigData(client) {

    const cursor = await client.db('main').collection('search').find({
        'name': "mainSearchDoc"
    })

    const results = await cursor.toArray();

    const obj = results[0];

    return obj


}