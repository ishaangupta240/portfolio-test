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
  
  if (currentIndex===0){
    ProjectDataValue.innerHTML = "BLEND DESIGN";
    ProjectDataValue.setAttribute("data-value","BLEND DESIGN");
    ProjectLink.setAttribute("href", "/Blend Design.html");
    yearIndex.innerHTML = "2023";
    roleIndex.innerHTML = "3D/ DESIGN";
    awardsIndex.innerHTML = "SECOND";
    agencyIndex.innerHTML = "CODE WEEK BY APEEJAY SCHOOL NOIDA";
    projectCounter.innerHTML = "P /01";
    let a = ["canvas1","canvas2","canvas3","canvas4","canvas5","canvas6","canvas7","canvas8","canvas9","canvas10","canvas11","canvas12","canvas13","canvas14","canvas15","canvas16","canvas17","canvas18","canvas19","canvas20"];

    for(var i = 0; i< a.length; i++){
      var maskDiv = document.getElementById(a[i]);

      maskDiv.classList.add("mask");
    }
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
