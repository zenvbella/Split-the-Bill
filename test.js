// Prefill item list when button is clicked for testing
document.getElementById("prefill").addEventListener("click", function (event) {
    var btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.addEventListener("click", function () {
        // Remove the parent list item when the button is clicked
        console.log("Button created");
        // removeItem(button.id);
        //this.parentNode.remove();
    });

    addToArray("Bronx Food", 10, btn);
    updateList();
    addToSum(10);
});
