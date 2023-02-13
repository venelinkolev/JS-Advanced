window.addEventListener('load', solve);

function solve() {
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const age = document.getElementById('age');
  const gender = document.getElementById('genderSelect');
  const dish = document.getElementById('task');
  const finished = document.getElementById('finished');
  const counter = document.getElementById('progress-count');
  const progress = document.getElementById('in-progress');

  const submit = document.getElementById('form-btn');
  submit.addEventListener('click', submitFunc);

  function submitFunc(event) {
    event.preventDefault();

    let fields = [];

    function createBtn(classBtn, nameBtn) {
      let button = document.createElement('button');
      button.textContent = nameBtn;
      button.setAttribute('class', classBtn);

      return button;
    }

    if (
      firstName.value == '' ||
      lastName.value == '' ||
      age.value == '' ||
      dish.value == ''
    )
      return;

    fields.push(
      firstName.value,
      lastName.value,
      age.value,
      gender.value,
      dish.value
    );

    let li = document.createElement('li');
    li.setAttribute('class', 'each-line');

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = `${firstName.value} ${lastName.value}`;
    let pGenderAge = document.createElement('p');
    pGenderAge.textContent = `${gender.value}, ${age.value}`;
    let pDish = document.createElement('p');
    pDish.textContent = `Dish description: ${dish.value}`;

    let editBtn = createBtn('edit-btn', 'Edit');
    let completeBtn = createBtn('complete-btn', 'Mark as complete');

    editBtn.addEventListener('click', editFunc);
    completeBtn.addEventListener('click', completeFunc);

    article.appendChild(h4);
    article.appendChild(pGenderAge);
    article.appendChild(pDish);
    article.appendChild(editBtn);
    article.appendChild(completeBtn);

    li.appendChild(article);
    progress.appendChild(li);

    firstName.value = '';
    lastName.value = '';
    age.value = '';
    dish.value = '';

    let counterNumber = Number(counter.textContent);
    counterNumber += 1;
    counter.textContent = counterNumber;

    const clearBtn = document.getElementById('clear-btn');
    clearBtn.addEventListener('click', clearFunc);

    function editFunc() {
      li.remove();

      counterNumber = Number(counter.textContent);
      counterNumber -= 1;
      counter.textContent = counterNumber;

      firstName.value = fields[0];
      lastName.value = fields[1];
      age.value = fields[2];
      gender.value = fields[3];
      dish.value = fields[4];

      console.log('Edit');
    }

    function completeFunc() {
      li.remove();

      finished.appendChild(li);

      counterNumber = Number(counter.textContent);
      counterNumber -= 1;
      counter.textContent = counterNumber;

      completeBtn.remove();
      editBtn.remove();

      console.log('Complete');
    }

    function clearFunc() {
      Array.from(finished.querySelectorAll('li')).forEach((artcle) => {
        artcle.remove();
      });

      console.log('Clear');
    }

    console.log('OK');
  }
}
