
function formatTime(time) {

    if (time < 10) {
   
           return '0'+time;
       } else {
   
           return time;
       }
   }

   const dayget = document.getElementById('dayValue');
   const hourget = document.getElementById('hourValue');
   const minuteget = document.getElementById('minuteValue');
   const secondget = document.getElementById('secondValue');

   const newYearDate = "1 Jan 2022";

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

    // console.log(days + ": " + hours +": " + minutes + ": " + seconds + "<br>");

}

countdown();

setInterval(countdown, 1000)


