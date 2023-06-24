const form = document.querySelector("form");
const pwd1 = document.getElementById("pwd");
const pwd2 = document.getElementById("confirm-pwd");
const pwd1_error = document.querySelector("#pwd + .error-msg");
const pwd2_error = document.querySelector("#confirm-pwd + .error-msg");

pwd1.addEventListener("input", e => {
    /*if (!pwd1.validity.patternMismatch) {
        pwd1.setCustomValidity("");
    }*/
    if (pwd1.validity.valid) {
        pwd1_error.textContent = "";
        pwd1.className = "";
    }
    else {
        showError();
    }
});

[pwd1, pwd2].forEach(pwd => pwd.addEventListener("input", e => {
    if (pwd1.value === pwd2.value) {
        pwd2_error.textContent = "";
        pwd2.className = "";
    }
    else {
        showError();
    }
}));

form.addEventListener("submit", e => {
    if (pwd1.value !== pwd2.value) {
        showError();
        e.preventDefault();
    }
});

function showError() {
    if (pwd1.validity.patternMismatch) {
        //pwd1.setCustomValidity("Include at least one digit, lowercase, uppercase, and special characters");
        pwd1_error.textContent = "Include at least one digit, lowercase, uppercase, and special characters";
    } else if (pwd1.validity.tooShort) {
        pwd1_error.textContent = "Password must be at least 8 characters long";
    } else if (pwd1.validity.tooLong) {
        pwd1_error.textContent = "Password must be at most 32 characters long";
    } else if (pwd1.value !== pwd2.value) {
        pwd2_error.textContent = "Passwords do not match";
        pwd2.className = "error";
        return
    }
    pwd1.className = "error";
}