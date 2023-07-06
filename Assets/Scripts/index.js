function activeHome() {
    document.getElementById("home").className = "navItem navActive";
    document.getElementById("possibility").className = "navItem";
    document.getElementById("register").className = "navItem";
}
function activePossibility() {
    document.getElementById("home").className = "navItem";
    document.getElementById("possibility").className = "navItem navActive";
    document.getElementById("register").className = "navItem";
}
function activeRegister() {
    document.getElementById("home").className = "navItem";
    document.getElementById("possibility").className = "navItem";
    document.getElementById("register").className = "navItem navActive";
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

//set light and dark
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