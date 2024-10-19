// script.js

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const inputField = document.querySelector(".input-field").value;

    if (inputField) {
        alert("Form submitted with value: " + inputField);
        // Here, you can add further logic for handling the submitted value
    } else {
        alert("Please fill in the required field.");
    }
});
