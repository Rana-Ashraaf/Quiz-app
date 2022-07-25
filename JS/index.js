// Match passwords
let password = document.getElementById("pw"),
  passwordValidate = document.getElementById("repw"),
  fname = document.getElementById("fname"),
  lname = document.getElementById("lname"),
  email = document.getElementById("email");

document.getElementById("sign-btn").addEventListener("click", () => {
  if (password.value != passwordValidate.value) {
    passwordValidate.setCustomValidity("Passwords don't match!");
  } else {
    passwordValidate.setCustomValidity("");
  }

  let userData = {
    email:email.value,
    password:password.value,
    fname:fname.value,
    lname:lname.value
}
localStorage.setItem("user",JSON.stringify(userData));

});




