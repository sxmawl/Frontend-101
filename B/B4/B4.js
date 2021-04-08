
const listItems = document.querySelectorAll('a');


function handleHover(){

    this.classList.add("active");
    
    console.log(this.nextElementSibling.getBoundingClientRect); 

    var dimensions ={

        width: `${this.nextElementSibling.offsetWidth + 20}px`,
        height: `${this.nextElementSibling.offsetHeight + 10}px`,
        x_Cord: (this.nextElementSibling.getBoundingClientRect().left -10),
        y_Cord: (document.querySelector('.dynamicContent').getBoundingClientRect().top -5)

    }

    console.log(dimensions.x_Cord);
    console.log(dimensions.y_Cord);

    document.querySelector('.dynamicBackground').style.width = dimensions.width;
    document.querySelector('.dynamicBackground').style.height = dimensions.height;
    document.querySelector('.dynamicBackground').style.display = "flex";
    document.querySelector('.dynamicBackground').style.transform = `translate(${dimensions.x_Cord}px,${dimensions.y_Cord}px)`
}

function handleEmpty(){

    this.classList.remove("active");
    document.querySelector('.dynamicBackground').style.width = "0px";
    document.querySelector('.dynamicBackground').style.height = "0px";

}



// const contentDiv = document.querySelectorAll;

// contentDiv.forEach(function(item){
//     item.addEventListener('mouseEnter',function(){
//          this.style.opacity = "1";
//     })
// })


listItems[0].addEventListener('mouseenter', handleHover)
listItems[1].addEventListener('mouseenter', handleHover)
listItems[11].addEventListener('mouseenter', handleHover)


listItems[0].addEventListener('mouseleave', handleEmpty)
listItems[1].addEventListener('mouseleave', handleEmpty)
listItems[11].addEventListener('mouseleave', handleEmpty)