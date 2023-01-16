function attachEventsListeners() {
  //One day is equal to 24 hours/1440 minutes/86400 seconds.

  const buttons = document.querySelectorAll('input[type = button]');
  const main = document
    .querySelector('main')
    .addEventListener('click', convert);
  const days = document.getElementById('days');
  const hours = document.getElementById('hours');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');

  //console.log(days, hours, minutes, seconds);

  function convert(event) {
    if (event.target.type !== 'button') return;

    //debugger;
    let value = event.target.parentElement.children[1].value;
    let buttonID = event.target.id;
    debugger;
    switch (buttonID) {
      case 'daysBtn':
        hours.value = 24 * days.value;
        minutes.value = 1440 * days.value;
        seconds.value = 86400 * days.value;
        break;
      case 'hoursBtn':
        days.value = hours.value / 24;
        minutes.value = 1440 * days.value;
        seconds.value = 86400 * days.value;
        break;
      case 'minutesBtn':
        days.value = minutes.value / 1440;
        hours.value = 24 * days.value;
        //minutes.value = 1440 * days.value;
        seconds.value = 86400 * days.value;
        break;
      case 'secondsBtn':
        days.value = seconds.value / 86400;
        hours.value = 24 * days.value;
        minutes.value = 1440 * days.value;
        //seconds.value = 86400 * days.value;
        break;
    }

    console.log(value, buttonID);
  }

  console.log(buttons);
}
