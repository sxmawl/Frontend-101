for(let i=0;i<3;i++){

let outline = document.querySelector(".outline-"+ i);
let length  = outline.getTotalLength();
outline.style.strokeDasharray = length;

    outline.style.strokeDashoffset = '-' + length;

}