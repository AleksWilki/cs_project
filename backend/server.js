// Imports and Initialization
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 3000;
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const dbName = "cs_project";
const expressSession = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Staff = require('./models/staffModel');
const Patient = require('./models/patientModel');
const schedule = require('node-schedule');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

schedule.scheduleJob({ hour: 00, minute: 00 }, () => {
    Patient.find({}).then(function (patients) {
        patients.forEach(function (patient) {
            console.log(patient)
            patient.heartRateAverageHistoryheartRateAverageHistory.unshift(patient.heartRateAverageToday);
            patient.calorieIntakeHistory.unshift(patient.calorieIntakeToday);
            patient.alcoholIntakeHistory.unshift(patient.alcoholIntakeToday);
            patient.stepsTakenHistory.unshift(patient.stepsTakenToday);
            patient.timeSleptHistory.unshift(patient.timeSleptToday);
            patient.heartRateAverageHistory.unshift(patient.heartRateAverageToday);
            patient.save();
        });
    })
});

// Passport and Session initialization
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(
    function (req, id, done) {
        var DB;
        if (req.url === "/Staff/logout") {
            DB = Staff;
        } else if (req.url === "/Patient/logout") {
            DB = Patient
        }
        DB.findById(id, function (err, user) {
            done(err, user, { message: 'Successful logout' });
        });
    });
passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function (req, email, password, done) {
        var DB;
        if (req.url === "/Staff/login") {
            DB = Staff;
        } else if (req.url === "/Patient/login") {
            DB = Patient
        }
        DB.findOne({ email: email })
            .then(user => {
                if (user) {
                    user.passwordComparison(password).then(passwordsMatch => {
                        if (passwordsMatch) {
                            return done(null, user);
                        }
                        else {
                            return done(null, false, { message: 'Incorrect password' });
                        }
                    });
                } else {
                    return done(null, false, { message: 'Account not found' });
                }
            })
            .catch(error => {
                return done(null, false, { message: error });
            });
    }
));
app.use(expressSession({
    secret: "b6040247",
    cookie: {
        maxAge: 1000 * 60 * 60 * 720
    },
    resave: false,
    saveUninitialized: false
}));

// Staff Routes
router.post('/Staff/register', function (req, res) {
    let staff = new Staff(req.body);
    staff.save().then(() => {
        res.status(200).end();
    }).catch(err => {
        res.status(400).send(err);
    });
});
router.get('/Staff/:id', function (req, res) {
    Staff.findById(req.params.id, (err, staff) => {
        if (staff) {
            res.status(200).json(staff);
        } else {
            res.status(404).end();
        }
    });
});
router.put('/Staff/:id', function (req, res) {
    Staff.findById(req.params.id, (err, staff) => {
        if (staff) {
            staff = req.body;
            staff.save().then(() => {
                res.status(200).end();
            }).catch(err => {
                res.status(400).send(err);
            });
        }
        else {
            res.status(404).end();
        }
    });
});
router.delete('/Staff/:id', function (req, res) {
    Staff.findByIdAndDelete(req.params.id, (err, staff) => {
        if (staff) {
            res.status(200);
        }
        else {
            res.status(404).end();
        }
    });
});
router.post('/Staff/login', passport.authenticate('local'), function (req, res) {
    res.status(200).end();
});
router.post('/Staff/logout', function (req, res) {
    req.logout();
    res.status(200).end();
});


// Patient Routes
router.post('/Patient/register', function (req, res) {
    let patient = new Patient(req.body);
    patient.save().then(() => {
        res.status(200).end();
    }).catch(err => {
        res.status(400).send(err);
    });
});
router.get('/Patient/patient/:id', function (req, res) {
    Patient.findById(req.params.id, (err, patient) => {
        if (patient) {
            res.status(200).json(patient);
        } else {
            res.status(404).end();
        }
    });
});
router.put('/Patient/patient/:id', function (req, res) {
    Patient.findById(req.params.id, (err, patient) => {
        if (err) {
            console.log(err)
        } else if (patient) {
            req.body.bloodPressure ? patient.bloodPressureHistory.unshift(req.body.bloodPressure) : null;
            req.body.stepsTaken ? patient.stepsTakenToday = req.body.stepsTaken : null;
            req.body.calories ? patient.calorieIntakeToday = patient.calorieIntakeToday + parseInt(req.body.calories) : null;
            req.body.alcohol ? patient.alcoholIntakeToday = patient.alcoholIntakeToday + parseInt(req.body.alcohol) : null;
            req.body.sleep ? patient.timeSleptToday = patient.timeSleptToday + parseInt(req.body.sleep) : null;
            if (req.body.heartRate) {
                var heartRate = parseInt(req.body.heartRate)
                patient.latestHeartRate = heartRate
                if (heartRate > patient.heartRatePeakToday) {
                    patient.heartRatePeakToday = heartRate
                }
                patient.heartRateAverageToday = [(patient.heartRateAverageToday[1] + heartRate) / (patient.heartRateAverageToday[2] + 1), patient.heartRateAverageToday[1] + heartRate, patient.heartRateAverageToday[2] + 1]
            }
            console.log(req.body)
            patient.save().then(() => {
                res.status(200).end();
            }).catch(err => {
                console.log(err)
                res.status(400).send(err);
            });
        }
        else {
            res.status(404).end();
        }
    });
});
router.delete('/Patient/patient/:id', function (req, res) {
    Patient.findByIdAndDelete(req.params.id, (err, File) => {
        if (patient) {
            res.status(200);
        }
        else {
            res.status(404).end();
        }
    });
});
router.post('/Patient/login', passport.authenticate('local'), function (req, res) {
    res.status(200).end();
});
router.post('/Patient/logout', function (req, res) {
    req.logout();
    res.status(200).end();
});
router.get('/Patient', function (req, res) {
    Patient.find((err, patient) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(patient);
        }
    })
});
router.get('/Patient/:filter', function (req, res) {
    let filterJson = JSON.parse(`{${req.params.filter}}`);
    for (var param in filterJson) {
        if (filterJson[param] === '') {
            delete filterJson[param];
        } else if (typeof filterJson[param] === String) {
            filterJson[param] = new RegExp(filterJson[param], "i");
        }
    }
    console.log(filterJson)
    Patient.find(filterJson, null, (err, patients) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(patients);
        }
    })
});

// Middleware
app.use(cookieParser("cs_proj_1"));
app.use(expressSession({
    secret: "cs_proj_1",
    cookie: {
        expires: new Date(2147483647000) // expire far in the future
    },
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({ credentials: true, origin: new RegExp(/$http:\/\/localhost:300/, 'i') }));
app.use('/', router);
app.set("port", process.env.PORT || port);
app.use(express.json());


// Mongoose connection
mongoose.set('useCreateIndex', true);
mongoose.connect(
    `mongodb://localhost:27017/${dbName}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once("open", () => {
    console.log(`Successfully Connected To MongoDB: ${dbName}`);
});

// App startup
server.listen(app.get("port"), () => {
    console.log(`AHM Server Launched At http://localhost:${app.get("port")}`)
});

module.exports = app;