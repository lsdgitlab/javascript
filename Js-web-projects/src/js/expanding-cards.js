const panels = document.querySelectorAll('.panel');
// console.log(panels[0]);

panels.forEach( (pane) =>{
    // console.log(pane);
    pane.addEventListener('click', () =>{
        // console.log("click");
        removeActiveClasses()
        pane.classList.add('active')
    })

})
function removeActiveClasses(){
    panels.forEach( (pan)=>{
        pan.classList.remove('active');
    })
}