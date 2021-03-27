
const secondsHand = document.querySelector('.seconds');
const minutesHand = document.querySelector('.minutes');
const hoursHand = document.querySelector('.hours');

setInterval(
    function(){
let today = new Date();
let seconds = today.getSeconds();
let hours = today.getHours()<=12 ? today.getHours() : today.getHours()-12 ;
let minutes = today.getMinutes();

console.log(minutes);

secondsHand.style.transform = 'rotate(' + seconds*6 +'deg)';
if(seconds==0){
    secondsHand.style.transition = 'top 1s ease-in-out'
}else{
    secondsHand.style.transition = 'all 1s linear'
}
    
minutesHand.style.transform = 'rotate(' + (minutes + seconds/60)*6 +'deg)';

hoursHand.style.transform = 'rotate(' + (hours + minutes/12 + seconds/3600)*6 +'deg)';

}
,1000)



    