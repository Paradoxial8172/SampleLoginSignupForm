function validatePassword(password) {
    return password.length >= 10 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[\d]/.test(password) && /[^A-Za-z0-9]/.test(password);
}
function createAccount() {
    let passwordField = document.getElementById("password");
    let repeatPasswordField = document.getElementById("repeatPassword");
    let errorText = document.getElementById("errorMsg");

    let password = passwordField.value.trim();
    let confPassword = repeatPasswordField.value.trim();
    let emptyFields = false;
    for (let input of document.getElementsByClassName("inputs")) {
        if (input.value.trim() === "") {
            input.style.border = "1px solid rgb(255, 0, 0)";
            input.style.boxShadow = "0px 0px 10px rgba(255, 0, 0, 0.2)";
            emptyFields = true;
        }
        else {
            input.style.border = "1px solid transparent";
            input.style.boxShadow = "none";
        }
    }
    if (emptyFields) return;
    if (!validatePassword(password)) {
        errorText.textContent = "Password must be at least 10 characters long with one upper and lower case letter, a number, and a special symbol (i.e. $, %, &, #, @, !)";
        errorText.style.color = "red";
    }
    else if (password !== confPassword) {
        errorText.textContent = "Passwords do not match.";
        errorText.style.color = "red";
    }
    else {
        // Represents the final step in account creation.
        alert("Success! Account has been created.");
    }
}

function login() {
    let emptyFields = false;

    for (let input of document.getElementsByClassName("inputs")) {
        if (input.value.trim() === "") {
            input.style.border = "1px solid rgb(255, 0, 0)";
            input.style.boxShadow = "0px 0px 10px rgba(255, 0, 0, 0.2)";
            emptyFields = true;
        }
        else {
            input.style.border = "1px solid transparent";
            input.style.boxShadow = "none";
        }
    }

    if (emptyFields) return;
    // Represents the final step in logging in.
    alert("Login successful!");
}