



function grandTotal(subtotal,vat){
const totalGrand=subtotal+vat;
document.getElementById("grand-total").innerText="$"+totalGrand;
 const showTotal=  document.getElementById("show-total");
 showTotal.innerText="$"+totalGrand;;
console.log(totalGrand);

}
  function vatCount(subTotal){
       const vat=subTotal*.10;
       document.getElementById('vat-count').innerText="$"+vat;
       const showVat=  document.getElementById("show-vat");
       showVat.innerText="$"+vat;
       return vat;
  }
 function subTotal(whichCase,caseCount,newCaseCount){
     let caseTotal=caseCount;
     let ecoCaseTotal=newCaseCount;
     if(whichCase==true){
     caseTotal=caseCount*150;
     ecoCaseTotal=newCaseCount*100; 
     }
     if(whichCase==false){
     caseTotal=caseCount*100;
     ecoCaseTotal=newCaseCount*150;
    
     }
     const  subTotal= document.getElementById('sub-total');
     const  totalSubTotal=ecoCaseTotal+caseTotal
     subTotal.innerText='$'+totalSubTotal;
     const showSubTotal=  document.getElementById("show-subtotal");
     showSubTotal.innerText='$'+totalSubTotal;
    return totalSubTotal;
 }

 function caseClick( isIncrease){
    const caseInput= document.getElementById('first-class-input');
    const caseCount= parseInt(caseInput.value);
    const ecoCaseInput=document.getElementById("economy-class-input").value;
    let ecoCaseNewCount=parseInt(ecoCaseInput);
    let caseNewCount=caseCount

 if(isIncrease==true){
    caseNewCount= caseCount+1;
    caseInput.value=caseNewCount;


    }
    if(isIncrease==false){
     if(caseCount>0){
     caseNewCount= caseCount-1;
    caseInput.value=caseNewCount;
     }}
    const firstClassSeat= document.getElementById("first-class-seat");
    firstClassSeat.innerText= caseNewCount;
  const subTotalCost= subTotal(true,caseNewCount,ecoCaseNewCount)
  const vat =vatCount(subTotalCost);
  grandTotal(subTotalCost,vat);
 }
  function economyCaseClick( isIncrease){
    const caseInput= document.getElementById('economy-class-input');
    const caseCount= parseInt(caseInput.value);
    const firstCaseInput=document.getElementById("first-class-input").value;
    let firstCaseNewCount=parseInt(firstCaseInput);
    let caseNewCount=caseCount

 if(isIncrease==true){
    caseNewCount= caseCount+1;
    caseInput.value=caseNewCount;

    }
    if(isIncrease==false){
     if(caseCount>0){
     caseNewCount= caseCount-1;
    caseInput.value=caseNewCount;
     }}
     const economyClassSeat= document.getElementById("economy-class-set");
    economyClassSeat.innerText= caseNewCount;
      const subTotalCost= subTotal(false,caseNewCount,firstCaseNewCount)
      const vat=vatCount(subTotalCost);
       grandTotal(subTotalCost,vat)
 
 }





  document.getElementById('book-now').addEventListener('click',function(){
      document.body.style.background="whitesmoke"; 
     let confirmId= document.getElementById("confirm-section");
    let mainId=document.getElementById('main');
      let headerId= document.getElementById("header");
      mainId.style.display ="none";
     headerId.style.color="blue"
     headerId.style.backgroundColor="black"
     confirmId.style.display="block";
      
    //   document.body.style.color="black"
   
getDetails();
    
  })

 function getDetails(){
    const departureDate =document.getElementById("departure-date").value;
   const showDeparture=document.getElementById("departure");
     showDeparture.innerText=   departureDate;
  const returnDate =document.getElementById("return-date").value;
   const showReturn=document.getElementById("return");
     showReturn.innerText=   returnDate;

 }




// function getInputValue(id,isIncrease){
//     const inputValue=document.getElementById(id);
//     const numberParsing=parseInt(inputValue.value);
//     var newInputValue=numberParsing;
//     if(isIncrease==true){
//        newInputValue  = numberParsing+1;
//     }
//     if(isIncrease== false && newInputValue>0 )
//       {
//            newInputValue=numberParsing-1;
//       } 
//     inputValue.value=newInputValue;
//    return  newInputValue;
// }

// // first class total
// function firstClassTotal(inputValue){
//    const total= inputValue*150;
//    return total;
// }
// // eco class total 
// function economyClassTotal(inputValue){
//     const total=inputValue*100;
//     return total;
// }
// function totalCalculation(input1,input2){
//     const total =firstClassTotal(input1)+economyClassTotal(input2);
//     console.log(total);
// }

// // function firstClass(isIncrease,isEconomy){
// // let total2;
// // let total1;
// //  if(isEconomy==true){
// //         if(isIncrease==true){
// //         const increase=  getInputValue("economy-class-input",isIncrease);
// //      total2= economyClassTotal(increase);
// //     }if(isIncrease==false){
// //         const decrease=  getInputValue("economy-class-input",false);
// //    total2+= economyClassTotal(decrease);
// //     }
// //  }

// // if(isEconomy==false){
// //         if(isIncrease==true){
// // const increase=  getInputValue("first-class-input",isIncrease);
// //  total1= firstClassTotal(increase);
// //     } if(isIncrease==false){
// //         const decrease=  getInputValue("first-class-input",isIncrease)
// //      total1+= firstClassTotal(decrease);
// //     }

// // }
// //  console.log(total2+total1); 

// // }

// // function economyClass(isIncrease){
// //     if(isIncrease==true){
// //         const increase=  getInputValue("economy-class-input",isIncrease);
// //      total2= economyClassTotal(increase);
// //     }if(isIncrease==false){
// //         const decrease=  getInputValue("economy-class-input",false);
// //    total2= economyClassTotal(decrease);
// //     }
// //     console.log(total2);
// // }

    
// const firstClassIncrease= document.getElementById('first-class-increase');
// firstClassIncrease.addEventListener('click',function(){
// const increase=  getInputValue("first-class-input",true);
// const total= firstClassTotal(increase);
//  totalCalculation(total,0)
    
// })

// // function firstDecrease(){
// //     const decrease=  getInputValue("first-class-input",false)
// //     const total= firstClassTotal(decrease);
// //     console.log(total)
// // }

// const firstClassDecrease= document.getElementById('first-class-decrease')
// firstClassDecrease.addEventListener('click',function(){
// const decrease=  getInputValue("first-class-input",false)
//     const total= firstClassTotal(decrease);
//     totalCalculation(total,0)
// })

  
// //  function economyIncrease(){
// //      const increase=  getInputValue("economy-class-input",true);
// //     const total= economyClassTotal(increase);
// //     console.log(total)
// //  }
//     const economyClassIncrease= document.getElementById("economy-class-increase");
//     economyClassIncrease.addEventListener('click',function(){
//     const increase=  getInputValue("economy-class-input",true);
//     const total= economyClassTotal(increase);
//     totalCalculation(0,total)
// })


// // function economyDecrease(){
// //    const decrease=  getInputValue("economy-class-input",false);
// //    const total= economyClassTotal(decrease);
// //    console.log(total) 
// // }
// const economyClassDecrease= document.getElementById("economy-class-decrease")
// economyClassDecrease.addEventListener('click',function(){
//    const decrease=  getInputValue("economy-class-input",false);
//    const total= economyClassTotal(decrease);
//    totalCalculation(0,total)
// })




// document.getElementById("first-class-increase").addEventListener('click',function(){
//     const caseInput= document.getElementById('first-class-input');
//     const caseCount= parseInt(caseInput.value);
//     const ecoCaseInput=document.getElementById("economy-class-input").value;
//     const ecoCaseNewCount=parseInt(ecoCaseInput);
//     const caseNewCount= caseCount+1;
//     caseInput.value=caseNewCount;
//     const ecoCaseTotal=ecoCaseNewCount*100;
//     const caseTotal=caseNewCount*150;
//     const  subTotal= document.getElementById('sub-total');
//     const  totalSubTotal=ecoCaseTotal+caseTotal
//     subTotal.innerText='$'+totalSubTotal;

// })
// document.getElementById('first-class-decrease').addEventListener('click',function(){
//     const caseInput= document.getElementById("first-class-input");
//     const caseCount= parseInt(caseInput.value);
//     const ecoCaseInput=document.getElementById("economy-class-input").value;
//     const ecoCaseNewCount=parseInt(ecoCaseInput);
//     if(caseCount>0){
//     const caseNewCount= caseCount-1;
//     caseInput.value=caseNewCount
//     const ecoCaseTotal=ecoCaseNewCount*100;
//     const  caseTotal=caseNewCount*150;
//     const subTotal= document.getElementById("sub-total");
//     const  totalSubTotal=ecoCaseTotal+caseTotal
//     subTotal.innerText='$'+totalSubTotal;
//     }

// })





// document.getElementById("economy-class-increase").addEventListener('click',function(){
//     const caseInput= document.getElementById('economy-class-input');
//     const caseCount= parseInt(caseInput.value);
//     const caseNewCount= caseCount+1;
//      const firstCaseInput=document.getElementById("first-class-input").value;
//      const firstCaseNewCount=parseInt(firstCaseInput);
    
//     caseInput.value=caseNewCount;
//     const caseTotal=caseNewCount*100;
//     const firstClassTotal=firstCaseNewCount*150;
//     //console.log(caseNewCount);
//    const  subTotal= document.getElementById('sub-total');
//   const  totalSubTotal=firstClassTotal+caseTotal
//    subTotal.innerText='$'+totalSubTotal;

// })
// document.getElementById('economy-class-decrease').addEventListener('click',function(){
//     const caseInput= document.getElementById("economy-class-input");
//     const caseCount= parseInt(caseInput.value);
//      const firstCaseInput=document.getElementById("first-class-input").value;
//      const firstCaseNewCount=parseInt(firstCaseInput);
//     if(caseCount>0){
//      const caseNewCount= caseCount-1;
//       caseInput.value=caseNewCount
//       const caseTotal=caseNewCount*100;
//      const  firstClassTotal=firstCaseNewCount*150;
//      const subTotal= document.getElementById("sub-total");
//       const  totalSubTotal=caseTotal+firstClassTotal
//    subTotal.innerText='$'+totalSubTotal;
//     }

// })