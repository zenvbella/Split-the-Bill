var sum = 0;

// Enter Item Form
document.getElementById("itemForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    var textInput = document.getElementById("textInput");
    var priceInput = document.getElementById("priceInput");
    var itemList = document.getElementById("itemList");
    var total = document.getElementById("total");

    // Get the entered word from the input field
    var word = document.getElementById("textInput").value;
    var price = document.getElementById("priceInput").value;
    var listing = `${word} $${price}`;

    // Creating new li element, setting value to user input, and appending to ordered list
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(listing));
    itemList.appendChild(li);

    // Clear text input field
    textInput.value = "";
    priceInput.value = "";

    // Call calculateSum and display total
    calculateSum(price);
    total.textContent = `$${sum}`;

});


function calculateSum(price) {
    sum = Number(sum) + Number(price);
    console.log(sum);
}

// Enter Name Form
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

