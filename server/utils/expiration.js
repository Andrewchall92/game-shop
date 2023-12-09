const mongoose = require('mongoose');

module.exports = (timestamp) => {

    let currentDate = new Date();


    console.log(currentDate);

    // Set the expiration date (in this example, adding 7 days to the current date)
    let expirationDate = new Date(currentDate);
    expirationDate.setDate(currentDate.getDate() + 7);

    return expirationDate;
};