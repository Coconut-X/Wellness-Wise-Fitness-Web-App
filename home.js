
function login()
{
    document.getElementsByClassName("loginPage")[0].style.visibility="visible";
    document.getElementsByClassName("signupPage")[0].style.visibility="hidden";
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
   
}

function signup()
{
    document.getElementsByClassName("signupPage")[0].style.visibility="visible";
    document.getElementsByClassName("loginPage")[0].style.visibility="hidden";
}

function myFunction(x) {
    x.classList.toggle("change");
    var menu = document.getElementsByClassName("minimenu")[0];
   menu.style.visibility = (menu.style.visibility == "visible") ? "hidden" : "visible";
}

function closeForm()
{
    document.getElementsByClassName("loginPage")[0].style.visibility="hidden";
    document.getElementsByClassName("signupPage")[0].style.visibility="hidden";
}