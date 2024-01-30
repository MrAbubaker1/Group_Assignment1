document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.getElementById("dropdown-button");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdownButton.addEventListener("click", function () {
        dropdownMenu.classList.toggle("hidden");
        console.log("Dropdown toggled!"); // Check if this logs in the console when you click the button
    });
});
