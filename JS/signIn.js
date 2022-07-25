// validate user data
let userData = JSON.parse(localStorage.getItem("user"));
let email = document.getElementById("email");
let password = document.getElementById("pw");
let form = document.querySelector("form");

document.getElementById("sign-btn").addEventListener("click", () => {
  if (email.value != userData.email) {
    email.setCustomValidity("Wrong email");
  } else {
    email.setCustomValidity("");
  }

  if (password.value != userData.password) {
    password.setCustomValidity("Wrong password");
  } else {
    password.setCustomValidity("");
  }
});

// prevent user from going back
window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href);
};


