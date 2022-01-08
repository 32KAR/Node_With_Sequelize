const logger = require('../helper/logging');
const { GeneralResponse } = require("../utils/response");
const { GeneralError } = require("../utils/error");
const config = require('../utils/config');
const db = require('../models/sequelizeConnection');
const AddressBook = db.addressBookModel;

exports.createAddressBook = async (req, res, next) => {
    try {
        const body = [req.body];
        if (body) {
            for (const values in body) {
                await AddressBook.bulkCreate(body[values]);
            }
            await next(
                new GeneralResponse(
                    "address books are successfully created",
                    undefined,
                    config.HTTP_CREATED
                )
            );
        } else {
            await next(
                new GeneralError(
                    "address book not created!",
                    undefined,
                    config.HTTP_ACCEPTED
                )
            );
        }
    }
    catch (err) {
        logger.error("err", err);
        next(new GeneralError("Book creation failed!"));
    }
}

exports.readAddressBook = async (req, res, next) => {
    try {
        const user = await AddressBook.findAll();
        if (user) {
            res.send(user);
        } else {
            await next(
                new GeneralError(
                    "address books are not shown!",
                    undefined,
                    config.HTTP_ACCEPTED
                )
            );
        }
    }
    catch (err) {
        logger.error("err", err);
        next(new GeneralError("failed to read address book!"));
    }
}

exports.updateAddressBook = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updateUser = {
            title: req.body.title,
            addressLine1: req.body.addressLine1,
            addressLine2: req.body.addressLine2,
            country: req.body.country,
            state: req.body.state,
            city: req.body.city,
            pinCode: req.body.pinCode,
        }
        const user = await AddressBook.update(updateUser, { where: { id: id } });
        if (user) {
            await next(
                new GeneralResponse(
                    "Address book is updated...",
                    undefined,
                    config.HTTP_CREATED
                )
            );
        } else {
            await next(
                new GeneralError(
                    "Address book is not updated!",
                    undefined,
                    config.HTTP_ACCEPTED
                )
            );
        }
    }
    catch (err) {
        logger.error("err", err);
        next(new GeneralError("failed to read address book!"));
    }
}

exports.deleteAddressBook = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log(id);
        const user = await AddressBook.destroy({ where: { id: id } });
        if (user) {
            await next(
                new GeneralResponse(
                    "Address book is deleted...",
                    undefined,
                    config.HTTP_CREATED
                )
            );
        } else {
            await next(
                new GeneralError(
                    "Address book is not deleted!",
                    undefined,
                    config.HTTP_ACCEPTED
                )
            );
        }
    }
    catch (err) {
        logger.error("err", err);
        next(new GeneralError("failed to delete address book!"));
    }
}
