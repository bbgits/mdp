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

    // NEWS STORIES ARE STORED AS TXT FILES WITH SPECIFIC NAMES
    // NEED TO CONSTRUCT CORRECT FILE NAME FIRST AND THEN GO GET IT
    // Declare file name
    var storyTxtFileName = "";

    //Get date for file-name reference
    var d = new Date();

    //get year number 
    var yearNumber = d.getFullYear().toString();

    //get month number, add leading zero if needed
    var zero = "0"
    var monthNumber = (d.getMonth() + 1).toString(); // JS months are 0-11, must add 1
    if (monthNumber.length < 2) { monthNumber = zero.concat(monthNumber) };

    //get date number, add leading zero if needed
    var dateNumber = d.getDate().toString();
    if (dateNumber.length < 2) { dateNumber = zero.concat(dateNumber) }

    // put date numbers together for suffix
    var sixDigitDateSuffix = yearNumber + "-" + monthNumber + "-" + dateNumber

    // use category + suffix to load the correct text file
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