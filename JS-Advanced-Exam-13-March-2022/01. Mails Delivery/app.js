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

  reset.addEventListener('click', (event) => {
    event.preventDefault();
    resetFunc();
  });

  function resetFunc() {
    recipientName.value = '';
    title.value = '';
    message.value = '';

    console.log('Reset');
  }

  function addListFunc(event) {
    event.preventDefault();

    if (recipientName.value == '' || title.value == '' || message.value == '')
      return;

    const nameValue = recipientName.value;
    const titleValue = title.value;
    const messageValue = message.value;

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
    deleteBtn.setAttribute('id', 'delete');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteFunc);

    divBtn.appendChild(sendBtn);
    divBtn.appendChild(deleteBtn);

    li.appendChild(h4Title);
    li.appendChild(h4Recipient);
    li.appendChild(spanMessage);
    li.appendChild(divBtn);

    list.appendChild(li);

    resetFunc();

    let liSend = document.createElement('li');

    function sendFunc() {
      li.remove();

      let spanTo = document.createElement('span');
      spanTo.textContent = `To: ${nameValue}`;
      let spanTitle = document.createElement('span');
      spanTitle.textContent = `Title: ${titleValue}`;

      let divSend = document.createElement('div');
      divSend.setAttribute('class', 'btn');
      deleteBtn.getAttribute('id');
      deleteBtn.setAttribute('class', 'delete');

      divSend.appendChild(deleteBtn);

      liSend.appendChild(spanTo);
      liSend.appendChild(spanTitle);
      liSend.appendChild(divSend);

      sentList.appendChild(liSend);

      console.log('Send');
    }

    function deleteFunc(event) {
      li.remove();

      let liDelete = document.createElement('li');

      let spanTo = document.createElement('span');
      spanTo.textContent = `To: ${nameValue}`;
      let spanTitle = document.createElement('span');
      spanTitle.textContent = `Title: ${titleValue}`;

      liDelete.appendChild(spanTo);
      liDelete.appendChild(spanTitle);

      deleteList.appendChild(liDelete);

      liSend.remove();

      console.log('Delete');
    }
  }
}
solve();
