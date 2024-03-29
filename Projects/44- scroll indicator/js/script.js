const progressSection = document.querySelector('.progress-section');
const progressBar = document.querySelector('.progress-bar');
const progressNum = document.querySelector('.num');


// -------- move mouse -------
let x,y;

window.addEventListener('mousemove', function(e){
    x = e.clientX;
    y = e.clientY;
})

// -----------------------------


function updateProgressBar(){
    // ----- move mose ----------
    progressSection.style.transform = `translate(${x}px, ${y}px)`;
    // --------------------
    progressBar.style.height = `${getScrollPercentage()}%`;
    progressNum.innerText = `${Math.ceil(getScrollPercentage())}%`;
    requestAnimationFrame(updateProgressBar);
}

function getScrollPercentage(){
    return  (  (window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100);
}

updateProgressBar();