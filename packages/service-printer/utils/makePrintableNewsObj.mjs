import readTextFile from 'read-text-file';
import fetch, { Headers } from 'node-fetch';
import { MongoClient } from 'mongodb'; // IMORT MONGO

export default async function makePrintableNewsObj(myClient, myType, myData1, myData2, myData3, myData4, myData5) {

    var newsObj = {
        "type": "news",
        "data": {
            "newsTitle": "",
            "newsAuthor": "",
            "newsStory": ""
        }
    }

    var newsType = myType;
    var newsBroadSearch = myData1;
    var newsNarrowSearch = myData2;
    var newsCategory = myData3;

    // Declare file name
    var storyTxtFileName = "";

    //Get date for file-name reference
    var date = new Date().toISOString().substr(0, 19);
    var sixDigitDateSuffix = date.slice(0, 10)

    if (newsCategory = "politics") {
        storyTxtFileName = "politics-" + sixDigitDateSuffix + ".txt"
    }
    else if (newsCategory = "technology") {
        storyTxtFileName = "technology-" + sixDigitDateSuffix + ".txt"
    }
    else if (newsCategory = "culture") {
        storyTxtFileName = "culture-" + sixDigitDateSuffix + ".txt"
    }

    // retrieve story and parse to local variables
    var contents = await readTextFile.readSync('../news_txt/' + storyTxtFileName);
    var contentsArray = contents.split("::")
    var storyDate = contentsArray[1];
    var storyTitle = contentsArray[3];
    var storyAuthor = contentsArray[5];
    var storyCategory = contentsArray[7];
    var storyTags = contentsArray[9];
    var storyText = contentsArray[11];

    // Add to newsObj
    newsObj["data"]["newsTitle"] = storyTitle;
    newsObj["data"]["newsAuthor"] = storyAuthor;
    newsObj["data"]["newsStory"] = storyText;

    return await newsObj;

}