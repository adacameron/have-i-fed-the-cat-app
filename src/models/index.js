const Sequelize = require('sequelize');
const CatModel = require('./cats');

// code connects to our db
// it returns Models we can use to interact with our tables

// declare a function called setUpDatabase
const setUpDatabase = () => {
    // declare a variable called connection
    // assign connection as a new instance of Sequelize()
    const connection = new Sequelize("have_i_fed_the_cat_app", "root", "supersecret", {
        host: "localhost",
        port: 3307,
        dialect: "mysql"
    })

    const Cat = CatModel(connection, Sequelize)

    connection.sync({ alter: true });

    return {
        Cat
    };
}
// Invoke setUpDatabase() function and export its return value
module.exports = setUpDatabase();