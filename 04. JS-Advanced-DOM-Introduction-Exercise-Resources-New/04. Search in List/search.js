function search() {
  let towns = Array.from(document.querySelectorAll('ul li'));
  let searchTown = document.getElementById('searchText').value;

  let counterMatches = 0;
  let resultMatches = document.getElementById('result');
  let isClear = false;

  for (let i of towns) {
    if (i.textContent.includes(searchTown)) {
      i.style.fontWeight = 'bold';
      i.style.textDecoration = 'underline';
      counterMatches++;
    } else {
      i.style.fontWeight = 'normal';
      i.style.textDecoration = 'none';
    }
    console.log(i.textContent);
  }
  resultMatches.textContent = `${counterMatches} matches found`;

  console.log(searchTown);
}
