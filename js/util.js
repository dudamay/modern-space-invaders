function randomBetween(min,max){
    returMath.random() * (max - min) + min;
}

function createScoreLabel({score = 100,object}){
    const scoreLabel = document.createElement("label");
    scoreLabel.innerHTML = score;
    scoreLabel.style.position = "absolute";
    scoreLabel.style.color = object.position.x + "px";
    scoreLabel.style.color = object.position.y + "px";
    scoreLabel.style.userSelect = "none";


    document.querySelector("#parentDiv").appendChild(scoreLabel);
    gsap.to(scoreLabel,{
        opacity: 0,
        y: -30,
        duration: 0.75,
        onComplete: () => {
            document.querySelector("#parentDiv").removeChild(scoreLabel);
        }

    });
}