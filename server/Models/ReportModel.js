const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const reportSchema = new mongoose.Schema({
    reportName: {
        type: String,
        required: [true, "Report Name is Required :("],
        unique: false,
    },
    reportType: {
        type: String,
        required: [true, "Report Type is Required :("],
    },
    email: {
        type: String,
        required: [true, "Report must have associated email"],
        unique: false,
    }
});


module.exports = mongoose.model("Reports", reportSchema);
