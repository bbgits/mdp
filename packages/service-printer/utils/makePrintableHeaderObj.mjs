
import getTheQuote from './getTheQuote.mjs';

var someQuoteObj = {

}

export default async function makePrintableHeaderObj(myClient, myZip, firstName, lastName, email) {

    // DATE VARIABLES
    var todaysTimeStamp = new Date();
    var zero = "0";
    var zipCode = myZip;
    console.log("zipCode from makePrintableHeader...:" + zipCode)

    // Get String for day name
    var todaysDayNumber = (todaysTimeStamp.getDay());
    var todaysDayString = "";
    if (todaysDayNumber === 0) { todaysMonthString = "Sunday" }
    else if (todaysDayNumber === 1) { todaysDayString = "Monday" }
    else if (todaysDayNumber === 2) { todaysDayString = "Tuesday" }
    else if (todaysDayNumber === 3) { todaysDayString = "Wednesday" }
    else if (todaysDayNumber === 4) { todaysDayString = "Thursday" }
    else if (todaysDayNumber === 5) { todaysDayString = "Friday" }
    else if (todaysDayNumber === 6) { todaysDayString = "Saturday" }

    // Get string for Date Number
    var todaysDateNumberString = todaysTimeStamp.getDate().toString();
    if (todaysDateNumberString.length < 2) { todaysDateNumberString = zero.concat(todaysDateNumberString) }

    // Get String for month name
    var todaysMonthNumber = (todaysTimeStamp.getMonth() + 1);
    var todaysMonthString = "";
    if (todaysMonthNumber === 1) { todaysMonthString = "Jan" }
    else if (todaysMonthNumber === 2) { todaysMonthString = "Feb" }
    else if (todaysMonthNumber === 3) { todaysMonthString = "Mar" }
    else if (todaysMonthNumber === 4) { todaysMonthString = "Apr" }
    else if (todaysMonthNumber === 5) { todaysMonthString = "May" }
    else if (todaysMonthNumber === 6) { todaysMonthString = "Jun" }
    else if (todaysMonthNumber === 7) { todaysMonthString = "Jul" }
    else if (todaysMonthNumber === 8) { todaysMonthString = "Aug" }
    else if (todaysMonthNumber === 9) { todaysMonthString = "Sep" }
    else if (todaysMonthNumber === 10) { todaysMonthString = "Oct" }
    else if (todaysMonthNumber === 11) { todaysMonthString = "Nov" }
    else if (todaysMonthNumber === 12) { todaysMonthString = "Dec" }

    //get 4 digit year
    var todaysYearNumberString = todaysTimeStamp.getFullYear().toString();

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

    // SUNSET
    var todaysSunset = new Date(weatherResults[0]["daily"][0]["sunset"] * 1000);
    var sunsetHr = parseInt(todaysSunset.getHours());
    if (sunsetHr > 12) { // adjust from 24hr to AM/PM 
        sunsetHr = sunsetHr - 12
    }
    var sunsetMin = todaysSunset.getMinutes();
    var repSunset = sunsetHr + ":" + sunsetMin

    // HIGH TEMP
    var repHighTemperature = parseInt(weatherResults[0]["daily"][0]["temp"]["max"]);

    // LOW TEMP
    var repLowTemperature = parseInt(weatherResults[0]["daily"][0]["temp"]["min"]);

    // WEATHER STRING
    var repWeatherString = weatherResults[0]["daily"][0]["weather"][0]["description"];

    // QUOTE
    var quoteObject = await getTheQuote();
    var repQuoteAuthor = await quoteObject["Author"];
    var repQuoteString = await quoteObject["Quote"]

    // declare final header obj
    var headerObj = await {
        "type": "header",
        "data": {
            "header_first_name": firstName,
            "header_last_name": lastName,
            "header_email": email,
            "header_zip_code": zipCode,
            "header_title_day": todaysDayString,
            "header_title_month": todaysMonthString,
            "header_title_date": todaysDateNumberString,
            "header_title_year": todaysYearNumberString,
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