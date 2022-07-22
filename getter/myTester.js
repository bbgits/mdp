import getData from "./utils/GetData.js";
import fetch from 'node-fetch';
console.log("imports sucessful...")

const response = await fetch('https://api.openweathermap.org/data/3.0/onecall?lat=41.8781&lon=87.6298&exclude={part}&appid=9a4e349ddb3d06c7b89fab8c2146c72b&units=imperial');
const data = await response.json();

console.log("data retrieved:")
console.log(data)


console.log("")




const my_url = "https://api.openweathermap.org/data/3.0/onecall?lat=41.8781&lon=87.6298&exclude={part}&appid=9a4e349ddb3d06c7b89fab8c2146c72b&units=imperial"

console.log("variables set...")

const obj = getData(my_url)

console.log("running code...")

console.log(obj)



