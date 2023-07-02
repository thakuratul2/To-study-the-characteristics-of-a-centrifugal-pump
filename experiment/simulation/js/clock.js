setInterval(()=>{
  const time = document.querySelector(".display #time");
  let date = new Date();
  let zeroTime = new Date(date);
  let hours = zeroTime.getHours(0);
  let minutes = zeroTime.getMinutes(0);
  let seconds = zeroTime.getSeconds(0);
  //let day_night = "AM";
  if(hours > 12){
   // day_night = "PM";
    hours = hours - 12;
  }
  if(seconds < 10){
    seconds = "0" + seconds;
  }
  if(minutes < 10){
    minutes = "0" + minutes;
  }
  if(hours < 10){
    hours = "0" + hours;
  }
  time.textContent = hours + ":" + minutes + ":" + seconds;
});