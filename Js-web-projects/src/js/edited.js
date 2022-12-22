// const isLoggedIn = true;

// let isLog =function (){
//   if (isLoggedIn == true) {
//     const statusMessage = 'User is logged in.';
//     this.sendToPa = function(){
//       return statusMessage;
//     }
//   }
// }

// let result = new isLog();

// console.log(result.sendToPa());

// function chckvarLog(){
//   const statusMessage = 'User is logged in.';
//   return function(){
//     console.log(statusMessage);
//   }
// }

// let testLogIn = chckvarLog();
// testLogIn();

// // let qudeCountry = ['India', 'Australia', 'United States', 'Japan'];
// let array = ['India', 'Germany', 'China', 'Japan'];
//   console.log('array: ', array);

//   array = new Array('India', 'Germany', 'China', 'Japan');
//   console.log('array: ', array);

//   //map function
// 	array = [10, 20, 30, 40];
// 	// pass a function to map
// 	let map = array.map(x => x * 2);
// 	console.log(map); // [20, 40, 60, 80

//   arRay = [4, 7, 9, 11];
//   // pass function to map
//   let arRay1 = arRay.map( function(val){
//     return val * 3
//   })
//   console.log(arRay1);

//   let aRray = arRay.map((val) => val*10)
//   console.log(aRray);

//   const products = [
// 		{ name: 'Mobile', prices: [1000, 2000] },
// 		{ name: 'Playstation', prices: [200, 300] }
// 	]
// 	const allPrcies = products.map(products => products.prices)
// 	console.log(allPrcies) // [[1000, 2000], [200, 300]]]


  //forEach
	// const originalArray = [1, 2, 3, 4, 5];
	// const newArray = [];

	// originalArray.forEach((number, i) => {
	// 	newArray[i] = number * 5;
	// });

	// console.log(newArray);

  // const arr  ay2 = [10, 20, 30, 40];
	// const reducer = (accumulator, currentValue) => accumulator + currentValue;
  // console.log(array2.reduce(reducer)); //100

  // const redc = (acm, crtval) => acm + crtval
  // console.log(array2.reduce(redc));
		
	//using forEach()
	// let total = 0;
	// array2.forEach(function (num) {
	// 	total += num;
	// });
  // console.log(total); //100

  // let ttl = 0;
  // array2.forEach( (num) => ttl += num)
  // console.log(ttl);

  //Filter function
	
	var numbers = [10, 20, 30, 24, 25, 31];

	const result = numbers.filter(number => number < 30);
	console.log(result); //[10, 20, 24, 25]
	
  	//Sort function
	let arraySort = ['India', 'Germany', 'China', 'Japan'];
	console.log('sorted array: ', arraySort.sort()); //["China", "Germany", "India", "Japan"]

  //Reverse function
	console.log('sorted array: ', arraySort.reverse()); //["Japan", "India", "Germany", "China"]


	// (function(){
	// 	var lastScroll = 0;
	// 	window.addEventListener('scroll',function(e){
	// 			var st = window.scrollY;
	// 			if (st > lastScroll){
	// 				 //alert("DOWN");
	// 				console.log('down')
	// 			  } 
	// 			  else {
	// 				//alert("UP");
	// 				console.log('UP')
	// 			  }
	// 			  lastScroll = st;
	// 		})
	// }())
	
