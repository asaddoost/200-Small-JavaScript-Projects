const imgBox = document.querySelectorAll('.box-img');

imgBox.forEach(popup => popup.addEventListener('click', function(){
    popup.classList.toggle('active');
}))


// اگر یک عکس بود از روش زیر
// imgBox.addEventListener('click', ()=>{
//     imgBox.classList.toggle('active');
// })