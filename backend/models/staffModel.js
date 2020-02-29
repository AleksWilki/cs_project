"use strict";
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const staffSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    registerDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});
staffSchema.pre("save", function (next) {
    var staff = this;
    // Ensure password is not double hashed when unmodifier
    if (!staff.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(staff.password, salt, function(err, hash) {
            if (err) return next(err);
            staff.password = hash;
            next();
        });
    });
});
staffSchema.methods.passwordComparison = function (inputPassword) {
    let staffPassword = this.password;
    return bcrypt.compare(inputPassword, staffPassword);
}

module.exports = mongoose.model("Staff", staffSchema);
