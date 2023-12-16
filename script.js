document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = {
        capitalLetters: document.getElementById("capital-letters"),
        smallLetters: document.getElementById("small-letters"),
        numbers: document.getElementById("numbers"),
        specialChars: document.getElementById("special-chars"),
    };

    const passwordLengthInput = document.getElementById("password-length");
    const lengthDisplay = document.getElementById("length-display");
    const generateButton = document.getElementById("generate");
    const passwordField = document.getElementById("password");

    passwordLengthInput.addEventListener("input", function () {
        lengthDisplay.textContent = passwordLengthInput.value;
    });

    generateButton.addEventListener("click", function () {
        const length = parseInt(passwordLengthInput.value);
        const charset = getCharset();
        passwordField.value = generatePassword(length, charset);
    });

    function getCharset() {
        let charset = "";

        if (checkboxes.capitalLetters.checked) {
            charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (checkboxes.smallLetters.checked) {
            charset += "abcdefghijklmnopqrstuvwxyz";
        }
        if (checkboxes.numbers.checked) {
            charset += "0123456789";
        }
        if (checkboxes.specialChars.checked) {
            charset += "!@#$%^&*()_+-=[]{}|;:'\",.<>?";
        }

        return charset;
    }

    function generatePassword(length, charset) {
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }
});