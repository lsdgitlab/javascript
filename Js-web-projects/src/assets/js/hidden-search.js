const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const inpt = document.querySelector('.input');
console.log(btn);


btn.addEventListener('click', () => {
    console.log("Click===>");
    search.classList.toggle('active');
    inpt.focus();
})