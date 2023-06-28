let modal = document.getElementById("opening");

let span = document.getElementsByClassName("close")[0];

let changeColor = document.getElementById('changeColor');

//let visitor = prompt("who arth thou?");

if (visitor == null || visitor == "") {
    visitor = "Tenno";
}

document.getElementById("visitor").innerText = visitor;

function activeHome() {
    document.getElementById("home").className = "navItem navActive";
    document.getElementById("profile").className = "navItem";
    document.getElementById("register").className = "navItem";
}
function activeProfile() {
    document.getElementById("home").className = "navItem";
    document.getElementById("profile").className = "navItem navActive";
    document.getElementById("register").className = "navItem";
}
function activeRegister() {
    document.getElementById("home").className = "navItem";
    document.getElementById("profile").className = "navItem";
    document.getElementById("register").className = "navItem navActive";
}

function openModal() {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function hello() {
    alert("Hello, " + visitor);
}

function activateBurger() {
    var burgerMenu = document.getElementById("burgerMenu");
    if (burgerMenu.style.display === "block") {
        burgerMenu.style.display = "none";
    } else {
        burgerMenu.style.display = "block";
        burgerMenu.style.height = "100%";
        burgerMenu.style.transition = "0.5s ease";
    }
}

setInterval(() => {
    let color = changeColor.value;
    document.getElementById("wrapperForm").style.backgroundColor = color;
}, 10);

(function () {
    var toggler = document.querySelector('.theme-toggler input[type="checkbox"]'),
        root = document.documentElement,
        currentTheme = localStorage.getItem('theme') || "dark";

    if (currentTheme == "light") toggler.removeAttribute('checked');

    else toggler.checked = "true";
    root.setAttribute('data-theme', currentTheme);

    toggler.addEventListener('change', toggleTheme, false);

    function toggleTheme(e) {
        if (this.checked) {
            root.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }

        else {
            root.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');

        }
    }
})();

(function () {
    var toggler = document.querySelector('.font-toggler input[type="checkbox"]'),
        root = document.documentElement,
        currentFont = localStorage.getItem('font') || "orokin";

    if (currentFont == "normal") toggler.removeAttribute('checked');

    else toggler.checked = "true";
    root.setAttribute('data-font', currentFont);

    toggler.addEventListener('change', toggleFont, false);

    function toggleFont(e) {
        if (this.checked) {
            root.setAttribute('data-theme', 'orokin');
            localStorage.setItem('font', 'orokin');
        }

        else {
            root.setAttribute('data-theme', 'normal');
            localStorage.setItem('font', 'normal');

        }
    }
})();