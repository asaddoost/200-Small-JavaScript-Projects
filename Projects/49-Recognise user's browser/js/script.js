let userAgent = navigator.userAgent;


let browser;

if(userAgent.match(/edg/i)){
    browser = "edge";
}else if(userAgent.match(/firefox/i)){
    browser = "firefox";
}else if(userAgent.match(/opr/i)){
    browser = "opera";
}else if(userAgent.match(/chrome/i)){
    browser = "chorom";
}else{
    alert('othre')
}


const logo = document.querySelector(`.logo .${browser}`)

if(logo != ""){
    logo.style.opacity = "1";
}