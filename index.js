// Global variables
var sum = 0;
var itemArray = [];
var priceArray = [];
var itemList = document.getElementById("itemList");
var total = document.getElementById("total");

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

// FUNCTION: Add price of new item to total
function addToSum(price) {
    sum = Number(sum) + Number(price);
    total.textContent = `$${sum.toFixed(2)}`;
}

// FUNCTION: Subtract price of removed item
function subtractFromSum(price) {
    sum = (Number(sum) - Number(price))
    total.textContent = `$${sum.toFixed(2)}`;
}

// FUNCTION: Add input to arrays
function addToArray(item, price) {
    var listing = `${item} $${price}`;
    itemArray.push(item);
    priceArray.push(price);
}

// FUNCTION: Loop through array and update list with contents, adding a delete button for each listing
function updateList() {
    itemList.textContent = "";
    for (let i = 0; i < itemArray.length; i++) {
        var li = document.createElement("li");
        var listing = `${itemArray[i]} $${priceArray[i]}  `;
        li.appendChild(document.createTextNode(listing));
        var button = document.createElement("button");
        button.textContent = "Delete";
        button.id = `${i}`;
        button.addEventListener("click", function () {
            // Remove the parent list item when the button is clicked
            removeItem(button.id);
            this.parentNode.remove();
        });
        li.appendChild(button);
        itemList.appendChild(li); //add bullet to list
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