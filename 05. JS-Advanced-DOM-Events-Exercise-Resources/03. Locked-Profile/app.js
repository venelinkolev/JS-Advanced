function lockedProfile() {
  const buttons = Array.from(document.querySelectorAll('button'));

  for (let button of buttons) {
    button.addEventListener('click', showMore);
  }

  function showMore(event) {
    const lock = event.target.parentElement.querySelector(
      'input[value = lock]'
    ).checked;

    const button = event.target.parentElement.querySelector('button');

    if (!lock) {
      if (button.textContent === 'Hide it') {
        event.target.parentElement.getElementsByTagName(
          'div'
        )[0].style.display = 'none';

        button.textContent = 'Show more';
      } else {
        event.target.parentElement.getElementsByTagName(
          'div'
        )[0].style.display = 'inline-block';
        button.textContent = 'Hide it';
      }
    } else {
      return;
    }

    debugger;

    console.log('clicked');
  }

  console.log(buttons);
  console.log('TODO...');
}
