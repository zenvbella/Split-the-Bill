
document.addEventListener("DOMContentLoaded", function () {
    var numberInput = document.getElementById("numberInput");
    var calculateButton = document.getElementById("calculateButton");
    var resultSpan = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        // Get the user-entered numbers as a string
        var numbersString = numberInput.value;

        // Split the string by comma and trim spaces
        var numbersArray = numbersString.split(",").map(function (num) {
            return parseFloat(num.trim());
        });

        // Calculate the sum
        var totalSum = numbersArray.reduce(function (sum, num) {
            return sum + (isNaN(num) ? 0 : num); // Check for NaN and treat it as 0
        }, 0);

        // Display the result
        resultSpan.textContent = totalSum;
    });
});