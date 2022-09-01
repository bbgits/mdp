
import getTheQuote from './getTheQuote.mjs';

var someQuoteObj = {

}

export default async function makePrintableHeaderObj(myClient, myZip) {

    // DATE VARIABLES
    var todaysTimeStamp = new Date();
    var todaysDateString = todaysTimeStamp.toDateString();
    var todaysDateStringArray = todaysDateString.split(" ");
    var repDateDay = todaysDateStringArray[0];
    var repDateMonth = todaysDateStringArray[1];
    var repDateDate = todaysDateStringArray[2];
    var repDateYear = todaysDateStringArray[3];
    console.log("DAY: " + repDateDay);
    console.log("MONTH: " + repDateMonth);
    console.log("DATE: " + repDateDate);
    console.log("YEAR: " + repDateYear);

    // GET WEATHER RESULTS
    const weatherCursor = await myClient.db('data').collection('weather').find({
        'zipCode': myZip
    });

    const weatherResults = await weatherCursor.toArray();

    // SUNRISE
    var todaysSunrise = new Date(weatherResults[0]["daily"][0]["sunrise"] * 1000);
    var sunriseHr = todaysSunrise.getHours();
    var sunriseMin = todaysSunrise.getMinutes();
    var repSunrise = sunriseHr + ":" + sunriseMin;
    console.log("SUNRISE: " + repSunrise);

    // SUNSET
    var todaysSunset = new Date(weatherResults[0]["daily"][0]["sunset"] * 1000);
    var sunsetHr = parseInt(todaysSunset.getHours());
    if (sunsetHr > 12) { // adjust from 24hr to AM/PM 
        sunsetHr = sunsetHr - 12
    }
    var sunsetMin = todaysSunset.getMinutes();
    var repSunset = sunsetHr + ":" + sunsetMin
    console.log("SUNSET: " + repSunset)

    // HIGH TEMP
    var repHighTemperature = parseInt(weatherResults[0]["daily"][0]["temp"]["max"]);
    console.log("HIGH TEMPERATURE: " + repHighTemperature);

    // LOW TEMP
    var repLowTemperature = parseInt(weatherResults[0]["daily"][0]["temp"]["min"]);
    console.log("LOW TEMPERATURE: " + repLowTemperature);

    // WEATHER STRING
    var repWeatherString = weatherResults[0]["daily"][0]["weather"][0]["description"];
    console.log("WEATHER DESCRIPTION: " + repWeatherString);


    // QUOTE
    var quoteObject = await getTheQuote();
    var repQuoteAuthor = await quoteObject["Author"];
    var repQuoteString = await quoteObject["Quote"]
    console.log("QUOTE AUTHOR: " + await repQuoteAuthor)
    console.log("QUOTE TEXT: " + await repQuoteString)

    // declare final header obj
    var headerObj = await {
        "type": "header",
        "data": {
            "header_title_day": repDateDay,
            "header_title_month": repDateMonth,
            "header_title_date": repDateDate,
            "header_title_year": repDateYear,
            "header_weather_sunrise_time": repSunrise,
            "header_weather_sunset_time": repSunset,
            "header_weather_temp_high": repHighTemperature,
            "header_weather_temp_low": repLowTemperature,
            "header_weather_string": repWeatherString,
            "header_quote_string": repQuoteString,
            "header_quote_author": repQuoteAuthor,
        }
    };

    return await headerObj;


}