let catX = 0;
let catY = 0;
let catScore = 0;

function logdiv(message) {
    let div = document.getElementById("log");
    div.innerHTML += "<br>" + message;
}

function clickCat() {
    catScore = catScore + 1;
}

function moveCat() {
   let cat = document.getElementById("cat");
   catX = Math.random()*400;
   catY = Math.random()*400;
   let newStyle = "left: " + catX + "px; top: " + catY + "px;"
   console.log(newStyle);
   cat.style = newStyle;
   logdiv("🤐: " + newStyle)
   catScore = catScore - 1;

}

function updateScore() {
    let score = document.getElementById("score");
    score.innerHTML = catScore;
}

setInterval(() => { moveCat(); updateScore() }, 1000)
