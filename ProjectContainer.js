//Project Slide Changer
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
  const maskClass = document.getElementById("canvas");
  
  if (currentIndex===0){
    ProjectDataValue.innerHTML = "BLEND DESIGN";
    ProjectDataValue.setAttribute("data-value","BLEND DESIGN");
    ProjectLink.setAttribute("href", "/Blend Design.html");
    yearIndex.innerHTML = "2023";
    roleIndex.innerHTML = "3D/ DESIGN";
    awardsIndex.innerHTML = "SECOND";
    agencyIndex.innerHTML = "CODE WEEK BY APEEJAY SCHOOL NOIDA";
    projectCounter.innerHTML = "P /01";
    maskClass.style.background = "url(assets/images/image.avif);";
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
    maskClass.style.background = "url(assets/images/image.avif);";
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
    maskClass.style.background = "url(assets/images/image2.webp);";
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
  
  function animateMasks(masksPath) {
    const masks = document.querySelectorAll(masksPath);
    const clipPathValues = [
        "polygon(0% 0%, 5% 0%, 5% 100%, 0% 100%)",
        "polygon(5% 0%, 10% 0%, 10% 100%, 5% 100%)",
        "polygon(10% 0%, 15% 0%, 15% 100%, 10% 100%)",
        "polygon(15% 0%, 20% 0%, 20% 100%, 15% 100%)",
        "polygon(20% 0%, 25% 0%, 25% 100%, 20% 100%)",
        "polygon(25% 0%, 30% 0%, 30% 100%, 25% 100%)",
        "polygon(30% 0%, 35% 0%, 35% 100%, 30% 100%)",
        "polygon(35% 0%, 40% 0%, 40% 100%, 35% 100%)",
        "polygon(40% 0%, 45% 0%, 45% 100%, 40% 100%)",
        "polygon(45% 0%, 50% 0%, 50% 100%, 45% 100%)",
        "polygon(50% 0%, 55% 0%, 55% 100%, 50% 100%)",
        "polygon(55% 0%, 60% 0%, 60% 100%, 55% 100%)",
        "polygon(60% 0%, 65% 0%, 65% 100%, 60% 100%)",
        "polygon(65% 0%, 70% 0%, 70% 100%, 65% 100%)",
        "polygon(70% 0%, 75% 0%, 75% 100%, 70% 100%)",
        "polygon(75% 0%, 80% 0%, 80% 100%, 75% 100%)",
        "polygon(80% 0%, 85% 0%, 85% 100%, 80% 100%)",
        "polygon(85% 0%, 90% 0%, 90% 100%, 85% 100%)",
        "polygon(90% 0%, 95% 0%, 95% 100%, 90% 100%)",
        "polygon(95% 0%, 100% 0%, 100% 100%, 95% 100%)",
    ];

    // Convert NodeList to an array
    const masksArray = Array.from(masks);

    // Check if masksArray has a length greater than 0
    if (masksArray.length > 0) {
        setTimeout(() => {
            masksArray.forEach((mask, index) => {
                gsap.to(mask, {
                    clipPath: clipPathValues[index % clipPathValues.length],
                    duration: 1,
                    delay: index * 0.1,
                });
            });
        });
    } else {
        console.error("No masks found or masksArray is not iterable.");
    }
}

// Call the function to initiate the animation