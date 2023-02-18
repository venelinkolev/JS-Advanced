window.addEventListener('load', solve);

function solve() {
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const peopleCount = document.getElementById('people-count');
  const fromDate = document.getElementById('from-date');
  const daysCount = document.getElementById('days-count');
  const ticketInfoList = document.querySelector('.ticket-info-list');
  const confirmTicket = document.querySelector('.confirm-ticket');
  const body = document.getElementById('body');

  const main = document.getElementById('main');

  const nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', nextFunc);

  function nextFunc(event) {
    event.preventDefault();

    let fields = [];

    if (
      firstName.value == '' ||
      lastName.value == '' ||
      peopleCount.value == '' ||
      fromDate.value == '' ||
      daysCount.value == ''
    )
      return;

    fields.push(
      firstName.value,
      lastName.value,
      peopleCount.value,
      fromDate.value,
      daysCount.value
    );

    let li = document.createElement('li');
    li.setAttribute('class', 'ticket');

    let article = document.createElement('article');

    let h3 = document.createElement('h3');
    h3.textContent = `Name: ${firstName.value} ${lastName.value}`;
    let pFrom = document.createElement('p');
    pFrom.textContent = `From date: ${fromDate.value}`;
    let pDays = document.createElement('p');
    pDays.textContent = `For ${daysCount.value} days`;
    let pPeople = document.createElement('p');
    pPeople.textContent = `For ${peopleCount.value} people`;

    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', editFunc);

    let continueBtn = document.createElement('button');
    continueBtn.setAttribute('class', 'continue-btn');
    continueBtn.textContent = 'Continue';
    continueBtn.addEventListener('click', continueFunc);

    article.appendChild(h3);
    article.appendChild(pFrom);
    article.appendChild(pDays);
    article.appendChild(pPeople);

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(continueBtn);

    ticketInfoList.appendChild(li);

    firstName.value = '';
    lastName.value = '';
    peopleCount.value = '';
    fromDate.value = '';
    daysCount.value = '';

    nextBtn.disabled = true;

    function editFunc() {
      firstName.value = fields[0];
      lastName.value = fields[1];
      peopleCount.value = fields[2];
      fromDate.value = fields[3];
      daysCount.value = fields[4];

      nextBtn.disabled = false;

      li.remove();

      console.log('Edit');
    }

    function continueFunc() {
      editBtn.remove();
      continueBtn.remove();

      confirmTicket.appendChild(li);

      let confirmBtn = document.createElement('button');
      confirmBtn.textContent = 'Confirm';
      confirmBtn.classList.add('confirm-btn');
      confirmBtn.addEventListener('click', confirmFunc);
      let cancelBtn = document.createElement('button');
      cancelBtn.textContent = 'Cancel';
      cancelBtn.classList.add('cancel-btn');
      cancelBtn.addEventListener('click', cancelFunc);

      li.appendChild(confirmBtn);
      li.appendChild(cancelBtn);

      console.log('Continue');
    }

    function confirmFunc() {
      //add <h1> element with id="thank-you" and text "Thank you, have a nice day! " and  <button> with id="back-btn" and text "Back ".

      main.remove();

      let h1 = document.createElement('h1');
      h1.setAttribute('id', 'thank-you');
      h1.textContent = `Thank you, have a nice day!`;

      let backBtn = document.createElement('button');
      backBtn.setAttribute('id', 'back-btn');
      backBtn.textContent = 'Back';
      backBtn.addEventListener('click', backFunc);

      body.appendChild(h1);
      body.appendChild(backBtn);

      function backFunc() {
        console.log('Back');
      }

      console.log('Confirm');
    }

    function cancelFunc() {
      li.remove();

      nextBtn.disabled = false;

      console.log('Cancel');
    }

    console.log();
  }
}
