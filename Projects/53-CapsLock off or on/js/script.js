const password = document.querySelector('#password');
const alert = document.querySelector('#alert');


password.addEventListener('keyup', function(e){
    if(e.getModifierState('CapsLock')){
        alert.style.opacity = "1"
    }else{
        alert.style.opacity = "0"
    }
})
