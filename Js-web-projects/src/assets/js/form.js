// console.log("chk44");
const labels = document.querySelectorAll('.form-control label');
labels.forEach( inptlabel =>{
        
        inptlabel.innerHTML = inptlabel.innerText
                .split('')
                 .map( (letters, ind) => `<span style="transition-delay:${ind * 50}ms">${letters}</span>`)
                .join('')
        // console.log(inptlabel); 
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
        // console.log("Programm ==>");
        setErrorFor(prselInx, 'Please The Programme')
     } else{
        setSuccessFor(prselInx)
     }
     if(ctselInxVal == "Select City"){
        setErrorFor(ctselInx, 'Please Select The City');
        // console.log("CIty ==>");
     }else{
        setSuccessFor(ctselInx)
     }

}

function setErrorFor(input, msg) {
   const formCntrl = input.parentElement;
   const bElement = formCntrl.querySelector('b');
//    console.log(bElement);
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


/* // Method 2
let form = document.getElementById('form');
// let errorEle = document.querySelector('b');
// document.getElementById('name_error').innerHTML = "Please Enter The Name";
var ctselInx = document.getElementById('cityDrpdwn');
var strUser = ctselInx.options[ctselInx.selectedIndex].value; 
console.log(strUser); 
         

function seterrorTxt(id, error){ 
        //sets error inside tag of id 
        element = document.getElementById(id);
        element.getElementsByClassName('formerror')[0].innerHTML = error;
        element.children[0].className = "errorbg";       
       
        // element.querySelectorAll('.formerror')[0].innerHTML = error;
          
 } 
 

 
form.addEventListener('click', (e)=>{
        returnval = true
        // console.log(e); 
        e.preventDefault();
        var name = document.forms['myForm']['name'].value;        
        var mobile = document.forms['myForm']['mobile'].value;
        var email = document.forms['myForm']['email'].value;
        // var citydrpdwn = document.forms['myForm']['proDrpdwn'].value;


        // if(name.length<5 && mobile.length<5) {
        //         for(i = 0; i < input.length; i++){
        //                 console.log(input[i].classList.add("aa"));  
        //         }
        // }     
        // console.log(name);   
                if (name.length<5){
                   seterrorTxt("name", "*Length of name is too short");
                // console.log("ddd"); 
                    returnval = false;
                }
                if (mobile.length<5){
                   seterrorTxt("mobile", "*Length of Mobile is too short");
                   returnval = false;
                }
                if (email.length<5){
                        seterrorTxt("email", "*Please Enter Valid Email");
                        returnval = false;
                }
                // if (citydrpdwn.length === 0){
                //         seterrorTxt("citydrpdwn", "*Please Select the city");
                //         returnval = false;
                // }
        return returnval
       
});
// seterror()
*/
// form.addEventListener('click', (e)=>{
//         // // input.addEventListener('focus', (el)=>{
//         // //         input.classList.remove('brd');
//         // //         console.log(el);
//         // // })
         
//         // let messages = []; 
        
            
//         //     input.forEach( function (e){
//         //         if(e.value === '' || e.value == null){
//         //                 console.log(e);
//         //                 // console.log(input[i]);
//         //                 e.classList.add('brd') 
//         //                 messages.push('Name is Require');
                        
//         //         }
//         //         else{ 
//         //                 e.classList.remove('brd');
//         //                 errorEle.innerHTML = '';  
//         //                 // messages.push('');   
//         //         };    
//         //     })
//         // //     for(i = 0; i < input.length; i++){
//         // //         if(input.value === '' || input.value == null){
//         // //         console.log(input[i]);
//         // //         input[i].classList.add('brd')   
//         // //     } else{
//         // //         input.classList.remove('brd');
//         // //         messages.push('');  
//         // //         };    
//         // // }      
//         // //     console.log('Name is Require') 
        

//         // if(messages.length > 0){   
//         //   errorEle.innerText =  messages.join(' ')    
//         // }
// })


    
//     function validateForm(){
//         var returnval = true;
//         clearErrors();
    
//         //perform validation and if validation fails, set the value of returnval to false
//         var name = document.forms['myForm']["fname"].value;
//         if (name.length<5){
//             seterror("name", "*Length of name is too short");
//             returnval = false;
//         }
    
//         if (name.length == 0){
//             seterror("name", "*Length of name cannot be zero!");
//             returnval = false;
//         }
    
//         var email = document.forms['myForm']["femail"].value;
//         if (email.length>15){
//             seterror("email", "*Email length is too long");
//             returnval = false;
//         }
    
//         var phone = document.forms['myForm']["fphone"].value;
//         if (phone.length != 10){
//             seterror("phone", "*Phone number should be of 10 digits!");
//             returnval = false;
//         }
    
//         var password = document.forms['myForm']["fpass"].value;
//         if (password.length < 6){
    
//             // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
//             seterror("pass", "*Password should be atleast 6 characters long!");
//             returnval = false;
//         }
    
//         var cpassword = document.forms['myForm']["fcpass"].value;
//         if (cpassword != password){
//             seterror("cpass", "*Password and Confirm password should match!");
//             returnval = false;
//         }
    
//         return returnval;
//     }
    
    

// console.log(input);
// submitBtn.addEventListener('click', () =>{
//         if(inputVal.value.length == 0){
//                 inputVal.classList.add('error')
//         }
// });

// const careerBtn = document.appendChild('a');
// function addBtn() {
//         let anchor = document.createElement('a')
//         anchor.setAttribute('href', "https://onlinereviews.org.uk/logicservegallery/");
//         anchor.innerText = "Career";
//         anchor.classList.add('btn');
//         document.querySelector('body').appendChild(anchor);

//         chckUrl = "http://localhost:5001/";

//         if( chckUrl === window.location.href){
//                 console.log("local");  
//                 anchor.remove();
//         }
// }
// addBtn()



// document.querySelector('#enq').addEventListener('click', function(e){
// alert(document.URL);
//         window.open('https://www.google.com', '_blank');
// }, false)
