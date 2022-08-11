import { MongoClient } from 'mongodb'; // IMORT MONGO



export default async function pullConfigDoc(client) {

    const cursor = await client.db('main').collection('search').find({
        'name': "config"
    })

    const results = await cursor.toArray();

    const obj = results[0];

    return obj


}