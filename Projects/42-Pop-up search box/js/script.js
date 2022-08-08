const  searchIcon = document.querySelector('.small-box');
const popup = document.querySelector('.form-group');
const overlay = document.querySelector('.overlay');

searchIcon.addEventListener('click', function(){
    overlay.classList.add('showBox');
    popup.classList.add('showBox');
    
})

overlay.addEventListener('click', function(){
    overlay.classList.remove('showBox');
    popup.classList.remove('showBox');
    
})
