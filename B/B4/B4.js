
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
 
    const dynamicBackground =  document.querySelector('.dynamicBackground');
    dynamicBackground.style.width = dimensions.width;
    dynamicBackground.style.height = dimensions.height;
    dynamicBackground.style.opacity = "1";
    dynamicBackground.style.transform = `translate(${dimensions.x_Cord}px,${dimensions.y_Cord}px)`
   
    dynamicBackground.addEventListener('mouseenter', ()=>{
        dynamicBackground.style.opacity = 1
    })
    // dynamicBackground.addEventListener('mouseleave', ()=>{
    //     dynamicBackground.style.opacity = 0
    // })

    const dynamicContent = this.nextElementSibling;
    dynamicContent.addEventListener('mouseenter', ()=>{
        dynamicContent.style.opacity = 1
    })
    dynamicContent.addEventListener('mouseleave', ()=>{
        dynamicContent.style.opacity = 0
    })


}

function handleEmpty(){

    this.classList.remove("active");
    document.querySelector('.dynamicBackground').style.opacity = "0";

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