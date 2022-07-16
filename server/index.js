const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");

const app = express();

app.listen(4000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Create Server Successful...");
    }
});

mongoose
    .connect("mongodb+srv://admin01:monc0dedUP@my-daily-pdf.ddfuw.mongodb.net/main?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB Connetion Successful...");
    })
    .catch((err) => {
        console.log(err.message);
    });

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);
app.use(cookieParser());

app.use(express.json());
app.use("/", authRoutes);


