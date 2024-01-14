const values = [
    "BLEND DESIGN",
    "REWORK RENDER",
    "VIDEO EDITING",
    "ISAN",
    "TECHFEST 2017",
    "FRAME FUSION"
  ];
  
  
  
  let currentIndex = 0;
  
  const ProjectDataValue = document.getElementById("project-id");
  const ProjectLink = document.getElementById("project-link");
  const yearIndex = document.getElementById("year-info");
  const roleIndex = document.getElementById("role-info");
  const awardsIndex = document.getElementById("awards-info");
  const agencyIndex = document.getElementById("agency-info");
  const projectCounter = document.getElementById("project-counter-id");
  
  if (currentIndex===0){
    ProjectDataValue.innerHTML = "BLEND DESIGN";
    ProjectDataValue.setAttribute("data-value","BLEND DESIGN");
    ProjectLink.setAttribute("href", "/Blend Design.html");
    yearIndex.innerHTML = "2023";
    roleIndex.innerHTML = "3D/ DESIGN";
    awardsIndex.innerHTML = "SECOND";
    agencyIndex.innerHTML = "CODE WEEK BY APEEJAY SCHOOL NOIDA";
    projectCounter.innerHTML = "P /01";
  }
  
  
  const paragraph = document.getElementById('project-id');
  
  function updateParagraph() {
    currentIndex = (currentIndex + 1) % values.length;
    const projectDataValue = document.getElementById("project-id");
  
  if (currentIndex===0){
    ProjectDataValue.innerHTML = "BLEND DESIGN";
    ProjectDataValue.setAttribute("data-value","BLEND DESIGN");
    ProjectLink.setAttribute("href", "/Blend Design.html");
    yearIndex.innerHTML = "2023";
    roleIndex.innerHTML = "3D/ DESIGN";
    awardsIndex.innerHTML = "SECOND";
    agencyIndex.innerHTML = "CODE WEEK BY APEEJAY SCHOOL NOIDA";
    projectCounter.innerHTML = "P /01";
    
    let b = ["canvas1","canvas2","canvas3","canvas4","canvas5","canvas6","canvas7","canvas8","canvas9","canvas10","canvas11","canvas12","canvas13","canvas14","canvas15","canvas16","canvas17","canvas18","canvas19","canvas20"];

    for(var i = 0; i< b.length; i++){
      var maskDiv = document.getElementById(b[i]);

      
    }
    
  }
  
  if (currentIndex===1){
    ProjectDataValue.innerHTML = "REWORK RENDER";
    ProjectDataValue.setAttribute("data-value","REWORK RENDER");
    ProjectLink.setAttribute("href", "/Blend Design.html");
    yearIndex.innerHTML = "2023";
    roleIndex.innerHTML = "VIDEO EDITING";
    awardsIndex.innerHTML = "HONORABLE MENTION";
    agencyIndex.innerHTML = "WARTEX #9.0";
    projectCounter.innerHTML = "P /02";

    let c = ["canvas1","canvas2","canvas3","canvas4","canvas5","canvas6","canvas7","canvas8","canvas9","canvas10","canvas11","canvas12","canvas13","canvas14","canvas15","canvas16","canvas17","canvas18","canvas19","canvas20"];

    for(var i = 0; i< c.length; i++){
      var maskDiv = document.getElementById(c[i]);
 
    }
    animateMasksOut(".project-a-tag .hero-img .mask");    
  }
  
  if (currentIndex===2){
    ProjectDataValue.innerHTML = "VIDEO EDITING";
    ProjectDataValue.setAttribute("data-value","VIDEO EDITING");
    ProjectLink.setAttribute("href", "/Blend Design.html");
    yearIndex.innerHTML = "2023";
    roleIndex.innerHTML = "VIDEO EDITING";
    awardsIndex.innerHTML = "THIRD";
    agencyIndex.innerHTML = "CODE WEEK BY APEEJAY SCHOOL NOIDA";
    projectCounter.innerHTML = "P /03";
    animateMasksOut2(".project-a-tag .hero-img .maskP1");
  }
  
  if (currentIndex===3){
    ProjectDataValue.innerHTML = "BLEND DESIGN";
    ProjectDataValue.setAttribute("data-value","BLEND DESIGN");
    ProjectLink.setAttribute("href", "/Blend Design.html");
    yearIndex.innerHTML = "2023";
    roleIndex.innerHTML = "3D/ DESIGN";
    awardsIndex.innerHTML = "SECOND";
    agencyIndex.innerHTML = "CODE WEEK BY APEEJAY SCHOOL NOIDA";
    projectCounter.innerHTML = "P /04";
    animateMasksOut3(".project-a-tag .hero-img .maskP2")
  }
  
  if (currentIndex===4){
    ProjectDataValue.innerHTML = "BLEND DESIGN";
    ProjectDataValue.setAttribute("data-value","BLEND DESIGN");
    ProjectLink.setAttribute("href", "/Blend Design.html");
    yearIndex.innerHTML = "2023";
    roleIndex.innerHTML = "3D/ DESIGN";
    awardsIndex.innerHTML = "SECOND";
    agencyIndex.innerHTML = "CODE WEEK BY APEEJAY SCHOOL NOIDA";
    projectCounter.innerHTML = "P /05";
    animateMasksOut4(".project-a-tag .hero-img .maskP3");
  }
  
  if (currentIndex===5){
    ProjectDataValue.innerHTML = "BLEND DESIGN";
    ProjectDataValue.setAttribute("data-value","BLEND DESIGN");
    ProjectLink.setAttribute("href", "/Blend Design.html");
    yearIndex.innerHTML = "2023";
    roleIndex.innerHTML = "3D/ DESIGN";
    awardsIndex.innerHTML = "SECOND";
    agencyIndex.innerHTML = "CODE WEEK BY APEEJAY SCHOOL NOIDA";
    projectCounter.innerHTML = "P /06";
    }
  }


  function animateMasksOut(masksPath) {
    const masks = document.querySelectorAll(masksPath);
    const clipPathValues = [
      "polygon(5% 0%, 5% 0%, 5% 100%, 5% 100%)",
      "polygon(10% 0%, 10% 0%, 10% 100%, 10% 100%)",
      "polygon(15% 0%, 15% 0%, 15% 100%, 15% 100%)",
      "polygon(20% 0%, 20% 0%, 20% 100%, 20% 100%)",
      "polygon(25% 0%, 25% 0%, 25% 100%, 25% 100%)",
      "polygon(30% 0%, 30% 0%, 30% 100%, 30% 100%)",
      "polygon(35% 0%, 35% 0%, 35% 100%, 35% 100%)",
      "polygon(40% 0%, 40% 0%, 40% 100%, 40% 100%)",
      "polygon(45% 0%, 45% 0%, 45% 100%, 45% 100%)",
      "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
      "polygon(55% 0%, 55% 0%, 55% 100%, 55% 100%)",
      "polygon(60% 0%, 60% 0%, 60% 100%, 60% 100%)",
      "polygon(65% 0%, 65% 0%, 65% 100%, 65% 100%)",
      "polygon(70% 0%, 70% 0%, 70% 100%, 70% 100%)",
      "polygon(75% 0%, 75% 0%, 75% 100%, 75% 100%)",
      "polygon(80% 0%, 80% 0%, 80% 100%, 80% 100%)",
      "polygon(85% 0%, 85% 0%, 85% 100%, 85% 100%)",
      "polygon(90% 0%, 90% 0%, 90% 100%, 90% 100%)",
      "polygon(95% 0%, 95% 0%, 95% 100%, 95% 100%)",
      "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
      ];

    if (masks.length > 0) {
        masks.forEach((mask, index) => {
            gsap.to(mask, {
                clipPath: clipPathValues[index % clipPathValues.length],
                duration: 1,
                delay: index * 0.1,
                stagger: 0.2,
                onComplete: () => {
                    mask.classList.remove("mask");
                    mask.classList.add("maskP1");

                    if (index === masks.length - 1) {
                        // Use setTimeout instead of setInterval
                        setTimeout(() => {
                            animateMasksIn(".project-a-tag .hero-img .maskP1");
                        }, 0);
                    }
                }
            });
        });
    } else {
        console.error("No masks found or masksArray1 is not iterable.");
    }
}

  
  function animateMasksIn(masksPath) {
    const masksIn = document.querySelectorAll(masksPath);
    const clipPathValues1 = ["polygon(0% 0%, 5.5% 0%, 5.5% 100%, 0% 100%)",
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
    "polygon(95% 0%, 100% 0%, 100% 100%, 95% 100%)"];
  
    if (masksIn.length > 0) {
      masksIn.forEach((maskP1, index) => {
        gsap.to(maskP1, {
          clipPath: clipPathValues1[index % clipPathValues1.length],
          duration: 1,
          delay: index * 0.1,
          stagger: 0.2,
          force3D: true,
          ease: "back.out(1.7)",
        });
      });
    } else {
      console.error("No masks found or masksArray2 is not iterable.");
    }
  }





//maskP1 TO maskP2












  function animateMasksOut2(masksPath) {
    const masks = document.querySelectorAll(masksPath);
    const clipPathValues = [
    "polygon(5% 0%, 5% 0%, 5% 100%, 5% 100%)",
    "polygon(10% 0%, 10% 0%, 10% 100%, 10% 100%)",
    "polygon(15% 0%, 15% 0%, 15% 100%, 15% 100%)",
    "polygon(20% 0%, 20% 0%, 20% 100%, 20% 100%)",
    "polygon(25% 0%, 25% 0%, 25% 100%, 25% 100%)",
    "polygon(30% 0%, 30% 0%, 30% 100%, 30% 100%)",
    "polygon(35% 0%, 35% 0%, 35% 100%, 35% 100%)",
    "polygon(40% 0%, 40% 0%, 40% 100%, 40% 100%)",
    "polygon(45% 0%, 45% 0%, 45% 100%, 45% 100%)",
    "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
    "polygon(55% 0%, 55% 0%, 55% 100%, 55% 100%)",
    "polygon(60% 0%, 60% 0%, 60% 100%, 60% 100%)",
    "polygon(65% 0%, 65% 0%, 65% 100%, 65% 100%)",
    "polygon(70% 0%, 70% 0%, 70% 100%, 70% 100%)",
    "polygon(75% 0%, 75% 0%, 75% 100%, 75% 100%)",
    "polygon(80% 0%, 80% 0%, 80% 100%, 80% 100%)",
    "polygon(85% 0%, 85% 0%, 85% 100%, 85% 100%)",
    "polygon(90% 0%, 90% 0%, 90% 100%, 90% 100%)",
    "polygon(95% 0%, 95% 0%, 95% 100%, 95% 100%)",
    "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
    ];

    if (masks.length > 0) {
        masks.forEach((maskP1, index) => {
            gsap.to(maskP1, {
                clipPath: clipPathValues[index % clipPathValues.length],
                duration: 1,
                delay: index * 0.1,
                stagger: 0.2,
                onComplete: () => {
                    // Change the class name of each individual mask element
                    maskP1.classList.remove("maskP1");
                    maskP1.classList.add("maskP2");

                    if (index === masks.length - 1) {
                        // This will be called when the last mask completes the animation
                        setTimeout(() => {
                          animateMasksIn2(".project-a-tag .hero-img .maskP2");
                      }, 0);
                    }
                }
            });
        });
    } else {
        console.error("No masks found or masksArray3 is not iterable.");
    }
} 
  
  function animateMasksIn2(masksPath) {
    const masksIn = document.querySelectorAll(masksPath);
    const clipPathValues1 = ["polygon(0% 0%, 5.5% 0%, 5.5% 100%, 0% 100%)",
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
    "polygon(95% 0%, 100% 0%, 100% 100%, 95% 100%)"];
  
    if (masksIn.length > 0) {
      masksIn.forEach((maskP2, index) => {
        gsap.to(maskP2, {
          clipPath: clipPathValues1[index % clipPathValues1.length],
          duration: 1,
          delay: index * 0.1,
          stagger: 0.2,
          force3D: true,
          ease: "back.out(1.7)",
        });
      });
    } else {
      console.error("No masks found or masksArray4 is not iterable.");
    }
  }









//P2 to P3








  function animateMasksOut3(masksPath) {
    const masks = document.querySelectorAll(masksPath);
    const clipPathValues = [
    "polygon(5% 0%, 5% 0%, 5% 100%, 5% 100%)",
    "polygon(10% 0%, 10% 0%, 10% 100%, 10% 100%)",
    "polygon(15% 0%, 15% 0%, 15% 100%, 15% 100%)",
    "polygon(20% 0%, 20% 0%, 20% 100%, 20% 100%)",
    "polygon(25% 0%, 25% 0%, 25% 100%, 25% 100%)",
    "polygon(30% 0%, 30% 0%, 30% 100%, 30% 100%)",
    "polygon(35% 0%, 35% 0%, 35% 100%, 35% 100%)",
    "polygon(40% 0%, 40% 0%, 40% 100%, 40% 100%)",
    "polygon(45% 0%, 45% 0%, 45% 100%, 45% 100%)",
    "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
    "polygon(55% 0%, 55% 0%, 55% 100%, 55% 100%)",
    "polygon(60% 0%, 60% 0%, 60% 100%, 60% 100%)",
    "polygon(65% 0%, 65% 0%, 65% 100%, 65% 100%)",
    "polygon(70% 0%, 70% 0%, 70% 100%, 70% 100%)",
    "polygon(75% 0%, 75% 0%, 75% 100%, 75% 100%)",
    "polygon(80% 0%, 80% 0%, 80% 100%, 80% 100%)",
    "polygon(85% 0%, 85% 0%, 85% 100%, 85% 100%)",
    "polygon(90% 0%, 90% 0%, 90% 100%, 90% 100%)",
    "polygon(95% 0%, 95% 0%, 95% 100%, 95% 100%)",
    "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
    ];

    if (masks.length > 0) {
        masks.forEach((maskP2, index) => {
            gsap.to(maskP2, {
                clipPath: clipPathValues[index % clipPathValues.length],
                duration: 1,
                delay: index * 0.1,
                stagger: 0.2,
                onComplete: () => {
                    // Change the class name of each individual mask element
                    maskP2.classList.remove("maskP2");
                    maskP2.classList.add("maskP3");

                    if (index === masks.length - 1) {
                        // This will be called when the last mask completes the animation
                        setTimeout(() => {
                          animateMasksIn3(".project-a-tag .hero-img .maskP3");
                      }, 100);
                    }
                }
            });
        });
    } else {
        console.error("No masks found or masksArray3 is not iterable.");
    }
} 
  
  function animateMasksIn3(masksPath) {
    const masksIn = document.querySelectorAll(masksPath);
    const clipPathValues1 = ["polygon(0% 0%, 5.5% 0%, 5.5% 100%, 0% 100%)",
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
    "polygon(95% 0%, 100% 0%, 100% 100%, 95% 100%)"];
  
    if (masksIn.length > 0) {
      masksIn.forEach((maskP3, index) => {
        gsap.to(maskP3, {
          clipPath: clipPathValues1[index % clipPathValues1.length],
          duration: 1,
          delay: index * 0.1,
          stagger: 0.2,
          force3D: true,
          ease: "back.out(1.7)",
        });
      });
    } else {
      console.error("No masks found or masksArray4 is not iterable.");
    }
  }

























  function animateMasksOut4(masksPath) {
    const masks = document.querySelectorAll(masksPath);
    const clipPathValues = [
    "polygon(5% 0%, 5% 0%, 5% 100%, 5% 100%)",
    "polygon(10% 0%, 10% 0%, 10% 100%, 10% 100%)",
    "polygon(15% 0%, 15% 0%, 15% 100%, 15% 100%)",
    "polygon(20% 0%, 20% 0%, 20% 100%, 20% 100%)",
    "polygon(25% 0%, 25% 0%, 25% 100%, 25% 100%)",
    "polygon(30% 0%, 30% 0%, 30% 100%, 30% 100%)",
    "polygon(35% 0%, 35% 0%, 35% 100%, 35% 100%)",
    "polygon(40% 0%, 40% 0%, 40% 100%, 40% 100%)",
    "polygon(45% 0%, 45% 0%, 45% 100%, 45% 100%)",
    "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
    "polygon(55% 0%, 55% 0%, 55% 100%, 55% 100%)",
    "polygon(60% 0%, 60% 0%, 60% 100%, 60% 100%)",
    "polygon(65% 0%, 65% 0%, 65% 100%, 65% 100%)",
    "polygon(70% 0%, 70% 0%, 70% 100%, 70% 100%)",
    "polygon(75% 0%, 75% 0%, 75% 100%, 75% 100%)",
    "polygon(80% 0%, 80% 0%, 80% 100%, 80% 100%)",
    "polygon(85% 0%, 85% 0%, 85% 100%, 85% 100%)",
    "polygon(90% 0%, 90% 0%, 90% 100%, 90% 100%)",
    "polygon(95% 0%, 95% 0%, 95% 100%, 95% 100%)",
    "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
    ];

    if (masks.length > 0) {
        masks.forEach((maskP3, index) => {
            gsap.to(maskP3, {
                clipPath: clipPathValues[index % clipPathValues.length],
                duration: 1,
                delay: index * 0.1,
                stagger: 0.2,
                onComplete: () => {
                    // Change the class name of each individual mask element
                    maskP3.classList.remove("maskP3");
                    maskP3.classList.add("maskP4");

                    if (index === masks.length - 1) {
                        // This will be called when the last mask completes the animation
                        setTimeout(() => {
                          animateMasksIn4(".project-a-tag .hero-img .maskP4");
                      }, 0);
                    }
                }
            });
        });
    } else {
        console.error("No masks found or masksArray3 is not iterable.");
    }
} 
  
  function animateMasksIn4(masksPath) {
    const masksIn = document.querySelectorAll(masksPath);
    const clipPathValues1 = ["polygon(0% 0%, 5.5% 0%, 5.5% 100%, 0% 100%)",
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
    "polygon(95% 0%, 100% 0%, 100% 100%, 95% 100%)"];
  
    if (masksIn.length > 0) {
      masksIn.forEach((maskP4, index) => {
        gsap.to(maskP4, {
          clipPath: clipPathValues1[index % clipPathValues1.length],
          duration: 1,
          delay: index * 0.1,
          stagger: 0.2,
          force3D: true,
          ease: "back.out(1.7)",
        });
      });
    } else {
      console.error("No masks found or masksArray4 is not iterable.");
    }
  }
