const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define('diet', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        description: {
            type: DataTypes.TEXT
        }
    });
};
