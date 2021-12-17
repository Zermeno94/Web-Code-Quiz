var scoresInput = document.querySelector("#scores-text");
var scoresForm = document.querySelector("#scores-form");
var scoresList = document.querySelector("#scores-list");
var scoresCountSpan = document.querySelector("#scores-count");

var scores = [];


function renderscores() {

    scoresList.innerHTML = "";
    scoresCountSpan.textContent = scores.length;

    for (var i = 0; i < scores.length; i++) {
        var scores = scores[i];

        var li = document.createElement("li");
        li.textContent = scores;
        li.setAttribute("data-index", i);



        li.appendChild(button);
        scoresList.appendChild(li);
    }
}


function init() {
    
    var storedscores = JSON.parse(localStorage.getItem("scores"));
  
    if (storedscores !== null) {
        scores = storedscores;
    }
   
    renderscores();
}

function storescores() {

    localStorage.setItem("scores", JSON.stringify(scores));
}

scoresForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var scoresText = scoresInput.value.trim();
  
    if (scoresText === "") {
        return;
    }
    
    scores.push(scoresText);
    scoresInput.value = "";

  
    storescores();
    renderscores();
});


scoresList.addEventListener("click", function(event) {
    var element = event.target;
  
    if (element.matches("button") === true) {
        var index = element.parentElement.getAttribute("data-index");
        scores.splice(index, 1);
     
        storescores();
        renderscores();
    }
});

init();