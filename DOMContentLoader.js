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

    function disableSwipesAndKeys() {
      // Disable swipes
      document.addEventListener('touchmove', preventDefault, { passive: false });
    
      // Disable keys
      document.addEventListener('keydown', preventDefault);
    }

    disableSwipesAndKeys();

    function enableSwipesAndKeys() {
      // Enable swipes
      document.removeEventListener('touchmove', preventDefault, { passive: false });
    
      // Enable keys
      document.removeEventListener('keydown', preventDefault);
    }
    
    // Helper function to prevent default behavior
    function preventDefault(e) {
      e.preventDefault();
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
          animateElements15();
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
  setTimeout(animateElements7, 200);
  setTimeout(animateElements16, 200);
  setTimeout(animateElements11, 200);
  setTimeout(animateElements13, 190);
  setTimeout(animateElements14, 190);
  setTimeout(animateElements12, 300);
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
            { opacity: 0.1, duration: 0.1 },
            { opacity: 0.6, duration: 0.2 },
            { opacity: 0.1, duration: 0.1 },
            { opacity: 0.8, duration: 0.4 },
            { opacity: 0.8, duration: 0.4 },
            { opacity: 0.1, duration: 0.2 },
            { opacity: 1, duration: 0.4 }
          ],
          onComplete: stopAnimation 
        });
      };

  const stopAnimation = (element) => {
    gsap.killTweensOf(element);
  };

  blinkingAnimation(element1);
  }

  function animateElements7 (){
    var Messenger = function(el){
      'use strict';
      var m = this;
      
      m.init = function(){
        m.codeletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        m.message = 0;
        m.current_length = 0;
        m.fadeBuffer = false;
        m.messages = [
          'YEAR'
        ];
        
        setTimeout(m.animateIn, 100);
      };
      
      m.generateRandomString = function(length){
        var random_text = '';
        while(random_text.length < length){
          random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
        } 
        
        return random_text;
      };
      
      m.animateIn = function(){
        if(m.current_length < m.messages[m.message].length){
          m.current_length = m.current_length + 1;
          if(m.current_length > m.messages[m.message].length) {
            m.current_length = m.messages[m.message].length;
          }
          
          var message = m.messages[m.message].substring(0, m.current_length);
          $(el).html(message);
          
          setTimeout(m.animateIn, 50); // Adjust the timeout value for animation speed
        } else { 
          // Animation has completed, stop further animation
          return;
        }
      };
      
      
      m.animateFadeBuffer = function(){
        if(m.fadeBuffer === false){
          m.fadeBuffer = [];
          for(var i = 0; i < m.messages[m.message].length; i++){
            m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
          }
        }
        
        var do_cycles = false;
        var message = ''; 
        
        for(var i = 0; i < m.fadeBuffer.length; i++){
          var fader = m.fadeBuffer[i];
          if(fader.c > 0){
            do_cycles = true;
            fader.c--;
            message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
          } else {
            message += fader.l;
          }
        }
        
        $(el).html(message);
        
        if(do_cycles === true){
          setTimeout(m.animateFadeBuffer, 50);
        } else {
          setTimeout(m.cycleText, 2000);
        }
      };
      
      m.cycleText = function(){
        m.message = m.message + 1;
        if(m.message >= m.messages.length){
          m.message = 0;
        }
        
        m.current_length = 0;
        m.fadeBuffer = false;
        $(el).html('');
        
        setTimeout(m.animateIn, 200);
      };
      
      m.init();
    }
    
     
    var messenger = new Messenger($('#year-heading'));

    setTimeout(animateElements8, 74);
    setTimeout(animateElements17, 74);
  }

  function animateElements8() {
    var Messenger = function(el){
      'use strict';
      var m = this;
      
      m.init = function(){
        m.codeletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        m.message = 0;
        m.current_length = 0;
        m.fadeBuffer = false;
        m.messages = [
          'AGENCY'
        ];
        
        setTimeout(m.animateIn, 100);
      };
      
      m.generateRandomString = function(length){
        var random_text = '';
        while(random_text.length < length){
          random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
        } 
        
        return random_text;
      };
      
      m.animateIn = function(){
        if(m.current_length < m.messages[m.message].length){
          m.current_length = m.current_length + 1;
          if(m.current_length > m.messages[m.message].length) {
            m.current_length = m.messages[m.message].length;
          }
          
          var message = m.messages[m.message].substring(0, m.current_length);
          $(el).html(message);
          
          setTimeout(m.animateIn, 50); // Adjust the timeout value for animation speed
        } else { 
          // Animation has completed, stop further animation
          return;
        }
      };
      
      
      m.animateFadeBuffer = function(){
        if(m.fadeBuffer === false){
          m.fadeBuffer = [];
          for(var i = 0; i < m.messages[m.message].length; i++){
            m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
          }
        }
        
        var do_cycles = false;
        var message = ''; 
        
        for(var i = 0; i < m.fadeBuffer.length; i++){
          var fader = m.fadeBuffer[i];
          if(fader.c > 0){
            do_cycles = true;
            fader.c--;
            message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
          } else {
            message += fader.l;
          }
        }
        
        $(el).html(message);
        
        if(do_cycles === true){
          setTimeout(m.animateFadeBuffer, 50);
        } else {
          setTimeout(m.cycleText, 2000);
        }
      };
      
      m.cycleText = function(){
        m.message = m.message + 1;
        if(m.message >= m.messages.length){
          m.message = 0;
        }
        
        m.current_length = 0;
        m.fadeBuffer = false;
        $(el).html('');
        
        setTimeout(m.animateIn, 200);
      };
      
      m.init();
    }
    
     
    var messenger = new Messenger($('#agency-heading'));
 
    setTimeout(animateElements9, 74);
    setTimeout(animateElements18, 74);
  }

  function animateElements9() {
    var Messenger = function(el){
      'use strict';
      var m = this;
      
      m.init = function(){
        m.codeletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        m.message = 0;
        m.current_length = 0;
        m.fadeBuffer = false;
        m.messages = [
          'ROLE'
        ];
        
        setTimeout(m.animateIn, 100);
      };
      
      m.generateRandomString = function(length){
        var random_text = '';
        while(random_text.length < length){
          random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
        } 
        
        return random_text;
      };
      
      m.animateIn = function(){
        if(m.current_length < m.messages[m.message].length){
          m.current_length = m.current_length + 1;
          if(m.current_length > m.messages[m.message].length) {
            m.current_length = m.messages[m.message].length;
          }
          
          var message = m.messages[m.message].substring(0, m.current_length);
          $(el).html(message);
          
          setTimeout(m.animateIn, 50); // Adjust the timeout value for animation speed
        } else { 
          // Animation has completed, stop further animation
          return;
        }
      };
      
      
      m.animateFadeBuffer = function(){
        if(m.fadeBuffer === false){
          m.fadeBuffer = [];
          for(var i = 0; i < m.messages[m.message].length; i++){
            m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
          }
        }
        
        var do_cycles = false;
        var message = ''; 
        
        for(var i = 0; i < m.fadeBuffer.length; i++){
          var fader = m.fadeBuffer[i];
          if(fader.c > 0){
            do_cycles = true;
            fader.c--;
            message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
          } else {
            message += fader.l;
          }
        }
        
        $(el).html(message);
        
        if(do_cycles === true){
          setTimeout(m.animateFadeBuffer, 50);
        } else {
          setTimeout(m.cycleText, 2000);
        }
      };
      
      m.cycleText = function(){
        m.message = m.message + 1;
        if(m.message >= m.messages.length){
          m.message = 0;
        }
        
        m.current_length = 0;
        m.fadeBuffer = false;
        $(el).html('');
        
        setTimeout(m.animateIn, 200);
      };
      
      m.init();
    }
    
     
    var messenger = new Messenger($('#role-heading'));

    setTimeout(animateElements10, 74);
    setTimeout(animateElements19, 74);
 
  }

  function animateElements10() {
    var Messenger = function(el){
      'use strict';
      var m = this;
      
      m.init = function(){
        m.codeletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        m.message = 0;
        m.current_length = 0;
        m.fadeBuffer = false;
        m.messages = [
          'AWARDS'
        ];
        
        setTimeout(m.animateIn, 100);
      };
      
      m.generateRandomString = function(length){
        var random_text = '';
        while(random_text.length < length){
          random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
        } 
        
        return random_text;
      };
      
      m.animateIn = function(){
        if(m.current_length < m.messages[m.message].length){
          m.current_length = m.current_length + 1;
          if(m.current_length > m.messages[m.message].length) {
            m.current_length = m.messages[m.message].length;
          }
          
          var message = m.messages[m.message].substring(0, m.current_length);
          $(el).html(message);
          
          setTimeout(m.animateIn, 50); // Adjust the timeout value for animation speed
        } else { 
          // Animation has completed, stop further animation
          return;
        }
      };
      
      
      m.animateFadeBuffer = function(){
        if(m.fadeBuffer === false){
          m.fadeBuffer = [];
          for(var i = 0; i < m.messages[m.message].length; i++){
            m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
          }
        }
        
        var do_cycles = false;
        var message = ''; 
        
        for(var i = 0; i < m.fadeBuffer.length; i++){
          var fader = m.fadeBuffer[i];
          if(fader.c > 0){
            do_cycles = true;
            fader.c--;
            message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
          } else {
            message += fader.l;
          }
        }
        
        $(el).html(message);
        
        if(do_cycles === true){
          setTimeout(m.animateFadeBuffer, 50);
        } else {
          setTimeout(m.cycleText, 2000);
        }
      };
      
      m.cycleText = function(){
        m.message = m.message + 1;
        if(m.message >= m.messages.length){
          m.message = 0;
        }
        
        m.current_length = 0;
        m.fadeBuffer = false;
        $(el).html('');
        
        setTimeout(m.animateIn, 200);
      };
      
      m.init();
    }
    
     
    var messenger = new Messenger($('#awards-heading'));
 
  }

  function animateElements11(){
    var Messenger = function(el){
      'use strict';
      var m = this;
      
      m.init = function(){
        m.codeletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        m.message = 0;
        m.current_length = 0;
        m.fadeBuffer = false;
        m.messages = [
          'FOLIO'
        ];
        
        setTimeout(m.animateIn, 200);
      };
      
      m.generateRandomString = function(length){
        var random_text = '';
        while(random_text.length < length){
          random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
        } 
        
        return random_text;
      };
      
      m.animateIn = function(){
        if(m.current_length < m.messages[m.message].length){
          m.current_length = m.current_length + 1;
          if(m.current_length > m.messages[m.message].length) {
            m.current_length = m.messages[m.message].length;
          }
          
          var message = m.messages[m.message].substring(m.messages[m.message].length - m.current_length, m.messages[m.message].length);
          $(el).html(message);
          
          setTimeout(m.animateIn, 100); // Adjust the timeout value for animation speed
        } else { 
          // Animation has completed, stop further animation
          return;
        }
      };
      
      
      m.animateFadeBuffer = function(){
        if(m.fadeBuffer === false){
          m.fadeBuffer = [];
          for(var i = 0; i < m.messages[m.message].length; i++){
            m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
          }
        }
        
        var do_cycles = false;
        var message = ''; 
        
        for(var i = 0; i < m.fadeBuffer.length; i++){
          var fader = m.fadeBuffer[i];
          if(fader.c > 0){
            do_cycles = true;
            fader.c--;
            message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
          } else {
            message += fader.l;
          }
        }
        
        $(el).html(message);
        
        if(do_cycles === true){
          setTimeout(m.animateFadeBuffer, 100);
        } else {
          setTimeout(m.cycleText, 2000);
        }
      };
      
      m.cycleText = function(){
        m.message = m.message + 1;
        if(m.message >= m.messages.length){
          m.message = 0;
        }
        
        m.current_length = 0;
        m.fadeBuffer = false;
        $(el).html('');
        
        setTimeout(m.animateIn, 200);
      };
      
      m.init();
    }
    
     
    var messenger = new Messenger($('#folio'));
    
  }

  function animateElements12(){
    var Messenger = function(el){
      'use strict';
      var m = this;
      
      m.init = function(){
        m.codeletters = "1234567890";
        m.message = 0;
        m.current_length = 0;
        m.fadeBuffer = false;
        m.messages = [
          '/2024'
        ];
        
        setTimeout(m.animateIn, 200);
      };
      
      m.generateRandomString = function(length){
        var random_text = '';
        while(random_text.length < length){
          random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
        } 
        
        return random_text;
      };
      
      m.animateIn = function(){
        if(m.current_length < m.messages[m.message].length){
          m.current_length = m.current_length + 1;
          if(m.current_length > m.messages[m.message].length) {
            m.current_length = m.messages[m.message].length;
          }
          
          var message = m.messages[m.message].substring(m.messages[m.message].length - m.current_length, m.messages[m.message].length);
          $(el).html(message);
          
          setTimeout(m.animateIn, 100); // Adjust the timeout value for animation speed
        } else { 
          // Animation has completed, stop further animation
          return;
        }
      };
      
      
      m.animateFadeBuffer = function(){
        if(m.fadeBuffer === false){
          m.fadeBuffer = [];
          for(var i = 0; i < m.messages[m.message].length; i++){
            m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
          }
        }
        
        var do_cycles = false;
        var message = ''; 
        
        for(var i = 0; i < m.fadeBuffer.length; i++){
          var fader = m.fadeBuffer[i];
          if(fader.c > 0){
            do_cycles = true;
            fader.c--;
            message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
          } else {
            message += fader.l;
          }
        }
        
        $(el).html(message);
        
        if(do_cycles === true){
          setTimeout(m.animateFadeBuffer, 100);
        } else {
          setTimeout(m.cycleText, 2000);
        }
      };
      
      m.cycleText = function(){
        m.message = m.message + 1;
        if(m.message >= m.messages.length){
          m.message = 0;
        }
        
        m.current_length = 0;
        m.fadeBuffer = false;
        $(el).html('');
        
        setTimeout(m.animateIn, 200);
      };
      
      m.init();
    }
    
     
    var messenger = new Messenger($('#folio-year'));
    
  }
  
  function animateElements13 (){
    const element1 = document.getElementById("folio");

      const blinkingAnimation = (element) => {
        gsap.to(element, { 
          keyframes: [
            { opacity: 1, duration: 0.3 }
          ],
          onComplete: stopAnimation 
        });
      };

  const stopAnimation = (element) => {
    gsap.killTweensOf(element);
  };

  blinkingAnimation(element1);
  }

  function animateElements14 (){
    const element1 = document.getElementById("folio-year");

      const blinkingAnimation = (element) => {
        gsap.to(element, { 
          keyframes: [
            { opacity: 1, duration: 0.3 }
          ],
          onComplete: stopAnimation 
        });
      };

  const stopAnimation = (element) => {
    gsap.killTweensOf(element);
  };

  blinkingAnimation(element1);
  }

  function animateElements15 (){
    const element1 = document.getElementById("nav-buttons");

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
  }

  function animateElements16 (){
    const element1 = document.getElementById("year-heading");

      const blinkingAnimation = (element) => {
        gsap.to(element, { 
          keyframes: [
            { opacity: 1, duration: 0.3 }
          ],
          onComplete: stopAnimation 
        });
      };

  const stopAnimation = (element) => {
    gsap.killTweensOf(element);
  };

  blinkingAnimation(element1);
  }

  function animateElements17 (){
    const element1 = document.getElementById("agency-heading");

      const blinkingAnimation = (element) => {
        gsap.to(element, { 
          keyframes: [
            { opacity: 1, duration: 0.3 }
          ],
          onComplete: stopAnimation 
        });
      };

  const stopAnimation = (element) => {
    gsap.killTweensOf(element);
  };

  blinkingAnimation(element1);
  }

  function animateElements18 (){
    const element1 = document.getElementById("role-heading");

      const blinkingAnimation = (element) => {
        gsap.to(element, { 
          keyframes: [
            { opacity: 1, duration: 0.3 }
          ],
          onComplete: stopAnimation 
        });
      };

  const stopAnimation = (element) => {
    gsap.killTweensOf(element);
  };

  blinkingAnimation(element1);
  }

  function animateElements19 (){
    const element1 = document.getElementById("awards-heading");

      const blinkingAnimation = (element) => {
        gsap.to(element, { 
          keyframes: [
            { opacity: 1, duration: 0.3 }
          ],
          onComplete: stopAnimation 
        });
      };

  const stopAnimation = (element) => {
    gsap.killTweensOf(element);
  };

  blinkingAnimation(element1);
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
          onComplete: () => {
            setTimeout(() => {
              enableSwipesAndKeys();
            }, 950); 
          }
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
  
  