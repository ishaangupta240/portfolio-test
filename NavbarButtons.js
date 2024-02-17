var logo1 = document.getElementById("svgGroup");
var logo2 = document.getElementById("svgGroup1");
var navBar = document.getElementById("nav-buttons");
var menuText = document.getElementById("menu-text");
var hamburger = document.getElementById("mobile-menu-grid");

function menu() {
    function logoSvg(){
        if(logo1.classList.contains("logo")){
            logo1.classList.remove("logo");
            logo1.classList.add("logo-menu");
            menuText.innerHTML = "CLOSE";
            hamburger.style.pointerEvents="auto";
            hamburger.style.opacity = "1";

        }

        else if(logo1.classList.contains("logo-menu")){
            logo1.classList.remove("logo-menu");
            logo1.classList.add("logo");
            menuText.innerHTML = "MENU";
            hamburger.style.pointerEvents="none";
            hamburger.style.opacity = "0";
        }
    }

    function logoName(){
        if(logo2.classList.contains("logo-name-svg")){
            logo2.classList.remove("logo-name-svg");
            logo2.classList.add("logo-name-svg-menu");
        }

        else if(logo2.classList.contains("logo-name-svg-menu")){
            logo2.classList.remove("logo-name-svg-menu");
            logo2.classList.add("logo-name-svg");
        }
    }

    function nav(){
        if(navBar.classList.contains("nav-buttons")){
            navBar.classList.remove("nav-buttons");
            navBar.classList.add("nav-buttons-mobile");
        }

        else if(navBar.classList.contains("nav-buttons-mobile")){
            navBar.classList.remove("nav-buttons-mobile");
            navBar.classList.add("nav-buttons");
        }
    }

    logoName();
    logoSvg();
    nav();

}