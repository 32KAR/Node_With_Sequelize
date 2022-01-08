const express = require('express');
const app = express();
const logger = require('./app/helper/logging');
const passport = require('passport');
require('dotenv').config();

require('./app/models/sequelizeConnection');

require('./app/helper/authPassport')(passport);

const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use('/', require('./app/routes/route'));

app.use(require("./app/helper/response"));
app.use(require("./app/helper/error").handleJoiErrors);
app.use(require("./app/helper/error").handleErrors);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('app/uploads'));

const port = process.env.PORT || 4002;
app.listen(port, () => logger.info(`Listening on port ${port}...`));