class Cat {
    constructor(id,originX,originY,width,height) {
        this.id = id;
        this.originX = originX;
        this.originY = originY;
        this.width = width;
        this.height = height;
        this.x = 0;
        this.y = 0;
        this.score = 0;
        setInterval(()=>{ this.move(); this.updateScore() }, 1000)
    }

    click() {
        this.score = this.score + 1;
    }
    
    move() {
        let cat = document.getElementById(this.id);
        this.x = this.originX + Math.random()*this.width;
        this.y = this.originY + Math.random()*this.height;
        let newStyle = "left: " + this.x + "px; top: " + this.y + "px;"
        cat.style = newStyle;
    }

    updateScore() {
        let score = document.getElementById(this.id + "-score");
        score.innerHTML = this.score;
    }

}

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
