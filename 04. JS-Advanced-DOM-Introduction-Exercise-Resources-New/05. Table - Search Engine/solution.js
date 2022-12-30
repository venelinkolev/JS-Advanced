function solve() {
  document.querySelector('#searchBtn').addEventListener('click', onClick);

  function onClick() {
    let tableInfo = Array.from(document.querySelectorAll('tbody tr'));
    let searchInput = document.getElementById('searchField').value;

    console.log(searchInput);
    for (let row of tableInfo) {
      let rowInfo = Array.from(row.children);
      for (let text of rowInfo) {
        if (text.textContent.includes(searchInput)) {
          console.log(row);
          row.setAttribute('class', 'select');
          break;
        } else {
          row.removeAttribute('class');
        }
        //console.log(text.textContent);
      }
    }

    document.getElementById('searchField').value = '';
  }
}
// SECOND OPTION TO SOLVE THE PROBLEM
// ------------------------------------
//   function onClick() {
//     let tableInfo = Array.from(document.querySelectorAll('tbody tr'));
//     let searchInput = document.getElementById('searchField').value;

//     console.log(searchInput);

//     tableInfo.forEach((row) => {
//       row.classList.remove('select');
//     });

//     for (let row of tableInfo) {
//       let rowInfo = Array.from(row.children);
//       for (let text of rowInfo) {
//         if (text.textContent.includes(searchInput)) {
//           console.log(row);
//           row.className = 'select';
//           break;
//         }
//       }
//     }

//     document.getElementById('searchField').value = '';
//   }
