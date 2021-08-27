// Declarations that are being targeted
const question = document.querySelector('#question');
const choices = Array.querySelector('.choice-text');
const progressText = document.querySelector('#progressText');
const scoreTest = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

//Redeclaring vaiables
let currentQuestions = {}
let acceptingAnswers = true
let score = 0 
let questionCounter = 0
let availableQuestion = []

//Questions will be entered here
let questions = [
    {
        question: 'What is DOM?',
        choice1: 'none',
        choice2: 'none',
        choice3: 'answer',
        choice4: 'none',
        answer: answer,
    },
    {
        question: 'What are the types of scopes in JS?',
        choice1: 'answer',
        choice2: 'none',
        choice3: 'none',
        choice4: 'none',
        answer: answer,
    },
    {
        question: 'What does "this" keyword mean?',
        choice1: 'none',
        choice2: 'none',
        choice3: 'none',
        choice4: 'answer',
        answer: answer,
    },
    {
        question: 'What are the data types in JS?',
        choice1: 'none',
        choice2: 'answer',
        choice3: 'none',
        choice4: 'none',
        answer: answer,
    }
]
//This is the point system and amount of questions
const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestions ()
}

// Inside the questions 
getNewQuestions = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem ('mostRecentScore',score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestions = availableQuestions[questionIndex]
    question.innerText = currentQuestions.question

    choices.forEach(choice=> {
        const number = choice.dataset ['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex,1)

    acceptingAnswers = true
}

// Outside of questions

choices.forEach(choice => {
    choice.addEventListner ('click', d =>  {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer ==currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classlist.addEventListner(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classlist.remove(classToApply)
            getNewQuestions()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()