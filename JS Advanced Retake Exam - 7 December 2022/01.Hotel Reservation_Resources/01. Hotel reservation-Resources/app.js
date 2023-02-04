window.addEventListener('load', solve);

function solve() {
  const [firstName, lastName, dateIn, dateOut, peopleCount] =
    document.querySelectorAll('form input');
  //debugger;
  let reservationInfo = [];

  const nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', nextFunc);

  const infoList = document.querySelector('#info-reservations ul');
  const confirmList = document.querySelector('#confirm-reservations ul');
  const verification = document.getElementById('verification');
  //debugger;

  function nextFunc(event) {
    event.preventDefault();
    verification.textContent = '';
    reservationInfo = [];

    if (
      !firstName.value ||
      !lastName.value ||
      !dateIn.value ||
      !dateOut.value ||
      !peopleCount.value
    ) {
      return;
    }

    let [yearIn, monthIn, dayIn] = dateIn.value.split('-');
    let [yearOut, monthOut, dayOut] = dateOut.value.split('-');
    yearIn = Number(yearIn);
    yearOut = Number(yearOut);
    monthIn = Number(monthIn);
    monthOut = Number(monthOut);
    dayIn = Number(dayIn);
    dayOut = Number(dayOut);

    //debugger;

    if (yearIn > yearOut) {
      return;
    } else {
      if (monthIn > monthOut) {
        return;
      } else {
        if (monthIn === monthOut && dayIn >= dayOut) {
          return;
        }
      }
    }

    reservationInfo.push(
      firstName.value,
      lastName.value,
      dateIn.value,
      dateOut.value,
      peopleCount.value
    );
    //debugger;
    const li = document.createElement('li');
    li.classList.add('reservation-content');

    let article = document.createElement('article');

    let h3 = document.createElement('h3');
    h3.textContent = `Name: ${firstName.value} ${lastName.value}`;
    let pFromDate = document.createElement('p');
    pFromDate.textContent = `From date: ${dateIn.value}`;
    let pToDate = document.createElement('p');
    pToDate.textContent = `To date: ${dateOut.value}`;
    let pPeople = document.createElement('p');
    pPeople.textContent = `For ${peopleCount.value} people`;
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', editFunc);
    let continueBtn = document.createElement('button');
    continueBtn.textContent = 'Continue';
    continueBtn.classList.add('continue-btn');
    continueBtn.addEventListener('click', continueFunc);

    article.appendChild(h3);
    article.appendChild(pFromDate);
    article.appendChild(pToDate);
    article.appendChild(pPeople);

    li.appendChild(article);
    infoList.appendChild(li);
    infoList.appendChild(editBtn);
    infoList.appendChild(continueBtn);

    firstName.value = '';
    lastName.value = '';
    dateIn.value = '';
    dateOut.value = '';
    peopleCount.value = '';

    nextBtn.disabled = true;
    //console.log(date, month);
  }

  function editFunc(event) {
    //debugger;

    Array.from(event.target.parentElement.children).forEach((element) => {
      element.remove();
    });

    firstName.value = reservationInfo[0];
    lastName.value = reservationInfo[1];
    dateIn.value = reservationInfo[2];
    dateOut.value = reservationInfo[3];
    peopleCount.value = reservationInfo[4];

    nextBtn.disabled = false;
    reservationInfo = [];
    //debugger;
  }

  function continueFunc(event) {
    //debugger;

    const reservationConfirm = Array.from(
      event.target.parentElement.getElementsByTagName('li')
    )[0];

    Array.from(
      event.target.parentElement.getElementsByTagName('button')
    ).forEach((element) => {
      element.remove();
    });

    let confirmBtn = document.createElement('button');
    confirmBtn.textContent = 'Confirm';
    confirmBtn.classList.add('confirm-btn');
    confirmBtn.addEventListener('click', confirmFunc);
    let cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.addEventListener('click', cancelFunc);

    confirmList.appendChild(reservationConfirm);
    confirmList.appendChild(confirmBtn);
    confirmList.appendChild(cancelBtn);
    console.log('Hi');
  }

  function confirmFunc(event) {
    //debugger;
    nextBtn.disabled = false;

    Array.from(event.target.parentElement.children).forEach((element) => {
      element.remove();
    });

    verification.setAttribute('class', 'reservation-confirmed');
    verification.textContent = 'Confirmed.';
    console.log();
  }

  function cancelFunc(event) {
    //debugger;
    nextBtn.disabled = false;

    Array.from(event.target.parentElement.children).forEach((element) => {
      element.remove();
    });

    verification.setAttribute('class', 'reservation-cancelled');
    verification.textContent = 'Cancelled.';
    console.log();
  }
}
