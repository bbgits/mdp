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
    },
    reportZip: {
        type: String,
        required: [true, "ReportZip is Required :("],
        unique: false,
    },
    reportQuote1Sports: {
        type: String,
        required: [false, "ReportQuote is Required :("],
        unique: false,
    },
    reportQuote2Politics: {
        type: String,
        required: [false, "ReportQuote is Required :("],
        unique: false,
    }, reportQuote3Art: {
        type: String,
        required: [false, "ReportQuote is Required :("],
        unique: false,
    }, reportQuote4Love: {
        type: String,
        required: [false, "ReportQuote is Required :("],
        unique: false,
    }, reportQuote5Business: {
        type: String,
        required: [false, "ReportQuote is Required :("],
        unique: false,
    },
    reportLgDiv1Type: {
        type: String,
        required: [true, "LgDiv1Type Name is Required :("],
        unique: false,
    },
    reportLgDiv1Data1: {
        type: String,
        required: [false, "LgDiv1Data Name is Required :("],
        unique: false,
    },
    reportLgDiv1Data2: {
        type: String,
        required: [false, "LgDiv1Data Name is Required :("],
        unique: false,
    },
    reportLgDiv1Data3: {
        type: String,
        required: [false, "LgDiv1Data Name is Required :("],
        unique: false,
    },
    reportLgDiv1Data4: {
        type: String,
        required: [false, "LgDiv1Data Name is Required :("],
        unique: false,
    },
    reportLgDiv1Data5: {
        type: String,
        required: [false, "LgDiv1Data Name is Required :("],
        unique: false,
    },
    reportLgDiv2Type: {
        type: String,
        required: [true, "LgDiv2Type Name is Required :("],
        unique: false,
    },
    reportLgDiv2Data1: {
        type: String,
        required: [false, "LgDiv1Data Name is Required :("],
        unique: false,
    },
    reportLgDiv2Data2: {
        type: String,
        required: [false, "LgDiv1Data Name is Required :("],
        unique: false,
    },
    reportLgDiv2Data3: {
        type: String,
        required: [false, "LgDiv1Data Name is Required :("],
        unique: false,
    },
    reportLgDiv2Data4: {
        type: String,
        required: [false, "LgDiv1Data Name is Required :("],
        unique: false,
    },
    reportLgDiv2Data5: {
        type: String,
        required: [false, "LgDiv1Data Name is Required :("],
        unique: false,
    },
    reportLgDiv3Type: {
        type: String,
        required: [false, "LgDiv3Type Name is Required :("],
        unique: false,
    },
    reportLgDiv3Data1: {
        type: String,
        required: [false, "LgDiv1Data Name is Required :("],
        unique: false,
    },
    reportLgDiv3Data2: {
        type: String,
        required: [false, "LgDiv1Data Name is Required :("],
        unique: false,
    },
    reportLgDiv3Data3: {
        type: String,
        required: [true, "LgDiv1Data Name is Required :("],
        unique: false,
    },
    reportLgDiv3Data4: {
        type: String,
        required: [true, "LgDiv1Data Name is Required :("],
        unique: false,
    },
    reportLgDiv3Data5: {
        type: String,
        required: [true, "LgDiv1Data Name is Required :("],
        unique: false,
    },

});


module.exports = mongoose.model("Reports", reportSchema);
