// global variables
let result=0;
let questionPara = document.querySelector(".question");
let answerContainer = document.querySelector(".answers");
let pageNum = document.querySelector(".page");
let radioBtn = document.querySelectorAll(".answer input");
let questionArr = [];
let questionIndex = 0;
let markQuestion = document.querySelector(".container-right")


// fetch data from json file
async function getData() {
  const data = await fetch("../DB/db.json");
  const quizData = await data.json();
  // Next btn behaviour
  document.querySelector(".next").addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 13);
    let randomQuestion = quizData[randomNumber].question;
    let correctIndex = quizData[randomNumber].correctIndex;
    let generateQuestion = new Question(
      randomQuestion,
      correctIndex,
      new Answers(quizData[randomNumber].answers)
    );
    questionArr.push(generateQuestion);
    // display data
    questionPara.textContent = generateQuestion.question;
    answerContainer.innerHTML = "";
    generateQuestion.answers.answerArr.forEach((element, i) => {
      answerContainer.innerHTML += ` <div class="answer"> <input type="radio" name="answer" id="answer${i}">
            <label for="answer${i}">${element}</label></div>`;
    });
    generateQuestion.correctAnswer(getIndex(radioBtn));
    localStorage.setItem("result",result);
    pageNum.textContent = parseInt(pageNum.textContent) + 1;

  });
  document.querySelector(".submit").addEventListener("click",()=>{
    window.location.href = "score.html";
})
document.querySelector(".mark").addEventListener("click",markQues)
}

// get checked radio index
function getIndex(radio) {
    for (let i = 0; i < radio.length; i++) if (radio[i].checked) return i;
  }

// questions constructor
function Question(_question, _correctIndex, _answers) {
  (this.question = _question),
    (this.correctIndex = _correctIndex),
    (this.answers = _answers),
    (this.mark = false),
  this.correctAnswer = function (choice) {
    if (choice === this.correctIndex) {
      result += 10;
    }
  };
}

// answers constructor
function Answers(answerArr) {
  this.answerArr = answerArr;
}
// mark question 
function markQues() {
    questionArr[questionIndex].mark = !questionArr[questionIndex].mark;
    console.log(questionArr[questionIndex])
    markQuestion.innerHTML = ""
    questionArr.forEach(ele => {
        if (ele.mark)
            markQuestion.innerHTML += `<p>${ ele.question} </p>`


    })
}
getData();


// timer
setTimeout(function () {
  window.location.href = "timeUp.html";
}, 300000);


