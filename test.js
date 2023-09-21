var foodItems = [
    "Pizza",
    "Burger",
    "Spaghetti",
    "Salad",
    "Sushi",
    "Tacos",
    "Ice Cream",
    "Steak",
    "Chicken Curry",
    "Pasta"
];

var pricesUSD = [
    12.99,
    6.49,
    9.99,
    7.25,
    15.50,
    8.99,
    4.25,
    24.99,
    11.75,
    10.50
];

// Prefill item list when button is clicked for testing
document.getElementById("prefill").addEventListener("click", function (event) {

    // Randomly select an input from the predefined array
    var randomIndex = Math.floor(Math.random() * 10);

    // Local variables
    var item = foodItems[randomIndex];
    var price = pricesUSD[randomIndex];

    var btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.addEventListener("click", function () {
        // Remove the parent list item when the button is clicked
        removeItem(btn.id);
    });


    // Add item to array, calculate new subtotal, and update listing
    addToArray(item, price, btn);
    updateList();
    addToSum(price);

    // Clear text input field 
    textInput.value = "";
    priceInput.value = "";
});
