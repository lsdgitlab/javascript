console.log("sound-board loaded");

const soUnds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

soUnds.forEach(  sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', ()=>{
        stopSongs();
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)

})

function stopSongs(){
    soUnds.forEach( snd =>{
        const song = document.getElementById(snd);
        song.pause()
    })
}