// Global variables
var subtotal = 0;
var total = 0;
var tax = 0;
var tip = 0;
var itemArray = [];
var priceArray = [];
var btnArray = [];
var itemList = document.getElementById("itemList");
var btnList = document.getElementById("btnList");
var subtotalDisplay = document.getElementById("subtotal");
var taxDisplay = document.getElementById("tax");
var tipDisplay = document.getElementById("tip");
var totalDisplay = document.getElementById("total");


// ITEMS FORM SUBMISSION: Update items & price listings with user input
document.getElementById("itemForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Local variables
    var textInput = document.getElementById("textInput");
    var priceInput = document.getElementById("priceInput");
    var item = document.getElementById("textInput").value;
    var price = document.getElementById("priceInput").value;

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

// TAX AND TIP FORM SUBMISSION
document.getElementById("taxTipForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Local variables
    var taxInput = document.getElementById("taxInput");
    var tipInput = document.getElementById("tipInput");
    tax = Number(document.getElementById("taxInput").value);
    tip = Number(document.getElementById("tipInput").value);

    taxDisplay.textContent = `$${tax.toFixed(2)}`;
    tipDisplay.textContent = `$${tip.toFixed(2)}`;

    getTotal();

    // Clear text input field 
    taxInput.value = "";
    tipInput.value = "";
});

// FUNCTION: Add input to arrays
function addToArray(item, price, btn) {
    btn.id = btnArray.length;
    itemArray.push(item);
    priceArray.push(price);
    btnArray.push(btn);
}

// FUNCTION: Add price of new item to subtotal
function addToSum(price) {
    subtotal = Number(subtotal) + Number(price);
    subtotalDisplay.textContent = `$${subtotal.toFixed(2)}`;
    getTotal();
}

// FUNCTION: Subtract price of removed item
function subtractFromSum(price) {
    subtotal = (Number(subtotal) - Number(price))
    subtotalDisplay.textContent = `$${subtotal.toFixed(2)}`;
    getTotal();
}

// FUNCTION: Sum together all components to determine total
function getTotal() {
    total = 0;
    total = tax + tip + subtotal
    totalDisplay.textContent = `$${total.toFixed(2)}`;
}

// FUNCTION: Loop through array and update list with contents, adding a delete button for each listing
function updateList() {
    itemList.textContent = "";
    for (let i = 0; i < itemArray.length; i++) {
        var li = document.createElement("li");
        var listing = `${itemArray[i]} $${priceArray[i]} `;
        li.appendChild(document.createTextNode(listing));
        var tempButton = btnArray[i];
        li.appendChild(tempButton);
        itemList.appendChild(li);
    }
}

function removeItem(btnID) {
    var buttonID = Number(btnID);
    var price = priceArray[buttonID];
    subtractFromSum(price);
    itemArray.splice(buttonID, 1);
    priceArray.splice(buttonID, 1)
    updateList();
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