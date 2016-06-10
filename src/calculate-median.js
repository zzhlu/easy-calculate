function calculate_median(arr) {
    var evenNumbers = [];
    var sum = 0;

    arr.forEach(function (number) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    });
    evenNumbers.forEach(function (evenNumber) {
        sum += evenNumber;
    });

    return sum / evenNumbers.length;
}

module.exports = calculate_median;