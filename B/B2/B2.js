let shiftState = 0;
let inputArr = document.querySelectorAll("input");


function handleClick(index){


    if(shiftState){
        latestCheckedIndex = index;
      checkRemaining()
    }else{
       prevCheckedIndex = index;
    }
     

}


function checkRemaining(){
    if(prevCheckedIndex<latestCheckedIndex){
        for (let i = prevCheckedIndex; i <= latestCheckedIndex; i++) {
            
         inputArr[i].checked = true;
            
        }
     }
     else{
         for (let i = latestCheckedIndex; i <= prevCheckedIndex; i++) {
            
             inputArr[i].checked = true;
                
            }
     }
}




document.addEventListener("keydown",(event)=>{
    if(event.key == "Shift"){
       shiftState = 1;
       console.log(shiftState);
    }
})

document.addEventListener("keyup",(event)=>{
    if(event.key == "Shift"){
       shiftState = 0;
       console.log(shiftState);
    }
})

// for (let i = 0; i < inputArr.length; i++) {
//     inputArr[i].addEventListener("click",function(){
//         var str = this.outerHTML
//         console.log(inputArr);

//     })   
// }

function handleRisk(){
    alert("You've been rick-rolled!");
}