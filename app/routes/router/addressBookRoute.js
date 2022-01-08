const express = require('express');
const router = express();
const passport = require('passport');
const { validator } = require('../../helper/validator');
const validate = require('../../validation/addressBookValidation');

const addressBookController = require("../../controllers/addressBookController");

//This API is used to create address books with multiple data.
router.post("/createAddressBook", passport.authenticate('jwt', { session: false }), validator.body(validate.createAddressBook), addressBookController.createAddressBook);

//This API is used to view address books.
router.get("/readAddressBook", passport.authenticate('jwt', { session: false }), addressBookController.readAddressBook);

//This API is used to update address book with id.
router.put("/updateAddressBook/:id", passport.authenticate('jwt', { session: false }), validator.body(validate.updateAddressBook), addressBookController.updateAddressBook);

//This API is used to delete address books with id.
router.delete("/deleteAddressBook/:id", passport.authenticate('jwt', { session: false }), addressBookController.deleteAddressBook);

module.exports = router;
