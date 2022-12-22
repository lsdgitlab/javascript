const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSld = 0;
setBackTobody();

rightBtn.addEventListener('click', () =>{
  // console.log("Right Click");
  activeSld++

  if(activeSld > slides.length -1){
    activeSld = 0
  }
  setBackTobody()
  setActiveSld()

})

leftBtn.addEventListener('click', () =>{
  activeSld--
  if(activeSld < 0){
    activeSld = slides.length -1;
  }
  setBackTobody()
  setActiveSld()
})

function setBackTobody() {
  body.style.backgroundImage = slides[activeSld].style.backgroundImage
}

setActiveSld()
function setActiveSld() {
  slides.forEach(sld =>{
    sld.classList.remove('active')
  });

  slides[activeSld].classList.add('active')

  // console.log(sld[0]);
}