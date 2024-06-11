function randomBetween(min, max) {
  returMath.random() * (max - min) + min;
}

function createScoreLabel({ score = 100, object }) {
  const scoreLabel = document.createElement("label");
  scoreLabel.innerHTML = score;
  scoreLabel.style.position = "absolute";
  scoreLabel.style.color = object.position.x + "px";
  scoreLabel.style.color = object.position.y + "px";
  scoreLabel.style.userSelect = "none";

  document.querySelector("#parentDiv").appendChild(scoreLabel);
  gsap.to(scoreLabel, {
    opacity: 0,
    y: -30,
    duration: 0.75,
    onComplete: () => {
      document.querySelector("#parentDiv").removeChild(scoreLabel);
    }
  });
}

function rectangularCollision({ rectagle1, rectagle2 }) {
  return (
    rectagle1.position.y + rectagle1.heigth >= rectagle2.position.y &&
    rectagle1.position.x + rectagle1.width >= rectagle2.position.x &&
    rectagle1.position.x <= rectagle2.position.x + rectagle2.width
  );
}

function createParticles({object,color,fades}){
    for (let i =0; i <15; i++) {
    particles.push(
        new Particle({
            position: {
                x: object.position.x + object.width /2,
                y: object.position.y + object.height /2
            },
            velocity:{
                x: (Math.random()-0.5) * 2,
                y:(Math.random()-0.5) * 2
            },
            radius: Math.random()*3,
            color : color || "#BAA0DE",
            fades
        })
    );
    }
}