const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is Required"],
        unique: true,
    },
    lastName: {
        type: String,
        required: [true, "Last Name is Required"],
    },

    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
    },
    paymentName: {
        type: String,
        required: [true, "paymentName is Required"],
    }, paymentNumber: {
        type: String,
        required: [true, "paymentNumber is Required"],
    }, paymentExpire: {
        type: String,
        required: [true, "paymentExpire is Required"],
    }, paymentCode: {
        type: String,
        required: [true, "paymentCode is Required"],
    }, paymentAddress1: {
        type: String,
        required: [true, "paymentAddress1 is Required"],
    }, paymentAddress2: {
        type: String,
        required: [true, "paymentAddress2 is Required"],
    }, paymentCity: {
        type: String,
        required: [true, "paymentCity is Required"],
    }, paymentState: {
        type: String,
        required: [true, "paymentState is Required"],
    }, paymentZip: {
        type: String,
        required: [true, "paymentZip is Required"],
    }, paymentType: {
        type: String,
        required: [true, "paymentType is Required"],
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
