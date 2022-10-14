/* 

Main Server for App, listens on 4000, connects to:
> react app (3000), database (mongo cloud), payments (stripe)

*/

// import express for server
const express = require("express");

// import cors for cross-origin resource sharing between browser and server
const cors = require("cors");

// import mongoose to connect to database
const mongoose = require("mongoose");

// import authRoutes to help manage routing logic
const authRoutes = require("./Routes/AuthRoutes.js");

// import cookieParser to help manage cookies
const cookieParser = require("cookie-parser");

// import environment variables
const env = require("dotenv").config({ path: ".env" });
const envMongoUser = env.parsed.MONGO_USER;
const envMongoPass = env.parsed.MONGO_PASS;
const envStaticDir = env.parsed.STATIC_DIR;
const envDomain = env.parsed.DOMAIN;
const envStripeSecretKey = env.parsed.STRIPE_SECRET_KEY

// create express server app
const app = express();

// create endpoint at port 4000 for incoming data from frontend ???
app.listen(4000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("sucessfully created server, listening at port 4000...");
    }
});

// Create get to connect with register
app.get("/", (req, res) => {
    const filePath = path.resolve(envStaticDir + "../public/index.html");
    res.sendFile(filePath);
});

//create endpoint for ANNUAL CHECKOUT SESSION
app.post("/create-annual-checkout-session", async (req, res) => {
    const domainURL = envDomain;
    const { priceId } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            mode: "subscription",
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
            success_url: `http://localhost:3000`,
            cancel_url: `${domainURL}/canceled.html`,
            // automatic_tax: { enabled: true }
        });

        return res.redirect(303, session.url);
    } catch (e) {
        res.status(400);
        console.log("stripe session failed")
        return res.send({
            error: {
                message: e.message,
            }
        });
    }
});

// establish connection to stripe server
const stripe = require('stripe')(envStripeSecretKey);
if (stripe.error) {
    throw new Error(`Unable to connect to Stripe`);
} else {
    console.log("sucessfully connected to stripe...")
}

// The price ID passed from the client ---> not used currently
//   const {priceId} = req.body;

// the price ID passed from env
const priceId = '{{PRICE_ID}}';

// establish connection to mongoose atlas cloud db
const dbUser = (envMongoUser);
const dbPass = (envMongoPass)
mongoose
    .connect("mongodb+srv://" + dbUser + ":" + dbPass + "@my-daily-pdf.ddfuw.mongodb.net/main?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("sucessfully connected to mongo atlass db...");
    })
    .catch((err) => {
        console.log("mongooose failed")
        console.log(err.message);
    });

// link the server to the react app on local 3000
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT"],
        credentials: true,
    })
);

console.log("sucessfully connected to port 3000....")
app.use(cookieParser());
app.use(express.json());
app.use("/", authRoutes);


