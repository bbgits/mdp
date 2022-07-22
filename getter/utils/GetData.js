import fetch from 'node-fetch';

// accepts a URL, saves 

const getData = (some_url) => {
    console.log("running getData...")
    const res = fetch(some_url);
    const json = res.json();
    const obj = JSON.parse(json)

    return obj;
};

const my_url = "https://api.openweathermap.org/data/3.0/onecall?lat=41.8781&lon=87.6298&exclude={part}&appid=9a4e349ddb3d06c7b89fab8c2146c72b&units=imperial"

getData(my_url)
