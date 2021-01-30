const increaseButton= document.getElementById('first-class-increase');
increaseButton.addEventListener('click',function(){
    const inputValue=document.getElementById("first-class-input");
    const numberParsing=parseInt(inputValue.value);
   const newInputValue= numberParsing+1;
   inputValue.value=newInputValue;
})


 