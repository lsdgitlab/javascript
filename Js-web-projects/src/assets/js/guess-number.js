// console.log("Guess-Number JS loaded");
let randonNumBer = Math.floor(Math.random()* 500 ) + 1;
let gueSses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let loWorHi = document.querySelector('.lowOrHi');
let gueSsSubmit = document.querySelector('.guessSubmit');
let guesSsField = document.querySelector('.guessField');
let gueSsCount = 1;
let reSetbtn;

guesSsField.focus();
// console.log(lastResult);

function checkGuess(){
  var userGuess = Number(guesSsField.value);
  if(gueSsCount === 1){
    gueSses.textContent = "Previous Guesses";
  }
  gueSses.textContent += userGuess + ' ';
  gueSses.style.background= 'Pink';

  if(userGuess === randonNumBer){
    lastResult.textContent = "Congradulation! You Got it Right";
    lastResult.style.background ="green";
    loWorHi.textContent = "";
    setGameOver();
  } else if (gueSsCount === 10){
    lastResult.textContent = "Game Over";
    loWorHi.textContent = "";
    setGameOver();
  }else{
    lastResult.textContent = "Wrong";
    lastResult.style.background = "red";
    if(userGuess < randonNumBer){
      loWorHi.textContent = "Last guess was too Low";
    }else if(userGuess > randonNumBer){
      loWorHi.textContent = "last guess was too High";
    }
  }
  gueSsCount ++;
  guesSsField.value = '';
  guesSsField.focus();
  console.log(gueSses);
}

gueSsSubmit.addEventListener('click',checkGuess );
function setGameOver(){
  guesSsField.disabled= true;
  gueSsSubmit.disabled= true;
  reSetbtn = document.createElement('button');
  reSetbtn.textContent = "Start new Game";
  document.body.appendChild(reSetbtn);
  reSetbtn.addEventListener('click', resetGame)
}

function resetGame(){
  gueSsCount = 1;
  var resetParse = document.querySelectorAll('.resultParas p');
  for(var i =0; i < resetParse.length; i ++){
    resetParse[i].textContent =""
  }

  reSetbtn.praentNode.removeChild(reSetbtn);

  guesSsField.disabled = false;
  gueSsSubmit.disabled = false;
  guesSsField.value = "";
  guesSsField.focus();

  lastResult.style.background = "#eeeeee";
  gueSses.style.background = "#eeeeee";

  randonNumBer = Math.floor(Math.random() * 500) + 1;
}
// checkGuess()