function validate() {
  //debugger;
  const userName = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confPassword = document.getElementById('confirm-password');
  const companyInfo = document.getElementById('companyInfo');
  const companyBox = document.getElementById('company');
  const companyNumber = document.getElementById('companyNumber');
  const valid = document.getElementById('valid');

  companyBox.addEventListener('change', () => {
    if (companyBox.checked) {
      companyInfo.style.display = 'block';
    } else {
      companyInfo.style.display = 'none';
    }
  });
  //debugger;
  let isValid = [];

  const submit = document
    .getElementById('submit')
    .addEventListener('click', submitInfo);

  function submitInfo(event) {
    event.preventDefault();

    const patternUserName = /^[a-zA-Z0-9]{3,20}$/g;
    //debugger;
    if (!userName.value.match(patternUserName)) {
      userName.style.borderColor = 'red';
      isValid.push(false);
    } else {
      userName.style.border = 'none';
      isValid.push(true);
    }

    ///^.*@.*\..*$/g;            /^[a-z]+\@[a-z]+\.[a-z]+$/g;
    const patternEmail = /^.*@.*\..*$/g; ///^.+@[^\.].*\.[a-z]{2,}$/g; ///\b[a-z0-9]+\@[a-z0-9]+\.[a-z]+\b/g;

    if (!email.value.match(patternEmail)) {
      email.style.borderColor = 'red';
      isValid.push(false);
    } else {
      email.style.border = 'none';
      isValid.push(true);
    }

    //   /\b[a-zA-z0-9]{5,15}\b/g;
    const patternPassword = /^[\w]{5,15}$/g;

    if (
      !password.value.match(patternPassword) ||
      confPassword.value != password.value ||
      !confPassword.value.match(patternPassword)
    ) {
      password.style.borderColor = 'red';
      confPassword.style.borderColor = 'red';
      isValid.push(false);
    } else {
      password.style.border = 'none';
      confPassword.style.border = 'none';
      isValid.push(true);
    }

    // if (
    //   confPassword.value != password.value ||
    //   !confPassword.value.match(patternPassword)
    // ) {
    //   confPassword.style.borderColor = 'red';
    //   isValid.push(false);
    // } else {
    //   confPassword.style.border = 'none';
    //   isValid.push(true);
    // }

    const patternCompanyNumber = /^[\w]{4,4}$/g;
    if (companyBox.checked) {
      if (!companyNumber.value.match(patternCompanyNumber)) {
        companyNumber.style.borderColor = 'red';
        isValid.push(false);
      } else {
        companyNumber.style.border = 'none';
        isValid.push(true);
      }
    } else {
      isValid.push(true);
    }

    debugger;

    //let isReturn = false;
    console.log(isValid);

    for (let i of isValid) {
      if (!i) {
        //isReturn = true;
        isValid = [];
        return;
      }
    }
    isValid = [];
    //if (isReturn) return;

    valid.style.display = 'block';
  }
}
