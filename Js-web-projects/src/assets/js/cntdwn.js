// function getTimeRemaining(endtime) {
//   var t = Date.parse(endtime) - Date.parse(new Date());
//   var seconds = Math.floor((t / 1000) % 60);
//   var minutes = Math.floor((t / 1000 / 60) % 60);
//   var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//   var days = Math.floor(t / (1000 * 60 * 60 * 24));
//   return {
//     'total': t,
//     'days': days,
//     'hours': hours,
//     'minutes': minutes,
//     'seconds': seconds
//   };
// }

// function initializeClock(id, endtime) {
//   var clock = document.getElementById(id);
//   var daysSpan = clock.querySelector('.days');
//   var hoursSpan = clock.querySelector('.hours');
//   var minutesSpan = clock.querySelector('.minutes');
//   var secondsSpan = clock.querySelector('.seconds');

//   function updateClock() {
//     var t = getTimeRemaining(endtime);

//     daysSpan.innerHTML = t.days;
//     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   }

//   updateClock();
//   var timeinterval = setInterval(updateClock, 1000);
// }

// var deadline = new Date(Date.parse(new Date()) + 14 * 24 * 60 * 60 * 1000);
// initializeClock('clockdiv', deadline);


/* wrong method */

// // console.log("Countdown Loaded");
// function getTimeRemaing(endTime){
//     let t = Date.parse(endTime) - Date.parse(new Date());
//     let sec = Math.floor((t / 1000) % 60);
//     let minute = Math.floor((t / 60) % 60 );
//     let hour = Math.floor((t / (1000 * 60 * 60)) %24);
//     let days = Math.floor( t / (1000 * 60 * 60 * 24));
 


//     return{
//         'total' : t,
//         'days' : days,
//         'hours': hour,
//         'minutes':minute,
//         'seconds':sec,
//     };
//     // console.log("t");
//     // console.log(t);

// }
// function initialClock(id, endTime){
//   let clck = document.getElementById(id);
//   let daySpan = clck.querySelector('days');
//   let hourSpan = clck.querySelector('hour');
//   let minutSpan = clck.querySelector('minutes');
//   let secdSpan = clck.querySelector('sec');

//   function updateClock(){
//     var t = getTimeRemaing(endTime);
//     // console.log(tt);
//     daySpan.innerHTML = t.days
//     hourSpan.innerHTML = ('0' +t.hours).slice(-2);
//     minutSpan.innerHTML = ('0' + t.minutes).slice(-2);
//     secdSpan.innerHTML = ('0' + t.sec).slice(-2);

//     if(t.total <= 0){
//       clearInterval(timeInterval);
//     }
//   }
//   updateClock();
//   var timeInterval = setInterval(updateClock, 1000);
  

// }
// initialClock('clockdiv', deadline)
// var deadline = new Date(Date.parse(new Date()) +7 + 24 + 60 + 60 * 1000);
// // updateClock(ww, 45)

// https://www.youtube.com/watch?v=swEsvQcIJW0
const endDate = "Oct 22 2022 05:09 PM";
document.getElementById('enddate').innerHTML = endDate;
const inSpan = document.querySelectorAll('span');
// console.log(inSpan);


clock = () =>{
  const end = new Date(endDate);
  const now = new Date();
  diff = end - now;
  // console.log("Milisecond =>" + diff);  
  diffSec = (end - now)/ 1000;
  // console.log("Seconds =>" + diffSec); 
  diffMin = (end - now)/ 1000 / 60;
  // console.log("Minute =>" + diffMin);
  // console.log(diffSec);
  // console.log("Day Diff =>" + Math.floor(diffSec / 3600 / 24));
  // conver into Days
  inSpan[0].innerHTML = Math.floor(diffSec / 3600 / 24);
  // Convert into Hour
  inSpan[1].innerHTML = Math.floor((diffSec / 3600) % 24);
  // Convert into Seconnds
  inSpan[2].innerHTML = Math.floor((diffSec / 60) % 60);
  // Convert into Seconnds
  inSpan[3].innerHTML = Math.floor(diffSec % 60 )


  /**
   Day => 24 hours
   hour => 60 min
   60 min => 3600 sec

   * 
   */
}
clock()

setInterval(
  () =>{
    clock()
  },1000 
);

var destn = new Date("oct 10, 2022 10:00:00").getTime();
console.log(destn);
const nowt = new Date().getTime();
diffrnt = destn - nowt;

days = Math.floor(diffrnt /(1000*60*60*24));
console.log(days);

hours = Math.floor((diffrnt % (1000*60*60*24))/ (1000*60*60));
minutes = Math.floor((diffrnt %(1000*60*60))/(1000*60));
seconds = Math.floor((diffrnt % (1000*60))/1000);
console.log("minutes => " +seconds);
const jcntdwn = document.getElementById('demo')

cntdwn = () => {
  jcntdwn.innerHTML= days +"D ," + hours +"Hrs: "+ minutes +"M ," + seconds + "S";
}
cntdwn()
setInterval( () =>{
  cntdwn()
},1000)