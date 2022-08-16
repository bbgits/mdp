/*
*  Component to Display (and eventually, edit) a Report's Parameters
*/
import React, { useEffect } from "react";
var axios = require('axios');

// This Works: connects to Mongo and returns a report object
let myData = {};

async function myAPI() {
    const url = "http://localhost:4000/getOneReport/62fa3f959eb42db6842b9524";
    const response = await axios.get(url);
    myData = response.data;
    console.log(myData);
    return myData;
};

// This Works: prints the object to the console
myAPI()
// QUESTION^: why does this print to console when only the function below is exported?

// This works: 
export default function DisplayAndEditReport() {
    return <div className="accountDisplayReport">
        <p>* hello from DisplayAndEditReport.jsx *</p>
        {/* <h2>{myData}</h2> */}
    </div>
}






