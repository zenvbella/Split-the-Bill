// Global variables
var sum = 0;
var listingArray = [];
var itemArray = [];
var priceArray = [];
var itemList = document.getElementById("itemList");
var total = document.getElementById("total");

// Remove last item entered in array when button is clicked and update item list and total
document.getElementById("removeLastItem").addEventListener("click", function (event) {
    var item = itemArray.slice(-1);
    var price = priceArray.slice(-1);
    listingArray.splice(-1);
    itemArray.splice(-1);
    priceArray.splice(-1);
    updateList();
    subtractFromSum(price);
});

// ITEMS FORM SUBMISSION: Update items & price listings with user input
document.getElementById("itemForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Local variables
    var textInput = document.getElementById("textInput");
    var priceInput = document.getElementById("priceInput");
    var item = document.getElementById("textInput").value;
    var price = document.getElementById("priceInput").value;

    // Add item to array, calculate new total, and update listing
    addToArray(item, price);
    updateList();
    addToSum(price);

    // Clear text input field 
    textInput.value = "";
    priceInput.value = "";
});

// FUNCTION: Calculate sum and update total
function addToSum(price) {
    sum = Number(sum) + Number(price);
    total.textContent = `$${sum}`;
}

// FUNCTION: Calculate sum and update total
function subtractFromSum(price) {
    sum = Number(sum) - Number(price);
    total.textContent = `$${sum}`;
}

// FUNCTION: Add input to arrays
function addToArray(item, price) {
    var listing = `${item} $${price}`;
    listingArray.push(listing);
    itemArray.push(item);
    priceArray.push(price);
    console.log(itemArray);
    console.log(priceArray);
}

// FUNCTION: Loop through array and update list with contents
function updateList() {
    itemList.textContent = "";
    for (var i of listingArray) {
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

