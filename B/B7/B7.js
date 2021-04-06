
//////////////////////////////////// Dealing With Cells ////////////////////////////////


let gameState = true;
let cellArr =[]
let gridBox = document.querySelector(".grid");


function drawGrid(){
 
    const cellElements = document.querySelectorAll(".cell");
    let cellPosition = 0;

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

    for (let i = 0; i < cellArr.length; i++) {

        if( cellArr[i].number == null ) emptyCellArr.push(i);

    }

    if( emptyCellArr.length == 0 ) return false;

    return emptyCellArr[ Math.floor( Math.random() * cellArr.length) ]

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
    

    newNumberDiv.style.top = `${cellArr[emptyCellPosition].top}px`
    newNumberDiv.style.left = `${cellArr[emptyCellPosition].left}px`

    cellArr[emptyCellPosition].number = num;
    gridBox.append(newNumberDiv);

    console.log(emptyCellPosition);

    return true;
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

    indicator = (direction == 'UP' || direction == 'DOWN') ? 4 : 1

    for (let i = 0; i < roots.length ; i++) {
        
        const root = roots[i]


    // root is index of end of one row or column
    // Now this loop will check whole row/column in the respective direction 
    // with the help of indicator 


        for (let j = 1; j < 4; j++) {
            
            const destinationCellIndex = roots + (j * indicator)
            const destinationCell = cellArr[destinationCellIndex];

            //Checking all the cells in one row/column from 
            // jth to root cell iteratively

            if (destinationCell.number != null){
                let moveToCell = null;

                for (let k = j-1; k >= 0 ; k--) {

                    
                    const priorCellIndex = root + (k * indicator) 
                    const priorCell = cellArr[priorCellIndex]
                     
                    if (priorCell.number == null){

                        // In the user-specified direction, cell is empty go on... 
                        moveToCell = priorCell; 

                    }else if(priorCell.dataset.value == destinationCell.dataset.value){

                        // We need to merge these two now 

                    }else{
                        // Cells are different but adjacent so no prob 2 guys chillin
                    }


                }

            }
            
        }

        
    }

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