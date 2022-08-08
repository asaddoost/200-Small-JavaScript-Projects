const counters = document.querySelectorAll('.counter');

counters.forEach(counter =>{
    counter.innerText = '0';

    const updateCounter = () =>{
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increase = target / 1000;

        if(c < target){
            counter.innerText = Math.ceil(c + increase);
            setTimeout(updateCounter, 1)
        }else {
            counter.innerText = target
        }
    }

    updateCounter() 
})




// گذاشتن(+) پشت کانتر باعث می شود که رشته تبدیل به عدد شود

// - تابع جهت رند کردن اعداد خروجی و اینکه اعشاری محاسبه نکند( تابعMath.ceil())