

const indicator = document.querySelector('.indicator').children;
const products = document.querySelector('.container').children;

for(let i=0; i<indicator.length;i++){
    indicator[i].onclick = function(){
        for(let x = 0; x < indicator.length;x++){
            indicator[x].classList.remove('active');
        }
        this.classList.add('active');
        const displayItem = this.getAttribute('data-filter');
        for(let z =0; z<products.length;z++){
            products[z].style.transform = 'scale(0)';
            setTimeout(()=>{
                products[z].style.display = 'none';
            },500)

            if(products[z].getAttribute('data-category') == displayItem || displayItem == 'all'){
                products[z].style.transform = 'scale(1)';
                setTimeout(()=>{
                    products[z].style.display = 'block';
                },500)
            }
        }
    }
}