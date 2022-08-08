const progress = document.querySelector('.progress-bar');

window.addEventListener('scroll', ()=>{
    const downScroll = window.pageYOffset;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = downScroll/ height * 100;
    progress.style.width = `${scrolled}%`;
})