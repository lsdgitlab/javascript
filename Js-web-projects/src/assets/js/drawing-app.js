const canvas = document.getElementById("canvas");
const increseBtn = document.getElementById("increase");
const decreseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearElem = document.getElementById("clear");
const ctx = canvas.getContext("2d");

let size = 5;
let color = 'black';
let issPress = false;
canvas.addEventListener('mousedown', (eve)=>{
    issPress = true;

    x = eve.offsetX;
    y = eve.offsetY;
    // console.log(issPress, x, y);
})
canvas.addEventListener('mouseup', (eve)=>{
    issPress = false;

    x = undefined;
    y = undefined;
    // console.log(issPress, x, y);
})

canvas.addEventListener('mousemove', (e)=>{
   if(issPress){
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    // console.log(x2, y2);
    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2;
    y = y2
   }
})
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2); 
    ctx.fillStyle = color;
    ctx.fill()
}
function drawLine (x1, y1, x2, y2){
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke()
}

function updateSizeOnScreen (){
    sizeEl.innerText = size
}
increseBtn.addEventListener('click', (e) => {
    size += 5;

    if(size > 50){
        size = 50   
    }
    updateSizeOnScreen()
})
decreseBtn.addEventListener('click', (e) => {
    size -= 5;

    if(size < 5){
        size = 5   
    }
    updateSizeOnScreen()
})
colorEl.addEventListener('change', (e) => color = e.target.value);
clearElem.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))

// drawCircle(100, 200)
// drawLine(300, 300, 300, 500)