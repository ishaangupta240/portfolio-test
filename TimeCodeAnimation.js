
//Projects Randomizer
const availableLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let animationInterval = null;

document.getElementById("proj-btn").onmouseover = event => {  
  let animationIteration = 0;
  const targetElement = document.getElementById("project-text");
  
  clearInterval(animationInterval);
  
  animationInterval = setInterval(() => {
    targetElement.innerText = targetElement.innerText
      .split("")
      .map((letter, index) => {
        if(index < animationIteration) {
          return targetElement.dataset.value[index];
        }
      
        return availableLetters[Math.floor(Math.random() * 26)];
      })
      .join("");
    
    if(animationIteration >= targetElement.dataset.value.length){ 
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
  const targetElement = document.getElementById("info-text");
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    targetElement.innerText = targetElement.dataset.value
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return targetElement.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    
    if(iteration >= targetElement.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 0.75;
  }, 30);
}



//Visit Randomizer
const infoLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let infoInterval = null;

document.getElementById("visit-btn").onmouseover = infoEvent => {  
  let infoIteration = 0;
  const infoTargetElement = document.getElementById("visit");
  
  clearInterval(infoInterval);
  
  infoInterval = setInterval(() => {
    infoTargetElement.innerText = infoTargetElement.dataset.value
      .split("")
      .map((infoLetter, index) => {
        if(index < infoIteration) {
          return infoTargetElement.dataset.value[index];
        }
      
        return infoLetters[Math.floor(Math.random() * 26)];
      })
      .join("");
    
    if(infoIteration >= infoTargetElement.dataset.value.length){ 
      clearInterval(infoInterval);
    }
    
    infoIteration += 0.75;
  }, 30);
}

//Visit Interval Randomizer
function updateInfo() {
  var infoIteration = 0;
  var infoTargetElement = document.getElementById("visit");
  var infoLetters = "@#!$%&?";

  if (infoTargetElement.dataset.intervalId) {
    clearInterval(infoTargetElement.dataset.intervalId);
  }

  var intervalId = setInterval(function() {
    infoTargetElement.innerText = infoTargetElement.dataset.value
      .split("")
      .map(function(infoLetter, index) {
        if(index < infoIteration) {
          return infoTargetElement.dataset.value[index];
        }

        return infoLetters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if(infoIteration >= infoTargetElement.dataset.value.length){ 
      clearInterval(intervalId);
    }

    infoIteration += 0.5;
  }, 30);

  infoTargetElement.dataset.intervalId = intervalId;
}

function runAtRandomIntervals() {
  setInterval(function() {
      var interval = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
      console.clear();
      console.log(interval);
      setTimeout(function() {
          updateInfo();
      }, interval);
  }, 5000);
}
runAtRandomIntervals();

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

const projectNameLetterPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let projectNameAnimationTimer = null;

document.getElementById("prev").onmouseover = projectNameEvent => {  
  let projectNameIteration = 0;
  
  clearInterval(projectNameAnimationTimer);
  
  projectNameAnimationTimer = setInterval(() => {
    projectNameEvent.target.innerText = projectNameEvent.target.innerText
      .split("")
      .map((projectNameLetter, index) => {
        if(index < projectNameIteration) {
          return projectNameEvent.target.dataset.value[index];
        }
      
        return projectNameLetterPool[Math.floor(Math.random() * 26)];
      })
      .join("");
    
    if(projectNameIteration >= projectNameEvent.target.dataset.value.length){ 
      clearInterval(projectNameAnimationTimer);
    }
    
    projectNameIteration += 0.38;
  }, 30);
}

// Updated Project Name Randomizer
const projectTitleLetterPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let projectTitleAnimationTimer = null;

document.getElementById("next").onmouseover = projectTitleEvent => {  
  let projectTitleIteration = 0;
  
  clearInterval(projectTitleAnimationTimer);
  
  projectTitleAnimationTimer = setInterval(() => {
    projectTitleEvent.target.innerText = projectTitleEvent.target.innerText
      .split("")
      .map((projectTitleLetter, index) => {
        if(index < projectTitleIteration) {
          return projectTitleEvent.target.dataset.value[index];
        }
      
        return projectTitleLetterPool[Math.floor(Math.random() * 26)];
      })
      .join("");
    
    if(projectTitleIteration >= projectTitleEvent.target.dataset.value.length){ 
      clearInterval(projectTitleAnimationTimer);
    }
    
    projectTitleIteration += 0.38;
  }, 30);
}
