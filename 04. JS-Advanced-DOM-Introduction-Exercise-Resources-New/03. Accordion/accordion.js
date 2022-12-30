function toggle() {
  let button = document.getElementsByClassName('button')[0].textContent;
  let extra = document.getElementById('extra');

  switch (button) {
    case 'More':
      extra.style.display = 'block';
      document.getElementsByClassName('button')[0].textContent = 'Less';
      break;
    case 'Less':
      extra.style.display = 'none';
      document.getElementsByClassName('button')[0].textContent = 'More';
      break;
  }
}
