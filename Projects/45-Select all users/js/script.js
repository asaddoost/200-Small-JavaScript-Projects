

const selectAll = document.getElementById('selectAll');
const select = document.querySelectorAll('#select');
const btn = document.querySelector('.remove-all-btn');

selectAll.onclick = ()=>{
    if(selectAll.checked == true){
        for(i=0;i<select.length;i++){
            select[i].checked = true;
            btn.classList.add('showBtn');
        }
    }else{
        for(i=0;i<select.length;i++){
            select[i].checked = false;
            btn.classList.remove('showBtn');
        }
    }
}