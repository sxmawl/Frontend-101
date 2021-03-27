let items=["Wake Up, My Frend"];




function renderItems(){
    document.querySelector('.items-wrapper').innerHTML = "";
    for (let i = 0; i < items.length; i++) {
        document.querySelector('.items-wrapper').innerHTML += "<div class='item'>" + 
        "<input type='checkbox'>" +
        "<p>" + items[i] + "</p>"+
        "<input type='submit' value='-' onclick='removeItem("+ i + " )'></input>"
    }    
}




window.onload = () =>{
    if(JSON.parse(localStorage.getItem("items")) != null){
    items = JSON.parse(localStorage.getItem("items"));
    console.log(items);
    renderItems();
    }
}





function addItem(){

    items.push(document.querySelector('.input-item').value);
    console.log(items);
    localStorage.setItem("items",JSON.stringify(items));
    // localStorage.setItem("itemArr",items);
    renderItems();

}



function removeItem(index){

    items.splice(index,1);
    localStorage.setItem("items",JSON.stringify(items));
    renderItems();

}