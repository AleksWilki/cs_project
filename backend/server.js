const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
app.use('/', express.Router());

app.set("port", process.env.PORT || port);
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

server.listen(port, () => {
    console.log(`AHM Server Launched At http://localhost:${port}`);
});

module.exports = app;