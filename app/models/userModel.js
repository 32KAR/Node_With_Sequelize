module.exports = (sequelize, Sequelize) => {
    return sequelize.define("registration", {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        password: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING,
            enum: ['male', 'female', 'other']
        },
        profileImage: {
            type: Sequelize.STRING
        }
    }, { freezeTableName: true, timestamps: false });
};