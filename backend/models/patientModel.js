"use strict";
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
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
patientSchema.pre("save", function (next) {
    var patient = this;
    // Ensure password is not double hashed when unmodifier
    if (!patient.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(patient.password, salt, function(err, hash) {
            if (err) return next(err);
            patient.password = hash;
            next();
        });
    });
});
patientSchema.methods.passwordComparison = function (inputPassword) {
    let patientPassword = this.password;
    return bcrypt.compare(inputPassword, patientPassword);
}

module.exports = mongoose.model("Patient", patientSchema);
