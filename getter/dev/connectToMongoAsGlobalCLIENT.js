import { MongoClient } from 'mongodb';

export default function connectToMongoAsGlobalCLIENT() {
    const uri = "mongodb+srv://admin01:monc0dedUP@my-daily-pdf.ddfuw.mongodb.net/?retryWrites=true&w=majority";

    global.CLIENT = new MongoClient(uri);



    try {
        console.log("Start of TRY block.")
        console.log("connecting to myClient...")
        CLIENT.connect();
        console.log("connected to myClient!")

        console.log("End of TRY block.")


    } catch (e) {
        console.error(e);
    }

};