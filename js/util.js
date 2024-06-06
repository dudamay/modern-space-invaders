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

    function rectangularCollision({rectagle1, rectagle2}){
        return(
            rectagle1.position.y + rectagle1.heigth >= rectagle2.position.y &&
            rectagle1.position.x + rectagle1.width >= rectagle2.position.x &&
            rectagle1.position.x <= rectagle2.position.x + rectagle2.width
        );
     }
}