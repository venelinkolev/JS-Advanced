function validate() {
  const email = document.getElementById('email');
  email.addEventListener('change', (event) => {
    let pattern = /[a-z]+\@[a-z]+\.[a-z]+/g;

    let result = email.value.match(pattern);
    //debugger;
    if (!result) {
      email.classList.add('error');
    } else {
      email.classList.remove('error');
    }
    //console.log(email.value);
  });
}
