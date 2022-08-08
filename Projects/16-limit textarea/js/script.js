
const textarea = document.querySelector('#textarea');
const remaning = document.querySelector('#textarea-remaining');
let MAX_CHARS= 250;


textarea.addEventListener('input', ()=>{
    const totalText = MAX_CHARS - textarea.value.length;
    const color = totalText < 25 ? 'red':null;
    remaning.textContent = `The remaining characters ${totalText}`;
    remaning.style.color = color;
    if(totalText === 0){
        remaning.textContent = `The number of characters is complete ${totalText}`
    }
})

