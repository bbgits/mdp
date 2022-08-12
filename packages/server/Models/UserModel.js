const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [false, "First Name is Required"],
        unique: false,
    },
    lastName: {
        type: String,
        required: [false, "Last Name is Required"],
    },

    email: {
        type: String,
        required: [false, "Email is Required"],
        unique: false,
    },
    password: {
        type: String,
        required: [false, "Password is Required"],
    },
    paymentName: {
        type: String,
        required: [false, "paymentName is Required"],
    }, paymentNumber: {
        type: String,
        required: [false, "paymentNumber is Required"],
    }, paymentExpire: {
        type: String,
        required: [false, "paymentExpire is Required"],
    }, paymentCode: {
        type: String,
        required: [false, "paymentCode is Required"],
    }, paymentAddress1: {
        type: String,
        required: [false, "paymentAddress1 is Required"],
    }, paymentAddress2: {
        type: String,
        required: [false, "paymentAddress2 is Required"],
    }, paymentCity: {
        type: String,
        required: [false, "paymentCity is Required"],
    }, paymentState: {
        type: String,
        required: [false, "paymentState is Required"],
    }, paymentZip: {
        type: String,
        required: [false, "paymentZip is Required"],
    }, paymentType: {
        type: String,
        required: [false, "paymentType is Required"],
    }

});

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error("incorrect password");
    }
    throw Error("incorrect email");
};

module.exports = mongoose.model("Users", userSchema);
