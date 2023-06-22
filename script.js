/*TASK
from current date and time
/'Today is: Thursday, 22nd of June 2023*/
let date=new Date();
console.log(date)

let todayDate=new Date();
let dayOfWeek=todayDate.toLocaleDateString('en-uk',{weekday:'long'});
let month=todayDate.toLocaleDateString('en-uk',{month:'long'});
let dayOfMonth=todayDate.toLocaleDateString('en-uk',{day:'2-digit'});
let year=todayDate.toLocaleDateString('en-uk',{year:'numeric'});
console.log(`Today is: ${dayOfWeek}, ${dayOfMonth}nd of ${month} ${year}`);
//we can costomise our date, month, year
let todayDate1 = new Date();
let week = todayDate1.toLocaleDateString('en-uk',{weekday:'long'});
let mon = todayDate1.toLocaleDateString('en-uk', {month:'long'});
let d = todayDate1.toLocaleDateString('en-us', {day:'2-digit'});
let yr = todayDate1.getFullYear();
console.log(`Today is: ${week} ${d}nd of ${mon} ${yr}`);

//TASK-Timer
//Current date in the browser and it should be updating regularly.

function displayTime(){
let todayDate2 = new Date();
let hourElement = document.getElementById("hour");
let min = document.getElementById("min");
let second = document.getElementById("second");
let msecond = document.getElementById("m-second");
//let hour = parseInt(hourElement.value);
let hour = parseInt(hourElement.innerText, 10);// Parse the inner text as an integer
if(hour>12){
    hour = hour - 12;  
    let ampm = document.getElementById("ampm");  
    ampm.innerHTML = 'PM'
}
hourElement.innerHTML = padZero(todayDate2 .getHours());
min.innerHTML = padZero(todayDate2 .getMinutes());
second.innerHTML = padZero(todayDate2 .getSeconds());
msecond.innerHTML = todayDate2 .getTime();
}
setInterval(displayTime,500);

function padZero(num){
    return(num < 10 )?"0" + num:num;
}

/*By using hourElement.innerText instead of hourElement.value, we can retrieve the displayed hour value as a string, which we then parse as an integer using parseInt. This should ensure that the hour value is properly processed and the AM/PM indicator updates accordingly.
parseInt(...): The parseInt function is used to convert a string representation of a number into an actual integer value. It takes two arguments: the string to be parsed and the radix/base of the number system to use for parsing. In this case, we are using a radix/base of 10, which corresponds to the decimal number system.*/

