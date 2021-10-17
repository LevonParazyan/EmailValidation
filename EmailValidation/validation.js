const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const invalidUser = document.getElementById("invalidUser");
const invalidEmail = document.getElementById("invalidEmail");
const invalidPass = document.getElementById("invalidPassword");

function onSubmit() {
    let firstUserSym = username.value[0];
    if(password.value.length < 6 || password.value.length > 32) {
        invalidPass.style.display = "block";
    }
    if(email.value[3] != "@" || email.value[9] != ".") {
        invalidEmail.style.display = "block";
    }
    if(username.length < 3 || firstUserSym != firstUserSym.toUpperCase()) {
        invalidUser.style.display = "block";
    }
    console.log(email.value, username.value, password.value.length)
}