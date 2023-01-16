function create(words) {
  let content = document.getElementById('content');

  for (let string of words) {
    let div = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = string;
    p.style.display = 'none';
    div.appendChild(p);
    div.addEventListener('click', clicked);
    content.appendChild(div);
  }

  function clicked(event) {
    //debugger;
    event.target.children[0].style.display = 'block';
    console.log('clicked ');
  }
  console.log(content);
}
