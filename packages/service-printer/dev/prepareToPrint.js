/* 
*  This script:
    - accepts reportID as input
    - uses reportID to fetch relevant data from mongoDb
    - outputs an object containing a printable object for each block
    - this output object can then be read by index.js
*/

import { MongoClient } from 'mongodb'; // IMORT MONGO



export default async function pullConfigDoc(client) {

    const cursor = await client.db('main').collection('search').find({
        'name': "config"
    })

    const results = await cursor.toArray();

    const obj = results[0];

    return obj


}