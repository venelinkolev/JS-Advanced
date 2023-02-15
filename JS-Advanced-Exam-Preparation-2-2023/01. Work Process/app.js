function solve() {
  const firstName = document.getElementById('fname');
  const lastName = document.getElementById('lname');
  const email = document.getElementById('email');
  const birth = document.getElementById('birth');
  const position = document.getElementById('position');
  const salary = document.getElementById('salary');

  const add = document.getElementById('add-worker');
  add.addEventListener('click', addWorker);

  const tbody = document.getElementById('tbody');
  const sum = document.getElementById('sum');
  let totalSum = 0;
  let fields = [];

  function addWorker(event) {
    event.preventDefault();

    if (
      firstName.value == '' ||
      lastName.value == '' ||
      email.value == '' ||
      birth.value == '' ||
      position.value == '' ||
      salary.value == ''
    )
      return;

    let tr = document.createElement('tr');

    let tdFirstName = document.createElement('td');
    tdFirstName.textContent = firstName.value;
    let tdLastName = document.createElement('td');
    tdLastName.textContent = lastName.value;
    let tdEmail = document.createElement('td');
    tdEmail.textContent = email.value;
    let tdBirth = document.createElement('td');
    tdBirth.textContent = birth.value;
    let tdPosition = document.createElement('td');
    tdPosition.textContent = position.value;
    let tdSalary = document.createElement('td');
    tdSalary.textContent = salary.value;
    let tdBtn = document.createElement('td');

    let firedBtn = document.createElement('button');
    firedBtn.textContent = 'Fired';
    firedBtn.setAttribute('class', 'fired');
    firedBtn.addEventListener('click', firedFunc);

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.setAttribute('class', 'edit');
    editBtn.addEventListener('click', editFunc);

    tdBtn.appendChild(firedBtn);
    tdBtn.appendChild(editBtn);

    tr.appendChild(tdFirstName);
    tr.appendChild(tdLastName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdBirth);
    tr.appendChild(tdPosition);
    tr.appendChild(tdSalary);

    tr.appendChild(tdBtn);

    tbody.appendChild(tr);

    sum.textContent = (Number(sum.textContent) + Number(salary.value)).toFixed(
      2
    );

    firstName.value = '';
    lastName.value = '';
    email.value = '';
    birth.value = '';
    position.value = '';
    salary.value = '';

    function firedFunc(event) {
      debugger;
      let parent = event.target.parentElement.parentElement;

      Array.from(parent.querySelectorAll('td')).forEach((element) => {
        fields.push(element.textContent);
      });

      parent.remove();

      sum.textContent = (Number(sum.textContent) - Number(fields[5])).toFixed(
        2
      );

      fields = [];

      console.log('Fired');
    }

    function editFunc(event) {
      let parent = event.target.parentElement.parentElement;
      Array.from(parent.querySelectorAll('td')).forEach((element) => {
        fields.push(element.textContent);
      });

      firstName.value = fields[0];
      lastName.value = fields[1];
      email.value = fields[2];
      birth.value = fields[3];
      position.value = fields[4];
      salary.value = fields[5];

      parent.remove();

      sum.textContent = (Number(sum.textContent) - Number(fields[5])).toFixed(
        2
      );

      fields = [];

      //debugger;

      console.log('Edit');
    }

    console.log();
  }
}
solve();
