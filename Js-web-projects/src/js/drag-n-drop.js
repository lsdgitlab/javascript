const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)
// fill.addEventListener('draghold', dragHold)
// fill.addEventListener('dragover', dragOver)
// fill.addEventListener('dragenter', dragEnter)
// fill.addEventListener('dragleave', dragLeave)
// fill.addEventListener('dragdrop', dragDrop)

for(const empty of empties){
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)

}

function dragStart (){
    this.className += ' hold';
    setTimeout(()=> this.className = 'invisible', 0)
}

function dragEnd (){
    // console.log("Drag End");
    this.className = 'fill';
}
function dragOver (e){
    // console.log("Drag Hover");
    e.preventDefault()
}
function dragHold (){
    console.log("Drag Hold");
}
function dragEnter (e){
    // console.log("Drag Enter");
    e.preventDefault();
    this.className += ' hovered'
}
function dragLeave (){
    // console.log("Drag Leave");
    this.className = 'empty'
}
function dragDrop (){
    // console.log("Drag Drop");
    this.className = 'empty';
    this.append(fill)
}
