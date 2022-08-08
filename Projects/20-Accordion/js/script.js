const show = document.querySelectorAll('.accordion-title');

show.forEach(item => {
    item.addEventListener('click', function(){
        item.classList.toggle('active');
        const content = item.nextElementSibling;
        if(content.style.height){
            content.style.height = null
        }else{
            content.style.height = content.scrollHeight + 'px';
        }
    })
})