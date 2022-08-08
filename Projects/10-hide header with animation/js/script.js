const header = document.querySelector('.header');

window.addEventListener('scroll', function(){
    header.style.opacity = 1 - +window.pageYOffset/900;
})