//TASK: import tools...

import fetch, { Headers } from 'node-fetch';
import { MongoClient } from 'mongodb'; // IMORT MONGO

export default async function makePrintableTwitterObj(myClient, myType, myUser1, myUser2, myUser3, myUser4, myUser5) {

    const users = await [myUser1, myUser2, myUser3, myUser4, myUser5]
    console.log(await "myUser1 from MakePrintableTwitterObj: " + myUser1)



    const twitterCursor = await myClient
        .db('data')
        .collection('twitter')
        .find({
            "data.username": "selenagomez"
        })
        .sort({ "data.snapshotDate": -1 });

    const twitterResults = await twitterCursor.toArray();



    return await twitterResults;

}

