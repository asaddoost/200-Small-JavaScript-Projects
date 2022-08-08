const text = ['Front-end Developer','Web Designer','UI/UX Designer'];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";


(function type(){

    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

   document.querySelector('.type').textContent = letter;
    console.log(index)
   if(letter.length === currentText.length){
       count++;
       index =0;
   }

   setTimeout(type, 500)

})()


// این مدل  نوشتن تابع باعث میشه خود تابع خودکار همیشه اجرا شود
()();