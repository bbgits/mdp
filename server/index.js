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
const authRoutes = require("./routes/authRoutes");

// import cookieParser to help manage cookies
const cookieParser = require("cookie-parser");

// import environment variables + error if fail
const env = require("dotenv").config("./.env");
if (env.error) {
    throw new Error(`Unable to load the .env file from ${envFilePath}. Please copy .env.example to ${envFilePath}`);
}

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
    const filePath = path.resolve(process.env.STATIC_DIR + "../public/index.html");
    res.sendFile(filePath);
});

//create endpoint for creating checkout session
app.post("/create-annual-checkout-session", async (req, res) => {
    const domainURL = process.env.DOMAIN;
    const { priceId } = req.body;

    // Create new Checkout Session for the order
    // Other optional params include:
    // [billing_address_collection] - to display billing address details on the page
    // [customer] - if you have an existing Stripe Customer ID
    // [customer_email] - lets you prefill the email input in the form
    // [automatic_tax] - to automatically calculate sales tax, VAT and GST in the checkout page
    // For full details see https://stripe.com/docs/api/checkout/sessions/create
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
            success_url: `${domainURL}/success.html?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${domainURL}/canceled.html`,
            // automatic_tax: { enabled: true }
        });

        return res.redirect(303, session.url);
    } catch (e) {
        res.status(400);
        return res.send({
            error: {
                message: e.message,
            }
        });
    }
});

// establish connection to stripe server
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
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
const dbUser = (process.env.DB_USER);
const dbPass = (process.env.DB_PASS)
mongoose
    .connect("mongodb+srv://" + dbUser + ":" + dbPass + "@my-daily-pdf.ddfuw.mongodb.net/main?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("sucessfully connected to mongo atlass db...");
    })
    .catch((err) => {
        console.log(err.message);
    });

// link the server to the react app on local 3000
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);

console.log("sucessfully connected to port 3000...")
app.use(cookieParser());
app.use(express.json());
app.use("/", authRoutes);


