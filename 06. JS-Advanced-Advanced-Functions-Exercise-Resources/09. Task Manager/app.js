function solve(event) {
  const addButton = document
    .getElementById('add')
    .addEventListener('click', add);
  const task = document.getElementById('task');
  const description = document.getElementById('description');
  const date = document.getElementById('date');
  const open = document.getElementsByTagName('section')[1].children[1];
  const inProgress = document.getElementsByTagName('section')[2].children[1];
  const complete = document.getElementsByTagName('section')[3].children[1];

  function add(event) {
    event.preventDefault();

    //debugger;
    if (task.value !== '' && description.value !== '' && date.value !== '') {
      let article = document.createElement('article');
      let h = document.createElement('h3');
      h.textContent = task.value;
      let pDesc = document.createElement('p');
      pDesc.textContent = description.value;
      let pDate = document.createElement('p');
      pDate.textContent = date.value;
      let divButtons = document.createElement('div');
      divButtons.classList.add('flex');
      let buttonStart = document.createElement('button');
      buttonStart.classList.add('green');
      buttonStart.textContent = 'Start';
      let buttonDelete = document.createElement('button');
      buttonDelete.classList.add('red');
      buttonDelete.textContent = 'Delete';

      divButtons.appendChild(buttonStart);
      divButtons.appendChild(buttonDelete);

      article.appendChild(h);
      article.appendChild(pDesc);
      article.appendChild(pDate);
      article.appendChild(divButtons);

      open.appendChild(article);

      debugger;
      task.value = '';
      description.value = '';
      date.value = '';

      open.addEventListener('click', buttons);
      inProgress.addEventListener('click', buttons);
      complete.addEventListener('click', buttons);

      function buttons(event) {
        debugger;
        if (event.target.textContent == 'Start') {
          inProgress.appendChild(article);
          buttonStart.remove();
          console.log('Start');
          return;
        }
        if (event.target.textContent == 'Delete') {
          article.remove();
          console.log('Delete');
          return;
        }
        if (event.target.textContent == 'Finish') {
          console.log('Finish');
          return;
        }
        return;
      }
    }
  }
}
