import { Builder, By } from "selenium-webdriver";
import { MongoClient } from 'mongodb';

export default async function scrapeInstaByUsernameAndMakeDocInMongo(instaHandle, client, targetDB, targetCollection) {
    let driver = await new Builder().forBrowser("firefox").build();
    var baseUrl = "http://www.picuki.com/profile/";
    var userName = instaHandle;
    var fullUrl = baseUrl + userName;
    await driver.get(fullUrl)
    console.log(`scraping for user ${userName}...`)

    const userFollowers = await driver.findElement(By.xpath('/html/body/div[2]/div[2]/div/div[2]/span[3]/span')).getText();
    const userFollowing = await driver.findElement(By.xpath('/html/body/div[2]/div[2]/div/div[2]/span[4]/span')).getText();
    const userPosts = await driver.findElement(By.xpath('/html/body/div[2]/div[2]/div/div[2]/span[2]/a/span')).getText();

    console.log(userFollowers)



    console.log(`    followers: ${userFollowers}`)
    console.log(`    following: ${userFollowing}`)
    console.log(`    posts: ${userPosts}`)

    const data = {
        "instaUser": instaHandle,
        "instaFollowers": userFollowers,
        "instaFollowing": userFollowing,
        "instaPosts": userPosts,
        "dataDate": Date.now()
    }

    const result = await client.db(targetDB).collection(targetCollection).insertOne(data);

    console.log(`New Doc created with the following ID: ${result.insertedId}`);



}


async function main() {
    const uri = "mongodb+srv://admin01:monc0dedUP@my-daily-pdf.ddfuw.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        await client.connect();

        await scrapeInstaByUsernameAndMakeDocInMongo("kimkardashian", client, "data", "instagram1");


    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}

main().catch(console.error);
