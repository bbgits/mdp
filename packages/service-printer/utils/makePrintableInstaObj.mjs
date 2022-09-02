export default async function makePrintableInstaObj(myClient, Type, User1, User2, User3, User4, User5) {

    var myType = Type.toLowerCase();
    var myUser1 = User1.toLowerCase();
    var myUser2 = User2.toLowerCase();
    var myUser3 = User3.toLowerCase();
    var myUser4 = User4.toLowerCase();
    var myUser5 = User5.toLowerCase();

    const users = await [myUser1, myUser2, myUser3, myUser4, myUser5]
    console.log(await "myUser1 from MakePrintableInstaObj: " + myUser1)

    // create standardized insta object to add data to as we go
    var instaObject = await {
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
        .collection('instagram')
        .find({
            "instaUser": myUser1
        })
        .sort({ "timestamp": -1 })
    var user1_Results = await Cursor1.toArray();

    // save arrays locally: today, 1-day, 7-day, and 30-day 
    var instaUser1_Today = await user1_Results[0];
    var instaUser1_1DayAgo = user1_Results[1];
    var instaUser1_7DaysAgo = user1_Results[6];
    var instaUser1_30DaysAgo = user1_Results[29]; // to-do: update to 29 when there is enough docs

    // save follower counts for today, 1-day, 7-day, and 30-day
    var instaUser1_FollowersToday = parseInt(instaUser1_Today["instaFollowers"]);
    var instaUser1_Followers1DayAgo = parseInt(instaUser1_1DayAgo["instaFollowers"]);
    var instaUser1_Followers7DaysAgo = parseInt(instaUser1_7DaysAgo["instaFollowers"]);
    var instaUser1_Followers30DaysAgo = parseInt(instaUser1_30DaysAgo["instaFollowers"]);

    // save following counts for today, 1-day, 7-day, and 30-day
    var instaUser1_FollowingToday = parseInt(instaUser1_Today["instaFollowing"]);
    var instaUser1_Following1DayAgo = parseInt(instaUser1_1DayAgo["instaFollowing"]);
    var instaUser1_Following7DaysAgo = parseInt(instaUser1_7DaysAgo["instaFollowing"]);
    var instaUser1_Following30DaysAgo = parseInt(instaUser1_30DaysAgo["instaFollowing"]);

    // save tweet counts for today, 1-day, 7-day, and 30-day
    var instaUser1_PostsToday = parseInt(instaUser1_Today["instaPosts"]);
    var instaUser1_Posts1DayAgo = parseInt(instaUser1_1DayAgo["instaPosts"]);
    var instaUser1_Posts7DaysAgo = parseInt(instaUser1_7DaysAgo["instaPosts"]);
    var instaUser1_Posts30DaysAgo = parseInt(instaUser1_30DaysAgo["instaPosts"]);

    //  pass variables for user1 to instaObject
    instaObject['data']['usr1']['followers'] = instaUser1_FollowersToday;
    instaObject['data']['usr1']['followers_1day_change'] = instaUser1_FollowersToday - instaUser1_Followers1DayAgo;
    instaObject['data']['usr1']['followers_7day_change'] = instaUser1_FollowersToday - instaUser1_Followers7DaysAgo;
    instaObject['data']['usr1']['followers_30day_change'] = instaUser1_FollowersToday - instaUser1_Followers30DaysAgo;

    instaObject['data']['usr1']['following'] = instaUser1_FollowingToday;
    instaObject['data']['usr1']['following_1day_change'] = instaUser1_FollowingToday - instaUser1_Following1DayAgo;
    instaObject['data']['usr1']['following_7day_change'] = instaUser1_FollowingToday - instaUser1_Following7DaysAgo;
    instaObject['data']['usr1']['following_30day_change'] = instaUser1_FollowingToday - instaUser1_Following30DaysAgo;

    instaObject['data']['usr1']['posts'] = instaUser1_PostsToday;
    instaObject['data']['usr1']['posts_1day_change'] = instaUser1_PostsToday - instaUser1_Posts1DayAgo;
    instaObject['data']['usr1']['posts_7day_change'] = instaUser1_PostsToday - instaUser1_Posts7DaysAgo;
    instaObject['data']['usr1']['posts_30day_change'] = instaUser1_PostsToday - instaUser1_Posts30DaysAgo;

    // // ############################################## USER 2
    // // ############################################## 

    var Cursor2 = await myClient
        .db('data')
        .collection('instagram')
        .find({
            "instaUser": myUser2
        })
        .sort({ "timestamp": -1 })
    var user2_Results = await Cursor2.toArray();

    // save arrays locally: today, 1-day, 7-day, and 30-day 
    var instaUser2_Today = await user2_Results[0];
    var instaUser2_1DayAgo = user2_Results[1];
    var instaUser2_7DaysAgo = user2_Results[6];
    var instaUser2_30DaysAgo = user2_Results[29]; // to-do: update to 29 when there is enough docs

    // save follower counts for today, 1-day, 7-day, and 30-day
    var instaUser2_FollowersToday = parseInt(instaUser2_Today["instaFollowers"]);
    var instaUser2_Followers1DayAgo = parseInt(instaUser2_1DayAgo["instaFollowers"]);
    var instaUser2_Followers7DaysAgo = parseInt(instaUser2_7DaysAgo["instaFollowers"]);
    var instaUser2_Followers30DaysAgo = parseInt(instaUser2_30DaysAgo["instaFollowers"]);

    // save following counts for today, 1-day, 7-day, and 30-day
    var instaUser2_FollowingToday = parseInt(instaUser2_Today["instaFollowing"]);
    var instaUser2_Following1DayAgo = parseInt(instaUser2_1DayAgo["instaFollowing"]);
    var instaUser2_Following7DaysAgo = parseInt(instaUser2_7DaysAgo["instaFollowing"]);
    var instaUser2_Following30DaysAgo = parseInt(instaUser2_30DaysAgo["instaFollowing"]);

    // save tweet counts for today, 1-day, 7-day, and 30-day
    var instaUser2_PostsToday = parseInt(instaUser2_Today["instaPosts"]);
    var instaUser2_Posts1DayAgo = parseInt(instaUser2_1DayAgo["instaPosts"]);
    var instaUser2_Posts7DaysAgo = parseInt(instaUser2_7DaysAgo["instaPosts"]);
    var instaUser2_Posts30DaysAgo = parseInt(instaUser2_30DaysAgo["instaPosts"]);

    //  pass variables for user1 to instaObject
    instaObject['data']['usr2']['followers'] = instaUser2_FollowersToday;
    instaObject['data']['usr2']['followers_1day_change'] = instaUser2_FollowersToday - instaUser2_Followers1DayAgo;
    instaObject['data']['usr2']['followers_7day_change'] = instaUser2_FollowersToday - instaUser2_Followers7DaysAgo;
    instaObject['data']['usr2']['followers_30day_change'] = instaUser2_FollowersToday - instaUser2_Followers30DaysAgo;

    instaObject['data']['usr2']['following'] = instaUser2_FollowingToday;
    instaObject['data']['usr2']['following_1day_change'] = instaUser2_FollowingToday - instaUser2_Following1DayAgo;
    instaObject['data']['usr2']['following_7day_change'] = instaUser2_FollowingToday - instaUser2_Following7DaysAgo;
    instaObject['data']['usr2']['following_30day_change'] = instaUser2_FollowingToday - instaUser2_Following30DaysAgo;

    instaObject['data']['usr2']['posts'] = instaUser2_PostsToday;
    instaObject['data']['usr2']['posts_1day_change'] = instaUser2_PostsToday - instaUser1_Posts1DayAgo;
    instaObject['data']['usr2']['posts_7day_change'] = instaUser2_PostsToday - instaUser1_Posts7DaysAgo;
    instaObject['data']['usr2']['posts_30day_change'] = instaUser2_PostsToday - instaUser1_Posts30DaysAgo;


    // // ############################################## USER 3
    // // ############################################## 

    var Cursor3 = await myClient
        .db('data')
        .collection('instagram')
        .find({
            "instaUser": myUser3
        })
        .sort({ "timestamp": -1 })
    var user3_Results = await Cursor3.toArray();

    // save arrays locally: today, 1-day, 7-day, and 30-day 
    var instaUser3_Today = await user3_Results[0];
    var instaUser3_1DayAgo = user3_Results[1];
    var instaUser3_7DaysAgo = user3_Results[6];
    var instaUser3_30DaysAgo = user3_Results[29]; // to-do: update to 29 when there is enough docs

    // save follower counts for today, 1-day, 7-day, and 30-day
    var instaUser3_FollowersToday = parseInt(instaUser3_Today["instaFollowers"]);
    var instaUser3_Followers1DayAgo = parseInt(instaUser3_1DayAgo["instaFollowers"]);
    var instaUser3_Followers7DaysAgo = parseInt(instaUser3_7DaysAgo["instaFollowers"]);
    var instaUser3_Followers30DaysAgo = parseInt(instaUser3_30DaysAgo["instaFollowers"]);

    // save following counts for today, 1-day, 7-day, and 30-day
    var instaUser3_FollowingToday = parseInt(instaUser3_Today["instaFollowing"]);
    var instaUser3_Following1DayAgo = parseInt(instaUser3_1DayAgo["instaFollowing"]);
    var instaUser3_Following7DaysAgo = parseInt(instaUser3_7DaysAgo["instaFollowing"]);
    var instaUser3_Following30DaysAgo = parseInt(instaUser3_30DaysAgo["instaFollowing"]);

    // save tweet counts for today, 1-day, 7-day, and 30-day
    var instaUser3_PostsToday = parseInt(instaUser3_Today["instaPosts"]);
    var instaUser3_Posts1DayAgo = parseInt(instaUser3_1DayAgo["instaPosts"]);
    var instaUser3_Posts7DaysAgo = parseInt(instaUser3_7DaysAgo["instaPosts"]);
    var instaUser3_Posts30DaysAgo = parseInt(instaUser3_30DaysAgo["instaPosts"]);

    //  pass variables for user1 to instaObject
    instaObject['data']['usr3']['followers'] = instaUser3_FollowersToday;
    instaObject['data']['usr3']['followers_1day_change'] = instaUser3_FollowersToday - instaUser3_Followers1DayAgo;
    instaObject['data']['usr3']['followers_7day_change'] = instaUser3_FollowersToday - instaUser3_Followers7DaysAgo;
    instaObject['data']['usr3']['followers_30day_change'] = instaUser3_FollowersToday - instaUser3_Followers30DaysAgo;

    instaObject['data']['usr3']['following'] = instaUser3_FollowingToday;
    instaObject['data']['usr3']['following_1day_change'] = instaUser3_FollowingToday - instaUser3_Following1DayAgo;
    instaObject['data']['usr3']['following_7day_change'] = instaUser3_FollowingToday - instaUser3_Following7DaysAgo;
    instaObject['data']['usr3']['following_30day_change'] = instaUser3_FollowingToday - instaUser3_Following30DaysAgo;

    instaObject['data']['usr3']['posts'] = instaUser3_PostsToday;
    instaObject['data']['usr3']['posts_1day_change'] = instaUser3_PostsToday - instaUser3_Posts1DayAgo;
    instaObject['data']['usr3']['posts_7day_change'] = instaUser3_PostsToday - instaUser3_Posts7DaysAgo;
    instaObject['data']['usr3']['posts_30day_change'] = instaUser3_PostsToday - instaUser3_Posts30DaysAgo;

    // // ############################################## USER 4    
    // // ##############################################

    var Cursor4 = await myClient
        .db('data')
        .collection('instagram')
        .find({
            "instaUser": myUser4
        })
        .sort({ "timestamp": -1 })
    var user4_Results = await Cursor4.toArray();

    // save arrays locally: today, 1-day, 7-day, and 30-day 
    var instaUser4_Today = await user4_Results[0];
    var instaUser4_1DayAgo = user4_Results[1];
    var instaUser4_7DaysAgo = user4_Results[6];
    var instaUser4_30DaysAgo = user4_Results[29]; // to-do: update to 29 when there is enough docs

    console.log("instaUser1_Today: ")
    console.log(await instaUser1_Today);

    // save follower counts for today, 1-day, 7-day, and 30-day
    var instaUser4_FollowersToday = parseInt(instaUser4_Today["instaFollowers"]);
    var instaUser4_Followers1DayAgo = parseInt(instaUser4_1DayAgo["instaFollowers"]);
    var instaUser4_Followers7DaysAgo = parseInt(instaUser4_7DaysAgo["instaFollowers"]);
    var instaUser4_Followers30DaysAgo = parseInt(instaUser4_30DaysAgo["instaFollowers"]);

    // save following counts for today, 1-day, 7-day, and 30-day
    var instaUser4_FollowingToday = parseInt(instaUser4_Today["instaFollowing"]);
    var instaUser4_Following1DayAgo = parseInt(instaUser4_1DayAgo["instaFollowing"]);
    var instaUser4_Following7DaysAgo = parseInt(instaUser4_7DaysAgo["instaFollowing"]);
    var instaUser4_Following30DaysAgo = parseInt(instaUser4_30DaysAgo["instaFollowing"]);

    // save tweet counts for today, 1-day, 7-day, and 30-day
    var instaUser4_PostsToday = parseInt(instaUser4_Today["instaPosts"]);
    var instaUser4_Posts1DayAgo = parseInt(instaUser4_1DayAgo["instaPosts"]);
    var instaUser4_Posts7DaysAgo = parseInt(instaUser4_7DaysAgo["instaPosts"]);
    var instaUser4_Posts30DaysAgo = parseInt(instaUser4_30DaysAgo["instaPosts"]);

    //  pass variables for user1 to instaObject
    instaObject['data']['usr4']['followers'] = instaUser4_FollowersToday;
    instaObject['data']['usr4']['followers_1day_change'] = instaUser4_FollowersToday - instaUser4_Followers1DayAgo;
    instaObject['data']['usr4']['followers_7day_change'] = instaUser4_FollowersToday - instaUser4_Followers7DaysAgo;
    instaObject['data']['usr4']['followers_30day_change'] = instaUser4_FollowersToday - instaUser4_Followers30DaysAgo;

    instaObject['data']['usr4']['following'] = instaUser4_FollowingToday;
    instaObject['data']['usr4']['following_1day_change'] = instaUser4_FollowingToday - instaUser4_Following1DayAgo;
    instaObject['data']['usr4']['following_7day_change'] = instaUser4_FollowingToday - instaUser4_Following7DaysAgo;
    instaObject['data']['usr4']['following_30day_change'] = instaUser4_FollowingToday - instaUser4_Following30DaysAgo;

    instaObject['data']['usr4']['posts'] = instaUser4_PostsToday;
    instaObject['data']['usr4']['posts_1day_change'] = instaUser4_PostsToday - instaUser4_Posts1DayAgo;
    instaObject['data']['usr4']['posts_7day_change'] = instaUser4_PostsToday - instaUser4_Posts7DaysAgo;
    instaObject['data']['usr4']['posts_30day_change'] = instaUser4_PostsToday - instaUser4_Posts30DaysAgo;

    // ############################################## USER 5    
    // ############################################## 

    var Cursor5 = await myClient
        .db('data')
        .collection('instagram')
        .find({
            "instaUser": myUser5
        })
        .sort({ "timestamp": -1 })
    var user5_Results = await Cursor5.toArray();

    // save arrays locally: today, 1-day, 7-day, and 30-day 
    var instaUser5_Today = await user5_Results[0];
    var instaUser5_1DayAgo = user5_Results[1];
    var instaUser5_7DaysAgo = user5_Results[6];
    var instaUser5_30DaysAgo = user5_Results[29]; // to-do: update to 29 when there is enough docs

    // save follower counts for today, 1-day, 7-day, and 30-day
    var instaUser5_FollowersToday = parseInt(instaUser5_Today["instaFollowers"]);
    var instaUser5_Followers1DayAgo = parseInt(instaUser5_1DayAgo["instaFollowers"]);
    var instaUser5_Followers7DaysAgo = parseInt(instaUser5_7DaysAgo["instaFollowers"]);
    var instaUser5_Followers30DaysAgo = parseInt(instaUser5_30DaysAgo["instaFollowers"]);

    // save following counts for today, 1-day, 7-day, and 30-day
    var instaUser5_FollowingToday = parseInt(instaUser5_Today["instaFollowing"]);
    var instaUser5_Following1DayAgo = parseInt(instaUser5_1DayAgo["instaFollowing"]);
    var instaUser5_Following7DaysAgo = parseInt(instaUser5_7DaysAgo["instaFollowing"]);
    var instaUser5_Following30DaysAgo = parseInt(instaUser5_30DaysAgo["instaFollowing"]);

    // save tweet counts for today, 1-day, 7-day, and 30-day
    var instaUser5_PostsToday = parseInt(instaUser5_Today["instaPosts"]);
    var instaUser5_Posts1DayAgo = parseInt(instaUser5_1DayAgo["instaPosts"]);
    var instaUser5_Posts7DaysAgo = parseInt(instaUser5_7DaysAgo["instaPosts"]);
    var instaUser5_Posts30DaysAgo = parseInt(instaUser5_30DaysAgo["instaPosts"]);

    //  pass variables for user1 to instaObject
    instaObject['data']['usr5']['followers'] = instaUser5_FollowersToday;
    instaObject['data']['usr5']['followers_1day_change'] = instaUser5_FollowersToday - instaUser5_Followers1DayAgo;
    instaObject['data']['usr5']['followers_7day_change'] = instaUser5_FollowersToday - instaUser5_Followers7DaysAgo;
    instaObject['data']['usr5']['followers_30day_change'] = instaUser5_FollowersToday - instaUser5_Followers30DaysAgo;

    instaObject['data']['usr5']['following'] = instaUser5_FollowingToday;
    instaObject['data']['usr5']['following_1day_change'] = instaUser5_FollowingToday - instaUser5_Following1DayAgo;
    instaObject['data']['usr5']['following_7day_change'] = instaUser5_FollowingToday - instaUser5_Following7DaysAgo;
    instaObject['data']['usr5']['following_30day_change'] = instaUser5_FollowingToday - instaUser5_Following30DaysAgo;

    instaObject['data']['usr5']['posts'] = instaUser5_PostsToday;
    instaObject['data']['usr5']['posts_1day_change'] = instaUser5_PostsToday - instaUser5_Posts1DayAgo;
    instaObject['data']['usr5']['posts_7day_change'] = instaUser5_PostsToday - instaUser5_Posts7DaysAgo;
    instaObject['data']['usr5']['posts_30day_change'] = instaUser5_PostsToday - instaUser5_Posts30DaysAgo;

    return await instaObject;



}

