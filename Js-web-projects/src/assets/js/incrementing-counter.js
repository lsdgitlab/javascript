const counters = document.querySelectorAll('.counter')

counters.forEach( countNum =>{
    countNum.innerText = "0";

    const updateCounter = () =>{
        const target = +countNum.getAttribute('data-target')
        // console.log(typeof target, target);

        const c = +countNum.innerText
        const increment = target / 200;

        if( c < target){
            countNum.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1)

        }else{
            countNum.innerText = target
        }
    }
    updateCounter()
    
})