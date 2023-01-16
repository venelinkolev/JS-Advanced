function encodeAndDecodeMessages() {
  document.querySelector('main').addEventListener('click', change);

  function change(event) {
    const button = event.target.nodeName;

    if (button !== 'BUTTON') {
      return;
    } else {
      const currentButton = event.target.parentElement.querySelector('button');
      debugger;
      if (currentButton.textContent === 'Encode and send it') {
        const textEncodeArea =
          event.target.parentElement.querySelector('textarea');

        const receivedMessageArea = event.target.parentElement.parentElement
          .querySelectorAll('div')[1]
          .querySelector('textarea');

        let message = textEncodeArea.value;
        let buffer = '';

        for (let i = 0; i < message.length; i++) {
          let currentChar = message[i].charCodeAt() + 1;
          buffer += String.fromCharCode(currentChar) + '';
          //console.log(currentChar);
        }

        console.log(buffer);
        receivedMessageArea.value = buffer;

        textEncodeArea.value = '';
      } else {
        debugger;
        const textDecodeArea =
          event.target.parentElement.querySelector('textarea');
        buffer = '';
        message = textDecodeArea.value;

        for (let i = 0; i < message.length; i++) {
          let currentChar = message[i].charCodeAt() - 1;
          buffer += String.fromCharCode(currentChar) + '';
          //console.log(currentChar);
        }

        textDecodeArea.value = buffer;
        //console.log(buffer, message);
      }
    }
  }
  console.log('TODO...');
}
