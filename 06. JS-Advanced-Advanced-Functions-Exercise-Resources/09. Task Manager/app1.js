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
      let buttonStart = makeButtons('green', 'Start');
      let buttonDelete = makeButtons('red', 'Delete');
      let buttonFinish = makeButtons('orange', 'Finish');

      buttonStart.addEventListener('click', buttons);
      buttonDelete.addEventListener('click', buttons);
      buttonFinish.addEventListener('click', buttons);

      divButtons.appendChild(buttonStart);
      divButtons.appendChild(buttonDelete);

      article.appendChild(h);
      article.appendChild(pDesc);
      article.appendChild(pDate);
      article.appendChild(divButtons);

      open.appendChild(article);

      //debugger;
      task.value = '';
      description.value = '';
      date.value = '';

      function makeButtons(classBtn, contextBtn) {
        //debugger;
        let nameBtn = document.createElement('button');
        nameBtn.classList.add(classBtn);
        nameBtn.textContent = contextBtn;

        return nameBtn;
      }

      function buttons(event) {
        //debugger;
        if (event.target.textContent == 'Start') {
          inProgress.appendChild(article);
          buttonStart.remove();
          divButtons.appendChild(buttonFinish);
          console.log('Start');
          return;
        }
        if (event.target.textContent == 'Delete') {
          article.remove();
          console.log('Delete');
          return;
        }
        if (event.target.textContent == 'Finish') {
          complete.appendChild(article);
          divButtons.remove();
          console.log('Finish');
          return;
        }
      }
    }
  }
}
