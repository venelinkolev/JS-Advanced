window.addEventListener('load', solve);

function solve() {
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const age = document.getElementById('age');
  const storyTitle = document.getElementById('story-title');
  const genre = document.getElementById('genre');
  const story = document.getElementById('story');
  const preview = document.getElementById('preview-list');
  const main = document.getElementById('main');
  const div = document.querySelector('.form-wrapper');
  const sideWrapper = document.getElementById('side-wrapper');
  //debugger;
  const publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', publishFunc);

  function publishFunc(event) {
    event.preventDefault();

    if (
      firstName.value == '' ||
      lastName.value == '' ||
      age.value == '' ||
      storyTitle.value == '' ||
      story.value == ''
    ) {
      return;
    }

    let inputFields = [];
    inputFields.push(
      firstName.value,
      lastName.value,
      age.value,
      storyTitle.value,
      genre.value,
      story.value
    );

    let li = document.createElement('li');
    li.setAttribute('class', 'story-info');

    let article = document.createElement('article');
    let h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstName.value} ${lastName.value}`;
    let pAge = document.createElement('p');
    pAge.textContent = `Age: ${age.value}`;
    let pTitle = document.createElement('p');
    pTitle.textContent = `Title: ${storyTitle.value}`;
    let pGenre = document.createElement('p');
    pGenre.textContent = `Genre: ${genre.value}`;
    let pText = document.createElement('p');
    pText.textContent = story.value;

    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pText);

    li.appendChild(article);

    let saveBtn = createBtn('Save Story', 'save-btn');
    let editBtn = createBtn('Edit Story', 'edit-btn');
    let deleteBtn = createBtn('Delete Story', 'delete-btn');
    saveBtn.addEventListener('click', saveFunc);
    editBtn.addEventListener('click', editFunc);
    deleteBtn.addEventListener('click', deleteFunc);

    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    preview.appendChild(li);

    firstName.value = '';
    lastName.value = '';
    age.value = '';
    storyTitle.value = '';
    genre.value = '';
    story.value = '';

    publishBtn.disabled = true;

    function createBtn(nameBtn, classBtn) {
      let button = document.createElement('button');
      button.textContent = nameBtn;
      button.setAttribute('class', classBtn);

      return button;
    }

    function saveFunc(event) {
      div.remove();
      sideWrapper.remove();

      let h1 = document.createElement('h1');
      h1.textContent = 'Your scary story is saved!';
      main.appendChild(h1);

      console.log('Save');
    }

    function editFunc(event) {
      firstName.value = inputFields[0];
      lastName.value = inputFields[1];
      age.value = Number(inputFields[2]);
      storyTitle.value = inputFields[3];
      genre.value = inputFields[4];
      story.value = inputFields[5];

      li.remove();

      publishBtn.disabled = false;

      console.log('Edit');
    }

    function deleteFunc(event) {
      li.remove();
      publishBtn.disabled = false;
      console.log('Delete');
    }
  }
}
