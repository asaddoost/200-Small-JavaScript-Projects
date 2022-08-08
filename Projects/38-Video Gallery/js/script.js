const videoPlayer = document.querySelector('#videoPlayer');
const myVideo = document.querySelector('#myVideo');
const close = document.querySelector('.close-btn');

function playVideo(file){
    myVideo.src = file
    videoPlayer.style.display = 'block';
}

close.addEventListener('click', function(){
    videoPlayer.style.display = 'none';
})