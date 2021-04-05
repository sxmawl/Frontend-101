
//////////////////////////////////// Dealing With Cells ////////////////////////////////


let gameState = false;
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













function slide(direction){

    if(!gameState){
        return false;
    }

    gameState = false;
    console.log(`You pressed ${direction} key.`);

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