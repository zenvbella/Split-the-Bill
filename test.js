// Prefill item list when button is clicked for testing
document.getElementById("prefill").addEventListener("click", function (event) {
    console.log("Button clicked");
    addToArray("Bronx Food", 10);
    updateList();
    addToSum(10);
    addToArray("Tuna", 20);
    updateList();
    addToSum(20);
    addToArray("Bread", 30);
    updateList();
    addToSum(30);
}); 