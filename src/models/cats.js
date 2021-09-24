const Sequelize = require('sequelize');

// export an arrow function
// create a model for a cat table

module.exports = (sequelize, DataTypes) => {

    // define schema
    const schema = {
        name: DataTypes.STRING,
        breed: DataTypes.STRING,
        markings: DataTypes.STRING,
        lastFed: DataTypes.DATE
    };

    return sequelize.define('Cat', schema);
};


