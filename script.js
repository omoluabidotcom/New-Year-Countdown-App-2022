// Below is a function that format time 
function formatTime(time) {

    if (time < 10) {
   
           return '0'+time;
       } else {
   
           return time;
       }
   }

   // Below the value of the day, years . hours and seconds is been grabbed and assigned to a variable.
   const dayget = document.getElementById('dayValue');
   const hourget = document.getElementById('hourValue');
   const minuteget = document.getElementById('minuteValue');
   const secondget = document.getElementById('secondValue');

   //     Below a date is assigned as an expression to the variable
   const newYearDate = "1 Jan 2022";

//    Below is a function that gets the what is left of the years from days, to hours, to minutes, to seconds.
function countdown() {
    
    const currentDate = new Date();

    const newYearEve = new Date(newYearDate);

    const conv = (newYearEve - currentDate)/ 1000;


    const days = formatTime(Math.floor(conv/3600/24));

    const hours = formatTime(Math.floor(conv/3600) % 24);

    const minutes = formatTime(Math.floor(conv/60) % 60);

    const seconds = formatTime(Math.floor(conv) % 60);


    dayget.innerHTML = days;
    hourget.innerHTML = hours;
    minuteget.innerHTML = minutes;
    secondget.innerHTML = seconds;

}

// Below the countdown function is called
countdown();

// Below is a function that changes value of the countdown function at interval of one seconds
setInterval(countdown, 1000)


