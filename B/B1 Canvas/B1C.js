let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
const radius = 200;

function drawCircle(){
 ctx.clearRect(0,0,canvas.height,canvas.height)
ctx.beginPath();
ctx.arc(canvas.height/2,canvas.height/2, 290, 0, 2 *  Math.PI, true);
ctx.strokeStyle = '#fff';
ctx.stroke();
ctx.closePath();

let today = new Date();
let secondsAngle = today.getSeconds() * 6;
let minutesAngle = today.getMinutes() * 6 + secondsAngle/60;
let hours = today.getHours()<=12 ? today.getHours() : today.getHours()-12 ;
let hoursAngle = secondsAngle/3600 + hours*6 + (today.getMinutes()/2) ; 
console.log(hoursAngle);


ctx.beginPath();
drawHands(280,secondsAngle);
drawHands(220,minutesAngle);
drawHands(150,hoursAngle);
ctx.stroke();
ctx.closePath();


}

drawCircle()

function drawHands(length, angle){
    ctx.save();
    ctx.translate(300,300);
    ctx.moveTo(0,0);
    let x = length * Math.cos(((angle - 90) * Math.PI)/180);
    let y = length * Math.sin(((angle - 90) * Math.PI)/180);
    ctx.lineTo(x, y);
    ctx.restore();
}

setInterval(drawCircle,1000);







