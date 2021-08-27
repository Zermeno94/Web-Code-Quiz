const highScoreList = document.querySelector('#highScoreList')
const highsScores = JSON.parse(localStorage.getItem('highScores')) || []

highsScoresList.innerHTML= 
highsScores.map(score => {
    return'<li class="high-score">${score.name} - ${score.score}</li>'
}).join('')