function checkLength(){
    const textarea = document.getElementById('mytextarea');
    const charCount = document.getElementById('charCount');
    const maxLength = 250;  

    textarea.addEventListener('input', () => {
        const currentLength = textarea.value.length; 
        if(currentLength == maxLength){
            textarea.style.border = '2px solid red';
            charCount.textContent = `${currentLength} / ${maxLength}`;
           
        }else if(currentLength > maxLength){
            textarea.style.border = '2px solid red';
            textarea.value = textarea.value.substring(0,maxLength);
           
        }else if(currentLength < maxLength){
            textarea.style.border = '2px solid black';
            charCount.textContent = `${currentLength} / ${maxLength}`;
            
        }
    }); 

}


checkLength();