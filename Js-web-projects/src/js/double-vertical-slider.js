console.log("check");
const sldContainer = document.querySelector('.slider-container');
const sldRt = document.querySelector('.right-slide');
const sldLt = document.querySelector('.left-slide');
const sldUpBtn = document.querySelector('.up-button');
const sldDwnBtn = document.querySelector('.down-button');
const sldLength = sldRt.querySelectorAll('div').length

console.log(sldLength); 

let actSldIndex = 0;

sldLt.style.top = `-${(sldLength -1) *100}vh`;

sldUpBtn.addEventListener('click', () => chnSld('up'))
sldDwnBtn.addEventListener('click', () => chnSld('dwn'))

const chnSld = (direction) =>{
    const sldHeight = sldContainer.clientHeight;
    // console.log(sldHeight);

    if(direction === 'up'){
        actSldIndex++
        if(actSldIndex > sldLength -1){
            actSldIndex = 0
        }
    }else if(direction === 'dwn'){
        actSldIndex--
        if(actSldIndex < 0){
            actSldIndex = sldLength -1
        }
    }

    sldRt.style.transform = `translateY(-${actSldIndex * sldHeight}px)`  ;  
    sldLt.style.transform = `translateY(${actSldIndex * sldHeight}px)`  ;  
}