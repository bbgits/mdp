/* 

This script: 
> creates a stripe server for handling payments 
> creates a stripe instance for connecting to account
> defines params for two checkout page endpoints (stripe owned/managed)
> [ WILL BE ] run once per day

*/

//import and create express server
const express = require("express");
const app = express();

// env setup
const path = require('path');
const dotenv = require('dotenv');
let env = dotenv.config({ path: '.env' });

// env imports
const STRIPE_SECRET_KEY = env.parsed.STRIPE_SECRET_KEY;
const STATIC_DIR = env.parsed.STATIC_DIR;
const DOMAIN = env.parsed.DOMAIN;
const STRIPE_PUBLISHABLE_KEY = env.parsed.STRIPE_PUBLISHABLE_KEY;
const BASIC_PRICE_ID = env.parsed.BASIC_PRICE_ID;
const PRO_PRICE_ID = env.parsed.PRO_PRICE_ID;

//Create a stripe instance by passing SECRET_KEY
const stripe = require('stripe')(STRIPE_SECRET_KEY);

//Set parapmeters for the server
app.use(express.static(STATIC_DIR));
app.use(express.urlencoded());
app.use(
    express.json({
        // We need the raw body to verify webhook signatures.
        // Let's compute it only when hitting the Stripe webhook endpoint.
        verify: function (req, res, buf) {
            if (req.originalUrl.startsWith("/webhook")) {
                req.rawBody = buf.toString();
            }
        },
    })
);

// Set main file path from env STATIC_DIR
app.get("/", (req, res) => {
    const filePath = path.resolve(STATIC_DIR + "/index.html");
    res.sendFile(filePath);
});

// Fetch the Checkout Session to display the JSON result on the success page
app.get("/checkout-session", async (req, res) => {
    const { sessionId } = req.query;
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    res.send(session);
});

// CREATE CHECKOUT SESSION: Monthly Payment
app.post("/create-monthly-checkout-session", async (req, res) => {
    const domainURL = DOMAIN;
    const { priceId } = "price_1LT5IHBTlONlrDpCbIs33WUz"; //price codes from Stripe Acct

    try {
        const session = await stripe.checkout.sessions.create({
            mode: "subscription",
            line_items: [
                {
                    price: "price_1LT5IHBTlONlrDpCbIs33WUz",

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
        return res.send({
            error: {
                message: e.message,
            }
        });
    }
});

// CREATE CHECKOUT SESSION: Annual Payment
app.post("/create-annual-checkout-session", async (req, res) => {
    const domainURL = DOMAIN;
    const { priceId } = "price_1LT5IHBTlONlrDpCTcuUZysR";

    try {
        const session = await stripe.checkout.sessions.create({
            mode: "subscription",
            line_items: [
                {
                    price: "price_1LT5IHBTlONlrDpCTcuUZysR",
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
        return res.send({
            error: {
                message: e.message,
            }
        });
    }
});

app.get("/config", (req, res) => {
    res.send({
        publishableKey: STRIPE_PUBLISHABLE_KEY,
        basicPrice: BASIC_PRICE_ID,
        proPrice: PRO_PRICE_ID,
    });
});

// Define route for customer customer portal
app.post('/customer-portal', async (req, res) => {
    // For demonstration purposes, we're using the Checkout session to retrieve the customer ID.
    // Typically this is stored alongside the authenticated user in your database.
    const { sessionId } = req.body;
    const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);

    // This is the url to which the customer will be redirected when they are done
    // managing their billing with the portal.
    const returnUrl = DOMAIN;

    const portalSession = await stripe.billingPortal.sessions.create({
        customer: checkoutSession.customer,
        return_url: returnUrl,
    });

    res.redirect(303, portalSession.url);
});

// Webhook handler for asynchronous events.
app.post("/webhook", async (req, res) => {
    let data;
    let eventType;
    // Check if webhook signing is configured.
    if (STRIPE_WEBHOOK_SECRET) {
        // Retrieve the event by verifying the signature using the raw body and secret.
        let event;
        let signature = req.headers["stripe-signature"];

        try {
            event = stripe.webhooks.constructEvent(
                req.rawBody,
                signature,
                STRIPE_WEBHOOK_SECRET
            );
        } catch (err) {
            console.log(`⚠️  Webhook signature verification failed.`);
            return res.sendStatus(400);
        }
        // Extract the object from the event.
        data = event.data;
        eventType = event.type;
    } else {
        // Webhook signing is recommended, but if the secret is not configured in `config.js`,
        // retrieve the event data directly from the request body.
        data = req.body.data;
        eventType = req.body.type;
    }

    if (eventType === "checkout.session.completed") {
        console.log(`🔔  Payment received!`);
    }

    res.sendStatus(200);
});

app.listen(4242, () => console.log(`Node server listening at http://localhost:${4242}/`));
