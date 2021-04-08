
function cellColor(){

    let numberArray = document.querySelectorAll(".dynamicNumber");

    for (let i = 0; i < numberArray.length ; i++) {
        
        switch (numberArray[i].dataset.value) {
        
        case "2":
            numberArray[i].style.backgroundColor = "#eee3d6"
                break;

        case "4":
            numberArray[i].style.backgroundColor = "#ede0c8" 
                break;

        case "8":
            numberArray[i].style.backgroundColor = "#f2b179" 
                break;

        case "16":
            numberArray[i].style.backgroundColor = "#f59563"
                break;

        case "32":
            numberArray[i].style.backgroundColor = "#f67e5f"
                break;

        case "64":
            numberArray[i].style.backgroundColor = "#f65e3b"
                break;

        case "128":
            numberArray[i].style.backgroundColor = "#f1d96b"
                break;

        case "256":
            numberArray[i].style.backgroundColor = "#f2cf4d"
                break;

        case "512":
            numberArray[i].style.backgroundColor = "#e5c12b"
                break;

        case "1024":
            numberArray[i].style.backgroundColor = "#dfba12"
                break;

        case "2048":
            numberArray[i].style.backgroundColor = "#edc501"
                break;        
        
            default:
                break;
        }
        
    }


}
//////////////////////////////////// Dealing With Cells ////////////////////////////////


let gameState = true;
let cellArr =[]
let gridBox = document.querySelector(".grid");


function drawGrid(){
 
    const cellElements = document.querySelectorAll(".cell");
    let cellPosition = 1;

    for(let cellItem of cellElements){

        cellArr[cellPosition] = {

            element: cellItem,
            top: cellItem.offsetTop,
            left: cellItem.offsetLeft,
            number: null

        }

        cellPosition++
    }

}

/////////////////////////////// Random Empty Cell Index //////////////////////////////


function arbitaryEmptyCellPosition(){

    let emptyCellArr = [];

    for (let i = 1; i < cellArr.length; i++) {

        if( cellArr[i].number == null ) emptyCellArr.push(i);

    }

    if( emptyCellArr.length == 0 ) {return false};
     
    console.log("Arbit Empty");
    console.log(Math.floor( Math.random() * (cellArr.length - 1) ));
    console.log("Empty Arr");
    console.log(emptyCellArr);
    return emptyCellArr[ Math.floor( Math.random() * (emptyCellArr.length - 1) )]

}


/////////////////////////////// Dealing With Numbers ///////////////////////////////

let numbers = [] 


function handleNumbers(){

    const numberItems = document.querySelectorAll(".dynamicNumber");

    for(let numberItem of numberItems){
        numbers.push(numberItem);
    }

}

///////////////////////// Drawing Random Number in Random Empty Cell ///////////////////////


function renderArbitaryNumber(){
    
    const emptyCellPosition = arbitaryEmptyCellPosition();

    if (emptyCellPosition == false) {
        return false;
    }

    const newNumberDiv = document.createElement("div")
    const num = 2;

    newNumberDiv.innerText = num;
    newNumberDiv.dataset.value = num;
    newNumberDiv.classList.add("dynamicNumber");
    

    console.log("Empty " + emptyCellPosition);

    newNumberDiv.style.top = `${cellArr[emptyCellPosition].top}px`
    newNumberDiv.style.left = `${cellArr[emptyCellPosition].left}px`
    
    cellArr[emptyCellPosition].number = newNumberDiv;
    gridBox.append(newNumberDiv);

    

    return true;
}

//////////////////////////////////// Moving Cells After Checking Cells /////////////////////////

function moveToCell(from, to){
   

    const number = from.number;
    // console.log(number);

    if(to.number == null){

        number.style.top = ` ${to.element.offsetTop}px `;
        number.style.left = ` ${to.element.offsetLeft}px `;
        
        from.number = null;
        to.number = number;

    }

    else if ( number.dataset.value == to.number.dataset.value ){

        number.style.top = `${to.offsetTop}px`;
        number.style.left = `${to.offsetLeft}px`;
        number.style.opacity = `0`;

        setTimeout(function(){
            gridBox.removeChild(number)
        }, 500)

         to.number.dataset.value *= 2 ;
         to.number.innerText = to.number.dataset.value;   

         from.number = null;
   
    }else{
        console.log("F ho gya")
    }

}




//////////////////////////// Checking if cells in one row/column Merge //////////////////////////

function checkMerge(direction){


    // Indexes of cells at the end of row/column

    const directionEndpoints = {
        'UP': [1, 2, 3, 4],
        'DOWN': [13,14,15,16],
        'LEFT': [1,5,9,13],
        'RIGHT': [4,8,12,16]
    }

    const roots = directionEndpoints[direction]

    let indicator = (direction == 'RIGHT' || direction == 'DOWN') ? -1 : 1
    
    indicator *= (direction == 'UP' || direction == 'DOWN') ? 4 : 1

    for (let i = 0; i < roots.length ; i++) {
        
        const root = roots[i]


    // root is index of end of one row or column
    // Now this loop will check whole row/column in the respective direction 
    // with the help of indicator 


        for (let j = 1; j < 4; j++) {
            
            const startCellIndex = root + (j * indicator);
            const startCell = cellArr[startCellIndex];
             
            //Checking all the cells in one row/column from 
            // jth to root cell iteratively

            if (startCell.number != null){

                let dynamicCell = null;

                for (let k = j-1; k >= 0 ; k--) {

                    
                    const priorCellIndex = root + (k * indicator) 
                    
                    const priorCell = cellArr[priorCellIndex]
    
                    if (priorCell.number == null){

                        // In the user-specified direction, cell is empty go on... 
                        dynamicCell = priorCell; 
                        
                    }
                    else if(priorCell.number.dataset.value == startCell.number.dataset.value){

                        // We need to merge these two now 
                        dynamicCell = priorCell;
                        break;

                    }
                    else{
                        // Cells are different but adjacent so no prob 2 guys chillin
                        break;
                    }

                }
                
                if(dynamicCell != null){
                    moveToCell ( startCell ,dynamicCell );
                }

            }
            
        }

        
    }

    setTimeout(()=>{

        if(renderArbitaryNumber()){
            gameState =true;
            cellColor();
        }else{
            alert("Game Over")
            gameState=true;
        }

    },100)




}





function slide(direction){

    if(!gameState){
        return false;
    }

    gameState = false;
    console.log(`You pressed ${direction} key.`);

    checkMerge(direction);

}

drawGrid()
renderArbitaryNumber()





///////////////////////////////////////// Event Listener ///////////////////////////////////////////




document.addEventListener("keydown", (event) => {
    let direction = null;

    switch (event.key) {
        case "ArrowUp":
            direction = "UP"
            break;

        case "ArrowDown":
            direction = "DOWN"
            break;
            
        case "ArrowRight":
            direction = "RIGHT"
            break;

        case "ArrowLeft":
            direction = "LEFT"
            break;
                
        default:
            break;
    }


    if(direction != null){
        slide(direction);
    }
    
})
