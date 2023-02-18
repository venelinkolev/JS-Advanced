function solve() {
  const recipientName = document.getElementById('recipientName');
  const title = document.getElementById('title');
  const message = document.getElementById('message');

  const list = document.getElementById('list');
  const sentList = document.querySelector('.sent-list');
  const deleteList = document.querySelector('.delete-list');

  const addList = document.getElementById('add');
  addList.addEventListener('click', addListFunc);

  const reset = document.getElementById('reset');

  function resetFunc() {
    recipientName.value = '';
    title.value = '';
    message.value = '';

    console.log('Reset');
  }

  function res(event) {
    event.preventDefault();
    resetFunc();
  }

  reset.addEventListener('click', res);

  function addListFunc(event) {
    event.preventDefault();

    if (recipientName.value == '' || title.value == '' || message.value == '')
      return;

    let li = document.createElement('li');

    let h4Title = document.createElement('h4');
    let h4Recipient = document.createElement('h4');
    let spanMessage = document.createElement('span');
    let divBtn = document.createElement('div');
    h4Title.textContent = `Title: ${title.value}`;
    h4Recipient.textContent = `Recipient Name: ${recipientName.value}`;
    spanMessage.textContent = `${message.value}`;
    divBtn.setAttribute('id', 'list-action');

    let sendBtn = document.createElement('button');
    sendBtn.setAttribute('type', 'submit');
    sendBtn.setAttribute('id', 'send');
    sendBtn.textContent = 'Send';
    sendBtn.addEventListener('click', sendFunc);

    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('type', 'submit');
    sendBtn.setAttribute('id', 'delete');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteFunc);

    divBtn.appendChild(sendBtn);
    divBtn.appendChild(deleteBtn);

    li.appendChild(h4Title);
    li.appendChild(h4Recipient);
    li.appendChild(spanMessage);
    li.appendChild(divBtn);

    list.appendChild(li);

    // recipientName.value = '';
    // title.value = '';
    // message.value = '';
    resetFunc();
    let divsend = document.createElement('div');
    function sendFunc(event) {
      //debugger;
      let feilds = Array.from(
        event.target.parentElement.parentElement.querySelectorAll('h4')
      );

      let textArray = [];
      feilds.forEach((element) => {
        let current = element.textContent.split(' ');
        textArray.push(current[current.length - 1]);
      });

      console.log(textArray);

      li.remove();

      li = document.createElement('li');

      let spanTo = document.createElement('span');
      spanTo.textContent = `To: ${textArray[1]}`;
      let spanTitle = document.createElement('span');
      spanTitle.textContent = `Title: ${textArray[0]}`;
      divsend.setAttribute('class', 'btn');
      deleteBtn.setAttribute('class', 'delete');
      divsend.appendChild(deleteBtn);

      li.appendChild(spanTo);
      li.appendChild(spanTitle);
      li.appendChild(divsend);

      sentList.appendChild(li);

      console.log('Send');
    }

    function deleteFunc(event) {
      //debugger;
      if (event.target.parentElement.id == 'list-action') {
        let feilds = Array.from(
          event.target.parentElement.parentElement.querySelectorAll('h4')
        );

        let textArray = [];
        feilds.forEach((element) => {
          let current = element.textContent.split(' ');
          textArray.push(current[current.length - 1]);
        });

        console.log(textArray);

        li.remove();

        li = document.createElement('li');

        let spanTo = document.createElement('span');
        spanTo.textContent = `To: ${textArray[1]}`;
        let spanTitle = document.createElement('span');
        spanTitle.textContent = `Title: ${textArray[0]}`;
        //   let divsend = document.createElement('div');
        //   divsend.setAttribute('class', 'btn');
        //   deleteBtn.setAttribute('class', 'delete');
        //   divsend.appendChild(deleteBtn);

        li.appendChild(spanTo);
        li.appendChild(spanTitle);
        //li.appendChild(divsend);

        deleteList.appendChild(li);
      } else {
        divsend.remove();
        deleteList.appendChild(li);
      }

      console.log('Delete');
    }
  }
}
solve();
