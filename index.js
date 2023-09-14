// Reading user's form input and displaying in result div
document.getElementById("textForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the entered word from the input field
    var word = document.getElementById("textInput").value;

    // Display the entered word
    document.getElementById("displayWord").textContent = word;

    var orderedList = document.getElementById("orderedlist");

    var li = document.createElement("li");
    li.setAttribute('id', word);
    li.appendChild(document.createTextNode(word));
    orderedList.appendChild(li);
    console.log(orderedList);

});
