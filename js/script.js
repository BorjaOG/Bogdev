window.addEventListener("orientationchange", function() {
    if (window.orientation === 90 || window.orientation === -90) {
        // La orientación es horizontal, forzar la orientación vertical
        if (screen.orientation.lock) {
            screen.orientation.lock("portrait");
        }
    }
});



const header = document.querySelector("header");

window.addEventListener("scroll", function(){
header.classList.toggle("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};