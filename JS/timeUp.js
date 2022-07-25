// display msg when timer ends
let userData = JSON.parse(localStorage.getItem("user"));
document.querySelector(".container p").innerHTML= `Oops! sorry ${userData.fname} ${userData.lname}, time's up.`