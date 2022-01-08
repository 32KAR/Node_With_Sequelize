const bcrypt = require("bcrypt");
const saltRounds = 10;
const logger = require('../helper/logging');
const { GeneralResponse } = require("../utils/response");
const { GeneralError } = require("../utils/error");
const config = require('../utils/config');
const db = require('../models/sequelizeConnection');
const User = db.userModel;

exports.registration = async (req, res, next) => {
    try {
        const findUser = await User.findOne({ where: { email: req.body.email } });
        if (!findUser) {
            const encryptedPassword = await bcrypt.hash(req.body.password, saltRounds);
            const user = {
                name: req.body.name,
                email: req.body.email,
                password: encryptedPassword,
                profileImage: req.file.filename,
                gender: req.body.gender,
            }
            const registerUser = await User.create(user);
            if (registerUser) {
                await next(
                    new GeneralResponse(
                        req.body.name + " successfully register",
                        undefined,
                        config.HTTP_CREATED
                    )
                );
            } else {
                await next(
                    new GeneralError(
                        "User registration failed",
                        undefined,
                        config.HTTP_ACCEPTED
                    )
                );
            }
        } else {
            await next(
                new GeneralError(
                    "User email already exist",
                    undefined
                )
            );
        }
    }
    catch (err) {
        logger.error("err", err);
        next(new GeneralError("user registration failed"));
    }
}

exports.authUser = async (req, res, next) => {
    try {
        const authUser = await User.findOne({ where: { email: req.body.email } });
        if (authUser === null) {
            return res.send("User not found");
        } else {
            const compare = await bcrypt.compare(req.body.password, authUser.password);
            if (compare) {
                await next(
                    new GeneralResponse(
                        "Login Successfully...",
                        undefined,
                        config.HTTP_CREATED
                    )
                );
            } else {
                await next(
                    new GeneralError(
                        "Email and password does not match!",
                        undefined,
                        config.HTTP_ACCEPTED
                    )
                );
            }
        }
    } catch (err) {
        logger.error("err", err);
        next(new GeneralError("user login failed"));
    }
};

exports.viewProfile = async (req, res, next) => {
    const email = req.user.email;
    try {
        const user = await User.findOne({ where: { email } });
        if (user) {
            res.send(user);
        } else {
            await next(
                new GeneralError(
                    "view profile is not showing!",
                    undefined,
                    config.HTTP_ACCEPTED
                )
            );
        }
    } catch (err) {
        logger.error("err", err);
        next(new GeneralError("failed to show view profile!"));
    }
}

exports.updateProfile = async (req, res, next) => {
    try {
        const email = req.user.email;
        const findUser = await User.findOne({ where: { email: email } });
        if (findUser) {
            const updateUser = {
                name: req.body.name,
                email: req.body.email,
                gender: req.body.gender,
            }
            if (req.file) {
                updateUser.profileImage = req.file.filename
            }
            const updatedUser = await User.update(updateUser, {
                where: { email: email }
            });
            if (updatedUser) {
                await next(
                    new GeneralResponse(
                        "User Updated...",
                        undefined,
                        config.HTTP_CREATED
                    )
                );
            }
        } else {
            await next(
                new GeneralError(
                    "User not found!",
                    undefined,
                    config.HTTP_ACCEPTED
                )
            );
        }
    }
    catch (err) {
        logger.error("err", err);
        next(new GeneralError("failed to update user details!"));
    }
};

exports.resetPassword = async (req, res, next) => {
    try {
        const email = req.user.email;
        const user = await User.findOne({ where: { email } });
        if (user) {
            const compare = await bcrypt.compare(req.body.current_password, user.password);
            if (compare) {
                const updatePassword = { password: await bcrypt.hash(req.body.password, saltRounds) };
                const updateUser = await User.update(updatePassword, { where: { email: email } });
                if (updateUser) {
                    await next(
                        new GeneralResponse(
                            "Your Password has been Reset...",
                            undefined,
                            config.HTTP_CREATED
                        )
                    );
                } else {
                    await next(
                        new GeneralError(
                            "Your Password has not been Reset!",
                            undefined,
                            config.HTTP_ACCEPTED
                        )
                    );
                }
            } else {
                await next(
                    new GeneralError(
                        "Current Password is incorrect!",
                        undefined,
                        config.HTTP_ACCEPTED
                    )
                );
            }
        }
    }
    catch (err) {
        logger.error("err", err);
        next(new GeneralError("failed to reset password!"));
    }
};