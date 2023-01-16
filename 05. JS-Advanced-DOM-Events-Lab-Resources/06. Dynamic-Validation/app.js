function validate() {
  let inputEmail = document
    .getElementById('email')
    .addEventListener('change', (event) => {
      let email = event.target.value;
      let pattern = /[a-z]+\@[a-z]+\.[a-z]+/g;

      let valid = email.match(pattern);

      if (!valid) {
        event.target.classList.add('error');
      } else {
        event.target.classList.remove('error');
      }

      console.log(valid);
      console.log(event.target.value);
    });
  console.log(inputEmail);
}
