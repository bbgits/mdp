export default async function makePrintableTwitterObj(myClient, Type, User1, User2, User3, User4, User5) {

    var myType = Type.toLowerCase();
    var myUser1 = User1.toLowerCase();
    var myUser2 = User2.toLowerCase();
    var myUser3 = User3.toLowerCase();
    var myUser4 = User4.toLowerCase();
    var myUser5 = User5.toLowerCase();

    const users = await [myUser1, myUser2, myUser3, myUser4, myUser5]
    console.log(await "myUser1 from MakePrintableTwitterObj: " + myUser1)

    // create standardized twitter object to add data to as we go
    var twiObject = await {
        "type": myType,
        "data": {
            "usr1": {
                "username": myUser1,
                "followers": "",
                "followers_1day_change": "",
                "followers_7day_change": "",
                "followers_30day_change": "",
                "following": "",
                "following_1day_change": "",
                "following_7day_change": "",
                "following_30day_change": "",
                "posts": "",
                "posts_1day_change": "",
                "posts_7day_change": "",
                "posts_30day_change": ""
            },
            "usr2": {
                "username": myUser2,
                "followers": "",
                "followers_1day_change": "",
                "followers_7day_change": "",
                "followers_30day_change": "",
                "following": "",
                "following_1day_change": "",
                "following_7day_change": "",
                "following_30day_change": "",
                "posts": "",
                "posts_1day_change": "",
                "posts_7day_change": "",
                "posts_30day_change": ""
            },
            "usr3": {
                "username": myUser3,
                "followers": "",
                "followers_1day_change": "",
                "followers_7day_change": "",
                "followers_30day_change": "",
                "following": "",
                "following_1day_change": "",
                "following_7day_change": "",
                "following_30day_change": "",
                "posts": "",
                "posts_1day_change": "",
                "posts_7day_change": "",
                "posts_30day_change": ""
            },
            "usr4": {
                "username": myUser4,
                "followers": "",
                "followers_1day_change": "",
                "followers_7day_change": "",
                "followers_30day_change": "",
                "following": "",
                "following_1day_change": "",
                "following_7day_change": "",
                "following_30day_change": "",
                "posts": "",
                "posts_1day_change": "",
                "posts_7day_change": "",
                "posts_30day_change": ""
            },
            "usr5": {
                "username": myUser5,
                "followers": "",
                "followers_1day_change": "",
                "followers_7day_change": "",
                "followers_30day_change": "",
                "following": "",
                "following_1day_change": "",
                "following_7day_change": "",
                "following_30day_change": "",
                "posts": "",
                "posts_1day_change": "",
                "posts_7day_change": "",
                "posts_30day_change": ""
            }
        }
    }

    // ############################################## USER 1
    // ############################################## 

    var Cursor1 = await myClient
        .db('data')
        .collection('twitter')
        .find({
            "data.username": myUser1
        })
        .sort({ "data.timestamp": -1 })


    var user1_Results = await Cursor1.toArray();



    // save arrays locally: today, 1-day, 7-day, and 30-day 
    var twiUser1_Today = await user1_Results[0];
    var twiUser1_1DayAgo = user1_Results[1];
    var twiUser1_7DaysAgo = user1_Results[6];
    var twiUser1_30DaysAgo = user1_Results[14]; // to-do: update to 29 when there is enough docs

    // save follower counts for today, 1-day, 7-day, and 30-day
    var twiUser1_FollowersToday = twiUser1_Today["data"]["public_metrics"]["followers_count"]
    var twiUser1_Followers1DayAgo = twiUser1_1DayAgo["data"]["public_metrics"]["followers_count"]
    var twiUser1_Followers7DaysAgo = twiUser1_7DaysAgo["data"]["public_metrics"]["followers_count"]
    var twiUser1_Followers30DaysAgo = twiUser1_30DaysAgo["data"]["public_metrics"]["followers_count"]

    // save following counts for today, 1-day, 7-day, and 30-day
    var twiUser1_FollowingToday = twiUser1_Today["data"]["public_metrics"]["following_count"]
    var twiUser1_Following1DayAgo = twiUser1_1DayAgo["data"]["public_metrics"]["following_count"]
    var twiUser1_Following7DaysAgo = twiUser1_7DaysAgo["data"]["public_metrics"]["following_count"]
    var twiUser1_Following30DaysAgo = twiUser1_30DaysAgo["data"]["public_metrics"]["following_count"]

    // save tweet counts for today, 1-day, 7-day, and 30-day
    var twiUser1_PostsToday = twiUser1_Today["data"]["public_metrics"]["tweet_count"]
    var twiUser1_Posts1DayAgo = twiUser1_1DayAgo["data"]["public_metrics"]["tweet_count"]
    var twiUser1_Posts7DaysAgo = twiUser1_7DaysAgo["data"]["public_metrics"]["tweet_count"]
    var twiUser1_Posts30DaysAgo = twiUser1_30DaysAgo["data"]["public_metrics"]["tweet_count"]

    //  pass variables for user1 to twiObject
    twiObject['data']['usr1']['followers'] = twiUser1_FollowersToday;
    twiObject['data']['usr1']['followers_1day_change'] = twiUser1_FollowersToday - twiUser1_Followers1DayAgo;
    twiObject['data']['usr1']['followers_7day_change'] = twiUser1_FollowersToday - twiUser1_Followers7DaysAgo;
    twiObject['data']['usr1']['followers_30day_change'] = twiUser1_FollowersToday - twiUser1_Followers30DaysAgo;

    twiObject['data']['usr1']['following'] = twiUser1_FollowingToday;
    twiObject['data']['usr1']['following_1day_change'] = twiUser1_FollowingToday - twiUser1_Following1DayAgo;
    twiObject['data']['usr1']['following_7day_change'] = twiUser1_FollowingToday - twiUser1_Following7DaysAgo;
    twiObject['data']['usr1']['following_30day_change'] = twiUser1_FollowingToday - twiUser1_Following30DaysAgo;

    twiObject['data']['usr1']['posts'] = twiUser1_PostsToday;
    twiObject['data']['usr1']['posts_1day_change'] = twiUser1_PostsToday - twiUser1_Posts1DayAgo;
    twiObject['data']['usr1']['posts_7day_change'] = twiUser1_PostsToday - twiUser1_Posts7DaysAgo;
    twiObject['data']['usr1']['posts_30day_change'] = twiUser1_PostsToday - twiUser1_Posts30DaysAgo;

    // ############################################## USER 2
    // ############################################## 

    var Cursor2 = await myClient
        .db('data')
        .collection('twitter')
        .find({
            "data.username": myUser2
        })
        .sort({ "data.timestamp": -1 })
    var user2_Results = await Cursor2.toArray();

    // console.log(user2_Results);

    // save arrays locally: today, 1-day, 7-day, and 30-day 
    var twiUser2_Today = await user2_Results[0];
    var twiUser2_1DayAgo = await user2_Results[1];
    var twiUser2_7DaysAgo = await user2_Results[6];
    var twiUser2_30DaysAgo = await user2_Results[14]; // to-do: update to 29 when there is enough docs

    console.log(await twiUser2_Today)

    // save follower counts for today, 1-day, 7-day, and 30-day
    var twiUser2_FollowersToday = await twiUser2_Today["data"]["public_metrics"]["followers_count"]
    var twiUser2_Followers1DayAgo = twiUser2_1DayAgo["data"]["public_metrics"]["followers_count"]
    var twiUser2_Followers7DaysAgo = twiUser2_7DaysAgo["data"]["public_metrics"]["followers_count"]
    var twiUser2_Followers30DaysAgo = twiUser2_30DaysAgo["data"]["public_metrics"]["followers_count"]

    // save following counts for today, 1-day, 7-day, and 30-day
    var twiUser2_FollowingToday = twiUser2_Today["data"]["public_metrics"]["following_count"]
    var twiUser2_Following1DayAgo = twiUser2_1DayAgo["data"]["public_metrics"]["following_count"]
    var twiUser2_Following7DaysAgo = twiUser2_7DaysAgo["data"]["public_metrics"]["following_count"]
    var twiUser2_Following30DaysAgo = twiUser2_30DaysAgo["data"]["public_metrics"]["following_count"]

    // save tweet counts for today, 1-day, 7-day, and 30-day
    var twiUser2_PostsToday = twiUser2_Today["data"]["public_metrics"]["tweet_count"]
    var twiUser2_Posts1DayAgo = twiUser2_1DayAgo["data"]["public_metrics"]["tweet_count"]
    var twiUser2_Posts7DaysAgo = twiUser2_7DaysAgo["data"]["public_metrics"]["tweet_count"]
    var twiUser2_Posts30DaysAgo = twiUser2_30DaysAgo["data"]["public_metrics"]["tweet_count"]

    //  pass variables for user2 to twiObject
    twiObject['data']['usr2']['followers'] = twiUser2_FollowersToday;
    twiObject['data']['usr2']['followers_1day_change'] = twiUser2_FollowersToday - twiUser2_Followers1DayAgo;
    twiObject['data']['usr2']['followers_7day_change'] = twiUser2_FollowersToday - twiUser2_Followers7DaysAgo;
    twiObject['data']['usr2']['followers_30day_change'] = twiUser2_FollowersToday - twiUser2_Followers30DaysAgo;

    twiObject['data']['usr2']['following'] = twiUser2_FollowingToday;
    twiObject['data']['usr2']['following_1day_change'] = twiUser2_FollowingToday - twiUser2_Following1DayAgo;
    twiObject['data']['usr2']['following_7day_change'] = twiUser2_FollowingToday - twiUser2_Following7DaysAgo;
    twiObject['data']['usr2']['following_30day_change'] = twiUser2_FollowingToday - twiUser2_Following30DaysAgo;

    twiObject['data']['usr2']['posts'] = twiUser2_PostsToday;
    twiObject['data']['usr2']['posts_1day_change'] = twiUser2_PostsToday - twiUser2_Posts1DayAgo;
    twiObject['data']['usr2']['posts_7day_change'] = twiUser2_PostsToday - twiUser2_Posts7DaysAgo;
    twiObject['data']['usr2']['posts_30day_change'] = twiUser2_PostsToday - twiUser2_Posts30DaysAgo;


    // ############################################## USER 3
    // ############################################## 

    var Cursor3 = await myClient
        .db('data')
        .collection('twitter')
        .find({
            "data.username": myUser3
        })
        .sort({ "data.timestamp": -1 });
    var user3_Results = await Cursor3.toArray();

    // save arrays locally: today, 1-day, 7-day, and 30-day 
    var twiUser3_Today = await user3_Results[0];
    var twiUser3_1DayAgo = user3_Results[1];
    var twiUser3_7DaysAgo = user3_Results[6];
    var twiUser3_30DaysAgo = user3_Results[14]; // to-do: update to 29 when there is enough docs

    // save follower counts for today, 1-day, 7-day, and 30-day
    var twiUser3_FollowersToday = twiUser3_Today["data"]["public_metrics"]["followers_count"];
    var twiUser3_Followers1DayAgo = twiUser3_1DayAgo["data"]["public_metrics"]["followers_count"];
    var twiUser3_Followers7DaysAgo = twiUser3_7DaysAgo["data"]["public_metrics"]["followers_count"];
    var twiUser3_Followers30DaysAgo = twiUser3_30DaysAgo["data"]["public_metrics"]["followers_count"];

    // save following counts for today, 1-day, 7-day, and 30-day
    var twiUser3_FollowingToday = twiUser3_Today["data"]["public_metrics"]["following_count"];
    var twiUser3_Following1DayAgo = twiUser3_1DayAgo["data"]["public_metrics"]["following_count"];
    var twiUser3_Following7DaysAgo = twiUser3_7DaysAgo["data"]["public_metrics"]["following_count"];
    var twiUser3_Following30DaysAgo = twiUser3_30DaysAgo["data"]["public_metrics"]["following_count"];

    // save tweet counts for today, 1-day, 7-day, and 30-day
    var twiUser3_PostsToday = twiUser3_Today["data"]["public_metrics"]["tweet_count"];
    var twiUser3_Posts1DayAgo = twiUser3_1DayAgo["data"]["public_metrics"]["tweet_count"];
    var twiUser3_Posts7DaysAgo = twiUser3_7DaysAgo["data"]["public_metrics"]["tweet_count"];
    var twiUser3_Posts30DaysAgo = twiUser3_30DaysAgo["data"]["public_metrics"]["tweet_count"];

    //  pass variables for user3 to twiObject
    twiObject['data']['usr3']['followers'] = twiUser3_FollowersToday;
    twiObject['data']['usr3']['followers_1day_change'] = twiUser3_FollowersToday - twiUser3_Followers1DayAgo;
    twiObject['data']['usr3']['followers_7day_change'] = twiUser3_FollowersToday - twiUser3_Followers7DaysAgo;
    twiObject['data']['usr3']['followers_30day_change'] = twiUser3_FollowersToday - twiUser3_Followers30DaysAgo;

    twiObject['data']['usr3']['following'] = twiUser3_FollowingToday;
    twiObject['data']['usr3']['following_1day_change'] = twiUser3_FollowingToday - twiUser3_Following1DayAgo;
    twiObject['data']['usr3']['following_7day_change'] = twiUser3_FollowingToday - twiUser3_Following7DaysAgo;
    twiObject['data']['usr3']['following_30day_change'] = twiUser3_FollowingToday - twiUser3_Following30DaysAgo;

    twiObject['data']['usr3']['posts'] = twiUser3_PostsToday;
    twiObject['data']['usr3']['posts_1day_change'] = twiUser3_PostsToday - twiUser3_Posts1DayAgo;
    twiObject['data']['usr3']['posts_7day_change'] = twiUser3_PostsToday - twiUser3_Posts7DaysAgo;
    twiObject['data']['usr3']['posts_30day_change'] = twiUser3_PostsToday - twiUser3_Posts30DaysAgo;

    // ############################################## USER 4    
    // ##############################################

    var Cursor4 = await myClient
        .db('data')
        .collection('twitter')
        .find({
            "data.username": myUser4
        })
        .sort({ "data.timestamp": -1 })



    var user4_Results = await Cursor4.toArray();
    // save arrays locally: today, 1-day, 7-day, and 30-day 

    console.log(user4_Results)
    var twiUser4_Today = await user4_Results[0];
    var twiUser4_1DayAgo = user4_Results[1];
    var twiUser4_7DaysAgo = user4_Results[6];
    var twiUser4_30DaysAgo = user4_Results[7]; // to-do: update to 29 when there is enough docs

    // save follower counts for today, 1-day, 7-day, and 30-day
    var twiUser4_FollowersToday = twiUser4_Today["data"]["public_metrics"]["followers_count"];
    var twiUser4_Followers1DayAgo = twiUser4_1DayAgo["data"]["public_metrics"]["followers_count"];
    var twiUser4_Followers7DaysAgo = twiUser4_7DaysAgo["data"]["public_metrics"]["followers_count"];
    var twiUser4_Followers30DaysAgo = twiUser4_30DaysAgo["data"]["public_metrics"]["followers_count"];

    // save following counts for today, 1-day, 7-day, and 30-day
    var twiUser4_FollowingToday = twiUser4_Today["data"]["public_metrics"]["following_count"];
    var twiUser4_Following1DayAgo = twiUser4_1DayAgo["data"]["public_metrics"]["following_count"];
    var twiUser4_Following7DaysAgo = twiUser4_7DaysAgo["data"]["public_metrics"]["following_count"];
    var twiUser4_Following30DaysAgo = twiUser4_30DaysAgo["data"]["public_metrics"]["following_count"];

    // save tweet counts for today, 1-day, 7-day, and 30-day
    var twiUser4_PostsToday = twiUser4_Today["data"]["public_metrics"]["tweet_count"];
    var twiUser4_Posts1DayAgo = twiUser4_1DayAgo["data"]["public_metrics"]["tweet_count"];
    var twiUser4_Posts7DaysAgo = twiUser4_7DaysAgo["data"]["public_metrics"]["tweet_count"];
    var twiUser4_Posts30DaysAgo = twiUser4_30DaysAgo["data"]["public_metrics"]["tweet_count"];

    //  pass variables for user2 to twiObject
    twiObject['data']['usr4']['followers'] = twiUser4_FollowersToday;
    twiObject['data']['usr4']['followers_1day_change'] = twiUser4_FollowersToday - twiUser4_Followers1DayAgo;
    twiObject['data']['usr4']['followers_7day_change'] = twiUser4_FollowersToday - twiUser4_Followers7DaysAgo;
    twiObject['data']['usr4']['followers_30day_change'] = twiUser4_FollowersToday - twiUser4_Followers30DaysAgo;

    twiObject['data']['usr4']['following'] = twiUser4_FollowingToday;
    twiObject['data']['usr4']['following_1day_change'] = twiUser4_FollowingToday - twiUser4_Following1DayAgo;
    twiObject['data']['usr4']['following_7day_change'] = twiUser4_FollowingToday - twiUser4_Following7DaysAgo;
    twiObject['data']['usr4']['following_30day_change'] = twiUser4_FollowingToday - twiUser4_Following30DaysAgo;

    twiObject['data']['usr4']['posts'] = twiUser4_PostsToday;
    twiObject['data']['usr4']['posts_1day_change'] = twiUser4_PostsToday - twiUser4_Posts1DayAgo;
    twiObject['data']['usr4']['posts_7day_change'] = twiUser4_PostsToday - twiUser4_Posts7DaysAgo;
    twiObject['data']['usr4']['posts_30day_change'] = twiUser4_PostsToday - twiUser4_Posts30DaysAgo;

    // ############################################## USER 5    // ############################################## 

    var Cursor5 = await myClient
        .db('data')
        .collection('twitter')
        .find({
            "data.username": myUser5
        })
        .sort({ "data.timestamp": -1 });
    var user5_Results = await Cursor5.toArray();

    // save arrays locally: today, 1-day, 7-day, and 30-day 
    var twiUser5_Today = await user5_Results[0];
    var twiUser5_1DayAgo = user5_Results[1];
    var twiUser5_7DaysAgo = user5_Results[6];
    var twiUser5_30DaysAgo = user5_Results[14]; // to-do: update to 29 when there is enough docs

    // save follower counts for today, 1-day, 7-day, and 30-day
    var twiUser5_FollowersToday = twiUser5_Today["data"]["public_metrics"]["followers_count"];
    var twiUser5_Followers1DayAgo = twiUser5_1DayAgo["data"]["public_metrics"]["followers_count"];
    var twiUser5_Followers7DaysAgo = twiUser5_7DaysAgo["data"]["public_metrics"]["followers_count"];
    var twiUser5_Followers30DaysAgo = twiUser5_30DaysAgo["data"]["public_metrics"]["followers_count"];

    // save following counts for today, 1-day, 7-day, and 30-day
    var twiUser5_FollowingToday = twiUser5_Today["data"]["public_metrics"]["following_count"];
    var twiUser5_Following1DayAgo = twiUser5_1DayAgo["data"]["public_metrics"]["following_count"];
    var twiUser5_Following7DaysAgo = twiUser5_7DaysAgo["data"]["public_metrics"]["following_count"];
    var twiUser5_Following30DaysAgo = twiUser5_30DaysAgo["data"]["public_metrics"]["following_count"];

    // save tweet counts for today, 1-day, 7-day, and 30-day
    var twiUser5_PostsToday = twiUser5_Today["data"]["public_metrics"]["tweet_count"];
    var twiUser5_Posts1DayAgo = twiUser5_1DayAgo["data"]["public_metrics"]["tweet_count"];
    var twiUser5_Posts7DaysAgo = twiUser5_7DaysAgo["data"]["public_metrics"]["tweet_count"];
    var twiUser5_Posts30DaysAgo = twiUser5_30DaysAgo["data"]["public_metrics"]["tweet_count"];

    //  pass variables for user2 to twiObject
    twiObject['data']['usr5']['followers'] = twiUser5_FollowersToday;
    twiObject['data']['usr5']['followers_1day_change'] = twiUser5_FollowersToday - twiUser5_Followers1DayAgo;
    twiObject['data']['usr5']['followers_7day_change'] = twiUser5_FollowersToday - twiUser5_Followers7DaysAgo;
    twiObject['data']['usr5']['followers_30day_change'] = twiUser5_FollowersToday - twiUser5_Followers30DaysAgo;

    twiObject['data']['usr5']['following'] = twiUser5_FollowingToday;
    twiObject['data']['usr5']['following_1day_change'] = twiUser5_FollowingToday - twiUser5_Following1DayAgo;
    twiObject['data']['usr5']['following_7day_change'] = twiUser5_FollowingToday - twiUser5_Following7DaysAgo;
    twiObject['data']['usr5']['following_30day_change'] = twiUser5_FollowingToday - twiUser5_Following30DaysAgo;

    twiObject['data']['usr5']['posts'] = twiUser5_PostsToday;
    twiObject['data']['usr5']['posts_1day_change'] = twiUser5_PostsToday - twiUser5_Posts1DayAgo;
    twiObject['data']['usr5']['posts_7day_change'] = twiUser5_PostsToday - twiUser5_Posts7DaysAgo;
    twiObject['data']['usr5']['posts_30day_change'] = twiUser5_PostsToday - twiUser5_Posts30DaysAgo;

    return await twiObject;



}

