console.log("Balloon Js")

var balloon0 = document.getElementById("balloon0");
var balloon1 = document.getElementById("balloon1");
var balloon2 = document.getElementById("balloon2");
var balloon3 = document.getElementById("balloon3");
var balloon4 = document.getElementById("balloon4");
var balloon5 = document.getElementById("balloon5");
var balloon6 = document.getElementById("balloon6");
var balloon7 = document.getElementById("balloon7");
var balloon8 = document.getElementById("balloon8");
var balloon9 = document.getElementById("balloon9");
var balloon10 = document.getElementById("balloon10");
var balloon11 = document.getElementById("balloon11");
var balloon12 = document.getElementById("balloon12");
var balloon13 = document.getElementById("balloon13");
var balloon14 = document.getElementById("balloon14");
var balloon15 = document.getElementById("balloon15");
var balloon16 = document.getElementById("balloon16");
var balloon17 = document.getElementById("balloon17");
var balloon18 = document.getElementById("balloon18");
var balloon19 = document.getElementById("balloon19");
var balloon20 = document.getElementById("balloon20");
var balloon21 = document.getElementById("balloon21");
var balloon22 = document.getElementById("balloon22");
var balloon23 = document.getElementById("balloon23");

var yay = document.getElementById("yay-no-balloons");

function bollonPopper(ballonVar){
	ballonVar.addEventListener("mouseover", popballoon);

	function popballoon(){
		if(ballonVar.style.background === "none"){
			ballonVar.innerText = "";

		}else{
			ballonVar.innerText = "Pop !";
			// console.log("POP =>");
			ballonVar.style.background = "none"

		}
	}
	ballonVar.addEventListener("mouseout", popIsOver, false);
	function popIsOver(){
		ballonVar.innerText ="";
	}
}

bollonPopper(balloon0);
bollonPopper(balloon1);
bollonPopper(balloon2);
bollonPopper(balloon3);
bollonPopper(balloon4);
bollonPopper(balloon5);
bollonPopper(balloon6);
bollonPopper(balloon7);
bollonPopper(balloon8);
bollonPopper(balloon9);
bollonPopper(balloon10);
bollonPopper(balloon11);
bollonPopper(balloon12);
bollonPopper(balloon13);
bollonPopper(balloon14);
bollonPopper(balloon15);
bollonPopper(balloon16);
bollonPopper(balloon17);
bollonPopper(balloon18);
bollonPopper(balloon19);
bollonPopper(balloon20);
bollonPopper(balloon21);
bollonPopper(balloon22);
bollonPopper(balloon23);

document.addEventListener("mouseover", noBallons, false);
function noBallons(){
	if(balloon0.style.background === "none" && balloon1.style.background === "none" && balloon2.style.background === "none" && balloon3.style.background === "none" && balloon4.style.background === "none" && balloon5.style.background === "none" && balloon6.style.background === "none" && balloon7.style.background === "none" && balloon8.style.background === "none" && balloon9.style.background === "none" && balloon10.style.background === "none" && balloon11.style.background === "none" && balloon12.style.background === "none" && balloon13.style.background === "none" && balloon14.style.background === "none" && balloon15.style.background === "none" && balloon16.style.background === "none" && balloon17.style.background === "none" && balloon18.style.background === "none" && balloon19.style.background === "none" && balloon20.style.background === "none" && balloon21.style.background === "none" && balloon22.style.background === "none" && balloon23.style.background === "none"){
		yay.style.display="block";
		window.scrollTo(0, 0)
	}
}

