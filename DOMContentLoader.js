document.addEventListener("DOMContentLoaded", () => {
    const counter = document.querySelector(".counter");
    const loader = document.querySelector(".loader");
    let animationIntialized = false;
  
    function shuffleText(finalText, duration, callback){
      let i = 0;
      const shuffleInterval = setInterval(() => {
        if(i < duration){
          counter.innerHTML = Math.random().toString(36).substring(2,8);
          i++;
        }
        else{
          clearInterval(shuffleInterval);
          counter.innerHTML = finalText;
          if(callback) callback();
        }
      }, 100)
    }
  
  
  function removeLetters(){
    let text = counter.innerHTML;
    const removeInterval = setInterval(()=>{
      if(text.length > 0){
        text = text.substring(0, text.length - 1);
        counter.innerHTML = text;
      }
      else{
        clearInterval(removeInterval);
        
        if(!animationIntialized){
          animateElements();
        }
        fadeOutLoader();
      }
    }, 100);
  }
  
  function animateElements(){
    if(animationIntialized) return;
    animationIntialized = true;
      const element1 = document.getElementById("logo-container");

      const blinkingAnimation = (element) => {
        gsap.to(element, { 
          keyframes: [
            { opacity: 1, duration: 1.4 }
          ],
          onComplete: stopAnimation 
        });
      };

  const stopAnimation = (element) => {
    gsap.killTweensOf(element);
  };

  blinkingAnimation(element1);
  setTimeout(IntroAnimation, 0);
  setTimeout(animateElements1, 370);
  setTimeout(animateElements4, 370);
  setTimeout(animateElements6, 370);
  }

  function animateElements1 (){
    const element1 = document.getElementById("prev");

      const blinkingAnimation = (element) => {
        gsap.to(element, { 
          keyframes: [
            { opacity: 0.2, duration: 0.3 },
            { opacity: 0, duration: 0.3 },
            { opacity: 0.7, duration: 0.3 },
            { opacity: 0.1, duration: 0.4 },
            { opacity: 1, duration: 0.5 }
          ],
          onComplete: stopAnimation 
        });
      };

  const stopAnimation = (element) => {
    gsap.killTweensOf(element);
  };

  blinkingAnimation(element1);
  setTimeout(animateElements2, 200);
  }

  function animateElements2 (){
    const element1 = document.getElementById("outerbar");

      const blinkingAnimation = (element) => {
        gsap.to(element, { 
          keyframes: [
            { opacity: 0.2, duration: 0.2 },
            { opacity: 0, duration: 0.3 },
            { opacity: 0.7, duration: 0.3 },
            { opacity: 0.1, duration: 0.4 },
            { opacity: 1, duration: 0.5 }
          ],
          onComplete: stopAnimation 
        });
      };

  const stopAnimation = (element) => {
    gsap.killTweensOf(element);
  };

  blinkingAnimation(element1);
  setTimeout(animateElements3, 300);
  }

  function animateElements3 (){
    const element1 = document.getElementById("next");

      const blinkingAnimation = (element) => {
        gsap.to(element, { 
          keyframes: [
            { opacity: 0.2, duration: 0.2 },
            { opacity: 0, duration: 0.3 },
            { opacity: 0.7, duration: 0.3 },
            { opacity: 0.1, duration: 0.4 },
            { opacity: 1, duration: 0.5 }
          ],
          onComplete: stopAnimation 
        });
      };

  const stopAnimation = (element) => {
    gsap.killTweensOf(element);
  };

  blinkingAnimation(element1);
  }

  function animateElements4 (){
    const element1 = document.getElementById("project-counter-id");

      const blinkingAnimation = (element) => {
        gsap.to(element, { 
          keyframes: [
            { opacity: 0.4, duration: 0.3 },
            { opacity: 0, duration: 0.3 },
            { opacity: 0.7, duration: 0.3 },
            { opacity: 0.1, duration: 0.5 },
            { opacity: 1, duration: 0.6 }
          ],
          onComplete: stopAnimation 
        });
      };

  const stopAnimation = (element) => {
    gsap.killTweensOf(element);
  };

  blinkingAnimation(element1);
  setTimeout(animateElements5, 100);
  }

  function animateElements5 (){
    const element1 = document.getElementById("project-id");

      const blinkingAnimation = (element) => {
        gsap.to(element, { 
          keyframes: [
            { opacity: 0.3, duration: 0.4 },
            { opacity: 0, duration: 0.3 },
            { opacity: 0.8, duration: 0.6 },
            { opacity: 0.3, duration: 0.2 },
            { opacity: 1, duration: 0.2 }
          ],
          onComplete: stopAnimation 
        });
      };

  const stopAnimation = (element) => {
    gsap.killTweensOf(element);
  };

  blinkingAnimation(element1);
  }

  function animateElements6 (){
    const element1 = document.getElementById("visit-btn");

      const blinkingAnimation = (element) => {
        gsap.to(element, { 
          keyframes: [
            { opacity: 0.3, duration: 0.4 },
            { opacity: 0, duration: 0.3 },
            { opacity: 0.8, duration: 0.6 },
            { opacity: 0.3, duration: 0.2 },
            { opacity: 1, duration: 0.2 }
          ],
          onComplete: stopAnimation 
        });
      };

  const stopAnimation = (element) => {
    gsap.killTweensOf(element);
  };

  blinkingAnimation(element1);
  setTimeout(animateElements2, 200);
  }
  

  function IntroAnimation(){
    const text = baffle(".intro");
    text.set({
      characters : '█░█ ▒<░▒░ ░█/▒▒ ▓▓/ █<<▓░ <░▒▓ ██░ ░▓<> ▓▓▒░',
      speed: 180
    });
    text.start();
    text.reveal(3000);
  }
  
  function animateMasks() {
    const masks = document.querySelectorAll(".hero-img .mask");
    const clipPathValues = [
        "polygon(0% 0%, 5.5% 0%, 5.5% 100%, 0% 100%)",
        "polygon(5% 0%, 10.5% 0%, 10.5% 100%, 5% 100%)",
        "polygon(10% 0%, 15.5% 0%, 15.5% 100%, 10% 100%)",
        "polygon(15% 0%, 20.5% 0%, 20.5% 100%, 15% 100%)",
        "polygon(20% 0%, 25.5% 0%, 25.5% 100%, 20% 100%)",
        "polygon(25% 0%, 30.5% 0%, 30.5% 100%, 25% 100%)",
        "polygon(30% 0%, 35.5% 0%, 35.5% 100%, 30% 100%)",
        "polygon(35% 0%, 40.5% 0%, 40.5% 100%, 35% 100%)",
        "polygon(40% 0%, 45.5% 0%, 45.5% 100%, 40% 100%)",
        "polygon(45% 0%, 50.5% 0%, 50.5% 100%, 45% 100%)",
        "polygon(50% 0%, 55.5% 0%, 55.5% 100%, 50% 100%)",
        "polygon(55% 0%, 60.5% 0%, 60.5% 100%, 55% 100%)",
        "polygon(60% 0%, 65.5% 0%, 65.5% 100%, 60% 100%)",
        "polygon(65% 0%, 70.5% 0%, 70.5% 100%, 65% 100%)",
        "polygon(70% 0%, 75.5% 0%, 75.5% 100%, 70% 100%)",
        "polygon(75% 0%, 80.5% 0%, 80.5% 100%, 75% 100%)",
        "polygon(80% 0%, 85.5% 0%, 85.5% 100%, 80% 100%)",
        "polygon(85% 0%, 90.5% 0%, 90.5% 100%, 85% 100%)",
        "polygon(90% 0%, 95.5% 0%, 95.5% 100%, 90% 100%)",
        "polygon(95% 0%, 100% 0%, 100% 100%, 95% 100%)",
    ];
  
    setTimeout(()=> {
      masks.forEach((mask,index) => {
        gsap.to(mask, {
          clipPath: clipPathValues[index % clipPathValues.length],
          duration: 1,
          delay: index * 0.1,
        });
      });
    });
  }
  
  gsap.to(counter, {
    innerHTML: 100 +"%",
    duration: 2.5,
    snap: "innerHTML",
    ease: "none",
    onComplete: () => {
      setTimeout(
        () =>
          shuffleText("ISAN/24", 5, () =>{
            setTimeout(removeLetters, 800);
          }),
          800
      );
    },
  });
  
  function fadeOutLoader () {
    gsap.to(loader, {
      opacity: 0,
      pointerEvents: "none",
      duration: 1,
      onComplete: () => {
        animateMasks();
      },
    });
  }
  });
  
  