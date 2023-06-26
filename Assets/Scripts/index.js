let modal = document.getElementById("opening");

let span = document.getElementsByClassName("close")[0];

//let visitor = prompt("who arth thou?");

if (visitor == null || visitor == "") {
    visitor = "Tenno";
}
document.getElementById("visitor").innerText = visitor;

function activeHome(){
    document.getElementById("home").className = "navItem navActive";
    document.getElementById("profile").className = "navItem";
    document.getElementById("register").className = "navItem";
}
function activeProfile(){
    document.getElementById("home").className = "navItem";
    document.getElementById("profile").className = "navItem navActive";
    document.getElementById("register").className = "navItem";
}
function activeRegister(){
    document.getElementById("home").className = "navItem";
    document.getElementById("profile").className = "navItem";
    document.getElementById("register").className = "navItem navActive";
}

function easterEgg(){
    let audio = new Audio('images/sound.mp3');
    audio.play();
}

function openModal(){
    modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

function hello(){
    alert("Hello, " + visitor);
}

function activateBurger(){
    var burgerMenu = document.getElementById("burgerMenu");
    if (burgerMenu.style.display === "block") {
        burgerMenu.style.display = "none";
    } else {
        burgerMenu.style.display = "block";
    }
}

