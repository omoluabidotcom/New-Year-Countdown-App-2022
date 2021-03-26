
function formatTime(time) {

    if (time < 10) {
   
           return '0'+time;
       } else {
   
           return time;
       }
   }

   const dayGet = document.getElementById('dayValue');
   const hourGet = document.getElementById('hourValue');
   const minGet = document.getElementById('minuteValue');
   const secGet = document.getElementById('secondValue');

   const newYearDate = "1 Jan 2022";

function countdown() {
    
    const currentDate = new Date();

    const newYearEve = new Date(newYearDate);

    const conv = (newYearEve - currentDate)/ 1000;

    // document.write(conv+"<br>");

    const days = formatTime(Math.floor(conv/3600/24));

    const hours = formatTime(Math.floor(conv/3600) % 24);

    const minutes = formatTime(Math.floor(conv/60) % 60);

    const seconds = formatTime(Math.floor(conv) % 60);

    dayGet.innerHTML = days;
    hourGet.innerHTML = hours;
    minGet.innerHTML = minutes;
    secGet.innerHTML = seconds;

    // document.write(days + ": " + hours +": " + minutes + ": " + seconds + "<br>");

}

countdown();

setInterval(countdown, 1000)


