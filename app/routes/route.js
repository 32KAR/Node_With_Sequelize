const express = require("express");
const router = express();

const userRoute = require('./router/userRoute');
const addressBookRoute = require('./router/addressBookRoute');

router.use('/', userRoute);
router.use('/', addressBookRoute);

module.exports = router;