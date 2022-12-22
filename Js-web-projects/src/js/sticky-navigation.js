const navfx = document.querySelector('.nav');
window.addEventListener("scroll", fixnav);

// console.log(navfx.offsetHeight);

function fixnav (){
    if(window.scrollY > navfx.offsetHeight + 150){
        navfx.classList.add('active')
    }else {
        navfx.classList.remove('active')
    }
}