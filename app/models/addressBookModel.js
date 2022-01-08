module.exports = (sequelize, Sequelize) => {
    return sequelize.define("address-book", {
        title: {
            type: Sequelize.STRING
        },
        addressLine1: {
            type: Sequelize.STRING
        },
        addressLine2: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING,
            enum: ['India', 'US', 'UK', 'China', 'Scotland', 'Pakistan']
        },
        state: {
            type: Sequelize.STRING,
            enum: ['Gujarat', 'Maharashtra', 'kerala', 'Rajasthan', 'Punjab', 'Goa']
        },
        city: {
            type: Sequelize.STRING,
            enum: ['Rajkot', 'Indore', 'Dubai', 'Mumbai', 'Surat', 'Amritsar']
        },
        pinCode: {
            type: Sequelize.INTEGER
        }
    }, { freezeTableName: true, timestamps: false });
};