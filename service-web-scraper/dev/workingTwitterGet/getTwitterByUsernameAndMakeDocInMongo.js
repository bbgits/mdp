import fetch, { Headers } from 'node-fetch';
import { MongoClient } from 'mongodb'; // IMORT MONGO

async function getTwitterByUsernameAndMakeDocInDB(twiHandle, client, targetDB, targetCollection) {
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

    const response = await fetch(fetchUrl, requestOptions);

    const doc = await response.json();

    doc["data"]["snapshotDate"] = "07/23/2022";

    const result = await client.db(targetDB).collection(targetCollection).insertOne(doc);


}

async function main() {
    const uri = "mongodb+srv://admin01:monc0dedUP@my-daily-pdf.ddfuw.mongodb.net/?retryWrites=true&w=majority";

    const myClient = new MongoClient(uri);

    try {
        await myClient.connect();

        await getTwitterByUsernameAndMakeDocInDB("chicago", myClient, "data", "myTwitter");


    } catch (e) {
        console.error(e);
    } finally {
        await myClient.close();
    }

}


main().catch(console.error);