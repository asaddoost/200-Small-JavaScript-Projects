
const intro = document.querySelector('.intro');
const TextLogo = document.querySelectorAll('.logo');

window.addEventListener('load', () =>{


// ------- show text---------
    setTimeout(()=>{
        TextLogo.forEach((Logo,inx)=>{
            setTimeout(()=>{
                Logo.classList.add('showLogo')
            },(inx+1)*400)
        }) 
    })

    // ----- remove text ------------
    setTimeout(()=>{
       TextLogo.forEach((Logo, inx) => {
           setTimeout(()=>{
               Logo.classList.remove('showLogo');
               Logo.classList.add('fade');
           },(inx+1)*50)
       }) 
    }, 2000)

    // ------  remove intro-------
    setTimeout(()=>{
        intro.style.top = '-100vh'
    },2300)
})