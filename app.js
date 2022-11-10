let password = document.getElementById("password")
let confirmpassword = document.getElementById("confirmpassword")

function validatePassword() {
    confirmpassword.setCustomValidity( password.value != confirmpassword.value ? "Passwords don't match!" : "" );
}

password.onchange = validatePassword;
confirmpassword.onkeyup = validatePassword;