const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const dbName = "cs_project"
app.use('/', express.Router())

app.set("port", process.env.PORT || port);
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
    `mongodb://localhost:27017/${dbName}`,
    { useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
    console.log(`Successfully Connected To MongoDB: ${dbName}`);
});

server.listen(app.get("port"), () => {
    console.log(`AHM Server Launched At http://localhost:${app.get("port")}`)
});

module.exports = app;