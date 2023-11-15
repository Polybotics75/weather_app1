function loadApp(){
    var splashScreen = document.querySelector('main.main-splash');
    var mainWrapper = document.querySelector('.wrapper');
    var body = document.querySelector('body');
    setTimeout(() => {
        splashScreen.style.display = "none";
        mainWrapper.style.display = "block";
        body.style.background = "var(--primary)";
    }, 5000);
}

window.onload = loadApp();