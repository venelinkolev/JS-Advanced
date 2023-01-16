function focused() {
  const input = Array.from(document.querySelectorAll('input'));

  input.forEach((element) => {
    element.addEventListener('focus', onFocus);
    element.addEventListener('blur', blurred);
  });

  function onFocus(event) {
    event.target.parentElement.classList.add('focused');
  }

  function blurred(event) {
    event.target.parentElement.classList.remove('focused');
  }
  console.log(input);
}
