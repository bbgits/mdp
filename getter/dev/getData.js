import fetch from 'node-fetch';
import fs from 'fs';


console.log('imports sucessful...')

const getData = async (some_url) => {
    const res = await fetch(some_url);
    const json = await res.json();
    console.log(json);
};

const my_url = "https://api.openweathermap.org/data/3.0/onecall?lat=41.8781&lon=87.6298&exclude={part}&appid=9a4e349ddb3d06c7b89fab8c2146c72b&units=imperial"

getData(my_url)