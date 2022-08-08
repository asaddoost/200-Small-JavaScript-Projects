const btn = document.querySelector('.btn');

const nav = document.querySelector('.nav');

btn.addEventListener('click', ()=> {
    btn.classList.toggle('btnClose');
    nav.classList.toggle('show');
})
