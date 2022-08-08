const textarea = document.querySelector('textarea');

textarea.addEventListener('keyup', e => {
    let Height = e.target.scrollHeight;
    textarea.style.height = `${Height}px`
})