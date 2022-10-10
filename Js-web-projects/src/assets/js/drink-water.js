const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCups()
smallCups.forEach((cup, idx)=>{
    // console.log(indx);
    cup.addEventListener('click', () => highLightCups(idx))
});
function highLightCups(idx){
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }

    // console.log(idx);
    smallCups.forEach( (cup, indx2)=>{
        if(indx2 <= idx){
            // console.log("chk");
            cup.classList.add('full')
        } else{
            cup.classList.remove('full')
        }
    })
    updateBigCups() 
}
function updateBigCups() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    // console.log(fullCups);
    const totalCups = smallCups.length
    // console.log(totalCups);

    if(fullCups === 0){
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    }else{
        percentage.style.visibility = 'visible';
        percentage.style.height= `${fullCups/ totalCups * 330}px`;
        percentage.innerHTML = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups){
        remained.style.visibility = 'hidden';
        remained.innerHTML = ''
    }else{
        remained.style.visibility = 'visible';
        liters.innerText = `${2- (250 * fullCups / 1000)}`
    }

}