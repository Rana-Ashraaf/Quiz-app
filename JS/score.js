let score = (localStorage.getItem("result"));
let userData = JSON.parse(localStorage.getItem("user"));
document.querySelector(".container p").innerHTML= `Hey ${userData.fname} ${userData.lname}, your score is ${score}`