
function getInputValue(id,whichCase){
    const inputValue=document.getElementById(id);
    const numberParsing=parseInt(inputValue.value);
    var newInputValue=numberParsing;
    if(whichCase==true){
       newInputValue  = numberParsing+1;
    }
    if(whichCase== false && newInputValue>0 )
      {
           newInputValue=numberParsing-1;
      } 
    inputValue.value=newInputValue;
   return  newInputValue;
}

// first class total
function firstClassTotal(inputValue){
   const total= inputValue*150;
   return total;
}
// eco class total 
function economyClassTotal(inputValue){
    const total=inputValue*100;
    return total;
}
 function total(){
     
 }






    
    const firstClassIncrease= document.getElementById('first-class-increase');
firstClassIncrease.addEventListener('click',function(){
  const increase=  getInputValue("first-class-input",true);
const total= firstClassTotal(increase);
 console.log(total)
    
})



const firstClassDecrease= document.getElementById('first-class-decrease')
firstClassDecrease.addEventListener('click',function(){
   const decrease=  getInputValue("first-class-input",false)
     const total= firstClassTotal(decrease);
    console.log(total)
})

  
    const economyClassIncrease= document.getElementById("economy-class-increase");
economyClassIncrease.addEventListener('click',function(){
 const increase=  getInputValue("economy-class-input",true);
  const total= economyClassTotal(increase);
 console.log(total)
})



const economyClassDecrease= document.getElementById("economy-class-decrease")
economyClassDecrease.addEventListener('click',function(){
   const decrease=  getInputValue("economy-class-input",false);
  const total= economyClassTotal(decrease);
   console.log(total)
})


