import fetch, { Headers } from 'node-fetch';
import { MongoClient } from 'mongodb'; // IMORT MONGO

export default async function getTwitterByUsernameAndMakeDocInMongo(twiHandle, client, targetDB, targetCollection) {

    await console.log("Twitter Func: Setting Headers...")
    var myHeaders = new Headers();


    myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAC%2FscAEAAAAAMA5DMTsR6zJC7rfgOjX4pEzb0lA%3Ds46m4etLdIYpXR8LGuqtc6qJTpL6NFXXf6zNNwgUsKlmvT2FRI");
    myHeaders.append("Cookie", "guest_id=v1%3A165852488530929443; guest_id_ads=v1%3A165852488530929443; guest_id_marketing=v1%3A165852488530929443; personalization_id=\"v1_9GWh7GxzbDbB8Md1pkTYLg==\"");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    var myUsername = twiHandle;

    var fetchUrl = "https://api.twitter.com/2/users/by/username/" + twiHandle + "?user.fields=public_metrics&expansions="

    await console.log("Twitter Func: Sending Fetch...")
    const response = await fetch(fetchUrl, requestOptions);

    await console.log("Twitter Func: Converting to JSON...")
    const doc = await response.json();

    doc["data"]["timestamp"] = Date.now();
    doc['data']['username'] = doc['data']['username'].toLowerCase();

    await console.log("Twitter Func: Inserting to DB...")
    const result = await client.db(targetDB).collection(targetCollection).insertOne(doc);
    await console.log("Twitter Func: Complete!")


}

