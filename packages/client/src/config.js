// const env = require("dotenv").config({ path: "../../../../.env" });
// export const API_URL = "http://localhost:4000";



// require('dotenv').config({ path: "../../../.env" })
// console.log("HERE IS PROCESS.ENV: " + process.env)

//THIS doesn't crash, but doesn't get info needed:
export const API_URL = process.env.REACT_APP_API_URL
