const btn = document.getElementById("button");
const toast = document.getElementById("toasts");

messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
]

const types = ['info', 'success', 'error']
btn.addEventListener('click', () => createNotifi())
function createNotifi(message = null, type = null) {
    // type considerd css class
    // console.log("click");
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type ? type : getRandomType());

    notif.innerText = message ? message : getRandomMsg()
    toast.appendChild(notif);

    setTimeout( ()=>{
        notif.remove()
    },3000)
}
function getRandomMsg(){
    return messages[Math.floor(Math.random()* messages.length)]
}

function getRandomType(){
    return types[Math.floor(Math.random()* types.length)]
}