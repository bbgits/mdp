//TASK: import tools...

import fetch, { Headers } from 'node-fetch';
import { MongoClient } from 'mongodb'; // IMORT MONGO

export default async function makePrintableTwitterObj(myClient, myType, myUser1, myUser2, myUser3, myUser4, myUser5) {

    const users = await [myUser1, myUser2, myUser3, myUser4, myUser5]
    console.log(await "myUser1 from MakePrintableTwitterObj: " + myUser1)

    // create standardized twitter object to add data to as we go
    const twiObject = {
        "type": myType,
        "data": {
            "user1": { "username": myUser1 },
            "user2": { "username": myUser2 },
            "user3": { "username": myUser3 },
            "user4": { "username": myUser4 },
            "user5": { "username": myUser5 },
        }
    };



    // need counter to keep track of place and target correct user object
    // var targetUserCounter = 1
    // // LOOP through each twitter username
    // while (targetUserCounter < 6) {
    //     // remove & load first user from list
    //     var currentUser = users.shift();
    //     // need key to construct proper location
    //     var currentUserKey = "user" + targetUserCounter;

    //     // Find the 30 most-recent twitter jsons for the current user
    //     var twitterCursor = await myClient
    //         .db('data')
    //         .collection('twitter')
    //         .find({
    //             "data.username": currentUser
    //         })
    //         .sort({ "data.snapshotDate": -1 })
    //     var twitterResults = await twitterCursor.toArray();
    //     // save arrays locally: today, 1-day, 7-day, and 30-day 
    //     var twitterToday = await twitterResults[0];
    //     var twitter1DayAgo = twitterResults[1];
    //     var twitter7DaysAgo = twitterResults[6];
    //     var twitter30DaysAgo = twitterResults[6]; // to-do: update to 29 when there is enough docs
    //     console.log("TWITTER TODAY FROM LOOP: ");
    //     console.log(await twitterToday['data']['name']);
    //     // console.log(await twitterToday['name']);
    //     // var twitterFollowersToday = twitterToday["data"]["public_metrics"]["followers_count"]
    //     // twiObject["data"][currentUserKey]["followers"] = twitterFollowersToday;
    //     targetUserCounter++;
    // }















    var twitterCursor2 = await myClient
        .db('data')
        .collection('twitter')
        .find({
            "data.username": currentUser
        })
        .sort({ "data.snapshotDate": -1 })


    var myTwitterResults = await twitterCursor2.toArray();

    // save arrays locally: today, 1-day, 7-day, and 30-day 
    var myTwitterToday = await twitterResults[0];
    var myTwitter1DayAgo = twitterResults[1];
    var myTwitter7DaysAgo = twitterResults[6];
    var myTwitter30DaysAgo = twitterResults[6]; // to-do: update to 29 when there is enough docs

    console.log(await "TWITTER TODAY FROM OUTSIDE OF THE LOOP: *************************** ");
    console.log(await myTwitterToday);
    console.log(await "Accessing nested value: " + myTwitterToday['data']['name']);

    // save arrays locally: today, 1-day, 7-day, and 30-day 
    var twitterToday = await twitterResults[0];
    var twitter1DayAgo = twitterResults[1];
    var twitter7DaysAgo = twitterResults[6];
    var twitter30DaysAgo = twitterResults[6]; // to-do: update to 29 when there is enough docs






    // save follower counts for today, 1-day, 7-day, and 30-day
    var twitterFollowersToday = twitterToday["data"]["public_metrics"]["followers_count"]
    var twitterFollowers1DayAgo = twitter1DayAgo["data"]["public_metrics"]["followers_count"]
    var twitterFollowers7DaysAgo = twitter7DaysAgo["data"]["public_metrics"]["followers_count"]
    var twitterFollowers30DaysAgo = twitter30DaysAgo["data"]["public_metrics"]["followers_count"]

    // save following counts for today, 1-day, 7-day, and 30-day
    var twitterFollowingToday = twitterToday["data"]["public_metrics"]["following_count"]
    var twitterFollowing1DayAgo = twitter1DayAgo["data"]["public_metrics"]["following_count"]
    var twitterFollowing7DaysAgo = twitter7DaysAgo["data"]["public_metrics"]["following_count"]
    var twitterFollowing30DaysAgo = twitter30DaysAgo["data"]["public_metrics"]["following_count"]

    // save tweet counts for today, 1-day, 7-day, and 30-day
    var twitterTweetsToday = twitterToday["data"]["public_metrics"]["tweet_count"]
    var twitterTweets1DayAgo = twitter1DayAgo["data"]["public_metrics"]["tweet_count"]
    var twitterTweets7DaysAgo = twitter7DaysAgo["data"]["public_metrics"]["tweet_count"]
    var twitterTweets30DaysAgo = twitter30DaysAgo["data"]["public_metrics"]["tweet_count"]

    // calculate variables to pass to object
    var usr1_username = await myUser1;





    return await twiObject;

}

