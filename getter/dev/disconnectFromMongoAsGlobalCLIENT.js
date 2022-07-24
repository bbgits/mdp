import { MongoClient } from 'mongodb';

export default function disconnectFromMongoAsGlobalCLIENT() {


    try {
        console.log("Start of TRY block.")
        console.log("connecting to myClient...")
        CLIENT.close();
        console.log("connected to myClient!")

        console.log("End of TRY block.")


    } catch (e) {
        console.error(e);
    }
};