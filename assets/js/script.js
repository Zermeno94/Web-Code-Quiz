// Query selectors to keep as a variable 
const startBtn = document.querySelector("#start-btn")
const nextBtn = document.querySelector("#next-btn")
const endBtn = document.querySelector("#end-btn")
const quizContainer = document.querySelector("#quiz-container");
const questionEl = document.querySelector("#question")
const answersEl = document.querySelector("#answers");
const timeEl = document.querySelector("#time");

//event listener variables
startBtn.addEventListener('click', startGame)
nextBtn.addEventListener('click', function() {
    questionIndex++;
    nextQuestion();
    winStatus();
})
endBtn.addEventListener('click', winGame)
    //Variables to store arrays and items to be used for questions
var theWon = false;
var timerCount;
var timer;
let currentQuestion = {};
let theAnswer = true;
let questionCounter;
let questionIndex = 0;
var score = 0;
let questionLeft = [];


// question que (4 questions)
const questionQue = [{
    question: "What does DOM stand for?",
    answers: [
        { text: "Document Option Metrics", correct: true },
        { text: "DOM", correct: false },
        { text: "Document Open More", correct: false },
        { text: "Direct Off Machine", correct: false }
    ]
}, {
    question: "Question 2",
    answers: [
        { text: "\"Red-Haired\" Shanks", correct: false },
        { text: "Monkey D. Dragon", correct: false },
        { text: "Portgas D. Ace", correct: false },
        { text: "Gol D. Roger", correct: true }
    ]
}, {
    question: "The show One Piece is based loosely off of what epic?",
    answers: [
        { text: "Illiad", correct: false },
        { text: "Journey to the West", correct: true },
        { text: "The Odyssey", correct: false },
        { text: "Tales from the Crypt", correct: false }
    ]
}, {
    question: "What is the name of Luffy's crew?",
    answers: [
        { text: "Strawhats", correct: true },
        { text: "Kid", correct: false },
        { text: "Barto Club", correct: false },
        { text: "Heart", correct: false }
    ]
}]

function init() {
    //clear timer and reset page to show default start screen
    //hide time
}

function startGame() {
    //click start to start game
    console.log("start button clicked")
        //set the timer to count down
    theWon = false;
    timerCount = 30;
    questionIndex = 0;
    startBtn.classList.add('hide');
    quizContainer.classList.remove('hide');
    nextQuestion();
    startCountdown();


}

function winGame() {
    //print you won game and add put saving the score here?
    //stop time
    score = timerCount;
    window.location.href = "score.html";

}

function loseGame() {
    //print you lost
    //if (timeLeft===0){
    // you lose
    // }
}

function startCountdown() {
    // Sets timer
    timer = setInterval(function() {
        timerCount--;
        timeEl.textContent = "Time: " + timerCount + "s";
        if (timerCount >= 0) {
            // Tests if win condition is met
            if (theWon && timerCount > 0) {
                // Clears interval and stops timer
                clearInterval(timer);
                winGame();
            }
        }
        // Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}

function winStatus() {
    if (questionIndex === questionIndex.length) {
        theWon = true;
        winGame();
    }
}

function nextQuestion() {
    resetState();
    renderQuestion(questionQue[questionIndex]);

}

function renderQuestion(question) {
    //display question and answers
    //display the question
    //randomize the question, i think this would work
    // var questionDisplay = Math.floor(Math.random() * questionLeft.length);
    // currentQuestion= questionLeft[questionDisplay];
    questionEl.innerText = question.question;
    question.answers.forEach(function(answer) {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answersEl.appendChild(button)
    })

}

function resetState() {
    clearStatusClass(document.body)
    nextBtn.classList.add('hide')
    while (answersEl.firstChild) {
        answersEl.removeChild(answersEl.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    if (correct) {
        timerCount = timerCount + 15;
    } else {
        timerCount = timerCount - 15;
    }
    setStatusClass(document.body, correct)
    Array.from(answersEl.children).forEach(function(button) {
        setStatusClass(button, button.dataset.correct)
    })
    if (questionQue.length > questionIndex + 1) {
        nextBtn.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');

    } else {
        element.classList.add('wrong');

    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//need an event listener to listen for the correct answer button being pressed



//const question = document.querySelector('#question');
//const choices = Array.querySelector('.choice-text');
//const progressText = document.querySelector('#progressText');
//const scoreTest = document.querySelector('#score');
//const progressBarFull = document.querySelector('#progressBarFull');

//Redeclaring vaiables
//let currentQuestions = {}
//let acceptingAnswers = true
//let score = 0 
//let questionCounter = 0
//let availableQuestion = []

//Questions will be entered here
//let questions = [
   // {
       // question: 'What is DOM?',
        //choice1: 'none',
       // choice2: 'none',
        //choice3: 'answer',
        //choice4: 'none',
        //answer: answer,
    //},
    //{
        //question: 'What are the types of scopes in JS?',
        //choice1: 'answer',
        //choice2: 'none',
        //choice3: 'none',
       // choice4: 'none',
        //answer: answer,
    //},
   // {
        //question: 'What does "this" keyword mean?',
        //choice1: 'none',
        //choice2: 'none',
        //choice3: 'none',
        //choice4: 'answer',
        //answer: answer,
    //},
    //{
        //question: 'What are the data types in JS?',
        //choice1: 'none',
        //choice2: 'answer',
        //choice3: 'none',
        //choice4: 'none',
        //answer: answer,
    //}
//]
//This is the point system and amount of questions
//const SCORE_POINTS = 100
//const MAX_QUESTIONS = 4

//startGame = () => {
    //questionCounter = 0
    //score = 0
    //availableQuestions = [...questions]
    //getNewQuestions ()
//}

// Inside the questions 
//getNewQuestions = () => {
    //if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        //localStorage.setItem ('mostRecentScore',score)

        //return window.location.assign('/end.html')
    //}

    //questionCounter++
    //progressText.innerText = `question ${questionCounter} of ${MAX_QUESTIONS}`
    //progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    //const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    //currentQuestions = availableQuestions[questionIndex]
    //question.innerText = currentQuestions.question

    //choices.forEach(choice=> {
        //const number = choice.dataset ['number']
        //choice.innerText = currentQuestion['choice' + number]
    //})

    //availableQuestions.splice(questionIndex,1)

    //acceptingAnswers = true
//}

// Outside of questions

//choices.forEach(choice => {
    //choice.addEventListner ('click', d =>  {
        //if(!acceptingAnswers) return

        //acceptingAnswers = false
        //const selectedChoice = e.target
        //const selectedAnswer = selectedChoice.dataset['number']

        //let classToApply = selectedAnswer ==currentQuestion.answer ? 'correct' :
        //'incorrect'

        //if(classToApply === 'correct') {
            //incrementScore(SCORE_POINTS)
        //}

        //selectedChoice.parentElement.classlist.addEventListner(classToApply)

       // setTimeout(() => {
           // selectedChoice.parentElement.classlist.remove//(classToApply)
            //getNewQuestions()

        //}, 1000)
    //})
//})

//incrementScore = num => {
    //score +=num
    //scoreText.innerText = score
//}

//startGame()
