
module.exports = (timestamp) => {

    let currentDate = new Date()+'';
 
    const addSeven = parseInt(currentDate.split(' ')[2])+7;

    if(addSeven > 30){
        addSeven = addSeven - 30;
    }

    console.log(addSeven)
    // Set the expiration date (in this example, adding 7 days to the current date)
    let stringDate = new Date(currentDate).toString();
    stringDate.setDate(addSeven);

    let expirationDate = stringDate.toString().slice(0, 15).trim();

    console.log(expirationDate);
    return expirationDate;
};


