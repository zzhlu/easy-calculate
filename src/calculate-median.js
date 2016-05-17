function calculate_median(arr) {
    var evenNumbers = [];

    arr.forEach(function (number) {
        if(number % 2 === 0) {
            evenNumbers.push(number);
        }
    });

    return (evenNumbers[0] + evenNumbers[evenNumbers.length-1]) / 2;
}

module.exports = calculate_median;