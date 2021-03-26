
function countdown() {
    
    const newYearDate = "1 Jan 2022";

    const currentDate = new Date();

    const newYearEve = new Date(newYearDate);

    const conv = (newYearEve - currentDate)/ 1000;

    // document.write(conv+"<br>");

    const days = formatTime(Math.floor(conv/3600/24));

    const hours = formatTime(Math.floor(conv/3600) % 24);

    const minutes = formatTime(Math.floor(conv/60) % 60);

    const seconds = formatTime(Math.floor(conv) % 60);

    

    document.write(days + ": " + hours +": " + minutes + ": " + seconds + "<br>");

    // document.write(hours+"<br>");

    // document.write(minutes+"<br>");

    // document.write(seconds+"<br>");  
}


function formatTime(time) {

 if (time < 10) {

        return '0'+time;
    } else {

        return time;
    }
}

countdown();

setInterval(countdown, 1000)
