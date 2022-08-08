const container = document.querySelector('#container');
window.onmousemove = function(e){
    let x = e.clientX / 10;
    let y = e.clientY / 10;
    container.style.backgroundPositionX = x + 'px';
    container.style.backgroundPositionY = y + 'px';
}
