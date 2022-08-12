const User = require("../models/UserModel");
const Report = require("../models/ReportModel");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, "a secret key!", {
        expiresIn: maxAge,
    });
};

const handleErrors = (err) => {
    let errors = {
        firstName: "", lastName: "", email: "", password: "", reportName: "", reportType: "", reportZip: "", reportQuote: "", reportLgDiv1Type: "", reportLgDiv1Data: "", reportLgDiv2type: "", reportLgDiv2Data: "",
        reportLgDiv3type: "", reportLgDiv3Data: "",
    };

    console.log(err);
    if (err.message === "incorrect email") {
        errors.email = "That email is not registered";
    }

    if (err.message === "incorrect password") {
        errors.password = "That password is incorrect";
    }

    if (err.code === 11000) {
        errors.email = "Email is already registered";
        return errors;
    }

    if (err.message.includes("Users validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

module.exports.register = async (req, res, next) => {
    try {
        //Declare all variables
        const { firstName, lastName, email, password, stripeID, reportName, reportType, reportZip, reportQuote1Sports, reportQuote2Politics, reportQuote3Art, reportQuote4Love, reportQuote5Business, reportLgDiv1Type, reportLgDiv1Data1, reportLgDiv1Data2, reportLgDiv1Data3, reportLgDiv1Data4, reportLgDiv1Data5, reportLgDiv2Type, reportLgDiv2Data1, reportLgDiv2Data2, reportLgDiv2Data3, reportLgDiv2Data4, reportLgDiv2Data5, reportLgDiv3Type, reportLgDiv3Data1, reportLgDiv3Data2, reportLgDiv3Data3, reportLgDiv3Data4, reportLgDiv3Data5 } = req.body;

        //Send user data to "users" collection
        const user = await User.create({ firstName, lastName, email, password, stripeID });
        console.log(user);

        //Sent report data to "reports" collection
        const report = await Report.create({ reportName, reportType, email, reportZip, reportQuote1Sports, reportQuote2Politics, reportQuote3Art, reportQuote4Love, reportQuote5Business, reportLgDiv1Type, reportLgDiv1Data1, reportLgDiv1Data2, reportLgDiv1Data3, reportLgDiv1Data4, reportLgDiv1Data5, reportLgDiv2Type, reportLgDiv2Data1, reportLgDiv2Data2, reportLgDiv2Data3, reportLgDiv2Data4, reportLgDiv2Data5, reportLgDiv3Type, reportLgDiv3Data1, reportLgDiv3Data2, reportLgDiv3Data3, reportLgDiv3Data4, reportLgDiv3Data5 });
        console.log(report);


        const token = createToken(user._id);



        res.cookie("jwt", token, {
            withCrdentials: true,
            httpOnly: false,
            maxAge: maxAge * 1000,
        });

        return res.sendStatus(201).json({ User: { user: user._id, created: true }, Report: { report: report._id, created: true } });

    } catch (err) {
        console.log(err);
        const errors = handleErrors(err);
        res.json({ errors, created: false });
    }
};

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
        return res.sendStatus(200).json({ user: user._id, status: true });
    } catch (err) {
        const errors = handleErrors(err);
        res.json({ errors, status: false });
    }
};