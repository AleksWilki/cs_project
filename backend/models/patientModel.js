"use strict";
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const Date2 = new Date("<YYYY-mm-dd>");

const patientSchema = new mongoose.Schema({
    registerDate: {
        type: Date,
        //required: true,
        default: Date.now
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    allergies: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true
    },
    symptoms: {
        type: Array,
        required: true
    },
    severity: {
        type: String,
        default: "none",
    },
    appointmentBooked: {
        type: Boolean,
        default: false
    },
    appointmentDate: {
        type: Date,
    },

    latestHeartRate: {
        type: Number,
        default: 0
    },
    heartRatePeakToday: {
        type: Number,
    },
    heartRateAverageToday: {
        type: Array,
        default: [0, 0, 0]
    },
    heartRateAverageHistory: {
        type: Array,
        default: []
    },

    bloodPressureHistory: {
        type: Array,
        default: []
    },

    calorieIntakeToday: {
        type: Number,
        default: 0
    },
    calorieIntakeHistory: {
        type: Array,
        default: []
    },

    alcoholIntakeToday: {
        type: Number,
        default: 0
    },
    alcoholIntakeHistory: {
        type: Array,
        default: []
    },

    stepsTakenToday: {
        type: Number,
        default: 0
    },
    stepsTakenHistory: {
        type: Array,
        default: []
    },

    timeSleptToday: {
        type: Number,
        default: 0
    },
    timeSleptHistory: {
        type: Array,
        default: []
    },
});
patientSchema.pre("save", function (next) {
    var patient = this;
    // Ensure password is not double hashed when unmodifier
    if (!patient.isModified('password')) return next();

    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(patient.password, salt, function (err, hash) {
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
