const navToggler = document.querySelector('.toggler');




navToggler.addEventListener('click', showMenu); 


    function showMenu(){
        // --- open and clase btn ----
        navToggler.classList.toggle('active');
        // ---------------------------------
        const nav = document.querySelector('.nav');
        nav.classList.toggle('showNav');
        if(nav.classList.contains('showNav')){
            nav.style.height = nav.scrollHeight + 'px';
        }else {
            nav.style.height = '0';
        }
    }

