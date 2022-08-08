const dragArea = document.querySelector('.drag-area');
const header = document.querySelector('.title');
const button = document.querySelector('.btn');
const input = document.querySelector('.input');
let file;


button.onclick = () =>{
    input.click();
}


input.addEventListener("change", function(){
    file = this.files[0];
    showImage();
    dragArea.classList.add('active');
})

dragArea.addEventListener('dragover', function(event){
    // console.log('file entered')
    event.preventDefault()
    dragArea.classList.add('active');
    header.textContent = "The file is ready to be published"
})

dragArea.addEventListener('dragleave', function(){
    // console.log('file exited')
    dragArea.classList.remove('active')
    header.textContent= "for uploading drag and drop"
})


dragArea.addEventListener('drop', function(event){
    // console.log('file drop')
    event.preventDefault();
    file = event.dataTransfer.files[0];
    showImage()
})


function showImage(){
    let fileType = file.type;
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
    if(validExtensions.includes(fileType)){
        let fileReader = new FileReader();
        fileReader.onload = ()=>{
            let fileURL = fileReader.result;
            let imgTag = `<img src="${fileURL}" />`;
            dragArea.innerHTML = imgTag
        }

        fileReader.readAsDataURL(file);
    }else{
       alert("your file not a picture!")
       dragArea.classList.remove('active');
    }
}
