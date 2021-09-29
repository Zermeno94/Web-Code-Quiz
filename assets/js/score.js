var scoresInput = document.querySelector("#scores-text");
var scoresForm = document.querySelector("#scores-form");
var scoresList = document.querySelector("#scores-list");
var scoresCountSpan = document.querySelector("#scores-count");

var scores = [];

// scores: What is the purpose of this function?
function renderscores() {
    // scores: Describe the functionality of the following two lines of code.
    scoresList.innerHTML = "";
    scoresCountSpan.textContent = scores.length;

    // scores: Describe the functionality of the following `for` loop.
    for (var i = 0; i < scores.length; i++) {
        var scores = scores[i];

        var li = document.createElement("li");
        li.textContent = scores;
        li.setAttribute("data-index", i);



        li.appendChild(button);
        scoresList.appendChild(li);
    }
}

// scores: What is the purpose of the following function?
function init() {
    // scores: What is the purpose of the following line of code?
    var storedscores = JSON.parse(localStorage.getItem("scores"));
    // scores: Describe the functionality of the following `if` statement.
    if (storedscores !== null) {
        scores = storedscores;
    }
    // scores: Describe the purpose of the following line of code.
    renderscores();
}

function storescores() {
    // scores: Describe the purpose of the following line of code.
    localStorage.setItem("scores", JSON.stringify(scores));
}
// scores: Describe the purpose of the following line of code.
scoresForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var scoresText = scoresInput.value.trim();
    // scores: Describe the functionality of the following `if` statement.
    if (scoresText === "") {
        return;
    }
    // scores: Describe the purpose of the following lines of code.
    scores.push(scoresText);
    scoresInput.value = "";

    // scores: What will happen when the following functions are called?
    storescores();
    renderscores();
});

// scores: Describe the purpose of the following line of code.
scoresList.addEventListener("click", function(event) {
    var element = event.target;
    // scores: Describe the functionality of the following `if` statement.
    if (element.matches("button") === true) {
        var index = element.parentElement.getAttribute("data-index");
        scores.splice(index, 1);
        // scores: What will happen when the following functions are called?
        storescores();
        renderscores();
    }
});

init();