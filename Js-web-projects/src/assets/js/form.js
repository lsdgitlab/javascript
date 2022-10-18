const labels = document.querySelectorAll('.form-control label');
labels.forEach( inptlabel =>{
        
        inptlabel.innerHTML = inptlabel.innerText
                .split('')
                 .map( (letters, ind) => `<span style="transition-delay:${ind * 50}ms">${letters}</span>`)
                .join('')
        
});

// Method 1

let form = document.getElementById('form'); 
let fanme = document.getElementById('fname');
let mobile = document.getElementById('mblno');
let email = document.getElementById('emailid');
var ctselInx = document.getElementById('citydrpdwn')
var prselInx = document.getElementById('prodrpdwn')


form.addEventListener('click', (eve)=>{
    eve.preventDefault();
    checkInputs();  
    
});

form.addEventListener('input', (e)=>{
        e.preventDefault()
      inputType();
});

function inputType(){
        
}

function checkInputs() {
        const fanmeVal = fanme.value.trim();
        const mobileVal = mobile.value.trim();
        const emailVal = email.value.trim();
        var ctselInxVal = ctselInx.value;        
        var prselInxVal = prselInx.value;
     if(fanmeVal === '' || fanmeVal.length <= 2){
        setErrorFor(fanme, 'Please Enter The First Name')
     } else{
        setSuccessFor(fanme)
     }

     if(mobileVal === '' || mobileVal.length < 10){
        setErrorFor(mobile, 'Please Enter valid Mobile Number')
     } else{
        setSuccessFor(mobile)
     }  

     if(emailVal === ''){
        setErrorFor(email, 'Blank mail ID')
     } else if(!validateEmail(emailVal)){
        setErrorFor(email, 'Please Enter valid Email Id')
     } else{
        setSuccessFor(email)
     } 
     
     if(prselInxVal == "Select Pragram"){
       
        setErrorFor(prselInx, 'Please The Programme')
     } else{
        setSuccessFor(prselInx)
     }
     if(ctselInxVal == "Select City"){
        setErrorFor(ctselInx, 'Please Select The City');
        
     }else{
        setSuccessFor(ctselInx)
     }

}

function setErrorFor(input, msg) {
   const formCntrl = input.parentElement;
   const bElement = formCntrl.querySelector('b');

   bElement.innerText = msg;
   formCntrl.children[0].classList.add('errorbg');
}

const validateEmail = (email1) => {
        return String(email1)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
 
function setSuccessFor(input){
   const formCntrl = input.parentElement;
   const bElement = formCntrl.querySelector('b');
   bElement.innerText = '';
   formCntrl.children[0].classList.remove('errorbg')

}
// function printError(input, msg){        
//         const formControl = document.getElementsByClassName('form-control');
//         console.log(input);
//         console.log(formControl);
//         const b = formControl.children[2];
//         console.log(b);
//         // b.innerText = msg;

//         // formControl.className = 'form-control error'
// }



