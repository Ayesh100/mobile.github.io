const mobileNav = document.querySelector(".mobile-navbar-button")
const navHeader = document.querySelector(".header")
const toggleNavbar = () => {
    navHeader.classList.toggle("active")
};

mobileNav.addEventListener("click",() => toggleNavbar())



window.addEventListener('scroll',reveal)
function reveal(){
    var reveals = document.querySelectorAll(".reveal")
    for(i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 200;
        if(revealTop < windowHeight - revealPoint){
        reveals[i].classList.add('show')
    }

    }
}