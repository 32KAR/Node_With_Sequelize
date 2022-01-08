
const passportJwt = require('passport-jwt');
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
const db = require('../models/sequelizeConnection');
const User = db.userModel;

module.exports = (passport) => {
    passport.use(
        new StrategyJwt({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.PRIVATEKEY
        },
            async (jwtPayload, cb) => {
                await User.findOne({ where: { email: jwtPayload.email } }).then((user) => {
                    return cb(null, user);
                }).catch((error) => {
                    return cb(error);
                })
            })
    );
}


