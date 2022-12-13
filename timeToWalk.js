function timeToWalk(steps, meters, speed) {
  let studentDistance = steps * meters;
  let minutesBreak = Math.floor(studentDistance / 500);
  let speedInMetersPerSeconds = (speed * 1000) / 3600;
  let allTime = studentDistance / speedInMetersPerSeconds;

  let hours = Math.floor(allTime / 3600);
  let minutes = Math.floor(allTime / 60);
  let seconds = Math.round(allTime - minutes * 60);

  //console.log(allTime, hours, minutes, seconds);
  console.log(
    (hours < 10 ? `0${hours}` : hours) +
      ':' +
      (minutes + minutesBreak < 10
        ? `0${minutes + minutesBreak}`
        : minutes + minutesBreak) +
      ':' +
      (seconds < 10 ? `0${seconds}` : seconds)
  );
}

timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
