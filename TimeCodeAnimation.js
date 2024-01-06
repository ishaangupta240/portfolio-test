
//Projects Randomizer
const availableLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let animationInterval = null;

document.getElementById("proj-btn").onmouseover = event => {  
 let animationIteration = 0;
  
 clearInterval(animationInterval);
  
 animationInterval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < animationIteration) {
          return event.target.dataset.value[index];
        }
      
        return availableLetters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(animationIteration >= event.target.dataset.value.length){ 
      clearInterval(animationInterval);
    }
    
    animationIteration += 1;
 }, 30);
}

//Info Randomizer
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.getElementById("info-btn").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 0.75;
  }, 30);
}

//Visit Randomizer
const letterPool = "!@#$%&?";

let animationIntervalId = null;

document.getElementById("visit-btn").onmouseover = mouseOverEvent => {  
  let currentIteration = 0;
  
  clearInterval(animationIntervalId);
  
  animationIntervalId = setInterval(() => {
    mouseOverEvent.target.innerText = mouseOverEvent.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < currentIteration) {
          return mouseOverEvent.target.dataset.value[index];
        }
      
        return letterPool[Math.floor(Math.random() * 7)];
      })
      .join("");
    
    if(currentIteration >= mouseOverEvent.target.dataset.value.length){ 
      clearInterval(animationIntervalId);
    }
    
    currentIteration += 0.7;
  }, 30);
};

//Project Name Randomizer
const letterPool1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let animationTimer = null;

document.getElementById("project-id").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(animationTimer);
  
  animationTimer = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letterPool1[Math.floor(Math.random() * 26)];
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(animationTimer);
    }
    
    iteration += 0.75;
  }, 30);
}