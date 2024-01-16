



function multiplier(number1, number2, callback) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        callback('Error: Numbers only', NULL);
    } else {
        callback(NULL, number1 * number2);
    }
}

multiplier(2, 4, function (err, result) {
    if (err) {
        return(err);
    } 
    console.log(result);
});