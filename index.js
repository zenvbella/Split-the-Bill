// Global variables
var sum = 0;
var itemArray = [];
var itemList = document.getElementById("itemList");

// Remove last item entered in array when button is clicked and update item list
document.getElementById("removeLastItem").addEventListener("click", function (event) {
    itemArray.splice(-1);
    updateList();
});

// ITEMS FORM SUBMISSION: Update items & price listings with user input
document.getElementById("itemForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Local variables
    var textInput = document.getElementById("textInput");
    var priceInput = document.getElementById("priceInput");
    var total = document.getElementById("total");
    var word = document.getElementById("textInput").value;
    var price = document.getElementById("priceInput").value;
    var listing = `${word} $${price}`;

    // Add item to array, calculate new total, and update listing
    addToArray(listing);
    updateList();
    calculateSum(price);
    total.textContent = `$${sum}`;

    // Clear text input field 
    textInput.value = "";
    priceInput.value = "";
});

// FUNCTION: Calculate sum 
function calculateSum(price) {
    sum = Number(sum) + Number(price);
}

// FUNCTION: Add item to array
function addToArray(item) {
    itemArray.push(item);
}

// FUNCTION: Loop through array and update list with contents
function updateList() {
    itemList.textContent = "";
    for (var i of itemArray) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(i));
        itemList.appendChild(li);
    }
}

// NAMES FORM SUBMISSION: Update names list with new input
document.getElementById("nameForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    var textInput = document.getElementById("nameInput");
    var itemList = document.getElementById("nameList");

    // Get the entered word from the input field
    var name = document.getElementById("nameInput").value;
    var listing = `${name}`;

    // Creating new li element, setting value to user input, and appending to ordered list
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(listing));
    nameList.appendChild(li);

    // Clear text input field
    textInput.value = "";
});

