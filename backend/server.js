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
router.get('/Patient/:id', function (req, res) {
    Patient.findById(req.params.id, (err, patient) => {
        if (patient) {
            res.status(200).json(patient);
        } else {
            res.status(404).end();
        }
    });
});
router.put('/Patient/:id', function (req, res) {
    Patient.findById(req.params.id, (err, patient) => {
        if (patient) {
            patient = req.body;

            patient.save().then(() => {
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
router.delete('/Patient/:id', function (req, res) {
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

// Middleware
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use('/', router);
app.set("port", process.env.PORT || port);
app.use(express.json());
app.use(cors({ credentials: true }));

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