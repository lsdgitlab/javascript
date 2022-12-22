const tagsEle = document.getElementById('tags');
const txtArea = document.getElementById('textarea');

txtArea.focus();

txtArea.addEventListener('keyup', (eve) =>{
    createTags(eve.target.value);

    if(eve.key === 'Enter'){
        setTimeout(()=>{
            eve.target.value=''

        }, 10)
        randomSelect()
    }


    // console.log();
});

function createTags(inpt){
    const taGs = inpt.split(',').filter( taag => taag.trim() !== '').map( tug => tug.trim());
    tagsEle.innerHTML = '';
    console.log(taGs);

    taGs.forEach( taaag => {
        const tagsElem =document.createElement('span');
        tagsElem.classList.add('tag');
        tagsElem.innerHTML = taaag;
        tagsEle.appendChild(tagsElem)
    });
}

function randomSelect() {
    const time = 30;

    const interval = setInterval(() => {
        const randomTags = pickrandonTag();

        hilightTag(randomTags)

        setTimeout( ()=>{
            unhighliteTag(randomTags)
        }, 100)
        
    }, 100);

    setTimeout( ()=>{
        clearInterval(interval)
        setTimeout( ()=>{
            const randamTag = pickrandonTag()
            hilightTag(randamTag)
        }, 100)
    }, time * 100)
}

function pickrandonTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function hilightTag(tag) {
    tag.classList.add('highlight');
}

function unhighliteTag(tagsU){
    tagsU.classList.remove('highlight')
}


























// txtArea.addEventListener('keyup', (ee) =>{
//     creaTags(ee.target.value);

//     if(ee.key === 'enter'){
//         setTimeout( ()=>{
//             ee.target.value = ''
//         }, 10)

//         randonMSlc()
//     }
// })

// function creaTags(input){
//     const tags = input.split(',').filter(tAg => tAg.trim() !== '').map( tag => tag.trim())
//     tagsEle.innerHTML = ''
    
//     tags.forEach( taG => {
//         const tagEl = document.createElement('span');
//         tagEl.classList.add('tag');
//         tagEl.innerHTML = taG;
//         tagsEle.appendChild(tagEl)

//     })

//     console.log(tags);
// }

// function randonMSlc(){
//     const times = 30;
    
//     const interval = setInterval(() => {
//         const randTag = pickRandomTag();
//         highLight(randTag);

//         setTimeout( function(){
//             unhighLite(randTag)
//         }, 100)

//     }, times * 100);
// }

// function pickRandomTag(){
//     const tags = querySelectorAll('.tag')
//     // console.log(tags);
//     return [Math.floor(Math.random() * tags.length)]
// }

// function highLight(tag){
//     tag.classList.add('highlight')
// }

// function unhighLite(tag){
//     tag.classList.remove('highlight')
// }