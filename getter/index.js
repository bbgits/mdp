import express from 'express';
import bodyParser from 'body-parser'; //enables intake of post request bodies
import usersRoutes from './routes/users.js'; //import routes
import https from 'https';



console.log("imports sucessful!!!")


const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.use('/users', usersRoutes) /
    app.get('/', (req, res) => res.send('hello from homepage!'));//create a route!
app.listen(PORT, () => console.log(`server funning on port: http://localhost:${PORT}`));

console.log("Starting Weather API Calls...");



const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        console.log(JSON.parse(data).explanation);
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});

