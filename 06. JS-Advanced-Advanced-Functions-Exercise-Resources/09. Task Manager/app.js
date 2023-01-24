function solve(event) {
  //debugger;
  const addButton = document
    .getElementById('add')
    .addEventListener('click', add);
  let section = Array.from(document.querySelectorAll('section'));
  //   const open = Array.from(document.querySelectorAll('section'))[1].children[1];
  //   const inProgress = Array.from(document.querySelectorAll('section'))[2]
  //     .children[1];
  //   const complete = Array.from(document.querySelectorAll('section'))[3]
  //     .children[1];

  const [infoTask, open, inProgress, complete] = section.map(
    (element) => (element = element.children[1])
  );

  const info = {
    task: document.getElementById('task'),
    description: document.getElementById('description'),
    date: document.getElementById('date'),
  };

  function add(event) {
    event.preventDefault();
    debugger;

    const article = document.createElement('article');
    //if (task.value !== '' && description.value !== '' && date.value !== '') {
    const h = document.createElement('h3');
    h.textContent = info.task.value;
    const pDesc = document.createElement('p');
    pDesc.textContent = `Description: ${info.description.value}`;
    const pDate = document.createElement('p');
    pDate.textContent = `Due Date: ${info.date.value}`;
    const divButtons = document.createElement('div');
    divButtons.classList.add('flex');
    const buttonStart = makeButtons('green', 'Start');
    const buttonDelete = makeButtons('red', 'Delete');
    const buttonFinish = makeButtons('orange', 'Finish');

    divButtons.appendChild(buttonStart);
    divButtons.appendChild(buttonDelete);

    article.appendChild(h);
    article.appendChild(pDesc);
    article.appendChild(pDate);
    article.appendChild(divButtons);

    open.appendChild(article);

    //debugger;

    info.task.value = '';
    info.description.value = '';
    info.date.value = '';

    buttonStart.addEventListener('click', () => {
      inProgress.appendChild(article);
      buttonStart.remove();
      divButtons.appendChild(buttonFinish);
      console.log('Start');
    });
    buttonDelete.addEventListener('click', () => {
      article.remove();
      console.log('Delete');
    });
    buttonFinish.addEventListener('click', () => {
      complete.appendChild(article);
      divButtons.remove();
      console.log('Finish');
    });

    function makeButtons(classBtn, contextBtn) {
      //debugger;
      let nameBtn = document.createElement('button');
      nameBtn.classList.add(classBtn);
      nameBtn.textContent = contextBtn;

      return nameBtn;
    }
    //}
  }
}
