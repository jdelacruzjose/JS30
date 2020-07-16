window.onload = function () {
  const hourHand = document.querySelector(".clock-hour");
  const minuteHand = document.querySelector(".clock-minute");
  const secondHand = document.querySelector(".clock-second");

  function setDate() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentHourDegrees = ((currentHour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${currentHourDegrees}deg)`;

    const currentMinute = currentTime.getMinutes();
    const currentMinuteDegrees = ((currentMinute / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${currentMinuteDegrees}deg)`;

    const currentSeconds = currentTime.getSeconds();
    const currentSecondsDegrees = ((currentSeconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${currentSecondsDegrees}deg)`;

    // console.log(currentMinute);
    if(currentSeconds === 0){
      hourHand.style.transitionDuration = '0s';
      minuteHand.style.transitionDuration = '0s';
      secondHand.style.transitionDuration = '0s';
    } else {
      hourHand.style.transitionDuration = '0.05s';
      minuteHand.style.transitionDuration = '0.05s';
      secondHand.style.transitionDuration = '0.05s';
    }
  }

  setInterval(setDate);
};
