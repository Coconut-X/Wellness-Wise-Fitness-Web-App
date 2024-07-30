
var currentMode = "light";

localStorage.setItem(currentMode,"light")

function contrast(){
    if(localStorage.getItem(currentMode)=="light"){
        darkMode();
        localStorage.setItem(currentMode,"dark");
    }
    else{
        lightMode();
        localStorage.setItem(currentMode,"light");
    }
}

function darkMode() {
    document.body.style.backgroundColor = "#333";
    
    var navbarLinks = document.getElementsByClassName("navbar-link");

    for (var i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].style.backgroundColor = "black";
        navbarLinks[i].style.color = "#8B4513"; 
        navbarLinks[i].style.textShadow = "0 0 5px #8B4513, 0 0 10px #8B4513"; 
        //when hovered change background to white
        navbarLinks[i].onmouseover = function() {
            this.style.backgroundColor = "white";
        }
        //when not hovered change background to black
        navbarLinks[i].onmouseout = function() {
            this.style.backgroundColor = "black";
        }
    }
}


function lightMode() {
    document.body.style.backgroundColor = "#fff";
     
    var navbarLinks = document.getElementsByClassName("navbar-link");

    for (var i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].style.backgroundColor = "white";
        navbarLinks[i].style.color = "#8b4513"; 
        navbarLinks[i].style.textShadow = "none"; 

        navbarLinks[i].onmouseover = function() {
            this.style.backgroundColor = "#fff8dc";
        }
        navbarLinks[i].onmouseout = function() {
            this.style.backgroundColor = "white";
        }
    }
}

